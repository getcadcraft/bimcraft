---
title: Pradžia su BimCraft
summary: Ką BimCraft daro šiuo metu, kaip atidaryti pirmąjį modelį, peržiūrėti jį 3D, pakeisti vieną reikšmę ir įrašyti kopiją.
keywords: pradžia, pirmas paleidimas, atidaryti, ifc, rvt, dwg, greita pradžia, įvadas, peržiūros priemonė, bim
from: fc2dea19
---

BimCraft yra CadCraft šeimos pastatų modelių programa. Šioje versijoje ji **atveria, nuskaito ir tikrina** pastatų failus bei **redaguoja duomenis IFC modeliuose**. Naujų elementų dar nebraižo ir nemodeliuoja. Laikykite ją modelių peržiūros ir tikrinimo priemone, kuri taip pat leidžia taisyti pavadinimus, žymas ir savybių reikšmes IFC faile.

Ką ji atidaro:

| Failas | Ką gausite |
|---|---|
| IFC (`.ifc`) | Visas modelis 3D: sukimas, aukštai, elementų savybės ir pavadinimų bei savybių reikšmių redagavimas |
| Projekto ir šeimos failai (`.rvt`, `.rfa`, `.rte`, `.rft`) | Failo kortelė: leidimas, kuriame jis įrašytas, projekto informacija, peržiūros paveikslėlis ir susieti failai. 3D nėra. |
| DWG ir DXF | Brėžinys 2D: modelio erdvė ir kiekvienas lapas, sluoksniai, susieti brėžiniai, spausdinimo vaizdas ir įrangos žiniaraštis žymėtiems maitinimo paslaugų brėžiniams |
| Projekto aplankas | Ataskaita apie kiekvieną modelį aplanke: atsarginės kopijos, nuorodos, pažeistos kopijos ir pasiūlymas, nuo kurio failo pradėti |

Viskas vyksta jūsų naršyklėje, jūsų kompiuteryje. **Niekas neįkeliama.** Išsamiau žr. [Failai, kuriuos BimCraft atidaro ir įrašo](topic:files).

## Atidaryti BimCraft

1. Atidarykite BimCraft naujausioje naršyklėje. Veikia Chrome, Edge, Firefox ir Safari; [Naršyklės, įrenginiai ir atmintis](topic:platforms) išvardija skirtumus.
2. Palaukite tuščio ekrano su užrašu „Atidarykite pastato modelį.“

:::note
BimCraft veikia naršyklėje ir darbalaukyje CadCraft Studio aplinkoje kartu su kitomis programomis. Įrašymas debesyje dar nepasiekiamas: failus atidarote iš kompiuterio ir kopijas įrašote atgal į jį.
:::

## Atidarykite pirmąjį modelį

Greičiausias būdas pamatyti, ką daro BimCraft, – IFC failas.

1. Spustelėkite {{ui:Pasirinkti failą}} ekrano viduryje.
2. Pasirinkite `.ifc` failą programoje {{pick:mac=Finder|windows=File Explorer|linux=jūsų failų tvarkyklė}} ir patvirtinkite.
3. Palaukite, kol apatinėje ekrano eilutėje bus rodoma „Paleidžiamas IFC variklis…“, o paskui „Kuriama geometrija“.

Turėtumėte matyti modelį 3D viduryje, {{ui:Failas}} skydelį ir {{ui:Aukštai}} sąrašą kairėje bei tuščią {{ui:Savybės}} skydelį dešinėje. Būsenos eilutė baigiasi žodžiu „Atidaryta“ ir elementų skaičiumi.

:::tip
Failą taip pat galite nuvilkti iš {{pick:mac=Finder|windows=File Explorer|linux=jūsų failų tvarkyklė}} tiesiai į puslapį. Vilkdami ekrane rodoma „Atleiskite, kad atidarytumėte“.
:::

:::offline
IFC variklis įkeliamas iš svetainės, kai pirmą kartą atidarote IFC modelį, nebent BimCraft buvo įrašytas naudoti neprisijungus. DWG ir DXF brėžiniams, projekto failams ir aplankams nieko papildomo nereikia: jų skaitytuvai yra programos dalis. Jei programos juostos mygtukas rodo {{ui:Paruošta neprisijungus}}, viskas atsidaro neprisijungus. Jei ne, IFC modeliai neatsidarys, kol vėl neprisijungsite, nebent jau buvo atidarytas šiame skirtuke. Žr. [Prisijungus ir neprisijungus](topic:online-offline).
:::

:::online
Vykstate ten, kur nėra ryšio? Spustelėkite programos juostoje {{ui:Įrašyti neprisijungus}} ir palaukite, kol pasirodys {{ui:Paruošta neprisijungus}}. Įrašyta kopija (apie 11 MB) apima IFC variklį. Žr. [Darbas neprisijungus](common:offline).
:::

## Apžvelkite aplinką

:::mouse
1. Vilkite kairiuoju pelės mygtuku, kad suktumėte aplink modelį.
2. Keiskite mastelį sukdami ratuką.
3. Vilkite dešiniuoju pelės mygtuku, kad slinktumėte. „Mac“ jutiklinėje plokštėje vietoje to laikykite {{key:Shift}} ir vilkite.
4. Paspauskite {{key:F}} arba spustelėkite {{ui:Tilpti}}, kad vėl pamatytumėte visą modelį.
:::

:::touch
1. Vilkite vienu pirštu, kad suktumėte.
2. Spauskite dviem pirštais, kad keistumėte mastelį, ir perkelkite du pirštus kartu, kad slinktumėte.
3. Palieskite {{ui:Tilpti}}, kad vėl pamatytumėte visą modelį.
:::

## Atlikite vieną tikrą veiksmą: pataisykite žymą

1. Spustelėkite sieną, duris ar bet kurį modelio elementą. Jis pasidaro mėlynas, o jo savybės atsiranda dešinėje.
2. {{ui:Savybės}} skydelyje spustelėkite reikšmę šalia **Žyma**.
3. Įveskite naują žymą ir paspauskite {{key:Enter}}.
4. Pažiūrėkite į kairėje atsidariusią sekciją {{ui:Pakeitimai}}: jūsų pakeitimas įrašytas su senąja ir nauja reikšme.

## Įrašykite kopiją

1. Spustelėkite {{ui:Įrašyti kaip IFC}} sekcijoje {{ui:Pakeitimai}} arba paspauskite {{key:Mod+S}}.
2. Raskite naują failą savo atsisiuntimų aplanke. Jis pavadintas pagal originalą su pridėta „ (edited)“, pavyzdžiui `Clinic (edited).ifc`.

Jūsų originalus failas niekada nekeičiamas. [Keisti IFC savybes ir įrašyti redaguotą kopiją](topic:edit-ifc-properties) išsamiai paaiškina redagavimą.

## Kur eiti toliau

- [BimCraft ekranas](topic:workspace): kiekvienas skydelis pavadinimu.
- [Atėjus iš kitų BIM ir brėžinių programų](topic:coming-from): kas atrodys kitaip, jei esate įpratę prie Revit.
- [Atidaryti visą projekto aplanką](topic:open-project-folder): nurodykite BimCraft projekto aplanką ir leiskite jai surūšiuoti failus.
- [Peržiūrėti DWG arba DXF brėžinį](topic:view-dwg): lapai, sluoksniai ir spausdinimo vaizdas.
