---
title: Kontrola priečinka na poškodené kópie, chýbajúce odkazy a zvyšky
summary: Použite správu o priečinku na nájdenie odrezaných súborov modelov, výber najnovšej úplnej zálohy, zistenie chýbajúcich odkazov a odhalenie zamykacích a dočasných súborov.
keywords: kontrola stavu, poškodený, chybný, neúplný, skrátený, záloha, chýbajúce odkazy, xref chýba, audit, zvyšky, zamykacie súbory, dwl, bak, odovzdanie
from: 3025a539
---

## Čo budete robiť

Skontrolujte projektový priečinok pred jeho odovzdaním alebo pred začatím práce: je každý model úplný, ktorá záloha je posledná dobrá a sú tam všetky prepojené súbory?

## Postup: poškodené kópie

1. Otvorte projektový priečinok. Pozri [Otvorenie celého projektového priečinka](topic:open-project-folder).
2. Prečítajte poznámky pod názvom priečinka. Hlásenie „2 súbory sú neúplné alebo nečitateľné. Pozri modely nižšie.“ znamená, že je čo riešiť.
3. V **Modely** pozrite stĺpec **Stav**. **Úplný** je v poriadku. Oranžové „1 neúplný“ znamená, že jedna kópia je zlá, ale iná je v poriadku. Červené **Neúplný** znamená, že nebola nájdená žiadna dobrá kópia.
4. Otvorte **Všetky … kópie** pod modelom s problémom. Zobrazí hlavný súbor a každú očíslovanú zálohu, najnovšiu ako prvú, s veľkosťou, dátumom a stavom.
5. Prečítajte poznámku nad zoznamom, napríklad „Tower.rvt je neúplný (183.2 MB, malo by mať aspoň 214.0 MB). Karta zobrazuje najnovšiu úplnú kópiu, Tower.0012.rvt (Mar 3, 2025).“
6. Kliknite na kópiu, ktorú chcete otvoriť. Kliknúť sa dá iba na úplné kópie.

## Čo robí kontrola stavu

Každá kópia každého modelu sa rýchlo skontroluje podľa jej hlavičky, 512 bajtov každá, takže aj priečinok s veľkými modelmi sa skontroluje za pár sekúnd. Súbor, ktorého vlastný index ukazuje za jeho koniec, bol prerušený počas kopírovania, nahrávania alebo synchronizácie. Súbor na cloudovom disku, ktorý je stále „iba online“, vyzerá rovnako.

Karta každého modelu sa číta z hlavného súboru, ak je v poriadku, a z najnovšej zdravej zálohy, ak nie.

## Postup: chýbajúce odkazy

1. Hľadajte poznámku „*n* prepojených súborov nie je v tomto priečinku.“ pod názvom priečinka.
2. Posuňte sa na **Prepojené a odkazované súbory**. Chýbajúce odkazy sú uvedené ako prvé.
3. Pre každý odkaz prečítajte stĺpec **Kde**:
   - **V tomto priečinku**: nájdené na ceste, ktorú model uložil.
   - **Nájdený súbor s rovnakým názvom**: súbor s rovnakým názvom je inde v priečinku. Skontrolujte, či je to správny.
   - **Súbor knižnice**: tabuľka kľúčových poznámok alebo kódov zostáv. Tie prichádzajú s programom na každom počítači, takže sa v priečinku nečakajú.
   - **Nie je v tomto priečinku**: nenájdené nikde v priečinku.
4. Prečítajte **Používa** a zistite, ktoré modely odkazujú na každý súbor.

BimCraft hľadá každý odkaz najprv podľa relatívnej cesty, potom podľa konca uloženej cesty (takže `\\server\jobs\Tower\Cad\X-Refs\site.dwg` sa nájde ako `X-Refs/site.dwg`, keď ste vybrali priečinok `Cad`), a nakoniec podľa názvu súboru kdekoľvek v priečinku.

## Postup: zvyšky

1. Prejdite na **Odložené** na konci správy.
2. Prečítajte tri riadky, ktoré sa môžu objaviť:
   - Priečinky údržby (`*_backup`, `*_log`, `Revit_temp`): nečítajú sa.
   - Zvyšky zámkov, protokolov a záloh: súbory ako `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Zanechali ich programy, ktoré spadli alebo boli otvorené, keď sa priečinok kopíroval. Zvyčajne ich možno bezpečne zmazať, keď ich nikto nemá otvorené.
   - Ostatné súbory: všetko ostatné, čo BimCraft nečíta.

## Časté chyby

- **Zmazanie poškodeného hlavného súboru pred uložením dobrej zálohy.** Najprv skopírujte najnovšiu úplnú zálohu, až potom riešte poškodený súbor.
- **Slepá dôvera v „Nájdený súbor s rovnakým názvom“.** Dva rôzne výkresy môžu mať rovnaký názov. Ak si nie ste istí, otvorte oba.
- **Myslenie, že chýbajúci súbor knižnice je problém.** Tabuľky kľúčových poznámok a kódov zostáv žijú s programom na každom počítači.
- **Počet súborov sa líši medzi prehliadačmi.** Vo Firefoxe a Safari {{ui:Open a folder}} odovzdá každý súbor vrátane tých v priečinkoch údržby, takže počet (aj limit 20 000 súborov) ich zahŕňa. Pretiahnutie priečinka do aplikácie ich preskočí, rovnako ako Chrome a Edge. Správa je inak rovnaká.
