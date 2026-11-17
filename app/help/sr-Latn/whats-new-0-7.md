---
title: Šta je novo u 0.7 (ranije)
summary: BimCraft dodaje zidove kroz više nivoa i Kopiraj ovaj nivo, zidove iz PDF-ova i skeniranja, sopstvene sklopove zidova, bogatije familije, MEP opremu sa priključcima, skupove sudara, otvore i spulove cevi, dokumente sredstava, COBie i očitavanja senzora, nebo, sunce, dnevnu svetlost na mreži i opterećenja grejanja i hlađenja, registraciju skenova, živi prikaz i praćenje putanje zraka na grafičkoj kartici, STEP i USD, varijante biblioteke, i još više za AI asistente.
keywords: šta je novo 0.7, ranije izdanje, beleške o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, zidovi kroz nivoe, kopiraj ovaj nivo, pdf, skeniranje, prenos, zidovi iz planova, sklopovi zidova, slojevi, jezgro, membrana, referentne kote, biblioteka materijala, jedinice prikaza, stil prikaza, konstrukcija, grede, familije, parametri, simbol u osnovi, hotspot-ovi, ponavljanje, nivo detalja, ugnježdene familije, csv veličine, po elementu, oprema, portovi, veze, razmaci, otvori, spulovi, listovi spulova, montažni var, lista sečenja kanala, dokumenti, cobie, senzori, mqtt, živi tok, vertikalna komponenta neba, solarni dobitak, mreža dnevne svetlosti, grejanje, hlađenje, opterećenja, u-vrednost, registracija skenova, icp, e57, živi prikaz, praćenje putanje, webgpu, odšumljavanje, fizičko nebo, mešanje svetla, red za renderovanje, vaš računar, step, usd, paket projekta, razvij masu, varijante, asistenti, api dodataka, biljka, električno, provere proračuna
from: ef226539
---

Ovo je ono što se promenilo u BimCraft 0.7, u odnosu na 0.6. Spisak je grupisan po oblastima, a najvažnije je prvo.

## Novo

### Crtanje zgrade

