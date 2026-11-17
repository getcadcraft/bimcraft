---
title: Porovnanie dvoch verzií modelu
summary: Otvorte dve verzie toho istého modelu IFC a uvidíte, ktoré prvky boli pridané, odstránené a zmenené, s párovaním podľa ich GlobalId, a CSV každej zmeny.
keywords: porovnanie, rozdiel, rozdiely, verzie, revízia, zmeny, zmenené, pridané, odstránené, presunuté, globalid, guid, čo sa zmenilo
from: cfca6971
---

## Čo budete robiť

Zistite, čo sa zmenilo medzi modelom, ktorý ste mali, a tým, ktorý ste dostali: ktoré prvky sú nové, ktoré zmizli, ktoré boli presunuté alebo dostali nové hodnoty vlastností.

## Postup

1. Otvorte novšiu verziu, potom kliknite na {{ui:Pridať model…}} a vyberte staršiu. Pozrite si [Zobrazenie viacerých modelov IFC spolu](topic:several-models).
2. V {{ui:Modely}} otvorte {{ui:Porovnať verzie}}.
3. Vyberte {{ui:Staršia verzia}} a {{ui:Novšia verzia}}.
4. Kliknite na {{ui:Porovnať}}.
5. Kliknutím na prvok v zozname ho vyberte a zobrazte jeho vlastnosti. Kliknite na {{ui:Stiahnuť CSV}} pre každú zmenu, vlastnosť po vlastnosti.
6. Kliknite na {{ui:Vymazať}}, aby ste sa vrátili k bežnému zobrazeniu.

## Čo by ste mali vidieť

- **Pridané** prvky modrou farbou, z novšej verzie.
- **Odstránené** prvky červenou, zo staršej verzie.
- **Zmenené** prvky okrovou farbou, z novšej verzie, každý s uvedením, čo sa zmenilo: vlastnosti, presun s uvedením vzdialenosti, alebo nový tvar.
- Všetko, čo je rovnaké, je priehľadné.

## Dobre vedieť

- Prvky sa párujú podľa ich GlobalId. Program, ktorý dáva prvkom nové GlobalId pri každom exporte, spôsobí, že každý prvok vyzerá ako odstránený a znova pridaný.
- Polohy sa porovnávajú tam, kde modely v scéne stoja. Ak bola jedna verzia presunutá zámerne, najprv ich zarovnajte pomocou {{ui:Presunúť}} v {{ui:Modely}}.
- GlobalId použité dvakrát v jednom modeli sa z porovnania vynechajú. [Kontrola modelu na bežné problémy](topic:model-checks) ich nájde.

## Ďalej

- [Problémy a súbory BCF](topic:issues-bcf)
- [Sčítanie množstiev podľa vlastnosti](topic:quantity-totals)
