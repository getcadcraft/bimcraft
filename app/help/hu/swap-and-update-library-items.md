---
title: Elem cseréje és a könyvtári elemek frissítése
summary: Cseréljen ki egy elhelyezett könyvtári elemet egy másikra úgy, hogy megtartja a helyét és az elemszámát, és ellenőrizze a Könyvtárat, hogy van-e újabb verzió a modellben lévő minden elemből.
keywords: csere, cserél, helyettesítés, frissítés, újabb verzió, frissítések keresése, könyvtár, visszavont, licencváltozás, elemszám
from: 8bdfe01d
---

## Mit fog csinálni

Gondolja meg magát egy elemről anélkül, hogy újra mozgatná, és tartsa naprakészen a modellben lévő könyvtári elemeket.

## Egy elem cseréje

1. Kattintson egy elhelyezett könyvtári elemre a modellben.
2. A {{ui:Tulajdonságok}} panelen kattintson a **Könyvtári elem** mezőben lévő {{ui:Elem cseréje…}} gombra. Megnyílik a {{ui:Könyvtár}} lap.
3. Keresse meg az új elemet, és kattintson a kártyájára.
4. Kattintson a {{ui:Csere … erre az elemre}} gombra.

Az elem megtartja a helyét, elfordítását, szintjét, elemszámát, mennyiségét és megjegyzéseit. Típusa, alakja és adatai az új elemre változnak. Ugyanúgy elhelyezett elemek egy típust osztanak meg, ahogy az elhelyezéskor is.

Ha az elemnek vannak változatai (lásd [Változatokkal rendelkező könyvtári elem elhelyezése és cseréje](topic:library-variants)), cserekor a {{ui:Könyvtár}} lap tetején felsorolja a többi változatát: mindegyik egy kattintás.

Ha az új elem más fajta dolog, például mosogató az asztal helyett, az elem IFC-osztálya ehhez igazodik (itt bútorelemről szaniter-végelemre váltva), így más szoftverek helyesen ütemezik. Ugyanaz az elem marad, ugyanazzal a GlobalId-val, így a rá mutató hivatkozások továbbra is működnek. A {{key:Mod+Z}} billentyűkombináció visszahozza a régi osztályt a régi elemmel.

## Frissítések ellenőrzése

1. Kattintson az eszköztáron a {{ui:Frissítések}} gombra (vagy egy könyvtári elem dobozában a {{ui:Frissítések keresése}} gombra).
2. Olvassa el a listát: minden könyvtári elem a modellbeli verziójával, a legújabb verziójával és egy állapottal szerepel: **Naprakész**, **Újabb verzió**, **Visszavont** vagy **Nem található**. Megmondja azt is, mi változott (geometria, adat, licenc vagy javítás).
3. Kattintson a sor {{ui:Frissítés}} gombjára, vagy az {{ui:Összes frissítése}} gombra.

## Mit kell látnia

- „Frissített n elhelyezés. Az elhelyezések, az elemszámok, a mennyiségek és a megjegyzések megmaradnak.”
- „Frissítve: *elem*” sorok a változáslistában. A {{key:Mod+Z}} billentyűkombináció mindegyiket visszavonja.

## Jó tudni

- Csak a Könyvtárból származó elemek ellenőrizhetők. A fájlokból származó elemek nem hordoznak könyvtári azonosítót.
- Ha a licenc megváltozott, a már elhelyezett példány megtartja azt a licencet, amellyel érkezett, amíg nem frissíti.
- Egy **Visszavont** elem nem kínálkozik új elhelyezésre. Szerzői jogi okból visszavont elem egyáltalán nem tölthető le; cserélje ki a {{ui:Elem cseréje…}} gombbal.
- Egy elhelyezett változat az marad, ha az elem újabb verziója is tartalmazza; ellenkező esetben az elem alapértelmezett változatát kapja.
- Az ellenőrzés csak az elemazonosítókat és a verziókat küldi el, a modelljét soha.
