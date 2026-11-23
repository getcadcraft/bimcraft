---
title: Šta je novo u 0.9 (ranije)
summary: Oblici zidova, podela, pomeranje, istezanje i zaključavanje za mrežu, nivoi ispod zemlje, kote mreže i Izmeri na osnovi, dupli prikazi sa radnim stilovima i tabelama olovaka, Prijavi kao, izvoz u Collada i Google Earth, Scan u BIM, analiza vetra i seizmike, dodaci za štampanje smolom.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, 0.9, beleške o izdanju, oblici zidova, pravougaonik, poligon, luk, izbor linija, obrub, pomeri, spoj, istegni okvirom, poravnaj i zaključaj, podeli zid, razmak, spoji ponovo, zaključaj za mrežu, rast od, izmeri od, dodaj nivo ispod, podrum, komanda nivo, kote mreže, izmeri na osnovi, radni stil, dupli prikaz, sopstvena kopija, povezani prikaz, tabela olovaka, štampaj kao što se vidi, prijavi kao, unesi razmeru, uvezi svg, postavi u osnovu, postavi u model, collada, dae, kmz, google earth, scan u bim, opterećenje vetrom, seizmika, konačni elementi, panel dokumenata, štampanje smolom, promene, dnevnik promena, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vetar, zemljotres, opasnost, životni ciklus, vek trajanja, ids, oznake, specifikacije, pomeri, poravnaj, rasporedi, slika, pozadina, skeniranje u zidove, lokacija iz civilcraft, paneli, solar, pv, vrf, fan coil, dimenzionisanje cevi, kablovski kanali, osvetljenost, beton, uporedi skeniranje, epsg, projekcija, dokumenti, šablon, ugljenik, trošak, energyplus, motor za renderovanje, otvori u, usd, glb, unreal, opozovi, dodaci, pcf, simboli, biljke, prati, olovke, traka, pregled projekta, raspored
from: 816df7f8
---

Ovo je šta se promenilo u BimCraft 0.9, u odnosu na 0.8.1. Dve velike teme su pravi alat za zidove i prikazi koji se ponašaju kako ljudi iz velikih BIM programa očekuju. Uz njih idu izvoz u Collada, asistenti koji mogu da postavljaju električne uređaje, Scan u BIM, i analiza vetra, seizmike i konačnih elemenata na kartici {{ui:Analiza}}.

## Novo

### Zidovi

