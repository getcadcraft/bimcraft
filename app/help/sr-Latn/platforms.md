---
title: Pregledači, uređaji i memorija
summary: Šta se razlikuje u BimCraft-u između Chrome-a, Edge-a, Firefox-a i Safari-ja, na Mac-u, Windows-u i Linux-u, s mišem, touchpadom ili dodirom, i koliko veliku datoteku može da primi.
keywords: pregledač, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dodir, touchpad, memorija, velike datoteke, webgl, performanse
from: fd8acba1
---

BimCraft radi u aktuelnim verzijama Chrome-a, Edge-a, Firefox-a i Safari-ja, na Mac-u, Windows-u i Linux-u. 3D prikaz traži WebGL, koji ima svaki aktuelni pregledač. Pogledajte [Pregledači i računari](common:browsers) za to šta aplikacije uopšte traže.

## Otvaranje fascikle

| Pregledač | {{ui:Otvori fasciklu}} radi ovo | Prevlačenje fascikle | {{ui:Nedavne fascikle}} |
|---|---|---|---|
| Chrome, Edge | Birač fascikli pregledača, zatim „Dozvoliti sajtu da vidi datoteke?“: kliknite **Prikaži datoteke** | Otvara se bez pitanja | Da, za fascikle izabrane ili prevučene |
| Firefox | Birač fascikli sistema | Otvara se bez pitanja | Ne |
| Safari | Birač fascikli sistema, s dugmetom **Otpremi** (ništa se ne šalje) | Otvara se bez pitanja | Ne |

U pozadini: Chrome i Edge koriste birač fascikli File System Access i mogu da zapamte fasciklu. Firefox i Safari koriste stariji birač fascikli, koji predaje svaku datoteku u fascikli odjednom i ne može da je zapamti. Prevučena fascikla čita se stavku po stavku u svakom pregledaču.

:::chromium
Brave i neki drugi Chromium pregledači isključuju birač fascikli. BimCraft tada koristi birač fascikli sistema, a pregledač može da pita „Otpremiti *n* datoteka na ovaj sajt?“. Ništa se ne šalje; datoteke idu samo u karticu. Prevlačenje fascikle izbegava pitanje.
:::

## Mac, Windows i Linux

- Prečice napisane {{key:Mod+S}} i {{key:Mod+Z}} su Command na Mac-u, a Ctrl na Windows-u i Linux-u.
- {{key:Ctrl+Shift+F}} (režimi ekrana) je Control na svim platformama, uključujući Mac.
- Dijalozi za datoteke i fascikla za preuzimanja su vašeg sistema.

## Miš, touchpad i dodir

| Ulaz | 3D prikaz | 2D crtanje |
|---|---|---|
| Miš | Prevlačenje levim tasterom kruži, prevlačenje desnim pomera, točkić zumira, klik bira | Svako prevlačenje pomera, točkić zumira, dvoklik uklapa |
| Touchpad | Klik i prevlačenje kruže; {{key:Shift}} ili {{key:Mod}} i prevlačenje pomeraju; dvoprstno skrolovanje ili štipanje zumira | Klik i prevlačenje pomeraju; dvoprstno skrolovanje ili štipanje zumira |
| Dodir | Jedan prst kruži, dva prsta štipaju i pomeraju, dodir bira | Jedan prst pomera; još nema zumiranja štipanjem; dodirnite {{ui:Uklopi}} |

Na Mac touchpadu desni klik je dvoprstni klik (ili Control-klik). Pogledajte [Tasteri, miševi i touchpadovi](common:keys).

Tableti i telefoni mogu da otvore pojedinačne datoteke i da ih pregledaju, ali je ekran mali, mnogi mobilni pregledači ne mogu da biraju fascikle, a veliki modeli možda ne staju u njihovu memoriju. Računar najbolje radi.

## Velike datoteke i memorija

Sve što BimCraft čita živi u memoriji kartice pregledača. Koliko kartica može da koristi zavisi od pregledača i vašeg računara, više nego od BimCraft-a.

| Datoteka | Koliko se čita | Šta očekivati |
|---|---|---|
| IFC | Cela datoteka, plus 3D geometrija napravljena iz nje | Koliko zavisi od računara i pregledača; model od nekoliko stotina megabajta može biti previše za laptop. Preko 1.5 miliona trouglova, ivice se isključuju |
| Datoteke projekta i porodica | Oko 40 KB do 100 KB, bez obzira na veličinu | Čak i vrlo veliki centralni modeli se otvore za trenutak, i sa mrežnog diska |
| DWG i DXF | Cela datoteka | Vrlo veliki crteži prikazuju „Ovaj crtež je veoma velik; prikazan je samo deo.“ |
| Fascikle | Spisak datoteka, plus nekoliko kilobajta po modelu | Do 20,000 datoteka |

Ako kartici ponestane memorije, pregledač prikazuje sopstvenu stranicu greške („Aw, Snap!“ u Chrome-u, na primer). Zatvorite druge kartice, ponovo učitajte BimCraft i pokušajte ponovo, ili koristite računar s više memorije.

## Povezano

- [Na mreži i van mreže](topic:online-offline)
- [Rešavanje problema](topic:troubleshooting)
