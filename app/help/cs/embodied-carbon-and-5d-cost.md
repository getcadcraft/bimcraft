---
title: Vtělené uhlíkové emise a náklady v harmonogramu
summary: Sečtěte vtělené uhlíkové emise modelu z otevřené a upravitelné tabulky faktorů a rozložte ceny přes harmonogram 4D do křivky nákladů a peněžních toků. Obojí vychází z hodnot, které zadáte nebo importujete.
keywords: vtělené uhlíkové emise, uhlík, carbon, co2, kgCO2e, emise, tabulka faktorů, epd, 5d, náklady, peněžní tok, křivka S, náklady harmonogramu, ceny, ceny z výkazu výměr
from: 83e82840
---

## Vtělené uhlíkové emise

Otevřete panel **Uhlík**. Množství každého prvku (objem, plocha nebo délka) se násobí faktorem z tabulky podle modulu životního cyklu: fáze výroby je povinná, doprava a odpad jsou volitelné. Součty jdou podle materiálu, třídy a podlaží a na metr čtvereční podlahy.

**Tabulka faktorů je vaše.** Řádky, které přicházejí s BimCraftem, jsou obecné startovací hodnoty správného řádu. Nepocházejí z databáze, jsou označeny jako neověřené a je třeba je nahradit zdrojem, který používáte (EPD, národní databází nebo údaji vaší firmy). Řádky upravte v panelu, nebo tabulku importujte či exportujte jako CSV nebo JSON. Řádky, které přidáte, přepíšou startovací řádek se stejným id. Tabulka se ukládá v modelu.

Prvky bez shody nebo bez množství jsou uvedeny jako Problémy a nepočítají se jako nula.

## Náklady v harmonogramu 4D

Otevřete panel **Náklady** vedle harmonogramu 4D. Zadejte ceny (napište je, importujte CSV nebo JSON, nebo přineste řádky z TakeoffCraftu), přiřaďte každou cenu materiálům modelu pomocí klíčových slov a panel ocení prvky každé úlohy. Náklad úlohy se rozloží na dny od začátku do konce (rovnoměrně, nebo s čelním či zadním zatížením) a panel vykreslí kumulativní křivku peněžních toků po dnech, týdnech nebo měsících, s náklady podle etapy a balíku prací a s tím, co je plánováno oproti tomu, co je k danému datu postaveno. Výstup do CSV. Nic se neoceňuje, dokud nezadáte ceny: žádné nejsou dodávány.

## Měna

Cenová tabulka může uvést, v jaké měně jsou její ceny (tři písmena, například USD nebo EUR). Panel 5D pro ni má políčko, uloží se do souboru spolu s cenami a exporty do JSON ji obsahují. Tabulka vytvořená před zavedením této možnosti, nebo tabulka, kde jste pole nechali prázdné, nemá měnu: její náklady se zobrazují jako USD, výchozí měna prostředí, a panel i průběžné součty to uvádějí. Mezi měnami se nic nepřepočítává.
