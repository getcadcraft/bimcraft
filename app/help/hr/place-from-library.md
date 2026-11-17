---
title: Postavljanje opreme i namještaja iz knjižnice
summary: Pronađite stavku u knjižnici, datoteci ili otvorenom crtežu, postavite je na etažu IFC modela s prikazom sjene, okrenite je, uhvatite za zid i spremite.
keywords: pomakni, zakreni, okreni, povuci, knjižnica, librarycraft, postavi, umetni, oprema, namještaj, blok, obitelj, stavka, katalog, sadržaj, kcl, csv, gltf, obj, rfa, dwg, ifc tip
from: 3dad5d4b
---

## Što ćete raditi

Stavku knjižnice stavljate u IFC model: sudoper, radni stol, stolicu. BimCraft je zapisuje kao pravi IFC element s tipom, pa svaka kopija iste stavke dijeli jedan skup geometrije, a njezini podaci, broj stavke i licenca putuju s njom.

## Koraci

1. Otvorite IFC model.
2. Kliknite karticu {{ui:Knjižnica}} uz {{ui:Svojstva}} s desne strane ili {{ui:Knjižnica}} na traci iznad modela.
3. Odaberite izvor:
   - **Ugrađeni simboli**: opći simboli vodoinstalacijskih tlocrta koje BimCraft sadrži pod Apache-2.0 i koji su dostupni izvan mreže. Provjerite njihove dimenzije prije gradnje. Za elektrotehničke simbole u tlocrtu i IFC elektrotehničke uređaje koristite **Izgradnja › Elektroinstalacije**.
   - **Knjižnica**: CadCraft knjižnica na ovoj web-stranici. Javne stavke ne traže prijavu.
   - **Ova datoteka**: blokovi otvorenog DWG ili DXF crteža. Dinamički blok sa stanjima vidljivosti nudi se za svako stanje, nazvan „Sudoper: Dvostruka kada“, a svaki se crta samo s objektima tog stanja.
   - **Datoteke…**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA ili CSV datoteka na vašem računalu. Čita se na ovoj kartici; ništa se ne učitava na poslužitelj.
   - **Ostali izvori**: druga knjižnica koja govori istim formatom izvora. Dodajte njezinu adresu jednom; čuva se u ovom pregledniku.
4. Pretražite ili odaberite kategoriju, pa kliknite karticu. Kartica prikazuje pregled tlocrta, naziv, proizvođača i model, licencu i verziju.
5. Kliknite {{ui:Postavi u tlocrt}} (u prikazu Tlocrt) ili {{ui:Postavi u model}} (u 3D prikazu). U {{ui:Podijeli}} prikazu, gdje se prikazuju i tlocrt i 3D, gumb je podijeljen: glavna radnja je {{ui:Postavi u tlocrt}}, a strelica na njegovom desnom kraju otvara izbornik s {{ui:Postavi u model}}. Ili povucite karticu, ili sliku u pojedinostima stavke, na tlocrt ili 3D prikaz: stavka se postavlja tamo gdje otpustite. Olovkom ili prstom pritisnite i držite karticu trenutak, pa povucite.
6. Odaberite etažu u traci za postavljanje. U 3D prikazu etaže iznad nje skrivene su dok postavljate, a prikaz se okreće prema vrhu; u tlocrtu tlocrt već prikazuje tu etažu. Odabir {{ui:Postavi u model}} samo iz tlocrta otvara 3D prikaz uz njega.
7. Pomaknite pokazivač preko modela: prozirna kutija pokazuje gdje ide stavka.
8. Pritisnite {{key:R}} da je okrenete za 90°. Pritisnite {{key:Tab}} (ili {{ui:Hvatanje za zid}}) da njezina leđa stanu uz najbliži zid, okrenuta prema prostoriji.
9. Kliknite da je postavite. Ili upišite položaj u **X, Y (mm)**, na primjer `1200, 3400`, i pritisnite {{key:Enter}}.

Svjetiljka ili bilo što obješeno odozgo: postavite **Montaža** na **Na stropu**. Gornji dio stavke tada sjedi na donjoj strani stropa iznad mjesta (ili na visini razine gdje nema stropa). S prikazom stropa na tlocrtu, **Montaža** počinje na **Na stropu**.

10. Odgovorite na jedno pitanje: **broj stavke** (popunjava se sljedeći slobodan), količina i napomena. Pritisnite {{key:Enter}}.
11. Postavite još, ili pritisnite {{key:Esc}} za zaustavljanje.
12. Kliknite {{ui:Spremi kao IFC}} da preuzmete uređenu kopiju.

## Tlocrt ili model

Gumb za postavljanje u Knjižnici slijedi prikaz u kojem ste i mijenja se čim promijenite prikaz (gumbi {{ui:Tlocrt}}, {{ui:Podijeli}} i {{ui:3D}}, tipkovnica, otvaranje datoteke). Tlocrt prikazuje jedan gumb, {{ui:Postavi u tlocrt}}; 3D prikazuje jedan gumb, {{ui:Postavi u model}}; Podijeli prikazuje podijeljeni gumb, s {{ui:Postavi u tlocrt}} kao glavnom radnjom i {{ui:Postavi u model}} u izborniku. Oba načina koriste istu traku za postavljanje i zapisuju isti IFC element: pokazivač radi u tlocrtu za jedan, a u 3D prikazu za drugi. Pritisnite {{key:Esc}} u svakom trenutku za zaustavljanje.

