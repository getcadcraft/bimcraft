---
title: Munkastílus, kettőzött nézetek, tollak a papíron, Jelentés mint és sablonok
summary: Válassza ki, hogyan viselkedjen a BimCraft az Ön munkamódjához; kettőzzön bármely nézetet saját másolatként vagy kapcsolt példányként; tartsa meg a tollfelülírásokat a fájlban; nyomtasson a látható módon vagy tolltáblázaton keresztül; jelentsen egy elemet más IFC-osztályként; és kezdjen projekteket a saját sablonjaiból.
keywords: munkastílus, nézet kettőzése, kettőzés, nézetmásolat, függő nézet, kapcsolt nézet, saját másolat, nézet másolása, tollfelülírás, tollak, vonalvastagság, látható módon nyomtatás, tolltáblázat, plot style, ctb, monokróm, szürkeárnyalat, jelentés mint, ifc osztály, átsorolás, előre meghatározott típus, általános modell, födém mint út, fal mint panel, tető mint rámpa, projektsablon, sablon, új sablonból, mentés sablonként, irodai szabvány
from: 231d98b0
---

## Mit fog tenni

Állítsa be a BimCraftot a munkamódjához, kettőzzön nézeteket, nyomtassa őket a várt módon, számolja az elemeket azzal, ami valójában, és minden projektet az irodája sablonjából indítson.

## Munkastílus kiválasztása

1. Nyissa meg a {{ui:Beállítások}} ablakot, majd a {{ui:BimCraft}} lapot. Keresse meg a {{ui:Munkastílus}} részt.
2. Válasszon egyet:
   - {{ui:Minden nézet a sajátja}} (az első lehetőség): a kettőzött nézet lemásolja a jegyzeteit, és azok az adott nézeté maradnak; a lapok a képernyőn látottak szerint nyomtatódnak.
   - {{ui:Közös jegyzetek és tolltáblák}}: a kettőzött nézetek megosztják a jegyzeteiket; a nyomtatás tolltáblázaton keresztül történik.
3. A választás alatt négy dolog van, amelyet beállít. Bármelyiket külön is módosíthatja; ekkor a stílus {{ui:Egyéni}} lesz.

A munkastílus ebben a böngészőben marad meg, a munkaterület elrendezéséhez hasonlóan. A sablon viszi át az új modellekbe.

## Nézet kettőzése

1. A {{ui:Projektböngésző}}ben minden alaprajznak, mennyezeti alaprajznak, kiemelésnek, homlokzatnak és metszetnek van egy {{ui:Kettőzés}} gombja (két lap ikonnal).
2. Adja meg a másolat nevét, és válassza ki, hogyan viselkedjen:
   - {{ui:Saját másolat}}: rajzolása, méretezése, kivágása, rejtett elemei és tollai másolódnak, és a sajátjai maradnak. Bármelyik nézet szerkesztése nem változtatja meg a másikat, így a kiadott lapon lévő nézet úgy marad, ahogy ki lett adva.
   - {{ui:Kapcsolva}}: ugyanazt a nézetet mutatja, egy jegyzetkészlettel és egy beállításkészlettel.
3. A másolat a {{ui:Duplikált nézetek}} alatt jelenik meg. Kattintson rá a megnyitáshoz; az alaprajz fölötti sáv jelzi, hogy másolat, és a {{ui:Fel}} gombbal visszajuthat a nézetéhez.
4. A csúszka gombja megnyitja a beállításait: név, {{ui:Nézettartomány}} (a saját másolatnak saját van), kapcsolt másolatnál {{ui:Saját másolattá alakítás}}, és {{ui:Törlés}}.

A homlokzatok és metszetek másolatai a saját lapjaikra kerülnek, ugyanúgy, mint a nézetek, amelyekből származnak. A kettőzés egyetlen visszavonási lépés, a másolatok pedig az IFC-ben a kiemelések mellett maradnak meg.

## Tollak a nézethez kötve, a látható módon nyomtatva

