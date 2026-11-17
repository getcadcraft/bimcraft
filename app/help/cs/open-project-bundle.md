---
title: Otevření projektového balíku
summary: Projektový balík je jeden zip s modelem, jeho pohledy, rozvrženími a skupinami vlastností. Otevřete ho, zobrazte pohled s jeho podlažím a vrstvami, otevřete rozvržení a prohlédněte si vlastnosti ve skupinách projektu.
keywords: balík, projektový balík, ccbundle, zip, pohledy, mapa pohledů, rozvržení, kniha rozvržení, kombinace vrstev, skupiny vlastností, normy, pln, šablona
from: b5b86e8f
---

## Co uděláte

Otevřete **projektový balík** (`.ccbundle.zip`) a pracujte s projektem tak, jak byl uspořádán: s jeho pohledy, rozvrženími a skupinami vlastností nad modelem.

Balík obsahuje:

- model jako IFC,
- rozvržení jako PDF a DWG,
- seznam toho, co IFC nezachycuje: pohledy (každý s podlažím, kombinací vrstev a měřítkem), rozvržení a výkresy na nich umístěné, definice vlastností v jejich skupinách, klasifikace a normy, jako jsou vrstvy, sady per, typy čar, výplně, povrchy a kompozity.

Balíky vytváří skript s otevřeným zdrojovým kódem, který běží uvnitř Archicadu a žádá samotný Archicad o tyto seznamy. BimCraft nikdy nečte soubory `.pln` ani `.tpl` přímo; viz [Otevření projektových souborů .pln a .pla](topic:pln-project-files).

## Vytvoření balíku

Skript je náhled: zatím nebyl vyzkoušen na každé verzi Archicadu. Získejte ho z [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Potřebujete Archicad 24 nebo novější a Python 3.8 nebo novější; nic dalšího instalovat nemusíte.

1. Uložte `archicad_bundle.py` do složky, například `C:\cc-bundle`.
2. V Archicadu otevřete projekt a vytvořte sadu publikování s názvem přesně **CadCraft bundle**: 3D pohled jako IFC, každé rozvržení jako PDF a každé rozvržení znovu jako DWG, publikováno do souborů na disku v jedné ploché složce.
3. S otevřeným projektem spusťte jednou `python archicad_bundle.py --probe --out .`. Pouze čte a zapíše `probe.json`.
4. Spusťte `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (použijte překladač IFC, který jste zvolili). Archicad publikuje sadu a skript zapíše `<project>.ccbundle.zip`.

Pokud publikování skriptem selže, publikujte sadu ručně a spusťte `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Všechny volby jsou v README repozitáře. Pokud něco nedorazí, otevřete tam issue a připojte `probe.json`.

## Otevření balíku

1. Klikněte na {{ui:Vybrat soubor}}, nebo přetáhněte `.ccbundle.zip` na BimCraft. Ve složce, kterou jste otevřeli přes {{ui:Otevřít složku}}, jsou balíky uvedeny pod **Projektové balíky**; klikněte na balík podle názvu.
2. Model se otevře stejně jako každé IFC a vlevo, pod údaji o souboru, se objeví sekce **Projektový balík**.

Nic se nenahrává: balík se čte na vašem počítači po jednom souboru, takže se velký model nekopíruje dvakrát.

## Zobrazení pohledu

Pod **Pohledy** jsou pohledy seskupeny podle složek, které měly v projektu. Klikněte na název pohledu:

- **Půdorys** zobrazí jen své podlaží, shora.
- **Jeho kombinace vrstev** skryje prvky na vrstvách, které tato kombinace skrývá. Stavový řádek říká, kolik prvků bylo skryto.
- **Jeho měřítko** se zobrazí vedle názvu a ve stavovém řádku.
- **3D pohled** zobrazí všechna podlaží.

Chcete-li zobrazit vše znovu, použijte {{ui:Zobrazit vše}} v {{ui:Zobrazit}} a zaškrtněte všechna podlaží.

:::note
BimCraft najde vrstvy přes přiřazení vrstev v souboru IFC. Pokud bylo IFC exportováno bez nich, kombinace vrstev nic neskryje a stavový řádek ukáže 0 skrytých prvků.
:::

## Otevření rozvržení

Pod **Rozvržení** má každé rozvržení své číslo, název, formát papíru a pohledy na něm umístěné.

- **PDF** uloží PDF rozvržení z balíku.
- **DWG** otevře výkres rozvržení v 2D pohledu. Klikněte na libovolný pohled a vrátíte se k modelu.
- **Otevřít v …** pošle soubor rozvržení aplikaci, která s ním pracuje, v nové kartě: PDF do MarkupCraftu, DWG do CadCraftu. Zobrazí se jen tehdy, když je tato aplikace otevřená vedle BimCraftu. Soubor se čte z balíku při načítání karty a nic se nenahrává.

Rozvržení bez obojího hlásí **V balíku není žádný soubor**.

## Vlastnosti ve skupinách projektu

Vyberte prvek. **Skupiny vlastností** zobrazí jeho vlastnosti pod skupinami, které projekt definoval, spárované podle sady vlastností a názvu, které pro IFC uvádí definice, jinak podle názvu. Ostatní zůstávají v {{ui:Vlastnosti}} jako obvykle. **Definice vlastností** vypisuje každou definici se skupinou, typem a názvem IFC.

## Normy a poznámky

- **Normy** počítají vrstvy, kombinace vrstev, sady per, typy čar, výplně, povrchy, kompozity a materiály v balíku.
- **Poznámky** vypisují, co skript nemohl z dané verze Archicadu získat, každé pole, které BimCraft nedokázal přečíst, a každý soubor, který balík uvádí, ale nedrží.

## Řešení potíží

- **"… je zip, ale není projektový balík."** Zip nemá `manifest.json`. Rozbalte ho a otevřete `.ifc` uvnitř.
- **"… je novější projektový balík, než jaký BimCraft čte."** Aktualizujte BimCraft.
- **"… nedrží model, který uvádí jeho manifest."** Zip byl useknut nebo upraven. Vytvořte balík znovu.
- **Pohled zobrazuje všechna podlaží.** Jeho podlaží není v IFC modelu (stavový řádek to říká). Zkontrolujte, zda export IFC obsahoval toto podlaží.

Viz také [Práce mezi dvěma BIM programy](topic:two-bim-programs) a [Co BimCraft čte z jednotlivých formátů](topic:file-formats).
