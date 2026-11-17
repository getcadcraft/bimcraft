---
title: Modellvonalak és modellszöveg: a modellben rajzolva, a munkasíkon
summary: A modellvonal a modellben élő vonal, polivonal vagy ív, amely minden olyan nézetben látszik, amely látja. A modellszöveg valódi mélységű 3D-s felirat. Mindkettő a munkasíkon rajzolódik.
keywords: modellvonal, modellszöveg, 3D szöveg, felirat, tábla, jelzés, vonal 3D-ben, ív, polivonal, munkasík, kihúzott szöveg, betűtípus, mélység, részletvonal, rajzi vonal, megjegyzés, IfcAnnotation
from: fc9cccb5
---

## Amit el fog végezni

Rajzoljon olyan vonalakat és feliratokat, amelyek a modell részei, nem egyetlen nézeté.

## Lépések

1. Először állítsa be a munkasíkot (lásd **A munkasík**). A szintsíkra az alaprajzon rajzol; a függőleges síkra a Munkasík-nézetben.
2. Vonalhoz válassza a **Modellvonal** menüpontot a **Build** menüben, majd a **Vonal**, **Polivonal** vagy **Ív (három pont)** lehetőséget:
   - a vonal két kattintás;
   - a polivonalhoz minden pontra kattintson, majd nyomja meg az Entert vagy kattintson duplán. Az első pontra kattintva lezárul;
   - az ív három kattintás: a kezdőpont, egy pont, amelyen áthalad, és a végpont.
3. Szöveghez válassza a **Modellszöveg** lehetőséget. Írja be a szöveget, állítsa be a nagybetűk magasságát és a mélységet, majd kattintson oda, ahol a szöveg kezdődik (az alapvonal bal vége).
4. Vonal vagy szöveg kijelölésével megnézheti a **Tulajdonságok** panelen. A szöveg szavai, magassága és mélysége ott módosítható. A Delete törli.

## Hol látszanak

- A modellvonal látszik a szintje alaprajzán, a 3D nézetben, a homlokzat- és metszetpanelen, valamint a Munkasík-nézetben, ha a munkasíkon fekszik. A rajzi vonal (Jegyzetelés, Vonal) csak egyetlen nézethez tartozik.
- A modellszöveg valódi test: mindenhol látszik, ahol a modell látszik: az alaprajzon, 3D-ben, homlokzatokon és metszeteken, valamint a lapokon.
- A modellvonalak a nyomtatott lapokon még nem jelennek meg. A modellszöveg igen.

## A betűtípus

A modellszöveg ugyanazt a betűtípust használja, mint a lapok és a PDF-ek: Liberation Sans, a SIL Open Font License alatt. Ha a betűtípusban nincs meg egy betű, kérdőjelként rajzolódik ki, és erről tájékoztatást kap. Egy betűtípus és egy vastagság van. A betűk a betűtípus saját szélessége szerint, kerning nélkül helyezkednek el.

## Az IFC-fájlban

- A modellvonal IfcAnnotation, ModelLine objektumtípussal. Alakja 3D-s görbe: polivonal, illetve ívnél vágott kör.
- A modellszöveg IfcBuildingElementProxy, ModelText objektumtípussal. Alakja betűdarabonként egy kihúzott test, a lyukakkal együtt, például az O és a B betűknél. Mennyiségei a felületterület és a térfogat (felületterület szorozva a mélységgel).

## Jó tudni

- Bármilyen méret elkészül, ahogy kéri. Csak az olyan vonal nem, amelynek nincs hossza; az olyan ív, amelynek három pontja egy egyenesen van; vagy az olyan szöveg, amelyben nincs betű, mert nincs mit elkészíteni.
- Minden vonal, illetve a szövegen tett minden módosítás egy Visszavonás-lépés.
