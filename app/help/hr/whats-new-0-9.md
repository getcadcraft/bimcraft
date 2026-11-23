---
title: Novosti u 0.9 (ranije)
summary: Oblici zidova, podjela, odmak, rastezanje i zaključavanje na mrežu, razine ispod zemlje, kote mreže i mjerenje na tlocrtu, dupli prikazi s radnim stilovima i tablicama pera, Prijavi kao, izvoz Collada i Google Earth, Scan to BIM, analiza vjetra i potresa, dodaci za ispis smolom.
keywords: whats new 0.9, ranije izdanje, što je novo, 0.9, bilješke o izdanju, oblici zidova, pravokutnik, poligon, luk, odabir linija, obris traga, odmak, spajanje, rastezanje okvirom, poravnaj i zaključaj, podijeli zid, razmak, spoji ponovo, zaključaj na mrežu, raste od, mjeri od, dodaj razinu ispod, podrum, naredba razine, kote mreže, mjerenje na tlocrtu, radni stil, dupli prikaz, vlastita kopija, povezani prikaz, tablica pera, ispis kako se vidi, prijavi kao, mjerilo, uvezi svg, postavi u tlocrt, postavi u model, collada, dae, kmz, google earth, scan to bim, opterećenje vjetrom, potres, konačni elementi, panel dokumenata, ispis smolom, dnevnik promjena, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, odjek, impulsni odziv, poplava, vjetar, potres, opasnost, životni ciklus, vijek trajanja, ids, oznake, specifikacije, dokumenti, usporedba, ugljik, trošak, energyplus, pogon renderiranja, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, biljke, trag, pera, vrpca, preglednik projekta, raspored
from: 816df7f8
---

Ovo je što se promijenilo u BimCraftu 0.9 u odnosu na 0.8.1. Dvije glavne teme su pravi alat za zidove i prikazi koji se ponašaju onako kako ljudi iz velikih BIM programa očekuju. Uz njih dolaze izvoz Collada, pomoćnici koji mogu postavljati električne uređaje, Scan to BIM te analiza vjetra, potresa i konačnih elemenata na kartici {{ui:Analiza}}.

## Novo

### Zidovi

- **Crtajte cijele oblike.** U {{ui:Crtanje}} otvorite {{ui:Oblici}} (ili odaberite oblik u popisu Oblik u retku Zid) za pravokutnik, zakrenuti pravokutnik, poligon od 3 do 64 stranice, luk po središtu, tangentni luk, zidove na odabranim linijama ili zidove oko zatvorenog područja na koje kliknete unutar. Pravokutnik su četiri zida s četiri spojena ugla i jednim korakom poništavanja. Pogledajte [Oblici zidova, podjela, odmak, rastezanje i zaključavanje](topic:wall-tools).
- **Postavite prije crtanja, mijenjajte poslije.** Redak Zid ima {{ui:Odmak}} i {{ui:Spajanje}} (odznačite za zidove koji stoje sami). Poslije koristite {{ui:Odmak}}, {{ui:Rastezanje okvirom}} i {{ui:Poravnaj i zaključaj}} na nacrtanim zidovima. Pomaknut ili rastegnut zid zadržava svoja vrata, prozore i kote. Svaki recept je jedan korak poništavanja.
- **Režite zidove.** {{ui:Podijeli}}, {{ui:Razmak}}, {{ui:Slobodni krajevi}}, {{ui:Izbriši dionicu}} i {{ui:Spoji ponovo}} režu zid jednim klikom ili tamo gdje ga drugi zid siječe. Rez kroz vrata je odbijen. Pogledajte [Oblici zidova, podjela, odmak, rastezanje i zaključavanje](topic:wall-tools).
- **Zaključajte zidove na linije mreže.** Odaberite zid uz liniju mreže i označite {{ui:Zaključaj na mrežu}} u {{ui:Svojstva}}. Uz uključen alat Mreža upišite udaljenost u {{ui:Pomakni za}} za odabranu liniju, a zaključani zidovi slijede u jednom koraku poništavanja.
- **Oblikujte jedan zid.** U {{ui:Svojstva}} jednog zida možete vezati njegov vrh ili dno za krov, pod ili strop, urediti njegov obris visine, nagnuti ga ili izrezati otvor u zidu bez vrata ili prozora. Pogledajte [Oblik zida](topic:wall-shape).
- **Duljina pokazuje koji kraj ostaje.** {{ui:Raste od}} određuje hoće li početak, kraj ili središte ostati na mjestu kad mijenjate duljinu.
- **Duljina i kota na tlocrtu se slažu.** {{ui:Mjeri od}} (linija središta, unutarnja ili vanjska strana) upravlja i poljem Duljina i kotama zidova na tlocrtu. Počinje na liniji središta, pa kote zidova na tlocrtu sada pokazuju liniju središta tamo gdje su prije pokazivale vanjsku stranu. Promijenite u retku Zid, u {{ui:Svojstva}} ili u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Razine, mreže i mjerenje

