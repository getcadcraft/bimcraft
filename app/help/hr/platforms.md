---
title: Preglednici, uređaji i memorija
summary: Što se u BimCraftu razlikuje između Chromea, Edgea, Firefoxa i Safarija, na Macu, Windowsu i Linuxu, s mišem, touchpadom ili dodirom, te koliku datoteku može obraditi.
keywords: preglednik, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dodir, touchpad, memorija, velike datoteke, webgl, performanse
from: fd8acba1
---

BimCraft radi u aktualnim verzijama preglednika Chrome, Edge, Firefox i Safari, na Macu, Windowsu i Linuxu. Prikaz 3D zahtijeva WebGL, koji ima svaki aktualni preglednik. Pogledajte [Preglednici i računala](common:browsers) za ono što aplikacije općenito trebaju.

## Otvaranje mape

| Preglednik | {{ui:Otvori mapu}} radi ovo | Povlačenje mape | {{ui:Nedavne mape}} |
|---|---|---|---|
| Chrome, Edge | Birač mapa preglednika, zatim „Dopustiti web-mjestu prikaz datoteka?“: kliknite **Prikaži datoteke** | Otvara se bez upita | Da, za mape odabrane ili povučene |
| Firefox | Birač mapa sustava | Otvara se bez upita | Ne |
| Safari | Birač mapa sustava, s gumbom **Učitaj** (ništa se ne učitava) | Otvara se bez upita | Ne |

Iza kulisa: Chrome i Edge koriste birač File System Access i mogu zapamtiti mapu. Firefox i Safari koriste stariji birač mapa, koji odjednom predaje svaku datoteku u mapi i ne može se zapamtiti. Povučena mapa čita se stavku po stavku u svakom pregledniku.

:::chromium
Brave i neki drugi preglednici temeljeni na Chromiumu isključuju birač mapa. BimCraft tada umjesto njega koristi birač mapa sustava, a preglednik može pitati „Učitati *n* datoteka na ovo web-mjesto?“. Ništa se ne učitava; datoteke idu samo u karticu. Povlačenje mape u prozor izbjegava to pitanje.
:::

## Mac, Windows i Linux

- Prečaci napisani kao {{key:Mod+S}} i {{key:Mod+Z}} koriste Command na Macu, a Ctrl na Windowsu i Linuxu.
- {{key:Ctrl+Shift+F}} (načini prikaza zaslona) je Control na svim platformama, uključujući Mac.
- Dijalozi za datoteke i mapa preuzimanja pripadaju vašem sustavu.

## Miš, touchpad i dodir

| Ulaz | 3D prikaz | 2D crtež |
|---|---|---|
| Miš | Lijevo povlačenje okreće, desno povlačenje pomiče, kotačić zumira, klik odabire | Svako povlačenje pomiče, kotačić zumira, dvostruki klik prilagođava |
| Touchpad | Klik-povlačenje okreće; {{key:Shift}} ili {{key:Mod}} i povlačenje pomiču; pomicanje dvama prstima ili stiskanje zumira | Klik-povlačenje pomiče; pomicanje dvama prstima ili stiskanje zumira |
| Dodir | Jedan prst okreće, dva prsta stišću i pomiču, dodir odabire | Jedan prst pomiče; još nema zumiranja stiskanjem; dodirnite {{ui:Prilagodi}} |

Na Mac touchpadu desni klik je klik dvama prstima (ili Control-klik). Pogledajte [Tipke, miševi i touchpadovi](common:keys).

Tableti i telefoni mogu otvoriti pojedinačne datoteke i pregledati ih, ali zaslon je mali, mnogi mobilni preglednici ne mogu birati mape, a veliki modeli možda ne stanu u njihovu memoriju. Najbolje radi računalo.

## Velike datoteke i memorija

Sve što BimCraft učita nalazi se u memoriji kartice preglednika. Koliko kartica može koristiti ovisi o pregledniku i vašem računalu, više nego o BimCraftu.

| Datoteka | Što se učitava | Što očekivati |
|---|---|---|
| IFC | Cijela datoteka, plus 3D geometrija izgrađena iz nje | Ovisi o računalu i pregledniku; model od nekoliko stotina megabajta može biti previše za prijenosno računalo. Preko 1.5 milijuna trokuta rubovi se isključuju |
| Projektne i obiteljske datoteke | Oko 40 KB do 100 KB, bez obzira na veličinu | Čak i vrlo veliki središnji modeli otvaraju se odmah, i s mrežnog diska |
| DWG i DXF | Cijela datoteka | Vrlo veliki crteži prikazuju „Ovaj crtež je vrlo velik; prikazan je samo dio.“ |
| Mape | Popis datoteka, plus nekoliko kilobajta po modelu | Do 20.000 datoteka |

Ako kartici ponestane memorije, preglednik prikazuje vlastitu stranicu pogreške („Aw, Snap!“ u Chromeu, na primjer). Zatvorite druge kartice, ponovno učitajte BimCraft i pokušajte ponovno, ili upotrijebite računalo s više memorije.

## Srodno

- [Online i offline](topic:online-offline)
- [Rješavanje problema](topic:troubleshooting)
