---
title: Orientace ve stromu modelu
summary: Procházejte model IFC podle projektu, pozemku, budovy, podlaží a prostoru, s prvky seskupenými podle druhu; zaškrtávací políčka zobrazují a skrývají, kliknutí na řádek vybere a dvojklik přiblíží.
keywords: strom modelu, strom, struktura, prostorová struktura, prohlížeč, osnova, navigátor, podlaží, úroveň, podlaha, prostor, místnost, skupina, třída, skrýt, zobrazit, vybrat, přiblížit
from: 69de4ab7
---

## Co uděláte

Uvidíte, jak je model sestaven, a dostanete se k libovolnému prvku bez hledání v 3D: budovu, její podlaží, prostory na každém podlaží a prvky v nich, seskupené podle druhu (stěny, dveře, desky…).

## Postup

1. Otevřete model IFC. {{ui:Strom modelu}} vlevo se rozbalí až k podlažím.
2. Kliknutím na šipku vedle řádku jej otevřete nebo zavřete. Podlaží nejdřív drží své prostory, pak své prvky podle druhu s jejich počtem. Prvek složený z částí, například schodiště, drží své části.
3. Odškrtnutím políčka řádku skryjete vše, co v něm je; zaškrtnutím to zase zobrazíte. Políčko s pomlčkou znamená, že je zobrazena jen část obsahu.
4. Kliknutím na název řádku vyberete to, co představuje: jeden prvek, nebo všechny prvky skupiny, podlaží či prostoru. {{key:Mod}}+klik je přidá k výběru, nebo je z něj odebere.
5. Kliknutím na tlačítko {{ui:i}} vedle podlaží, prostoru nebo budovy zobrazíte jeho vlastní vlastnosti.
6. Dvojklikem na řádek přiblížíte k němu.

## Co byste měli vidět

- Když v 3D pohledu vyberete prvek, strom se rozbalí až k němu a označí jej.
- Skryté prvky jsou přeškrtnuté. Zaškrtávací políčka stromu a {{ui:Zobrazit}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) fungují společně: viz [Skrývání, izolace a průhled prvků](topic:hide-and-isolate).
- Prvky, které model nezařadí do žádného podlaží, jsou v závěrečné skupině **Není v prostorové struktuře**.
- Dlouhá skupina ukazuje 200 řádků najednou; pro zbytek klikněte pod ní na **Zobrazit více**.

## Klávesy

Když je zaměřen název řádku: {{key:Up}} a {{key:Down}} se pohybují, {{key:Right}} otevře, {{key:Left}} zavře nebo přejde nahoru, {{key:Space}} zaškrtne políčko a {{key:Enter}} vybere.

## Časté chyby

- **Políčko podlaží je zaškrtnuto, ale nic se nezobrazuje.** Seznam {{ui:Podlaží}} pod stromem vypíná celá podlaží sám: zaškrtněte je i tam.
- **Řádek nic nevybere.** Některé řádky, například prázdný prostor, nemají prvky, které lze nakreslit; stavový řádek to uvede.

## Dále

- [Mazání, vyjmutí, kopírování a vložení stavebních prvků](topic:edit-elements)
- [Zobrazení a skrytí podlaží, prostorů a hran](topic:storeys-and-spaces)
