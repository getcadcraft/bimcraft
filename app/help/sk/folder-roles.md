---
title: Správa priečinka: roly, stavy a odkazy
summary: Každý popis v správe priečinka, čo znamená a ako sa vyberá návrh Začať tu.
keywords: správa priečinka, roly, stav, úplný, neúplný, nečitateľný, prepojený, podklad, štartovací, centrálny, rodina, iba zálohy, začať tu, stav odkazu, súbory knižnice
from: b35bdd10
---

## Stav kópie

Každá kópia modelu, hlavný súbor aj očíslované zálohy, dostane kontrolu hlavičky.

| Popis | Význam |
|---|---|
| **Úplný** | Hlavička a index súboru sa zmestia do súboru |
| **Neúplný** | Súbor je kratší, než uvádza jeho vlastný index: bol odrezaný pri kopírovaní, nahrávaní alebo synchronizácii, alebo je to cloudový súbor, ktorý je stále „iba online“ |
| **Nečitateľný** | Súbor nie je platným zloženým súborom alebo sa nedal prečítať |

V stĺpci **Stav** model ukazuje **Úplný**, žlté „*n* neúplné“, keď je aspoň jedna kópia poškodená, ale iná je v poriadku, alebo červený **Neúplný**, keď nie je v poriadku žiadna kópia.

## Zálohy

Súbory pomenované `Name.0001.rvt`, `Name.0002.rvt` a tak ďalej sú očíslované zálohy `Name.rvt`. Sú zoskupené pod svojím modelom, najnovšie prvé, v **Všetky … kópie**. Karta sa načíta z hlavného súboru, keď je úplný, inak z najnovšej úplnej zálohy („najnovšia úplná“).

## Roly

Zobrazujú sa kurzívou pod názvom modelu.

| Rola | Význam |
|---|---|
| Prepojený iným modelom: podklad | Iný model v priečinku ho prepája, takže je najpravdepodobnejšie podkladom niekoho iného, napríklad modelom konzultanta |
| Štartovací alebo nepomenovaný súbor | Názov ako Blank, Template, Default, Untitled alebo Project1: východiskový bod alebo súbor, ktorý nikdy nebol riadne pomenovaný |
| Centrálny model | Centrálny model so zdieľanou prácou. Práca prebieha v lokálnej kópii, nie tu |
| Rodina (komponent) | Súbor `.rfa` alebo `.rft`: komponent, nie projekt |
| Iba zálohy | Hlavný súbor chýba a zostali už len očíslované zálohy |

## Ako sa vyberá Začať tu

BimCraft uplatňuje úvahy, ktoré by použil skúsený používateľ:

1. Kandidáti sú čitateľné projektové súbory (`.rvt`, `.rte`), ktoré nie sú prepojené iným modelom a nie sú štartovacie.
2. Centrálne modely a modely iba so zálohami sa počítajú, len keď nič lepšie neexistuje.
3. Z kandidátov vyhráva ten, ktorý bol uložený najnovšie.

Okno uvádza svoje dôvody a upozorní, keď je súbor, ktorý vyzerá ako zrejmá voľba, poškodený, keď sú iné modely podkladmi a keď je výber centrálnym modelom. Je to najlepší odhad; overte to s tým, kto na projekte pracoval naposledy.

## Stav odkazu

| Popis | Význam |
|---|---|
| **V tomto priečinku** | Nájdené na uloženej relatívnej ceste alebo na konci uloženej úplnej cesty v priečinku |
| **Nájdený rovnaký názov** | Nie na svojej ceste, ale v priečinku je súbor s rovnakým názvom. Skontrolujte, či je to správny súbor |
| **Súbor knižnice** | Tabuľka keynote alebo kódov zostáv. Tieto prichádzajú s programom na každom počítači |
| **Nie je v tomto priečinku** | Nenájdené nikde v priečinku |

Stĺpec **Nájdené odkazy** v **Modeloch** ukazuje, koľko odkazov modelu sa našlo z tých, ktoré sa v priečinku očakávali (súbory knižnice sa nepočítajú).

## Odložené súbory

| Riadok | Význam |
|---|---|
| Priečinky údržby Revit (nečítajú sa) | Priečinky `*_backup`, `*_log` a `Revit_temp`, plus skryté priečinky a `__MACOSX` |
| Zvyšky zámkov, protokolov a záloh | Súbory `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` a `.slog` |
| Ostatné súbory | Všetko ostatné (prvých 40 je pomenovaných) |
