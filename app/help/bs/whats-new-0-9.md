---
title: Novo u 0.9 (ranije)
summary: Oblici zidova, podjela, pomak, rastezanje i zaključavanje za mrežu, nivoi ispod zemlje, kote mreže i Mjeri na planu, dupli pogledi sa radnim stilovima i tabelama olovaka, Prijavi kao, izvoz u Collada i za Google Earth, Skeniranje u BIM, analiza vjetra i potresa, dodaci za štampu smolom.
keywords: novo 0.9, ranija verzija, novo, 0.9, bilješke o izdanju, oblici zidova, pravougaonik, poligon, luk, odabir linija, obris podloge, pomak, spoj, rastezanje okvirom, poravnaj i zaključaj, podijeli zid, razmak, spoji ponovo, zaključaj za mrežu, raste od, mjeri od, dodaj nivo ispod, podrum, naredba nivo, kote mreže, mjeri na planu, radni stil, dupli pogled, vlastita kopija, povezani pogled, tabela olovaka, štampaj kako je prikazano, prijavi kao, upiši razmjeru, uvezi svg, postavi u plan, postavi u model, collada, dae, kmz, google earth, skeniranje u bim, opterećenje vjetrom, seizmika, konačni elementi, panel dokumenata, štampa smolom, što je novo, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, evakuacija, ljudi, gužve, akustika, reverberacija, impulsni odgovor, poplava, vjetar, zemljotres, opasnost, životni ciklus, vijek trajanja, ids, oznake, specifikacije, pomjeri, poravnaj, raspodijeli, slika, pozadina, skeniranje u zidove, lokacija iz CivilCraft-a, crteži panela, okvir, solar, pv, podijeli, vrf, fan coil, dimenzionisanje cijevi, kablovska trasa, osvjetljenje, beton, seizmika, uporedi skeniranje, epsg, projekcija, dokumenti, šablon, ugljik, trošak, energyplus, motor renderovanja, otvori u, usd, glb, unreal, poništi, dodaci, pcf, simboli, biljke, podloga, olovke, traka, pregledač projekta, raspored
from: 816df7f8
---

Ovo je ono što se promijenilo u BimCraft 0.9, u odnosu na 0.8.1. Dvije glavne teme su pravi alat za zidove i pogledi koji se ponašaju onako kako ljudi iz velikih BIM programa očekuju. Uz njih dolaze izvoz u Collada, asistenti koji mogu postavljati električne uređaje, Skeniranje u BIM, te analiza vjetra, potresa i konačnih elemenata na kartici {{ui:Analysis}}.

## Novo

### Zidovi

- **Crtajte cijele oblike.** U {{ui:Draw}}, otvorite {{ui:Shapes}} (ili izaberite oblik u listi Oblik u redu Zid) za pravougaonik, zarotirani pravougaonik, poligon sa 3 do 64 strane, luk po centru, tangentni luk, zidove na odabranim linijama ili zidove oko zatvorene površine na koju kliknete unutra. Pravougaonik su četiri zida sa četiri spojena ugla i jednim korakom poništavanja. Pogledajte [Oblici zidova, podjela, pomak, rastezanje i zaključavanje](topic:wall-tools).
- **Postavite prije crtanja, mijenjajte poslije.** Red Zid ima {{ui:Offset}} i {{ui:Join}} (odznačite da nacrtate slobodne zidove). Poslije koristite {{ui:Offset}}, {{ui:Box stretch}} i {{ui:Align and lock}} na nacrtanim zidovima. Pomjereni ili rastegnuti zid zadržava svoja vrata, prozore i kote. Svaki recept je jedan korak poništavanja.
- **Presijecajte zidove.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} i {{ui:Rejoin}} presijecaju zid jednim klikom ili tamo gdje ga drugi zid siječe. Presijecanje kroz vrata je odbijeno. Pogledajte [Oblici zidova, podjela, pomak, rastezanje i zaključavanje](topic:wall-tools).
- **Zaključajte zidove za linije mreže.** Odaberite zid uz liniju mreže i označite {{ui:Lock to grid}} u {{ui:Properties}}. Sa uključenim alatom {{ui:Grid}}, upišite razdaljinu u {{ui:Move by}} za odabranu liniju, a zaključani zidovi slijede u jednom koraku poništavanja.
- **Oblikujte jedan zid.** U {{ui:Properties}} jednog zida možete vezati njegov vrh ili dno za krov, pod ili plafon, urediti njegov obris visine, nagnuti ga ili napraviti otvor u zidu bez vrata ili prozora. Pogledajte [Oblik zida](topic:wall-shape).
- **Dužina pokazuje koji kraj ostaje.** {{ui:Grow from}} određuje hoće li početak, kraj ili sredina ostati na mjestu kada mijenjate dužinu.
- **Dužina i kota na planu se slažu.** {{ui:Measure from}} (osna linija, unutrašnja ili vanjska strana) upravlja i poljem Dužina i kotama zidova na planu. Počinje od osne linije, pa sada kote zidova na planu pokazuju osnu liniju tamo gdje su ranije pokazivale vanjsku stranu. Promijenite je u redu Zid, u {{ui:Properties}} ili u {{ui:Settings}} › BimCraft › {{ui:Walls}}.

