---
title: Šta je novo u verziji 0.7
summary: BimCraft dodaje zidove kroz više nivoa i Kopiraj ovaj nivo, zidove iz PDF-ova i skenova, vlastite sklopove zidova, bogatije porodice, MEP opremu s priključcima, skupove sudara, otvore i spulove cijevi, dokumente sredstava, COBie i očitavanja senzora, nebo, sunce, dnevno svjetlo na mreži i opterećenja grijanjem i hlađenjem, registraciju skenova, živi prikaz i praćenje putanje na grafičkoj kartici, STEP i USD, varijante iz biblioteke i još više za AI asistente.
keywords: šta je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, zidovi kroz nivoe, kopiraj ovaj nivo, pdf, skeniranje, praćenje putanje, zidovi iz nacrta, sklopovi zidova, slojevi, jezgro, membrana, referentne kote, biblioteka materijala, jedinice prikaza, stil prikaza, konstrukcija, grede, porodice, parametri, simbol u planu, tačke osjetljive na dodir, ponavljanje, nivo detalja, ugniježdene porodice, veličine CSV, po elementu, oprema, priključci, veze, otvori, spulovi, listovi spulova, zavar na terenu, lista rezanja kanala, dokumenti, cobie, senzori, mqtt, živi tok, vertikalna komponenta neba, solarni dobitak, mreža dnevnog svjetla, grijanje, hlađenje, opterećenja, U-vrijednost, registracija skenova, icp, e57, živi prikaz, praćenje putanje, webgpu, odšumljavanje, fizičko nebo, miješanje svjetla, red renderovanja, vaš računar, step, usd, paket projekta, razvoj mase, varijante, asistenti, api dodataka, postrojenje, elektro, provjere projekta
from: 5c27b80a
---

Ovo je šta se promijenilo u BimCraft-u 0.7 u odnosu na 0.6. Spisak je grupisan po području, s najvažnijim na vrhu.

## Novo

### Crtanje zgrade

- **Zidovi kroz više nivoa.** Lista visina alata Zid nudi **Do** bilo kojeg nivoa višeg od njega, kao što to radi Svojstva za izabrani zid. Planovi nivoa između prikazuju zid svjetlijim, prostorije uz njega se zatvaraju, a vrata i prozori mogu se postaviti u njega s tih planova; **Prolazi kroz** u Svojstvima navodi nivoe kroz koje prolazi. Pogledajte [Promjena zida, vrata ili prozora](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovaj nivo.** {{ui:Copy this level…}} na panelu Nivoi ponovo crta zidove nivoa s njihovim vratima i prozorima, njegove podove i plafone na drugom nivou ili na novom nivou iznad, u jednom koraku poništavanja; prostorije se pojavljuju same. Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skena.** {{ui:Build}} › {{ui:From a drawing…}} sada prihvata PDF (linijski crtež ili skeniranje unutar njega) ili skenirani plan (PNG, JPEG, TIFF, mnogo stranica): svaka stranica postaje zidovi, vrata, prozori i prostorije jednog nivoa, a stranica ostaje sačuvana ispod plana. Praćenje ne koristi mrežu ni obučeni model, a rezultat je onoliko koliko su linije dale: provjerite svaki nivo prema njegovoj stranici. Pogledajte [Zidovi iz skupa planova](topic:walls-from-plans).
- **Vlastiti sklopovi zidova.** {{ui:Wall assemblies…}} gradi tip zida sloj po sloj, s jezgrom, zračnim prostorima i membranama, i pregledom s kotama; {{ui:Material library…}} čuva materijale projekta u IFC-u; {{ui:Annotate}} › {{ui:Reference dimension}} mjeri do lica i linija jezgra i prati zidove kada se promijene. Od saradnika iz zajednice, Doc (drsurfbum). Pogledajte [Sklopovi zidova i referentne kote](topic:wall-assemblies).
- **Jedinice prikaza i kontrole pogleda.** {{ui:Units}} na traci s alatima prikazuje dužine u stopama i inčima, inčima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, rasporedima, koordinatama, mjerenjima i presjecima. {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} nalaze se na traci s alatima, podjela se može povući (ili pomjeriti s tastature), {{ui:Shaded}}, {{ui:Edges}} i {{ui:Wireframe}} su pored kocke pogleda, a nagib krova, oplata i podgled mijenjaju izabrani krov odmah. Od saradnika iz zajednice, Joel (yisraelk). Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Grede poda prema rasponu.** {{ui:Framing}} može postaviti inženjerske grede (preliminarno) kao i rezanu građu, birajući najmanju navedenu seriju i visinu koja pokriva raspon, 16" ili 24" osovina, u oba pravca; idu u IFC i listu rezanja. Prijedlog iz objavljene tabele proizvođača, a ne inženjerski proračun. Također od Joela. Pogledajte [Konstrukcija zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Electrical}} dodaje podatkovne, telefonske i audio-video utičnice, birač prekidača, tajmer, termostat, detektore dima i topline, ručnu stanicu i sirenu, ventilator, brojilo energije i podtablu, svaki kao vlastitu IFC klasu. Pogledajte [Električni plan](topic:electrical-plan).

