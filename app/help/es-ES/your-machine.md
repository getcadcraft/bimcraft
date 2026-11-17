---
title: Con qué renderiza su equipo
summary: Configuración › Renderizado muestra los gráficos, los núcleos del procesador y la memoria que este navegador permite usar a la aplicación, y el nivel que determina dónde empieza el renderizado.
keywords: su equipo, tarjeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, hilos, memoria, ram, memoria compartida, aislamiento, nivel, velocidad, lento, velocidad de renderizado, portátil
from: 360f2375
---

Abra {{ui:Configuración}} ({{key:Mod+,}}), quédese en la pestaña propia de esta aplicación y desplácese hasta {{ui:Renderizado}}. {{ui:Tu equipo}} muestra lo que este navegador permite usar a la aplicación para el renderizado. Nada de ello sale de su ordenador.

| Fila | Qué significa |
|---|---|
| {{ui:Gráficos}} | La tarjeta gráfica que informa el navegador. "WebGPU" significa que puede realizar el trabajo de renderizado; "Solo WebGL 2" significa que no hay WebGPU: la vista en vivo y las imágenes de alta calidad usan la tarjeta gráfica mediante WebGL 2 (imágenes con la ruta de trazado de WebGL anterior, sin las funciones que requieren WebGPU); un sustituto por software significa que todo se ejecuta en el procesador |
| {{ui:Procesador}} | Cuántos núcleos del procesador informa el navegador |
| {{ui:Memoria}} | Aproximadamente cuánta memoria tiene el ordenador, cuando lo indica el navegador. Algunos navegadores no lo indican |
| {{ui:Memoria compartida}} | Si la página puede compartir memoria entre sus procesos de trabajo. Activada, cada núcleo puede trabajar sobre una única copia de una escena; desactivada, cada uno necesita su propia copia, así que una escena grande cabe en menos núcleos a la vez |
| {{ui:Código rápido para el procesador}} | Si el navegador ejecuta el código WebAssembly más rápido. Sin él se usa una alternativa más lenta |
| {{ui:Nivel}} | {{ui:Tarjeta gráfica, alto}}, {{ui:Tarjeta gráfica, básico}} o {{ui:Solo procesador}}, con el motivo debajo |

## El nivel

El nivel es donde empieza el renderizado, para que un portátil con un chip gráfico integrado o sin tarjeta gráfica siga respondiendo. Un chip gráfico integrado o de teléfono, o 4 GB de memoria o menos, nunca obtiene {{ui:Tarjeta gráfica, alto}}.

:::note
Los navegadores difieren. El mismo equipo puede mostrar WebGPU en un navegador y "Solo WebGL 2" en otro. En Linux, la mayoría de los navegadores aún no tienen WebGPU.
:::
