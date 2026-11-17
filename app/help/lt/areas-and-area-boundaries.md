---
title: Plotai ir ploto ribos
summary: Matuokite bendrą pastato plotą arba nuomojamą plotą ribų viduje, kurias nubrėžiate arba paimate iš sienų, ir išvardykite plotus žiniaraštyje.
keywords: plotas, plotai, ploto riba, ploto schema, bendras pastato plotas, bendras grindų plotas, GFA, nuomojamas, ploto planas, plotų žiniaraštis, sienų pasirinkimas, neuždarytas
from: c79f96d2
---

## Ką darysite

Nubrėžkite ploto schemos ribas, įdėkite plotus į jas ir perskaitykite sumas.

## Kur yra įrankiai

- Juostiniai išdėstymai: {{ui:Architektūra}} › **Patalpos ir plotas** › {{ui:Plotas}} ir {{ui:Ploto riba}}.
- Klasikinis išdėstymas: Braižymo juosta › meniu {{ui:Patalpos}}.

## Žingsniai

1. Pasirinkite {{ui:Ploto riba}}. Eilutėje pasirinkite {{ui:Schema}}: Bendras pastatas arba Nuomojamas. Kiekviena schema turi savo ribas.
2. Pasirinkite, kaip sudaryti linijas, {{ui:Sudaryti pagal}}:
   - **Braižyti**: spustelėkite tašką po taško.
   - **Pasirinkti sienas: ašinė linija**: spustelėkite sieną, ir jos ašinė linija tampa riba.
   - **Pasirinkti sienas: spustelėtas paviršius**: spustelėkite sieną toje pusėje, kurios norite; tas paviršius tampa riba. Bendram pastato plotui spustelėkite išorinių sienų išorę.
3. Pasirinkite {{ui:Plotas}}. Pasirinkite tą pačią schemą, jei norite, įveskite pavadinimą, numerį ar tipą ir spustelėkite ribų viduje.
4. Plotas išmatuojamas iš karto. Pasirinkite jį, kad pakeistumėte pavadinimą, numerį ar tipą **Savybėse**.

## Kas ko seka

- Riba, sudaryta pasirenkant sieną, seka tą sieną: perkėlus sieną plotas išmatuojamas iš naujo tame pačiame žingsnyje.
- Riba, kurią nubrėžėte, lieka ten, kur ją nubrėžėte.
- Sienų paviršiai, susitinkantys kampe, ten ir susijungia, todėl keturios pasirinktos sienos uždaro plotą be tarpų.
- Ploto ribos rodomos plane, kol rankoje turite patalpos ar ploto įrankį, todėl kitu metu plano nedengia.

## Jei ribos neuždaromos

Plotas vis tiek įdedamas. Jis rodo **Neuždarytas** ir nieko neišmatuoja, kol ribos aplink jį neuždaromos. Tai patarimas: nieko neuždraudžiama.

## Žiniaraštis

Kairioji juosta › {{ui:Žiniaraščiai}} › **Plotai**: schema, numeris, pavadinimas, tipas, lygis, plotas ir perimetras, su suma. Paspaudus eilutę pasirenkamas plotas. {{ui:Atsisiųsti CSV}} pateikia tą pačią lentelę.

## IFC faile

Plotas yra IfcSpace be kūno: PredefinedType GFA bendram pastato plotui, USERDEFINED su ObjectType Rentable nuomojamam. Jame yra GrossFloorArea ir GrossPerimeter, bet ne grynasis plotas, todėl jo nesupainioja su patalpa. Riba yra IfcVirtualElement.

## Dar nepadaryta

- Jūsų pačių schemos (tik Bendras pastatas ir Nuomojamas).
- Spalvų užpildai pagal ploto tipą.
- Taisyklės, kurios pačios nustato ribą, pavyzdžiui „iki stiklo linijos“.

Taip pat žr. [Patalpos ir patalpų pertvaros](topic:rooms-and-separators), [Patalpų ir plotų žymos](topic:room-and-area-tags).
