---
title: Šta je novo u 0.9
summary: Oblici zidova, podjela, pomak, rastezanje i zaključavanje za mrežu, nivoi ispod zemlje, dimenzije mreže i Mjeri na osnovi, dupli pogledi s radnim stilovima i tabelama olovaka, Prijavi kao, izvoz Collada i Google Earth, Scan u BIM, analiza vjetra i potresa, dodaci za štampu smolom.
keywords: šta je novo, 0.9, bilješke o izdanju, oblici zidova, pravougaonik, poligon, luk, izbor linija, trasiranje konture, pomak, spoj, rastezanje okvirom, poravnaj i zaključaj, podijeljen zid, razmak, ponovo spoji, zaključaj za mrežu, raste od, mjeri od, dodaj nivo ispod, podrum, komanda nivoa, dimenzije mreže, mjeri na osnovi, radni stil, dupli pogled, vlastita kopija, povezani pogled, tabela olovaka, štampaj kako se vidi, prijavi kao, unesi razmjeru, uvezi svg, postavi u osnovu, postavi u model, collada, dae, kmz, google earth, scan u bim, opterećenje vjetrom, potres, konačni elementi, panel dokumenata, štampa smolom, šta je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, redovi, akustika, reverberacija, impulsni odziv, poplava, vjetar, zemljotres, opasnost, životni ciklus, vijek trajanja, ids, oznake, specifikacije, pomjeri, poravnaj, raspodijeli, slika, pozadina, skenirani zidovi, lokacija iz CivilCraft-a, crteži panela, konstrukcija, solar, pv, podjela, vrf, fan coil, dimenzionisanje cijevi, kabelska trasa, osvijetljenost, beton, potres, uporedi skener, epsg, projekcija, dokumenti, šablon, ugljenik, trošak, energyplus, render motor, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, biljke, trasiranje, olovke, traka, pregledač projekta, raspored
from: 5624fe88
---

Ovo je ono što se promijenilo u BimCraft-u 0.9, u odnosu na 0.8.1. Dvije velike teme su pravi alat za zid i pogledi koji se ponašaju onako kako ljudi iz velikih BIM programa očekuju. Oko njih su izvoz Collada, asistenti koji mogu postavljati električne uređaje, Scan u BIM, i analize vjetra, potresa i konačnih elemenata u kartici {{ui:Analiza}}.

## Novo

### Zidovi

- **Crtajte cijele oblike.** U {{ui:Crtanje}} otvorite {{ui:Oblici}} (ili izaberite oblik u listi Oblik u redu Zid) za pravougaonik, zakrenuti pravougaonik, poligon od 3 do 64 stranice, luk po centru, tangentni luk, zidove na izabranim linijama, ili zidove oko zatvorene površine na koju kliknete. Pravougaonik su četiri zida sa četiri spojena ugla i jednim korakom poništavanja. Vidi [Oblici zidova, podjela, pomak, rastezanje i zaključavanje](topic:wall-tools).
- **Postavite prije crtanja, mijenjajte poslije.** Red Zid ima {{ui:Pomak}} i {{ui:Spoj}} (isključite ga da nacrtate slobodnostojeće zidove). Poslije koristite {{ui:Pomak}}, {{ui:Rastezanje okvirom}} i {{ui:Poravnaj i zaključaj}} na nacrtanim zidovima. Pomjereni ili rastegnuti zid zadržava svoja vrata, prozore i kote. Svaki recept je jedan korak poništavanja.
- **Presijecanje zidova.** {{ui:Podijeli}}, {{ui:Razmak}}, {{ui:Slobodni krajevi}}, {{ui:Obriši segment}} i {{ui:Spoji ponovo}} sijeku zid na klik ili tamo gdje ga siječe drugi zid. Rez kroz vrata se odbija. Vidi [Oblici zidova, podjela, pomak, rastezanje i zaključavanje](topic:wall-tools).
- **Zaključajte zidove za linije mreže.** Izaberite zid uz liniju mreže i označite {{ui:Zaključaj za mrežu}} u {{ui:Svojstvima}}. Uz uključen alat Mreža, upišite udaljenost u {{ui:Pomjeri za}} za izabranu liniju, i zaključani zidovi slijede u jednom koraku poništavanja.
- **Oblikujte jedan zid.** U {{ui:Svojstvima}} jednog zida možete vezati njegov vrh ili podnožje za krov, pod ili plafon, urediti njegovu konturu u izgledu, nagnuti ga, ili izrezati otvor zida bez vrata ili prozora. Vidi [Oblikovanje zida](topic:wall-shape).
- **Dužina kaže koji kraj drži.** {{ui:Raste od}} postavlja hoće li početak, kraj ili centar ostati na mjestu kad mijenjate dužinu.
- **Dužina i kota na osnovi se slažu.** {{ui:Mjeri od}} (osna linija, unutrašnje lice ili vanjsko lice) pokreće i polje Dužina i kote zidova na osnovi. Počinje od osne linije, pa kote zidova na osnovi sada čitaju osnu liniju tamo gdje su ranije čitale vanjsko lice. Promijenite je u redu Zid, u {{ui:Svojstvima}} ili u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Nivoi, mreže i mjerenje

