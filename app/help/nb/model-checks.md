---
title: Sjekk en modell for vanlige problemer
summary: Finn elementer som mangler en egenskap du trenger, GlobalId-er som brukes to ganger, elementer uten etasje og kopier som ligger oppå hverandre.
keywords: kontroll, modellkontroll, validering, kvalitetssikring, kvalitet, manglende egenskap, påkrevd, duplikat, globalid, guid, etasje, stablet, overlapp
from: 4d835513
---

## Oppgave

Gå gjennom en modell før den leveres videre: problemene som ødelegger tabeller, mengder og annen programvare.

## Trinn

1. Åpne en IFC-modell.
2. Åpne {{ui:Modellkontroller}} i venstre panel.
3. Under {{ui:Påkrevde egenskaper}} finnes det allerede en regel (alle klasser, Name). Endre klassen (eller {{ui:Alle klasser}}) og egenskapen, eller klikk {{ui:Legg til en egenskap}} for en ny regel; x-en fjerner en regel. Et element feiler en regel når egenskapen mangler eller er tom. Reglene lagres i denne nettleseren for alle modeller.
4. Klikk {{ui:Kjør kontroller}}.
5. Klikk et resultat for å velge disse elementene og zoome til dem.

## Resultat

- **Mangler en påkrevd egenskap**: hver regel med elementene som ikke har verdi for den.
- **GlobalId brukt to ganger**: elementer som deler én GlobalId. Annen programvare behandler dem som ett element.
- **Uten etasje**: elementer med en form som ingen etasje inneholder.
- **Kopier oppå hverandre**: elementer av samme klasse og type, med samme form på samme sted, som telles to ganger i mengdene.

Hver linje i resultatet er en knapp: klikk den for å velge disse elementene og zoome til dem. Bare de første 50 gruppene i en kontroll listes. De samme funnene vises også i {{ui:Problemer}}.

## Greit å vite

- Kontroller ser på den aktive modellen når flere er åpne. Se [Se flere IFC-modeller sammen](topic:several-models).
- Kjør kontrollene på nytt etter en endring.
- I panelet {{ui:Problemer}} følger lengder, arealer og volumer i et problems ord {{ui:Enheter}} valgt i verktøylinjen (en dør på «800 mm» vises som 2'-7 1/2" i fot og tommer); endres enheten, skrives ordene om i panelet.

## Neste

- [Gjennomgå modellen: rom, etiketter, LOD, kollisjoner og grensesnitt](topic:audit-the-model)
- [Finn elementer etter klasse, navn eller egenskap](topic:find)
- [Slett, klipp ut, kopier og lim inn elementer](topic:copy-paste)
