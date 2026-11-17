---
title: Sklopovi zidova i referentne kote
summary: Pravite sopstvene tipove zidova sloj po sloj, sa jasnim jezgrom, čuvajte biblioteku materijala projekta i kotirajte do lica i osa koje ostaju vezane kad se zid promeni.
keywords: lod, nivo razvoja, lod 200, lod 300, generički, sklop zida, tip zida, slojevi, jezgro, lice jezgra, osa jezgra, vazdušni sloj, vazdušni procep, membrana, zaštitna folija, biblioteka materijala, materijali, debljina, referentna kota, kota, asocijativno, linija položaja, fasadna obloga, stub, gipskarton
from: 4ea8fbf5
---

## Šta ćete uraditi

Napravite tip zida koji odgovara zidu koji ćete graditi: fasadnu oblogu, podlogu, jezgro od stubova debljine 5½ inča i gipskarton, ili ciglu, vazdušni procep i zid sa drvenom konstrukcijom. Obeležite koji su slojevi jezgro, da kota ili linija položaja mogu da drže jezgro dok se obloge oko njega menjaju. Zatim kotirajte zidove do lica i osa koje mislite.

## Napravite tip zida

1. Počnite zgradu ili otvorite IFC model, uključite {{ui:Crtanje}} i izaberite alat {{ui:Zid}}.
2. Izaberite početni tip u {{ui:Tip zida}} i otvorite {{ui:Zidni sklopovi…}}. Početni tip se otvara kao kopija; dajte novom tipu ime.
3. Slojevi idu od spoljašnjeg, na vrhu liste, do unutrašnjeg, na dnu. Izaberite materijal svakog sloja, unesite njegovu debljinu (jedinicama projekta ili tačno zadatim vrednostima, na primer `12.7 mm` ili `1/2"`), izaberite njegovu funkciju (završni sloj, podloga, konstrukcija, izolacija, membrana) i označite slojeve **Jezgro**. Jezgro mora biti jedna neprekidna grupa.
4. {{ui:Dodaj sloj}} dodaje sloj, {{ui:Dodaj vazdušni sloj}} dodaje vazdušni procep sa ventilacijom (nije navedeno, bez ventilacije, sa ventilacijom), a {{ui:Dodaj membranu}} dodaje sloj bez nominalne debljine, kao što je zaštitna folija. Strelice pomeraju sloj ka spolja ili unutra.
5. Pregled crta slojeve u razmeri, sa podvučenim jezgrom, numerisane kao redovi, i kotira svaki sloj, jezgro i ukupnu debljinu. {{ui:Sačuvaj tip}}.

Novi tip se nalazi na listi alata Zid i u **Svojstvima** izabranog zida. Čuvanje tipa koji menjate menja svaki zid koji ga koristi; {{ui:Dupliraj tip}} pravi zaseban tip i dodeljuje ga samo izabranim zidovima. Svako čuvanje je jedan korak koji {{ui:Opozovi}} vraća, zajedno sa zidovima koje pomera, vratima i prozorima u njima i kotama koje od njih zavise.

Vazdušni sloj dodaje širinu. Membrana ne dodaje nijednu: ostaje u tipu da je specifikacija kasnije može naći, i ne ulazi u debljinu zida ili jezgra. Vazdušni sloj ili membrana se nikad ne broje kao čvrsti materijal. U datoteci sačuvanoj kao IFC2X3, membrana ostaje u zapisu tipa, ali se izostavlja iz njegovih fizičkih slojeva materijala.

## Obeležite tip nivoom razvoja (LOD)

Tip može da kaže koliko je razrađen. U uređivaču, **Nivo razvoja (LOD)** nudi fiksnu skalu 100, 200, 300, 350, 400 i 500, ili **Nije postavljeno**. Generički zid ("Zid 230 generički") je LOD 100 ili 200; konkretna konstrukcija sa pravim slojevima ("230 glinena cigla, malterisana sa obe strane") je LOD 300 ili više. Oznaku postavljate vi: BimCraft je ne računa, a početni tipovi je nemaju.

