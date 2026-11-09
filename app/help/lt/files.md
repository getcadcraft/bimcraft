---
title: Failai, kuriuos BimCraft atidaro ir įrašo
summary: Visi formatai, kuriuos BimCraft atidaro, ką jie išsaugo, ką BimCraft įrašo, kur įrašomi failai ir kas keičiasi skirtingose naršyklėse bei kai esate neprisijungę.
keywords: formatai, atidaryti, įrašyti, eksportuoti, atsisiųsti, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, įkelti, privatumas, failo dydis
from: a7275dbf
---

BimCraft nuskaito failus jūsų kompiuteryje, naršyklės skirtuke. **Niekas neįkeliama** į CadCraft ar kam nors kitam. Kai įrašote, BimCraft naršyklei perduoda naują failą atsisiuntimui; jis niekada neperrašo failo, kurį atidarėte.

## Ką atidaro

| Formatas | Plėtiniai | Ką gausite |
|---|---|---|
| IFC | `.ifc` | Modelis 3D, aukštai, elementų kiekiai ir kiekvieno elemento savybės. Pavadinimus, žymas ir atskiras savybių reikšmes galima keisti. |
| Projekto ir šeimos failai | `.rvt` `.rfa` `.rte` `.rft` | Failo kortelė: leidimas, versija, bendras darbas, projekto informacija, šeimos parametrai, susieti failai ir peržiūros paveikslėlis. Jokio 3D. |
| DWG | `.dwg` | Brėžinys 2D: modelio erdvė, kiekvienas lapas, sluoksniai, susieti brėžiniai, paveikslėliai ir spausdinimo vaizdas. Modelio erdvė taip pat 3D. Tikrinami formatai nuo AutoCAD 2000 iki 2018. |
| DXF | `.dxf` | Tas pats, kaip DWG. |
| STEP | `.step` `.stp` | Detalė, įrenginys ar tiekėjo modelis (AP203, AP214, AP242) 3D: kiekvienas kietasis kūnas tampa vienu elementu (pastato elemento proxy) nedidelio IFC modelio viename aukšte, nuskaitomas kaip trikampiai tikruoju dydžiu; surinkimas su kiekviena detale ten, kur ją nurodo failas. Toliau veikia kaip bet kuris IFC: savybės, pjūviai, matavimas, įrašymas kaip IFC. Spalvos ir surinkimo medis nenuskaitomi. |
| Taškų debesys | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skenavimas 3D vaizde, šalia modelio arba atskirai: žr. [Rodyti taškų debesį šalia modelio](topic:point-clouds). |
| Projekto paketas | `.ccbundle.zip` | Modelis su jo vaizdais, maketais ir savybių grupėmis: žr. [Atidaryti projekto paketą](topic:open-project-bundle). |
| Aplankas | bet koks | Ataskaita apie kiekvieną modelį, brėžinį ir projekto paketą jame. Bet kuris IFC, modelis, brėžinys ar paketas ataskaitoje atidaromas vienu paspaudimu. |

[Ką BimCraft nuskaito iš kiekvieno formato](topic:file-formats) aprašoma išsamiau.

BimCraft nustato, kas yra failas, žiūrėdamas į jo pirmuosius baitus ir pavadinimą, todėl projekto failas su neįprastu plėtiniu vis tiek atsidaro kaip failo kortelė.

### Neatidaromi

- `.ifczip` ir `.ifcxml`: BimCraft rodo pranešimą ".ifczip dar nepalaikomas. Įrašykite arba eksportuokite modelį kaip įprastą .ifc failą." Išskleiskite `.ifczip` (jame yra įprastas `.ifc`) arba eksportuokite iš naujo kaip įprastą IFC.
- DGN brėžiniai įtraukiami į aplanko ataskaitą, bet neatsidaro.
- PDF, paveikslėliai ir biuro failai savaime neatsidaro. Paveikslėliai naudojami kaip paveikslėliai DWG viduje, o {{ui:Versija}} › {{ui:Iš brėžinio…}} paverčia PDF ar skenuoto dokumento puslapius sienomis: žr. [Sienos iš planų rinkinio](topic:walls-from-plans).

## Ką įrašo

| Spustelite | Gausite | Kur |
|---|---|---|
| {{ui:Įrašyti kaip IFC}} | Naują IFC failą su jūsų pakeitimais, pavadintą "*originalus pavadinimas* (edited).ifc" | Jūsų naršyklės atsisiuntimų aplankas |
| {{ui:Atsisiųsti CSV}} įrangos žiniaraštyje | CSV su sąrašo elementais, pavadintą "*brėžinio pavadinimas* equipment.csv" | Jūsų naršyklės atsisiuntimų aplankas |

