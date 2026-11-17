---
title: Šta još nije izrađeno
summary: Šta ova verzija programa BimCraft još ne radi i šta koristiti umjesto toga danas.
keywords: nedostaje, ograničenja, nije podržano, plan razvoja, izrada, modeliranje, presjeci, mjerenje, sudar, BCF, oblak, desktop, izvoz
from: 87777dcc
---

BimCraft je danas čitač, provjerivač i urednik IFC podataka koji je počeo crtati zgrade: zidove, vrata i prozore, prostorije, podove, plafone i krovove (vidi [Crtanje zidova](topic:draw-walls), [Vrata i prozori](topic:doors-and-windows) i [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs)). Ovo je iskren spisak onoga što još ne radi, sa onim što raditi umjesto toga.

## Modeliranje i izrada

| Još nije | Umjesto toga, danas |
|---|---|
| Crtanje greda; stubovi od čeličnih profila | Koristi svoj program za izradu, pa ovdje otvori njegov IFC izvoz. Pravougaoni i kružni stubovi se ovdje postavljaju (vidi [Mreže i stubovi](topic:grids-and-columns)); ravne, L, U, zaokretne i spiralne stepenice i ograde se ovdje crtaju (vidi [Stepenice i ograde](topic:stairs-and-railings)) |
| Prozor na čelu krovnog prozora; krovni prozori na ravnima krova nacrtani ručno; zakrivljeni krovovi; tekstura pokrivača krova u renderu | Ravni krova nacrtane po uglovima i nagib za svaki zid: vidi [Krovovi: nagib za svaki zid, zabati, nadstrešnice i ravni krova](topic:roofs) |
| Mijenjanje zidova, vrata ili prozora koje je napravio drugi program | Tvoj program za izradu; alati za crtanje mijenjaju samo ono što su nacrtali |
| Profili zidova sa istacima ili rupama; otvori u zidu koji nisu pravougaonici; dodavanje ili uklanjanje tačaka profila zida u 3D pogledu | Profil, vezivanje, nagib i otvori rade u Svojstvima, na izgledima i presjecima, na prikazu lica zida i hvataljkama u 3D, za ravne i zakrivljene zidove: vidi [Oblikovanje zida: vezivanje, profil, nagib i otvori](topic:wall-shape) |
| Na zakrivljenim zidovima: {{ui:Odsijeci / produži}} i {{ui:Ugao}}, uokvirivanje, automatske kote u osnovi, hvatanje duž luka (hvata se za krajeve i sredinu luka) | Za to nacrtaj zid ravno ili koristi ravne segmente. Zakrivljeni zidovi su u [Crtanje zidova](topic:draw-walls) |
| Prevlačenje postavljene stavke iz biblioteke u 3D pogledu | Prevuci je u osnovi, ili upiši X, Y i Rotaciju u {{ui:Svojstva}}: vidi [Postavi opremu i namještaj iz biblioteke](topic:place-from-library) |
| Postavljanje biljaka iz biblioteke biljaka u radnom prostoru Landscape programa CivilCraft | Posadi ih u programu CivilCraft, ili postavi drveće i grmlje iz pratećih elemenata biblioteke: vidi [Postavi opremu i namještaj iz biblioteke](topic:place-from-library) |
| U dodatku Plant (isključen dok ga ne uključiš): crtanje vođene trase u model, brojevi spula na njegovim izometrijama, provjera rasporeda opreme postavljene iz biblioteke | Nacrtaj trasu sa {{ui:Cijev}} (vidi [Cijevi i kanali](topic:pipes-and-ducts)); provjera rasporeda čita vlastitu tabelu opreme dodatka |
| Okretanje, zrcaljenje ili nizanje pojedinačnih nacrtanih zidova, vrata i prozora (zidovi se pomjeraju i kopiraju sa {{ui:Pomjeri}}, {{ui:Odmakni}} i Box stretch: vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); stil spoja (butt, square off) na uglovima sa zakrivljenim zidom ili sa tri zida i više (vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); alat za tekst; zavjesni zidovi | Kopiraj sve na nivou sa {{ui:Kopiraj ovaj nivo…}} (vidi [Crtanje zidova](topic:draw-walls#levels)); inače ih nacrtaj ponovo |
| Slojevi sklopa zida nacrtani u osnovi i presjeku; kote u presjecima i izgledima; referentne kote do vrata, prozora i drugih komponenti; sklopovi i membrane u specifikacijama i količinama; biblioteka materijala zajednička za projekte; prioritet slojeva u presjecima, izgledima i 3D i u čvorovima tri zida i više (u osnovi se uglovi, T spojevi i ukrštanja dva zida čiste prema prioritetu slojeva: vidi [Oblici zidova, dijeljenje, odmak, rastezanje i zaključavanje](topic:wall-tools)); omotani ili promjenjivi slojevi; uređivanje sklopa zida koji je napravio drugi program | Slojevi su u tipu zida i njegovom pregledu ({{ui:Sklopovi zidova…}}); zidovi se mjere kao jedna omotnica: vidi [Sklopovi zidova i referentne kote](topic:wall-assemblies) |
| Promjena oblika ili veličine elementa (osim zidova, vrata i prozora nacrtanih ovdje i elemenata postavljenih iz porodice) | Tvoj program za izradu. Brisanje, kopiranje, izrezivanje i lijepljenje rade ovdje: vidi [Izbriši, izreži, kopiraj i zalijepi elemente zgrade](topic:edit-elements) |
| Brisanje spratova, prostora, zgrada ili lokacije | Izbriši elemente u njima |
| Lijepljenje elemenata zgrade u drugi model | Kopiraj i zalijepi unutar jednog modela; postavljene stavke iz biblioteke lijepe se u bilo koji model |
| Dodavanje novih svojstava ili skupova svojstava | Popuni postojeće vrijednosti ovdje, ili dodaj parametar u svom programu za izradu i ponovo izvezi |
| Uređivanje količina, lista, enumeracija | Tvoj program za izradu |
| Spašavanje projektnih datoteka drugih programa | BimCraft spašava IFC (i vlastite porodične datoteke: vidi [Porodice i njihove veličine](topic:families)) |
| Porodice: biblioteka porodica postavljenih iz osnove i zajedničkih među projektima (Biblioteka), hotspot prevučen u 3D pogledu postavljenog elementa (prevlače se u pregledu uređivača porodica i u osnovi), nivoi detalja birani po pogledu (jedan nivo za projekat; listovi biraju po razmjeri), rotacija na uspravnoj ravni unutar druge porodice okrenuta za četvrtinu, vlastiti simboli vrata i prozora u osnovi (crtaju simbole svoje početne porodice) | Porodice sa tipiziranim parametrima, formulama, vlastitim simbolom u osnovi, hotspotovima, ponavljanjima, nivoima detalja, porodicama unutar porodica, veličinama iz tabele i parametrima po elementu nastaju ovdje: vidi [Uređivanje porodice](topic:family-editor) i [Porodice i njihove veličine](topic:families). Dupliciraj porodicu da počneš od nje |
| Uređivanje tipova drugih programa kao porodica; pretvaranje stavke iz biblioteke u porodicu | Tipovi drugih programa su navedeni, grupisani po pretpostavci, a njihovi elementi odabrani. Stavke iz biblioteke postavljaju se kakve jesu |
| Proizvođačke armature, ventili i oprema (kapaciteti, težine, proizvođačke veličine priključaka); dužine T-komada i redukcija ASME B16.9 na čeličnim spulama; gubici pritiska kroz armature, protoci i balansiranje; sprinkleri; kablovske trase; dimenzionisanje vertikala i ventilacije po jedinicama sanitarnih uređaja; prevlačenje uglova trase; probijanje otvora u zidovima i pločama; otpuštanje kraja trase vezanog za priključak (osim brisanjem opreme); priključci na stavkama iz biblioteke postavljenim iz panela Biblioteka; težine armatura; spojevi, debljine i konektori kanala | Trase cijevi i kanala sa generičkim standardnim armaturama, sistemima, osnovama, specifikacijama i predmjerom crtaju se ovdje: vidi [Cijevi i kanali](topic:pipes-and-ducts). Generička oprema sa priključcima, povezane trase i provjera veza: [Oprema MEP sa priključcima](topic:mep-equipment), [Povezivanje cijevi i kanala sa opremom](topic:mep-connections). Skupovi kolizija, razmaci i lista otvora: [Provjeri cijevi i kanale naspram konstrukcije](topic:mep-against-structure). Čelične spule i listovi spula, lista rezanja kanala: [Čelične spule i listovi spula](topic:pipe-spools). Proizvođačke stavke iz svog MEP programa uvezi kao IFC |
| Provjere prema projektnim normama zavarenih I-profila, I-profila čiji IFC profil nije imenovan kao valjani W, S, IPE, HEA ili HEB profil, te cijevi, uglova i U-profila (vraćaju se kao neprovjereni); izvijanje ili dinamički odziv (prirodne frekvencije su u bloku Konačni elementi) (drugi red je samo P-Delta: elastično, fleksijski, bez smanjenja krutosti); zidovi i ploče u analizi; opterećenja napravljena iz površina (osim jednog pritiska na svakoj betonskoj ploči) | Kartica {{ui:Analiza}} daje sile, reakcije i progibe greda, stubova i dijagonala prvim redom analize i provjerava valjane I-profile, kao pomoć dok inženjer ne pregleda: vidi [Analiza konstrukcijskog okvira](topic:frame-analysis#design-checks) |

## Pregled modela

| Još nije | Umjesto toga, danas |
|---|---|
| 3D iz projektnih datoteka | Izvezi IFC i otvori ga. Vidi [Prebaci projektnu datoteku u 3D preko IFC-a](topic:rvt-to-ifc) |
| Unutrašnji izgledi u generisanom skupu crteža (iz Svojstava prostorije i na tvojim listovima se grade); tvoje kote na izgledima i presjecima (oznake nivoa, visine, širina i oznake vrata / prozora se crtaju; napomene se pišu u pogledu: vidi [Uređivanje na izgledima i presjecima](topic:edit-in-elevations)); crtanje zidova u izgledu (crtaju se u ravni presjeka); timski šabloni kroz Studio | Skup crteža napravljen iz modela: vidi [Izgledi, presjeci i listovi](topic:sheets). Za bilo koji IFC model: jedna ravan {{ui:Presjek}}, ili kutija presjeka; vidi [Presijeci IFC model ravninom presjeka](topic:section-plane) |
| Pogledi sa oznakama, detaljni pogledi, pogledi za crtanje i legende; linije za crtanje i šrafura nacrtani u pogledu; obrezivanje izgleda ili presjeka; šabloni pogleda za izglede, presjeke, plafonske osnove i 3D poglede; plafonske osnove u generisanom skupu crteža; cijeli skup tvojih listova u jednom PDF-u | Osnove i plafonske osnove imaju opsege pogleda, područje obrezivanja, razmjeru i podlogu (osnove i šablone), a tvoji listovi primaju osnove, plafonske osnove, izglede, presjeke i specifikacije, svaki spašen kao PDF: vidi [Pogledi, opsezi pogleda i tvoji listovi](topic:views-and-sheets) |
| Naknadno pomjeranje postavljenog svjetla na plafon; kosi ili stepenasti plafoni; uzorci plafona osim pet mreža; vlastiti simbol svjetla u plafonskoj osnovi | Postavi ga sa **Montaža: Na plafonu**; plafonska osnova crta armaturu iz vlastitog oblika: vidi [Postavi opremu i namještaj iz biblioteke](topic:place-from-library) |
| Dijeljenje skupova pretrage s drugima, skupovi unutar IFC datoteke | Skupovi ostaju u ovom pregledaču; vidi [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find) |
| Mjerenje uglova ili duž putanje više tačaka | Izmjeri svaki dio sa {{ui:Mjeri}}: vidi [Mjeri udaljenosti, površine lica i položaje u 3D](topic:measure) |
| Teksture u živom 3D pogledu | Obojeni materijali pokazuju svoju boju u pogledu, a teksturu na renderovanim slikama: vidi [Renderuj sliku modela](topic:render) |
| Sudari po razmaku (meki) između bilo koja dva skupa, grupe sudara, spašavanje rezultata sudara | Pokreni {{ui:Provjera kolizija}} i napravi probleme od onih koji su važni: vidi [Provjeri sudare](topic:clash-check). Cijevi i kanali naspram konstrukcije imaju {{ui:Provjeri razmake}}: vidi [Provjeri cijevi i kanale naspram konstrukcije](topic:mep-against-structure) |
| Spašavanje više modela kao jednog skupa, ili uređivanje dva modela istovremeno | Uređuj jedan model u isto vrijeme; svaki spašava svoju datoteku |
| Dodjeljivanje problema, rokova, oznaka, više pogleda po problemu, uređivanje problema | Jedan pogled po problemu; vidi [Problemi i BCF datoteke](topic:issues-bcf) |
| `.ifczip` i `.ifcxml` | Raspakuj ili izvezi običan `.ifc` |
| Slojevi karte za model bez pretvorbe karte, ili u pogledima crteža | Izvezi model sa njegovim koordinatama: vidi [Karta na tlu ispod modela](topic:map-layers) |
| E57 skenovi sa više od 6 miliona tačaka ili 512 MB; vlastite datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS); oblaci tačaka u 3D pogledu crteža; spašavanje mjesta oblaka uz model | Izvezi sken kao LAS ili LAZ i otvori ga pored IFC modela: vidi [Formati oblaka tačaka](topic:point-cloud-formats) i [Prikaz oblaka tačaka pored modela](topic:point-clouds) |
| Registracija skenova: pronalaženje meta (sfera, šahovskih polja) u skenu samostalno, rješavanje svih skenova zajedno (bundle adjustment), razmjera, registracija prema modelu | Odaberi podudarne tačke ili upiši koordinate meta, pa usavrši jedan sken po jedan sa ICP: vidi [Registruj više skenova u jedan](topic:register-scans) |
| Otvaranje projektnih datoteka `.pln`, `.pla`, `.tpl` i `.bpn` | Izvezi IFC i DWG iz njih, ili paket projekta: vidi [Otvori .pln i .pla projektne datoteke](topic:pln-project-files) i [Otvori paket projekta](topic:open-project-bundle) |
| Otvaranje liste {{ui:Elementi}} za odabir po vrsti | Klikni grupu vrste u {{ui:Stablo modela}}: vidi [Snalaženje kroz stablo modela](topic:model-tree) |
| Upisivanje komentara ili naslova problema u VR-u, glasovne bilješke, pomjeranje ravni presjeka rukom u VR-u, kutija presjeka u VR-u | Postavi problem u VR-u, pa dodaj riječi na kartici Problemi; postavi ravan ili kutiju presjeka u 3D pogledu prije ulaska: vidi [Pregledaj model u VR naočarima](topic:vr-review) |
| Vidjeti ljude za stolom u VR-u (prikazuju se samo ljudi u VR-u), snimanje VR šetnje | Zamoli ih da se pridruže u VR-u, ili prate u 3D pogledu |
| Simulacija dnevnog svjetla (dnevno svjetlo prema klimi, odsjaj, sunčani sati), krovni prozori u faktoru dnevnog svjetla, provjere prema BS EN 17037 ili šemama zelene gradnje; metoda energije ISO 52016-1, satna simulacija energije, toplotna masa i mostovi, klimatske datoteke | Pomoćna sredstva za projektovanje: prosječni faktor dnevnog svjetla, vertikalna komponenta neba svakog prozora, sunce kroz prozore na datum i faktor dnevnog svjetla na mreži ([Procijeni dnevno svjetlo u svakoj prostoriji](topic:daylight-factor)); toplotni gubici, godina stepen-dana i vršno hlađenje po prostoriji ([Procijeni opterećenje grijanja i hlađenja](topic:heating-and-cooling-loads)). Za usklađenost koristi program za simulaciju |
| Hostovani blizanac zgrade: očitavanja se čuvaju i upozorenja šalju e-poštom dok je BimCraft zatvoren, e-poruke o roku održavanja; MQTT 5; vraćanje COBie poslova nazad | Očitavanja iz CSV-a ili direktno sa svog brokera ili adrese dok je model otvoren, granice koje označavaju sredstva, dokumente, COBie izvoz i uvoz: vidi [Čuvaj podatke o sredstvima i zapis održavanja u modelu](topic:assets-and-maintenance) |
| Dodatak ili živa veza za Enscape, Twinmotion ili druge programe za vizualizaciju; FBX ili Datasmith datoteke; jedan objekat po elementu, spašeni pogledi i šetnje u .glb | Spasi .glb za programe za renderovanje koji čitaju glTF, USD datoteku (jedan objekat po elementu, sa njenim IFC podacima: vidi [Izvezi model kao USD](topic:usd)), ili IFC za one koji rade unutar drugog programa za projektovanje: vidi [Pošalji model programu za renderovanje](topic:model-for-rendering) i [Otvori scenu u drugom programu](topic:render-open-in) |
| Drugi program crta sliku renderovanja bez dodatka za motor renderovanja (CadCraft nikad ne pokreće program pod GNU GPL licencom); panoramske ili stereo kamere i slika neba kroz drugi program; dodatak za Unreal Engine (datoteke se pišu, dodatak koji ih otvara nije objavljen) | Naši vlastiti motori Fast i Path tracer; motor dodatka ([nacrtaj sliku drugim programom](topic:render-other-program)); USD, glTF ili Unreal datoteka foldera sa liste Engine za odnijeti u bilo koji program |
| U živom pogledu: rasipanje biljaka i stijena, dijeljenje panorama, obilazak, pregledač za rad van mreže ili video | Živi pogled u programu ModelCraft ih ima; ovdje su slike renderovanja i 360° panorame: vidi [Živi pogled](topic:live-view) i [Renderuj sliku modela](topic:render) |

## Crteži

| Još nije | Umjesto toga, danas |
|---|---|
| Uređivanje, mjerenje ili spašavanje DWG i DXF | Aplikacija za crtanje CadCraft ({{ui:Uredi u CadCraft}} na 2D pogledu) |
| Štampanje ili izvoz PDF-a | Štampaj iz programa koji je napravio crtež; prvo ga provjeri sa {{ui:Prikaz za štampu}} |
| Stilovi štampanja i tabele olovaka | {{ui:Prikaz za štampu}} prikazuje običnu crnu sa debljinama linija |
| DWG datoteke starije od R13, i binarni DXF (BimCraft to kaže kad otvoriš jednu) | Spasi crtež ponovo kao noviji DWG, ili kao ASCII DXF |
| Crteži povezani unutar povezanih crteža | Otvori ih direktno |
| TIFF slike | Spasi kopiju PNG ili JPEG sa istim nazivom i dodaj je |
| DGN crteži | Navedeni samo u izvještajima foldera |
| Objekti navedeni pod **Još nije nacrtano** | Pogledaj crtež u programu koji ga je napravio |
| ACIS tijela, tijela, regioni i površi, te mreže podjele u 3D | Izvezi IFC ili 3D lica iz programa koji je napravio crtež |
| Slike, multilideri i listovi u 3D pogledu crteža | Vidi ih na kartici {{ui:Model}} i na listovima |
| Odabir objekata u 2D pogledu crteža | Prebaci na {{ui:3D}} i klikni objekat tamo: vidi [Pogledaj DWG ili DXF crtež u 3D](topic:dwg-in-3d) |
| Specifikacije opreme iz crteža bez oznaka `KCL-ITEM` | Nije dostupno |
| Specifikacija opreme kao XLSX ili PDF | {{ui:Preuzmi CSV}} i otvori je u tabelarnom programu |

## Datoteke i platforme

| Još nije | Umjesto toga, danas |
|---|---|
| Spašavanje u oblaku | Spašavaj kopije na svom računaru ili serveru ureda. Spašavanje u oblaku još nije dostupno |
| Pamćenje foldera u Firefoxu i Safariju | Ponovo odaberi folder, ili ga prevuci |
| Poništavanje nakon spašavanja | Ponovo otvori originalnu datoteku da počneš iznova |
| Popunjavanje nedostajućeg dijela odrezane projektne datoteke | Kopiraj original ponovo; u folderu BimCraft čita najnoviju cjelovitu rezervnu kopiju |
| Ponovno otvaranje datoteka koje si imao otvorene | Nespašene promjene se nude natrag kao „Oporaviti rad?“ kad se vratiš; otvori datoteke ponovo sa liste nedavnih |
