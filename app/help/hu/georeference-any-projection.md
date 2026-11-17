---
title: Georeferálás tetszőleges vetülettel
summary: Adja meg a BimCraftnak, hogy a modell koordinátái melyik térképi rendszerben vannak: az EPSG-lista teljes egészéből, bármely UTM-zónából vagy az Ön által meghatározott vetületből, és ezt használja a Helyhez, a térképi rétegekhez és a pontfelhőkhöz.
keywords: vetület, koordináta-rendszer, crs, epsg, utm, utm-zóna, egyéni vetület, proj4, proj-karakterlánc, prj, wkt, georeferálás, térképi átalakítás, ifcprojectedcrs, saját vetületek, földrajzi szélesség, földrajzi hosszúság, keleti koordináta, északi koordináta, lambert, gauss-kruger, állami vetület, nemzeti rács
from: 6894c1f2
---

Néhány terv olyan térképi rendszerben készült, amely nincs benne a rövid listában: egy UTM-zóna, egy nemzeti rács vagy egy szöveges definícióval leírt vetület. A {{ui:Mérés}} › {{ui:Koordináta-rendszer…}} lehetővé teszi, hogy megadja, melyiket használja a modell.

## Rendszer kiválasztása egy modellhez

1. Nyissa meg a modellt, válassza a {{ui:Mérés}} lehetőséget, majd a {{ui:Koordináta-rendszer…}} lehetőséget.
2. Írjon be a keresőmezőbe. Bármelyik az alábbiak közül működik:
   - egy EPSG-szám: `32633` vagy `EPSG:2277`;
   - egy UTM-zóna: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - szavak a nevéből: `lambert 93`, `mga zone 56`, `texas central`;
   - egy vetületi definíció: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionálisan egy névvel az elején (`Saját rács = +proj=…`);
   - egy `.prj` fájl szövege, vagy használja a {{ui:Egy .prj fájl betöltése…}} lehetőséget.
3. Válasszon egy találatot, majd kattintson az {{ui:Ezen rendszer használata}} gombra.

A választás a modellbe mentésre kerül (a projekten egy `CadCraft_CRS` nevű tulajdonságkészletként), így a modell újranyitásakor visszaáll. Mentse a modellt, hogy megőrizze. Az {{ui:Eltávolítás a modellből}} gomb visszaállítja azt, amit a fájl megad.

Ha az Ön definíciója ugyanazokat a koordinátákat adja, mint egy listázott EPSG-rendszer, a BimCraft ezt jelzi, és azt a kódot használja; ha több listázott rendszer ugyanazt a matematikát használja, a többit is megnevezi.

## Saját vetületek

Az Ön által beillesztett definíció vagy betöltött `.prj` fájl a {{ui:Mentés a Saját vetületek közé}} gombbal megtartható. A lista ezen az eszközön (ebben a böngészőben) marad meg, és a választó következő megnyitásakor újra felkínálja.

## Mit használ

- A {{ui:Mérés}} › {{ui:Hely}} a kiválasztott pontot a modell rendszerén keresztül szélességi és hosszúsági fokokká alakítja. Régebben egy megjegyzéssel állt meg, ha a fájl EPSG-kód nélkül nevezte meg a térképi rendszerét; ha van mentett választás, most megadja az eredményt.
- A modell alatti térképi rétegek ugyanazt a rendszert használják. A más rendszerben lévő pontfelhő vagy terepfájl felajánlja a modell rendszerét (lásd alább).
- A {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Hely}} › {{ui:Másik rendszer választása…}} beállítja, mit jelent még a {{ui:Hely}}: szélességi és hosszúsági fokot bármely listázott földrajzi rendszerben, vagy keleti és északi koordinátát bármely vetített rendszerben, a modell saját rendszere mellett.

## Olyan modell, amely még nincs a térképen

Ha a fájlban nincs térképi átalakítás, egy rendszer kiválasztása megnyitja a {{ui:Helyezze el ezt a modellt a térképen}} párbeszédpanelt. Megnyitható a {{ui:Mérés}} › {{ui:Térképi origó…}} menüből is.

