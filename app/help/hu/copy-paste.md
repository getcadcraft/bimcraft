---
title: Könyvtári elemek másolása, beillesztése és kettőzése
summary: Másoljon egy elhelyezett könyvtári elemet, és illessze be oda, ahová kattint, az eredeti mellé helyben, vagy másik modellbe; más elemek tulajdonságait szövegként másolja; visszavonás és ismétlés.
keywords: másolás, beillesztés, kettőzés, vágólap, beillesztés helyben, kivágás, törlés, összes kijelölése, visszavonás, ismétlés, szerkesztés menü, továbbiak, könyvtári elem, elhelyezés, ismétlés, sokszorozás
from: 6ac15931
---

## Mit fog csinálni

Helyezzen el még példányt egy már elhelyezett elemből: egy második munkaasztalt, egy sor mosogatót. Ez a témakör **elhelyezett könyvtári elemekről** szól, azokról az elemekről, amelyeket a BimCraft a modellbe írt: ezek közül egy bármelyik modellbe beilleszthető, akár másik lapon is. A falak, ajtók és minden más elem ugyanúgy másolható, kivágható, beilleszthető és törölhető a saját modelljén belül: lásd [Építőelemek törlése, kivágása, másolása és beillesztése](topic:edit-elements).

A parancsok a modell fölötti eszköztáron vannak: {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}} és {{ui:Továbbiak}}, utóbbi egy menü, amelyben {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}} található. Az a parancs, amely éppen nem használható, szürke; mutasson rá, hogy megtudja az okát, vagy kattintson rá, és az állapotsor megmondja.

## Lépések

1. Nyisson meg egy IFC-modellt, amelyben van könyvtári elem, vagy előbb helyezzen el egyet. Lásd [Berendezési tárgyak és bútorok elhelyezése a könyvtárból](topic:place-from-library).
2. Kattintson az elemre a 3D nézetben. A tulajdonságai között egy **Könyvtári elem** doboz látszik.
3. Kattintson a {{ui:Másolás}} gombra, vagy nyomja meg a {{key:Mod+C}} billentyűket.
4. Kattintson a {{ui:Beillesztés}} gombra, vagy nyomja meg a {{key:Mod+V}} billentyűket. Megnyílik az elhelyezősáv, és egy áttetsző doboz követi a mutatót, az eredetihez hasonlóan elforgatva.
5. Nyomja meg a {{key:R}} billentyűt a 90°-os elforgatáshoz, a {{key:Tab}} billentyűt, hogy a hátoldalát falhoz illessze, vagy írja be az X és Y értéket az elhelyezősávba.
6. Kattintson oda, ahová a másolat kerül. Minden kattintás újabb példányt helyez el; a leállításhoz nyomja meg az {{key:Esc}} billentyűt.
7. Kattintson a {{ui:Mentés IFC-ként}} gombra, hogy letöltse a módosított modell másolatát.

## Beillesztés helyben

{{ui:Továbbiak}}, {{ui:Beillesztés helyben}} vagy {{key:Mod+Shift+V}} kattintás nélkül illeszt be, ugyanazon az X és Y koordinátán és ugyanúgy elforgatva:

- **Ugyanabba a modellbe, ugyanarra a szintre**: két elem pontosan ugyanazon a helyen nem lenne hasznos, ezért a másolat közvetlenül az eredeti mellé kerül, az elem egy szélességével és 100 mm-rel az elem saját szélességi irányában. Az új másolatból ismét a beillesztés helyben paranccsal sort készíthet.
- **Másik szintre vagy másik modellbe**: pontosan ugyanaz az X, Y és elforgatás. A BimCraft az azonos nevű szintet használja; ha nincs ilyen, a legközelebbi magasságút. Az állapotsor megmondja, melyiket.

## Kettőzés

{{ui:Továbbiak}}, {{ui:Kettőzés}} vagy {{key:Mod+D}} lemásolja a kiválasztott elemet, és azonnal megkezdi a beillesztését: egy lépés a kettő helyett.

## Másik modellbe vagy másik lapra

Amit másol, az ebben a böngészőben marad meg, így megnyithat másik IFC-modellt vagy a BimCraftot másik lapon, és ott beillesztheti. A másik modellhez magának a könyvtári elemnek kell: a BimCraft akkor rendelkezik vele, ha az elemet ezen a lapon helyezték el, cserélték vagy frissítették. Korábbi munkamenetben elhelyezett elem csak a saját modelljében illeszthető be újra; másik modellben a {{ui:Könyvtár}} lapról helyezze el.

## Amit látnia kell

- A másolat a modellben, kijelölve, ugyanazzal a könyvtári elemmel, licenccel, berendezési adatokkal, mennyiséggel és megjegyzéssel, mint az eredeti, és a **következő szabad elemszámmal**. A számot a Tulajdonságokban, a `CadCraft_Placement` alatt módosíthatja.
- „Elhelyezve: *elem* (elem *n*)” a változáslistában. A {{key:Mod+Z}} visszavonja, a {{key:Mod+Y}} visszaállítja.

## Jó tudni

- A másolatok az eredeti típusát használják, így mindegyik ugyanazt a geometriát használja, ahogy az azonos elem kétszeri elhelyezésekor is.
- A {{ui:Visszavonás}} és az {{ui:Ismétlés}} minden változásra vonatkozik: a szerkesztett értékekre, elhelyezésekre, beillesztésekre, cserékre és frissítésekre. Az ismétlés az elhelyezést ugyanarra a helyre állítja vissza; egy új változás törli a megismételhető lépéseket.
- Egy rajz 2D nézetében nincs mit kijelölni, így nincs mit másolni. A rajz szerkesztéséhez használja a {{ui:Szerkesztés CadCraftban}} lehetőséget, ha az megjelenik.

## Gyakori hibák

- **A {{ui:Beillesztés}} azt írja, hogy az elemek másik modellből származnak.** Az utoljára másolt dolog épületelem volt, vagy több elem: ezek csak a saját modelljükbe illeszthetők be. Válasszon ki egy elhelyezett könyvtári elemet, és másolja azt.
- **A {{ui:Beillesztés}} azt írja, hogy a másolat másik modellből származik a könyvtári elem nélkül.** Helyezze el az elemet egyszer ezen a lapon a {{ui:Könyvtár}} lapról, majd másolja és illessze be.
- **A {{key:Mod+C}} oldalszöveget másol.** A szöveg az oldalon volt kijelölve. Először kattintson a modellre.

## Kapcsolódó

- [Billentyűk és egér](topic:keyboard#edit)
- [A BimCraft beállításai](topic:settings)
</content>
