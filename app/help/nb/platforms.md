---
title: Nettlesere, enheter og minne
summary: Hva som skiller BimCraft mellom Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux, med mus, styreplate eller berøring, og hvor stor fil den kan ta.
keywords: nettleser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, nettbrett, telefon, berøring, styreplate, minne, store filer, webgl, ytelse
from: fd8acba1
---

BimCraft kjører i nyere versjoner av Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux. 3D-visningen krever WebGL, som alle nyere nettlesere har. Se [Nettlesere og datamaskiner](common:browsers) for hva appene krever generelt.

## Åpne en mappe

| Nettleser | {{ui:Open a folder}} gjør dette | Dra en mappe inn | {{ui:Recent folders}} |
|---|---|---|---|
| Chrome, Edge | Nettleserens mappevelger, deretter «Tillat at siden viser filer?»: klikk **Vis filer** | Åpnes uten spørsmål | Ja, for mapper som er valgt eller dratt inn |
| Firefox | Systemets mappevelger | Åpnes uten spørsmål | Nei |
| Safari | Systemets mappevelger, med en knapp **Last opp** (ingenting lastes opp) | Åpnes uten spørsmål | Nei |

Bak kulissene: Chrome og Edge bruker File System Access-velgeren og kan huske mappen. Firefox og Safari bruker den eldre mappevelgeren, som gir fra seg alle filene i mappen på én gang og ikke kan huskes. En dratt mappe leses oppføring for oppføring i alle nettlesere.

:::chromium
Brave og noen andre Chromium-nettlesere slår av mappevelgeren. BimCraft bruker da systemets mappevelger i stedet, og nettleseren kan spørre «Laste opp *n* filer til denne siden?». Ingenting lastes opp; filene går bare til fanen. Å dra mappen inn unngår spørsmålet.
:::

## Mac, Windows og Linux

- Snarveiene {{key:Mod+S}} og {{key:Mod+Z}} er Command på Mac og Ctrl på Windows og Linux.
- {{key:Ctrl+Shift+F}} (skjermmodus) er Control på alle plattformer, også på Mac.
- Fildialoger og nedlastingsmappen er systemets egne.

## Mus, styreplate og berøring

| Inndata | 3D-visning | 2D-tegning |
|---|---|---|
| Mus | Dra med venstre knapp roterer, høyre knapp panorerer, hjulet zoomer, klikk velger | Hvilket som helst dra panorerer, hjulet zoomer, dobbeltklikk tilpasser |
| Styreplate | Klikk-og-dra roterer; {{key:Shift}} eller {{key:Mod}} og dra panorerer; to-finger-rulling eller klype zoomer | Klikk-og-dra panorerer; to-finger-rulling eller klype zoomer |
| Berøring | Ett finger roterer, to fingre klyper og panorerer, trykk velger | Ett finger panorerer; ingen klype-zoom ennå; trykk {{ui:Fit}} |

På en Mac-styreplate er høyreklikk et to-finger-klikk (eller Control-klikk). Se [Taster, mus og styreplater](common:keys).

Nettbrett og telefoner kan åpne enkeltfiler og se på dem, men skjermen er liten, mange mobilnettlesere kan ikke velge mapper, og store modeller får kanskje ikke plass i minnet. En datamaskin fungerer best.

## Store filer og minne

Alt BimCraft leser, ligger i minnet til nettleserfanen. Hvor mye en fane kan bruke, avhenger mer av nettleseren og datamaskinen din enn av BimCraft.

| Fil | Hvor mye leses | Hva du kan forvente |
|---|---|---|
| IFC | Hele filen, pluss 3D-geometrien bygget fra den | Hvor stor den kan være, avhenger av datamaskinen og nettleseren; en modell på flere hundre megabyte kan være for mye for en bærbar. Over 1,5 millioner trekanter slås kanter av |
| Prosjekt- og familiefiler | Omtrent 40 KB til 100 KB, uansett størrelse | Selv svært store sentrale modeller åpnes på et øyeblikk, også fra en nettverksstasjon |
| DWG og DXF | Hele filen | Svært store tegninger viser «This drawing is very large; only part of it is shown.» |
| Mapper | Fillisten, pluss noen kilobyte per modell | Opptil 20 000 filer |

Hvis en fane går tom for minne, viser nettleseren sin egen feilside («Aw, Snap!» i Chrome, for eksempel). Lukk andre faner, last BimCraft på nytt og prøv igjen, eller bruk en datamaskin med mer minne.

## Relatert

- [Tilkoblet og frakoblet](topic:online-offline)
- [Feilsøking](topic:troubleshooting)
