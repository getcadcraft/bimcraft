---
title: Keli IFC modeliai kartu
summary: Pridėkite daugiau IFC failų į sceną, pvz., architektūros, konstrukcijų ir inžinerinių sistemų, matykite juos tose pačiose koordinatėse, perkelkite vieną, paslėpkite vieną ir pasirinkite, kurį redaguojate.
keywords: federuoti, federacija, federuotas modelis, keli modeliai, keli failai, sujungti, perdengimas, koordinavimas, disciplina, konstrukcija, mep, inžinerinės sistemos, poslinkis, perkelti modelį, aktyvus modelis, pridėti modelį
from: df0efbbf
---

## Ką darysite

Žiūrėkite skirtingų disciplinų modelius vienoje vietoje: architekto modelį su konstrukcijų ir inžinerinių sistemų modeliais. Kiekvienas lieka savo failu; BimCraft tik rodo juos kartu.

## Žingsniai

1. Atidarykite pirmąjį IFC modelį įprastu būdu.
2. Kairėje, {{ui:Modeliai}}, spustelėkite {{ui:Pridėti modelį…}} ir pasirinkite vieną ar daugiau IFC failų. Kiekvienas atsiranda sąraše ir 3D vaizde.
3. Nuimkite žymę nuo modelio, kad jį paslėptumėte; pažymėkite, kad vėl jį rodytumėte.
4. Jei modelis atkeliauja netinkamoje vietoje (kitame geodeziniame taške), spustelėkite {{ui:Perkelti}} po juo, įveskite, kiek metrų perkelti pagal X, Y ir Z, ir spustelėkite {{ui:Taikyti}}.
5. Modelis su tašku yra tas, kurį redaguojate. Spustelėkite kito modelio tašką, kad redaguotumėte tą.
6. Spustelėkite × šalia modelio, kad jį pašalintumėte iš scenos.

## Atidaryti komandos modelius

Kai atidarytas modelis yra debesies failas komandos projekte, po sąrašu atsiranda {{ui:Atidaryti komandos modelius}}. Jis atidaro kitus projekto IFC modelius šalia šio, kiekvieną perkeltą pagal projekto nustatytą poslinkį. Modeliai, paslėpti nuo jūsų, lieka neatidaryti ir skaičiuojami; modelis, kurį projektas pasuka, atidaromas be pasukimo ir taip pat skaičiuojamas; ne IFC failai (pvz., DWG) praleidžiami ir įvardijami būsenos eilutėje. Modelis, kuris jau atidarytas, niekada neatidaromas du kartus. Mygtukas paslėptas failui, kuris nėra komandos projekte.

## Ką turėtumėte matyti

- Kiekvienas modelis yra pirmojo modelio koordinatėse, kaip jį įdeda jo failas. Modeliai, eksportuoti iš to paties projekto, sutampa be jokio perkėlimo.
- Pasirinkus modelio, kurio nekeičiate, elementą, jo savybės rodomos tik skaitymui, o {{ui:Redaguoti tą modelį}} perjungia.
- {{ui:Modelio medis}}, {{ui:Aukštai}}, {{ui:Spalva}}, {{ui:Pakeitimai}} sąrašas, bibliotekos elementų įdėjimas ir {{ui:Įrašyti kaip IFC}} veikia su redaguojamu modeliu. Paslėpimas, izoliavimas, permatomumas ir {{ui:Pasirinkti viską}} veikia visuose modeliuose.
- {{ui:Įrašyti kaip IFC}} atsisiunčia redaguojamą modelį tik su jo pakeitimais.

## Dažnos klaidos

- **Modelis yra toli arba jo nėra.** Jo failas naudoja kitas koordinates. Naudokite {{ui:Tilpti}}, kad jį rastumėte, tada {{ui:Perkelti}}, kad įdėtumėte į vietą.
- **Naikinti ar Kopijuoti pasirinktame elemente išjungta (pilka).** Jis priklauso kitam modeliui: pirma perjunkite į jį.
- **Atidarius failą su „Pasirinkti failą“, viskas buvo pakeista.** Tai pradeda naują sceną. Naudokite {{ui:Pridėti modelį…}}, kad pridėtumėte failus prie turimos scenos.

## Toliau

- [Paslėpti, izoliuoti ir padaryti permatomus elementus](topic:hide-and-isolate)
- [Spalvinti elementus pagal savybę](topic:color-by-property)