Povlačenje kartice nema vlastitu tipku: podijeljeni ili obični gumb radi isto s tipkovnicom.

## Pomicanje ili okretanje postavljene stavke

U {{ui:Crtanje}} odaberite stavku u tlocrtu. Kvadratna ručka pojavljuje se na njezinoj točki umetanja, a okrugla ručka pored nje.

- Povucite stavku ili njezinu kvadratnu ručku da je pomaknete. Hvata se kao alat Zid (krajevi i strane zidova); {{key:Shift}} je drži okomito na mjesto na kojem je bila.
- Povucite okruglu ručku da je okrećete u koracima od 15°. Držite {{key:Shift}} za korake od 1°.
- Pritisnite {{key:R}} da je okrenete za 90°.
- U **Svojstvima** (također u 3D prikazu) upišite **X**, **Y** i **Rotacija (°)**, ili kliknite **Zakreni 90°**.

Svaki pomak je jedan korak poništavanja i putuje u Live TeamWork. Stavka zadržava svoj broj stavke, podatke iz knjižnice i svoju visinu iznad razine. Još nije izrađeno: povlačenje u 3D prikazu.

## Što biste trebali vidjeti

- Stavku u modelu, odabranu, sa svojstvima s desne strane: okvir **Stavka knjižnice** s njezinom licencom i navođenjem autora, te skupove `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` i, za stavke iz označenih crteža, `CadCraft_SourceAttributes`.
- „Postavljeno: *stavka* (stavka *n*)“ na popisu promjena. {{key:Mod+Z}} to poništava.
- Statusni redak: „Postavljeno: *stavka* kao stavka *n*.“

## Dobro je znati

- Neke stavke dolaze u više dimenzija ili opcija: kartica tada ima izbor **Varijanta**, a postavlja se ona koju odaberete. Pogledajte [Postavljanje i zamjena stavke knjižnice koja ima varijante](topic:library-variants).
- Stavka bez 3D tijela (2D simbol) postavlja se s privremenom kutijom; kad vas pitaju, upišete joj visinu.
- Još takvih: odaberite postavljenu stavku i upotrijebite {{ui:Kopiraj}} i {{ui:Zalijepi}}, ili {{key:Mod+D}}. Pogledajte [Kopiranje, lijepljenje i dupliciranje stavki knjižnice](topic:copy-paste).
- Da svako postavljanje počne s uključenim hvatanjem za zid, uključite **Počni s uključenim hvatanjem za zid** u [postavkama BimCraft-a](topic:settings).
- Duljine se pretvaraju u vlastite jedinice modela, koje god bile.
- **Entourage** (drveće, grmlje, ljudi, automobili) također je u knjižnici: potražite „tree“, „person“ ili „car“. Njih crta CadCraft (CC0) i zadržavaju svoje boje pri postavljanju (deblo smeđe, lišće zeleno, prozori automobila prozirni), u BimCraftu i u drugim BIM programima. Prikazuju se u [renderiranim slikama](topic:render).
- U IFC2X3 datoteci tijelo se zapisuje kao punoplošno tijelo; u IFC4 kao trokutasti skup ploha. Oba se otvaraju u drugim IFC alatima.
- Crtež (DWG ili DXF) se ovdje ne može spremiti, pa se stavke postavljaju samo u IFC modele. Upotrijebite **Ova datoteka** na crtežu da vidite što bi njegovi blokovi postali.

## Stavke na vašem jeziku

Stavka može imati naziv, opis i vrstu i na drugim jezicima. Kad ih ima na jeziku na koji je BimCraft postavljen (Postavke › Općenito › Jezik), stranica stavke prikazuje njih, a ispod njih naziv koji joj je dao proizvođač, a **Postavi** zapisuje naziv na vašem jeziku u model, pa ploča {{ui:Oprema}} navodi stavku tako. Stavka ostaje ista stavka: provjera ažuriranja i zamjena idu prema samoj stavci, nikad prema njezinu nazivu. Stavke bez prijevoda zadržavaju svoje riječi.

## Česte pogreške

- **Gumb za postavljanje nedostaje.** IFC model nije otvoren. Prvo ga otvorite.
- **Sjena ne prati pokazivač.** Pokazivač je izvan područja modela ili ravnina etaže nije vidljiva. Kliknite {{ui:Vrh}}.
- **{{ui:Hvatanje za zid}} kaže da nema zidova.** Etaža nema zidova u IFC datoteci (neki izvozi stavljaju zidove na drugu etažu). Odaberite tu etažu ili upišite X i Y.
- **Veličina stavki datoteke je kriva.** Datoteka nema jedinice ili navodi krive. U {{ui:Datoteke…}} odaberite jedinice i pročitajte je ponovno.

:::tip
Postavljanje iste stavke dvaput dijeli jedan IFC tip, pa model s četrdeset stolica sprema stolicu samo jednom.
:::
