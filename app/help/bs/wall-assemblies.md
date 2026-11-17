---
title: Sklopovi zidova i referentne kote
summary: Pravite vlastite tipove zidova sloj po sloj s jasnom jezgrom, držite biblioteku materijala projekta i dimenzionišite na lica i osne linije koje ostaju vezane kad se zid promijeni.
keywords: lod, nivo razvijenosti, lod 200, lod 300, generički, sklop zida, tip zida, slojevi, jezgro, lice jezgra, osna linija jezgra, zračni sloj, zračni razmak, membrana, zaštitna folija, biblioteka materijala, materijali, debljina, referentna kota, kota, asocijativno, linija položaja, obloga, vertikalni nosač, gips-karton
from: 4ea8fbf5
---

## Šta ćete uraditi

Napravite tip zida koji odgovara zidu koji ćete graditi: fasadnu oblogu, podlogu, jezgro od 5½ inča s vertikalnim nosačima i gips-kartonom, ili ciglu, zračni razmak i zid s drvenom konstrukcijom. Označite koji su slojevi jezgro, tako da kota ili linija položaja mogu držati jezgro dok se obloge oko njega mijenjaju. Zatim dimenzionišite zidove na lica i osne linije koje mislite.

## Pravljenje tipa zida

1. Pokrenite zgradu ili otvorite IFC model, uključite {{ui:Crtanje}}, zatim izaberite alat {{ui:Zid}}.
2. Izaberite početni tip u {{ui:Tip zida}} i otvorite {{ui:Sklopovi zidova…}}. Početni tip se otvara kao kopija; dajte novom tipu ime.
3. Slojevi idu od vanjske strane na vrhu liste do unutrašnje na dnu. Izaberite materijal svakog sloja, upišite njegovu debljinu (u jedinicama projekta, ili eksplicitne, npr. `12.7 mm` ili `1/2"`), izaberite funkciju (obloga, podloga, konstrukcija, izolacija, membrana) i označite slojeve **Jezgro**. Jezgro mora biti jedna neprekinuta grupa.
4. {{ui:Dodaj sloj}} dodaje sloj, {{ui:Dodaj zračni sloj}} dodaje zračni razmak s ventilacijom (nenaznačena, neventilisana, ventilisana), a {{ui:Dodaj membranu}} dodaje sloj bez nazivne debljine, kao što je zaštitna folija. Strelice pomjeraju sloj prema van ili prema unutra.
5. Pregled crta slojeve u razmjeri s podvučenim jezgrom, numerisane kao i redovi, i dimenzioniše svaki sloj, jezgro i ukupnu debljinu. {{ui:Spasi tip}}.

Novi tip je u listi alata Zid i u **Svojstvima** izabranog zida. Spašavanje tipa koji mijenjate mijenja svaki zid koji ga koristi; {{ui:Dupliciraj tip}} pravi zaseban tip i daje ga samo izabranim zidovima. Svako spašavanje je jedan korak poništavanja, zajedno sa zidovima koje pomjera, vratima i prozorima u njima i kotama koje od njih zavise.

Zračni sloj dodaje širinu. Membrana ne dodaje ništa: ostaje u tipu da je specifikacija kasnije može naći, i ne ulazi u debljinu zida ili jezgra. Zračni sloj ili membrana se nikad ne računaju kao puni materijal. U datoteci sačuvanoj kao IFC2X3 membrana ostaje u zapisu tipa, ali je izostavljena iz njegovih fizičkih slojeva materijala.

## Označite tip nivoom razvijenosti (LOD)

Tip može reći koliko je razrađen. U uređivaču, **Nivo razvijenosti (LOD)** nudi fiksnu skalu 100, 200, 300, 350, 400 i 500, ili **Nije postavljeno**. Generički zid („Generički zid 230“) je LOD 100 ili 200; konkretna konstrukcija sa stvarnim slojevima („230 cigla, malterisana s obje strane“) je LOD 300 ili više. Oznaku postavljate vi: BimCraft je ne računa, a početni tipovi je nemaju.

