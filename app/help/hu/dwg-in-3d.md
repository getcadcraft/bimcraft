---
title: DWG vagy DXF rajz megtekintése 3D-ben
summary: Egy rajz modelltere 3D-be kapcsolható, így láthatók a magasságok, a vastagságok, a 3D-s felületek, hálók és blokkok; körbeforgatható, egy objektumra kattintva megtekinthetők a tulajdonságai, és megtudható, mi nincs még kirajzolva.
keywords: 3d, dwg, dxf, rajz, modelltér, körbeforgatás, metszet, levágás, vágás, kijelölés, tulajdonságok, attribútumok, azonosító, magasság, vastagság, kihúzás, 3dface, polyface, háló, 3d polivonal, blokkok, nézetek, perspektíva, párhuzamos, teljes kiterjedés, acis, testek
from: a0c6cd17
---

## Mit fog csinálni

Nézze meg egy rajz modelltérét 3D-ben. A vonalak és a polivonalak valós magasságukban állnak, a vastagsággal rendelkező objektumok falként emelkednek fel, a 3D-s felületek, hálók és 3D-s blokkok pedig körbeforgatható felületekként jelennek meg. A rajzlapok 2D-s maradnak.

## Lépések

1. Nyisson meg egy DWG vagy DXF fájlt. Lásd: [DWG vagy DXF rajz megtekintése](topic:view-dwg). 3D-ben nyílik meg, kivéve, ha a {{ui:Beállítások}} › {{ui:BimCraft}} › **Rajzok megnyitása:** beállítás {{ui:Modell (2D)}} értékű.
2. A 2D-ből kattintson a rajz fölötti sávban a {{ui:3D}} gombra, vagy nyomja meg a {{key:3}} billentyűt.
3. Az első alkalommal várjon egy pillanatot: az állapotsor kiírja, hogy „A rajz felépítése 3D-ben…”, majd azt, hány vonalat és felületet mutat.
4. Körbeforgathatja, eltolhatja és nagyíthatja (lásd az alábbi táblázatot).
5. Kattintson egy nézetre a második sávban: {{ui:Izometrikus}}, {{ui:Felülnézet}}, {{ui:Alulnézet}}, {{ui:Elölnézet}}, {{ui:Hátulnézet}}, {{ui:Balról}} vagy {{ui:Jobbról}}.
6. A {{ui:Perspektíva}} gombra kattintva váltson perspektivikus és párhuzamos nézet között.
7. A {{ui:Teljes kiterjedés}} gombra vagy a {{key:F}} billentyűre kattintva újra az egész rajzot látja.
8. Kattintson ismét a {{ui:3D}} gombra, nyomja meg a {{key:3}} billentyűt, vagy kattintson a {{ui:Modell}} fülre vagy egy rajzlap fülre a 2D-hez való visszatéréshez.

## Amit látnia kell

- A modelltér 3D-ben, a Z tengely felfelé, a rajz saját színeivel. A felületek egy árnyalattal világosabbak az éleiknél.
- A {{ui:Rétegek}} listában kikapcsolt rétegek a 3D nézetből is eltűnnek.
- A jobb oldalon: a vonalak és a felületek száma, a rajz mérete X, Y és Z irányban, valamint a **Csak a 2D nézetben** és a **Még nincs kirajzolva** mezők.

## Vágás metszősíkkal

Kattintson a {{ui:Metszet}} gombra a 3D sávon, vagy nyomja meg az {{key:X}} billentyűt. Az alatta lévő sáv úgy működik, mint IFC-modelleknél (lásd: [IFC-modell vágása metszősíkkal](topic:section-plane)): vágjon a {{ui:Felülnézet}}, az {{ui:Elölnézet}} vagy az {{ui:Oldalnézet}} irányából, húzza vagy írja be az eltolást – itt a rajz saját mértékegységeiben – és a {{ui:Megfordítás}} gombbal válassza ki a másik oldalt. Amit a sík levág, azt nem lehet kijelölni. A 2D-be való visszatérés eltávolítja a vágást.

## Egy objektum tulajdonságainak megtekintése

Kattintson egy objektumra a 3D nézetben. Kijelölési színt kap, a {{ui:Tulajdonságok}} pedig megmutatja, mit mond róla a fájl: a típusát, rétegét, színét, vonaltípusát és azonosítóját, majd a saját adatait, például egy vonal kezdő- és végpontját és hosszát, egy kör középpontját és sugarát, egy 3D-s felület sarkait, vagy egy blokkhivatkozás blokkját, beillesztési pontját, méretarányát, forgatását és attribútumértékeit.

