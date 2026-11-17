---
title: Grupet e modelit
summary: Bëj nga elementët e zgjedhur një grup me emër, vendose grupin përsëri diku tjetër, dhe ndrysho një kopje për t'i ndryshuar të gjitha.
keywords: grup, grup modeli, grupim, çgrupim, instancë, kopje, përsëritje, njësi tipike, traveje, banesë, redakto grupin, IfcGroup
from: 121c5027
---

## Çfarë do të bësh

Grupo një traveje tipike, vendose disa herë, dhe ndrysho çdo kopje duke ndryshuar një.

## Ku është mjeti

- Paraqitjet e shiritit: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Paraqitja klasike: shiriti Vizato › menyja {{ui:Rooms}} › Grup modeli.

## Hapat

1. Me mjetin Përzgjidh, zgjidh elementët: kliko një, Ctrl+klik ose Shift+klik për të tjerët.
2. Zgjidh {{ui:Model Group}}. Bëhen grup menjëherë. Shkruaj një {{ui:Group name}} në rresht më parë për ta emërtuar, ose shkruaje më pas për ta riemërtuar.
3. Shtyp {{ui:Place another}} dhe kliko ku duhet të qëndrojë kopja: qoshja e saj e poshtme majtas shkon te klikimi.
4. Ndrysho çdo kopje: lëviz një skaj muri, ndrysho madhësinë e një dere, fshi një kolonë. Çdo kopje tjetër e grupit ndryshon në të njëjtin hap, dhe një Zhbëj i kthen të gjitha mbrapsht.
5. Ndërsa Grup modeli është aktiv, një klikim mbi një element zgjedh tërë grupin e tij.

## Gjëra të tjera që mund të bësh

- {{ui:Add the picked}}: shto më shumë elementë te grupi që zgjodhe për last.
- {{ui:Ungroup}}: kjo kopje bëhet elemente të zakonshme përsëri. Kopjet e tjera mbeten grup.
- Lëviz një kopje të tërë me Zhvendos: është i njëjti grup në një vend të ri; të tjerat nuk lëvizin.
- Fshi elementët e një kopjeje dhe ajo kopje zhduket.

## Çfarë mund të jetë në një grup

Muret me dyert dhe dritaret e tyre, kolonat dhe dyshemetë e vizatuara mund të vendosen përsëri dhe të mbahen të njëjta. Një grup mund të mbajë edhe elementë të tjerë, por atëherë nuk mund të vendoset përsëri ende; rreshti thotë arsyen.

Kopjet zhvendosen, nuk rrotullohen dhe nuk pasqyrohen.

## Në IFC

Një grup është një IfcGroup me një IfcRelAssignsToGroup për anëtarët e tij, të cilët mbeten mure, kolona dhe dysheme të zakonshme. Çdo kopje e një grupi të njëjtë mban të njëjtin id definicioni.

## Ende nuk është ndërtuar

- Rrotullimi ose pasqyrimi i një kopjeje.
- Shkallët, çatitë, dyshemetë e dhomave dhe artikujt e bibliotekës në një grup që vendoset përsëri.
- Profili i murit, prirja dhe hapjet e murit nuk kalojnë te kopjet.
- Grupe brenda grupeve.

Shih edhe [Zhvendos, rreshto dhe shpërndaj](topic:move-align-distribute).
