---
title: Send rør til et spændingsanalyse- eller isometriprogram, og læs det tilbage (PCF)
summary: Skriv modellens rørforløb som en PCF-rørkomponentfil, eller læs en PCF-fil fra et rørspændingsprogram eller isometriprogram og tegn dets rør som forløb.
keywords: pcf, rørkomponentfil, rørspænding, isometri, isometrier, eksport, import, rør, anlæg, stålrør, flyt et job, andre programmer
from: 24f91355
---

## Hvad du skal gøre

PCF er den rene tekstfil, som rørspændings- og isometriprogrammer læser og skriver. Den lister hver rørlednings komponenter med deres endepunkter og boringer.

## Eksport

1. Vælg Rør-værktøjet. Indstillingslinjen viser **Eksportér PCF**.
2. Klik på den. Hvert rørforløb i modellen skrives: lige rør, bøjninger (et sving på 90 grader, ellers en kurve), T-stykker med deres grenpunkt, reduktioner og ventiler.
3. Filen bruger millimeter. Boringer er nominelle diametre i millimeter. En bøjnings midtpunkt er dens hjørne, hvor dens to ben mødes.

PCF skrives for stålrør med stumpsvejsning. Et forløb i et andet materiale skrives også, med stålkomponentnøgler, og noteres i panelet Problemer.

## Import

1. Vælg Rør-værktøjet og klik på **Importér PCF…**, og vælg filen.
2. Lige rør gennem bøjninger, kurver, ventiler og flanger bliver til ét forløb på den aktuelle etage. En dimensionsændring starter et nyt forløb. Et T-stykkes grenrør bliver sit eget forløb, der starter ved T-stykkets centrum.
3. Modellen lægger sine egne fittings. Reduktioner og T-stykker kopieres ikke: de vises, hvor forløb i forskellige dimensioner, eller en gren, mødes.

:::note
Højder i filen læses som højder over den aktuelle etage. Belastninger, fastholdelser og selve spændingsanalysen er ikke i en PCF-fil og kommer ikke med.
:::

## Kontrollér hvad der kom med

- Den samlede rørlængde pr. rørledning skal stemme med kilden.
- Panelet Problemer lister én gang hver: en bøjning, hvis midtpunkt ikke har samme afstand fra begge ender, rør uden længde, og en boring, der ikke er en standarddimension.

## Rørføring, der allerede findes i en IFC-fil

Når en IFC-fil er åben, skriver **Eksportér PCF** også dens egne rørsegmenter, fittings og ventiler, ved siden af de forløb, du har tegnet. Et segment får sine ender fra sine porte eller fra enderne af sit legeme. En fitting uden porte udelades, og panelet Problemer siger det. Du kan eksportere fra IFC alene, når modellen ikke har tegnede forløb.

På import tegnes understøtninger, olets, flanger, pakninger og hætter i filen ikke. Panelet Problemer lister, hvor mange af hver der blev udeladt, så intet forsvinder lydløst.