- **Dodajte razinu ispod.** {{ui:Dodaj razinu ispod}} u panelu {{ui:Razine}} dodaje razinu ispod najniže, jednako visoku kao ona, na negativnoj koti (Level -1, Level -2). Ništa drugo se ne pomiče. {{ui:Dodaj razine…}} sada prihvaća negativne visine. Upisivanje LEVEL, LEVELS, STOREY ili STOREYS u naredbeni redak otvara {{ui:Dodaj razine…}}, a postoji i gumb {{ui:Razine}} u izbornicima i karticama vrpce. Pogledajte [Lokacije, zgrade i razine](topic:site-building-and-levels).
- **Kote mreže na tlocrtu.** Uz uključen alat {{ui:Mreža}} označite {{ui:Kote}} da nacrtate razmak između susjednih linija i ukupnu veličinu iza krugova na tlocrtu svake razine. Pogledajte [Kotiranje mreže](topic:grid-dimensions).
- **Mjerenje na tlocrtu.** {{ui:Mjeri}} u grupi {{ui:Crtanje}} daje udaljenost s razlikama X i Y između dva klika. Ništa se ne sprema u model. Pogledajte [Mjerenje na tlocrtu](topic:measure-on-the-plan).
- **Promijenite više stupova odjednom.** Odaberite stupove zajedno sa zidom, a popis prikazuje svaku vrstu s {{ui:Zadrži samo ove}}. Jedan klik zadržava stupove i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svugdje.** Koordinate, mjere, presjeci, mjerila listova, kartica Okvir s opterećenjima i rezultatima te tekst u Problemima slijede jedinicu koju odaberete. Izvozi ostaju u SI.

### Prikazi, listovi i ispis

