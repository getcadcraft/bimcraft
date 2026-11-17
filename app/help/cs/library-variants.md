---
title: Umístění a výměna položky knihovny s variantami
summary: Některé položky knihovny mají více velikostí nebo možností. Vyberte variantu před umístěním, zjistěte, která varianta je umístěná položka, vyměňte ji za jinou jedním kliknutím a zachovejte ji při aktualizaci položky.
keywords: varianta, varianty, velikosti, možnosti, konfigurace, knihovna, librarycraft, umístit, vyměnit, konfigurátor, rodina, typ, aktualizace, porty
from: c05f0af3
---

## Co budete dělat

Umístěte položku knihovny ve velikosti nebo možnosti, kterou potřebujete, a později si to rozmyslete, aniž byste ji museli umisťovat znovu. Položka s variantami je jedna položka v knihovně (jeden název, jedna licence, jedna verze) s tabulkou variant, v nichž se nabízí: například montážní deska ve velikostech Malá, Střední a Velká, nebo tatáž deska bez otvorů.

## Výběr varianty a umístění

1. Otevřete záložku {{ui:Library}} a klikněte na kartu položky.
2. Pod názvem nabízí volba {{ui:Variant}} každou variantu s její velikostí. Výchozí varianta položky je zvolena jako první.
3. Vyberte jednu. Půdorys, velikost a řádek 3D tělesa se řídí vaší volbou.
4. Klikněte na {{ui:Place in plan}} (nebo {{ui:Place in model}} ve 3D pohledu) a umístěte ji jako jakoukoli položku: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library).

Umístěný prvek dostane název po položce a variantě, například *Montážní deska — Velká*, aby je rozpis zařízení a strom rozlišily. Každá varianta je vlastní typ IFC: umístění stejné varianty dvakrát sdílí jeden typ, jiná varianta dostane vlastní.

## Zjištění, která varianta je umístěná

Vyberte prvek. V **Vlastnostech** má pole **Položka knihovny** řádek **Varianta**. IFC jej uchovává v `CadCraft_LibraryItem`: `Variant` (id varianty), `VariantName` a `VariantValues` (hodnoty možností jako text), aby je mohly číst jiné programy.

## Výměna za jinou variantu

1. Vyberte umístěnou položku a klikněte na {{ui:Swap item…}} v poli **Položka knihovny**. Otevře se záložka {{ui:Library}}.
2. Nahoře **Další varianty položky** *název položky* uvádí každou variantu s její velikostí. Umístěná je označena a nelze ji vybrat.
3. Klikněte na {{ui:Swap to …}} u varianty, kterou chcete.

Prvek si zachová své místo, otočení, podlaží, číslo položky, množství a poznámky; jeho typ, tvar a data se změní na jinou variantu. {{key:Mod+Z}} vrátí první variantu zpět. Místo toho můžete stále vybrat jakoukoli jinou položku ze seznamu níže, jako dříve: viz [Výměna umístěné položky a aktualizace položek z knihovny](topic:swap-and-update-library-items).

## Kopírování, vkládání a aktualizace

- Kopie umístěné varianty je stejná varianta: v tomto modelu i v jiném modelu otevřeném ve stejné záložce prohlížeče, přes Kopírovat a Vložit.
- **Aktualizace** zachovají variantu: pokud novější verze položky ji stále má, umístění se stane touto variantou nové verze. Pokud ji nová verze už nemá, umístění dostane výchozí variantu položky.

## Dobré vědět

- Jen některé položky knihovny mají varianty. Karty to neříkají; volbu {{ui:Variant}} uvidíte, až položku otevřete.
- Položka může u každé varianty uvádět **porty** (připojovací body pro potrubí a vzduchotechniku). Záložka Knihovna ukazuje, kolik jich varianta má. Při umístění z karty Knihovna se zatím do IFC **nezapisují**.
- Varianta bez 3D tělesa se umístí jako náhradní krabice, jako každý 2D symbol.
- Velikosti ve volbě jsou v milimetrech, jak je uvádí knihovna.
