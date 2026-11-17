---
title: Uređivanje porodice
summary: Menjajte parametre, formule i tela porodice, prikazujte delove parametrom Da / Ne, sečite i spajajte tela, dajte joj priključke za cevi i kanale i pogledajte rezultat nacrtan iz IFC-a koji će biti sačuvan.
keywords: urednik porodica, uredi porodicu, parametar, parametri, formula, formule, vidljivost, da ne, telo, tela, kutija, ekstruzija, rotiranje, zamah, profil, luk, bulova operacija, bulove operacije, sečenje, spajanje, ručka, ručke, radna ravan, skica, nova porodica, priključak, priključci, port, portovi, priključak za cev, priključak za kanal, odvod, dovod vode
from: 1ab31c10
---

## Otvaranje urednika

Otvorite porodicu (u pregledaču projekta, grupa **Porodice**, ili {{ui:Verzija}} › {{ui:Porodice…}}) i kliknite {{ui:Uredi porodicu}}. Da počnete od nule, kliknite {{ui:Nova porodica}}: dajte joj naziv, kažite šta je (vrata, prozor, nameštaj, instalacija ili nešto drugo) i, za vrata ili prozor, odakle dolaze njen simbol u planu i ručka. Urednik se otvara na porodici sa nekoliko parametara i jednim telom.

Uređivanje početne porodice čuva vaše izmene samo u ovom modelu. Drugi modeli zadržavaju početnu porodicu kakva jeste.

Ništa u modelu se ne menja dok ne kliknete {{ui:Sačuvaj porodicu}}. Urednik ima sopstveno poništavanje i ponavljanje (strelice pored naziva, ili {{key:Mod+Z}} i {{key:Mod+Y}}); čuvanje je jedan korak u poništavanju modela.

## Parametri

Kartica {{ui:Parametri}} navodi parametre porodice: naziv, vrstu i podrazumevanu vrednost. Vrste: **Dužina** (milimetri), **Ugao** (stepeni), **Broj**, **Ceo broj**, **Da / Ne**, **Pero** (1–16), i tri koje čuvaju reči umesto brojeva: **Tekst**, **Materijal** (jedan od materijala projekta) i **Ispuna** (ispuna u planu). Reči se ne koriste u formulama; boje telo (njegov **Materijal**), popunjavaju deo simbola ili se ispisuju kao `{Name}` u tekstu simbola. Polje **Po elementu** pravi od parametra nešto što svaki postavljeni element određuje sam za sebe, umesto za svoju veličinu.

- **Formula** čini da parametar prati druge, na primer `Width / 30` ili `if(Width > 1200, 2, 1)`. Dužine u formulama su u milimetrima, ili napišite jedinicu: `3'`, `6in`, `50cm`.
- Preimenovanje parametra menja ga u svakom polju i formuli koja ga koristi. Parametar koji je još u upotrebi ne može se ukloniti.
- **Materijal** tela uzima boju materijala projekta (ili parametra Materijal), **Prikazuje se pri** sakriva ga pri grubljim nivoima detalja, a **Ponavljanje** pravi kopije: broj (broj ili parametar celog broja, od 1 do 200) i korak između njih u x, y i z. Ponovljeno telo je red dasaka, šipki ili rupa; kada se koristi u sečenju, kopije se seku zajedno.
- Vrata ili prozor takođe dobijaju dva imena iz svog zida: `WallThickness` i `Face` (1 ili −1, strana na koju se vrata otvaraju).

## Tela

Kartica {{ui:Tela}} navodi tela. Dodajte kutiju, ekstruziju, rotiranje ili zamah:

| Telo | Šta podešavate |
|---|---|
| Kutija | njena dva ugla: x0 do x1, y0 do y1, z0 do z1 |
| Ekstruzija | profil na radnoj ravni (plan, ispred ili sa strane), gde je ravan i dubina |
| Rotiranje | profil, osa na ravni i ugao do 360° |
| Zamah | putanja tačaka i poluprečnik (šipka ili šina) |

