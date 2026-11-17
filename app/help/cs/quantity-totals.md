---
title: Sečtení množství, výpis prvků a tabulka prostorů
summary: Spočítejte prvky a sečtěte jejich délky, plochy, objemy nebo libovolnou číselnou vlastnost, seskupenou podle libovolné vlastnosti; vypište jeden řádek na prvek; nebo vytvořte tabulku prostorů s jejich plochami a objemy. Každé se stáhne jako CSV.
keywords: množství, množství, výkaz výměr, součty, součet, tabulka, soupis množství, boq, qto, csv, seskupit podle, počet, délka, plocha, objem, prostory, místnosti, tabulka místností, tabulka ploch, seznam prvků
from: e2e7210c
---

## Co uděláte

Získáte součty z modelu: délky stěn podle podlaží, počty dveří podle typu, objem desek podle materiálu, cenu každé zóny.

## Postup

1. Otevřete model IFC.
2. Otevřete {{ui:Součty množství}} v levém panelu.
3. V {{ui:Počítat}} zvolte {{ui:Každý prvek}}, nebo jen vybrané.
4. Pod {{ui:Seskupit podle}} zvolte vlastnost, například {{ui:Třída}}. Kliknutím na {{ui:Přidat skupinu}} můžete dělit dál, až na tři, například podle {{ui:Podlaží}}.
5. Pod {{ui:Sečíst}} zaškrtněte čísla, která se mají sečíst. Sady množství modelu jsou od začátku zaškrtnuté.
6. Kliknutím na {{ui:Stáhnout CSV}} stáhněte tabulku a otevřete ji v tabulkovém editoru.

## Co uvidíte

- Řádek na skupinu s počtem prvků v ní a každým součtem, a řádek celkem.
- Prvky bez hodnoty se započítají, ale nic nepřidají. V takovém případě CSV přidá sloupec „vynecháno“ vedle součtu, abyste viděli, kolik jich je.
- Čísla jsou v jednotkách souboru, jak je soubor ukládá, často milimetry pro délky.

## Jeden řádek na prvek, nebo prostory

Změňte {{ui:Zobrazit}}:

- **Jeden řádek na prvek**: každý prvek na vlastním řádku, s vlastnostmi pod {{ui:Sloupce}} a čísly pod {{ui:Sečíst}}. CSV začíná GlobalId každého prvku. Kliknutím na první hodnotu v řádku vyberete ten prvek.
- **Prostory**: každá místnost s číslem, názvem, podlažím, plochou a objemem, a jejich součty. Plochy a objemy pocházejí z množství prostoru, tak jak je soubor uvádí. Pokud soubor žádné nemá, změří se z tvaru prostoru v m² a m³ a zobrazí se kurzívou; CSV říká, které je které.

## Další

- [Vyhledání prvků podle třídy, názvu nebo vlastnosti](topic:find)
- [Obarvení prvků podle vlastnosti](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Vyberte **Infrastruktura (IFC 4.3)** v seznamu zobrazení a uvidíte silnice, železnice, mosty a vodní stavby sečtené podle třídy a typu, s délkou, plochou a objemem, které soubor sám uvádí. Množství, které soubor neuvádí, zůstane prázdné a nikdy se nedopočítá. **Odeslat množství infrastruktury do TakeoffCraftu** uloží soubor `.quantities.json`, který TakeoffCraft otevře jako typovaná množství.