### Nivoi, mreže i mjerenje

- **Dodajte nivo ispod.** {{ui:Add a level below}} u panelu {{ui:Levels}} dodaje nivo ispod najnižeg, jednako visok kao on, na negativnoj koti (Nivo -1, Nivo -2). Ništa drugo se ne pomjera. {{ui:Add levels…}} sada prihvata negativne visine. Ako u naredbenoj liniji ukucate LEVEL, LEVELS, STOREY ili STOREYS, otvara se {{ui:Add levels…}}, a u menijima i karticama trake postoji dugme {{ui:Levels}}. Pogledajte [Lokacije, zgrade i nivoi](topic:site-building-and-levels).
- **Kote mreže na planu.** Sa uključenim alatom {{ui:Grid}}, označite {{ui:Dimensions}} da nacrtate razmak između susjednih linija i ukupnu veličinu iza krugova na planu svakog nivoa. Pogledajte [Kotiranje mreže](topic:grid-dimensions).
- **Mjerenje na planu.** {{ui:Measure}} u grupi {{ui:Draw}} daje razdaljinu sa razlikama X i Y između dva klika. Ništa se ne čuva u modelu. Pogledajte [Mjerenje na planu](topic:measure-on-the-plan).
- **Promijenite više stubova odjednom.** Odaberite stubove zajedno sa zidom, a lista svaku vrstu prikazuje uz {{ui:Keep only these}}. Jedan klik zadržava stubove i prikazuje njihova zajednička polja.
- **Jedna jedinica prikaza svuda.** Koordinate, mjere, presjeci, razmjere listova, opterećenja i rezultati kartice okvira te tekst panela Problemi prate jedinicu koju izaberete. Izvozi ostaju u SI.

### Pogledi, listovi i štampa

