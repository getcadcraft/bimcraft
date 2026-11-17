---
title: Más modellek csatolása koordinációhoz
summary: Egy másik IFC-modell megjelenítése a sajátja mellett hivatkozással (soha nem egyesítve), elhelyezése közös koordinátákkal, térképi koordinátákkal vagy két ponttal, rajzolás közbeni fogás hozzá, és újratöltés, ha a fájlja megváltozik.
keywords: csatolás, kapcsolt modell, hivatkozás, xref, koordináció, összevonás, szerkezet, MEP, konzulens, közös koordináták, felmérés, térképi koordináták, újratöltés, eltávolítás a memóriából, dokumentumhivatkozás, IfcDocumentReference
from: 3e0f1eab
---

## Mit fog csinálni

Rajzoljon egy konzulens modellje (a szerkezet, a gépészet, a meglévő épület) alapján úgy, hogy semmit sem másol a saját fájljába.

A **kapcsolt modell** a 3D nézetben látható, és az alaprajzokon metszve jelenik meg, de soha nem változik meg, és soha nem mentődik a saját modelljébe. A modell csak a hivatkozást tárolja: a fájl nevét és azt, hová kerül.

## Modell csatolása

1. A bal oldali panel {{ui:Kapcsolt modellek}} szakaszában kattintson a {{ui:Modell kapcsolása…}} gombra, és válassza ki az IFC-fájlt. Azonnal megjelenik, a sora pedig **Megjelenítve** állapotot mutat.
2. A {{ui:Elhelyezés}} részben válassza ki, hová kerüljön:
   - **Közös koordináták** (kezdetben): koordinátái megegyeznek az övéivel, mintha mindkét modellt ugyanabból a kezdőpontból vették volna fel.
   - **Térképi koordináták**: mindkét fájl térképi koordinátái igazítják egymáshoz (mindkettőnek rendelkeznie kell térképi átalakítással; a BimCraft jelzi, ha valamelyiknek nincs).
   - **Két ponttal…**: kattintson egy pontra a kapcsolt modellen, majd arra a helyre a sajátjában, ahová kerülnie kell; utána egy második párra. A hivatkozás a két pont alapján mozog és fordul (függőleges tengely körül), hogy illeszkedjen.
3. A csatolás és az elhelyezés minden módosítása egy lépés: a {{key:Mod+Z}} visszavonja.

## Munka a kapcsolt modellel

- Az alaprajzok a kapcsolt modellt a szint vágási magasságában, vékony vonalakkal mutatják, a {{ui:Fal}} eszköz és a többi rajzolóeszköz pedig a sarkaihoz és éleihez fog.
- Válasszon elemeket a 3D nézetben a tulajdonságaik elolvasásához; a kapcsolt modell nem az, amelyet szerkeszt, ezért a {{ui:Modellek}} részben lévő választógombja ki van kapcsolva.
- **Megváltozott a fájl?** Ha a böngésző figyelni tudja a fájlt (fájlválasztón keresztül megnyitott fájl, vagy a Studióban), a BimCraft néhány másodperccel a fájl újbóli mentése után magától újratölti a hivatkozást, és ezt jelzi. Ellenkező esetben kattintson a {{ui:Újratöltés}} gombra.
- A {{ui:Eltávolítás a memóriából}} elrejti, és felszabadítja a memóriát; a hivatkozás a modellben marad. A {{ui:Betöltés…}} újra megjeleníti (Ön választja ki a fájlt: a böngésző nem tud fájlt a neve alapján önmagától megnyitni).
- A × eltávolítja a hivatkozást a modelljéből.

## Mit kell látnia

- Az IFC-fájlban: minden hivatkozáshoz egy IfcDocumentReference (a fájl neve), amely a projekthez kapcsolódik, és elhelyezése a projekt CadCraft_Links tulajdonságkészletében található. A modell újbóli megnyitásakor a hivatkozásai **Nincs betöltve** állapotban jelennek meg, amíg be nem tölti őket.

:::note
Az ütközésvizsgálatok, az Összehasonlítás és a Keresés a betöltött hivatkozást ugyanúgy használhatják, mint bármely más megnyitott modellt: lásd [Több IFC-modell együtt megtekintése](topic:several-models).
:::
