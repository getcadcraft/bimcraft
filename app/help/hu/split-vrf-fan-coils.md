---
title: Split-, VRF- és fan coil egységek
summary: Helyezze el a fali, kazettás és csatornázott beltéri egységeket, az egy- és többosztatú kültéri egységeket, a refnet csatlakozókat és a 2 csöves vagy 4 csöves fan coileket, mindegyiket hűtőközeg-, víz-, kondenzvíz- és légcsatorna-csatlakozásokkal, és rajzolja meg közöttük a vezetékkészleteket, amelyek méretét egy megváltoztatható táblázatból veszi.
keywords: split, mini split, minisplit, multi split, vrf, vrv, változó hűtőközeg-áramlás, hőszivattyú, beltéri egység, kültéri egység, kondenzátoregység, falra szerelt, magas fali, kazettás, csatornázott, rejtett, fan coil, fcu, 2 csöves, 4 csöves, refnet, elágazó csatlakozó, y csatlakozó, vezetékkészlet, lineset, hűtőközeg, folyadékvezeték, gázvezeték, szívóvezeték, acr, réz, kondenzvíz, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Mit fog csinálni

Helyezze el egy split, többosztatú vagy VRF rendszer egységeit és fan coiljait a modellbe, majd kösse össze őket vezetékkészletekkel: egy folyadék- és egy gázvezetékkel ACR rézből, az egységek csatlakozóihoz rögzítve. Az egységek úgy működnek, mint a [csatlakozókkal rendelkező gépészeti berendezések](topic:mep-equipment) bármely más eleme: ugyanaz a sáv, a Tulajdonságok, a csatlakozók és a [csatlakozások](topic:mep-connections).

:::note
Ez egy tervezési és koordinációs segédeszköz. Az egységek általános formák, amelyeket a megadott értékek méretéznek, nem gyártói termékek. Csőméreteik a **tipikus példaértékek** táblázatából származnak, R410A és R32 berendezésekhez, nem valamelyik gyártótól: a gyártó szerelési kézikönyve dönti el a valós méreteket, a hosszú vezetékszakaszok vagy a nagy magasságkülönbségek pedig módosítják azokat. Módosítsa a táblázatot, vagy adja meg kézzel a méreteket, hogy illeszkedjenek az Ön által használt egységekhez.
:::

## Egység elhelyezése

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Berendezések}} lehetőséget.
2. Válassza ki a típust, és állítsa be az értékeit:

| Típus | Megadandó | Csatlakozói |
|---|---|---|
| Split beltéri egység, fali | teljesítmény, folyadék- és gázvezeték, hossz, mélység, magasság, kondenzvíz-méret | hűtőközeg folyadék- és gáz, kondenzvíz-elvezetés (a jobb oldali végén, a fal közelében) |
| Split beltéri egység, kazettás | teljesítmény, folyadék- és gázvezeték, panel, test, magasság, kondenzvíz-méret | hűtőközeg folyadék- és gáz, kondenzvíz-elvezetés (az egyik oldalon, a teteje közelében) |
| Split beltéri egység, csatornázott | teljesítmény, folyadék- és gázvezeték, hossz, szélesség, magasság, befúvó és elszívó nyílás, kondenzvíz-méret | befúvó légcsatorna kimenet, elszívó légcsatorna bemenet, hűtőközeg folyadék- és gáz, kondenzvíz-elvezetés |
| Split kültéri egység | teljesítmény, folyadék- és gázvezeték, szélesség, mélység, magasság | hűtőközeg folyadék- és gáz (a jobb oldalon) |
| VRF kültéri egység | teljesítmény, folyadék- és gázvezeték, szélesség, mélység, magasság | hűtőközeg folyadék- és gáz (elöl, alacsonyan) |
| Refnet csatlakozó | folyadék- vagy gázvezeték, az egyes ágak terhelése, a cső mérete mindkét végén | bemenet, A ág, B ág |
| Fan coil egység | 2 csöves vagy 4 csöves, hossz, szélesség, magasság, befúvó és elszívó nyílás, hűtőcső és rendszer, fűtőcső, kondenzvíz-méret | befúvó légcsatorna kimenet, elszívó légcsatorna bemenet, hűtés be és ki, fűtés be és ki (4 csöves), kondenzvíz-elvezetés |

3. Állítsa be a **Magasság** értéket: az egység alapjának magasságát a szinttől mérve. Egy fali egység alapja az alsó oldala (gyakran 2100 mm); egy kazettásé a mennyezetbe illeszkedő felülete; a refneté a csövének középvonalának magassága.
4. Kattintson arra a helyre, ahová kerüljön ({{key:R}} 90°-kal forgatja el).

