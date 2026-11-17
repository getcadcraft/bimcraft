---
title: Áttérés más BIM- és rajzprogramokból
summary: Hogyan feleltethetők meg az asztali BIM-tervezőprogramokból és DWG-megtekintőkből származó szokások a BimCraftnak, és melyek azok az eltérések, amelyek gyakran okoznak zavart.
keywords: áttérés, átállás, ismerős, asztali BIM, család, paraméterek, projektböngésző, tulajdonságpaletta, nézetkocka, xref, rétegkezelő, eltérések, összehasonlítás
from: 2de629af
---

Ha ismeri a Revitet, a BimCraft legtöbb eleme szavakban ismerős lesz, hatókörében viszont szokatlan. A legfontosabb különbség: **ez a verzió modelleket olvas és vizsgál, és IFC-adatokat szerkeszt. Egyelőre nem készít modellt úgy, mint a Revit.** Falakat nem lehet rajzolni, családokat nem lehet elhelyezni, nézeteket vagy lapokat nem lehet készíteni, és projektfájl sem menthető. Azt viszont lehet, hogy szinte bármilyen épületfájlt megnyit bármely böngészővel rendelkező számítógépen, megnézi, mi van benne, ellenőrzi a teljes projektmappát, és kijavítja az IFC-modell adatait.

## Megszokások megfeleltetése

| Ha megszokta | A BimCraftban |
|---|---|
| Az `.rvt` megnyitása a Revitben a modell megtekintéséhez | A BimCraft az `.rvt` fájlt fájlkártyaként nyitja meg: kiadás, projektadatok, hivatkozások, előnézet. A 3D-modellhez exportáljon IFC-t, és azt nyissa meg. [Projekt- vagy családfájl olvasása](topic:read-rvt-file) |
| Annak ellenőrzése, melyik kiadásban mentettek egy fájlt, mielőtt megnyitja | A kártya tetején ez áll: „Revit … verzióban mentve”, a fájl frissítése vagy módosítása nélkül |
| A Projektböngésző | Nincs nézet- és lapböngésző. Egy IFC-modellnek {{ui:Szintek}} és {{ui:Elemek}} listái vannak; a rajzoknak lapfülei vannak |
| A Tulajdonságok paletta | A {{ui:Tulajdonságok}} panel a jobb oldalon, a kiválasztott elemhez. IFC-tulajdonságkészletek a paraméter-csoportok helyett |
| Példány- és típusparaméterek | Példány-tulajdonságkészletek, és „(típus)” jelölésű készletek. A típus módosítása a típus minden elemére érvényes, mint a Revitben. [Típustulajdonság módosítása a típus minden elemén](topic:type-vs-instance) |
| Típus szerkesztése | Nincs párbeszédpanel: kattintson egy „(típus)” készlet értékére, és írja be az újat |
| Több elem kijelölése, szűrők, Összes példány kijelölése | Egyszerre egy elem. Még nincs elkészítve |
| A nézetkocka és a navigációs kerék | Nézetkocka a jobb alsó sarokban, négy gomb ({{ui:Illesztés}}, {{ui:Felülnézet}}, {{ui:Elölnézet}}, {{ui:Oldalnézet}}) és szabad forgatás. Navigációs kerék nincs |
| Shift és középső gombbal húzás a forgatáshoz, középső gombbal húzás az eltoláshoz | Bal gombbal húzva forgat, jobb gombbal húzva (vagy a {{key:Shift}} billentyűvel és húzással) tol, a görgő nagyít. A {{ui:BIM szalag}} menüstílus a középső gombbal való eltolásra, és a {{key:Shift}} plusz középső gombbal való forgatásra vált. [Menük, billentyűk és egér](topic:menus-keys-and-mouse) |
| Alaprajzok, metszetek, metszetdobozok | Egyszerre egy {{ui:Metszet}} sík ({{key:X}}); metszetdoboz vagy 2D-s alaprajz nincs. [Metszet vágása IFC-modellen metszősíkkal](topic:section-plane) |
| Elrejtés a nézetben, izolálás, láthatóság és grafika | A {{ui:Szintek}} be- és kikapcsolása, {{ui:Terek}} és {{ui:Élek}}. Elemenkénti elrejtés még nincs |
| Helyiségek | IFC-terek, kezdetben elrejtve. Kattintson a {{ui:Terek}} gombra |
| Mentés, Mentés másként, szinkronizálás központi fájllal | A {{ui:Mentés IFC-ként}} új IFC-fájlt tölt le. Az eredeti soha nem változik. Nincs központi fájl és nincs megosztott munkavégzés |
| Visszavonás a {{key:Mod+Z}} billentyűvel | Az IFC-szerkesztéseknél működik a mentésig. [IFC-tulajdonságok módosítása és szerkesztett másolat mentése](topic:edit-ifc-properties) |
| Hivatkozások kezelése | Nyissa meg a projektmappát: minden hivatkozás ellenőrzésre kerül, és **Ebben a mappában**, **Azonos nevű megtalálva**, **Könyvtári fájl** vagy **Nincs ebben a mappában** jelölést kap. [Teljes projektmappa megnyitása](topic:open-project-folder) |
| Ellenőrzés, vagy fájl megnyitása annak megállapítására, hogy sérült-e | A mappajelentés minden másolatot és biztonsági mentést ellenőriz, hogy csonkák-e, másodpercek alatt. [Sérült másolatok keresése mappában](topic:check-folder-health) |
| A megfelelő fájl kiválasztása egy rendetlen mappából | A {{ui:Kezdje itt}} mező indoklással javasol egyet |

