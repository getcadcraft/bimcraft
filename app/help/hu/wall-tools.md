---
title: Falalakzatok, felosztás, eltolás, nyújtás és zárolás
summary: Rajzoljon falakat téglalapként, sokszögként, ívként, kijelölt vonalakra vagy egy körvonal köré; ossza fel őket, vegyen ki belőlük darabot, tolja el, nyújtsa dobozzal, igazítsa és zárolja egymáshoz, méretre vagy rácsvonalra. Minden változás összekapcsolva tartja a falakat, és egy visszavonási lépés.
keywords: típuscsere, típusváltás, átállítás, mi mozdult, lod, fejlesztési szint, csatlakozási stílus, gérvágás, tompa, sarok levágása, falcsatlakozás, következő, átmegy, csatlakozás tiltása, csatlakozás engedélyezése, rétegprioritás, mag, prioritás, csomópont, téglalap, elforgatott téglalap, sokszög, beírt, körülírt, ív, középpont, érintőív, vonalak kiválasztása, körvonal, nyomkövetés, bűvös pálca, felosztás, rés, szakasz törlése, újracsatlakoztatás, eltolás, másolat, dobozos nyújtás, keret, nyújtás, igazítás, zárolás, lakat, kényszer, méret zárolása, méret szerkesztése, rács, zárolás rácshoz, rácsvonal mozgatása, elhelyezési eltolás, szabadon álló, növekedés innen, mérés innen, tengelyvonal, belső felület, külső felület, leválasztás, alt
from: 5b7d2f75
---

## Mit fog csinálni

Készítsen és változtasson falakat a fal eszköz receptjeivel. Mindegyik ugyanúgy végződik, mint a fal rajzolása a sarkainál fogva: a sarkok maguktól összekapcsolódnak, a csatlakozások a fájlban tárolódnak, és a teljes változás a **Módosítások** egyetlen lépése, amelyet a {{ui:Visszavonás}} visszavon. A falak megtartják azonosságukat: egy felosztott, eltolt vagy nyújtott fal ugyanaz a fal marad, az ajtóival, ablakaival és méreteivel együtt.

## Téglalap, sokszög vagy ív rajzolása

Kapcsolja be a {{ui:Rajzolás}} funkciót, nyissa meg az {{ui:Alakzatok}} (a Rajzolás csoportban), vagy válasszon alakzatot a Fal sor **Alak** listájából. A Fal sorban látható a falfajta, a rajzreferencia, a külső oldal és a tető, ahogy a {{ui:Fal}} eszköznél. Ezután kattintson, vagy írja be a pontokat (x,y · @dx,dy · @hossz<szög · hossz a mutató irányában):

- **Téglalap**: két átellenes sarok. Négy fal, négy összekapcsolt sarok, egy lépés.
- **Elforgatott téglalap**: ahol az első oldal kezdődik és végződik (ez adja az irányát és hosszát), majd egy harmadik kattintás a másik oldalhoz.
- **Sokszög**: a középpont, majd egy sarok (**Beírt**) vagy egy oldal közepe (**Körülírt**). Először állítsa be az **Oldalak** számát (3–64).
- **Ív, középponttal**: a középpont, a kezdőpont (ez adja a sugarat), a végpont. **Körüljárás**: a rövidebb út, az óramutató járásával ellentétes vagy azzal megegyező irány. Háromnegyed körön átívelő ívet két falként rajzol.
- **Érintőív**: kattintson egy fal végére, majd arra a pontra, ahol az ív véget ér. Az ív a fal végéből a fal saját irányában indul.

Egy zárt alakzat külső oldala kifelé néz. Ha a **Külső felület** vagy **Belső felület** oldalán rajzol, az a felület, amelyre kattint, marad a helyén.

## Falak meglévő vonalakon

- **Vonalak kiválasztása**: kattintson egy vonalra, és fal kerül rá. Nyomja meg a {{key:Tab}} billentyűt (vagy tartsa lenyomva a {{key:Shift}} billentyűt kattintás közben), hogy a végeikkel összekapcsolt vonalak teljes láncát vegye át. A vonalak az adott nézet rajzvonalai, a nyomkövetési referencia és a rácsvonalak.
- **Körvonal követése**: kattintson egy olyan terület belsejébe, amelyet ezek a vonalak vagy falak zárnak. A falak a kattintás körüli legkisebb területet kerülik körbe.

## Rajzolás előtt beállítandó: eltolás és csatlakozás

A Fal sorban két további mező van, amelyet a {{ui:Fal}} eszköz és az alakzatok használnak:

