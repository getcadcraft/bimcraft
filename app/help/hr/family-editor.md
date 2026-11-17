---
title: Uređivanje obitelji
summary: Mijenjajte parametre, formule i tijela obitelji, prikazujte dijelove pomoću parametra Da / Ne, režite i spajajte tijela, dodajte priključke za cijevi i kanale te pogledajte rezultat iz IFC-a koji će se spremiti.
keywords: uređivač obitelji, uredi obitelj, parametar, parametri, formula, formule, vidljivost, da ne, tijelo, tijela, kutija, ekstruzija, rotacija, provlačenje, profil, luk, booleova operacija, booleove operacije, izreži, spoji, razlika, unija, ručka, ručice, radna ravnina, skica, nova obitelj, priključak, priključci, port, priključak cijevi, priključak kanala, odvod, vodovod
from: 1ab31c10
---

## Otvaranje uređivača

Otvorite obitelj (**Obitelji** u pregledniku projekta ili {{ui:Izgradnja}} › {{ui:Obitelji…}}) i kliknite {{ui:Uredi obitelj}}. Da počnete od nule, kliknite {{ui:Nova obitelj}}: dajte joj naziv, recite što je (vrata, prozor, namještaj, armatura ili nešto drugo) i, za vrata ili prozor, odakle dolaze njezin simbol tlocrta i ručka. Uređivač se otvara na obitelji s nekoliko parametara i jednim tijelom.

Uređivanje početne obitelji čuva vaše promjene samo u ovom modelu. Ostali modeli zadržavaju početnu obitelj kakva je.

Ništa se u modelu ne mijenja dok ne kliknete {{ui:Spremi obitelj}}. Uređivač ima vlastito poništavanje i ponavljanje (gumbi sa strelicama uz naziv, ili {{key:Mod+Z}} i {{key:Mod+Y}}); spremanje je jedan korak u poništavanju modela.

## Parametri

Kartica {{ui:Parametri}} navodi parametre obitelji: naziv, vrstu i zadanu vrijednost. Vrste su: **Duljina** (milimetri), **Kut** (stupnjevi), **Broj**, **Cijeli broj**, **Da / Ne**, **Pero** (1–16) te tri koje sadrže riječi umjesto brojeva: **Tekst**, **Materijal** (jedan od materijala projekta) i **Ispuna** (ispuna tlocrta). Riječi se ne koriste u formulama; boje tijelo (njegov **Materijal**), pune dio simbola ili se ispisuju kao `{Name}` u tekstu simbola. Okvir **Po elementu** čini parametar nečim što svaki postavljeni element postavlja sam za sebe, a ne za svoju veličinu.

- **Formula** čini da parametar slijedi druge, na primjer `Width / 30` ili `if(Width > 1200, 2, 1)`. Duljine u formulama su milimetri ili napišite jedinicu: `3'`, `6in`, `50cm`.
- Preimenovanje parametra preimenuje ga u svakoj formuli i polju koje ga koristi. Parametar koji je još u upotrebi ne može se ukloniti.
- **Materijal** tijela uzima boju materijala projekta (ili parametra Materijal), **Prikazuje se pri** skriva ga na grubljim razinama detalja, a **Ponavljanje** pravi kopije: broj (broj ili parametar cijelog broja, od 1 do 200) i korak između njih po x, y i z. Ponovljeno tijelo je red dasaka, šipki ili rupa; kad je u rezu, kopije se režu zajedno.
- Obitelj vrata ili prozora dobiva i dva naziva iz svog zida: `WallThickness` i `Face` (1 ili −1, strana na koju se vrata otvaraju).

## Tijela

Kartica {{ui:Puna tijela}} navodi tijela. Dodajte kutiju, ekstruziju, rotaciju ili provlačenje:

| Vrsta | Što postavljate |
|---|---|
| Kutija | dva kuta: x0 do x1, y0 do y1, z0 do z1 |
| Ekstruzija | profil na radnoj ravnini (tlocrt, pročelje ili bok), gdje je ravnina i dubina |
| Rotacija | profil, os na ravnini i kut do 360° |
| Provlačenje | put točaka i polumjer (šipka ili ograda) |

