---
title: Rétegek és rajzlapok kezelése
summary: Rajzrétegek be- és kikapcsolása, átváltás a modelltér és a rajzlapok között, valamint annak megértése, hogyan mutatják a rajzlapok a modellt a nézetablakaikon keresztül.
keywords: rétegek, réteg be és ki, befagyasztás, feloldás, rajzlapok, elrendezések, papírtér, fülek, nézetablakok, rétegkezelő, la
from: a9a16b53
---

## Mit fog csinálni

Tisztítsa meg egy zsúfolt rajz nézetét a rétegek kikapcsolásával, majd nézze meg a rajz rajzlapjait egyenként.

## Lépések: rétegek

1. Nyisson meg egy DWG vagy DXF rajzot.
2. Keresse meg a bal oldali {{ui:Rétegek}} listát. Minden rétegnek van jelölőnégyzete, színmintája és neve.
3. Vegye ki egy réteg jelölését, hogy elrejtse rajta lévő mindent.
4. Kattintson a {{ui:Mind ki}} gombra minden réteg elrejtéséhez.
5. Jelölje be csak azokat a rétegeket, amelyeket látni szeretne.
6. Kattintson a {{ui:Mind be}} gombra, hogy újra mindent megjelenítsen.

## Amit látnia kell

A rétegek egyszerre tűnnek el és jelennek meg a {{ui:Modell}} lapon és minden rajzlapon. Azok a rétegek, amelyek maga a rajz szerint ki vannak kapcsolva vagy be vannak fagyasztva, nincsenek bejelölve.

## Lépések: rajzlapok

1. Nézze meg a rajz fölötti füleket: a {{ui:Modell}}, majd minden rajzlap a nevével.
2. Kattintson egy rajzlap fülre.
3. Nézze meg a rajzlapot: a papír sötétebb asztalon fekszik, és minden nézetablak a modell saját részét mutatja a saját méretarányában és szögében.
4. Nagyítson egy nézetablakra a részletek olvasásához. A rajzlapot nagyítja, nem a nézetablakot, így az egész rajzlap együtt mozog.
5. Kattintson az {{ui:Illesztés}} gombra, vagy kattintson duplán az egész rajzlap újbóli megtekintéséhez.

## Hogyan működnek itt a rajzlapok

A rajzlap (elrendezés vagy papírtér) egy címblokkot tartalmaz, valamint olyan nézetablakokat, amelyek a modelltérbe néznek. A BimCraft minden nézetablakot a szélére vágva rajzol ki, a saját méretarányában és elforgatásával, és elrejti azokat a rétegeket, amelyek az adott nézetablakban be vannak fagyasztva. Minden rajzlap első nézetablaka maga a rajzlap, és nincs kétszer kirajzolva.

## Gyakori hibák

- **Réteg-változtatások mentését várni.** A rétegbeállítások csak a nézetet befolyásolják, amíg másik fájlt nem nyit meg.
- **Nézetablakonkénti rétegvezérlést várni.** A {{ui:Rétegek}} lista minden helyen kapcsolja a réteget. A rajz által egy nézetablakban befagyasztott rétegek ott befagyasztva maradnak.
- **Rétegkeresést vagy rétegállapotokat keresni.** Még nincs elkészítve. A lista a rajz sorrendjében van.
- **Nézetablakon belül dolgozni.** Nincs mit aktiválni: a BimCraft csak a rajzlapot mutatja. Használja a {{ui:Modell}} gombot a modelltér közvetlen megtekintéséhez.
