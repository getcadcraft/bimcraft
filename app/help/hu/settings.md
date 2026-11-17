---
title: A BimCraft beállításai
summary: Döntse el, hogy a helyiségek és terek megjelenjenek-e, rajzolódjanak-e az élek, és melyik nézetben nyíljon meg a modell, valamint hogy a falfogás már indításkor be legyen-e kapcsolva.
keywords: beállítások, preferenciák, opciók, terek, helyiségek, ifcspace, élek, vonalak, teljesítmény, nagy modell, megnyitási nézet, kamera, felülnézet, falfogás, fogás
from: 4416e64f
---

Nyissa meg a {{ui:Beállítások}} párbeszédpanelt az alkalmazássávon lévő fogaskerékkel vagy a {{key:Mod+,}} billentyűkombinációval. Az első lap, a {{ui:BimCraft}}, ennek az alkalmazásnak a beállításait tartalmazza; a {{ui:Általános}} lap azokat, amelyeket minden CadCraft-alkalmazás közösen használ (téma, eszköztár, panelek). A BimCraft beállításai csak ebben az alkalmazásban léteznek: itt módosíthatók, és ez a böngésző megjegyzi őket. A párbeszédpanel alján lévő {{ui:A BimCraft beállításainak visszaállítása}} gomb ezeket – és a közös beállításokat is – a kezdeti értékre állítja vissza.

## Menük, billentyűk és egér

A menüstílus (a BimCraft saját eszköztára, egy lakástervező menüsor, egy BIM-szalag vagy egy rajzolói parancssor), a saját billentyűi és menüi, valamint az, hogy a görgő és az egérgombok mit csinálnak. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).

## Modell megnyitásakor

- **Helyiségek és terek megjelenítése** (kezdetben ki): a helyiségek és terek áttetsző dobozok, amelyek eltakarhatják mögéjük került falakat, ezért kezdetben rejtve vannak. A modell fölötti {{ui:Terek}} gomb a megnyitott modellnél továbbra is be- és kikapcsolja őket.
- **Élek**: a {{ui:Élek be}} (kezdeti érték) rajzolja ki a rajzolási hatást adó élvonalakat. A {{ui:Csak kis modelleknél}} csak 300 000 háromszögnél kisebb modelleknél rajzolja ki őket, így a nagy modellek gyorsabban fordulnak. Az {{ui:Élek ki}} beállítás minden modellt élek nélkül nyit meg. Az {{ui:Élek}} gomb a megnyitott modellnél továbbra is kapcsolja őket. 1,5 millió háromszög felett az élek mindig ki vannak kapcsolva.

## Rajzok megnyitása

Hogyan jelenik meg először egy DWG- vagy DXF-rajz: a {{ui:3D (leggyorsabb)}} (kezdeti érték) akár nagy rajzot is gyorsan kirajzol, a {{ui:Modell (2D)}} pedig a sík modelltér nézetben nyitja meg. A rajz fölötti lapok bármikor váltanak a {{ui:Modell}}, a rajzlapok és a {{ui:3D}} között. Ha a rajz modelltere üres, vagy a böngésző nem tud 3D-t megjeleníteni, a rajz mindig 2D-ben nyílik meg.

## Megnyitási nézet

A kamera, amellyel a modell megnyílik: {{ui:Illesztés}} (kezdeti érték, a teljes modell egy sarokból), {{ui:Felülnézet}}, {{ui:Elölnézet}} vagy {{ui:Oldalnézet}}. A modell fölötti gombokkal bármikor megváltoztatható a nézet.

**Az épület elforgatva áll a telken**: sok modell úgy érkezik, hogy az épület szöget zár be a fájl tengelyeivel (felmérési vagy közös koordinátákon). Az {{ui:Az épülethez igazítva}} (kezdeti érték) ilyen épületet derékszögben mutat: az {{ui:Illesztés}}, {{ui:Felülnézet}}, {{ui:Elölnézet}}, {{ui:Oldalnézet}}, a nézetkocka lapjai és minden új metszet az épület falait követi, a nézetkocka iránytűje pedig továbbra is a modell északját mutatja. Az {{ui:A telken elhelyezett módon}} megtartja a fájl tengelyeit. Ha az épület falai a tengelyek mentén futnak, mindkét beállítás ugyanúgy néz ki.

