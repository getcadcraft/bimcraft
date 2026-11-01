---
title: Failai, kuriuos BimCraft atidaro ir įrašo
summary: Visi BimCraft atidaromi formatai, ką jie išsaugo, kur įrašomi išsaugoti failai ir kas keičiasi skirtingose naršyklėse bei kai esate neprisijungę.
keywords: formatai, atidaryti, įrašyti, eksportuoti, atsisiųsti, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, įkelti, privatumas, failo dydis
from: a1f0161b
---

BimCraft skaito failus jūsų kompiuteryje, naršyklės skirtuke. **Niekas neįkeliama** į CadCraft ar kam nors kitam. Kai įrašote, BimCraft naršyklei perduoda naują failą atsisiuntimui; jis niekada neperrašo failo, kurį atidarėte.

## Ką ji atidaro

| Formatas | Plėtiniai | Ką gausite |
|---|---|---|
| IFC | `.ifc` | Modelis 3D, aukštai, elementų kiekiai ir kiekvieno elemento savybės. Pavadinimus, žymas ir atskiras savybių reikšmes galima keisti. |
| Projekto ir šeimos failai | `.rvt` `.rfa` `.rte` `.rft` | Failo kortelė: leidimas, versija, bendras darbas, projekto informacija, šeimos parametrai, susieti failai ir peržiūros paveikslėlis. 3D nėra. |
| DWG | `.dwg` | Brėžinys 2D: modelio erdvė, kiekvienas lapas, sluoksniai, susieti brėžiniai, paveikslėliai ir spausdinimo vaizdas. Modelio erdvė rodoma ir 3D. Patikrinti formatai nuo AutoCAD 2000 iki 2018. |
| DXF | `.dxf` | Tas pats, kaip DWG. |
| STEP | `.step` `.stp` | Detalė, įranga ar tiekėjo modelis (AP203, AP214, AP242) 3D: kiekvienas kietasis kūnas tampa vienu elementu (klasė „building element proxy“) nedidelio IFC modelio viename aukšte, nuskaitomas trikampiais tikruoju dydžiu, o surinkimas – su kiekviena dalimi, kur failas ją nurodo. Toliau tai veikia kaip bet koks IFC: savybės, pjūviai, matavimas, įrašymas kaip IFC. Spalvos ir surinkimo medis nenuskaitomi. |
| Taškų debesys | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Nuskaitymas 3D vaizde, šalia modelio arba atskirai: žr. [Rodyti taškų debesį šalia modelio](topic:point-clouds). |
| Projekto paketas | `.ccbundle.zip` | Modelis su vaizdais, maketais ir savybių grupėmis: žr. [Atidaryti projekto paketą](topic:open-project-bundle). |
| Aplankas | bet koks | Ataskaita apie kiekvieną modelį, brėžinį ir projekto paketą jame. Bet kuris IFC, modelis, brėžinys ar paketas ataskaitoje atidaromas vienu paspaudimu. |

[Ką BimCraft nuskaito iš kiekvieno formato](topic:file-formats) aprašoma išsamiau.

BimCraft nustato, koks failas, žiūrėdamas į pirmuosius jo baitus, o ne tik į pavadinimą, todėl projekto failas su neįprastu plėtiniu vis tiek atsidaro kaip failo kortelė.

### Neatidaromi

- `.ifczip` ir `.ifcxml`: BimCraft praneša: „.ifczip dar nepalaikomas. Įrašykite arba eksportuokite modelį kaip paprastą .ifc failą.“ Išskleiskite `.ifczip` (jame yra paprastas `.ifc`) arba eksportuokite dar kartą kaip paprastą IFC.
- DGN brėžiniai įtraukiami į aplanko ataskaitą, bet neatsidaro.
- PDF, paveikslėliai ir biuro failai patys neatsidaro. Paveikslėliai naudojami kaip nuotraukos DWG viduje, o {{ui:Versija}} › {{ui:Iš brėžinio…}} paverčia PDF ar skenuoto brėžinio puslapius sienomis: žr. [Sienos iš brėžinių rinkinio](topic:walls-from-plans).

## Ką ji įrašo

| Spustelite | Gausite | Kur |
|---|---|---|
| {{ui:Įrašyti kaip IFC}} | Naujas IFC failas su jūsų pakeitimais, pavadintas „*originalus pavadinimas* (edited).ifc“ | Jūsų naršyklės atsisiuntimų aplankas |
| {{ui:Atsisiųsti CSV}} įrangos žiniaraštyje | CSV su sąrašo elementais, pavadintas „*brėžinio pavadinimas* equipment.csv“ | Jūsų naršyklės atsisiuntimų aplankas |

