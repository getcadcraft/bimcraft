---
title: Patalpos ir patalpų skyrikliai
summary: Pasirinkite patalpą, kad ją pavadintumėte, sunumeruotumėte ir perskaitytumėte jos plotą, perimetrą ir tūrį. Nubrėžkite patalpos skyriklį ten, kur dvi patalpos susiliečia be sienos.
keywords: patalpa, patalpos, patalpos skyriklis, skyrimo linija, erdvė, IfcSpace, pavadinimas, numeris, plotas, perimetras, tūris, atviras planas, padalinti patalpą, virtuvė ir svetainė, neuždaryta
from: d4c1d66b
---

## Ką darysite

Pavadinkite sienų sudarytas patalpas ir padalinkite atvirą patalpą į dvi be sienos.

## Kur yra įrankiai

- Juostos išdėstymai: {{ui:Architektūra}} › **Patalpa ir plotas** › {{ui:Patalpa}} ir {{ui:Patalpos skyriklis}}.
- Klasikinis išdėstymas: {{ui:Braižymas}} juosta › {{ui:Patalpos}} meniu.
- Bet kuris meniu stilius: komandos vadinasi Patalpa ir Patalpos skyriklis; komandų paletė jas randa.

## Žingsniai

1. Nubrėžkite sienas. Kiekviena uždara sienų kilpa jau yra patalpa: BimCraft ją sukuria, sunumeruoja ir suteikia jai plotą, kai braižote.
2. Pasirinkite {{ui:Patalpa}}. Užveskite pelę ant plano: patalpa po žymekliu įsižiebia su savo plotu, perimetru ir tūriu.
3. Norėdami greitai pavadinti patalpas, pirmiausia eilutėje įveskite {{ui:Pavadinimas}} ir {{ui:Numeris}}, tada spustelėkite patalpoje. Numeris kitai patalpai didėja vienetu (101, 102; A-09, A-10).
4. Arba tiesiog spustelėkite patalpą: ji pasirenkama, o Savybės turi jos pavadinimą, numerį, plotą, perimetrą, tūrį ir žymą.
5. Norėdami padalinti atvirą patalpą, pasirinkite {{ui:Patalpos skyriklis}} ir spustelėkite du taškus: nuo sienos iki sienos arba nuo sienos iki kito skyriklio. Toliau spustelėkite grandinei; Enter, Esc arba dvigubas spustelėjimas ją baigia.

## Ką daro skyriklis

- Jis riboja patalpas kaip siena be storio. Dviejų patalpų plotai tiksliai susideda į buvusios patalpos plotą.
- Patalpa, kurioje lieka senos patalpos vidurys, išlaiko savo pavadinimą ir numerį. Kita yra nauja.
- Skyriklis, kuris baigiasi atvirame lauke ir neliečia nieko viename gale, nieko nepadalina. Pratęskite jį – ir padalins.
- Skyriklio dalis, esanti sienos viduje, ignoruojama, todėl galite prisegti prie sienų vidurio linijų.
- Pasirinkite skyriklį ir paspauskite Delete, kad jį pašalintumėte: dvi patalpos vėl tampa viena. Anuliuoti jį grąžina.

## Jei spustelėjimo vietoje nėra patalpos

Būsenos eilutė tai nurodo: sienos ten nesusiglaudžia. Uždarykite tarpą arba nubrėžkite per jį skyriklį. Nieko neatmetama; tiesiog dar nėra uždaros patalpos.

## IFC faile

Patalpa yra IfcSpace su savo numeriu (Name), pavadinimu (LongName) ir Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Tūris yra plotas, padaugintas iš aukščio iki aukštesnio lygio.

Patalpos skyriklis yra IfcVirtualElement – IFC subjektas ribai, kuri nėra pastatyta. Jis turi liniją ir neturi kūno, todėl kita programa sienos neskaito ir jam nieko neskaičiuoja.

## Dar neįgyvendinta

- Lenkti skyrikliai.
- Patalpa, kuri seka nuožulnias lubas: tūris visada yra plotas, padaugintas iš lygio aukščio.
- Erdvės ribos ryšiai (IfcRelSpaceBoundary) neįrašomi nei sienoms, nei skyrikliams.

Taip pat žr. [Patalpų ir plotų žymos](topic:room-and-area-tags), [Plotai ir plotų ribos](topic:areas-and-area-boundaries).
