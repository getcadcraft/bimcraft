---
title: Šta je novo u 0.7
summary: BimCraft dodaje zidove kroz više nivoa i Kopiraj ovaj nivo, zidove iz PDF-ova i skenova, sopstvene zidne sklopove, bogatije porodice, MEP opremu sa priključcima, skupove sudara, otvore i spulove cevi, dokumente imovine, COBie i očitavanja senzora, nebo, sunce, dnevnu svetlost na mreži i opterećenja grejanja i hlađenja, registraciju skenova, živi prikaz i praćenje putanje zraka na grafičkoj kartici, STEP i USD, varijante iz biblioteke i još za AI asistente.
keywords: šta je novo, novosti, beleške o izdanju, izmene, 0.7, verzija, nove funkcije, zidovi kroz nivoe, kopiraj ovaj nivo, pdf, skener, praćenje putanje, zidovi iz planova, zidni sklopovi, slojevi, jezgro, membrana, referentne kote, biblioteka materijala, prikaz jedinica, stil prikaza, konstrukcija, nosači, porodice, parametri, simbol u planu, tačke osetljive na dodir, ponavljanje, nivo detalja, ugnježdene porodice, veličine csv, po elementu, oprema, priključci, veze, razmaci, otvori, spulovi, listovi spulova, montažni var, lista sečenja kanala, dokumenti, cobie, senzori, mqtt, živi tok, vertikalna komponenta neba, sunčani dobitak, mreža dnevne svetlosti, grejanje, hlađenje, opterećenja, u-vrednost, registracija skenova, icp, e57, živi prikaz, praćenje putanje, webgpu, odšumljavanje, fizičko nebo, mešanje svetla, red za renderovanje, tvoj računar, step, usd, paket projekta, razvij masu, varijante, asistenti, api dodataka, plant, električno, proračunske provere
from: 5c27b80a
---

Ovo je šta se promenilo u BimCraft-u 0.7 u odnosu na 0.6. Spisak je grupisan po oblastima, sa najvažnijim na vrhu.

## Novo

### Crtanje zgrade

