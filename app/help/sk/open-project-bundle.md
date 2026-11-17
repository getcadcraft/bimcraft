---
title: Otvorenie projektového balíka
summary: Projektový balík je jeden zip so modelom, jeho pohľadmi, jeho listami a jeho skupinami vlastností. Otvorte ho, zobrazte pohľad s jeho podlažím a hladinami, otvorte list a pozrite si vlastnosti v skupinách projektu.
keywords: balík, projektový balík, ccbundle, zip, pohľady, mapa pohľadov, listy, kniha listov, kombinácia hladín, skupiny vlastností, štandardy, pln, šablóna
from: b5b86e8f
---

## Čo urobíte

Otvoríte **projektový balík** (`.ccbundle.zip`) a pracujete s projektom tak, ako bol usporiadaný: s jeho pohľadmi, listami a skupinami vlastností nad modelom.

Balík obsahuje:

- model ako IFC,
- listy ako PDF a DWG,
- zoznam toho, čo IFC nezachytáva: pohľady (každý s jeho podlažím, kombináciou hladín a mierkou), listy a výkresy na nich umiestnené, definície vlastností v ich skupinách, klasifikácie a štandardy, ako sú hladiny, sady pier, typy čiar, výplne, povrchy a kompozity.

Balíky zapisuje skript s otvoreným zdrojovým kódom, ktorý beží v Archicad a pýta si od samotného Archicad tieto zoznamy. BimCraft nikdy nečíta súbory `.pln` ani `.tpl` priamo; pozrite si [Otvorenie projektových súborov .pln a .pla](topic:pln-project-files).

## Vytvorenie balíka

Skript je ukážka: zatiaľ nebol vyskúšaný na každej verzii Archicad. Získate ho na [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potrebujete Archicad 24 alebo novší a Python 3.8 alebo novší; nič iné inštalovať nemusíte.

1. Uložte `archicad_bundle.py` do priečinka, napríklad `C:\cc-bundle`.
2. V Archicad otvorte projekt a vytvorte sadu publikovania s presným názvom **CadCraft bundle**: 3D pohľad ako IFC, každý list ako PDF a každý list znova ako DWG, publikované do súborov na disku v jednom plochom priečinku.
3. Pri otvorenom projekte spustite raz `python archicad_bundle.py --probe --out .`. Iba číta a zapíše `probe.json`.
4. Spustite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (použite prekladač IFC, ktorý ste vybrali). Archicad publikuje sadu a skript zapíše `<project>.ccbundle.zip`.

Ak publikovanie cez skript zlyhá, publikujte sadu ručne a spustite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Všetky možnosti sú v README úložiska. Ak niečo nepríde, otvorte tam problém a priložte `probe.json`.

## Otvorenie balíka

1. Kliknite na {{ui:Vybrať súbor}}, alebo pretiahnite `.ccbundle.zip` na BimCraft. V priečinku, ktorý ste otvorili pomocou {{ui:Otvoriť priečinok}}, sú balíky uvedené pod **Projektové balíky**; kliknite na jeden podľa názvu.
2. Model sa otvorí ako každé IFC a sekcia **Projektový balík** sa zobrazí vľavo, pod údajmi o súbore.

Nič sa nenahráva: balík sa číta vo vašom počítači, jeden súbor naraz, takže veľký model sa nekopíruje dvakrát.

## Zobrazenie pohľadu

Pod **Pohľady** sú pohľady zoskupené podľa priečinkov, ktoré mali v projekte. Kliknite na názov pohľadu:

- **Pôdorys** zobrazí iba svoje podlažie, pozerané zhora.
- **Jeho kombinácia hladín** skryje prvky na hladinách, ktoré táto kombinácia skrýva. Stavový riadok hovorí, koľko prvkov bolo skrytých.
- **Jeho mierka** sa zobrazuje vedľa názvu a v stavovom riadku.
- **3D pohľad** zobrazí všetky podlažia.

Aby ste zobrazili všetko znova, použite {{ui:Zobraziť všetko}} v {{ui:Zobraziť}} a zaškrtnite každé podlažie.

:::note
BimCraft nájde hladiny cez priradenia hladín v súbore IFC. Ak bolo IFC exportované bez nich, kombinácia hladín nič neskryje a stavový riadok uvedie 0 skrytých prvkov.
:::

## Otvorenie listu

Pod **Listy** každý list zobrazuje svoje číslo, názov, formát papiera a pohľady, ktoré sú na ňom umiestnené.

- **PDF** uloží PDF listu z balíka.
- **DWG** otvorí výkres listu v 2D pohľade. Kliknutím na ľubovoľný pohľad sa vrátite k modelu.
- **Otvoriť v …** odošle súbor listu aplikácii, ktorá s ním pracuje, v novej karte: PDF do MarkupCraft, DWG do CadCraft. Zobrazí sa iba vtedy, keď je tá aplikácia otvorená vedľa BimCraft. Súbor sa z balíka číta pri načítavaní karty a nič sa nenahráva.

List, ktorý nemá ani jedno, zobrazí **V balíku nie je žiadny súbor**.

## Zobrazenie vlastností v skupinách projektu

Vyberte prvok. **Skupiny vlastností** zobrazí jeho vlastnosti pod skupinami, ktoré projekt definoval, spárované podľa sady vlastností a názvu, ktoré definícia uvádza pre IFC, inak podľa názvu. Ostatné zostávajú v {{ui:Vlastnosti}} ako obvykle. **Definície vlastností** vypíšu každú definíciu s jej skupinou, typom a názvom IFC.

## Štandardy a poznámky

- **Štandardy** spočítajú hladiny, kombinácie hladín, sady pier, typy čiar, výplne, povrchy, kompozity a materiály v balíku.
- **Poznámky** vypíšu, čo skript nedokázal získať z danej verzie Archicad, každé pole, ktoré BimCraft nedokázal prečítať, a každý súbor, ktorý balík uvádza, ale neobsahuje.

## Riešenie problémov

- **"… je zip, ale nie je projektový balík."** Zip nemá `manifest.json`. Rozbaľte ho a otvorte `.ifc`, ktorý je v ňom.
- **"… je novší projektový balík, než aký BimCraft číta."** Aktualizujte BimCraft.
- **"… neobsahuje model, ktorý uvádza jeho manifest."** Zip bol useknutý alebo upravený. Vytvorte balík znova.
- **Pohľad zobrazuje všetky podlažia.** Jeho podlažie nie je v IFC modelu (stavový riadok to hovorí). Skontrolujte, či export IFC obsahoval toto podlažie.

Pozrite tiež [Práca medzi dvoma BIM programami](topic:two-bim-programs) a [Čo BimCraft číta z každého formátu](topic:file-formats).