- **Eltolás**: a falak attól a vonaltól ennyire rajzolódnak, amelyre kattint: + a bal oldalán, − a jobb oldalán, rajzolás közben nézve.
- **Csatlakozás**: vegye ki a jelölést, ha szabadon álló falakat szeretne rajzolni. Végeik **Csatlakozás tiltása** állapotot kapnak, és bárhová mennek, szabadok maradnak (lásd [Fal módosítása](topic:change-a-wall-or-door)).

## Felosztás, darab kivétele, újracsatlakoztatás

Nyissa meg a {{ui:Falak}} parancsot a Szerkesztés csoportban.

- **Felosztás**: kattintson arra a falra, ahol vágni kell, vagy írja be a távolságot a kezdőpontjától. Egy keresztező fal közelében a vágás oda pattan, ahol a két fal találkozik. A két rész azonos típusú, és végükön továbbra is összekapcsolva marad. A **Rés** ennek a hosszúságú űrt hagy a vágás közepén. A **Szabad végek** ehelyett a vágott végeken a Csatlakozás tiltása állapotot állítja be (a Beállítások › BimCraft › Falak › **Fal felosztásakor** határozza meg, melyik legyen eleve bejelölve). Az ajtó vagy ablak azzal a résszel együtt marad, amelyben van; az ajtón átvágás nem engedélyezett.
- **Szakasz törlése**: kattintson arra a pontra, ahol a darab kezdődik, és arra, ahol véget ér. A darabban lévő ajtó vele együtt törlődik.
- **Újracsatlakoztatás**: kattintson egy fal két részére (egy vonalban, azonos típusúak). Újra egy fal lesznek, az első kattintott név alatt, mindkét rész ajtóival.

## Csatlakozási stílus, csatlakozás tiltása, rétegprioritás

Nyissa meg a {{ui:Falak}} parancsot a Szerkesztés csoportban.

- **Csatlakozási stílus**: kattintson arra a sarokra, ahol két egyenes fal találkozik. Minden kattintás a következő stílusra vált: **Gérvágás** (mindkét végét a belső és külső sarok közötti vonalra vágja, ezzel indul minden sarok), **Tompa csatlakozás** (az egyik fal átmegy a másik külső felületéig, amelyhez odaütközik) és **Sarok levágása** (mint a tompa, de az átmenő fal vége derékszögben van; derékszögnél a tompához hasonlít). A **Következő**, vagy a {{key:Tab}}, az másik falat teszi azzá, amelyik átmegy. A sáv **Stílus** listája az utolsó kattintott sarkot mutatja. Ugyanez a két választás a egy fal **Tulajdonságai** között is van: **Csatlakozási stílus a kezdetnél / a végén** és **Átmegy**. Minden változás egy lépés a **Módosítások** között. Az alaprajz, a 3D test, a helyiségek és a mennyiségek követik.
- A T-csatlakozásnál az a fal, amelynek oldalához a másik ér, mindig átmegy. Ahol két fal keresztez, egy kattintás (vagy a Tulajdonságok **Folytonos a keresztezésnél** beállítása) dönti el, melyik folytonos; ez határozza meg, melyik fal rétegei rajzolódnak át a keresztezésen.
- A stílus a csatlakozáshoz tartozik: a falak mozgatásakor megmarad, és csak akkor szűnik meg, ha a csatlakozás megszűnik (a fal törlődik, az adott végén felosztják, vagy a vég Csatlakozás tiltása állapotot kap). Görbe fal sarkánál, vagy ahol három vagy több fal találkozik, gérvágás marad. A körülbelül 30 foknál élesebb, vagy 150 foknál laposabb sarok szintén gérvágásra esik vissza.
- **Csatlakozás tiltása**: kattintson egy fal vége közelében. A vég szabad lesz: semmihez nem csatlakozik, bárhová megy is a fal, amíg újra nem kattint rá. A szabad végeket kereszt jelöli, amíg az eszköz be van kapcsolva. Ugyanez a kapcsoló a Tulajdonságokban a **Csatlakozás a kezdetnél / a végén** lehetőség.
- **Rétegprioritás**: ahol rétegekkel rendelkező falak találkoznak, az erősebb réteg vágja a gyengébbet, így a magok a magokhoz csatlakoznak, a burkolat pedig az erősebb rétegnél áll meg. Minden rétegnek 0 és 999 közötti prioritása van; alapértelmezés szerint a réteg funkciójából származik (szerkezet 800, alapfelület 600, hőszigetelés 400, fólia 300, burkolat 200, légrés 100). A {{ui:Rétegprioritás}} megnyitja a falszerkezetet, ahol a **Prioritás** oszlop a réteg saját számát állítja. Az azonos prioritású rétegek egymásnál megállnak, és vonal csak különböző anyagok között húzódik. Ezt az alaprajzon látja **Közepes** vagy **Finom** részletességnél, sarkoknál, T-csatlakozásoknál és két egyenes fal keresztezésénél; a Beállítások › BimCraft › Falak › **Falrétegek tisztítása falak találkozásánál** ezt kikapcsolja. Csak a falakon belül rajzolt vonalakat érinti: a falak körvonala és mennyiségei a csatlakozási stílus szerint maradnak.

