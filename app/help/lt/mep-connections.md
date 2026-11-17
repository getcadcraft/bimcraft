---
title: Vamzdžių ir ortakių prijungimas prie įrangos
summary: Pradėkite arba baikite vamzdį ar ortakį ties prievadu, kad jis perimtų prievado dydį ir sistemą bei liktų su juo susietas, tada patikrinkite jungtis – atvirus prievadus, dydžių ir sistemų neatitikimus, linijas be šaltinio.
keywords: mep, jungti, jungtis, jungtys, prievadas, prievadai, atviras prievadas, dydžio neatitikimas, sistemos neatitikimas, šaltinis, patikrinti jungtis, fiksuotas, sekti, perkelti įrangą, ifcrelconnectsports, koordinavimas
from: 29144fb0
---

## Ką darysite

Sujunkite linijas su įranga, kad modelis būtų viena sujungta sistema: siurblio išėjimas su vamzdžiu, kuris iš jo išeina, arba difuzoriaus kaklelis su šakiniu ortakiu. Tada leiskite BimCraft išvardyti, kas nėra sujungta.

## Braižymas nuo prievado

1. Pasirinkite {{ui:Vamzdis}} arba {{ui:Ortakis}}.
2. Perkelkite žymeklį ant įrenginio prievado (maži apskritimai; atviras prievadas nubrėžtas įspėjimo spalva). Žymeklis prisitraukia prie jo ir parodo **ties prievadu**.
3. Spustelėkite: linija prasideda prievado aukštyje ir **perima jo dydį ir sistemą** (vamzdis taip pat perima įprastą tos sistemos medžiagą). Būsenos eilutė parodo, ką perėmė.
4. Braižykite toliau įprastai. Linijos galo užbaigimas kitame prievade fiksuoja ir tą galą.

Linijos galas ties prievadu yra **fiksuotas** prie jo: perkelkite ar pasukite įrangą (savybių lange) – ir linijos galas juda kartu; redaguojant liniją tas galas lieka prie prievado. Kiti linijos kampai lieka ten, kur buvo, todėl po didelio perkėlimo pirmoji atkarpa gali nuo prievado nusikelti kampu: perkelkite ir kitą kampą.

## Patikrinkite jungtis

Atverkite {{ui:Versija}} ir spustelėkite {{ui:Patikrinti jungtis}}. Sąrašas po juosta rodo:

| Eilutė | Ką tai reiškia |
|---|---|
| Prievadas nėra prijungtas | Įrangos gabalas turi jungtį, prie kurios nieko nenubrėžta |
| Galas nieko nejungia | Linija baigiasi ore |
| Sujungti prievadai skirtingų dydžių | Vieno dydžio linija susijungia su kito dydžio prievadu ar linija be redukcijos (vamzdžio nominalus dydis, ortakio forma ir kraštinės) |
| Sujungti prievadai skirtingų sistemų | Pavyzdžiui, grąžinamasis ortakis prie tiekiamojo difuzoriaus |
| Vamzdis sujungtas su ortakiu | Susijungia dviejų skirtingų rūšių jungtys |
| Tinkle nėra įrenginio, kuris ją maitintų | Nieko, prie ko linija prijungta, kad ir kaip toli, neturi išėjimo. Drenažo, lietaus ir vėdinimo linijų šis punktas netikrinamas: jų vanduo ateina iš sanitarinių įrenginių |
| Fiksuota prie įrangos prievado, kurios modelyje jau nebėra | Įranga ištrinta; nubrėžkite galą iš naujo arba ištrinkite liniją |

Klaidos rodomos pirmiausia. Spustelėkite eilutę, kad pasirinktumėte, ką ji nurodo. {{ui:Uždaryti}} paslepia sąrašą. Patikrinimas skaito modelį, kaip jis nubrėžtas: tikrina jungtis ir dydžius, bet niekada srautų, slėgių ar subalansavimo.
