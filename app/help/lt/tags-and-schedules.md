---
title: Žymėkite elementus ir sudarykite žiniaraščius pagal žymas
summary: Apibrėžkite savo žymas (pavadinimą, tipą, leistinas reikšmes, kurioms klasėms), žymėkite daug elementų vienu metu ir kurkite žiniaraščius, kurių stulpeliai, filtrai ir grupės skaito žymas. Žymos saugomos IFC.
keywords: žymos, žyma, žymėjimas, pasirinktinės savybės, parametrai, bendrieji parametrai, savybių rinkinys, pset, žiniaraštis, filtras, grupuoti pagal, apdaila, gaisrinis atsparumas, masinis redagavimas, csv
from: 9cc7c90d
---

## Ką darysite

Žyma yra jūsų pačių savybė, pavyzdžiui *Apdaila* ar *Gaisrinis atsparumas*. Ją apibrėžiate kartą projektui, nustatote daugeliui elementų vienu metu, o kiekvienas BimCraft žiniaraštis gali ją nuskaityti: čia esantis žymų žiniaraštis, {{ui:Kiekiai}}, Ieškoti, Spalva pagal savybę ir [Dokumentai iš modelio](topic:documents-from-the-model).

## Žingsniai

1. Atidarykite IFC modelį arba pradėkite naują pastatą.
2. Kairiajame skydelyje, po {{ui:Kiekiai}}, atidarykite {{ui:Žymos}}.
3. Spustelėkite {{ui:Pridėti žymę}}. Suteikite jai pavadinimą, pasirinkite tipą ir, jei norite, išvardykite leistinas reikšmes (per kablelį) bei klases, kurioms ji skirta (`IfcDoor`, `IfcWall` …). Spustelėkite {{ui:Pridėti žymą}}.
4. Pasirinkite elementus modelyje (Ieškoti padeda: pasirinkite visas duris vienu metu).
5. Skyriuje {{ui:Pažymėti pasirinkimą}} pasirinkite arba įveskite reikšmę kiekvienai norimai žymai, kitas palikite kaip yra, ir spustelėkite {{ui:Taikyti … pasirinktiems elementams}}.
6. Skyriuje {{ui:Žymų žiniaraštis}} pažymėkite stulpelius, pridėkite filtrus, pasirinkite {{ui:Grupuoti pagal}}, tada spustelėkite {{ui:Atsisiųsti CSV}}.

## Ką turėtumėte matyti

- Pakeitimų sąraše po žingsnį kiekvienam išsaugotam apibrėžimui ir kiekvienam žymėjimui; {{ui:Anuliuoti}} grąžina atgal.
- Elementai klasės, kuriai žyma neskirta, paliekami nuo tos žymos, o būsenos eilutė nurodo, kiek jų.
- Žymų žiniaraštis rodo po vieną eilutę kiekvienam elementui, sugrupuotą pagal pasirinktą lauką; spustelėkite pirmą eilutės langelį, kad pasirinktumėte tą elementą.
- {{ui:Kiekiai}} išvardija žymas po `CadCraft_Tags`, todėl ten galite susumuoti plotus ar kiekius pagal žymą.

## Tipai

Tipai yra tie patys, kaip ir šeimos parametrų: Ilgis (milimetrais), Kampas (laipsniais), Skaičius, Sveikasis skaičius, Taip / Ne, Pieštukas (1–16), Tekstas, Medžiaga ir Užpildas. Reikšmė, kuri netinka jos tipui arba nėra viena iš leistinų reikšmių, atmetama su pranešimu, ir nieko nepasikeičia.

## Verta žinoti

- Viskas yra paprastas IFC, todėl kitos programos skaito reikšmes: apibrėžimai yra savybių rinkinyje `CadCraft_TagDefs` projekte, reikšmės – savybių rinkinyje `CadCraft_Tags` kiekviename elemente (viena savybė kiekvienai žymai). Ilgiai įrašomi failo ilgio vienetais.
- `IfcWall` žymos klasėse taip pat apima standartinio tipo ir sudėtines sienas.
- Pervadinus žymą, jos reikšmės pervadinamos kiekviename elemente tuo pačiu žingsniu. Pašalinus žymą, pašalinamas tik jos apibrėžimas: jau nustatytos reikšmės lieka elementuose kaip paprastos savybės. Pirmiausia jas išvalykite (pasirinkite {{ui:Išvalyti}}), kad jos būtų nuimtos.
- Žymos CadCraft braižymo programoje (bloko atributai) dar nepadarytos.
