---
title: Dokumenter og revisjoner (arkivet)
summary: En trinn-for-trinn-gjennomgang av ett ekte oppdrag: legg en prosjektmappe med IFC-modeller under kontroll, sjekk ut en modell, endre den, sjekk den inn med en merknad, send den til gjennomgang, godkjenn og frigi den, se historikken og hva som bruker den, hva en andre person ser mens den er låst, og hvordan det fungerer med skymapper.
keywords: arkiv, dokumenter, gjennomgang, veiledning, sjekk ut, sjekk inn, revisjon, frigivelse, godkjenn, lås, historikk, hvor brukt, ifc, modell, skymappe, prosjektmappe, to personer, delt mappe
from: 0a753f25
---

## Hva du skal gjøre

Du er Ana, og jobber med Riverside clinic sammen med en kollega, Ben. Prosjektets IFC-modeller ligger i én mappe dere begge når (en delt disk, en synkronisert mappe eller en skymappe). Til slutt har én fil gått fra første kopi til en frigitt revisjon **A**, er endret igjen som **B.1**, du har sett hvem som gjorde hva, og du har sett hva Ben ser når du holder filen.

Alt lagres i en skjult `.ccvault`-mappe ved siden av filene dine: ingen server, ingenting lastes opp (en skymappe er unntaket, se siste steg). For alle knapper og regler på ett sted, se emnet *Dokumenter: utsjekking, revisjoner og frigivelse* der appen din har det.

## 1. Sett opp prosjektmappen

1. Velg {{ui:Dokumenter}} ved siden av {{ui:Åpne en mappe}} på startskjermen, eller {{ui:Dokumenter…}} i **Fil**-menyen.
2. Velg {{ui:Velg prosjektmappen}} og velg mappen som inneholder prosjektets IFC-modeller. (Prosjektmapper fungerer i Studio og i nettlesere som kan åpne en mappe, som Chrome og Edge. I andre nettlesere sier panelet fra om det.)
3. Velg {{ui:Endring}} ved siden av **Du:** og skriv inn navnet ditt, `Ana` (hvis den spør, også navnet på denne datamaskinen). Panelet viser nå *Du: Ana på* og datamaskinen din. Navnet ditt står på alt du gjør.
4. Velg {{ui:Start et arkiv i denne mappen}} og skriv prosjektets navn, `Riverside clinic`. Panelet sier *Arkiv startet for Riverside clinic.*

## 2. Legg en fil under kontroll

1. Åpne **Filer som ikke er i arkivet** og velg {{ui:Legg til}} ved siden av `models/House.ifc`.
2. Den vises under **Filer i arkivet** med revisjon **A.1**, tilstand **Under arbeid**. A.1 er den første kopien; arkivet tar vare på en kopi av hver revisjon.

## 3. Sjekk ut, endre, sjekk inn

1. Velg {{ui:Åpen}} ved siden av `models/House.ifc`. Modellen åpnes i BimCraft, og panelet lukkes slik at du kan se den. Åpne panelet igjen fra {{ui:Dokumenter}}.
2. Åpne panelet igjen og velg {{ui:Sjekk ut}}. Raden sier nå **Sjekket ut til deg**. Det er laget en låsfil i `.ccvault/locks`; ingen andre kan sjekke ut denne filen før du sjekker den inn.
3. Endre modellen: flytt en vegg, legg til en dør. Lagre avvises med mindre modellen er sjekket ut til deg, og sier hvorfor. Lagre som fungerer alltid for en kopi av din egen.
4. Åpne panelet, velg {{ui:Sjekk inn}} og skriv hva som er endret (`Flyttet døren`). Panelet sier *sjekket inn som A.2*. Filen i prosjektmappen er nå modellen du hadde åpen, og låsen er borte. Å sjekke inn uten endring beholder revisjonen.

Hvis du ombestemmer deg, gir {{ui:Angre utsjekking}} filen tilbake uten en ny revisjon.

## 4. Gjennomgang og frigivelse

