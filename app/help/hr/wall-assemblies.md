---
title: Sklopovi zida i referentne kote
summary: Izradite vlastite vrste zidova sloj po sloj s jasno označenom jezgrom, održavajte knjižnicu materijala projekta i kotirajte na plohe i središnje linije koje ostaju povezane kad se zid promijeni.
keywords: lod, razina razvoja, lod 200, lod 300, generički, sklop zida, vrsta zida, slojevi, jezgra, ploha jezgre, središnja linija jezgre, šupljina, zračni razmak, membrana, zaštitna folija, knjižnica materijala, materijali, debljina, referentna kota, kota, asocijativno, linija položaja, oblaganje, podkonstrukcija, gipskarton
from: 4ea8fbf5
---

## Što ćete učiniti

Izradite vrstu zida koja odgovara zidu koji ćete graditi: oblaganje, podlogu, jezgru od podkonstrukcije od 5½ inča i gipskarton, ili opeku, zračni razmak i drveni zid. Označite koji su slojevi jezgra, tako da kota ili linija položaja mogu držati jezgru dok se završne obloge oko nje mijenjaju. Zatim kotirajte zidove na plohe i središnje linije koje mislite.

## Izrada vrste zida

1. Započnite zgradu ili otvorite IFC model i uključite {{ui:Crtanje}}, zatim odaberite alat {{ui:Zid}}.
2. Odaberite početnu vrstu u {{ui:Vrsta zida}} i otvorite {{ui:Sklopovi zida…}}. Početna vrsta se otvara kao kopija; dajte novoj vrsti naziv.
3. Slojevi idu od vanjskog (na vrhu popisa) do unutarnjeg (na dnu). Odaberite materijal svakog sloja, upišite njegovu debljinu (jedinice projekta ili eksplicitne, kao `12.7 mm` ili `1/2"`), odaberite njegovu funkciju (završni, podloga, konstrukcija, izolacija, membrana) i označite slojeve **Jezgra**. Jezgra mora biti jedna neprekinuta skupina.
4. {{ui:Dodaj sloj}} dodaje sloj, {{ui:Dodaj šupljinu}} dodaje zračni razmak s ventilacijom (nije navedena, nije ventilirana, ventilirana), a {{ui:Dodaj membranu}} dodaje sloj bez nazivne debljine, poput zaštitne folije za zgrade. Strelice pomiču sloj prema van ili prema unutra.
5. Pregled crta slojeve u mjerilu s jezgrom podcrtanom, numeriranu kao reci, i kotira svaki sloj, jezgru i ukupnu debljinu. {{ui:Spremi tip}}.

Novi tip je na popisu alata Zid i u **Svojstvima** odabranog zida. Spremanje uređene vrste mijenja svaki zid koji je koristi; {{ui:Dupliciraj tip}} stvara zasebnu vrstu i dodjeljuje je samo zidovima koje ste odabrali. Svako spremanje je jedan korak poništavanja, zajedno sa zidovima koje pomiče, vratima i prozorima u njima te kotama koje o njima ovise.

Šupljina dodaje širinu. Membrana ne dodaje ništa: ostaje u vrsti kako bi je specifikacija kasnije mogla pronaći, i ne ulazi u debljinu zida ni jezgre. Šupljina ili membrana nikad se ne računa kao puni materijal. U datoteci spremljenoj kao IFC2X3 membrana je zadržana u zapisu vrste, ali je izostavljena iz njezinih fizičkih slojeva materijala.

## Označite vrstu razinom razvoja (LOD)

Vrsta može reći koliko je razrađena. U uređivaču, **Razina razvoja (LOD)** nudi fiksnu ljestvicu 100, 200, 300, 350, 400 i 500, ili **Nije postavljeno**. Generički zid („Zid 230 generički“) je LOD 100 ili 200; konkretna konstrukcija sa svojim stvarnim slojevima („230 opeka, žbukano s obje strane“) je LOD 300 ili više. Oznaku postavljate vi: BimCraft je ne izračunava, a početne vrste je nemaju.

