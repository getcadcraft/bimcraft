---
title: Pregledači, uređaji i memorija
summary: Šta se razlikuje u programu BimCraft između Chrome, Edge, Firefox i Safari, na Mac, Windows i Linux, s mišem, trackpadom ili dodirom, i koliko veliku datoteku može da primi.
keywords: pregledač, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dodir, trackpad, memorija, velike datoteke, webgl, performanse
from: fd8acba1
---

BimCraft radi u aktuelnim verzijama Chrome, Edge, Firefox i Safari, na Mac, Windows i Linux. 3D prikaz zahtijeva WebGL, koji ima svaki aktuelni pregledač. Pogledajte [Pregledači i računari](common:browsers) za ono što aplikacije općenito zahtijevaju.

## Otvaranje mape

| Pregledač | {{ui:Otvori folder}} radi ovo | Prevlačenje mape | {{ui:Nedavni folderi}} |
|---|---|---|---|
| Chrome, Edge | Birač mapa pregledača, zatim „Dozvoliti sajtu da pregleda datoteke?“: kliknite **Pregledaj datoteke** | Otvara se bez upita | Da, za mape izabrane ili prevučene |
| Firefox | Birač mapa sistema | Otvara se bez upita | Ne |
| Safari | Birač mapa sistema, s dugmetom **Otpremi** (ništa se ne šalje) | Otvara se bez upita | Ne |

Iza scene: Chrome i Edge koriste birač File System Access i mogu zapamtiti mapu. Firefox i Safari koriste stariji birač mapa, koji predaje svaku datoteku iz mape odjednom i ne može se zapamtiti. Prevučena mapa čita se stavku po stavku u svakom pregledaču.

:::chromium
Brave i neki drugi Chromium pregledači isključuju birač mapa. BimCraft tada koristi birač mapa sistema, a pregledač može pitati „Otpremiti *n* datoteka na ovaj sajt?“. Ništa se ne šalje; datoteke idu samo na karticu. Prevlačenje mape izbjegava pitanje.
:::

## Mac, Windows i Linux

- Prečice pisane {{key:Mod+S}} i {{key:Mod+Z}} su Command na Mac i Ctrl na Windows i Linux.
- {{key:Ctrl+Shift+F}} (režimi ekrana) je Control na svakoj platformi, uključujući Mac.
- Dijalozi datoteka i mapa za preuzimanje su vašeg sistema.

## Miš, trackpad i dodir

| Ulaz | 3D prikaz | 2D crtanje |
|---|---|---|
| Miš | Prevlačenje lijevim dugmetom kruži, desnim pomjera, točkić zumira, klik bira | Svako prevlačenje pomjera, točkić zumira, dvoklik uklapa |
| Trackpad | Klik-prevlačenje kruži; {{key:Shift}} ili {{key:Mod}} i prevlačenje pomjera; skrolovanje dvama prstima ili štipanje zumira | Klik-prevlačenje pomjera; skrolovanje dvama prstima ili štipanje zumira |
| Dodir | Jedan prst kruži, dva prsta štipaju i pomjeraju, dodir bira | Jedan prst pomjera; još nema zumiranja štipanjem; dodirnite {{ui:Uklopi}} |

Na Mac trackpadu, desni klik je klik dvama prstima (ili Control-klik). Pogledajte [Tastature, miševi i trackpadovi](common:keys).

Tableti i telefoni mogu otvarati pojedinačne datoteke i gledati ih, ali je ekran mali, mnogi mobilni pregledači ne mogu birati mape, a veliki modeli možda ne staju u njihovu memoriju. Računar najbolje radi.

## Velike datoteke i memorija

Sve što BimCraft čita živi u memoriji kartice pregledača. Koliko kartica može koristiti zavisi od pregledača i računara, više nego od samog BimCraft-a.

| Datoteka | Koliko se čita | Šta očekivati |
|---|---|---|
| IFC | Cijela datoteka, plus 3D geometrija napravljena iz nje | Zavisi od računara i pregledača; model od nekoliko stotina megabajta može biti previše za laptop. Preko 1.5 miliona trouglova, ivice se isključuju |
| Datoteke projekta i familija | Oko 40 KB do 100 KB, bez obzira na veličinu | Čak i vrlo veliki centralni modeli otvaraju se za tren, i s mrežnog diska |
| DWG i DXF | Cijela datoteka | Vrlo veliki crteži prikazuju „Ovaj crtež je vrlo velik; prikazan je samo dio.“ |
| Mape | Spisak datoteka, plus nekoliko kilobajta po modelu | Do 20.000 datoteka |

Ako kartica ostane bez memorije, pregledač prikazuje svoju grešku („Aw, Snap!“ u Chrome, na primjer). Zatvorite druge kartice, ponovo učitajte BimCraft i pokušajte ponovo, ili koristite računar s više memorije.

## Povezano

- [Na mreži i van mreže](topic:online-offline)
- [Rješavanje problema](topic:troubleshooting)
