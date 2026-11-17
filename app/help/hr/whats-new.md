---
title: Što je novo u verziji 0.9
summary: Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje na mrežu, razine ispod zemlje, kote mreže i mjerenje na tlocrtu, dupli prikazi s radnim stilovima i tablicama pera, Prijavi kao, izvoz Collada i Google Earth, Skeniranje u BIM, analiza vjetra i potresa, dodaci za 3D ispis smolom.
keywords: što je novo, 0.9, bilješke o izdanju, oblici zidova, pravokutnik, poligon, luk, odabir linija, ucrtavanje obrisa, odmak, spajanje, rastezanje kutijom, poravnaj i zaključaj, dijeljenje zida, razmak, ponovno spajanje, zaključavanje na mrežu, raste od, mjeri od, razina ispod, podrum, naredba razine, kote mreže, mjerenje na tlocrtu, radni stil, dupli prikaz, vlastita kopija, povezani prikaz, tablica pera, ispis kako je prikazano, prijavi kao, unos mjerila, uvoz svg, postavi u tlocrt, postavi u model, collada, dae, kmz, google earth, skeniranje u bim, opterećenje vjetrom, potres, konačni elementi, ploča dokumenata, 3D ispis smolom, što je novo, bilješke, promjene, 0.8, 0.8.1, verzija, nove značajke, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vjetar, potres, opasnost, životni ciklus, servisni vijek, ids, oznake, specifikacije, pomakni, poravnaj, raspodijeli, slika, pozadina, skeniranje u zidove, lokacija iz civilcrafta, paneli, okvir, sunce, pv, podijeli, vrf, fan coil, dimenzioniranje cijevi, kabelska ljestva, osvjetljenje, beton, seizmika, usporedba skeniranja, epsg, projekcija, dokumenti, predložak, ugljik, trošak, render engine, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, postrojenja, ucrtavanje, pera, traka, preglednik projekta, raspored
from: 5624fe88
---

Ovo je ono što se promijenilo u BimCraftu 0.9 u odnosu na 0.8.1. Dvije velike teme su stvarni alat za zidove i prikazi koji se ponašaju onako kako ljudi iz velikih BIM programa očekuju. Uz njih dolaze izvoz Collada, asistenti koji mogu postavljati električne uređaje, Skeniranje u BIM, te analiza vjetra, potresa i konačnih elemenata na kartici {{ui:Analiza}}.

## Novo

### Zidovi

- **Crtajte cijele oblike.** U {{ui:Crtanje}} otvorite {{ui:Oblici}} (ili odaberite oblik u popisu Oblik u retku Zid) za pravokutnik, zakrenuti pravokutnik, poligon od 3 do 64 strane, luk po središtu, tangentni luk, zidove na odabranim linijama ili zidove oko zatvorenog područja na koje kliknete. Pravokutnik su četiri zida s četiri spojena kuta i jedan korak poništavanja. Vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools).
- **Postavite prije crtanja, mijenjajte poslije.** Redak Zid ima {{ui:Odmak}} i {{ui:Spajanje}} (odznačite za samostojeće zidove). Poslije koristite {{ui:Odmak}}, {{ui:Rastezanje okvirom}} i {{ui:Poravnaj i zaključaj}} na nacrtanim zidovima. Pomaknuti ili rastegnuti zid zadržava svoja vrata, prozore i kote. Svaki recept je jedan korak poništavanja.
- **Rezanje zidova.** {{ui:Podijeli}}, {{ui:Razmak}}, {{ui:Slobodni krajevi}}, {{ui:Izbriši dionicu}} i {{ui:Spoji ponovo}} režu zid na klik ili tamo gdje ga drugi zid presijeca. Rez kroz vrata se odbija. Vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools).
- **Zaključavanje zidova za linije mreže.** Odaberite zid uz liniju mreže i označite {{ui:Zaključaj na mrežu}} u {{ui:Svojstva}}. Uz uključeno alat Mreža, upišite udaljenost u {{ui:Pomakni za}} za odabranu liniju, a zaključani zidovi slijede u jednom koraku poništavanja.
- **Oblik jednog zida.** U {{ui:Svojstva}} jednog zida možete pripojiti njegov vrh ili dno krovu, podu ili stropu, urediti njegov obris pogleda sa strane, nagnuti ga ili izrezati otvor zida bez vrata ili prozora. Vidi [Oblikovanje zida](topic:wall-shape).
- **Duljina pokazuje koji kraj drži.** {{ui:Raste od}} postavlja hoće li početak, kraj ili središte ostati na mjestu kad mijenjate duljinu.
- **Duljina i kota na tlocrtu se slažu.** {{ui:Mjeri od}} (središnja linija, unutarnja ploha ili vanjska ploha) upravlja i poljem Duljina i kotama zidova na tlocrtu. Počinje na središnjoj liniji, pa kote zidova na tlocrtu sada čitaju središnju liniju tamo gdje su prije čitale vanjsku plohu. Mijenjate ga u retku Zid, u {{ui:Svojstva}} ili u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Razine, mreže i mjerenje

