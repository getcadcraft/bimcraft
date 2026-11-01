---
title: Što je novo u 0.7
summary: BimCraft donosi zidove kroz više razina i Kopiraj ovu razinu, zidove iz PDF-ova i skenova, vlastite sklopove zidova, bogatije obitelji, MEP opremu s priključcima, skupove sudara, otvore i spoolove cijevi, dokumente imovine, COBie i očitanja senzora, nebo, sunce, dnevno svjetlo na mreži i opterećenja grijanja i hlađenja, registraciju skenova, pogled uživo i path tracing na grafičkoj kartici, STEP i USD, varijante knjižnice i još toga za AI pomoćnike.
keywords: što je novo, release notes, changelog, promjene, 0.7, verzija, nove značajke, zidovi kroz razine, kopiraj ovu razinu, pdf, skeniranje, trace, zidovi iz tlocrta, sklopovi zidova, slojevi, jezgra, membrana, referentne kote, knjižnica materijala, jedinice prikaza, stil prikaza, okvirna konstrukcija, grede, obitelji, parametri, simbol tlocrta, vruće točke, ponavljanje, razina detalja, ugniježđene obitelji, CSV veličine, po elementu, oprema, priključci, veze, razmaci, otvori, spoolovi, listovi spoolova, terenski zavar, popis rezanja kanala, dokumenti, COBie, senzori, MQTT, živi tok, vertikalna komponenta neba, solarni dobitak, mreža dnevnog svjetla, grijanje, hlađenje, opterećenja, U-vrijednost, registracija skenova, ICP, E57, pogled uživo, path tracing, WebGPU, uklanjanje šuma, fizikalno nebo, miješanje svjetla, red za renderiranje, vaše računalo, STEP, USD, projektni paket, razrada mase, varijante, pomoćnici, API dodataka, Plant, elektrika, provjere proračuna
from: 5c27b80a
---

Ovo se promijenilo u BimCraftu 0.7 u odnosu na 0.6. Popis je grupiran po području, a najvažnije je prvo.

## Novo

### Crtanje zgrade

- **Zidovi kroz više razina.** Popis visina alata Zid nudi **Do** bilo koje više razine, kao što to čini Svojstva za odabrani zid. Tlocrti razina između prikazuju zid svjetlijim, prostorije se tamo zatvaraju uz njega, a vrata i prozori mogu se postaviti u njega s tih tlocrta; **Prolazi kroz** u Svojstvima navodi razine kroz koje prolazi. Pogledajte [Promjena zida, vrata ili prozora](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovu razinu.** {{ui:Copy this level…}} na ploči Razine ponovno crta zidove razine s njihovim vratima i prozorima, njezine podove i stropove na drugoj razini ili na novoj razini iznad nje, u jednom koraku poništi; prostorije se pojavljuju same. Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skena.** {{ui:Build}} › {{ui:From a drawing…}} sada prihvaća PDF (linijski crtež ili skenirani sadržaj u njemu) ili skenirani tlocrt (PNG, JPEG, TIFF, više stranica): svaka stranica postaje zidovi, vrata, prozori i prostorije jedne razine, a stranica ostaje spremljena pod tlocrtom. Pretvorba ne koristi mrežu ni naučeni model, a rezultat je ono što su linije dale: provjerite svaku razinu prema njezinoj stranici. Pogledajte [Zidovi iz skupa tlocrta](topic:walls-from-plans).
- **Vlastiti sklopovi zidova.** {{ui:Wall assemblies…}} gradi vrstu zida sloj po sloj, s jezgrom, zračnim prostorima i membranama, te pregled s kotama; {{ui:Material library…}} čuva materijale projekta u IFC-u; {{ui:Annotate}} › {{ui:Reference dimension}} mjeri do ploha i osnovnih linija i prati zidove kada se promijene. Od suradnika iz zajednice, Doc (drsurfbum). Pogledajte [Sklopovi zidova i referentne kote](topic:wall-assemblies).
- **Prikaz jedinica i kontrole prikaza.** {{ui:Units}} na alatnoj traci prikazuje duljine u stopama i palcima, palcima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, tablicama, koordinatama, mjerenjima i presjecima. {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} nalaze se na alatnoj traci, podjela se može povući (ili pomaknuti tipkovnicom), {{ui:Shaded}}, {{ui:Edges}} i {{ui:Wireframe}} nalaze se uz ViewCube, a nagib krova, čeona daska i podgled mijenjaju odabrani krov odmah. Od suradnika iz zajednice, Joel (yisraelk). Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Grede poda po rasponu.** {{ui:Framing}} može izraditi inženjerske grede (preliminarne) kao i pilanski drveni materijal, birajući najmanju navedenu seriju i visinu koja pokriva raspon, s razmakom osi 16" ili 24" u oba smjera; ulaze u IFC i popis za rezanje. Prijedlog iz objavljene tablice proizvođača, a ne inženjerski proračun. Također od Joela. Pogledajte [Okvirna konstrukcija zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Electrical}} dodaje utičnice za podatke, telefon i audio-video, birački prekidač, timer, termostat, detektore dima i topline, ručni javljač i sirenu, ventilator, brojilo energije i podrazdjelnik, svaki sa svojom IFC klasom. Pogledajte [Električni tlocrt](topic:electrical-plan).

