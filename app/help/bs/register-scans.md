---
title: Registrovanje više skeniranja u jedno
summary: Postavite skeniranja snimljena s različitih pozicija u jedan okvir pomoću odabranih parova tačaka ili upisanih ciljeva, dorađujte ih pomoću ICP-a, sačuvajte registraciju kao projekat i izvezite registrovani oblak kao LAS ili E57.
keywords: registracija, registrovanje, skeniranja, oblak tačaka, icp, iterativni najbliži, ciljevi, parovi tačaka, kruta transformacija, poravnanje, spajanje, e57, las, skeniranje u BIM
from: e8e270db
---

## Šta ćete uraditi

Više skeniranja istog mjesta (svako s vlastite pozicije skenera) počinje u vlastitim koordinatama. Registrujte ih: dajte svakom skeniranju jedno postavljanje da sva budu u jednom okviru, pa to sačuvajte kao projekat i zapišite registrovani oblak kao jednu LAS ili E57 datoteku.

## Postavljanje skeniranja

1. Otvorite dijalog ({{ui:Registruj skeniranja…}} na početnom panelu, ili {{ui:Prikaži}} › {{ui:Registruj skeniranja…}} kad je model otvoren). {{ui:Dodaj skeniranja…}} prihvata LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ datoteke, ili ih prevucite na dijalog. Skeniranja s različitim jedinicama se odbijaju uz napomenu: prvo pretvorite jedno.
2. Izaberite {{ui:Skeniranje za pomjeranje}} i {{ui:Postavi prema}}. Slika prikazuje svako skeniranje u okviru kakvo je sada, svako u drugoj boji: {{ui:Plan}}, {{ui:Sprijeda}} ili {{ui:Strana}}; prevucite za pomjeranje, točkićem miša zumirajte.
3. **Po parovima tačaka.** Kliknite {{ui:Odaberi par}}, pa tačku na skeniranju koje se pomjera, pa isto mjesto na drugom skeniranju (ugao, cilj, podnožje stuba). Uradite to najmanje tri puta, s tačkama koje nisu na jednoj liniji i razmaknute. Kliknite {{ui:Postavi po parovima}}: skeniranje se postavlja metodom najmanjih kvadrata, a **Preostalo** pokazuje koliko svaki par još promašuje. Par s velikim brojem je loš izbor: uklonite ga križićem i ponovo postavite.
4. **Po ciljevima.** Ako su poznate stvarne koordinate tačke (snimljeni ciljevi), kliknite {{ui:Odaberi, pa upiši cilj}}, kliknite tačku na njenom skeniranju i upišite X, Y i Z cilja u red. Parovi i upisani ciljevi se slobodno miješaju.

## Dorada pomoću ICP-a

Parovi daju grubo postavljanje. {{ui:Doradi}} pomjera skeniranje dok se njegove površine ne poklope s drugim: prvo **tačka do tačke**, pa **tačka do ravni**. Tabela navodi svaki korak s greškom i brojem podudarenih tačaka; linija iznad nje crta pad greške. {{ui:Zaustavi}} završava pokretanje nakon koraka koji je u toku i zadržava dostignuto. {{ui:Poništi}} vraća cijelo pokretanje (ili zadnje postavljanje); {{ui:Resetuj}} vraća skeniranje na koordinate iz datoteke.

Da bi bilo brzo na laptopu, ICP radi na prorijeđenom dijelu tačaka ({{ui:Korištene tačke}}, 5,000 do 60,000) i ignoriše podudaranja dalja od {{ui:Najveća udaljenost podudaranja}} (podrazumijevano 5% veličine skeniranja, a smanjuje se kako se smiruje). Treba mu prvo grubo postavljanje: skeniranja koja jedva da se preklapaju javljaju da ne mogu biti podudarena. Površine koje su samo ravne ili samo prave ne mogu popraviti položaj duž sebe; tada dodajte parove.

## Čuvanje i izvoz

- {{ui:Spasi projekat}} zapisuje malu `.ccscans.json` datoteku: naziv, veličinu i otisak prvih 64 KB svakog skeniranja, s njegovom transformacijom. Ne sadrži tačke. {{ui:Otvori projekat…}} pronalazi datoteke skeniranja po tim referencama (datoteke moraju biti prvo dodane) i vraća svaku transformaciju.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svim skeniranjima na registrovanom mjestu. Tačke se nikad ne prepisuju u originalima; transformacija se primjenjuje pri izvozu. Uz uključeno {{ui:Čitaj svaku tačku iz datoteka}}, svaka datoteka se ponovo čita za svaku tačku (do 20 miliona po skeniranju); uz isključeno, zapisuju se samo tačke prikazane u pregledniku.
- {{ui:Prikaži registrovani oblak}} (BimCraft) zapisuje LAS i otvara ga u 3D prikazu pored modela, kao svaki oblak.

:::note
Ništa se ne šalje. Registracija radi u vlastitim jedinicama datoteka i čuva milimetre: LAS se zapisuje sa skalom koja odgovara (do 0,1 mm), a E57 s double vrijednostima. Koordinatni sistem se prenosi u LAS samo kad svako skeniranje navodi isti EPSG kod. E57 pisač je vlastiti; provjerava se čitanjem njegovih datoteka ovim čitačem i libE57Format.
:::