Kiti dalykai įrašomi ten, kur jie sukuriami, kiekvienas savo temoje: {{ui:USD}} ([Eksportuoti modelį kaip USD](topic:usd)), .glb failas {{ui:Atvaizdavimui}}, atvaizduoti paveikslėliai, lapai ir planai kaip PDF, žiniaraščiai ir sąrašai kaip CSV, BCF problemos, COBie skaičiuoklė, šeimų failai ir registruoti nuskaitymai kaip LAS arba E57. BimCraft neįrašo DWG, DXF ar projekto failų ir niekada nekeičia atidarytų failų.

:::chromium
Chrome ir Edge atsisiuntimus įrašo į aplanką, nustatytą jų parametruose, paprastai Atsisiuntimai. Norėdami, kad kiekvieną kartą būtų klausiama, kur įrašyti, naršyklės atsisiuntimų parametruose įjunkite „Klausti, kur įrašyti kiekvieną failą prieš atsisiunčiant“.
:::

:::firefox
Firefox įrašo į aplanką Atsisiuntimai, nebent jo parametruose nustatėte „Visada klausti, kur įrašyti failus“.
:::

:::safari
Safari įrašo į aplanką Atsisiuntimai, nebent pasirinksite kitą aplanką **Safari > Nustatymai > Bendra > Failų atsisiuntimo vieta**.
:::

## Įrašymas antrą kartą

Kiekvieną kartą įrašant atsisiunčiamas visas modelis su **visais pakeitimais nuo jo atidarymo**, o ne tik pakeitimais po paskutinio įrašymo. Sąrašas {{ui:Pakeitimai}} po kiekvieno įrašymo vėl tuščias, todėl negalite anuliuoti to, kas buvo prieš įrašymą. Norėdami pradėti iš naujo nuo originalo, dar kartą atidarykite originalų failą.

## Dideli failai ir atmintis

- **IFC** failai nuskaitomi visi į skirtuko atmintį, o 3D geometrija užima dar daugiau atminties. Modelis, kurio dydis keli šimtai megabaitų, gali būti per daug nešiojamam kompiuteriui. Virš 1.5 milijono trikampių kraštinės išjungiamos, kad būtų taupoma atmintis („Kraštinės išjungtos labai dideliems modeliams“).
- **Projekto failai** nenuskaitomi visi. BimCraft nuskaito tik mažas dalis, kurių jai reikia, apie 40 KB–100 KB, kad ir koks didelis būtų failas, todėl 500 MB centrinis modelis tinklo diske atsidaro akimirksniu.
- **DWG ir DXF** failai nuskaitomi visi. Labai didelis brėžinys rodo „Šis brėžinys labai didelis; rodoma tik jo dalis.“
- **Aplankai** su iki 20,000 failų atsidaro. Nuskaitoma tik keli kilobaitai, kurių reikia kiekvienai modelio kortelei.

Daugiau žr. [Naršyklės, įrenginiai ir atmintis](topic:platforms).

## Prisijungus ir neprisijungus

Atidarant failus interneto ryšys niekada nereikalingas. Vienas skaitytuvas įkeliamas iš svetainės, kai jo pirmą kartą prireikia: IFC variklis – kai pirmą kartą atidarote IFC modelį („Paleidžiamas IFC variklis…“). DWG ir DXF skaitytuvai yra programos dalis.

:::offline
Esate neprisijungę. Jei programos juostos mygtukas rodo {{ui:Paruošta neprisijungus}}, kiekvienas formatas atsidaro įprastai. Jei ne, IFC modelis neatsidarys, nebent jis jau buvo atidarytas šiame skirtuke: pirmiausia vėl prisijunkite. Žr. [Prisijungus ir neprisijungus](topic:online-offline).
:::

Norėdami naudoti BimCraft be ryšio, prisijungę spustelėkite programos juostoje {{ui:Įrašyti neprisijungus}} ir palaukite, kol pasirodys {{ui:Paruošta neprisijungus}}. Įrašyta kopija užima apie 33 MB; ji apima IFC variklį, todėl IFC modeliai atsidaro ir neprisijungus. [Darbas neprisijungus](common:offline) bendrai paaiškina įrašytas kopijas.

## Įrašymas debesyje

Įrašymas debesyje dar nepasiekiamas. Redaguotas kopijas įrašykite savo kompiuteryje ar biuro failų serveryje, kaip ir bet kurį kitą failą. Žr. [Jūsų failai](common:your-files).