Svaki broj može biti upisan broj ili izraz parametara. Svako telo ima boju i **Prikazuje se kada**: ostavite prazno da bude uvek prikazano, ili navedite parametar Da / Ne (ili napišite poređenje, na primer `Shelves >= 3`) da se prikaže samo tada. To je parametar vidljivosti.

### Crtanje profila

Profil ekstruzije ili rotiranja crta se na njegovoj radnoj ravni, ispod pregleda:

- Kliknite na papir da dodate tačku posle izabrane.
- Prevucite tačku da je pomerite. Tačke se hvataju za mrežu; držite {{key:Shift}} da ih postavite slobodno.
- Kliknite malo polje na segmentu da dodate tačku tu. {{key:Shift}} + klik na njega pretvara taj segment u luk (kliknite ponovo za drugi smer, pa za ravan).
- Dvaput kliknite tačku da je uklonite.

Šuplje tačke postavljaju parametri: menjajte ih u tabeli, a ne prevlačenjem.

## Bulove operacije

Kartica {{ui:Bulove operacije}} seče drugo telo iz prvog, ili ih spaja. Rezultat bulove operacije može se ponovo seći ili spojiti. Telo koje se koristi u bulovoj operaciji crta se samo kao njen deo.

Kada drugo telo sakriva njegov parametar Da / Ne, prvo ostaje kakvo je; kada je prvo sakriveno, sakriven je i rezultat.

## Simbol u planu

Kartica {{ui:Simbol u planu}} crta ono što plan prikazuje za ovu porodicu, umesto preseka njenih tela: linije, pravougaonike, krugove, lukove, mnogouglove i tekst, u sopstvenim osama porodice. Svaki deo ima **pero** (1–16, izraz ili parametar Pero), **ispunu** (ništa, puna, dijagonalna, ukrštena, beton, izolacija, zemlja, ili parametar Ispuna), **prikazuje se kada** izraz, **opseg preseka** u milimetrima iznad svoje osnove (deo se crta punom debljinom kada je presek plana unutar njega, tanko ispod njega i isprekidano iznad njega: orman iznad preseka prikazuje se isprekidano), nivo detalja i ponavljanje. Tekst može navoditi parametre kao `{Name}`. **Plan prikazuje: Presek tela** zadržava da plan seče tela, dok simbol ostaje u porodici. Drugi programi čitaju simbol kao otisak porodice (linije i oblike; tekst ostaje u BimCraft-u).

## Porodice unutra

Kartica {{ui:Porodice unutra}} stavlja drugu porodicu unutar ove: nogu u stolu, ručku na vratima. Izaberite porodicu, pa gde ide (x, y, z), koliko je okrenuta (samo četvrtine obrta: 0, 90, 180, 270), kada se prikazuje i vrednosti koje dobija, po jednu u redu, kao `Height = Height - 40`. Čuvanje unutrašnje porodice ponovo crta ovu; porodicu koju drži druga ne može se obrisati; porodica ne može da sadrži samu sebe, ni preko druge, a ugnežđavanje staje na četiri nivoa.

## Vruće tačke

Vruća tačka je tačka ili ivica koju prevlačite da promenite parametar. Na kartici {{ui:Vruće tačke}} dodajte jednu, izaberite osu duž koje se prevlači i broj-parametar koji menja, pa napišite njen položaj istim izrazima kao za tela. U pregledu izaberite **Vruće tačke** ispod ručica da ih prevlačite. Na postavljenom elementu u planu (izaberite ga sa {{ui:Izaberi}}) x i y vruće tačke prikazuju se kao hvataljke: prevucite jednu i element dobija veličinu koja tu vruću tačku stavlja, kroz sve formule između njih; jedan korak Opozovi ga vraća.

Vruća tačka ne može da menja izvedeni parametar, Da / Ne ili reč.

