---
title: Grindys bet kokios formos, angos ir rampos
summary: Nubrėžkite grindis ar perdangą pagal kontūrą (balkoną, konsolę, aikštelę), išpjaukite jose angas ir nubrėžkite rampas su aikštelėmis.
keywords: grindys, perdanga, kontūras, balkonas, konsolė, aikštelė, denis, grindų anga, skylė, šachta, tuštuma, rampa, nuolydis, prieinama rampa, neįgaliųjų vežimėlio rampa, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ką darysite

Kurkite grindis, kurios nesekia patalpų, pavyzdžiui balkoną už sienų, ir braižykite rampas tarp lygių.

## Nubrėžkite grindis pagal kontūrą

1. Įjunkite {{ui:Braižymas}}, pasirinkite lygį, tada {{ui:Versija}} › {{ui:Grindys pagal kontūrą}}.
2. Įrankių eilutėje pasirinkite rūšį (betoninė perdanga arba medinės grindys), paskirtį (grindys arba aikštelė), storį ir tai, kiek jų viršus yra virš lygio (0 = lygiai su lygio grindimis; neigiama reikšmė nustato žemiau).
3. Spustelėkite kampus. Įrankis prisitraukia prie sienų, tinklelio linijų ir jų susikirtimų; laikykite {{key:Shift}}, kad kraštinė liktų statmena. Kiekvienos kraštinės ilgis ir plotas rodomi braižant. {{key:Backspace}} atšaukia paskutinį kampą.
4. Spustelėkite pirmąjį kampą dar kartą, dukart spustelėkite arba paspauskite {{key:Enter}}, kad baigtumėte.

## Išpjaukite angą

Spustelėkite grindis (3D vaizde arba jų kontūrą plane), tada skiltyje {{ui:Savybės}} spustelėkite {{ui:Pridėti angą}} ir spustelėkite angos kampus grindų viduje, baigdami kaip aukščiau. Grindų {{ui:Savybės}} rodo jų angas, kiekvieną su {{ui:Naikinti}}, ir plotą be jų.

## Nubrėžkite rampą

1. Pasirinkite {{ui:Versija}} › {{ui:Rampa}}. Nustatykite jos plotį ir ar ji eina **į aukštesnį lygį** ar **pakilimu aukštyn**, kurį įvedate.
2. Pasirinkite nustatymo būdą: **pagal nuolydį** (pradžioje 1:12; rampa tiek ilga, kiek reikia pakilimui) arba **pagal ilgį** (antras spustelėjimas nustato ilgį, o nuolydis seka).
3. Spustelėkite rampos pėdą (jos apatinio krašto vidurį), tada spustelėkite kelią aukštyn. Peržiūra rodo jos ilgį, bėgius, aikšteles ir nuolydį.

Pakilimas virš 30 colių (760 mm) suskaidomas į bėgius, tarp kurių įrengiama 5 pėdų (1525 mm) aikštelė. Tai įprastos planavimo vertės, o ne jūsų statybos norma: patikrinkite taisykles vietoje, kur statote. Rampa, statesnė nei 1:12, pažymima jos {{ui:Savybėse}}.

## Ko tikėtis

- Kiekviena grindų, angos ar rampos operacija yra vienas žingsnis: {{key:Mod+Z}} ją atšaukia.
- Plane nubrėžtų grindų kontūras (anga rodoma perbraukta) ir rampos kontūras, bėgiai, aikštelės bei rodyklė aukštyn su nuolydžiu.
- Nubraižytų grindų savybės (rūšis, paskirtis, storis, viršus, plotas, angos) ir rampos (plotis, viršus, pakilimas, nuolydis ar ilgis); {{key:Delete}} pašalina bet kurį iš jų.
- Rampa į aukštesnį lygį seka tą lygį, kai keičiasi jo aukštis.
- IFC faile nubraižytos grindys yra perdanga (IfcSlab, grindys ar aikštelė) su išpjautomis angomis (IfcOpeningElement); rampa yra IfcRamp, sudaryta iš nuožulnių bėgių (IfcRampFlight) ir aikštelių perdangų, su savo nuolydžiu ir pločiu.

:::note
Grindys, nubraižytos šiuo būdu, lieka ten, kur jas nubrėžėte. Grindys, sukurtos su {{ui:Grindys}}, seka patalpas, kai sienos perkeliamos: žr. [Patalpos, grindys, lubos ir stogai](topic:floors-and-roofs).
:::
