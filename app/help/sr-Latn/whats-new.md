---
title: Šta je novo u 0.9
summary: Oblici zidova, podela, pomeranje, istezanje i zaključavanje za rešetku, nivoi ispod zemlje, dimenzije rešetke i Meri na osnovi, dupli pogledi sa radnim stilovima i tabelama olovaka, Prijavi kao, Collada i izvoz za Google Earth, Scan u BIM, analiza vetra i seizmike, dodaci za štampu smolom.
keywords: šta je novo, 0.9, beleške o izdanju, oblici zidova, pravougaonik, poligon, luk, izabrane linije, trag obrisa, pomeraj, spajanje, istegni okvirom, poravnaj i zaključaj, podela zida, razmak, ponovo spoji, zaključaj za mrežu, rast od, meri od, dodaj nivo ispod, suteren, komanda nivoa, dimenzije rešetke, meri na osnovi, radni stil, dupli pogled, sopstvena kopija, povezani pogled, tabela olovaka, štampaj kako se vidi, prijavi kao, unesi razmeru, uvezi svg, postavi u osnovu, postavi u model, collada, dae, kmz, google earth, scan u bim, opterećenje vetrom, seizmika, konačni elementi, panel dokumenata, štampa smolom, šta je novo, beleške o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vetar, zemljotres, opasnost, životni ciklus, vek trajanja, ids, oznake, specifikacije, pomeri, poravnaj, rasporedi, slika, pozadina, skeniranje u zidove, lokacija iz civilcraft-a, paneli crteža, konstrukcija, solar, pv, podela, vrf, fan coil, dimenzionisanje cevi, kablovska kanalica, osvetljenost, beton, seizmika, poređenje skeniranja, epsg, projekcija, dokumenti, šablon, karbon, trošak, render engine, otvori u, usd, glb, unreal, opozovi, dodaci, pcf, simboli, biljke, trag, olovke, traka, pregledač projekta, raspored
from: 5624fe88
---

Ovo je ono što se promenilo u BimCraft 0.9, u odnosu na 0.8.1. Dve velike teme su pravi alat za zidove i pogledi koji se ponašaju onako kako to očekuju ljudi koji dolaze iz velikih BIM programa. Oko njih su izvoz u Collada, asistenti koji mogu da postavljaju električne uređaje, Scan u BIM, i analiza vetra, seizmike i konačnih elemenata u kartici {{ui:Analiza}}.

## Novo

### Zidovi

