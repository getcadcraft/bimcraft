---
title: Aknák és nyílások a födémeken át
summary: Az akna egyetlen körvonal, amely két szint között minden födémet, mennyezetet és tetőt átvág. A függőleges nyílás ezek közül egyet vág át. A falnyílás falat vág.
keywords: akna, liftakna, lift-akna, lépcsőnyílás, lépcsőmagasság, függőleges nyílás, padlónyílás, mennyezeti nyílás, tetőnyílás, világítónyílás, lyuk a padlóban, falnyílás, IfcOpeningElement, levonás, nettó terület
from: 8e9e1641
---

## Mit fog csinálni

Vágjon egy liftaknát az épületen egyetlen vázlattal, vágjon egy lyukat egy szinten, és nézze meg, mennyi került ki a területekből.

## Hol vannak az eszközök

- Szalagos elrendezés: {{ui:Építészet}} › **Nyílás** › {{ui:Akna}}, {{ui:Függőleges nyílás}} és {{ui:Falnyílás}}.
- Klasszikus elrendezés: a rajzsávban a {{ui:Helyiségek}} menü (Akna, Függőleges nyílás), valamint a {{ui:Falak}} menü (Falnyílás).

## Akna

1. Nyissa meg annak a szintnek az alaprajzát, amelyen az akna kezdődik. Válassza az {{ui:Akna}} parancsot.
2. A sorban adja meg az {{ui:Alsó szint}} és a {{ui:Felső szint}} értékét, valamint az eltolást, ha a nyílás ezek fölött vagy alatt kezdődik vagy végződik.
3. Kattintson a körvonal sarkaira. Az első sarokra újra kattintva, dupla kattintással vagy az {{key:Enter}} megnyomásával fejezze be.
4. A két magasság közötti minden födém, mennyezet és tető át lesz vágva. Az állapotsor azt mutatja, hányat.

Az akna egy elem. Bármelyik szinten, amelyen áthalad, kiválaszthatja a körvonalát: a **Tulajdonságok** között van a neve, a szintjei és az eltolásai, az, amit átvág, valamint a kivágott terület. Ha módosítja, minden nyílás követi. Ha törli, minden nyílás eltűnik. Mindegyik egy visszavonási lépés.

Folyamatosan vág: a szintjei közé később készített födémet kérés nélkül is átvágja, a törölt födémet pedig elengedi.

Az akna alatt álló födém nincs átvágva, mert a felső síkja az alsó szint. Ha ezt is át akarja vágni, adjon az alsó szintnek negatív eltolást. A tetőn való áthaladáshoz adjon a felső szintnek pozitív eltolást.

## Függőleges nyílás

1. Válassza a {{ui:Függőleges nyílás}} parancsot. A sorban adja meg, mit vágjon át: a födémet, a mennyezetet vagy a tetőt.
2. Kattintson a körvonal sarkaira, és a fentiek szerint fejezze be.
3. Az adott szint alatti födém, mennyezet vagy tető át lesz vágva. Ez egyetlen elemhez tartozik: ha törli a födémet, a nyílás vele együtt törlődik.

## Falnyílás

A {{ui:Falnyílás}} a [Fal alakítása](topic:wall-shape) fejezet eszköze: kattintson a falra az alaprajzon, vagy 3D-ben a homlokzatán két sarokra.

## Mennyiségek

A födémekre vonatkozó mérési szabály szerint egy elem nettó területe a bruttó területe mínusz az abból kivágott rész. Az akna vagy a függőleges nyílás minden átvágott födémen és mennyezeten levonás; a {{ui:Padlók és felületkezelések}} kimutatások és az IFC-mennyiségek ugyanezeket az értékeket mutatják. Tetőn a levonás a tetőfelület területe: a vetületi terület osztva a dőlésszög koszinuszával.

Az elem szélén túlnyúló körvonal csak az elemen lévő részt vonja le.

## Ha nincs mit átvágni

Az akna akkor is elkészül, ha nincs semmi az útjában, és ezt jelzi is: a később oda épülő elemeket át fogja vágni. A függőleges nyílásnak kell valami alá: ha ott nincs semmi, az állapotsor ezt jelzi, és nem készül el semmi.

## Az IFC-ben

Minden vágás egy IfcOpeningElement, amelynek IfcRelVoidsElement kapcsolata van az átvágott elemhez, így bármely IFC-program megmutatja a lyukat. A tetőt laponként vágják át. Maga az akna a nyílásaiból álló IfcGroup.

## Még nincs elkészítve

- Ívelt körvonalak.
- Az akna falai: rajzolja meg a Fal eszközzel.
- A körvonal szerkesztése a sarkainak húzásával (módosítsa a Tulajdonságok között, vagy törölje és vázolja újra).
- Egy megrajzolt födém saját tulajdonságai csak a saját nyílásai levonása utáni területet mutatják; a kimutatások és az IFC-mennyiségek az aknáét is tartalmazzák.

Lásd még: [Helyiségek és helyiségelválasztók](topic:rooms-and-separators).
