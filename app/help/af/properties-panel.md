---
title: Velde in die Eienskappe-paneel
summary: Wat elke veld in die Eienskappe-paneel en die Lêer-, Tekening- en Vouer-paneel beteken, en watter jy kan verander.
keywords: eienskappe, velde, attribute, globalid, guid, kopieer, kopieerwaarde, kopieer alles, csv, knipbord, reeksnommer, etiket, objektipe, lyn, express-id, eiendomstel, pset, hoeveelhede, skema, lêerpaneel
from: fe55b435
---

## 'n IFC-element

Die boonste deel van die {{ui:Properties}}-paneel wys die element se soort sonder die "Ifc"-voorvoegsel (byvoorbeeld "Door", "WallStandardCase", "FurnishingElement") en sy naam, of "Sonder naam".

| Veld | Betekenis | Redigeerbaar |
|---|---|---|
| Naam | Die element se naam, dikwels die familie- en tiponaam van die uitvoerder | Ja |
| Tipe | Die naam van die element se tipe, wanneer dit een het | Nee |
| Voorwerptipe | 'n Vrye-teks tipebeskrywing wat sommige uitvoerders invul | Ja |
| Etiket | Die element se etiket of merk; baie uitvoerders skryf die element-ID hier | Ja |
| Beskrywing | Vrye teks | Ja |
| GlobalId | Die element se permanente 22-karakter-IFC-identifiseerder, dieselfde in elke uitvoer van dieselfde element | Nee |
| Lyn | Die element se lynnommer (`#1234`) in hierdie IFC-lêer. Dit verander tussen uitvoere | Nee |

Hieronder kom die **eiendomstelle**, gesorteer volgens naam:

- Elke stel maak oop en toe wanneer jy op sy naam klik. Die eerste drie is oop.
- 'n Stel wat "(type)" merk, behoort aan die element se tipe: "Tipe-eiendom: 'n verandering hier geld vir elke element van hierdie tipe."
- Hoeveelheidstelle (lengtes, oppervlaktes, volumes, tellings, gewigte) is net-lees.
- Lyste en opsomde waardes word gewys, net-lees.
- Ja/Nee-waardes wys as **Ja** of **Nee**.
- Getalle word tot vier desimale vir vertoning afgerond. Lengtes ('n lengte-eiendom of 'n hoeveelheid se lengte) wys in die {{ui:Eenhede}} wat op die nutsbalk gekies is, met die eenheid langs hulle, en jy kan 'n nuwe een in daardie eenheid tik of met 'n ander eenheidsmerk (2.4 m, 8'-0"): BimCraft skryf die lêer se eie getal terug. Ander getalle wys soos die lêer hulle het.
- 'n Leë waarde wys as *leeg*. 'n Verander waarde is vetdruk met 'n blou balk langs.

## Kopieer 'n waarde

Elke waarde in {{ui:Properties}} het 'n klein kopieerknoppie langs hom: klik om daardie waarde presies soos gewys na die knipbord te plaas, byvoorbeeld 'n GlobalId, 'n reeksnommer of enige eiendomstelwaarde. Kopiëring begin nooit 'n wysiging nie.

Bo-aan kopieer {{ui:Copy all}} elke waarde van die element as teks, stel vir stel, en {{ui:Copy as CSV}} kopieer hulle as rye van groep, eiendom en waarde om in 'n sigblad te plak; leë waardes word behou sodat elke veld 'n ry het. Dit werk dieselfde vir 'n element van 'n ander oop model; wanneer meer as een model oop is, begin die CSV met 'n Model-kolom wat sy lêer noem.

## Die Lêer-paneel (IFC)

| Veld | Betekenis |
|---|---|
| Lêer, Grootte | Die lêer wat jy oopgemaak het |
| Skema | Die IFC-weergawe, soos IFC2X3 of IFC4 |
| Projek | Die projek se naam en lang naam |
| Fase | Die projekfase, as die uitvoerder een geskryf het |
| Uitgevoer vanaf | Die uitvoerende program, uit die lêerkop |
| Outeur | Die outeur in die lêerkop |
| Uitgevoer | Die datum en tyd in die lêerkop |
| Elemente | Hoeveel elemente met 'n vorm getekend is |
| Driehoeke | Hoeveel driehoeke hul vorms maak; 'n maatstaf van hoe swaar die model is |

## Die Lêer-paneel (projek- en familielêers)

| Veld | Betekenis |
|---|---|
| Soort | Projek, Projeksjabloon, Familie of Familiesjabloon |
| Gestoor in | Die vrystelling wat die lêer laas gestoor het |
| Bou | Die presiese bou van daardie vrystelling |
| Gelees | Hoeveel van die lêer BimCraft gelees het, uit sy grootte |

## Die Tekening-paneel (DWG en DXF)

| Veld | Betekenis |
|---|---|
| Formaat | Die vrystelling waarin die tekening gestoor is, met sy formaatkode, soos AC1032 |
| Eenhede | Die tekening se invoegingseenhede, wanneer ingestel |
| Entiteite | Hoeveel voorwerpe gelees is |
| Lae | Hoeveel lae |
| Blaaie | Hoeveel blaaie (uitlegte), of Geen |
| Gekoppelde tekeninge | Hoeveel van sy gekoppelde tekeninge gevind en gelaai is |
| Toerusting | Hoeveel gemerkte toerustingitems op blaaie is |

## Die Vouer-paneel

| Veld | Betekenis |
|---|---|
| Vouer, Lêers, Grootte | Die vouer wat jy oopgemaak het, hoeveel lêers dit hou en hul totale grootte |
| Modelle | Projek- en familielêers, elk met sy rugsteune eenmaal getel |
| CAD-tekeninge, IFC-modelle | Hoeveel van elk |
| Probleme | Hoeveel modelkopieë onvolledig of onleesbaar is, of Geen |
