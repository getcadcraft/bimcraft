---
title: Registrer flere skanninger til én
summary: Plasser skanninger tatt fra ulike posisjoner i ett koordinatsystem ved hjelp av valgte punktpar eller innskrevne målpunkter, forbedre dem med ICP, lagre registreringen som et prosjekt, og eksporter den registrerte skyen som LAS eller E57.
keywords: registrering, registrer, skanninger, punktsky, icp, iterative closest point, målpunkter, punktpar, stiv transformasjon, juster, slå sammen, e57, las, skanning til bim
from: e8e270db
---

## Hva du skal gjøre

Flere skanninger av samme sted (hver fra sin egen skannerposisjon) starter i sine egne koordinater. Registrer dem: gi hver skanning én plassering slik at de alle står i ett koordinatsystem, lagre det deretter som et prosjekt, og skriv den registrerte skyen til én LAS- eller E57-fil.

## Plasser skanningene

1. Åpne dialogen ({{ui:Registrer skanninger…}} på startpanelet, eller {{ui:Vis}} › {{ui:Registrer skanninger…}} når en modell er åpen). {{ui:Legg til skanninger…}} tar imot LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eller XYZ-filer, eller slipp dem på dialogen. Skanninger som bruker ulike enheter avvises med en merknad: konverter den ene først.
2. Velg {{ui:Skanning som skal flyttes}} og {{ui:Plasser mot}}. Bildet viser hver skanning i koordinatsystemet slik den er nå, med én farge per skanning: {{ui:Plan}}, {{ui:Front}} eller {{ui:Side}}. Dra for å panorere, bruk hjulet til å zoome.
3. **Etter punktpar.** Klikk {{ui:Velg et par}}, deretter et punkt på skanningen som skal flyttes, og deretter samme sted på en annen skanning (et hjørne, et målpunkt, foten av en søyle). Gjør dette minst tre ganger, med punkter som ikke ligger på én linje og er spredt utover. Klikk {{ui:Plasser etter par}}: skanningen plasseres med en minste-kvadrat-tilpasning, og **Restavvik** viser hvor mye hvert par fortsatt bommer. Et par med et stort tall er et dårlig valg: fjern det med krysset og plasser på nytt.
4. **Etter målpunkter.** Hvis et punkts sanne koordinater er kjent (innmålte målpunkter), klikk {{ui:Velg, og skriv så målet}}, klikk punktet på skanningen, og skriv målpunktets X, Y og Z i raden. Par og innskrevne målpunkter kan blandes fritt.

## Forbedre med ICP

Par gir en grov plassering. {{ui:Forbedre}} flytter skanningen til flatene sitter på den andres: først **punkt til punkt**, deretter **punkt til plan**. Tabellen lister hvert steg med sin feil og hvor mange punkter som ble tilpasset; linjen over den viser feilen som synker. {{ui:Stopp}} avslutter kjøringen etter steget som pågår, og beholder det den kom til. {{ui:Angre}} tar hele kjøringen (eller den siste plasseringen) tilbake. {{ui:Tilbakestill}} setter skanningen tilbake til filens koordinater.

For å holde det raskt på en bærbar PC arbeider ICP på en nedskalert andel av punktene ({{ui:Punkter brukt}}, 5,000 til 60,000), og ignorerer tilpasninger som ligger lenger unna enn {{ui:Største samsvarsavstand}} (som standard 5% av skanningens størrelse, og krymper etter hvert som den setter seg). Den trenger en grov plassering først: skanninger som knapt overlapper, melder at de ikke kan tilpasses. Flater som bare er flate eller bare rette, kan ikke låses fast i posisjon langs seg selv; legg til par i så fall.

## Lagre og eksporter

- {{ui:Lagre prosjekt}} skriver en liten `.ccscans.json`-fil: hver skannings navn, størrelse og et fingeravtrykk av de første 64 KB, med transformasjonen. Den inneholder ingen punkter. {{ui:Åpne prosjekt…}} finner skannefilene ut fra disse referansene (filene må legges til først) og setter hver transformasjon tilbake.
- {{ui:Eksporter LAS}} og {{ui:Eksporter E57}} skriver én fil med alle skanningene på sin registrerte plass. Punktene skrives aldri om i originalene; transformasjonen brukes på veien ut. Med {{ui:Les alle punkter fra filene}} på leses hver fil på nytt for hvert punkt (opptil 20 millioner per skanning). Er den av, skrives bare punktene som vises i visningen.
- {{ui:Vis registrert sky}} (BimCraft) skriver LAS-filen og åpner den i 3D-visningen ved siden av modellen, som enhver annen sky.

:::note
Ingenting lastes opp. Registrering skjer i filenes egne enheter og beholder millimeter: en LAS skrives med en skala som passer (ned til 0.1 mm), en E57 med doble flyttall. Et koordinatsystem føres bare over i LAS når alle skanningene oppgir samme EPSG-kode. E57-skriveren er vår egen; den kontrolleres ved å lese filene tilbake med denne leseren og med libE57Format.
:::
