---
title: Kiadások, revíziók és a rajzok változásnaplója
summary: Rögzítse az átadott rajzlapkészleteket, nézze meg, mi változott azóta minden rajzlapon és elemen, és a helyszíni utasításokat, műhelyrajzokat és csatolt modelleket a hozzájuk tartozó kiadáshoz rendelje.
keywords: kiadás, kiadott készlet, benyújtott készlet, benyújtás, revízió, revíziók, mi változott, kiadás óta, változásnapló, rajzok változásnaplója, rajzjegyzék, átadási jegyzék, helyszíni utasítás, műhelyrajz, csatolt modell, ajánlattételi, kivitelezési, pillanatkép, összehasonlítás
from: 4c732832
---

## Mit fog csinálni

Rögzítsen egy kiadást: mely rajzlapok, mikor, milyen célra kerültek ki, mindegyik a saját revíziójával. Később kérdezze meg, mi változott a kiadás óta. A helyszíni utasításokat és a visszaérkezett műhelyrajzokat tartsa a kiadáshoz rendelve.

## Lépések

1. A bal oldali panelen nyissa meg a **Kiadások és revíziók** részt.
2. Válassza a **Kiadás rögzítése** lehetőséget. A revízió javasolt (A, majd B; a számozott, például P1 számlál). Adja meg, milyen célra adja ki, kinek küldi, a dátumot és a rajzlapokat. Ha a projekt szakasza be van állítva, a cél ehhez igazodik. Ha az engedélyezési csomagnak van támogató dokumentumok listája, a hozzá kapcsolt rajzlapok automatikusan be lesznek jelölve.
3. Hagyja bejelölve az **Emellett mentse a modell másolatát kiadottként** lehetőséget, hogy a modell pontosan úgy maradjon meg, ahogy kikerült. A másolat letöltődik; nevét, méretét és SHA-256 értékét a rendszer a kiadás mellett tárolja.
4. Válassza az **Ez a kiadás rögzítése** lehetőséget. Az utolsó kiadás óta változott rajzlap új revíziót kap. A nem változott rajzlap megtartja a meglévő revízióját. Minden rajzlap címtáblája mutatja a revízióját.
5. A változások megtekintéséhez válassza a **Változás azóta** lehetőséget egy kiadás mellett. Minden rajzlap mellett Azonos vagy Változott látszik, rajta a hozzáadott, módosított és törölt elemekkel. Kattintson egy számra a hozzá tartozó elemek kijelöléséhez.
6. Válassza a **Bejegyzés hozzáadása** lehetőséget helyszíni utasításhoz, műhelyrajzhoz, jelölési készlethez, csatolt modellhez vagy megjegyzéshez. Adja meg, melyik kiadáshoz tartozik. A kiválasztott fájl név, méret és SHA-256 alapján kerül rögzítésre; a fájl helye nem változik.
7. A **Rajzok változásnaplója** soronként egy rajzlapot, oszloponként egy kiadást mutat. A **Változásnapló letöltése (CSV)** a kiadásokkal és bejegyzésekkel együtt menti.
8. A **Kiadási előzmények mentése** egy `.issues.json` fájlt ír. A MarkupCraft, TakeoffCraft és DetailCraft a **Kiadási előzmények beolvasása** paranccsal olvassa.

## Jó tudni

- Az előzmények az IFC-fájlon belül tárolódnak (a projekt `CadCraft_Issues` tulajdonságkészletében). Más programok figyelmen kívül hagyják.
- Egy rajzlap akkor számít változottnak, ha a saját beállítása változott, vagy ha egy elem, amelyet mutat, megváltozott: az alaprajz a saját szintjét, a homlokzat vagy metszet az egész modellt, az ajtó- vagy ablakkimutatás az ajtóit vagy ablakait.
- Egy elem akkor számít változottnak, ha egy tulajdonsága, helyzete, mérete vagy alakja megváltozott.
- Ha pontosan látni szeretné, melyik tulajdonság változott, nyissa meg a kiadott modell mentett másolatát a **Verziók összehasonlítása** lehetőséggel.
- A kiadás eltávolítása megtartja a bejegyzéseit, kiadás nélkül. Minden lépés egyetlen visszavonással vonható vissza.
- Egy több mint 60 000 elemet tartalmazó modell nem tart nyilván minden elemet a kiadással. A rajzlapok továbbra is összehasonlításra kerülnek.

## Még nincs elkészítve

- A rajzlapok nem mentődnek PDF-ként a kiadással.
- A revíziófelhő nem rajzolódik ki a BimCraft saját rajzlapjain. A felhőket a kiadáshoz a MarkupCraftban rögzítse.