- **Dodajte nivo ispod.** {{ui:Dodaj nivo ispod}} u panelu {{ui:Nivoi}} dodaje nivo ispod najnižeg, jednake visine, na negativnoj koti (Nivo -1, Nivo -2). Ništa drugo se ne pomjera. {{ui:Dodaj nivoe…}} sada prihvata negativne visine. Ako upišete LEVEL, LEVELS, STOREY ili STOREYS u komandnu liniju, otvara se {{ui:Dodaj nivoe…}}, a postoji i dugme {{ui:Nivoi}} u menijima i karticama trake. Vidi [Lokacije, zgrade i nivoi](topic:site-building-and-levels).
- **Dimenzije mreže na osnovi.** Uz uključen alat {{ui:Mreža}}, označite {{ui:Dimenzije}} da nacrtate razmak između susjednih linija i ukupnu veličinu iza krugova na osnovi svakog nivoa. Vidi [Okotirajte mrežu](topic:grid-dimensions).
- **Mjerenje na osnovi.** {{ui:Mjeri}} u grupi {{ui:Crtanje}} daje udaljenost s razlikama X i Y između dva klika. Ništa se ne čuva u modelu. Vidi [Mjerenje na osnovi](topic:measure-on-the-plan).
- **Promijenite više kolona odjednom.** Izaberite kolone zajedno sa zidom i izbor navodi svaku vrstu s {{ui:Zadrži samo ove}}. Jedan klik zadržava kolone i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svuda.** Koordinate, mjerenja, presjeci, razmjere listova, opterećenja i rezultati kartice okvira, i tekst Problema prate jedinicu koju izaberete. Izvozi ostaju u SI.

### Pogledi, listovi i štampa

