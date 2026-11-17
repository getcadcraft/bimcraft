---
title: Tegningsråd: uvanlige størrelser lages, med en advarsel
summary: BimCraft lager det du ber om. En størrelse utenfor det vanlige blir en advarsel i Problemer; den stopper aldri tegning eller lagring.
keywords: råd, advarsel, problemer, avvist, tegner ikke, for liten, for smal, minimum, grense, trappebredde, stigning, trinn, søyle, rampe, dørstørrelse, rutenettlinje, nivåhøyde, takvindu, spiraltrapp, fundamenthelling, kort vegg, ingen sperringer
from: 20090130
---

## Hva du skal gjøre

Tegn en størrelse som ikke er den vanlige, og se hvor BimCraft forteller deg om det.

## Trinn

1. Tegn eller endre elementet slik du vil ha det: for eksempel en trapp 400 mm bred.
2. BimCraft lager det som ble bedt om.
3. Åpne {{ui:Problemer}} i den øverste linjen. Under **Tegningsråd** står en advarsel som nevner elementet, størrelsen du oppga og det vanlige området.
4. Klikk på advarselen for å velge elementet. Endre størrelsen hvis det var en feil, eller la den være: en advarsel kan godtas, med eller uten begrunnelse.

## Hva som er råd

Dette ble tidligere avvist. Nå lages det, hver med en advarsel:

- **Trapper**: smalere enn 500 mm eller bredere enn 5 m; stigninger utenfor 100 til 300 mm; trinn utenfor 150 til 600 mm.
- **Spiraltrapper**: en stolpe utenfor 40 til 400 mm; trinn under 100 mm dype på gangelinjen.
- **Søyler**: under 50 mm på tvers eller under 300 mm høye.
- **Ramper**: under 300 mm brede.
- **Dører og vinduer**: under 100 mm brede eller høye.
- **Rutenettlinjer**: under 100 mm lange.
- **Vegger**: en vegg igjen under 50 mm lang, for eksempel etter en trim.
- **Nivåer**: under 1 m eller over 100 m høye (nytt bygg, delte nivåer, et nivås høyde).
- **Takvinduer**: utenfor 600 mm til 12 m brede, en fremre vegg utenfor 300 mm til 4 m, et overheng over 1 m, vegger utenfor 50 til 400 mm.
- **Byggeplater**: sideskråninger utenfor 1:1 til 10:1.

## Hva som fortsatt avvises

Bare det som ikke kan bygges eller finnes, hver med en melding som sier hvorfor:

- En størrelse under 10 mm (en vegg under 1 mm): det er ingenting å bygge.
- Et takvindu som ikke er bredere enn to ganger veggtykkelsen: de to sideveggene ville møtes.
- En byggeplate med sideskråninger brattere enn 0,1:1 (det er en støttemur) eller slakere enn 100:1 (terrengarbeidet ville fortsette uendelig).
- Noe som ikke får plass der du plasserte det, en kontur som krysser seg selv, eller et element som ikke lenger er i modellen.

## Greit å vite

- Rådet regnes ut fra modellen, så det finnes igjen når du åpner filen senere, og det forsvinner når størrelsen rettes.
- Modellkontroller, regelpakker og IDS-kontroller lister også bare det de finner. Ingenting i {{ui:Problemer}} stopper deg fra å tegne eller lagre.
- De vanlige områdene er god praksis, ikke en byggeforskrift. For en forskrift, legg til tillegget Byggeforskrifter og velg ditt sted.

## Neste

- [Sjekk en modell for vanlige problemer](topic:model-checks)
- [Trapper og rekkverk](topic:stairs-and-railings)
