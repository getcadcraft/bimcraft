---
title: Kótování mřížky
summary: Zobrazí rozteč sousedních os mřížky a celkovou velikost mřížky na půdorysu každého podlaží; uloží se do IFC a při změně os se přizpůsobí.
keywords: mřížka, kóty mřížky, kóta, rozteč, pole, celková velikost, bubliny, sloupová mřížka, půdorys, list
from: aaea5d08
---

## Co uděláte

Doplníte na půdorysy rozteč mezi osami mřížky a celkovou velikost mřížky za bublinami, aby listy vytvořené z těchto půdorysů nesly kóty. Nejprve potřebujete mřížku: viz [Mřížky a sloupy](topic:grids-and-columns).

## Postup

1. Zobrazte půdorys podlaží a kliknutím na {{ui:Mřížka}} zapněte nástroj mřížky. Zobrazí se řádek voleb mřížky.
2. Zaškrtněte {{ui:Kóty}}. Na půdorysu se vykreslí rozteč mezi sousedními číslovanými osami a mezi sousedními písmennými osami a celková velikost v obou směrech.
3. Vyberte jiné podlaží: stejné kóty se zobrazí i na jeho půdorysu.
4. Přesuňte osu, přejmenujte jednu nebo přidejte jednu. Kóty se přizpůsobí mřížce.
5. Zrušením zaškrtnutí {{ui:Kóty}} je zase odstraníte.

## Poznámky

- Každá změna je jeden krok zpět: {{key:Mod+Z}} ji vrátí.
- Nastavení se uloží do IFC spolu s mřížkou a půdorysy umístěné na listech kóty obsahují.
- Pokud model nemá mřížku, kterou lze změnit (mřížka přišla v souboru z jiného programu a zde ji nelze změnit), stavový řádek hlásí "Žádná mřížka ke změně není."
