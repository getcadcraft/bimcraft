---
title: Con cosa esegue il rendering il computer
summary: Impostazioni › Rendering mostra la scheda grafica, i core del processore e la memoria che questo browser consente all'app di usare, e il livello che stabilisce da dove inizia il rendering.
keywords: il computer, scheda grafica, gpu, webgpu, webgl, processore, cpu, core, thread, memoria, ram, memoria condivisa, isolamento, livello, velocità, lento, velocità di rendering, portatile
from: 360f2375
---

Aprire {{ui:Impostazioni}} ({{key:Mod+,}}), restare sulla scheda propria di questa app e scorrere fino a {{ui:Rendering}}. {{ui:Il tuo computer}} elenca ciò che questo browser consente all'app di usare per il rendering. Nulla di questo lascia il computer.

| Riga | Significato |
|---|---|
| {{ui:Grafica}} | La scheda grafica che il browser segnala. "WebGPU" significa che può svolgere il lavoro di rendering; "solo WebGL 2" significa che non c'è WebGPU: la vista in tempo reale e le immagini di alta qualità usano la scheda grafica tramite WebGL 2 (immagini con il vecchio path tracer WebGL, senza le funzioni che richiedono WebGPU); un ripiego software significa che tutto viene eseguito sul processore |
| {{ui:Processore}} | Quanti core del processore segnala il browser |
| {{ui:Memoria}} | Quanta memoria ha circa il computer, quando il browser lo indica. Alcuni browser non lo fanno |
| {{ui:Memoria condivisa}} | Se la pagina può condividere memoria tra i propri worker. Attiva, ogni core può lavorare su un'unica copia di una scena; disattiva, ciascuno ne richiede una propria, quindi una scena grande entra in meno core alla volta |
| {{ui:Codice del processore veloce}} | Se il browser esegue il codice WebAssembly più veloce. Senza di esso viene usato un ripiego più lento |
| {{ui:Livello}} | {{ui:Scheda grafica, alta}}, {{ui:Scheda grafica, base}} oppure {{ui:Solo processore}}, con il motivo sotto |

## Il livello

Il livello è il punto in cui inizia il rendering, in modo che un portatile con un chip grafico integrato o senza scheda grafica resti reattivo. Un chip grafico integrato o da telefono, oppure 4 GB di memoria o meno, non ottiene mai {{ui:Scheda grafica, alta}}.

:::note
I browser differiscono. Lo stesso computer può mostrare WebGPU in un browser e "solo WebGL 2" in un altro. Su Linux la maggior parte dei browser non ha ancora WebGPU.
:::