### Porodice

- **Porodice rade više.** Parametri mogu biti cijeli brojevi, tekst, materijal, olovka ili ispuna; porodica može nacrtati vlastiti simbol u planu, ponoviti čvrsto tijelo, označiti dijelove za grublje nivoe detalja, sadržavati druge porodice (nogu u stolu) i imati žarišne tačke koje povlačite, također na postavljenom elementu u planu. Veličine dolaze iz CSV tabele, a parametri označeni **Po elementu** dozvoljavaju da se dva vrata iste veličine razlikuju. Pogledajte [Uređivanje porodice](topic:family-editor#plan-symbol) i [Porodice i njihove veličine](topic:families#sizes-from-a-table).

### Cijevi, kanali i oprema

- **Oprema s priključcima.** {{ui:Build}} › {{ui:Equipment}} postavlja generičku jedinicu za obradu zraka, inline ventilator, pumpu, kotao, grijač vode, terminalnu jedinicu, difuzor, rešetku ili rezervoar, veličine prema vrijednostima koje upišete, s cijevnim i kanalnim vezama kao priključcima. Svaki se čuva kao njegova IFC klasa s IFC priključcima. Pogledajte [MEP oprema s priključcima](topic:mep-equipment).
- **Povezane dionice.** Cijev ili kanal započet na priključku preuzima njegovu veličinu i sistem i ostaje vezan za njega: pomjerite pumpu i njena cijev ide za njom. {{ui:Check connections}} navodi otvorene priključke, slobodne krajeve, neslaganja veličine i sistema te dionice koje ništa ne napaja. Pogledajte [Povezivanje cijevi i kanala s opremom](topic:mep-connections).
- **Cijevi i kanali prema konstrukciji.** {{ui:Clash check}} ima gotove skupove, a {{ui:Pipes and ducts × structure}} jednim klikom; {{ui:Check clearances}} koristi izolaciju svake dionice plus razmak koji upišete; {{ui:Openings needed}} navodi mjesta gdje dionice prolaze kroz zidove i ploče, kao CSV i BCF probleme. Ništa se ne siječe. Pogledajte [Provjera cijevi i kanala prema konstrukciji](topic:mep-against-structure).
- **Spulovi čeličnih cijevi.** Čelična dionica se siječe na numerisane spulove, po najdužoj dužini i na mjestima {{ui:Field weld}} koje postavite; {{ui:Spool sheets (PDF)}} daje stranicu po spulu s njegovim izometrijskim prikazom, dužinama rezanja, fitinzima, zavarima i specifikacijom materijala, a {{ui:Duct cut list}} navodi ravne komade kanala. Pogledajte [Spulovi čeličnih cijevi i listovi spulova](topic:pipe-spools).

Ovo su pomoćna sredstva za crtanje i koordinaciju, dimenzionisana od strane inženjera: bez protoka, pritisaka i balansiranja.

### Upravljanje zgradom

- **Dokumenti po sredstvu.** Kartica {{ui:Assets}} povezuje priručnike, garancije, fotografije i crteže sa sredstvom preko naziva datoteke pored IFC-a ili web adrese; u IFC se upisuje samo veza. Pogledajte [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tabela.** {{ui:Save as COBie (.xlsx)}} piše COBie 2.4 radnu svesku za primopredaju, a učitana COBie radna sveska navodi svaku promjenu prije jednog {{ui:Apply}}. Još nije prošla kroz COBie validator. Pogledajte [COBie tabela](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitavanja senzora i živi tokovi.** Otvorite CSV očitavanja ili {{ui:Connect}} direktno iz pregledača na svoj MQTT broker ili adresu na koju odgovara vaš sistem zgrade: svako sredstvo prikazuje posljednje očitavanje i grafikon, boji se na modelu i označava se ako je van granica sačuvanih u IFC-u. Očitavanja ostaju u kartici; lozinke se nikada ne čuvaju. Pogledajte [Očitavanja senzora](topic:assets-and-maintenance#sensor-readings) i [Živa očitavanja](topic:assets-and-maintenance#live-readings).

### Dnevno svjetlo i energija

- **Nebo i sunce kod svakog prozora.** Kartica {{ui:Daylight}} daje svakom prozoru njegovu vertikalnu komponentu neba i ugao zaklanjanja, prati sunce kroz datum s {{ui:Sun through the windows on a date}}, i izračunava {{ui:Daylight factor on a grid}} kroz svaku prostoriju, nacrtan na njenom planu. Pogledajte [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grijanjem i hlađenjem.** {{ui:Heating and cooling loads}} izračunava gubitak topline svake prostorije, njeno grijanje tokom godine iz stepen-dana i vršno hlađenje, iz onoga što je ograničava u modelu i U-vrijednosti svakog elementa; U-vrijednost upisana tamo upisuje se u IFC. Pogledajte [Procjena opterećenja grijanjem i hlađenjem](topic:heating-and-cooling-loads).

Oboje su pomoćna sredstva za projektovanje prema objavljenim metodama, a ne proračuni usklađenosti, i svaki panel to navodi.

### Skeniranja

- **Registracija više skenova.** {{ui:Register scans…}} (na početnom panelu ili u {{ui:Show}}) smješta skenove u jedan okvir pomoću izabranih parova tačaka ili upisanih ciljeva, dotjeruje ih ICP-om tačka-na-tačku, pa tačka-na-ravan, čuva registraciju kao malu datoteku projekta i piše registrisani oblak kao jednu LAS ili E57 datoteku. Pogledajte [Registracija više skenova u jedan](topic:register-scans).

### Slike i živi prikaz

- **Živi prikaz.** {{ui:Live view}} na traci s alatima prikazuje model u izgledu u stvarnom vremenu pored 3D prikaza, prati ga i svaku promjenu, uz Walk, doba dana i mjesec; {{ui:Live view in a new window}} ga stavlja na drugi ekran. Pogledajte [Živi prikaz](topic:live-view).
- **Praćenje putanje na grafičkoj kartici.** Uz WebGPU, {{ui:Render}} › {{ui:High quality (path traced)}} pokreće CadCraft-ov vlastiti praćač putanje na grafičkoj kartici, može se zaustaviti i {{ui:Resume}}, i na kraju se odšumljava; bez WebGPU-a koristi WebGL praćač putanje kao i ranije. Pogledajte [Visoki kvalitet](topic:render#high-quality).
- **Više u dijalogu Render** (na grafičkoj kartici, pa treba WebGPU): fizičko nebo i slike neba, IES profili svjetla, kamera s f-brojem, dubinom polja, perspektivom s dvije tačke, balansom bijele i panoramama od 360°, stepenovanje gotove slike, miješanje svjetla i elementi renderovanja nakon renderovanja, magla, dim i kaustika, spašavanje kao 16-bitni PNG, EXR ili datoteka renderovanja, i red renderovanja. Pogledajte [Nebo i profili svjetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red renderovanja](topic:render#the-render-queue).
- **Vaš računar.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} prikazuje grafiku, jezgra procesora i memoriju koju ovaj pregledač dozvoljava aplikaciji, i nivo s kojim renderovanje počinje. Pogledajte [Čime vaš računar renderuje](topic:your-machine).

### Datoteke i druge aplikacije

- **STEP datoteke se otvaraju.** Datoteka `.step` ili `.stp` dio, komad opreme ili model dobavljača (AP203, AP214, AP242) otvara se kao mali IFC model, svako tijelo je element koji možete pregledati, presijecati, mjeriti i spasiti kao IFC. Boje i nazivi dijelova sklopa još se ne čitaju. Pogledajte [Datoteke koje BimCraft otvara i čuva](topic:files#what-it-opens).
- **Izvoz USD-a.** {{ui:USD}} na traci s alatima piše otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene po lokaciji, zgradi, spratu i disciplini, sa svakom IFC klasom elementa, GlobalId-jem i svojstvima. Pogledajte [Izvoz modela kao USD](topic:usd).
- **Masa iz CivilCraft-a.** Masa zgrade poslana iz pogleda na lokaciju u CivilCraft-u prikazuje svoje brojeve studije u Svojstvima, a {{ui:Develop this mass}} gradi zidove na svakom nivou i pod od nje u jednom koraku poništavanja. Pogledajte [Razvoj mase zgrade iz studije lokacije](topic:develop-a-mass).
- **Stavke biblioteke s varijantama.** Stavka koja dolazi u nekoliko varijanti ima izbor {{ui:Variant}} na kartici {{ui:Library}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Swap item…}} navodi ostale varijante, a kopije i ažuriranja je zadržavaju. Pogledajte [Postavljanje i zamjena stavke biblioteke koja ima varijante](topic:library-variants).
- **Paketi projekata u folderu.** {{ui:Open a folder}} navodi datoteke `.ccbundle.zip` pod {{ui:Project bundles}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Pogledajte [Otvaranje rasporeda](topic:open-project-bundle#open-a-layout).

### Asistenti i dodaci

- **Više za AI asistente.** Asistent sada može preimenovati elemente i postavljati vrijednosti svojstava, pomjerati i brisati elemente, mijenjati zidove, vrata i prozore, izvoziti USD, te renderovati sliku ili pokretati red renderovanja; svaka promjena je jedan korak poništavanja. Pogledajte [Neka AI asistent radi s vašim modelom](topic:assistants).
- **Dodaci mogu graditi u modelu.** API dodataka 1.1 omogućava dodatku da napravi promjenu u modelu kao jedan korak poništavanja (putuje kroz Live TeamWork), čita model, te čita dionice cijevi i kanala, priključke, opremu i spulove.
- **Dodatak Plant** (isključen dok ga ne uključite u {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): provjera specifikacija cijevi prema dionicama, izometrijski crteži dionice kao SVG i DXF s specifikacijom materijala, generička procesna oprema s mlaznicama postavljena u modelu, usmjerivač između dva priključka i provjera rasporeda postrojenja. Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje; njegove riječi su samo na engleskom.

## Promijenjeno

- **Prvi dom na laptopu.** Na ekranu veličine laptopa BimCraft počinje samo s planom, traka za crtanje je uski panel s planom uklopljenim pored, plan i 3D prikaz vraćaju se u pogled kada ih crtež napusti, 3D prikaz uokviruje cijelu kuću u uskom oknu, a vrata i prozori biraju se prije kota.
- **Čuvanje slike.** **Save PNG** u dijalogu Render sada je {{ui:Save}}, s {{ui:Save as}} pored za druge formate. Pogledajte [Spašavanje slike](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Design checks}}: pravi kombinacije opterećenja po ASCE 7 ili EN 1990 za vaše slučajeve i provjerava svaki valjani čelični I-profil (W, S, IPE, HEA ili HEB veličinu prema nazivu profila i veličini) po AISC 360 ili EN 1993-1-1, pokazujući koliki dio svog kapaciteta koristi. Prijedlog dok ne pregleda inženjer; zavareni oblici i drugi presjeci kažu "nije provjereno". Pogledajte [Provjere projekta](topic:frame-analysis#design-checks).

## Popravljeno

- Ponovno radnja nakon koraka koji je napravio novu veličinu porodice nije uspijevala ("no size"). Svaki korak sada ponovo pravi iste IFC GlobalId-je pri ponovnom radu, pa ponovno radi za porodice i svaku drugu promjenu.
- Kada su dvije osobe spasile istu porodicu (u sesiji Live TeamWork ili u dva prozora), druga je spašavanje tiho zamijenila promjenu prve. Sada odbija i kaže kako da vidite njihovu promjenu i ponovo napravite svoju.
- Model u US survey feet čitao se kao 0.3048 m po stopi umjesto 0.3048006096 m, što je pomjeralo svaki IFC s georeferencom u US stopama na karti.
- Uređivač porodica: zatvaranje više ne prebacuje fokus tastature na stranicu, njegovo Save ostaje na vidiku na telefonu, a njegova polja više ne uzrokuju da telefon zumira.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one izlaze iz listi; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U BimCraft-u lista {{ui:Units}} na traci s alatima prati prekidače, zvjezdica postavlja jedinice prikaza dok ih ne izaberete na traci (vaš raniji izbor se čuva), a polja dužine alata za crtanje prihvataju oznaku bilo koje jedinice, kao `3.5 m` ili `10 US ft`. Pogledajte [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklapaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: povucite je da je prikačite ili otkačite panel, spustite je na traku drugog panela da dijelite jedan okvir kao kartice, prikvačite je da kliže do ivice, ili sakrijte i vratite s ivice. Pogledajte [Raspoređivanje panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Povucite dijalog za naslovnu traku izvan puta crteža; vraća se tamo gdje ste ga ostavili. Dvostruki klik na naslovnu traku ponovo ga centrira. Pogledajte [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahtjeva za vašeg asistenta (srediti crtež, iscrtati skup, provjeriti crteže, postaviti pitanje o modelu, sabrati predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom, a neke na španskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umjesto samo "Done", i prestaje ponovo prikazivati karticu Šta je novo koju ste zatvorili dok ne bude novijeg izdanja.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, izaberite {{ui:More info}}, pa {{ui:Run anyway}}. Na Macu, prvi put, desnim klikom kliknite CadCraft Studio i izaberite {{ui:Open}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Units}} se čuvaju, ali ih još ništa ne čita.
- Praćenje putanje na grafičkoj kartici, dodaci u dijalogu Render i red renderovanja zahtijevaju WebGPU (bez njega, visoki kvalitet koristi WebGL praćač putanje); živi prikaz koristi WebGPU tamo gdje ga pregledač ima, inače WebGL 2. Testirani su ovdje samo na softverskoj zamjeni za grafičku karticu, još ne na pravim grafičkim karticama. Živi prikaz u BimCraft-u nema raspršivanje ni dijeljenje (ModelCraft-ov ih ima).
- Renderovanje snimljene šetnje kao video nije ugrađeno u BimCraft.
- Provjere projekta: I-profil čije IFC ime profila nije veličina W, S, IPE, HEA ili HEB (ili čija se veličina razlikuje od nje) uzima se kao zavaren i vraća "nije provjereno", kao i cijevi, uglovi, kanali, vitki dijelovi i uvijanje. Nijedan inženjer još nije pregledao provjere.
- Nacrtani elementi ne mogu se kopirati pojedinačno, okretati, zrcaliti ili ređati u niz (može se kopirati cijeli nivo), i nema podijeljenog zida, alata Text ni zavjesnog zida. Zid koji se na gornjem nivou spaja sa zidom s donjeg nivoa ne siječe se u 3D tijelo tog zida, a rasporedi navode otvor na gornjem nivou pod nivoom vlastitog zida.
- Porodice: biblioteka porodica dijeljenih između projekata nije izrađena. Porodice i kopirani nivoi još nisu otvoreni u drugim BIM programima.
- MEP: oprema je generička (bez podataka proizvođača); T-komadi i redukcije na čeličnim spulovima su generički, a ne iz tabele ASME B16.9; priključci stavki iz biblioteke postavljenih s kartice {{ui:Library}} ne upisuju se u IFC; ništa nije pregledao inženjer.
- Dodatak Plant još ne može nacrtati vođenu dionicu u model, numerisati spulove na svojim izometrijama ili provjeriti raspored opreme postavljene iz biblioteke.
- Postrojenja iz biblioteke postrojenja CivilCraft-a još se ne mogu postaviti s kartice {{ui:Library}} u BimCraft-u.
- Energija: nema satne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Sredstva: nema hostovanog digitalnog blizanca koji čuva očitavanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skenova isprobana je na test skenovima, još ne na skupu skenova pravog skenera; E57 datoteke se još otvaraju do 6 miliona tačaka i 512 MB.
- Paketi projekata otvaraju se samo u BimCraft-u (ostale aplikacije primaju raspored preko **Otvori u …**), a paketi i komplet za dva programa testirani su na zamjenama, ne još s Archicadom ili Revitom.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).
