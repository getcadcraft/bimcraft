---
title: Fal alakjának kialakítása: csatlakozás, profil, dőlés és nyílások
summary: Csatlakoztassa a fal tetejét tetőhöz, padlóhoz vagy mennyezethez, adjon neki saját homlokzati körvonalat, döntse meg, vagy vágjon bele nyílást ajtó vagy ablak nélkül: a Tulajdonságokban, homlokzaton vagy metszeten, a fal saját homlokzati nézetében vagy 3D-ben; mindegyik egy visszavonási lépés.
keywords: csatlakoztatás, csatlakozás felül, csatlakozás alul, tető, födém, mennyezet, oromfal, profil, profil szerkesztése, homlokzati körvonal, lépcsőzetes, attika, dőlés, döntött, kúpos, kettős dőlés, nyílás, falnyílás, lyuk, átvezetés, ajtó nélkül, fogópont, homlokzat, metszet, 3D, homlokzati nézet, görbe fal, másolat
from: f558b269
---

## Mit fog csinálni

Változtassa meg a fal alakját az alaprajza felett és alatt: a teteje követhet tetőt, padlólemezt vagy mennyezetet, saját körvonala lehet oldalnézetből, megdőlhet, és lehetnek benne nyílások ajtó vagy ablak nélkül. A fal alaprajza, sarkai és helyzetvonala a régi maradnak.

## Hol lehet ezt elvégezni

- **Tulajdonságok**: kapcsolja be a {{ui:Rajzolás}} és a {{ui:Kijelölés}} funkciót, majd kattintson egy megrajzolt falra. A **Tulajdonságok** megmutatja a fal sorait, utána a **Alak** részt, ahol minden megadható.
- **Homlokzat vagy metszet**: a projektböngésző ceruzája ({{ui:Szerkesztés ebben a nézetben}}) megnyitja a nézetet; válasszon ki benne egy falat, és húzza a fogópontjait. Lásd a „Homlokzaton vagy metszeten” részt lent.
- **A fal saját homlokzati nézete**: {{ui:Falak}} › {{ui:Profil szerkesztése…}}, majd kattintson a falra az alaprajzon. Bármely falnál működik, akkor is, ha egy homlokzat sem nézi egyenesen, és görbe falnál is (kiterítve látható).
- **Alaprajz és 3D nézet**: a {{ui:Falak}} (Szerkesztés csoport) négy parancsa: {{ui:Felső / alsó csatlakoztatása}}, {{ui:Profil szerkesztése}}, {{ui:Dőlés}} és {{ui:Falnyílás}}. Lásd a „Az alaprajzon és 3D-ben” részt lent.

Bármelyik módot is választja, ugyanaz a változás: egy lépés a **Módosítások** között, és a {{ui:Visszavonás}} visszavonja.

Egyenes és görbe fal egyaránt megkapja az összes alakzat-eszközt. Görbe falnál a távolságok az ívén futnak.

## Felső vagy alsó csatlakoztatása

- **Felső csatlakoztatása**: válasszon egy tetőt, padlót vagy mennyezetet. A fal teteje követi a kiválasztott elem alsó felületét, a fal minden sarka felett egyenesen. Dőlt tető alatt a fal ferde tetőt kap, és ahol a tető síkot vált (gerinc vagy csonkolt sarok), a fal teteje vele együtt törik.
- **Alsó csatlakoztatása**: válasszon egy padlót vagy mennyezetet. A fal alja követi a felső felületét.
- Ahol a fal egy része fölött (vagy alatt) nincs semmi, az a rész megtartja a fal saját magasságát.
- A kapcsolat megmarad: ha módosítja a tető dőlését vagy túlnyúlását, vagy a mennyezet magasságát, a csatlakoztatott falak ugyanabban a lépésben követik.
- A **Saját magasság** kiválasztásával oldhatja a kapcsolatot.

## Profil szerkesztése

A {{ui:Profil szerkesztése…}} megnyitja a fal oldalnézetből látható körvonalát:

