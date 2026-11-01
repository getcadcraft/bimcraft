---
title: Soubory, které BimCraft otevírá a ukládá
summary: Každý formát, který BimCraft otevírá, co si z něj ponechá, co ukládá, kam se uložené soubory dostanou a co se mění mezi prohlížeči a při práci offline.
keywords: formáty, otevřít, uložit, export, stáhnout, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, nahrát, soukromí, velikost souboru
from: a1f0161b
---

BimCraft čte soubory na Vašem počítači, v kartě prohlížeče. **Nic se nenahrává** do CadCraftu ani nikam jinam. Když ukládáte, BimCraft předá prohlížeči nový soubor ke stažení; nikdy nepřepíše soubor, který jste otevřeli.

## Co otevírá

| Formát | Přípony | Co získáte |
|---|---|---|
| IFC | `.ifc` | Model ve 3D, podlaží, počty prvků a vlastnosti každého prvku. Názvy, značky a jednotlivé hodnoty vlastností lze měnit. |
| Soubory projektů a rodin | `.rvt` `.rfa` `.rte` `.rft` | Kartu souboru: verzi, sestavení, sdílenou práci, informace o projektu, parametry rodiny, propojené soubory a náhledový obrázek. Žádné 3D. |
| DWG | `.dwg` | Výkres ve 2D: prostor modelu, každý list, vrstvy, propojené výkresy, obrázky a pohled na tisk. Prostor modelu i ve 3D. Ověřeny jsou formáty od AutoCADu 2000 po 2018. |
| DXF | `.dxf` | Totéž jako DWG. |
| STEP | `.step` `.stp` | Díl, zařízení nebo model dodavatele (AP203, AP214, AP242) ve 3D: každé těleso se stane jedním prvkem (zástupným prvkem budovy) malého modelu IFC na jednom podlaží, přečteným jako trojúhelníky ve skutečné velikosti, sestava se všemi díly tam, kde je soubor umístí. Odtud se chová jako jakýkoli IFC: vlastnosti, řezy, měření, uložení jako IFC. Barvy a strom sestavy se nečtou. |
| Mračna bodů | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken ve 3D pohledu, vedle modelu nebo samostatně: viz [Zobrazení mračna bodů vedle modelu](topic:point-clouds). |
| Projektový svazek | `.ccbundle.zip` | Model s jeho pohledy, rozvrženími a skupinami vlastností: viz [Otevření projektového svazku](topic:open-project-bundle). |
| Složka | libovolná | Přehled všech modelů, výkresů a projektových svazků v ní. Libovolný IFC, model, výkres nebo svazek z přehledu se otevře kliknutím. |

Podrobnosti uvádí téma [Co BimCraft čte z jednotlivých formátů](topic:file-formats).

BimCraft druh souboru určuje podle prvních bajtů i podle názvu, takže soubor projektu s neobvyklou příponou se přesto otevře jako karta souboru.

### Neotevírá

- `.ifczip` a `.ifcxml`: BimCraft zobrazí „.ifczip zatím není podporován. Uložte nebo exportujte model jako obyčejný soubor .ifc.“ Rozbalte `.ifczip` (obsahuje obyčejný `.ifc`) nebo exportujte znovu jako obyčejný IFC.
- Výkresy DGN se uvedou v přehledu složky, ale neotevřou se.
- PDF, obrázky a kancelářské soubory se samostatně neotevírají. Obrázky se používají jako podklady uvnitř DWG a {{ui:Stavba}} › {{ui:Z výkresu…}} promění strany PDF nebo skenu ve stěny: viz [Stěny ze sady půdorysů](topic:walls-from-plans).

## Co ukládá

| Kliknete na | Získáte | Kam |
|---|---|---|
| {{ui:Uložit jako IFC}} | Nový soubor IFC s Vašimi úpravami, pojmenovaný „*původní název* (edited).ifc“ | Do složky stažených souborů prohlížeče |
| {{ui:Stáhnout CSV}} v rozpisu zařízení | CSV s položkami v seznamu, pojmenované „*název výkresu* equipment.csv“ | Do složky stažených souborů prohlížeče |

