---
title: Nézetek, nézettartományok és saját rajzlapok
summary: Keresse meg minden alaprajzot, homlokzatot, metszetet, 3D-nézetet, kimutatást és rajzlapot a projektböngészőben, állítsa be, hogyan vágódik és mit mutat minden alaprajz, készítsen kiemeléseket, rajzoljon vonalakat és sraffozásokat egy nézetben, tartsa meg a beállításokat nézetsablonokban, és rendezze el a saját rajzlapjait.
keywords: kiemelés, kiemelési nézet, részletnézet, nagyított alaprajz, rajzolás, részletvonalak, rajzolási vonalak, sraffozás, sraffozott terület, kitöltési minta, mennyezeti alaprajz, rcp, mennyezeti rács, lámpatestek, projektböngésző, nézetek, nézettartomány, vágás, kivágás, kivágási terület, nézetlépték, alátét, másik szint megjelenítése, félárnyék, vágósík, vágási magasság, felső, alsó, nézetmélység, láthatóság, kategóriák, nézetből elrejtés, nézetsablon, sablonok, rajzlap, rajzlapok, rajzfej, nézetablak, léptékezés, rajzlapok rendezése, elrendezés, pdf, alaprajz beállításai, böngésző
from: ee1d5afe
---

## Mit fog csinálni

Úgy dolgozzon, ahogyan a BIM-projektek szerveződnek: minden nézet egy listában, minden alaprajz ott vágva, ahol szeretné, ugyanazok a beállítások több alaprajzon egy sablonon keresztül, és saját rajzlapok, amelyeket maga rendez el.

## A projektböngésző

1. Kapcsolja be a {{ui:Rajzolás}} funkciót. A bal panelen a modellek alatt van egy {{ui:Projektböngésző}}.
2. Ez felsorolja:
   - **Alaprajzok**: minden szintet. Kattintson egyre az alaprajz megtekintéséhez. A mellette lévő csúszkagomb állítja be a nézettartományát (lásd lent). A sablont követő alaprajz a sablon nevét mutatja.
   - **Mennyezeti alaprajzok**: minden szint visszavert mennyezeti alaprajza (lásd lent).
   - **Kiemelések**: minden kiemelés azzal a nézettel, amelyen rajzolták, és a {{ui:Új kiemelés}} gomb. A **Hiányzik** felsorolja azokat a kiemeléseket, amelyeknek a nézete megszűnt.
   - **Homlokzatok** és **Metszetek**: a négy oldal és minden metszetvonal. Kattintson egyre, hogy megnyissa a rajzkészletet, amelyben rajzolták.
   - **3D-nézetek**: a {{ui:Nézetek}} gombbal mentett nézetek.
   - **Kimutatások**: kattintson egyre, hogy az alaprajz alatt megjelenjen.
   - **Rajzlapok**: a saját rajzlapjai, a {{ui:Új rajzlap}} gomb, és a {{ui:Rajzlapkészlet…}} gomb a modellből készült teljes készlethez.
   - **Nézetsablonok**, a {{ui:Új sablon}} gombbal, és a **Hivatkozások** (a csatolt modellek).

## Egy alaprajz nézettartományának beállítása

1. Kattintson a csúszkagombra a **Alaprajzok** alatt egy szint mellett.
2. Állítsa be a magasságokat, az adott szint felett:
   - **Vágás itt**: ahol az alaprajz átvág a falakon, ajtókon és ablakokon (1200 mm, körülbelül 4 ft, hacsak nem módosítja).
   - **Felső**: a vágás fölött és a felső határ alatt lévő dolgok szaggatottan rajzolódnak (egy magas szekrény, egy gerenda). Hagyja üresen a szint magasságához.
   - **Alsó** és **Mélység az alsó alatt**: a vágásnál alacsonyabb dolgok vékony vonalakkal rajzolódnak az aljukig, és azon túl is, ameddig a mélység ér.
