---
title: Sjekk etterklangen i et rom og lytt til den
summary: Etterklangstid per oktavbånd for hvert rom (Sabine og Eyring) ut fra størrelse og overflater, et mål du selv setter, og en stemme, et klapp eller musikk spilt gjennom en beregnet impulsrespons for rommet.
keywords: akustikk, etterklang, etterklangstid, rt60, sabine, eyring, absorpsjon, ekko, lyd, lytt, impulsrespons, tale, klasserom, kontor, teppe, takplate, støy
from: 16996cbb
---

{{ui:Romakustikk}}-seksjonen i venstre panel regner ut hvor lenge lyden henger igjen i hvert rom. Den leser hvert roms gulvareal, høyde, vegger, dører og vinduer fra den åpne IFC-modellen. Ingenting i modellen endres.

## Velg overflatene

Der modellen sier hva som finnes på en flate, leser rommet det: det innvendige laget i hver veggtype (gips, puss, murstein, betong og blokk er kjent), gulvets type (tre eller betong) og om et tak er flislagt. Etiketten ved hvert valg sier om verdien kommer fra modellen, er en standard, eller er ditt eget valg; velg en annen overflate for å overstyre den. Alt modellen ikke sier, står på standard. Koeffisientene er **typiske publiserte verdier**; erstatt dem med testdata for produktet når de foreligger. Skriv inn et **mål** (lengste etterklangstid i midtfrekvensene du ønsker), så får ethvert rom over det en advarsel, med absorpsjonen som ville bringe den ned.

## Lese tabellen

Etterklang oppgis for 125 Hz til 4 kHz. Sabine passer for levende rom og Eyring for døde; linjen merket *Brukt* tar Eyring der gjennomsnittlig absorpsjon er over 0,2. Luftens absorpsjon er med (den forkorter de høye båndene i store rom). Det er en statistisk modell: den forutsetter at lyden spres jevnt, så lange eller flate rom og svært små rom er et grovt anslag, og møbler, personer og åpne dører er ikke regnet med.

## Lytt

{{ui:Spill den i dette rommet}} spiller en stemme (laget her), et klapp, plukkede toner eller **en egen lydfil** (den blir liggende på datamaskinen) gjennom en impulsrespons beregnet for rommet: den direkte lyden, de første refleksjonene for en boks av den størrelsen, og en hale som dør ut med rommets egen etterklangstid i hvert bånd. {{ui:Spill den tørr}} spiller samme lyd med samme nivå, uten rommet. Impulsresponsen eller lyden i rommet kan lagres som WAV-filer. Det høres ut som et rom av den størrelsen og overflaten, ikke som et bestemt virkelig rom.

## Personer og møbler

Skriv inn antall **personer i dette rommet** for å legge til deres absorpsjon. Møbler modellen har (sofaer, senger, stoler, bord, garderober, funnet etter navn) legger til sin egen. Tallene er grove planleggingsverdier, avrundet; erstatt dem med målinger for et rom som er viktig.

## Kilde og lytter

Under {{ui:Kilde og lytter}} trykk {{ui:Plasser kilden}} eller {{ui:Plasser lytteren}} og klikk på rommets plan. Lyden som spilles, høres da fra det stedet: den direkte lyden kommer etter avstanden, og den gjenklingende delen har nivået for den avstanden. Fjern begge for å gå tilbake til avstandsboksen.

## Ujevn absorpsjon og romsvingemoder

Under {{ui:Ujevn absorpsjon (boksrom)}} skriv inn rommet som en boks, og velg overflatene for gulv, tak og vegger. Tabellen legger Fitzroy og Arau-Puchades til Sabine og Eyring: de behandler de tre parene med motstående flater hver for seg, slik at et rom med teppe og hardt tak ikke leses som for kort. Når parene er svært ulike, sier en merknad hvilken som er mest pålitelig. Under tabellen lister **Romsvingemoder** de laveste stående bølgene i boksen, og frekvensen under hvilken rommet har egne moder i stedet for et jevnt lydfelt. Dette er prognoser for et boksrom, et planleggingsverktøy og ikke en måling.

## Enheter

Romareal, høyder, volumer og avstander vises i {{ui:Enheter}} som er valgt (kvadratfot og kubikkfot, tommer, millimeter, centimeter eller meter). Selve beregningen holder seg i SI; bare visningen endres. Tider (sekunder), frekvenser og nivåer er uendret.
