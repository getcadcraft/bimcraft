---
title: Šta je novo u 0.7 (ranije)
summary: BimCraft dodaje zidove kroz više nivoa i Kopiraj ovaj nivo, zidove iz PDF-ova i skenova, vlastite sklopove zidova, bogatije familije, MEP opremu s priključcima, skupove sudara, otvore i spulove cijevi, dokumente za imovinu, COBie i očitavanja senzora, nebo, sunce, dnevnu svjetlost na mreži i opterećenja grijanjem i hlađenjem, registraciju skenova, živi pregled i praćenje putanje na grafičkoj kartici, STEP i USD, varijante iz biblioteke i još za AI pomoćnike.
keywords: šta je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, zidovi kroz nivoe, kopiraj ovaj nivo, pdf, sken, obrada, zidovi iz planova, sklopovi zidova, slojevi, jezgro, membrana, referentne kote, biblioteka materijala, jedinice prikaza, stil prikaza, konstrukcija, grede, familije, parametri, simbol u planu, žarišne tačke, ponavljanje, nivo detalja, ugniježdene familije, csv veličine, po elementu, oprema, priključci, veze, razmaci, otvori, spulovi, listovi spula, varenje na terenu, lista rezanja kanala, dokumenti, cobie, senzori, mqtt, živi tok, vertikalna komponenta neba, solarni dobitak, dnevna mreža, grijanje, hlađenje, opterećenja, u-vrijednost, registracija skenova, icp, e57, živi pregled, praćenje putanje, webgpu, odšumljavanje, fizičko nebo, miješanje svjetla, red za renderovanje, vaš računar, step, usd, paket projekta, razvoj mase, varijante, pomoćnici, api dodataka, biljka, električno, provjere projekta
from: ef226539
---

Ovo je ono što se promijenilo u BimCraft-u 0.7, u odnosu na 0.6. Spisak je grupisan po oblastima, s najvažnijim prvim.

## Novo

### Crtanje zgrade

