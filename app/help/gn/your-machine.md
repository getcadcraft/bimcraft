---
title: Mba'e renderiza nde máquina
summary: Configuración › Renderizado ohechauka gráficos, procesador núcleo ha memoria ko navegador ombojoaju app-pe, ha nivel ohecha mba'épa renderizado ojepyrũ.
keywords: nde máquina, tarjeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, hilos, memoria, ram, memoria compartida, aislamiento, nivel, nivel, velocidad, lento, velocidad renderizado, notebook
from: 360f2375
---

Eikatu {{ui:Configuración}} ({{key:Mod+,}}), ejeguanda ko app-pe pestaña-pe ha ejeity {{ui:Renderizado}}-pe. {{ui:Su equipo}} ohechauka mba'e ko navegador ombojoaju app-pe renderizado-pe. Ndaipóri ko mba'e ndoguejýi nde computadora-gui.

| Fila | Mba'e ohechauka |
|---|---|
| {{ui:Gráficos}} | Tarjeta gráfica navegador ohechauka. "WebGPU" ohechauka oikóva renderizado ojapo; "Solo WebGL 2" ohechauka ndaikatúi WebGPU: ao vivo vista ha pictura porã tarjeta gráfica WebGL 2 rupi ojapo (pictura WebGL path tracer tuichaiterei ndaiporiva WebGPU-gui); software ojeporu ohechauka opavave procesador-pe ojapo |
| {{ui:Procesador}} | Navegador ohechauka procesador núcleo cantidad |
| {{ui:Memoria}} | Mboyve memoria computadora-pe, navegador ohechauka jave. Algún navegador ndohechaukái |
| {{ui:Memoria compartida}} | Página ikatu memoria compartí worker-kuéra ryepy. Oĩ jave, núcleo opavave peteĩ escena oĩva ojapo ikatu; ndaiporiva jave, peteĩ-peteĩ ohupyty ipropio kopia, upévare escena tuichaitereíva oiko núcleo mbytépe |
| {{ui:Código rápido del procesador}} | Navegador ojapo WebAssembly rápido. Ndaiporiva jave, lento ojeporu |
| {{ui:Nivel}} | {{ui:Tarjeta gráfica, alta}}, {{ui:Tarjeta gráfica, básica}} térã {{ui:Solo procesador}}, ryepy ohechauka mba'épa |

## Nivel

Nivel oiko renderizado ojepyrũ, upévare notebook gráfico chip-pe térã tarjeta gráfica ndaiporiva ojapo porã. Gráfico chip ryepe térã teléfono, térã 4 GB memoria térã menos, ndaikatúi jey {{ui:Tarjeta gráfica, alta}}.

:::note
Navegador ojekuaa differ. Peteĩ computadora ikatu ohechauka WebGPU peteĩ navegador-pe ha "Solo WebGL 2" ambue-pe. Linux-pe navegador tuichaiterei aún ndoguerekói WebGPU.
:::
