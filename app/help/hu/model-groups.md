---
title: Modellcsoportok
summary: Jelölt elemekből egy elnevezett csoport, a csoport újbóli elhelyezése máshol, és egy másolat módosítása, amely mindet megváltoztatja.
keywords: csoport, modellcsoport, csoportosítás, csoport feloldása, példány, másolat, ismétlés, tipikus egység, mező, lakás, csoport szerkesztése, IfcGroup
from: 121c5027
---

## Amit el fog végezni

Csoportosítson egy tipikus mezőt, helyezze el többször, és módosítsa minden másolatát egyetlen példány módosításával.

## Hol található az eszköz

- Szalagos elrendezés: {{ui:Építészet}} › **Modell** › {{ui:Modellcsoport}}.
- Klasszikus elrendezés: a Rajzolás sáv › {{ui:Helyiségek}} menü › Modellcsoport.

## Lépések

1. A Kijelölés eszközzel válassza ki az elemeket: kattintson az egyikre, a többire pedig Ctrl+kattintással vagy Shift+kattintással.
2. Válassza a {{ui:Modellcsoport}} lehetőséget. Azonnal csoporttá válnak. Előbb írjon be egy nevet a {{ui:Csoport neve}} sorba, hogy elnevezze, vagy utólag nevezze át.
3. Nyomja meg az {{ui:Újabb elhelyezése}} gombot, és kattintson arra a helyre, ahol a másolatnak állnia kell: a csoport bal alsó sarka a kattintás helyére kerül.
4. Módosítson bármelyik másolatot: mozgasson egy falvéget, méretezzen át egy ajtót, töröljön egy oszlopot. A csoport összes többi másolata ugyanabban a lépésben változik, és egy Visszavonás mindent visszaállít.
5. Amíg a Modellcsoport eszköz aktív, az elemre kattintva a teljes csoport kijelölődik.

## Egyéb lehetőségek

- {{ui:Kijelöltek hozzáadása}}: további elemeket ad az utoljára kijelölt csoporthoz.
- {{ui:Csoport feloldása}}: ez a másolat közönséges elemekké válik. A többi másolat csoport marad.
- Egy egész másolatot a Mozgatással mozgathat: ez ugyanaz a csoport új helyen; a többi nem mozdul.
- Ha egy másolat elemeit törli, a másolat megszűnik.

## Mi lehet csoportban

Az ajtókkal és ablakokkal együtt lévő falak, az oszlopok és a megrajzolt födémek újra elhelyezhetők, és egyformán tarthatók. A csoport más elemeket is tartalmazhat, de akkor még nem helyezhető újra; a sor megmondja, miért.

A másolatokat mozgatni lehet, forgatni vagy tükrözni nem.

## Az IFC-ben

A csoport egy IfcGroup, amelynek IfcRelAssignsToGroup kapcsolata van a tagjaihoz; a tagok közönséges falak, oszlopok és födémek maradnak. Egy csoport minden másolata ugyanazt a definíció-azonosítót viseli.

## Még nincs elkészítve

- Másolat forgatása vagy tükrözése.
- Lépcsők, tetők, helyiségfödémek és könyvtári elemek az újra elhelyezett csoportban.
- A fal profilja, dőlése és falnyílásai nem öröklődnek a másolatokra.
- Csoportok csoportokban.

Lásd még: [Mozgatás, igazítás és elosztás](topic:move-align-distribute).
