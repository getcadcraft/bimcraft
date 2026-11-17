---
title: Uređivanje porodice
summary: Promijenite parametre, formule i tijela porodice, prikažite dijelove preko parametra Da / Ne, presijecite i spajajte tijela, dodajte im priključke za cijevi i kanale, i vidite rezultat nacrtan iz IFC-a koji će biti spašen.
keywords: uređivač porodice, uredi porodicu, parametar, parametri, formula, formule, vidljivost, da ne, tijelo, tijela, kutija, ekstruzija, rotacija, profil, luk, boolean, booleova operacija, presjek, spajanje, razlika, unija, ručka, ručke, radna ravan, skica, nova porodica, priključak, priključci, port, portovi, priključak za cijev, priključak za kanal, odvod, dovod vode
from: 1ab31c10
---

## Otvaranje uređivača

Otvorite porodicu (**Porodice** u pregledniku projekta, ili {{ui:Build}} › {{ui:Families…}}) i kliknite {{ui:Edit the family}}. Da počnete od nule, kliknite {{ui:New family}}: dajte joj naziv, recite šta je (vrata, prozor, namještaj, instalacija ili nešto drugo) i, za vrata ili prozor, iz kojeg početnog modela dolaze njen simbol u planu i ručka. Uređivač se otvara na porodici sa nekoliko parametara i jednim tijelom.

Uređivanje početne porodice čuva vaše promjene samo u ovom modelu. Drugi modeli zadržavaju početnu porodicu kakva je.

Ništa se u modelu ne mijenja dok ne kliknete {{ui:Save the family}}. Uređivač ima vlastito poništavanje i ponavljanje (strelice pored naziva, ili {{key:Mod+Z}} i {{key:Mod+Y}}); spašavanje je jedan korak u poništavanju modela.

## Parametri

Kartica {{ui:Parameters}} navodi parametre porodice: naziv, vrstu i podrazumijevanu vrijednost. Vrste: **Dužina** (milimetri), **Ugao** (stepeni), **Broj**, **Cijeli broj**, **Da / Ne**, **Pero** (1–16), i tri koje drže riječi umjesto brojeva: **Tekst**, **Materijal** (jedan od materijala projekta) i **Ispuna** (ispuna plana). Riječi se ne koriste u formulama; boje tijelo (njegov **Materijal**), pune dio simbola ili se ispisuju kao `{Name}` unutar teksta simbola. Polje **Po elementu** čini parametar nečim što svaki postavljeni element postavlja za sebe, umjesto za svoju veličinu.

- **Formula** čini da parametar slijedi druge, na primjer `Width / 30` ili `if(Width > 1200, 2, 1)`. Dužine u formulama su milimetri, ili napišite jedinicu: `3'`, `6in`, `50cm`.
- Preimenovanje parametra mijenja ga u svakoj formuli i polju koje ga koristi. Parametar koji je još u upotrebi ne može se ukloniti.
- **Materijal** tijela uzima boju materijala projekta (ili parametra Materijal), **Prikazano pri** ga skriva na grubljim nivoima detalja, a **Ponavljanje** pravi kopije: broj (broj ili parametar cijelog broja, 1 do 200) i korak između njih u x, y i z. Ponovljeno tijelo je red dasaka, šipki ili rupa; u rezu, kopije se režu zajedno.
- Porodica vrata ili prozora također dobija dva naziva iz svog zida: `WallThickness` i `Face` (1 ili −1, strana na koju se vrata otvaraju).

## Tijela

Kartica {{ui:Solids}} navodi tijela. Dodajte kutiju, ekstruziju, rotaciju ili sweep:

| Tijelo | Šta postavljate |
|---|---|
| Kutija | dva ugla: x0 do x1, y0 do y1, z0 do z1 |
| Ekstruzija | profil na radnoj ravni (plan, pogled sprijeda ili sa strane), gdje je ravan, i dubina |
| Rotacija | profil, osa na ravni i ugao do 360° |
| Sweep | putanja tačaka i poluprečnik (šipka ili šina) |