- **Zidovi kroz nekoliko nivoa.** Lista visina alata Zid nudi **Do** bilo kog nivoa iznad, kao što to radi Svojstva za izabrani zid. Planovi nivoa između prikazuju zid svetlijim, sobe tamo se naslanjaju na njega, a vrata i prozori mogu se postaviti u njega sa tih planova. **Prolazi kroz** u Svojstvima navodi nivoe kroz koje prolazi. Pogledajte [Izmena zida, vrata ili prozora](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ovaj nivo.** {{ui:Copy this level…}} u panelu Nivoi ponovo crta zidove nivoa sa njihovim vratima i prozorima, njegove podove i plafone na drugom nivou ili na novom iznad, u jednom koraku opozivanja; sobe se pojavljuju same. Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Zidovi iz PDF-a ili skena.** {{ui:Build}} › {{ui:From a drawing…}} sada prihvata PDF (linijski crtež ili skeniranje unutar njega) ili skenirani plan (PNG, JPEG, TIFF, više stranica): svaka stranica postaje zidovi, vrata, prozori i sobe jednog nivoa, a stranica ostaje sačuvana ispod plana. Praćenje ne koristi mrežu ni obučeni model, a rezultat je onoliki koliko linije daju: proverite svaki nivo sa njegovom stranicom. Pogledajte [Zidovi iz skupa planova](topic:walls-from-plans).
- **Sopstveni zidni sklopovi.** {{ui:Wall assemblies…}} pravi tip zida sloj po sloj, sa jezgrom, vazdušnim slojevima i membranama, i pregled sa kotama. {{ui:Material library…}} čuva materijale projekta u IFC-u, a {{ui:Annotate}} › {{ui:Reference dimension}} meri do lica i osa jezgra i prati zidove kada se promene. Od saradnika iz zajednice, Doc (drsurfbum). Pogledajte [Zidni sklopovi i referentne kote](topic:wall-assemblies).
- **Prikaz jedinica i kontrole prikaza.** {{ui:Units}} na traci alata prikazuje dužine u stopama i inčima, inčima, decimalnim stopama, milimetrima, centimetrima ili metrima, u kotama, spiskovima, koordinatama, merenjima i presecima. {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} nalaze se na traci alata, podela se može prevlačiti (ili pomerati sa tastature), a {{ui:Shaded}}, {{ui:Edges}} i {{ui:Wireframe}} nalaze se pored kocke pogleda. Nagib krova, čeoni i donji deo sa strane menjaju izabrani krov odmah. Od saradnika iz zajednice, Joel (yisraelk). Pogledajte [Crtanje zidova](topic:draw-walls#levels).
- **Podni nosači po rasponu.** {{ui:Framing}} može da rasporedi inženjerske podne nosače (preliminarno), kao i piljenu građu, birajući najmanju navedenu seriju i visinu koja pokriva raspon, na 16" ili 24" od centra, u bilo kom pravcu; idu u IFC i listu sečenja. Predlog iz objavljene tabele proizvođača, a ne inženjerski proračun. Takođe od Joela. Pogledajte [Konstrukcija zidova, podova i krovova](topic:framing).
- **Više električnih uređaja.** {{ui:Electrical}} dodaje podatkovne, telefonske i audio-video utičnice, birački prekidač, tajmer, termostat, detektore dima i toplote, ručni alarm i sirenu, ventilator, merač energije i pod-tablu, svaki sa sopstvenom IFC klasom. Pogledajte [Električni plan](topic:electrical-plan).

### Porodice

- **Porodice više rade.** Parametri mogu biti celi brojevi, tekst, materijal, pero ili ispuna; porodica može sama da nacrta simbol u planu, da ponovi čvrsto telo, označi delove za grublje nivoe detalja, da sadrži druge porodice (nogu u stolu) i da ima aktivne tačke koje prevlačite, i na postavljenom elementu u planu. Veličine dolaze iz CSV tabele, a parametri označeni kao **Po elementu** dozvoljavaju da se dva vrata iste veličine razlikuju. Pogledajte [Izmena porodice](topic:family-editor#plan-symbol) i [Porodice i njihove veličine](topic:families#sizes-from-a-table).

### Cevi, kanali i oprema

- **Oprema sa priključcima.** {{ui:Build}} › {{ui:Equipment}} postavlja opšti rukovaoč vazduhom, linijski ventilator, pumpu, kotao, grejač vode, terminalnu jedinicu, difuzor, rešetku ili rezervoar, dimenzionisan vrednostima koje upišete, sa cevnim i kanalnim vezama kao priključcima. Svaki se čuva kao svoja IFC klasa sa IFC priključcima. Pogledajte [MEP oprema sa priključcima](topic:mep-equipment).
- **Povezane deonice.** Cev ili kanal započet na priključku preuzima njegovu veličinu i sistem i ostaje vezan za njega: pomerite pumpu i njena cev prati. {{ui:Check connections}} navodi otvorene priključke, labave krajeve, neslaganja veličine i sistema i deonice koje ništa ne napajaju. Pogledajte [Povezivanje cevi i kanala sa opremom](topic:mep-connections).
- **Cevi i kanali u odnosu na konstrukciju.** {{ui:Clash check}} ima gotove skupove, a {{ui:Pipes and ducts × structure}} u jednom koraku; {{ui:Check clearances}} koristi izolaciju svake deonice i razmak koji upišete; {{ui:Openings needed}} navodi mesta gde deonice prolaze kroz zidove i ploče, kao CSV i BCF probleme. Ništa se ne seče. Pogledajte [Provera cevi i kanala u odnosu na konstrukciju](topic:mep-against-structure).
- **Spulovi čeličnih cevi.** Čelična deonica se seče na numerisane spulove najveće dužine i na mestima {{ui:Field weld}} koje postavite; {{ui:Spool sheets (PDF)}} daje stranicu za svaki spul sa njegovim izometrijskim prikazom, dužinama sečenja, fitingom, varovima i spiskom materijala, a {{ui:Duct cut list}} navodi ravne delove kanala. Pogledajte [Spulovi čeličnih cevi i listovi spulova](topic:pipe-spools).

Ovo su pomoćna sredstva za crtanje i koordinaciju, dimenzionisana od strane inženjera: bez protoka, pritisaka i balansiranja.

### Rad sa zgradom

- **Dokumenti po imovini.** Kartica {{ui:Assets}} povezuje priručnike, garancije, fotografije i crteže sa imovinom preko naziva datoteke pored IFC-a ili web adrese; u IFC ide samo veza. Pogledajte [Dokumenti](topic:assets-and-maintenance#documents).
- **COBie tabela.** {{ui:Save as COBie (.xlsx)}} piše COBie 2.4 radnu svesku za predaju, a COBie radna sveska pročitana nazad navodi svaku izmenu pre jednog {{ui:Apply}}. Još nije prošla kroz COBie validator. Pogledajte [COBie tabela](topic:assets-and-maintenance#cobie-spreadsheet).
- **Očitavanja senzora i živi tokovi.** Otvorite CSV sa očitavanjima ili {{ui:Connect}} direktno iz pregledača na svoj MQTT broker ili adresu na koju odgovara vaš sistem zgrade: svaka imovina prikazuje poslednje očitavanje i grafikon, boji se na modelu i označava se kada je van granica sačuvanih u IFC-u. Očitavanja ostaju u kartici; lozinke se nikada ne čuvaju. Pogledajte [Očitavanja senzora](topic:assets-and-maintenance#sensor-readings) i [Živa očitavanja](topic:assets-and-maintenance#live-readings).

### Dnevna svetlost i energija

- **Nebo i sunce na svakom prozoru.** Kartica {{ui:Daylight}} daje svakom prozoru njegovu vertikalnu komponentu neba i ugao zaklanjanja, prati sunce kroz datum sa {{ui:Sun through the windows on a date}}, i računa {{ui:Daylight factor on a grid}} kroz svaku sobu, nacrtan na njenom planu. Pogledajte [Vertikalna komponenta neba svakog prozora](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Opterećenja grejanja i hlađenja.** {{ui:Heating and cooling loads}} računa gubitak toplote svake sobe, njeno grejanje tokom godine iz stepen-dana i njen vrhunac hlađenja, iz onoga što je ograničava u modelu i U-vrednosti svakog elementa; U-vrednost upisana tamo upisuje se u IFC. Pogledajte [Procena opterećenja grejanja i hlađenja](topic:heating-and-cooling-loads).

Oba su pomoćna sredstva za projektovanje prema objavljenim metodama, a ne proračuni usklađenosti, i svaki panel to kaže.

### Skenovi

- **Registracija više skenova.** {{ui:Register scans…}} (na početnom panelu ili u {{ui:Show}}) smešta skenove u jedan okvir pomoću izabranih parova tačaka ili upisanih ciljeva, dotera ih ICP-om tačka-do-tačke, zatim tačka-do-ravni, čuva registraciju kao malu datoteku projekta i piše registrovani oblak kao jednu LAS ili E57 datoteku. Pogledajte [Registracija više skenova u jedan](topic:register-scans).

### Slike i živi prikaz

- **Živi prikaz.** {{ui:Live view}} na traci alata prikazuje model u izgledu u realnom vremenu uz 3D prikaz, prateći ga i svaku izmenu, sa Walk, dobom dana i mesecom; {{ui:Live view in a new window}} ga stavlja na drugi ekran. Pogledajte [Živi prikaz](topic:live-view).
- **Praćenje putanje na grafičkoj kartici.** Uz WebGPU, {{ui:Render}} › {{ui:High quality (path traced)}} pokreće sopstveni CadCraft praćenje putanje na grafičkoj kartici, može da se zaustavi i {{ui:Resume}}, i odšumljava se na kraju; bez WebGPU-a koristi WebGL praćenje putanje kao i ranije. Pogledajte [Visoki kvalitet](topic:render#high-quality).
- **Još u dijalogu Renderuj** (na grafičkoj kartici, pa je potreban WebGPU): fizičko nebo i slike neba, IES profili svetla, kamera sa f-brojem, dubinom polja, perspektivom sa dve tačke, balansom bele i 360° panoramama, gradacija gotove slike, mešanje svetla i elementi renderovanja posle renderovanja, magla, dim i kaustika, čuvanje kao 16-bitni PNG, EXR ili datoteka renderovanja, i red za renderovanje. Pogledajte [Nebo i profili svetla na grafičkoj kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) i [Red za renderovanje](topic:render#the-render-queue).
- **Tvoj računar.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} pokazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji da koristi, i nivo sa kojim renderovanje počinje. Pogledajte [Čime vaš računar renderuje](topic:your-machine).

### Datoteke i druge aplikacije

- **Otvaranje STEP datoteka.** Datoteka `.step` ili `.stp` sa delom, komadom opreme ili modelom dobavljača (AP203, AP214, AP242) otvara se kao mali IFC model, svako telo je element koji možete pregledati, preseći, izmeriti i sačuvati kao IFC. Boje i imena delova sklopa još se ne čitaju. Pogledajte [Datoteke koje BimCraft otvara i čuva](topic:files#what-it-opens).
- **Izvoz u USD.** {{ui:USD}} na traci alata piše otvorene modele kao `.usda`, `.usdc` ili `.usdz`, raspoređene po lokaciji, zgradi, spratu i disciplini, sa IFC klasom, GlobalId i svojstvima svakog elementa. Pogledajte [Izvoz modela u USD](topic:usd).
- **Masa iz CivilCraft-a.** Masa zgrade poslata iz prikaza lokacije u CivilCraft-u prikazuje svoje brojeve studije u Svojstvima, a {{ui:Develop this mass}} pravi zidove na svakom nivou i pod od nje u jednom koraku opozivanja. Pogledajte [Razvoj mase zgrade iz studije lokacije](topic:develop-a-mass).
- **Stavke biblioteke sa varijantama.** Stavka koja dolazi u nekoliko varijanti ima izbor {{ui:Variant}} na kartici {{ui:Library}}; postavljeni element čuva svoju varijantu u IFC-u, {{ui:Swap item…}} navodi druge varijante, a kopije i ažuriranja je zadržavaju. Pogledajte [Postavljanje i zamena stavke biblioteke koja ima varijante](topic:library-variants).
- **Paketi projekta u fascikli.** {{ui:Open a folder}} navodi datoteke `.ccbundle.zip` pod {{ui:Project bundles}}, a svaki raspored u paketu ima **Otvori u …**: PDF u MarkupCraft, DWG u CadCraft, u novoj kartici. Pogledajte [Otvaranje rasporeda](topic:open-project-bundle#open-a-layout).

### Asistenti i dodaci

- **Još za AI asistente.** Asistent sada može da preimenuje elemente i postavlja vrednosti svojstava, pomera i briše elemente, menja zidove, vrata i prozore, izvozi USD, i renderuje sliku ili pokreće red za renderovanje; svaka izmena je jedan korak opozivanja. Pogledajte [Neka AI asistent radi sa vašim modelom](topic:assistants).
- **Dodaci mogu da grade u modelu.** API dodataka 1.1 omogućava dodatku da napravi izmenu u modelu kao jedan korak opozivanja (putuje kroz Live TeamWork), da čita model, i da čita deonice cevi i kanala, priključke, opremu i spulove.
- **Dodatak Plant** (isključen dok ga ne uključite u {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): provera specifikacija cevi prema deonicama, izometrijski crteži deonice kao SVG i DXF sa spiskom materijala, opšta procesna oprema sa priključcima postavljena u modelu, usmerivač između dva priključka, i provera rasporeda pogona. Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje; njegove reči su samo na engleskom.

## Izmenjeno

- **Prvi dom na laptopu.** Na ekranu veličine laptopa BimCraft se pokreće samo sa planom, traka Draw je uska ploča sa planom uz nju, plan i 3D prikaz se vraćaju u vidno polje kada crtež izađe iz njih, 3D prikaz uokviruje celu kuću u uskom oknu, a vrata i prozori se biraju pre kota.
- **Čuvanje slike.** **Save PNG** u dijalogu Renderuj sada je {{ui:Save}}, sa {{ui:Save as}} pored za druge formate. Pogledajte [Čuvanje slike](topic:render#save-the-picture).
- **Kartica Analiza** ima blok {{ui:Design checks}}: pravi kombinacije opterećenja po ASCE 7 ili EN 1990 za vaše slučajeve i proverava svaki valjani čelični I-profil (W, S, IPE, HEA ili HEB veličinu po nazivu profila i veličini) prema AISC 360 ili EN 1993-1-1, pokazujući koliki deo svog kapaciteta koristi. Pomoćno sredstvo dok inženjer ne pregleda; zavareni profili i drugi preseci kažu „nije proveravano“. Pogledajte [Proračunske provere](topic:frame-analysis#design-checks).

## Ispravljeno

- Ponovo radi posle koraka koji je napravio novu veličinu porodice, što je ranije završavalo sa „nema veličine“. Svaki korak sada pravi iste IFC GlobalId-ove pri ponovnom radu, pa ponovni rad radi za porodice i sve druge izmene.
- Kada su dve osobe sačuvale istu porodicu (u sesiji Live TeamWork ili u dva prozora), druga izmena je tiho zamenila izmenu prve. Sada odbija čuvanje i kaže kako da vidite njihovu izmenu i ponovo napravite svoju.
- Model u US survey feet čitao se kao 0,3048 m po stopi umesto 0,3048006096 m, što je pomeralo svaki IFC sa georeferencom u US stopama na karti.
- Editor porodica: zatvaranje više ne prebacuje fokus tastature na stranicu, njegovo Save ostaje na vidiku na telefonu, a njegova polja više ne uvećavaju telefon.

## U svim aplikacijama

- **Jedinice.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (US survey foot je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one izlaze iz lista jedinica; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. U BimCraft-u lista {{ui:Units}} na traci alata prati prekidače, zvezdica postavlja jedinice prikaza dok ih ne izaberete na traci alata (vaš raniji izbor se čuva), a polja dužine u alatima za crtanje prihvataju oznaku bilo koje jedinice, kao `3.5 m` ili `10 US ft`. Pogledajte [Jedinice, upisane vrednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da biste ga prikačili ili otkačili, prevucite je na traku drugog panela da biste delili jedan okvir kao kartice, zakačite ga da kliznu do ivice, ili ga sakrijte i vratite sa ivice. Pogledajte [Raspoređivanje panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku van puta crtežu; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Pogledajte [Pomeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za vašeg asistenta (sređivanje crteža, štampa skupa, provera crteža, postavljanje pitanja modelu, zbir predmera, isprobavanje varijante dela…), svaki sa alatima koje poziva i dozvolama koje su mu potrebne, i svaki ponovo pokrenut našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom, a neke na španskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su u 0.8 jer provera sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalaciju, izaberite {{ui:More info}}, pa {{ui:Run anyway}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Open}}. CadCraft Studio još nije u prodavnici aplikacija, a još ne postoji verzija za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Units}} se čuvaju, ali ih još nijedno polje ne čita.
- Praćenje putanje na grafičkoj kartici, dodaci u dijalogu Renderuj i red za renderovanje zahtevaju WebGPU (bez njega, visoki kvalitet koristi WebGL praćenje putanje); živi prikaz koristi WebGPU tamo gde ga pregledač ima, inače WebGL 2. Testirani su ovde samo na softverskoj zameni grafičke kartice, još ne na pravim grafičkim karticama. Živi prikaz nema raspršivanje ni deljenje u BimCraft-u (ModelCraft ga ima).
- Renderovanje snimljene šetnje kao video nije ugrađeno u BimCraft.
- Proračunske provere: I-profil čije IFC ime profila nije W, S, IPE, HEA ili HEB veličina (ili čija se veličina razlikuje od nje) uzima se kao zavaren i vraća „nije proveravano“, kao i cevi, uglovi, kanali, vitki delovi i uvijanje. Nijedan inženjer još nije pregledao provere.
- Nacrtani elementi se ne mogu kopirati jedan po jedan, okretati, ogledati ili nizati (može se kopirati ceo nivo), i nema podeljenog zida, alata Tekst ni zavesastog zida. Zid koji se na višem nivou sastaje sa zidom sa nižeg nivoa ne seče se u 3D telo tog zida, a spiskovi navode otvor na višem nivou pod nivoom sopstvenog zida.
- Porodice: biblioteka porodica deljenih među projektima nije napravljena. Porodice i kopirani nivoi još nisu otvarani u drugim BIM programima.
- MEP: oprema je opšta (bez podataka proizvođača); T-komadi i redukcije na čeličnim spulovima su opšti, a ne iz tabele ASME B16.9; priključci stavki iz biblioteke postavljenih iz kartice {{ui:Library}} ne upisuju se u IFC; ništa nije pregledao inženjer.
- Dodatak Plant još ne može da nacrta vođenu deonicu u model, da numeriše spulove na svojim izometrijama niti da proveri raspored opreme postavljene iz biblioteke.
- Postrojenja iz biblioteke postrojenja CivilCraft-a još ne mogu da se postavljaju sa kartice {{ui:Library}} u BimCraft-u.
- Energija: nema časovne simulacije, nema metode ISO 52016-1 i nema klimatskih datoteka. Imovina: nema hostovanog digitalnog blizanca koji čuva očitavanja ili šalje upozorenja dok je BimCraft zatvoren.
- Registracija skenova je isprobana na test skenovima, još ne na skupu skenova pravog skenera; E57 datoteke još se otvaraju do 6 miliona tačaka i 512 MB.
- Paketi projekta se otvaraju u BimCraft-u samo (ostale aplikacije primaju raspored preko **Otvori u …**), a paketi i komplet za dva programa isprobani su na zameni, još ne sa samim Archicad-om ili Revit-om.

Sve ostalo je u [Šta još nije napravljeno](topic:not-built-yet).