- **Zidovi kroz više nivoa.** Lista visina alata Zid nudi **Do** bilo kog nivoa iznad, kao što to nudi Svojstva za izabrani zid. Osnove nivoa između prikazuju zid svetlije, prostorije tamo se zatvaraju uz njega, a vrata i prozori se mogu postaviti u njega iz tih osnova; **Prolazi kroz** u Svojstvima imenuje nivoe kroz koje prolazi. Videti [Promenite zid, vrata ili prozor](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovaj nivo.** {{ui:Kopiraj ovaj nivo…}} u panelu {{ui:Nivoi}} ponovo crta zidove nivoa sa njihovim vratima i prozorima, njegove podove i plafone na drugom nivou ili na novom, iznad, u jednom koraku za {{ui:Opozovi}}; prostorije se pojavljuju same od sebe. Videti [Crtanje zidova](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skeniranja.** {{ui:Verzija}} › {{ui:Iz crteža…}} sada prihvata PDF (linije ili skeniranje unutra) ili skeniran plan (PNG, JPEG, TIFF, više stranica): svaka stranica postaje zidovi, vrata, prozori i prostorije jednog nivoa, sa stranicom sačuvanom ispod njene osnove. Prenos ne koristi mrežu ni obučeni model, a rezultat je ono što su linije dale: proverite svaki nivo prema njegovoj stranici. Videti [Zidovi iz skupa planova](topic:walls-from-plans).
- **Sopstveni sklopovi zidova.** {{ui:Zidni sklopovi…}} pravi tip zida sloj po sloj, sa jezgrom, vazdušnim procepima i membranama, i pregledom sa kotama; {{ui:Biblioteka materijala…}} čuva materijale projekta u IFC-u; {{ui:Napomene}} › {{ui:Referentna kota}} meri do lica i linija jezgra i prati zidove kad se promene. Od saradnika iz zajednice, Doc (drsurfbum). Videti [Sklopovi zidova i referentne kote](topic:wall-assemblies).
- **Jedinice prikaza i kontrole pogleda.** {{ui:Jedinice}} na traci sa alatkama prikazuje dužine u stopama i inčima, inčima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, specifikacijama, koordinatama, merenjima i presecima. {{ui:Plan}}, {{ui:Podeli}} i {{ui:3D}} su na traci sa alatkama, podela se može prevući (ili pomeriti s tastature), {{ui:Senčeno}}, {{ui:Ivice}} i {{ui:Žičani model}} su pored kocke pogleda, a nagib krova, obrub i podgled menjaju izabrani krov odmah. Od saradnika iz zajednice, Joel (yisraelk). Videti [Crtanje zidova](topic:draw-walls#levels).
- **Grede za podove po rasponu.** {{ui:Konstrukcija}} može da postavi inženjerske grede (preliminarno), kao i rezanu građu, birajući najmanju navedenu seriju i visinu koja pokriva raspon, 16" ili 24" od centra, u bilo kom pravcu; idu u IFC i listu sečenja. Predlog iz objavljene tabele proizvođača, a ne inženjerski proračun. Takođe od Joel-a. Videti [Konstrukcija zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Električno}} dodaje podatkovne, telefonske i audio-video utičnice, selektor prekidač, tajmer, termostat, detektore dima i toplote, stanicu za uzbunu i sirenu, ventilator, merač energije i pod-tablu, svaki sa sopstvenom IFC klasom. Videti [Električni plan](topic:electrical-plan).

### Familije

- **Familije rade više.** Parametri mogu biti celi brojevi, tekst, materijal, olovka ili ispuna; familija može nacrtati sopstveni simbol u osnovi, ponoviti čvrsto telo, označiti delove za grublje nivoe detalja, sadržati druge familije (noga u stolu), i imati hotspot-ove koje prevlačite, i na postavljenom elementu u osnovi. Veličine dolaze iz CSV tabele, a parametri označeni **Po elementu** dozvoljavaju da se dvoja vrata iste veličine razlikuju. Videti [Uredite familiju](topic:family-editor#plan-symbol) i [Familije i njihove veličine](topic:families#sizes-from-a-table).

### Cevi, kanali i oprema

- **Oprema sa priključcima.** {{ui:Verzija}} › {{ui:Oprema}} postavlja generičku ventilacionu jedinicu, linijski ventilator, pumpu, bojler, grejač vode, terminalnu jedinicu, difuzor, rešetku ili rezervoar, veličine prema vrednostima koje ukucate, sa vezama cevi i kanala kao priključcima. Svaka se čuva kao njena IFC klasa sa IFC priključcima. Videti [MEP oprema sa priključcima](topic:mep-equipment).
- **Povezane trase.** Cev ili kanal započet na priključku preuzima njegovu veličinu i sistem i ostaje vezan za njega: pomerite pumpu i njena cev prati. {{ui:Proveri veze}} navodi otvorene priključke, slobodne krajeve, neslaganja veličine i sistema i trase koje ništa ne snabdeva. Videti [Povežite cevi i kanale sa opremom](topic:mep-connections).
- **Cevi i kanali naspram konstrukcije.** {{ui:Provera sudara}} ima gotove skupove, a {{ui:Cevi i kanali × konstrukcija}} u jednom kliku; {{ui:Proveri razmake}} koristi izolaciju svake trase plus razmak koji ukucate; {{ui:Potrebni otvori}} navodi mesta gde trase prolaze kroz zidove i ploče, kao CSV i BCF probleme. Ništa se ne seče. Videti [Proverite cevi i kanale naspram konstrukcije](topic:mep-against-structure).
- **Spulovi čeličnih cevi.** Čelična trasa se seče na numerisane spulove na najduže dužine i na {{ui:Montažni var}}-ove koje postavite; {{ui:Listovi spulova (PDF)}} daje stranicu po spulu sa njegovim izometrijskim prikazom, dužinama sečenja, fitinzima, varovima i listom materijala, a {{ui:Lista sečenja kanala}} navodi ravne komade kanala. Videti [Spulovi čeličnih cevi i listovi spulova](topic:pipe-spools).

Ovo su pomoćna sredstva za crtanje i koordinaciju, dimenzionisana od strane inženjera: bez protoka, pritisaka i balansiranja.

### Upravljanje zgradom

- **Dokumenti po sredstvu.** Kartica {{ui:Resursi}} vezuje priručnike, garancije, fotografije i crteže za sredstvo preko naziva datoteke uz IFC ili internet adrese; u IFC ide samo veza. Videti [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tabela.** {{ui:Sačuvaj kao COBie (.xlsx)}} piše COBie 2.4 radnu svesku za predaju, a COBie radna sveska pročitana nazad navodi svaku promenu pre jednog {{ui:Primeni}}. Još nije prošla kroz COBie validator. Videti [COBie tabela](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitavanja senzora i živi tokovi.** Otvorite CSV očitavanja, ili {{ui:Poveži}} direktno iz pregledača na svoj MQTT broker ili adresu na koju vaš sistem zgrade odgovara: svako sredstvo prikazuje poslednje očitavanje i grafikon, boji se na modelu, i označava se ako je van granica sačuvanih u IFC-u. Očitavanja ostaju u kartici; lozinke se nikad ne čuvaju. Videti [Očitavanja senzora](topic:assets-and-maintenance#sensor-readings) i [Živa očitavanja](topic:assets-and-maintenance#live-readings).

### Dnevna svetlost i energija

- **Nebo i sunce kod svakog prozora.** Kartica {{ui:Dnevna svetlost}} daje svakom prozoru njegovu vertikalnu komponentu neba i ugao zaklanjanja, prati sunce kroz datum sa {{ui:Sunce kroz prozore na datum}}, i računa {{ui:Faktor dnevne svetlosti na mreži}} kroz svaku prostoriju, nacrtan na njenoj osnovi. Videti [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grejanja i hlađenja.** {{ui:Opterećenja grejanja i hlađenja}} računa gubitak toplote svake prostorije, njeno grejanje tokom godine iz stepen-dana i njen vrhunac hlađenja, iz onoga što je ograničava u modelu i U-vrednosti svakog elementa; U-vrednost upisana tamo se piše u IFC. Videti [Procena opterećenja grejanja i hlađenja](topic:heating-and-cooling-loads).

Oba su pomoćna sredstva za projektovanje prema objavljenim metodama, a ne proračuni usklađenosti, i svaki panel to kaže.

### Skeniranja

- **Registracija više skenova.** {{ui:Registruj skenove…}} (na početnom panelu, ili u {{ui:Prikaži}}) stavlja skenove u jedan okvir prema izabranim parovima tačaka ili upisanim ciljevima, dotera ih ICP-om od tačke do tačke, pa od tačke do ravni, čuva registraciju kao mali projektni fajl i piše registrisani oblak u jednu LAS ili E57 datoteku. Videti [Registrujte više skenova u jedan](topic:register-scans).

### Slike i živi prikaz

- **Živi prikaz.** {{ui:Živi prikaz}} na traci sa alatkama prikazuje model u izgledu u realnom vremenu pored 3D prikaza, prateći ga i svaku promenu, sa Šetnjom, dobom dana i mesecom; {{ui:Živi prikaz u novom prozoru}} ga stavlja na drugi ekran. Videti [Živi prikaz](topic:live-view).
- **Praćenje putanje na grafičkoj kartici.** Uz WebGPU, {{ui:Renderuj}} › {{ui:Visoki kvalitet (praćenje putanje zraka)}} pokreće CadCraft-ov sopstveni praćač putanje na grafičkoj kartici, može da se zaustavi i {{ui:Nastavi}}, i odšumljava se na kraju; bez WebGPU-a koristi WebGL praćač putanje kao i ranije. Videti [Visoki kvalitet](topic:render#high-quality).
- **Više u dijalogu Renderovanje** (na grafičkoj kartici, pa treba WebGPU): fizičko nebo i slike neba, IES profili svetla, kamera sa f-brojem, dubina polja, perspektiva sa dve tačke, balans beline i 360° panorame, stepen za gotovu sliku, mešanje svetla i elementi renderovanja posle renderovanja, magla, dim i kaustika, čuvanje kao 16-bitni PNG, EXR ili datoteka renderovanja, i red za renderovanje. Videti [Nebo i profili svetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red za renderovanje](topic:render#the-render-queue).
- **Vaš računar.** {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Renderovanje}} › {{ui:Tvoj računar}} prikazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji, i nivo sa kojim renderovanje počinje. Videti [Čime vaš računar renderuje](topic:your-machine).

### Datoteke i ostali programi

- **STEP datoteke se otvaraju.** Deo `.step` ili `.stp`, komad opreme ili model dobavljača (AP203, AP214, AP242) otvara se kao mali IFC model, pri čemu je svako telo element koji možete pregledati, presecati, meriti i čuvati kao IFC. Boje i nazivi delova sklopa još se ne čitaju. Videti [Datoteke koje BimCraft otvara i čuva](topic:files#what-it-opens).
- **USD izvoz.** {{ui:USD}} na traci sa alatkama piše otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene po lokaciji, zgradi, spratu i disciplini, sa IFC klasom, GlobalId i svojstvima svakog elementa. Videti [Izvezite model kao USD](topic:usd).
- **Masa iz CivilCraft-a.** Masa zgrade poslata iz pogleda lokacije u CivilCraft-u prikazuje svoje studijske brojeve u Svojstvima, a {{ui:Razvij ovu masu}} pravi zidove na svakom nivou i pod od nje u jednom koraku za {{ui:Opozovi}}. Videti [Razvijte masu zgrade iz studije lokacije](topic:develop-a-mass).
- **Stavke biblioteke sa varijantama.** Stavka koja dolazi u više varijanti ima izbor {{ui:Varijanta}} u kartici {{ui:Biblioteka}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Zameni stavku…}} navodi ostale varijante, a kopije i ažuriranja je zadržavaju. Videti [Postavite i zamenite stavku biblioteke koja ima varijante](topic:library-variants).
- **Paketi projekta u fascikli.** {{ui:Otvori fasciklu}} navodi datoteke `.ccbundle.zip` pod {{ui:Projektni paketi}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Videti [Otvorite raspored](topic:open-project-bundle#open-a-layout).

### Asistenti i dodaci

- **Više za AI asistente.** Asistent sada može da preimenuje elemente i postavi vrednosti svojstava, pomeri i obriše elemente, menja zidove, vrata i prozore, izveze USD, i renderuje sliku ili pokrene red za renderovanje; svaka izmena je jedan korak za opoziv. Videti [Neka AI asistent radi sa vašim modelom](topic:assistants).
- **Dodaci mogu da grade u modelu.** API dodataka 1.1 omogućava dodatku da napravi izmenu u modelu kao jedan korak za opoziv (putuje u Živom TeamWork-u), da čita model, i da čita trase cevi i kanala, priključke, opremu i spulove.
- **Dodatak Plant** (isključen dok ga ne uključite u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Dodaci}}): specifikacije cevi provere naspram trasa, izometrijski crteži trase kao SVG i DXF sa listom materijala, generička procesna oprema sa priključcima postavljena u model, usmerivač između dva priključka, i provera rasporeda fabrike. Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje; njegove reči su samo na engleskom.

## Promenjeno

- **Prvi dom na laptopu.** Na ekranu veličine laptopa BimCraft počinje samo sa planom, traka za crtanje je uska kolona sa planom smeštenim pored nje, plan i 3D prikaz se vraćaju u vidno polje kad ih crtež napusti, 3D prikaz uokvirava celu kuću u uskom oknu, a vrata i prozori se biraju pre kota.
- **Čuvanje slike.** **Sačuvaj PNG** u dijalogu Renderovanje sada je {{ui:Sačuvaj}}, a {{ui:Sačuvaj kao}} je pored za ostale formate. Videti [Čuvanje slike](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Provere proračuna}}: pravi kombinacije opterećenja po ASCE 7 ili EN 1990 za vaše slučajeve i proverava svaki valjani čelični I-profil (W, S, IPE, HEA ili HEB veličinu po nazivu profila i veličini) po AISC 360 ili EN 1993-1-1, pokazujući koliko njegovog kapaciteta koristi. Aid dok inženjer ne pregleda; zavareni oblici i drugi preseci kažu „nije proveren”. Videti [Provere proračuna](topic:frame-analysis#design-checks).

## Ispravljeno

- Ponovo radnja posle koraka koji je napravio novu veličinu familije nije uspevala („nema veličine”). Svaki korak sada pravi iste IFC GlobalId-jeve pri ponovnom radu, pa ponovno radi za familije i sve druge izmene.
- Kad su dve osobe čuvale istu familiju (u sesiji Živog TeamWork-a ili u dva prozora), drugo čuvanje je tiho zamenilo promenu prvog. Sada odbija i kaže kako da vidite njihovu promenu i ponovo napravite svoju.
- Model u američkim premernim stopama čitao se kao 0.3048 m po stopi umesto 0.3048006096 m, što je pomeralo svaki IFC sa georeferencom u američkim stopama na mapi.
- Uređivač familija: zatvaranje više ne prebacuje tastaturni fokus na stranicu, njegovo Čuvanje ostaje na vidiku na telefonu, a njegova polja više ne uvećavaju telefon.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka premerna stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one izlaze iz lista; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek čuva sopstvenu jedinicu. U BimCraft-u lista {{ui:Jedinice}} na traci prati prekidače, zvezdica postavlja jedinice prikaza dok ih ne izaberete na traci (vaš raniji izbor se čuva), a polja dužine alata za crtanje prihvataju oznaku bilo koje jedinice, kao `3.5 m` ili `10 US ft`. Videti [Jedinice, ukucane vrednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} prikazuje više na ekranu (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da ga usidrite ili učinite lebdećim, spustite je na traku drugog panela da delite okvir kao kartice, zakačite je da kliznu do ivice, ili ga sakrijte i vratite s ivice. Videti [Raspored panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku da ga sklonite s crteža; vraća se tamo gde ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovo centrirate. Videti [Pomerite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahteva za vašeg asistenta (sredite crtež, isplotujte set, proverite crteže, postavite pitanja o modelu, saberite predmer, isprobajte varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu trebaju, a svaki ponovo proveren našim testovima. Aplikacije ne sadrže nikakav AI. Videti [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje nije pregledao izvorni govornik. Pomoćne teme su na engleskom, a neke na španskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umesto samo „Gotovo”, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Nije u ovoj verziji još

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema build za iPad ni iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- Praćenje putanje na grafičkoj kartici, dodaci u dijalogu Renderovanje i red za renderovanje zahtevaju WebGPU (bez njega, visoki kvalitet koristi WebGL praćač putanje); živi prikaz koristi WebGPU tamo gde ga pregledač ima, inače WebGL 2. Ovde su testirani samo na softverskoj zameni grafičke kartice, još ne na pravim grafičkim karticama. Živi prikaz u BimCraft-u nema raspršivanje ni deljenje (ono u ModelCraft-u ih ima).
- Renderovanje snimljene šetnje kao video nije ugrađeno u BimCraft.
- Provere proračuna: I-profil čije IFC ime profila nije W, S, IPE, HEA ili HEB veličina (ili čija se veličina razlikuje od nje) uzima se kao zavareni i vraća „nije proveren”, kao i cevi, uglovi, kanali, vitki delovi i torzija. Nijedan inženjer još nije pregledao provere.
- Nacrtani elementi se ne mogu kopirati pojedinačno, okretati, ogledalski prebacivati ni rasporediti u niz (može se kopirati ceo nivo), i nema zida koji se deli, alata Tekst ili zavesnog zida. Zid koji se na gornjem nivou sastaje sa zidom sa nižeg nivoa ne seče se u 3D telo tog zida, a specifikacije navode otvor na gornjem nivou pod sopstvenim nivoom zida.
- Familije: biblioteka familija deljenih između projekata nije izrađena. Familije i kopirani nivoi još nisu otvarani u drugim BIM programima.
- MEP: oprema je generička (bez podataka proizvođača); T-komadi i redukcije na čeličnim spulovima su generički, a ne iz tabele ASME B16.9; priključci stavki biblioteke postavljenih iz kartice {{ui:Biblioteka}} se ne upisuju u IFC; ništa nije pregledao inženjer.
- Dodatak Plant još ne može da nacrta vođenu trasu u model, da numeriše spulove na svojim izometrijama, ili da proveri raspored opreme postavljene iz biblioteke.
- Biljke iz biblioteke biljaka CivilCraft-a još ne mogu da se postave iz kartice {{ui:Biblioteka}} u BimCraft-u.
- Energija: nema satne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Sredstva: nema hostovanog bliznaca koji čuva očitavanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skenova je isprobana na test-skenovima, još ne na pravom skupu skenova skenera; E57 datoteke se i dalje otvaraju do 6 miliona tačaka i 512 MB.
- Paketi projekta se otvaraju samo u BimCraft-u (drugi programi uzimaju raspored preko **Otvori u …**), a paketi i komplet za dva programa su isprobani na zamenama, još ne sa samim Archicad-om ili Revit-om.

Sve ostalo je u [Šta još nije izrađeno](topic:not-built-yet).