- **Dodaj razinu ispod.** {{ui:Dodaj razinu ispod}} u panelu {{ui:Razine}} dodaje razinu ispod najniže, jednako visoku kao ona, na negativnoj koti (Level -1, Level -2). Ništa drugo se ne pomiče. {{ui:Dodaj razine…}} sada prihvaća negativne visine. Ako upišete LEVEL, LEVELS, STOREY ili STOREYS u naredbenom retku, otvara se {{ui:Dodaj razine…}}, a u izbornicima i karticama vrpce postoji gumb {{ui:Razine}}. Vidi [Lokacije, zgrade i razine](topic:site-building-and-levels).
- **Kote mreže na tlocrtu.** Uz uključeno alat {{ui:Mreža osi}}, označite {{ui:Kote}} da nacrtate razmak između susjednih linija i ukupnu veličinu iza krugova na tlocrtu svake razine. Vidi [Kotiranje mreže](topic:grid-dimensions).
- **Mjerenje na tlocrtu.** {{ui:Mjeri}} u grupi {{ui:Crtanje}} daje udaljenost s razlikama X i Y između dva klika. Ništa se ne sprema u model. Vidi [Mjerenje na tlocrtu](topic:measure-on-the-plan).
- **Promjena više stupaca odjednom.** Odaberite stupce zajedno sa zidom i popis prikazuje svaku vrstu s {{ui:Zadrži samo ove}}. Jedan klik zadržava stupce i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svuda.** Koordinate, mjerenja, presjeci, mjerila listova, opterećenja i rezultati kartice okvira te tekst Problema slijede jedinicu koju odaberete. Izvozi ostaju u SI.

### Prikazi, listovi i ispis

