---
title: Zgjidh një element dhe lexo vetitë e tij
summary: Kliko çdo element në modelin 3D për ta theksuar dhe për të lexuar emrin, llojin, etiketën, GlobalId, grupet e vetive dhe sasitë e tij.
keywords: veti, zgjedhje, klikim, element, parametra, grupe vetish, pset, sasi, globalid, guid, lloj, inspekto
from: 43b80aa8
---

## Çfarë do të bësh

Zgjidh elemente në një model IFC dhe lexo gjithçka që thotë skedari për to: atributet, grupet e vetive, vetitë e tipit dhe sasitë.

## Hapat

1. Hap një model IFC.
2. Kliko një element, për shembull një derë. Kliko pa tërhequr: një tërheqje më e madhe se disa piksela rrotullon në vend që të zgjedhë.
3. Shiko elementin: theksohet me blu.
4. Shiko panelin {{ui:Vetitë}} në të djathtë. Në krye janë lloji i elementit (si "Door" ose "WallStandardCase") dhe emri i tij.
5. Lexo bllokun e parë: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** dhe **Line**.
6. Lëviz poshtë te grupet e vetive. Tre të parat janë të hapura; kliko emrin e çdo grupi tjetër për ta hapur.
7. Kliko një element tjetër për të kaluar tek ai.
8. Shtyp {{key:Esc}}, ose kliko sfondin bosh, për të pastruar zgjedhjen.

## Çfarë duhet të shohësh

- Elementi i theksuar dhe të dhënat e tij në të djathtë.
- Grupet e vetive në rend alfabetik. Grupet që vijnë nga **tipi** i elementit kanë " (type)" pas emrit të tyre dhe shënimin "Veti tipi: një ndryshim këtu zbatohet për çdo element të këtij tipi."
- Grupet e sasive (si gjatësi, sipërfaqe dhe vëllime) të listuara bashkë me grupet e tjera. Sasitë janë vetëm për lexim.
- Vlerat që mund t'i ndryshosh duken si butona. [Ndrysho vetitë IFC dhe ruaj një kopje të redaktuar](topic:edit-ifc-properties) tregon si.

[Fushat e panelit të vetive](topic:properties-panel) shpjegon çdo fushë.

## Si arrihen elementët e fshehur

1. Për të arritur diçka brenda ndërtesës, hiq shenjën te katet mbi të në listën {{ui:Katet}}.
2. Për të arritur një mur pas një vëllimi dhome, fik {{ui:Hapësira}}.
3. Kliko elementin.

## Gabime të zakonshme

- **Tërheqje e lehtë gjatë klikimit.** BimCraft e trajton atë si rrotullim dhe nuk zgjedh. Mbaje miun të palëvizur.
- **Pritja e njësive pranë numrave.** Vlerat shfaqen siç ruhen në skedar, të rrumbullakosura në katër shifra dhjetore, pa simbol njësie. Gjatësitë në një eksport metrik zakonisht janë milimetra ose metra; kontrollo cilësimet e eksportuesit.
- **Kërkimi i një parametri me emrin e njohur.** Eksportuesit i riemërtojnë dhe i grupojnë parametrat në grupe vetish IFC si `Pset_WallCommon`. Shiko çdo grup; parametrat e personalizuar shpesh gjenden në një grup me emrin e programit eksportues ose të kompanisë tënde.
- **Pritja e një kutie kërkimi.** Kliko për të zgjedhur një element; {{key:Mod}}+klikim ose {{key:Shift}}+klikim zgjedh më shumë, dhe {{key:Mod+A}} zgjedh çdo element që shfaqet. Lista {{ui:Elementët}} në të majtë vetëm numëron elementët sipas llojit; nuk është e klikueshme.
- **Zgjedhja mbi një kartelë skedari projekti.** Një kartelë skedari nuk ka elemente për të zgjedhur: "Vetitë e elementit kanë nevojë për modelin 3D. Hap një eksport IFC të këtij skedari për t'i parë."
