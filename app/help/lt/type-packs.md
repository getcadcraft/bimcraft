---
title: Tipų paketai: sienų tipų bendrinimas kaip atviri failai
summary: Įrašykite sienų tipus su jų sluoksniais, medžiagomis, žymomis, klasifikacijos kodais ir šeimomis kaip vieną atvirą failą (paprastą JSON ar IFC) ir pridėkite jį į kitą projektą. Galima skaityti ir kitos programos IFC failų sienų tipus.
keywords: tipų paketas, tipai, sienos tipas, bendrinti, eksportas, importas, biblioteka, atvirasis formatas, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, medžiagos, sluoksniai, šablonas, įmonės standartas, šeimos
from: e4c91331
---

## Ką darysite

Perkelkite sienų tipus iš vieno projekto į kitą arba perduokite juos kitos programos naudotojui. Tipų paketas kiekvieną sienos tipą laiko su jo sluoksniais, storiais, medžiagomis, šerdimi, tuštumomis, sluoksnių prioritetu, plėtros lygiu, kiekių duomenimis ir klasifikacijos kodais, taip pat su visomis pridėtomis šeimomis. Tai atviras failas: paprastas JSON tekstas, kurį gali perskaityti bet kas, arba IFC failas. Niekas jame nepririšta prie firmos, šalies ar paskyros.

## Įrašykite tipus iš projekto

1. Modelio juostoje atidarykite **Duomenys** ir pasirinkite {{ui:Type packs}}.
2. Skiltyje {{ui:Save types from this project}} pažymėkite sienų tipus, kuriuos norite įtraukti. Projekto tipai jau pažymėti; pradinį tipą galima pridėti, ir jis įtraukiamas kaip kopija. Pažymėkite šeimas, jei jas norite įtraukti.
3. Įveskite {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} atsisiunčia `.cctypes.json` failą. {{ui:Save as IFC (.ifc)}} atsisiunčia IFC failą, kuriame yra tik tipai: kiekvienas sienos tipas kaip IfcWallType su savo medžiagų sluoksnių rinkiniu, medžiagomis ir klasifikacija, skirtas bet kuriai BIM programai.

## Pridėkite tipus į projektą

1. Tame pačiame dialogo lange pasirinkite {{ui:Open a pack or an IFC file…}} ir pasirinkite `.json` paketą ar `.ifc` failą.
2. Dialogas parodo, ką failas turi: kiekvieną sienos tipą su storiu, sluoksnių skaičiumi ir kodais, medžiagas bei šeimas.
3. Pasirinkite, kas nutiks su {{ui:A type this project already has}}: **Keep the project's** (palikti projekto), **Add the pack's as a copy** (pridėti paketo kaip kopiją; gaus naują pavadinimą, pasibaigiantį „(2)“) arba **Replace it (only when no wall uses it)** (pakeisti, tik kai nė viena siena jo nenaudoja).
4. {{ui:Add to the project}}. Dialogas parodo, kas pridėta, nukopijuota, pakeista ar palikta. Tai yra vienas anuliavimo žingsnis.

Nauji tipai iš karto yra sienos įrankio tipų sąraše.

## Grindų, stogo ir lubų tipai

Įrašomų tipų sąraše taip pat yra projekto grindų, stogo ir lubų tipai bei jų pradiniai tipai (pažymėti: Grindys, Stogas, Lubos). Paketas gali turėti visas keturias rūšis; kiekvienas tipas nurodo savo IFC klasę (IfcWallType, IfcSlabType, IfcCoveringType). Grindų, stogo ar lubų tipas, kurį naudoja elementai, iš paketo nepakeičiamas: keiskite jį tipo redaktoriuje.

## Vienas tipas kaip bibliotekos elementas

Pažymėkite tiksliai vieną tipą ir pasirinkite **Save as a Library item…** (įrašyti kaip bibliotekos elementą…). Tai įrašo `.cctype.json` failą: bibliotekos elementą Tipų rūšies, kuriame yra tas vienas tipas (jo sluoksniai, medžiagos, LOD ir klasifikacijos kodai). Įkelkite jį į Biblioteką, kad bendrintumėte. **Open a pack or an IFC file** (atidaryti paketą arba IFC failą) perskaito ir tokį elementą bei prideda jo tipą į projektą kaip paketą.

## Verta žinoti

- IFC failą iš kitos programos galima atidaryti ir čia. Skaitomas kiekvienas jo sienos tipas, turintis medžiagų sluoksnių: pavadinimas, sluoksnių medžiagos, storiai ir tuštuma yra paties failo. Kurie sluoksniai yra šerdis ir ką kiekvienas sluoksnis daro (apdaila, konstrukcija, izoliacija), yra tik spėjama: tipas pažymimas **(guessed)** ir jį reikia patikrinti sienos tipo redaktoriuje. Sienos tipas be sluoksnių paliekamas ir pažymimas pavadinimu.
- Medžiaga, kurią projektas jau turi, išlieka kaip yra. Nauja medžiaga, kurios pavadinimas jau užimtas, gauna „(pack)“ po pavadinimo.
- Tipas, kurį naudoja sienos, niekada nepakeičiamas iš paketo. Keiskite jį sienos tipo redaktoriuje, kuris tinkamai perkelia jo sienas.
- Kodas, nustatytas vienai sienai, nekeliauja: jis priklauso tai sienai. Kodas, nustatytas tipui, keliauja.
- Failas su lauku, kurio formatas neturi, sluoksniu, kurio medžiaga trūksta, ar bet kas, kas nėra paprastas tekstas, atmetamas, o pranešimas nurodo, kur ir kodėl.
- Dar nepadaryta: grindų, stogo ir lubų tipai (šioje versijoje jų tipų nėra: kiekvienas turi savo storį), durų ir langų tipai, išskyrus šeimas, ir šrafūros ar spalvos iš kitos programos failo.
