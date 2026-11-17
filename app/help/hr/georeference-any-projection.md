---
title: Georeferenciranje s bilo kojom projekcijom
summary: Recite BimCraftu u kojem su kartografskom sustavu koordinate modela, s cijelog popisa EPSG-a, bilo koje UTM zone ili projekcije koju sami definirate, te ga koristite za Lokaciju, slojeve karte i oblake točaka.
keywords: projekcija, koordinatni sustav, crs, epsg, utm, utm zona, prilagođena projekcija, proj4, proj niz, prj, wkt, georeferenciranje, georeferenca, pretvorba karte, ifcprojectedcrs, moje projekcije, geografska širina, geografska dužina, istok, sjever, lambert, gauss-kruger, državna ravninska projekcija, državna mreža
from: 6894c1f2
---

Neki se planovi crtaju u kartografskom sustavu koji nije na kratkom popisu: UTM zona, državna mreža ili projekcija koju je netko zapisao kao tekstualnu definiciju. {{ui:Mjeri}} › {{ui:Koordinatni sustav…}} omogućuje vam da kažete koji sustav model koristi.

## Odaberite sustav za model

1. Otvorite model, odaberite {{ui:Mjeri}}, zatim {{ui:Koordinatni sustav…}}.
2. Upišite u okvir za pretragu. Radi bilo koje od ovoga:
   - EPSG broj: `32633` ili `EPSG:2277`;
   - UTM zonu: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - riječi iz naziva: `lambert 93`, `mga zone 56`, `texas central`;
   - definiciju projekcije: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalno s nazivom ispred (`Moja mreža = +proj=…`);
   - tekst datoteke `.prj`, ili upotrijebite {{ui:Učitaj .prj datoteku…}}.
3. Odaberite rezultat, zatim {{ui:Koristi ovaj sustav}}.

Izbor je spremljen u modelu (svojstveni skup `CadCraft_CRS` na projektu), pa se ponovno otvara s modelom. Spremite model da ga sačuvate. {{ui:Ukloni ga iz modela}} vraća na ono što kaže datoteka.

Ako vaša definicija daje iste koordinate kao neki navedeni EPSG sustav, BimCraft to kaže i koristi taj kod; kada više navedenih sustava dijeli istu matematiku, navodi i ostale.

## Moje projekcije

Definicija koju zalijepite ili `.prj` koju učitate može se zadržati s {{ui:Spremi u Moje projekcije}}. Popis je na ovom uređaju (u ovom pregledniku) i nudi se sljedeći put kada otvorite birač.

## Što ga koristi

- {{ui:Mjeri}} › {{ui:Lokacija}} pretvara odabranu točku u geografsku širinu i dužinu kroz sustav modela. Ranije je stajala s napomenom kada datoteka navodi svoj kartografski sustav bez EPSG koda; uz spremljen izbor daje odgovor.
- Slojevi karte ispod modela koriste isti sustav. Oblak točaka ili datoteka terena u drugom sustavu nudi se u sustavu modela (vidi dolje).
- {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Lokacija}} › {{ui:Odaberi drugi sustav…}} određuje što {{ui:Lokacija}} još prikazuje: geografsku širinu i dužinu u bilo kojem navedenom geografskom sustavu, ili istok i sjever u bilo kojem projiciranom, uz vlastiti sustav modela.

## Model koji još nije na karti

Ako datoteka nema pretvorbu karte, odabir sustava otvara {{ui:Smjestite ovaj model na kartu}}. Možete ga otvoriti i iz {{ui:Mjeri}} › {{ui:Ishodište na karti…}}.

