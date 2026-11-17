---
title: Summer mengder, list elementer og lag en romtabell
summary: Tell elementer og summer lengder, arealer, volumer eller et hvilket som helst tallfelt, gruppert etter en hvilken som helst egenskap; list én rad per element; eller lag en tabell over rommene med arealer og volumer. Hver laster ned som en CSV.
keywords: mengde, mengder, mengdeuttak, summer, tabell, mengdebeskrivelse, boq, qto, csv, grupper etter, tell, lengde, areal, volum, rom, romtabell, arealtabell, elementliste
from: e2e7210c
---

## Hva du skal gjøre

Få summer ut av en modell: veggers lengder per etasje, antall dører per type, dekkevolum per materiale, kostnaden for hver sone.

## Trinn

1. Åpne en IFC-modell.
2. Åpne {{ui:Mengdesummer}} i venstre panel.
3. Under {{ui:Tell}} velger du {{ui:Alle elementer}}, eller bare de du har valgt.
4. Under {{ui:Grupper etter}} velger du en egenskap, for eksempel {{ui:Klasse}}. Klikk {{ui:Legg til en gruppe}} for å dele videre, opptil tre, for eksempel etter {{ui:Etasje}}.
5. Under {{ui:Summer}} krysser du av for tallene du vil summere. Modellens mengdesett er avkrysset fra start.
6. Klikk {{ui:Last ned CSV}} for å åpne tabellen i et regneark.

## Hva du bør se

- En rad per gruppe, med hvor mange elementer den har og hver sum, og en totalrad.
- Elementer uten verdi telles, men legger ikke til noe. Når det skjer, legger CSV-filen til en kolonne «utelatt» ved siden av summen, slik at du kan se hvor mange.
- Tall står i filens egne enheter, slik filen lagrer dem, ofte millimeter for lengder.

## Én rad per element, eller rommene

Endre {{ui:Vis}}:

- **En rad per element**: hvert element på sin egen rad, med egenskapene under {{ui:Kolonner}} og tallene under {{ui:Summer}}. CSV-filen starter med hvert elements GlobalId. Klikk den første verdien i en rad for å velge elementet.
- **Rom**: hvert rom med nummer, navn, etasje, areal og volum, og deres summer. Arealer og volumer hentes fra romets mengder slik filen oppgir dem. Når filen ikke har noen, måles de fra romets form i m² og m³ og vises i kursiv. CSV-filen sier hvilket som er hvilket.

## Neste

- [Finn elementer etter klasse, navn eller egenskap](topic:find)
- [Fargelegg elementer etter en egenskap](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Velg **Infrastruktur (IFC 4.3)** i visningslisten for å se veier, jernbaner, broer og marine anlegg summert per klasse og type, med lengden, arealet og volumet filen selv oppgir. En mengde filen ikke oppgir, blir stående tom og beregnes aldri. **Send infrastrukturmengder til TakeoffCraft** lagrer en `.quantities.json`-fil som TakeoffCraft åpner som typede mengder.