- **Radni stil.** {{ui:Settings}} › BimCraft › {{ui:Working style}} bira između toga da svaki pogled ima svoje anotacije i tabele olovaka ili da ih dijeli. Pogledajte [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Dupliranje pogleda.** Osnove, plafonske osnove, pozivi, izgledi i presjeci mogu se duplirati kao {{ui:Own copy}} ili {{ui:Linked}}; {{ui:Make own copy}} čini povezani pogled nezavisnim. Pogledajte [Radni stil, dupli pogledi, olovke na papiru, Prijavi kao i šabloni](topic:working-style).
- **Štampanje kako je prikazano ili kroz tabelu olovaka.** Prepisi olovaka čuvaju se u IFC-u uz pogled, a listovi i PDF-ovi ih crtaju kao što ih prikazuje ekran. Ista tema pokriva tabele olovaka.
- **Prijavi kao.** {{ui:Report as}} u {{ui:Properties}} zapisuje ploču nacrtanu kao cestu, zid kao panel ili krov kao rampu u IFC kao klasu koju izaberete, i broji je tako u specifikacijama, Količinama, {{ui:Find}}, Boji po i Problemima.
- **Uređivanje u izgledima i presjecima.** Crtajte i pomjerajte zidove, otvore, nivoe, kote i napomene direktno u izgledu ili presjeku, sa vašim veličinama listova i naslovnim blokovima. Pogledajte [Uređivanje u izgledima i presjecima](topic:edit-in-elevations).
- **Listovi.** Svaki list može biti položen ili uspravan. Polje {{ui:Type a scale}} stoji pored liste razmjera na svakom postavljenom pogledu (1:64, 2:1, 1/4" = 1'). Postavljeni crtež možete prevući ili pomjeriti strelicama, a {{ui:Formats…}} › {{ui:Import SVG…}} pretvara vaš vlastiti dizajn lista u naslovni blok sa poljima upisanim po listu.
- **Zasluge biblioteke na listu.** Set crteža sa stavkama biblioteke dobija specifikaciju Zasluge biblioteke koju možete postaviti na bilo koji list. Pogledajte [Zasluge biblioteke](topic:library-credits).

### Biblioteka: postavljanje

- **Postavljanje prati pogled.** U pogledu {{ui:Plan}}, {{ui:Library}} prikazuje {{ui:Place in plan}}; u {{ui:3D}} prikazuje {{ui:Place in model}}; u prikazu {{ui:Split}} prikazuje dugme sa podjelom i {{ui:Place in plan}} kao glavnu radnju. Oba načina upisuju isti IFC element. Karticu iz Biblioteke možete prevući na plan ili 3D pogled; perom ili prstom pritisnite i držite, pa prevucite. Pogledajte [Postavljanje iz Biblioteke](topic:place-from-library).

### Datoteke i asistenti

- **Collada i Google Earth.** {{ui:Collada}} na alatnoj traci (meni {{ui:File}} u stilovima menija) zapisuje .dae, ili .kmz postavljen tamo gdje je model na karti. Pogledajte [Izvoz modela kao Collada ili za Google Earth](topic:collada).
- **Asistenti mogu postavljati električne uređaje.** Vaš povezani asistent ima nove alate za dodavanje, popis, promjenu i brisanje uređaja i za podešavanje svjetala. Asistenti ostaju isključeni dok ih ne uključite u {{ui:Settings}}. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Skeniranje u BIM (dodatak).** Isključeno je po defaultu i treba dodatak Oblaci tačaka. Predlaže podove, zidove, vrata i prozore iz skeniranja, sa izmjerenim odstupanjem za svaki; prihvatanje je jedan korak poništavanja.

### Analiza

- **Podaci o lokaciji za vjetar i potres.** Na kartici {{ui:Analysis}}: opterećenja vjetrom po ASCE 7-10 ili 7-16 za krutu zatvorenu zgradu, sa silom na svakom spratu kao slučajevima opterećenja, i podaci o seizmičkoj lokaciji sa pretragom USGS i projektnim spektrom.
- **Dalje konstrukcijske provjere i konačni elementi.** Provjere betona po ACI 318-19, ekvivalentne bočne sile po ASCE 7-22, međuspratni pomak, ploče i zidovi kao ploče, te kombinacije opterećenja iz ASCE 7 i EN 1990. Naš vlastiti motor konačnih elemenata radi s ljuskama, tetraedrima i modalnom analizom. Pogledajte [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic) i [Analiza okvira](topic:frame-analysis).

### Ostali dodaci i dokumenti

- **Unutrašnje osvjetljenje (dodatak).** Postavlja svjetiljke i upisuje lux kao brojeve u plan svakog nivoa, sa procjenom odsjaja i štampanim izvještajem.
- **Panel dokumenata.** {{ui:File}} › {{ui:Dokumenti…}} ima preuzimanje i vraćanje uz datoteku zaključavanja, slova revizija, stanja izdanja i historiju.
- **Propisi i čelik.** Paketi južnoafričkih crteža i propisa o gradnji u dodatku Propisi, i 976 britanskih čeličnih dimenzija u zajedničkoj tabeli presjeka.
- **Besplatni dodaci za štampu smolom.** Slajser, oslonci i podloga, test ekspozicije, te formati datoteka GOO, SL1, Chitubox i Anycubic, svi isključeni po defaultu.

## U svim aplikacijama

- Zadržavanje pokazivača na dugmetu ili kontroli prikazuje Bootstrap savjet.
- Početni savjet na praznom crtežu ima dugme za zatvaranje; BimCraft pamti da je zatvoren.
- Traka kartica panela koja ne stane sada se pomjera umjesto da bude odsječena.
- Kada je dokument otvoren, kartica pregledača glasi „<document> - BimCraft | CadCraft“.
- U {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} rasporedi su padajuća lista izbora u dva reda.
- Lista jezika u {{ui:Settings}} nudi više jezika nego u 0.8; jezici osim engleskog su mašinski nacrti.

## Ispravljeno

- **Pomjeranje radi na stepeništima**, te na rampama, ogradama, ravnima krova, samostojećim uređajima, slikama i stazama.
- **Prevlačenje zida više ne iskrivljuje prostoriju.** Srednja ručka pomjera zid okomito na sebe, a njegovi uglovi kližu duž spojenih zidova. Držite {{key:Mod}} za stari slobodni pomak; {{ui:Square up}} vraća 90 stepeni.
- **Promjena debljine ili tipa na spojenom čvoru** sada zadržava ugao zatvorenim kod slova L, T, čvora sa tri zida i pored zakrivljenog zida.
- **Pomjeranje ili kopiranje grupe prostorija** zadržava spojene zidove izvan grupe spojenim.
- **Ponovo čuva identitet kote zida.**
- **Odabir zida sa isključenim {{ui:Draw}}** više ne izaziva grešku u {{ui:Properties}}.
- **Renderovanje prelazi na WebGL** kada GPU ne može da se pokrene, umjesto da stane.
- **Provjera EnergyPlus-a može se ponovo uključiti.**
- **Dokumenti se otvaraju kao centrirani dijalog.** {{key:Esc}}, X ili klik na zatamnjenu stranicu ga zatvara.
- **Dugmad {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} prikazuju se** čim je model otvoren, a ne tek nakon što je {{ui:Draw}} jednom uključeno.

## Iskrena ograničenja

- Ništa nije štampano na pravom hardveru. Oslonci za smolu su novi i nedokazani.
- Rezultati vjetra, seizmike, betona i konačnih elemenata su pomoćna sredstva za provjeru inženjera, provjerena prema zatvorenim formulama, a ne prema pravoj zgradi.
- Skeniranje u BIM je testirano na sintetičkoj zgradi, a ne na pravom skeniranju, i nalazi samo pravougaone prostorije.
- Collada nije otvorena ovdje u Blenderu ili Google Earthu.
- Procjena osvjetljenja je provjerena prema našem vlastitom tragu, a ne prema drugim programima za osvjetljenje.
- Južnoafričke brojke nisu provjerene.
- Stilovi spajanja zidova (sučeono, pod uglom, pravo odsjecanje) i prioritet slojeva nisu urađeni; uglovi su spojeni pod uglom.
- Jezici osim engleskog su mašinski nacrti.

Sve ostalo je u [Šta još nije urađeno](topic:not-built-yet). Ranije promjene su u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), u odnosu na 0.7. BimCraft sada može odgovarati na pitanja o zgradi i testirati je, sa ljudima, zvukom, vodom, vjetrom i zemljotresima, te je crtati sa više alata; 0.8.1 je izdanje sa ispravkama.

### Novo

**Testirajte zgradu**

- **Ljudi u zgradi.** Odjeljak {{ui:People in the building}} lijevog panela vodi evakuaciju ili normalan dan dolazaka kroz vaše prostorije, vrata i stepeništa. Vidite gužve tamo gdje se zgrada sužava, najdužu šetnju do izlaza iz svake prostorije i koliko dugo traje posljednja osoba. Označite {{ui:Shut}} na vratima da vidite šta se mijenja, i označite {{ui:Show the people in the 3D view}} da pratite šetače. Nalazi idu u Problemi. Gruba gomila za odluke o dizajnu, a ne potvrda o protivpožarnoj sigurnosti. Pogledajte [Vođenje ljudi kroz zgradu](topic:people-in-the-building).
- **Akustika prostorija, i slušanje.** Odjeljak {{ui:Room acoustics}} daje vrijeme reverberacije svake prostorije po oktavnim pojasevima (Sabine i Eyring) iz njene veličine i završnih obrada koje izaberete, a sa vašim ciljem kaže koliko apsorpcije bi zadovoljilo. {{ui:Play it in this room}} pušta glas, pljesak, trzane tonove ili vaš zvučni zapis kroz impulsni odgovor izračunat za prostoriju. Vrijednosti apsorpcije su tipične objavljene vrijednosti koje možete zamijeniti. Pogledajte [Akustika prostorija](topic:room-acoustics).
- **Reprodukcija poplave, vjetra i zemljotresa.** {{ui:Hazard playback}} pušta vodu koja raste kroz prostorije, pritisak vjetra na svakom spratu i zemljotres koji trese spratove, na planu ili izgledu, sa klizačem vremena. Jednostavni modeli sa pretpostavkama na panelu; nije provjera propisa. Pogledajte [Pustite poplavu, vjetar ili zemljotres](topic:hazard-playback).
- **Šta se troši za pedeset godina.** {{ui:Life-cycle view}} navodi prozore, vrata, završne obrade i krov sa vijekom trajanja svakog, godine kada se zamjenjuju i, kada upišete cijenu po jedinici, trošak po godini i njegovu sadašnju vrijednost. {{ui:Save the schedule (CSV)}} ga zapisuje. Vijek trajanja su planske brojke. Pogledajte [Pogledajte šta se troši tokom pedeset godina](topic:life-cycle-view).
- **Provjere betona i seizmike.** Blokovi {{ui:Concrete members}} i {{ui:Seismic loads}} kartice {{ui:Analysis}} provjeravaju betonske grede i stubove po ACI 318-19 i računaju ekvivalentne bočne sile po ASCE 7-22 na krutim podovima, sa međuspratnim pomakom. Za provjeru inženjera. Pogledajte [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic).

**Provjera i izvještavanje**

- **Provjera prema IDS-u.** Učitajte `.ids` datoteku koju vam je dao klijent i vidite svaki element koji mu ne odgovara u Problemima, prije nego isporučite IFC. Otvorite {{ui:Check against an IDS}} pod {{ui:Model checks}}. Pogledajte [Provjera modela prema IDS-u klijenta](topic:check-against-ids).
- **Oznake i specifikacije.** Definišite vlastite oznake, postavite ih na mnogo elemenata odjednom i pravite specifikacije čije kolone, filteri i grupe ih čitaju; oznake se čuvaju u IFC-u. Pogledajte [Oznake i specifikacije](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Documents from the model}} popunjava šablon specifikacije iz otvorenog IFC-a i čuva ga kao PDF, Word dokument ili Markdown. Pogledajte [Dokumenti iz modela](topic:documents-from-the-model).
- **Uporedite skeniranje sa modelom.** Sa otvorenim oblakom tačaka, {{ui:Compare}} ocjenjuje svaki element kao izgrađen, djelimično izgrađen, nedostajući ili nedostignut, i prikazuje procenat izgrađenog. Pogledajte [Uporedi skeniranje sa modelom](topic:compare-scan-with-model).
- **Ugljik i trošak.** Okno Ugljik zbraja ugljenik ugrađenih materijala iz tabele faktora koju možete uređivati, a okno Trošak raspoređuje cijene po 4D rasporedu. Faktori koji dolaze uz BimCraft su generički i označeni kao neprovjereni. Pogledajte [Ugrađeni ugljik i trošak](topic:embodied-carbon-and-5d-cost).
- **Bilo koja kartografska projekcija.** {{ui:Measure}} › {{ui:Coordinate system…}} prima EPSG broj, UTM zonu, naziv ili vašu vlastitu definiciju projekcije. Pogledajte [Georeferenciranje sa bilo kojom projekcijom](topic:georeference-any-projection).

