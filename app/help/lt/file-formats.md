---
title: Ką BimCraft nuskaito iš kiekvieno formato
summary: Tiksliai, ką BimCraft nuskaito iš IFC, projekto ir šeimos failų, DWG ir DXF, ir ko nepaliečia.
keywords: formatai, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versijos, suderinamumas, ką nuskaito
from: 9b8dfb4f
---

## IFC

| Kas | Išsamiau |
|---|---|
| Geometrija | Kiekvienas elementas su forma, nuspalvintas kaip nurodo failas. Patalpos ir erdvės braižomos permatomos ir iš pradžių paslėptos |
| Aukštai | Pastato aukštai pagal aukščio tvarką ir tai, kokie elementai stovi ant kiekvieno. Elementai be aukšto sugrupuojami kaip „Nėra aukšte“ |
| Elementų skaičius | Kiek elementų kiekvienos rūšies (sienos, durys, perdangos…), rodoma {{ui:Elements}} |
| Projekto duomenys | Projekto pavadinimas, ilgas pavadinimas ir etapas; schema; eksportuojanti programa, autorius ir eksporto data iš failo antraštės |
| Elementų duomenys | Pavadinimas, tipas, objekto tipas, žymė, aprašas, GlobalId; kiekvienas savybių rinkinys ir kiekių rinkinys elemente ir jo tipe |

Redaguojama: pavadinimas, objekto tipas, žymė, aprašas ir atskiros savybių reikšmės. Įrašoma kaip naujas IFC failas. Schemos IFC2X3, IFC4 ir IFC4X3 atsidaro, skaitomos BimCraft savo IFC varikliu; viskas, ko jis dar nemoka nubraižyti, išvardijama skiltyje {{ui:File}} po **Dar nenubraižyta**. Modelis perkeliamas į pradžios tašką atidarant, todėl modelis, esantis toli nuo jos, vis tiek rodomas ekrano viduryje. `.ifczip` ir `.ifcxml` neatsidaro.

## Projekto ir šeimos failai

`.rvt` projektai, `.rte` projekto šablonai, `.rfa` šeimos ir `.rft` šeimos šablonai.

| Kas | Išsamiau |
|---|---|
| Failo informacija | Leidimas ir versija, bendras darbas, centrinio modelio kelias, paskutinio įrašymo kelias, naudotojo vardas, lokalė, dokumento GUID |
| Projekto informacija | Paties projekto laukai (pavadinimas, numeris, klientas, adresas, būsena…), be naujo projekto numatytųjų reikšmių |
| Šeimos informacija | Šeimos pavadinimas, kategorija, leidimas, paskutinis atnaujinimas ir jos parametrai pagal grupes |
| Nuorodos | Susietų modelių, CAD nuorodų, paveikslėlių ir pagrindinių lentelių, į kurias rodo failas, sąrašas |
| Peržiūros paveikslėlis | Miniatiūra, įrašyta faile |

Nenuskaitoma: 3D modelis, elementai, vaizdai, lapai ir žiniaraščiai. Jie saugomi nedokumentuotu formatu. BimCraft iš kiekvieno failo nuskaito tik kelias dešimtis kilobaitų, todėl failo dydis beveik nesvarbus.

## .pln, .pla, .tpl ir .bpn projekto failai

Dar nenuskaitoma: BimCraft tai praneša, kai atidarote vieną iš jų. Modelį eksportuokite kaip IFC, o brėžinius – kaip DWG; žr. [Atidaryti .pln ir .pla projekto failus](topic:pln-project-files).

## DWG ir DXF

| Kas | Išsamiau |
|---|---|
| Erdvės | Modelio erdvė ir kiekvienas lapas (maketas) skirtukų tvarka |
| Vaizdo langai | Kiekvieno lapo vaizdo langai su jų masteliu, pasukimu ir užšaldytais sluoksniais |
| Sluoksniai | Pavadinimas, spalva, įjungta/išjungta, užšaldyta, spausdinimo žymė ir linijos storis |
| Objektai | Linijos, polilinijos, lankai, apskritimai, elipsės, splainai, brūkšniuotės ir kūnai, tekstas ir daugiaeilutis tekstas, blokai ir atributai, matmenys, rodyklės ir daugiarodyklės, lentelės, taškai, paveikslėliai |
| Susieti brėžiniai | Braižomi ten, kur įterpti, kai randami jų failai |
| Paveikslėliai | Braižomi iš paveikslėlių failų, kai randami (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Įrangos žymos | Maitinimo paslaugų elementų žymos (`KCL-ITEM` atributai), įrangos žiniaraščiui |

Viskas kita skaičiuojama po **Dar nenubraižyta** ir niekada nespėliojama. Patikrinti DWG formatai nuo AutoCAD 2000 iki 2018 (R13 ir R14 failai taip pat priimami, bet bandymų rinkinyje jų nebuvo; senesni DWG neatsidaro); skiltyje {{ui:Drawing}} rodomas formato kodas (pavyzdžiui, AC1032). Visų versijų DXF failai atsidaro, įskaitant R12. Abu skaitomi BimCraft savais skaitytuvais, šiame skirtuke. Į DWG ar DXF niekas neįrašoma atgal.

## Aplanke

| Rūšis | Plėtiniai | Ataskaitoje |
|---|---|---|
| Modeliai | `.rvt` `.rfa` `.rte` `.rft` | Sugrupuoti su numeruotomis atsarginėmis kopijomis, patikrinti dėl sveikatos, kortelė nuskaityta, nuorodos patikrintos |
| IFC | `.ifc` | Išvardijama; atsidaro 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Išvardijama kartu su modeliais, kurie į juos nurodo; DWG ir DXF atsidaro 2D, DGN – ne |
| Likučiai | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Išvardijama skiltyje **Atidėta** |
| Tarnybiniai aplankai | `*_backup`, `*_log`, `Revit_temp`, paslėpti aplankai | Išvardijami skiltyje **Atidėta**, neskaitomi |

Žr. [Aplanko ataskaita: vaidmenys, būsenos ir nuorodos](topic:folder-roles).
