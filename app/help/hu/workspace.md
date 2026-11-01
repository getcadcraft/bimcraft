---
title: A BimCraft képernyője
summary: Körséta minden sávon, panelen és gombon a képernyőn látható nevükkel, és arról, hogyan változik a képernyő a különféle fájlokhoz.
keywords: képernyő, elrendezés, panelek, eszköztár, felület, körséta, tulajdonságok panel, böngésző, alkalmazássáv
from: 2eb01ec2
---

A BimCraft képernyőjén fent egy sáv húzódik, alatta három terület van: balra egy panel, középen a színpad, jobbra pedig a {{ui:Tulajdonságok}} panel. Hogy mi jelenik meg az egyes területeken, attól függ, mit nyitott meg: IFC-modellt, projekt- vagy családfájlt, rajzot vagy mappát.

## Az alkalmazássáv

A képernyő tetején lévő vékony sáv a CadCraft webhelyhez tartozik, nem magához a BimCrafthoz. Balról jobbra:

- A CadCraft jele: a CadCraft kezdőlapjára visz.
- Az alkalmazás neve és egy verziómenü. A munkatársi buildben megmutatja, melyik buildet futtatja, és lehetővé teszi a váltást egy kiadott verzióra.
- {{ui:A BimCraft névjegye}}: az alkalmazás oldala a webhelyen.
- {{ui:Beállítások}}: a BimCraft saját beállításai és az összes alkalmazásban közösek. Lásd: [A BimCraft beállításai](topic:settings).
- {{ui:Teljes képernyő}}: a képernyőmódok között lépked. Lásd lent: [Képernyőmódok](topic:workspace#screen-modes).
- {{ui:Papír}} és {{ui:Modell}}: a világos és a sötét téma. A 3D nézet és a 2D rajzok a kiválasztott témát követik.

## A bal oldali panel

A bal oldali panel mindig a **Fájl vagy mappa megnyitása** résszel kezdődik:

- A húzási terület, {{ui:Válasszon egy fájlt, vagy húzzon ide egy fájlt vagy mappát}}. Kattintson rá egy fájl kiválasztásához, vagy húzzon rá egy fájlt vagy mappát (vagy az oldal bármely pontjára).
- {{ui:Mappa megnyitása}}: egy teljes projektmappa kiválasztása. Lásd: [Egy teljes projektmappa megnyitása](topic:open-project-folder).
- {{ui:Legutóbbi mappák}}: Chrome-ban és Edge-ben jelenik meg, miután a mappát a mappaválasztóval vagy ráhúzással nyitotta meg. Az újranyitáshoz kattintson a mappa neve melletti újranyitás gombra, az elfelejtéshez pedig a kis × jelre.

Alatta a szakaszok az aktuális helyzetnek megfelelően jelennek meg:

| Szakasz | Mikor látszik | Mi van benne |
|---|---|---|
| {{ui:Módosítások}} | IFC-modell van megnyitva | A nem mentett módosítások, legújabb elöl, a {{ui:Visszavonás}} és a {{ui:Mentés IFC-ként}} gombbal |
| {{ui:Fájl}} | Modell vagy fájlkártya van megnyitva | A fájl adatai: méret, séma vagy kiadás, projekt, szerző, elemszám |
| {{ui:Rajz}} | DWG vagy DXF van megnyitva | Formátum, mértékegység, objektum- és rétegszám, rajzlapok, külső hivatkozások, berendezések |
| {{ui:Mappa}} | Mappa van megnyitva | Fájl- és modellszám, méret, talált problémák |
| {{ui:Vissza a mappához}} | Mappából nyitott meg egy fájlt | Visszatér a mappajelentéshez |
| {{ui:Rétegek}} | Rajz van megnyitva | Rétegenként egy jelölőnégyzet, a {{ui:Mind be}} és a {{ui:Mind ki}} gombbal |
| {{ui:Szintek}} | IFC-modell van megnyitva | Szintenként egy jelölőnégyzet, a legfelső szint elöl |
| {{ui:Elemek}} | IFC-modell van megnyitva | Hány elem van a modellben fajtánként (a 30 leggyakoribb) |

## A színpad

A képernyő közepe a megnyitott fájlt mutatja.

- **Üres**: „Nyisson meg egy épületmodellt.” a {{ui:Fájl kiválasztása}} és a {{ui:Mappa megnyitása}} gombbal, valamint az egyes formátumok rövid leírásával.
- **IFC-modell**: a 3D nézet, felül egy eszköztárral, elnevezett csoportokban, mint a CadCraft rajzoló alkalmazásában, az egyes eszközök ikonja a nevük fölött: {{ui:Nézet}} ({{ui:Illesztés}}, {{ui:Felülnézet}}, {{ui:Elölnézet}}, {{ui:Oldalnézet}}, {{ui:Élek}}, {{ui:Terek}}); {{ui:Szerkesztés}} ({{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}} és {{ui:Továbbiak}}, lásd [Könyvtári elemek másolása, beillesztése és kettőzése](topic:copy-paste)); {{ui:Modell}} ({{ui:Mértékegységek}} és {{ui:Rajzolás}}); {{ui:Könyvtár}} ({{ui:Könyvtár}}, {{ui:Berendezések}}, {{ui:Frissítések}}, {{ui:Forrásmegjelölések}}); {{ui:Áttekintés}} ({{ui:Megjelenítés}}, {{ui:Metszet}}, {{ui:Bejárás}}, {{ui:Mérés}}; lásd [IFC-modell elvágása metszősíkkal](topic:section-plane)); és {{ui:Kimenet}} (renderelés, élő nézet, VR, exportok, festés és mentett nézetek). A {{ui:Rajzolás}} bekapcsolt állapotában az alatta lévő Rajzolósáv ugyanígy néz ki: {{ui:Nézet}} (a szint és az alaprajz fajtája), {{ui:Rajzolás}}, {{ui:Szerkesztés}} és {{ui:Könyvtár}}. A jobb alsó sarokban nézetkocka van. Lásd: [IFC-modell megnyitása és körülnézés 3D-ben](topic:open-ifc-model). A {{ui:Beállítások}}, {{ui:Általános}} oldalon választhat, hogy ezeken a gombokon ikon, felirat vagy mindkettő látszik, megjelenítheti vagy elrejtheti a csoportnevet, és az eszköztáron jobb gombbal kattintva rendezheti az eszközöket és csoportokat. Alacsony ablakban az eszköztár elhagyja az ikonok alatti neveket.
- **Projekt- vagy családfájl**: a fájlkártya az előnézeti képpel, a projektadatokkal és a csatolt fájlokkal. Lásd: [Projekt- vagy családfájl olvasása](topic:read-rvt-file).
- **DWG vagy DXF**: egy lapsor ({{ui:Modell}}, majd rajzlaponként egy, majd az {{ui:Berendezések}}, ha a rajzban vannak címkézett berendezések, a {{ui:3D}}, az {{ui:Illesztés}} és a {{ui:Nyomtatási nézet}}), a rajz, és az élő X és Y koordináták az egyik sarokban. Lásd: [DWG- vagy DXF-rajz megtekintése](topic:view-dwg) és [DWG- vagy DXF-rajz megtekintése 3D-ben](topic:dwg-in-3d).
- **Mappa**: a mappajelentés a {{ui:Kezdje itt}} mezővel, valamint a modellek, hivatkozások, IFC-modellek és rajzok táblázataival. Lásd: [Egy teljes projektmappa megnyitása](topic:open-project-folder).

A színpad alján lévő **állapotsor** megmondja, mit csinál a BimCraft („A modell beolvasása…”, „Geometria építése: 1200 / 5400 elem”), és pirossal azt, ha valami hibára fut. A sikerről szóló üzenetek néhány másodperc múlva elhalványulnak.

## A Tulajdonságok panel

A jobb oldali panel megmutatja:

- IFC-modellnél: a kattintott elemet a nevével, típusával, címkéjével, GlobalId-jával és minden tulajdonságkészletével. A módosítható értékek gombnak látszanak. Lásd: [A Tulajdonságok panel mezői](topic:properties-panel).
- Rajznál: hogyan mozoghat, a rajz külső hivatkozásait és képeit, és hogy megtalálta-e mindegyiket, valamint a **Még nincs megrajzolva** listát.
- Fájlkártyánál vagy mappánál: rövid megjegyzést arról, mit nyisson meg ezután.

## Kis képernyőn

Ha az ablak keskenyebb egy laptop képernyőjénél, a BimCraft egymás alá rendezi a területeit: felül a színpad, alatta a panelek. A panelek eléréséhez görgesse az oldalt. Telefonon egy oszlopot alkotnak, táblagépen kettőt.

## Képernyőmódok

Az alkalmazássáv {{ui:Teljes képernyő}} gombja, vagy minden platformon a {{key:Ctrl+Shift+F}} három mód között lépked:

1. Normál.
2. Teljes képernyő, a sávok látszanak.
3. Teljes képernyő elrejtett alkalmazássávval. A visszahozásához vigye az egérmutatót a felső szélhez, vagy koppintson oda.

A {{key:Esc}} megnyomásával visszatér a normál módhoz. A teljes képernyőt nem támogató böngészők (például iPhone-on) csak a normál és az elrejtett sávos mód között váltanak.

## Kapcsolódó

- [Billentyűk és egér](topic:keyboard)
- [A BimCraft által megnyitott és mentett fájlok](topic:files)
