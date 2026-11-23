---
title: Što je novo u verziji 0.7 (ranije)
summary: BimCraft dodaje zidove kroz više razina i Kopiraj ovu razinu, zidove iz PDF-ova i skeniranja, vlastite sklopove zidova, bogatije obitelji, opremu za MEP s priključcima, skupove sudara, otvore i spoolove cijevi, dokumente za resurse, COBie i očitanja senzora, nebo, sunce, dnevno svjetlo na mreži i opterećenja grijanja i hlađenja, registraciju skeniranja, pogled uživo i praćenje zrake na grafičkoj kartici, STEP i USD, varijante knjižnice i još mnogo za AI asistente.
keywords: što je novo 0.7, raniji izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove značajke, zidovi kroz razine, kopiraj ovu razinu, pdf, skeniranje, ucrtavanje, zidovi iz tlocrta, sklopovi zida, slojevi, jezgra, membrana, referentne kote, knjižnica materijala, jedinice prikaza, stil prikaza, okvirna konstrukcija, grede, obitelji, parametri, simbol tlocrta, vruće točke, ponavljanje, razina detalja, ugniježđene obitelji, CSV veličine, po elementu, oprema, priključci, veze, razmaci, otvori, spoolovi, listovi spoolova, zavar na terenu, popis rezanja kanala, dokumenti, cobie, senzori, mqtt, izravni prijenos, vertikalna komponenta neba, solarni dobitak, mreža dnevnog svjetla, grijanje, hlađenje, opterećenja, u-vrijednost, registracija skeniranja, icp, e57, pogled uživo, praćenje zrake, webgpu, uklanjanje šuma, fizičko nebo, miješanje svjetla, red renderiranja, vaše računalo, step, usd, projektni paket, razrada mase, varijante, asistenti, api dodataka, postrojenje, elektrika, provjere proračuna
from: a638080d
---

Ovo je ono što se promijenilo u BimCraftu 0.7 u odnosu na 0.6. Popis je grupiran po području, s najvažnijim na prvom mjestu.

## Novo

### Crtanje zgrade