Oznaka se prikazuje pored imena tipa u listi tipova alata Zid, u Svojstvima zida i u listi [Zamijeni tip](topic:wall-tools), a izvještaj nakon zamjene kaže je li nivo porastao ili opao. Da je vidite u specifikaciji **Zidovi po tipu** i njenom CSV-u, uključite **Prikaži LOD svakog tipa zida u specifikaciji zidova** u Postavke › BimCraft › Zidovi: dodaje se zadnja kolona, LOD. Oznaka se čuva u IFC datoteci uz tip (u skupu svojstava `CadCraft_WallType` tipa, kao svojstvo `LOD` i unutar zapisa tipa), pa je tu i kad ponovo otvorite datoteku. Oznaka je za sada samo na tipovima zidova, ne na pojedinačnim elementima ili drugim vrstama elemenata.

## Generički zidovi za fazu skice

Lista tipova alata Zid počinje s dva **generička** zida: **Generički zid 200 mm (vanjski)** i **Generički zid 100 mm (unutrašnji)**. Svaki je jedan sloj generičkog materijala, označen LOD 200. Koristite ih kad znate gdje zidovi idu, a još ne znate od čega su napravljeni.

Zid čiji je tip označen **LOD 100** ili **LOD 200** crta se u svakoj osnovi kao **jedna šrafirana traka**, na svakom nivou detalja: bez slojeva, bez linija slojeva. To važi za generičke zidove i za svaki vlastiti tip koji označite LOD 100 ili 200. Sam zid je potpun: ima debljinu, vrata i prozore, prostorije i količine.

Da ga razradite, zamijenite mu tip (Uredi › Zidovi › **Zamijeni tip**, ili Tip u Svojstvima). Zid se nikad ne crta ponovo: isti zid dobija novi tip, a izvještaj kaže šta se pomjerilo. Tip označen LOD 300 ili više crta se sa slojevima kao i prije.

Da nacrtate svaki zid po slojevima bez obzira na oznaku: Postavke › BimCraft › Zidovi, isključite **Crtaj zidove tipa LOD 100 ili LOD 200 kao jednu šrafiranu traku**.

Početna vrata i prozori su također generičke vrste (veličina i način otvaranja, a ne proizvod). Uz uključeno **Prikaži LOD svakog tipa zida u specifikaciji zidova**, specifikacije Vrata i Prozori prikazuju LOD 200 za njih.

## Dajte tipu podatke za predmjer

U uređivaču tipa zida, **Podaci za predmjer** uzimaju ono što procjenitelju treba znati o zidu, jednom za tip: **jedinicu** od koje je zid građen (cigla ili blok: naziv, dužina, visina i širina), **malter** (naziv i debljina spoja) i **cijenu** s kodom valute (tri slova, kao USD, EUR ili ZAR) i za šta je: kvadratni metar ili kvadratnu stopu neto površine zida, metar ili stopu dužine zida, ili svaki zid. Sve je opcionalno.

Čuva se s tipom u datoteci. Svaki zid tog tipa tada to prijavljuje: {{ui:Specifikacije}} › **Tipovi zidova: podaci za predmjer** prikazuje jedinicu, malter, cijenu i cijenu pomnoženu s izmjerenom količinom, a predmjer predan TakeoffCraft-u nosi to na stavci tog tipa zida. Promijenite na tipu i svaki zid slijedi.

Tri dodatna polja su za brojanje cigle ili blokova i maltera:

- **Otpad na jedinicama, %** se dodaje broju jedinica. Ostavite prazno da koristite vrijednost metode mjerenja projekta, ili ništa ako metoda nema. Unesite 0 da nema otpada, što god metoda kaže.
- **Dodatni malter, %** je za udubljenja ili perforacije koje primaju malter. Dodaje se zapremini maltera. Ostavite prazno ako ih nema.
- **Slojevi građeni od ove jedinice**: označite svaki sloj koji je list ove cigle ili bloka. Zid sa šupljinom ima dva. Ako nijedan nije označen, broje se slojevi jezgra.

