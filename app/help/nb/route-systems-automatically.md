---
title: Trasér kanaler, avløp, vann- og kuldemedierør automatisk
summary: I kollisjonssjekken finner BimCraft en vei rundt den åpne modellen for kanaler, selvfall-avløp, kald- og varmtvann og delte eller multisplit kuldemedierør, og tegner rørene med sine deler i ett angretrinn. Et tegnehjelpemiddel: dimensjoner, fall og kontroller kommer fra tabellene i programmet og tallene du skriver inn. Ingenting her sier at en prosjektering oppfyller en forskrift.
keywords: autorute, trasér kanaler, trasér rør, avløp, sanitær, selvfall, stamme, avluft, vannlås, vann, varmtvann, returløkke, sirkulasjon, kuldemedium, delt, multisplit, VRF, ekvivalent lengde, grenkit, Y-stykke
from: 5841d513
---

## Hva du gjør

La BimCraft legge ut et nett av strekk mellom koblinger som allerede ligger i modellen, rundt vegger og bjelker, og kontroller det så mot tall du kan se.

## Trinn

1. Åpne modellen og kollisjonssjekken. Under **Trasér kanaler automatisk** velg et luftbehandlingsaggregat og dets terminaler, eller under **Trasér andre systemer automatisk** velg et system.
2. **Sanitært avløp med selvfall.** Skriv inn utløpsposisjonen og, hvis du har dem, posisjonene til stammene. Kryss av for **Trasér alle etasjer på én gang** for å ta med hver etasje som har sanitærutstyr: hver etasjes avløp møter stammen på sitt eget nivå, og stammen går fra over høyeste tappested ned til foten. Trykk {{ui:Trasér}}.
3. **Vannlås til avluft.** Panelet lister avstanden fra hver vannlås til dens avluft. Skriv inn det største din forskrift tillater i **Størst avstand fra vannlås til avluft**; ethvert sanitærutstyr over den vises som ikke gjort, med antall millimeter over. Kryss av for **Avluft gjennom stammen** når sanitærutstyret ikke har egen avluftstuss: avstanden måles da til stammen. BimCraft har ingen forskriftstabell for dette: du skriver inn tallet.
4. **Kaldt og varmt vann.** Velg kilden, skriv inn trykket ved kilden og trykket du trenger ved et sanitærutstyr. Kryss av for **Varmtvann**, velg varmeapparatets varmtilkobling, og kryss av for **Returløkke** for å avslutte en returledning ved varmeapparatets **varmretur**-tilkobling, eller ved en annen tilkobling du velger (den ender 150 mm kort, åpen, for at du skal koble den).
5. **Delt, multisplit og VRF.** Velg utendørsenheten, kryss av for innendørsenhetene og skriv inn kapasiteten til hver. Skriv inn grensene fra produsentens data. Skriv inn **ekvivalent lengde** for en bøy og for en grenkit (produsentens verdier), så kontrolleres de lengste og totale lengdene mot ekvivalente lengder.
6. Trykk {{ui:Trasér}}. Panelet sier hvor mange strekk det tegnet, og hva det ikke kunne gjøre og hvorfor. {{ui:Angre}} tar alt tilbake i ett trinn.

## Hva du ser

Rør med albuer, T-stykker og reduksjoner; avløp som faller minst det minste fallet for sin dimensjon; avluftsstusser ved sanitærutstyret; kuldemedierør som et væske- og gassrør-par som snur likt i hvert hjørne, med en grenkit merket der en gren går ut fra hovedledningen.

## Greit å vite

- Der et avløp møter et annet avløp tegner modellen et T-stykke. Planen navngir disse stedene som 45-graders Y-koblinger, slik at du kan endre delen.
- Varmtvann bruker sanitærutstyrets egen varmtilkobling når familien har en, og en tilkobling 100 mm ved siden av kaldtvannet når den ikke har det.
- Kuldemedierørene starter mellom de to portene på hver enhet. Når en enhets to porter står for tett for en bøy, holdes paret midt mellom dem.
- Vannnettet bruker etterspørselskurven og friksjonstallene som vises i beregningene; erstatt dem med dine forskrifters før du stoler på trykkene.
- Store hus kan ta et halvt minutt eller mer, mest varmtvannsnettet.
- Dette er et tegnehjelpemiddel. En kvalifisert person kontrollerer dimensjoner, fall, avluft og trykk mot forskriften som gjelder.

## Neste

[Sjekk for kollisjoner](topic:clash-check) · [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure) · [Tilkoblinger mellom rør og utstyr](topic:mep-connections)
