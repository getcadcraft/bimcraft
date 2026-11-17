---
title: Okna i otvori kroz podove
summary: Okno je jedan obris koji siječe svaki pod, plafon i krov između dva nivoa. Vertikalni otvor siječe jedan od njih. Otvor u zidu siječe zid.
keywords: okno, liftovsko okno, šaht lifta, stepenišni otvor, vertikala, vertikalni otvor, otvor u podu, otvor u plafonu, otvor u krovu, otvor za svjetlarnik, rupa u podu, otvor u zidu, IfcOpeningElement, odbitak, neto površina
from: 8e9e1641
---

## Šta ćete uraditi

Probiti liftovsko okno kroz zgradu jednom skicom, napraviti rupu u jednom podu i pročitati koliko je oduzeto od površina.

## Gdje su alati

- Rasporedi s trakom: {{ui:Arhitektura}} › **Otvor** › {{ui:Okno}}, {{ui:Vertikalni otvor}} i {{ui:Otvor u zidu}}.
- Klasični raspored: traka Crtanje › meni {{ui:Prostorije}} (Okno, Vertikalni otvor) i › meni {{ui:Zidovi}} (Otvor u zidu).

## Okno

1. Otvorite tlocrt nivoa na kojem okno počinje. Odaberite {{ui:Okno}}.
2. U redu odaberite {{ui:Donji nivo}} i {{ui:Gornji nivo}}, te pomake ako počinje ili završava iznad ili ispod njih.
3. Kliknite uglove obrisa. Kliknite prvi ugao ponovo, dvaput kliknite ili pritisnite {{key:Enter}} da završite.
4. Svaki pod, plafon i krov između dvije visine se sijeku. Statusna linija kaže koliko ih je.

Okno je jedna stvar. Odaberite njegov obris na bilo kom nivou kroz koji prolazi: Svojstva imaju njegov naziv, nivoe i pomake, šta siječe i površinu koja je oduzeta. Promijenite ga i svaki otvor ga prati. Obrišite ga i svaki otvor nestaje. Svaka promjena je jedan korak poništavanja.

Nastavlja da siječe: pod napravljen kasnije između njegovih nivoa bude presječen bez traženja, a pod koji obrišete više se ne siječe.

Pod na kojem okno stoji nije presječen (njegov vrh je baza). Dajte bazi negativan pomak da bude presječena i ona. Dajte vrhu pozitivan pomak da prođe kroz krov.

## Vertikalni otvor

1. Odaberite {{ui:Vertikalni otvor}}. U redu odaberite šta se siječe: pod, plafon ili krov.
2. Kliknite uglove obrisa i završite kao gore.
3. Pod, plafon ili krov ovog nivoa ispod obrisa se siječe. Pripada tom jednom elementu: obrišite pod i otvor nestaje s njim.

## Otvor u zidu

{{ui:Otvor u zidu}} je alat iz [Oblikovanje zida](topic:wall-shape): kliknite zid na tlocrtu ili dva ugla na njegovoj strani u 3D.

## Količine

Po pravilu mjerenja za podove, neto površina elementa je njegova bruto površina umanjena za ono što je iz njega izrezano. Okno ili vertikalni otvor je odbitak na svakom podu i plafonu koje sijeku; specifikacije za podove i završne obrade te IFC količine pokazuju iste brojeve. Na krovu je odbitak površina krovne plohe: površina tlocrta podijeljena kosinusom nagiba.

Obris koji visi preko ivice odbija samo dio koji leži na elementu.

## Ako ništa nije presječeno

Okno koje nema ništa na svom putu i dalje se pravi, i to se kaže: presjeći će ono što se kasnije izgradi tamo. Vertikalni otvor treba nešto ispod sebe; ako tu nema ničega, statusna linija to kaže i ništa se ne pravi.

## U IFC-u

Svaki rez je IfcOpeningElement s IfcRelVoidsElement prema elementu koji siječe, pa svaki IFC program prikazuje rupu. Krov se siječe plohu po plohu. Samo okno je IfcGroup svojih otvora.

## Još nije napravljeno

- Zakrivljeni obrisi.
- Zidovi okna: nacrtajte ih alatom Zid.
- Uređivanje obrisa povlačenjem uglova (promijenite ga u Svojstvima, ili obrišite i ponovo skicirajte).
- Vlastita Svojstva nacrtanog poda prikazuju njegovu površinu umanjenu samo za sopstvene otvore; specifikacije i IFC količine uključuju i okno.

Pogledajte i [Prostorije i razdjelnici prostorija](topic:rooms-and-separators).