A **Teljesítmény** az egység névleges hűtőteljesítménye kW-ban, mellette Btu/h-ban. Ha a **Folyadékvezeték** és a **Gázvezeték** a **A táblázatból** értéken marad, az egység csatlakozói a táblázat méreteit veszik fel az adott teljesítményhez; válasszon csőméretet, ha a saját egysége méreteit szeretné használni. A refnet bemenete mindkét ágra együtt van méretezve, minden ág a saját terhelése szerint.

A hűtőközeg-csatlakozók mindkét irányban működnek (a hőszivattyú bármelyik irányban üzemelhet). A kondenzvíz-elvezetés egy csőméret, mint bármely lefolyó.

## Vezetékkészlet rajzolása

1. Jelöljön ki két elemet (a másodikat {{key:Shift}}+kattintással): egy kültéri és egy beltéri egységet (egyosztatú split esetén), vagy kültéri egységet és refnetet, refnetet és beltéri egységet, vagy két refnetet (VRF esetén).
2. Nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Vezetékkészlet}} lehetőséget.

A BimCraft a folyadék- és gázszakaszokat a szabad csatlakozóik között rajzolja meg: minden csatlakozóból kiindulva egy közös magasságig, ACR rézcsőből (lágyított tekercs 1-5/8 in-ig, húzott cső e felett), és egyetlen lépésként visszavonható a {{ui:Visszavonás}} paranccsal. A refnet csak a saját vezetékét veszi fel: a bemenetébe a kültéri oldalról, a beltéri egységek felé vezető ágakból kifelé. Minden szakasz a lefelé eső végének (a beltéri egységnek vagy a refnet bemenetének) méretét veszi fel; ha a másik végén a csatlakozó más méretű, a {{ui:Kapcsolatok ellenőrzése}} listázza: ott kell szűkítő. Két beltéri egység között refnet szükséges.

A szakaszokat utólag ugyanúgy mozgathatja, mint bármely csővezetéket; végeik a csatlakozókon maradnak. A szintek közötti szakaszokat a {{ui:Cső}} paranccsal rajzolja: a hűtőközeg-csatlakozóról indított cső átveszi annak rendszerét, az ACR rezet és a méretét.

## A vezetékkészlet-táblázat módosítása

Nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Vezetékkészlet-méretek}} lehetőséget. Minden sor azt mondja meg: legfeljebb ekkora teljesítményig (kW), ekkora folyadékcső és ekkora gázcső.

| Legfeljebb | Folyadék | Gáz |
|---|---|---|
| 2,8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5,6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22,4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Ezek a kiindulási, tipikus értékek. Módosítson egy sort, vegyen fel vagy töröljön sorokat, majd válassza a {{ui:Mentés}} lehetőséget: a táblázat a modellben tárolódik, így a fájlon dolgozó mindenki ezt használja, és a {{ui:Visszavonás}} visszaállítja. A {{ui:A tipikus értékek használata}} visszaállítja a kiindulási táblázatot. A már elhelyezett elemek a módosításig megtartják csatlakozóikat.

## Az IFC-fájlban

A split és VRF rendszerek beltéri és kültéri egységei IfcUnitaryEquipment elemek, SPLITSYSTEM típussal; az objektumtípus mondja meg, melyik ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). A fan coil IfcUnitaryEquipment elem, AIRHANDLER típussal és "Fan coil unit" objektumtípussal: az IFC4 nem ismer fan coil típust, és egy helyiség ventilátora, hőcserélője és szűrője együtt épp azt írja le, amit az AIRHANDLER. A refnet csatlakozó IfcPipeFitting elem, JUNCTION típussal ("Refnet joint"). Az IFC2X3 fájlok a megfelelő típusokkal IfcEnergyConversionDevice és IfcFlowFitting elemeket kapnak.

A hűtőközeg-csatlakozók és -szakaszok REFRIGERATION rendszerekben vannak (egy a folyadékvezetékeknek, egy a gázvezetékeknek), a kondenzvíz DRAINAGE rendszerben. Az ACR szakaszok a külső átmérőjük szerint kapnak nevet. A vezetékkészlet-táblázat a projekten lévő CadCraft_HvacLineSets tulajdonságkészlet.

Lásd még: [Csatlakozókkal rendelkező gépészeti berendezések](topic:mep-equipment), [Csövek és légcsatornák csatlakoztatása berendezésekhez](topic:mep-connections) és [Csövek és légcsatornák](topic:pipes-and-ducts).
