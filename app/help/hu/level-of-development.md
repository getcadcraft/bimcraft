---
title: Fejlesztési szint (LOD) és mérföldkő-ellenőrzések
summary: Adjon meg fejlesztési szintet az elemeknek, nézze meg, honnan származik, ellenőrizze a modellt a mérföldkő által kért LOD-szint szerint, és javítsa a hiányzó címkéket és a névtelen helyiségeket. Minden ellenőrzés csak tanácsot ad; semmi sincs letiltva.
keywords: lod, fejlesztési szint, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mérföldkő, mérföldkő-táblázat, modellellenőrzések, hiányzó címkék, névtelen helyiségek, korai általánosság, IFC-osztály, osztályozás
from: 2091c79b
---

## Mit fog tenni

Adja meg, mennyire fejlett az egyes elemek, majd ellenőrizze az egész modellt aszerint, amit egy projekt mérföldköve előír.

## Lépések

1. Válasszon ki egy elemet (vagy többet), és nyissa meg a {{ui:Tulajdonságok}} részt. Keresse meg a {{ui:Fejlesztési szint}} mezőt.
2. Válasszon egy szintet a listából. Minden szintet az jelöl, amit jelent, és minden szint tartalmazza az alatta lévőket. Egy visszavonási lépés az egész kijelölést lefedi.
3. Olvassa el, honnan származik a szint: ettől az elemtől, a típusától, vagy egy helyszíni ellenőrzéssel megerősített jelöléstől.
4. A modell ellenőrzéséhez nyissa meg a bal oldalon a {{ui:Modellellenőrzések}} részt, majd a {{ui:LOD mérföldkövek}} elemet. Válassza ki a mérföldkövet és a táblázatot (a kiindulási táblázatot, vagy saját CSV- vagy JSON-fájlját, amelyet a {{ui:Teher}} gombbal tölt be).
5. Kattintson a(z) {{ui:Modell ellenőrzése}} gombra. Az összesítések és a táblázat minden sora megmutatja, mi érte el a szintjét és mi nem; az észrevételek a Problémák listában is megjelennek.
6. A(z) {{ui:Hiányzó címkék és névtelen helyiségek}} részben kattintson a(z) {{ui:Keresés}} gombra, szükség esetén szerkessze a javaslatokat, majd kattintson a(z) {{ui:Alkalmaz}} gombra.

## Mit kell látnia

- A kiválasztott szint az elemen, mellette az IFC-osztályával és az osztályozási kódokkal.
- Összesítések és sorok a mérföldkőhöz. A táblázat sosem változtatja meg egy szint jelentését: a skála rögzített, a táblázat csak azt mondja meg, melyik szint kell egy mérföldkőhöz.
- „Korai általánosság”: tanács arra, hogy korai mérföldkőnél az elemek általánosak maradjanak. Ez csak tanács.

## Jó tudni

- Itt semmi sem blokkol. A mérföldkő által megkívánt szint alatti modell fel van sorolva, nem tagadják meg.
- Egy szint három része (geometria, információ, dokumentáció) külön-külön beállítható; egy jelölés mutatja, hogy teljesült, alatta van, vagy nincs megadva.
