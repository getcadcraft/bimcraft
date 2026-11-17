---
title: Georeferenciranje s poljubno projekcijo
summary: Povejte BimCraft, v katerem kartografskem sistemu so koordinate modela – iz celotnega seznama EPSG, katere koli cone UTM ali projekcije, ki jo sami definirate – in ga uporabite za Lokacijo, kartografske sloje in oblake točk.
keywords: projekcija, koordinatni sistem, crs, epsg, utm, cona utm, lastna projekcija, proj4, niz proj, prj, wkt, georeferenciranje, georeference, kartografska pretvorba, ifcprojectedcrs, moje projekcije, zemljepisna širina, zemljepisna dolžina, vzhodna koordinata, severna koordinata, lambert, gauss-kruger, državna ravninska projekcija, nacionalna mreža
from: 6894c1f2
---

Nekateri načrti so narisani v kartografskem sistemu, ki ni na kratkem seznamu: cona UTM, nacionalna mreža ali projekcija, ki jo je nekdo zapisal kot besedilno definicijo. {{ui:Meri}} › {{ui:Koordinatni sistem…}} vam omogoča, da določite, kateri sistem uporablja model.

## Izberite sistem za model

1. Odprite model, izberite {{ui:Meri}}, nato {{ui:Koordinatni sistem…}}.
2. Vpišite v iskalno polje. Deluje katerikoli od teh:
   - številka EPSG: `32633` ali `EPSG:2277`;
   - cona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - besede iz imena: `lambert 93`, `mga zone 56`, `texas central`;
   - definicija projekcije: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, po želji z imenom pred njo (`My grid = +proj=…`);
   - besedilo datoteke `.prj` ali {{ui:Naloži datoteko .prj…}}.
3. Izberite rezultat in nato {{ui:Uporabi ta sistem}}.

Izbira se shrani v model (nabor lastnosti `CadCraft_CRS` na projektu), zato se ob ponovnem odprtju odpre z modelom. Shranite model, da jo ohranite. {{ui:Odstrani iz modela}} vrne na to, kar pove datoteka.

Če vaša definicija daje enake koordinate kot naveden sistem EPSG, BimCraft to pove in uporabi to kodo; kadar več navedenih sistemov uporablja enake izračune, navede tudi druge.

## Moje projekcije

Definicijo, ki jo prilepite, ali datoteko `.prj`, ki jo naložite, lahko shranite z {{ui:Shrani med Moje projekcije}}. Seznam je na tej napravi (v tem brskalniku) in se ponudi, ko naslednjič odprete izbirnik.

## Kaj jo uporablja

- {{ui:Meri}} › {{ui:Lokacija}} pretvori izbrano točko v zemljepisno širino in dolžino prek sistema modela. Prej se je ustavil z opombo, kadar je datoteka navedla svoj kartografski sistem brez kode EPSG; s shranjeno izbiro da odgovor.
- Kartografski sloji pod modelom uporabljajo isti sistem. Oblak točk ali terenska datoteka v drugem sistemu se ponudi v sistemu modela (glejte spodaj).
- {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Lokacija}} › {{ui:Izberite drug sistem…}} nastavi, kaj {{ui:Lokacija}} poroča še: zemljepisno širino in dolžino v katerem koli navedenem geografskem sistemu ali vzhodno in severno koordinato v katerem koli projiciranem, poleg lastnega sistema modela.

## Model, ki še ni na zemljevidu

Če datoteka nima kartografske pretvorbe, izbira sistema odpre {{ui:Postavite ta model na zemljevid}}. Odprete ga lahko tudi iz {{ui:Meri}} › {{ui:Izhodišče na zemljevidu…}}.

