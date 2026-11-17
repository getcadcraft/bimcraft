---
title: Vtelený uhlík a náklady v harmonograme
summary: Sčítajte vtelený uhlík modelu z otvorenej, upraviteľnej tabuľky faktorov a rozložte ceny do 4D harmonogramu na krivku nákladov a peňažných tokov. Oboje vychádza z hodnôt, ktoré zadáte alebo importujete.
keywords: vtelený uhlík, uhlík, embodied carbon, co2, kgco2e, emisie, tabuľka faktorov, epd, 5d, náklady, peňažný tok, s-krivka, náklady harmonogramu, ceny, ceny výkazu výmer
from: 83e82840
---

## Vtelený uhlík

Otvorte panel **Uhlík**. Množstvo každého prvku (objem, plocha alebo dĺžka) sa vynásobí faktorom z tabuľky podľa modulu životného cyklu: fáza výroby je povinná, doprava a odpad sú voliteľné. Súčty sa zobrazujú podľa materiálu, triedy a podlažia a na meter štvorcový podlahovej plochy.

**Tabuľka faktorov patrí vám.** Riadky, ktoré prichádzajú s BimCraft, sú všeobecné štartovacie hodnoty správneho rádu. Nepochádzajú z databázy, sú označené ako neoverené a treba ich nahradiť zdrojom, ktorý používate (EPD, národná databáza alebo údaje vašej firmy). Riadky upravte v paneli alebo tabuľku importujte a exportujte ako CSV alebo JSON. Riadky, ktoré pridáte, nahradia štartovací riadok s rovnakým identifikátorom. Tabuľka sa uloží do modelu.

Prvky bez zhody alebo bez množstva sa uvedú ako Problémy a nepočítajú sa ako nula.

## Náklady v 4D harmonograme

Otvorte panel **Náklady** vedľa 4D harmonogramu. Zadajte mu ceny (napíšte ich, importujte CSV alebo JSON alebo preneste riadky z TakeoffCraft), priraďte každú cenu materiálom modelu pomocou kľúčových slov a program ocení prvky každej úlohy. Náklady úlohy sa rozložia na dni od začiatku po koniec (rovnomerne alebo so zaťažením na začiatku či na konci) a panel zobrazí kumulatívnu krivku peňažných tokov po dňoch, týždňoch alebo mesiacoch, s nákladmi podľa fázy a balíka a s tým, čo je naplánované oproti tomu, čo je postavené k danému dátumu. Výstup je CSV. Kým nezadáte ceny, nič sa neoceňuje; žiadne ceny nie sú súčasťou dodávky.

## Mena

Tabuľka cien môže uviesť, v akej mene sú jej ceny (tri písmená, napríklad USD alebo EUR). Panel 5D na to má políčko, uloží sa do súboru spolu s cenami a exporty JSON ju obsahujú. Tabuľka vytvorená pred touto možnosťou alebo tabuľka, v ktorej ste políčko nechali prázdne, nemá menu: jej náklady sa zobrazujú v USD, predvolenou menou aplikácie, a panel aj priebežné súčty to uvádzajú. Medzi menami sa nič neprepočítava.