- **Radni stil.** {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Radni stil}} bira hoće li svaki prikaz imati vlastite napomene i tablice pera ili će ih dijeliti. Pogledajte [Radni stil, dupli prikazi, pera na papiru, Prijavi kao i predlošci](topic:working-style).
- **Dupliciranje prikaza.** Tlocrti, stropni tlocrti, pozivi, pročelja i presjeci mogu se duplicirati kao {{ui:Vlastita kopija}} ili {{ui:Povezano}}; {{ui:Napravi vlastitu kopiju}} čini povezani prikaz neovisnim. Pogledajte [Radni stil, dupli prikazi, pera na papiru, Prijavi kao i predlošci](topic:working-style).
- **Ispis kako se vidi ili kroz tablicu pera.** Prebrisavanja pera čuvaju se u IFC-u uz prikaz, a listovi i PDF-ovi ih crtaju kako ih prikazuje ekran. Ista tema pokriva tablice pera.
- **Prijavi kao.** {{ui:Prijavi kao}} u {{ui:Svojstva}} zapisuje ploču nacrtanu kao cestu, zid kao panel ili krov kao rampu u IFC kao klasu koju odaberete, i tako ga broji u specifikacijama, količinama, Pronađi, Boja prema i Problemima.
- **Uređivanje u pročeljima i presjecima.** Crtajte i pomičite zidove, otvore, razine, kote i bilješke izravno u pročelju ili presjeku, sa svojim veličinama listova i zaglavljima. Pogledajte [Uređivanje u pročeljima i presjecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti vodoravan ili uspravan. Okvir {{ui:Upišite mjerilo}} stoji pored popisa mjerila na svakom postavljenom prikazu (1:64, 2:1, 1/4" = 1'). Postavljeni crtež možete povući ili pomaknuti strelicama na tipkovnici, a {{ui:Formati…}} › {{ui:Uvezi SVG…}} pretvara vaš vlastiti dizajn lista u zaglavlje s poljima upisanima po listu.
- **Zasluge knjižnice na listu.** Skup crteža sa stavkama knjižnice dobiva tablicu zasluga knjižnice koju možete postaviti na bilo koji list. Pogledajte [Zasluge knjižnice](topic:library-credits).

### Knjižnica: postavljanje

- **Postavljanje slijedi prikaz.** U prikazu Tlocrt Knjižnica prikazuje {{ui:Postavi u tlocrt}}; u 3D-u prikazuje {{ui:Postavi u model}}; u Podijeljenom prikazu prikazuje gumb s podjelom s {{ui:Postavi u tlocrt}} kao glavnom radnjom. Oba načina zapisuju isti IFC element. Karticu iz Knjižnice možete povući na tlocrt ili 3D prikaz; olovkom ili prstom pritisnite i držite, pa povucite. Pogledajte [Postavljanje iz Knjižnice](topic:place-from-library).

### Datoteke i pomoćnici

- **Collada i Google Earth.** {{ui:Collada}} na alatnoj traci (izbornik Datoteka u stilovima izbornika) zapisuje .dae ili .kmz postavljen tamo gdje je model na karti. Pogledajte [Izvoz modela kao Collada ili za Google Earth](topic:collada).
- **Pomoćnici mogu postavljati električne uređaje.** Vaš povezani pomoćnik ima nove alate za dodavanje, popis, promjenu i brisanje uređaja te za postavljanje svjetala. Pomoćnici ostaju isključeni dok ih ne uključite u {{ui:Postavke}}. Pogledajte [Neka AI pomoćnik radi s vašim modelom](topic:assistants).
- **Scan to BIM (dodatak).** Isključeno je po zadanom i treba dodatak Oblak točaka. Predlaže etaže, zidove, vrata i prozore iz skeniranja s izmjerenim odstupanjem za svaki; prihvaćanje je jedan korak poništavanja.

### Analiza

- **Podaci o lokaciji za vjetar i potres.** Na kartici {{ui:Analiza}}: opterećenja vjetrom prema ASCE 7-10 ili 7-16 za krutu zatvorenu zgradu, s silom na svakoj etaži kao slučajevima opterećenja, te podaci o potresnoj lokaciji s pretragom USGS-a i projektnim spektrom.
- **Strukturna provjera i konačni elementi.** Provjere betona prema ACI 318-19, ekvivalentne bočne sile prema ASCE 7-22, međukatni pomak, ploče i zidovi kao ploče te kombinacije opterećenja iz ASCE 7 i EN 1990. Naš vlastiti motor konačnih elemenata radi ljuske, tetraedre i modalnu analizu. Pogledajte [Provjera betonskih elemenata i izrada potresnih opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutarnja rasvjeta (dodatak).** Postavlja svjetiljke i zapisuje luks kao brojeve u tlocrt svake razine, s procjenom odsjaja i ispisivim izvještajem.
- **Panel dokumenata.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima uzimanje na uređivanje i vraćanje uz datoteku zaključavanja, oznake revizija, stanja izdanja i povijest.
- **Regije i čelik.** Paketi crteža i propisa o gradnji za Južnu Afriku u dodatku Propisi te 976 britanskih čeličnih profila u zajedničkoj tablici presjeka.
- **Besplatni dodaci za ispis smolom.** Slicer, potpore i podloga, test ekspozicije te formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni po zadanom.

## U svim aplikacijama

- Pri prelasku mišem preko gumba ili kontrole prikazuje se Bootstrap savjet.
- Početni savjet na praznom području crteža ima gumb za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koja ne stane sada se pomiče umjesto da bude odrezana.
- Kad je dokument otvoren, kartica preglednika glasi „<dokument> - BimCraft | CadCraft“.
- U {{ui:Postavke}} › {{ui:Opće}} › {{ui:Raspored}} rasporedi su padajući popis izbora u dva retka.
- Popis jezika u {{ui:Postavke}} nudi više jezika nego u 0.8; jezici osim engleskog su strojne radne verzije.

## Ispravljeno

- **Pomicanje radi na stubištima** te na rampama, ogradama, ravninama krova, samostojećim uređajima, slikama i stazama.
- **Povlačenje zida više ne iskrivljuje prostoriju.** Središnji hvatač pomiče zid okomito na sebe, a njegovi kutovi kližu uz spojene zidove. Držite {{key:Mod}} za stari slobodni pomak; {{ui:Poravnaj u pravokut}} vraća 90 stupnjeva.
- **Promjena debljine ili tipa na spojenom čvoru** sada zadržava kut zatvoren na L, T, čvoru s tri zida i uz zakrivljeni zid.
- **Pomicanje ili kopiranje grupe prostorija** zadržava spojene zidove izvan grupe spojenima.
- **Ponavljanje zadržava identitet kote zida.**
- **Odabir zida uz isključen Crtanje** više ne izaziva pogrešku u Svojstvima.
- **Render se prebacuje na WebGL** kad se GPU ne može pokrenuti, umjesto da se zaustavi.
- **Provjeru EnergyPlusa** opet je moguće uključiti.
- **Dokumenti se otvaraju kao centrirani dijaloški okvir.** {{key:Esc}}, X ili klik na zatamnjenu stranicu zatvara ga.
- **Gumbi {{ui:Tlocrt}}, {{ui:Podijeli}} i {{ui:3D}} prikazuju se** čim je model otvoren, a ne tek nakon što je Crtanje bilo uključeno jednom.

## Iskreno o ograničenjima

- Ništa nije ispisano na pravom uređaju. Oslonci za smolu su novi i nisu dokazani.
- Rezultati vjetra, potresa, betona i konačnih elemenata su pomoćna sredstva za provjeru za inženjera, provjerena prema zatvorenim formulama, a ne prema stvarnoj zgradi.
- Scan to BIM je ispitan na sintetičkoj zgradi, a ne na stvarnom skeniranju, i pronalazi samo pravokutne prostorije.
- Collada ovdje nije otvorena u Blenderu ni Google Earthu.
- Procjena rasvjete provjerena je prema našem vlastitom tragu, a ne prema drugim programima za rasvjetu.
- Južnoafričke brojke nisu provjerene.
- Stilovi spoja zidova (butt, mitre, square off) i prioritet slojeva nisu izrađeni; kutovi su pokošeni.
- Jezici osim engleskog su strojne radne verzije.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet). Ranije promjene su u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u BimCraftu 0.8 (2026-11-01) i 0.8.1 (2026-11-02) u odnosu na 0.7. BimCraft sada može odgovarati na pitanja o zgradi i ispitivati je, s ljudima, zvukom, vodom, vjetrom i potresima, te je crtati s više alata; 0.8.1 je izdanje s ispravcima.

### Novo

**Ispitajte zgradu**

- **Ljudi u zgradi.** Odjeljak {{ui:Ljudi u zgradi}} lijeve ploče prolazi kroz vaše prostorije, vrata i stube kao evakuaciju ili običan dolazak ljudi. Vidite redove tamo gdje se zgrada sužava, najduži put do izlaza iz svake prostorije i koliko dugo traje posljednja osoba. Označite {{ui:Zatvoreno}} na vratima da vidite što se mijenja, a označite {{ui:Prikaži ljude u 3D prikazu}} da promatrate hodače. Nalazi idu u Problemi. Grub model mase za projektne odluke, a ne potvrda protupožarne sigurnosti. Pogledajte [Prolaz ljudi kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija i slušanje.** Odjeljak {{ui:Akustika prostorija}} daje vrijeme odjeka svake prostorije po oktavnim pojasevima (Sabine i Eyring) iz njezine veličine i završnih obrada koje odaberete, a s vlastitim ciljem kaže koliko bi apsorpcije zadovoljilo. {{ui:Reproduciraj u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vašu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Brojke apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Pogledajte [Akustika prostorija](topic:room-acoustics).
- **Reprodukcija poplave, vjetra i potresa.** {{ui:Reprodukcija opasnosti}} pušta vodu koja raste kroz prostorije, pritisak vjetra na svakoj etaži i potres koji trese etaže, na tlocrtu ili pročelju s kliznikom vremena. Jednostavni modeli s pretpostavkama na panelu; nije provjera propisa. Pogledajte [Reproducirajte poplavu, vjetar ili potres](topic:hazard-playback).
- **Što se troši u pedeset godina.** {{ui:Pogled na životni ciklus}} navodi prozore, vrata, završne obrade i krov s vijekom trajanja svakog, godinama kad se mijenjaju i, kad upišete cijenu po jedinici, trošak po godini i njegovu sadašnju vrijednost. {{ui:Spremi raspored (CSV)}} ga zapisuje. Vijekovi trajanja su planske vrijednosti. Pogledajte [Pogledajte što se troši u pedeset godina](topic:life-cycle-view).
- **Provjere betona i potresa.** Blokovi {{ui:Betonski štapovi}} i {{ui:Potresna opterećenja}} na kartici {{ui:Analiza}} provjeravaju betonske grede i stupove prema ACI 318-19 i izrađuju ekvivalentne bočne sile prema ASCE 7-22 na krutim podovima, s međukatnim pomakom. Za provjeru inženjera. Pogledajte [Provjera betonskih elemenata i izrada potresnih opterećenja](topic:concrete-and-seismic).

**Provjeri i izvijesti**

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao naručitelj i vidite svaki element koji ne zadovoljava u Problemima, prije nego predate IFC. Otvorite {{ui:Provjera prema IDS-u}} pod {{ui:Provjere modela}}. Pogledajte [Provjera modela prema IDS-u naručitelja](topic:check-against-ids).
- **Oznake i specifikacije.** Definirajte vlastite oznake, postavite ih na mnogo elemenata odjednom i izradite specifikacije čiji stupci, filtri i grupe ih čitaju; oznake se čuvaju u IFC-u. Pogledajte [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava predložak specifikacije iz otvorenog IFC-a i sprema ga kao PDF, Word dokument ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).
- **Usporedba skeniranja s modelom.** Uz otvoren oblak točaka, {{ui:Usporedi}} ocjenjuje svaki element kao izgrađen, djelomično izgrađen, nedostaje ili nije dosegnut te prikazuje postotak izgrađenosti. Pogledajte [Usporedba skeniranja s modelom](topic:compare-scan-with-model).
- **Ugljik i trošak.** Okno Ugljik zbraja ugrađeni ugljik iz tablice faktora koju možete uređivati, a okno Trošak raspoređuje cijene po 4D rasporedu. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovjereni. Pogledajte [Ugrađeni ugljik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Mjeri}} › {{ui:Koordinatni sustav…}} prihvaća EPSG broj, UTM zonu, naziv ili vlastitu definiciju projekcije. Pogledajte [Georeferenciranje s bilo kojom projekcijom](topic:georeference-any-projection).

**Crtanje i uređivanje**

- **Pomakni, Poravnaj i Rasporedi.** Pod {{ui:Izgradnja}}; {{key:Shift+M}} pokreće Pomakni (obično {{key:M}} je još Mjeri). Pomakni kopira dok idete uz {{key:C}}, svaki korak je jedno poništavanje i putuje u sesiji Live TeamWork. Pogledajte [Pomicanje, kopiranje, poravnanje i raspodjela](topic:move-align-distribute).
- **Slike ispod tlocrta.** {{ui:Izgradnja}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod tlocrta razine ili na okomitoj ravnini. Postavite mjerilo s dvije točke te pomaknite, okrenite, zatamnite i zaključajte. Područje kopirano u MarkupCraftu zalijepi se po mjerilu svog lista. Pogledajte [Stavljanje slike ispod tlocrta](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** S otvorenim skeniranjem zidovi, vrata i prostorije dolaze kao prijedlozi koje zadržavate ili odbacujete jedan po jedan, u jednom koraku poništavanja. Pronalaze se samo zidovi u dva okomita smjera. Pogledajte [Pretvorba skeniranja u zidove](topic:scan-to-walls).
- **Trag, pera i skica stubišta.** {{ui:Trag}} prikazuje drugu razinu isprekidano ispod tlocrta, {{ui:Pera}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom prikazu, a {{ui:Skiciraj stubište}} pretvara liniju hoda u stubište. Otvara se Wavefront OBJ mreža. Pogledajte [Trag razine, pera i stubište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašla funkcija Adresa u lokaciju programa CivilCraft dolaze kao prijedlozi; označite one koje želite dodati. Pogledajte [Početak s lokacijom iz CivilCrafta](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Izgradnja}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove od drva ili lakog čeličnog profila i sprema popis za rezanje kao CSV te radioničke crteže kao PDF. To su početne vrijednosti, a ne konstrukcijski projekt. Pogledajte [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Izgradnja}} › {{ui:Paleta simbola}} pronalazi električne i vodoinstalacijske simbole po nazivu; izvor {{ui:Biljke}} u {{ui:Knjižnica}} navodi oko 400 biljaka s tlocrtnim simbolima. Pogledajte [Paleta simbola](topic:symbol-palette) i [Postavljanje biljke](topic:plant-list).

**Cijevi, kanali i energija**

- **Split, VRF i fan coil jedinice.** Unutarnje i vanjske jedinice s njihovim spojevima te kompleti vodova dimenzionirani iz tablice tipičnih primjernih vrijednosti koje možete promijeniti. Pogledajte [Split, VRF i fan coil jedinice](topic:split-vrf-fan-coils).
- **Izračuni.** Okno Izračuni provjerava dimenzije dovodnih cijevi i kanala s padom tlaka, provodi kabele kroz kabelske police i cijevi te prikazuje njihovo punjenje, i računa osvjetljenje iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti vašeg propisa. Pogledajte [Izračuni cijevi, kanala, kabela i svjetla](topic:mep-calculations).
- **PCF datoteke.** Naredba **Izvezi PCF** alata Cijev zapisuje dionice za programe za naprezanje cijevi i izometrije, a PCF datoteka učitana natrag crta njezinu cijev. Pogledajte [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili tlo, zasjenite ih iz modela, procijenite godišnju energiju, provjerite nizove i izradite podatke jednopolnog dijagrama. Početni modul i gubici su generički. Pogledajte [Solarni PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Okno Provjera s EnergyPlusom zapisuje model kao IDF za pokretanje u vašem EnergyPlusu. Pokretanje u pregledniku treba verziju koju sami postavite na poslužitelj i upišete njezinu adresu; BimCraft je ne nosi. Pogledajte [Provjera grijanja i hlađenja s EnergyPlusom](topic:check-with-energyplus).

**Slike i datoteke**

- **Odaberite pogon renderiranja.** {{ui:Render}} ima izbor {{ui:Pogon}}. Naša dva ugrađena pogona (Fast i Path tracer) ostaju zadani. **Otvori u** sprema scenu kao USD ili glTF datoteku, a mapu Unreal projekta kao .zip; u CadCraft Studiju dodatak može dodati pogon. Unreal dodatak koji otvara projekt nije objavljen. Pogledajte [Odaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** Unutar CadCraft Studija BimCraft javlja Studiju svaki dovršeni korak da Studio može poništiti vaš zadnji korak u prozoru koji ste zadnji koristili. Pogledajte [Poništavanje među aplikacijama](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koji su dodaci u njega pisali i nudi one koje nemate kad ga otvorite. Pogledajte [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svim aplikacijama**

- **Povežite svoju AI.** Vaš pomoćnik može upravljati BimCraftom kroz Studiovu vezu i odgovarati na pitanja o modelu, kao što je koje su prostorije ispod zadane površine. Studio nema vlastiti AI. Pogledajte [Neka AI pomoćnik radi s vašim modelom](topic:assistants).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Opće}} › {{ui:Redci alatne trake}} nudi Prelamanje, 2 retka ili 1 redak; Prelamanje ostaje zadano.
- **Ulazni uređaji.** Postavke trackpada, olovke, 3D miša, kontrolera i MIDI-ja dijele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i Live sesije rade kao prije, a nove provjere iznad šalju nalaze u Problemi.
- **Jezici.** 54 jezika, od toga deset novih. Jezici osim engleskog su strojne radne verzije koje nije pročitao izvorni govornik; teme pomoći su uglavnom na engleskom.

### Ispravljeno u 0.8.1

- **Raspored vrpce i Preglednik projekta.** Insert › Import CAD, Insert › Image i Manage › Project Units pisali su „Još nije izrađeno u BimCraftu“. Image sada otvara alat Slika, Import CAD otvara {{ui:Izgradnja}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili skeniranje), a Project Units otvara {{ui:Postavke}} › {{ui:Globalne}} › {{ui:Jedinice}}. Move i Align pokreću alate Pomakni i Poravnaj, Level otvara {{ui:Dodaj razine…}}, Phases otvara odjeljak Faze obnove, a Materials otvara knjižnicu materijala.
- **Odjeljak DWG classes.** Bio je pogrešno pročitan kao pogrešan tip; ispravljeno u BimCraftu i ostalim aplikacijama koje čitaju DWG.
- **Jezik u vremenu rada.** Studio i zapakirana izdanja sada mogu promijeniti jezik bez ponovnog pokretanja. Još nije ispitano na svakoj platformi; javite nam ako se jezik ne promijeni.
- **Skripta Archicad paketa.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi putanju programa Archicad, prati mapu do 20 sekundi i ponavlja pokušaj pokraj paketa.

### Nije u ovoj verziji još

- **Sigurnosna i projektna pomoćna sredstva.** Ljudi u zgradi nemaju ograničenje udaljenosti puta iz propisa (upisujete ga vi) i nisu ručno provjereni na pravom tlocrtu. Brojke akustike, životnog ciklusa i opasnosti su planske vrijednosti, a ne provjera propisa.
- **Klimatski scenariji i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlusa u pregledniku nije dio ovog izdanja.
- **Raspored vrpce.** Predmjer materijala ostaje „Nije izrađeno“ jer BimCraft nema popis količina materijala, a 54 druga sivo prikazana alata vrpce još nemaju iza sebe alat BimCrafta.
- **Potpisivanje i platforme.** Windows instalateri i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvori}}. Build za iPad i iPhone nije ponovno izrađen za 0.8.1.
- **Testovi stvarnih stranica.** Neki stariji testovi preglednika BimCrafta i dalje ne prolaze na našoj test stranici, kao i prije 0.8.1.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet). Ranije promjene su u [Što je novo u 0.7](topic:whats-new-0-7).