## Sok fal típusának cseréje

Az vázlatos alaprajzról a kidolgozott tervekre való áttérés többnyire típuscsere: egy általános falból lesz a konkrét felépítés. Semmit nem kell újrarajzolni.

1. Válassza ki a falakat (egyet, vagy többet a {{key:Ctrl}} vagy {{key:Shift}} billentyűvel).
2. A Tulajdonságokban nyomja meg a **Típus cseréje…** gombot a Faltípus alatt (vagy nyissa meg a {{ui:Falak}} parancsot a Szerkesztés csoportban, és válassza a {{ui:Típus cseréje}} lehetőséget, amely ugyanezt a listát nyitja meg). A lista a Tulajdonságokon belül, a kijelölt falak saját blokkjában nyílik meg. Nem párbeszédpanel, és semmit nem takar el: az alaprajz, a 3D nézet és a kijelölés továbbra is működik, a lista pedig követi a kijelölt falakat.
3. A lista minden falfajtát megmutat a vastagságával és LOD-címkéjével, például „Wall 230 generic, LOD 200” és „230 clay brick, plastered both sides, LOD 300”. A kijelölt falak jelenlegi típusai meg vannak jelölve. A **Keresés** mezőbe írva szűkítheti: név, vastagság vagy `lod 300`.
4. Kattintson egy típusra. Minden kijelölt fal egy lépésben átvált rá, így egy {{ui:Visszavonás}} az egész cserét visszavonja. A kis x bezárja a listát.

Minden fal megtartja a helyzetvonalát. A tengelyvonalas fal mindkét oldala felé nő; a helyzetvonala felület, az megtartja ezt a felületet, és a másik irányba nő, a hozzá csatlakozó falak pedig a sarkoknál követik. A cserélt falhoz zárolt falak szintén követik. Az ajtók és ablakok a falukban maradnak, és az új vastagsághoz újra vágódnak.

A csere után a lista megmutatja a **Mi mozdult** részt: hány fal változott és mire, a vastagság és a LOD a csere előtt és után, a helyzetvonaluk megtartásához oldalra mozdult falak, a követő csatlakozó falak, az újra befogadott ajtók és ablakok, valamint minden olyan helyiség, amelynek területe változott, a régi és az új területtel. Az állapotsor ugyanezt egy sorban mondja. A jelentés csak tájékoztat; soha nem állítja meg a cserét. A **Tulajdonságok › Faltípus** alatt történő típusválasztás ugyanezt a cserét végzi, és ugyanezt a jelentést adja.

Két dolog állítja meg a cserét, ilyenkor semmi nem változik: az ajtó vagy ablak, amely a falában már nem férne el (a fal rövidül, ahol egy sarok követi; előbb tegye keskenyebbé az ajtót, vagy mozgassa el a sarktól), és egy zárolás, amelyet a csere megtörne (olyan fal, amely a tengelyvonalával rácsvonalhoz van zárva, miközben a helyzetvonala felület; oldja fel, vagy állítsa vissza a helyzetvonalat a tengelyvonalra).

A BimCraphoz kapcsolt asszisztens ugyanezt a cserét elvégezheti (a `wall_types_list` és a `walls_swap_type` eszközökkel), és ugyanazt a jelentést kapja vissza.

A falfajta LOD-címkéjét a falszerkezet-szerkesztőben állítja be: lásd [Falszerkezetek](topic:wall-assemblies).

## Eltolás és dobozos nyújtás

- **Eltolás**: kattintson egy falra, majd arra az oldalra, ahová mozgatni kell, vagy írja be a távolságot. A fal merőlegesen magától mozdul, a hozzá csatlakozó falak pedig megnyúlnak. Jelölje be a **Másolás** lehetőséget párhuzamos másolathoz (az nincs összekapcsolva az eredetivel).
- **Dobozos nyújtás**: kattintson egy doboz két sarkára, majd arra a pontra, ahonnan mozgatni kell, és arra, ahová. A doboz minden fal-vége mozog; a dobozon belüli fal egészben mozog, és a bele ütköző falak szintén; a dobozt keresztező falak megnyúlnak.

