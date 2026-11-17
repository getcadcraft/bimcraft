---
title: Rasti elementus pagal klasę, pavadinimą ar savybę
summary: Raskite visus elementus, atitinkančius vieną ar kelias taisykles — jų klasę, pavadinimą, tipą, aukštą, medžiagą ar bet kurios savybės reikšmę, pasirinkite juos visus ir išsaugokite taisykles kaip pavadintą paieškos rinkinį.
keywords: rasti, paieška, filtras, užklausa, taisyklė, paieškos rinkinys, pasirinkimo rinkinys, įrašyta paieška, savybė, reikšmė, klasė, medžiaga, pasirinkti visus
from: 3d293bc2
---

## Ką darysite

Pasirinkite visus vienos rūšies elementus ar turinčius vieną reikšmę vienu veiksmu: visas duris, visas sienas 2 lygyje, visus elementus, kurių gaisro atsparumas yra EI60, visas sienas, kurių kaina viršija nustatytą sumą.

## Žingsniai

1. Atidarykite IFC modelį.
2. Kairiajame skydelyje atidarykite {{ui:Ieškoti}}.
3. Pirmoje taisyklėje pasirinkite savybę (pirmiausia paties elemento savybes, pavyzdžiui {{ui:Klasė}} ir {{ui:Aukštas}}, o po jų modelio savybių rinkinius), palyginimo būdą ir reikšmę. Reikšmės laukelyje siūlomos modelyje esančios reikšmės.
4. Norėdami susiaurinti paiešką, spustelėkite {{ui:Pridėti taisyklę}}. Pasirinkite {{ui:Visos taisyklės}}, jei reikia visų, arba {{ui:Bet kuri taisyklė}}, jei pakanka vienos.
5. Spustelėkite {{ui:Ieškoti}} arba reikšmės laukelyje paspauskite {{key:Enter}}. Atitinkantys elementai pažymimi.
6. Norėdami išsaugoti taisykles, spustelėkite {{ui:Įrašyti kaip rinkinį}}, įveskite pavadinimą ir spustelėkite jį dar kartą. Vėliau, norėdami ieškoti pagal rinkinį, spustelėkite jo pavadinimą.

## Ko tikėtis

- Atitinkantys elementai pažymimi 3D vaizde ir modelio medyje, o {{ui:Savybės}} nurodo, kiek jų pagal klasę. Paspauskite {{key:I}}, kad rodytų tik juos, arba {{key:H}}, kad juos paslėptumėte.
- Žodžiai atitinkami nepaisant didžiųjų ir mažųjų raidžių. Skaičiai lyginami kaip skaičiai: „yra daugiau nei 1000“ reiškia reikšmę, o ne tekstą.
- {{ui:turi reikšmę}} ir {{ui:neturi reikšmės}} nereikalauja reikšmės; jie randa užpildytus arba trūkstamus laukus.
- Įrašyti rinkiniai išlieka šioje naršyklėje visiems modeliams, kuriuos atidarote.

## Dažnos klaidos

- **Nieko nerasta.** Taisyklei reikia reikšmės, kuri gali atitikti: pažiūrėkite pasiūlymus reikšmės laukelyje.
- **Savybės nėra sąraše.** Šiame modelyje nėra elemento su forma, kuris ją turėtų.

## Toliau

- [Nuspalvinti elementus pagal savybę](topic:color-by-property)
- [Slėpti, izoliuoti ir matyti pro elementus](topic:hide-and-isolate)
