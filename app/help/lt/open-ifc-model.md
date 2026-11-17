---
title: Atidarykite IFC modelį ir apžvelkite jį 3D
summary: Atidarykite IFC failą, sukite, slinkite ir priartinkite, o orientuotis padės Tilpti, Viršus, Priekis ir Iš šono.
keywords: ifc, 3d, sukti, slinkti, priartinti, tilpti, viršaus vaizdas, priekio vaizdas, šono vaizdas, naršyti, vaizdo kubas, kamera
from: 68b460dd
---

## Ką darysite

Atidarysite IFC modelį, judėsite po jį 3D ir pereisite prie standartinių vaizdų. Apie penkias minutes.

Reikia `.ifc` failo. Dauguma BIM programų jį eksportuoja; Revit programoje tai **File > Export > IFC**. Žr. [Gaukite projekto failą į 3D per IFC](topic:rvt-to-ifc).

## Veiksmai

1. Spustelėkite {{ui:Pasirinkti failą}} (arba viršutiniame kairiajame kampe esančią nuleidimo sritį).
2. Pasirinkite savo `.ifc` failą ir patvirtinkite.
3. Palaukite, kol būsenos eilutė baigs. Pirmą kartą ji rodo „Paleidžiamas IFC variklis…“, tada „Skaitomas modelis…“ ir „Kuriama geometrija: … iš … elementų“.
4. Pažiūrėkite į modelį: jis atsidaro trijų ketvirčių vaizde, pritaikytas prie ekrano.
5. Spustelėkite {{ui:Viršus}} įrankių juostoje virš modelio, kad žiūrėtumėte tiesiai žemyn.
6. Spustelėkite {{ui:Priekis}}, kad žiūrėtumėte į priekį, tada {{ui:Iš šono}}, kad žiūrėtumėte iš šono.
7. Spustelėkite {{ui:Tilpti}} arba paspauskite {{key:F}}, kad grįžtumėte į trijų ketvirčių vaizdą visam modeliui.

## Ką turėtumėte matyti

- Modelį viduryje su plonomis tamsiomis kraštinėmis, kad atrodytų kaip brėžinys.
- Kairėje esantį skydelį {{ui:Failas}}: failo pavadinimą, dydį, IFC schemą (pvz., IFC2X3 ar IFC4), projekto pavadinimą, fazę, programą, iš kurios eksportuota, autorių, eksporto datą, elementų ir trikampių skaičius.
- Sąrašus {{ui:Aukštai}} ir {{ui:Elementai}} po juo.
- Būsenos eilutę: „Atidaryta *failo pavadinimas*: *n* elementų per *s* s“.

## Judėjimas aplink

:::mouse
| Norint | Atlikite tai |
|---|---|
| Sukti | Vilkite kairiuoju klavišu |
| Slinkti | Vilkite dešiniuoju klavišu arba laikykite {{key:Shift}} (arba {{key:Mod}}) ir vilkite kairiuoju klavišu |
| Priartinti | Slinkite ratuku arba vilkite vidurio klavišu |
| Pamatyti viską | Paspauskite {{key:F}} arba spustelėkite {{ui:Tilpti}} |
:::

:::mac mouse
Jutiklinėje srityje: vilkite vienu pirštu, kad suktumėte; laikykite {{key:Shift}} arba {{key:Mod}} ir vilkite, kad slinktumėte; slinkite dviem pirštais arba suspauskite pirštus, kad priartintumėte. Paspaudimas dviem pirštais yra dešiniojo klavišo spustelėjimas, ir galite vilkti su juo, kad slinktumėte, bet {{key:Shift}} ir vilkimas yra patogiau.
:::

:::touch
| Norint | Atlikite tai |
|---|---|
| Sukti | Vilkite vienu pirštu |
| Priartinti | Suspauskite dviem pirštais |
| Slinkti | Perkelkite du pirštus kartu |
| Pamatyti viską | Palieskite {{ui:Tilpti}} |
:::

Sukimas visada sukasi apie tašką modelio viduryje. Slinkimas perkelia tą tašką, todėl po ilgo slinkimo sukimas gali atrodyti necentrinis: spustelėkite {{ui:Tilpti}}, kad atstatytumėte.

## Užpildyta, kraštinės ar karkasas

Trys maži mygtukai tiesiai virš vaizdo kubo parenka, kaip piešiamas modelis: {{ui:Užpildyta}}, {{ui:Užpildyta su kraštinėmis}} (numatytasis) ir {{ui:Karkasas}}. Jie taip pat yra komandos (meniu {{ui:Vaizdas}} ir pritaikymo sąraše), todėl gali turėti savo klavišus. {{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}} yra eilutėje {{ui:Vaizdas}} įrankių juostoje.

## Dažnos klaidos

- **Tikitės pavadintų vaizdų.** BimCraft turi keturis fiksuotus vaizdus ({{ui:Tilpti}}, {{ui:Viršus}}, {{ui:Priekis}}, {{ui:Iš šono}}), vaizdo kubą apatiniame dešiniajame kampe ir laisvą sukimą. Vaizdų jis neišsaugo.
- **Ieškote planų ir pjūvių.** Šioje versijoje nėra 2D planų ar pjūvio dėžių. Pjūvį padarykite viena {{ui:Pjūvis}} plokštuma ([Pjūvis IFC modelyje su pjūvio plokštuma](topic:section-plane)) arba išjunkite aukštus: [Rodykite ir slėpkite aukštus, erdves ir kraštines](topic:storeys-and-spaces).
- **Atidarote projekto failą ir tikitės 3D.** Projekto failas atsidaro kaip failo kortelė. Pirmiausia eksportuokite IFC.
- **Atidarote `.ifczip`.** Išskleiskite jį arba eksportuokite paprastą `.ifc`.
- **Labai didelis modelis skirtuką daro lėtą arba jis nulūžta.** Žr. [Naršyklės, įrenginiai ir atmintis](topic:platforms).

## Toliau

[Pasirinkite elementą ir perskaitykite jo savybes](topic:inspect-element).