## Könyvtári elemek elhelyezése

**Indításkor a falfogás legyen bekapcsolva** (kezdetben ki): könyvtári elem elhelyezésekor vagy beillesztésekor a hátoldala a legközelebbi falhoz illeszkedik, a helyiség felé nézve. A {{key:Tab}} billentyű vagy az elhelyezősávon lévő {{ui:Falfogás}} gomb a pillanatra kikapcsolja. A fal nélküli szint fal nélkül indul.

## Metszetdoboz

A {{ui:Ráhagyás a kijelölés körül}} azt adja meg, mekkora helyet hagy a {{ui:Metszetdoboz a kijelölés körül}} a kijelölt elemek minden oldalán, milliméterben: kezdetben 300, legfeljebb 5000. Lásd: [IFC-modell vágása metszősíkkal](topic:section-plane).

## Hely

A {{ui:A szélesség és a hosszúság rendszere}} azt a rendszert választja ki, amelyben a {{ui:Mérés}} › {{ui:Hely}} a szélesség- és hosszúsági értékeket adja: WGS 84 (EPSG:4326, kezdetben, ahogy a GPS és a webes térképek használják), {{ui:A fájl saját alapfelülete}}, vagy az ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 és CGCS2000 egyike. A fájl saját térképrendszere és alapfelülete mindig megjelenik. Lásd: [Távolságok, felületek és helyek mérése 3D-ben](topic:measure).

## Sarokjelző

A 3D-nézetek jobb alsó sarkában álló elem (IFC-modell, és 3D-re kapcsolt rajz): {{ui:Nézetkocka}} (kezdeti érték), {{ui:Tengelyikon}} (egy kis X, Y és Z) vagy {{ui:Nincs}}. A változás azonnal érvényesül. A 2D-s rajznézet soha nem mutat jelzőt.

A nézetkockán kattintson egy lapra, élre vagy sarokra, hogy az adott oldalról nézzen rá; húzza a kockát a körbeforgatáshoz, a gyűrűt az elfordításhoz, a házikóra kattintva pedig a kezdeti nézetet állítja vissza.

## A neve a problémákon

Bejelentkezve a problémák a fiók nevét viselik, és a BimCraft erre nem kér semmit: ez a rész a {{ui:A fiókból (<name>)}} szöveget mutatja. A {{ui:Másik név használata}} egy mezőt nyit meg egy másik névnek; ez érvényes marad, amíg ki nem választja a {{ui:A fiókom nevének használata}} lehetőséget. Kijelentkezve a problémaűrlap a korábbi módon kér nevet. Lásd: [IFC- és BCF-fájlok, problémák](topic:issues-bcf).

## Asszisztensek

**Az MI-asszisztensek és a szkriptek használhatják a BimCraftot** (kezdetben ki): így a számítógépén lévő asszisztens a CadCraft Studion keresztül eléri a megnyitott modellt: az **Olvasás** megkeresi az elemeket és kiolvassa a tulajdonságaikat, a **Nézet módosítása** elkülöníti, elrejti és megjeleníti őket. A **Tevékenység** listázza a hívásait. Lásd: [MI-asszisztens használata a modellel](topic:assistants).

:::note
A többi beállítás a modell megnyitásakor vagy az elhelyezés indulásakor érvényesül. A már megnyitott modell megtartja a megjelenését, amíg az eszköztár gombjaival nem változtatja meg, vagy újra meg nem nyitja.
:::

## Kapcsolódó

- [Könyvtári elemek másolása, beillesztése és kettőzése](topic:copy-paste)
- [Berendezések és bútorok elhelyezése a könyvtárból](topic:place-from-library)
- [A BimCraft képernyője](topic:workspace)
- [MI-asszisztens használata a modellel](topic:assistants)
