---
title: Waarmee uw computer rendert
summary: Instellingen › Renderen toont de grafische kaart, processorkernen en het geheugen die deze browser de app laat gebruiken, en het niveau dat bepaalt waar renderen begint.
keywords: uw computer, grafische kaart, gpu, webgpu, webgl, processor, cpu, kernen, threads, geheugen, ram, gedeeld geheugen, isolatie, niveau, trap, snelheid, renders snelheid, traag, laptop
from: 360f2375
---

Open {{ui:Instellingen}} ({{key:Mod+,}}), blijf op het eigen tabblad van deze app en scroll naar {{ui:Renderen}}. {{ui:Uw computer}} toont wat deze browser de app laat gebruiken voor renderen. Niets daarvan verlaat uw computer.

| Rij | Wat het betekent |
|---|---|
| {{ui:Grafisch}} | De grafische kaart die de browser meldt. "WebGPU" betekent dat hij het renderwerk kan doen; "WebGL 2 only" betekent dat er geen WebGPU is: de live-weergave en hoogwaardige afbeeldingen gebruiken de grafische kaart via WebGL 2 (afbeeldingen met het oudere WebGL-padtracer, zonder de extra's die WebGPU nodig hebben); een softwarevervanger betekent dat alles op de processor draait |
| {{ui:Processor}} | Hoeveel processorkernen de browser meldt |
| {{ui:Geheugen}} | Ongeveer hoeveel geheugen de computer heeft, wanneer de browser dat meldt. Sommige browsers doen dat niet |
| {{ui:Gedeeld geheugen}} | Of de pagina geheugen mag delen tussen haar workers. Aan: elke kern kan aan één kopie van een scène werken; uit: elke kern heeft een eigen kopie nodig, zodat een grote scène op minder kernen tegelijk past |
| {{ui:Snelle processorcode}} | Of de browser de snellere WebAssembly-code draait. Zonder die wordt een tragere terugvalcode gebruikt |
| {{ui:Niveau}} | {{ui:Grafische kaart, hoog}}, {{ui:Grafische kaart, basis}} of {{ui:Alleen processor}}, met de reden eronder |

## Het niveau

Het niveau is het punt waarop renderen begint, zodat een laptop met een ingebouwde grafische chip of helemaal geen grafische kaart responsief blijft. Een ingebouwde grafische chip of een grafische chip van een telefoon, of 4 GB geheugen of minder, krijgt nooit {{ui:Grafische kaart, hoog}}.

:::note
Browsers verschillen. Dezelfde computer kan WebGPU tonen in de ene browser en "WebGL 2 only" in een andere. Op Linux hebben de meeste browsers nog geen WebGPU.
:::