Svaki broj može biti upisani broj ili izraz parametara. Svako tijelo ima boju i **Prikazuje se kad**: ostavite prazno da se uvijek prikazuje ili navedite parametar Da / Ne (ili napišite usporedbu, na primjer `Shelves >= 3`) da se prikazuje samo tada. To je parametar vidljivosti.

### Crtanje profila

Profil ekstruzije ili rotacije crta se na njegovoj radnoj ravnini ispod pregleda:

- Kliknite na papir da dodate točku nakon odabrane.
- Povucite točku da je pomaknete. Točke se hvataju za mrežu; držite {{key:Shift}} da ih postavite slobodno.
- Kliknite mali kvadrat na dužini da dodate točku tamo. {{key:Shift}}+klik na njega pretvara tu dužinu u luk (kliknite opet za drugi smjer, zatim ravno).
- Dvostruko kliknite točku da je uklonite.

Šuplje točke postavljaju parametri: mijenjajte ih u tablici, a ne povlačenjem.

## Booleove operacije

Kartica {{ui:Booleove operacije}} izrezuje drugo tijelo iz prvog ili ih spaja. Rezultat booleove operacije može se ponovno rezati ili spajati. Tijelo koje se koristi u booleovoj operaciji crta se samo kao njezin dio.

Kad je drugo tijelo skriveno svojim parametrom Da / Ne, prvo se zadržava kakvo je; kad je prvo skriveno, rezultat je skriven.

## Tlocrtni simbol

Kartica {{ui:Tlocrtni simbol}} crta što tlocrt prikazuje za ovu obitelj umjesto reza njezinih tijela: linije, pravokutnike, kružnice, lukove, poligone i tekst, u osima obitelji. Svaki dio ima **pero** (1–16, izraz ili parametar Pero), **ispunu** (nema, puna, dijagonalna, ukrštena, beton, izolacija, zemlja ili parametar Ispuna), izraz **prikazuje se prema**, **raspon reza** u milimetrima iznad svoje baze (crta se punom debljinom kad je rez tlocrta unutar njega, tanko ispod i crtkano iznad: ormarić iznad reza prikazuje se crtkano), razinu detalja i ponavljanje. Tekst može imenovati parametre kao `{Name}`. **Tlocrt prikazuje: Rez tijela** zadržava da tlocrt reže tijela dok simbol ostaje u obitelji. Drugi programi čitaju simbol kao otisak obitelji (linije i oblike; tekst ostaje u BimCraftu).

## Obitelji unutra

Kartica {{ui:Obitelji unutra}} stavlja drugu obitelj unutar ove: nogu u stolu, ručku na vratima. Odaberite obitelj, zatim gdje ide (x, y, z), koliko je zakrenuta (samo četvrtine okreta: 0, 90, 180, 270), kad se prikazuje i vrijednosti koje dobiva, po jednu u retku, kao `Height = Height - 40`. Spremanje unutarnje obitelji ponovno crta ovu; obitelj koju drži druga ne može se obrisati; obitelj ne može sadržavati sebe, čak ni preko druge, a ugniježđivanje staje na četiri razine.

## Vruće točke

Vruća točka je točka ili rub koji povlačite da promijenite parametar. Na kartici {{ui:Vruće točke}} dodajte jednu, odaberite os po kojoj vuče i broj parametra koji mijenja te upišite njezin položaj istim izrazima kao tijela. U pregledu odaberite **Ručice** ispod pregleda da ih povlačite. Na postavljenom elementu u tlocrtu (odaberite ga s {{ui:Odaberi}}) vruće točke x i y prikazuju se kao hvatišta: povucite jednu i element dobiva veličinu koja tamo postavlja vruću točku, kroz sve formule između njih; jedno poništavanje ga vraća. Vruća točka ne može promijeniti izvedeni parametar, Da / Ne ili riječ.

