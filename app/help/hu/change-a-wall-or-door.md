---
title: Fal, ajtó vagy ablak módosítása
summary: Kattintson egy megrajzolt falra, ajtóra vagy ablakra, és módosítsa a típusát, méretét, magasságát vagy helyét a Tulajdonságok panelen, vagy húzza az alaprajzon; minden módosítás egy visszavonási lépés.
keywords: derékszögbe igazítás, négyzetbe igazítás, 90, derékszög, ferde, szög, ortho, helyiségméret, belső felület, külső felület, mérés innen, mozgatási távolság, beírt távolság, görbe, ív, ívmagasság, sugár, tengelyvonal, igazítás, módosítás, szerkesztés, tulajdonságok, faltípus, vastagság, hossz, magasság, alsó eltolás, tető, szint, megfordítás, külső, ajtóméret, ablakméret, küszöb, távolság, mozgatás, fogópont, húzás, típus módosítása, több
from: 63052d5d
---

## Mit fog csinálni

Módosítsa azt, amit rajzolt: jelöljön ki egy falat, ajtót vagy ablakot, majd írjon be új számot a **Tulajdonságok** mezőbe, vagy húzza az alaprajzon. Az alaprajz és a 3D-nézet követi a változást, a sarkok újra illeszkednek, az ajtók és ablakok pedig a falukban maradnak.

## Fal módosítása

1. Ha a {{ui:Rajzolás}} és a {{ui:Kijelölés}} be van kapcsolva, kattintson a falra az alaprajzon (vagy a 3D-nézetben).
2. A **Tulajdonságok** egy dobozt mutat a fal számaival. Módosítson egyet, és nyomja meg az {{key:Enter}} billentyűt:
   - **Faltípus**: egy másik kezdő típus. A vastagság és a rétegek ezzel együtt változnak.
   - **Vastagság**: bármely vastagság. A típus megtartja többi rétegét, a fő rétege (a gerendák vagy a blokk) viszi a különbséget, például „Külső 2×6, 200 mm”.
   - **Mérés innen**: **Középvonal**, **Belső felület** vagy **Külső felület**. A **Hossz** és a **Helyiségméret** ettől olvasódik és állítódik. A külső felület az, amit az alaprajz méretei mutatnak.
   - **Hossz**: a fal vége a saját vonala mentén mozog. A végén csatlakozó fal a saját irányára merőlegesen mozog, és megtartja a szögét.
   - **Helyiségméret** (ha van párhuzamos fal a helyiségen át): írja be a kívánt méretet. Ez a fal merőlegesen mozog, a csatlakozó falak pedig nyúlnak, hogy kövessék.
   - **Merőleges eltolás**: írja be, mennyire mozduljon el a fal a saját irányára merőlegesen: a sima szám kifelé mozdítja, a mínusz szám befelé.
   - **Szög a csatlakozó falhoz**: a szög a kezdésnél csatlakozó falhoz képest. Írjon be 90-et a derékszöghöz. Ha egy fal nem csatlakozik semmihez, az **Irány** látszik, fokban, keletről számolva.
   - {{ui:Derékszögbe igazítás}}: a csatlakozó falakat visszaforgatja derékszögbe, azon irányban, amerre a hosszuk nagy része fut. Az összefüggő helyiségre vagy elrendezésre dolgozik, bármelyik falát is választotta. A derékszögtől 10 foknál jobban eltérő fal érintetlen marad, így a 45 fokra állított fal biztonságban van. Egy {{ui:Visszavonás}} mindent visszavon.
   - **Falmagasság**: a **Fölötte lévő szintig** követi azt a szintet; a **3. szintig** (és bármely magasabb szintig) egy olyan falat készít, amely a köztes szinteken átmegy. A magasság beírása beállítja, mennyivel legyen a teteje a szint alatt vagy fölött. A **Rögzített magasság** a beírt számot tartja. Az **Átmenő szintek** felsorolja azokat a szinteket, amelyeken a fal átmegy: az alaprajzokon világosabban rajzolódik, a helyiségek ott a falhoz zárnak, és az ajtók és ablakok ezekből az alaprajzokból is elhelyezhetők benne. Azon a szinten mozgatják és alakítják át, amelyiken kezdődik.
   - **Alsó eltolás**: mennyivel van a szint fölött a fal kezdete. A teteje helyén marad.
   - **Külső**: a {{ui:Megfordítás}} a külső rétegeket a másik oldalra teszi.
   - **Tengelyvonal**: **Középvonal**, **Külső felület**, **Belső felület**, **Bal felület** vagy **Jobb felület**. A váltás nem mozgat semmit. Később, amikor a fal vastagabb lesz (típus szerint vagy a **Vastagság** által), vagy külső oldala meg lesz fordítva, a tengelyvonal helyben marad, és a fal ehhez képest nő vagy fordul. Az egyenes fal, amely sarokban találkozik vele, követi, így a sarok továbbra is zárul. A kijelölt fal tengelyvonala az alaprajzon szaggatottan látszik. Több falat kijelölve mindegyiknek egyszerre állíthatja be.
   - **Ívmagasság** (görbe falak): mennyire domborodik a közepe az egyenes vonaltól. 0 esetén egyenes; a negatív érték a másik oldalra domborít. A sugár mellette látszik.
