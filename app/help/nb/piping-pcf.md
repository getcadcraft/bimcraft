---
title: Send rør til et spennings- eller isometriprogram, og les det tilbake (PCF)
summary: Skriv modellens rørstrekninger som en PCF-rørkomponentfil, eller les en PCF-fil fra et rørspennings- eller isometriprogram og tegn røret som strekninger.
keywords: pcf, rørkomponentfil, rørspenning, isometri, isometrier, eksport, import, rørledninger, anlegg, stålrør, flytte et prosjekt, annen programvare
from: 24f91355
---

## Hva du gjør

PCF er tekstfilen som rørspennings- og isometriprogrammer leser og skriver. Den lister hver rørledningens komponenter med deres endepunkter og boringer.

## Eksport

1. Velg rørverktøyet. Alternativlinjen viser **Eksporter PCF**.
2. Klikk på den. Hver rørstrekning i modellen skrives: rett rør, bend (en vending på 90 grader, ellers en kurve), T-stykker med deres avgreningspunkt, reduksjoner og ventiler.
3. Filen bruker millimeter. Boringer er nominelle diametre i millimeter. Et bends senterpunkt er hjørnet der de to benene møtes.

PCF skrives for stålrør med stumpsveis. En strekning i et annet materiale skrives også, med stålkomponentnøkler, og noteres i problempanelet.

## Import

1. Velg rørverktøyet og klikk **Importer PCF…**, og velg filen.
2. Rett rør gjennom bend, kurver, ventiler og flenser blir til én strekning på gjeldende nivå. En størrelsesendring starter en ny strekning. Grenen til et T-stykke blir sin egen strekning som starter i T-stykkets senter.
3. Modellen legger sine egne rørdeler. Reduksjoner og T-stykker kopieres ikke: de vises der strekninger av ulik størrelse, eller en gren, møtes.

:::note
Høyder i filen leses som høyder over gjeldende nivå. Laster, festepunkter og selve spenningsanalysen finnes ikke i en PCF-fil og følger ikke med.
:::

## Kontroller hva som kom med

- Total rørlengde per rørledning skal stemme med kilden.
- Problempanelet lister én gang hver: et bend der senterpunktet ikke er like langt fra begge ender, rør uten lengde, og en boring som ikke er en standardstørrelse.

## Rør som allerede finnes i en IFC-fil

Når en IFC-fil er åpen, skriver **Eksporter PCF** også sine egne rørsegmenter, rørdeler og ventiler, ved siden av strekningene du tegnet. Et segment får sine ender fra sine porter, eller fra endene på kroppen sin. En rørdel uten porter utelates, og problempanelet sier det. Du kan eksportere fra IFC alene når modellen ikke har tegnede strekninger.

Ved import tegnes ikke opplagringer, avgreninger (olets), flenser, pakninger og endehetter i filen. Problempanelet lister hvor mange av hver som ble utelatt, slik at ingenting forsvinner stille.
