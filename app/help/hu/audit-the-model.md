---
title: Modell ellenőrzése: helyiségek, címkék, LOD, ütközések és csatlakozások
summary: Futtasson kész ellenőrzéseket elnevezetlen helyiségekre, hiányzó címkékre, a projektszakasz által megkövetelt fejlesztési szintnél (LOD) alacsonyabb elemekre, szakágak közötti ütközésekre és LOD 350 csatlakozásokra. Csak tanács: semmit nem tilt meg.
keywords: audit, ellenőrzés, névtelen helyiség, hiányzó címke, jelölés, lod, fejlesztési szint, mérföldkő, szakasz, ütközés, szakág, koordináció, csatlakozás, lod 350, nyílás, áthidaló, koszorú, átvezetés, hüvely, csővezeték, légcsatorna, problémák, ellenőrzési jelentés, tanácsadó
from: cc83a14d
---

## Mit fog csinálni

Nézze át az egész modellt egy menetben, mielőtt kiadja. Az ellenőrzés kész szabálycsomagokat futtat, és amit talál, tanácsként a {{ui:Problémák}} listába teszi. Semmi nem tiltódik le: egy megállapítást Ön javít, vagy indoklással elfogad, mint bármely más problémát.

## Lépések

1. Nyissa meg a bal panelen a {{ui:Modellellenőrzések}} › {{ui:Ellenőrzés}} részt, vagy az {{ui:Eszközök}} › {{ui:Modell ellenőrzése…}} parancsot (gépelve: `AUDIT`).
2. Válassza ki a {{ui:Projektszakasz}} értékét. Ez ugyanaz a szakasz, mint a rajzrészleteknél.
3. Jelölje be a futtatandó szabálycsomagokat.
4. Kattintson a {{ui:Ellenőrzés futtatása}} gombra.
5. Olvassa el az egyes szabálycsomagok sorát, majd nyissa meg a {{ui:Problémák listájának megnyitása}} listát. A megállapításra kattintva kijelöli az elemét.
6. Az {{ui:Az ellenőrzési jelentés}} letölti a jelentést: minden megállapítás, ki mit és miért fogadott el, és a lefutott szabálycsomagok.

## A szabálycsomagok

- **Névtelen helyiségek**: helyiség, amelynek nincs neve, vagy még azt a nevet viseli, amelyet a program adott neki („Helyiség 3”).
- **Hiányzó címkék**: ajtó vagy ablak jelölés nélkül, helyiség szám nélkül, elektromos eszköz címke nélkül.
- **A szakasz LOD-szintje alatti elemek**: minden fal, padló, mennyezet, tető, ajtó és ablak, amelynek LOD-ja alacsonyabb a szakasz által kért szintnél. Az elem a típusának LOD-címkéjét olvassa; a helyszínen ellenőrzött elem LOD 500. A címke nélküli elemeket egy megjegyzésben számolja össze, mert nem ellenőrizhetők.
- **Szakágak közötti ütközések**: két szakág elemei (építészet, szerkezet, gépészet, vízvezeték, elektromos, IFC-osztály szerint), amelyek egymásba futnak. Egy falra támaszkodó tető nem számít.
- **LOD 350 csatlakozások**: minden ajtó és ablak a falának egy nyílásában ül, a nyílás belefér a falba, két nyílás nem fedi egymást, a határnál szélesebb nyílásnak van áthidalója vagy koszorúja (a nyílás fölötti elem vagy megjegyzés az ajtón vagy ablakon), és a falon vagy födémen átmenő csővezetéknek, légcsatornának vagy kábeltálcának van nyílása ott. A megállapításokat szakágpáronként számolja.
- **Elismert elemek, amelyeket senki nem ellenőrzött**: falak, ajtók, ablakok és helyiségek, amelyeket PDF-ből, szkennelésből vagy rajzból olvastak be, és még nincsenek ellenőrizve. Lásd: [Elemek jelölése ellenőrzöttként vagy helyszíni ellenőrzöttként](topic:verification).

## A szakaszonként kért LOD-szint

Nyissa meg az {{ui:A szakaszonként kért LOD-szint}} részt, hogy lássa vagy módosítsa a táblázatot.

:::note
A táblázat és az áthidaló szélessége a CadCraft kiindulási értékei. Nem szabványból származnak: a projekt a LOD-t szakaszonként a BIM-végrehajtási tervben állítja be. Állítsa be a sajátjára. Egy iroda beállíthatja a táblázatot mindenki számára a Beállítások › Alapértelmezett szabályzatok › Ellenőrzés részben; az Ellenőrzés részben tett módosítás ezen a számítógépen marad.
:::

## Tudnivalók

- Az áthidaló helyettesíthető megjegyzéssel is a modellezett helyett: jelölje ki az ajtót vagy ablakot, és a Tulajdonságok panelen az {{ui:Ellenőrzés}} alatt töltse ki az {{ui:Áthidaló vagy koszorú megjegyzése}} mezőt.
- A valódi nyíláson átmenő csővezeték nem metsz felületet, és nem jelentjük. Az, amelyet a falon át egyenesen modelleztek, jelentésre kerül.
- Az ütközésellenőrzés néhány másodperc után megáll nagyon nagy modellen, és ezt jelzi. Egy teljes ellenőrzéshez két kiválasztott készletre használja: [Elemek közötti ütközések keresése](topic:clash-check).
- Módosítás után futtassa újra az ellenőrzést. Az elfogadott megállapítások elfogadottak maradnak, amíg a számuk nem változik.
- A modellt olvassa, nem helyettesíti a felelős személyek koordinációs felülvizsgálatát.

## Tovább

- [Modell ellenőrzése gyakori problémákra](topic:model-checks)
- [Elemek közötti ütközések keresése](topic:clash-check)
- [Elemek jelölése ellenőrzöttként vagy helyszíni ellenőrzöttként](topic:verification)
