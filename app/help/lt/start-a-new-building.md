---
title: Naujo pastato pradžia
summary: Sukurkite tuščią pastato modelį su jo lygiais, nubraižykite sienas, įdėkite elementus iš bibliotekos ir įrašykite jį kaip IFC.
keywords: naujas, naujas pastatas, tuščias, tyras, pradėti iš nulio, šablonas, lygiai, aukštai, grindys, sukurti, modelis
from: 546b8ae8
---

## Ką darysite

Pradėkite pastato modelį nuo nulio, o ne atidarydami esamą. BimCraft sukuria tuščią IFC modelį su projektu, vietove, pastatu ir jo lygiais. Iš bibliotekos galite įdėti įrangą ir baldus į lygius bei įrašyti jį kaip IFC failą.

:::note
Sienas jau galima braižyti: žr. [Braižyti sienas](topic:draw-walls). Durys, langai, grindys ir stogai kuriami kitame etape.
:::

## Žingsniai

1. Spustelėkite {{ui:Naujas pastatas}} po **Atidaryti failą ar aplanką** arba pradžios puslapyje.
2. Įveskite **Pastato pavadinimą**.
3. Pasirinkite, kiek **lygių** jis turi (nuo 1 iki 200).
4. Įveskite **Lygio aukštį** nuo grindų iki grindų, pavyzdžiui `10'-0"`, `10'6"` arba `3000 mm`. Paprastas skaičius JAV reiškia pėdas, kitur – milimetrus.
5. Spustelėkite {{ui:Sukurti}}. Lygiai sudedami nuo 0, kiekvienas – vienu lygio aukščiu aukščiau už ankstesnįjį, ir pavadinami „1 lygis“, „2 lygis“ ir t. t. Jie rodomi modelio medyje, o 1 lygio planas atsidaro šalia 3D vaizdo, įjungus {{ui:Braižymas}}.
6. Nubraižykite sienas: žr. [Braižyti sienas](topic:draw-walls). Lygius pervadinkite arba keiskite jų aukščius **Lygiai** skydelyje.
7. Įdėkite elementus: žr. [Įdėti įrangą ir baldus iš bibliotekos](topic:place-from-library). Įdėjimo juostoje išvardyti visi lygiai.
8. Spustelėkite {{ui:Įrašyti kaip IFC}}. Failas pavadinamas pagal pastatą, pavyzdžiui `Smith's house.ifc`.

## Verta žinoti

- Modelis įrašomas milimetrais, kaip IFC4. Kitos BIM programos jį atidaro.
- **Aukštai** kairiajame skydelyje išvardija tik lygius, kuriuose kažkas yra; modelio medyje išvardyti visi.
- Kol neįrašėte, naujas pastatas laikomas neįrašytu darbu. BimCraft klausia prieš atidarant kitą failą ar išeinant ir saugo kopiją šioje naršyklėje, jei skirtukas užsidarytų.