1. Podajte izhodišče modela kot vzhodno in severno koordinato v sistemu ali vpišite zemljepisno širino in dolžino ter izberite {{ui:Pretvori v vzhodne in severne koordinate}}.
2. Podajte zasuk do severne mreže (stopinje, v nasprotni smeri urnega kazalca; 0 pomeni, da os Y modela kaže proti severu mreže) in višino izhodišča.
3. Merilo se začne z razliko enot med modelom in zemljevidom (0.001 za model v milimetrih na mreži v metrih). Spremenite ga samo za združeni faktor od tal do mreže.
4. Izberite {{ui:Postavi na zemljevid}}. En korak razveljavitve zapiše IfcProjectedCRS in IfcMapConversion (IFC4). Sam model se ne premakne.

Datoteka IFC2X3 nima nobene od teh entitet. BimCraft zapiše enake številke na način, ki ga ta standard dopušča: nabora lastnosti buildingSMART `ePSet_MapConversion` in `ePSet_ProjectedCRS` na projektu, zemljepisno širino in dolžino mesta ter pravi sever. Pogovorno okno to pove. Shranite model, da to ohranite.

## Model, ki je že na zemljevidu

Kadar datoteka sama že postavi model na zemljevid in izberete drug sistem, BimCraft vpraša:

- {{ui:Spremeni samo to, kar poroča Lokacija}} ohrani georeferenco datoteke in uporabi vašo izbiro za {{ui:Lokacija}}, kartografske sloje in oblake točk (številke modela se takrat berejo kot številke v novem sistemu).
- {{ui:Premakni model v ta sistem}} prepiše georeferenco: izhodišče gre skozi projekcijo (vzhodno, severno, višina, zasuk in merilo), IfcProjectedCRS (ime, datum, projekcija, cona, enota) pa se prepiše, tako da shranjeni IFC pove novi sistem. Mesto na Zemlji ostane enako: izhodišče ohrani svojo zemljepisno širino in dolžino. Elementi znotraj modela se nikoli ne spremenijo; spremeni se samo georeferenca.

Pogovorno okno pred izbiro pokaže staro in novo izhodišče. Premik tja in nazaj vrne izhodišče znotraj milimetra.

## Oblaki točk in teren v drugem sistemu

Oblak ali geodetska datoteka ima svoj sistem (LAS, LAZ, E57, GeoTIFF) ali nobenega. Kadar se razlikuje od sistema modela, BimCraft ponudi {{ui:Projiciraj v sistem modela}}. Točke se premaknejo v serijah (v ozadju, kadar jih je veliko, da stran ostane uporabna), datoteka na vašem računalniku se ne spremeni, vrstica stanja pa pove, kaj je bilo narejeno. Datoteko znova odprite, da se vrnete na njen lastni sistem. Za oblak, ki je že odprt, {{ui:Ponovno projiciraj v model…}} v vrstici oblaka naredi isto.

Če datoteka ne navaja sistema, BimCraft vpraša {{ui:V katerem sistemu je ta datoteka?}}: izberite ga z {{ui:Izberite sistem…}} in odgovor se za to datoteko zapomni na tej napravi. {{ui:Ohrani lastni sistem datoteke}} pusti točke, kakršne so.

## Kadar je nekaj približno

Težave so navedene v pogovornem oknu in v podoknu **Težave**, nikoli tiho:

- Mesto zunaj območja, za katerega je sistem narejen: številke delujejo, vendar popačenje narašča.
- Premiki datuma, ki potrebujejo datoteko mreže (NADCON, NTv2 in podobne), niso na voljo. Sistemi na drugem datumu se premaknejo s premikom brez mreže, ki ga navaja register EPSG, in rezultat je približen na navedeno natančnost, ki jo sporočilo poda v metrih.
- Točka, ki je ne more projicirati, se izpusti in prešteje; datoteka čez mejo velikosti se zavrne z navedeno mejo.

:::tip
Kartografske koordinate potrebujejo kartografsko pretvorbo. Datoteka brez nje se postavi na zemljevid z {{ui:Izhodišče na zemljevidu…}}.
:::

:::note
Premikanje med datumi brez datoteke mreže je dobro na nekaj metrov; rezultat Lokacije pove, koliko, kadar to ve katalog.
:::