- **Radni stil.** {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Radni stil}} bira između toga da svaki pogled ima svoje napomene i tabele olovaka, ili da ih dijeli. Vidi [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Dupliranje pogleda.** Osnove, osnove plafona, pozivi, izgledi i presjeci mogu se duplirati kao {{ui:Vlastita kopija}} ili {{ui:Povezano}}; {{ui:Napravi vlastitu kopiju}} čini povezanu nezavisnom. Vidi [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Štampajte kako se vidi, ili kroz tabelu olovaka.** Prepisi olovaka se čuvaju u IFC-u uz pogled, a listovi i PDF-ovi ih crtaju kao ekran. Ista tema pokriva tabele olovaka.
- **Prijavi kao.** {{ui:Prijavi kao}} u {{ui:Svojstvima}} zapisuje ploču nacrtanu kao put, zid kao panel ili krov kao rampu u IFC kao klasu koju izaberete, i broji je tako u specifikacijama, količinama, Traženju, Boji prema i Problemima.
- **Uredite u izgledima i presjecima.** Crtajte i pomjerajte zidove, otvore, nivoe, kote i napomene direktno u izgledu ili presjeku, s vlastitim veličinama listova i naslovnim blokovima. Vidi [Uređivanje u izgledima i presjecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti položen ili uspravan. Okvir {{ui:Unesi razmjeru}} stoji pored liste razmjera na svakom postavljenom pogledu (1:64, 2:1, 1/4" = 1'). Postavljeni crtež možete povući ili pomjerati strelicama, a {{ui:Formati…}} › {{ui:Uvezi SVG…}} pretvara vaš vlastiti dizajn lista u naslovni blok s poljima upisanim po listu.
- **Zasluge biblioteke na listu.** Set crteža s stavkama biblioteke dobija specifikaciju Zasluge biblioteke koju možete postaviti na bilo koji list. Vidi [Zasluge biblioteke](topic:library-credits).

### Biblioteka: postavljanje

- **Postavljanje prati pogled.** U pogledu Osnova biblioteka prikazuje {{ui:Postavi u osnovu}}; u 3D prikazuje {{ui:Postavi u model}}; u Podijeli prikazuje podijeljeno dugme s {{ui:Postavi u osnovu}} kao glavnom akcijom. Oba načina upisuju isti IFC element. Karticu biblioteke možete također prevući na osnovu ili 3D prikaz; olovkom ili prstom pritisnite i držite, pa prevucite. Vidi [Postavljanje iz biblioteke](topic:place-from-library).

### Datoteke i asistenti

- **Collada i Google Earth.** {{ui:Collada}} na traci alata (meni Datoteka u stilu menija) piše .dae, ili .kmz smješten gdje je model na karti. Vidi [Izvezite model kao Collada ili za Google Earth](topic:collada).
- **Asistenti mogu postavljati električne uređaje.** Vaš povezani asistent ima nove alate za dodavanje, popis, promjenu i brisanje uređaja i za postavljanje svjetala. Asistenti ostaju isključeni dok ih ne uključite u {{ui:Postavke}}. Vidi [Pustite AI pomoćnika da radi s vašim modelom](topic:assistants).
- **Scan u BIM (dodatak).** Isključen po podrazumijevanju i treba dodatak Oblaci tačaka. Predlaže podove, zidove, vrata i prozore iz skena s izmjerenim odstupanjem za svaki; prihvatanje je jedan korak poništavanja.

### Analiza

- **Podaci o lokaciji za vjetar i potres.** U kartici {{ui:Analiza}}: opterećenja vjetrom po ASCE 7-10 ili 7-16 za kruto zatvorenu zgradu, sa silom na svakom spratu kao slučajevima opterećenja, i podaci o seizmičkoj lokaciji s USGS pretragom i projektnim spektrom.
- **Naknadna konstrukcijska provjera i konačni elementi.** Provjere betona po ACI 318-19, ekvivalentne bočne sile po ASCE 7-22, pomak etaže, ploče i zidovi kao ploče, i kombinacije opterećenja po ASCE 7 i EN 1990. Naš vlastiti motor konačnih elemenata radi ljuske, tetraedre i modalnu analizu. Vidi [Provjerite betonske elemente i napravite seizmička opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutrašnje osvjetljenje (dodatak).** Postavlja svjetiljke i upisuje luks kao brojeve u osnovu svakog nivoa, s procjenom odsjaja i štampanim izvještajem.
- **Panel dokumenata.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima izvlačenje i vraćanje s datotekom zaključavanja, slova revizija, stanja izdanja i historiju.
- **Regije i čelik.** Paketi južnoafričkih crteža i propisa o zgradama u dodatku Propisi, i 976 britanskih veličina čelika u zajedničkoj tabeli profila.
- **Besplatni dodaci za štampu smolom.** Slajser, nosači i sirova podloga, test ekspozicije, i formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni po podrazumijevanju.

## U svim aplikacijama

- Zadržavanje pokazivača na dugme ili kontrolu prikazuje Bootstrap savjet.
- Početni savjet na praznom području crtanja ima dugme za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koji ne stane sada se pomjera umjesto da bude odsječena.
- Kad je dokument otvoren, naslov kartice pregledača glasi „<dokument> - BimCraft | CadCraft“.
- U {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Raspored}} rasporedi su padajuća lista izbora sa dva reda.
- Lista jezika u {{ui:Postavke}} nudi više jezika nego u 0.8; jezici osim engleskog su mašinski nacrti.

## Ispravljeno

- **Pomjeranje radi na stepenicama,** i na rampama, ogradama, ravnima krova, slobodnostojećim uređajima, slikama i stazama.
- **Prevlačenje zida više ne iskrivljuje prostoriju.** Centralni hvatač pomjera zid pod pravim uglom prema sebi, a njegovi uglovi kliznu duž spojenih zidova. Držite {{key:Mod}} za stari slobodni pomak; {{ui:Pod pravim uglom}} vraća 90 stepeni.
- **Promjena debljine ili tipa na spojenom čvoru** sada zadržava ugao zatvorenim na L, T, čvoru od tri zida i uz zakrivljeni zid.
- **Pomjeranje ili kopiranje grupe prostorija** zadržava spojene zidove izvan grupe spojenim.
- **Identitet kote zida se čuva pri ponovnom (redo).**
- **Izbor zida s isključenim Crtanjem** više ne baca grešku u Svojstvima.
- **Renderovanje prelazi na WebGL** kad GPU ne može da se pokrene, umjesto da stane.
- **Provjera EnergyPlus-a se može ponovo uključiti.**
- **Dokumenti se otvaraju kao centriran dijalog.** {{key:Esc}}, X ili klik na zatamnjenu stranicu ga zatvaraju.
- **Dugmad {{ui:Osnova}}, {{ui:Podijeli}} i {{ui:3D}} se prikazuju** čim je model otvoren, a ne tek nakon što je Crtanje bilo uključeno jednom.

## Iskrena ograničenja

- Ništa nije odštampano na pravom hardveru. Smolni nosači su novi i nedokazani.
- Rezultati vjetra, potresa, betona i konačnih elemenata su pomagala za inženjera, provjerena prema zatvorenim formulama, a ne prema pravoj zgradi.
- Procjena osvjetljenja je provjerena prema našem vlastitom praćenju putanje, a ne prema drugim programima za osvjetljenje.
- Južnoafrički brojevi nisu provjereni.
- Jezici osim engleskog su mašinski nacrti.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Ranije promjene su u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u BimCraft-u 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. BimCraft sada može odgovoriti na pitanja o zgradi i testirati je, s ljudima, zvukom, vodom, vjetrom i zemljotresima, i crtati je s više alata; 0.8.1 je izdanje s ispravkama.

### Novo

**Testirajte zgradu**

- **Ljudi u zgradi.** Odjeljak {{ui:Ljudi u zgradi}} lijevog panela vodi evakuaciju ili normalan dan dolazaka kroz vaše prostorije, vrata i stepenice. Vidite redove tamo gdje se zgrada sužava, najduži hod do izlaza iz svake prostorije i koliko dugo traje posljednja osoba. Označite {{ui:Zatvoreno}} na vratima da vidite šta se mijenja, i označite {{ui:Prikaži ljude u 3D prikazu}} da pratite hodače. Nalazi idu u Probleme. Gruba gomila modela za odluke pri projektovanju, a ne certifikat protivpožarne zaštite. Vidi [Provedite ljude kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i slušajte je.** Odjeljak {{ui:Akustika prostorije}} daje vrijeme reverberacije svake prostorije po oktavnim opsezima (Sabine i Eyring) iz njene veličine i završnih obloga koje izaberete, i uz vlastiti cilj kaže koliko bi apsorpcije zadovoljilo. {{ui:Pusti u ovoj prostoriji}} pušta glas, pljesak, trzane tonove ili vašu zvučnu datoteku kroz impulsni odziv izračunat za prostoriju. Vrijednosti apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Vidi [Akustika prostorije](topic:room-acoustics).
- **Reprodukcija poplave, vjetra i zemljotresa.** {{ui:Reprodukcija opasnosti}} pušta vodu koja raste kroz prostorije, pritisak vjetra na svakom spratu i zemljotres koji trese spratove, na osnovi ili izgledu s vremenskim klizačem. Jednostavni modeli s pretpostavkama na panelu; nije provjera propisa. Vidi [Pustite poplavu, vjetar ili zemljotres](topic:hazard-playback).
- **Šta se troši za pedeset godina.** {{ui:Pregled životnog ciklusa}} navodi prozore, vrata, obloge i krov s vijekom trajanja svakog, godine kad se mijenjaju i, kad upišete cijenu po jedinici, trošak po godini i njegovu sadašnju vrijednost. {{ui:Sačuvaj specifikaciju (CSV)}} je izvozi. Vijek trajanja su planske vrijednosti. Vidi [Pogledajte šta se troši tokom pedeset godina](topic:life-cycle-view).
- **Provjere betona i seizmike.** Odjeljci {{ui:Elementi betona}} i {{ui:Seizmička opterećenja}} u kartici {{ui:Analiza}} provjeravaju betonske grede i stubove po ACI 318-19 i prave ekvivalentne bočne sile po ASCE 7-22 na krutim podovima, s pomakom etaže. Za inženjera da provjeri. Vidi [Provjerite betonske elemente i napravite seizmička opterećenja](topic:concrete-and-seismic).

**Provjeravajte i izvještavajte**

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite svaki element koji mu ne odgovara u Problemima, prije nego predate IFC. Otvorite {{ui:Provjeri prema IDS-u}} pod {{ui:Provjere modela}}. Vidi [Provjerite model prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i specifikacije.** Definišite vlastite oznake, postavite ih na mnogo elemenata odjednom i napravite specifikacije čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC-u. Vidi [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} popunjava šablon specifikacije iz otvorenog IFC-a i čuva ga kao PDF, Word dokument ili Markdown. Vidi [Dokumenti iz modela](topic:documents-from-the-model).
- **Uporedite skener s modelom.** Uz otvoren oblak tačaka, {{ui:Uporedi}} procjenjuje svaki element kao izgrađen, djelimično izgrađen, nedostajući ili nedostignut, i pokazuje procenat izgrađenosti. Vidi [Uporedite skener s modelom](topic:compare-scan-with-model).
- **Ugljenik i trošak.** Okno Ugljenik zbraja ugrađeni ugljenik iz tabele faktora koju možete urediti, a okno Trošak raspoređuje cijene kroz 4D raspored. Faktori koji dolaze s BimCraft-om su generički i označeni kao neprovjereni. Vidi [Ugrađeni ugljenik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Mjeri}} › {{ui:Koordinatni sistem…}} prima EPSG broj, UTM zonu, naziv ili vašu vlastitu definiciju projekcije. Vidi [Georeferenciranje s bilo kojom projekcijom](topic:georeference-any-projection).

**Crtajte i uređujte**

- **Pomjeri, poravnaj i raspodijeli.** Pod {{ui:Verzija}}; {{key:Shift+M}} pokreće Pomjeranje (obično {{key:M}} je i dalje Mjerenje). Pomjeranje kopira dok idete s {{key:C}}, svaki korak je jedno poništavanje, i putuje u sesiji Live TeamWork. Vidi [Pomjeranje, kopiranje, poravnavanje i raspodjela](topic:move-align-distribute).
- **Slike ispod osnove.** {{ui:Verzija}} › {{ui:Slika}} postavlja PNG, JPEG ili WebP ispod osnove nivoa ili na vertikalnu ravan. Razmjeru postavite s dvije tačke, i pomjerajte, okrećite, stišavajte i zaključavajte je. Područje kopirano u MarkupCraft-u lijepi se s razmjerom svog lista. Vidi [Stavite sliku ispod osnove](topic:pictures-as-backgrounds).
- **Zidovi iz skena.** S otvorenim skenom, zidovi, vrata i prostorije dolaze kao prijedlozi koje zadržavate ili odbijate jedan po jedan, u jednom koraku poništavanja. Nalaze se samo zidovi u dva okomita smjera. Vidi [Pretvorite sken u zidove](topic:scan-to-walls).
- **Ocrtavanje, olovke i skicirano stepenište.** {{ui:Obrada}} prikazuje drugi nivo isprekidano ispod osnove, {{ui:Olovke}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom pogledu, a {{ui:Skiciraj stepenište}} pretvara linију hodanja u stepenište. Otvara se Wavefront OBJ mreža. Vidi [Ocrtajte nivo, olovke i stepenište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je CivilCraft-ova Adresa u lokaciju pronašla dolaze kao prijedlozi; označite one koje dodajete. Vidi [Počnite od lokacije iz CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Verzija}} › {{ui:Crteži panela}} uokviruje zidove, podove i krovove u drvetu ili lakom čeličnom limu i čuva listu rezanja kao CSV i radioničke crteže kao PDF. Početne vrijednosti, a ne konstrukcijski proračun. Vidi [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Verzija}} › {{ui:Paleta simbola}} pronalazi električne i vodovodne simbole po nazivu; izvor {{ui:Biljke}} u {{ui:Biblioteci}} navodi oko 400 biljaka s simbolima u planu. Vidi [Paleta simbola](topic:symbol-palette) i [Postavite biljku](topic:plant-list).

**Cijevi, kanali i energija**

- **Split, VRF i fan coil.** Unutrašnje i vanjske jedinice s njihovim priključcima, i linijski setovi dimenzionisani iz tabele tipičnih primjernih vrijednosti koje možete mijenjati. Vidi [Split, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Proračuni provjerava dimenzije dovodnih cijevi i kanala s padom pritiska, vodi kablove kroz trase i cijevi i pokazuje njihovo punjenje, i računa osvijetljenost iz IES ili EULUMDAT datoteka. Podrazumijevane vrijednosti su označene; upišite vrijednosti vašeg propisa. Vidi [Proračuni cijevi, kanala, kablova i svjetla](topic:mep-calculations).
- **PCF datoteke.** {{ui:Izvezi PCF}} alata Cijev piše vodove za programe za naprezanje cijevi i izometrije, a PCF datoteka pročitana natrag crta njenu cijev. Vidi [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili tlo, zasjenite ih iz modela, procijenite godišnju energiju, provjerite stringove i napravite podatke jednopolnog dijagrama. Početni modul i gubici su generički. Vidi [Solarni PV](topic:solar-pv).
- **EnergyPlus datoteka.** Okno Provjera s EnergyPlus-om piše model kao IDF za pokretanje u vašem EnergyPlus-u. Pokretanje u pregledaču treba build koji sami hostujete i upišete njegovu adresu; BimCraft ga ne nosi. Vidi [Provjerite grijanje i hlađenje s EnergyPlus-om](topic:check-with-energyplus).

**Slike i datoteke**

- **Izaberite render motor.** {{ui:Renderuj}} ima izbor {{ui:Motor}}. Naša dva ugrađena motora (Brzi i Praćač putanje) ostaju podrazumijevana. **Otvori u** čuva scenu kao USD ili glTF datoteku, a folder Unreal projekta kao .zip; u CadCraft Studio dodatak može dodati motor. Unreal dodatak koji otvara projekat nije objavljen. Vidi [Izaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** Unutar CadCraft Studio, BimCraft javlja Studiju svaki završeni korak da Studio može poništiti vaš zadnji korak u onom prozoru koji ste zadnji koristili. Vidi [Poništavanje preko aplikacija](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koji su dodaci u njega pisali i nudi one koje nemate kad ga otvorite. Vidi [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svim aplikacijama**

- **Povežite svoju AI.** Vaš vlastiti pomoćnik može upravljati BimCraft-om preko Studijeve veze i odgovarati na pitanja o modelu, kao koje prostorije su ispod date površine. Studio nema vlastitu AI. Vidi [Pustite AI pomoćnika da radi s vašim modelom](topic:assistants).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Prelom, 2 reda ili 1 red; Prelom ostaje podrazumijevan.
- **Ulazni uređaji.** Postavke trackpada, olovke, 3D miša, kontrolera i MIDI-ja dijele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i Live sesije rade kao prije, s novim provjerama iznad koje napajaju Probleme.
- **Jezici.** 54 jezika, deset od njih novo. Oni osim engleskog su mašinski nacrti koje izvorni govornik još nije pročitao; teme pomoći su uglavnom na engleskom.

### Ispravljeno u 0.8.1

- **Raspored trake + pregled projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljaj › Jedinice projekta govorili su „Još nije napravljeno u BimCraft-u“. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Verzija}} › {{ui:Iz crteža…}} (DWG, DXF, PDF ili sken), a Jedinice projekta otvaraju {{ui:Postavke}} › {{ui:Globalno}} › {{ui:Jedinice}}. Pomjeri i Poravnaj pokreću alate Pomjeri i Poravnaj, Nivo otvara {{ui:Dodaj nivoe…}}, Faze otvara odjeljak Faze obnove, a Materijali otvara biblioteku materijala.
- **Odjeljak DWG klasa.** Bio je pročitan kao pogrešan tip; ispravljeno u BimCraft-u i drugim aplikacijama koje čitaju DWG.
- **Jezik za vrijeme rada.** Studio i spakovana izdanja sada mogu promijeniti jezik bez ponovnog pokretanja. Ovo još nije testirano na svakoj platformi; javite nam ako se jezik ne promijeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi Archicad-ovu putanju, gleda folder do 20 sekundi i ponavlja pokušaj pored paketa.

### Još nije u ovoj verziji

- **Sigurnosna i projektantska pomagala.** Ljudi u zgradi nemaju ograničenje dužine puta iz građevinskog propisa (vi ga upišete) i nisu ručno provjereni na pravom planu. Vrijednosti za akustiku, životni ciklus i opasnosti su planske vrijednosti, a ne provjera propisa.
- **Klimatske budućnosti i EnergyPlus.** Nema ugrađenih klimatskih budućnosti: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledaču nije dio ovog izdanja.
- **Raspored trake.** Materijalni obračun ostaje „Nije napravljeno“ jer BimCraft nema listu količina materijala, a 54 druga zasivljena alata trake još nemaju alat BimCraft-a iza sebe.
- **Potpisivanje i platforme.** Windows instalateri i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Otvori}}. Build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Stvarni testovi stranica.** Neki stariji testovi BimCraft-a u pregledaču i dalje padaju na našoj test stranici, kao i prije 0.8.1.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet). Ranije promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
