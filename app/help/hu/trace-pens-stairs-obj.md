---
title: Szint követése, tollak beállítása nézetenként, lépcső vázlatból, OBJ megnyitása
summary: Egy másik szint megjelenítése szaggatott vonallal az alaprajz alatt, és igazítása; falak, ajtók és ablakok saját tollának beállítása egy nézetben; járóvonal rajzolása lépcsőhöz; Wavefront OBJ háló megnyitása.
keywords: követési hivatkozás, szellem, aláfedés, toll, vonalvastagság, vonaltípus, felülírás, lépcső, vázlat, pihenő, OBJ, háló, importálás, Wavefront
from: 333ebbde
---

## Szint követése

Válassza ezt: {{ui:Követés}}, a {{ui:Build}} menüből, majd a listából egy nézetet: egy másik szint alaprajzát, egy szint mennyezeti alaprajzát vagy egy kivágási jelölést (a kivágási területére vágva). Falai, oszlopai és padlói szaggatott vonallal jelennek meg a rajzolt alaprajz alatt. Mozgassa úgy, hogy a hivatkozáson kattint egy alappontot, majd arra a helyre kattint, ahová a pontnak kerülnie kell; vagy adja meg az X és Y értéket és egy szöget (a saját középpontja körül fordul). A {{ui:Visszaállítás}} visszateszi, a {{ui:Elrejtés}} eltávolítja. Csak hivatkozás: semmi sem jelölhető ki vele, nem nyomtatódik, és nem mentődik az IFC-be. A BimCraft ezt szintenként megjegyzi ebben a böngészőben.

## Tollak nézetenként

Válassza ezt: {{ui:Tollak}}. Adja meg, mire való a toll: az összes falra, az összes ajtóra, az összes ablakra, a kijelölt elem típusára vagy a kijelölt elemekre. Válasszon vastagságot, vonalat (folytonos, szaggatott, pontozott) és színt, majd kattintson a {{ui:Alkalmaz}} gombra. A módosítás csak ennek a szintnek az alaprajzára vonatkozik. A kijelölés felülírja a típust, a típus pedig a teljes kategóriát. A {{ui:Mind törlése}} eltávolítja őket. Ebben a böngészőben maradnak meg. Jelölje be a **Tollszínek 3D-ben** lehetőséget, hogy a színes tollak a modellt is kifessék a 3D-nézetben (a vastagság vagy a szaggatás a vonalé, így ott csak a szín látszik); a visszaálláshoz vegye ki a jelölést. A {{ui:Nyomtatás}} a PDF-alaprajzra rajzolja őket: a vastagság a képernyőről skálázódik (az alapértelmezett, 1,75 pixel vastagságú falfüggő toll 0,5 mm), a szaggatott vonalak szaggatottak maradnak, a szín pedig a papír témájának értékével nyomtatódik.

## Lépcső vázlatból

Válassza ezt: {{ui:Lépcső vázlatból}}, és kattintson a járóvonal sarkaira, az alsó lépcsőfokkal kezdve. Egy vonal egyenes lépcsőt, két derékszögben találkozó vonal L alakú lépcsőt, három vonal (fel, át, vissza) U alakú lépcsőt ad. A pihenő rajzolásához nyomja meg az {{key:L}} billentyűt: kattintson a sarkaira, majd nyomja meg az {{key:Enter}} billentyűt; a rövidebb oldala adja a lépcső szélességét. A lépcső elhelyezéséhez nyomja meg az {{key:Enter}} billentyűt. Minden lépcsőlap a vonal hosszából számítódik ki, a felfutások számát pedig a szükséges magasság határozza meg. Ezután már szokványos lépcső: a {{ui:Tulajdonságok}} panelen módosítsa, a lépcsőház és a korlátok pedig követik.

Az {{key:Enter}} megnyomása előtt jelölje be az eszköz sorában a **Legyen család** lehetőséget (vagy nyomja meg az {{key:F}} billentyűt), hogy a lépcsőt családként helyezze el (egyenes, L vagy U alakú lépcsőként). Egyetlen elemként kerül be, és a családszerkesztőben nyílik meg a szélességével, a lépcsőlapjával, a teljes magasságával, az egyes lépcsősorok lépcsőlapjaival és az U alakú lépcső nyílásával paraméterként, így méreteket, alaprajzi jelet vagy aktív pontot (hotspot) adhat hozzá. A lépcsőfokok és a felfutási magasság ezekből következik. Nincs korlátja vagy lépcsőháza: ezek a szokványos lépcsőhöz tartoznak.

## OBJ megnyitása

Nyissa meg a `.obj` fájlt, mint bármely más fájlt. Az OBJ-nak nincs mértékegysége, ezért a BimCraft métert olvas, Y tengellyel felfelé, ahogy a legtöbb program írja. Minden objektum vagy csoport egy hálóelemmé válik egyetlen szinten, majd megtekintheti, megmérheti, metszetet vághat belőle, modellbe helyezheti és IFC-ként mentheti. A vonalak, görbék és felületek kimaradnak, és erről az állapotsor tájékoztat.

Az olyan objektum, amely pontosan egyenes prizma (zárt háló két párhuzamos, azonos véglappal és rájuk merőleges, sík oldalakkal: födém, oszlop, falblokk, lyukakkal ellátott lemez), az IFC-ben az IFC saját kihúzott testeként mentődik a körvonalával és mélységével, nem háromszögek listájaként. Más programok valódi testként olvassák, kicsi marad, és a mélysége és a körvonala később szerkeszthető. Az állapotsor megmondja, hány objektum maradt így meg. Minden, ami nem pontosan prizma (kúpos alak, egy csúcsával elmozdított háló, rés a hálóban), háromszögekként marad meg. A STEP-fájl ugyanígy olvasódik.
