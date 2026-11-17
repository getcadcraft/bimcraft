---
title: Homlokzat elhelyezése és nézetének megnyitása
summary: Helyezzen el egy homlokzatjelölőt az alaprajzon, állítsa be az irányát, majd keresse meg a rajzát a projektböngészőben, szerkessze, és tegye rajzlapra. Lépések a szalagos elrendezésekhez és a klasszikus elrendezéshez.
keywords: homlokzat, homlokzati nézet, homlokzatjelölő, homlokzatcímke, homlokzat elhelyezése, új homlokzat, homlokzat készítése, külső homlokzat, oldalnézet, elölnézet, nézet egy pontból, hol van a homlokzatom, homlokzat megnyitása, homlokzat rajzlapon, homlokzat megfordítása, homlokzat átnevezése, északi homlokzat, nézetek csempézése, nézetablak felosztása, alaprajz és 3D egymás mellett
from: a7cfd2b9
---

## Amit el fog végezni

Készítsen saját homlokzatot: az épület rajzát abból a pontból, amelyet Ön választ, abba az irányba nézve, amerre szeretné. Két kattintás kell hozzá egy alaprajzon. A rajz ezután az épület többi homlokzata közé kerül.

:::note
A négy oldal már megvan. Minden épületnek van Észak, Kelet, Dél és Nyugat homlokzata a {{ui:Projektböngésző}} alatt, a {{ui:Homlokzatok}} csoportban, bármi elhelyezése nélkül. Saját homlokzatot akkor helyezzen el, ha máshonnan szeretne nézetet: egy ferde szárny elé merőlegesen, egy udvarból, vagy egy fal nézetét egy helyiségen belül.
:::

## Hol található a parancs

- Szalagos elrendezések: {{ui:Nézet}} › **Létrehozás** › {{ui:Magasság}}.
- Klasszikus elrendezés: kapcsolja be a {{ui:Rajzolás}} lehetőséget, majd {{ui:Build}} › {{ui:Magasság}}.
- Bármely menüstílus: a parancs neve Elevation; a parancspaletta megtalálja, a parancssor pedig az ELEVATION parancsot fogadja.

## Lépések

1. Válassza ki a {{ui:Magasság}} parancsot. A homlokzat az alaprajzon helyezkedik el, így ha a 3D nézetben volt, a BimCraft azt a szintet mutatja alaprajzként, amelyen éppen állt. A mutató ezt írja: **Kattintson oda, ahol a homlokzat áll**.
2. Kattintson arra a helyre, ahonnan a nézet készül. Külső homlokzat esetén kattintson az épületen kívülre, kis távolságra attól a faltól, amelyet látni szeretne.
3. A mutató most ezt írja: **Kattintson, ahogy kinéz**. Mozduljon az épület felé: egy nyíl mutatja az irányt, az első kattintás fölött átfutó rövid vonal pedig azt a szélt jelzi, ahonnan a nézet látszik. Kattintson.
4. Az alaprajzon megjelenik egy számmal ellátott kör és egy mutató. Ez a homlokzatjelölő. Az első a 1, a következő a 2.
5. A befejezéshez nyomja meg az Esc billentyűt, vagy folytassa, és helyezzen el másikat.

Egy jelölő elhelyezése egy lépés: a {{key:Mod+Z}} visszavonja.

## A rajz megnyitása

Az alaprajz a második kattintás után is látható marad. A rajz a {{ui:Projektböngésző}} alatt található:

1. Nyissa meg a {{ui:Homlokzatok}} csoportot. Az Ön homlokzata a négy oldal után, **Homlokzat 1** néven szerepel.
2. A sorában lévő ceruza gombbal ({{ui:Szerkesztés ebben a nézetben}}) nyissa meg a rajzot, és dolgozzon benne: mozgassa a falakat, ajtókat, ablakokat és szinteket, adjon hozzá megjegyzéseket és méreteket. Lásd: [Szerkesztés homlokzatokban és metszetekben](topic:edit-in-elevations).
3. Kattintson magára a sorra a rajzkészlet megnyitásához, vagy adja hozzá a nézetet saját rajzlaphoz. Lásd: [Nézetek és rajzlapok](topic:views-and-sheets).

A klasszikus elrendezésben a projektböngésző a bal oldali panelen van, amíg a {{ui:Rajzolás}} be van kapcsolva. A szalagos elrendezésekben ez a **Tulajdonságok** alatti {{ui:Projektböngésző}} lap.

## Mit mutat a nézet

- Mindent, ami a jelölő előtt van, az épület határáig. Semmit, ami mögötte van.
- A szinteket, nevükkel és magasságukkal együtt.
- Ha a jelölő az épületen belül áll, az ott álló elemek a metszethez hasonlóan átvágva jelennek meg. Tiszta külső homlokzathoz álljon kívülre.

## Módosítás

Válassza ki a jelölőt az alaprajzon (kattintson a körére a {{ui:Kijelölés}} eszközzel). A Tulajdonságok a következőket tartalmazza:

- {{ui:Címke}}: a száma vagy saját neve, legfeljebb 8 karakter.
- {{ui:A nézet megfordítása}}: nézzen az ellenkező irányba ugyanarról a pontról.
- {{ui:Látótávolság}}: milyen messzire ér el a nézet a jelölő előtt. A 0 mindent megmutat.

A Delete billentyűvel törölheti a jelölőt és a rajzát. A visszavonás mindkettőt visszaállítja.

:::tip
A terv és a 3D nézet egyszerre látásához munka közben használja a szalagos elrendezésekben a {{ui:Nézet}} › **Ablakok** › {{ui:Nézetek csempézése}} parancsot, a klasszikus elrendezésben pedig a {{ui:Felosztás}} parancsot. A nézetlapra kattintva egy nézetre lehet visszatérni.
:::

## Korlátok

- A jelölőt az alaprajzon még nem lehet húzni vagy elforgatni. Törölje, és helyezze el újra, vagy használja a {{ui:A nézet megfordítása}} parancsot.
- A rajzlapra felvehető nézetek listájában a saját homlokzata a metszetekkel együtt szerepel.
- Az ajtó- és ablakcímkék a négy oldalhomlokzaton jelennek meg, nem az Ön által elhelyezett nézeten.

## Az IFC-ben

A jelölő a fájlban IfcAnnotation elemként mentődik, "Elevation 1" névvel és "Elevation marker" objektumtípussal, abban a szintben, ahol elhelyezték. Más program annotációként jeleníti meg; magát a rajzot a BimCraft készíti el minden alkalommal a modellből.
