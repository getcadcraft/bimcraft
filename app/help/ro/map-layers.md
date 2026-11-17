---
title: O hartă pe teren sub model
summary: Așezați o hartă stradală sau o imagine aeriană pe teren sub un model IFC georeferențiat, din plăci de hartă, servicii de hărți sau o imagine cu fișier de lume.
keywords: hartă, straturi de hartă, hartă de bază, aerian, satelit, amplasament, teren, plăci, xyz, wms, wmts, serviciu de hartă, fișier de lume, georeferențiere, ifcmapconversion, CRS proiectat, EPSG, context al amplasamentului
from: 84e2e9df
---

## Ce veți face

Vedeți modelul la locul său: harta stradală sau imaginea aeriană a amplasamentului, pe teren, sub el.

## Pași

1. Deschideți un model IFC care poartă locul său pe hartă (o conversie cartografică, IfcMapConversion, cu un sistem de coordonate proiectat). Exportatoarele o scriu când coordonatele proiectului (punctul topografic, coordonatele comune) sunt setate.
2. Alegeți {{ui:Afișare}} › {{ui:Straturi de hartă…}}. Dialogul spune sistemul modelului, de exemplu EPSG:28356. Un model fără conversie cartografică nu poate avea straturi de hartă: dialogul o spune.
3. Activați {{ui:Straturi de hartă de pe internet}}. Până atunci nu se cere nimic de la niciun server; când este activată, serverele pe care le adăugați văd zona din jurul modelului și adresa de internet, niciodată modelul.
4. În {{ui:Adăugare strat}} alegeți plăci (o adresă cu `{z}`, `{x}` și `{y}`), un serviciu WMS, WMTS sau ArcGIS ({{ui:Obținere straturi}}, apoi alegeți unul) sau o imagine cu fișierul său de lume.
5. Închideți dialogul. Harta stă pe teren chiar sub cel mai jos punct al modelului, peste amprenta modelului și încă pe atât în jurul ei.

:::note
Harta este doar pe ecran; nu este salvată în fișierul IFC. Lista de straturi este păstrată în acest browser. Folosiți doar servicii de hărți ale căror condiții permit acest lucru.
:::