- **Radni stil.** {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Radni stil}} bira hoće li svaki prikaz imati vlastite bilješke i tablice pera ili će ih dijeliti. Vidi [Radni stil, dupli prikazi, pera na papiru, Prijavi kao i predlošci](topic:working-style).
- **Dupliciranje prikaza.** Tlocrti, stropni tlocrti, pozivi, pročelja i presjeci mogu se duplicirati kao {{ui:Vlastita kopija}} ili {{ui:Povezano}}; {{ui:Napravi vlastitu kopiju}} čini povezani neovisnim. Vidi [Radni stil, dupli prikazi, pera na papiru, Prijavi kao i predlošci](topic:working-style).
- **Ispis kako je prikazano ili kroz tablicu pera.** Prepisivanja pera čuvaju se u IFC-u uz prikaz, a listovi i PDF-ovi ih crtaju kao što ih prikazuje zaslon. Ista tema pokriva tablice pera.
- **Prijavi kao.** {{ui:Prijavi kao}} u {{ui:Svojstva}} zapisuje ploču nacrtanu kao cestu, zid kao panel ili krov kao rampu u IFC kao klasu koju odaberete, i tako je broji u specifikacijama, količinama, Pronađi, Boji prema i Problemima.
- **Uređivanje u pročeljima i presjecima.** Crtajte i pomičite zidove, otvore, razine, kote i bilješke izravno u pročelju ili presjeku, s vlastitim veličinama listova i zaglavljima. Vidi [Uređivanje u pročeljima i presjecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti vodoravan ili okomit. Okvir {{ui:Upišite mjerilo}} stoji pored popisa mjerila na svakom postavljenom prikazu (1:64, 2:1, 1/4" = 1'). Postavljeni crtež možete povući ili pomaknuti strelicama, a {{ui:Formati…}} › {{ui:Uvezi SVG…}} pretvara vaš vlastiti dizajn lista u zaglavlje s poljima upisanim po listu.
- **Zasluge knjižnice na listu.** Skup crteža s elementima knjižnice dobiva specifikaciju Zasluge knjižnice koju možete postaviti na bilo koji list. Vidi [Zasluge knjižnice](topic:library-credits).

### Knjižnica: postavljanje

- **Postavljanje prati prikaz.** U tlocrtnom prikazu knjižnica nudi {{ui:Postavi u tlocrt}}; u 3D-u nudi {{ui:Postavi u model}}; u podijeljenom prikazu nudi podijeljeni gumb s {{ui:Postavi u tlocrt}} kao glavnom radnjom. Oba načina zapisuju isti IFC element. Karticu knjižnice možete povući na tlocrt ili 3D prikaz; s olovkom ili prstom pritisnite i držite, pa povucite. Vidi [Postavljanje iz knjižnice](topic:place-from-library).

### Datoteke i asistenti

- **Collada i Google Earth.** {{ui:Collada}} na alatnoj traci (izbornik Datoteka u stilovima izbornika) zapisuje .dae ili .kmz datoteku postavljenu tamo gdje se model nalazi na karti. Vidi [Izvoz modela kao Collada ili za Google Earth](topic:collada).
- **Asistenti mogu postavljati električne uređaje.** Vaš povezani asistent ima nove alate za dodavanje, popis, promjenu i brisanje uređaja te za postavljanje svjetala. Asistenti ostaju isključeni dok ih ne uključite u {{ui:Postavke}}. Vidi [Pustite AI asistenta da radi s vašim modelom](topic:assistants).
- **Skeniranje u BIM (dodatak).** Isključeno je prema zadanome i treba dodatak Oblaci točaka. Predlaže etaže, zidove, vrata i prozore iz skeniranja s izmjerenim odstupanjem za svaki; prihvaćanje je jedan korak poništavanja.

### Analiza

- **Podaci o vjetru i potresu za lokaciju.** Na kartici {{ui:Analiza}}: opterećenja vjetrom prema ASCE 7-10 ili 7-16 za kruту zatvorenu zgradu, sa silom na svakoj etaži kao slučajevi opterećenja, te podaci o potresnoj lokaciji s pretragom USGS-a i projektnim spektrom.
- **Naknadna konstrukcijska provjera i konačni elementi.** Provjere betona prema ACI 318-19, ekvivalentne bočne sile prema ASCE 7-22, međukatni pomak, ploče i zidovi kao ljuske, te kombinacije opterećenja prema ASCE 7 i EN 1990. Naš vlastiti motor konačnih elemenata radi s ljuskama, tetraedrima i modalnom analizom. Vidi [Provjera betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutarnje osvjetljenje (dodatak).** Postavlja svjetiljke i upisuje luks kao brojeve u tlocrt svake razine, s procjenom bljeska i ispisivim izvještajem.
- **Ploča dokumenata.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima preuzimanje i vraćanje uz datoteku zaključavanja, oznake revizija, stanja izdanja i povijest.
- **Regije i čelik.** Paketi južnoafričkih crteža i propisa o gradnji u dodatku Propisi, te 976 britanskih čeličnih dimenzija u zajedničkoj tablici presjeka.
- **Besplatni dodaci za 3D ispis smolom.** Slicer, nosači i podloga, test ekspozicije, te formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni prema zadanome.

## U svim aplikacijama

- Pokazivanje gumba ili kontrole prikazuje Bootstrap savjet.
- Savjet za početak na praznom području crtanja ima gumb za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koja ne stane sada se pomiče umjesto da bude odrezana.
- Uz otvoren dokument, kartica preglednika glasi „<dokument> - BimCraft | CadCraft“.
- U {{ui:Postavke}} › {{ui:Opće}} › {{ui:Raspored}} rasporedi su padajući popis izbora u dva retka.
- Popis jezika u {{ui:Postavke}} nudi više jezika nego u 0.8; jezici osim engleskog su strojni nacrti.

## Ispravljeno

- **Pomicanje radi na stepenicama**, kao i na rampama, ogradama, ravninama krova, slobodnostojećim uređajima, slikama i putanjama.
- **Povlačenje zida više ne iskriviljuje prostoriju.** Središnja ručka pomiče zid okomito na sebe, a njegovi kutovi kližu uz spojene zidove. Držite {{key:Mod}} za stari slobodni pomak; {{ui:Poravnaj u pravokut}} vraća 90 stupnjeva.
- **Promjena debljine ili vrste na spojenom čvoru** sada zadržava kut zatvorenim kod L-a, T-a, čvora s tri zida i uz zakrivljeni zid.
- **Pomicanje ili kopiranje skupa prostorija** zadržava spojene zidove izvan skupa spojenima.
- **Ponovno (redo) zadržava identitet kote zida.**
- **Odabir zida uz isključeno Crtanje** više ne izaziva pogrešku u Svojstvima.
- **Render se vraća na WebGL** kad GPU ne može pokrenuti, umjesto da se zaustavi.
- **Provjera EnergyPlusa** može se ponovno uključiti.
- **Dokumenti se otvaraju kao centrirani dijaloški okvir.** {{key:Esc}}, X ili klik na zamagljenu stranicu zatvaraju ga.
- **Gumbi {{ui:Tlocrt}}, {{ui:Podijeli}} i {{ui:3D}} se prikazuju** čim se model otvori, a ne tek nakon što je {{ui:Crtanje}} jednom uključeno.

## Iskrena ograničenja

- Ništa nije ispisano na stvarnom hardveru. Potporne strukture za smolu su nove i neprovjerene.
- Rezultati vjetra, potresa, betona i konačnih elemenata su pomoćna sredstva za inženjera, provjerena prema zatvorenim formulama, a ne prema stvarnoj zgradi.
- Skeniranje u BIM provjereno je na sintetičkoj zgradi, a ne na stvarnom skeniranju, i pronalazi samo pravokutne prostorije.
- Collada ovdje nije otvorena u Blenderu ni Google Earthu.
- Procjena osvjetljenja provjerena je prema našem vlastitom ucrtavanju, a ne prema drugim programima za osvjetljenje.
- Južnoafrički brojevi nisu provjereni.
- Prijelazi spojeva zidova (pokos, sučeono, ravno odsijeci) i prioritet sloja nisu izrađeni; kutovi su pod pokosom.
- Jezici osim engleskog su strojni nacrti.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet). Ranije promjene su u bilješkama za 0.8 i 0.8.1 dolje na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u BimCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. BimCraft sada može odgovarati na pitanja o zgradi i testirati je s ljudima, zvukom, vodom, vjetrom i potresima, te je crtati s više alata; 0.8.1 je popravna verzija.

### Novo

**Testirajte zgradu**

- **Ljudi u zgradi.** Odjeljak {{ui:Ljudi u zgradi}} lijevog panela prolazi evakuaciju ili normalan dan dolazaka kroz vaše prostorije, vrata i stubišta. Vidite redove tamo gdje se zgrada sužava, najdulji put do izlaza iz svake prostorije i koliko dugo traje posljednja osoba. Označite {{ui:Zatvoreno}} na vratima da vidite što se mijenja, a označite {{ui:Prikaži ljude u 3D prikazu}} da pratite pješake. Nalazi idu u Problemi. Gruba gomila za odluke o projektu, a ne potvrda o zaštiti od požara. Vidi [Prošetajte ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i slušajte je.** Odjeljak {{ui:Akustika prostorija}} daje vrijeme reverberacije svake prostorije po oktavnim pojasevima (Sabine i Eyring) iz njezine veličine i odabranih obloga, a s vlastitim ciljem kaže koliko bi apsorpcije zadovoljilo cilj. {{ui:Reproduciraj u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vašu vlastitu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Brojevi apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Vidi [Akustika prostorija](topic:room-acoustics).
- **Reprodukcija poplave, vjetra i potresa.** {{ui:Reprodukcija opasnosti}} pušta vodu koja se diže kroz prostorije, tlak vjetra na svakoj etaži i potres koji trese etaže, na tlocrtu ili pročelju s kliznikom vremena. Jednostavni modeli s pretpostavkama na ploči; nije provjera propisa. Vidi [Reproducirajte poplavu, vjetar ili potres](topic:hazard-playback).
- **Što se troši kroz pedeset godina.** {{ui:Pogled na životni ciklus}} navodi prozore, vrata, obloge i krov sa servisnim vijekom svakog, godinama kad se zamjenjuju i, kad upišete cijenu po jedinici, trošak po godini i njegovu sadašnju vrijednost. {{ui:Spremi raspored (CSV)}} ga zapisuje. Servisni vijekovi su planske vrijednosti. Vidi [Pogledajte što se troši kroz pedeset godina](topic:life-cycle-view).
- **Proračun betona i potresa.** Odjeljci {{ui:Betonski štapovi}} i {{ui:Potresna opterećenja}} na kartici {{ui:Analiza}} provjeravaju betonske grede i stupove prema ACI 318-19 i stvaraju ekvivalentne bočne sile prema ASCE 7-22 na krutim etažama, s međukatnim pomakom. Za inženjera na provjeru. Vidi [Provjera betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic).

**Provjera i izvještavanje**

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite svaki element koji joj ne odgovara u Problemima, prije nego isporučite IFC. Otvorite {{ui:Provjera prema IDS-u}} pod {{ui:Provjere modela}}. Vidi [Provjera modela prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i specifikacije.** Definirajte vlastite oznake, postavite ih na mnogo elemenata odjednom i napravite specifikacije čiji stupci, filtri i grupe ih čitaju; oznake se čuvaju u IFC-u. Vidi [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava predložak specifikacije iz otvorenog IFC-a i sprema ga kao PDF, Word dokument ili Markdown. Vidi [Dokumenti iz modela](topic:documents-from-the-model).
- **Usporedba skeniranja s modelom.** S otvorenim oblakom točaka, {{ui:Usporedi}} ocjenjuje svaki element kao izgrađen, djelomično izgrađen, nedostajući ili nedosegnut, i prikazuje postotak izgrađenosti. Vidi [Usporedba skeniranja s modelom](topic:compare-scan-with-model).
- **Ugljik i trošak.** Okno Ugljik zbraja ugrađeni ugljik iz tablice faktora koju možete uređivati, a okno Trošak raspodjeljuje cijene po 4D rasporedu. Faktori koji dolaze s BimCraftom su generički i označeni kao neprovjereni. Vidi [Ugrađeni ugljik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja projekcija karte.** {{ui:Mjeri}} › {{ui:Koordinatni sustav…}} prima EPSG broj, UTM zonu, naziv ili vašu vlastitu definiciju projekcije. Vidi [Georeferenciranje s bilo kojom projekcijom](topic:georeference-any-projection).

**Crtanje i uređivanje**

- **Pomakni, poravnaj i raspodijeli.** Pod {{ui:Izgradnja}}; {{key:Shift+M}} pokreće Pomakni (običan {{key:M}} je i dalje Mjeri). Pomicanje kopira dok idete s {{key:C}}, svaki korak je jedno poništavanje, i putuje u sesiji Live TeamWork. Vidi [Pomakni, kopiraj, poravnaj i raspodijeli](topic:move-align-distribute).
- **Slike ispod tlocrta.** {{ui:Izgradnja}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod tlocrta razine ili na okomitu ravninu. Mjerilo postavite s dvije točke, a pomičete, okrećete, prigušujete i zaključavate je. Područje kopirano u MarkupCraftu zalijepi se u mjerilu svog lista. Vidi [Stavljanje slike ispod tlocrta](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** Uz otvoreno skeniranje, zidovi, vrata i prostorije dolaze kao prijedlozi koje zadržavate ili odbacujete jedan po jedan, u jednom koraku poništavanja. Pronađeni su samo zidovi u dva okomita smjera. Vidi [Pretvorba skeniranja u zidove](topic:scan-to-walls).
- **Ucrtavanje, pera i skica stubišta.** {{ui:Ucrtavanje}} prikazuje drugu razinu isprekidano ispod tlocrta, {{ui:Pera}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom prikazu, a {{ui:Skica stubišta}} pretvara liniju hodanja u stubište. Otvara se Wavefront OBJ mreža. Vidi [Ucrtavanje razine, pera i stubište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je CivilCraftova Adresa u lokaciju pronašla dolaze kao prijedlozi; označite ih za dodavanje. Vidi [Početak iz lokacije CivilCrafta](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Izgradnja}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove od drva ili lakog čeličnog profila i sprema popis za rezanje kao CSV, a radioničke crteže kao PDF. Početne vrijednosti, a ne konstrukcijski proračun. Vidi [Crteži panela](topic:panel-drawings).
- **Paleta simbola i postrojenja.** {{ui:Izgradnja}} › {{ui:Paleta simbola}} pronalazi električne i vodovodne simbole po nazivu; izvor {{ui:Postrojenja}} u {{ui:Knjižnici}} navodi oko 400 postrojenja sa simbolima u tlocrtu. Vidi [Paleta simbola](topic:symbol-palette) i [Postavljanje postrojenja](topic:plant-list).

**Cijevi, kanali i energija**

- **Podijeljeni, VRF i fan coil.** Unutarnje i vanjske jedinice s njihovim priključcima, te linijski setovi dimenzionirani prema tablici tipičnih primjernih vrijednosti koje možete promijeniti. Vidi [Podijeljeni sustavi, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Proračuni provjerava dimenzije opskrbnih cijevi i kanala s padom tlaka, vodi kabele kroz kabelske ljestve i cijevi te prikazuje njihovu ispunjenost, a računa osvjetljenje iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti vašeg propisa. Vidi [Proračuni cijevi, kanala, kabela i svjetla](topic:mep-calculations).
- **PCF datoteke.** {{ui:Izvezi PCF}} alata Cijev zapisuje vodove za programe za naprezanje cijevi i izometrije, a PCF datoteka pročitana natrag crta njezinu cijev. Vidi [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili tlo, zasjenite ih iz modela, procijenite godišnju energiju, provjerite stringove i izradite podatke za jednožilni dijagram. Početni modul i gubici su generički. Vidi [Solarni PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Okno Provjera s EnergyPlusom zapisuje model kao IDF za pokretanje u vašem EnergyPlusu. Pokretanje u pregledniku treba build koji sami hostirate i čiju adresu upisujete; BimCraft ga ne sadrži. Vidi [Provjera grijanja i hlađenja s EnergyPlusom](topic:check-with-energyplus).

**Slike i datoteke**

- **Odaberite render engine.** {{ui:Render}} ima izbor {{ui:Pogon}}. Naša dva ugrađena pogona (Brzi i Path tracer) ostaju zadana. **Otvori u** sprema scenu kao USD ili glTF datoteku, a projektnu mapu Unreal kao .zip; u CadCraft Studiju dodatak može dodati pogon. Unreal dodatak koji otvara projekt nije objavljen. Vidi [Odaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** Unutar CadCraft Studija BimCraft javlja Studiju svaki završeni korak, pa Studio može poništiti vaš zadnji korak u onom prozoru koji ste zadnje koristili. Vidi [Poništavanje između aplikacija](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koji su dodaci u njega pisali i nudi one koje nemate kad ga otvorite. Vidi [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svim aplikacijama**

- **Povežite svoj AI.** Vaš vlastiti asistent može upravljati BimCraftom kroz Studijevu vezu i odgovarati na pitanja o modelu, kao što je koje prostorije leže ispod zadane površine. Studio nema vlastiti AI. Vidi [Pustite AI asistenta da radi s vašim modelom](topic:assistants).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opće}} › {{ui:Redovi alatne trake}} nudi Omotaj, 2 retka ili 1 redak; Omotaj ostaje zadano.
- **Ulazni uređaji.** Postavke za trackpad, olovku, 3D miš, kontroler i MIDI dijele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i sesije Live rade kao i prije, s novim provjerama iznad koje pune Probleme.
- **Jezici.** 54 jezika, deset novih. Jezici osim engleskog su strojni nacrti koje izvorni govornik još nije pročitao; pomoćne teme su uglavnom na engleskom.

### Popravljeno u 0.8.1

- **Raspored vrpce i Project browser.** Insert › Import CAD, Insert › Image i Manage › Project Units govorili su „Not built in BimCraft yet“. Image sada otvara alat Slika, Import CAD otvara {{ui:Izgradnja}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili skeniranje), a Project Units otvara {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Jedinice}}. Move i Align pokreću alate Pomakni i Poravnaj, Level otvara {{ui:Dodaj razine…}}, Phases otvara odjeljak Renovacijske faze, a Materials otvara knjižnicu materijala.
- **Odjeljak DWG klasa.** Bio je pročitan kao pogrešan tip; popravljeno u BimCraftu i drugim aplikacijama koje čitaju DWG.
- **Jezik u vremenu rada.** Studio i zapakirana izdanja sada mogu promijeniti jezik bez ponovnog pokretanja. Još nije testirano na svim platformama; javite nam ako se jezik ne promijeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi Archicadovu putanju, prati mapu do 20 sekundi i ponavlja pokušaj pored paketa.

### Nije u ovoj verziji

- **Alati za sigurnost i dizajn.** Ljudi u zgradi nemaju ograničenje putne udaljenosti iz propisa zgrade (upisujete ga vi) i nisu ručno provjereni na stvarnom tlocrtu. Brojevi za akustiku, životni ciklus i opasnosti su planske vrijednosti, a ne provjera propisa.
- **Klimatske promjene i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlusa u pregledniku nije dio ovog izdanja.
- **Raspored vrpce.** Material Takeoff ostaje „Not built“ jer BimCraft nema popis količina materijala, a 54 druga zasivljena alata vrpce još nemaju iza sebe alat BimCrafta.
- **Potpisivanje i platforme.** Instalacijski programi za Windows i .dmg za macOS nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvoreno}}. Verzija za iPad i iPhone nije ponovno izgrađena za 0.8.1.
- **Stvarni testovi stranica.** Neki stariji testovi preglednika BimCrafta i dalje ne prolaze na našoj testnoj stranici, kao i prije 0.8.1.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet). Ranije promjene su u [Što je novo u verziji 0.7](topic:whats-new-0-7).
