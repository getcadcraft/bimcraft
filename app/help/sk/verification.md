---
title: Označte prvky ako skontrolované alebo overené na stavbe
summary: Prvok načítaný z PDF alebo skenu je neoverený, kým ho neskontrolujete. Označte prvky ako skontrolované, alebo ako overené na stavbe (LOD 500) s tým, kto ich zmeral, kedy a ako, a odovzdajte model podľa skutočného vyhotovenia, ktorý hovorí, čo je čo.
keywords: neoverené, overené, skontrolované, overené na stavbe, podľa skutočného vyhotovenia, as-built, lod 500, uzavretie, odovzdanie, zmerané na stavbe, meracia páska, laser, sken, zameranie, existujúca budova, úprava, označiť ako skontrolované, overenie, fáza 7
from: df35d908
---

## Čo urobíte

Sledujte, čo v modeli niekto skutočne pozrel. Prvok má jednu z troch značiek, alebo žiadnu:

- **Neoverené**: program ho rozpoznal z PDF, naskenovaného výkresu, prekresleného výkresu alebo zo skenu mračna bodov. Nikto ho ešte nekontroloval.
- **Skontrolované**: osoba ho porovnala s výkresom, z ktorého pochádza.
- **Overené na stavbe (LOD 500)**: osoba ho zmerala na stavbe. Kto, kedy a ako sa uchováva spolu s ním.
- **Bez značky**: nakreslené osobou. Model o ňom nič netvrdí.

## Kroky

1. Vyberte jeden prvok alebo viac (steny, dvere, okná, miestnosti, ľubovoľný prvok).
2. V {{ui:Vlastnosti}} otvorte {{ui:Overenie}}.
3. Napíšte, kto ho skontroloval alebo zmeral. Dátum je dnešný, pokiaľ ho nezmeníte.
4. Kliknite na {{ui:Označiť ako skontrolované}}. Pri meraní na stavbe zvoľte, ako sa meralo (meracia páska, laserový diaľkomer, sken, zameranie), a kliknite na {{ui:Označiť ako overené na stavbe (LOD 500)}}.
5. {{ui:Označiť ako neoverené}} a {{ui:Odstrániť značku}} vrátia späť. Každé kliknutie je jeden krok, ktorý sa dá vrátiť späť, pre celý výber.

Rýchle označenie výberu: {{ui:Nástroje}} › {{ui:Označiť ako skontrolované}} (napísané: `MARKCHECKED`) označí výber ako skontrolovaný vami, dnes.

## Čo by ste mali vidieť

- V pôdoryse má neoverený prvok prerušovaný rámček a "?"; prvok overený na stavbe má fajku. Zrušte {{ui:Zobraziť overovacie značky v pôdoryse}} v časti {{ui:Audit}}, aby sa skryli.
- {{ui:Tabuľky}} › {{ui:Overenie}} vypíše každý označený prvok s jeho podlažím, stavom, kto, kedy, ako a odkiaľ pochádza.
- Audit vypíše neoverené prvky a počíta prvok overený na stavbe ako LOD 500. Pozri [Audit modelu](topic:audit-the-model).

## Zo skenu

Keď porovnávate sken s modelom, {{ui:Označiť zodpovedajúce prvky ako overené na stavbe}} označí každý prvok, ktorý sken zachytil ako postavený v rámci tolerancie, s metódou "sken" a toleranciou v poznámke. Pozri [Porovnanie skenu s modelom](topic:compare-scan-with-model).

:::warning
Toto porovnanie páruje ohraničujúci kváder každého prvku s bodmi skenu. Nie je to zameranie. Použite ho pre prvky, ktoré ste si aj sami pozreli.
:::

## Model podľa skutočného vyhotovenia a odovzdávací balík

{{ui:Zostaviť odovzdávací balík}} na karte {{ui:Podklady}} vloží model podľa skutočného vyhotovenia do zip súboru, s:

- vyhlásením o projekte, koľko prvkov je overených na stavbe, skontrolovaných, neoverených a bez značky;
- `as-built/verified-elements.csv`: každý prvok a miestnosť s ich stavom, kto, kedy a ako;
- `as-built/as-built-drawings.pdf`: súbor výkresov v jeho súčasnom stave;
- zoznamom zmien výkresov, keď model vydal sady.

Pozri [Podklady a údržba](topic:assets-and-maintenance).

## Ako sa to uchováva v IFC

Každý označený prvok nesie sadu vlastností `CadCraft_Verification`: State, By, On, Method, Source, Note a LevelOfDevelopment (`LOD 500`, kým je overený na stavbe). Sú to obyčajné textové vlastnosti, takže ich ostatné programy vypíšu a Nájsť, Farba podľa vlastnosti a značkové tabuľky ich môžu používať. Vyhlásenie o skutočnom vyhotovení je sada vlastností `CadCraft_AsBuilt` na projekte. Prvok bez tejto sady nebol zmeraný na stavbe.

## Ďalej

- [Steny zo sady pôdorysov](topic:walls-from-plans)
- [Audit modelu](topic:audit-the-model)
