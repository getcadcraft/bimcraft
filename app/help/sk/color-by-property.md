---
title: Zafarbiť prvky podľa vlastnosti
summary: Zafarbite každý prvok podľa hodnoty jednej vlastnosti, napríklad jeho triedy, typu, podlažia, materiálu, požiarnej odolnosti alebo ceny, prečítajte si legendu, kliknutím na hodnotu zobrazte iba tieto prvky a farby uložte ako schému na použitie v iných modeloch.
keywords: farba, zafarbiť, zafarbenie podľa, legenda, inteligentný pohľad, vzhľad, vlastnosť, typ, materiál, požiarna odolnosť, filter, izolovať, motív, hodnoty, schéma, schéma farieb, uložiť farby, opätovné použitie, tím, json, vzorka
from: f081d343
---

## Čo budete robiť

Na prvý pohľad uvidíte, ako je vlastnosť rozložená v modeli: ktoré steny sú vonkajšie, ktoré materiály sa kde používajú, ktoré prvky nemajú požiarnu odolnosť. Každý prvok dostane farbu svojej hodnoty a legenda hovorí, čo každá farba znamená a koľko prvkov ju má.

## Postup

1. Otvorte model IFC.
2. Kliknite na kartu {{ui:Farba}} vpravo.
3. Vyberte vlastnosť v zozname. Prvé patria každému prvku ({{ui:Trieda}}, {{ui:Typ}}, {{ui:Podlažie}}, {{ui:Materiál}}, {{ui:Názov}}…); ostatné pochádzajú zo sád vlastností a sád množstiev modelu, pod názvom sady. Číslo za každou je počet prvkov, ktoré ju majú.
4. Prečítajte si legendu: farbu, hodnotu a počet prvkov, ktoré ju majú.
5. Kliknite na hodnotu, aby sa zobrazili iba tieto prvky. Podržte {{key:Mod}} a kliknutím pridajte ďalšie hodnoty. Stlačte {{key:Shift+H}}, aby sa znova zobrazilo všetko.
6. Kliknite na {{ui:Vypnuté}}, aby ste sa vrátili k vlastným farbám modelu.

## Čo by ste mali vidieť

- Až sedem hodnôt dostane vlastnú farbu, najčastejšia hodnota prvá. Ďalšie hodnoty zdieľajú jednu sivú a sú uvedené ako **ostatné hodnoty**.
- Číslo s mnohými rôznymi hodnotami sa rozdelí na šesť rovnakých intervalov, od svetlej (nízke hodnoty) po tmavú (vysoké).
- Prvky bez danej vlastnosti sú bledosivé a uvedené ako **Bez hodnoty**, aby farebné prvky vynikli.
- Farby sa menia s priestormi Papier a Model a zostávajú, keď upravujete model.
- Vlastnosť typu platí pre každý prvok daného typu; keď má prvok vlastnú hodnotu tej istej vlastnosti, jeho vlastná hodnota má prednosť.

## Zmena farieb a uloženie ako schémy

- Kliknite na vzorku farby hodnoty v legende, aby ste zvolili inú farbu. Model sa hneď prekreslí.
- {{ui:Uložiť schému}} stiahne farby ako malý súbor `.json` pomenovaný podľa vlastnosti, napríklad `Class colors.json`.
- Na inom modeli alebo na počítači člena tímu kliknite na {{ui:Otvoriť schému…}} a vyberte tento súbor. Každá hodnota v schéme dostane svoju farbu, takže rovnaká požiarna odolnosť alebo systém má rovnakú farbu v každom modeli.
- Hodnota, ktorú schéma nemá, je zafarbená na sivo a uvedená ako "nie je v schéme"; hodnoty zo schémy, ktoré tento model nemá, zostávajú uvedené s 0, aby ste videli celú schému.
- Schéma uchováva svoje farby v oboch motívoch. Výber vlastnosti v zozname začína znova od automatických farieb.

## Časté chyby

- **"Tento model nemá … hodnoty."** Schéma bola uložená pre vlastnosť, ktorú tento model nemá (napríklad iný názov sady vlastností). Otvorte schému vytvorenú pre tento druh modelu alebo vyberte vlastnosť v zozname.

- **Vlastnosť chýba v zozname.** Žiadny prvok s tvarom v modeli ju nemá. Vlastnosti samotných podlaží a priestorov sa v zozname nezobrazujú.

- **Všetko má rovnakú farbu.** Každý prvok má rovnakú hodnotu, alebo žiadnu: pozrite sa na počty v legende.

## Ďalej

- [Skryť, izolovať a zobraziť priehľadne](topic:hide-and-isolate)
- [Orientujte sa v strome modelu](topic:model-tree)
