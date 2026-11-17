---
title: Spill av en flom, vind eller et jordskjelv på bygningen
summary: Vann som stiger gjennom rommene, vindtrykk på hver etasje eller et jordskjelv som rister etasjene, spilt av på et plan eller en fasade med en tidsglider. Enkle modeller med antakelsene listet opp; ikke en normkontroll eller en konstruksjonsprosjektering.
keywords: fare, flom, vind, jordskjelv, seismisk, etasjeforskyvning, sidesvai, grunnskjærkraft, vannstand, klima, scenario, havnivå, avspilling, etasje, egenperiode
from: ff0d34d1
---

Delen {{ui:Farefremvisning}} i venstre panel spiller av en fare på den åpne IFC-modellen. Ingenting i modellen endres.

:::warning
Dette er **enkle modeller for å se hva en fare gjør med denne utformingen**, ikke en flomstudie, en vindnormkontroll eller en konstruksjonsprosjektering. Hvert resultat viser sine antakelser.
:::

## Flom

Sett høyeste vannstand over laveste gulv, og minuttene det tar å stige, stå og synke. Vann kommer inn i et rom gjennom en åpning der vannet har passert terskelen, og rom som er forbundet med våte rom gjennom åpninger under vannstanden, står på samme nivå (kvasistatisk). Tabellen viser når hvert rom først blir vått og hvor dypt; planen spiller det av. Skriv inn mest vann et rom tåler, så gir rom over den advarsler. **Klimascenarier:** last inn din egen scenariofil (JSON eller CSV med et år, en havnivåstigning og en flomfaktor) og velg et år. Eller slå på tillegget Climate futures og velg et scenario og et år: flommen kjøres to ganger, nåtid ved siden av fremtid (se «Climate futures: 2050 and 2080 flood, heat and wildfire»). Typene Skogbrannseksponering og Varme: fremtidig værfil ligger i samme liste.

## Vind

Trykket følger ½ρV² med hastigheten som stiger med høyden. Kraften på en etasje er dette trykket ganget med en vindkastfaktor, de to trykkoeffisientene, bredden og etasjehøyden. Du får skjærkraft, veltemoment og sidesvai.

## Jordskjelv

En skjærbygning: en masse per etasje (grunnflate × kilogram per kvadratmeter, som du setter), samme stivhet i hver etasje tilpasset den første egenperioden du oppgir (en tidel sekund per etasje hvis du lar feltet stå tomt, og det sier fra om det), demping og en modellert bakkebevegelse (en puls eller filtrert støy) med den maksimale akselerasjonen du velger. Resultatet er hver etasjes forskyvning, gulvakselerasjonene og grunnskjærkraften. Fasaden spiller av sidesvaien, tegnet større enn den er. Skriv inn et tillatt forskyvningsforhold, så gir etasjer over det advarsler. Den er elastisk: ingenting gir etter eller sprekker.

## Gulvstivhet fra analyserammen

For et jordskjelv eller for vindsvai velger du **Analyserammen** som kilde til stivheten i stedet for å skrive inn en periode. Hvert gulv skyves sideveis etter tur, rammen (bjelker, søyler, avstivning, dekker) løses, og gulvenes stivhet med alt virkende sammen styrer kjøringen. Vekten er elementenes egen pluss gulvlasten per kvadratmeter du setter i gulvets plantegningsboks. Den reelle første egenperioden vises. Den er elastisk: ingenting gir etter, og torsjon er ikke modellert. For vind er etasjekreftene fortsatt de antatte over (en potenslovprofil, din vindkastfaktor og de faste trykkoeffisientene, ikke en vindnorm). Bare sidesvaien kommer fra rammen, ved å løse rammens fulle stivhetsmatrise mot disse kreftene. Modellen trenger en IFC med en ramme som fanen Analyse kan lese.

## Enheter

Vanndybder, sidesvai og forskyvning etasje for etasje, avstander og arealer vises i den {{ui:Enheter}} du valgte. Krefter (kN), tider og akselerasjoner beholder sine egne enheter, og en verdi du skriver inn i en boks merket i meter, forblir i meter. Det samme gjelder evakuering, dagslys, varme- og kjøling og innredningsresultater: lengder, arealer og volumer følger valget ditt. Trykk, strømning, temperatur, energi og effekt konverteres aldri.
