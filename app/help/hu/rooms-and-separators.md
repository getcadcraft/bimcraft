---
title: Helyiségek és helyiségelválasztók
summary: Válasszon ki egy helyiséget, hogy nevet és számot adjon neki, és olvassa le a területét, kerületét és térfogatát. Rajzoljon helyiségelválasztót ott, ahol két helyiség falak nélkül érintkezik.
keywords: helyiség, helyiségek, helyiségelválasztó, elválasztóvonal, tér, IfcSpace, név, szám, terület, kerület, térfogat, nyitott alaprajz, helyiség felosztása, konyha és nappali, nincs körülzárva
from: d4c1d66b
---

## Mit fog tenni

Nevezze el a falak által létrehozott helyiségeket, és osszon fel egy nyitott helyiséget kettőre fal nélkül.

## Hol találhatók az eszközök

- Szalagos elrendezések: {{ui:Építészet}} › **Helyiség és terület** › {{ui:Helyiség}} és {{ui:Helyiségelválasztó}}.
- Klasszikus elrendezés: a Rajzolás sáv › {{ui:Helyiségek}} menü.
- Bármely menüstílus: a parancsok neve Helyiség és Helyiségelválasztó; a parancspaletta megtalálja őket.

## Lépések

1. Rajzolja meg a falakat. A falak minden zárt köre már helyiség: a BimCraft a rajzolás közben létrehozza, számozza és megadja a területét.
2. Válassza a {{ui:Helyiség}} parancsot. Mozgassa a mutatót az alaprajz fölé: az alatta lévő helyiség kiemelődik a területével, kerületével és térfogatával.
3. A gyors elnevezéshez írja be előbb a sorban a {{ui:Név}} és a {{ui:Szám}} mezőt, majd kattintson a helyiségbe. A szám a következő helyiségnél eggyel nő (101, 102; A-09, A-10).
4. Vagy egyszerűen kattintson egy helyiségre: kijelölődik, a Tulajdonságok pedig megmutatja a nevét, számát, területét, kerületét, térfogatát és címkéjét.
5. Nyitott helyiség felosztásához válassza a {{ui:Helyiségelválasztó}} parancsot, és kattintson két pontra: faltól falig, vagy faltól egy másik elválasztóig. Láncolathoz folytassa a kattintást; az Enter, az Esc vagy a dupla kattintás fejezi be.

## Mit csinál az elválasztó

- Vastagság nélküli falként határolja a helyiségeket. A két helyiség területe pontosan összeadódik az eredeti helyiség területével.
- Az a helyiség, amelyik az egykori helyiség közepét tartalmazza, megtartja a nevét és számát. A másik új.
- A szabadon végződő elválasztó, amelynek egyik vége sehova sem ér, nem oszt fel semmit. Hosszabbítsa meg, és már osztani fog.
- Az elválasztónak a falon belüli része figyelmen kívül marad, így fogással a fal középvonalára is illeszthet.
- Jelöljön ki egy elválasztót, és nyomja meg a Delete billentyűt: a két helyiség újra egy lesz. A visszavonás visszateszi.

## Ha nincs helyiség ott, ahová kattint

Az állapotsor ezt jelzi: a falak ott nem záródnak be. Zárja be a rést, vagy húzzon oda elválasztót. Nem történik elutasítás; egyszerűen még nincs zárt helyiség.

## Az IFC-ben

A helyiség IfcSpace elem a számával (Name), nevével (LongName) és a Qto_SpaceBaseQuantities tulajdonságkészletével: NetFloorArea, NetPerimeter, Height, NetVolume. A térfogat a terület szorozva a magassággal a felette lévő szintig.

A helyiségelválasztó IfcVirtualElement, az IFC azon entitása, amely egy meg nem épített határra való. Csak vonala van, teste nincs, így más program nem olvas ki falat, és nem is számol vele.

## Még nincs elkészítve

- Görbe elválasztók.
- Ferde mennyezetet követő helyiség: a térfogat mindig terület szorozva a szint magasságával.
- Térbeli határ-kapcsolatok (IfcRelSpaceBoundary) sem falakhoz, sem elválasztókhoz nem íródnak.

Lásd még: [Helyiségcímkék és területcímkék](topic:room-and-area-tags), [Területek és területhatárok](topic:areas-and-area-boundaries).
