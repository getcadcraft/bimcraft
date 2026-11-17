---
title: Projektszakaszok: a megbízói programtól a helyszíni utasításokig
summary: Kezdje egy programmal, amely célterületeket tartalmaz, és rajzolás közben nézze meg, hogy teljesül-e vagy kevés. Hasonlítsa össze a koncepcióváltozatokat a programmal, kapcsolja a műszaki leírásokat és a részleteket a típusokhoz, bírálja el a gyártmányterveket, és rögzítsen helyszíni utasításokat az elemekhez.
keywords: program, megbízói program, helyiséglista, célterület, teljesül, kevés, helyiségek, koncepcióváltozatok, változatok, tömegvázlat, költségvetés, műszaki leírás, leírás, részlet, építési részlet, típus, gyártmányterv, bírálat, jóváhagyás, újra benyújtás, helyszíni utasítás, módosítás, ok, helyszín, szakasz
from: 0a49b852
---

## Mit fog csinálni

Egy panelen végigvezetheti a projekt szakaszait: a megbízó programját helyiségekként, célterületekkel írja le, összehasonlítja a koncepcióváltozatokat a programmal, a műszaki leírásokat és az építési részleteket a hozzájuk tartozó típusokhoz rendeli, a szakipari szállítóktól visszaérkező gyártmányterveket bírálja el, és a helyszíni utasításokat a módosított elemekhez rögzíti.

## Lépések

1. A bal oldali panelen nyissa meg a **Projektszakaszok** elemet, majd a **Program** lapot.
2. Illessze be a helyiségeket, soronként egyet: a `Nappali; 1; 30` azt jelenti, hogy egy 30 m²-es helyiség van. A darabszám elhagyható. Válassza a **Helyiségek hozzáadása** lehetőséget. Töltse ki a megbízót, a telket, a költségkeretet, a tűrést és az ütemtervet, majd válassza a **Program mentése** lehetőséget.
3. Rajzoljon falakat. A falak által alkotott minden olyan helyiséget, amelynek neve megegyezik a program helyiségnevével (a név után álló szám, például „Hálószoba 2”, figyelmen kívül marad), a rendszer beszámítja. A **Helyiséglista** a **Teljesül**, a **Kevés**, a **Több** vagy a **Nincs megrajzolva** állapotot mutatja, a különbséget m²-ben.
4. Ha így szeretne új projektet kezdeni, válassza az **Új projekt indítása programból** lehetőséget. Ez új modellt nyit meg – ha választ egyet a mentett sablonjai közül, abból –, és a programot az első lépésként helyezi el benne.
5. Nyissa meg a **Változatok a programhoz képest** lapot. A modellben megtartott minden tömegvariánst egységes léptékben jelenít meg a bruttó területével, a programban kért területtel, és azzal, hogy a program hány helyisége fér el benne. A **Program egymásra rakása itt** lehetőséggel a helyiségeket a variáns szintjeire helyezi el, a legalsótól kezdve, és megmondja, mi nem fér el. A költséget csak a projekt árjegyzéke adja; ha nincs megfelelő sor, a rendszer „Nincs ár” üzenetet ír.
6. Nyissa meg a **Típusok, műszaki leírások és részletek** lapot. Minden fal-, ajtó-, ablak- és padlótípusnál látható, van-e műszaki leírás szövege, mely részletek kapcsolódnak hozzá, és hol nem egyeznek a műszaki leírás, a kimutatások és a lapok. A **Részlet csatolása** lehetőséggel DetailCraft- vagy CadCraft-fájlt, címet vagy a modell egy lapját adhatja hozzá.
7. Nyissa meg a **Gyártmányterv** lapot. Válassza ki a modellben azokat az elemeket, amelyeket a gyártmányterv lefed, majd válassza az **Átvétel** lehetőséget. A bíráló nevével és megjegyzésével használja a **Jóváhagyás**, a **Megjegyzéssel jóváhagyva** vagy a **Módosítás** lehetőséget. Az **Újra benyújtva** ugyanazon bejegyzés következő változatát hozza létre, és megtartja a bírálat előzményeit. Az állapot minden elemen is megjelenik.
8. Nyissa meg a **Helyszíni utasítások** lapot. Válassza ki az elemeket, adja meg az okot, és a saját szavaival írja le, hogy mit jelent a költségre és az időre nézve, majd válassza a **Rögzítés** lehetőséget. Miután egy kiadás rögzítésre került, az **A változások magyarázata e kiadás óta** lehetőség megmondja, mely módosult elemeket fedi le utasítás, és melyek változtak úgy, hogy nincs rögzített utasítás.

## Jó tudni

- Minden lépés egy visszavonással visszavonható. Semmit sem tilt meg: a nem teljesülő programot, a szövegével ellentétes típust vagy a határidőt túllépett gyártmánytervet a Problémák panelen figyelmeztetés vagy megjegyzés jelzi.
- A program helyiségei falak nélküli terek. Célértékkel rendelkeznek, nem rajzolt területtel, ezért a helyiséglisták és a COBie nem számolja őket megrajzolt helyiségként.
- Az elrendezés csak területek alapján rakja egymásra a helyiségeket a szintekre. Falakat nem rajzol.
- A műszaki leírás szövegét a modellből készülő Dokumentumokban írja meg. Itt csak a modell saját méreteivel hasonlítjuk össze; szabvány pontját soha nem írjuk meg Ön helyett.
- A gyártmánytervek és a helyszíni utasítások ugyanabban az előzménylistában szerepelnek, mint a Problémák és revíziók panel, így mindkét panel megjeleníti őket.
- A gyártmányterv állapota minden elem tulajdonsága (`CadCraft_ShopDrawing`), a helyszíni utasítás pedig `CadCraft_SiteInstruction`, így a Keresés és a Színezés tulajdonság szerint funkció ezeket is használhatja.
- A helyszínen ellenőrzött jelölések (7. szakasz) a Tulajdonságok alatt, az Ellenőrzés részben találhatók.
