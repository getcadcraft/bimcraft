---
title: Kuo atvaizduoja jūsų kompiuteris
summary: Parametrai › Atvaizdavimas rodo grafikos plokštę, procesoriaus branduolius ir atmintį, kuriuos ši naršyklė leidžia programai naudoti, bei lygį, nuo kurio prasideda atvaizdavimas.
keywords: jūsų kompiuteris, grafikos plokštė, gpu, webgpu, webgl, procesorius, cpu, branduoliai, gijos, atmintis, ram, bendra atmintis, izoliacija, lygis, greitis, lėtas, atvaizdavimo greitis, nešiojamas
from: 360f2375
---

Atidarykite {{ui:Parametrai}} ({{key:Mod+,}}), likite šios programos skirtuke ir slinkite iki {{ui:Atvaizdavimas}}. {{ui:Jūsų kompiuteris}} išvardija, ką ši naršyklė leidžia programai naudoti atvaizdavimui. Niekas iš to nepasiekia jūsų kompiuterio už jo ribų.

| Eilutė | Ką tai reiškia |
|---|---|
| {{ui:Grafika}} | Grafikos plokštė, kurią praneša naršyklė. „WebGPU“ reiškia, kad ji gali atlikti atvaizdavimo darbą; „WebGL 2 only“ reiškia, kad WebGPU nėra: tiesioginis vaizdas ir aukštos kokybės paveikslėliai naudoja grafikos plokštę per WebGL 2 (paveikslėliai su senesniu WebGL kelio sekikliu, be papildomų funkcijų, kurioms reikia WebGPU); programinis pakaitalas reiškia, kad viskas vykdoma procesoriuje |
| {{ui:Procesorius}} | Kiek procesoriaus branduolių praneša naršyklė |
| {{ui:Atmintis}} | Maždaug kiek atminties turi kompiuteris, kai naršyklė tai praneša. Kai kurios naršyklės to nepraneša |
| {{ui:Bendra atmintis}} | Ar puslapis gali bendrinti atmintį tarp savo darbuotojų. Kai įjungta, kiekvienas branduolys gali dirbti su viena scenos kopija; kai išjungta, kiekvienam reikia savos kopijos, todėl didelė scena telpa mažesniame branduolių skaičiuje vienu metu |
| {{ui:Greitas procesoriaus kodas}} | Ar naršyklė vykdo greitesnį WebAssembly kodą. Be jo naudojamas lėtesnis atsarginis variantas |
| {{ui:Lygis}} | {{ui:Grafikos plokštė, aukštas}}, {{ui:Grafikos plokštė, pagrindinis}} arba {{ui:Tik procesorius}}, o po juo – priežastis |

## Lygis

Lygis – tai vieta, kur prasideda atvaizdavimas, kad nešiojamas kompiuteris su integruotu grafikos lustu ar be grafikos plokštės liktų greitas. Integruotas ar telefono grafikos lustas arba 4 GB atminties ar mažiau niekada negauna {{ui:Grafikos plokštė, aukštas}}.

:::note
Naršyklės skiriasi. Tas pats kompiuteris gali rodyti WebGPU vienoje naršyklėje ir „WebGL 2 only“ kitoje. Linux sistemoje dauguma naršyklių dar neturi WebGPU.
:::
