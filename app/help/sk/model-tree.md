---
title: Orientácia v strome modelu
summary: Prechádzajte model IFC podľa projektu, pozemku, budovy, podlažia a priestoru, s prvkami zoskupenými podľa druhu; zaškrtávacími políčkami zobrazujete a skrývate, kliknutím na riadok vyberáte, dvojklikom priblížite.
keywords: strom modelu, strom, štruktúra, priestorová štruktúra, prehliadač, osnova, navigátor, podlažie, úroveň, podlaha, priestor, miestnosť, skupina, trieda, skryť, zobraziť, vybrať, výber, priblížiť
from: 69de4ab7
---

## Čo urobíte

Pozrite si, ako je model zložený, a dostanete sa k ľubovoľnému prvku bez hľadania v 3D: budovu, jej podlažia, priestory na každom podlaží a prvky v nich, zoskupené podľa druhu (steny, dvere, dosky …).

## Postup

1. Otvorte model IFC. {{ui:Strom modelu}} vľavo sa rozbalí až po podlažia.
2. Kliknutím na šípku vedľa riadka ho otvoríte alebo zatvoríte. Podlažie najprv obsahuje svoje priestory, potom prvky podľa druhu s ich počtom. Prvok zložený z častí, napríklad schodisko, obsahuje svoje časti.
3. Odškrtnutím políčka riadka skryjete všetko v ňom; zaškrtnutím to zobrazíte znova. Políčko s pomlčkou znamená, že sa zobrazuje iba časť toho, čo v ňom je.
4. Kliknutím na názov riadka vyberiete, čo predstavuje: jeden prvok alebo každý prvok v skupine, podlaží či priestore. {{key:Mod}}+klik ich pridá do výberu alebo ich z neho odstráni.
5. Kliknutím na tlačidlo {{ui:i}} vedľa podlažia, priestoru alebo budovy zobrazíte jeho vlastné vlastnosti.
6. Dvojklikom na riadok sa k nemu priblížite.

## Čo by ste mali vidieť

- Keď v 3D pohľade vyberiete prvok, strom sa rozbalí až k nemu a označí ho.
- Skryté prvky sú prečiarknuté. Políčka stromu a {{ui:Zobraziť}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) spolupracujú: pozri [Skrývanie, izolovanie a priehľad prvkov](topic:hide-and-isolate).
- Prvky, ktoré model neumiestňuje do žiadneho podlažia, sú v skupine na konci, **Nie je v priestorovej štruktúre**.
- Dlhá skupina zobrazuje 200 riadkov naraz; ďalšie zobrazíte kliknutím na **Zobraziť viac** pod ňou.

## Klávesy

Keď je zameraný názov riadka: {{key:Up}} a {{key:Down}} sa pohybujú, {{key:Right}} riadok rozbalí, {{key:Left}} zbalí alebo sa posunie na nadradený riadok, {{key:Space}} zaškrtne políčko, {{key:Enter}} vyberie.

## Časté chyby

- **Políčko podlažia je zaškrtnuté, ale nič sa nezobrazuje.** Zoznam {{ui:Podlažia}} pod stromom vypína celé podlažia sám od seba: zaškrtnite ho aj tam.
- **Riadok nič nevyberie.** Niektoré riadky, napríklad prázdny priestor, nemajú prvky, ktoré sa dajú nakresliť; stavový riadok to povie.

## Ďalej

- [Zmazanie, vystrihnutie, kopírovanie a prilepenie prvkov budovy](topic:edit-elements)
- [Zobrazenie a skrytie podlaží, priestorov a hrán](topic:storeys-and-spaces)
