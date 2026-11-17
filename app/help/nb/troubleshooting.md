---
title: Feilsøking
summary: Meldinger BimCraft viser, hva som forårsaker dem, og hva du bør gjøre, for åpning av filer, mapper, 3D-modeller, tegninger og endringer.
keywords: problem, feil, virker ikke, kan ikke åpne, mislyktes, ufullstendig, skadet, treg, krasj, tom, mangler, melding, hjelp
from: 1e5a79fc
---

Meldinger vises i statuslinjen nederst på arbeidsflaten, i rødt når noe mislyktes. Finn meldingen nedenfor.

## Åpne filer

**"*navn* er ikke en IFC-, RVT-, RFA-, DWG- eller DXF-fil."**
BimCraft gjenkjente ikke filen. Sjekk filendelsen og at filen ikke er tom. PDF-er, bilder og kontorfiler åpnes ikke.

**".ifczip støttes ikke ennå. Lagre eller eksporter modellen som en vanlig .ifc-fil."** (gjelder også `.ifcxml`)
Pakk ut `.ifczip` (det er en vanlig zip-fil som holder en `.ifc`) eller eksporter vanlig IFC.

**"… er en prosjektfil BimCraft ikke leser ennå."**
En `.pln`-, `.pla`-, `.tpl`- eller `.bpn`-fil. Eksporter IFC eller DWG fra den og åpne den: se [Åpne .pln- og .pla-prosjektfiler](topic:pln-project-files).

**"Denne IFC-filen kunne ikke leses."**
IFC-filen er skadet eller ikke egentlig IFC. Åpne den i en tekstredigerer: en ekte IFC-fil starter med `ISO-10303-21;`. Eksporter den på nytt.

**"Denne filen er ufullstendig: den er … MB, men dens egen indeks peker på data som er minst … MB inn. …"**
Prosjekt- eller familiefilen ble kuttet av under kopiering, opplasting eller synkronisering. En skyfil som er "bare på nett" ser likt ut. En fil åpnet alene åpnes fortsatt, med denne meldingen øverst på kortet og "Viser det som ble gjenopprettet; kopier originalen på nytt for hele modellen.": kortet viser bare delene der hver byte er i filen, og lister resten under **Ikke i filen**. Gjør filen tilgjengelig frakoblet i skylagringen din, eller kopier originalen på nytt, og åpne den igjen. I en mappe viser BimCraft den nyeste komplette sikkerhetskopien i stedet.

**"… Filens egen innholdsfortegnelse ligger også i den manglende delen, så ingenting i den kan åpnes."**
Filen ble kuttet så tidlig at heller ikke innholdsfortegnelsen er der. Ingenting kan gjenopprettes fra denne kopien. Kopier originalen på nytt og åpne den igjen.

**"Denne sammensatte filen har ingen BasicFileInfo-strøm, så den er ikke en Revit-fil."**
Filen er en sammensatt fil av en annen type (gamle kontordokumenter bruker samme beholder). Sjekk at du valgte riktig fil.

**"Jobber fortsatt med den forrige…"**
BimCraft er fortsatt opptatt med forrige fil eller mappe. Vent til statuslinjen er ferdig, og prøv igjen.

**Filvelgeren nedtoner filen min.**
Velgeren tilbyr bare `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` og `.dxf`. Dra andre filer inn på siden i stedet, så forteller BimCraft deg om den kan lese dem.

## Åpne mapper

**"Denne mappen har mer enn 20,000 filer. Velg en mindre mappe, for eksempel ett prosjekt."**
Du valgte en mappe som ligger for høyt, for eksempel en hel disk. Velg én prosjektmappe.

**"Nettleseren ga ikke tilgang til *navn*. Velg den på nytt med Åpne en mappe."**
Du klikket på {{ui:Åpne igjen}} for en nylig mappe, og nettleserens tillatelse ble avslått eller er utløpt. Velg mappen på nytt, eller dra den inn.

**Nettleseren sier den vil "laste opp" filer.**
Det er nettleserens egen ordlyd for å gi filer til en side. BimCraft sender dem ikke noe sted. Dra mappen inn for å unngå spørsmålet.

**Ingenting skjer på en telefon eller et nettbrett.**
Mange mobilnettlesere kan ikke velge mapper. Åpne enkeltfiler, eller bruk en datamaskin.

## IFC-motoren lastes første gang

**Statuslinjen står fast på "Starter IFC-motoren…", eller viser en feil som "Failed to fetch".**
IFC-motoren kunne ikke lastes ned. Du kan være frakoblet, eller en brannmur eller blokkering av innhold stopper den.

:::offline
Du er frakoblet. Hvis knappen i appfeltet ikke sier {{ui:Klar frakoblet}}, ble IFC-motoren aldri lagret i denne nettleseren. Koble til igjen, åpne filen på nytt, og klikk deretter {{ui:Lagre for frakoblet bruk}} slik at den fungerer frakoblet neste gang. Se [Arbeide frakoblet](topic:online-offline).
:::

:::online
Last siden inn på nytt og prøv igjen. På et arbeidsnettverk: be IT-teamet om å tillate nettstedets `.wasm`-filer.
:::

## Lagre for frakoblet bruk

