---
title: Napíšte špecifikáciu z modelu
summary: Jedna časť špecifikácie pre každý typ múru, dverí, okna, podlahy a povrchu v používaní, s údajmi čítanými z modelu a vaším vlastným textom, vytvorená ako dokument PDF alebo Word.
keywords: špecifikácia, spec, pracovné výkresy, etapa 5, realizačná dokumentácia, časť, typ múru, typ dverí, typ okna, povrch, klasifikácia, uniclass, omniclass, masterformat, dokument, pdf, word, docx, tabuľky
from: a6acc6d4
---

## Čo urobíte

Získajte špecifikáciu, ktorá nasleduje model: časť pre každý typ, ktorý je v budove skutočne, každá s jej skladbou a množstvami čítanými z modelu, a text, ktorý k nej napíšete.

## Postup

1. Zapnite {{ui:Kresliť}}, otvorte **Tabuľky** v ľavom paneli a kliknite na **Špecifikácia**.
2. Dialóg zobrazí jednu časť pre každý typ múru, typ dverí, typ okna, podlahu a povrch miestnosti v používaní. Pod každým nadpisom sú jej **údaje** čítané z modelu: hrúbka, vrstvy jedna po druhej, úroveň rozpracovanosti, rozmery, koľko a koľko. Časť, ktorej prvky majú klasifikačný kód, zobrazuje kód v nadpise.
3. Napíšte text špecifikácie do poľa pod časťou. **Vybrať jej prvky** ukáže, čoho sa časť týka.
4. Kliknite na **Uložiť**. Je to jeden krok späť a text sa uchová v súbore budovy.
5. Otvorte **Dokumenty z modelu**, vyberte šablónu **Špecifikácia** a kliknite na **Náhľad**, potom ju uložte ako PDF, Word alebo Markdown. Pozri [Dokumenty z modelu](topic:documents-from-the-model).

## Tabuľky výkresov ako dokument

Šablóna **Tabuľky výkresov** vytlačí tabuľky dverí, okien a povrchov priamo z modelu vo vašom rozložení kancelárie. Do vlastnej šablóny napíšte `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` alebo názov uloženého nastavenia, napríklad `{{schedule Door schedule by floor}}`. `{{specification}}` vytlačí špecifikáciu.

## Dobré vedieť

- Údaje sú z modelu. Menia sa, keď sa model zmení; váš text sa nemení.
- BimCraft nepíše žiadnu klauzulu žiadnej normy ani text výrobcu. Časť bez textu vytlačí "Špecifikačný text ešte nebol napísaný."
- Text napísaný pre typ, ktorý už nie je v modeli, sa uchová a uvedie sa pod "Text pre typy, ktoré už nie sú v modeli".
- Ak chcete zmeniť všeobecný typ na konkrétnu skladbu, pozri [Nástroje pre múry](topic:wall-tools) (Vymeniť typ).
