---
title: Dyert dhe dritaret
summary: Vendos dyer dhe dritare në muret e vizatuara: shëno murin, shiko hapjen dhe distancat deri te qoshet, klikoje; hapja pritet vetë nga muri.
keywords: derë, dyer, dritare, hapje, kanat, menteshë, dorë, kthe, derë rrëshqitëse, derë xhepi, derë garazhi, derë dyfishe, kanat, dritare e fiksuar, dritare me një kanat të ngritshëm, dritare me dy kanate të ngritshme, dritare rrëshqitëse, dritare me kanat sipër, dritare panoramike, dritare sipër dere, prag, kornizë, derë dollapi, dyer franceze, derë stalle, dritare anësore, derë hyrjeje, dritare daljeje për bodrum
from: 4d8ac009
---

## Çfarë do të bësh

Vendos dyer dhe dritare në muret që ke vizatuar ([Vizato muret](topic:draw-walls)). Shëno një mur dhe dera ose dritarja tregon ku do të shkonte, nga cila anë hapet dhe sa larg është nga çdo qoshe. Kliko, dhe hapja pritet vetë nga muri në plan dhe në 3D.

## Vendos një derë

1. Me {{ui:Vizato}} të ndezur, kliko {{ui:Derë}} (ose shtyp {{key:D}}).
2. Zgjidh llojin: **Derë me hapje të vetme**, **Derë me hapje të dyfishtë**, **Derë rrëshqitëse**, **Derë xhepi**, **Derë garazhi**, **Derë dollapi me palë**, **Dyer franceze**, **Derë stalle (mbi mur)** ose **Derë hyrjeje me dritare anësore**. Madhësia e zakonshme plotëson **W** dhe **H**; zgjidh një tjetër nga lista e madhësive pranë saj, ose shkruaj të tjera, për shembull `2'-8"` ose `800`. Lista ofron edhe familjet e dyerve të këtij modeli (shih [Familjet dhe madhësitë e tyre](topic:families)).
3. Shëno një mur. Simboli i derës ndjek treguesin përgjatë murit, dhe distanca nga çdo skaj i asaj faqeje shfaqet në plan.
4. Dera hapet nga ana e murit ku është treguesi. Shtyp {{key:H}} (ose kliko {{ui:Kthe}}) për t'i vendosur menteshat në skajin tjetër.
5. Kliko. Dera vendoset dhe vegla mbetet e ndezur për të tjerën. Shëno mesin e murit dhe dera vendoset vetë në qendër.

Për ta vendosur në një distancë të saktë, shëno murin pranë qoshes nga ku mat, shkruaj distancën (për shembull `2'` ose `600`) dhe shtyp {{key:Enter}}. Distanca shkon nga skaji më i afërt i faqes së murit deri te skaji i derës.

## Vendos një dritare

1. Kliko {{ui:Dritare}} (ose shtyp {{key:N}}).
2. Zgjidh llojin: **Dritare fikse**, **Dritare me një kanat të ngritshëm**, **Dritare me dy kanate të ngritshme**, **Dritare me kanat**, **Dritare rrëshqitëse**, **Dritare me kanat sipër**, **Dritare panoramike** ose **Dritare sipër dere**, dhe **W**, **H** dhe **Prag** (lartësia e fundit të dritares mbi dysheme).
3. Shëno një mur dhe kliko, ose shkruaj një distancë dhe shtyp {{key:Enter}} si për dyert. Dritarja ndodhet në anën e jashtme të murit.

## Lëviz, kthe, fshi

- Me {{ui:Përzgjidh}} të ndezur, tërhiq një derë ose dritare përgjatë murit të saj. Tërhiqe mbi një mur tjetër për ta zhvendosur atje.
- {{key:Delete}} fshin dyert dhe dritaret e zgjedhura; muri mbyllet përsëri.
- Zhvendosja ose fshirja e një muri zhvendos ose fshin ato që ka brenda. Kur fillimi i murit lëviz përgjatë vijës së vet, dyert dhe dritaret e tij mbajnë vendin e tyre.
- {{ui:Zhbëj}} dhe {{ui:Ribëj}} marrin çdo vendosje, zhvendosje ose fshirje mbrapsht dhe përpara.

## Çfarë refuzohet

- **Nuk hyn në atë mur.** Dera ose dritarja është më e gjerë se muri, ose do të dilte nga një skaj i tij. Provo një gjerësi më të vogël ose një mur më të gjatë.
- **Është më e lartë se muri.** Prag plus lartësia është mbi krye të murit.

## Çfarë ruhet

Çdo derë ose dritare është një derë ose dritare IFC me madhësinë e saj, funksionimin (për shembull hapje e vetme majtas), llojin e madhësisë së saj (një lloj për çdo madhësi të familjes së saj), `Pset_DoorCommon` ose `Pset_WindowCommon` dhe sasitë bazë, duke mbushur një hapje IFC në murin e vet. Sipërfaqja neto anësore e murit dhe vëllimi e lënë hapjen jashtë. Programet e tjera BIM e hapin si derë në një mur.

## Të dobishme

- Plani shfaq dyert të hapura në 90° me hapjen e tyre, dyert rrëshqitëse si dy panele, dyert xhepi që rrëshqasin brenda murit, dyert e garazhit si vijë me pika mbi kokë, dhe dritaret me kornizën dhe vijat e xhamit.
- Gjerësia është gjerësia e përgjithshme e kornizës; kanati i derës është gjerësia minus dy kasat.
- Kopjimi i dyerve dhe dritareve të vizatuara nuk është ndërtuar ende: vendos një tjetër.

## Dritare daljeje për bodrum me gropë

Zgjidh **Dritare daljeje për bodrum me gropë** në listën e llojeve të dritareve. Fillon si një kanat 36 × 48 inch me prag 36 inch mbi nivelin. Gropa është në anën e jashtme të murit, me të paktën 48 inch gjerësi të lirë, 36 inch dalje dhe fund 6 inch nën prag. Shfaqet si vija me pika në plan dhe si tre anë të hapura lart në 3D. Gropa është pjesë e trupit IFC të dritares, kështu që ruajtja, zhvendosja, ndryshimi i madhësisë ose fshirja e dritares e merr me vete. Ndryshimi i madhësisë mban të paktën 6 inch pranë çdo kasë.

Këto janë parazgjedhje modelimi, jo një certifikim i përputhshmërisë së daljes. Kontrollo veçmas hapjen e lirë reale të prodhuesit, kërkesat lokale, nivelin, kullimin dhe çdo shkallë të nevojshme. Thellësia dhe lartësia e gropës janë dimensione të caktuara paraprakisht; nuk ndjekin terrenin.
