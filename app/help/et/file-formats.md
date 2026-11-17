---
title: Mida BimCraft loeb igast vormingust
summary: Täpselt see, mida BimCraft loeb IFC-, projekti- ja perekonnafailidest, DWG- ja DXF-failidest, ning mida ta jätab puutumata.
keywords: vormingud, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versioonid, ühilduvus, mida loetakse
from: 9b8dfb4f
---

## IFC

| Loetakse | Üksikasjad |
|---|---|
| Geomeetria | Iga element, millel on kuju, värvitud nii, nagu fail ütleb. Ruumid ja alad joonistatakse läbipaistvana ja algselt peidetult |
| Korrused | Hoone korrused kõrguse järjekorras ja see, milline element millisel korrusel asub. Elemendid, mis ei asu ühelgi korrusel, rühmitatakse kui „Not on a storey“ |
| Elementide arvud | Mitu elementi igast liigist (seinad, uksed, plaadid…), näidatud jaotises {{ui:Elemendid}} |
| Projekti andmed | Projekti nimi, pikk nimi ja faas; skeem; eksportiv programm, autor ja ekspordikuupäev faili päisest |
| Elemendi andmed | Nimi, tüüp, objektitüüp, märgis, kirjeldus, GlobalId; iga atribuudikomplekt ja koguste komplekt elemendil ja tema tüübil |

Muudetav: nimi, objektitüüp, märgis, kirjeldus ja üksikud atribuudi väärtused. Salvestatakse uue IFC-failina. Avanevad skeemid IFC2X3, IFC4 ja IFC4X3, loetuna BimCrafti enda IFC-mootoriga; kõike, mida ta veel ei suuda joonistada, loetletakse jaotises **Not drawn yet** paneelil {{ui:Fail}}. Mudel teisaldatakse avamisel päritolupunkti, nii et kaugele sellest paigutatud mudel kuvatakse siiski ekraani keskel. `.ifczip` ja `.ifcxml` ei avane.

## Projekti- ja perekonnafailid

`.rvt` projektid, `.rte` projektimallid, `.rfa` perekonnad ja `.rft` perekonnamallid.

| Loetakse | Üksikasjad |
|---|---|
| Faili teave | Väljaanne ja versioon, koostöörežiim, keskmudeli tee, viimati salvestatud tee, kasutajanimi, lokaat, dokumendi GUID |
| Projekti teave | Projekti enda väljad (nimi, number, klient, aadress, staatus…), ilma uue projekti vaikeväärtusteta |
| Perekonna teave | Perekonna nimi, kategooria, väljaanne, viimane uuendus ning selle parameetrid rühmade kaupa |
| Lingid | Seotud mudelite, CAD-linkide, piltide ja märksõnatabelite loend, millele fail viitab |
| Eelvaate pilt | Failis salvestatud pisipilt |

Ei loeta: 3D-mudel, elemendid, vaated, lehed ja loendid. Need salvestatakse dokumenteerimata vormingus. BimCraft loeb igast failist ainult mõne kümne kilobaiti, nii et failisuurus tegelikult ei loe.

## .pln, .pla, .tpl ja .bpn projektifailid

Veel ei loeta: BimCraft ütleb seda, kui te ühe avate. Eksportige mudel IFC-na ja joonised DWG-na; vt [Avage .pln- ja .pla-projektifailid](topic:pln-project-files).

## DWG ja DXF

| Loetakse | Üksikasjad |
|---|---|
| Ruumid | Mudeliruum ja iga leht (paigutus) vahekaardi järjekorras |
| Vaatepordid | Iga lehe vaatepordid koos mõõtkava, pöörde ja külmutatud kihtidega |
| Kihid | Nimi, värv, sisse/välja, külmutatud, joonistamismärk ja joonejämedus |
| Objektid | Jooned, polüjooned, kaared, ringid, ellipsid, splainid, viirutused ja tahked kehad, tekst ja mitmerealine tekst, plokid ja atribuudid, mõõtmed, viiktekstid ja mitmeviiktekstid, tabelid, punktid, pildid |
| Seotud joonised | Joonistatud sinna, kuhu need on sisestatud, kui nende failid leitakse |
| Pildid | Joonistatud pildifailidest, kui leitakse (PNG, JPEG, GIF, BMP, WebP; mitte TIFF) |
| Seadmemärgised | Toitlustuse eseme märgised (`KCL-ITEM` atribuudid), seadmeloendi jaoks |

Kõik muu loetakse jaotises **Not drawn yet** ega arvata kunagi. Kontrollitud on DWG-vormingud AutoCAD 2000 kuni 2018 (ka R13 ja R14 failid on vastu võetud, kuid neid polnud testikomplektis; vanemad DWG-d ei avane); paneel {{ui:Joonis}} näitab vormingukoodi (näiteks AC1032). DXF-failid kõigist versioonidest avanevad, sealhulgas R12. Mõlemad loetakse BimCrafti enda lugejatega sellel vahekaardil. Midagi ei salvestata tagasi DWG-sse ega DXF-i.

## Kaustas

| Liik | Laiendid | Aruandes |
|---|---|---|
| Mudelid | `.rvt` `.rfa` `.rte` `.rft` | Rühmitatud nummerdatud varukoopiatega, tervisekontrollitud, kaardi loetud, lingid kontrollitud |
| IFC | `.ifc` | Loetletud; avaneb 3D-vaates |
| CAD | `.dwg` `.dxf` `.dgn` | Loetletud koos mudelitega, mis neid lingivad; DWG ja DXF avanevad 2D-vaates, DGN ei avane |
| Jäänused | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Loetletud jaotises **Set aside** |
| Korrashoiu kaustad | `*_backup`, `*_log`, `Revit_temp`, peidetud kaustad | Loetletud jaotises **Set aside**, ei loeta |

Vt [Kaustaaruanne: rollid, staatused ja lingid](topic:folder-roles).
