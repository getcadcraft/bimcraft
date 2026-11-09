---
title: Súbory, ktoré BimCraft otvára a ukladá
summary: Každý formát, ktorý BimCraft otvára, čo si zachová, čo uloží, kam sa uložené súbory dostanú a čo sa mení medzi prehliadačmi a pri práci offline.
keywords: formáty, otvoriť, uložiť, export, stiahnuť, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, nahrať, súkromie, veľkosť súboru
from: a7275dbf
---

BimCraft číta súbory na vašom počítači, v karte prehliadača. **Nič sa nenahráva** do CadCraft ani k nikomu inému. Pri uložení BimCraft odovzdá prehliadaču nový súbor na stiahnutie; nikdy neprepíše súbor, ktorý ste otvorili.

## Čo otvára

| Formát | Prípony | Čo dostanete |
|---|---|---|
| IFC | `.ifc` | Model v 3D, podlažia, počty prvkov a všetky vlastnosti každého prvku. Názvy, značky a jednotlivé hodnoty vlastností sa dajú zmeniť. |
| Projektové a rodinné súbory | `.rvt` `.rfa` `.rte` `.rft` | Karta súboru: verzia, zostava, zdieľaná práca, informácie o projekte, parametre rodiny, prepojené súbory a obrázok ukážky. Bez 3D. |
| DWG | `.dwg` | Výkres v 2D: priestor modelu, každý list, hladiny, prepojené výkresy, obrázky a pohľad na tlač. Priestor modelu aj v 3D. Overené sú formáty od AutoCAD 2000 po 2018. |
| DXF | `.dxf` | Rovnaké ako DWG. |
| STEP | `.step` `.stp` | Súčiastka, zariadenie alebo model dodávateľa (AP203, AP214, AP242) v 3D: každé teleso sa stane jedným prvkom (zástupný prvok stavebného prvku) malého modelu IFC na jednom podlaží, načíta sa ako trojuholníky v skutočnej veľkosti a zostava so všetkými súčiastkami sa umiestni tam, kde ich súbor určuje. Odtiaľ funguje ako ľubovoľné IFC: vlastnosti, rezy, meranie, uložiť ako IFC. Farby a strom zostavy sa nenačítavajú. |
| Oblaky bodov | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Sken v pohľade 3D, vedľa modelu alebo samostatne: pozrite si [Zobrazenie oblaku bodov vedľa modelu](topic:point-clouds). |
| Projektový balík | `.ccbundle.zip` | Model s jeho pohľadmi, rozloženiami a skupinami vlastností: pozrite si [Otvorenie projektového balíka](topic:open-project-bundle). |
| Priečinok | ľubovoľné | Správa o každom modeli, výkrese a projektovom balíku v ňom. Každé IFC, model, výkres alebo balík v správe sa otvorí jedným kliknutím. |

[Čo BimCraft číta z každého formátu](topic:file-formats) je popísané podrobnejšie.

BimCraft určuje, čo súbor je, podľa jeho prvých bajtov aj podľa názvu, takže projektový súbor s neobvyklou príponou sa aj tak otvorí ako karta súboru.

### Neotvára sa

- `.ifczip` a `.ifcxml`: BimCraft hlási: ".ifczip is not supported yet. Save or export the model as a plain .ifc file." (".ifczip zatiaľ nie je podporovaný. Uložte alebo exportujte model ako obyčajný súbor .ifc."). Rozbaľte `.ifczip` (obsahuje obyčajný `.ifc`) alebo exportujte znova ako obyčajné IFC.
- Výkresy DGN sa uvádzajú v správe priečinka, ale neotvoria sa.
- PDF, obrázky a kancelárske súbory sa samy neotvoria. Obrázky sa používajú ako obrázky v DWG a {{ui:Build}} › {{ui:From a drawing…}} premení strany PDF alebo skenu na múry: pozrite si [Múry zo súboru plánov](topic:walls-from-plans).

## Čo ukladá

| Kliknete | Dostanete | Kde |
|---|---|---|
| {{ui:Save as IFC}} | Nový súbor IFC s vašimi úpravami, pomenovaný "*pôvodný názov* (edited).ifc" | Priečinok sťahovaných súborov vášho prehliadača |
| {{ui:Download CSV}} v zozname zariadení | CSV s položkami zo zoznamu, pomenovaný "*názov výkresu* equipment.csv" | Priečinok sťahovaných súborov vášho prehliadača |

