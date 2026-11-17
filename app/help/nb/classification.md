---
title: Klassifiseringskoder (Uniclass, OmniClass, UniFormat)
summary: Gi hvert element og hver type en klassifiseringskode, velg hvilke systemer et prosjekt bruker, søk i Uniclass-tabellene som følger med appen, last inn kontorets egne lisensierte tabeller, og vis kodene i tabeller. Kodene skrives inn i IFC-filen for annen programvare.
keywords: klassifisering, klassifiser, kode, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabell, elementkode, typekode, standardkode, IfcClassification, IfcClassificationReference, cobie, kolonne i tabell, csv, lisens
from: 222b94cd
---

## Hva du gjør

Sett en klassifiseringskode på vegger, gulv, tak, dører, vinduer og alt annet i modellen, i opptil tre systemer side om side: Uniclass, OmniClass og UniFormat. Andre fag og annen programvare stoler på koden, ikke på navnet, så kodene lagres i IFC-filen som klassifiseringsreferanser som ethvert BIM-program leser.

## Gi et element en kode

1. Velg et element (eller flere) og åpne **Egenskaper**. Åpne {{ui:Klassifisering}}-seksjonen.
2. Skriv koden i boksen for systemet og trykk Enter. Når en kodeliste er lastet inn, skriv en del av en kode eller noen ord («gardinvegg») og velg blant treffene: kodens tittel fylles inn for deg.
3. {{ui:Gjelder for}} sier hvor koden skal: **Dette elementet**, eller **Dens type (hvert element av typen)**. En kode på en veggtype leses av hver vegg av den typen, også de du tegner senere.
4. {{ui:Fjern}} tar bort en kode.

Under hver kode sier seksjonen hvor den kommer fra: satt på dette elementet, fra typen, eller prosjektets standard for klassen. Et elements egen kode vinner alltid over typens, og typens over en standard. Med flere elementer valgt betyr en boks som sier «varierer» at de ikke deler én kode. Skriver du inn én, får alle den. Hver endring er ett trinn å angre.

En kode kan alltid skrives inn, enten en liste er lastet eller ikke. Hvis den ikke ser ut som en kode for det systemet, eller ikke finnes i den innlastede listen, sier et hint fra det, og koden beholdes slik du skrev den.

## Velg prosjektets systemer

Åpne **Data** på modellinjen og velg {{ui:Klassifisering}} (eller {{ui:Prosjektklassifisering…}} i Egenskaper-seksjonen).

- Kryss av for systemene dette prosjektet bruker. Egenskaper viser da bare dem.
- **Uniclass**: tabellene for Elementer/funksjoner (EF), Systemer (Ss) og Produkter (Pr) følger med appen. De er © NBS, lisensiert under Creative Commons Attribution-NoDerivatives 4.0, og videreformidles uendret. Dialogen viser hver tabells utgave og dagen den ble lest. De er ikke de nyeste tabellene: utgiveren gir ut nye hvert kvartal på sitt eget nettsted.
- **OmniClass** og **UniFormat**: ingen kodeliste følger med appen, fordi utgiveren ikke tillater å videreformidle tabellene uten lisens. Skriv inn en hvilken som helst kode, eller last inn kontorets egen lisensierte tabell.
- {{ui:Last inn en tabell (CSV)…}} leser kontorets egen tabell fra en CSV-fil med en kolonne for kode og en for tittel. En overskriftsrad kalt Code, Number eller Identifier og Title, Name eller Description finnes selv; uten den brukes de to første kolonnene. Tabellen blir liggende i denne nettleseren og legges aldri inn i prosjektfilen. Bare kodene du tildeler, lagres i filen. Du kan laste inn en nyere Uniclass-tabell på samme måte.
- {{ui:Gi elementer en standardkode etter klassen}} gir hver vegg, gulv, tak, dør, vindu, trapp, rampe, søyle, bjelke og møbel en startkode fra Uniclass-tabellen for Elementer/funksjoner, når den ikke har en egen. Elementer du tegner etterpå, får den også.
- {{ui:Vis kodene som kolonner i tabellene}} legger til én kolonne per system i tabellene Dører, Vinduer, Vegger etter type og Rom, og i deres CSV. En rad med flere elementer viser «varierer» når kodene deres er ulike.

## Godt å vite

- Standardkodene er CadCraft sitt eget utgangspunkt, ikke utgiverens, og de er ikke kontrollert av en fagperson. Kontroller dem mot prosjektets standard.
- I filen er en standard en ekte klassifisering, merket med relasjonsnavnet "CadCraft default", og den forsvinner så snart elementet eller typen får en egen kode.
- Koder en importert fil allerede har, leses og vises, uansett hvordan det andre programmet skrev systemets navn. Koder for andre systemer (et kontors egne) listes og røres ikke.
- Kodene leses tilbake når filen åpnes igjen, her eller i et annet program. De tas også med i IFC5-alfa (IFCX)-eksporten når det eksperimentelle valget er på, unntatt en kode satt på et tak.
- Ikke bygget ennå: et tre for å bla gjennom en tabell nivå for nivå, koder på etasjer og rom som prosjektstandarder, og kontroll av en kode mot utgaven som er nevnt i filen.
