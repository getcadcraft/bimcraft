---
title: Porovnání skenu s modelem a harmonogramem 4D
summary: Posuďte každý prvek modelu proti otevřenému oblaku bodů (postaveno, zčásti, chybí, nedosaženo), zobrazte procento dokončení a model podle něj obarvěte; s načteným harmonogramem 4D vypište, co je za plánem nebo před ním v daný den 4D.
keywords: sken, oblak bodů, postup, procento dokončení, postaveno, chybí, za harmonogramem, před harmonogramem, 4D, postup na staveništi, odchylka, skutečné provedení, laserový sken, dron, porovnání
from: 6fdc9003
---

Otevřete IFC, vedle něj otevřete oblak bodů (viz [Oblaky bodů](topic:point-clouds)) a umístěte jej na model. Sekce {{ui:Porovnat sken s modelem}} se objeví v pravém panelu, dokud je oblak otevřen.

## Co to dělá

Stiskněte {{ui:Porovnat}}. Každý prvek modelu se posuzuje podle svého povrchu, protože to je to, co skener vidí. Šest ploch jeho kvádru se rozdělí na buňky asi 20 cm; buňka se počítá, když bod skenu leží ve vaší {{ui:Toleranci}} (zpočátku 50 mm) od plochy. Počítá se nejlepší velká plocha, takže stěna naskenovaná z jedné strany není penalizována za svou druhou stranu.

- **Postaveno**: vidí se alespoň 40 % povrchu.
- **Zčásti**: 10 % až 40 %.
- **Chybí**: méně než to, ale sken prvek zasáhl (body do 1.5 m od něj).
- **Nedosaženo**: sken tam nikdy nebyl, takže o něm nic není řečeno.

U postavených a zčásti postavených prvků také uvádí průměrnou odchylku bodů skenu od povrchu modelu a říká, zda je prvek na místě (v toleranci), blízko (do trojnásobku) nebo mimo (dál). Vidí jen odchylky až do pětinásobku tolerance: prvek postavený dál od svého místa, než to, se počítá jako chybějící.

Souhrn uvádí procento postavených mezi prvky, které sken zasáhne, podle počtu i podle objemu. Zčásti postavené prvky se počítají zvlášť a nepřičítají se k postaveným.

## Oproti harmonogramu 4D

Když je načten harmonogram 4D (viz [Harmonogram 4D](topic:4d-schedule)), výsledek také používá den nastavený na posuvníku 4D: prvky, které měly být hotové do tohoto dne a které sken nezobrazuje jako postavené, jsou **za harmonogramem**; prvky, které ještě neměly být hotové a jsou postavené, jsou **před harmonogramem**. Prvky za harmonogramem jsou uvedeny v {{ui:Problémy}} a tabulku lze na ně filtrovat. Bez harmonogramu se o zpoždění ani předstihu nic neuvádí.

## Tabulka a model

Kliknutím na řádek vyberete prvek. {{ui:Obarvit model}} obarví prvky zeleně (postaveno), oranžově (zčásti), červeně (chybí) nebo šedě (nedosaženo); {{ui:Vlastní barvy}} je vrátí zpět. {{ui:Uložit CSV}} zapíše tabulku. {{ui:Označit odpovídající prvky jako ověřené na místě}} označí každý prvek, který je vidět jako postavený a v toleranci, jako ověřený na místě (LOD 500, metoda sken), jedním krokem, který lze vrátit zpět. Viz [Označení prvků jako zkontrolovaných nebo ověřených na místě](topic:verification).

:::warning
Porovnává se kvádr každého prvku s body skenu v toleranci. **Nejde o zaměření, výkaz výměr ani podklad pro platbu.** Prvek skrytý za naskenovaným (stěna za obkladem, deska pod podlahovou krytinou) sdílí svůj povrch a může být počítán jako postavený; zakřivený nebo šikmý prvek má kvádr větší než své těleso a může být počítán jako zčásti postavený nebo chybějící. Než podle seznamu jednáte, podívejte se na něj. Připomínky k povolení a poznámky o postupu do toho nespadají: zůstávají ve sloupcích, ve kterých si je ponecháte.
:::

Asistent může spustit totéž porovnání nástrojem {{ui:Porovnat sken s modelem}}; nic v modelu nemění.
