---
title: IFC-modell átvágása metszősíkkal
summary: Vágja szeletekre a 3D-modellt felülről, elölről vagy oldalról, vagy tartsa meg csak a metszetdobozon belüli részeket, illetve több, megdöntött lapú doboz együttes térfogatán belülieket, hogy belülre lásson; a vágást húzással vagy beírással mozgassa, fordítsa meg, és válassza ki, mit mutasson a vágás.
keywords: metszet, metszősík, metszetdoboz, fogópontok, húzás, margó, kijelölődoboz, vágódoboz, vágás, levágás, szeletelés, alaprajzi vágás, alaprajz, homlokzat, belső, belső tér, megfordítás, eltolás, metszettérfogat, lépcsős metszet, L-alakú, döntés, ferde vágás, ferde sík, extra sík
from: 6315e71a
---

## Mit fog tenni

Vágjon át egy IFC-modellt egyetlen síkkal, hogy belülre lásson: felülről egy alaprajzhoz, elölről vagy oldalról pedig az épületen átmenő metszethez.

## Lépések

1. Nyisson meg egy IFC-modellt. Lásd [IFC-modell megnyitása és körüljárása 3D-ben](topic:open-ifc-model).
2. Kattintson az eszköztárban a {{ui:Metszet}} gombra, vagy nyomja meg a {{key:X}} billentyűt. A modell félmagasságban átvágódik, és a sáv megjelenik az eszköztár alatt.
3. Válassza ki, honnan vágjon: {{ui:Felülnézet}}, {{ui:Elölnézet}} vagy {{ui:Oldalnézet}}. Az Elölnézet és az Oldalnézet a nézetet is a vágás felé fordítja.
4. Mozgassa a vágást: húzza az **Eltolás** csúszkát, vagy írjon be egy távolságot méterben a mezőbe, és nyomja meg a {{key:Enter}} billentyűt. Milliméterben is megadhatja, például `1200 mm`.
5. Kattintson a {{ui:Megfordítás}} gombra, hogy a vágás másik oldalát tartsa meg.
6. Kattintson egy elemre a vágáson, hogy lássa a tulajdonságait.
7. A vágás eltávolításához kattintson a {{ui:Ki}} gombra, kattintson újra a {{ui:Metszet}} gombra, vagy nyomja meg a {{key:X}} billentyűt.

## Metszetdoboz

Kattintson a {{ui:Doboz}} gombra ugyanebben a sávban, hogy csak a doboz belsejében lévő elemeket tartsa meg. Az {{ui:X}}, {{ui:Y}} és {{ui:Z}} mindegyikének két csúszkája van: hol kezdődik és hol ér véget a doboz, a modell szélétől méterben mérve. Az értékek mellettük láthatók.

- A {{ui:Doboz a kijelölés körül}} gomb a dobozt a kijelölt elemek köré illeszti, és rájuk nagyít. Minden oldalon 300 mm marad szabadon; ezt a {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Ráhagyás a kijelölés körül}} menüpontban módosíthatja.
- Ha elemeket jelölt ki, a {{ui:Megjelenítés}} › {{ui:Metszetdoboz a kijelölés körül}} vagy a {{key:Shift+X}} ugyanezt egy lépésben elvégzi, akkor is, ha nincs vágás.
- A dobozon lévő **fogópontok** a mutatóval mozgatják: húzzon a lap közepén lévő négyzetet az adott lap mozgatásához, az él közepén lévőt a két találkozó lap mozgatásához, a sarkánál lévőt a három lapé. A csúszkák követik. A {{ui:Felülnézet}} nézetben a sarok az alaprajzon mozgatja a dobozt, az {{ui:Elölnézet}} vagy {{ui:Oldalnézet}} nézetben pedig a homlokzaton.
- A {{ui:Teljes modell}} ismét a teljes modellre nyitja a dobozt.
- A {{ui:Felülnézet}}, {{ui:Elölnézet}} vagy {{ui:Oldalnézet}} visszavisz egyetlen síkra.

## Több dobozból álló térfogat, megdöntött lapok és extra síkok

Nem mindig doboz a szükséges alak: lépcsős metszet, L-alakú szárny vagy a rácshoz képest nem derékszögű fal menti vágás.