Kita įrašoma ten, kur ji sukuriama, kiekviena savo temoje: {{ui:USD}} ([Eksportuoti modelį kaip USD](topic:usd)), {{ui:Collada}} ([Eksportuoti modelį kaip Collada arba Google Earth](topic:collada): .dae ir Google Earth .kmz), .glb {{ui:Atvaizdavimui}}, atvaizduoti paveikslėliai, lapai ir planai kaip PDF, grafikai ir sąrašai kaip CSV, BCF problemos, COBie skaičiuoklė, šeimos failai ir užregistruoti skenavimai kaip LAS arba E57. BimCraft neįrašo DWG, DXF ar projekto failų ir niekada nekeičia failų, kuriuos atidarėte.

:::chromium
Chrome ir Edge įrašo atsisiuntimus į aplanką, nustatytą jų parametruose, paprastai Atsisiuntimai. Norėdami, kad kiekvieną kartą būtumėte klausiami, kur įrašyti failą, naršyklės atsisiuntimų parametruose įjunkite „Prieš atsisiunčiant klausti, kur įrašyti kiekvieną failą“.
:::

:::firefox
Firefox įrašo į aplanką Atsisiuntimai, nebent parametruose nustatėte „Visada klausti, kur įrašyti failus“.
:::

:::safari
Safari įrašo į Atsisiuntimai, nebent pasirinksite kitą aplanką **Safari > Parametrai > Bendra > Failų atsisiuntimo vieta**.
:::

## Įrašymas antrą kartą

Kiekvienas įrašymas atsisiunčia visą modelį su **visais pakeitimais nuo jo atidarymo**, o ne tik pakeitimais po paskutinio įrašymo. Sąrašas {{ui:Pakeitimai}} po kiekvieno įrašymo vėl tuščias, todėl negalite anuliuoti iki įrašymo. Norėdami pradėti nuo originalo iš naujo, atidarykite originalų failą dar kartą.

## Dideli failai ir atmintis

- **IFC** failai visi nuskaitomi į skirtuko atmintį, o 3D geometrija užima dar daugiau atminties. Kelių šimtų megabaitų modelis gali būti per didelis nešiojamajam kompiuteriui. Viršijus 1,5 milijono trikampių, briaunos išjungiamos, kad būtų taupoma atmintis („Briaunos išjungtos labai dideliems modeliams“).
- **Projekto failai** nuskaitomi ne visi. BimCraft nuskaito tik mažas dalis, kurių jam reikia, apie 40 KB–100 KB, nepriklausomai nuo failo dydžio, todėl 500 MB centrinis modelis tinklo diske atsidaro akimirksniu.
- **DWG ir DXF** failai nuskaitomi visi. Labai didelis brėžinys rodo pranešimą „Šis brėžinys labai didelis; rodoma tik jo dalis.“
- **Aplankai** iki 20 000 failų atsidaro. Nuskaitomi tik keli kilobaitai, reikalingi kiekvienai modelio kortelei.

Daugiau apie [Naršykles, įrenginius ir atmintį](topic:platforms).

## Prisijungus ir neprisijungus

Failų atidarymui interneto nereikia. Vieną skaitytuvą iš svetainės įkelia pirmą kartą, kai jo prireikia: IFC variklį, kai pirmą kartą atidarote IFC modelį („Paleidžiamas IFC variklis…“). DWG ir DXF skaitytuvai yra programos dalis.

:::offline
Esate neprisijungę. Jei programos juostos mygtukas rodo {{ui:Paruošta neprisijungus}}, visi formatai atsidaro įprastai. Jei ne, IFC modelis neatsidarys, nebent jis jau buvo atidarytas šiame skirtuke: pirmiausia prisijunkite iš naujo. Žr. [Prisijungus ir neprisijungus](topic:online-offline).
:::

Norėdami naudoti BimCraft be ryšio, prisijungę programos juostoje spustelėkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol atsiras {{ui:Paruošta neprisijungus}}. Įrašyta kopija užima apie 33 MB; ji apima IFC variklį, todėl IFC modeliai atsidaro ir neprisijungus. [Darbas neprisijungus](common:offline) paaiškina įrašytas kopijas apskritai.

## Įrašymas debesyje

Įrašymas debesyje dar nepasiekiamas. Redaguotas kopijas įrašykite savo kompiuteryje ar biuro failų serveryje, kaip ir bet kurį kitą failą. Žr. [Jūsų failai](common:your-files).
