---
title: Georeferenciranje bilo kojom projekcijom
summary: Recite BimCraft-u u kojem kartografskom sistemu su koordinate modela, iz cijele EPSG liste, bilo koje UTM zone ili projekcije koju sami definišete, i koristite to za Lokaciju, slojeve karte i oblake tačaka.
keywords: projekcija, koordinatni sistem, crs, epsg, utm, utm zona, prilagođena projekcija, proj4, proj string, prj, wkt, georeferenciranje, konverzija karte, ifcprojectedcrs, moje projekcije, geografska širina, geografska dužina, istočna koordinata, sjeverna koordinata, lambert, gauss-kruger, state plane, nacionalna mreža
from: 6894c1f2
---

Neki planovi su nacrtani u kartografskom sistemu koji nije na kratkoj listi: UTM zona, nacionalna mreža ili projekcija koju je neko zapisao kao tekstualnu definiciju. {{ui:Mjeri}} › {{ui:Koordinatni sistem…}} omogućava vam da kažete koji sistem model koristi.

## Odaberite sistem za model

1. Otvorite model, izaberite {{ui:Mjeri}}, zatim {{ui:Koordinatni sistem…}}.
2. Kucajte u polje za pretragu. Radi bilo koja od ovih:
   - EPSG broj: `32633` ili `EPSG:2277`;
   - UTM zona: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - riječi iz naziva: `lambert 93`, `mga zone 56`, `texas central`;
   - definicija projekcije: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, po želji s nazivom ispred (`Moja mreža = +proj=…`);
   - tekst `.prj` datoteke, ili upotrijebite {{ui:Učitaj .prj datoteku…}}.
3. Izaberite rezultat, zatim {{ui:Koristi ovaj sistem}}.

Izbor se čuva u modelu (skup svojstava `CadCraft_CRS` na projektu), pa se otvara zajedno s modelom. Sačuvajte model da ga zadržite. {{ui:Skini s modela}} vraća na ono što kaže datoteka.

Ako vaša definicija daje iste koordinate kao neki navedeni EPSG sistem, BimCraft to kaže i koristi taj kod; kad više navedenih sistema dijeli istu matematiku, navodi i ostale.

## Moje projekcije

Definicija koju nalijepite ili `.prj` koji učitate može se sačuvati pomoću {{ui:Sačuvaj u Moje projekcije}}. Lista je na ovom uređaju (u ovom pregledaču) i nudi se sljedeći put kad otvorite birač.

## Šta to koristi

- {{ui:Mjeri}} › {{ui:Lokacija}} pretvara izabranu tačku u geografsku širinu i dužinu kroz sistem modela. Ranije se zaustavljala s napomenom kad datoteka navodi svoj kartografski sistem bez EPSG koda; s sačuvanim izborom daje odgovor.
- Slojevi karte ispod modela koriste isti sistem. Oblak tačaka ili datoteka terena u drugom sistemu nudi se u sistemu modela (pogledajte dalje).
- {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Lokacija}} › {{ui:Odaberi drugi sistem…}} određuje šta {{ui:Lokacija}} još prikazuje: geografsku širinu i dužinu u bilo kojem navedenom geografskom sistemu, ili istočne i sjeverne koordinate u bilo kojem projekcijskom, pored sopstvenog sistema modela.

## Model koji još nije na karti

Ako datoteka nema kartografsku konverziju, izbor sistema otvara {{ui:Postavi ovaj model na kartu}}. Možete ga otvoriti i iz {{ui:Mjeri}} › {{ui:Početak na karti…}}.