Svaki broj može biti upisani broj ili izraz parametara. Svako tijelo ima boju i **Prikaži kada**: ostavite prazno da se uvijek prikazuje, ili navedite parametar Da / Ne (ili napišite poređenje poput `Shelves >= 3`) da se prikazuje samo tada. To je parametar vidljivosti.

### Crtanje profila

Profil ekstruzije ili rotacije crta se na njegovoj radnoj ravni ispod pregleda:

- Kliknite na papir da dodate tačku poslije odabrane.
- Prevucite tačku da je pomjerite. Tačke se hvataju za mrežu; držite {{key:Shift}} da ih postavite slobodno.
- Kliknite mali kvadrat na segmentu da dodate tačku tu. {{key:Shift}}+klik na njega pretvara taj segment u luk (kliknite opet za drugi smjer, pa ravno).
- Dvaput kliknite tačku da je uklonite.

Šuplje tačke postavljaju parametri: mijenjajte ih u tabeli, a ne prevlačenjem.

## Boolean operacije

Kartica {{ui:Booleans}} siječe drugo tijelo iz prvog, ili ih spaja. Rezultat Boolean operacije može se ponovo rezati ili spajati. Tijelo korišteno u Boolean operaciji crta se samo kao njen dio.

Kada je drugo tijelo sakriveno svojim parametrom Da / Ne, prvo se zadržava kakvo jeste; kada je prvo sakriveno, rezultat je sakriven.

## Simbol u osnovi

Kartica {{ui:Plan symbol}} crta ono što plan prikazuje za ovu porodicu, umjesto presjeka njenih tijela: linije, pravougaonike, krugove, lukove, poligone i tekst, u osama same porodice. Svaki dio ima **pero** (1–16, izraz ili parametar Pero), **ispunu** (ništa, puno, dijagonalno, ukršteno, beton, izolacija, zemlja, ili parametar Ispuna), izraz **prikazan po**, **raspon reza** u milimetrima iznad svoje baze (dio se crta punom težinom kada je rez plana unutar njega, tanko ispod, a isprekidano iznad: ormarić iznad reza prikazuje se isprekidano), nivo detalja i ponavljanje. Tekst može navoditi parametre kao `{Name}`. **Plan prikazuje: Presjek tijela** zadržava da plan presijeca tijela dok simbol ostaje u porodici. Drugi programi čitaju simbol kao otisak porodice (linije i oblici; tekst ostaje u BimCraft).

## Porodice unutra

Kartica {{ui:Families inside}} stavlja drugu porodicu unutar ove: nogu u stolu, ručku na vratima. Odaberite porodicu, zatim gdje ide (x, y, z), koliko je okrenuta (samo četvrtine: 0, 90, 180, 270), kada se prikazuje i vrijednosti koje dobija, jedna po redu, kao `Height = Height - 40`. Čuvanje unutrašnje porodice ponovo crta ovu; porodica koju drži druga ne može se obrisati; porodica ne može sadržati samu sebe, ni preko druge, a ugnježđivanje staje na četiri nivoa.

## Aktivne tačke

Aktivna tačka je tačka ili ivica koju prevlačite da promijenite parametar. Na kartici {{ui:Hotspots}} dodajte jednu, odaberite osu duž koje se vuče i parametar broja koji mijenja, i napišite njen položaj istim izrazima kao tijela. U pregledu odaberite **Aktivne tačke** ispod ručki da ih prevlačite. Na postavljenom elementu u planu (odaberite ga sa {{ui:Select}}) aktivne tačke x i y prikazuju se kao hvatišta: prevucite jednu i element dobija veličinu koja tačku stavlja tamo, kroz sve formule između njih; jedno Poništi je vraća. Aktivna tačka ne može promijeniti upravljani parametar, Da / Ne ili riječ.

