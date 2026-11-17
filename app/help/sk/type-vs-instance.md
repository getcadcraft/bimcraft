---
title: Zmena vlastnosti typu pre každý prvok daného typu
summary: Odlíšte vlastnosti typu od vlastností inštancie, zmeňte hodnotu na type tak, aby ju každý prvok nasledoval, a overte, že vlastná úprava jedného prvku zostane jeho vlastnou.
keywords: typ, inštancia, vlastnosti typu, typ rodiny, zdieľané, kópia pri zápise, všetky prvky, hromadná úprava, výrobca, model
from: bffd8789
---

## Čo urobíte

Nastavte výrobcu typu dverí tak, aby ho každé dvere tohto typu zobrazovali, a potom jedným dverám nastavte vlastnú požiarnu odolnosť bez zásahu do ostatných. Ukazuje sa rozdiel medzi vlastnosťami typu a vlastnosťami inštancie v BimCraftu.

## Typ alebo inštancia?

- **Inštancia** patrí jednému prvku: jeho označenie, jeho značka, jeho miestnosť, jeho vlastná požiarna odolnosť.
- **Typ** patrí typu, ktorý zdieľa mnoho prvkov: výrobca, model, šírka typu dverí.

V paneli {{ui:Vlastnosti}} majú sady, ktoré pochádzajú z typu, za názvom " (type)" a riadok "Vlastnosť typu: zmena tu sa uplatní na každý prvok tohto typu." Každá iná sada patrí samotnému prvku. **Typ** v prvom bloku ukazuje názov typu.

## Postup: zmena typu

1. Otvorte model IFC a kliknite na dvere.
2. Poznačte si ich **Typ** v prvom bloku panela {{ui:Vlastnosti}}, napríklad "Single-Flush 900 x 2100".
3. Prejdite na sadu, ktorej názov končí na "(type)".
4. Kliknite na hodnotu, ktorú chcete zmeniť, napríklad **Výrobca**.
5. Napíšte novú hodnotu a stlačte {{key:Enter}}.
6. Pozrite sa na zoznam {{ui:Zmeny}}: položka končí na "(type)".
7. Kliknite na iné dvere toho istého typu.
8. Skontrolujte rovnakú hodnotu: ukazuje aj novú hodnotu.

## Postup: zmena iba jedného prvku

1. Kliknite na jedny dvere.
2. Otvorte sadu bez "(type)" v názve, napríklad `Pset_DoorCommon`.
3. Kliknite na hodnotu, napríklad **FireRating**, napíšte novú hodnotu a stlačte {{key:Enter}}.
4. Kliknite na dvere vedľa, rovnakého typu.
5. Skontrolujte rovnakú hodnotu: stále ukazuje starú hodnotu.

Aj keby exportér zdieľal túto sadu vlastností medzi oboma dverami, BimCraft dal prvým dverám vlastnú kópiu skôr, ako ju zmenil. Pozri [Prečo vaša úprava mení iba jeden prvok](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Uloženie

1. Kliknite na {{ui:Uložiť ako IFC}} alebo stlačte {{key:Mod+S}}.
2. Otvorte uloženú kópiu v BimCraftu alebo v ľubovoľnom prehliadači IFC a skontrolujte obe zmeny.

## Časté chyby

- **Nie každý model má typy.** Niektoré exportéry nezapisujú objekty typov alebo všetko zapisujú na inštancie. Potom neexistujú sady "(type)" a každý prvok sa musí zmeniť samostatne.
- **Rovnaká hodnota je v sade typu aj v sade inštancie.** Niektoré exportéry zapisujú parameter na oboch miestach. Iné programy môžu čítať ktorúkoľvek z nich; ak chcete, aby sa zhodovali, zmeňte obe.
- **Očakávanie, že vyberiete „všetky dvere tohto typu“ a upravíte ich spoločne.** V tejto verzii nie je viacnásobný výber. Vlastnosť typu je spôsob, ako zmeniť naraz veľa prvkov.