1. Kapcsolja be a {{ui:Rajzolás}} lehetőséget, és válassza a {{ui:Tollak}} lehetőséget.
2. A {{ui:Mire}} lista most minden kategóriát megjelenít: falak, ajtók és ablakok, födémek, tetők, oszlopok, lépcsők, bútorok és a többi, valamint a rajzi elemek és a méretezés.
3. Az {{ui:Alkalmaz}} a tollat az IFC-ben tartja azzal a nézettel együtt, amelyen látható: alaprajz, mennyezeti alaprajz, kiemelés vagy kettőzött nézet. A 0.9 előtt készült tollak a böngészőben voltak tárolva; a {{ui:Tartsa meg ezeket a fájlban}} áthelyezi őket.
4. A lapok és a PDF a képernyőn látott módon rajzolja ki az összes tollat.

Ha inkább tolltáblázaton keresztül szeretne nyomtatni, állítsa a Tollak sorban a {{ui:Nyomtatás}} beállítást {{ui:Tolltáblázaton keresztül}} értékre, majd válasszon egy táblázatot (szín, monokróm, szürkeárnyalat), vagy válassza a {{ui:Tolltábla szerkesztése…}} lehetőséget: minden színhez megadható a szín, a vonalvastagság és a raszter, amellyel nyomtatódik. A táblázat a CadCraft plot style fájlja, így az {{ui:Importálás…}} egy CadCraft-alkalmazásban készült táblát vesz be, az {{ui:Exportálás}} pedig vissza ad egyet. A modell megtartja a választását; ha nincs választása, a munkastílus dönt.

## Elem jelentése más osztályként

Egy úttá rajzolt födém, panelként használt fal, rámpa alakú tető: tartsa meg azt az eszközt, amellyel rajzolta, és jelentse, mi valójában.

1. Jelölje ki az elemet, és nyissa meg a {{ui:Tulajdonságok}} ablakot. Nyissa meg a {{ui:Jelentés mint}} részt.
2. A keresőmezőbe írva keressen olyan osztályt, amely illik az alakhoz, válassza ki, majd az előre meghatározott típusát. Saját típushoz válassza a USERDEFINED lehetőséget, és adjon neki nevet.
3. {{ui:Alkalmaz}} (egy visszavonási lépés). A {{ui:Törlés}} újra úgy jelenti, ahogy rajzolták.

Továbbra is azzal az eszközzel szerkesztheti, amellyel rajzolta. A mentett IFC a jelentett osztályként írja ki, így más programok, a {{ui:Mennyiségek}} mennyiségkimutatás, a Keresés, a Színezés elem szerint, a modellellenőrzések és a {{ui:Problémák}} is így számolják. A kimutatások a panelként jelentett falat kiveszik a falak kimutatásából, a {{ui:Elemek jelentett osztály szerint}} pedig minden ilyet felsorol. IFC4 és IFC2X3 fájlokkal működik; a lista csak azokat az osztályokat kínálja, amelyek a fájl IFC-verziójában szerepelnek. Az ajtók, ablakok, lépcsők, helyiségek és szintek megtartják saját osztályukat.

## Projekt mentése sablonként, és indítás belőle

1. Egy megnyitott projektnél kattintson a {{ui:Mentés sablonként}} gombra a {{ui:Mentés}} mellett.
2. Adjon nevet a sablonnak. Jelölje be a „Sablonfájl letöltése is” lehetőséget, hogy IFC-fájlként megoszthassa, és a {{ui:Új modellek ezzel induljanak}} lehetőséget, hogy alapértelmezetté tegye.
3. A sablon megtartja a szinteket, a nézetsablonokat és a nézetbeállításokat, a kettőzött nézeteket és a kiemeléseket, a rajzi elemeket, a tollakat és a tolltáblázatot, a címkéket, a családokat és a típusokat, a lapokat, a lapméreteket, a rajzfejeket és a munkastílust. A falak, födémek, ajtók és a modell többi eleme kimarad.
4. Kattintson az {{ui:Új épület}} gombra, és válassza ki az {{ui:Indítás innen}} alatt, vagy válassza a {{ui:Sablonfájl…}} lehetőséget egy kapott sablonhoz. Az új projekt saját nevet és saját projektazonosítót kap; minden más a sablon szerint marad.

:::note
A sablonok ebben a böngészőben vannak tárolva. A CadCraft Studion keresztül megosztott csapatsablonok még nincsenek elkészítve: küldje el helyette a sablonfájlt.
:::
