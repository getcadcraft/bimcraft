---
title: Súbory, ktoré BimCraft otvára a ukladá
summary: Každý formát, ktorý BimCraft otvára, čo z neho zachová, čo ukladá, kam idú uložené súbory a čo sa mení medzi prehliadačmi a pri práci offline.
keywords: formáty, otvoriť, uložiť, export, stiahnuť, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, nahrať, súkromie, veľkosť súboru
from: a1f0161b
---

BimCraft číta súbory na vašom počítači v karte prehliadača. **Nič sa nenahráva** do CadCraft ani nikomu inému. Keď ukladáte, BimCraft odovzdá prehliadaču nový súbor na stiahnutie; nikdy neprepíše súbor, ktorý ste otvorili.

## Čo otvára

| Formát | Prípony | Čo dostanete |
|---|---|---|
| IFC | `.ifc` | Model v 3D, podlažia, počty prvkov a vlastnosti každého prvku. Názvy, značky a jednotlivé hodnoty vlastností sa dajú meniť. |
| Súbory projektov a rodín | `.rvt` `.rfa` `.rte` `.rft` | Kartu súboru: vydanie, zostavenie, spoločná práca, informácie o projekte, parametre rodín, prepojené súbory a náhľadový obrázok. Bez 3D. |
| DWG | `.dwg` | Výkres v 2D: priestor modelu, každý list, hladiny, prepojené výkresy, obrázky a náhľad tlače. Priestor modelu aj v 3D. Overené sú formáty od AutoCAD 2000 po 2018. |
| DXF | `.dxf` | To isté ako DWG. |
| STEP | `.step` `.stp` | Súčiastku, zariadenie alebo model dodávateľa (AP203, AP214, AP242) v 3D: každé teleso sa stane jedným prvkom (zástupný prvok budovy) malého modelu IFC na jednom podlaží, načítaným ako trojuholníky v skutočnej veľkosti, zostava so všetkými súčiastkami tam, kde ich súbor umiestňuje. Odtiaľ funguje ako každý IFC: vlastnosti, rezy, meranie, uloženie ako IFC. Farby a strom zostavy sa nečítajú. |
| Mračná bodov | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken v 3D pohľade, vedľa modelu alebo samostatne: pozrite [Zobrazenie mračna bodov vedľa modelu](topic:point-clouds). |
| Balík projektu | `.ccbundle.zip` | Model s jeho pohľadmi, rozloženiami a skupinami vlastností: pozrite [Otvorenie balíka projektu](topic:open-project-bundle). |
| Priečinok | ľubovoľný | Správu o každom modeli, výkrese a balíku projektu v ňom. Každý IFC, model, výkres alebo balík v správe sa otvorí kliknutím. |

[Čo BimCraft číta z každého formátu](topic:file-formats) ide do podrobností.

BimCraft rozpoznáva, čo súbor je, podľa jeho prvých bajtov aj podľa názvu, takže súbor projektu s nezvyčajnou príponou sa stále otvorí ako karta súboru.

### Neotvára

- `.ifczip` a `.ifcxml`: BimCraft povie „.ifczip zatiaľ nie je podporovaný. Uložte alebo exportujte model ako obyčajný súbor .ifc.“ Rozbaľte `.ifczip` (obsahuje obyčajný `.ifc`) alebo exportujte znova ako obyčajný IFC.
- Výkresy DGN sa uvádzajú v správe o priečinku, ale neotvárajú sa.
- PDF, obrázky a kancelárske súbory sa samy neotvárajú. Obrázky sa používajú ako obrázky vnútri DWG a {{ui:Zostava}} › {{ui:Z výkresu…}} premení strany PDF alebo skenu na steny: pozrite [Steny zo sady plánov](topic:walls-from-plans).

## Čo ukladá

| Kliknete | Dostanete | Kam |
|---|---|---|
| {{ui:Uložiť ako IFC}} | Nový súbor IFC s vašimi úpravami, s názvom „*pôvodný názov* (edited).ifc“ | Priečinok prehliadača na stiahnuté súbory |
| {{ui:Stiahnuť CSV}} v tabuľke vybavenia | CSV s položkami v zozname, s názvom „*názov výkresu* equipment.csv“ | Priečinok prehliadača na stiahnuté súbory |

