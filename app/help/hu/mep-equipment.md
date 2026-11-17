---
title: MEP berendezések csatlakozókkal
summary: Helyezzen el általános légkezelőket, ventilátorokat, szivattyúkat, kazánokat, vízmelegítőket, végberendezéseket, szórókat, rácsokat és tartályokat a beírt értékek szerinti méretekkel, mindegyiket azokkal a cső- és légcsatorna-csatlakozásokkal, amelyekhez a többi szakasz kapcsolódik.
keywords: mep, berendezés, légkezelő, ahu, ventilátor, csatornás ventilátor, szivattyú, kazán, vízmelegítő, végberendezés, vav, szóró, rács, regiszter, tartály, csatlakozó, csatlakozók, kapcsolat, csonk, nyaknagyság, hvac, gépészet, vízvezeték-szerelés, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Mit fog tenni

Helyezze a berendezéseket a csövei és légcsatornái végére. Minden darab általános alak, a beírt értékek szerinti méretekkel, a csatlakozásai pedig **csatlakozók**: ahol egy cső vagy légcsatorna csatlakozik hozzá, melyik rendszerhez tartozik, merre folyik az áramlás, és milyen méretű. A csatlakozóról rajzolt csövek és légcsatornák átveszik annak méretét és rendszerét, és hozzá rögzülnek: lásd [Csövek és légcsatornák csatlakoztatása berendezésekhez](topic:mep-connections).

:::note
Ez tervezési és koordinációs segédeszköz, amelyet a méretezést végző mérnök ad meg. A berendezés nem gyártói termék: nincsenek benne teljesítmények, tömegek vagy gyártói csatlakozóméretek. Ha gyártói modellre van szükség, azt a MEP-programból IFC formátumban kell behozni.
:::

## Darab elhelyezése

1. Kapcsolja be a {{ui:Rajzolás}} lehetőséget, nyissa meg a {{ui:Build}} lapot, és válassza a {{ui:Berendezések}} elemet.
2. A sávban válassza ki a fajtát, és írja be a méreteit. Minden fajta a saját adatait kéri:

| Fajta | Ezt kell beírni | Csatlakozói |
|---|---|---|
| Légkezelő | hosszúság, szélesség, magasság; befúvó- és visszatérő nyílások; hűtőcső mérete és rendszere; kondenzvíz mérete | befúvó légcsatorna kimenet, visszatérő légcsatorna bemenet, hűtőcső be- és kimenet, kondenzvíz-lefolyó |
| Csatornás ventilátor | átmérő, hosszúság, rendszer | légcsatorna be- és kimenet |
| Szivattyú | csőméret, rendszer | bemenet és kimenet |
| Kazán | hosszúság, szélesség, magasság, csőméret, gázcsatlakozó mérete, füstcsatorna átmérője | fűtési előremenő kimenet és visszatérő bemenet, gázbemenet, füstkimenet |
| Vízmelegítő | átmérő, magasság, csőméret, gáz vagy elektromos | hidegvíz-bemenet, melegvíz-kimenet (és gázbemenet és füstcső, ha gázzal működik) |
| Végberendezés | hosszúság, szélesség, magasság, kerek bemenet, kimenet szélessége és magassága | befúvólevegő be- és kimenet |
| Szóró | arcfelület, nyak, rendszer | nyaka (levegő be) |
| Rács | arcfelület szélessége és magassága, nyak szélessége és magassága, rendszer | nyaka (levegő ki a visszatérő vagy elszívó légcsatornába) |
| Tartály | átmérő, magasság, csőméret, rendszer | bemenet felül, kimenet közel alul |
| Radiátor | hosszúság, magasság, mélység, csőméret, rendszer | előremenő a végének felső részén, visszatérő a másik végének alsó részén |
| Konvektor / panelfűtő | hosszúság, magasság, mélység, csőméret, rendszer | előremenő az egyik végén, visszatérő a másikon |
| Gyártói család | a család (lásd [Csőspecifikációk, szelepek, csappantyúk és gyártói családok](topic:pipe-specs)) | a családhoz megadott csatlakozók |

3. Állítsa be a **Magasság** értéket, vagyis az alapjának magasságát a szinthez képest. Egy szóró vagy rács magassága az arcfelületé: írja be a mennyezet magasságát.
4. Ha szükség van rá, írjon be egy **Címkét** (`AHU-1`); az ugyanolyan fajtájú következő darab a következő számot kapja.
5. Vigye a mutatót az alaprajz fölé: az alapterület és a csatlakozók követik. Nyomja meg az {{key:R}} billentyűt a 90°-os elforgatáshoz. Kattintson arra a helyre, ahová kerül.

A csőméretek acélcső-méretek (ASME B36.10M). A szivattyúból másik anyagból kiinduló cső ugyanazt a névleges méretet veszi fel a saját anyagában.

## Módosítás vagy eltávolítás

Válassza ki az alaprajzon vagy a 3D-nézetben. A Tulajdonságok megmutatja az összes beírt méretet, a címkéjét, az X, Y és a magasságát, az elforgatását, valamint minden csatlakozót: méretét, rendszerét, az áramlás irányát, és azt, hogy van-e hozzá csatlakoztatva. Minden módosítás a {{ui:Visszavonás}} egy lépése; a csatlakozóikhoz rögzített szakaszok vele mozognak. A {{key:Delete}} eltávolítja; a hozzá rögzített szakaszok megmaradnak, és a Kapcsolatok ellenőrzés felsorolja őket.

## Az IFC-fájlban

Minden fajta a saját IFC-osztályaként mentődik: IfcUnitaryEquipment (légkezelő), IfcFan (ventilátor), IfcPump (szivattyú), IfcBoiler (kazán; a vízmelegítő a víz típusú IfcBoiler, „Water heater” objektumtípussal), IfcAirTerminalBox (végberendezés), IfcAirTerminal (szóró, rács) és IfcTank (tartály), a minden azonos fajtájú és méretű darabra közös típussal. Az IFC2X3 fájlok IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal és IfcFlowStorageDevice elemeket kapnak a megfelelő típusokkal. Minden csatlakozó egy IfcDistributionPort, amely ott van, ahol a csatlakozás, kifelé néz, és megadja az áramlási irányát és rendszerét; más programok így tudják, melyik szakasz melyik csatlakozóhoz kapcsolódik. A darab mindegyik csatlakozójának rendszerébe beletartozik, és hordozza azokat a könyvtári elemkészleteket, amelyekkel minden elhelyezett könyvtári elem rendelkezik.
