---
title: Hva maskinen din gjengir med
summary: Innstillinger › Rendering viser grafikken, prosessorkjernene og minnet denne nettleseren lar appen bruke, og nivået som angir hvor gjengivelse starter.
keywords: maskinen din, grafikkort, gpu, webgpu, webgl, prosessor, cpu, kjerner, tråder, minne, ram, delt minne, isolasjon, nivå, hastighet, treg, gjengivelseshastighet, bærbar
from: 360f2375
---

Åpne {{ui:Innstillinger}} ({{key:Mod+,}}), bli på appens egen fane og bla til {{ui:Rendering}}. {{ui:Maskinen din}} lister hva denne nettleseren lar appen bruke til gjengivelse. Ingenting i den forlater datamaskinen din.

| Rad | Hva det betyr |
|---|---|
| {{ui:Grafikk}} | Grafikkortet nettleseren rapporterer. "WebGPU" betyr at det kan gjøre gjengivelsesarbeidet; "WebGL 2 only" betyr at det ikke finnes WebGPU: live-visningen og bilder i høy kvalitet bruker grafikkortet gjennom WebGL 2 (bilder med den eldre WebGL-stisporeren, uten tilleggene som krever WebGPU); en programvareerstatning betyr at alt kjøres på prosessoren |
| {{ui:Prosessor}} | Hvor mange prosessorkjerner nettleseren rapporterer |
| {{ui:Minne}} | Omtrent hvor mye minne datamaskinen har, når nettleseren sier det. Noen nettlesere gjør ikke det |
| {{ui:Delt minne}} | Om siden kan dele minne mellom sine arbeidere. Når det er på, kan hver kjerne jobbe på én kopi av en scene; når det er av, trenger hver sin egen kopi, så en stor scene får plass på færre kjerner samtidig |
| {{ui:Rask prosessorkode}} | Om nettleseren kjører den raskere WebAssembly-koden. Uten den brukes en tregere reserveløsning |
| {{ui:Nivå}} | {{ui:Grafikkort, høyt}}, {{ui:Grafikkort, enkelt}} eller {{ui:Bare prosessor}}, med årsaken under |

## Nivået

Nivået er der gjengivelse starter, slik at en bærbar med en innebygd grafikkbrikke eller uten grafikkort i det hele tatt forblir responsiv. En innebygd eller mobil grafikkbrikke, eller 4 GB minne eller mindre, får aldri {{ui:Grafikkort, høyt}}.

:::note
Nettlesere er forskjellige. Den samme datamaskinen kan vise WebGPU i én nettleser og "WebGL 2 only" i en annen. På Linux har de fleste nettlesere ikke WebGPU ennå.
:::