- Egy blokkhivatkozás egészként jelölhető ki, a benne beágyazott blokkokkal együtt.
- A vonaltól néhány képpontra történő kattintás a vonalat jelöli ki.
- Tartsa lenyomva a {{key:Mod}} billentyűt, és kattintson további objektumok kijelöléséhez vagy egy kivételéhez; a {{ui:Tulajdonságok}} ekkor típus szerint megszámolja őket.
- Az {{key:Esc}} billentyű vagy egy üres területre kattintás törli a kijelölést.
- A kikapcsolt rétegeken lévő objektumok nem jelölhetők ki.

## Mozgás a nézetben

:::mouse
| Cél | Teendő |
|---|---|
| Körbeforgatás | Húzás a középső gombbal vagy a bal gombbal |
| Eltolás | Húzás a jobb gombbal, vagy tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon |
| Nagyítás | Görgesse a kereket; a mutató alatti részre nagyít |
| Teljes kép | {{ui:Teljes kiterjedés}} vagy {{key:F}} |
| Nézet oldalról | Kattintson a nézetkocka egy lapjára, élére vagy sarkára a jobb alsó sarokban |
:::

A nézetkocka helyettesíthető tengelyikonnal, vagy elrejthető a {{ui:Beállítások}} alatt. Lásd: [BimCraft beállítások](topic:settings).

:::mac mouse
Érintőpadon két ujjal húzva forgatjon, a {{key:Shift}} billentyűt lenyomva tartva és két ujjal húzva eltoljon, csippentéssel nagyítson.
:::

:::touch
Egy ujjal húzva forgat. Két ujjal csippentsen a nagyításhoz, és mozgassa őket együtt az eltoláshoz.
:::

## Mi van kirajzolva 3D-ben

| A rajzban | 3D-ben |
|---|---|
| Vonalak, 3D-s polivonalak | Valós magasságukban |
| Polivonalak, körök, ívek, ellipszisek | A saját síkjukban, a magasságukon, megdöntve, ha a rajz megdönti őket |
| Vastagság a vonalakon, polivonalakon, köröknél és íveknél | Ilyen magasságú falak; a körök alul és felül zártak |
| 3D-s felületek, polyface-hálók, poligonhálók | Árnyalt felületek látható élekkel |
| Blokkok | Elhelyezve, elforgatva és méretezve 3D-ben, a beágyazott blokkokkal együtt |
| Sraffozások | Körvonalaik |
| Sima 2D-s vonalrajz | Laposan, ahol meg lett rajzolva |

## Csak a 2D nézetben

A szöveg, a többsoros szöveg és a blokkok látható attribútumai 3D-ben, a saját síkjukban és a saját magasságukban rajzolódnak ki, és rájuk kattintva kijelölhetők. A széles polivonalak szélességüket laposan, sávként mutatják. A többszörös vezetővonalak, a képek és a sraffozási minták a **Csak a 2D nézetben** alatt szerepelnek: a {{ui:Modell}} lapon vagy a rajzlapokon láthatók.

## Még nincs kirajzolva

Az ACIS testekként tárolt testek és felületek (3D-s testek, testek, régiók és felületek), valamint a részfelületes hálók a **Még nincs kirajzolva** alatt vannak felsorolva a darabszámukkal. Ezek ki vannak hagyva, nem találgatnak értéket.

## Gyakori hibák

- **Minden laposnak látszik.** A rajz 2D: a vonalainak nincs magassága. Kattintson az {{ui:Elölnézet}} gombra az ellenőrzéshez; egy lapos rajz vonalként jelenik meg.
- **Egy testmodell nem mutat semmit.** A testmodellezővel készült testek ACIS testek, és a **Még nincs kirajzolva** alatt vannak felsorolva. Exportálja a modellt IFC-ként vagy 3D-s felületekként abból a programból, amelyben készült.
- **A rajz egy apró csomó a közepén.** A modelltér távoli részén lévő valami, például egy régi alaprajz másolata, nagy kiterjedést okoz. Görgővel nagyítson oda, ahová nézni szeretne.

## Tovább

- [Rétegek és rajzlapok kezelése](topic:dwg-layers-sheets)
- [IFC-modell vágása metszősíkkal](topic:section-plane)