## Méret szerkesztése és zárolása

Válasszon ki egy hivatkozási méretet (Feliratozás › {{ui:Hivatkozási méret}}), és írja be az értékét a **Tulajdonságok**ba: a második hivatkozásához tartozó fal merőlegesen magától mozdul, az első hivatkozás helyben marad, a csatlakozó falak pedig követik. Jelölje be a **Ez a méret zárolása** lehetőséget az érték megtartásához: ha később bármelyik fal mozdul, a másik követi. Zárolt értékre nem lehet új számot írni, amíg a jelölést ki nem veszi.

## Igazítás és zárolás

**Igazítás és zárolás**: kattintson egy falfelületre (vagy a tengelyvonalra, a fal közelében), vagy egy rácsvonalra, majd arra a falfelületre, amelyet az adott vonalra kell hozni. A fal merőlegesen oda mozdul. Először jelölje be a **Zárolás** lehetőséget, hogy egymáshoz igazítva maradjanak: lakat jelenik meg az alaprajzon, és ha az egyik fal mozdul, a másik követi. Egy fal **Tulajdonságai** felsorolják a **Zárolásait**, mindegyik mellett a **Zárolás feloldása** gombbal.

## Falak zárolása rácsvonalhoz

Válasszon ki egy rácsvonal mentén futó falat, vagy olyat, amelynek vége rajta van, és a **Tulajdonságok** › **Zárolás rácshoz** alatt válassza ki a rácsvonalat. Ezután a {{ui:Rács}} eszközzel válassza ki a rácsvonalat, és írjon be egy távolságot a {{ui:Mozgatás}} mezőbe: a vonal merőlegesen magától mozdul, a hozzá zárolt falak pedig követik, a csatlakozó falakkal együtt, egy lépésben. Rácsvonalhoz zárolt falat nem lehet magától lemozdítani (mozgassa a vonalat, vagy oldja fel a falat); olyan rácsvonalat, amelyen egy zárolt fal már nem maradhat merőlegesen, elutasít. A vonal átnevezése megtartja a zárolást; a törlése eltávolítja.

## Hossz: melyik oldal marad, és mit mér

- **Növekedés innen** (egy fal Tulajdonságai): **Kezdet marad** (a vég mozog), **Vég marad** (a kezdet mozog) vagy **Középpont marad** (mindkét vég fél-fél hosszal mozog). Amikor a Hossz mezőt írja, az alaprajz megjelöli a megmaradó pontot. A mozgó végnél csatlakozó fal merőlegesen magától mozdul, és megtartja a szögét.
- **Mérés innen** (az alaprajzon a Méretek mellett, a Tulajdonságokban és a Beállítások › BimCraft › Falak menüben): a tengelyvonal, a belső felület vagy a külső felület. A Hossz mező és az alaprajz falméretei ugyanezt olvassák, így egyeznek. Alapból a tengelyvonalon áll.
- Ha egy falat a csatlakozásai nélkül szeretne mozgatni (azok szétválnak, a fal megtartja azonosságát), tartsa lenyomva az {{key:Alt}} billentyűt, amikor a közepén lévő fogópontot húzza.

## Érdemes tudni

- Ezek a receptek a falszerszám specifikációjának (4–9. oldal) receptjei. A csatlakozási stílus és a rétegprioritás egyenes falakra készült; a rétegprioritás csak az alaprajzon látszik (nem metszeten, homlokzaton vagy 3D-ben, ahol a fal egy test), és három vagy több fal csomópontjainál nem, a membránok pedig nem öröklődnek.
- Egy csatlakozás stílusa a csatlakozás rekordjában tárolódik az IFC-fájlban (az `IfcRelConnectsPathElements` neve, például `CadCraft join L butt 1`), így más programok is olvassák a csatlakozást, a régebbi fájl pedig gérvágással nyílik meg.
- A zárolások és a csatlakozások az IFC-fájlban tárolódnak (a zárolások a projekten `CadCraft_WallHolds` néven, a csatlakozások `IfcRelConnectsPathElements` néven), így a fájl újbóli megnyitásakor is megvannak.
- A görbe falak feloszthatók, újracsatlakoztathatók, és darab vehető ki belőlük; nem tolhatók el és nem zárolhatók.
- Lásd még: [Falak rajzolása](topic:draw-walls), [Fal, ajtó vagy ablak módosítása](topic:change-a-wall-or-door) és [Fal alakjának kialakítása](topic:wall-shape).
