---
title: Kontroller modellen: rom, merkelapper, LOD, kollisjoner og grensesnitt
summary: Kjør ferdige kontroller for rom uten navn, manglende merkelapper, elementer under utviklingsnivået prosjektetappen krever, kollisjoner mellom fag og LOD 350-grensesnitt. Kun råd: ingenting blokkeres.
keywords: kontroll, sjekk, rom uten navn, manglende merkelapp, merke, lod, utviklingsnivå, milepæl, etappe, kollisjon, fag, koordinering, grensesnitt, lod 350, åpning, overligger, bjelke, gjennomføring, hylse, rør, kanal, problemer, kontrollrapport, rådgivende
from: cc83a14d
---

## Hva du skal gjøre

Gå gjennom hele modellen på én gang før du utsteder den. Kontrollen kjører klare regelsett og legger det den finner i listen {{ui:Problemer}} som råd. Ingenting blokkeres: du retter et funn, eller godtar det med en begrunnelse, som alle andre problemer.

## Steg

1. Åpne {{ui:Modellkontroller}} › {{ui:Kontroll}} i venstre panel, eller {{ui:Verktøy}} › {{ui:Kontroller modellen…}} (skrevet: `AUDIT`).
2. Velg {{ui:Prosjektetappe}}. Det er den samme etappen som i tegningsdetaljene.
3. Kryss av regelsettene som skal kjøres.
4. Klikk {{ui:Kjør kontrollen}}.
5. Les linjen for hvert regelsett, og åpne deretter {{ui:Åpne Problemer-listen}}. Et klikk på et funn velger elementet.
6. {{ui:Kontrollrapporten}} laster ned rapporten: hvert funn, hvem som godtok hva og hvorfor, og regelsettene som kjørte.

## Regelsettene

- **Rom uten navn**: et rom uten navn, eller et rom som fortsatt heter det programmet kalte det («Rom 3»).
- **Manglende merkelapper**: en dør eller et vindu uten merke, et rom uten nummer, en elektrisk enhet uten merkelapp.
- **Elementer under etappens LOD**: hver vegg, hvert gulv, hver himling, hvert tak, hver dør og hvert vindu med en LOD under det etappen krever. Et element leser LOD-merkelappen på sin type. Et element som er verifisert på stedet, er LOD 500. Elementer uten merkelapp telles i én merknad, fordi de ikke kan kontrolleres.
- **Kollisjoner mellom fag**: elementer fra to fag (arkitektur, konstruksjon, maskin, rør, elektro, etter IFC-klasse) som går inn i hverandre. Et tak som hviler på veggene sine, telles ikke.
- **LOD 350-grensesnitt**: hver dør og hvert vindu sitter i en åpning i veggen sin, og åpningen passer innenfor veggen. To åpninger overlapper ikke. En åpning bredere enn grensen har en overligger eller bjelke (et element over den, eller en merknad på døren eller vinduet). Et rør, en kanal eller en kabelbro som krysser en vegg eller et dekke, har en åpning der. Funn telles per par av fag.
- **Gjenkjente elementer ingen har kontrollert**: vegger, dører, vinduer og rom lest fra en PDF, en skanning eller en tegning som fortsatt er ubekreftet. Se [Merk elementer som kontrollert eller verifisert på stedet](topic:verification).

## Utviklingsnivået etappen krever

Åpne {{ui:Utviklingsnivået hver etappe krever}} for å se eller endre tabellen.

:::note
Tabellen og bredden på overliggeren er CadCrafts utgangsverdier. De er ikke hentet fra en standard: et prosjekt setter LOD per etappe i sin BIM-gjennomføringsplan. Sett dem til dine. Et kontor kan sette tabellen for alle i Innstillinger › Default Policies › Audit. En endring i Audit-delen beholdes på denne datamaskinen.
:::

## Greit å vite

- En overligger kan noteres i stedet for å modelleres: velg døren eller vinduet og fyll ut {{ui:Merknad om overligger eller bjelke}} under {{ui:Verifisering}} i Egenskaper.
- Et rør som går gjennom en ekte åpning, krysser ingen flate og rapporteres ikke. Et rør som er modellert rett gjennom veggen, rapporteres.
- Kollisjonskontrollen stopper etter noen sekunder på en svært stor modell, og sier fra om det. For en full kontroll av to valgte sett, bruk [Finn kollisjoner mellom elementer](topic:clash-check).
- Kjør kontrollen på nytt etter at du har endret modellen. Godtatte funn forblir godtatt så lenge tallene deres ikke endres.
- Den leser modellen. Den erstatter ikke en koordineringsgjennomgang av de ansvarlige.

## Neste

- [Sjekk en modell for vanlige problemer](topic:model-checks)
- [Finn kollisjoner mellom elementer](topic:clash-check)
- [Merk elementer som kontrollert eller verifisert på stedet](topic:verification)
