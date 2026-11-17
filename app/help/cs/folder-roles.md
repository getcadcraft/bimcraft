---
title: Zpráva o složce: role, stavy a odkazy
summary: Každý štítek ve zprávě o složce, co znamená a jak se volí návrh Začněte zde.
keywords: zpráva o složce, role, stav, úplný, neúplný, nečitelný, propojený, podklad, výchozí soubor, centrální, rodina, pouze zálohy, začněte zde, stav odkazu
from: b35bdd10
---

## Stav kopie

Každá kopie modelu, hlavní soubor i očíslované zálohy, dostane kontrolu hlavičky.

| Štítek | Význam |
|---|---|
| **Úplný** | Hlavička a rejstřík souboru se vejdou do souboru |
| **Neúplný** | Soubor je kratší, než říká jeho vlastní rejstřík: byl přerušen při kopírování, nahrávání nebo synchronizaci, nebo je to cloudový soubor, který je stále „pouze online“ |
| **Nečitelný** | Soubor není platný složený soubor, nebo jej nelze přečíst |

Ve sloupci **Stav** model ukazuje **Úplný**, oranžově „*n* neúplných“, když je alespoň jedna kopie vadná, ale jiná je v pořádku, nebo červeně **Neúplný**, když žádná kopie není v pořádku.

## Zálohy

Soubory pojmenované `Název.0001.rvt`, `Název.0002.rvt` a tak dále jsou očíslované zálohy `Název.rvt`. Jsou seskupeny pod svým modelem, nejnovější první, v **Všechny kopie …**. Karta se čte z hlavního souboru, je-li úplný, jinak z nejnovější úplné zálohy („nejnovější úplná“).

## Role

Zobrazeno kurzívou pod názvem modelu.

| Role | Význam |
|---|---|
| Propojen *jiným modelem*: podklad | Jiný model ve složce na něj odkazuje, takže je pravděpodobně cizím podkladem, například modelem konzultanta |
| Výchozí nebo nepojmenovaný soubor | Název jako Blank, Template, Default, Untitled nebo Project1: výchozí bod, nebo soubor, který nikdy nebyl řádně pojmenován |
| Centrální model | Centrální model sdílené práce. Práce probíhá v místní kopii, ne tady |
| Rodina (díl) | Soubor `.rfa` nebo `.rft`: komponenta, ne projekt |
| Pouze zálohy | Hlavní soubor zmizel a zůstaly jen očíslované zálohy |

## Jak se volí Začněte zde

BimCraft uplatňuje úvahu, jakou by použil zkušený uživatel:

1. Kandidáti jsou čitelné projektové soubory (`.rvt`, `.rte`), které nejsou propojeny jiným modelem a nejsou výchozí.
2. Centrální modely a modely pouze se zálohami se počítají jen tehdy, když nic lepšího neexistuje.
3. Z kandidátů vyhrává ten, který byl uložen naposledy.

Okno uvádí své důvody a varuje, když soubor, který vypadá jako zjevná volba, je poškozen, když jsou jiné modely podklady, a když je volbou centrální model. Jde o odhad; ověřte u toho, kdo na projektu naposledy pracoval.

## Stav odkazu

| Štítek | Význam |
|---|---|
| **V této složce** | Nalezeno na uložené relativní cestě, nebo na konci uložené úplné cesty uvnitř složky |
| **Nalezen stejný název** | Ne na své cestě, ale soubor se stejným názvem je ve složce. Ověřte, že je to správný |
| **Soubor knihovny** | Tabulka klíčových poznámek nebo kódů sestav. Ty přicházejí s programem na každém počítači |
| **Není v této složce** | Nenalezen nikde ve složce |

Sloupec **Nalezené odkazy** v **Modelech** ukazuje, kolik odkazů modelu bylo nalezeno z těch, které se ve složce očekávají (soubory knihoven se nepočítají).

## Odloženo

| Řádek | Význam |
|---|---|
| Složky údržby Revitu (nečtou se) | Složky `*_backup`, `*_log` a `Revit_temp`, plus skryté složky a `__MACOSX` |
| Zbytky zámků, logů a záloh | Soubory `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` a `.slog` |
| Ostatní soubory | Vše ostatní (prvních 40 je pojmenováno) |
