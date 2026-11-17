---
title: Šta još nije napravljeno
summary: Šta ova verzija BimCraft-a još ne radi i šta koristiti umesto toga danas.
keywords: nedostaje, ograničenja, nije podržano, plan razvoja, izrada modela, modelovanje, preseci, merenje, sudar, bcf, oblak, radna površina, izvoz
from: 87777dcc
---

BimCraft danas je čitač, proveravač i uređivač IFC podataka koji je počeo da crta zgrade: zidovi, vrata i prozori, prostorije, podovi, plafoni i krovovi (pogledajte [Crtanje zidova](topic:draw-walls), [Vrata i prozori](topic:doors-and-windows) i [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs)). Ovo je iskren spisak onoga što još ne radi, sa onim što treba uraditi umesto toga.

## Modelovanje i izrada

| Još nije | Umesto toga, danas |
|---|---|
| Crtanje greda; stubovi od čeličnih profila | Koristite svoj program za izradu, pa ovde otvorite njegov IFC izvoz. Pravougaoni i okrugli stubovi se ovde postavljaju (pogledajte [Mreže i stubovi](topic:grids-and-columns)); prave, L, U, vitlaste i spiralne stepenice i ograde crtaju se ovde (pogledajte [Stepenice i ograde](topic:stairs-and-railings)) |
| Prozor u čelu krovnog prozora; krovni prozori na ravnima krova nacrtani rukom; zakrivljeni krovovi; prikazana tekstura pokrivača krova | Ravni krova se crtaju preko svojih uglova, a nagib za svaki zid: pogledajte [Krovovi: nagib za svaki zid, zabati, nadstrešnice i ravni krova](topic:roofs) |
| Menjanje zidova, vrata ili prozora koje je napravio drugi program | Vaš program za izradu; alati za crtanje menjaju samo ono što su nacrtali |
| Zidovi sa previsima ili rupama; otvori u zidu koji nisu pravougaoni; dodavanje ili uklanjanje tačaka profila zida u 3D prikazu | Profil, vezivanje, nagib i otvori rade u Svojstvima, u izgledima i presecima, na prikazu lica zida i hvataljkama u 3D, za prave i zakrivljene zidove: pogledajte [Oblikovanje zida: vezivanje, profil, nagib i otvori](topic:wall-shape) |
| Na zakrivljenim zidovima: {{ui:Trim / extend}} i {{ui:Corner}}, uokvirivanje, automatske kote na planu, hvatanje duž luka (hvata se za krajeve i sredinu luka) | Nacrtajte zid pravo za to, ili koristite prave segmente. Zakrivljeni zidovi su u [Crtanje zidova](topic:draw-walls) |
| Prevlačenje postavljene stavke biblioteke u 3D prikazu | Prevucite je na planu, ili upišite X, Y i Rotacija u {{ui:Properties}}: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library) |
| Postavljanje biljaka iz biljne biblioteke CivilCraft-ovog radnog prostora Landscape | Posadite ih u CivilCraft-u, ili postavite drveće i žbunje iz pratećih elemenata biblioteke: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library) |
| U dodatku Plant (isključen dok ga ne uključite): crtanje vođene trase u model, brojevi spulova na njegovim izometrijama, provera rasporeda opreme postavljene iz biblioteke | Nacrtajte trasu sa {{ui:Pipe}} (pogledajte [Cevi i vazdušni kanali](topic:pipes-and-ducts)); provera rasporeda čita sopstvenu tabelu opreme dodatka |
| Okretanje, ogledanje ili nizanje pojedinačnih nacrtanih zidova, vrata i prozora (zidovi se pomeraju, kopiraju i rastežu sa Pomeri, Odmak i Rastezanje okvirom: pogledajte [Oblici zidova, podela, odmak, rastezanje i zaključavanje](topic:wall-tools)); stil spoja (sučeljavanje, kvadratno odsecanje) na uglovima sa zakrivljenim zidom ili tri i više zidova (pogledajte [Oblici zidova, podela, odmak, rastezanje i zaključavanje](topic:wall-tools)); alat za tekst; zavesni zidovi | Kopirajte sve na nivou sa {{ui:Copy this level…}} (pogledajte [Crtanje zidova](topic:draw-walls#levels)); inače ih nacrtajte ponovo |
| Slojevi zidnog sklopa nacrtani u planu i preseku; kote u presecima i izgledima; referentne kote do vrata, prozora i drugih komponenti; sklopovi i membrane u specifikacijama i količinama; biblioteka materijala zajednička za projekte; prioritet slojeva u presecima, izgledima i 3D i u čvorovima tri zida ili više (na planu se uglovi, T-spojevi i ukrštanja dva zida čiste prema prioritetu slojeva: pogledajte [Oblici zidova, podela, odmak, rastezanje i zaključavanje](topic:wall-tools)); slojevi koji su zamotani ili promenljivi; uređivanje sklopa zida koji je napravio drugi program | Slojevi su u tipu zida i njegovom pregledu ({{ui:Wall assemblies…}}); zidovi se mere kao jedna ovojnica: pogledajte [Zidni sklopovi i referentne kote](topic:wall-assemblies) |
| Menjanje oblika ili veličine elementa (osim zidova, vrata i prozora nacrtanih ovde i elemenata postavljenih iz porodice) | Vaš program za izradu. Brisanje, sečenje, kopiranje i lepljenje rade ovde: pogledajte [Brisanje, sečenje, kopiranje i lepljenje elemenata zgrade](topic:edit-elements) |
| Brisanje spratova, prostora, zgrada ili lokacije | Izbrišite elemente u njima |
| Lepljenje elemenata zgrade u drugi model | Kopirajte i lepite unutar jednog modela; postavljene stavke biblioteke lepe se u bilo koji model |
| Dodavanje novih svojstava ili skupova svojstava | Popunite postojeće vrednosti ovde, ili dodajte parametar u svom programu za izradu i ponovo izvezite |
| Uređivanje količina, lista i nabrajanja | Vaš program za izradu |
| Čuvanje projektnih datoteka drugih programa | BimCraft čuva IFC (i sopstvene datoteke porodica: pogledajte [Porodice i njihove veličine](topic:families)) |
| Porodice: biblioteka porodica postavljenih iz plana i deljenih između projekata (Biblioteka), čvorište prevučeno u 3D prikazu postavljenog elementa (vuku se u pregledu uređivača porodica i na planu), nivoi detalja birani po prikazu (jedan nivo za projekat; listovi biraju po razmeri), okretanje na uspravnoj ravni unutar druge porodice za četvrt okreta, sopstveni simboli vrata i prozora na planu (crtaju se simboli iz početne porodice) | Porodice sa tipiziranim parametrima, formulama, sopstvenim simbolom na planu, čvorištima, ponavljanjima, nivoima detalja, porodicama unutar porodica, veličinama iz tabele i parametrima po elementu prave se ovde: pogledajte [Uređivanje porodice](topic:family-editor) i [Porodice i njihove veličine](topic:families). Dupliranjem porodice počnite od postojeće |
| Uređivanje tipova drugih programa kao porodica; pretvaranje stavke biblioteke u porodicu | Tipovi drugih programa su navedeni, grupisani po pretpostavci, a njihovi elementi izabrani. Stavke biblioteke se postavljaju kakve jesu |
| Proizvođačke armature, ventili i oprema (kapaciteti, težine, veličine priključaka proizvođača); dužine T-komada i redukcija ASME B16.9 na čeličnim spulovima; gubici pritiska kroz armature, protoci i balansiranje; sprinkleri; kablovske trase; dimenzionisanje vertikala i odvoda po jedinicama armatura; prevlačenje uglova trase; sečenje otvora u zidovima i pločama; puštanje kraja trase vezanog za priključak (osim brisanjem opreme); priključci na stavkama biblioteke postavljenim iz panela Biblioteka; težine armatura; spojevi, debljine i konektori kanala | Trase cevi i kanala sa standardnim generičkim armaturama, sistemima, planovima, specifikacijama i predmerom crtaju se ovde: pogledajte [Cevi i vazdušni kanali](topic:pipes-and-ducts). Generička oprema sa priključcima, povezane trase i provera priključaka: [Oprema za instalacije sa priključcima](topic:mep-equipment), [Povezivanje cevi i kanala sa opremom](topic:mep-connections). Skupovi sudara, razmaci i lista otvora: [Provera cevi i kanala u odnosu na konstrukciju](topic:mep-against-structure). Čelični spulovi i listovi spulova, lista za sečenje kanala: [Čelični spulovi cevi i listovi spulova](topic:pipe-spools). Proizvođačke stavke uvezite iz svog MEP programa kao IFC |
| Proračun projektnih kodova zavarenih I-profila, I-profila čiji IFC profil nije imenovan kao valjana veličina W, S, IPE, HEA ili HEB, i cevi, uglova i U-profila (vraćaju se kao neprovereni); izvijanje ili dinamički odziv (prirodne frekvencije su u bloku Konačni elementi) (drugi red je samo P-Delta: elastično, savojno, bez smanjenja krutosti); zidovi i ploče u analizi; opterećenja iz površina (osim jednog pritiska na svaku betonsku ploču) | Kartica {{ui:Analysis}} daje sile, reakcije i progibe greda, stubova i dijagonala metodom analize prvog reda i proverava valjane I-profile, kao pomoć dok inženjer ne pregleda: pogledajte [Analiza konstruktivnog okvira](topic:frame-analysis#design-checks) |

## Pregled modela

| Još nije | Umesto toga, danas |
|---|---|
| 3D iz projektnih datoteka | Izvezite IFC i otvorite ga. Pogledajte [Dobijanje projektne datoteke u 3D preko IFC-a](topic:rvt-to-ifc) |
| Interijerski izgledi u generisanom skupu crteža (iz Svojstava prostorije i na vašim listovima se prave); vaše kote na izgledima i presecima (oznake nivoa, visine, širina i oznake vrata i prozora se crtaju; napomene se pišu u prikazu: pogledajte [Uređivanje u izgledima i presecima](topic:edit-in-elevations)); crtanje zidova u izgledu (crtaju se u ravni preseka); šabloni tima preko Studio | Skup crteža napravljen iz modela: pogledajte [Izgledi, preseci i listovi](topic:sheets). Za bilo koji IFC model: jedna ravan {{ui:Section}} ili kutija preseka; pogledajte [Sečenje IFC modela ravni preseka](topic:section-plane) |
| Prikazi sa oznakom, detaljni prikazi, prikazi crteža i legende; linije crteža i šrafura nacrtane u prikazu; sečenje izgleda; šabloni prikaza za izglede, preseke, plafonske planove i 3D prikaze; plafonski planovi u generisanom skupu crteža; ceo skup vaših listova u jednom PDF-u | Planovi i plafonski planovi imaju opsege prikaza, oblast isecanja, razmeru i podlogu (planovi i šablone), a vaši listovi uzimaju planove, plafonske planove, izglede, preseke i specifikacije, svaki sačuvan kao PDF: pogledajte [Prikazi, opsezi prikaza i vaši listovi](topic:views-and-sheets) |
| Kasnije pomeranje postavljenog svetla do plafona; nagnuti ili stepenasti plafoni; šare plafona osim pet mreža; sopstveni simbol svetla u plafonskom planu | Postavite ga sa **Montaža: na plafonu**; plafonski plan crta armaturu iz sopstvenog oblika: pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library) |
| Deljenje pretraga sa drugima, skupovi unutar IFC datoteke | Skupovi ostaju u ovom pregledaču; pogledajte [Pronalaženje elemenata po klasi, imenu ili svojstvu](topic:find) |
| Merenje uglova ili duž putanje sa više tačaka | Izmerite svaki deo sa {{ui:Measure}}: pogledajte [Merenje rastojanja, površina lica i položaja u 3D](topic:measure) |
| Teksture u živom 3D prikazu | Obojeni materijali prikazuju boju u prikazu, a teksturu na renderovanim slikama: pogledajte [Renderovanje slike modela](topic:render) |
| Meki sudari (clearance) između bilo koja dva skupa, grupe sudara, čuvanje rezultata sudara | Pokrenite {{ui:Clash check}} i napravite probleme od onih koji su važni: pogledajte [Provera sudara](topic:clash-check). Cevi i kanali u odnosu na konstrukciju imaju {{ui:Check clearances}}: pogledajte [Provera cevi i kanala u odnosu na konstrukciju](topic:mep-against-structure) |
| Čuvanje nekoliko modela kao jednog skupa ili uređivanje dva modela istovremeno | Uređujte jedan model po jedan; svaki čuva svoju datoteku |
| Dodeljivanje problema, rokova, oznaka, više pogleda po problemu, uređivanje problema | Jedan pogled po problemu; pogledajte [Problemi i BCF datoteke](topic:issues-bcf) |
| `.ifczip` i `.ifcxml` | Raspakujte ili izvezite običan `.ifc` |
| Slojevi karte za model bez konverzije karte, ili u pogledima crteža | Izvezite model sa njegovim koordinatama: pogledajte [Karta na tlu ispod modela](topic:map-layers) |
| E57 skenovi preko 6 miliona tačaka ili 512 MB; sopstvene datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS); oblaci tačaka u 3D prikazu crteža; čuvanje položaja oblaka uz model | Izvezite skeniranje kao LAS ili LAZ i otvorite ga pored IFC modela: pogledajte [Formati oblaka tačaka](topic:point-cloud-formats) i [Prikaz oblaka tačaka pored modela](topic:point-clouds) |
| Registracija skenova: traženje meta (sfera, šahovskih tabli) u skenu samostalno, rešavanje svih skenova zajedno (izjednačavanje snopa), skala, registracija prema modelu | Izaberite odgovarajuće tačke ili upišite koordinate meta, pa dorađujte jedan sken po jedan sa ICP: pogledajte [Spajanje više skenova u jedan](topic:register-scans) |
| Otvaranje `.pln`, `.pla`, `.tpl` i `.bpn` projektnih datoteka | Izvezite IFC i DWG iz njih, ili projektni paket: pogledajte [Otvaranje .pln i .pla projektnih datoteka](topic:pln-project-files) i [Otvaranje projektnog paketa](topic:open-project-bundle) |
| Otvaranje liste {{ui:Elements}} za izbor po vrsti | Kliknite grupu vrste u {{ui:Model tree}}: pogledajte [Snalaženje kroz stablo modela](topic:model-tree) |
| Pisanje komentara ili naslova problema u VR-u, glasovne beleške, pomeranje ravni preseka rukom u VR-u, kutija preseka u VR-u | Postavite problem u VR-u, pa dodajte reči u karticu Problemi; postavite ravan ili kutiju preseka u 3D prikazu pre nego što uđete: pogledajte [Pregled modela u VR naočarima](topic:vr-review) |
| Videti ljude za stolom u VR-u (prikazuju se samo ljudi u VR-u), snimanje VR šetnje | Zamolite ih da se pridruže u VR-u, ili pratite u 3D prikazu |
| Simulacija dnevnog svetla (klimatski zasnovana, odsjaj, sati sunca), krovni prozori u faktoru dnevnog svetla, provere prema BS EN 17037 ili šemama zelene gradnje; metoda energije ISO 52016-1, satna simulacija energije, toplotna masa i mostovi, klimatske datoteke | Pomoćni alati za projektovanje: prosečan faktor dnevnog svetla, vertikalna komponenta neba svakog prozora, sunce kroz prozore na datum i faktor dnevnog svetla na mreži ([Procena dnevnog svetla u svakoj prostoriji](topic:daylight-factor)); toplotni gubici, godina stepen-dana i vršno hlađenje po prostoriji ([Procena opterećenja grejanja i hlađenja](topic:heating-and-cooling-loads)). Za usklađenost koristite program za simulaciju |
| Hostovani digitalni blizanac zgrade: očitavanja sačuvana i upozorenja poslata e-poštom kad je BimCraft zatvoren, e-poruke o roku održavanja; MQTT 5; vraćanje COBie poslova | Očitavanja iz CSV-a ili direktno sa vašeg brokera ili adrese dok je model otvoren, granice koje označavaju sredstva, dokumenti, COBie izlaz i ulaz: pogledajte [Čuvanje podataka o sredstvima i evidencije održavanja u modelu](topic:assets-and-maintenance) |
| Dodatak ili živa veza za Enscape, Twinmotion ili druge programe za vizualizaciju; FBX ili Datasmith datoteke; jedan objekat po elementu, sačuvani pogledi i šetnje u .glb | Sačuvajte .glb za programe za renderovanje koji čitaju glTF, USD datoteku (jedan objekat po elementu, sa njegovim IFC podacima: pogledajte [Izvoz modela kao USD](topic:usd)), ili IFC za one koji rade unutar drugog programa za projektovanje: pogledajte [Slanje modela programu za renderovanje](topic:model-for-rendering) i [Otvaranje scene u drugom programu](topic:render-open-in) |
| Drugi program crta sliku renderovanja bez dodatka za motor renderovanja (CadCraft nikad ne pokreće program pod GNU GPL licencom); panoramske ili stereo kamere i slika neba preko drugog programa; dodatak za Unreal Engine (datoteke se pišu, dodatak koji ih otvara nije objavljen) | Naši sopstveni motori za praćenje zraka Fast i Path; motor nekog dodatka ([nacrtajte sliku drugim programom](topic:render-other-program)); USD, glTF ili Unreal datoteka iz liste motora, da je ponesete u bilo koji program |
| U živom prikazu: rasipanje biljaka i stena, deljenje panorama, obilazak, pregledač van mreže ili video | ModelCraft-ov živi prikaz ih ima; ovde, renderovane slike i 360° panorame: pogledajte [Živi prikaz](topic:live-view) i [Renderovanje slike modela](topic:render) |

## Crteži

| Još nije | Umesto toga, danas |
|---|---|
| Uređivanje, merenje ili čuvanje DWG i DXF | Aplikacija za crtanje CadCraft ({{ui:Edit in CadCraft}} na 2D prikazu) |
| Štampanje ili izvoz PDF-a | Štampajte iz programa koji je napravio crtež; prvo proverite sa {{ui:Print view}} |
| Stilovi olovaka i tabele pera | {{ui:Print view}} prikazuje obično crno sa debljinama linija |
| DWG datoteke starije od R13 i binarni DXF (BimCraft to kaže kad otvorite jedan) | Sačuvajte crtež ponovo kao noviji DWG, ili kao ASCII DXF |
| Crteži povezani unutar povezanih crteža | Otvorite ih direktno |
| TIFF slike | Sačuvajte kopiju PNG ili JPEG sa istim imenom i dodajte je |
| DGN crteži | Navedeni samo u izveštajima o fasciklama |
| Objekti navedeni pod **Još nije nacrtano** | Pogledajte crtež u programu koji ga je napravio |
| ACIS tela, solidi, oblasti i površine, i mreže podele u 3D | Izvezite IFC ili 3D lica iz programa koji je napravio crtež |
| Slike, multivodeće oznake i listovi u 3D prikazu crteža | Pogledajte ih na kartici {{ui:Model}} i na listovima |
| Biranje objekata u 2D prikazu crteža | Pređite na {{ui:3D}} i kliknite objekat tamo: pogledajte [Pregled DWG ili DXF crteža u 3D](topic:dwg-in-3d) |
| Liste opreme iz crteža bez `KCL-ITEM` oznaka | Nije dostupno |
| Lista opreme kao XLSX ili PDF | {{ui:Download CSV}} i otvorite u tabelarnom programu |

## Datoteke i platforme

| Još nije | Umesto toga, danas |
|---|---|
| Čuvanje u oblaku | Sačuvajte kopije na računaru ili na kancelarijskom serveru. Čuvanje u oblaku još nije dostupno |
| Pamćenje fascikli u Firefox-u i Safari-ju | Izaberite fasciklu ponovo, ili je prevucite |
| Opozivanje posle čuvanja | Ponovo otvorite originalnu datoteku da počnete iznova |
| Popunjavanje nedostajućeg dela projektne datoteke koja je odsečena | Kopirajte originalnu ponovo; u fascikli BimCraft čita najnoviju potpunu rezervnu kopiju |
| Ponovno otvaranje datoteka koje ste imali otvorene | Nesačuvane izmene vam se nude kao „Oporaviti vaš rad?“ kad se vratite; ponovo otvorite datoteke sa liste nedavnih |
