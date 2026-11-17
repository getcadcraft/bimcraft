---
title: Az engedélyezési csomag és a hatóság kísérő dokumentumai
summary: Gyűjtse egy zip-fájlba az előírásellenőrzést, a bíráló valószínű megjegyzéseit, a modellt és a hatóság kísérő dokumentumainak listáját, és minden dokumentumot ahhoz a rajzlaphoz vagy kimutatáshoz kapcsoljon, amely kielégíti.
keywords: engedélyezési folyamat, benyújtási formátum, szükséges rajzok, rajzlapméret, fájlformátum, példányok, szabályzati csomag, engedély, engedélyezési csomag, építési tervbenyújtás, tervjóváhagyás, hatósági benyújtás, kísérő dokumentumok, ellenőrzőlista, hatóság, önkormányzat, tanács, építési engedélyezési kérelem, bírálói megjegyzések, hiányzó dokumentumok, National Building Regulations
from: 47dd77ee
---

## Mit fog tenni

Készítsen egy zip-fájlt egy hatósági benyújtáshoz. Ha a hatóság listája szabályzati csomagból származik, abban benne vannak a jóváhagyási lépések és a benyújtási formátum is. A zip tartalma: borítólap; a bíráló valószínű megjegyzései (az ellenőrzésekből írva, nem találgatva); az előírási jelentés, ha az Építési előírások bővítmény be van kapcsolva; a modell; és a hatóság által kért kísérő dokumentumok listája.

Ez a modellből készült útmutató. A bejegyzett szakember és a hatóság dönti el, mi szükséges és mi fogadható el.

## Lépések

1. Modell megnyitása után nyissa meg a bal oldali panelen az {{ui:Engedélyezési csomag}} részt.
2. Írja be a projekt nevét, címét és a kérelmezőt, és soronként sorolja fel a rajzlapjait és űrlapjait.
3. A {{ui:Kísérő dokumentumok}} alatt válassza a {{ui:Hatósági lista}} lehetőséget. A listák szabályzati csomagokból jönnek: adja hozzá az Építési előírások bővítményt, és a Beállítások › Építési előírások részben jelölje be a helyének megfelelő csomagot. A csomag tartalmazhat szabályokat, jóváhagyási folyamatot, benyújtási formátumot, rajzkonvenciókat és szabványos megjegyzéseket. Az általános lista enélkül is működik.
4. Olvassa át a listát. Minden dokumentum {{ui:Kapcsolva}} (a rajzlappal és az okkal együtt), {{ui:Kézzel megadva}}, {{ui:Nem alkalmazandó}} vagy {{ui:Hiányzik}}.
5. Ha egy dokumentumot kézzel kell megadni (űrlap, tulajdoni lap, díjbefizetési igazolás), válassza a {{ui:Kézzel megadva}} lehetőséget. Ha egy „ha alkalmazandó” jelölésű tétel nem vonatkozik, válassza az {{ui:Itt nem alkalmazandó}} lehetőséget. Ha egy dokumentumot kézzel kell rajzlaphoz kapcsolni, válassza ki a rajzlapot.
6. A lista alatt nyissa meg az {{ui:Engedélyezési folyamat}} és a {{ui:Benyújtási formátum}} részt, hogy elolvassa a lépéseket és azt, amit be kell nyújtani (lapméretek, fájlformátumok, példányok). Díj vagy határidő csak akkor látszik, ha a csomag forrása ezt közli, az oldalszámmal és azzal a dátummal együtt, amikor olvasták.
7. Kattintson erre: {{ui:Az engedélyezési csomag elkészítése (zip)}}. A lépések és a formátum a borítólapon is szerepelnek.

## Hogyan kapcsolódik egy dokumentum

Egy dokumentum ahhoz a rajzlaphoz kapcsolódik, amely a megfelelő fajta nézetet tartalmazza (alaprajz, homlokzat, metszet), vagy ahhoz, amely a megfelelő kimutatást (például az ajtókimutatás az ajtókimutatásokhoz), vagy ahhoz, amelynek címe ezt mondja (például „Helyszínrajz” címmel). Ha a modellben vannak a sorok, de egy rajzlap sem tartalmazza a kimutatást, vagy a telek meg van rajzolva, de egy rajzlap sincs helyszínrajzként megcímezve, a tétel hiányzónak marad, és megmondja, miért.

## Jó tudni

- **Minden hatóság listáját helyi szakember nem ellenőrizte.** Mindegyiket a megjelölt, közzétett forrásból olvasták, a feltüntetett dátumon, és a saját szavainkkal írtuk meg. A követelmények változnak: ellenőrizze a hatóság saját, aktuális listáját.
- Ami a készletből még hiányzik, vagy olyan rajzlap, amely nem a csomag által kért méretű, tájolású vagy léptékű, megjegyzésként jelenik meg a Problémák listában. A megjegyzések tanácsok: soha nem állítják meg a csomagot.
- A hiányzó dokumentumok sem állítják meg a csomagot. A borítólapon és a `04-supporting-documents.csv` fájlban szerepelnek.
- A listák adatok, nem kód, a szabályzati csomagokon belül: Dél-Afrika (National Building Regulations, A2 szabály), Fokváros (a Dél-Afrika régióval, amelyet a Könyvtárból adtak hozzá), Anglia (nemzeti információs követelmények), Portland (Oregon), egy kitalált, oktatási célú csomag (MADE-UP), és egy általános lista, amely egyik hatóságé sem. Bárki írhat csomagot a saját helyére.
- A döntések a modellben maradnak meg, így újranyitáskor is ott vannak, és mindegyik egy visszavonható lépés.

Lásd még: [Rajzlapok](topic:sheets) és [A telek, az azon álló épület és szintjei](topic:site-building-and-levels).
