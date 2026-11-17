---
title: Georeferenciranje sa bilo kojom projekcijom
summary: Recite BimCraft-u u kom kartografskom sistemu su koordinate modela, iz cele EPSG liste, bilo koje UTM zone ili projekcije koju sami definišete, i koristite ga za Lokaciju, slojeve karte i oblake tačaka.
keywords: projekcija, koordinatni sistem, crs, epsg, utm, utm zona, prilagođena projekcija, proj4, proj string, prj, wkt, georeferenciranje, pretvorba karte, ifcprojectedcrs, moje projekcije, geografska širina, geografska dužina, istok, sever, lambert, gauss-kruger, nacionalna mreža
from: 6894c1f2
---

Neki planovi su nacrtani u kartografskom sistemu koji nije na kratkoj listi: UTM zona, nacionalna mreža ili projekcija koju je neko zapisao kao tekstualnu definiciju. {{ui:Izmeri}} › {{ui:Koordinatni sistem…}} omogućava da kažete koji sistem model koristi.

## Izaberite sistem za model

1. Otvorite model, izaberite {{ui:Izmeri}}, zatim {{ui:Koordinatni sistem…}}.
2. Kucajte u polje za pretragu. Radi bilo koje od ovoga:
   - EPSG broj: `32633` ili `EPSG:2277`;
   - UTM zonu: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - reči iz naziva: `lambert 93`, `mga zone 56`, `texas central`;
   - definiciju projekcije: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalno sa nazivom ispred (`Moja mreža = +proj=…`);
   - tekst `.prj` datoteke, ili koristite {{ui:Učitaj .prj datoteku…}}.
3. Izaberite rezultat, zatim {{ui:Koristi ovaj sistem}}.

Izbor se čuva u modelu (skup svojstava pod nazivom `CadCraft_CRS` na projektu), pa se ponovo otvara sa modelom. Sačuvajte model da biste ga zadržali. {{ui:Skini ga sa modela}} vraća na ono što datoteka kaže.

Ako vaša definicija daje iste koordinate kao neki navedeni EPSG sistem, BimCraft to kaže i koristi taj kod; kada više navedenih sistema deli istu matematiku, navodi i ostale.

## Moje projekcije

Definicija koju nalepite ili `.prj` koji učitate mogu se sačuvati sa {{ui:Sačuvaj u Mojim projekcijama}}. Lista je na ovom uređaju (u ovom pregledaču) i nudi se sledeći put kad otvorite birač.

## Šta ga koristi

- {{ui:Izmeri}} › {{ui:Lokacija}} pretvara izabranu tačku u geografsku širinu i dužinu kroz sistem modela. Ranije se zaustavljala uz napomenu kad datoteka navodi kartografski sistem bez EPSG koda; sa sačuvanim izborom daje odgovor.
- Slojevi karte ispod modela koriste isti sistem. Oblak tačaka ili teren u drugom sistemu nudi se u sistemu modela (videti ispod).
- {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Lokacija}} › {{ui:Izaberi drugi sistem…}} određuje šta {{ui:Lokacija}} još prijavljuje: geografsku širinu i dužinu u bilo kom navedenom geografskom sistemu, ili istok i sever u bilo kom projektovanom, pored sopstvenog sistema modela.

## Model koji još nije na karti

Ako datoteka nema kartografsku pretvorbu, izbor sistema otvara {{ui:Postavi ovaj model na mapu}}. Možete ga otvoriti i iz {{ui:Izmeri}} › {{ui:Početak na mapi…}}.

1. Dajte početak modela kao istok i sever u tom sistemu, ili upišite geografsku širinu i dužinu i izaberite {{ui:Pretvori u istok i sever}}.
2. Dajte rotaciju do mrežnog severa (stepeni, suprotno kretanju kazaljke na satu; 0 znači da Y osa modela pokazuje ka mrežnom severu) i visinu početka.
3. Razmera počinje sa razlikom jedinica između modela i karte (0.001 za model u milimetrima na mreži u metrima). Menjajte je samo za kombinovani faktor od tla do mreže.
4. Izaberite {{ui:Postavi na mapu}}. Jedan korak poništavanja upisuje IfcProjectedCRS i IfcMapConversion (IFC4). Sam model se ne pomera.

IFC2X3 datoteka nema nijedan od ta dva entiteta. BimCraft upisuje iste brojeve na način koji taj standard dozvoljava: buildingSMART skupove svojstava `ePSet_MapConversion` i `ePSet_ProjectedCRS` na projektu, geografsku širinu i dužinu lokacije i pravi sever. Dijalog to kaže. Sačuvajte model da biste ga zadržali.

## Model koji je već na karti

Kad datoteka već sama sebe smešta na kartu i izaberete drugi sistem, BimCraft pita:

- {{ui:Menjaj samo ono što prijavljuje Lokacija}} zadržava sopstvenu georeferencu datoteke i koristi vaš izbor za {{ui:Lokacija}}, slojeve karte i oblake tačaka (brojevi modela se tada čitaju kao da su u novom sistemu).
- {{ui:Premesti model u ovaj sistem}} ponovo upisuje georeferencu: početak prolazi kroz projekciju (istok, sever, visina, rotacija i razmera), a IfcProjectedCRS (naziv, datum, projekcija, zona, jedinica) se ponovo upisuje, pa sačuvani IFC kaže novi sistem. Mesto na Zemlji ostaje isto: početak zadržava svoju geografsku širinu i dužinu. Elementi unutar modela se nikad ne menjaju; menja se samo georeferenca.

Dijalog pokazuje stari i novi početak pre nego što izaberete. Pomeranje tamo i nazad vraća početak na 1 mm.

## Oblaci tačaka i teren u drugom sistemu

Oblak ili geodetska datoteka nosi sopstveni sistem (LAS, LAZ, E57, GeoTIFF) ili nijedan. Kad se razlikuje od sistema modela, BimCraft nudi {{ui:Reprojektuj u sistem modela}}. Tačke se pomeraju u serijama (u pozadinskom procesu kad ih ima mnogo, pa stranica ostaje upotrebljiva), datoteka na vašem računaru se ne dira, a statusna linija kaže šta je urađeno. Ponovo otvorite datoteku da se vratite na njen sopstveni sistem. Za oblak koji je već otvoren, {{ui:Reprojektuj u model…}} u traci oblaka radi isto.

Ako datoteka ne navodi sistem, BimCraft pita {{ui:U kom je sistemu ova datoteka?}}: izaberite ga sa {{ui:Izaberite sistem…}} i odgovor se pamti za tu datoteku na ovom uređaju. {{ui:Zadrži sopstveni sistem datoteke}} ostavlja tačke kakve jesu.

## Kad je nešto približno

Problemi se navode u dijalogu i u panelu Problemi, nikad tiho:

- Mesto van područja za koje je sistem napravljen: brojevi rade, ali izobličenje raste.
- Pomeraji datuma koji zahtevaju datoteku mreže (NADCON, NTv2 i slične) nisu dostupni. Sistemi na drugom datumu pomeraju se pomakom bez mreže koji navodi EPSG registar, a rezultat je približan do navedene tačnosti, koju poruka daje u metrima.
- Tačka koja se ne može projektovati ostaje van i broji se; datoteka preko granice veličine odbija se uz navedenu granicu.

:::tip
Kartografske koordinate zahtevaju kartografsku pretvorbu. Datoteka bez nje se postavlja na kartu pomoću {{ui:Početak na mapi…}}.
:::

:::note
Prelaz između datuma bez datoteke mreže tačan je do nekoliko metara; rezultat Lokacije kaže koliko kad katalog to zna.
:::
