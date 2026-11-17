---
title: Problémy, revízie a zmenový záznam výkresov
summary: Zaznamenajte každú sadu listov, ktorú odovzdávate, pozrite si, čo sa od nej zmenilo na každom liste a prvku, a uchovávajte pokyny na stavbe, dielenské výkresy a prepojené modely pri vydaní, ku ktorému patria.
keywords: problém, vydaná sada, odovzdaná sada, odovzdanie, revízia, revízie, čo sa zmenilo, od vydania, zmenový záznam, zmenový záznam výkresov, register výkresov, sprievodka, pokyn na stavbe, dielenský výkres, prepojený model, výberové konanie, realizácia, snímka, porovnať
from: 4c732832
---

## Čo urobíte

Zaznamenáte vydanie: ktoré listy odišli, kedy, na aký účel, každý s jeho revíziou. Neskôr sa opýtate, čo sa zmenilo od tohto vydania. Pokyny na stavbe a vrátené dielenské výkresy si uchováte pri vydaní.

## Postup

1. V ľavom paneli otvorte **Problémy a revízie**.
2. Vyberte **Zaznamenať vydanie**. Revízia sa navrhne (A, potom B; číslovaná, napríklad P1, sa počíta ďalej). Vyberte, na aký účel sa vydáva, komu sa odosiela, dátum a listy. Keď je nastavená fáza projektu, účel ju nasleduje. Keď má balík povolenia zoznam podporných dokumentov, listy prepojené s týmto zoznamom sa zaškrtnú za vás.
3. Nechajte zaškrtnuté **Uložiť aj kópiu modelu ako vydaného**, aby sa model zachoval presne tak, ako odišiel. Kópia sa stiahne; jej názov, veľkosť a SHA-256 sa uchovajú pri vydaní.
4. Vyberte **Zaznamenať toto vydanie**. List, ktorý sa zmenil od posledného vydania, dostane novú revíziu. List, ktorý sa nezmenil, si ponechá svoju revíziu. Popisové pole každého listu zobrazuje jeho revíziu.
5. Ak chcete vidieť, čo sa zmenilo, vyberte **Zmeny od** vedľa vydania. Každý list je označený ako Rovnaké alebo Zmenené, s prvkami na ňom pridanými, zmenenými a odstránenými. Kliknutím na počet vyberiete tieto prvky.
6. Vyberte **Pridať záznam** pre pokyn na stavbe, dielenský výkres, sadu značiek, prepojený model alebo poznámku. Vyberte vydanie, ku ktorému patrí. Súbor, ktorý zvolíte, sa zaznamená podľa názvu, veľkosti a SHA-256; súbor zostáva tam, kde je.
7. **Zmenový záznam výkresov** zobrazuje jeden riadok pre každý list a jeden stĺpec pre každé vydanie. **Stiahnuť zmenový záznam (CSV)** ho uloží spolu s vydaniami a záznamami.
8. Uložiť históriu vydaní zapíše súbor `.issues.json`. MarkupCraft, TakeoffCraft a DetailCraft ho čítajú pomocou Načítať históriu vydaní.

## Dobré vedieť

- História sa uchováva vnútri súboru IFC (vlastnosť `CadCraft_Issues` v projekte). Iné programy ju ignorujú.
- List sa považuje za zmenený, keď sa zmenilo jeho vlastné nastavenie, alebo keď sa zmenil prvok, ktorý zobrazuje: pôdorys zobrazuje svoju úroveň, pohľad alebo rez zobrazuje celý model, tabuľka dverí alebo okien zobrazuje svoje dvere alebo okná.
- Prvok sa považuje za zmenený, keď sa zmenila vlastnosť, jeho poloha, veľkosť alebo tvar.
- Ak chcete presne vidieť, ktorá vlastnosť sa zmenila, otvorte uloženú kópiu vydaného modelu pomocou **Porovnať verzie**.
- Odstránenie vydania ponechá jeho záznamy, ale bez vydania. Každý krok je jedným krokom Späť.
- Model s viac než 60 000 prvkami neuchováva záznam každého prvku pri vydaní. Listy sa aj tak porovnávajú.

## Ešte nie je hotové

- Listy sa spolu s vydaním neukladajú ako PDF.
- Oblak revízie sa nekreslí na vlastných listoch BimCraft. Oblaky zaznamenajte v MarkupCraft ku vydaniu.
