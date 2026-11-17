---
title: Dokumentumok a modellből
summary: Írjon egyszer egy specifikációt vagy leírást sablonként, mezőkkel a mennyiségekhez, tulajdonságokhoz és címkékhez, és töltse ki a megnyitott IFC-ből PDF-ként vagy Word-dokumentumként.
keywords: dokumentum, dokumentumok, specifikáció, spec, leírás, sablon, markdown, jelentés, word, docx, pdf, mennyiségek, kimutatás, szakág, ajtókimutatás, felületek, documentcad
from: 2b0c9156
---

## Mit fog csinálni

A sablon Markdown szöveg, amelyben mezők vannak dupla kapcsos zárójelben. A BimCraft a mezőket a megnyitott modellből tölti ki (darabszámok, típusonkénti mennyiségek, tulajdonságok, a [címkéi](topic:tags-and-schedules)), és az eredményt PDF-ként, Word-dokumentumként (.docx) vagy Markdownként menti.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. A bal oldali panelben, a {{ui:Mennyiségek}} alatt nyissa meg a {{ui:Dokumentumok a modellből}} lehetőséget.
3. Válasszon sablont: {{ui:Ajtók és vasalatok}} vagy {{ui:Falak, burkolatok és felületek}}, vagy a {{ui:Sablon betöltése (.md)…}} lehetőséget a sajátjához.
4. Ha a sablon olyan címkéket olvas, amelyeket a modell még nem határoz meg, kattintson az {{ui:A sablon címkéinek hozzáadása}} gombra, majd címkézze meg az elemeket a {{ui:Címkék}} alatt.
5. Változtassa meg a szöveget kedve szerint, és kattintson az {{ui:A dokumentum megjelenítése}} gombra.
6. Kattintson a {{ui:PDF}} gombra (előbb válassza az A4-et vagy a Letter-t), vagy a {{ui:Word (.docx)}} gombra.

## Mit kell látnia

- A kitöltött dokumentum a gombok alatt, a táblázataival együtt.
- Figyelmeztetések listája, ha egy mezőt nem lehet olvasni (nem definiált címke, a modellben nem szereplő tulajdonság, nem lezárt blokk); az ilyen mező `[?…]` alakban jelenik meg.
- PDF-oldalak a dokumentum címével, és minden oldal alján „1. oldal (összesen: 3)” típusú lábléc; a hosszú táblázatok átnyúlnak a következő oldalra, fejlécsorukkal együtt.

## Mezők

| Mező | Eredmény |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | a projekt neve és leírása, a fájl neve, a mai dátum |
| `{{count IfcDoor}}` | hány ajtó van |
| `{{sum IfcWall NetSideArea}}` | összeg, a mértékegységével |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | számítás (`+ - * /` és zárójelek) szögletes zárójelben álló tagok felett: `[sum …]`, `[count …]`, és egy each-ciklusban `[qty Width]`. A `round n` a tizedesjegyeket adja meg, az `unit` mértékegységet fűz hozzá. Amit nem tud olvasni, vagy nullával osztás, `[?…]` alakban jelenik meg, és figyelmeztet |
| `{{qty IfcWall NetSideArea by Type}}` | táblázat: típusonként egy sor a darabszámmal és összeggel, és egy összesítő sor |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | táblázat, elemenként egy sor |
| `{{tag Finish}}` | ciklusban az elem értéke; máshol az összes előforduló érték (Oak, Paint) |
| `{{tags}}` | a címkedefiníciók táblázatban |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | a szöveg elemenként egyszer; a `{{else}}` utáni rész, ha nincs egy sem |
| `{{#group IfcWall by Type}} … {{/group}}` | a szöveg típusonként egyszer, a `{{value}}`, `{{count}}`, `{{sum Length}}` és egy sima `{{#each}}` belsejében |

A `{{#each}}` belsejében: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (az IFC-címke), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (az elem saját értéke, a mértékegységével).

Egy osztály több is lehet (`IfcDoor|IfcWindow`), vagy minden elem (`*`). Bármelyiket szűkítheti a `where` feltétellel: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Az ellenőrzések: `=`, `!=`, `~` (tartalmazza), `>`, `<`, `>=`, `<=`, `has` és `hasnot`; többet `and` köt össze; a szóközt tartalmazó értéket „idézőjelbe” teszi. A `sort Name` rendezi a ciklust.

## Kimutatások és a specifikáció a dokumentumban

A `{{schedule doors}}` a modell kimutatását táblázatként nyomtatja az irodai elrendezésében: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, vagy a Kimutatásokban mentett beállítás neve. A `{{specification}}` a projekt specifikációját nyomtatja. A **Munkarajz-kimutatások** és a **Specifikáció** sablonok ezeket használják. Az előnézetben kattintson egy ilyen kimutatás számára, hogy kijelölje az elemeket, amelyekből származik. Lásd [Kimutatás elrendezése, mentése és exportálása](topic:schedule-layouts) és [A specifikáció elkészítése a modellből](topic:specification).

## Jó tudni

- Egy mező egy beépített nevet (Name, Type, Storey, Class, Material, Mark), egy címkét (`tag:Fire rating`, vagy a neve), egy tulajdonságot (`Pset_WallCommon.FireRating`) vagy csak egy tulajdonság nevét (`NetSideArea`, `Width`) jelöl. A puszta név minden elem saját készletét olvassa, előbb a mennyiségkészleteket, így az ajtón a `Width` az ajtó szélessége, nem a fal vastagsága. A `where`-ben a puszta név a kiválasztott elemek többségének készletét olvassa.
- A mennyiségek azok, amiket a fájl mennyiségkészletei mondanak (a BimCraft azokat írja, amiket rajzol); a mértékegységek a fájl mértékegység-beállításaiból jönnek.
- A mezőszavak (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) minden nyelven angolul maradnak. A példasablonok angol nyelvűek.
- A modellből származó szöveg soha nem válik formázássá: a névben lévő `*` vagy `|` jel úgy jelenik meg, ahogy van.
- A megváltoztatott sablont a {{ui:Megőrzés ebben a böngészőben}} (csak ebben a böngészőben van meg) vagy a {{ui:A sablon letöltése}} gombbal őrizze meg.
- A PDF-szöveg a szabványos PDF-betűtípusokat használja: a nyugat-európai szövegen kívüli karakter „?” alakban jelenik meg, és az állapotsor megmondja, hány van belőle.
- A szakágankénti sablonok a Könyvtárban élnek (Dokumentumsablon típussal). A {{ui:Dokumentumok a modellből}} panelen válassza a {{ui:Könyvtárból…}} lehetőséget, válasszon egyet, és a szövege meg a beolvasott címkék bekerülnek; szerkessze kedve szerint. Saját sablon közzététele a Könyvtárban ugyanaz a feltöltés, mint bármely más elemé. Még nincs elkészítve: a darabszámon és összesítésen túli számítások.