Oznaka se prikazuje pored naziva vrste na popisu vrsta alata Zid, u **Svojstvima** zida i na popisu [Zamijeni tip](topic:wall-tools), a izvještaj nakon zamjene kaže je li razina porasla ili pala. Da je vidite u specifikaciji **Zidovi po vrsti** i njezinom CSV-u, označite **Prikaži LOD svake vrste zida u specifikaciji zidova** u Postavke › BimCraft › Zidovi: dodaje se zadnji stupac, LOD. Sprema se u IFC datoteku uz vrstu (u skupu svojstava `CadCraft_WallType` kao svojstvo `LOD` i unutar zapisa vrste), pa je tu kad ponovno otvorite datoteku. Oznaka je za sada samo na vrstama zidova, a ne na pojedinačnim elementima ni na drugim vrstama elemenata.

## Generički zidovi za fazu skice

Popis vrsta alata Zid počinje s dva **generička** zida: **Generički zid 200 mm (vanjski)** i **Generički zid 100 mm (unutarnji)**. Svaki je jedan sloj generičkog materijala, označen LOD 200. Koristite ih kad znate gdje idu zidovi, ali još ne znate od čega su.

Zid čija je vrsta označena **LOD 100** ili **LOD 200** crta se u svakom tlocrtu kao **jedna šrafirana traka**, na svakoj razini detalja: nema slojeva, nema linija slojeva. To vrijedi za generičke zidove i za svaku vašu vrstu koju označite LOD 100 ili 200. Sam zid je potpun: ima debljinu, vrata i prozore, prostorije i količine.

Razradite ga tako da zamijenite njegovu vrstu (Uredi › Zidovi › **Zamijeni tip**, ili Vrsta u **Svojstvima**). Zid se nikad ne crta ponovno: isti zid dobiva novu vrstu, a izvještaj kaže što se pomaknulo. Vrsta označena LOD 300 ili više crta se sa svojim slojevima kao i prije.

Da biste svaki zid crtali po slojevima bez obzira na oznaku: Postavke › BimCraft › Zidovi, isključite **Crtaj zidove vrste LOD 100 ili LOD 200 kao jednu šrafiranu traku**.

Početna vrata i prozori također su generičke vrste (veličina i način otvaranja, a ne proizvod). Uz uključeno **Prikaži LOD svake vrste zida u specifikaciji zidova**, specifikacije Vrata i Prozori pokazuju LOD 200 za njih.

## Dajte vrsti podatke za predmjer

U uređivaču vrste zida, **Podaci za predmjer** uzima ono što procjenitelju treba znati o zidu, jednom za vrstu: **jedinicu** od koje je građen (opeku ili blok: naziv, duljinu, visinu i širinu), **mort** (naziv i debljinu spoja) i **cijenu** s oznakom valute (tri slova, poput USD, EUR ili ZAR) i time po čemu se računa: po kvadratnom metru ili kvadratnoj stopi neto površine zida, po metru ili stopi duljine zida, ili po zidu. Sve je neobavezno.

Sprema se s vrstom u datoteku. Svaki zid te vrste tada to prijavljuje: {{ui:Specifikacije}} › **Vrste zidova: podaci za predmjer** navodi jedinicu, mort, cijenu i cijenu pomnoženu s izmjerenom količinom, a predmjer predan u TakeoffCraft nosi to na stavci te vrste zida. Promijenite na vrsti i svaki zid slijedi.

Tri polja su još za brojanje opeka ili blokova i morta:

- **Gubitak na jedinicama, %** dodaje se broju jedinica. Ostavite prazno da biste koristili vrijednost metode mjerenja projekta, ili nikakvu ako metoda nema. Upišite 0 da nema gubitka, što god metoda kaže.
- **Dodatni mort, %** je za udubljenja ili perforacije koje primaju mort. Dodaje se volumenu morta. Ostavite prazno za nijedno.
- **Slojevi izgrađeni od ove jedinice**: označite svaki sloj koji je list ove opeke ili bloka. Zid s dvostrukim listom ima dva. Ako nijedan nije označen, broje se slojevi jezgre.

