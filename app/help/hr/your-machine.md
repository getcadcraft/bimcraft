---
title: Čime vaše računalo renderira
summary: Postavke › Renderiranje prikazuju grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji te razinu koja određuje kada renderiranje počinje.
keywords: vaše računalo, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgre, dretve, memorija, ram, zajednička memorija, izolacija, razred, razina, brzina, sporo, brzina renderiranja, prijenosno računalo
from: 360f2375
---

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), ostanite na kartici ove aplikacije i pomaknite se do {{ui:Renderiranje}}. {{ui:Vaše računalo}} navodi što ovaj preglednik dopušta aplikaciji za renderiranje. Ništa od toga ne napušta vaše računalo.

| Redak | Što znači |
|---|---|
| {{ui:Grafika}} | Grafička kartica koju preglednik prijavljuje. „WebGPU“ znači da može obavljati posao renderiranja; „WebGL 2 only“ znači da nema WebGPU: prikaz uživo i slike visoke kvalitete koriste grafičku karticu preko WebGL 2 (slike sa starijim WebGL praćenjem putanje, bez dodataka koji zahtijevaju WebGPU); softverska zamjena znači da se sve izvodi na procesoru |
| {{ui:Procesor}} | Koliko jezgri procesora preglednik prijavljuje |
| {{ui:Memorija}} | Približno koliko memorije ima računalo, kada to preglednik kaže. Neki preglednici to ne kažu |
| {{ui:Zajednička memorija}} | Smije li stranica dijeliti memoriju između svojih radnih dretvi. Uključeno: svaka jezgra može raditi na jednoj kopiji scene; isključeno: svaka treba vlastitu kopiju, pa se velika scena istodobno uklapa na manje jezgri |
| {{ui:Brzi kod procesora}} | Pokreće li preglednik brži WebAssembly kod. Bez njega se koristi sporija zamjena |
| {{ui:Razina}} | {{ui:Grafička kartica, visoka}}, {{ui:Grafička kartica, osnovna}} ili {{ui:Samo procesor}}, s razlogom ispod |

## Razina

Razina je mjesto na kojem renderiranje počinje, tako da prijenosno računalo s ugrađenim grafičkim čipom ili bez grafičke kartice ostaje responzivno. Ugrađeni ili telefonski grafički čip, ili 4 GB memorije ili manje, nikada ne dobiva {{ui:Grafička kartica, visoka}}.

:::note
Preglednici se razlikuju. Isto računalo može u jednom pregledniku prikazati „WebGPU“, a u drugom „WebGL 2 only“. Na Linuxu većina preglednika još nema WebGPU.
:::
