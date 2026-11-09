/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pt-gpu.js — the WebGPU host of the wavefront path tracer (0.7 RN.1; RENDER-SPEC § 8). Takes pt-pack.js's buffers, builds the
 * stages of pt-wgsl.js, and renders progressively: sample s of every pixel, tile by tile, each tile one submitted chain of
 * dispatches (generate → per bounce: args, intersect, shade, args, shadow) with no read-back between bounces. The tile shrinks
 * when a chain takes longer than CHAIN_MS (so no dispatch runs long enough for the system's GPU watchdog, and the page stays
 * live) and grows back when chains are quick.
 *
 *   gpuAdapter() → Promise<GPUAdapter | null>            null where WebGPU is missing (the WebGL engine runs then)
 *   createGpuTracer(packed, {adapter, mask}) → Promise<tracer>
 *   tracer.run({spp, deadline, signal, onPreview(bytes, w, h, samples), previewMs}) → Promise<{samples, stopped, budget}>
 *            continues from tracer.samples (Stop, then run again = Resume: the same sample sequence, RENDER-SPEC § 4)
 *   tracer.image(exposure, wb, post) → Promise<Uint8ClampedArray RGBA>   the display image (§ 2) of what is accumulated (wb: AP1
 *                                                     gains; post: pt-post.js settings — its per-pixel part, RN.8)
 *   tracer.accum() → Promise<Float32Array>                      the accumulation buffer (Σr, Σg, Σb, samples per pixel; AP1)
 *   tracer.aux() → Promise<Float32Array | null>                 RN.6 render elements + light groups (RENDER-SPEC § 7)
 *   tracer.renderRange(s0, spp, {signal}) → Promise<Float32Array w·h·4>   Σ of exactly samples s0 … s0+spp−1 of every pixel,
 *            beside the progressive picture (its accumulation is kept aside and put back): `compute`'s hybrid (CU.6) and bench
 *   tracer.samples, tracer.stats {chains, tile, lastChainMs}, tracer.dispose()
 *   tracer.restart(header?) — start the picture again (IPR: a new camera in the header); tracer.region = [x0, y0, x1, y1] | null
 *   tracer.setAdaptive({noise, min} | null) — RN.7 adaptive sampling (RENDER-SPEC § 3.2): from the next sample, pixels that have
 *            converged get no more; run() stops early (result.converged) when none is left; renderRange never uses it
 */
import { STAGES, STAGE_BINDINGS, BIND, stageSource, WG, PATH_BYTES, SHADOW_BYTES } from './pt-wgsl.js';
import { TEX_SIZE } from './pt-spec.js';
import { VIEWS } from './pt-post.js';
import { tables, TABLE_FLOATS } from './pt-tables.js';
import { ADAPT, minPasses } from './pt-adapt.js';

const CHAIN_MS = 100, TILE_MAX = 512, TILE_MIN = 32, LIGHT_CHUNK = 32768;   // RN.7: light paths a dispatch (each queues ≤ one connection a bounce)

