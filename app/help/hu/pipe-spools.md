---
title: Acél csőelőgyártmányok és előgyártmány-lapok
summary: Acél tompahegesztésű csőfutást darabolni előgyártmányokra a legnagyobb hossznál és az Ön által elhelyezett helyszíni hegesztéseknél, számozni őket, és minden előgyártmányhoz előgyártmány-lapot letölteni (3D-nézet, vágási hosszak, idomok, hegesztések, anyagjegyzék) PDF és CSV formátumban; a légcsatornák egyenes darabokból álló vágólistát kapnak.
keywords: előgyártmány, előgyártmányok, előgyártmány-lap, izometrikus, gyártás, előgyártás, helyszíni hegesztés, gyári hegesztés, tompahegesztés, vágási hossz, vágólista, anyagjegyzék, bom, acélcső, schedule 40, vonalszám, légcsatorna-vágólista, légcsatorna-darabok
from: 539f51de
---

## Mit fog tenni

Csőfutást úgy alakítson darabokká, amelyeket műhelyben hegesztenek, a szerelő pedig beépít: előgyártmányok, amelyek nem hosszabbak az Ön által választott hossznál, és az Ön által elhelyezett helyszíni hegesztéseknél szakadnak, mindegyiknek saját lappal.

Csak **acél tompahegesztésű csőből** készülnek előgyártmányok (csőméretek ASME B36.10M, könyökök ASME B16.9 hosszú sugárral). A réz-, PVC- és PEX-kötések nem tompahegesztések, így futásaik nem kapnak előgyártmányokat.

## Futás darabolása előgyártmányokra

1. Válasszon egy acélcső-futást. A Tulajdonságokban jelölje be a **Darabolás előgyártmányokra** lehetőséget.
2. **Leghosszabb előgyártmány**: a leghosszabb középvonal-hossz, amelyet egy előgyártmány lehet (kezdetnek 6 m, kb. 20 ft).
3. **Vonalszám**: minden előgyártmány számának része. Egy új előgyártmányos futás a rendszerének következő szabad számát kapja.

Az előgyártmányok a futás mentén, a kezdőpontjától számozódnak: `CHW-12-S01`, `CHW-12-S02` … (a rendszer, a vonalszám, az előgyártmány). Az előgyártmány darabonként nő; a rész, amely túl hosszúvá tenné, a következőt kezdi, az előgyártmánynál hosszabb egyenes szakaszt pedig ott vágják, ahol az előgyártmány megtelik.

## Helyszíni hegesztések elhelyezése

1. Nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Helyszíni hegesztés}} lehetőséget.
2. Kattintson arra az előgyártmányos csőre, ahová a helyszíni hegesztés kerül. Egyenes szakaszon belül a cső ott szakad; idomon vagy szelepen belül a hegesztés a közelebbi illesztéshez kerül.

A Tulajdonságok felsorolja a futás helyszíni hegesztéseit, mindegyiket a {{ui:Eltávolítás}} gombbal. Minden változás a {{ui:Visszavonás}} egy lépése.

## Előgyártmány-lapok

Egy előgyártmányos futás Tulajdonságaiban:

- {{ui:Előgyártmány-lapok (PDF)}}: előgyártmányonként egy oldal. Bal oldalon az előgyártmány 30°-os izometrikus nézetben: egyenes szakaszai számozva, a műhelyhegesztések pontként, a helyszíni hegesztések FW jelöléssel, és az alaprajz északi iránya. Jobb oldalon az előgyártmány száma, mérete, schedule-je és hossza, majd a **vágási hosszai**, az **idomai**, a **hegesztései** (műhelyi tompahegesztés minden illesztésnél az előgyártmányon belül, helyszíni hegesztés ott, ahol a következő előgyártmányhoz csatlakozik), és az **anyagjegyzéke** a cső súlyával (ASME B36.10M sima végű súly).
- {{ui:Előgyártmány-lista (CSV)}}: ugyanez, előgyártmányonként egy blokkban.

:::note
A vágási hosszak végtől végig értendők, a rajz szerint: nincs levonva gyökrés vagy hegesztési ráhagyás. A könyökök az ASME B16.9 hosszú sugarúak; a T-idomok, szűkítők és szelepek általános méretűek, a csőből számítva, nem az ASME B16.9 vagy egy gyártó szerint, és a lap ezt meg is mondja. Az idomok súlya nincs megadva. Rajzolási és koordinációs segédeszköz, amelyet mérnök méretez.
:::

## Az IFC-fájlban

Egy előgyártmányos futás minden része a **CadCraft_Spool** elemet hordozza: az előgyártmány azonosítóját (SpoolId), a futást, az előgyártmány számát a futásban, és azt, hol kezdődik és hol végződik a futás mentén. A futás megtartja szabályait (leghosszabb előgyártmány, helyszíni hegesztések, vonalszám) a saját készletében, így az előgyártmányok a fájl újbóli megnyitásakor ugyanúgy jönnek vissza.

## Légcsatornák: vágólista

Nyissa meg a {{ui:Build}} menüt, és kattintson a {{ui:Légcsatorna-vágólista}} gombra: ez rendszerenként, alakonként és méretenként a légcsatorna-egyenes darabjainak CSV-listája. Minden egyenes szakasz a Légcsatorna sávban megadott **Darabhossz** szerint darabokra van vágva (kezdetnek 1500 mm, kb. 5 ft), és megmarad a maradék. Csak hosszak: varratok, lemezvastagságok és csatlakozók nincsenek.
