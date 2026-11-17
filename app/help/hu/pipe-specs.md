---
title: Csőspecifikációk, szelepek, csappantyúk és gyártói családok
summary: Saját csőspecifikációk beállítása (anyaggal, kötéssel és érdességgel megadott méretáblázatok), amelyek a modell fájljában maradnak; szelepek, szűrő és csappantyúk elhelyezése a futásokon; gyártói szelep- vagy berendezésmodell behozása csatlakozóportokkal rendelkező családként.
keywords: csőspecifikáció, csőspecifikációk, csővezeték-specifikáció, csőosztály, egyedi cső, méretáblázat, cső, higiénikus cső, rozsdamentes, schedule, külső átmérő, falvastagság, belső átmérő, érdesség, nyomásfokozat, csv, json, importálás, exportálás, táblázatkezelő, szabvány, bpe, din, en 10357, en 10255, szelep, szelepek, pillangószelep, beszabályozó szelep, szabályozószelep, szűrő, csappantyú, légszabályozó, tűzcsappantyú, oem, gyártó, gyártmány, család, családok, portok, csatlakozás, step, obj, gltf, ifc, radiátor, konvektor, panelfűtő, légkezelő, légbefúvó, rács
from: bc2f7c4e
---

## Mit fog tenni

Rajzoljon csövet a saját specifikációjában a beépített acél-, réz- és műanyagtáblázatok helyett, helyezzen szelepeket és csappantyúkat a futásokra, és helyezzen el gyártói modellt csatlakozóportokkal, amelyekhez a csövek kapcsolódnak.

:::note
A rajzolási és koordinációs segédeszköz. A csőspecifikáció a beírt vagy importált számokat tartalmazza: minden táblázatot ellenőrizzen a projekt szabványával. A beépített szelepek, szűrők és csappantyúk a futás mérete alapján készült sematikus alakzatok, nem gyártó vagy szelepszabvány szerinti hosszúságúak.
:::

## Csőspecifikáció beállítása

1. Kapcsolja be a {{ui:Rajzolás}} lehetőséget, nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Csőspecifikációk}} gombot. Ugyanez a gomb a Cső eszköz sávján is megtalálható.
2. Válassza az {{ui:Új}} gombot, vagy induljon fájlból, beillesztésből vagy az alábbi kezdő specifikációk egyikéből.
3. Írja be a nevét, a követett szabványt vagy hivatkozást, az anyagot, valamint a végződés vagy kötés típusát.
4. Soronként egy méretet adjon meg: a méret nevét, a külső átmérőt és a falvastagságot milliméterben. Ha inkább a belső átmérő áll rendelkezésére, azt írja be a falvastagság helyett: a másik érték automatikusan kitöltődik. A DN, a nyomásfokozat és a tömeg nem kötelező.
5. Opcionálisan: az érdességet milliméterben (a nyomásesés-számítás ezt használja), a szigetelés vastagságát, amellyel az új futások indulnak, a könyök sugarát a külső átmérő szorzójaként, azt, hogy a specifikációban vannak-e T-idomok és szűkítők, és a 3D-nézetben használt saját színt.
6. Jelölje be azokat a közműveket, amelyek új futásai ebben a specifikációban induljanak, például a hűtött víz.
7. Válassza a {{ui:Mentés a modellbe}} gombot.

A specifikációk a modellfájlban mentődnek. Bárki, aki megnyitja a fájlt, látja őket, és a Visszavonás visszavon egy változtatást.

Egy specifikációt, vagy annak egy méretét nem lehet törölni, amíg abban futás van rajzolva. Egy méret számainak módosítása újrarajzolja az abban a méretben lévő futásokat.

## Specifikáció újrafelhasználása másik modellben

- {{ui:Exportálás .json}} a kijelölt specifikációt egy kis fájlba menti; {{ui:Összes exportálása}} a modell minden specifikációját. {{ui:Fájl importálása}} ezeket visszaolvassa.
- {{ui:Exportálás .csv}} a méretek táblázatát táblázatkezelőhöz menti. A {{ui:Fájl importálása}} a `.csv` fájlt is beolvassa.
- {{ui:Sorok beillesztése}} a táblázatkezelőből másolt táblázatot veszi át. Az első sor nevezi meg az oszlopokat: `Size`, `OD` és `Wall` (vagy `ID`), és opcionálisan `DN`, `Pressure`, `Weight`. Soronként egy méret. A számok milliméterben értendők, hacsak nem hüvelykben választ, vagy egy cella nem írja ki a saját egységét (`0.065 in`).

## Kezdő specifikációk

{{ui:Kezdő specifikáció hozzáadása}} ezek egyikét a modelljéhez adja, szerkeszthető másolatként:

| Kezdő | Méretek |
|---|---|
| ASME BPE cső | 1/4" – 6" |
| EN 10357 A sorozatú cső (DIN 11850, 2. sor) | DN10 – DN200 |
| EN 10255 acélcső, közepes sorozat | DN15 – DN150 |
| EN 10255 acélcső, nehéz sorozat | DN15 – DN125 |

