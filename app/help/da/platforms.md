---
title: Browsere, enheder og hukommelse
summary: Hvad der adskiller BimCraft i Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux, med en mus, et trackpad eller touch, og hvor stor en fil den kan tage.
keywords: browser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, touch, trackpad, hukommelse, store filer, webgl, ydeevne
from: fd8acba1
---

BimCraft kører i aktuelle versioner af Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux. 3D-visningen kræver WebGL, som alle aktuelle browsere har. Se [Browsere og computere](common:browsers) for, hvad appene generelt kræver.

## Åbning af en mappe

| Browser | {{ui:Åbn en mappe}} gør dette | Træk en mappe ind | {{ui:Seneste mapper}} |
|---|---|---|---|
| Chrome, Edge | Browserens mappevælger, derefter "Lad siden se filer?": klik på **Vis filer** | Åbner uden spørgsmål | Ja, for mapper valgt eller trukket ind |
| Firefox | Systemets mappevælger | Åbner uden spørgsmål | Nej |
| Safari | Systemets mappevælger, med en knap **Upload** (intet uploades) | Åbner uden spørgsmål | Nej |

Bag kulisserne: Chrome og Edge bruger File System Access-vælgeren og kan huske mappen. Firefox og Safari bruger den ældre mappevælger, som giver hver fil i mappen på én gang og ikke kan huskes. En trukket mappe læses post for post i alle browsere.

:::chromium
Brave og nogle andre Chromium-browsere slår mappevælgeren fra. BimCraft bruger så systemets mappevælger i stedet, og browseren spørger måske "Upload *n* filer til denne side?". Intet uploades; filerne går kun til fanen. At trække mappen ind undgår spørgsmålet.
:::

## Mac, Windows og Linux

- Genveje skrevet {{key:Mod+S}} og {{key:Mod+Z}} er Command på en Mac og Ctrl på Windows og Linux.
- {{key:Ctrl+Shift+F}} (skærmtilstande) er Control på alle platforme, også på en Mac.
- Fildialoger og mappen til downloads er dit systems egne.

## Mus, trackpad og touch

| Input | 3D-visning | 2D-tegning |
|---|---|---|
| Mus | Venstretræk kredser, højretræk panorerer, hjulet zoomer, klik vælger | Ethvert træk panorerer, hjulet zoomer, dobbeltklik tilpasser |
| Trackpad | Klik og træk kredser; {{key:Shift}} eller {{key:Mod}} og træk panorerer; to-finger-scroll eller knib zoomer | Klik og træk panorerer; to-finger-scroll eller knib zoomer |
| Touch | Én finger kredser, to fingre knibes og panoreres, tryk vælger | Én finger panorerer; ingen knibezoom endnu; tryk på {{ui:Tilpas}} |

På et Mac-trackpad er højreklik et to-finger-klik (eller Control-klik). Se [Taster, mus og trackpads](common:keys).

Tablets og telefoner kan åbne enkeltfiler og kigge på dem, men skærmen er lille, mange mobilbrowsere kan ikke vælge mapper, og store modeller passer måske ikke i deres hukommelse. En computer virker bedst.

## Store filer og hukommelse

Alt, BimCraft læser, lever i browserfanens hukommelse. Hvor meget en fane kan bruge, afhænger mere af browseren og din computer end af BimCraft.

| Fil | Hvor meget læses | Hvad du kan forvente |
|---|---|---|
| IFC | Hele filen, plus 3D-geometrien bygget ud fra den | Hvor stor den kan være, afhænger af din computer og browser; en model på flere hundrede megabyte kan være for meget til en bærbar. Over 1.5 million trekanter slås kanter fra |
| Projekt- og familiefiler | Omkring 40 KB til 100 KB, uanset størrelse | Selv meget store centrale modeller åbner på et øjeblik, også fra et netværksdrev |
| DWG og DXF | Hele filen | Meget store tegninger viser "Denne tegning er meget stor; kun en del vises." |
| Mapper | Fillisten, plus nogle kilobyte pr. model | Op til 20,000 filer |

Hvis en fane løber tør for hukommelse, viser browseren sin egen fejlside ("Aw, Snap!" i Chrome, for eksempel). Luk andre faner, genindlæs BimCraft og prøv igen, eller brug en computer med mere hukommelse.

## Relateret

- [Online og offline](topic:online-offline)
- [Fejlfinding](topic:troubleshooting)
