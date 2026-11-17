---
title: Čime tvoj računar renderuje
summary: Podešavanja › Renderovanje prikazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji, kao i nivo koji određuje gde renderovanje počinje.
keywords: tvoj računar, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgra, niti, memorija, ram, deljena memorija, izolacija, nivo, brzina, sporo, brzina renderovanja, laptop
from: 360f2375
---

Otvori {{ui:Podešavanja}} ({{key:Mod+,}}), ostani na sopstvenoj kartici ove aplikacije i pomeri se do {{ui:Renderovanje}}. {{ui:Tvoj računar}} navodi šta ovaj pregledač dozvoljava aplikaciji za renderovanje. Ništa u tome ne napušta tvoj računar.

| Red | Šta znači |
|---|---|
| {{ui:Grafika}} | Grafička kartica koju pregledač prijavljuje. „WebGPU“ znači da može da obavi posao renderovanja; „WebGL 2 only“ znači da nema WebGPU: živi prikaz i slike visokog kvaliteta koriste grafičku karticu preko WebGL 2 (slike sa starijim WebGL path tracer-om, bez dodataka koji zahtevaju WebGPU); zamena softverom znači da sve radi na procesoru |
| {{ui:Procesor}} | Koliko jezgara procesora pregledač prijavljuje |
| {{ui:Memorija}} | Približno koliko memorije ima računar, kada pregledač to kaže. Neki pregledači to ne čine |
| {{ui:Deljena memorija}} | Da li stranica sme da deli memoriju između svojih radnika. Uključeno, svako jezgro može da radi na jednoj kopiji scene; isključeno, svakom treba sopstvena kopija, pa velika scena stane u manje jezgara istovremeno |
| {{ui:Brz kod za procesor}} | Da li pregledač pokreće brži WebAssembly kod. Bez toga koristi se sporiji rezervni kod |
| {{ui:Nivo}} | {{ui:Grafička kartica, visok}}, {{ui:Grafička kartica, osnovni}} ili {{ui:Samo procesor}}, sa razlogom ispod |

## Nivo

Nivo određuje gde renderovanje počinje, tako da laptop sa ugrađenim grafičkim čipom ili bez grafičke kartice ostane responzivan. Ugrađeni ili telefonski grafički čip, ili 4 GB memorije ili manje, nikada ne dobija {{ui:Grafička kartica, visok}}.

:::note
Pregledači se razlikuju. Isti računar može da prikaže WebGPU u jednom pregledaču, a „WebGL 2 only“ u drugom. Na Linuxu većina pregledača još nema WebGPU.
:::
