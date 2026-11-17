---
title: Steny a dvere zo skenu telefónom alebo laserom
summary: Premeňte sken miestnosti na navrhované steny, dvere a miestnosti, ktoré prijímate jednu po druhej.
keywords: sken, sken telefónom, lidar, mračno bodov, steny zo skenu, dvere zo skenu, sken miestnosti, ply, e57, las, obj, navrhnúť
from: a4ef0f10
---

## Čo robí

Keď je otvorený sken (mračno bodov ako PLY, E57 alebo LAS, alebo sieť ako OBJ), BimCraft ho preseká vo výške pôdorysu, otočí ho kolmo na budovu a hľadá dlhé, tenké rady bodov: to sú steny. Medzera o šírke dverí medzi dvoma radmi na jednej priamke sa stane jednou stenou s dverami v nej. Steny, ktoré uzatvárajú priestor, vytvoria miestnosť.

Nič sa nekreslí, kým to neprijmete. Steny a dvere prídu ako zoznam návrhov (sú to zmeny v režime Navrhnúť): ponechajte tie, ktoré sú správne, ostatné zamietnite a všetko, čo ponecháte, sa nakreslí v jednom kroku späť. Miestnosti sa objavia samy.

## Čo kontroluje

Steny, ktoré sa nezatvárajú, úseky steny kratšie, ako je jej hrúbka, a medzery veľkosti dverí bez steny okolo sú nahlásené ako problémy s polohou, aby ste sa na sken na tom mieste mohli pozrieť.

## Neoverené, kým ich neskontrolujete

Steny, dvere a miestnosti, ktoré prijmete zo skenu, sú označené ako neoverené: prerušovaný rámček a "?" v pôdoryse, kým ich neoznačíte ako skontrolované. Pozrite [Označenie prvkov ako skontrolovaných alebo overených na mieste](topic:verification).

## Čo nedokáže

- Nájde steny, ktoré idú v dvoch na seba kolmých smeroch. Šikmá alebo zakrivená stena sa nenájde.
- Jedno podlažie naraz. Okná sa nenachádzajú (okno je medzera len vtedy, keď je rez vo výške parapetu).
- Vyskúšané na vygenerovaných skenoch miestností a sieťach, zatiaľ nie na skutočných skenoch z telefónu. Ako dobre si vedie na skutočnom skene (posun pri dlhej prechádzke, nábytok pri stenách, sklo, otvorené dvere) sa nevie a ladenie na skutočných skenoch je ďalší krok. Každý návrh skontrolujte oproti skenu, skôr ako ho prijmete.