- **Crtajte celе oblike.** U {{ui:Crtanje}} otvorite {{ui:Oblici}} (ili izaberite oblik u listi Oblik u redu za zid) za pravougaonik, zarotirani pravougaonik, poligon od 3 do 64 strane, luk po centru, tangentni luk, zidove na izabranim linijama, ili zidove oko zatvorene površine na koju kliknete unutra. Pravougaonik je četiri zida sa četiri spojena ugla i jednim korakom za opoziv. Videti [Oblici zidova, podela, pomeranje, istezanje i zaključavanje](topic:wall-tools).
- **Postavite pre crtanja, promenite posle.** Red za zid ima {{ui:Pomeraj}} i {{ui:Spajanje}} (isključite da crtate slobodnostojeće zidove). Posle, koristite {{ui:Pomeraj}}, {{ui:Istegni okvirom}} i {{ui:Poravnaj i zaključaj}} na nacrtanim zidovima. Pomaknut ili istegnut zid zadržava svoja vrata, prozore i kote. Svaki postupak je jedan korak za opoziv.
- **Sečenje zidova.** {{ui:Podeli}}, {{ui:Razmak}}, {{ui:Slobodni krajevi}}, {{ui:Izbriši deo}} i {{ui:Spoji ponovo}} seku zid na klik ili tamo gde ga seče drugi zid. Rez kroz vrata se odbija. Videti [Oblici zidova, podela, pomeranje, istezanje i zaključavanje](topic:wall-tools).
- **Zaključavanje zidova za linije rešetke.** Izaberite zid duž linije rešetke i štiklirajte {{ui:Zaključaj za mrežu}} u {{ui:Svojstva}}. Uz uključen alat Mreža, ukucajte rastojanje u {{ui:Pomeri za}} za izabranu liniju, a zaključani zidovi prate u jednom koraku za opoziv.
- **Oblikujte jedan zid.** U {{ui:Svojstva}} jednog zida možete pričvrstiti njegov vrh ili osnovu za krov, pod ili plafon, urediti njegov obris u izgledu, nagnuti ga, ili isећи otvor u zidu bez vrata ili prozora. Videti [Oblikovanje zida](topic:wall-shape).
- **Dužina kaže koji kraj drži.** {{ui:Rast od}} određuje da li početak, kraj ili centar ostaje na mestu kad menjate dužinu.
- **Dužina i kota na osnovi se slažu.** {{ui:Meri od}} (osna linija, unutrašnje lice ili spoljašnje lice) upravlja i poljem Dužina i kotama zidova na osnovi. Počinje na osnoj liniji, pa kote zidova na osnovi sad čitaju osnu liniju tamo gde su ranije čitale spoljašnje lice. Promenite je u redu za zid, u {{ui:Svojstva}} ili u {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Nivoi, rešetke i merenje

- **Dodajte nivo ispod.** {{ui:Dodaj nivo ispod}} u panelu {{ui:Nivoi}} dodaje nivo ispod najnižeg, jednake visine, na negativnoj koti (Nivo -1, Nivo -2). Ništa drugo se ne pomera. {{ui:Dodaj nivoe…}} sada prihvata negativne visine. Ukucavanje LEVEL, LEVELS, STOREY ili STOREYS u komandnu liniju otvara {{ui:Dodaj nivoe…}}, a u menijima i karticama trake postoji dugme {{ui:Nivoi}}. Videti [Lokacije, zgrade i nivoi](topic:site-building-and-levels).
- **Kote rešetke na osnovi.** Uz uključen alat {{ui:Mreža}}, štiklirajte {{ui:Kote}} da nacrtate razmak između susednih linija i ukupnu veličinu iza krugova na osnovi svakog nivoa. Videti [Kotiranje rešetke](topic:grid-dimensions).
- **Merenje na osnovi.** {{ui:Izmeri}} u grupi {{ui:Crtanje}} daje rastojanje sa razlikama X i Y između dva klika. Ništa se ne čuva u modelu. Videti [Merenje na osnovi](topic:measure-on-the-plan).
- **Promenite više kolona odjednom.** Izaberite kolone zajedno sa zidom i lista navodi svaku vrstu sa {{ui:Zadrži samo ove}}. Jedan klik zadržava kolone i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svuda.** Koordinate, merenja, preseci, razmere listova, opterećenja i rezultati u panelu okvira, i tekst Problemi prate jedinicu koju izaberete. Izvozi ostaju u SI.

### Pogledi, listovi i štampa

- **Radni stil.** {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Radni stil}} bira između toga da svaki pogled ima sopstvene napomene i tabele olovaka, ili da ih deli. Videti [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Dupliranje pogleda.** Osnove, plafonske osnove, pozivi, izgledi i preseci mogu se dupliratи kao {{ui:Sopstvena kopija}} ili {{ui:Povezano}}; {{ui:Napravi sopstvenu kopiju}} čini povezan pogled nezavisnim. Videti [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Štampa kako se vidi, ili kroz tabelu olovaka.** Izmene olovaka se čuvaju u IFC-u uz pogled, a listovi i PDF-ovi ih crtaju kao što ih ekran prikazuje. Ista tema pokriva tabele olovaka.
- **Prijavi kao.** {{ui:Prijavi kao}} u {{ui:Svojstva}} piše ploču nacrtanu kao put, zid kao panel ili krov kao rampu u IFC kao klasu koju izaberete, i broji je tako u specifikacijama, količinama, Pronađi, Boji po i Problemima.
- **Uređivanje u izgledima i presecima.** Crtajte i pomerajte zidove, otvore, nivoe, kote i napomene pravo u izgledu ili preseku, sa sopstvenim veličinama listova i naslovnim blokovima. Videti [Uređivanje u izgledima i presecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti položen ili uspravan. Polje {{ui:Unesi razmeru}} stoji pored liste razmera na svakom postavljenom pogledu (1:64, 2:1, 1/4" = 1'). Postavljeni crtež možete prevući ili pomeriti strelicama, a {{ui:Formati…}} › {{ui:Uvezi SVG…}} pretvara vaš sopstveni dizajn lista u naslovni blok sa poljima upisanim po listu.
- **Biblioteka u listu.** Set crteža sa stavkama biblioteke dobija specifikaciju Zasluge biblioteke koju možete postaviti na bilo koji list. Videti [Zasluge biblioteke](topic:library-credits).

### Biblioteka: postavljanje

- **Postavljanje prati pogled.** U pogledu Plan biblioteka prikazuje {{ui:Postavi u osnovu}}; u 3D prikazuje {{ui:Postavi u model}}; u Podeli prikazuje dugme sa podelom, sa {{ui:Postavi u osnovu}} kao glavnom radnjom. Oba načina upisuju isti IFC element. Karticu biblioteke možete i prevući na osnovu ili 3D prikaz; olovkom ili prstom, pritisnite i zadržite, pa prevucite. Videti [Postavljanje iz biblioteke](topic:place-from-library).

### Datoteke i asistenti

- **Collada i Google Earth.** {{ui:Collada}} na traci sa alatkama (meni Datoteka u stilovima menija) piše .dae, ili .kmz postavljen tamo gde je model na mapi. Videti [Izvezite model kao Collada ili za Google Earth](topic:collada).
- **Asistenti mogu da postavljaju električne uređaje.** Vaš povezani asistent ima nove alate za dodavanje, popis, izmenu i brisanje uređaja i za podešavanje svetala. Asistenti ostaju isključeni dok ih ne uključite u {{ui:Podešavanja}}. Videti [Neka AI asistent radi sa vašim modelom](topic:assistants).
- **Scan u BIM (dodatak).** Isključen po podrazumevanju i treba mu dodatak Oblaci tačaka. Predlaže podove, zidove, vrata i prozore iz skeniranja sa izmerenim odstupanjem za svaki; prihvatanje je jedan korak za opoziv.

### Analiza

- **Podaci o vetru i seizmici za lokaciju.** U kartici {{ui:Analiza}}: opterećenja vetrom po ASCE 7-10 ili 7-16 za kruto zatvorenu zgradu, sa silom na svakom spratu kao slučajevima opterećenja, i podaci o seizmici za lokaciju sa pretragom USGS-a i projektovanim spektrom.
- **Konstrukcijska provera i konačni elementi.** Provere betona po ACI 318-19, ekvivalentne bočne sile po ASCE 7-22, pomeranje sprata, ploče i zidovi kao ploče, i kombinacije opterećenja iz ASCE 7 i EN 1990. Naš sopstveni motor konačnih elemenata radi ljuske, tetraedre i modalnu analizu. Videti [Proverite betonske elemente i izradite seizmička opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutrašnje osvetljenje (dodatak).** Postavlja svetiljke i upisuje lukse kao brojeve u osnovu svakog nivoa, sa procenom odsjaja i izveštajem za štampu.
- **Panel dokumenata.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima preuzimanje i vraćanje sa datotekom zaključavanja, slova revizija, stanja izdanja i istoriju.
- **Regioni i čelik.** Paketi južnoafričkih crteža i propisa o gradnji u dodatku Propisi, i 976 britanskih čeličnih veličina u zajedničkoj tabeli preseka.
- **Besplatni dodaci za štampu smolom.** Slajser, oslonci i splav, test ekspozicije, i formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni po podrazumevanju.

## U svakoj aplikaciji

- Zadržavanje dugmeta ili kontrole prikazuje Bootstrap savet.
- Početni savet na praznom području crteža ima dugme za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koja ne staje sad se pomera umesto da bude odsečena.
- Sa otvorenim dokumentom, kartica pregledača glasi „<dokument> - BimCraft | CadCraft”.
- U {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Raspored}} rasporedi su padajuća lista izbora sa dva reda.
- Lista jezika u {{ui:Podešavanja}} nudi više jezika nego u 0.8; jezici osim engleskog su mašinski nacrti.

## Ispravljeno

- **Pomeranje radi na stepenicama,** i na rampama, ogradama, ravnima krova, slobodnostojećim uređajima, slikama i stazama.
- **Prevlačenje zida više ne iskrivljuje prostoriju.** Centralni hvatač pomera zid upravno na sebe, a njegovi uglovi kližu duž spojenih zidova. Držite {{key:Mod}} za stari slobodan pomak; {{ui:Poravnaj pod pravim uglom}} vraća 90 stepeni.
- **Promena debljine ili tipa na spojenom čvoru** sada zadržava ugao zatvoren kod L, T, čvora sa tri zida i pored zakrivljenog zida.
- **Pomeranje ili kopiranje grupe prostorija** zadržava spojene zidove izvan grupe spojenim.
- **Redo zadržava identitet kote zida.**
- **Izbor zida sa isključenim Crtanjem** više ne baca grešku u Svojstvima.
- **Renderovanje prelazi na WebGL** kad grafička kartica ne može da se pokrene, umesto da se zaustavi.
- **Provera EnergyPlus** može se ponovo uključiti.
- **Dokumenti se otvaraju kao centrirani dijalog.** {{key:Esc}}, X ili klik na zatamnjenu stranicu zatvara ga.
- **Dugmad {{ui:Plan}}, {{ui:Podeli}} i {{ui:3D}} se pojavljuju** čim je model otvoren, a ne tek posle prvog uključivanja Crtanja.

## Iskrena ograničenja

- Ništa nije odštampano na pravom hardveru. Oslonci za smolu su novi i nisu dokazani.
- Rezultati vetra, seizmike, betona i konačnih elemenata su pomoćna sredstva za inženjera, proverena prema zatvorenim formulama, a ne prema pravoj zgradi.
- Scan u BIM je isproban na sintetičkoj zgradi, a ne na pravom skeniranju, i nalazi samo pravougaone prostorije.
- Collada nije otvorena u Blender-u ili Google Earth-u ovde.
- Procena osvetljenja je proverena prema našem sopstvenom praćenju putanje, a ne prema drugim programima za osvetljenje.
- Južnoafrički brojevi nisu provereni.
- Spojevi zidova (na kraj, pokos, pravo odsecanje) i prioritet sloja nisu izrađeni; uglovi su pokosi.
- Jezici osim engleskog su mašinski nacrti.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Ranije promene su u beleškama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promenilo u BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. BimCraft sada može da odgovara na pitanja o zgradi i da je ispituje, sa ljudima, zvukom, vodom, vetrom i zemljotresima, i da je crta sa više alata; 0.8.1 je popravno izdanje.

### Novo

**Ispitajte zgradu**

- **Ljudi u zgradi.** Odeljak {{ui:Ljudi u zgradi}} levog panela vodi evakuaciju ili normalan dan dolazaka kroz vaše prostorije, vrata i stepeništa. Vidite redove tamo gde se zgrada sužava, najduži hod do izlaza iz svake prostorije i koliko vremena treba poslednjoj osobi. Štiklirajte {{ui:Zatvoreno}} na vratima da vidite šta se menja, i štiklirajte {{ui:Prikaži ljude u 3D prikazu}} da pratite pešake. Nalazi idu u Probleme. Grubi model gomile za odluke o projektovanju, a ne sertifikat protivpožarne bezbednosti. Videti [Vodite ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i slušajte.** Odeljak {{ui:Akustika prostorija}} daje vreme reverberacije svake prostorije po oktavnim opsezima (Sabine i Eyring) iz njene veličine i završnih obrada koje izaberete, a sa vašim ciljem kaže koliko bi apsorpcije ispunilo cilj. {{ui:Pusti u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vašu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Brojevi apsorpcije su tipične objavljene vrednosti koje možete zameniti. Videti [Akustika prostorija](topic:room-acoustics).
- **Reprodukcija poplave, vetra i zemljotresa.** {{ui:Prikaz opasnosti}} pušta vodu koja raste kroz prostorije, pritisak vetra na svakom spratu i zemljotres koji trese spratove, na planu ili izgledu sa klizačem vremena. Jednostavni modeli sa svojim pretpostavkama na panelu; nije provera po propisima. Videti [Pustite poplavu, vetar ili zemljotres](topic:hazard-playback).
- **Šta se troši za pedeset godina.** {{ui:Prikaz životnog ciklusa}} navodi prozore, vrata, završne obrade i krov sa vekom trajanja svakog, godine kad se menjaju i, kad upišete cenu po jedinici, trošak po godini i njegovu sadašnju vrednost. {{ui:Sačuvaj raspored (CSV)}} ga izvozi. Vekovi trajanja su planske brojke. Videti [Pogledajte šta se troši za pedeset godina](topic:life-cycle-view).
- **Beton i seizmika.** Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} u kartici {{ui:Analiza}} proveravaju betonske grede i stubove po ACI 318-19 i prave ekvivalentne bočne sile po ASCE 7-22 na krutim podovima, sa pomeranjem sprata. Za inženjera da proveri. Videti [Proverite betonske elemente i izradite seizmička opterećenja](topic:concrete-and-seismic).

**Proverite i izveštavajte**

- **Proverite prema IDS-u.** Učitajte datoteku `.ids` koju vam je klijent dao i vidite svaki element koji joj ne odgovara u Problemima, pre predaje IFC-a. Otvorite {{ui:Proveri prema IDS-u}} pod {{ui:Provere modela}}. Videti [Proverite model prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i specifikacije.** Definišite sopstvene oznake, postavite ih na mnogo elemenata odjednom i pravite specifikacije čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC-u. Videti [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava šablon specifikacije iz otvorenog IFC-a i čuva ga kao PDF, Word dokument ili Markdown. Videti [Dokumenti iz modela](topic:documents-from-the-model).
- **Uporedite skeniranje sa modelom.** Uz otvoren oblak tačaka, {{ui:Uporedi}} ocenjuje svaki element kao izgrađen, delimično izgrađen, nedostajući ili nedostignut, i pokazuje procenat izgrađenog. Videti [Uporedite skeniranje sa modelom](topic:compare-scan-with-model).
- **Ugljenik i trošak.** Okno Ugljenik sabira ugrađeni ugljenik iz tabele faktora koju možete uređivati, a okno Trošak raspoređuje cene preko 4D rasporeda. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovereni. Videti [Ugrađeni ugljenik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja projekcija karte.** {{ui:Meri}} › {{ui:Koordinatni sistem…}} prihvata EPSG broj, UTM zonu, ime ili vašu sopstvenu definiciju projekcije. Videti [Georeferenciranje sa bilo kojom projekcijom](topic:georeference-any-projection).

**Crtanje i izmena**

- **Pomeranje, poravnanje i raspodela.** Pod {{ui:Verzija}}; {{key:Shift+M}} pokreće Pomeranje (obično {{key:M}} je i dalje Merenje). Pomeranje kopira dok idete sa {{key:C}}, svaki korak je jedan opoziv, i putuje u sesiji Živog TeamWork-a. Videti [Pomeranje, kopiranje, poravnanje i raspodela](topic:move-align-distribute).
- **Slike ispod plana.** {{ui:Verzija}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod osnove nivoa ili na vertikalnoj ravni. Razmeru postavite sa dve tačke, pa pomerajte, okrećite, utišavajte i zaključavajte je. Oblast kopirana u MarkupCraft-u se lepi u razmeri svog lista. Videti [Stavite sliku ispod plana](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** Uz otvoreno skeniranje, zidovi, vrata i prostorije dolaze kao predlozi koje zadržavate ili odbijate jedan po jedan, u jednom koraku za opoziv. Nalaze se samo zidovi u dva međusobno normalna pravca. Videti [Pretvorite skeniranje u zidove](topic:scan-to-walls).
- **Trag, olovke i stepenice sa skice.** {{ui:Trag}} prikazuje drugi nivo isprekidano ispod osnove, {{ui:Olovke}} daje zidovima, vratima i prozorima sopstvenu debljinu linije u jednom pogledu, a {{ui:Skiciraj stepenice}} pretvara liniju hoda u stepenice. Otvara se Wavefront OBJ mreža. Videti [Pratite nivo, olovke i stepenice iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašao CivilCraft-ov Adresa u lokaciju stižu kao predlozi; štiklirate one koje dodajete. Videti [Počnite od lokacije iz CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Verzija}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove u drvetu ili lakom čeličnom limu i čuva listu sečenja kao CSV i radioničke crteže kao PDF. Početne vrednosti, a ne konstrukcijski proračun. Videti [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Verzija}} › {{ui:Paleta simbola}} nalazi električne i vodovodne simbole po imenu; izvor {{ui:Biljke}} u {{ui:Biblioteka}} navodi oko 400 biljaka sa simbolima u osnovi. Videti [Paleta simbola](topic:symbol-palette) i [Postavite biljku](topic:plant-list).

**Cevi, kanali i energija**

- **Podeljeni sistemi, VRF i fan coil-ovi.** Unutrašnje i spoljašnje jedinice sa svojim vezama, i linijski setovi dimenzionisani iz tabele tipičnih primernih vrednosti koje možete menjati. Videti [Podeljeni sistemi, VRF i fan coil-ovi](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Proračuni proverava dimenzije napojnih cevi i kanala sa padom pritiska, provodi kablove kroz kanalice i cevi i pokazuje njihovo punjenje, i računa osvetljenost iz IES ili EULUMDAT datoteka. Podrazumevane vrednosti su označene; upišite vrednosti vašeg propisa. Videti [Proračuni za cevi, kanale, kablove i svetlo](topic:mep-calculations).
- **PCF datoteke.** {{ui:Izvezi PCF}} alata Cev piše trase za programe za naprezanje cevi i izometrije, a PCF datoteka pročitana nazad crta njenu cev. Videti [Datoteke komponenti cevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili na zemlju, zasenčite ih iz modela, procenite godišnju energiju, proverite stringove i napravite podatke za jednolinijski dijagram. Početni modul i gubici su generički. Videti [Solarni PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Okno Proveri sa EnergyPlus piše model kao IDF da ga pokrenete u sopstvenom EnergyPlus-u. Pokretanje u pregledaču zahteva build koji sami hostujete i čiju adresu upisujete; BimCraft ga ne nosi. Videti [Proverite grejanje i hlađenje sa EnergyPlus](topic:check-with-energyplus).

**Slike i datoteke**

- **Izaberite program za renderovanje.** {{ui:Renderuj}} ima izbor {{ui:Motor}}. Naša dva ugrađena motora (Brzi i Praćač putanje) ostaju podrazumevani. **Otvori u** čuva scenu kao USD ili glTF datoteku, a Unreal projekt kao .zip; u CadCraft Studio-u dodatak može da doda motor. Unreal dodatak koji otvara projekat nije objavljen. Videti [Izaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studio-u.** Unutar CadCraft Studio-a, BimCraft javlja Studio-u svaki završen korak, pa Studio može da poništi vaš poslednji korak u onom prozoru koji ste poslednji koristili. Videti [Opozovi kroz aplikacije](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC beleži koji su dodaci pisali u njega, i nudi one koje nemate kad ga otvorite. Videti [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svakoj aplikaciji**

- **Povežite svog AI.** Vaš sopstveni asistent može da upravlja BimCraft-om preko Studio-ove veze i odgovara na pitanja o modelu, na primer koje su prostorije ispod date površine. Studio nema sopstveni AI. Videti [Neka AI asistent radi sa vašim modelom](topic:assistants).
- **Trake alata.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} nudi Prelom, 2 reda ili 1 red; Prelom ostaje podrazumevan.
- **Ulazni uređaji.** Podešavanja trackpad-a, olovke, 3D miša, kontrolera i MIDI-ja dele sve aplikacije.
- **Problemi i Živo.** Panel upozorenja i Live sesije rade kao ranije, a nove provere iznad hrane Problemi.
- **Jezici.** 54 jezika, deset od njih novo. Jezici osim engleskog su mašinski nacrti koje izvorni govornik još nije pročitao; pomoćne teme su uglavnom na engleskom.

### Ispravljeno u 0.8.1

- **Raspored trake i Pregledač projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljanje › Jedinice projekta govorili su „Još nije izrađeno u BimCraft-u”. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Verzija}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili skeniranje), a Jedinice projekta otvaraju {{ui:Podešavanja}} › {{ui:Globalno}} › {{ui:Jedinice}}. Pomeranje i Poravnanje pokreću alate Pomeranje i Poravnanje, Nivo otvara {{ui:Dodaj nivoe…}}, Faze otvaraju odeljak Faze obnove, a Materijali otvaraju biblioteku materijala.
- **Odeljak DWG klase.** Pročitan je kao pogrešan tip; ispravljeno u BimCraft-u i drugim aplikacijama koje čitaju DWG.
- **Jezik u vreme rada.** Studio i spakovana izdanja sada mogu da promene jezik bez ponovnog pokretanja. Ovo još nije testirano na svim platformama; javite nam ako se jezik ne promeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada nalazi put Archicad-a, posmatra fasciklu do 20 sekundi i ponovo proba pored paketa.

### Nije u ovoj verziji još

- **Aidovi za bezbednost i projektovanje.** Ljudi u zgradi nemaju ograničenje putanje do izlaza po propisu (vi ukucate ograničenje) i nisu ručno proverени na pravom planu. Brojevi za akustiku, životni ciklus i opasnosti su planske vrednosti, a ne provera po propisima.
- **Klimatske promene i EnergyPlus.** Nema ugrađenih klimatskih scenarija: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledaču nije deo ovog izdanja.
- **Raspored trake.** Materijalni obračun ostaje „Nije izrađeno” jer BimCraft nema listu količina materijala, a 54 druga zasivljena alata trake još nemaju alat BimCraft-a iza sebe.
- **Potpisivanje i platforme.** Windows instalateri i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvori}}. Build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Testovi na pravim stranicama.** Neki stariji testovi pregledača BimCraft-a i dalje ne prolaze na našoj test stranici, kao i pre 0.8.1.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Raniji promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