Ostatné veci sa ukladajú tam, kde vznikajú, každá vo svojej téme: {{ui:USD}} ([Export modelu ako USD](topic:usd)), súbor .glb {{ui:Na vykreslenie}}, vykreslené obrázky, listy a pôdorysy ako PDF, tabuľky a zoznamy ako CSV, problémy BCF, tabuľka COBie, súbory rodín a registrované skeny ako LAS alebo E57. BimCraft neukladá DWG, DXF ani súbory projektov a nikdy nemení súbory, ktoré ste otvorili.

:::chromium
Chrome a Edge ukladajú stiahnuté súbory do priečinka nastaveného v ich nastaveniach, zvyčajne Stiahnuté súbory. Ak chcete, aby sa pri každom uložení pýtali, kam ukladať, zapnite v nastaveniach sťahovania prehliadača možnosť „Pred stiahnutím sa pýtať, kam sa má každý súbor uložiť“.
:::

:::firefox
Firefox ukladá do priečinka Stiahnuté súbory, ibaže v nastaveniach zvolíte „Vždy sa pýtať, kam ukladať súbory“.
:::

:::safari
Safari ukladá do priečinka Stiahnuté súbory, ibaže zvolíte iný priečinok v **Safari > Nastavenia > Všeobecné > Umiestnenie sťahovaných súborov**.
:::

## Uloženie druhýkrát

Každé uloženie stiahne celý model so **všetkými úpravami od otvorenia**, nielen s úpravami po poslednom uložení. Zoznam {{ui:Zmeny}} je po každom uložení znova prázdny, takže za uloženie sa vrátiť nedá. Ak chcete začať znova od pôvodného, otvorte pôvodný súbor znova.

## Veľké súbory a pamäť

- Súbory **IFC** sa čítajú celé do pamäte karty a 3D geometria zaberie ďalšiu pamäť. Model s niekoľkými stovkami megabajtov môže byť pre notebook priveľa. Nad 1,5 milióna trojuholníkov sa hrany vypnú, aby sa šetrila pamäť („Hrany sú pri veľmi veľkých modeloch vypnuté“).
- **Súbory projektov** sa nečítajú celé. BimCraft číta iba malé časti, ktoré potrebuje, asi 40 KB až 100 KB bez ohľadu na veľkosť súboru, takže centrálny model s 500 MB na sieťovom disku sa otvorí okamžite.
- **DWG a DXF** sa čítajú celé. Veľmi veľký výkres zobrazí „Tento výkres je veľmi veľký; zobrazená je iba jeho časť.“
- **Priečinky** do 20 000 súborov sa otvoria. Číta sa iba niekoľko kilobajtov, ktoré každá karta modelu potrebuje.

Viac nájdete v [Prehliadače, zariadenia a pamäť](topic:platforms).

## Online a offline

Otváranie súborov nikdy nepotrebuje internet. Jedna čítačka sa načíta zo stránky pri prvej potrebe: modul IFC pri prvom otvorení modelu IFC („Spúšťa sa modul IFC…“). Čítačky DWG a DXF sú súčasťou aplikácie.

:::offline
Ste offline. Ak tlačidlo na lište aplikácie znie {{ui:Pripravené offline}}, každý formát sa otvorí ako zvyčajne. Ak nie, model IFC sa nedá otvoriť, ibaže sa už jeden otvoril na tejto karte: najprv sa pripojte. Pozrite [Online a offline](topic:online-offline).
:::

Ak chcete BimCraft používať úplne bez pripojenia, kliknite na lište aplikácie na {{ui:Uložiť na offline použitie}}, kým ste online, a počkajte na {{ui:Pripravené offline}}. Uložená kópia má asi 33 MB; obsahuje modul IFC, takže modely IFC sa otvoria aj offline. [Práca offline](common:offline) vysvetľuje uložené kópie všeobecne.

## Ukladanie do cloudu

Ukladanie do cloudu zatiaľ nie je k dispozícii. Upravené kópie ukladajte na vlastný počítač alebo na súborový server kancelárie, ako každý iný súbor. Pozrite [Vaše súbory](common:your-files).