Ha főleg modelleket nyit meg ellenőrzés céljából, mint egy modellellenőrző vagy IFC-megtekintő programban, válassza a {{ui:Nézegető}} menüstílust: a megtekintő és ellenőrző eszközök kerülnek előre, az épülettervezési eszközök pedig egy menüben várnak. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).

## DWG-fájlok megtekintéséből

Ha AutoCAD-ben vagy DWG-megtekintőben nyit meg DWG-fájlokat:

| Ha megszokta | A BimCraftban |
|---|---|
| Modell- és elrendezés-lapok alul | Lapok a rajz fölött: {{ui:Modell}} és egy minden lapra |
| ZOOM Extents, dupla kattintás a görgőn | Dupla kattintás, {{key:F}} vagy {{ui:Illesztés}} |
| Eltolás a középső gombbal | Húzás bármelyik gombbal |
| A rétegkezelő | A {{ui:Rétegek}} lista: pipa a megjelenítéshez, pipa törlése az elrejtéshez, {{ui:Mind be}} és {{ui:Mind ki}} |
| Az xref-kezelő | **Kapcsolt rajzok** a jobb oldalon, **Látható** vagy **Nem található** állapottal, és {{ui:Kapcsolt rajzok hozzáadása…}} |
| Plottolás előnézete | {{ui:Nyomtatási nézet}} vagy {{key:P}}: fekete a fehéren, vonalvastagságokkal. Nem nyomtat |
| Blokkattribútumok adatkinyerése | A {{ui:Berendezések}} lap a címkézett vendéglátóipari rajzokhoz, {{ui:CSV letöltése}} gombbal |
| Mérés, rajzolás, szerkesztés, mentés másként | Nincs a BimCraftban. A CadCraft rajzoló alkalmazás rajzol és szerkeszt |

## Gyakran zavaró eltérések

- **A böngészőben fut, és a böngésző óvatosan bánik a fájlokkal.** A BimCraft csak olyan fájlokat és mappákat tud olvasni, amelyeket kiválasztással vagy húzással átadnak neki. Önállóan nem tud fájlt megnyitni, és fájl fölé sem tud menteni. Minden mentés letöltés.
- **Semmi nem töltődik fel.** A „feltöltés” szó egyes böngészők mappaválasztó párbeszédpanelein a böngésző saját megfogalmazása. A fájlok a számítógépen maradnak.
- **Az IFC a modellformátum.** A projektfájl kártyaként nyílik meg, mert 3D-s tartalma nincs dokumentálva. Az IFC-t úgy kezelje, mint azt a módot, ahogyan a modellek a BimCraftba érkeznek.
- **A szerkesztések másolás-íráson alapulnak.** Egy elem értékének módosítása soha nem változtatja meg a szomszédos elemeket, még akkor sem, ha az exportáló program ugyanazt az értéket megosztotta közöttük. A típustulajdonságok a szándékos kivétel.
- **Nincs projekt, nincsenek nézetek.** A BimCraft egyszerre egy fájlt mutat, és a lap bezárása után semmit nem őriz meg róla, kivéve a legutóbbi mappák nevét a Chrome-ban és az Edge-ben.
- **Mac-billentyűk.** Ahol a Revit Windows-os gyorsbillentyűi a Ctrl-t használják, ott a BimCraft gyorsbillentyűi a {{key:Mod}} billentyűt: Macen a Command billentyűt.
- **Az egérhasználati szokások.** A forgatás a bal gomb, nem a Shift és a középső gomb, kivéve ha a {{ui:BIM szalag}} menüstílust választja, vagy maga állítja be a gombokat a [Menük, billentyűk és egér](topic:menus-keys-and-mouse) részben.

Azt, hogy mit használjon helyette, lásd: [Még nincs elkészítve](topic:not-built-yet).