1. Zadajte početak modela kao istočne i sjeverne koordinate u sistemu, ili upišite geografsku širinu i dužinu i izaberite {{ui:Pretvori u istočne i sjeverne koordinate}}.
2. Zadajte rotaciju prema mrežnom sjeveru (stepeni, suprotno kazaljci na satu; 0 znači da Y osa modela pokazuje na mrežni sjever) i visinu početka.
3. Razmjera počinje od razlike jedinica između modela i karte (0.001 za milimetarski model na metarskoj mreži). Mijenjajte je samo za kombinovani faktor od terena do mreže.
4. Izaberite {{ui:Postavi na kartu}}. Jedan korak poništavanja upisuje IfcProjectedCRS i IfcMapConversion (IFC4). Sam model se ne pomjera.

IFC2X3 datoteka nema nijedan od ta dva entiteta. BimCraft upisuje iste brojeve na način koji taj standard dozvoljava: buildingSMART skupove svojstava `ePSet_MapConversion` i `ePSet_ProjectedCRS` na projektu, geografsku širinu i dužinu lokacije, te pravi sjever. Dijalog to kaže. Sačuvajte model da ga zadržite.

## Model koji je već na karti

Kad datoteka već sama sebe postavlja na kartu i vi izaberete drugi sistem, BimCraft pita:

- {{ui:Promijeni samo ono što Lokacija prikazuje}} zadržava georeferencu same datoteke i koristi vaš izbor za {{ui:Lokaciju}}, slojeve karte i oblake tačaka (brojevi modela se tada čitaju kao da su u novom sistemu).
- {{ui:Pomjeri model u ovaj sistem}} ponovo piše georeferencu: početak prolazi kroz projekciju (istočne, sjeverne koordinate, visina, rotacija i razmjera), a IfcProjectedCRS (naziv, datum, projekcija, zona, jedinica) se ponovo piše, pa sačuvani IFC kaže novi sistem. Mjesto na Zemlji ostaje isto: početak zadržava svoju geografsku širinu i dužinu. Elementi unutar modela se nikad ne mijenjaju; mijenja se samo georeferenca.

Dijalog prikazuje stari i novi početak prije nego izaberete. Pomjeranje tamo i nazad vraća početak u okviru jednog milimetra.

## Oblaci tačaka i teren u drugom sistemu

Oblak ili geodetska datoteka nosi sopstveni sistem (LAS, LAZ, E57, GeoTIFF) ili nijedan. Kad se razlikuje od sistema modela, BimCraft nudi {{ui:Reprojektuj u sistem modela}}. Tačke se pomjeraju u serijama (u pozadini kad ih ima mnogo, pa stranica ostaje upotrebljiva), datoteka na vašem računaru se ne dira, a statusna linija kaže šta je urađeno. Ponovo otvorite datoteku da se vratite na njen sopstveni sistem. Za oblak koji je već otvoren, {{ui:Reprojektuj u model…}} u traci oblaka radi isto.

Ako datoteka ne navodi nijedan sistem, BimCraft pita {{ui:U kojem je sistemu ova datoteka?}}: izaberite ga pomoću {{ui:Odaberi sistem…}} i odgovor se pamti za tu datoteku na ovom uređaju. {{ui:Zadrži vlastiti sistem datoteke}} ostavlja tačke kakve jesu.

## Kad je nešto aproksimativno

Problemi se navode u dijalogu i na panelu Problemi, nikad tiho:

- Mjesto izvan područja za koje je sistem napravljen: brojevi rade, ali iskrivljenje raste.
- Pomaci datuma koji traže datoteku mreže (NADCON, NTv2 i slični) nisu dostupni. Sistemi na drugom datumu pomjeraju se pomakom bez mreže koji navodi EPSG registar, a rezultat je aproksimativan s tačnošću koju poruka navodi u metrima.
- Tačka koja se ne može projicirati izostavlja se i broji; datoteka preko granice veličine odbija se uz navođenje granice.

:::tip
Koordinatama karte treba kartografska konverzija. Datoteka bez nje postavlja se na kartu pomoću {{ui:Početak na karti…}}.
:::

:::note
Prelazak između datuma bez datoteke mreže je dobar do nekoliko metara; rezultat Lokacije kaže koliko kad katalog to zna.
:::
