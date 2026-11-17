---
title: Taškai užbrėžimui ir kaip pastatytų taškų patikra
summary: Sunumeruokite vietas, kurias brigada užbrėžia iš modelio – kolonų centrus, sienų galus, inkarinius varžtus, movas, bet kurį pasirinktą elementą, – įrašykite jas tachimetrui, o tada nuskaitykite brigados kaip pastatytus taškus ir pamatykite, kas neatitinka.
keywords: išdėstymo taškai, užbrėžimas, tachimetras, geodezija, taškų failas, csv, txt, pnezd, penzd, xyz, northing, easting, elevation, kaip pastatyta, patikra, nuokrypis, inkariniai varžtai, kolonų centrai, sienų galai, movos, geodezinės koordinatės, žemėlapio konvertavimas
from: acea9606
---

Dešinėje esanti skiltis {{ui:Points}} sukuria taškus, kuriuos brigada užbrėžia vietoje iš atidaryto modelio, ir vėliau patikrina taškus, kuriuos jie išmatuoja.

## Sukurkite taškus

1. Atidarykite IFC modelį ir skirtuką {{ui:Points}}.
2. Pažymėkite, ką užbrėžti: **kolonų centrai** (kiekvienos kolonos centrinės linijos pėda), **sienų galai** (abu kiekvienos sienos ašies galai jos pagrinde), **inkariniai varžtai**, **movos** (elementai, kurių pavadinimas ar tipas nurodo movą) ir **pasirinkti elementai** (kiekvienas savo įdėjimo taške – pirmiausia pasirinkite juos vaizde).
3. Pasirinkite pirmą numerį ir priešdėlį, koordinates, vienetus, stulpelius ir failą:
   - **Model**: failo pačios koordinatės. **Matavimo tinklelis**: modelio geopriskyrimo žemėlapio tinklelis (rodomas tik tada, kai IFC turi žemėlapio konvertavimą), metrais arba pasirinktu vienetu.
   - Stulpeliai **PNEZD** (taškas, šiaurės, rytų, aukštis, aprašas), **PENZD** arba **XYZ**; **CSV** (kableliai) arba **TXT** (tabuliacijos).
4. Paspauskite {{ui:Make points}}: sąraše jie rodomi, o vaizde pažymimi mėlynai. {{ui:Download the points}} įrašo failą.

Taškai eina fiksuota tvarka – pagal rūšį, o paskui eilėmis per planą – todėl iš to paties modelio sukūrus juos iš naujo, gaunami tie patys skaičiai. Failas yra tas, kurį atidaro CivilCraft ir kurį rašo CadCraft EXPORTPOINTS: vienas taškas eilutėje, trys skaitmenys po kablelio, aprašas kabutėse, kai jame yra kablelis.

## Patikrinkite kaip pastatytus taškus

Kai brigada grąžina, ką išmatavo, pasirinkite **toleranciją** milimetrais ir kaip sieti taškus – pagal **taško numerį** (jie išsaugojo jūsų numerius) arba pagal **artimiausią matavimą** – ir paspauskite {{ui:Read as-built points…}}. Failą skaitykite tais pačiais vienetais ir koordinatėmis, kuriais jį įrašėte.

Kiekvienas projektinis taškas tada yra **tolerancijos ribose**, **už jos ribų**, **neišmatuotas**, o bet kuris matavimas, kurio niekas neprašė, yra **papildomas**. Lentelėje pateikiami skirtumai pasirinktu vienetu įrankių juostoje, pėdos (ft) rodomos kaip dešimtainiai coliai (in) (kaip pastatyta minus projektas: rytai, šiaurė, aukštis ir atstumas plane); vaizde kiekvienas taškas pažymimas žaliai arba raudonai su linija iki matavimo, o pilkai, kai jis neišmatuotas. {{ui:Report (CSV)}} įrašo visą palyginimą.

Šis skirtukas modelio nekeičia. Dar neįgyvendinta: užbrėžimas nuo perdangos kraštų, tinklelio susikirtimų ar jums sukurtų angų ir taškų siuntimas tiesiai į prietaisą – naudokite failą.