1. Zadajte ishodište modela kao istok i sjever u sustavu, ili upišite geografsku širinu i dužinu i odaberite {{ui:Pretvori u istok i sjever}}.
2. Zadajte rotaciju prema mrežnom sjeveru (stupnjevi, suprotno kazaljci na satu; 0 znači da os Y modela pokazuje na mrežni sjever) i visinu ishodišta.
3. Mjerilo kreće od razlike jedinica između modela i karte (0.001 za model u milimetrima na mreži u metrima). Mijenjajte ga samo za kombinirani faktor od tla do mreže.
4. Odaberite {{ui:Smjesti na kartu}}. Jedan korak poništavanja zapisuje IfcProjectedCRS i IfcMapConversion (IFC4). Sam model se ne pomiče.

Datoteka IFC2X3 nema nijedan od tih entiteta. BimCraft zapisuje iste brojeve na način koji taj standard dopušta: buildingSMART svojstveni skupovi `ePSet_MapConversion` i `ePSet_ProjectedCRS` na projektu, geografska širina i dužina lokacije te pravi sjever. Dijalog to kaže. Spremite model da ga sačuvate.

## Model koji je već na karti

Kada datoteka već sama sebe smješta na kartu i odaberete drugi sustav, BimCraft pita:

- {{ui:Promijeni samo ono što Lokacija prikazuje}} zadržava vlastitu georeferencu datoteke i koristi vaš izbor za {{ui:Lokacija}}, slojeve karte i oblake točaka (brojevi modela tada se čitaju kao da su u novom sustavu).
- {{ui:Premjesti model u ovaj sustav}} ponovno piše georeferencu: ishodište prolazi kroz projekciju (istok, sjever, visina, rotacija i mjerilo), a IfcProjectedCRS (naziv, datum, projekcija, zona, jedinica) se ponovno piše tako da spremljeni IFC kaže novi sustav. Mjesto na Zemlji ostaje isto: ishodište zadržava svoju geografsku širinu i dužinu. Elementi unutar modela se nikada ne mijenjaju; mijenja se samo georeferenca.

Dijalog prikazuje staro i novo ishodište prije nego odaberete. Premještanje tamo i natrag vraća ishodište unutar jednog milimetra.

## Oblaci točaka i teren u drugom sustavu

Oblak ili datoteka mjerenja nosi vlastiti sustav (LAS, LAZ, E57, GeoTIFF) ili nijedan. Kada se razlikuje od sustava modela, BimCraft nudi {{ui:Ponovno projiciraj u sustav modela}}. Točke se pomiču u skupinama (u pozadinskom procesu kada ih je mnogo, pa stranica ostaje upotrebljiva), datoteka na vašem računalu se ne dira, a statusna traka kaže što je učinjeno. Ponovno otvorite datoteku da se vratite na njezin vlastiti sustav. Za oblak koji je već otvoren, {{ui:Ponovno projiciraj u model…}} u traci oblaka radi isto.

Ako datoteka ne navodi sustav, BimCraft pita {{ui:U kojem je sustavu ova datoteka?}}: odaberite ga s {{ui:Odaberi sustav…}}, a odgovor se pamti za tu datoteku na ovom uređaju. {{ui:Zadrži vlastiti sustav datoteke}} ostavlja točke kakve jesu.

## Kada je nešto približno

Problemi su navedeni u dijalogu i na ploči Problemi, nikada tiho:

- Mjesto izvan područja za koje je sustav napravljen: brojevi rade, ali izobličenje raste.
- Pomaci datuma koji traže datoteku mreže (NADCON, NTv2 i slične) nisu dostupni. Sustavi na drugom datumu pomiču se pomakom bez mreže koji navodi EPSG registar, a rezultat je približan navedenoj točnosti, koju poruka navodi u metrima.
- Točka koju nije moguće projicirati izostavlja se i broji se; datoteka preko ograničenja veličine odbija se uz navedeno ograničenje.

:::tip
Kartografske koordinate trebaju pretvorbu karte. Datoteka bez nje smješta se na kartu s {{ui:Ishodište na karti…}}.
:::

:::note
Prijelaz između datuma bez datoteke mreže točan je na nekoliko metara; rezultat Lokacije kaže koliko kada katalog to zna.
:::
