---
title: Pridanie vykresľovacieho motora pomocou doplnku
summary: Čo môže doplnok pridať do zoznamu motorov v dialógu Vykresliť, oprávnenie potrebné na spustenie programu a čo Studio kontroluje a opýta sa.
keywords: doplnok, addon, motor, vykresľovací motor, vývojár, engine.run, oprávnenie, program, skript, podpísaný, studio, api
from: 06295376
---

Doplnok (Nastavenia › Doplnky) môže pridať motor do zoznamu motorov v {{ui:Vykresliť}}. Úplný text pre autorov doplnkov je v časti 16 špecifikácie doplnkov; stručne:

- Doplnok zaregistruje motor s identifikátorom, ktorý začína jeho vlastným prefixom, s názvom, voliteľnými nastaveniami a **buď** programom na spustenie, **alebo** funkciou v JavaScripte, ktorá vykreslí obraz.
- Motor, ktorý spúšťa program, potrebuje oprávnenie **`engine.run`**, ktoré sa zobrazí pred inštaláciou a v Nastaveniach. Spúšťa sa iba v Studiu; v prehliadači sa zobrazí ako súbor na uloženie.
- Doplnok uvedie program (obyčajný názov súboru, nikdy nie shell), skript, ktorý je **vo vnútri podpísaného doplnku**, a argumenty zložené zo zástupných symbolov a obyčajných slov. Studio program nájde, alebo vás raz požiada o jeho označenie.
- Pri prvom spustení programu doplnkom sa **Studio opýta vo vlastnom dialógu**: ktorý doplnok, ktorý program a že skript dokáže urobiť čokoľvek, čo dokáže program. Povoľte to iba pre doplnok, ktorému dôverujete. Vaša odpoveď sa zapamätá pre tento doplnok a program.
- Balík (scéna ako USD a súbor nastavení, so súborom glTF, ak si ho doplnok vyžiada) a skript doplnku sa uložia do nového dočasného priečinka, program sa v ňom spustí a obraz sa vráti označený názvom motora doplnku.

:::note
Doplnky môžu pridávať vykresľovacie motory iba od API doplnkov 1.4. Príklad postupu pre vykresľovač s otvoreným zdrojovým kódom pre príkazový riadok je v jeho vlastnom repozitári; v tomto vykresľovači zatiaľ nebol spustený.
:::