U 3D prikazu iste vruće točke prikazuju se kao hvatišta na odabranom elementu, a one gore-dolje (os z) prikazuju se i tu, što tlocrt ne može nacrtati. Odaberite element, povucite hvatište duž njegove osi i pustite: element dobiva veličinu koja tamo postavlja vruću točku, kao jedan korak poništavanja. Hvatišta su skrivena dok je okvir presjeka uključen, jer koristi ista hvatišta.

## Priključci

Obitelji postavljene na pod (namještaj, armature i druge) imaju karticu {{ui:Priključci}}: točke na kojima cijev ili kanal spaja element, kao na slavini i odvodu umivaonika. Kliknite {{ui:Dodaj priključak}} i postavite:

- **Vrsta**: cijev ili kanal, i njihov **Sustav** (hladna voda, sanitarna odvodnja, dovod zraka…).
- **x**, **y** i **z**: gdje je, u osima obitelji. Kao i brojevi tijela, svaki može biti broj ili formula parametara, pa se priključak pomiče s veličinom.
- **Smjer izlaska**: smjer u kojem cijev ili kanal izlazi, duž jedne od osi obitelji (odvod ispod umivaonika ide **Dolje**).
- **Veličina (mm)**: nazivna veličina cijevi (DN) ili promjer okruglog kanala.
- **Tok**: **Ulaz** za priključak koji se napaja (slavina), **Izlaz** za onaj koji odvodi.

Pregled crta svaki priključak kao prsten sa strelicom u smjeru izlaska. Vrata i prozori nemaju priključke.

Za vodoinstalacijsku armaturu odaberite koja je to pod **Vodoinstalacijska armatura** (WC školjka, umivaonik, kuhinjski sudoper, tuš, kadica za pranje rublja). Početne armature to već navode.

Svaki element postavljen iz obitelji dobiva svoje priključke kao portove u IFC datoteci, a ponovno se izrađuju kad se element promijeni po veličini ili kad se obitelj spremi. Programi koji čitaju IFC sustave vide gdje pripada svaka cijev ili kanal.

## Pregled i njegove ručice

Pregled je obitelj zapisana kao IFC, istim kodom koji je sprema u model, i ponovno nacrtana. Što vidite, to dobivaju drugi programi. Ispod njega, **Prikazana veličina** postavlja vrijednosti parametara koje pregled koristi.

**Ručice** su točkice na pregledu: **Veličina** prikazuje ručicu za Širinu, Dubinu i Visinu; **Odabrano tijelo** prikazuje jednu na svakoj plohi tijela koje ste odabrali. Povucite ručicu:

- na plohi koju postavlja parametar, mijenja se prikazana veličina (formule obitelji se zadržavaju);
- na plohi koju postavlja upisani broj, mijenja se taj broj.

## Spremanje

{{ui:Spremi obitelj}} provjerava obitelj, zatim ponovno crta svaku njezinu veličinu i ponovno izrađuje svaki njezin element, kao jedan korak koji možete poništiti. Ako se veličina ne može nacrtati s promjenom (na primjer tijelu bi u toj veličini nedostajala širina), ništa se ne sprema i uređivač kaže koja je veličina.

Ako je netko drugi spremio istu obitelj dok je vaš uređivač bio otvoren (u sesiji Live TeamWork ili u drugom prozoru), {{ui:Spremi obitelj}} odbija i to kaže, umjesto da zamijeni njihovu promjenu vašom. Zatvorite uređivač, ponovno otvorite obitelj da vidite njihovu promjenu i napravite svoju ponovno.

:::note
Geometrija se sprema kao IFC-ova vlastita tijela: ekstruzije, rotacije, zakrivljeni diskovi i rezultati booleovih operacija. Ništa se ne pretvara u popis trokuta, pa datoteke ostaju male, a drugi programi mogu oblike čitati kao oblike. Profili s lukovima spremaju se s lukovima u IFC4; IFC2X3 nema lučne segmente u profilu, pa se tamo lukovi spremaju kao kratki ravni komadi.
:::

Vidi također [Obitelji i njihove veličine](topic:families).