Ostatné veci sa ukladajú tam, kde vzniknú, každá vo vlastnej téme: {{ui:USD}} ([Export modelu do USD](topic:usd)), {{ui:Collada}} ([Export modelu do Collada alebo pre Google Earth](topic:collada): .dae a Google Earth .kmz), .glb pre {{ui:For rendering}}, vykreslené obrázky, listy a plány ako PDF, harmonogramy a zoznamy ako CSV, problémy BCF, tabuľka COBie, súbory rodín a zaregistrované skeny ako LAS alebo E57. BimCraft neukladá DWG, DXF ani projektové súbory a nikdy nemení súbory, ktoré ste otvorili.

:::chromium
Chrome a Edge ukladajú stiahnuté súbory do priečinka nastaveného v ich nastaveniach, zvyčajne Stiahnuté súbory. Ak chcete, aby sa pri každom súbore pýtali, kam ho uložiť, zapnite v nastaveniach sťahovania prehliadača možnosť "Ask where to save each file before downloading".
:::

:::firefox
Firefox ukladá do priečinka Stiahnuté súbory, pokiaľ v jeho nastaveniach nezvolíte "Always ask you where to save files".
:::

:::safari
Safari ukladá do priečinka Stiahnuté súbory, pokiaľ nevyberiete iný priečinok v **Safari > Nastavenia > Všeobecné > Umiestnenie sťahovaných súborov**.
:::

## Uloženie druhýkrát

Každé uloženie stiahne celý model so **všetkými úpravami od jeho otvorenia**, nie iba úpravami po poslednom uložení. Zoznam {{ui:Changes}} sa po každom uložení vyprázdni, takže sa nedá vrátiť späť za uloženie. Ak chcete začať znova od originálu, otvorte pôvodný súbor znova.

## Veľké súbory a pamäť

- Súbory **IFC** sa načítavajú celé do pamäte karty a geometria 3D zaberá ďalšiu pamäť. Model s niekoľkými stovkami megabajtov môže byť pre notebook priveľký. Nad 1.5 milióna trojuholníkov sa hrany vypnú, aby sa ušetrila pamäť ("Edges are off for very large models").
- **Projektové súbory** sa nenačítavajú celé. BimCraft načíta iba malé časti, ktoré potrebuje, približne 40 KB až 100 KB bez ohľadu na veľkosť súboru, takže centrálny model 500 MB na sieťovej jednotke sa otvorí hneď.
- Súbory **DWG** a **DXF** sa načítavajú celé. Veľmi veľký výkres zobrazí hlásenie "This drawing is very large; only part of it is shown."
- **Priečinky** s až 20 000 súbormi sa otvoria. Číta sa iba niekoľko kilobajtov, ktoré každá karta modelu potrebuje.

Viac pozrite v [Prehliadače, zariadenia a pamäť](topic:platforms).

## Online a offline

Otvorenie súborov nikdy nepotrebuje internet. Jeden čítač sa načíta zo stránky pri prvej potrebe: motor IFC pri prvom otvorení modelu IFC ("Starting the IFC engine…"). Čítače DWG a DXF sú súčasťou aplikácie.

:::offline
Ste offline. Ak tlačidlo na paneli aplikácie hovorí {{ui:Offline ready}}, každý formát sa otvorí ako obvykle. Ak nie, model IFC sa neotvorí, pokiaľ sa v tejto karte už neotvoril: najprv sa znova pripojte. Pozrite [Online a offline](topic:online-offline).
:::

Ak chcete používať BimCraft bez pripojenia, kliknite na {{ui:Save for offline}} na paneli aplikácie, keď ste online, a počkajte na {{ui:Offline ready}}. Uložená kópia má približne 33 MB; obsahuje motor IFC, takže modely IFC sa otvoria aj offline. [Práca offline](common:offline) vysvetľuje uložené kópie všeobecne.

## Ukladanie do cloudu

Ukladanie do cloudu zatiaľ nie je k dispozícii. Upravené kópie ukladajte na vlastnom počítači alebo na súborovom serveri vašej kancelárie, ako ktorýkoľvek iný súbor. Pozrite [Vaše súbory](common:your-files).
