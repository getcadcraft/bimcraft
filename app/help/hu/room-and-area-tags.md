---
title: Helyiség- és területcímkék
summary: Helyre vagy területre tegyen címkét a számmal, névvel és területtel. A címke követi azt, mérete pedig a papíron mért magasságától függ.
keywords: címke, helyiségcímke, területcímke, helyiség címkézése, terület címkézése, mindent címkéz, címkézetlen elemek, felirat, szöveg magassága, papírmagasság, feliratozás
from: 67059d8a
---

## Mit fog tenni

Helyiségeket és területeket címkézhet egyenként vagy egyszerre, a címkét pedig áthelyezheti olyan helyre, ahol jól olvasható.

## Hol találhatók az eszközök

- Szalagos elrendezések: {{ui:Építészet}} › **Helyiség és terület** › {{ui:Helyiségcímke}} és {{ui:Területcímke}}.
- Klasszikus elrendezés: a Rajzolás sáv › {{ui:Helyiségek}} menü.
- Kijelölt helyiség vagy terület: Tulajdonságok › {{ui:Címke hozzáadása}}.

## Lépések

1. Válassza a {{ui:Helyiségcímke}} parancsot, és kattintson a helyiségbe, ahol a címkének állnia kell.
2. Vagy nyomja meg a sorban lévő {{ui:Címkézetlen elemek címkézése}} gombot: a szint minden címke nélküli helyisége a közepén kap címkét. Ez egyetlen visszavonási lépés.
3. A címke áthelyezéséhez jelölje ki a Kijelölés eszközzel, és húzza a helyére. A Tulajdonságok között van a {{ui:Vissza a közepére helyezés}} gomb.
4. A {{ui:Területcímke}} ugyanígy működik a területekre.

## Mit tesz a címke

- Megjeleníti a számot, a nevet és a területet a megjelenítési mértékegységeiben.
- Követi a helyiségét: ha átnevezi a helyiséget vagy mozgatja a falat, a címke szövege és helye ugyanabban a lépésben változik.
- Papíron méretezett: a {{ui:Szöveg magassága papíron}} milliméterben van megadva (kezdésként 2,5). Az 1:50-es nézeti léptéken a 2,5 mm-es címke a modellben 125 mm magas, 1:100-on 250 mm.
- A címkével rendelkező helyiség a címkét mutatja a sima felirat helyett.
- Ha a helyisége vagy területe megszűnik, a címke is megszűnik vele. A visszavonás mindkettőt visszaállítja.

## Az IFC-ben

A címke IfcAnnotation (ObjectType ROOMTAG vagy AREATAG), szövege szöveges literálként, és a GlobalId annak, amit megnevez. A fájlban lévő szöveg a területet négyzetméterben adja meg.

## Még nincs elkészítve

- Saját címkeformák és vezetővonal.
- Az ajtók, ablakok és falak címkézése külön eszköz (lásd a lapok címkestílusait).

Lásd még: [Helyiségek és helyiségelválasztók](topic:rooms-and-separators).