U 3D pogledu iste vruće tačke prikazuju se kao hvataljke na izabranom elementu, a one gore-dole (osa z) prikazuju se i tu, što plan ne može da nacrta. Izaberite element, prevucite hvataljku duž njegove ose i pustite: element dobija veličinu koja tu vruću tačku stavlja, kao jedan korak poništavanja. Hvataljke su skrivene dok je uključen okvir preseka, jer koristi iste hvataljke.

## Priključci

Porodice postavljene na pod (nameštaj, instalacije i ostale) imaju karticu {{ui:Priključci}}: tačke gde cev ili kanal spaja element, kao na slavini i odvodu umivaonika. Kliknite {{ui:Dodaj priključak}} i podesite:

- **Vrsta**: cev ili kanal, i njihov **Sistem** (hladna voda, sanitarni odvod, dovodni vazduh…).
- **x**, **y** i **z**: gde se nalazi, u sopstvenim osama porodice. Kao brojevi tela, svaki može biti broj ili formula parametara, pa priključak ide sa veličinom.
- **Pravac izlaza**: pravac u kome cev ili kanal izlazi iz njega, duž jedne od osa porodice (odvod ispod umivaonika ide **Dole**).
- **Veličina (mm)**: nazivna veličina cevi (DN) ili prečnik okruglog kanala.
- **Protok**: **Ulaz** za priključak koji se napaja (slavina), **Izlaz** za onaj koji odvodi.

Pregled crta svaki priključak kao prsten sa strelicom koja pokazuje pravac izlaza. Vrata i prozori nemaju priključke.

Za vodovodnu instalaciju izaberite koja je, pod **Vodovodna instalacija** (WC šolja, umivaonik, sudopera, tuš, kada za veš). Početne instalacije to već kažu.

Svaki element postavljen iz porodice dobija svoje priključke kao portove u IFC datoteci, i oni se ponovo prave kada se element promeni po veličini ili kada se porodica sačuva. Programi koji čitaju IFC sisteme vide gde pripada svaka cev ili kanal.

## Pregled i njegove ručice

Pregled je porodica zapisana kao IFC, istim kodom koji je čuva u modelu, i nacrtana nazad. Ono što vidite je ono što dobijaju drugi programi. Ispod njega, **Prikazana veličina** postavlja vrednosti parametara koje pregled koristi.

**Ručice** su tačke na pregledu: **Veličina** prikazuje ručicu za Širinu, Dubinu i Visinu; **Izabrano telo** prikazuje jednu na svakoj strani tela koje ste izabrali. Prevucite ručicu:

- na strani koju postavlja parametar, prikazana veličina se menja (formule porodice ostaju);
- na strani koju postavlja upisan broj, menja se taj broj.

## Čuvanje

{{ui:Sačuvaj porodicu}} proverava porodicu, pa ponovo crta svaku njenu veličinu i ponovo pravi svaki njen element, kao jedan korak koji možete poništiti. Ako veličina ne može da se nacrta sa izmenom (na primer, telo bi imalo nultu širinu pri toj veličini), ništa se ne čuva i urednik kaže koja veličina je u pitanju.

Ako je neko drugi sačuvao istu porodicu dok je vaš urednik bio otvoren (u sesiji Live TeamWork ili u drugom prozoru), {{ui:Sačuvaj porodicu}} to odbija i kaže to, umesto da zameni njihovu izmenu vašom. Zatvorite urednik, ponovo otvorite porodicu da vidite njihovu izmenu, pa uradite svoju.

:::note
Geometrija se čuva kao sopstvena IFC tela: ekstruzije, rotiranja, prevučeni diskovi i rezultati bulovih operacija. Ništa se ne pretvara u spisak trouglova, pa datoteke ostaju male, a drugi programi mogu da čitaju oblike kao oblike. Profili sa lukovima čuvaju se sa lukovima u IFC4; IFC2X3 nema lučne segmente u profilu, pa se tamo lukovi čuvaju kao kratki pravi delovi.
:::

Pogledajte i [Porodice i njihove veličine](topic:families).