3. A **Ebben az alaprajzon látható** alatt törölje azt, amit ez az alaprajz kihagy: bútorokat, helyiségeket, oszlopokat és így tovább.
4. Egyes elemek kihagyásához válassza ki őket az alaprajzon vagy a 3D-nézetben, nyissa meg a párbeszédpanelt, és kattintson a {{ui:A kijelöltek elrejtése itt}} gombra. A {{ui:Mind megjelenítése}} visszahozza őket.
5. Kattintson a {{ui:Beállítások használata}} gombra.

Az alaprajz azonnal újra vágódik, a rajzkészlet és a rajzlapok követik. A pontfelhő szelete szintén követi a vágási magasságot.

## Alaprajz kivágása, léptékezése, másik szint megjelenítése alatta

Mindhárom ugyanabban a párbeszédpanelben van (a szint melletti csúszkagomb):

- **Lépték**: az a lépték, amelyben az alaprajz nyomtatódik ({{ui:Nyomtatás}} az alaprajz sávján), és amelyben a rajzlapra kerül. Az {{ui:Illesztés}} a legnagyobb szabványos léptéket választja, amely belefér.
- **Kivágási terület**: kattintson a {{ui:Rajzolás az alaprajzon…}} gombra, majd kattintson egy sarokra és az ellentétes sarokra az alaprajzon ({{key:Esc}} megállít). A területen kívüli alaprajz a képernyőn el van takarva, de ott továbbra is lehet dolgozni; nyomtatva, rajzlapokon és a rajzkészletben az alaprajz csak a területen belül látszik. A {{ui:Törlés}} eltávolítja a kivágást. Az {{ui:Illesztés}} a kivágáshoz illeszt.
- **Alátét**: válasszon egy másik szintet. Annak falai, vágott elemei, ajtói és ablakai halványan rajzolódnak ennek az alaprajznak az alá, hogy a szintekkel igazodjanak. Itt nem választhatók ki, és halványszürkén nyomtatódnak.

A nézetsablon a léptéket a magasságokkal és kategóriákkal együtt tárolja. A kivágási terület és az alátét mindig egyetlen alaprajzhoz tartozik.

## Egy szint mennyezeti alaprajza

Minden szintnek van egy visszavert mennyezeti alaprajza az alaprajza mellett: alulról nézett alaprajz, a mennyezetek és az azokról lógó dolgok elrendezéséhez.

