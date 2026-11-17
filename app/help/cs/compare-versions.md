---
title: Porovnání dvou verzí modelu
summary: Otevřete dvě verze téhož modelu IFC a uvidíte, které prvky přibyly, byly odstraněny a změněny, párované podle jejich GlobalId, s CSV všech změn.
keywords: porovnání, rozdíl, rozdíly, verze, revize, změny, změněno, přidáno, odebráno, přesunuto, globalid, guid, co se změnilo
from: cfca6971
---

## Co uděláte

Zjistěte, co se změnilo mezi modelem, který jste měli, a tím, který jste dostali: které prvky jsou nové, které zmizely, které se přesunuly nebo dostaly nové hodnoty vlastností.

## Postup

1. Otevřete novější verzi, pak klikněte na {{ui:Přidat model…}} a vyberte starší. Viz [Zobrazení několika modelů IFC najednou](topic:several-models).
2. V {{ui:Modely}} otevřete {{ui:Porovnat verze}}.
3. Vyberte {{ui:Starší verze}} a {{ui:Novější verze}}.
4. Klikněte na {{ui:Porovnat}}.
5. Kliknutím na prvek v seznamu jej vyberte a zobrazte jeho vlastnosti. Kliknutím na {{ui:Stáhnout CSV}} získáte každou změnu, vlastnost po vlastnosti.
6. Kliknutím na {{ui:Vymazat}} se vrátíte k běžnému zobrazení.

## Co uvidíte

- **Přidané** prvky modře, z novější verze.
- **Odebrané** prvky červeně, ze starší verze.
- **Změněné** prvky okrově, z novější verze; u každého je uvedeno, co se změnilo: vlastnosti, přesun a o kolik, nebo nový tvar.
- Vše, co je stejné, je průhledné.

## Dobré vědět

- Prvky se párují podle jejich GlobalId. Program, který při každém exportu přidělí prvkům nová GlobalId, způsobí, že každý prvek vypadá jako odebraný a znovu přidaný.
- Polohy se porovnávají podle toho, kde modely ve scéně leží. Pokud byla jedna verze záměrně přesunuta, nejdřív je zarovnejte pomocí {{ui:Posunout}} v {{ui:Modely}}.
- GlobalId použité dvakrát v jednom modelu se do porovnání nezahrne. [Kontrola modelu na časté problémy](topic:model-checks) je najde.

## Dále

- [Problémy a soubory BCF](topic:issues-bcf)
- [Sčítání množství podle vlastnosti](topic:quantity-totals)
