---
title: Elem küldése a PartCraftba és visszavétele
summary: Válasszon ki egy tartót, konzolt, korlátot vagy berendezési darabot, tervezze meg alkatrészként a PartCraftban az azt körülvevő épülettel, majd fogadja el az új alakot a modellbe.
keywords: partcraft, alkatrész, küldés, kapcsolat, elem, tartó, konzol, kerítés, korlát, berendezés, tervezés, oda-vissza, elfogadás, módosítva, alkatrész-kapcsolatok
from: 4ce2f449
---

## Amit elvégez

Tervezzen meg egy épületelemet alkatrészként: küldje el a PartCraftba, módosítsa ott (kivágás, hozzáadás, fúrás, átméretezés), és vigye vissza az új alakot a modellbe.

## Lépések

1. Válasszon ki egy elemet a modellben: általános elemet, berendezést, oszlopot, gerendát, korlátot vagy bútort.
2. Válassza az eszköztáron a {{ui:Alkatrész-kapcsolatok}} lehetőséget, majd a {{ui:Küldés a PartCraftba}} lehetőséget. A PartCraft új lapon nyílik meg az elemmel alkatrészként. A 3 m-en belüli elemek szürkén rajzolódnak ki mellette, így a helyén tervezheti meg. Ezeket ott nem lehet módosítani.
3. Módosítsa az alkatrészt a PartCraftban. A PartCraftban válassza a {{ui:Fájl}} › {{ui:Exportálás}} › Mentés vissza a BimCraftba lehetőséget. Akárhányszor visszamenthet.
4. A BimCraftban az {{ui:Alkatrész-kapcsolatok}} gomb darabszámot mutat, a kártya pedig az elemet {{ui:Módosítva a PartCraftban}} állapotban listázza, a méret- és térfogatváltozással szavakban.
5. Válassza a {{ui:Megjelenítés}} lehetőséget, hogy megnézze, majd az {{ui:Elfogadás}} gombot, hogy az elem megkapja az új alakot, vagy a {{ui:Sajátom megtartása}} gombot, hogy az eredeti maradjon.

## Amit látnia kell

- Az elfogadás egy visszavonási lépés. Az elem megtartja helyét, GlobalId-ját, típusát, anyagát és tulajdonságait. Csak a testét cseréli le.
- Az elem kap egy {{ui:CadCraft_PartLink}} tulajdonságkészletet a kapcsolattal, állapotával és revíziójával.
- A {{ui:Újraküldés}} ugyanazt az elemet ugyanazon a kapcsolaton keresztül újra megnyitja a PartCraftban.

## Jó tudni

- A falakat, padlókat, tetőket, ajtókat, ablakokat, lépcsőket, rámpákat és tereket az épületeszközök egy körvonalból rajzolják, és minden módosítás után újraépítik. Egy másik alkalmazástól érkező test felülírná őket, ezért a rendszer ezeket indokkal elutasítja.
- Az alakzat hálóként (IFC-tesszelláció) tér vissza, nem az alkatrész jellemzőiként. Az alkatrész előzményei a PartCraftban maradnak.
- Ha az elem a küldése után megváltozott a modellben, a kártya az elfogadás előtt ezt jelzi: az elfogadás felülírja ezeket a módosításokat.
- Semmi nem töltődik fel. A két alkalmazás ugyanannak a webhelynek az oldala, és az elemet ugyanabban a böngészőben adják át egymásnak. Mindkettőnek nyitva kell lennie ugyanabban a böngészőben.
- Az elemnek a PartCraftban zárt testté kell alakulnia. Az olyan elemet, amelynek alakzatában nagy nyílt hézagok vannak, a PartCraft a nyitott élek számával együtt elutasítja.
- Az elfogadáshoz az elemet tartalmazó modellt kell aktívvá tennie.
