---
title: Con que renderiza o seu ordenador
summary: Configuración › Renderizado mostra os gráficos, os núcleos do procesador e a memoria que este navegador permite usar á aplicación, e o nivel que determina onde comeza o renderizado.
keywords: o seu ordenador, tarxeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, fíos, memoria, ram, memoria compartida, illamento, nivel, velocidade, lento, velocidade de renderizado, portátil
from: 360f2375
---

Abra {{ui:Configuración}} ({{key:Mod+,}}), manteña a lapela propia desta aplicación e desprácese ata {{ui:Renderizado}}. {{ui:O seu ordenador}} lista o que este navegador permite usar á aplicación para o renderizado. Nada do que aparece aí sae do seu ordenador.

| Fila | Que significa |
|---|---|
| {{ui:Gráficos}} | A tarxeta gráfica que informa o navegador. "WebGPU" indica que pode facer o traballo de renderizado; "Só WebGL 2" indica que non hai WebGPU: a vista en directo e as imaxes de alta calidade usan a tarxeta gráfica mediante WebGL 2 (imaxes co trazador de raios WebGL máis antigo, sen as funcións que precisan WebGPU); un substituto por software indica que todo se executa no procesador |
| {{ui:Procesador}} | Cantos núcleos do procesador informa o navegador |
| {{ui:Memoria}} | Aproximadamente canta memoria ten o ordenador, cando o navegador o indica. Algúns navegadores non o fan |
| {{ui:Memoria compartida}} | Se a páxina pode compartir memoria entre os seus procesos auxiliares. Activada, cada núcleo pode traballar sobre unha copia dunha escena; desactivada, cada un precisa a súa propia copia, así que unha escena grande cabe en menos núcleos á vez |
| {{ui:Código de procesador rápido}} | Se o navegador executa o código WebAssembly máis rápido. Sen el úsase un substituto máis lento |
| {{ui:Nivel}} | {{ui:Tarxeta gráfica, alto}}, {{ui:Tarxeta gráfica, básico}} ou {{ui:Só procesador}}, co motivo debaixo |

## O nivel

O nivel é onde comeza o renderizado, para que un portátil cun chip gráfico integrado ou sen tarxeta gráfica siga respondendo. Un chip gráfico integrado ou de teléfono, ou 4 GB de memoria ou menos, nunca obtén {{ui:Tarxeta gráfica, alto}}.

:::note
Os navegadores difiren. O mesmo ordenador pode mostrar WebGPU nun navegador e "Só WebGL 2" noutro. En Linux a maioría dos navegadores aínda non ten WebGPU.
:::
