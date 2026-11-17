---
title: Procházení lidí budovou
summary: Evakuace nebo běžný příchod lidí přes vaše místnosti, dveře a schody, s frontami tam, kde se budova zužuje, nejdelší cestou k východu z každé místnosti a zjištěními v Problémech. Hrubý model davu pro projektová rozhodnutí, ne osvědčení o požární bezpečnosti.
keywords: lidé, evakuace, únik, východ, únikový východ, délka cesty, fronta, dav, tok, šířka dveří, schody, příchody, úzké místo, simulace, osoby, chodec, co kdyby, zablokované dveře
from: 84aa8920
---

Sekce {{ui:Lidé v budově}} levého panelu prochází lidmi místnostmi, dveřmi a schody otevřeného IFC modelu. Do modelu se nic nemění a nic se nenahrává.

:::warning
Toto je **pomůcka pro návrh, ne osvědčení o požární bezpečnosti**. Nezná oheň, kouř, paniku, rozdíly v pohyblivosti ani to, co po vás vyžaduje předpis. Hranice jsou na vás: nejdelší cesta k východu a dostupný čas jsou čísla, která zadáte, a žádné z nich se nepředpokládá.
:::

## Spuštění

1. Otevřete model se zavřenými místnostmi a dveřmi. Dveře, u nichž je místnost jen na jedné straně, jsou východem; dveře mezi dvěma místnostmi je spojují; schodiště spojuje místnosti na svých koncích.
2. Zvolte **Evakuace** (každý jde k východu), **Příchody** (každý přijde a jde do místnosti) nebo **Výměna** (lidé v místnostech odcházejí, zatímco přichází stejný počet), a plochu podlahy na osobu. Místnosti pojmenované jako chodba, schodiště, vstupní hala nebo toaleta nikoho nedrží.
3. Klikněte na {{ui:Spustit}}. Dostanete čas, kdy odchází poslední osoba (a kdy odejde polovina a devět z deseti), frontu u každých dveří a schodiště, místnost s nejdelší cestou a půdorys, který přehrává průběh.

## Co kdyby

Zaškrtněte {{ui:Zavřeno}} u dveří v tabulce a spusťte znovu: lidé najdou jinou cestu, nebo se místnosti bez východu vypíšou jako chyby. Dveře dvakrát širší vyprázdní místnost mnohem dříve; tabulka ukazuje, kde jsou fronty.

## Jak to funguje

Každá místnost je mřížka, takže lidé obcházejí rohy, ne zdi. Rychlost klesá, jak se místnost plní (S = 1.4 (1 − 0.266 D) m/s, D v osobách na m²). Dveře propustí 1.3 osoby za sekundu na každý metr své šířky, minus 150 mm z každé strany; schodiště 1.0 a pomalejší chůze. Lidé čekají ve frontě podle příchodu. Číslo běhu zopakuje přesně stejný průběh.

Asistent může spustit totéž: požádejte o evakuaci nebo o nejdelší cestu k východu z každé místnosti.

## Lidé v jednotlivých místnostech

Otevřete {{ui:Lidé v jednotlivých místnostech}}, abyste napsali číslo pro libovolnou místnost. Prázdné pole použije hodnotu plochy (zobrazenou šedě); 0 místnost vyprázdní. Vaše čísla se použijí pro běh a uchovávají se v tomto prohlížeči.

## Protisměrný tok u dveří

Při **Výměně** se lidé odcházející a přicházející potkávají u stejných dveří. Když dveře propustí člověka opačným směrem bezprostředně za posledním, udrží část své propustnosti (zde 0.8; předpoklad, protože publikované hodnoty se liší), a tabulka počítá změny směru. Dveře, které často mění směr, jsou v Problémech uvedeny jako poznámka.

## Schody a podesty

Každý podest schodiště stojí chodce jednu sekundu na otočení (předpoklad). Přímé schodiště žádný nemá; schodiště L nebo U jeden. Propustnost schodiště stále vychází ze šířky jeho ramene.

## Ve 3D pohledu

Zaškrtněte {{ui:Zobrazit lidi ve 3D pohledu}} a chodci se objeví jako postavy v modelu, obarvené podle toho, co dělají, a pohybují se, když přehrajete průběh. Do modelu se nic nepřidává.