- **Zidovi kroz više razina.** Popis visine alata Zid nudi **Do** bilo koje razine više, kao što to nudi Svojstva za odabrani zid. Tlocrti razina između njih prikazuju zid svjetlijim, prostorije tamo se zatvaraju uz njega, a vrata i prozori mogu se postaviti u njega s tih tlocrta; **Prolazi kroz** u Svojstvima navodi razine kroz koje prolazi. Vidi [Promijenite zid, vrata ili prozor](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovu razinu.** {{ui:Kopiraj ovu razinu…}} u panelu {{ui:Razine}} ponovno crta zidove razine s njezinim vratima i prozorima, njezine podove i stropove na drugoj razini ili na novoj razini iznad, u jednom koraku poništavanja; prostorije se pojavljuju same od sebe. Vidi [Crtanje zidova](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skeniranja.** {{ui:Izgradnja}} › {{ui:Iz crteža…}} sada prima PDF (linijski crtež ili skeniranje unutar njega) ili skenirani tlocrt (PNG, JPEG, TIFF, više stranica): svaka stranica postaje zidovi, vrata, prozori i prostorije jedne razine, s tlocrtom stranice zadržanim ispod njegova tlocrta. Ucrtavanje ne koristi mrežu ni trenirani model, a rezultat je ono što su linije dale: provjerite svaku razinu prema njezinoj stranici. Vidi [Zidovi iz skupa tlocrta](topic:walls-from-plans).
- **Vlastiti sklopovi zidova.** {{ui:Sklopovi zida…}} izrađuje vrstu zida sloj po sloj, s jezgrom, zračnim razmacima i membranama, i pregled s kotama; {{ui:Knjižnica materijala…}} čuva materijale projekta u IFC-u; {{ui:Anotiraj}} › {{ui:Referentna kota}} mjeri do ploha i linija jezgre i slijedi zidove kad se promijene. Od suradnika iz zajednice, Doc (drsurfbum). Vidi [Sklopovi zida i referentne kote](topic:wall-assemblies).
- **Jedinice prikaza i kontrole pogleda.** {{ui:Jedinice}} na alatnoj traci prikazuje duljine u stopama i inčima, inčima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, specifikacijama, koordinatama, mjerenjima i presjecima. {{ui:Tlocrt}}, {{ui:Podijeli}} i {{ui:3D}} stoje na alatnoj traci, podijeljeni prikaz može se povući (ili pomaknuti s tipkovnice), {{ui:Sjenčano}}, {{ui:Bridovi}} i {{ui:Žičani model}} stoje uz kocku pogleda, a nagib krova, čeona daska i podgled mijenjaju odabrani krov odmah. Od suradnika iz zajednice, Joel (yisraelk). Vidi [Crtanje zidova](topic:draw-walls#levels).
- **Podne grede prema rasponu.** {{ui:Okvirna konstrukcija}} može izraditi inženjerske grede (preliminarno) kao i piljenu građu, birajući najmanju navedenu seriju i visinu koja doseže raspon, 16" ili 24" osno, u bilo kojem smjeru; ulaze u IFC i popis za rezanje. Prijedlog iz proizvođačeve objavljene tablice, a ne inženjerski proračun. Također od Joela. Vidi [Okvir zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Elektrika}} dodaje utičnice za podatke, telefon i audio-video, birač sklopki, mjerač vremena, termostat, detektore dima i topline, tipkalo za uzbunu i sirenu, ventilator, brojilo energije i podrazvodnu ploču, svaki sa svojom IFC klasom. Vidi [Električni tlocrt](topic:electrical-plan).

### Obitelji

- **Obitelji rade više.** Parametri mogu biti cijeli brojevi, tekst, materijal, pero ili ispuna; obitelj može sama nacrtati simbol tlocrta, ponoviti čvrsto tijelo, označiti dijelove za grublje razine detalja, sadržavati druge obitelji (nogu u stolu) i imati vruće točke koje povlačite, također na postavljenom elementu u tlocrtu. Veličine dolaze iz CSV tablice, a parametri označeni **Po elementu** dopuštaju da se dvoja vrata iste veličine razlikuju. Vidi [Uređivanje obitelji](topic:family-editor#plan-symbol) i [Obitelji i njihove veličine](topic:families#sizes-from-a-table).

### Cijevi, kanali i oprema

- **Oprema s priključcima.** {{ui:Izgradnja}} › {{ui:Oprema}} postavlja opći rukovatelj zrakom, ugrađeni ventilator, pumpu, kotao, grijač vode, terminalnu jedinicu, difuzor, rešetku ili spremnik, veličine prema vrijednostima koje upišete, s priključcima cijevi i kanala kao priključcima. Svaka se sprema kao njezina IFC klasa s IFC priključcima. Vidi [MEP oprema s priključcima](topic:mep-equipment).
- **Povezani vodovi.** Cijev ili kanal započet na priključku preuzima njegovu veličinu i sustav i ostaje vezan za njega: pomaknete pumpu i njezina cijev slijedi. {{ui:Provjeri veze}} navodi otvorene priključke, labave krajeve, neusklađenosti veličine i sustava te vodove koje ništa ne opskrbljuje. Vidi [Spajanje cijevi i kanala na opremu](topic:mep-connections).
- **Cijevi i kanali prema konstrukciji.** {{ui:Provjera sudara}} ima gotove skupove, a {{ui:Cijevi i kanali × konstrukcija}} jednim klikom; {{ui:Provjeri razmake}} koristi izolaciju svakog voda plus razmak koji upišete; {{ui:Potrebni otvori}} navodi mjesta gdje vodovi prolaze kroz zidove i ploče, kao CSV i BCF probleme. Ništa se ne reže. Vidi [Provjera cijevi i kanala prema konstrukciji](topic:mep-against-structure).
- **Čelični spoolovi cijevi.** Čelični vod se reže na numerirane spoolove na najdužoj duljini i na mjestima {{ui:Zavar na terenu}} koje postavite; {{ui:Listovi spoolova (PDF)}} daje stranicu po spoolu s njegovim izometrijskim prikazom, duljinama rezanja, fitinzima, zavarima i popisom materijala, a {{ui:Popis rezanja kanala}} navodi ravne komade kanala. Vidi [Čelični spoolovi cijevi i listovi spoolova](topic:pipe-spools).

Ovo su pomoćna sredstva za crtanje i koordinaciju, dimenzionirana od strane inženjera: bez protoka, tlakova ili balansiranja.

### Upravljanje zgradom

- **Dokumenti po resursu.** Kartica {{ui:Resursi}} povezuje priručnike, jamstva, fotografije i crteže s resursom preko naziva datoteke uz IFC ili web adrese; u IFC ide samo veza. Vidi [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tablica.** {{ui:Spremi kao COBie (.xlsx)}} piše COBie 2.4 radnu knjigu za primopredaju, a COBie radna knjiga pročitana natrag navodi svaku promjenu prije jednog {{ui:Primijeni}}. Još nije prošla kroz COBie validator. Vidi [COBie tablica](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitanja senzora i izravni prijenosi.** Otvorite CSV očitanja, ili {{ui:Poveži}} izravno iz preglednika s vašim vlastitim MQTT posrednikom ili adresom na koju vaš sustav zgrade odgovara: svaki resurs prikazuje najnovije očitanje i grafikon, boji se na modelu i označava se izvan granica spremljenih u IFC-u. Očitanja ostaju u kartici; lozinke se nikad ne spremaju. Vidi [Očitanja senzora](topic:assets-and-maintenance#sensor-readings) i [Očitanja uživo](topic:assets-and-maintenance#live-readings).

### Dnevno svjetlo i energija

- **Nebo i sunce kod svakog prozora.** Kartica {{ui:Dnevno svjetlo}} daje svakom prozoru njegovu vertikalnu komponentu neba i kut zaklona, prati sunce kroz datum s {{ui:Sunce kroz prozore na određeni datum}}, i izračunava {{ui:Faktor dnevne svjetlosti na mreži}} preko svake prostorije, nacrtan na njezinu tlocrtu. Vidi [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grijanja i hlađenja.** {{ui:Opterećenja grijanja i hlađenja}} izračunava gubitak topline svake prostorije, njezino grijanje tijekom godine iz stupanj-dana i vršno hlađenje, iz onoga što je omeđuje u modelu i U-vrijednosti svakog elementa; U-vrijednost upisana tamo zapisuje se u IFC. Vidi [Procjena opterećenja grijanja i hlađenja](topic:heating-and-cooling-loads).

Obje su pomoćna sredstva za projektiranje prema objavljenim metodama, a ne proračuni za usklađenost, i svaka ploča to kaže.

### Skeniranja

- **Registracija više skeniranja.** {{ui:Registracija skeniranja…}} (na početnoj ploči ili u {{ui:Prikaži}}) postavlja skeniranja u jedan okvir prema odabranim parovima točaka ili upisanim ciljevima, dotjeruje ih ICP-om, točka po točku pa točka po ravnini, sprema registraciju kao malu projektnu datoteku i zapisuje registrirani oblak kao jednu LAS ili E57 datoteku. Vidi [Registracija više skeniranja u jedno](topic:register-scans).

### Slike i pogled uživo

- **Pogled uživo.** {{ui:Pogled uživo}} na alatnoj traci prikazuje model u izgledu u stvarnom vremenu pokraj 3D prikaza, prateći ga i svaku promjenu, s Šetnjom, dobom dana i mjesecom; {{ui:Pogled uživo u novom prozoru}} ga stavlja na drugi zaslon. Vidi [Pogled uživo](topic:live-view).
- **Praćenje zrake na grafičkoj kartici.** S WebGPU-om, {{ui:Render}} › {{ui:Visoka kvaliteta (path tracing)}} pokreće CadCraftov vlastiti path tracer na grafičkoj kartici, može se zaustaviti i {{ui:Nastavi}}, i na kraju se uklanja šum; bez WebGPU-a koristi WebGL path tracer kao i prije. Vidi [Visoka kvaliteta](topic:render#high-quality).
- **Više u dijaloškom okviru Render** (na grafičkoj kartici, pa treba WebGPU): fizičko nebo i slike neba, IES profili svjetla, kamera s f-brojem, dubinom polja, dvotočkovnom perspektivom, balansom bijele boje i 360° panoramama, stupanj za gotovu sliku, miješanje svjetla i elementi renderiranja nakon renderiranja, magla, dim i kaustika, spremanje kao 16-bitni PNG, EXR ili datoteka renderiranja, te red renderiranja. Vidi [Nebo i profili svjetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red renderiranja](topic:render#the-render-queue).
- **Vaše računalo.** {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Renderiranje}} › {{ui:Vaše računalo}} prikazuje grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji, i razinu s kojom renderiranje počinje. Vidi [Čime se vaše računalo renderira](topic:your-machine).

### Datoteke i druge aplikacije

- **Otvaranje STEP datoteka.** Dio, komad opreme ili model dobavljača u `.step` ili `.stp` datoteci (AP203, AP214, AP242) otvara se kao mali IFC model; svaki čvrsti element možete pregledati, presjeći, izmjeriti i spremiti kao IFC. Boje i nazivi dijelova sklopa još se ne čitaju. Vidi [Datoteke koje BimCraft otvara i sprema](topic:files#what-it-opens).
- **Izvoz USD-a.** {{ui:USD}} na alatnoj traci zapisuje otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene po lokaciji, zgradi, etaži i disciplini, sa svakom IFC klasom elementa, GlobalId-em i svojstvima. Vidi [Izvoz modela kao USD](topic:usd).
- **Masa iz CivilCraftа.** Građevinska masa poslana iz CivilCraftova prikaza lokacije prikazuje svoje brojeve studije u Svojstvima, a {{ui:Razradi ovu masu}} gradi zidove na svakoj razini i pod od nje u jednom koraku poništavanja. Vidi [Razrada građevinske mase iz studije lokacije](topic:develop-a-mass).
- **Elementi knjižnice s varijantama.** Element koji dolazi u nekoliko varijanti ima izbor {{ui:Varijanta}} u kartici {{ui:Knjižnica}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Zamijeni stavku…}} navodi ostale varijante, a kopije i ažuriranja je zadržavaju. Vidi [Postavljanje i zamjena elementa knjižnice s varijantama](topic:library-variants).
- **Projektni paketi u mapi.** {{ui:Otvori mapu}} navodi `.ccbundle.zip` datoteke pod {{ui:Projektni paketi}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Vidi [Otvaranje rasporeda](topic:open-project-bundle#open-a-layout).

### Asistenti i dodaci

- **Više za AI asistente.** Asistent sada može preimenovati elemente i postaviti vrijednosti svojstava, pomicati i brisati elemente, mijenjati zidove, vrata i prozore, izvesti USD, te renderirati sliku ili pokrenuti red renderiranja; svaka promjena je jedan korak poništavanja. Vidi [Pustite AI asistenta da radi s vašim modelom](topic:assistants).
- **Dodaci mogu graditi u modelu.** API dodataka 1.1 omogućuje dodatku da napravi promjenu u modelu kao jedan korak poništavanja (putuje u Live TeamWork), čita model te čita vodove cijevi i kanala, priključke, opremu i spoolove.
- **Dodatak Plant** (isključen dok ga ne uključite u {{ui:Postavke}} › {{ui:Opće}} › {{ui:Dodaci}}): provjere specifikacija cijevi prema vodovima, izometrijski crteži voda kao SVG i DXF s popisom materijala, generička procesna oprema s mlaznicama postavljenima u modelu, usmjerivač između dva priključka i provjera rasporeda postrojenja. Pomoćno sredstvo za crtanje, ne inženjersko odobrenje; njegove riječi su samo na engleskom.

## Promijenjeno

- **Prvi dom na prijenosnom računalu.** Na zaslonu veličine prijenosnog računala BimCraft se pokreće samo s tlocrtom, traka Crtanje je uska ploča s tlocrtom uz nju, tlocrt i 3D prikaz vraćaju se u vidno polje kad ih crtež napusti, 3D prikaz uokviruje cijelu kuću u uskom oknu, a vrata i prozori biraju se prije kotnih linija.
- **Spremanje slike.** **Spremi PNG** u dijaloškom okviru Render sada je {{ui:Spremi}}, uz {{ui:Spremi kao}} pokraj za ostale formate. Vidi [Spremanje slike](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Provjere proračuna}}: izrađuje kombinacije opterećenja prema ASCE 7 ili EN 1990 za vaše slučajeve i provjerava svaki valjani čelični I-profil (dimenziju W, S, IPE, HEA ili HEB prema nazivu profila i dimenziji) prema AISC 360 ili EN 1993-1-1, prikazujući koliko nosivosti koristi. Pomoćno sredstvo dok inženjer ne pregleda; zavareni oblici i drugi presjeci kažu „nije provjereno“. Vidi [Provjere proračuna](topic:frame-analysis#design-checks).

## Ispravljeno

- Ponovi nakon koraka koji je stvorio novu veličinu obitelji nije uspjelo („nema veličine“). Svaki korak sada stvara iste IFC GlobalId-eve pri ponovnom izvršavanju, pa ponovi radi za obitelji i svaku drugu promjenu.
- Kad su dvije osobe spremile istu obitelj (u sesiji Live TeamWork ili u dva prozora), drugo spremanje je nečujno zamijenilo promjenu prve. Sada odbija i kaže kako vidjeti njihovu promjenu i ponovno napraviti vašu.
- Model u američkim geodetskim stopama čitao se kao 0.3048 m po stopi umjesto 0.3048006096 m, što je pomicalo svaki georeferencirani IFC u američkim stopama na karti.
- Uređivač obitelji: zatvaranje ga više ne ispušta fokus tipkovnice na stranicu, njegov Spremi ostaje vidljiv na telefonu, a njegova polja više ne povećavaju telefon.

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Opće}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je vlastita jedinica). Isključite jedinice koje nikad ne koristite i one nestaju s popisa; označite jednu i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U BimCraftu popis {{ui:Jedinice}} na alatnoj traci slijedi prekidače, zvjezdica postavlja jedinice prikaza dok ih ne odaberete na alatnoj traci (vaš raniji odabir se čuva), a okviri za duljinu alata za crtanje prihvaćaju oznaku bilo koje jedinice, primjerice `3.5 m` ili `10 US ft`. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opće}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} stane više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: povucite je da usidrite ili odvojite panel, ispustite je na naslovnu traku drugog panela da dijele jedan okvir kao kartice, pričvrstite je da kliže prema rubu, ili je sakrijte i vratite s ruba. Vidi [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahtjeva za vaš vlastiti asistent (urediti crtež, ispisati skup, provjeriti crteže, postaviti pitanje modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovno pokrenut našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Postavke}} › {{ui:Opće}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Pomoćne teme su na engleskom, a nekoliko na španjolskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, loš potpis) umjesto samo {{ui:Gotovo}}, i prestaje vraćati karticu Što je novo koju ste zatvorili dok ne postoji novije izdanje.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Storea premješteni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}. Na Macu, prvi put, desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvoreno}}. CadCraft Studio još nije u trgovini aplikacija, a još nema verzije za iPad ili iPhone.
- Kut i nagib u {{ui:Jedinice}} se spremaju, ali nijedan okvir ih još ne čita.
- Staza zraka na grafičkoj kartici, dodaci u dijaloškom okviru Render i red renderiranja trebaju WebGPU (bez njega visoka kvaliteta koristi WebGL path tracer); pogled uživo koristi WebGPU gdje ga preglednik ima, inače WebGL 2. Testirani su ovdje samo na softverskoj zamjeni grafičke kartice, još ne na stvarnim karticama. Pogled uživo u BimCraftu nema raspršivanja ni dijeljenja (ModelCraft ih ima).
- Snimljeni obilazak kao video nije ugrađen u BimCraft.
- Provjere proračuna: I-profil čije IFC ime profila nije dimenzija W, S, IPE, HEA ili HEB (ili čija se dimenzija razlikuje od nje) uzima se kao zavaren i vraća se kao „nije provjereno“, kao i cijevi, kutnici, kanali, vitki dijelovi i uvijanje. Nijedan inženjer još nije pregledao provjere.
- Nacrtani elementi ne mogu se kopirati jedan po jedan, okretati, zrcaliti ili polagati u niz (može se kopirati cijela razina), a nema podijeljenog zida, alata Tekst ni zavjesnog zida. Zid koji se na gornjoj razini sastaje sa zidom s niže razine ne reže se u 3D tijelo tog zida, a rasporedi navode otvor gornje razine pod razinom njegova zida.
- Obitelji: biblioteka obitelji dijeljenih među projektima nije izrađena. Obitelji i kopirane razine još nisu otvorene u drugim BIM programima.
- MEP: oprema je generička (bez podataka proizvođača); T-komadi i reduktori na čeličnim spoolovima su generički, a ne iz tablice ASME B16.9; priključci elemenata knjižnice postavljenih iz kartice {{ui:Knjižnica}} ne zapisuju se u IFC; ništa ne pregledava inženjer.
- Dodatak Plant još ne može nacrtati vođeni vod u model, numerirati spoolove na svojim izometrijama niti provjeriti raspored opreme postavljene iz knjižnice.
- Postrojenja iz knjižnice postrojenja CivilCrafta još se ne mogu postaviti iz kartice {{ui:Knjižnica}} BimCrafta.
- Energija: nema satne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Resursi: nema hostiranog blizanca koji čuva očitanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skeniranja isprobana je na testnim skeniranjima, još ne na stvarnom skupu skenera; E57 datoteke i dalje se otvaraju do 6 milijuna točaka i 512 MB.
- Projektni paketi otvaraju se samo u BimCraftu (druge aplikacije preuzimaju raspored preko **Otvori u …**), a paketi i komplet za dva programa testirani su na zamjenama, ne još s Archicadom ili Revitom.

Sve ostalo je u [Što još nije izrađeno](topic:not-built-yet).
