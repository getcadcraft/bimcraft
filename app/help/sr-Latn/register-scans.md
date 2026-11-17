---
title: Registrovanje više skenova u jedan
summary: Postavite skenove snimljene sa različitih pozicija u jedan okvir pomoću izabranih parova tačaka ili unetih ciljeva, doterajte ih ICP-om, sačuvajte registraciju kao projekat i izvezite registrovani oblak kao LAS ili E57.
keywords: registracija, registrovanje, skenovi, oblak tačaka, icp, iterativno najbliža tačka, ciljevi, parovi tačaka, kruta transformacija, poravnanje, spajanje, e57, las, sken u BIM
from: e8e270db
---

## Šta ćete uraditi

Više skenova istog mesta (svaki sa svoje pozicije skenera) počinje u sopstvenim koordinatama. Registrujte ih: dajte svakom skenu jedan položaj da svi budu u jednom okviru, pa to sačuvajte kao projekat i zapišite registrovani oblak kao jednu LAS ili E57 datoteku.

## Postavljanje skenova

1. Otvorite dijalog ({{ui:Registruj skenove…}} na početnom panelu, ili {{ui:Prikaži}} › {{ui:Registruj skenove…}} kad je model otvoren). {{ui:Dodaj skenove…}} prihvata datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ, ili ih prevucite na dijalog. Skenovi koji koriste različite jedinice se odbijaju uz napomenu: prvo pretvorite jedan od njih.
2. Izaberite {{ui:Sken za pomeranje}} i {{ui:Postavi u odnosu na}}. Slika prikazuje svaki sken u okviru kakav je sada, svaki u drugoj boji: {{ui:Plan}}, {{ui:Napred}} ili {{ui:Sa strane}}. Prevucite da pomerate prikaz, a točkićem miša uvećavate.
3. **Po parovima tačaka.** Kliknite {{ui:Izaberi par}}, zatim tačku na skenu koji pomerate, pa isto mesto na drugom skenu (ugao, cilj, podnožje stuba). Uradite to najmanje tri puta, sa tačkama koje nisu na jednoj liniji i koje su razmaknute. Kliknite {{ui:Postavi po parovima}}: sken se postavlja metodom najmanjih kvadrata, a **Preostalo** pokazuje koliko svaki par još promašuje. Par sa velikim brojem je loš izbor: uklonite ga krstićem i postavite ponovo.
4. **Po ciljevima.** Ako su poznate prave koordinate tačke (geodetski izmereni ciljevi), kliknite {{ui:Izaberi, pa unesi cilj}}, kliknite tačku na njenom skenu i upišite X, Y i Z cilja u red. Parovi i uneti ciljevi se slobodno mešaju.

## Doterivanje ICP-om

Parovi daju grubo postavljanje. {{ui:Precizno podesi}} pomera sken dok se njegove površine ne poklope sa površinama drugog skena: prvo **tačka do tačke**, zatim **tačka do ravni**. Tabela navodi svaki korak sa njegovom greškom i brojem poklopljenih tačaka; linija iznad nje prikazuje opadanje greške. {{ui:Zaustavi}} završava pokretanje posle koraka koji je u toku i zadržava dostignuto. {{ui:Opozovi}} vraća celo pokretanje (ili poslednje postavljanje) unazad; {{ui:Resetuj}} vraća sken na koordinate iz datoteke.

Da bi bilo brzo na laptopu, ICP radi na proređenom delu tačaka ({{ui:Korišćene tačke}}, 5,000 do 60,000) i ignoriše poklapanja udaljenija od {{ui:Najveća razdaljina poklapanja}} (podrazumevano 5% veličine skena, koje se smanjuje kako se stabilizuje). Prvo mu treba grubo postavljanje: skenovi koji se jedva preklapaju javljaju da ne mogu da se poklope. Površine koje su samo ravne ili samo prave ne mogu da fiksiraju položaj duž sebe; tada dodajte parove.

## Čuvanje i izvoz

- {{ui:Sačuvaj projekat}} zapisuje malu `.ccscans.json` datoteku: ime svakog skena, veličinu i otisak prvih 64 KB, sa njegovom transformacijom. Ne sadrži tačke. {{ui:Otvori projekat…}} pronalazi datoteke skenova po tim referencama (datoteke moraju prvo biti dodate) i vraća svaku transformaciju.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svakim skenom na njegovom registrovanom mestu. Tačke se nikad ne prepisuju u originalima; transformacija se primenjuje pri izvozu. Sa uključenom opcijom {{ui:Pročitaj svaku tačku iz datoteka}}, svaka datoteka se čita ponovo za svaku tačku (do 20 miliona po skenu); isključeno, zapisuju se samo tačke prikazane u pregledaču.
- {{ui:Prikaži usklađeni oblak}} (BimCraft) zapisuje LAS i otvara ga u 3D prikazu pored modela, kao i svaki drugi oblak.

:::note
Ništa se ne otprema. Registracija radi u sopstvenim jedinicama datoteka i čuva milimetre: LAS se piše sa skalom koja odgovara (do 0.1 mm), a E57 sa dvostrukom tačnošću. Koordinatni sistem se prenosi u LAS samo kad svaki sken navodi isti EPSG kod. E57 pisač je naš; proveren je tako što se njegove datoteke čitaju nazad ovim čitačem i sa libE57Format.
:::