1. Kattintson a szint nevére a böngésző **Mennyezeti alaprajzok** részében, vagy válassza a {{ui:Mennyezetterv}} lehetőséget a szint mellett az alaprajz sávján.
2. A falak 2300 mm-nél (körülbelül 7'-6") vágódnak. Az a rész, amely e vágás felett és a szint magassága alatt van, kirajzolódik: mennyezetek rácsukkal és magasságcímkével (`CLG 2438`), lámpák, gerendák. Az ajtók, ablakok és a vágás alatt lévő dolgok kimaradnak.
3. Mennyezet készítéséhez használja a {{ui:Mennyezet}} funkciót, ahogyan az alaprajzon, majd válassza ki, és a Tulajdonságok között válassza ki a **Mintát**. Lásd [Helyiségek, padlók, mennyezetek és tetők](topic:floors-and-roofs).
4. Lámpa felfüggesztéséhez helyezze el a tárgyat a könyvtárból, miközben a mennyezeti alaprajz látszik: a **Mennyezeten** részbe kerül. Lásd [Berendezés és bútor elhelyezése a könyvtárból](topic:place-from-library).
5. A mennyezeti alaprajz melletti csúszkagomb beállítja a vágást és a felső határt, a léptéket, a kategóriákat, a kivágási területet és az alátétet, ahogyan az alaprajznál. A mennyezeti alaprajzok nem vesznek igénybe nézetsablont.

A mennyezeti alaprajz ugyanúgy van tájolva, mint az alaprajz (visszavert alaprajz, nem tükörkép). A vágás alatt lévő mennyezet nem rajzolódik ki: ahhoz a szinthez tartozó mennyezeti alaprajzhoz csökkentse a vágást. A mennyezeti alaprajzok a rajzlapokra úgy kerülnek, mint az alaprajzok; a rajzkészlet nem ad hozzá magától.

## Kiemelés készítése

A kiemelés az alaprajz egy részét nagyobb méretben, saját léptékben mutatja, mint saját nézetet: egy konyhát, egy lépcsőt, egy falsarkot.

1. Jelenítse meg az alaprajzot, mennyezeti alaprajzot vagy kiemelést, amelyhez tartozik.
2. Válassza a {{ui:Feliratozás}} › {{ui:Kiemelés}} lehetőséget az alaprajz sávján (vagy a böngészőben a {{ui:Új kiemelés}} gombot), majd kattintson a terület egyik sarkára és az ellentétes sarkára. Az {{key:Esc}} megállít.
3. A kiemelés 1:20 léptékben készül (1/2" = 1'-0" láb és hüvelyk szerint). Téglalapja és egy kerek címkéje rajzolódik az alaprajzra.
4. Kattintson a címkére a {{ui:Kijelölés}} eszközzel, vagy a kiemelésre a böngészőben, hogy megnyissa: az alaprajz csak azt a területet mutatja, a kiemelés léptékében. A sáv {{ui:Kiemelés:}} feliratot és a nevét mutatja; a {{ui:Fel}} visszavisz a nézethez, amelyen rajzolták.
5. A mellette lévő csúszkagomb (a böngészőben vagy a sávon) átnevezi, megváltoztatja a léptékét, újrarajzolja a téglalapját, vagy törli.

A kiemelés azt mutatja, amit a nézete: ugyanazt a vágást, ugyanazokat a kategóriákat, a mennyezeti alaprajz mennyezeteit. Kiemelés kiemelése ugyanígy működik. A kiemelést a rajzlapra úgy helyezze, mint egy alaprajzot; a címkéje ekkor megmutatja, hol van (`1 / A-501`: az első nézet az A-501 lapon). A {{ui:Nyomtatás}} egy kiemelésnél csak azt a területet nyomtatja ki a saját léptékében.

Egy kiemelés törlése törli a benne rajzolt kiemeléseket, valamint a bennük rajzolt vonalakat és sraffozásokat (előbb rákérdezünk). Ha a szint, amelyen a kiemelés van, törlődik, a kiemelés a **Hiányzik** alatt marad, amíg nem törli, és a rajta lévő lapok hiányzóként jelentik.

## Vonalak és sraffozások rajzolása egy nézetben

A rajzolás 2D-munka, amely csak egy nézethez tartozik: vonalas megjegyzések, betonnal vagy földdel sraffozott terület, kitöltött terület. Soha nem kerül a 3D-nézetbe, és soha nem kerül másik alaprajzba.

1. Jelenítse meg azt az alaprajzot, mennyezeti alaprajzot vagy kiemelést, amelybe rajzolni szeretne.
2. Válasszon az alaprajz sávján a {{ui:Feliratozás}} menüből:
   - {{ui:Sor}}: kattintson oda, ahol kezdődik, és ahol végződik. A következő vonal ott kezdődik, ahol az utolsó véget ért; az {{key:Enter}} újra kezdi.
   - {{ui:Polivonal}}: kattintson a pontjaira; az {{key:Enter}} vagy a duplakattintás lezárja, az első pontra kattintás bezárja.
   - {{ui:Téglalap}}: két ellentétes sarok.
   - {{ui:Sraffozott terület}}: válassza ki a **Mintát** (Tömör, Átlós, Kereszt, Beton, Szigetelés, Föld) és a léptékét a sávon, majd kattintson a sarkokra; az {{key:Enter}}, a duplakattintás vagy az első sarokra kattintás lezárja. Ha a {{ui:Helyiség kitöltése}} be van jelölve, egy kattintás a helyiségbe a körvonalát sraffozza.
3. A pontok a falakhoz hasonlóan illeszkednek; a {{key:Shift}} merőlegesen tartja a vonalat, és a hosszt a falakhoz hasonlóan beírhatja. A {{key:Backspace}} visszaveszi az utolsó pontot.

Vonalat vagy sraffozást a {{ui:Kijelölés}} eszközzel jelöljön ki az alaprajzon. A Tulajdonságok megváltoztatja a sraffozás mintáját és léptékét, és van benne {{ui:Mozgatás…}} (kattintson a kiindulási pontra, majd arra, hová kerüljön). A {{key:Delete}} törli. Minden vonal, sraffozás és változtatás egy lépés.

A vonalak és sraffozások az alaprajzzal együtt nyomtatódnak, a rajzlapokra az alaprajzzal kerülnek, és a rajzkészletben is benne vannak. A **Megjegyzések** jelölésének törlésével kihagyhatók egy nézettartományból.

## A beállítások megtartása nézetsablonban

1. Kattintson a {{ui:Új sablon}} gombra a böngészőben, vagy a {{ui:Mentés sablonként…}} gombra egy alaprajz nézettartományában (az az alaprajz ekkor azt használja).
2. Adjon nevet neki, állítsa be a magasságokat és kategóriákat, és kattintson a {{ui:A sablon mentése}} gombra.
3. Bármely alaprajz nézettartományában válassza ki a sablont. Az alaprajz átveszi a magasságait és kategóriáit; a sablon módosításával az összes alaprajz változik, amely azt használja. Az egyenként elrejtett elemek a saját alaprajzukban rejtve maradnak.
4. Kattintson egy sablonra a böngészőben a módosításhoz, átnevezéshez vagy törléshez. Törlés után az alaprajzai megtartják a beállításaikat saját beállításként.

## Saját rajzlap rendezése

1. Kattintson a {{ui:Új rajzlap}} gombra. Írja be a számát és a címét, és válassza ki a papírt.
2. Kattintson a {{ui:Hozzáadás}} gombra egy alaprajz, mennyezeti alaprajz, kiemelés, homlokzat, metszet vagy kimutatás mellett. Középre kerül a lapon.
3. Húzza oda, ahová kell. Ha ki van jelölve, válasszon **Léptéket**, vagy hagyja az alaprajz saját léptékén (ha van neki), különben a lapra illő léptéket, amely a lap harmadát foglalja el. A {{ui:Levétel a rajzlapról}} eltávolítja.
4. Kattintson a {{ui:A rajzlap mentése}} gombra. Felkerül a **Rajzlapok** alá; később kattintson rá a módosításhoz.
5. A {{ui:Letöltés PDF-ként}} az adott lapot egy oldalként menti.

## Mit kell látnia

- Alaprajzok a magasságaikkal, a vágás feletti rész szaggatottan, és ami ki lett zárva, az kimarad.
- Kivágott alaprajz a képernyőn a területén kívül elfedve, papíron a területre vágva, az megadott léptékben.
- Mennyezeti alaprajz a mennyezetek rácsaival és magasságcímkéivel, valamint a mennyezeten lévő lámpákkal.
- Kiemelések a téglalapjukkal és címkéjükkel az alaprajzon, mindegyik a saját léptékében nyílik meg.
- Vonalak és sraffozások csak abban a nézetben, amelyben rajzolták őket.
- A rajzlapok minden megnyitáskor újra a modellből rajzolódnak, így mindig egyeznek vele. A nézet, amelynek szintje vagy metszetvonala törlődött, jelentve van, de nem rajzolódik ki.
- Minden változtatás itt egy lépés: a {{key:Mod+Z}} visszavonja.

:::note
Mindez az IFC-fájlban van tárolva más programok számára érintetlen tulajdonsághalmazokként: minden szint nézettartománya és mennyezeti alaprajza a szinten, a sablonok, a kiemelések és a rajzlapok a projekten. A vonalak és sraffozások a szintjükön lévő IFC-annotációk, így más programok 2D-s görbékként és sraffozott területekként látják őket (a minta saját rajzával), de azt nem látják, melyik nézethez tartoznak.
:::

:::tip
Más BIM-programok a vágást nézettartománynak vagy vágósíknak hívják, a sablonokat nézetsablonoknak vagy nézetbeállításoknak, a rajzoló vonalakat részletvonalaknak, a sraffozott területeket kitöltött területeknek. Az elgondolás ugyanaz; a nézetbeállítások nem utaznak át hozzájuk.
:::
