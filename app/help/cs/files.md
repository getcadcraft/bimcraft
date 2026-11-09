---
title: Soubory, které BimCraft otevírá a ukládá
summary: Každý formát, který BimCraft otevře, co z něj zachová, co uloží, kam se uložené soubory dostanou a co se mění mezi prohlížeči a při práci offline.
keywords: formáty, otevřít, uložit, export, stáhnout, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, nahrát, soukromí, velikost souboru
from: a7275dbf
---

BimCraft čte soubory na vašem počítači, v kartě prohlížeče. **Nic se nenahrává** do CadCraft ani nikam jinam. Při uložení BimCraft předá prohlížeči nový soubor ke stažení; nikdy nepřepíše soubor, který jste otevřeli.

## Co otevře

| Formát | Přípony | Co získáte |
|---|---|---|
| IFC | `.ifc` | Model ve 3D, podlaží, počty prvků a všechny vlastnosti každého prvku. Názvy, značky a jednotlivé hodnoty vlastností lze změnit. |
| Projektové a rodinné soubory | `.rvt` `.rfa` `.rte` `.rft` | Přehledová karta souboru: verze, sestavení, sdílená práce, informace o projektu, parametry rodiny, propojené soubory a náhledový obrázek. Bez 3D. |
| DWG | `.dwg` | Výkres ve 2D: prostor modelu, každý list, vrstvy, propojené výkresy, obrázky a pohled pro tisk. Prostor modelu i ve 3D. Ověřeny jsou formáty z AutoCADu 2000 až 2018. |
| DXF | `.dxf` | Stejné jako DWG. |
| STEP | `.step` `.stp` | Díl, kus zařízení nebo model dodavatele (AP203, AP214, AP242) ve 3D: každé těleso se stane jedním prvkem (zástupným prvkem budovy) malého modelu IFC na jednom podlaží, načte se jako trojúhelníky ve skutečné velikosti a sestava se všemi díly tam, kam je soubor umisťuje. Dál se s ním pracuje jako s jakýmkoli IFC: vlastnosti, řezy, měření, uložit jako IFC. Barvy a strom sestavy se nenačítají. |
| Mračna bodů | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken ve 3D pohledu, vedle modelu nebo samostatně: viz [Zobrazení mračna bodů vedle modelu](topic:point-clouds). |
| Projektový balík | `.ccbundle.zip` | Model s jeho pohledy, rozvrženími a skupinami vlastností: viz [Otevření projektového balíku](topic:open-project-bundle). |
| Složka | libovolné | Přehled všech modelů, výkresů a projektových balíků v ní. Každé IFC, model, výkres nebo balík v přehledu se otevře kliknutím. |

[Co BimCraft čte z jednotlivých formátů](topic:file-formats) se popisuje podrobně.

BimCraft pozná, co soubor je, podle jeho prvních bajtů i podle názvu, takže projektový soubor s neobvyklou příponou se přesto otevře jako přehledová karta.

### Neotevře se

- `.ifczip` a `.ifcxml`: BimCraft hlásí: ".ifczip zatím není podporován. Model uložte nebo exportujte jako prostý soubor .ifc." Rozbalte `.ifczip` (obsahuje prostý `.ifc`) nebo exportujte znovu jako prostý IFC.
- Výkresy DGN jsou uvedeny v přehledu složky, ale neotevřou se.
- PDF, obrázky a kancelářské soubory se samy neotevřou. Obrázky se použijí jako obrázky uvnitř DWG a {{ui:Sestavení}} › {{ui:Z výkresu…}} převede stránky PDF nebo skenu na stěny: viz [Stěny ze sady plánů](topic:walls-from-plans).

## Co ukládá

| Kliknete | Získáte | Kde |
|---|---|---|
| {{ui:Uložit jako IFC}} | Nový soubor IFC s vašimi úpravami, pojmenovaný "*původní název* (edited).ifc" | Složka pro stahování vašeho prohlížeče |
| {{ui:Stáhnout CSV}} v tabulce zařízení | CSV s položkami v seznamu, pojmenovaný "*název výkresu* equipment.csv" | Složka pro stahování vašeho prohlížeče |

