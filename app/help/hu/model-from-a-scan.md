---
title: Modell készítése letapogatásból
summary: Rövid útmutató a lézeres letapogatástól a falakig: nyissa meg a pontfelhőt egy új épület mellett, igazítsa egy szinthez, és rajzolja át a falait az alaprajzon.
keywords: letapogatás, lézeres letapogatás, pontfelhő, megvalósult állapot (as-built), meglévő épület, felmérés, átrajzolás, letapogatásból BIM, modell letapogatásból, szelet, igazítás, derékszögbe állítás, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Amit el fog végezni

Rajzolja meg egy meglévő épület falait a lézeres letapogatásából: a falakat oda, ahol a letapogatás mutatja őket, a megfelelő szintre, egymáshoz képest derékszögben.

## Lépések

1. **Épület, amelybe rajzolhat.** {{ui:Fájl}} › {{ui:Új épület}}, annyi szinttel, ahány szintje az épületnek (a szinteket később is hozzáadhatja, lásd [A telek, a rajta álló épület és annak szintjei](topic:site-building-and-levels)). A {{ui:Rajzolás}} bekapcsol.
2. **A letapogatás.** Válassza a {{ui:Megjelenítés}} › {{ui:Pontfelhő}} menüpontot, majd válassza ki a fájlt (LAS, LAZ, E57, PLY, PCD, PTX vagy XYZ: lásd [Pontfelhő megjelenítése a modell mellett](topic:point-clouds)). A pontfelhő megjelenik a 3D nézetben, az alaprajz pedig a **szeletét** mutatja: a letapogatott pontokat a szint 1200 mm (4 ft) feletti magasságában, pontokként. Ez az a magasság, ahol a falak, ajtók és ablakok a legjobban látszanak.
3. **Igazítás a szinthez.** Nyissa meg a modellsáv {{ui:Letapogatás}} menüjét, és kattintson a {{ui:A padlójának igazítása ehhez a szinthez}} lehetőségre: a pontfelhő felfelé vagy lefelé mozdul, amíg a letapogatott padló a megjelenített szinten nem lesz. Ellenőrizze, hogy a szelet most átvág a falakon.
4. **Derékszögbe állítás az épülethez.** {{ui:Letapogatás}} › {{ui:Elforgatás az épülethez merőlegesre}}: a pontfelhő úgy fordul el, hogy a szeletében lévő falak az alaprajz tengelyei mentén fussanak, így a {{key:Shift}} lenyomva tartásával rajzolt falak illeszkednek a letapogatáshoz. A forgatás a talált falak közepe körül történik, így a szeletbe került fák vagy a szomszéd fala nem fordítja el a letapogatást. Először igazítsa a padlót: utána a szelet átvág a falakon.
5. **Falak átrajzolása.** Válassza a {{ui:Fal}} lehetőséget, és kattintson a pontok mentén: az eszköz a letapogatott pontokhoz (a fogásjel egy kis rombusz) és a már megrajzolt falakhoz is illeszkedik. A falat a középvonalán rajzolja meg, ezért kattintson a két pontsor közepére, amelyek között a fal húzódik; a vastagságát úgy adja meg, hogy előbb kiválasztja a faltípust. Ezután a szelet hézagai alapján adja hozzá az ajtókat és ablakokat.
6. **A következő szint.** Válassza ki a felette lévő szintet az alaprajz szintlistájában: a szelet követi a szint vágási magasságát. Csak akkor igazítsa újra a padlót a szinthez, ha a letapogatás padlói nincsenek ott, ahol a szintjei vannak.

## Amit látnia kell

- A szelet változik, ahogy a szintet váltja; a vastagabb szelet ({{ui:Letapogatás}} › {{ui:A szelet vastagsága}}) több pontot mutat ott, ahol a letapogatás ritka.
- A {{ui:Letapogatás}} › {{ui:Az igazítás visszavonása}} visszahelyezi a pontfelhőt oda, ahol megnyitáskor volt. Az igazítás csak a nézetben mozgatja a pontfelhőt: nincs mentve az IFC-fájlba, a megrajzolt falak pedig a helyükön maradnak. Az igazítás a pontfelhővel együtt változik, ha módosítja a {{ui:Elhelyezés}} vagy a {{ui:Mértékegységek}} beállítást, vagy ha másik modellt nyit meg.
- A {{ui:Letapogatás}} › {{ui:A szelet megjelenítése az alaprajzon}} elrejti vagy megjeleníti a pontokat.

:::tip
Nagy letapogatások: az alaprajz legfeljebb 60 000 pontot rajzol ki a szeletből, a 3D nézet pedig néhány millió pontot a teljes pontfelhőből; mindkettőt egyenletesen válogatva a letapogatásból, így a nagy fájl is gyors marad. Ha inkább a rajzolóalkalmazásban szeretne átrajzolni, használja a pontfelhősáv {{ui:Átrajzolás a CadCraftban}} gombját.
:::