**Crtanje i uređivanje**

- **Pomjeri, poravnaj i raspodijeli.** Pod {{ui:Build}}; {{key:Shift+M}} pokreće Pomjeri ({{key:M}} je i dalje {{ui:Measure}}). Pomjeranje kopira dok idete uz {{key:C}}, svaki korak je jedno poništavanje, i radi u Live TeamWork sesiji. Pogledajte [Pomjeranje, kopiranje, poravnanje i raspodjela](topic:move-align-distribute).
- **Slike ispod plana.** {{ui:Build}} › {{ui:Picture}} postavlja PNG, JPEG ili WebP ispod plana nivoa ili na vertikalnoj ravni. Postavite razmjeru sa dvije tačke, pa pomjerajte, okrećite, prigušite i zaključajte je. Područje kopirano u MarkupCraft-u lijepi se sa razmjerom svog lista. Pogledajte [Stavljanje slike ispod plana](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** Sa otvorenim skeniranjem, zidovi, vrata i prostorije dolaze kao prijedlozi koje zadržavate ili odbacujete jedan po jedan, u jednom koraku poništavanja. Nalaze se samo zidovi u dva okomita pravca. Pogledajte [Pretvaranje skeniranja u zidove](topic:scan-to-walls).
- **Podloga, olovke i skica stepeništa.** {{ui:Trace}} prikazuje drugi nivo isprekidano ispod plana, {{ui:Pens}} daje zidovima, vratima i prozorima vlastitu debljinu linije u jednom pogledu, a {{ui:Sketch stair}} pretvara liniju hodanja u stepenište. Otvara se Wavefront OBJ mreža. Pogledajte [Podloga nivoa, olovke i stepenište iz skice](topic:trace-pens-stairs-obj).
- **Zgrade oko adrese.** Zgrade i parcela koje je pronašla CivilCraft-ova Adresa u lokaciju stižu kao prijedlozi; označite one koje dodajete. Pogledajte [Početak iz lokacije CivilCraft-a](topic:site-from-civilcraft).
- **Crteži panela.** {{ui:Build}} › {{ui:Panel drawings}} uokviruje zidove, podove i krovove u drvetu ili lakom čeličnom profilu i čuva listu rezanja kao CSV i radioničke crteže kao PDF. Početne vrijednosti, a ne konstrukcijski dizajn. Pogledajte [Crteži panela](topic:panel-drawings).
- **Paleta simbola i biljke.** {{ui:Build}} › {{ui:Symbol palette}} pronalazi električne i vodovodne simbole po nazivu; izvor {{ui:Plants}} iz {{ui:Library}} navodi oko 400 biljaka sa simbolima za plan. Pogledajte [Paleta simbola](topic:symbol-palette) i [Postavljanje biljke](topic:plant-list).

**Cijevi, kanali i energija**

- **Split, VRF i fan coil.** Unutrašnje i vanjske jedinice sa njihovim priključcima, a kompleti vodova dimenzionisani iz tabele tipičnih primjera koje možete mijenjati. Pogledajte [Split, VRF i fan coil](topic:split-vrf-fan-coils).
- **Proračuni.** Okno Proračuni provjerava veličine dovodnih cijevi i kanala sa padom pritiska, provodi kablove kroz trase i kanale i prikazuje njihovu ispunjenost, te računa osvjetljenje iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti vašeg propisa. Pogledajte [Proračuni cijevi, kanala, kablova i svjetla](topic:mep-calculations).
- **PCF datoteke.** **Izvezi PCF** alata za cijevi zapisuje vodove za programe za naprezanje cijevi i izometrijske crteže, a PCF datoteka pročitana nazad crta njenu cijev. Pogledajte [Datoteke komponenti cijevi](topic:piping-pcf).
- **Solarni PV.** Postavite nizove na krovove ili tlo, zasjenite ih iz modela, procijenite godišnju energiju, provjerite stringove i napravite podatke za jednolinijski dijagram. Početni modul i gubici su generički. Pogledajte [Solarni PV](topic:solar-pv).
- **EnergyPlus datoteka.** Okno Provjera sa EnergyPlus-om zapisuje model kao IDF za pokretanje u vašem EnergyPlus-u. Pokretanje u pregledaču traži build koji sami hostujete i čiju adresu upišete; BimCraft ga ne nosi. Pogledajte [Provjera grijanja i hlađenja sa EnergyPlus-om](topic:check-with-energyplus).

**Slike i datoteke**

- **Izaberite motor renderovanja.** {{ui:Render}} ima izbor {{ui:Engine}}. Naša dva ugrađena motora (Brzi i Praćenje zraka) ostaju zadana. **Otvori u** čuva scenu kao USD ili glTF datoteku, a projektni folder Unreal-a kao .zip; u CadCraft Studiju dodatak može dodati motor. Unreal dodatak koji otvara projekat nije objavljen. Pogledajte [Izaberite koji program crta sliku](topic:render-engines).
- **Poništavanje u Studiju.** U CadCraft Studiju BimCraft javlja Studiju svaki završeni korak, da Studio može poništiti vaš posljednji korak u onom prozoru u kojem ste zadnje radili. Pogledajte [Poništavanje kroz aplikacije](topic:undo-across-apps).
- **Dodaci u vašoj datoteci.** IFC bilježi koje su dodatke pisali u njega i nudi one koje nemate kada ga otvorite. Pogledajte [Dodaci u vašoj datoteci](topic:add-ons-in-your-file).

**U svim aplikacijama**

- **Povežite vaš AI.** Vaš vlastiti asistent može upravljati BimCraft-om preko Studijeve veze i odgovarati na pitanja o modelu, na primjer koje su prostorije ispod date površine. Studio nema vlastitu AI. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Redovi alatne trake.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} nudi Prelom, 2 reda ili 1 red; Prelom ostaje zadan.
- **Ulazni uređaji.** Postavke za touchpad, olovku, 3D miš, kontroler i MIDI dijele sve aplikacije.
- **Problemi i Live.** Panel upozorenja i Live sesije rade kao i ranije, a nove provjere iznad ulaze u Problemi.
- **Jezici.** 54 jezika, deset od njih novo. Oni osim engleskog su mašinski nacrti koje nije pročitao izvorni govornik; teme pomoći su uglavnom na engleskom.

