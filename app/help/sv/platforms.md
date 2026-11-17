---
title: Webbläsare, enheter och minne
summary: Vad som skiljer sig i BimCraft mellan Chrome, Edge, Firefox och Safari, på Mac, Windows och Linux, med mus, pekplatta eller touch, och hur stor fil det kan ta.
keywords: webbläsare, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, surfplatta, telefon, touch, pekplatta, minne, stora filer, webgl, prestanda
from: fd8acba1
---

BimCraft körs i aktuella versioner av Chrome, Edge, Firefox och Safari, på Mac, Windows och Linux. 3D-vyn behöver WebGL, som alla aktuella webbläsare har. Se [Webbläsare och datorer](common:browsers) för vad apparna behöver i allmänhet.

## Öppna en mapp

| Webbläsare | {{ui:Öppna en mapp}} gör detta | Att dra in en mapp | {{ui:Senaste mappar}} |
|---|---|---|---|
| Chrome, Edge | Webbläsarens mappväljare, sedan ”Tillåt webbplatsen att visa filer?”: klicka på **Visa filer** | Öppnas utan fråga | Ja, för mappar som valts eller dragits in |
| Firefox | Systemets mappväljare | Öppnas utan fråga | Nej |
| Safari | Systemets mappväljare, med en knapp **Upload** (inget laddas upp) | Öppnas utan fråga | Nej |

Bakom kulisserna: Chrome och Edge använder File System Access-väljaren och kan komma ihåg mappen. Firefox och Safari använder den äldre mappväljaren, som lämnar över varje fil i mappen på en gång och inte kan komma ihåg den. En indragen mapp läses post för post i varje webbläsare.

:::chromium
Brave och vissa andra Chromium-webbläsare stänger av mappväljaren. BimCraft använder då systemets mappväljare i stället, och webbläsaren kan fråga ”Ladda upp *n* filer till den här webbplatsen?”. Inget laddas upp; filerna går bara till fliken. Att dra in mappen undviker frågan.
:::

## Mac, Windows och Linux

- Genvägarna {{key:Mod+S}} och {{key:Mod+Z}} är Command på en Mac och Ctrl på Windows och Linux.
- {{key:Ctrl+Shift+F}} (skärmlägen) är Control på alla plattformar, även på en Mac.
- Fildialogrutor och hämtningsmappen är ditt systems egna.

## Mus, pekplatta och touch

| Indata | 3D-vyn | 2D-ritning |
|---|---|---|
| Mus | Vänsterdra kretsar kring, högerdra panorerar, hjulet zoomar, klick väljer | Varje dragning panorerar, hjulet zoomar, dubbelklick anpassar |
| Pekplatta | Klickdra kretsar kring; {{key:Shift}} eller {{key:Mod}} och dra panorerar; tvåfingersrullning eller nypning zoomar | Klickdra panorerar; tvåfingersrullning eller nypning zoomar |
| Touch | Ett finger kretsar kring, två fingrar nyper och panorerar, tryck väljer | Ett finger panorerar; ingen nypzoom ännu; tryck på {{ui:Anpassa}} |

På en Mac-pekplatta är högerklick ett tvåfingerklick (eller Control-klick). Se [Tangenter, möss och pekplattor](common:keys).

Surfplattor och telefoner kan öppna enstaka filer och titta på dem, men skärmen är liten, många mobila webbläsare kan inte välja mappar, och stora modeller kanske inte ryms i deras minne. En dator fungerar bäst.

## Stora filer och minne

Allt BimCraft läser finns i webbläsarfliken minne. Hur mycket en flik kan använda beror mer på webbläsaren och din dator än på BimCraft.

| Fil | Hur mycket som läses | Vad du kan förvänta dig |
|---|---|---|
| IFC | Hela filen, plus 3D-geometrin som byggs av den | Hur stort det kan bli beror på din dator och webbläsare; en modell på flera hundra megabyte kan vara för mycket för en bärbar dator. Över 1.5 miljoner trianglar stängs kanterna av |
| Projekt- och familjfiler | Cirka 40 KB till 100 KB, oavsett storlek | Även mycket stora centrala modeller öppnas på ett ögonblick, även från en nätverksenhet |
| DWG och DXF | Hela filen | Mycket stora ritningar visar ”Den här ritningen är mycket stor; endast en del visas.” |
| Mappar | Fillistan, plus några kilobyte per modell | Upp till 20,000 filer |

Om en flik får slut på minne visar webbläsaren sin egen felsida (”Aw, Snap!” i Chrome, till exempel). Stäng andra flikar, ladda om BimCraft och försök igen, eller använd en dator med mer minne.

## Relaterat

- [Online och offline](topic:online-offline)
- [Felsökning](topic:troubleshooting)
