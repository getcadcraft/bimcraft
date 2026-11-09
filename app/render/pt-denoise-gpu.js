/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: WGSL source and developer errors, never shown */
/**
 * pt-denoise-gpu.js — the denoiser's network on the graphics card (0.7 RN.5): the U-Net of pt-denoise.js as WebGPU compute, tile
 * by tile (one command buffer per tile: about 25 short dispatches, so no dispatch runs long), the input and output steps on the
 * CPU (pt-denoise.js prepare / finish). The same numbers as the CPU path to f32 rounding (tools/modelcraft-test/browser-pt.mjs).
 *
 *   const dn = await createGpuDenoiser(net, {adapter?, device?})   dn.run(rgb, alb, nrm, w, h, {signal, onProgress}) → Float32Array
 *   dn.dispose()
 *
 * Buffers for the largest tile (core 256 + 2 × 96 overlap = 448², channel-major f32): the input (9 channels), two ping-pong
 * tensors (41 channels: the widest at full size), the four pooled skips. Weights: every layer's weights then biases, f32.
 */
import { LAYERS, prepare, finish, tilesFor, tileInput, placeTile } from './pt-denoise.js';
import { gpuAdapter } from './pt-gpu.js';

const WG = 8;
const HEAD = `struct P { W: u32, H: u32, I: u32, O: u32, wOff: u32, bOff: u32, cx: u32, relu: u32 }
@group(0) @binding(0) var<uniform> p: P;
@group(0) @binding(1) var<storage, read> X: array<f32>;
@group(0) @binding(2) var<storage, read> S: array<f32>;
@group(0) @binding(3) var<storage, read_write> Y: array<f32>;
`;
// conv: 3 × 3, zero padding, bias, ReLU (X = input, S = weights); one output value per invocation, summed in the CPU path's order
const CONV = HEAD + `@compute @workgroup_size(${WG}, ${WG}, 1) fn main(@builtin(global_invocation_id) g: vec3u) {
  let x = g.x; let y = g.y; let o = g.z;
  if (x >= p.W || y >= p.H || o >= p.O) { return; }
  let plane = p.W * p.H;
  var s = S[p.bOff + o];
  for (var i = 0u; i < p.I; i++) {
    let wo = p.wOff + (o * p.I + i) * 9u;
    let xi = i * plane;
    for (var ky = 0u; ky < 3u; ky++) {
      let yy = i32(y) + i32(ky) - 1;
      if (yy < 0 || yy >= i32(p.H)) { continue; }
      for (var kx = 0u; kx < 3u; kx++) {
        let xx = i32(x) + i32(kx) - 1;
        if (xx < 0 || xx >= i32(p.W)) { continue; }
        s += S[wo + ky * 3u + kx] * X[xi + u32(yy) * p.W + u32(xx)];
      }
    }
  }
  Y[o * plane + y * p.W + x] = select(s, max(s, 0.0), p.relu == 1u);
}`;
// pool: 2 × 2 max (X → Y at half size; W, H = Y's)
const POOL = HEAD + `@compute @workgroup_size(${WG}, ${WG}, 1) fn main(@builtin(global_invocation_id) g: vec3u) {
  let x = g.x; let y = g.y; let c = g.z;
  if (x >= p.W || y >= p.H || c >= p.O) { return; }
  let W2 = p.W * 2u;
  let s = c * W2 * p.H * 2u + y * 2u * W2 + x * 2u;
  Y[c * p.W * p.H + y * p.W + x] = max(max(X[s], X[s + 1u]), max(X[s + W2], X[s + W2 + 1u]));
}`;
// upsample X (half size, cx channels) × 2 nearest, then the skip S (full size): Y = [up(X), S], W, H = the skip's, O = all channels
const UPCAT = HEAD + `@compute @workgroup_size(${WG}, ${WG}, 1) fn main(@builtin(global_invocation_id) g: vec3u) {
  let x = g.x; let y = g.y; let c = g.z;
  if (x >= p.W || y >= p.H || c >= p.O) { return; }
  let plane = p.W * p.H;
  if (c < p.cx) { let hw = p.W / 2u; Y[c * plane + y * p.W + x] = X[c * hw * (p.H / 2u) + (y / 2u) * hw + x / 2u]; }
  else { Y[c * plane + y * p.W + x] = S[(c - p.cx) * plane + y * p.W + x]; }
}`;

