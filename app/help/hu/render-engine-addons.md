---
title: Renderelőmotor hozzáadása bővítménnyel
summary: Mit adhat hozzá egy bővítmény a Renderelés párbeszédpanel Motor listájához, milyen engedély kell egy program futtatásához, és mit ellenőriz és kérdez a Studio.
keywords: bővítmény, addon, motor, renderelőmotor, fejlesztő, engine.run, engedély, program, szkript, aláírt, studio, api
from: 06295376
---

Egy bővítmény (Beállítások › Bővítmények) motort adhat a {{ui:Render}} Motor listájához. A bővítmény-szerzők teljes szövege a bővítmény-specifikáció 16. szakasza; röviden:

- A bővítmény olyan motort regisztrál, amelynek azonosítója a saját azonosítójával kezdődik, van neve, opcionális beállításai, és **vagy** futtatandó programot, **vagy** a képet rajzoló JavaScript-függvényt ad meg.
- A programot futtató motorhoz a **`engine.run`** engedély kell, amelyet telepítés előtt és a Beállításokban is megjelenítenek. Csak a Studióban fut; a böngészőben fájlként jelenik meg, amelyet menteni kell.
- A bővítmény megnevezi a programot (egyszerű fájlnév, soha nem shell), egy szkriptet, amely **az aláírt bővítményen belül** van, és argumentumokat helyőrzőkből és egyszerű szavakból. A Studio megkeresi a programot, vagy egyszer megkéri, hogy mutasson rá.
- Amikor egy bővítmény először futtat programot, a **Studio a saját párbeszédpanelében kérdez**: melyik bővítmény, melyik program, és hogy a szkript a programmal bármit megtehet. Csak megbízható bővítménynek engedélyezze. A válasz arra a bővítményre és programra megmarad.
- A csomag (a jelenet USD-ként és egy beállításfájl, a kért glTF-fájllal együtt) és a bővítmény szkriptje egy új, ideiglenes mappába kerül, a program ott fut, és a kép a bővítmény motorjának nevével jelölve tér vissza.

:::note
Bővítmények csak a bővítmény-API 1.4-es verziójától adhatnak hozzá renderelőmotorokat. Egy nyílt forráskódú parancssori renderelő kidolgozott példája a saját tárolójában található; ezzel a renderelővel még nem futtatták.
:::