- **Zidovi kroz više nivoa.** Lista visina alata Zid nudi **Do** bilo kojeg nivoa višeg od ovog, kao što to radi Svojstva za izabrani zid. Osnove nivoa između prikazuju zid svjetlijim, prostorije se tamo zatvaraju uz njega, a vrata i prozori se mogu postaviti u njega s tih osnova; **Prolazi kroz** u Svojstvima navodi nivoe kroz koje prolazi. Vidi [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovaj nivo.** {{ui:Kopiraj ovaj nivo…}} u panelu Nivoi ponovo crta zidove nivoa s njihovim vratima i prozorima, njegove podove i plafone na drugom nivou ili na novom nivou iznad, u jednom koraku poništavanja; prostorije se pojavljuju same. Vidi [Nacrtajte zidove](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skena.** {{ui:Verzija}} › {{ui:Iz crteža…}} sada prima PDF (linijski crtež ili sken unutar njega) ili skenirani plan (PNG, JPEG, TIFF, više stranica): svaka stranica postaje zidovi, vrata, prozori i prostorije jednog nivoa, sa stranicom sačuvanom ispod njene osnove. Obrada ne koristi mrežu niti obučeni model, a rezultat je ono što su linije dale: provjerite svaki nivo prema njegovoj stranici. Vidi [Zidovi iz skupa planova](topic:walls-from-plans).
- **Vlastiti sklopovi zidova.** {{ui:Sklopovi zidova…}} gradi tip zida sloj po sloj, s jezgrom, zračnim razmacima i membranama, i prikazom s kotama; {{ui:Biblioteka materijala…}} čuva materijale projekta u IFC-u; {{ui:Anotiraj}} › {{ui:Referentna kota}} mjeri do lica i linija jezgra i prati zidove kad se promijene. Od doprinosioca iz zajednice, Doc (drsurfbum). Vidi [Sklopovi zidova i referentne kote](topic:wall-assemblies).
- **Jedinice prikaza i kontrole pogleda.** {{ui:Jedinice}} na traci alata prikazuje dužine u stopama i inčima, inčima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, specifikacijama, koordinatama, mjerenjima i presjecima. {{ui:Osnova}}, {{ui:Podijeli}} i {{ui:3D}} su na traci alata, podjela se može povući (ili pomjeriti s tastature), {{ui:Senčeno}}, {{ui:Ivice}} i {{ui:Žičani model}} su uz kocku pogleda, a nagib krova, obrub i podstrešje mijenjaju izabrani krov odmah. Od doprinosioca iz zajednice, Joel (yisraelk). Vidi [Nacrtajte zidove](topic:draw-walls#levels).
- **Podne grede po rasponu.** {{ui:Konstrukcija}} može postaviti projektovane grede (preliminarno), kao i rezanu građu, birajući najmanju navedenu seriju i visinu koja pokriva raspon, 16" ili 24" od centra, u bilo kojem smjeru; idu u IFC i listu rezanja. Prijedlog iz objavljene tabele proizvođača, a ne proračun. Također od Joel-a. Vidi [Konstrukcija zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Električno}} dodaje utičnice za podatke, telefon i audio-video, birač prekidača, tajmer, termostat, detektore dima i toplote, stanicu za paljenje alarma i sirenu, ventilator, brojilo energije i podtablu, svaki sa svojom IFC klasom. Vidi [Električni plan](topic:electrical-plan).

### Familije

- **Familije rade više.** Parametri mogu biti cijeli brojevi, tekst, materijal, olovka ili šrafura; familija može sama nacrtati simbol u planu, ponoviti čvrsto tijelo, označiti dijelove za grublje nivoe detalja, sadržavati druge familije (nogu u stolu), i imati žarišne tačke koje povlačite, i na postavljenom elementu u planu. Veličine dolaze iz CSV tabele, a parametri označeni **Po elementu** dozvoljavaju da se dvoje vrata iste veličine razlikuju. Vidi [Uredite familiju](topic:family-editor#plan-symbol) i [Familije i njihove veličine](topic:families#sizes-from-a-table).

### Cijevi, kanali i oprema

- **Oprema s priključcima.** {{ui:Verzija}} › {{ui:Oprema}} postavlja generičku jedinicu za tretman zraka, ugrađeni ventilator, pumpu, bojler, grijač vode, terminalnu jedinicu, difuzor, rešetku ili rezervoar, dimenzionisanu vrijednostima koje upišete, s priključcima cijevi i kanala kao portovima. Svaka se čuva kao njena IFC klasa s IFC portovima. Vidi [MEP oprema s priključcima](topic:mep-equipment).
- **Povezani vodovi.** Cijev ili kanal započet na priključku preuzima njegovu veličinu i sistem i ostaje vezan za njega: pomjerite pumpu i njena cijev slijedi. {{ui:Provjeri veze}} navodi otvorene priključke, labave krajeve, neslaganja veličine i sistema, i vodove koje ništa ne napaja. Vidi [Povežite cijevi i kanale s opremom](topic:mep-connections).
- **Cijevi i kanali naspram konstrukcije.** {{ui:Provjera sudara}} ima gotove skupove, a {{ui:Cijevi i kanali × konstrukcija}} u jednom kliku; {{ui:Provjeri razmake}} koristi izolaciju svakog voda plus razmak koji upišete; {{ui:Potrebni otvori}} navodi mjesta gdje vodovi prolaze kroz zidove i ploče, kao CSV i BCF probleme. Ništa se ne siječe. Vidi [Provjerite cijevi i kanale naspram konstrukcije](topic:mep-against-structure).
- **Spulovi čeličnih cijevi.** Čelični vod se reže na numerisane spulove na najdužoj dužini i na {{ui:Varenje na terenu}} koje postavite; {{ui:Listovi spula (PDF)}} daje stranicu po spulu s njegovim izometrijskim prikazom, dužinama rezanja, fitinzima, zavarima i spiskom materijala, a {{ui:Lista rezanja zračnih kanala}} navodi ravne komade kanala. Vidi [Spulovi čeličnih cijevi i listovi spula](topic:pipe-spools).

Ovo su pomagala za crtanje i koordinaciju, dimenzionisana od strane inženjera: nema protoka, pritisaka ni balansiranja.

### Vođenje zgrade

- **Dokumenti po imovini.** Kartica {{ui:Resursi}} povezuje priručnike, garancije, fotografije i crteže s imovinom preko naziva datoteke pored IFC-a ili web adrese; u IFC ide samo veza. Vidi [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tabela.** {{ui:Spasi kao COBie (.xlsx)}} piše COBie 2.4 radnu knjigu za primopredaju, a pročitana COBie radna knjiga navodi svaku promjenu prije jednog {{ui:Primijeni}}. Još nije prošla kroz COBie validator. Vidi [COBie tabela](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitavanja senzora i živi tokovi.** Otvorite CSV očitavanja, ili {{ui:Poveži}} direktno iz pregledača na svoj MQTT broker ili adresu na kojoj vaš sistem zgrade odgovara: svaka imovina prikazuje posljednje očitavanje i grafikon, boji se na modelu, i označava se kad je izvan granica sačuvanih u IFC-u. Očitavanja ostaju u kartici; lozinke se nikad ne čuvaju. Vidi [Očitavanja senzora](topic:assets-and-maintenance#sensor-readings) i [Živa očitavanja](topic:assets-and-maintenance#live-readings).

### Dnevna svjetlost i energija

- **Nebo i sunce na svakom prozoru.** Kartica {{ui:Dnevna svjetlost}} daje svakom prozoru njegovu vertikalnu komponentu neba i ugao zaklanjanja, prati sunce kroz datum s {{ui:Sunce kroz prozore na datum}}, i računa {{ui:Faktor dnevne svjetlosti na mreži}} kroz svaku prostoriju, nacrtan na njenoj osnovi. Vidi [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grijanjem i hlađenjem.** {{ui:Opterećenja grijanjem i hlađenjem}} računa gubitak toplote svake prostorije, njeno grijanje tokom godine iz stepen-dana i vršno hlađenje, iz onoga što je ograničava u modelu i U-vrijednosti svakog elementa; U-vrijednost upisana tamo se piše u IFC. Vidi [Procjena opterećenja grijanjem i hlađenjem](topic:heating-and-cooling-loads).

Oba su pomagala za projektovanje po objavljenim metodama, a ne proračuni usklađenosti, i svaki panel to kaže.

### Skenovi

- **Registrujte više skenova.** {{ui:Registruj skeniranja…}} (na početnom panelu, ili u {{ui:Prikaži}}) smješta skenove u jedan okvir pomoću izabranih parova tačaka ili upisanih meta, dotjeruje ih s ICP-om tačka-na-tačku pa tačka-na-ravan, čuva registraciju kao mali projektni fajl i piše registrisani oblak kao jednu LAS ili E57 datoteku. Vidi [Registrujte više skenova u jedan](topic:register-scans).

### Slike i živi pregled

- **Živi pregled.** {{ui:Živi pregled}} na traci alata prikazuje model u izgledu u stvarnom vremenu pored 3D prikaza, prateći ga i svaku izmjenu, s Šetnjom, dobom dana i mjesecom; {{ui:Živi pregled u novom prozoru}} ga stavlja na drugi ekran. Vidi [Živi pregled](topic:live-view).
- **Praćenje putanje na grafičkoj kartici.** Uz WebGPU, {{ui:Renderuj}} › {{ui:Visoki kvalitet (praćenje putanje)}} pokreće vlastiti praćač putanje CadCraft-a na grafičkoj kartici, može se zaustaviti i {{ui:Nastavi}}, i odšumljen je na kraju; bez WebGPU-a koristi WebGL praćač putanje kao i prije. Vidi [Visoki kvalitet](topic:render#high-quality).
- **Više u dijalogu Renderovanje** (na grafičkoj kartici, pa treba WebGPU): fizičko nebo i slike neba, IES profile svjetla, kameru s f-brojem, dubinom polja, dvotačkovnom perspektivom, balansom bijele i 360° panoramama, stupnjevanje za gotovu sliku, miješanje svjetla i elemente renderovanja nakon renderovanja, maglu, dim i kaustiku, čuvanje kao 16-bitni PNG, EXR ili datoteka renderovanja, i red za renderovanje. Vidi [Nebo i profili svjetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red za renderovanje](topic:render#the-render-queue).
- **Vaš računar.** {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Renderovanje}} › {{ui:Vaš računar}} prikazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dopušta aplikaciji, i nivo s kojim renderovanje počinje. Vidi [S čime vaš računar renderuje](topic:your-machine).

### Datoteke i druge aplikacije

- **STEP datoteke se otvaraju.** Dio `.step` ili `.stp`, komad opreme ili model dobavljača (AP203, AP214, AP242) otvara se kao mali IFC model, a svaki čvrst dio je element koji možete pregledati, presjeći, izmjeriti i sačuvati kao IFC. Boje i nazivi dijelova sklopa se još ne čitaju. Vidi [Datoteke koje BimCraft otvara i čuva](topic:files#what-it-opens).
- **USD izvoz.** {{ui:USD}} na traci alata piše otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene po lokaciji, zgradi, etaži i disciplini, sa svakom IFC klasom elementa, GlobalId-jem i svojstvima. Vidi [Izvezite model kao USD](topic:usd).
- **Masa iz CivilCraft-a.** Masa zgrade poslana iz pogleda lokacije CivilCraft-a prikazuje svoje brojeve studije u Svojstvima, a {{ui:Razvij ovu masu}} gradi zidove na svakom nivou i pod iz nje u jednom koraku poništavanja. Vidi [Razvijte masu zgrade iz studije lokacije](topic:develop-a-mass).
- **Stavke biblioteke s varijantama.** Stavka koja dolazi u nekoliko varijanti ima izbor {{ui:Varijanta}} u kartici {{ui:Biblioteka}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Zamijeni stavku…}} navodi ostale varijante, a kopije i ažuriranja je zadržavaju. Vidi [Postavite i zamijenite stavku biblioteke koja ima varijante](topic:library-variants).
- **Paketi projekta u folderu.** {{ui:Otvori folder}} navodi `.ccbundle.zip` datoteke pod {{ui:Paketi projekata}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Vidi [Otvorite raspored](topic:open-project-bundle#open-a-layout).

### Pomoćnici i dodaci

- **Više za AI pomoćnike.** Pomoćnik sada može preimenovati elemente i postaviti vrijednosti svojstava, pomjeriti i izbrisati elemente, mijenjati zidove, vrata i prozore, izvesti USD, i renderovati sliku ili pokrenuti red za renderovanje; svaka izmjena je jedan korak poništavanja. Vidi [Pustite AI pomoćnika da radi s vašim modelom](topic:assistants).
- **Dodaci mogu graditi u modelu.** API dodataka 1.1 omogućava dodatku da napravi izmjenu u modelu kao jedan korak poništavanja (putuje u Live TeamWork-u), čita model, i čita vodove cijevi i kanala, portove, opremu i spulove.
- **Plant dodatak** (isključen dok ga ne uključite u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Dodaci}}): specifikacije cijevi provjerene naspram vodova, izometrijski crteži voda kao SVG i DXF s spiskom materijala, generička procesna oprema s priključcima postavljena u model, usmjerivač između dva porta, i provjera rasporeda postrojenja. Pomagalo za crtanje, a ne inženjersko odobrenje; njegove riječi su samo na engleskom.

## Promijenjeno

- **Prva kuća na laptopu.** Na ekranu veličine laptopa BimCraft počinje samo s osnovom, traka Crtanje je uzak panel s osnovom uz nju, osnova i 3D prikaz se vraćaju u vidno polje kad ih crtež ostavi, 3D prikaz uokviruje cijelu kuću u uskom oknu, a vrata i prozori se biraju prije kota.
- **Čuvanje slike.** **Spasi PNG** u dijalogu Renderovanje sada je {{ui:Spasi}}, s {{ui:Spasi kao}} pored za druge formate. Vidi [Sačuvajte sliku](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Provjere projekta}}: pravi kombinacije opterećenja po ASCE 7 ili EN 1990 za vaše slučajeve i provjerava svaki valjani čelični I-profil (W, S, IPE, HEA ili HEB veličinu po nazivu profila i veličini) po AISC 360 ili EN 1993-1-1, pokazujući koliko svog kapaciteta koristi. Pomagalo dok inženjer ne pregleda; zavareni oblici i drugi presjeci kažu „nije provjereno“. Vidi [Provjere projekta](topic:frame-analysis#design-checks).

## Ispravljeno

- Ponovno (redo) nakon koraka koji je napravio novu veličinu familije nije uspjelo („nema veličine“). Svaki korak sada pravi iste IFC GlobalId-jeve pri ponovnom, pa ponovno radi za familije i svaku drugu izmjenu.
- Kad su dvije osobe sačuvale istu familiju (u sesiji Live TeamWork ili dva prozora), drugo čuvanje je tiho zamijenilo promjenu prvog. Sada odbija i kaže kako da vidite njihovu promjenu i ponovo napravite svoju.
- Model u američkim geodetskim stopama čitao se kao 0.3048 m po stopi umjesto 0.3048006096 m, što je pomjeralo svaki georeferencirani IFC u američkim stopama na karti.
- Uređivač familija: zatvaranje ga više ne spušta fokus tastature na stranicu, njegovo Čuvanje ostaje vidljivo na telefonu, a njegova polja više ne uvećavaju telefon.

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sama jedinica). Isključite jedinice koje nikad ne koristite i one napuštaju liste; označite jednu i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U BimCraft-u lista {{ui:Jedinice}} na traci alata prati prekidače, zvjezdica postavlja jedinice prikaza dok ih ne izaberete na traci alata (vaš raniji izbor se čuva), a polja dužine alata za crtanje prihvataju oznaku bilo koje jedinice, kao `3.5 m` ili `10 US ft`. Vidi [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} staje više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: povucite je da ga usidrite ili oslobodite, spustite na traku drugog panela da dijelite jedan okvir kao kartice, zakačite ga da klizi do ivice, ili ga sakrijte i vratite s ivice. Vidi [Rasporedite panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Povucite dijalog za njegovu naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovo centrirate. Vidi [Pomjerite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset gotovih zahtjeva za vašeg pomoćnika (sredite crtež, isplotajte set, provjerite crteže, postavite pitanja o modelu, zbrojite predmjer, isprobajte varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrti koje nije pregledao izvorni govornik. Pomoćni tekstovi su na engleskom, a neki na španskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema fajla za vaš sistem, nema mreže, loš potpis), umjesto samo „Gotovo“, i ne vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema build za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- Praćenje putanje na grafičkoj kartici, dodaci u dijalogu Renderovanje i red za renderovanje trebaju WebGPU (bez njega, visoki kvalitet koristi WebGL praćač putanje); živi pregled koristi WebGPU gdje ga pregledač ima, inače WebGL 2. Testirani su ovdje samo na softverskoj zamjeni grafičke kartice, još ne na pravim karticama. Živi pregled nema raspršivanje ni dijeljenje u BimCraft-u (ModelCraft-ov ih ima).
- Renderovanje snimljene šetnje kao video nije ugrađeno u BimCraft.
- Provjere projekta: I-profil čije IFC ime profila nije W, S, IPE, HEA ili HEB veličina (ili čija se veličina razlikuje od nje) uzima se kao zavaren i vraća „nije provjereno“, kao i cijevi, uglovi, kanali, vitki dijelovi i torzija. Nijedan inženjer još nije pregledao provjere.
- Nacrtani elementi se ne mogu kopirati jedan po jedan, okretati, zrcaliti ili postavljati u niz (može se kopirati cijeli nivo), i nema podijeljenog zida, alata Tekst niti zavjese. Zid koji se na gornjem nivou sastaje sa zidom s nižeg nivoa ne siječe se u 3D tijelo tog zida, a rasporedi navode otvor gornjeg nivoa pod nivoom svog zida.
- Familije: biblioteka familija koja se dijeli među projektima nije napravljena. Familije i kopirani nivoi još nisu otvoreni u drugim BIM programima.
- MEP: oprema je generička (bez podataka proizvođača); T-komadi i redukcije na čeličnim spulovima su generički, a ne iz tabele ASME B16.9; portovi stavki biblioteke postavljenih iz kartice {{ui:Biblioteka}} nisu upisani u IFC; ništa nije pregledao inženjer.
- Plant dodatak još ne može nacrtati vođeni vod u model, označiti brojeve spulova na svojim izometrijama ili provjeriti raspored opreme postavljene iz biblioteke.
- Biljke iz biblioteke biljaka CivilCraft-a još se ne mogu postaviti iz kartice {{ui:Biblioteka}} u BimCraft-u.
- Energija: nema satne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Imovina: nema hostovanog blizanca koji čuva očitavanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skenova je isprobana na test-skenovima, još ne na pravom skupu skenova skenera; E57 datoteke se još otvaraju do 6 miliona tačaka i 512 MB.
- Paketi projekta se otvaraju samo u BimCraft-u (ostale aplikacije primaju raspored preko **Otvori u …**), a paketi i komplet za dva programa testirani su na zamjenama, ne još s Archicad-om ili Revit-om.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).
