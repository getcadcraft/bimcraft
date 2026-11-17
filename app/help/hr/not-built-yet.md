---
title: Što još nije izrađeno
summary: Što ova verzija programa BimCraft još ne radi i što koristiti umjesto toga danas.
keywords: nedostaje, ograničenja, nije podržano, plan razvoja, izrada modela, modeliranje, presjeci, mjerenje, sudar, bcf, oblak, radna površina, izvoz
from: 87777dcc
---

Danas je BimCraft čitač, provjerivač i urednik IFC podataka koji je počeo crtati zgrade: zidove, vrata i prozore, prostorije, podove, stropove i krovove (vidi [Crtanje zidova](topic:draw-walls), [Vrata i prozori](topic:doors-and-windows) i [Prostorije, podovi, stropovi i krovovi](topic:floors-and-roofs)). Ovo je iskren popis onoga što još ne radi, s onim što koristiti umjesto toga.

## Modeliranje i izrada

| Još nije | Umjesto toga, danas |
|---|---|
| Crtanje greda; stupovi od čeličnih profila | Koristite svoj program za izradu modela, zatim otvorite njegov IFC izvoz ovdje. Pravokutni i okrugli stupovi postavljaju se ovdje (vidi [Mreže i stupovi](topic:grids-and-columns)); ravna, L, U, zaokretna i spiralna stubišta te ograde crtaju se ovdje (vidi [Stubišta i ograde](topic:stairs-and-railings)) |
| Prozor na zabatu krovne kućice; kućice na ravninama krova nacrtane ručno; zakrivljeni krovovi; krovni pokrov s teksturom | Ravnine krova nacrtane po svojim kutovima i nagib za svaki zid: vidi [Krovovi: nagib za svaki zid, zabati, nadstrešnice i ravnine krova](topic:roofs) |
| Promjena zidova, vrata ili prozora koje je napravio drugi program | Vaš program za izradu modela; alati za crtanje mijenjaju samo ono što su nacrtali |
| Profili zidova s previsima ili rupama; otvori u zidovima koji nisu pravokutnici; dodavanje ili uklanjanje točaka profila zida u 3D prikazu | Profil, spajanje, nagib i otvori rade u Svojstvima, u pročeljima i presjecima, na prikazu lica zida i ručkama u 3D, za ravne i zakrivljene zidove: vidi [Oblikovanje zida: spajanje, profil, nagib i otvori](topic:wall-shape) |
| Na zakrivljenim zidovima: {{ui:Trim / extend}} i {{ui:Corner}}, uokvirivanje, automatske kote u tlocrtu, hvatanje duž luka (hvata se na krajeve i sredinu luka) | Za to nacrtajte zid ravno ili koristite ravne dijelove. Zakrivljeni zidovi opisani su u [Crtanje zidova](topic:draw-walls) |
| Povlačenje postavljene stavke knjižnice u 3D prikazu | Povucite je u tlocrtu ili upišite X, Y i rotaciju u {{ui:Properties}}: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library) |
| Postavljanje biljaka iz biblioteke biljaka radnog prostora Landscape programa CivilCraft | Zasadite ih u programu CivilCraft ili postavite drveće i grmlje iz pratnje u knjižnici: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library) |
| U dodatku Plant (isključen dok ga ne uključite): crtanje vođenog razvoda u model, brojevi spoolova na njegovim izometrijama, provjera rasporeda opreme postavljene iz knjižnice | Nacrtajte razvod alatom {{ui:Pipe}} (vidi [Cijevi i kanali](topic:pipes-and-ducts)); provjera rasporeda čita vlastitu tablicu opreme dodatka |
| Okretanje, zrcaljenje ili nizanje pojedinačnih nacrtanih zidova, vrata i prozora (zidovi se pomiču, kopiraju i razmiču alatima Pomakni, Odmakni i rastezanje okvirom: vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); vrsta spoja (na čeonu, pravokutno) na kutovima sa zakrivljenim zidom ili tri ili više zidova (vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); alat Tekst; zavjesni zidovi | Kopirajte sve na etaži alatom {{ui:Copy this level…}} (vidi [Crtanje zidova](topic:draw-walls#levels)); inače ih nacrtajte ponovno |
| Slojevi sklopa zida nacrtani u tlocrtu i presjeku; kote u presjecima i pročeljima; referentne kote do vrata, prozora i drugih komponenti; sklopovi i membrane u tablicama i količinama; knjižnica materijala zajednička projektima; prioritet slojeva u presjecima, pročeljima i 3D prikazu te u čvorovima triju ili više zidova (u tlocrtu se kutovi, T spojevi i križanja dvaju zidova čiste prema prioritetu slojeva: vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); omotani ili promjenjivi slojevi; uređivanje sklopa zida koji je napravio drugi program | Slojevi su u tipu zida i njegovu pregledu ({{ui:Wall assemblies…}}); zidovi se mjere kao jedna ovojnica: vidi [Sklopovi zidova i referentne kote](topic:wall-assemblies) |
| Promjena oblika ili veličine elementa (osim zidova, vrata i prozora nacrtanih ovdje te elemenata postavljenih iz obitelji) | Vaš program za izradu modela. Brisanje, izrezivanje, kopiranje i lijepljenje rade ovdje: vidi [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata zgrade](topic:edit-elements) |
| Brisanje etaža, prostora, zgrada ili lokacije | Izbrišite elemente koji su u njima |
| Lijepljenje elemenata zgrade u drugi model | Kopirajte i zalijepite unutar jednog modela; postavljene stavke knjižnice lijepe se u bilo koji model |
| Dodavanje novih svojstava ili skupova svojstava | Ispunite postojeće vrijednosti ovdje ili dodajte parametar u svom programu za izradu modela i ponovno izvezite |
| Uređivanje količina, popisa, nabrajanja | Vaš program za izradu modela |
| Spremanje projektnih datoteka drugih programa | BimCraft sprema IFC (i vlastite datoteke obitelji: vidi [Obitelji i njihove veličine](topic:families)) |
| Obitelji: knjižnica obitelji postavljenih iz tlocrta i dijeljenih među projektima (Knjižnica), hvatište povučeno u 3D prikazu postavljenog elementa (povlači se u pregledu urednika obitelji i u tlocrtu), razine detalja birane po prikazu (jedna razina za projekt; listovi biraju prema mjerilu), rotacija na uspravnoj ravnini unutar druge obitelji za četvrtinu okreta, vlastiti tlocrtni simboli vrata i prozora (crtaju se simboli iz njihove početne obitelji) | Obitelji s tipiziranim parametrima, formulama, vlastitim tlocrtnim simbolom, hvatištima, ponavljanjima, razinama detalja, obiteljima unutar obitelji, veličinama iz tablice i parametrima po elementu izrađuju se ovdje: vidi [Uređivanje obitelji](topic:family-editor) i [Obitelji i njihove veličine](topic:families). Za početak dupliciraj obitelj |
| Uređivanje tipova drugih programa kao obitelji; pretvaranje stavke knjižnice u obitelj | Tipovi drugih programa su navedeni, grupirani prema pretpostavci, a njihovi elementi odabrani. Stavke knjižnice postavljaju se kakve jesu |
| Proizvođačka armatura, ventili i oprema (kapaciteti, težine, veličine priključaka proizvođača); duljine T-komada i reducira ASME B16.9 na čeličnim spoolovima; gubici tlaka kroz armaturu, protoci i uravnoteženje; sprinkleri; kabelski kanali; dimenzioniranje stupova i odzračnika po jedinicama sanitarnih priključaka; povlačenje kutova razvoda; izrezivanje otvora u zidovima i pločama; puštanje kraja razvoda vezanog za priključak (osim brisanjem opreme); priključci na stavkama knjižnice postavljenima iz ploče Knjižnica; težine armature; spojevi, mjerila i spojnice kanala | Razvodi cijevi i kanala s općom standardnom armaturom, sustavima, tlocrtima, tablicama i predmjerom ovdje se crtaju: vidi [Cijevi i kanali](topic:pipes-and-ducts). Generička oprema s priključcima, spojeni razvodi i provjera spojeva: [Oprema MEP s priključcima](topic:mep-equipment), [Spajanje cijevi i kanala na opremu](topic:mep-connections). Skupovi sudara, razmaci i popis otvora: [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure). Čelični spoolovi i listovi, popis rezanja kanala: [Čelični spoolovi cijevi i listovi spoolova](topic:pipe-spools). Proizvođačku opremu uvezite iz svog MEP programa kao IFC |
| Provjere projektnih normi zavarenih I-profila, I-profila čiji IFC profil nije imenovan kao valjani W, S, IPE, HEA ili HEB profil, te cijevi, kutnika i U-profila (vraćaju se kao neprovjereno); izvijanje ili dinamički odziv (prirodne frekvencije su u bloku Konačni elementi) (drugi red je samo P-Delta: elastično, savojno, bez smanjenja krutosti); zidovi i ploče u analizi; opterećenja zadana površinama (osim jednog tlaka na svakoj betonskoj ploči) | Kartica {{ui:Analysis}} daje sile, reakcije i progibe greda, stupova i dijagonala prema analizi prvog reda te provjerava valjane I-profile, kao pomoć dok inženjer ne pregleda: vidi [Analiza konstrukcijskog okvira](topic:frame-analysis#design-checks) |

## Prikazi modela

| Još nije | Umjesto toga, danas |
|---|---|
| 3D iz projektnih datoteka | Izvezite IFC i otvorite ga. Vidi [Uvođenje projektne datoteke u 3D putem IFC-a](topic:rvt-to-ifc) |
| Unutarnji pogledi u generiranom skupu crteža (iz Svojstava prostorije i na vlastitim listovima izrađuju se); vlastite kote na pročeljima i presjecima (oznake razina, visine, širina i oznake vrata i prozora su nacrtane; bilješke se pišu u prikazu: vidi [Uređivanje u pročeljima i presjecima](topic:edit-in-elevations)); crtanje zidova u pročelju (crtaju se u ravnini presjeka); predlošci timova preko Studija | Skup crteža iz modela: vidi [Pročelja, presjeci i listovi](topic:sheets). Za svaki IFC model: jedna ravnina {{ui:Section}} ili kutija presjeka; vidi [Presijecanje IFC modela ravninom presjeka](topic:section-plane) |
| Pogledi s oblačićem, detaljni pogledi, crtački pogledi i legende; crtačke linije i šrafura nacrtani u prikazu; obrezivanje pročelja ili presjeka; predlošci prikaza za pročelja, presjeke, stropne tlocrte i 3D prikaze; stropni tlocrti u generiranom skupu crteža; cijeli skup vlastitih listova u jednom PDF-u | Tlocrti i stropni tlocrti imaju raspone prikaza, područje izrezivanja, mjerilo i podlogu (tlocrti također predloške), a vlastiti listovi uzimaju tlocrte, stropne tlocrte, pročelja, presjeke i tablice, svaki spremljen kao PDF: vidi [Prikazi, rasponi prikaza i vlastiti listovi](topic:views-and-sheets) |
| Pomicanje svjetiljke na strop naknadno; nagnuti ili stepenasti stropovi; uzorci stropa osim pet mreža; vlastiti simbol svjetiljke u stropnom tlocrtu | Postavite je s **Montaža: Na stropu**; stropni tlocrt crta svjetiljku iz vlastitog oblika: vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library) |
| Dijeljenje skupova pretraživanja s drugima, skupovi unutar IFC datoteke | Skupovi ostaju u ovom pregledniku; vidi [Pronalaženje elemenata po klasi, imenu ili svojstvu](topic:find) |
| Mjerenje kutova ili duž putanje od više točaka | Izmjerite svaki dio s {{ui:Measure}}: vidi [Mjerenje udaljenosti, površina ploha i položaja u 3D](topic:measure) |
| Teksture u živom 3D prikazu | Obojani materijali pokazuju svoju boju u prikazu, a teksturu u renderiranim slikama: vidi [Renderiranje slike modela](topic:render) |
| Meki sudari (razmak) između bilo koja dva skupa, grupe sudara, spremanje rezultata sudara | Pokrenite {{ui:Clash check}} i napravite teme od onih koji su važni: vidi [Provjera sudara](topic:clash-check). Cijevi i kanali u odnosu na konstrukciju imaju {{ui:Check clearances}}: vidi [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure) |
| Spremanje nekoliko modela kao jednog skupa ili uređivanje dvaju modela istovremeno | Uređujte jedan model u isto vrijeme; svaki sprema svoju datoteku |
| Dodjeljivanje tema, rokova, oznaka, nekoliko pogleda po temi, uređivanje teme | Jedan pogled po temi; vidi [Teme i BCF datoteke](topic:issues-bcf) |
| `.ifczip` i `.ifcxml` | Raspakirajte ili izvezite običan `.ifc` |
| Slojevi karte za model bez pretvorbe karte ili u pogledima crteža | Izvezite model s njegovim koordinatama: vidi [Karta na terenu ispod modela](topic:map-layers) |
| E57 skenovi preko 6 milijuna točaka ili 512 MB; vlastite datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS); oblaci točaka u 3D prikazu crteža; spremanje položaja oblaka uz model | Izvezite skeniranje kao LAS ili LAZ i otvorite ga uz IFC model: vidi [Formati oblaka točaka](topic:point-cloud-formats) i [Prikaz oblaka točaka uz model](topic:point-clouds) |
| Registriranje skenova: pronalaženje meta (kugli, šahovskih polja) u skenu samostalno, rješavanje svih skenova zajedno (bundle adjustment), mjerilo, registracija prema modelu | Odaberite odgovarajuće točke ili upišite koordinate meta, zatim pročistite jedan skup skena u jednom po jedan s ICP: vidi [Registracija nekoliko skenova u jedan](topic:register-scans) |
| Otvaranje projektnih datoteka `.pln`, `.pla`, `.tpl` i `.bpn` | Izvezite IFC i DWG iz njih ili projektni paket: vidi [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files) i [Otvaranje projektnog paketa](topic:open-project-bundle) |
| Otvaranje popisa {{ui:Elements}} za odabir po vrsti | Kliknite grupu vrste u {{ui:Model tree}}: vidi [Snalaženje pomoću stabla modela](topic:model-tree) |
| Upisivanje komentara ili naslova teme u VR-u, glasovne bilješke, pomicanje ravnine presjeka rukom u VR-u, kutija presjeka u VR-u | Postavite temu u VR-u, zatim dodajte njezine riječi na kartici Teme; postavite ravninu ili kutiju presjeka u 3D prikazu prije ulaska: vidi [Pregled modela u VR naočalama](topic:vr-review) |
| Vidjeti ljude za stolom u VR-u (vide se samo ljudi u VR-u), snimanje VR šetnje | Zamolite ih da se pridruže u VR-u ili pratite u 3D prikazu |
| Simulacija dnevnog svjetla (klimatsko dnevno svjetlo, bljesak, sunčani sati), krovni prozori u faktoru dnevnog svjetla, provjere prema BS EN 17037 ili shemama zelene gradnje; metoda energije ISO 52016-1, satna simulacija energije, toplinska masa i mostovi, klimatske datoteke | Pomoćni alati: prosječni faktor dnevnog svjetla, okomita komponenta neba svakog prozora, sunce kroz prozore na datum i faktor dnevnog svjetla na mreži ([Procjena dnevnog svjetla u svakoj prostoriji](topic:daylight-factor)); toplinski gubici, godina stupanj-dana i vršno hlađenje po prostoriji ([Procjena opterećenja grijanja i hlađenja](topic:heating-and-cooling-loads)). Za usklađenost s propisima koristite program za simulaciju |
| Hostirani digitalni blizanac zgrade: očitanja pohranjena i upozorenja poslana e-poštom dok je BimCraft zatvoren, e-poruke o roku održavanja; MQTT 5; vraćanje COBie poslova natrag | Očitanja iz CSV-a ili izravno iz vašeg brokera ili adrese dok je model otvoren, granice koje označavaju imovinu, dokumenti, COBie izvoz i uvoz: vidi [Čuvanje podataka o imovini i zapisa održavanja u modelu](topic:assets-and-maintenance) |
| Dodatak ili živa veza za Enscape, Twinmotion ili druge programe za vizualizaciju; FBX ili Datasmith datoteke; jedan objekt po elementu, spremljeni pogledi i šetnje u .glb | Spremite .glb za programe za renderiranje koji čitaju glTF, USD datoteku (jedan objekt po elementu, s njegovim IFC podacima: vidi [Izvoz modela kao USD](topic:usd)) ili IFC za one koji rade unutar drugog programa za dizajn: vidi [Slanje modela programu za renderiranje](topic:model-for-rendering) i [Otvaranje scene u drugom programu](topic:render-open-in) |
| Drugi program crta sliku renderiranja bez dodatka za motor za renderiranje (CadCraft nikad ne pokreće program pod GNU GPL licencom); panoramske ili stereo kamere i slika neba preko drugog programa; dodatak za Unreal Engine (datoteke se zapisuju, dodatak koji ih otvara nije objavljen) | Naši vlastiti motori Fast i Path; motor dodatka ([nacrtajte sliku drugim programom](topic:render-other-program)); datoteka mape USD, glTF ili Unreal s popisa Motori za odnijeti u bilo koji program |
| U živom prikazu: raspršivanje biljaka i stijena, dijeljenje panorama, obilazak, izvanmrežni preglednik ili video | ModelCraftov živi prikaz to ima; ovdje: renderirane slike i 360° panorame: vidi [Živi prikaz](topic:live-view) i [Renderiranje slike modela](topic:render) |

## Crteži

| Još nije | Umjesto toga, danas |
|---|---|
| Uređivanje, mjerenje ili spremanje DWG i DXF | Aplikacija za crtanje CadCraft ({{ui:Edit in CadCraft}} na 2D prikazu) |
| Ispis ili izvoz PDF-a | Ispišite iz programa koji je napravio crtež; prethodno provjerite s {{ui:Print view}} |
| Stilovi ispisa i tablice pera | {{ui:Print view}} prikazuje obično crno s debljinama linija |
| DWG datoteke starije od R13 i binarni DXF (BimCraft to kaže kad ga otvorite) | Spremite crtež ponovno kao noviji DWG ili kao ASCII DXF |
| Crteži povezani unutar povezanih crteža | Otvorite ih izravno |
| TIFF slike | Spremite kopiju PNG ili JPEG s istim imenom i dodajte je |
| DGN crteži | Navedeni samo u izvješćima o mapama |
| Objekti navedeni pod **Još nije nacrtano** | Pogledajte crtež u programu koji ga je napravio |
| ACIS tijela, volumeni, regije i plohe te mreže podjele u 3D | Izvezite IFC ili 3D plohe iz programa koji je napravio crtež |
| Slike, višestruke vodilice i listovi u 3D prikazu crteža | Vidite ih na kartici {{ui:Model}} i na listovima |
| Odabir objekata u 2D prikazu crteža | Prijeđite na {{ui:3D}} i kliknite objekt tamo: vidi [Pogled na DWG ili DXF crtež u 3D](topic:dwg-in-3d) |
| Popisi opreme iz crteža bez oznaka `KCL-ITEM` | Nije dostupno |
| Popis opreme kao XLSX ili PDF | {{ui:Download CSV}} i otvorite ga u tabličnom programu |

## Datoteke i platforme

| Još nije | Umjesto toga, danas |
|---|---|
| Spremanje u oblak | Spremajte kopije na računalo ili uredski poslužitelj. Spremanje u oblak još nije dostupno |
| Pamćenje mapa u Firefoxu i Safariju | Odaberite mapu ponovno ili je povucite |
| Poništi nakon spremanja | Ponovno otvorite izvornu datoteku da biste krenuli ispočetka |
| Popunjavanje nedostajućeg dijela odrezane projektne datoteke | Ponovno kopirajte izvornik; u mapi BimCraft čita najnoviju cjelovitu sigurnosnu kopiju |
| Ponovno otvaranje datoteka koje ste imali otvorene | Nespremljene promjene nude se natrag kao „Oporaviti svoj rad?“ kada se vratite; ponovno otvorite datoteke s popisa nedavnih |