Cijena može biti i po jedinici za naručivanje, po 1000 jedinica za naručivanje ili po m³ maltera. Gdje jedinica ima dužinu i visinu, **Tipovi zidova: podaci za predmjer** prikazuje jedinice po m² (ili ft²) jednog sloja, jedinice za naručivanje i zapreminu maltera; formule su u [Cigla, blokovi i malter](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tip ima jednu jedinicu: dva sloja različitih jedinica (vanjski sloj od cigle i unutrašnji od bloka) za sada se ne mogu brojati na jednom tipu.

## Držite jezgro na mjestu

U **Svojstvima** postavite **Liniju položaja** zida na lice jezgra ili na osnu liniju jezgra. Kad kasnije dodate ili zadebljate oblogu, ta linija ostaje gdje je i zid raste oko nje; zidovi koji se u uglu spajaju s njim slijede, pa pravi uglovi ostaju zatvoreni.

## Materijali projekta

{{ui:Biblioteka materijala…}} navodi materijale projekta: naziv, kategoriju, debljinu s kojom sloj počinje, boju prikaza, uzorak šrafure za presjek i napomene. Biblioteka se čuva u IFC-u uz projekat. Izbor materijala za sloj daje tom sloju podrazumijevanu debljinu materijala, koju zatim možete promijeniti; kasnija izmjena biblioteke nikad ne mijenja veličinu zidova koje ste već nacrtali. Materijal možete napraviti i iz liste materijala sloja pomoću {{ui:+ Novi materijal…}}.

## Referentne kote

{{ui:Anotiraj}} › {{ui:Referentna kota}}: izaberite horizontalnu, vertikalnu ili poravnatu, i referencu: vanjsko ili unutrašnje lice obloge, vanjsko ili unutrašnje lice jezgra, osnu liniju zida ili osnu liniju jezgra. Izaberite prvi zid, promijenite referencu ako želite, izaberite drugi, zatim kliknite gdje ide linija kote. Dvije reference na jednom zidu mjere njegovu ukupnu debljinu ili debljinu jezgra. {{ui:Referentne kote…}} navodi kote pogleda, uključujući one koje su izgubile zid, s opcijama Svojstva, Ponovo veži reference i Izbriši.

### Dimenzionišite cijelu osnovu pravilima

{{ui:Anotiraj}} › {{ui:Okotiraj osnovu…}} dimenzioniše vanjsku stranu osnove etaže koju gledate: ukupnu veličinu u oba smjera, red kota uz svaku vanjsku ivicu (krajevi zidova, zidovi koji dodiruju ivicu, i vrata i prozori u njoj), s redovima postavljenim izvan zgrade. Označite što želite, pročitajte broj, zatim {{ui:Dodaj kote}}. To su obične referentne kote, pa prate zidove kad se oni pomjere, a bilo koju možete izabrati, pomjeriti ili izbrisati. Cijeli skup je jedan korak poništavanja, a ponovno pokretanje ne pravi nijednu dvaput.

Dimenzioniše se samo vanjska strana: prostorije unutar zgrade, zakrivljeni zidovi i zidovi koji nisu pod pravim uglom prema osnovi ostaju za ručne alate, a linije mreže nisu zidovi, pa se kote između mreža ovdje ne prave. Vaš povezani asistent može isto uraditi s `plan_dimension`.

Kota je vezana za zidove, a ne za mjesto na ekranu: kad se zid pomjeri ili mu se tip promijeni, vrijednost prati. Ako je zid izbrisan, kota kaže da je nerazriješena i ne prikazuje broj, dok je ponovo ne vežete ili ne poništite. Polje za dužinu prihvata i koordinate osnove, poput `10',12'`, za liniju kote na tačno mjesto.

Kote su za zidove koje je BimCraft nacrtao, u pogledima osnove. Još nije napravljeno: kote u presjecima i izgledima, kote do vrata, prozora i drugih komponenti, te slojevi sklopova nacrtani u osnovi i presjeku; vidi [Šta još nije izrađeno](topic:not-built-yet).

## Vidi također

[Nacrtajte zidove](topic:draw-walls), [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door), [Svojstva](topic:properties-panel).