- **Felső vonal**: sorok **Távolság** (a fal kezdetétől) és **Magasság** (a fal alja felett) értékekkel. A 0 / 3000, 2500 / 4500, 5000 / 3000 három sor 5 m-es falon oromfalat készít.
- **Alsó vonal**: hagyja üresen szintes aljhoz, vagy adjon meg sorokat lépcsőzetes alapozású falhoz.
- A {{ui:Pont hozzáadása}} sort ad hozzá, az {{ui:Eltávolítás}} egyet vesz ki. A {{ui:Profil használata}} alkalmazza; a {{ui:Vissza egyenesre}} eltávolítja.

Minden vonal a fal mentén egyszer fut végig, a kezdetétől a végéig; a visszafutó vonal, vagy az olyan felső vonal, amely az aljig ér, nem fogadható el. Ha a felső csatlakoztatás is be van állítva, a kettő közül az alacsonyabb érvényes.

## Fal döntése

**Dőlés**: **Függőleges**, **Döntött** (mindkét oldal ugyanabba dől, a vastagság megmarad) vagy **Kettős dőlés** (minden oldalnak saját szöge van: olyan fal, amely felfelé vékonyodik vagy vastagodik). Adja meg a fokokat a függőlegestől; a pozitív szög a fal bal oldala felé dönt, a kezdőpontjából nézve. A fal az alján a rajzolt helyén marad; a hozzá csatlakozó falak nem dőlnek vele.

## Nyílások ajtó vagy ablak nélkül

A {{ui:Nyílás hozzáadása}} 900 széles lyukat vág a fal közepébe. A **Nyílások** sorában a **Kezdettől**, a **Szélesség**, a **Párkány** (a szinttől) és a **Magasság** adható meg; az {{ui:Eltávolítás}} kiveszi. A nyílás a fal teljes vastagságán átmegy, a fal mennyiségei nélkül számolódik, és az alaprajzon ott, ahol eléri az alaprajz vágási magasságát, rés látszik. Ha a fal kezdőpontja a vonala mentén csúszik, a nyílás megtartja a helyét; az a változás, amely a falon kívülre vinné, nem engedélyezett.

## Homlokzaton vagy metszeten

Nyissa meg a nézetet a projektböngésző ceruzájával. A {{ui:Kijelölés és mozgatás}} bekapcsolt állapotában:

- **Profil**: kattintson a nézettel szembe néző falra. Felső és alsó vonala kékre vált, minden pontján négyzet alakú fogóponttal és minden darabjának közepén egy ponttal.
  - Egy négyzet húzásával mozgathatja azt a pontot (a két végpont csak fel-le mozog).
  - Egy pont húzásával a teljes darabot fel vagy le mozgathatja.
  - Kettős kattintással (vagy jobb gombbal) egy vonalra pontot adhat; a {{ui:Pont hozzáadása (felül)}} és a {{ui:Pont hozzáadása (alul)}} a leghosszabb darab közepére tesz egyet.
  - Kattintson egy négyzetre, és nyomja meg a Delete billentyűt (vagy jobb gombbal kattintson rá), hogy eltávolítsa azt a pontot. A {{ui:Vissza egyenesre}} eltávolítja a profilt.
  - Ha egy pont ki van jelölve, az eszköztár alatti sávban írja be a **Távolság** és a **Magasság** értékét.
- **Csatlakoztatás**: a sávban a kiválasztott falhoz **Felső csatlakoztatása** és **Alsó csatlakoztatása** lista tartozik. Vagy használja a {{ui:Felső csatlakoztatása}} vagy {{ui:Alsó csatlakoztatása}} eszközt: kattintson a falra vagy falakra, majd a tetőre, padlóra vagy mennyezetre, amelyek szaggatott keretekben jelennek meg. Az összes kijelölt fal egy lépésben csatlakozik.
- **Falnyílások**: a {{ui:Falnyílás}} eszközzel húzzon egy téglalapot a fal homlokzatán. Vissza a {{ui:Kijelölés és mozgatás}} módba: húzza a nyílást a mozgatáshoz, húzza az egyik nyolc fogópontját az átméretezéshez, írja be a **Kezdettől**, a **Szélesség**, a **Párkány** és a **Magasság** értékeket a sávban, vagy nyomja meg a Delete billentyűt az eltávolításhoz.
- **Dőlés**: a nézet mentén nézett fal (végéről látva, metszetként, vagy homlokzaton a végéről) szintén kiválasztható. Húzza a tetején lévő kerek fogantyút a megdöntéshez, vagy válassza a **Függőleges**, **Döntött** vagy **Kettős dőlés** lehetőséget a sávban, és írja be a szögeket.