1. Velg {{ui:Send til gjennomgang}}. Tilstanden blir **Til gjennomgang**, og filen er skrivebeskyttet.
2. Før godkjenning velger du {{ui:Prosjektinnstillinger}} og oppgir hvem som kan godkjenne (ett navn per linje), for eksempel `Ben` og `Carla`. Hak av regelen om at godkjenneren må være en annen enn forfatteren, og velg {{ui:Lagre innstillinger}}. Nå avviser arkivet selv alle andre.
3. Ben (eller Carla) velger {{ui:Godkjenn}} og skriver inn godkjennerens navn. Tilstanden blir **Frigitt**, og revisjonen blir **A**, med *godkjent av* og navnet. En frigitt fil er skrivebeskyttet. {{ui:Send tilbake}} ville ha sendt den tilbake til Under arbeid, med en grunn.

Godkjennerens navn er navnet som ble skrevet inn i panelet; det er en oversikt over hvem som signerte, ikke et bevis på identitet.

## 5. En ny revisjon

1. På den frigitte filen velger du {{ui:Ny revisjon}}. Du reserverer den for neste bokstav.
2. Endre den, og velg deretter {{ui:Sjekk inn}}. Revisjonen er **B.1**, under arbeid. Frigi den på samme måte, så blir den **B**. {{ui:Angre utsjekking}} før den første innsjekkingen lar den stå på **A**.

Revisjonsbokstavene går A, B … Z, AA, AB. Hvis standarden din hopper over noen bokstaver, hopper prosjektinnstillingen *Bruk ASME Y14.35-rekkefølgen* over I, O, Q, S, X og Z i de neste revisjonene.

## 6. Se hva som skjedde

Velg filnavnet for å åpne detaljene:

- **{{ui:Historikk}}**: alle hendelser, nyeste først, med hvem, hvilken datamaskin og når: *Sjekket inn A.2* av Ana, *Frigitt* av Ben, og så videre.
- **{{ui:Revisjoner}}**: revisjonstabellen: hver revisjon som er tatt vare på, med dato, hvem som sjekket den inn, merknaden, og hvem som godkjente den. Arkivet tar vare på en kopi av hver i `.ccvault/revs`.
- **{{ui:Bruker}}**: dokumentene en IFC-modell peker på.
- **{{ui:Brukt av}}**: Brukt av lister hver modell i arkivet som peker på denne filen.

## Modeller som peker på andre dokumenter

En IFC-modell som peker på andre dokumenter i mappen (tegninger, lister), viser dem under **Bruker**, og hvert av dem viser modellen under **Brukt av**. Sjekker du inn et dokument, kan du se hvilke modeller som refererer til det.

## 7. Hva Ben ser mens du holder filen

Sjekk nå ut filen igjen, og be Ben om å åpne samme prosjektmappe på datamaskinen sin og åpne panelet. På filens rad ser han **Sjekket ut av Ana på** din datamaskin **siden** klokkeslettet, og ingen knapp for {{ui:Sjekk ut}}. Prøver han likevel, avviser arkivet det: låsen er en fil systemet ikke vil lage to ganger, så to personer kan ikke begge holde filen, selv i samme brøkdel av et sekund, når mappen ligger på disk i Studio. (I en nettleser gir mappen bare et best mulig forsøk, og panelet sier det under **Mappe**.)

Hvis Ana er borte og Ben trenger filen, frigjør {{ui:Bryt utsjekking}} den. Han må skrive en grunn; den går inn i loggen sammen med hvis utsjekking det var. Når prosjektet har lister over administratorer, kan bare de. En utsjekking som er eldre enn grensen for utdatert (14 dager som standard), merkes *lenge siden*. Etter bruddet blir Anas sene innsjekking avvist, så dere to ikke kan overskrive hverandre.

## 8. Skymapper

En skymappe er en prosjektmappe som ligger i teamets skylagring, så teamet trenger ingen delt disk. I Studio, pålogget med din CadCraft-konto, viser panelet {{ui:Åpne en skymappe}} ved siden av {{ui:Velg prosjektmappen}}. Velg den og velg mappen, som vises som arbeidsområde / mappe. En eier av arbeidsområdet lager mappen først, og teamets skylagring må være aktivert. Alt over fungerer på samme måte; serveren lager låsen, som er streng på tvers av personer. Er du ikke pålogget, ber panelet deg logge inn. I en vanlig nettleserfane tilbys ikke skyknappen; bruk Studio.

## Prøv det

Gjør de åtte stegene over med en kopi av en ekte fil. For trinnene med to personer trenger du en annen person, eller to vinduer med to navn. Hvis du prøver det med en ekte delt mappe, lister siden for fellesskapstesting en sjekk som spør nøyaktig dette, og tar imot resultater.