1. Adja meg a modell origóját keleti és északi koordinátákban a rendszerben, vagy írjon be szélességi és hosszúsági fokot, és válassza a {{ui:Átalakítás keleti és északi koordinátákra}} lehetőséget.
2. Adja meg a rácsészak felé történő forgatást (fokban, az óramutató járásával ellentétesen; a 0 azt jelenti, hogy a modell Y tengelye a rácsészak felé mutat), és az origó magasságát.
3. A lépték a modell és a térkép mértékegysége közötti különbségből indul (0,001 egy milliméteres modellnél méteres rácson). Csak összesített föld–rács tényező esetén módosítsa.
4. Válassza az {{ui:Elhelyezés a térképen}} lehetőséget. Egy visszavonási lépés IfcProjectedCRS-t és IfcMapConversion-t (IFC4) ír. A modell maga nem mozdul el.

Az IFC2X3 fájl egyiket sem ismeri. A BimCraft ugyanezeket a számokat úgy írja, ahogy a szabvány megengedi: a buildingSMART tulajdonságkészleteket, az `ePSet_MapConversion` és `ePSet_ProjectedCRS` nevűeket a projekten, a telek szélességi és hosszúsági fokát, valamint az igaz északot. A párbeszédpanel ezt megmondja. Mentse a modellt, hogy megőrizze.

## Olyan modell, amely már a térképen van

Ha a fájl már a térképen helyezi el magát, és Ön másik rendszert választ, a BimCraft rákérdez:

- A {{ui:Csak a Helyzet által jelentett érték módosítása}} megtartja a fájl saját georeferenciáját, és az Ön választását használja a {{ui:Hely}}, a térképi rétegek és a pontfelhők számára (a modell számai ekkor az új rendszerben értendők).
- A {{ui:A modell áthelyezése ebbe a rendszerbe}} átírja a georeferenciát: az origó átmegy a vetületen (keleti és északi koordináták, magasság, forgatás és lépték), az IfcProjectedCRS (név, datum, vetület, zóna, egység) pedig újraíródik, így a mentett IFC az új rendszert mutatja. A Föld feletti hely nem változik: az origó szélességi és hosszúsági foka megmarad. A modellen belüli elemek soha nem változnak; csak a georeferencia.

A párbeszédpanel a választás előtt mutatja a régi és az új origót. Ha oda és vissza mozgatja, az origó egy milliméteren belül visszatér.

## Pontfelhők és terep más rendszerben

A felhő vagy felmérési fájl saját rendszert hordoz (LAS, LAZ, E57, GeoTIFF), vagy egyet sem. Ha ez eltér a modelltől, a BimCraft felajánlja az {{ui:Újravetítés a modell rendszerébe}} lehetőséget. A pontok kötegekben mozognak (sok pont esetén háttérfolyamatban, hogy az oldal használható maradjon), a számítógépén lévő fájl nem változik, az állapotsor pedig leírja, mi történt. A fájl újbóli megnyitásával visszatérhet a saját rendszeréhez. Egy már megnyitott felhőnél a felhősávban lévő {{ui:Újravetítés a modellhez…}} ugyanezt teszi.

Ha a fájl nem nevez meg rendszert, a BimCraft megkérdezi: {{ui:Melyik rendszerben van ez a fájl?}} Válassza ki a {{ui:Rendszer kiválasztása…}} lehetőséggel, és a válasz erre a fájlra ezen az eszközön megjegyződik. Az {{ui:A fájl saját rendszerének megtartása}} a pontokat úgy hagyja, ahogy vannak.

## Amikor valami közelítő

A problémák a párbeszédpanelen és a Problémák panelen vannak felsorolva, soha nem csendben:

- Olyan hely, amely a rendszer számára készült területen kívül esik: a számítások működnek, de a torzulás nő.
- A datumeltolódások, amelyekhez rácsfájl kell (NADCON, NTv2 és hasonlók), nem elérhetők. A más datumon lévő rendszereket az EPSG-nyilvántartás által felsorolt, rácsmentes eltolással mozgatjuk, és az eredmény a megadott pontosságon belül közelítő, amelyet az üzenet méterben ad meg.
- Egy pont, amelyet nem lehet vetíteni, kimarad, és meg lesz számolva; a méretkorláton felüli fájl a megadott korláttal együtt elutasításra kerül.

:::tip
A térképi koordinátákhoz térképi átalakítás kell. Átalakítás nélküli fájl a {{ui:Térképi origó…}} lehetőséggel helyezhető el a térképen.
:::

:::note
Rácsfájl nélküli datumváltás néhány méteren belül pontos; a Hely eredménye megadja, mennyire, ha a katalógus ismeri.
:::