**Knappen sier {{ui:Kunne ikke lagre}}.**
Noen filer ble ikke lastet ned, vanligvis fordi forbindelsen brøt. Sjekk forbindelsen og klikk på knappen igjen. En tidligere frakoblet kopi beholdes til en ny er fullstendig.

**Knappen sier {{ui:Frakoblet bruk er ikke tilgjengelig}}.**
Dette vinduet kan ikke beholde en frakoblet kopi, for eksempel et privat vindu eller en administrert arbeidsdatamaskin. Se [Arbeide frakoblet](common:offline).

**Knappen står lenge på "Lagrer *n* av *m*".**
BimCraft-kopien er omtrent 11 MB, mesteparten er IFC-motoren. Hold fanen åpen til den sier {{ui:Klar frakoblet}}.

**BimCraft åpnet frakoblet, men ser utdatert ut.**
Den lagrede kopien din er fra et tidligere besøk. Når du er tilkoblet, klikk på {{ui:Klar frakoblet}} og velg {{ui:Lagre på nytt (hent nyeste versjon)}}.

## 3D-visning

**Modellen er ikke der jeg forventet, eller den er liten.**
Trykk {{key:F}} eller klikk {{ui:Tilpass}}. Tilpass rammer alltid inn alt i modellen, også etasjer du har fjernet av og løse elementer langt fra bygget, så bygget kan se lite ut. Zoom inn derfra.

**Klikking velger ingenting.**
Hold musen stille når du klikker: en liten dra roterer. Elementer på fjernede etasjer kan ikke velges. Med {{ui:Rom}} på, velges de gjennomsiktige rommene før det som er inni dem.

**Knappen {{ui:Kanter}} er nedtonet: "Kanter er av for svært store modeller".**
Modellen har mer enn 1,5 millioner trekanter. Kanter er av for å spare minne.

**Fanen blir treg, hvit, eller viser nettleserens krasjside.**
Modellen er for stor for minnet nettleseren gir fanen. Lukk andre faner og last inn siden på nytt. Eksporter en mindre IFC: én bygning, én fagdisiplin eller færre etasjer. Se [Nettlesere, enheter og minne](topic:platforms).

**3D-visningen står tom.**
WebGL kan være slått av eller blokkert. Slå på maskinvareakselerasjon (eller grafikkakselerasjon) i nettleserens innstillinger, og start nettleseren på nytt.

## Redigere IFC

**"Bruk et tall."** Verdien er numerisk. Skriv et vanlig tall uten enheter, for eksempel `2.4`.

**"Bruk et heltall."** Verdien er et antall eller et helt tall. Fjern desimalene.

**"Bare egenskaper med én verdi kan redigeres."** Lister, oppregninger og mengder er skrivebeskyttet.

**{{key:Mod+S}} åpner nettleserens "Lagre side"-vindu.**
Det finnes ingen ulagrede endringer, så BimCraft lot nettleseren ta tasten. Lukk vinduet.

**{{key:Mod+Z}} gjør ingenting.**
Den virker bare når du har ulagrede endringer og ikke skriver i et felt. Etter en lagring er det ingenting igjen å angre.

**Listen {{ui:Endringer}} viser fortsatt endringer etter at jeg forkastet dem og åpnet en tegning eller en mappe.**
Når du svarer OK på spørsmålet "Forkaste dem?" og deretter åpner noe annet enn en IFC-modell, beholdes de gamle endringene i minnet, og {{ui:Lagre som IFC}} vil fortsatt lagre dem. For å virkelig starte på nytt: åpne den originale IFC-filen igjen, eller last siden inn på nytt.

**Redigeringen min endret flere elementer enn jeg valgte.**
Du endret en egenskap i et sett merket "(type)". Typeegenskaper gjelder for alle elementer av typen. Klikk {{ui:Angre}}. Se [Endre en typeegenskap for alle elementer av en type](topic:type-vs-instance).

## Tegninger

**"*navn* kunne ikke leses. Den kan være skadet, eller lagret i et format leseren ikke håndterer ennå (…)."**
Lagre tegningen fra programmet som laget den som en eldre DWG (2018 eller tidligere) eller som DXF, og prøv igjen.

**"Denne tegningen har ingenting å vise."** eller **"*navn* er en tom tegning: den har ingen linjer, tekst eller blokker."**
Tegningen er tom, eller den inneholder bare ting BimCraft ikke tegner ennå (se **Ikke tegnet ennå** til høyre).

**"Denne tegningen er svært stor; bare en del vises."**
BimCraft sluttet å tegne for å holde seg responsiv. Slå av lag du ikke trenger, eller åpne arkene du trenger fra en mindre tegning.

**Deler av et ark mangler.**
Koblede tegninger kan mangle: se under **Koblede tegninger** til høyre. Se [Finn koblede tegninger og bilder](topic:dwg-linked-files). Lag kan også være av: klikk {{ui:Alle på}}.

**Et bilde vises som en tom ramme.**
Filen ble ikke funnet, eller den er en TIFF ("TIFF kan ikke vises i en nettleser"). Legg til en PNG- eller JPEG-kopi med {{ui:Legg til bilder…}}.

**Rulling på styreflaten zoomer i stedet for å flytte tegningen.**
Slik fungerer tegninger i BimCraft. Klikk og dra for å panorere.

## Fortsatt fast

Les [Hva som ikke er bygget ennå](topic:not-built-yet): det du leter etter finnes kanskje ikke i denne versjonen.