Ostatní věci se ukládají tam, kde vzniknou, každá v samostatném tématu: {{ui:USD}} ([Export modelu do USD](topic:usd)), {{ui:Collada}} ([Export modelu do Collada nebo pro Google Earth](topic:collada): soubory .dae a Google Earth .kmz), .glb u {{ui:Pro vykreslování}}, vykreslené obrázky, výkresy a plány jako PDF, tabulky a seznamy jako CSV, problémy ve formátu BCF, tabulka COBie, soubory rodin a zaregistrované skeny jako LAS nebo E57. BimCraft neukládá DWG, DXF ani projektové soubory a nikdy nemění soubory, které jste otevřeli.

:::chromium
Chrome a Edge ukládají stahované soubory do složky nastavené v jejich nastavení, obvykle do složky Stažené soubory. Chcete-li být pokaždé dotázáni, kam uložit soubor, zapněte v nastavení stahování prohlížeče možnost "Zeptat se, kam uložit každý soubor, před stažením".
:::

:::firefox
Firefox ukládá do složky Stažené soubory, pokud v jeho nastavení nezvolíte "Vždy se zeptat, kam ukládat soubory".
:::

:::safari
Safari ukládá do složky Stažené soubory, pokud v části **Safari > Nastavení > Obecné > Umístění stahovaných souborů** nezvolíte jinou složku.
:::

## Uložení podruhé

Každé uložení stáhne celý model se **všemi úpravami od chvíle, kdy jste jej otevřeli**, ne jen úpravy od posledního uložení. Seznam {{ui:Změny}} se po každém uložení znovu vyprázdní, takže se nelze vrátit před uložení zpět. Chcete-li začít znovu od originálu, otevřete původní soubor znovu.

## Velké soubory a paměť

- **IFC** soubory se celé načtou do paměti karty a geometrie 3D zabere další paměť. Model o několika stovkách megabajtů může být na notebooku příliš. Nad 1,5 milionu trojúhelníků se hrany vypnou, aby se ušetřila paměť ("Hrany jsou u velmi velkých modelů vypnuty").
- **Projektové soubory** se nenačítají celé. BimCraft načte jen malé části, které potřebuje, zhruba 40 KB až 100 KB bez ohledu na velikost souboru, takže centrální model o 500 MB na síťovém disku se otevře okamžitě.
- **DWG a DXF** soubory se načtou celé. Velmi velký výkres zobrazí hlášku "Tento výkres je velmi velký; zobrazena je jen jeho část."
- **Složky** s až 20 000 soubory se otevřou. Načtou se jen několik kilobajtů, které každá přehledová karta modelu potřebuje.

Více informací najdete v [Prohlížeče, zařízení a paměť](topic:platforms).

## Online a offline

Otevírání souborů nikdy nevyžaduje internet. Jeden čtecí modul se načte z webu, až ho poprvé potřebujete: IFC engine, při prvním otevření modelu IFC ("Spouštění IFC enginu…"). Čtečky DWG a DXF jsou součástí aplikace.

:::offline
Jste offline. Pokud tlačítko v liště aplikace hlásí {{ui:Připraveno offline}}, každý formát se otevře jako obvykle. Pokud ne, model IFC nelze otevřít, pokud už nebyl otevřen v této kartě: nejprve se znovu připojte. Viz [Online a offline](topic:online-offline).
:::

Chcete-li používat BimCraft bez připojení, klikněte, když jste online, na {{ui:Uložit pro offline}} v liště aplikace a počkejte na {{ui:Připraveno offline}}. Uložená kopie má zhruba 33 MB; obsahuje IFC engine, takže se modely IFC otevřou i offline. [Práce offline](common:offline) vysvětluje uložené kopie obecně.

## Ukládání do cloudu

Ukládání do cloudu zatím není k dispozici. Upravené kopie ukládejte do svého počítače nebo na souborový server vaší kanceláře, jako kterýkoli jiný soubor. Viz [Vaše soubory](common:your-files).