Ostatní věci se ukládají tam, kde vznikají, každá ve svém tématu: {{ui:USD}} ([Export modelu jako USD](topic:usd)), soubor .glb {{ui:Pro vykreslování}}, vykreslené obrázky, listy a půdorysy jako PDF, rozpisy a seznamy jako CSV, problémy BCF, tabulka COBie, soubory rodin a registrované skeny jako LAS nebo E57. BimCraft neukládá DWG, DXF ani soubory projektů a nikdy nemění soubory, které jste otevřeli.

:::chromium
Chrome a Edge ukládají stažené soubory do složky nastavené v jejich nastavení, obvykle Stažené soubory. Chcete-li být pokaždé dotázáni, kam uložit, zapněte v nastavení stahování prohlížeče volbu pro dotaz na umístění před stažením každého souboru.
:::

:::firefox
Firefox ukládá do složky Stažené soubory, pokud v nastavení nezvolíte, že se má vždy zeptat, kam soubory uložit.
:::

:::safari
Safari ukládá do složky Stažené, pokud pod **Safari > Nastavení > Obecné > Umístění stahovaných souborů** nezvolíte jinou složku.
:::

## Opakované uložení

Každé uložení stáhne celý model se **všemi úpravami od otevření**, ne jen s úpravami od posledního uložení. Seznam {{ui:Změny}} se po každém uložení znovu vyprázdní, takže za uložení se vrátit nelze. Chcete-li začít znovu od originálu, otevřete původní soubor znovu.

## Velké soubory a paměť

- Soubory **IFC** se čtou celé do paměti karty a 3D geometrie zabere další paměť navíc. Model o velikosti několika set megabajtů může být pro notebook příliš. Nad 1,5 milionu trojúhelníků se kvůli úspoře paměti vypnou hrany („Hrany jsou u velmi velkých modelů vypnuté“).
- **Soubory projektů** se nečtou celé. BimCraft čte jen malé části, které potřebuje, asi 40 KB až 100 KB bez ohledu na velikost souboru, takže centrální model o velikosti 500 MB na síťovém disku se otevře okamžitě.
- Soubory **DWG a DXF** se čtou celé. Velmi velký výkres zobrazí „Tento výkres je velmi velký; zobrazuje se jen jeho část.“
- **Složky** až do 20 000 souborů se otevřou. Čtou se jen ty kilobajty, které každá karta modelu potřebuje.

Více viz [Prohlížeče, zařízení a paměť](topic:platforms).

## Online a offline

Otevírání souborů nikdy nevyžaduje internet. Jedna čtečka se při první potřebě načte z webu: engine IFC, při prvním otevření modelu IFC („Spouští se engine IFC…“). Čtečky DWG a DXF jsou součástí aplikace.

:::offline
Jste offline. Pokud tlačítko v liště aplikace zobrazuje {{ui:Připraveno offline}}, otevře se každý formát jako obvykle. Pokud ne, model IFC se neotevře, pokud se již nějaký neotevřel v této kartě: nejprve se znovu připojte. Viz [Online a offline](topic:online-offline).
:::

Chcete-li BimCraft používat bez připojení, klikněte v liště aplikace při připojení na {{ui:Uložit pro offline}} a počkejte na {{ui:Připraveno offline}}. Uložená kopie má asi 33 MB; obsahuje engine IFC, takže se offline otevřou i modely IFC. Uložené kopie obecně vysvětluje téma [Práce offline](common:offline).

## Ukládání do cloudu

Ukládání do cloudu zatím není k dispozici. Upravené kopie ukládejte na vlastní počítač nebo souborový server své kanceláře, jako každý jiný soubor. Viz [Vaše soubory](common:your-files).