- **Crtajte cele oblike.** U {{ui:Crtanje}}, otvorite {{ui:Oblici}} (ili izaberite oblik u listi Oblik u redu Zid) za pravougaonik, zarotirani pravougaonik, poligon od 3 do 64 strane, luk po centru, tangentni luk, zidove na izabranim linijama ili zidove oko zatvorene površine na koju kliknete unutra. Pravougaonik su četiri zida sa četiri spojena ugla i jedan korak opozivanja. Pogledajte [Oblici zidova, podela, pomeranje, istezanje i zaključavanje](topic:wall-tools).
- **Podesite pre crtanja, menjajte posle.** Red Zid ima {{ui:Pomeraj}} i {{ui:Spajanje}} (isključite da nacrtate slobodne zidove). Kasnije koristite {{ui:Pomeraj}}, {{ui:Istegni okvirom}} i {{ui:Poravnaj i zaključaj}} na nacrtanim zidovima. Pomeren ili istegnut zid zadržava svoja vrata, prozore i kote. Svaki recept je jedan korak opozivanja.
- **Sečenje zidova.** {{ui:Podeli}}, {{ui:Razmak}}, {{ui:Slobodni krajevi}}, {{ui:Izbriši deo}} i {{ui:Spoji ponovo}} seku zid na klik ili tamo gde ga drugi zid preseca. Presecanje kroz vrata je odbijeno. Pogledajte [Oblici zidova, podela, pomeranje, istezanje i zaključavanje](topic:wall-tools).
- **Zaključajte zidove za linije mreže.** Izaberite zid duž linije mreže i označite {{ui:Zaključaj za mrežu}} u {{ui:Svojstva}}. Sa uključenim alatom Mreža, unesite rastojanje u {{ui:Pomeri za}} za izabranu liniju, a zaključani zidovi prate u jednom koraku opozivanja.
- **Oblikujte jedan zid.** U {{ui:Svojstva}} jednog zida možete pričvrstiti njegov vrh ili dno za krov, pod ili plafon, izmeniti njegov obris visine, nagnuti ga ili seći otvor u zidu bez vrata ili prozora. Pogledajte [Oblik zida](topic:wall-shape).
- **Dužina pokazuje koji kraj ostaje.** {{ui:Rast od}} određuje da li početak, kraj ili centar ostaje na mestu kada menjate dužinu.
- **Dužina i kota na osnovi se slažu.** {{ui:Meri od}} (osna linija, unutrašnja strana ili spoljna strana) pokreće i polje Dužina i kote zidova na osnovi. Počinje od osne linije, pa kote zidova na osnovi sada prikazuju osnu liniju tamo gde su ranije prikazivale spoljnu stranu. Promenite u redu Zid, u {{ui:Svojstva}} ili u {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Nivoi, mreže i merenje

- **Dodajte nivo ispod.** {{ui:Dodaj nivo ispod}} u panelu {{ui:Nivoi}} dodaje nivo ispod najnižeg, jednako visok kao on, na negativnoj koti (Nivo -1, Nivo -2). Ništa drugo se ne pomera. {{ui:Dodaj nivoe…}} sada prihvata negativne visine. Ako u komandnoj liniji ukucate LEVEL, LEVELS, STOREY ili STOREYS, otvara se {{ui:Dodaj nivoe…}}, a u menijima i karticama trake postoji dugme {{ui:Nivoi}}. Pogledajte [Lokacije, zgrade i nivoi](topic:site-building-and-levels).
- **Kote mreže na osnovi.** Sa uključenim alatom {{ui:Mreža}}, označite {{ui:Kote}} da nacrtate razmak između susednih linija i ukupnu veličinu iza mehurića na osnovi svakog nivoa. Pogledajte [Kotiranje mreže](topic:grid-dimensions).
- **Merenje na osnovi.** {{ui:Izmeri}} u grupi {{ui:Crtanje}} daje rastojanje sa razlikama X i Y između dva klika. Ništa se ne čuva u modelu. Pogledajte [Merenje na osnovi](topic:measure-on-the-plan).
- **Promenite više kolona odjednom.** Izaberite kolone zajedno sa zidom, a izbor navodi svaku vrstu sa {{ui:Zadrži samo ove}}. Jedan klik zadržava kolone i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svuda.** Koordinate, mere, preseci, razmere listova, opterećenja i rezultati u kartici okvira i tekst u Problemima prate jedinicu koju izaberete. Izvozi ostaju u SI.

### Prikazi, listovi i štampa

- **Radni stil.** {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Radni stil}} bira između toga da svaki prikaz ima sopstvene napomene i tabele olovaka, ili da ih deli. Pogledajte [Radni stil, dupli prikazi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Dupliranje prikaza.** Osnove, plafonske osnove, pozivi, izgledi i preseci mogu se duplirati kao {{ui:Sopstvena kopija}} ili {{ui:Povezano}}; {{ui:Napravi sopstvenu kopiju}} čini povezani prikaz nezavisnim. Pogledajte [Radni stil, dupli prikazi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Štampajte kao što se vidi, ili kroz tabelu olovaka.** Prepisivanja olovaka se čuvaju u IFC uz prikaz, a listovi i PDF-ovi ih crtaju kao što ih prikazuje ekran. Ista tema pokriva i tabele olovaka.
- **Prijavi kao.** {{ui:Prijavi kao}} u {{ui:Svojstva}} upisuje ploču nacrtanu kao put, zid kao panel ili krov kao rampu u IFC, kao klasu koju izaberete, i računa je tako u specifikacijama, količinama, Pronađi, Boji po i Problemima.
- **Izmena u izgledima i presecima.** Crtajte i pomerajte zidove, otvore, nivoe, kote i beleške direktno u izgledu ili preseku, sa svojim veličinama listova i naslovnim blokovima. Pogledajte [Izmena u izgledima i presecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti položen ili uspravan. Polje {{ui:Unesi razmeru}} stoji pored spiska razmera na svakom postavljenom prikazu (1:64, 2:1, 1/4" = 1'). Možete prevući postavljeni crtež ili ga pomeriti tasterima sa strelicama, a {{ui:Formati…}} › {{ui:Uvezi SVG…}} pretvara vaš sopstveni dizajn lista u naslovni blok sa poljima upisanim po listu.
- **Zasluge biblioteke na listu.** Skup crteža sa stavkama iz Biblioteke dobija specifikaciju zasluga Biblioteke koju možete postaviti na bilo koji list. Pogledajte [Zasluge biblioteke](topic:library-credits).

### Biblioteka: postavljanje

- **Postavljanje prati prikaz.** U prikazu Osnova, Biblioteka prikazuje {{ui:Postavi u osnovu}}; u 3D prikazu prikazuje {{ui:Postavi u model}}; u Podeli prikazuje dugme sa padajućim delom, sa {{ui:Postavi u osnovu}} kao glavnom radnjom. Oba načina upisuju isti IFC element. Takođe možete prevući karticu Biblioteke na osnovu ili 3D prikaz; perom ili prstom, pritisnite i zadržite, pa prevucite. Pogledajte [Postavljanje iz Biblioteke](topic:place-from-library).

### Datoteke i asistenti

- **Collada i Google Earth.** {{ui:Collada}} na alatnoj traci (meni Datoteka u stilovima menija) upisuje .dae, ili .kmz postavljen tamo gde je model na mapi. Pogledajte [Izvoz modela kao Collada ili za Google Earth](topic:collada).
- **Asistenti mogu da postavljaju električne uređaje.** Vaš povezani asistent ima nove alate za dodavanje, popis, izmenu i brisanje uređaja i za podešavanje svetiljki. Asistenti ostaju isključeni dok ih ne uključite u {{ui:Podešavanja}}. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Scan u BIM (dodatak).** Isključen je po podrazumevanoj vrednosti i potreban mu je dodatak Oblaci tačaka. Predlaže podove, zidove, vrata i prozore iz skeniranja sa izmerenim odstupanjem za svaki; prihvatanje je jedan korak opozivanja.

### Analiza

- **Podaci o vetru i seizmici za lokaciju.** Na kartici {{ui:Analiza}}: opterećenja vetrom po ASCE 7-10 ili 7-16 za kruto zatvorenu zgradu, sa silom na svakom spratu kao slučajevima opterećenja, i podaci o seizmičkoj lokaciji sa pretragom USGS i projektnim spektrom.
- **Dopune proračuna konstrukcije i konačni elementi.** Provere betona po ACI 318-19, ekvivalentne bočne sile po ASCE 7-22, međuspratni pomak, ploče i zidovi kao ploče, i kombinacije opterećenja iz ASCE 7 i EN 1990. Naš sopstveni motor konačnih elemenata radi ljuske, tetraedre i modalnu analizu. Pogledajte [Provera betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutrašnje osvetljenje (dodatak).** Postavlja svetiljke i upisuje luks kao brojeve u osnovu svakog nivoa, sa procenom odsjaja i izveštajem za štampu.
- **Panel dokumenata.** {{ui:File}} › {{ui:Documents…}} ima preuzimanje i vraćanje uz datoteku zaključavanja, oznake revizija, stanja izdanja i istoriju.
- **Regioni i čelik.** Paketi crteža i propisa o gradnji za Južnu Afriku u dodatku Propisi, i 976 britanskih veličina čelika u zajedničkoj tabeli preseka.
- **Besplatni dodaci za štampanje smolom.** Slajser, oslonci i podloga, test ekspozicije i formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni po podrazumevanoj vrednosti.

## U svim aplikacijama

- Prelazak mišem preko dugmeta ili kontrole prikazuje Bootstrap savet.
- Početni savet na praznoj površini crtanja ima dugme za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koja ne staje sada se pomera umesto da bude odsečena.
- Kada je dokument otvoren, naslov kartice pregledača glasi „<dokument> - BimCraft | CadCraft“.
- U {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Raspored}} rasporedi su padajuća lista izbora u dva reda.
- Lista jezika u {{ui:Podešavanja}} nudi više jezika nego u 0.8; jezici osim engleskog su mašinski nacrti.

## Ispravljeno

- **Pomeranje radi na stepeništima,** i na rampama, ogradama, ravnima krova, slobodnim uređajima, slikama i putanjama.
- **Prevlačenje zida više ne iskrivljuje prostoriju.** Središnja ručica pomera zid kvadratno u odnosu na sebe, a njegovi uglovi kližu duž spojenih zidova. Držite {{key:Mod}} za stari slobodni pomak; {{ui:Poravnaj pod pravim uglom}} vraća 90 stepeni.
- **Promena debljine ili tipa na spojenom čvoru** sada zadržava ugao zatvoren kod L, T, čvora sa tri zida i pored krivog zida.
- **Pomeranje ili kopiranje grupe prostorija** zadržava spojene zidove izvan grupe spojenim.
- **Ponovi zadržava identitet kote zida.**
- **Izbor zida sa isključenim Crtanjem** više ne baca grešku u Svojstvima.
- **Renderovanje prelazi na WebGL** kada GPU ne može da se pokrene, umesto da stane.
- **Provera EnergyPlus** može ponovo da se uključi.
- **Dokumenti se otvaraju kao centrirani dijalog.** {{key:Esc}}, X ili klik na zatamnjenu stranicu ga zatvara.
- **Dugmad {{ui:Plan}}, {{ui:Podeli}} i {{ui:3D}} se prikazuju** čim je model otvoren, a ne tek nakon što je Crtanje bilo uključeno jednom.

## Iskrene granice

- Ništa nije odštampano na pravom uređaju. Oslonci za smolu su novi i nedokazani.
- Rezultati vetra, seizmike, betona i konačnih elemenata su pomoć za proveru za inženjera, proverena prema zatvorenim formulama, a ne prema pravoj zgradi.
- Scan u BIM je testiran na sintetičkoj zgradi, a ne na pravom skeniranju, i nalazi samo pravougaone prostorije.
- Collada ovde nije otvorena u Blenderu ili Google Earth-u.
- Procena osvetljenja je proverena prema našem sopstvenom tragu, a ne prema drugim programima za osvetljenje.
- Brojevi za Južnu Afriku nisu provereni.
- Stilovi spajanja zidova (sučeljeno, pod uglom, ravno odsečeno) i prioritet slojeva nisu izrađeni; uglovi su pod uglom.
- Jezici osim engleskog su mašinski nacrti.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Ranije promene su u beleškama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. BimCraft sada može da odgovara na pitanja o zgradi i da je testira, sa ljudima, zvukom, vodom, vetrom i zemljotresima, i da je crta sa više alata; 0.8.1 je izdanje sa ispravkama.

### Novo

**Testirajte zgradu**

- **Ljudi u zgradi.** Odeljak {{ui:Ljudi u zgradi}} levog panela vodi evakuaciju ili običan dan dolazaka kroz vaše prostorije, vrata i stepeništa. Vidite redove čekanja tamo gde se zgrada sužava, najduži put do izlaza iz svake prostorije i koliko je vremena trebalo poslednjoj osobi. Označite {{ui:Zatvoreno}} na vratima da vidite šta se menja, a {{ui:Prikaži ljude u 3D prikazu}} da pratite šetače. Nalazi idu u Problemi. Ovo je gruba procena za odluke o projektovanju, a ne sertifikat protivpožarne bezbednosti. Pogledajte [Vođenje ljudi kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i slušajte je.** Odeljak {{ui:Akustika prostorija}} daje vreme reverberacije svake prostorije po oktavnom opsegu (Sabine i Eyring) iz njene veličine i završnih obrada koje izaberete, a sa ciljem koji sami zadate kaže koliko apsorpcije bi zadovoljilo. {{ui:Pusti u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vaš zvučni fajl kroz impulsni odziv izračunat za prostoriju. Vrednosti apsorpcije su tipične objavljene vrednosti koje možete zameniti. Pogledajte [Akustika prostorija](topic:room-acoustics).
- **Reprodukcija poplave, vetra i zemljotresa.** {{ui:Prikaz opasnosti}} pušta vodu koja se diže kroz prostorije, pritisak vetra na svakom spratu i zemljotres koji trese spratove, na osnovi ili izgledu, sa klizačem vremena. Jednostavni modeli, sa svojim pretpostavkama na panelu; nije provera propisa. Pogledajte [Puštanje poplave, vetra ili zemljotresa](topic:hazard-playback).
- **Šta se troši za pedeset godina.** {{ui:Prikaz životnog ciklusa}} navodi prozore, vrata, završne obrade i krov sa vekom trajanja svakog, godinama kada se menjaju i, kada upišete cenu po jedinici, trošak po godini i njegovu sadašnju vrednost. {{ui:Sačuvaj raspored (CSV)}} ga upisuje. Vek trajanja su planske brojke. Pogledajte [Šta se troši za pedeset godina](topic:life-cycle-view).
- **Provere betona i seizmike.** Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} na kartici {{ui:Analiza}} proveravaju betonske grede i stubove po ACI 318-19 i prave ekvivalentne bočne sile po ASCE 7-22 na krutim međuspratnim konstrukcijama, sa međuspratnim pomakom. Za proveru od strane inženjera. Pogledajte [Provera betonskih elemenata i seizmička opterećenja](topic:concrete-and-seismic).

**Provera i izveštavanje**

- **Provera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite svaki element koji mu ne odgovara u Problemima, pre nego što isporučite IFC. Otvorite {{ui:Proveri prema IDS-u}} pod {{ui:Provere modela}}. Pogledajte [Provera modela prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i specifikacije.** Definišite sopstvene oznake, postavite ih na mnogo elemenata odjednom i pravite specifikacije čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC. Pogledajte [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava šablon specifikacije iz otvorenog IFC i čuva ga kao PDF, Word dokument ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).
- **Upoređivanje skeniranja sa modelom.** Sa otvorenim oblakom tačaka, {{ui:Uporedi}} procenjuje svaki element kao izgrađen, delimično izgrađen, nedostajući ili nedostignut, i prikazuje procenat izgrađenog. Pogledajte [Upoređivanje skeniranja sa modelom](topic:compare-scan-with-model).
- **Ugljenik i trošak.** Okno Ugljenik sabira ugrađeni ugljenik iz tabele faktora koju možete menjati, a okno Trošak raspoređuje cene preko 4D rasporeda. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovereni. Pogledajte [Ugrađeni ugljenik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Izmeri}} › {{ui:Koordinatni sistem…}} prihvata EPSG broj, UTM zonu, naziv ili vašu sopstvenu definiciju projekcije. Pogledajte [Georeferenciranje sa bilo kojom projekcijom](topic:georeference-any-projection).

**Crtanje i izmena**

- **Pomeri, poravnaj i rasporedi.** Pod {{ui:Verzija}}; {{key:Shift+M}} pokreće Pomeri (obično {{key:M}} je i dalje Izmeri). Pomeranje kopira dok idete uz {{key:C}}, svaki korak je jedan opoziv, i putuje u sesiji Live TeamWork. Pogledajte [Pomeranje, kopiranje, poravnanje i raspoređivanje](topic:move-align-distribute).
- **Slike ispod osnove.** {{ui:Verzija}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod osnove nivoa ili na vertikalnoj ravni. Podesite razmeru sa dve tačke, pa pomerajte, okrećite, bledite i zaključavajte. Oblast kopirana u MarkupCraft-u nalepljuje se u razmeri svog lista. Pogledajte [Stavljanje slike ispod osnove](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** Sa otvorenim skeniranjem, zidovi, vrata i prostorije dolaze kao predlozi koje zadržavate ili odbijate jedan po jedan, u jednom koraku opozivanja. Nalaze se samo zidovi u dva normalna pravca. Pogledajte [Pretvaranje skeniranja u zidove](topic:scan-to-walls).
- **Prati, olovke i skica stepenica.** {{ui:Prati}} prikazuje drugi nivo isprekidano ispod osnove, {{ui:Olovke}} daje zidovima, vratima i prozorima sopstvenu debljinu linije u jednom prikazu, a {{ui:Skiciraj stepenice}} pretvara liniju hodanja u stepenice. Otvara se Wavefront OBJ mreža. Pogledajte [Praćenje nivoa, olovke i stepenice iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašao CivilCraft-ov Adresa na lokaciju stižu kao predlozi; označite one koje dodajete. Pogledajte [Početak sa lokacije iz CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Verzija}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove od drveta ili lakog čeličnog profila i čuva listu sečenja kao CSV i radioničke crteže kao PDF. Ovo su početne vrednosti, a ne konstrukcijski projekat. Pogledajte [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Verzija}} › {{ui:Paleta simbola}} pronalazi električne i vodoinstalaterske simbole po nazivu; izvor {{ui:Biljke}} u {{ui:Biblioteka}} navodi oko 400 biljaka sa simbolima za osnovu. Pogledajte [Paleta simbola](topic:symbol-palette) i [Postavljanje biljke](topic:plant-list).

**Cevi, kanali i energija**

- **Split, VRF i fan coil.** Unutrašnje i spoljne jedinice sa svojim priključcima, i setovi vodova dimenzionisani iz tabele tipičnih primernih vrednosti koje možete menjati. Pogledajte [Split, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Proračuni proverava dimenzije vodova za snabdevanje cevi i kanala sa padom pritiska, vodi kablove kroz kablovske kanale i prikazuje njihovo popunjenje, i računa osvetljenost iz IES ili EULUMDAT datoteka. Podrazumevane vrednosti su označene; upišite vrednosti vašeg propisa. Pogledajte [Proračuni cevi, kanala, kablova i svetla](topic:mep-calculations).
- **PCF datoteke.** **Izvezi PCF** alata Cev upisuje vodove za programe za naprezanje cevi i izometrije, a PCF datoteka pročitana nazad crta njenu cev. Pogledajte [Datoteke komponenti cevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili na zemlju, zasenčite ih iz modela, procenite godišnju energiju, proverite stringove i napravite podatke za jednolinijski dijagram. Početni modul i gubici su generički. Pogledajte [Solarni PV](topic:solar-pv).
- **EnergyPlus datoteka.** Okno Provera sa EnergyPlus-om upisuje model kao IDF za pokretanje u vašem EnergyPlus-u. Pokretanje u pregledaču treba build koji sami hostujete i čiju adresu upisujete; BimCraft ga ne nosi. Pogledajte [Provera grejanja i hlađenja sa EnergyPlus-om](topic:check-with-energyplus).

**Slike i datoteke**

- **Izaberite motor za renderovanje.** {{ui:Renderuj}} ima izbor {{ui:Motor}}. Naša dva ugrađena motora (Brzi i Praćenje zraka) ostaju podrazumevani. **Otvori u** čuva scenu kao USD ili glTF datoteku, a folder Unreal projekta kao .zip; u CadCraft Studiu dodatak može da doda motor. Unreal dodatak koji otvara projekat nije objavljen. Pogledajte [Izbor programa koji crta sliku](topic:render-engines).
- **Opozivanje u Studiju.** Unutar CadCraft Studija, BimCraft javlja Studiu svaki završen korak tako da Studio može da opozove vaš poslednji korak u bilo kom prozoru koji ste poslednji koristili. Pogledajte [Opozivanje među aplikacijama](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC beleži koji dodaci su u njega upisivali i nudi one koji vam nedostaju kada ga otvorite. Pogledajte [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svim aplikacijama**

- **Povežite svog AI.** Vaš sopstveni asistent može da upravlja BimCraft-om kroz vezu Studija i odgovara na pitanja o modelu, na primer koje su prostorije ispod date površine. Studio nema sopstveni AI. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} nudi Prelom, 2 reda ili 1 red; Prelom ostaje podrazumevano.
- **Ulazni uređaji.** Podešavanja trackpada, olovke, 3D miša, kontrolera i MIDI-ja dele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i Live sesije rade kao ranije, a nove provere iznad napajaju Problemi.
- **Jezici.** 54 jezika, deset njih novih. Jezici osim engleskog su mašinski nacrti koje još nije pročitao izvorni govornik; teme pomoći su uglavnom na engleskom.

### Ispravljeno u 0.8.1

- **Raspored trake i Pregled projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljanje › Jedinice projekta govorili su „Još nije izrađeno u BimCraft-u“. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Verzija}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili skeniranje), a Jedinice projekta otvara {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Jedinice}}. Pomeri i Poravnaj pokreću alate Pomeri i Poravnaj, Nivo otvara {{ui:Dodaj nivoe…}}, Faze otvara odeljak Faze prepravke, a Materijali otvara biblioteku materijala.
- **Odeljak klasa DWG.** Čitan je kao pogrešan tip; ispravljeno u BimCraft-u i drugim aplikacijama koje čitaju DWG.
- **Jezik u vreme rada.** Studio i spakovana izdanja sada mogu da promene jezik bez ponovnog pokretanja. Ovo još nije testirano na svim platformama; javite nam ako se jezik ne promeni.
- **Skripta Archicad paketa.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi putanju Archicad-a, prati fasciklu do 20 sekundi i ponavlja pokušaj pored paketa.

### Još nije u ovoj verziji

- **Alati za bezbednost i projektovanje.** Ljudi u zgradi nemaju ograničenje dužine puta iz propisa o gradnji (vi unosite ograničenje) i nisu ručno provereni na pravom planu. Brojevi za akustiku, životni ciklus i opasnosti su planske vrednosti, a ne provera propisa.
- **Klimatske budućnosti i EnergyPlus.** Nema ugrađenih klimatskih budućnosti: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledaču nije deo ovog izdanja.
- **Izgled trake.** Material Takeoff ostaje „Nije izrađeno“ jer BimCraft nema listu količina materijala, a 54 druga zasivljena alata trake još nemaju iza sebe alat u BimCraft-u.
- **Potpisivanje i platforme.** Instalateri za Windows i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvoren}}. Build za iPad i iPhone nije ponovo izgrađen za 0.8.1.
- **Stvarni testovi pregledača.** Neki stariji testovi pregledača BimCraft-a još padaju na našoj test stranici, kao i pre 0.8.1.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
