---
title: Kontrola výkresu v pohledu na tisk
summary: Přepněte DWG nebo DXF do pohledu na tisk a uvidíte ho černě na bílém s tloušťkami čar a bez vrstev, které se nikdy netisknou.
keywords: tisk, vykreslení, náhled, náhled tisku, tloušťky čar, tloušťka čáry, černobíle, monochromaticky, defpoints, bez tisku
from: 1a59c23e
---

## Co uděláte

Uvidíte, jak bude list vypadat na papíru, dřív než ho vytisknete z programu, který ho vytvořil: černě na bílém, tloušťky čar v jejich skutečné šířce a bez vrstev nastavených tak, aby se netiskly.

## Postup

1. Otevřete výkres DWG nebo DXF.
2. Klikněte na kartu listu nad výkresem.
3. Klikněte na {{ui:Pohled na tisk}} na konci karet, nebo stiskněte {{key:P}}.
4. Přibližte detail a porovnejte tlusté a tenké čáry.
5. Znovu klikněte na {{ui:Pohled na tisk}}, nebo stiskněte {{key:P}}, a vrátíte se k normálním barvám.

## Co uvidíte

- Bílý papír na šedém pozadí, každá čára a text černě, bez ohledu na motiv.
- Tloušťky čar: na listu je každá tloušťka vykreslena v její skutečné šířce na papíru, takže čára 0.5 mm je dvakrát tlustší než čára 0.25 mm při jakémkoli přiblížení. Čára se nikdy nevykreslí tenčí než její tloušťka na obrazovce.
- Vrstvy nastavené tak, aby se netiskly, a vrstva DEFPOINTS jsou skryté.
- Tlačítko {{ui:Pohled na tisk}} zůstane stisknuté. Pohled na tisk zůstane zapnutý i při přepnutí listu nebo otevření jiného výkresu, dokud ho nevypnete.

V {{ui:Model}} používá pohled na tisk jen tloušťky čar pro obrazovku (tenké čáry jeden pixel, silnější o něco tlustší), protože prostor modelu nemá velikost papíru.

## Časté chyby

- **Očekávání, že se to vytiskne.** Pohled na tisk je jen náhled. Tisk a export do PDF zatím nejsou v BimCraftu zabudovány; tiskněte z programu, který výkres vytvořil.
- **Očekávání stylů vykreslení.** Tabulky per a barvy stylů vykreslení se nečtou. Všechno je prostě černé.
- **Stisknutí P při psaní.** {{key:F}} a {{key:P}} nic neudělají, když píšete do pole, nebo když je zobrazena tabulka zařízení.