A méretek 10 mm-re igazodnak; a finomabb értékeket írja be. Görbe falat homlokzaton akkor lehet szerkeszteni, ha az a nézetben egy irányba fut; a saját homlokzati nézete mindig működik.

## Az alaprajzon és 3D-ben

Nyissa meg a {{ui:Falak}} parancsot a Szerkesztés csoportban:

- {{ui:Felső / alsó csatlakoztatása}}: válassza a **Felső csatlakoztatása** vagy **Alsó csatlakoztatása** lehetőséget az eszköz sorában. Kattintson a falra vagy falakra (az alaprajzon vagy a 3D nézetben), majd arra, amihez csatlakoznak: 3D-ben kattintson magára a tetőre, padlóra vagy mennyezetre; az alaprajzon kattintson egy pontra alatta (ha több is van, egy lista kérdezi meg, melyiket).
- {{ui:Profil szerkesztése}}: az alaprajzon kattintson egy falra a homlokzati nézete megnyitásához. 3D-ben kattintson egy falra: profilpontjai fogópontokat kapnak; húzzon egyet a fal síkjában.
- {{ui:Dőlés}}: kattintson egy falra (alaprajz vagy 3D), és írja be, mennyit dől.
- {{ui:Falnyílás}}: az alaprajzon kattintson arra a falra, ahová a nyílás kerül; a **Szélesség**, **Magasság** és **Párkány** az eszköz sorában vannak. 3D-ben kattintson egy sarokra a fal homlokzatán, majd a szemközti sarokra. Ha egy falat kijelölt 3D-ben, nyílásainak fogópontjai vannak: a sarkok átméreteznek, a közép mozgat.

A 3D fogópontok a 3D nézet saját fogópontjai, ezért várnak, amíg a metszetdoboz a saját fogópontjait mutatja.

## Az alaprajzon

Egy döntött falat ott rajzol, ahol az alaprajz átvágja (alapértelmezés szerint a szint felett 1200-nál, hacsak a nézet mást nem mond): körvonalát annyival tolja el, amennyit dől az adott magasságban, a kettős dőlés pedig ott szélesebb vagy keskenyebb. Az alján lévő körvonalát a vágás alatti dolgok vékony vonalaival rajzolja. A fal sarkai, fogópontjai és méretei az alján maradnak.

## Másolatok

A {{ui:A szint másolása…}} és a **Másolás** mellett történő mozgatás átveszi a fal profilját, dőlését és falnyílásait. Padlóhoz vagy mennyezethez csatlakozó fal az új szint másolt padlójához vagy mennyezetéhez csatlakozik; tetőhöz való csatlakozás nem másolódik szinttel (a tetők nem másolódnak). Ugyanazon a szinten készült másolat ugyanahhoz a tetőhöz, padlóhoz vagy mennyezethez marad csatlakoztatva.

## A fájlban

Az alakos falat sokszög alakú testként (IfcFacetedBrep) írja, amelyet más programok úgy olvasnak, ahogy rajzolják; beállításai a falon vannak (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). A nyílás az IfcOpeningElement a falban, amelyet semmi nem tölt ki.

## Még nincs elkészítve

- Olyan profil, amelynek körvonalán kiugrás vagy lyuk van (lyukakhoz használjon nyílásokat).
- 3D-ben: profilpontok hozzáadása vagy eltávolítása, és a dőlés fogóponttal (használja a fal homlokzati nézetét, egy homlokzatot vagy metszetet, vagy írja be az értékeket).
- Az {{ui:Eltolás}} a Másolás bekapcsolásával nem másolja az alakot vagy a falnyílásokat (a Mozgatás másolással igen).
- Egy döntött fal rétegeit nem rajzolja Közepes és Finom alaprajzon (a körvonalát igen).
- Nem téglalap alakú nyílások.