3. Minden módosítás egy lépés a **Változások** listában; a {{ui:Visszavonás}} visszavonja.

## Fal húzása az alaprajzon

Ha egy fal ki van jelölve, három fogópontja van: egy négyzet mindkét végén, és egy kör a közepén.

- Húzzon egy véget, hogy a fal hosszabb, rövidebb legyen vagy elforduljon. A falrajzoló eszközhöz hasonlóan illeszkedik, és derékszögbe pattan a másik végén csatlakozó falhoz, ha 3 foknál közelebb van; a {{key:Shift}} az alaprajz tengelyein tartja.
- A húzott végen csatlakozó falak megtartják a szögüket: végük a saját vonalukon csúszik, hogy találkozzon a fal új vonalával, így semmi nem lesz ferde. Tartsa lenyomva a {{key:Mod}} billentyűt szabad húzáshoz (a csatlakozó fal vége az Ön húzásával jön, és az a fal elfordul), vagy az {{key:Alt}} billentyűt, hogy megszakítsa a csatlakozásokat ennél a falnál.
- A közepét húzva a teljes falat merőlegesen mozgatja, bárhogy húzza. Sarkai a csatlakozó falakon csúsznak, így azok megtartják szögüket.
- A közepét húzva tartsa lenyomva a {{key:Mod}} billentyűt szabad mozgatáshoz, ha meg akarja törni a szöget. A {{ui:Derékszögbe igazítás}} visszahozza.
- Miközben fogópontot tart, írjon be távolságot, és nyomja meg az {{key:Enter}} billentyűt (vagy engedje el): a fal pontosan ennyit megy, azon az úton, ahogy húzta. Az {{key:Esc}} megszakítja a mozgatást.
- Egy kijelölt görbe fal végein fogópontok, az ívének közepén pedig egy kerek fogópont látszik. A kerek fogópontot húzva hajlítsa meg.
- Az ajtók és ablakok a falban maradnak. Ha egy fal túl rövid ahhoz, amit tart, a rendszer elutasítja: „Nem fér el abban a falban.”

## Ajtó vagy ablak módosítása

1. Kattintson az ajtóra vagy ablakra az alaprajzon.
2. A **Tulajdonságok** panelen: **Típus** (ugyanolyan fajtájú másik ajtó vagy ablak), **Szélesség**, **Magasság**, **Küszöb** (ablakoknál), **A kezdőponttól** és **A végponttól** (a fal felületének végétől mindkét végéig mért távolság a szélükig), **Zsanérok** {{ui:Megfordítás}} (egyszárnyú ajtóknál és nyíló ablakoknál; tolóajtóknál, zsebes, istállóajtóknál és harmonikaajtóknál ehelyett a **Nyílik ide** látszik; fix, függesztett és képablakoknál, valamint kétszárnyú ajtóknál nincs), és **Nyílás iránya** (ajtóknál) vagy **Keret oldala** (ablakoknál) {{ui:Megfordítás}}.
3. Vagy húzza végig a falon, vagy egy másik falra: lásd [Ajtók és ablakok](topic:doors-and-windows).

## Több elem egyszerre

Jelöljön ki több falat (vagy több ajtót, több ablakot) a {{key:Shift}}+kattintással vagy a {{key:Mod}}+kattintással. A **Tulajdonságok** azt kínálja, ami közös bennük: **Típus módosítása…**, a magasság, a méret. Egy módosítás mindet beállítja, és egy {{ui:Visszavonás}} mindent visszavon.

## Tudnivalók

- A számok a {{ui:Mértékegységek}} szerint jelennek meg, amelyet az eszköztáron választott.
- Más programok falai, ajtói és ablakai a szokásos módon mutatják IFC-adataikat a **Tulajdonságok** panelen, ez a doboz nélkül.