Oznaka se prikazuje pored imena tipa u listi tipova alata Zid, u **Svojstvima** zida i na listi [{{ui:Zameni tip}}](topic:wall-tools), a izveštaj posle zamene kaže da li je nivo porastao ili opao. Da biste je videli u specifikaciji **Zidovi po tipu** i njenom CSV-u, uključite **Prikaži LOD svakog tipa zida u specifikaciji zidova** u {{ui:Podešavanja}} › BimCraft › {{ui:Zidovi}}: dodaje se poslednja kolona, LOD. Oznaka se čuva u IFC datoteci uz tip (u skupu svojstava tipa `CadCraft_WallType`, kao svojstvo `LOD` i unutar zapisa tipa), pa je tu i kad ponovo otvorite datoteku. Oznaka je za sada samo na tipovima zidova, a ne na pojedinačnim elementima ili drugim vrstama elemenata.

## Generički zidovi za fazu skice

Lista tipova alata Zid počinje sa dva **generička** zida: **Generički zid 200 mm (spoljašnji)** i **Generički zid 100 mm (unutrašnji)**. Svaki ima jedan sloj generičkog materijala, označen kao LOD 200. Koristite ih kad znate gde idu zidovi, a još ne znate od čega su napravljeni.

Zid čiji je tip označen **LOD 100** ili **LOD 200** crta se u svakoj osnovi kao **jedna šrafirana traka**, na svakom nivou detalja: bez slojeva, bez linija slojeva. Tako je kod generičkih zidova i kod svakog vašeg tipa koji označite sa LOD 100 ili 200. Sam zid je potpun: ima debljinu, vrata i prozore, prostorije i količine.

Da ga razradite, promenite mu tip ({{ui:Izmena}} › {{ui:Zidovi}} › **{{ui:Zameni tip}}**, ili Tip u Svojstvima). Zid se nikad ne crta ponovo: isti zid dobija novi tip, a izveštaj kaže šta se pomerilo. Tip označen LOD 300 ili višim crta se sa slojevima kao i ranije.

Da se svaki zid crta po slojevima, bez obzira na oznaku: {{ui:Podešavanja}} › BimCraft › {{ui:Zidovi}}, i isključite **Crtaj zidove tipa LOD 100 ili LOD 200 kao jednu šrafiranu traku**.

Početna vrata i prozori su takođe generičke vrste (veličina i način otvaranja, a ne proizvod). Kad je uključeno **Prikaži LOD svakog tipa zida u specifikaciji zidova**, specifikacije vrata i prozora prikazuju LOD 200 za njih.

## Dajte tipu podatke za predmer

U uređivaču tipa zida, **Podaci za predmer** sadrže ono što predmerač treba da zna o zidu, jednom za tip: **jedinicu** od koje je zid građen (cigla ili blok: ime, dužina, visina i širina), **malter** (ime i debljina spoja) i **cenu** sa šifrom valute (tri slova, kao USD, EUR ili ZAR) i time na šta se odnosi: po kvadratnom metru ili kvadratnoj stopi neto površine zida, po metru ili stopi dužine zida, ili po zidu. Sve je opciono.

Čuva se uz tip u datoteci. Svaki zid tog tipa tada to prijavljuje: {{ui:Specifikacije}} › **Tipovi zidova: podaci za predmer** prikazuje jedinicu, malter, cenu i cenu pomnoženu izmerenom količinom, a predmer predat TakeoffCraft-u nosi to uz stavku tog tipa zida. Promenite na tipu i svaki zid prati.

Tri dodatna polja služe za brojanje cigli ili blokova i maltera:

- **Otpad na jedinicama, %** dodaje se broju jedinica. Ostavite prazno da se koristi podatak metode merenja projekta, ili nijedan ako metoda nema. Unesite 0 da nema otpada, šta god metoda kaže.
- **Dodatni malter, %** je za udubljenja ili perforacije koje primaju malter. Dodaje se zapremini maltera. Ostavite prazno ako nema.
- **Slojevi građeni od ove jedinice**: označite svaki sloj koji je list ove cigle ili bloka. Zid sa šupljinom ima dva. Ako nijedan nije označen, broje se slojevi jezgra.