Ezek a táblázatok azok a külső átmérők és falvastagságok, amelyeket a szabványhoz két vagy több közzétett beszállítói oldal közöl és egyezően megad. Nem a szabványokból származnak. Azok a méretek, amelyeket csak egy oldal adott meg, kimaradnak. Minden kezdő specifikáció feltünteti a forrásoldalait, és „ellenőrizze a projekt szabványával” megjelöléssel van ellátva. Érdesség, nyomásfokozat vagy tömeg nincs megadva.

## Futás rajzolása specifikációban

1. Válassza a {{ui:Cső}} lehetőséget. Abban a specifikációban indul a szolgáltatás, amelyet bejelölt. Bármely más futáshoz az anyaglistában válassza ki a specifikációt: a specifikációk a beépített anyagok után, „Spec: név” formában szerepelnek.
2. A méretlista most csak az adott specifikáció méreteit tartalmazza. Válasszon egyet, és rajzolja meg a futást.

Egy futást később specifikációba úgy helyezhet át, hogy kijelöli, és a Tulajdonságokban módosítja az **Anyag**-ot. Mérete a specifikáció legközelebbi mérete lesz a külső átmérő szerint.

Az IFC-fájlban a cső hordozza a specifikáció nevét, szabványát, anyagát, kötését és méreteit (`CadCraft_PipeSpec` és `Pset_PipeSegmentTypeCommon`, a csövön és annak típusán).

A méretezési és nyomásesés-számítások a specifikáció belső átmérőjét olvassák. Ha a specifikációnak van érdessége, a futás súrlódását azzal számítjuk ki (Darcy–Weisbach); ha nincs, a számítás szokásos alapértékét használjuk.

## Szelepek, szűrő és csappantyúk

1. Válassza a {{ui:Szelep}} lehetőséget, és a sávban válassza ki a fajtát: tolózár, golyóscsap, pillangószelep, gömbszelep, visszacsapó szelep, beszabályozó vagy szabályozószelep, vagy szűrő csöveknél; légszabályozó vagy tűzcsappantyú légcsatornáknál.
2. Kattintson arra a futásra, ahová kerül. A futás körülötte megszakad, és mindkét oldala csatlakoztatva marad. A szelep a futás méretét veszi át, és a futással együtt mozog.

A futás Tulajdonságai mindegyiket felsorolják, a {{ui:Eltávolítás}} gombbal; a futás újra összezáródik.

A nyomásesés-számítás csak a tolózár, golyóscsap, gömbszelep és visszacsapó szelep idomveszteségét számolja. A többi fajta, a csappantyúk és a gyártói családok ott nem adnak veszteséget: ezt a saját ellenőrzésében vegye figyelembe. Ezek a **Idomok és szelepek** kimutatásban és a mennyiségkimutatásban szerepelnek, IFC-ben pedig szelepként, szűrőként (a szűrő) és két csatlakozó porttal rendelkező csappantyúként íródnak ki.

## Gyártói modell családként

1. Nyissa meg a {{ui:Build}} menüt, válassza a {{ui:Családok}} lehetőséget, majd a **Modell importálása** lehetőséget. IFC, STEP, OBJ, STL, glTF és könyvtári elem fájlok olvashatók be. OBJ és STL esetén először állítsa be a fájl mértékegységét és felfelé mutató tengelyét.
2. A portok párbeszédpanelben írja be a nevet, a gyártót és a típusszámot.
3. Válassza ki, hogy **Futáson** legyen (szelep, szűrő vagy csappantyú), vagy **Berendezés**, és hogyan íródjon ki.
4. Adja meg a portjait. Mindegyiknek van neve, cső vagy légcsatorna, közege, mérete milliméterben (csőnél a külső átmérő), a névleges mérete a specifikációja szerint, a végtípusa, a helyzete és az iránya. Az {{ui:Oldallapon}} lehetőség a modell határoló dobozának egy oldalának közepére helyez portot. A kis felülnézet mutatja a portokat.
5. Válassza a {{ui:A család mentése a modellben}} lehetőséget.

Egy futáson lévő családhoz pontosan két port kell, egy egyenesen, egymástól ellentétes irányba nézve. Válassza ki a Szelep eszköz listájából, és kattintson egy futásra: a családot a saját hosszában helyezi el, a csövek pedig a portjaihoz csatlakoznak.

Egy családot soha nem nyújtanak meg. Ha portjai nem egyeznek a futás méretével, az elhelyezéskor szól, és a {{ui:Kapcsolatok ellenőrzése}} listázza.

Berendezés-családot a {{ui:Berendezések}} eszközzel, **Gyártói család** típusban helyezhet el. A csövek és légcsatornák a portjaihoz illeszkednek.

A {{ui:Letöltés könyvtári elemként}} a portjaival együtt fájlba menti a családot, amelyet beküldhet a Könyvtárba.

## Radiátorok és konvektorok

A {{ui:Berendezések}} lehetőségnél van **Radiátor** és **Konvektor / panelfűtő** is: általános testek, előre- és visszatérő csatlakozóval fűtővízhez. Lásd: [Portokkal rendelkező gépészeti berendezés](topic:mep-equipment).
