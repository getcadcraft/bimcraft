---
title: Hľadať prvky podľa triedy, názvu alebo vlastnosti
summary: Nájdite každý prvok, ktorý zodpovedá jednému alebo viacerým pravidlám — jeho triede, názvu, typu, podlažiu, materiálu alebo ľubovoľnej hodnote vlastnosti — vyberte ich všetky a pravidlá uchovajte ako pomenovanú množinu vyhľadávania.
keywords: hľadať, vyhľadávanie, filter, dotaz, pravidlo, množina vyhľadávania, množina výberu, uložené vyhľadávanie, vlastnosť, hodnota, trieda, materiál, vybrať všetko
from: 3d293bc2
---

## Čo urobíte

Vyberte naraz všetky prvky jedného druhu alebo s jednou hodnotou: každé dvere, každú stenu na 2. podlaží, každý prvok s požiarnou odolnosťou EI60, každú stenu, ktorá stojí viac než nastavenú sumu.

## Postup

1. Otvorte model IFC.
2. V ľavom paneli otvorte {{ui:Hľadať}}.
3. V prvom pravidle vyberte vlastnosť (najskôr vlastné vlastnosti prvku, ako sú {{ui:Trieda}} a {{ui:Podlažie}}, potom sady vlastností modelu), spôsob porovnania a hodnotu. Pole hodnoty navrhuje hodnoty, ktoré model obsahuje.
4. Ak výber chcete spresniť, kliknite na {{ui:Pridať pravidlo}}. Vyberte {{ui:Každé pravidlo}}, ak majú platiť všetky, alebo {{ui:Ktorékoľvek pravidlo}}, ak stačí jedno z nich.
5. Kliknite na {{ui:Hľadať}} alebo stlačte {{key:Enter}} v poli hodnoty. Zhodujúce sa prvky sa vyberú.
6. Ak chcete pravidlá uchovať, kliknite na {{ui:Uložiť ako množinu}}, zadajte názov a kliknite znova. Neskôr stačí kliknúť na názov množiny a hľadať s ňou.

## Čo by ste mali vidieť

- Zhody sú vybraté v 3D zobrazení a v strome modelu a {{ui:Vlastnosti}} uvádzajú, koľko ich je podľa triedy. Stlačte {{key:I}}, aby sa zobrazili iba ony, a {{key:H}}, aby sa skryli.
- Slová sa zhodujú bez ohľadu na veľké a malé písmená. Čísla sa porovnávajú ako čísla: "je väčšie ako 1000" znamená hodnotu, nie text.
- {{ui:má hodnotu}} a {{ui:nemá hodnotu}} nepotrebujú hodnotu; nájdu to, čo je vyplnené, alebo to, čo chýba.
- Uložené množiny zostávajú v tomto prehliadači pre každý model, ktorý otvoríte.

## Časté chyby

- **Nič sa nenašlo.** Pravidlo potrebuje hodnotu, ktorú môže zhodnoť: pozrite si návrhy v poli hodnoty.
- **Vlastnosť chýba v zozname.** Žiadny prvok s tvarom v tomto modeli ju nemá.

## Ďalej

- [Sfarbiť prvky podľa vlastnosti](topic:color-by-property)
- [Skryť, izolovať a zobraziť prvky priehľadne](topic:hide-and-isolate)
