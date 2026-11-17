---
title: Pradėkite naują pastatą
summary: Sukurkite tuščią pastato modelį su jo lygiais, nubrėžkite sienas, įdėkite elementus iš bibliotekos ir įrašykite jį kaip IFC.
keywords: naujas, naujas pastatas, tuščias, pradėti nuo nulio, šablonas, lygiai, aukštai, grindys, sukurti, modelis
from: 68786865
---

## Ką darysite

Pradėkite pastato modelį nuo nieko, o ne atidarydami esamą. BimCraft sukuria tuščią IFC modelį su projektu, sklypu, pastatu ir jo lygiais. Į lygius galite įdėti įrangą ir baldus iš bibliotekos ir įrašyti modelį kaip IFC failą.

:::note
Sienas jau galima braižyti: žr. [Braižyti sienas](topic:draw-walls). Durys, langai, grindys ir stogai kuriami toliau.
:::

## Žingsniai

1. Spustelėkite {{ui:Naujas pastatas}} skyriuje **Atidaryti failą ar aplanką** arba pradžios puslapyje.
2. Įveskite **Pastato pavadinimą**.
3. Pasirinkite, kiek **Lygių** jis turi (nuo 1 iki 200).
4. Įveskite **Lygio aukštį**, nuo grindų iki grindų: pavyzdžiui `10'-0"`, `10'6"` arba `3000 mm`. Paprastas skaičius JAV reiškia pėdas, kitur – milimetrus.
5. Visi laukai jau užpildyti, todėl galite juos palikti kaip yra. Žemiau esančiame langelyje nurodoma, ką pradedate: vienetai, **Sienos tipas**, kurį pirmiausia braižo sienos įrankis (galite pasirinkti kitą iš sąrašo), ir pirmasis lapas.
6. Spustelėkite {{ui:Sukurti}}. Lygiai sudėti nuo 0, kiekvienas vienu lygio aukščiu aukščiau už prieš tai buvusį, ir pavadinti Lygis 1, Lygis 2 ir t. t. Jie rodomi modelio medyje, o 1 lygio planas atsidaro šalia 3D vaizdo su įjungtu {{ui:Braižymas}}.
7. Nubrėžkite sienas: spustelėkite {{ui:Siena}} ir du taškus. Žr. [Braižyti sienas](topic:draw-walls). Lygius pervadinkite arba pakeiskite jų aukščius **Lygių** skydelyje.
8. Įdėkite elementus: žr. [Įdėti įrangą ir baldus iš bibliotekos](topic:place-from-library). Įdėjimo juostoje rodomi visi lygiai.
9. Spustelėkite {{ui:Įrašyti kaip IFC}}. Failas pavadinamas pagal pastatą, pavyzdžiui `Smith's house.ifc`.

## Verta žinoti

- Modelis įrašomas milimetrais kaip IFC4. Kitos BIM programos jį atidaro.
- Naujas pastatas turi vieną lapą, **A-101**, kuriame yra žemiausio lygio planas: A3 mastelyje 1:100, kai dirbate metriniais vienetais, kitu atveju – Tabloid 1/8" = 1'-0". Jis tuščias iki pirmosios sienos, o tada rodo planą, kaip jį braižote. Atidarykite jį **Lapai** projekto naršyklėje, kad pakeistumėte jo popierių, mastelį ar antraštę, pridėtumėte vaizdų ar jį ištrintumėte. Pastatas, pradėtas iš šablono, turi to šablono lapus.
- Kad pakeistumėte, ką kiekvienas naujas pastatas pradeda (sienos tipą metriniams projektams, lygius, pirmąjį lapą, įrankį, kuris aktyvus po {{ui:Sukurti}}), žr. [Numatytosios politikos](topic:default-policies).
- Prieš pirmą sieną nieko nereikia nustatyti. Sienos tipą, lygių aukščius, vienetus ir lapą galima pakeisti vėliau.
- **Aukštai** kairiajame skydelyje rodo tik lygius, kuriuose yra kažkas; modelio medyje rodomi visi.
- Kol neįrašėte, naujas pastatas laikomas neįrašytu darbu. BimCraft klausia prieš atidarant kitą failą ar išeinant ir šioje naršyklėje saugo kopiją, jei skirtukas užsidarytų.
