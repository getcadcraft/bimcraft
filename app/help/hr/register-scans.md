---
title: Registracija više skeniranja u jedno
summary: Postavite skeniranja snimljena s različitih položaja u jedan okvir pomoću odabranih parova točaka ili upisanih meta, dotjerajte ih s ICP-om, spremite registraciju kao projekt i izvezite registrirani oblak kao LAS ili E57.
keywords: registracija, skeniranja, oblak točaka, icp, iterativna najbliža točka, mete, parovi točaka, kruta transformacija, poravnanje, spajanje, e57, las, skeniranje u bim
from: e8e270db
---

## Što ćete raditi

Više skeniranja istog mjesta (svako s vlastitog položaja skenera) počinje u svojim koordinatama. Registrirajte ih: dajte svakom skeniranju jedno postavljanje da sva budu u jednom okviru, zatim spremite to kao projekt i zapišite registrirani oblak kao jednu datoteku LAS ili E57.

## Postavite skeniranja

1. Otvorite dijalog ({{ui:Registracija skeniranja…}} na početnom panelu, ili {{ui:Prikaži}} › {{ui:Registracija skeniranja…}} kad je model otvoren). {{ui:Dodaj skeniranja…}} prima datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ili XYZ, ili ih povucite na dijalog. Skeniranja s različitim jedinicama se odbijaju uz napomenu: prvo pretvorite jedno.
2. Odaberite {{ui:Skeniranje za pomicanje}} i {{ui:Postavi prema}}. Slika prikazuje svako skeniranje u okviru kakvo je sada, svako u svojoj boji: {{ui:Tlocrt}}, {{ui:Naprijed}} ili {{ui:Bočno}}; povucite za pomicanje prikaza, koristite kotačić za zumiranje.
3. **Prema parovima točaka.** Kliknite {{ui:Odaberi par}}, zatim točku na skeniranju koje želite pomaknuti, zatim isto mjesto na drugom skeniranju (kut, meta, podnožje stupa). Učinite to barem tri puta, s točkama koje nisu na jednom pravcu i raširene su. Kliknite {{ui:Postavi prema parovima}}: skeniranje se postavlja najmanjim kvadratima, a **Preostalo** pokazuje koliko svaki par još promašuje. Par s velikim brojem je loš odabir: uklonite ga križićem i postavite ponovo.
4. **Prema metama.** Ako su poznate stvarne koordinate točke (geodetske mete), kliknite {{ui:Odaberi, zatim upiši metu}}, kliknite točku na njezinom skeniranju i upišite X, Y i Z mete u redak. Parovi i upisane mete mogu se slobodno miješati.

## Dotjerajte s ICP-om

Parovi daju grubo postavljanje. {{ui:Doradi}} pomiče skeniranje dok njegove plohe ne sjednu na plohe drugog skeniranja: prvo **točka do točke**, zatim **točka do ravnine**. Tablica navodi svaki korak s njegovom pogreškom i koliko je točaka usklađeno; redak iznad nje crta pad pogreške. {{ui:Zaustavi}} završava izvođenje nakon koraka koji je u tijeku i zadržava što je dosegnuto. {{ui:Poništi}} vraća cijelo izvođenje (ili zadnje postavljanje); {{ui:Vrati zadano}} vraća skeniranje na koordinate datoteke.

Da bi bilo brzo na prijenosnom računalu, ICP radi na prorijeđenom udjelu točaka ({{ui:Korištene točke}}, 5,000 do 60,000) i zanemaruje podudaranja dalja od {{ui:Najveća udaljenost podudaranja}} (prema zadanom 5% veličine skeniranja, a se smanjuje kako se slaže). Treba mu prvo grubo postavljanje: skeniranja koja se jedva preklapaju javljaju da se ne mogu uskladiti. Plohe koje su samo ravne ili samo pravocrtne ne mogu popraviti položaj duž sebe; u tom slučaju dodajte parove.

## Spremite i izvezite

- {{ui:Spremi projekt}} zapisuje malu datoteku `.ccscans.json`: naziv svakog skeniranja, veličinu i otisak njegovih prvih 64 KB, s transformacijom. Ne sadrži točke. {{ui:Otvori projekt…}} pronalazi datoteke skeniranja po tim referencama (datoteke moraju biti prethodno dodane) i vraća svaku transformaciju.
- {{ui:Izvezi LAS}} i {{ui:Izvezi E57}} zapisuju jednu datoteku sa svakim skeniranjem na njegovom registriranom mjestu. Točke se nikad ne prepisuju u izvornicima; transformacija se primjenjuje pri izlazu. S uključenim {{ui:Čitaj svaku točku iz datoteka}} svaka datoteka se ponovo čita za svaku točku (do 20 million po skeniranju); isključeno, zapisuju se samo točke prikazane u pregledniku.
- {{ui:Prikaži registrirani oblak}} (BimCraft) zapisuje LAS i otvara ga u 3D pogledu uz model, kao i svaki drugi oblak.

:::note
Ništa se ne učitava. Registracija radi u vlastitim jedinicama datoteka i čuva milimetre: LAS se zapisuje s mjerilom koje odgovara (do 0.1 mm), a E57 s double vrijednostima. Koordinatni sustav se prenosi u LAS samo kad svako skeniranje imenuje isti EPSG kod. Pisač E57 je naš vlastiti; provjerava se čitanjem njegovih datoteka natrag ovim čitačem i libE57Format.
:::