### Obitelji

- **Obitelji rade više.** Parametri mogu biti cijeli brojevi, tekst, materijal, olovka ili ispuna; obitelj može sama nacrtati simbol tlocrta, ponoviti puno tijelo, označiti dijelove za grublje razine detalja, sadržavati druge obitelji (nogu u stolu) i imati vruće točke koje povlačite, također na postavljenom elementu u tlocrtu. Veličine dolaze iz CSV tablice, a parametri označeni **Po elementu** dopuštaju da se dva vrata iste veličine razlikuju. Pogledajte [Uređivanje obitelji](topic:family-editor#plan-symbol) i [Obitelji i njihove veličine](topic:families#sizes-from-a-table).

### Cijevi, kanali i oprema

- **Oprema s priključcima.** {{ui:Build}} › {{ui:Equipment}} postavlja generičku klima jedinicu, inline ventilator, pumpu, kotao, grijač vode, terminalnu jedinicu, difuzor, rešetku ili spremnik, veličine koje upišete, s priključcima cijevi i kanala kao portovima. Svaka se sprema s vlastitom IFC klasom i IFC priključcima. Pogledajte [MEP oprema s priključcima](topic:mep-equipment).
- **Povezani vodovi.** Cijev ili kanal započet na priključku preuzima svoju veličinu i sustav i ostaje vezan za njega: pomaknete li pumpu, cijev ju prati. {{ui:Check connections}} navodi otvorene priključke, slobodne krajeve, neusklađenosti veličine i sustava te vodove koje ništa ne napaja. Pogledajte [Spajanje cijevi i kanala na opremu](topic:mep-connections).
- **Cijevi i kanali uz konstrukciju.** {{ui:Clash check}} ima gotove skupove, a {{ui:Pipes and ducts × structure}} u jednom koraku. {{ui:Check clearances}} uzima izolaciju svakog voda i razmak koji upišete; {{ui:Openings needed}} navodi mjesta gdje vodovi prolaze kroz zidove i ploče, kao CSV i BCF teme. Ništa se ne siječe. Pogledajte [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure).
- **Čelični spoolovi cijevi.** Čelični vod se reže na numerirane spoolove najveće dužine i na {{ui:Field weld}} zavarima koje postavite; {{ui:Spool sheets (PDF)}} daje stranicu po spoolu s njegovim izometrijskim prikazom, dužinama rezanja, spojnim dijelovima, zavarima i sastavnicom, a {{ui:Duct cut list}} navodi ravne komade kanala. Pogledajte [Čelični spoolovi cijevi i listovi spoolova](topic:pipe-spools).

Ovo su pomoćna sredstva za crtanje i koordinaciju, dimenzionirana od strane inženjera: bez protoka, tlakova i uravnoteženja.

### Upravljanje zgradom

- **Dokumenti po imovini.** Kartica {{ui:Assets}} povezuje upute, jamstva, fotografije i crteže s imovinom preko naziva datoteke uz IFC ili web adrese; u IFC ide samo poveznica. Pogledajte [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tablica.** {{ui:Save as COBie (.xlsx)}} zapisuje COBie 2.4 radnu knjigu za primopredaju, a učitana COBie radna knjiga navodi svaku promjenu prije jednog {{ui:Apply}}. Još nije provjerena COBie validatorom. Pogledajte [COBie tablica](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitanja senzora i živi tokovi.** Otvorite CSV datoteku s očitanjima ili {{ui:Connect}} izravno iz preglednika na svoj MQTT posrednik ili adresu na kojoj vaš sustav zgrade odgovara: svaka imovina prikazuje posljednje očitanje i grafikon, obojena je na modelu i označena je ako je izvan granica spremljenih u IFC-u. Očitanja ostaju u kartici; lozinke se nikad ne spremaju. Pogledajte [Očitanja senzora](topic:assets-and-maintenance#sensor-readings) i [Živa očitanja](topic:assets-and-maintenance#live-readings).

### Dnevno svjetlo i energija

- **Nebo i sunce uz svaki prozor.** Kartica {{ui:Daylight}} daje svakom prozoru njegovu vertikalnu komponentu neba i kut zaklona, prati sunce za određeni datum pomoću {{ui:Sun through the windows on a date}} i izračunava {{ui:Daylight factor on a grid}} po cijeloj prostoriji, nacrtan na njezinom tlocrtu. Pogledajte [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grijanja i hlađenja.** {{ui:Heating and cooling loads}} izračunava toplinski gubitak svake prostorije, njezino grijanje tijekom godine iz stupanj-dana i vršno hlađenje, iz onoga što je ograničava u modelu i U-vrijednosti svakog elementa; U-vrijednost upisana ovdje zapisuje se u IFC. Pogledajte [Procjena opterećenja grijanja i hlađenja](topic:heating-and-cooling-loads).

Oba su pomoćna sredstva za projektiranje prema objavljenim metodama, a ne proračuni usklađenosti, i svaka ploča to kaže.

### Skenovi

- **Registracija više skenova.** {{ui:Register scans…}} (na početnoj ploči ili u {{ui:Show}}) postavlja skenove u jedan okvir pomoću odabranih parova točaka ili upisanih ciljeva, dorađuje ih ICP-om točka na točku, a zatim točka na ravninu, sprema registraciju kao malu projektnu datoteku i zapisuje registrirani oblak u jednu LAS ili E57 datoteku. Pogledajte [Registracija više skenova u jedan](topic:register-scans).

### Slike i pogled uživo

- **Pogled uživo.** {{ui:Live view}} na alatnoj traci prikazuje model u izgledu u stvarnom vremenu uz 3D prikaz, prateći ga i svaku promjenu, sa {{ui:Walk}}, dobom dana i mjesecom; {{ui:Live view in a new window}} stavlja ga na drugi zaslon. Pogledajte [Pogled uživo](topic:live-view).
- **Path tracing na grafičkoj kartici.** S WebGPU-om, {{ui:Render}} › {{ui:High quality (path traced)}} pokreće vlastiti path tracer programa CadCraft na grafičkoj kartici, može se zaustaviti, a zatim {{ui:Resume}}, a na kraju se uklanja šum; bez WebGPU-a koristi WebGL path tracer kao i prije. Pogledajte [Visoka kvaliteta](topic:render#high-quality).
- **Više u dijalogu Render** (na grafičkoj kartici, pa treba WebGPU): fizikalno nebo i slike neba, IES profili svjetla, kamera s f-stop vrijednošću, dubina polja, perspektiva s dvije točke, balans bijele i 360° panorame, gradacija boja za gotovu sliku, miješanje svjetla i izlazni elementi nakon renderiranja, magla, dim i kaustike, spremanje kao 16-bitni PNG, EXR ili datoteka za render te red za renderiranje. Pogledajte [Nebo i profili svjetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red za renderiranje](topic:render#the-render-queue).
- **Vaše računalo.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} prikazuje grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji te razinu od koje počinje renderiranje. Pogledajte [Što vaše računalo renderira](topic:your-machine).

### Datoteke i ostale aplikacije

- **STEP datoteke se otvaraju.** Datoteka `.step` ili `.stp` (dio, oprema ili model dobavljača, AP203, AP214, AP242) otvara se kao mali IFC model, a svaki solid je element koji možete pregledati, prikazati mu presjek, izmjeriti i spremiti kao IFC. Boje i nazivi dijelova sklopa još se ne čitaju. Pogledajte [Datoteke koje BimCraft otvara i sprema](topic:files#what-it-opens).
- **USD izvoz.** {{ui:USD}} na alatnoj traci zapisuje otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene prema lokaciji, zgradi, etaži i disciplini, sa svakom IFC klasom elementa, GlobalId-jem i svojstvima. Pogledajte [Izvoz modela kao USD](topic:usd).
- **Masa iz CivilCraft-a.** Građevna masa poslana iz prikaza lokacije u CivilCraft-u prikazuje svoje brojke studije u Svojstvima, a {{ui:Develop this mass}} gradi zidove na svakoj razini i pod od nje u jednom koraku poništi. Pogledajte [Razrada građevne mase iz studije lokacije](topic:develop-a-mass).
- **Knjižnični predmeti s varijantama.** Predmet koji dolazi u nekoliko varijanti ima izbor {{ui:Variant}} na kartici {{ui:Library}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Swap item…}} navodi druge varijante, a kopije i ažuriranja je zadržavaju. Pogledajte [Postavljanje i zamjena knjižničnog predmeta s varijantama](topic:library-variants).
- **Projektni paketi u mapi.** {{ui:Open a folder}} navodi `.ccbundle.zip` datoteke pod {{ui:Project bundles}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Pogledajte [Otvaranje rasporeda](topic:open-project-bundle#open-a-layout).

### Pomoćnici i dodaci

- **Više za AI pomoćnike.** Pomoćnik sada može preimenovati elemente i postaviti vrijednosti svojstava, pomaknuti i izbrisati elemente, mijenjati zidove, vrata i prozore, izvesti USD te renderirati sliku ili pokrenuti red za renderiranje; svaka promjena je jedan korak poništi. Pogledajte [Neka AI pomoćnik radi s vašim modelom](topic:assistants).
- **Dodaci mogu graditi u modelu.** API za dodatke 1.1 omogućuje dodatku da napravi promjenu u modelu kao jedan korak poništi (putuje u Live TeamWork), čita model te čita vodove cijevi i kanala, priključke, opremu i spoolove.
- **Dodatak Plant** (isključen dok ga ne uključite u {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): specifikacije cijevi provjerene prema vodovima, izometrijski crteži voda kao SVG i DXF s sastavnicom, generička procesna oprema s nastavcima postavljenom u model, usmjerivač između dva priključka i provjera rasporeda postrojenja. Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje; njegovi nazivi su samo na engleskom.

## Promijenjeno

- **Prva kuća na prijenosnom računalu.** Na zaslonu veličine prijenosnog računala BimCraft se pokreće samo s tlocrtom; traka za crtanje je uski panel s tlocrtom smještenim uz nju; tlocrt i 3D prikaz vraćaju se u vidno polje kada ih crtež napusti; 3D prikaz uokviruje cijelu kuću u uskom oknu, a vrata i prozori odabiru se prije mjernih crta.
- **Spremanje slike.** **Spremi PNG** u dijalogu Render sada je {{ui:Save}}, uz koji je {{ui:Save as}} za ostale formate. Pogledajte [Spremanje slike](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Design checks}}: izrađuje kombinacije opterećenja prema ASCE 7 ili EN 1990 za vaše slučajeve i provjerava svaki valjani čelični I-profil (W, S, IPE, HEA ili HEB prema nazivu profila i veličini) prema AISC 360 ili EN 1993-1-1, prikazujući koliki dio svog kapaciteta koristi. Pomoćno je sredstvo dok ga inženjer ne pregleda; zavareni profili i drugi presjeci dobivaju oznaku „nije provjereno“. Pogledajte [Provjere proračuna](topic:frame-analysis#design-checks).

## Popravljeno

- Ponovi nakon koraka koji je stvorio novu veličinu obitelji nije uspjelo („nema veličine“). Svaki korak sada ponovo stvara iste IFC GlobalId-e pri ponovi, pa ponovi radi za obitelji i sve ostale promjene.
- Kada su dvije osobe spremile istu obitelj (u sesiji Live TeamWork ili u dva prozora), drugo spremanje je tiho zamijenilo promjenu prvog. Sada odbija spremanje i kaže kako vidjeti njihovu promjenu i ponovno unijeti vašu.
- Model u US survey stopama čitan je kao 0.3048 m po stopi umjesto 0.3048006096 m, što je pomicalo svaki georeferencirani IFC u US stopama na karti.
- Uređivač obitelji: zatvaranje više ne prebacuje fokus tipkovnice na stranicu, gumb Spremi ostaje na vidiku na telefonu, a polja više ne uvećavaju prikaz na telefonu.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (US survey stopa je sama za sebe jedinica). Isključite jedinice koje nikad ne koristite i one nestaju s popisa jedinica; označite jednu zvjezdicom i novi rad započinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U BimCraftu popis {{ui:Units}} na alatnoj traci prati prekidače, zvjezdica postavlja jedinice prikaza dok ih ne odaberete na alatnoj traci (vaš raniji izbor se čuva), a polja za duljinu u alatima za crtanje prihvaćaju oznaku bilo koje jedinice, kao što su `3.5 m` ili `10 US ft`. Pogledajte [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se uredno sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stavlja više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaki bočni panel ima tanku naslovnu traku: povucite je da usidrite ili odvojite panel, ispustite je na naslovnu traku drugog panela da dijelite jedan okvir kao kartice, prikvačite je da se sklopi do ruba ili je sakrijte i vratite s ruba. Pogledajte [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan crteža; vraća se gdje ste ga ostavili. Dvostrukim klikom na naslovnu traku ponovno ga centrirajte. Pogledajte [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset primjera zahtjeva za vašeg pomoćnika (srediti crtež, ispisati skup, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, a svaki ponovo odigran našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Jezici **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom, a nekoliko na španjolskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, loš potpis) umjesto samo „Gotovo“, i ne vraća karticu Što je novo koju ste zatvorili dok ne bude novijeg izdanja.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalacijski program, odaberite Više informacija, zatim Ipak pokreni. Na Macu, prvi put, desnim klikom na CadCraft Studio odaberite {{ui:Open}}. CadCraft Studio još nije u trgovini aplikacija, a još nema ni izrade za iPad ili iPhone.
- Popisi kutova i nagiba u {{ui:Units}} su spremljeni, ali ih još nijedno polje ne čita.
- Path tracing na grafičkoj kartici, dodaci u dijalogu Render i red za renderiranje trebaju WebGPU (bez njega visoka kvaliteta koristi WebGL path tracer); pogled uživo koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Ovdje su testirani samo na softverskoj zamjeni grafičke kartice, još ne na pravim grafičkim karticama. Pogled uživo nema raspršivanje ni dijeljenje u BimCraftu (ModelCraft ih ima).
- Renderiranje snimljenog obilaska kao videa nije ugrađeno u BimCraft.
- Provjere proračuna: I-profil čije IFC ime profila nije veličina W, S, IPE, HEA ili HEB (ili čija se veličina razlikuje od nje) uzima se kao zavaren i vraća se kao „nije provjereno“, kao i cijevi, kutnici, U-profili, vitki dijelovi i uvijanje. Nijedan inženjer još nije pregledao provjere.
- Nacrtani elementi ne mogu se kopirati jedan po jedan, okretati, zrcaliti ili nizati (može se kopirati cijela razina), i nema podijeljenog zida, alata Tekst ni zavjesnog zida. Zid koji se na višoj razini spaja sa zidom s niže razine nije odrezan u 3D tijelo tog zida, a specifikacije navode otvor na višoj razini pod razinom svog zida.
- Obitelji: biblioteka obitelji koje se dijele među projektima nije izrađena. Obitelji i kopirane razine još nisu otvorene u drugim BIM programima.
- MEP: oprema je generička (nema podataka proizvođača); T-komadi i reducirni komadi na čeličnim spoolovima su generički, nisu iz tablice ASME B16.9; priključci predmeta iz knjižnice postavljenih s kartice {{ui:Library}} nisu zapisani u IFC; ništa nije pregledao inženjer.
- Dodatak Plant još ne može nacrtati usmjereni vod u model, numerirati spoolove na svojim izometrijskim prikazima niti provjeriti raspored opreme postavljene iz knjižnice.
- Postrojenja iz biblioteke postrojenja CivilCraft-a još se ne mogu postaviti s kartice {{ui:Library}} u BimCraftu.
- Energija: nema satne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Imovina: nema hostiranog digitalnog blizanca koji čuva očitanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skenova isprobana je na testnim skenovima, još ne na stvarnom skupu skenova skenera; E57 datoteke se još otvaraju do 6 milijuna točaka i 512 MB.
- Projektni paketi se u BimCraftu otvaraju samo u BimCraftu (ostale aplikacije uzimaju raspored preko **Otvori u …**), a paketi i komplet za dva programa testirani su na zamjenama, još ne sa samim Archicadom ili Revitom.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet).
