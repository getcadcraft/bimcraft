---
title: Práca s hladinami a listami
summary: Zapínajte a vypínajte hladiny výkresu, prepínajte medzi priestorom modelu a listami a pochopte, ako listy zobrazujú model cez svoje výrezy.
keywords: hladiny, zapnúť hladinu, vypnúť hladinu, zmraziť, rozmraziť, listy, rozloženia, priestor na papieri, karty, výrezy, správca hladín, la
from: a9a16b53
---

## Čo budete robiť

Vyčistite zobrazenie zaneprázdneného výkresu vypnutím hladín a potom si jednotlivé listy výkresu prezrite.

## Postup: hladiny

1. Otvorte výkres DWG alebo DXF.
2. Nájdite zoznam {{ui:Layers}} vľavo. Každá hladina má políčko, farebnú vzorku a svoj názov.
3. Odškrtnite hladinu, aby sa skrylo všetko na nej.
4. Kliknite na {{ui:All off}}, aby ste skryli všetky hladiny.
5. Zaškrtnite len hladiny, ktoré chcete vidieť.
6. Kliknite na {{ui:All on}}, aby sa všetko znova zobrazilo.

## Čo by ste mali vidieť

Hladiny zmiznú a znova sa objavia naraz, na {{ui:Model}} aj na každom liste. Hladiny, ktoré sú vo výkrese samotnom vypnuté alebo zmrazené, začínajú odškrtnuté.

## Postup: listy

1. Pozrite sa na riadok kariet nad výkresom: {{ui:Model}}, potom každý list podľa názvu.
2. Kliknite na kartu listu.
3. Pozrite sa na list: papier leží na tmavšom pracovnom stole a každý výrez zobrazuje svoju časť modelu v jeho mierke a uhle.
4. Priblížte výrez, aby ste čítali detail. Priblížujete list, nie výrez, takže sa celý list hýbe spolu.
5. Kliknite na {{ui:Fit}} alebo dvakrát kliknite, aby ste znova videli celý list.

## Ako tu fungujú listy

List (rozloženie alebo priestor na papieri) obsahuje popisové pole a výrezy, ktoré sa dívajú do priestoru modelu. BimCraft kreslí každý výrez orezaný na jeho okraj, v jeho mierke a natočení, a skrýva hladiny zmrazené v tomto výreze. Prvý výrez každého listu je samotný list a nekreslí sa dvakrát.

## Časté chyby

- **Očakávanie, že zmeny hladín sa uložia.** Nastavenia hladín ovplyvňujú len zobrazenie, kým neotvoríte iný súbor.
- **Očakávanie ovládania hladín pre každý výrez.** Zoznam {{ui:Layers}} prepína hladinu všade. Hladiny, ktoré výkres zmrazil v jednom výreze, tam zostanú zmrazené.
- **Hľadanie filtra hladín alebo stavov hladín.** Zatiaľ nie je hotové. Zoznam je v poradí výkresu.
- **Očakávanie práce vo vnútri výrezu.** Nie je tam čo aktivovať: BimCraft zobrazuje len list. Na priame zobrazenie priestoru modelu použite {{ui:Model}}.