export async function createGpuDenoiser(net, { adapter = null, device = null, core = 256, overlap = 96 } = {}) {
  if (!device) {
    adapter = adapter || (await gpuAdapter());
    if (!adapter) throw Object.assign(new Error('no WebGPU'), { code: 'no_webgpu' });
    device = await adapter.requestDevice().catch((e) => { throw Object.assign(new Error(String(e && e.message || e)), { code: 'gpu_setup' }); });
  }
  const own = [], U = GPUBufferUsage, T = net.tensors;
  const buf = (bytes, usage) => { const b = device.createBuffer({ size: Math.max(16, Math.ceil(bytes / 16) * 16), usage }); own.push(b); return b; };
  // weights: every layer's weights then bias, offsets in floats
  const offs = {};
  let n = 0;
  for (const L of LAYERS) { offs[L] = { w: n, b: n + T[L + '.weight'].data.length }; n += T[L + '.weight'].data.length + T[L + '.bias'].data.length; }
  const wts = new Float32Array(n);
  for (const L of LAYERS) { wts.set(T[L + '.weight'].data, offs[L].w); wts.set(T[L + '.bias'].data, offs[L].b); }
  const WB = buf(wts.byteLength, U.STORAGE | U.COPY_DST);
  device.queue.writeBuffer(WB, 0, wts);
  const MAX = Math.ceil((core + 2 * overlap) / 16) * 16, P = MAX * MAX, F = 4;
  const B = { inp: buf(9 * P * F, U.STORAGE | U.COPY_DST), A: buf(41 * P * F, U.STORAGE | U.COPY_SRC), Bb: buf(41 * P * F, U.STORAGE | U.COPY_SRC),
    p1: buf(32 * (P / 4) * F, U.STORAGE), p2: buf(32 * (P / 16) * F, U.STORAGE), p3: buf(32 * (P / 64) * F, U.STORAGE), p4: buf(32 * (P / 256) * F, U.STORAGE) };
  const dummy = buf(16, U.STORAGE);
  const read = buf(3 * P * F, U.MAP_READ | U.COPY_DST);
  device.pushErrorScope('validation');
  // one explicit layout for all three (an 'auto' layout drops the bindings a shader does not read)
  const BGL = device.createBindGroupLayout({ entries: [
    { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
    { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
    { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
    { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }] });
  const layout = device.createPipelineLayout({ bindGroupLayouts: [BGL] });
  const pipe = (code) => device.createComputePipeline({ layout, compute: { module: device.createShaderModule({ code }), entryPoint: 'main' } });
  const PIPES = { conv: pipe(CONV), pool: pipe(POOL), up: pipe(UPCAT) };
  // the steps (kind, layer or channel counts, from, second, to, scale level: 0 full … 4 sixteenth)
  const steps = [
    ['conv', 'enc_conv0', 'inp', null, 'A', 0], ['conv', 'enc_conv1', 'A', null, 'Bb', 0], ['pool', 32, 'Bb', null, 'p1', 1],
    ['conv', 'enc_conv2', 'p1', null, 'A', 1], ['pool', 32, 'A', null, 'p2', 2],
    ['conv', 'enc_conv3', 'p2', null, 'A', 2], ['pool', 32, 'A', null, 'p3', 3],
    ['conv', 'enc_conv4', 'p3', null, 'A', 3], ['pool', 32, 'A', null, 'p4', 4],
    ['conv', 'enc_conv5a', 'p4', null, 'A', 4], ['conv', 'enc_conv5b', 'A', null, 'Bb', 4],
    ['up', [32, 32], 'Bb', 'p3', 'A', 3], ['conv', 'dec_conv4a', 'A', null, 'Bb', 3], ['conv', 'dec_conv4b', 'Bb', null, 'A', 3],
    ['up', [64, 32], 'A', 'p2', 'Bb', 2], ['conv', 'dec_conv3a', 'Bb', null, 'A', 2], ['conv', 'dec_conv3b', 'A', null, 'Bb', 2],
    ['up', [64, 32], 'Bb', 'p1', 'A', 1], ['conv', 'dec_conv2a', 'A', null, 'Bb', 1], ['conv', 'dec_conv2b', 'Bb', null, 'A', 1],
    ['up', [32, 9], 'A', 'inp', 'Bb', 0], ['conv', 'dec_conv1a', 'Bb', null, 'A', 0], ['conv', 'dec_conv1b', 'A', null, 'Bb', 0],
    ['conv', 'dec_conv0', 'Bb', null, 'A', 0],
  ];
  const U8 = steps.map(() => buf(32, U.UNIFORM | U.COPY_DST));
  const groups = steps.map(([kind, , from, second, to], i) => device.createBindGroup({
    layout: BGL,
    entries: [{ binding: 0, resource: { buffer: U8[i] } }, { binding: 1, resource: { buffer: B[from] } },
      { binding: 2, resource: { buffer: kind === 'conv' ? WB : second ? B[second] : dummy } }, { binding: 3, resource: { buffer: B[to] } }],
  }));
  const err = await device.popErrorScope();
  if (err) throw Object.assign(new Error(err.message), { code: 'gpu_setup' });

  async function runTile(x) {
    const W0 = x.w, H0 = x.h;
    device.queue.writeBuffer(B.inp, 0, x.d);
    const enc = device.createCommandEncoder(), pass = enc.beginComputePass();
    steps.forEach(([kind, what], i) => {
      const lv = steps[i][5], W = W0 >> lv, H = H0 >> lv;
      let I = 0, O = 0, wOff = 0, bOff = 0, cx = 0, relu = 1;
      if (kind === 'conv') { [O, I] = T[what + '.weight'].dims; wOff = offs[what].w; bOff = offs[what].b; relu = 1; }
      else if (kind === 'pool') O = what;
      else { cx = what[0]; O = what[0] + what[1]; }
      device.queue.writeBuffer(U8[i], 0, new Uint32Array([W, H, I, O, wOff, bOff, cx, relu]));
      pass.setPipeline(PIPES[kind]); pass.setBindGroup(0, groups[i]);
      pass.dispatchWorkgroups(Math.ceil(W / WG), Math.ceil(H / WG), O);
    });
    pass.end();
    enc.copyBufferToBuffer(B.A, 0, read, 0, 3 * W0 * H0 * F);
    device.queue.submit([enc.finish()]);
    await read.mapAsync(GPUMapMode.READ, 0, 3 * W0 * H0 * F);
    const y = new Float32Array(read.getMappedRange(0, 3 * W0 * H0 * F).slice(0));
    read.unmap();
    return y;
  }
  return {
    async run(rgb, alb, nrm, w, h, { signal = null, onProgress = null } = {}) {
      const { input, scale } = prepare(rgb, alb, nrm, w, h), out3 = new Float32Array(3 * w * h), tiles = tilesFor(w, h, core, overlap);
      for (let i = 0; i < tiles.length; i++) {
        if (signal?.aborted) throw Object.assign(new Error('stopped'), { code: 'cancelled' });
        const x = tileInput(input, w, h, tiles[i]);
        placeTile(out3, w, h, tiles[i], await runTile(x), x.w, x.h);
        onProgress?.((i + 1) / tiles.length);
      }
      return finish(out3, w, h, scale);
    },
    dispose() { for (const b of own) b.destroy(); device.destroy(); },
  };
}
