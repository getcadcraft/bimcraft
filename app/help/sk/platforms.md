---
title: Prehliadače, zariadenia a pamäť
summary: Čo sa v BimCraft líši medzi Chrome, Edge, Firefox a Safari, na Macu, Windows a Linuxe, s myšou, touchpadom alebo dotykom, a aký veľký súbor dokáže spracovať.
keywords: prehliadač, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefón, dotyk, touchpad, pamäť, veľké súbory, webgl, výkon
from: fd8acba1
---

BimCraft beží v aktuálnych verziách Chrome, Edge, Firefox a Safari, na Macu, Windows a Linuxe. 3D pohľad potrebuje WebGL, ktorý má každý aktuálny prehliadač. Pozrite [Prehliadače a počítače](common:browsers), čo aplikácie všeobecne potrebujú.

## Otváranie priečinka

| Prehliadač | {{ui:Otvoriť priečinok}} robí toto | Potiahnutie priečinka dovnútra | {{ui:Nedávne priečinky}} |
|---|---|---|---|
| Chrome, Edge | Výber priečinka prehliadača, potom "Povoliť stránke zobraziť súbory?": kliknite na **Zobraziť súbory** | Otvorí sa bez výzvy | Áno, pre priečinky vybrané alebo potiahnuté |
| Firefox | Výber priečinka systému | Otvorí sa bez výzvy | Nie |
| Safari | Výber priečinka systému, s tlačidlom **Nahrať** (nič sa nenahráva) | Otvorí sa bez výzvy | Nie |

Za scénou: Chrome a Edge používajú výber File System Access a môžu si priečinok zapamätať. Firefox a Safari používajú starší výber priečinka, ktorý odovzdá všetky súbory priečinka naraz a nedá sa zapamätať. Potiahnutý priečinok sa v každom prehliadači číta položka po položke.

:::chromium
Brave a niektoré ďalšie prehliadače na Chromium vypnú výber priečinka. BimCraft potom použije výber priečinka systému a prehliadač môže pýtať "Nahrať *n* súborov na túto stránku?". Nič sa nenahráva; súbory idú iba do karty. Potiahnutie priečinka výzvu obíde.
:::

## Mac, Windows a Linux

- Skratky zapísané {{key:Mod+S}} a {{key:Mod+Z}} sú Command na Macu a Ctrl na Windows a Linuxe.
- {{key:Ctrl+Shift+F}} (režimy obrazovky) je Control na každej platforme vrátane Macu.
- Dialógy súborov a priečinok stiahnutých súborov patria vášmu systému.

## Myš, touchpad a dotyk

| Vstup | 3D pohľad | 2D kreslenie |
|---|---|---|
| Myš | Ľavé potiahnutie obieha, pravé potiahnutie posúva, koliesko približuje, klik vyberá | Ľubovoľné potiahnutie posúva, koliesko približuje, dvojklik prispôsobí |
| Touchpad | Potiahnutie kliknutím obieha; {{key:Shift}} alebo {{key:Mod}} a potiahnutie posúva; dvojprstový posun alebo štipnutie približuje | Potiahnutie kliknutím posúva; dvojprstový posun alebo štipnutie približuje |
| Dotyk | Jeden prst obieha, dva prsty štipnutím a posúvaním, klepnutie vyberá | Jeden prst posúva; zatiaľ bez približovania štipnutím; klepnite na {{ui:Prispôsobiť}} |

Na touchpade Macu je kliknutie pravým tlačidlom dvojprstové kliknutie (alebo Control-klik). Pozrite [Klávesy, myši a touchpady](common:keys).

Tablety a telefóny môžu otvárať jednotlivé súbory a pozerať si ich, ale obrazovka je malá, mnohé mobilné prehliadače nedokážu vybrať priečinky a veľké modely sa nemusia zmestiť do ich pamäte. Najlepšie funguje počítač.

## Veľké súbory a pamäť

Všetko, čo BimCraft číta, žije v pamäti karty prehliadača. Koľko môže karta použiť, závisí od prehliadača a počítača viac než od BimCraft.

| Súbor | Koľko sa načíta | Čo očakávať |
|---|---|---|
| IFC | Celý súbor a 3D geometria z neho vytvorená | Závisí od počítača a prehliadača; model s niekoľkými stovkami megabajtov môže byť pre notebook príliš veľký. Nad 1.5 milióna trojuholníkov sa hrany vypnú |
| Súbory projektu a rodín | Asi 40 KB až 100 KB, bez ohľadu na veľkosť | Aj veľmi veľké centrálne modely sa otvoria hneď, aj zo sieťovej jednotky |
| DWG a DXF | Celý súbor | Veľmi veľké výkresy zobrazia "Tento výkres je veľmi veľký; zobrazuje sa iba jeho časť." |
| Priečinky | Zoznam súborov, plus niekoľko kilobajtov na model | Až 20 000 súborov |

Ak karte dôjde pamäť, prehliadač zobrazí vlastnú chybovú stránku (napríklad "Aw, Snap!" v Chrome). Zatvorte iné karty, znova načítajte BimCraft a skúste to znova, alebo použite počítač s väčšou pamäťou.

## Súvisiace

- [Online a offline](topic:online-offline)
- [Riešenie problémov](topic:troubleshooting)