Cena može biti i po jedinici za naručivanje, po 1000 jedinica za naručivanje ili po m³ maltera. Kad jedinica ima dužinu i visinu, **Tipovi zidova: podaci za predmer** prikazuje jedinice po m² (ili ft²) jednog lista, jedinice za naručivanje i zapreminu maltera; formule su u [Cigle, blokovi i malter](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tip ima jednu jedinicu: dva lista različitih jedinica (spoljašnji list od cigle i unutrašnji list od bloka) za sada ne mogu da se broje na jednom tipu.

## Držite jezgro na mestu

U **Svojstvima** postavite **Liniju položaja** zida na lice jezgra ili na osu jezgra. Kad kasnije dodate ili zadebljate oblogu, ta linija ostaje gde je, a zid raste oko nje; zidovi koji se sastaju s njim u uglu prate, pa ravni uglovi ostaju zatvoreni.

## Materijali projekta

{{ui:Biblioteka materijala…}} prikazuje materijale projekta: ime, kategoriju, debljinu sa kojom sloj počinje, boju prikaza, šablon ispune preseka i napomene. Biblioteka se čuva u IFC-u uz projekat. Izbor materijala za sloj daje tom sloju podrazumevanu debljinu materijala, koju zatim možete promeniti; kasnija izmena biblioteke nikad ne menja zidove koje ste već nacrtali. Materijal možete napraviti i iz liste materijala sloja pomoću {{ui:+ Novi materijal…}}.

## Referentne kote

{{ui:Napomene}} › {{ui:Referentna kota}}: izaberite horizontalnu, vertikalnu ili poravnatu, i referencu: spoljašnje ili unutrašnje lice obloge, spoljašnje ili unutrašnje lice jezgra, osu zida ili osu jezgra. Izaberite prvi zid, promenite referencu ako želite, izaberite drugi, pa kliknite gde ide kotna linija. Dve reference na jednom zidu mere njegovu ukupnu debljinu ili debljinu jezgra. {{ui:Referentne kote…}} prikazuje kote pogleda, uključujući one koje su izgubile zid, sa **Svojstvima**, Ponovo poveži reference i Izbriši.

### Kotiranje cele osnove po pravilima

{{ui:Napomene}} › {{ui:Okoti osnovu…}} kotira spoljašnjost osnove sprata koju gledate: ukupnu veličinu u oba pravca, niz kota duž svake spoljašnje ivice (krajevi zidova, zidovi koji dodiruju ivicu, i vrata i prozori u njoj), sa redovima postavljenim van zgrade. Uključite šta želite, pročitajte broj, pa {{ui:Dodaj kote}}. To su obične referentne kote, pa prate zidove kad se oni pomere, a možete izabrati, pomeriti ili izbrisati bilo koju; ceo skup je jedan korak za {{ui:Opozovi}}, a ponovno pokretanje ne pravi nijednu duplu.

Radi samo za spoljašnjost: prostorije unutar zgrade, zakrivljeni zidovi i zidovi koji nisu pod pravim uglom u odnosu na osnovu ostaju za ručne alate, a linije rešetke nisu zidovi, pa se kote između rešetki ovde ne prave. Vaš povezani asistent može isto to uraditi alatom `plan_dimension`.

Kota je vezana za zidove, a ne za mesto na ekranu: kad se zid pomeri ili mu se tip promeni, vrednost prati. Ako je zid izbrisan, kota kaže da je nerazrešena i ne prikazuje broj, dok je ne ponovo povežete ili ne opozovete. Polje za dužinu prihvata i koordinate osnove, na primer `10',12'`, za kotnu liniju na tačno određenom mestu.

Kote su za zidove koje je BimCraft nacrtao, u pogledima osnove. Još nisu izrađene: kote u presecima i izgledima, do vrata, prozora i drugih komponenti, i slojevi sklopova nacrtani u osnovi i preseku; videti [Šta još nije izrađeno](topic:not-built-yet).

## Pogledajte takođe

[Crtanje zidova](topic:draw-walls), [Izmenite zid, vrata ili prozor](topic:change-a-wall-or-door), [Svojstva](topic:properties-panel).
