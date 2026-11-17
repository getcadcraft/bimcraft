---
title: Okótovanie osí
summary: Zobrazte rozstup medzi susednými osami a celkovú veľkosť siete osí na pôdoryse každého podlažia. Uloží sa do IFC a pri zmene osí sa prispôsobí.
keywords: os, okótovanie osí, kóta, rozstup, polia, celková veľkosť, bubliny, stĺpcová sieť, pôdorys, list
from: aaea5d08
---

## Čo budete robiť

Umiestnite rozstupy medzi osami a celkovú veľkosť siete na pôdorysy za bublinami, aby listy vytvorené z nich niesli kóty. Najprv potrebujete sieť: pozrite si [Osi a stĺpce](topic:grids-and-columns).

## Postup

1. Zobrazte pôdorys podlažia a kliknutím na {{ui:Os}} zapnite nástroj osí. Zobrazí sa riadok možností osí.
2. Zaškrtnite {{ui:Kóty}}. Na pôdoryse sa nakreslí rozstup medzi susednými číslovanými osami a medzi susednými písmenovými osami a celková veľkosť v každom smere.
3. Prepnite na iné podlažie: rovnaké kóty sa zobrazia aj na jeho pôdoryse.
4. Presuňte os, premenujte ju alebo pridajte novú. Kóty sa prispôsobia sieti.
5. Odškrtnite {{ui:Kóty}}, ak ich chcete znova odstrániť.

## Poznámky

- Každá zmena je jeden krok späť: {{key:Mod+Z}} ju vráti.
- Nastavenie sa uloží do IFC spolu so sieťou a pôdorysy umiestnené na listoch kóty obsahujú.
- Ak model nemá sieť, ktorú možno zmeniť (sieť zo súboru z iného programu sa tu zmeniť nedá), stavový riadok zobrazí: Žiadna sieť na zmenu.