### Ispravljeno u 0.8.1

- **Izgled trake + Pregledač projekta.** Umetni › Uvezi CAD, Umetni › Slika i Upravljaj › Jedinice projekta govorili su „Još nije urađeno u BimCraft-u“. Slika sada otvara alat Slika, Uvezi CAD otvara {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF ili skeniranje), a Jedinice projekta otvaraju {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Pomjeri i Poravnaj pokreću alate Pomjeri i Poravnaj, Nivo otvara {{ui:Add levels…}}, Faze otvara odjeljak Faze renoviranja, a Materijali otvara biblioteku materijala.
- **Odjeljak DWG klase.** Čitan je kao pogrešan tip; ispravljeno u BimCraft-u i drugim aplikacijama koje čitaju DWG.
- **Jezik u toku rada.** Studio i zapakovana izdanja sada mogu promijeniti jezik bez ponovnog pokretanja. Nije još testirano na svim platformama; javite nam ako se jezik ne promijeni.
- **Skripta za Archicad paket.** `archicad_bundle.py`, zasebno preuzimanje, sada pronalazi Archicad-ovu putanju, prati folder do 20 sekundi i ponavlja pokušaj pored paketa.

### Još nije u ovoj verziji

- **Pomagala za sigurnost i dizajn.** Ljudi u zgradi nema ograničenje putne razdaljine iz propisa o zgradi (vi upisujete ograničenje) i nije ručno provjereno na pravom planu. Brojke za akustiku, životni ciklus i opasnosti su planske vrijednosti, a ne provjera propisa.
- **Klimatske budućnosti i EnergyPlus.** Nema ugrađenih klimatskih budućnosti: možete učitati datoteku scenarija za pokretanje poplave. Pokretanje EnergyPlus-a u pregledaču nije dio ovog izdanja.
- **Izgled trake.** Predmjer materijala ostaje „Nije urađeno“ jer BimCraft nema listu količina materijala, a 54 druga zasivljena alata trake nemaju još BimCraft alat iza sebe.
- **Potpisivanje i platforme.** Windows instalateri i macOS .dmg nisu potpisani, pa SmartScreen prikazuje {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}, a macOS traži desni klik pa {{ui:Open}}. Build za iPad i iPhone nije ponovo napravljen za 0.8.1.
- **Testovi stvarnih stranica.** Neki stariji testovi BimCraft pregledača i dalje padaju na našoj test stranici, kao i prije 0.8.1.

Sve ostalo je u [Šta još nije urađeno](topic:not-built-yet). Ranije promjene su u [Novo u 0.7](topic:whats-new-0-7).
