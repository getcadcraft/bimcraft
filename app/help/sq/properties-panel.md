---
title: Fushat e panelit Vetitë
summary: Çfarë do të thotë çdo fushë në panelin Vetitë dhe në panelet Skedari, Vizatimi dhe Dosja, dhe cilat mund t'i ndryshosh.
keywords: vetitë, fusha, atribute, globalid, guid, kopjo, kopjo vlerën, kopjo të gjitha, csv, kujtesa e kopjimit, numër serial, etiketë, lloji i objektit, linjë, express id, grup vetish, pset, sasi, skemë, panel skedari
from: fe55b435
---

## Një element IFC

Maja e panelit {{ui:Properties}} tregon llojin e elementit pa parashtesën "Ifc" (për shembull "Door", "WallStandardCase", "FurnishingElement") dhe emrin e tij, ose "Pa emër".

| Fusha | Kuptimi | E ndryshueshme |
|---|---|---|
| Emri | Emri i elementit, shpesh emri i familjes dhe i tipit nga eksportuesi | Po |
| Lloji | Emri i tipit të elementit, kur ka një | Jo |
| Lloji i objektit | Përshkrim i lirë i tipit që disa eksportues e plotësojnë | Po |
| Etiketa | Etiketa ose shenja e elementit; shumë eksportues shkruajnë ID-në e elementit këtu | Po |
| Përshkrimi | Tekst i lirë | Po |
| GlobalId | ID-ja e përhershme IFC 22-karakteshe e elementit, e njëjtë në çdo eksport të të njëjtit element | Jo |
| Rreshti | Numri i rreshtit të elementit (`#1234`) në këtë skedar IFC. Ndryshon midis eksporteve | Jo |

Më poshtë vijnë **grupet e vetive**, të renditura sipas emrit:

- Çdo grup hapet dhe mbyllet kur kliko emrin e tij. Tre të parët janë të hapur.
- Një grup i shënuar "(type)" i përket tipit të elementit: "Veti tipi: një ndryshim këtu zbatohet për çdo element të këtij tipi."
- Grupet e sasive (gjatësi, sipërfaqe, vëllime, numërime, peshë) janë vetëm për lexim.
- Listat dhe vlerat e enumeruara shfaqen, vetëm për lexim.
- Vlerat Po/Jo shfaqen si **Po** ose **Jo**.
- Numrat rrumbullakosen në katër shifra dhjetore për shfaqje. Gjatësitë (një veti gjatësie ose gjatësia e një sasie) shfaqen në {{ui:Units}} të zgjedhur në shiritin e mjeteve, me njësinë pranë tyre, dhe mund të shkruash një të re në atë njësi ose me një shenjë tjetër njësie (2.4 m, 8'-0"): BimCraft e shkruan përsëri numrin e vetë skedarit. Numrat e tjerë shfaqen si i ka skedari.
- Një vlerë bosh shfaqet si *bosh*. Një vlerë e ndryshuar është me shkronja të trasha dhe me një shirit blu pranë.

## Kopjo një vlerë

Çdo vlerë në {{ui:Properties}} ka një buton të vogël kopjimi pranë saj: kliko për ta vendosur atë vlerë në kujtesën e kopjimit ashtu siç shfaqet, për shembull një GlobalId, një numër serial ose çdo vlerë të grupit të vetive. Kopjimi nuk fillon kurrë një redaktim.

Në krye, {{ui:Copy all}} kopjon çdo vlerë të elementit si tekst, grup pas grupi, dhe {{ui:Copy as CSV}} i kopjon si rreshta grupi, veti dhe vlerë për t'i ngjitur në një fletëllogaritëse; vlerat boshe ruhen kështu që çdo fushë ka një rresht. Kjo funksionon njësoj për një element të një modeli tjetër të hapur; kur hapen më shumë modele, CSV fillon me një kolonë Model që emëron skedarin e tij.

## Paneli Skedari (IFC)

| Fusha | Kuptimi |
|---|---|
| Skedari, Madhësia | Skedari që hape |
| Skema | Versioni IFC, si IFC2X3 ose IFC4 |
| Projekti | Emri i projektit dhe emri i gjatë i tij |
| Faza | Faza e projektit, nëse eksportuesi e ka shkruar |
| Eksportuar nga | Programi eksportues, nga koka e skedarit |
| Autori | Autori në kokën e skedarit |
| Eksportuar | Data dhe ora në kokën e skedarit |
| Elementët | Sa elemente me formë u vizatuan |
| Trekëndëshat | Sa trekëndësha bëjnë format e tyre; një masë se sa e rëndë është modeli |

## Paneli Skedari (projekt dhe skedarë familjeje)

| Fusha | Kuptimi |
|---|---|
| Lloji | Projekt, Shabllon projekti, Familje ose Shabllon familjeje |
| Ruajtur në | Versioni që e ruajti skedarin për herë të fundit |
| Ndërtimi | Ndërtimi i saktë i atij versioni |
| Lexuar | Sa nga skedari lexoi BimCraft, nga madhësia e tij |

## Paneli Vizatimi (DWG dhe DXF)

| Fusha | Kuptimi |
|---|---|
| Formati | Versioni me të cilin u ruajt vizatimi, me kodin e formatit, si AC1032 |
| Njësitë | Njësitë e futjes së vizatimit, kur janë vendosur |
| Entitetet | Sa objekte u lexuan |
| Shtresat | Sa shtresa |
| Fletët | Sa fletë (paraqitje), ose Asnjë |
| Vizatimet e lidhura | Sa nga vizatimet e lidhura u gjetën dhe u ngarkuan |
| Pajisjet | Sa pajisje të etiketuara janë në fletë |

## Paneli Dosja

| Fusha | Kuptimi |
|---|---|
| Dosja, Skedarët, Madhësia | Dosja që hape, sa skedarë mban dhe madhësia totale e tyre |
| Modelet | Skedarë projekti dhe familjeje, secili me kopjet e tij rezervë të numëruara një herë |
| Vizatimet CAD, Modelet IFC | Sa nga secila |
| Problemet | Sa kopje modeli janë të paplota ose të palexueshme, ose Asnjë |
