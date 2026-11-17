---
title: Prohlížeče, zařízení a paměť
summary: Co se v BimCraftu liší mezi Chrome, Edge, Firefoxem a Safari, na Macu, Windows a Linuxu, s myší, trackpadem nebo dotykem, a jak velký soubor zvládne.
keywords: prohlížeč, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dotyk, trackpad, paměť, velké soubory, webgl, výkon
from: fd8acba1
---

BimCraft běží v aktuálních verzích Chrome, Edge, Firefoxu a Safari, na Macu, Windows a Linuxu. Pohled 3D potřebuje WebGL, který má každý aktuální prohlížeč. Obecně, co aplikace potřebují, viz [Prohlížeče a počítače](common:browsers).

## Otevření složky

| Prohlížeč | {{ui:Otevřít složku}} udělá toto | Přetažení složky | {{ui:Nedávné složky}} |
|---|---|---|---|
| Chrome, Edge | Výběr složky prohlížeče, pak „Povolit webu zobrazit soubory?“: klikněte na **Zobrazit soubory** | Otevře se bez dotazu | Ano, pro složky vybrané nebo přetažené |
| Firefox | Systémový výběr složky | Otevře se bez dotazu | Ne |
| Safari | Systémový výběr složky, s tlačítkem **Nahrát** (nic se nenahrává) | Otevře se bez dotazu | Ne |

Na pozadí: Chrome a Edge používají výběr File System Access a mohou složku zapamatovat. Firefox a Safari používají starší výběr složky, který předá všechny soubory složky najednou a nelze si ho zapamatovat. Přetažená složka se v každém prohlížeči čte položku po položce.

:::chromium
Brave a některé další prohlížeče na Chromiu vypínají výběr složky. BimCraft pak použije systémový výběr složky a prohlížeč se může zeptat „Nahrát *n* souborů na tento web?“. Nic se nenahrává; soubory jdou jen do této karty. Přetažením složky se dotaz vyhne.
:::

## Mac, Windows a Linux

- Zkratky {{key:Mod+S}} a {{key:Mod+Z}} jsou Command na Macu a Ctrl na Windows a Linuxu.
- {{key:Ctrl+Shift+F}} (režimy zobrazení) je Control na každé platformě, včetně Macu.
- Dialogy souborů a složka stažených souborů jsou vaše systémové.

## Myš, trackpad a dotyk

| Vstup | Pohled 3D | Kreslení ve 2D |
|---|---|---|
| Myš | Tažení levým tlačítkem otáčí, tažení pravým posouvá, kolečko přibližuje, klik vybírá | Libovolné tažení posouvá, kolečko přibližuje, dvojklik přizpůsobí |
| Trackpad | Tažení klikem otáčí; {{key:Shift}} nebo {{key:Mod}} a tažení posouvá; dvouprstové posouvání nebo rozevření přibližuje | Tažení klikem posouvá; dvouprstové posouvání nebo rozevření přibližuje |
| Dotyk | Jeden prst otáčí, dva prsty přibližují a posouvají, klepnutí vybírá | Jeden prst posouvá; zatím bez přiblížení rozevřením; klepněte na {{ui:Přizpůsobit}} |

Na trackpadu Macu je pravé tlačítko dvouprstové klepnutí (nebo Control-klik). Viz [Klávesy, myši a trackpady](common:keys).

Tablety a telefony umějí otevřít jednotlivé soubory a prohlédnout si je, ale obrazovka je malá, mnoho mobilních prohlížečů neumí vybrat složky a velké modely se nemusí do jejich paměti vejít. Nejlépe funguje počítač.

## Velké soubory a paměť

Vše, co BimCraft načte, žije v paměti karty prohlížeče. Kolik paměti karta může použít, závisí spíše na prohlížeči a vašem počítači než na BimCraftu.

| Soubor | Kolik se načte | Co čekat |
|---|---|---|
| IFC | Celý soubor, plus 3D geometrie z něj vytvořená | Záleží na počítači a prohlížeči; model o několika stovkách megabajtů může být na notebooku příliš. Nad 1.5 milionu trojúhelníků se hrany vypnou |
| Projektové a rodinné soubory | Asi 40 KB až 100 KB, ať jsou jakkoli velké | I velmi velké centrální modely se otevřou okamžitě, i ze síťového disku |
| DWG a DXF | Celý soubor | Velmi velké výkresy zobrazí „Tento výkres je velmi velký; zobrazena je jen jeho část.“ |
| Složky | Seznam souborů, plus několik kilobajtů na model | Až 20,000 souborů |

Když karte dojde paměť, prohlížeč zobrazí vlastní chybovou stránku (například „Aw, Snap!“ v Chrome). Zavřete jiné karty, načtěte BimCraft znovu a zkuste to znovu, nebo použijte počítač s větší pamětí.

## Související

- [Online a offline](topic:online-offline)
- [Řešení potíží](topic:troubleshooting)