U 3D prikazu iste aktivne tačke prikazuju se kao hvatišta na odabranom elementu, a one gore-dolje (osa z), koje plan ne može nacrtati, prikazuju se i tu. Odaberite element, prevucite hvatište duž njegove ose i pustite: element dobija veličinu koja tačku stavlja tamo, kao jedan korak poništavanja. Hvatišta su skrivena dok je kutija presjeka uključena, jer koristi ista hvatišta.

## Priključci

Porodice postavljene na pod (namještaj, instalacije i druge) imaju karticu {{ui:Connectors}}: tačke gdje se cijev ili kanal spaja na element, kao na slavini i odvodu umivaonika. Kliknite {{ui:Add a connector}} i postavite:

- **Vrsta**: cijev ili kanal, i njegov **Sistem** (hladna voda, sanitarni odvod, dovodni zrak…).
- **x**, **y** i **z**: gdje je, u osama porodice. Kao brojevi tijela, svaki može biti broj ili formula parametara, pa se priključak pomjera sa veličinom.
- **Smjer izlaza**: smjer u kojem cijev ili kanal izlazi iz njega, duž jedne od osa porodice (odvod ispod umivaonika je **Dolje**).
- **Veličina (mm)**: nazivna veličina cijevi (DN) ili prečnik okruglog kanala.
- **Protok**: **Ulaz** za priključak koji se napaja (slavina), **Izlaz** za onaj koji odvodi.

Pregled crta svaki priključak kao prsten sa strelicom u smjeru izlaza. Vrata i prozori nemaju priključke.

Za vodovodnu instalaciju izaberite koja je pod **Vodovodna instalacija** (WC šolja, lavabo, kuhinjski sudoper, tuš, korito za pranje veša). Početne instalacije to već kažu.

Svaki element postavljen iz porodice dobija svoje priključke kao portove u IFC datoteci, i oni se prave ponovo kada se element promijeni po veličini ili kada se porodica spašava. Programi koji čitaju IFC sisteme vide gdje pripada svaka cijev ili kanal.

## Pregled i njegove ručke

Pregled je porodica zapisana kao IFC, istim kodom koji je spašava u model, i nacrtana nazad. Ono što vidite je ono što drugi programi dobijaju. Ispod njega, **Prikazana veličina** postavlja vrijednosti parametara koje pregled koristi.

**Ručke** su tačke na pregledu: **Veličina** pokazuje ručku za Širinu, Dubinu i Visinu; **Odabrano tijelo** pokazuje jednu na svakoj strani odabranog tijela. Prevucite ručku:

- na strani koju postavlja parametar, prikazana veličina se mijenja (formule porodice se zadržavaju);
- na strani koju postavlja upisani broj, mijenja se taj broj.

## Spašavanje

{{ui:Save the family}} provjerava porodicu, zatim ponovo crta svaku njenu veličinu i ponovo pravi svaki njen element, kao jedan korak koji možete poništiti. Ako se veličina ne može nacrtati s promjenom (na primjer, tijelo bi imalo nultu širinu pri toj veličini), ništa se ne spašava i uređivač kaže koja veličina je u pitanju.

Ako je neko drugi spasio istu porodicu dok je vaš uređivač bio otvoren (u sesiji Live TeamWork ili u drugom prozoru), {{ui:Save the family}} to odbija i kaže to, umjesto da zamijeni njihovu promjenu vašom. Zatvorite uređivač, ponovo otvorite porodicu da vidite njihovu promjenu, i napravite svoju ponovo.

:::note
Geometrija se čuva kao vlastita IFC tijela: ekstruzije, rotacije, savijeni diskovi i rezultati Boolean operacija. Ništa se ne pretvara u spisak trouglova, pa datoteke ostaju male, a drugi programi mogu čitati oblike kao oblike. Profili sa lukovima čuvaju se sa lukovima u IFC4; IFC2X3 nema lučne segmente u profilu, pa se tamo lukovi čuvaju kao kratki ravni dijelovi.
:::

Pogledajte također [Porodice i njihove veličine](topic:families).
