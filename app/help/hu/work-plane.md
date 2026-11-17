---
title: A munkasík: beállítás, megjelenítés, szemből nézet
summary: A munkasík az a sík, amelyet a modellvonalak, a modellszöveg és a Munkasík-nézegető használ. Állítsa szintre, felületre, elnevezett referenciasíkra vagy vonalra; jelenítse meg a nézetekben; nyissa meg a nézegetőt a függőleges síkra rajzoláshoz.
keywords: munkasík, munkasík beállítása, munkasík megjelenítése, referenciasík, munkasík-nézegető, elnevezett sík, felület, szint, függőleges sík, falra rajzolás, homlokzati rajz, fogás, illesztés, ref sík
from: 8aceee1d
---

## Mit fog tenni

Válassza ki a síkot, amelyre rajzol, lássa, hol van, és rajzoljon függőlegesen álló síkra.

## Lépések

1. Kapcsolja be a **Rajzolás** lehetőséget, és nyissa meg az **Építés** menüt (szalagos elrendezésben: az Építészet lap, Munkasík).
2. Válassza a **Munkasík beállítása** lehetőséget. Ezután tegye az egyik következőt:
   - válasszon szintet a **Beállítás erre** mezőben;
   - válasszon elnevezett referenciasíkot a mellette lévő listából;
   - kattintson egy vonalra az alaprajzon: falra, rácsvonalra, referenciasíkra, modellvonalra vagy függönyrendszerre. A munkasík az adott vonalon átmenő függőleges sík lesz;
   - kattintson egy sík felületre a 3D nézetben. A munkasík erre a felületre fekszik.
3. Válassza a **Munkasík megjelenítése** lehetőséget, hogy lássa: árnyalt lap méteres rácsal a 3D nézetben, szaggatott körvonal vagy vonal az alaprajzon, és szaggatott körvonal a homlokzat- és metszetpanelen. Ismételt választásával elrejtheti.
4. Válassza a **Munkasík-nézegető** lehetőséget, hogy szemből nézze a síkot. A fekete vonalak a síkkal elmetszett modell. Használja az eszközeit modellvonal, modellszöveg vagy referenciasík rajzolásához a síkon. A **Megtekintés 3D-ben** a 3D nézetet a sík felé fordítja.

## Referenciasíkok

A referenciasík elnevezett sík, amelyet vonalként rajzol.

1. Válassza a **Referenciasík** lehetőséget. Ha nevet szeretne adni neki, írja be a sorába (különben automatikusan kap egyet), és adjon meg magasságot.
2. Kattintson arra a pontra, ahol kezdődik, és arra, ahol véget ér. Az alaprajzon ez egy függőleges síkot hoz létre. A Munkasík-nézegetőben a munkasíkra merőleges síkot hoz létre.
3. Az alaprajzon szaggatott zöld vonalként, a nevével együtt jelenik meg; a 3D nézetben és a homlokzat- és metszetpanelen szaggatott körvonalként.
4. Jelölje ki a módosításhoz: átnevezhető, megváltoztathatja a hosszát, a magasságát és a talppontját, vagy nyomja meg a **Használat munkasíkként** gombot.

Két referenciasík nem kaphat azonos nevet, mert a név alapján választja ki őket.

## Jó tudni

- Ha nincs munkasík beállítva, a modell a legalsó szintjén dolgozik.
- A munkasík a fájlba mentődik. A megjelenítés vagy elrejtés állapotát ebben a böngészőben jegyzi meg, nem a fájl.
- Ha a munkasík egy referenciasíkot követ, és áthelyezi azt a síkot, a munkasík vele együtt mozog.
- Függőleges munkasíkon a **Modellvonal** és a **Modellszöveg** eszköz megnyitja a nézegetőt, mert az alaprajz nem tud magasságra mutatni.
- A rajzolóeszközök ugyanúgy fogják meg az alaprajzon rajzolt referenciasíkok végpontjait, mint a többi vonal végpontjait a nézegetőben.

## Az IFC-fájlban

- A munkasík egy tulajdonságkészlet (CadCraft_WorkPlane) a projekten.
- Egy referenciasík IfcAnnotation, objektumtípusa ReferencePlane, és a neve. Alakja a sík zárt körvonala, így más program is látja, hol van. A CadCraft_ReferencePlane készlet tartalmazza a kezdőpontot, az irányt, a normálvektort és a kiterjedést. Az IFC-nek nincs referenciasík-osztálya; az annotáció nem számít épületelemnek, és nem határol helyiségeket.
