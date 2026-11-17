---
title: Čime vaš računar renderuje
summary: Postavke › Renderovanje prikazuju grafiku, jezgre procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji, i nivo koji određuje gdje renderovanje počinje.
keywords: vaš računar, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgre, niti, memorija, ram, zajednička memorija, izolacija, nivo, klasa, brzina, spor, brzina renderovanja, laptop
from: 360f2375
---

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), ostanite na karticiji ove aplikacije i pomjerite se do {{ui:Renderovanje}}. {{ui:Vaš računar}} navodi šta ovaj pregledač dozvoljava aplikaciji za renderovanje. Ništa od toga ne napušta vaš računar.

| Red | Šta znači |
|---|---|
| {{ui:Grafika}} | Grafička kartica koju pregledač prijavljuje. "WebGPU" znači da može obaviti posao renderovanja; "WebGL 2 only" znači da WebGPU nema: prikaz uživo i slike visokog kvaliteta koriste grafičku karticu preko WebGL 2 (slike sa starijim WebGL putem za praćenje putanje, bez dodataka koji zahtijevaju WebGPU); softverska zamjena znači da sve radi na procesoru |
| {{ui:Procesor}} | Koliko jezgri procesora pregledač prijavljuje |
| {{ui:Memorija}} | Otprilike koliko memorije ima računar, kad pregledač to kaže. Neki pregledači to ne kažu |
| {{ui:Zajednička memorija}} | Da li stranica smije dijeliti memoriju između svojih radnih niti. Kad je uključeno, svaka jezgra može raditi na jednoj kopiji scene; kad je isključeno, svaka treba vlastitu kopiju, pa velika scena stane na manje jezgri istovremeno |
| {{ui:Brz kod procesora}} | Da li pregledač pokreće brži WebAssembly kod. Bez njega koristi se sporiji zamjenski kod |
| {{ui:Nivo}} | {{ui:Grafička kartica, visoki}}, {{ui:Grafička kartica, osnovni}} ili {{ui:Samo procesor}}, s razlogom ispod |

## Nivo

Nivo je mjesto gdje renderovanje počinje, tako da laptop s ugrađenim grafičkim čipom ili bez grafičke kartice ostane responzivan. Ugrađeni ili telefonski grafički čip, ili 4 GB memorije ili manje, nikad ne dobija {{ui:Grafička kartica, visoki}}.

:::note
Pregledači se razlikuju. Isti računar može prikazati WebGPU u jednom pregledaču, a "WebGL 2 only" u drugom. Na Linuxu većina pregledača još nema WebGPU.
:::