1. A {{ui:Doboz}} alatt kattintson a {{ui:Doboz hozzáadása}} gombra. A vágás most **bármelyik** doboz belsejében lévő részt megtartja, így két doboz lépcsős vagy L-alakú térfogatot alkot. A mellette lévő lista jelzi, melyik doboz csúszkáit módosítja ({{ui:Doboz 1}}, {{ui:Doboz 2}}…); a {{ui:A doboz eltávolítása}} a kiválasztottat távolítja el. Egy térfogat legfeljebb 8 dobozt tartalmazhat.
2. A {{ui:Dőlés és síkok}} részt megnyitva alakítsa ki a kiválasztott dobozt:
   - Válasszon egy {{ui:Lap}}-ot, és írja be, mennyire dől el mindkét irányba, fokban (legfeljebb 80°). A lap a közepe körül fordul; a többi lap ott marad, ahová a csúszkák helyezték. A {{ui:Merőleges}} visszaállítja.
   - A {{ui:Sík hozzáadása}} még egy síkkal vágja a dobozt. A {{ui:Lapok}} megadja, merre néz a levágott oldal, fokban, X-től Y felé; a {{ui:Lejtés}} azt adja meg, mennyire fordul felfelé (0 függőleges síkhoz, 90 vízszintes síkhoz); az {{ui:Eltolás}} azt, hogy a sík milyen messze van a doboz közepétől, méterben. A × eltávolítja. Egy doboz legfeljebb 6 extra síkot kaphat.
3. Ahol a térfogat szilárd testeket vág át, a vágási lapok ugyanúgy ki vannak töltve, a lépcsőnél összeérő két doboznál is.

:::tip
Ha a körvonal eltűnik, és nincs semmi bent, a megdöntések vagy síkok nem hagynak semmit abban a dobozban; a sáv ezt jelzi. Döntse vissza a lapot, vagy módosítsa a sík eltolását.
:::

## Az épület a telken elforgatva

Sok modell szögben áll a fájl tengelyeihez képest (valódi észak, közös koordináták). Ha a falak szögben futnak, egy új metszet az épülethez igazodva indul: az {{ui:Elölnézet}}, az {{ui:Oldalnézet}} és a doboz az épület saját falai mentén fut, a metszetsávban pedig az {{ui:Az épülethez igazítva}} gomb be van kapcsolva. Kattintson rá a modell tengelyeihez, majd újra a visszalépéshez (az állapotsor megmondja, mennyire van elforgatva az épület). A **Beállítások › BimCraft › Az épület a telken elforgatva › A telken elhelyezett állapot szerint** beállítás esetén a metszetek és nézetek a modell tengelyeiből indulnak. Lásd [Beállítások](topic:settings).

## Mit kell látnia

- A **Felülnézet** a vágás alatt lévő részt tartja meg, így a helyiségekbe lát bele. Az eltolás a modell aljától felfelé mérve értendő.
- Az **Elölnézet** a vágás mögött lévőt tartja meg, elölről nézve; az **Oldalnézet** a vágáson túlit, oldalról nézve. Az eltolás a modell elejétől vagy oldalától mérve értendő.
- Egy vékony színes körvonal mutatja a sík helyét.
- Ahol a sík falon, födémen vagy más szilárd testen halad át, a vágási lap sötét színnel van kitöltve, mint egy rajzolt metszet. A sávban lévő {{ui:Kitöltés}} ezt be- és kikapcsolja.
- A jobb alsó sarokban lévő nézetkocka bármely oldalról a vágás felé fordítja a modellt.
- A kijelölés azt választja ki, amit lát: a levágott rész nem jelölhető ki.

## Gyakori hibák

- **Nem változott semmi.** A vágás lehet a tető fölött vagy a modellen kívül. Húzza a csúszkát, vagy írjon be kisebb eltolást.
- **Az eltolás visszaugrott.** A modellen túli távolságot a végére viszi, és az állapotsor ezt jelzi.
- **Egy probléma (BCF) csak a térfogat egy részét mutatja.** Egy probléma (BCF) egy dobozt tart meg a megdöntött lapjaival és síkjaival: a térfogat első dobozát. Az állapotsor ezt jelzi, amikor létrehozza a problémát.
- **Üres a vágás.** A {{ui:Kitöltés}} a sávban ki van kapcsolva: kattintson rá a falak, födémek és más szilárd testek vágási lapjainak kitöltéséhez.
- **A kitöltött vágás foltos, vagy kihagy egy darabot.** A kitöltéshez zárt testek kellenek; az olyan elem, amelynek alakja a fájlban nincs lezárva (egyetlen lap, fa lombozata), kitöltetlen marad, nincs kifestve. Az eltérő színű részekből álló elem (keret és üvege) akkor töltődik ki, ha részei összezáródnak.
- **Hol van a metszetsáv?** Abban a 3D-s részben van, amelyet vág: a {{ui:Felosztás}} nézetben a 3D-s félen, a {{ui:Alaprajz}} nézetben egyedül a rajzsáv alatt. Rövid nézetben görgethető.

## Tovább

- [Szintek, terek és élek megjelenítése és elrejtése](topic:storeys-and-spaces)
- [DWG- vagy DXF-rajz megtekintése 3D-ben](topic:dwg-in-3d) — a 3D-s rajzokon ugyanaz a metszősík érhető el.
