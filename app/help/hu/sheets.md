---
title: Homlokzatok, metszetek és rajzlapok
summary: Rajzoljon metszetvonalakat az alaprajzon, majd nyissa meg a Rajzlapokat a modellből készült, nyomtatásra kész rajzkészlethez: minden szint alaprajza, a négy homlokzat, épületmetszetek, kimutatások és falvázak, rajzfejekkel és méretarányokkal, egyetlen PDF-ben.
keywords: rajzlapok, rajzkészlet, kivitelezési dokumentáció, nyomtatás, plottolás, pdf, homlokzat, északi homlokzat, metszet, épületmetszet, metszetvonal, vágás, takart vonalak, rajzfej, rajzlapszám, méretarány, 1/4" = 1'-0", 1:50, 1:100, papír, 11x17, 24x36, A3, A1, engedélyezési készlet
from: 91ed0cde
---

## Mit fog csinálni

Készítsen rajzkészletet a modellből: minden szint alaprajzát, az északi, keleti, déli és nyugati homlokzatot, minden metszetvonalhoz egy épületmetszetet, az ajtó-, ablak-, helyiség- és faanyag-kimutatásokat, valamint minden falvázas fal nézetét. A készlet minden megnyitáskor újra a modellből készül, így mindig egyezik azzal, amit megépített.

## Metszetvonal rajzolása

1. Egy szinten nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Metszetvonal}} parancsot.
2. Kattintson oda, ahol a vonal kezdődik, majd oda, ahol véget ér. A vonal közepén lévő rövid vonal mutatja azt az oldalt, amerre a metszet néz: a vonal bal oldala, az első kattintástól a másodikig haladva.
3. A vonal az alaprajzon a végjeleivel és a betűjével (A, majd B, és így tovább) látható.

Válassza ki a vonalat, hogy a **Tulajdonságok** részben módosíthassa: a betűjelét, a **Nézet megfordítása** lehetőséggel a másik irányba nézhet, a **Látótávolság** beállításával pedig megadhatja, milyen távolságra a metszéstől álljon meg a nézet (0 esetén minden látszik mögötte). A vonal eltávolításához nyomja meg a {{key:Delete}} billentyűt.

## Rajzlapok megnyitása

1. Kattintson a {{ui:Rajzlapok}} gombra a modellsávban (a {{ui:Nyomtatás}} mellett).
2. A rajzlapok a bal oldalon vannak felsorolva: alaprajzokhoz **A-101** és a következők, homlokzatokhoz **A-201**, metszetekhez **A-301**, kimutatásokhoz **A-401**, falvázakhoz **S-101**. Kattintson egyre a megtekintéséhez.
3. Válassza ki a **Papírt**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 vagy A1. A papír megtartja a szabványos nevét, mérete pedig a kiválasztott {{ui:Mértékegységek}} szerint jelenik meg, például *Letter · 8.5 × 11 in* vagy *A3 · 297 × 420 mm*.
4. Kattintson a {{ui:A készlet letöltése PDF-ként}} gombra: rajzlaponként egy oldal lesz.

## Szabványos megjegyzések egy szabályozási csomagból

A rajzlapon a {{ui:Szabványos megjegyzések}} segítségével szabályozási csomagból (szakágankénti) megjegyzéseket helyezhet el a rajzlap jobb oldali oszlopában. Minden megjegyzés megőrzi azt a csomagot és pontot, amelyből származik, a kinyomtatott rajzlap pedig jelzi, ha a csomag nincs ellenőrizve. A megjegyzések kiindulópontnak valók: azt, hogy mit mondjanak, a rajz felelőse határozza meg. Hozzájuk az Épületszabályozási bővítmény szükséges.

## Mi van a rajzlapokon

- **Az alaprajzok** a falakat, ajtókat, ablakokat, a helyiségeket területükkel, méretekkel és metszetvonalakkal mutatják, a legnagyobb szabványos méretarányban, amely ráfér: 1/4" = 1'-0" vagy annál kisebb (milliméterben 1:50 vagy kisebb).
- **A homlokzatokat** a 3D-modellből rajzolják, a takart vonalak eltávolításával; lapon kettő, mind azonos méretarányban, alattuk talajvonallal. A tető, az alapozás és a talaj úgy jelenik meg, ahogy modellezték.
- **A metszetek** kitöltik azt, amit a vágás átmetsz (falak, födémek, tető), és a vágáson túl látható részeket is megrajzolják.
- **A homlokzatok és metszetek a megjegyzéseikkel együtt:** szintjelölés minden szinthez a nevével és magasságával jobbra, a szintek közötti magasság balra, homlokzaton alatta az épület szélessége, és a nézett falon lévő minden ajtón és ablakon címke (D1, W1). Egy helyiség saját falaihoz lásd: [Belső homlokzatok](topic:interior-elevations).
- **A kimutatások** megegyeznek a modellsáv {{ui:Kimutatások}} táblázataival.
- **A falvázak** minden falvázas fal bordáit, pallóit, áthidalóit és küszöbeit mutatják a külső oldaláról nézve, hogy a munkacsapat ki tudja rakni. Lásd: [Falak, födémek és tetők vázszerkezete](topic:framing).

Minden rajzlapon rajzfej található a számmal, a címmel, a fájl nevével és a dátummal.

:::tip
A rajzlapok a modellből készülnek: rajz módosításához változtassa meg a modellt, és nyissa meg újra a {{ui:Rajzlapok}} részt.
:::

:::note
A homlokzatok és metszetek csak vonalakat és kitöltéseket mutatnak: a rajtuk lévő méretek, szintjelölések és megjegyzések még nincsenek elkészítve.
:::
