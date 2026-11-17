---
title: Priedai, kuriuos naudoja jūsų failas
summary: BimCraft IFC faile įrašo pastabas apie tai, kurie priedai į jį rašė, ir pasiūlo pridėti trūkstamus, kai jį atidarote.
keywords: priedas, addon, šis failas naudoja, trūkstamas priedas, trusscraft, biblioteka, įrašas, cadcraft_addons
from: 9d9500d8
---

## Ką tai daro

Kai priedas rašo į modelį (sijinę konstrukciją, vamzdynų liniją), BimCraft įrašo priedą ir jo versiją į IFC projektą, savybių rinkinyje CadCraft_AddOns. Įrašas rašomas tame pačiame anuliavimo žingsnyje kaip paties priedo pakeitimas, todėl anuliavus pakeitimą atgal pasiimamas ir įrašas. Kitos programos šio savybių rinkinio neskaito; tai, ką nubrėžė priedas, faile lieka bet kuriuo atveju.

## Žingsniai

1. Atidarykite IFC failą, kurį padėjo sukurti priedas.
2. Jei kurio nors jo naudojamo priedo nėra įjungto, virš modelio rodoma pastaba, nurodanti, kurie tai yra, su mygtuku, kuris juos pridės iš jūsų bibliotekos paskyros.
3. Pridėkite juos arba uždarykite pastabą. Modelis atsidaro abiem atvejais.

## Dažnos klaidos

- **Pastaba nepasirodo.** Šiame skirtuke neesate prisijungę prie savo paskyros arba faile nėra įrašo (jis sukurtas prieš įrašų atsiradimą arba kita programa).
- **Pakeitimų sąraše rašoma „undefined“.** Ištaisyta: dabar žymose rodomas priedo pavadinimas.

## Toliau

- [Įdėkite įrangą ir baldus iš bibliotekos](topic:place-from-library)