export async function gpuAdapter() {
  try {
    if (typeof navigator === 'undefined' || !navigator.gpu) return null;
    return (await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' })) || null;
  } catch { return null; }
}

export async function createGpuTracer(pk, { adapter, mask }) {
  adapter = adapter || (await gpuAdapter());
  if (!adapter) throw Object.assign(new Error('no WebGPU'), { code: 'no_webgpu' });   // i18n-ignore: caught by the caller
  // RN.6: the render elements and light groups buffer (STRIDE vec4s per pixel; none = a 16-byte stand-in)
  const auxBytes = pk.w * pk.h * (pk.auxStride || 0) * 16;
  if (auxBytes > Math.min(adapter.limits.maxStorageBufferBindingSize, adapter.limits.maxBufferSize)) throw Object.assign(new Error('render elements too large for this graphics card'), { code: 'aux_too_big' });   // i18n-ignore: caught by the caller
  const need = Math.max(pk.tris.byteLength, pk.attrs.byteLength, pk.nodes.byteLength, pk.w * pk.h * 16, TILE_MAX * TILE_MAX * PATH_BYTES, auxBytes);
  const limits = {};
  if (need > 134217728) limits.maxStorageBufferBindingSize = Math.min(adapter.limits.maxStorageBufferBindingSize, need);
  if (need > 268435456) limits.maxBufferSize = Math.min(adapter.limits.maxBufferSize, need);
  // a driver that cannot start the device (Windows: dxcompiler.dll error 87) rejects here: tagged so the caller falls back to WebGL
  const device = await adapter.requestDevice({ requiredLimits: limits }).catch((e) => { throw Object.assign(new Error(String(e && e.message || e)), { code: 'gpu_setup' }); });
  let lost = null;
  device.lost.then((info) => { lost = info; });
  const U = GPUBufferUsage;
  const w = pk.w, h = pk.h, maxB = pk.maxBounces;
  const hasC = !!pk.caustics, cPaths = pk.causticPaths | 0;   // RN.7: caustics by light tracing
  const cqBytes = hasC ? LIGHT_CHUNK * Math.max(1, pk.maxBounces) * 80 : 16;
  const own = [];
  const buf = (size, usage, data = null) => {
    const b = device.createBuffer({ size: Math.max(16, Math.ceil(size / 16) * 16), usage, mappedAtCreation: !!data });
    if (data) { new Uint8Array(b.getMappedRange()).set(new Uint8Array(data.buffer || data, data.byteOffset || 0, data.byteLength)); b.unmap(); }
    own.push(b);
    return b;
  };
  // the blue-noise mask: 4 channel bytes of one pixel per u32
  const bnWords = new Uint32Array(4096);
  for (let i = 0; i < 4096; i++) bnWords[i] = mask[i * 4] | (mask[i * 4 + 1] << 8) | (mask[i * 4 + 2] << 16) | (mask[i * 4 + 3] << 24);
  const tabWords = new Float32Array(Math.ceil(TABLE_FLOATS / 4) * 4);
  tabWords.set(tables().words);
  const B = {
    tab: buf(tabWords.byteLength, U.UNIFORM, tabWords),
    header: buf(512, U.UNIFORM | U.COPY_DST, new Uint8Array(pk.header)),
    pass: buf(32, U.UNIFORM | U.COPY_DST),
    bn: buf(16384, U.UNIFORM, bnWords),
    lights: buf(pk.ldat.byteLength, U.STORAGE, pk.ldat),   // RN.3: every light, the tree, IES grids, the sky's map (§ 6.8)
    tris: buf(pk.tris.byteLength, U.STORAGE, pk.tris),
    nodes: buf(pk.nodes.byteLength, U.STORAGE, pk.nodes),
    attrs: buf(pk.attrs.byteLength, U.STORAGE, pk.attrs),
    mats: buf(pk.mats.byteLength, U.STORAGE, pk.mats),
    q0: buf(TILE_MAX * TILE_MAX * PATH_BYTES, U.STORAGE),
    q1: buf(TILE_MAX * TILE_MAX * PATH_BYTES, U.STORAGE),
    shq: buf(TILE_MAX * TILE_MAX * SHADOW_BYTES, U.STORAGE),
    accum: buf(w * h * 16, U.STORAGE | U.COPY_SRC | U.COPY_DST),
    counts: buf(32, U.STORAGE | U.COPY_DST | U.COPY_SRC),
    args: buf(32, U.STORAGE | U.INDIRECT),
    out: buf(w * h * 4, U.STORAGE | U.COPY_SRC),
    view: buf(32, U.UNIFORM | U.COPY_DST),
    aux: buf(Math.max(16, auxBytes), U.STORAGE | U.COPY_SRC | U.COPY_DST),
    adp: buf(w * h * 16, U.STORAGE | U.COPY_DST),   // RN.7: per pixel S1, S2, Y before, N before
    act: buf(w * h * 4, U.STORAGE | U.COPY_DST),    // RN.7: 1 = the pixel is still sampled (written 1 by setAdaptive, always bound)
    adpar: buf(16, U.UNIFORM | U.COPY_DST),
    csp: buf(hasC ? w * h * 12 : 16, U.STORAGE | U.COPY_DST),   // RN.7: the light tracer's splats (fixed point, 3 per pixel)
    cq: buf(cqBytes, U.STORAGE | U.COPY_DST),                   // RN.7: camera connections waiting for their visibility test (a slot a path and bounce)
  };
  const layers = Math.max(1, pk.counts.textures), texSize = pk.counts.textures ? TEX_SIZE : 1;
  const tex = device.createTexture({ size: [texSize, texSize, layers], format: 'rgba8unorm', usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST, dimension: '2d' });
  if (pk.counts.textures) device.queue.writeTexture({ texture: tex }, pk.textures, { bytesPerRow: TEX_SIZE * 4, rowsPerImage: TEX_SIZE }, [TEX_SIZE, TEX_SIZE, layers]);
  const samp = device.createSampler({ addressModeU: 'repeat', addressModeV: 'repeat', magFilter: 'linear', minFilter: 'linear' });

  device.pushErrorScope('validation');
  const pipes = {};
  const stages = STAGES.filter((st) => hasC || (st !== 'lgen' && st !== 'lshade' && st !== 'cconn' && st !== 'cmerge'));   // the light tracer's stages only when the pack asks for it
  await Promise.all(stages.map(async (st) => {
    const code = stageSource(st), module = device.createShaderModule({ code, label: 'pt-' + st });
    const info = await module.getCompilationInfo();
    const bad = info.messages.filter((m) => m.type === 'error');
    if (bad.length) {
      const lines = code.split('\n');
      throw Object.assign(new Error('pt-' + st + ': ' + bad.slice(0, 4).map((m) => m.lineNum + ':' + m.linePos + ' ' + m.message + ' | ' + (lines[m.lineNum - 1] || '').trim()).join(' ; ')), { code: 'gpu_setup' });
    }
    pipes[st] = await device.createComputePipelineAsync({ layout: 'auto', compute: { module, entryPoint: 'main' }, label: 'pt-' + st });
  }));
  const res = (name, parity) => {
    if (name === 'rin') return { buffer: parity ? B.q1 : B.q0 };
    if (name === 'rout') return { buffer: parity ? B.q0 : B.q1 };
    if (name === 'tex') return tex.createView({ dimension: '2d-array' });
    if (name === 'samp') return samp;
    return { buffer: B[name] };
  };
  const group = (st, parity) => device.createBindGroup({
    layout: pipes[st].getBindGroupLayout(0),
    entries: STAGE_BINDINGS[st].map((name) => ({ binding: BIND[name], resource: (st === 'gen' || st === 'lgen') && name === 'rout' ? { buffer: B.q0 } : res(name, parity) })),
  });
  const G = {};
  for (const st of stages) G[st] = [group(st, 0), group(st, 1)];
  const err = await device.popErrorScope();
  if (err) throw Object.assign(new Error(err.message), { code: 'gpu_setup' });

  const tracer = { samples: 0, stats: { chains: 0, tile: [Math.min(TILE_MAX, w), Math.min(TILE_MAX, h)], lastChainMs: 0 } };
  let disposed = false;

  function encodeChain(x0, y0, tw, th, s, ad = false) {
    device.queue.writeBuffer(B.pass, 0, new Uint32Array([x0, y0, tw, th, s, w, h, ad ? 1 : 0]));
    device.queue.writeBuffer(B.counts, 0, new Uint32Array([ad ? 0 : tw * th, 0, 0, 0, 0, 0, 0, 0]));   // adaptive: the generate stage counts the active pixels itself
    const enc = device.createCommandEncoder();
    const p = enc.beginComputePass();
    p.setPipeline(pipes.gen); p.setBindGroup(0, G.gen[0]); p.dispatchWorkgroups(Math.ceil((tw * th) / WG));
    for (let k = 0; k <= maxB; k++) {
      const par = k & 1;
      p.setPipeline(pipes.argsB); p.setBindGroup(0, G.argsB[0]); p.dispatchWorkgroups(1);
      p.setPipeline(pipes.isect); p.setBindGroup(0, G.isect[par]); p.dispatchWorkgroupsIndirect(B.args, 0);
      p.setPipeline(pipes.shade); p.setBindGroup(0, G.shade[par]); p.dispatchWorkgroupsIndirect(B.args, 0);
      p.setPipeline(pipes.argsS); p.setBindGroup(0, G.argsS[0]); p.dispatchWorkgroups(1);
      p.setPipeline(pipes.shadow); p.setBindGroup(0, G.shadow[par]); p.dispatchWorkgroupsIndirect(B.args, 16);
    }
    p.end();
    device.queue.submit([enc.finish()]);
  }

  async function readOut(exposure, wb, post) {
    const g = wb || [1, 1, 1], pp = post || {}, kind = Math.max(0, VIEWS.indexOf(pp.view || 'aces'));
    device.queue.writeBuffer(B.view, 0, new Float32Array([exposure || 0, kind, pp.contrast || 0, pp.highlights || 0, g[0], g[1], g[2], pp.vignette || 0]));
    const rb = device.createBuffer({ size: w * h * 4, usage: U.MAP_READ | U.COPY_DST });
    const enc = device.createCommandEncoder();
    const p = enc.beginComputePass();
    p.setPipeline(pipes.resolve); p.setBindGroup(0, G.resolve[0]); p.dispatchWorkgroups(Math.ceil((w * h) / WG));
    p.end();
    enc.copyBufferToBuffer(B.out, 0, rb, 0, w * h * 4);
    device.queue.submit([enc.finish()]);
    await rb.mapAsync(GPUMapMode.READ);
    const bytes = new Uint8ClampedArray(rb.getMappedRange().slice(0));
    rb.unmap(); rb.destroy();
    return bytes;
  }
  tracer.image = (exposure = 0, wb = null, post = null) => readOut(exposure, wb, post);
  tracer.accum = async () => {
    const rb = device.createBuffer({ size: w * h * 16, usage: U.MAP_READ | U.COPY_DST });
    const enc = device.createCommandEncoder();
    enc.copyBufferToBuffer(B.accum, 0, rb, 0, w * h * 16);
    device.queue.submit([enc.finish()]);
    await rb.mapAsync(GPUMapMode.READ);
    const a = new Float32Array(rb.getMappedRange().slice(0));
    rb.unmap(); rb.destroy();
    return a;
  };

  /** RN.6: the render elements and light groups (Float32Array, pk.auxStride vec4s per pixel), or null when none were asked for. */
  tracer.aux = async () => {
    if (!auxBytes) return null;
    const rb = device.createBuffer({ size: auxBytes, usage: U.MAP_READ | U.COPY_DST });
    const enc = device.createCommandEncoder();
    enc.copyBufferToBuffer(B.aux, 0, rb, 0, auxBytes);
    device.queue.submit([enc.finish()]);
    await rb.mapAsync(GPUMapMode.READ);
    const a = new Float32Array(rb.getMappedRange().slice(0));
    rb.unmap(); rb.destroy();
    return a;
  };

  /** RN.11 (IPR): a new header (the camera moved, the lens changed) — the picture starts again; scene buffers stay. */
  tracer.restart = (header = null) => {
    if (disposed) return;
    if (header) device.queue.writeBuffer(B.header, 0, new Uint8Array(header));
    const enc = device.createCommandEncoder();
    enc.clearBuffer(B.accum);
    if (auxBytes) enc.clearBuffer(B.aux);
    if (hasC) enc.clearBuffer(B.csp);
    device.queue.submit([enc.finish()]);
    tracer.samples = 0;
    resetAdaptive();
  };
  /** RN.11: render only the pixels in [x0, y0, x1, y1) (region render), or everything (null). Takes effect from the next sample. */
  tracer.region = null;

  /** RN.7: the light paths of sample s (pt-wgsl.js `caustic`), then their splats into the accumulation (`cmerge`). */
  async function lightPass(s) {
    const maxL = Math.max(1, pk.maxBounces);
    for (let x0 = 0; x0 < cPaths; x0 += LIGHT_CHUNK) {
      if (lost) throw Object.assign(new Error(lost.message || 'device lost'), { code: 'gpu_lost' });   // i18n-ignore: caught by the caller
      const cnt = Math.min(LIGHT_CHUNK, cPaths - x0);
      device.queue.writeBuffer(B.pass, 0, new Uint32Array([x0, 0, cnt, cPaths, s, w, h, 0]));
      device.queue.writeBuffer(B.counts, 0, new Uint32Array(8));   // empty queues, bounce 0
      const enc = device.createCommandEncoder();
      enc.clearBuffer(B.cq, 0, cnt * maxL * 80);   // every connection slot unused
      const p = enc.beginComputePass();
      p.setPipeline(pipes.lgen); p.setBindGroup(0, G.lgen[0]); p.dispatchWorkgroups(Math.ceil(cnt / WG));
      for (let k = 0; k < maxL; k++) {   // the same wavefront as the eye paths: trace (isect), then the light paths' own shading
        const par = k & 1;
        p.setPipeline(pipes.argsB); p.setBindGroup(0, G.argsB[0]); p.dispatchWorkgroups(1);
        p.setPipeline(pipes.isect); p.setBindGroup(0, G.isect[par]); p.dispatchWorkgroupsIndirect(B.args, 0);
        p.setPipeline(pipes.lshade); p.setBindGroup(0, G.lshade[par]); p.dispatchWorkgroupsIndirect(B.args, 0);
        p.setPipeline(pipes.argsS); p.setBindGroup(0, G.argsS[0]); p.dispatchWorkgroups(1);
      }
      p.setPipeline(pipes.cconn); p.setBindGroup(0, G.cconn[0]); p.dispatchWorkgroups(Math.ceil((cnt * maxL) / WG));
      p.end();
      device.queue.submit([enc.finish()]);
      await device.queue.onSubmittedWorkDone();
    }
    device.queue.writeBuffer(B.pass, 0, new Uint32Array([0, 0, w, h, s, w, h, 0]));
    const enc = device.createCommandEncoder(), p = enc.beginComputePass();
    p.setPipeline(pipes.cmerge); p.setBindGroup(0, G.cmerge[0]); p.dispatchWorkgroups(Math.ceil((w * h) / WG));
    p.end();
    device.queue.submit([enc.finish()]);
  }

  /** Sample s of every pixel, tile by tile (one submitted chain each), into the accumulation buffer. */
  async function renderSample(s, ad = false) {
    const [tw, th] = tracer.stats.tile;
    const R = tracer.region, X0 = R ? Math.max(0, R[0] | 0) : 0, Y0 = R ? Math.max(0, R[1] | 0) : 0, X1 = R ? Math.min(w, R[2] | 0) : w, Y1 = R ? Math.min(h, R[3] | 0) : h;
    for (let y0 = Y0; y0 < Y1; y0 += th) {
      for (let x0 = X0; x0 < X1; x0 += tw) {
        if (lost) throw Object.assign(new Error(lost.message || 'device lost'), { code: 'gpu_lost' });   // i18n-ignore: caught by the caller
        const cw = Math.min(tw, X1 - x0), ch = Math.min(th, Y1 - y0);
        const t0 = performance.now();
        encodeChain(x0, y0, cw, ch, s, ad);
        await device.queue.onSubmittedWorkDone();
        const ms = performance.now() - t0;
        tracer.stats.chains++; tracer.stats.lastChainMs = ms;
        // a slow chain: smaller tiles from the next sample (a sample's tile grid stays as it began)
        if (ms > CHAIN_MS && tw * th > TILE_MIN * TILE_MIN) tracer.stats.tile = tw >= th ? [Math.max(TILE_MIN, tw >> 1), th] : [tw, Math.max(TILE_MIN, th >> 1)];
        else if (ms < CHAIN_MS / 4 && (tw < Math.min(TILE_MAX, w) || th < Math.min(TILE_MAX, h))) tracer.stats.tile = tw <= th ? [Math.min(TILE_MAX, w, tw * 2), th] : [tw, Math.min(TILE_MAX, h, th * 2)];
      }
    }
    if (hasC && !tracer.region) await lightPass(s);   // a region render has no light tracing (it would light the pixels outside the region)
  }
  // RN.7 adaptive sampling: the state lives in `act` (1 = sampled) and `adp`; a judgement stage runs after every ADAPT.PASS samples
  let adaptCfg = null, rbAct = null;
  function resetAdaptive() {
    device.queue.writeBuffer(B.act, 0, new Uint32Array(w * h).fill(1));
    const enc = device.createCommandEncoder();
    enc.clearBuffer(B.adp);
    device.queue.submit([enc.finish()]);
    if (adaptCfg) device.queue.writeBuffer(B.adpar, 0, new Float32Array([adaptCfg.noise, ADAPT.FLOOR, minPasses(adaptCfg.min), ADAPT.PASS]));
  }
  tracer.setAdaptive = (cfg) => {
    adaptCfg = cfg && cfg.noise > 0 ? { noise: cfg.noise, min: cfg.min || 16 } : null;
    resetAdaptive();
  };
  tracer.adaptive = () => adaptCfg;
  /** Judge every active pixel on the passes so far → how many are still active. */
  async function adaptStep() {
    device.queue.writeBuffer(B.pass, 0, new Uint32Array([0, 0, w, h, tracer.samples, w, h, 0]));
    device.queue.writeBuffer(B.counts, 16, new Uint32Array([0]));
    rbAct ||= device.createBuffer({ size: 16, usage: U.MAP_READ | U.COPY_DST });
    const enc = device.createCommandEncoder();
    const p = enc.beginComputePass();
    p.setPipeline(pipes.adapt); p.setBindGroup(0, G.adapt[0]); p.dispatchWorkgroups(Math.ceil((w * h) / WG));
    p.end();
    enc.copyBufferToBuffer(B.counts, 16, rbAct, 0, 4);
    device.queue.submit([enc.finish()]);
    await rbAct.mapAsync(GPUMapMode.READ);
    const n = new Uint32Array(rbAct.getMappedRange().slice(0))[0];
    rbAct.unmap();
    return n;
  }
  resetAdaptive();
  let backup = null;
  tracer.renderRange = async (s0, spp, { signal = null } = {}) => {
    if (disposed) throw new Error('disposed');   // i18n-ignore: a programming error
    backup ||= device.createBuffer({ size: w * h * 16, usage: U.COPY_SRC | U.COPY_DST });
    let enc = device.createCommandEncoder();
    enc.copyBufferToBuffer(B.accum, 0, backup, 0, w * h * 16);
    enc.clearBuffer(B.accum);
    device.queue.submit([enc.finish()]);
    try {
      for (let s = s0; s < s0 + spp; s++) {
        if (signal?.aborted) throw Object.assign(new Error('stopped'), { code: 'cancelled' });   // i18n-ignore: caught by the caller
        await renderSample(s);
      }
      return await tracer.accum();
    } finally {
      enc = device.createCommandEncoder();
      enc.copyBufferToBuffer(backup, 0, B.accum, 0, w * h * 16);
      device.queue.submit([enc.finish()]);
    }
  };

  tracer.run = async ({ spp = 16, deadline = Infinity, signal = null, onPreview = null, previewMs = 400, exposure = 0, wb = null, post = null } = {}) => {
    if (disposed) throw new Error('disposed');   // i18n-ignore: a programming error
    const target = tracer.samples + spp;
    let stopped = false, budget = false, converged = false, active = null, lastPreview = performance.now();
    while (tracer.samples < target) {
      const s = tracer.samples;
      await renderSample(s, !!adaptCfg);
      tracer.samples = s + 1;
      if (adaptCfg && tracer.samples % ADAPT.PASS === 0) {
        active = await adaptStep();
        if (active === 0) { converged = true; if (onPreview) await onPreview(await readOut(exposure, wb, post), w, h, tracer.samples); break; }
      }
      if (signal?.aborted) { stopped = tracer.samples < target; break; }
      if (performance.now() > deadline) { budget = tracer.samples < target; break; }
      if (onPreview && (performance.now() - lastPreview > previewMs || tracer.samples === target)) {
        lastPreview = performance.now();
        await onPreview(await readOut(exposure, wb, post), w, h, tracer.samples);
      }
    }
    return { samples: tracer.samples, stopped, budget, converged, active };
  };
  tracer.dispose = () => {
    if (disposed) return;
    disposed = true;
    for (const b of own) b.destroy();
    backup?.destroy();
    rbAct?.destroy();
    tex.destroy();
    device.destroy();
  };
  tracer.w = w; tracer.h = h;
  return tracer;
}