Cijena može biti i po jedinici za naručivanje, po 1000 jedinica za naručivanje ili po m³ morta. Gdje jedinica ima duljinu i visinu, **Vrste zidova: podaci za predmjer** prikazuju jedinice po m² (ili ft²) jednog lista, jedinice za naručivanje i volumen morta; formule su u [Opeka, blokovi i mort](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Vrsta ima jednu jedinicu: dva lista različitih jedinica (vanjski list od opeke i unutarnji od bloka) za sada se ne mogu brojati na jednoj vrsti.

## Držite jezgru nepomično

U **Svojstvima** postavite zidov **Linija položaja** na plohu jezgre ili na središnju liniju jezgre. Kad kasnije dodate ili zadebljate završnu oblogu, ta linija ostaje gdje je i zid raste oko nje; zidovi koji se u kutu spajaju s njim slijede, pa ravni kutovi ostaju zatvoreni.

## Materijali projekta

{{ui:Knjižnica materijala…}} navodi materijale projekta: naziv, kategoriju, debljinu s kojom sloj počinje, boju prikaza, uzorak šrafure za presjek i bilješke. Knjižnica se sprema u IFC uz projekt. Odabir materijala za sloj daje tom sloju zadanu debljinu materijala, koju zatim možete promijeniti; kasnije uređivanje knjižnice nikad ne mijenja veličinu zidova koje ste već nacrtali. Materijal možete izraditi i s popisa materijala sloja pomoću {{ui:+ Novi materijal…}}.

## Referentne kote

{{ui:Anotiraj}} › {{ui:Referentna kota}}: odaberite vodoravnu, okomitu ili poravnatu, i referencu: vanjsku ili unutarnju plohu obloge, vanjsku ili unutarnju plohu jezgre, središnju liniju zida ili središnju liniju jezgre. Odaberite prvi zid, promijenite referencu ako želite, odaberite drugi, zatim kliknite gdje ide mjerna crta. Dvije reference na jednom zidu mjere njegovu ukupnu debljinu ili debljinu jezgre. {{ui:Referentne kote…}} navodi kote pogleda, uključujući one koje su izgubile zid, s **Svojstvima**, **Ponovno poveži reference** i **Izbriši**.

### Kotiranje cijelog tlocrta prema pravilima

{{ui:Anotiraj}} › {{ui:Kotiraj tlocrt…}} kotira vanjsku stranu tlocrta etaže koju gledate: ukupnu veličinu u oba smjera, red kota uz svaki vanjski rub (krajevi zidova, zidovi koji dodiruju rub, i vrata i prozori u njemu), s redovima postavljenima izvan zgrade. Označite što želite, pročitajte broj, zatim {{ui:Dodaj kote}}. To su obične referentne kote, pa slijede zidove kad se zidovi pomaknu, i možete odabrati, pomaknuti ili izbrisati bilo koju od njih; cijeli skup je jedan korak poništavanja, a ponovno pokretanje ne stvara nijednu dvostruko.

Kotira samo vanjštinu: prostorije unutar zgrade, zakrivljeni zidovi i zidovi koji nisu okomiti na tlocrt ostavljaju se ručnim alatima, a linije mreže nisu zidovi, pa se kote između mreža ovdje ne stvaraju. Vaš povezani asistent može učiniti isto s `plan_dimension`.

Kota je vezana za zidove, a ne za mjesto na zaslonu: kad se zid pomakne ili mu se promijeni vrsta, vrijednost slijedi. Ako se zid izbriše, kota kaže da je nerazriješena i ne prikazuje broj, dok je ne ponovno povežete ili poništite. Polje duljine prima i koordinate tlocrta poput `10',12'` za mjernu crtu na točnom mjestu.

Kote su za zidove koje je BimCraft nacrtao, u tlocrtima. Nije još izrađeno: kote u presjecima i pročeljima, kote do vrata, prozora i drugih komponenti, te slojevi sklopova nacrtani u tlocrtu i presjeku; vidi [Što još nije izrađeno](topic:not-built-yet).

## Vidi također

[Crtanje zidova](topic:draw-walls), [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door), [Svojstva](topic:properties-panel).
