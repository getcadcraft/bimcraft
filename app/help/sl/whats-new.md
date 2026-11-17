---
title: Novosti v različici 0.9
summary: Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje na mrežo, nivoji pod tlemi, kote mreže in merjenje v tlorisu, podvojeni pogledi z delovnimi slogi in tabelami peres, Prijavi kot, izvoz Collada in Google Earth, Scan to BIM, vetrna in potresna analiza ter dodatki za smolno tiskanje.
keywords: novosti, 0.9, opombe ob izdaji, oblike zidov, pravokotnik, mnogokotnik, lok, izbira črt, sledi obrisu, odmik, združi, raztezanje z okvirjem, poravnaj in zakleni, razdeli zid, reža, ponovno združi, zakleni na mrežo, rast od, meri od, dodaj nivo spodaj, klet, ukaz nivo, kote mreže, merjenje v tlorisu, delovni slog, podvojen pogled, lastna kopija, povezan pogled, tabela peres, natisni kot prikazano, prijavi kot, vnesite merilo, uvozi svg, vstavi v tloris, vstavi v model, collada, dae, kmz, google earth, scan to bim, vetrna obtežba, potresna, končni elementi, plošča dokumentov, smolno tiskanje, kaj je novega, 0.8, 0.8.1, različica, nove zmožnosti, evakuacija, ljudje, čakalne vrste, akustika, reverberacija, impulzni odziv, poplava, veter, potres, nevarnost, življenjski cikel, življenjska doba, ids, oznake, razpredelnice, premakni, poravnaj, razporedi, slika, podlaga, skeniranje v zidove, lokacija iz civilcraft, paneli, okvir, sončna energija, pv, razdeli, vrf, notranja enota, dimenzioniranje cevi, kabelski kanal, osvetljenost, beton, potres, primerjava optičnega posnetka, epsg, projekcija, dokumenti, predloga, ogljik, stroški, energyplus, pogon upodabljanja, odpri v, usd, glb, unreal, razveljavi, dodatki, pcf, simboli, rastline, sled, peresa, trak, brskalnik projekta, postavitev
from: 5624fe88
---

To je, kaj se je spremenilo v BimCraft 0.9 v primerjavi z 0.8.1. Dve veliki temi sta pravo orodje za zid in pogledi, ki se obnašajo tako, kot pričakujejo ljudje iz velikih BIM programov. Poleg njiju so izvoz Collada, pomočniki, ki lahko postavljajo električne naprave, Scan to BIM ter vetrna, potresna in končnoelementna analiza v zavihku {{ui:Analiza}}.

## Novo

### Zidovi

- **Riši cele oblike.** V {{ui:Risanje}} odprite {{ui:Oblike}} (ali izberite obliko v seznamu Oblika v vrstici Zid) za pravokotnik, zasukan pravokotnik, mnogokotnik s 3 do 64 stranicami, lok po središču, tangentni lok, zidove na izbranih črtah ali zidove okoli zaprtega območja, na katerega kliknete znotraj. Pravokotnik je štirje zidovi s štirimi spojenimi vogali in en korak razveljavitve. Glejte [Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje](topic:wall-tools).
- **Nastavite pred risanjem, spremenite po njem.** Vrstica Zid ima {{ui:Odmik}} in {{ui:Združi}} (odznačite, da narišete samostojne zidove). Pozneje uporabite {{ui:Odmik}}, {{ui:Raztegni z okvirjem}} in {{ui:Poravnaj in zakleni}} na narisanih zidovih. Premaknjen ali raztegnjen zid ohrani svoja vrata, okna in kote. Vsak recept je en korak razveljavitve.
- **Razrežite zidove.** {{ui:Razdeli}}, {{ui:Reža}}, {{ui:Prosti konci}}, {{ui:Izbriši odsek}} in {{ui:Ponovno združi}} prerežejo zid na klik ali tam, kjer ga križa drug zid. Rez skozi vrata je zavrnjen. Glejte [Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje](topic:wall-tools).
- **Zaklepanje zidov na osi mreže.** Izberite zid ob osi mreže in označite {{ui:Zakleni na mrežo}} v {{ui:Lastnosti}}. Z vklopljenim orodjem Mreža vpišite razdaljo v {{ui:Premakni za}} za izbrano črto, zaklenjeni zidovi pa sledijo v enem koraku razveljavitve.
- **Oblikujte en zid.** V {{ui:Lastnosti}} enega zidu lahko pritrdite njegov vrh ali spodnji rob na streho, talno ploščo ali strop, uredite njegov obris v pogledu, ga nagnete ali izrežete odprtino v zidu brez vrat ali okna. Glejte [Oblikovanje zidu](topic:wall-shape).
- **Dolžina pove, katera stran ostane.** {{ui:Rast od}} določi, ali začetek, konec ali središče ostane na mestu, ko spremenite dolžino.
- **Dolžina in kota v tlorisu se ujemata.** {{ui:Meri od}} (osrednja črta, notranje lice ali zunanje lice) vodi tako polje Dolžina kot kote zidov v tlorisu. Začne se na osrednji črti, zato kote zidov v tlorisu zdaj berejo osrednjo črto, kjer so prej brale zunanje lice. Spremenite ga v vrstici Zid, v {{ui:Lastnosti}} ali v {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Nivoji, mreže in merjenje

- **Dodaj nivo spodaj.** {{ui:Dodaj nivo spodaj}} v plošči {{ui:Nivoji}} doda nivo pod najnižjim, enako visok kot ta, na negativni koti (Nivo -1, Nivo -2). Nič drugega se ne premakne. {{ui:Dodaj nivoje …}} zdaj sprejme negativne višine; ukaz NIVO, NIVOJI, ETAŽA ali ETAŽE v ukazni vrstici odpre {{ui:Dodaj nivoje …}}, v menijih in zavihkih traku pa je gumb {{ui:Nivoji}}. Glejte [Mesta, stavbe in nivoji](topic:site-building-and-levels).
- **Kote mreže v tlorisu.** Z vklopljenim orodjem {{ui:Mreža}} označite {{ui:Kote}}, da narišete razmik med sosednjimi črtami ter skupno velikost čez mehurčke na tlorisu vsakega nivoja. Glejte [Kotiranje mreže](topic:grid-dimensions).
- **Merjenje v tlorisu.** {{ui:Meri}} v skupini {{ui:Risanje}} da razdaljo z razlikama X in Y med dvema klikoma. V model se nič ne shrani. Glejte [Merjenje v tlorisu](topic:measure-on-the-plan).
- **Spremenite več stolpcev hkrati.** Izberite stolpce skupaj z zidom, izbira pa navede vsako vrsto z {{ui:Ohrani samo te}}. En klik ohrani stolpce in pokaže njihova skupna polja.
- **Ena prikazna enota povsod.** Koordinate, meritve, prerezi, merila listov, obremenitve in rezultati zavihka okvirja ter besedilo v Težavah sledijo enoti, ki jo izberete. Izvozi ostanejo SI.

### Pogledi, listi in tisk

- **Delovni slog.** {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Delovni slog}} izbere, ali ima vsak pogled svoje oznake in tabele peres ali pa jih deli. Glejte [Delovni slog, podvojeni pogledi, peresa na papirju, Prijavi kot in predloge](topic:working-style).
- **Podvoji pogled.** Tlorisi, tlorisi stropov, klici, pogledi in prerezi se lahko podvojijo kot {{ui:Lastna kopija}} ali {{ui:Povezano}}; {{ui:Naredi lastno kopijo}} naredi povezanega neodvisnega. Glejte [Delovni slog, podvojeni pogledi, peresa na papirju, Prijavi kot in predloge](topic:working-style).
- **Natisni kot prikazano ali skozi tabelo peres.** Prepisi peres se hranijo v IFC s pogledom, listi in PDF jih narišejo tako kot zaslon. Ista tema zajema tudi tabele peres.
- **Prijavi kot.** {{ui:Prijavi kot}} v {{ui:Lastnosti}} zapiše ploščo, narisano kot cesto, zid kot panel ali streho kot rampo v IFC kot razred, ki ga izberete, in jo kot tak šteje v razpredelnicah, Količinah, Iskanju, Barvi glede na in Težavah.
- **Urejanje v pogledih in prerezih.** Risanje in premikanje zidov, odprtin, nivojev, kot in opomb kar v pogledu ali prerezu, z lastnimi velikostmi listov in naslovnimi bloki. Glejte [Urejanje v pogledih in prerezih](topic:edit-in-elevations).
- **Listi.** Vsak list je lahko ležeč ali pokončen. Polje {{ui:Vnesite merilo}} stoji poleg seznama meril na vsakem postavljenem pogledu (1:64, 2:1, 1/4" = 1'). Postavljeno risbo lahko povlečete ali premaknete s puščičnimi tipkami, {{ui:Formati…}} › {{ui:Uvozi SVG…}} pa vašo lastno zasnovo lista spremeni v naslovni blok s polji, vnesenimi za vsak list.
- **Zasluge knjižnice na listu.** Komplet risb z elementi knjižnice dobi razpredelnico zaslug knjižnice, ki jo lahko postavite na kateri koli list. Glejte [Zasluge knjižnice](topic:library-credits).

### Knjižnica: postavljanje

- **Postavitev sledi pogledu.** V pogledu Tloris knjižnica pokaže {{ui:Vstavi v tloris}}; v 3D pokaže {{ui:Vstavi v model}}; v Razdelitvi pokaže razdeljen gumb z {{ui:Vstavi v tloris}} kot glavnim dejanjem. Oba načina zapišeta isti element IFC. Kartico knjižnice lahko tudi povlečete na tloris ali 3D pogled; s peresom ali prstom pritisnite in držite, nato povlecite. Glejte [Postavitev iz knjižnice](topic:place-from-library).

### Datoteke in pomočniki

- **Collada in Google Earth.** {{ui:Collada}} v orodni vrstici (meni Datoteka v menijskih slogih) zapiše `.dae` ali `.kmz`, postavljen tam, kjer je model na zemljevidu. Glejte [Izvoz modela kot Collada ali za Google Earth](topic:collada).
- **Pomočniki lahko postavljajo električne naprave.** Vaš povezani pomočnik ima nova orodja za dodajanje, seznam, spreminjanje in brisanje naprav ter nastavljanje luči. Pomočniki so izklopljeni, dokler jih ne vklopite v {{ui:Nastavitve}}. Glejte [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants).
- **Scan to BIM (dodatek).** Privzeto izklopljen in potrebuje dodatek Oblaki točk. Predlaga etaže, zidove, vrata in okna iz posnetka z izmerjenim odklonom za vsakega; sprejetje je en korak razveljavitve.

### Analiza

- **Vetrni in potresni podatki o lokaciji.** V zavihku {{ui:Analiza}}: vetrne obremenitve po ASCE 7-10 ali 7-16 za togo zaprto stavbo, s silo na vsaki etaži kot primeri obtežb, ter podatki o potresni lokaciji z iskanjem USGS in projektni spekter.
- **Nadaljevanje konstrukcije in končni elementi.** Preverjanja betona po ACI 318-19, ekvivalentne bočne sile po ASCE 7-22, zamik etaž, plošče in zidovi kot plošče ter kombinacije obtežb po ASCE 7 in EN 1990. Naš lastni motor končnih elementov izvaja lupine, tetraedre in modalno analizo. Glejte [Preverjanje betonskih elementov in potresne obtežbe](topic:concrete-and-seismic) in [Analiza okvirjev](topic:frame-analysis).

### Drugi dodatki in dokumenti

- **Notranja osvetlitev (dodatek).** Postavi svetilke in zapiše luks kot številke v tlorisu vsakega nivoja z oceno bleščanja in poročilom za tiskanje.
- **Plošča dokumentov.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima odjavo in prijavo z datoteko zaklepa, oznake revizij, stanja izdaje in zgodovino.
- **Regije in jeklo.** Paketi južnoafriških risb in gradbenih predpisov v dodatku Predpisi ter 976 jeklenih velikosti za Združeno kraljestvo v skupni tabeli prerezov.
- **Brezplačni dodatki za smolno tiskanje.** Rezina, podpore in podlaga, preskus izpostavljenosti ter formati datotek GOO, SL1, Chitubox in Anycubic, vsi privzeto izklopljeni.

## V vseh aplikacijah

- Ko se z miško premaknete na gumb ali nastavitev, se prikaže Bootstrap namig.
- Začetni namig na praznem območju risbe ima gumb za zapiranje; BimCraft si zapomni, da je bil zaprt.
- Vrstica zavihkov plošče, ki se ne prilega, se zdaj pomika namesto da bi jo odrezalo.
- Ko je dokument odprt, brskalnikov zavihek bere »<dokument> - BimCraft | CadCraft«.
- V {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Postavitev}} so postavitve spustni seznam dvovrstičnih izbir.
- Seznam jezikov v {{ui:Nastavitve}} ponuja več jezikov kot v 0.8; jeziki, razen angleščine, so strojni osnutki.

## Popravljeno

- **Premik na stopnicah** ter na rampah, ograjah, ravninah strehe, prosto stoječih napravah, slikah in poteh.
- **Vlečenje zidu ne skrivi več prostora.** Osrednja ročica premakne zid pravokotno na samega sebe, njegovi vogali pa drsijo po spojenih zidovih. Držite {{key:Mod}} za staro prosto premikanje; {{ui:Poravnaj pravokotno}} vrne 90 stopinj.
- **Sprememba debeline ali tipa na spojenem vozlišču** zdaj ohrani vogal zaprt pri L, T, vozlišču treh zidov in ob ukrivljenem zidu.
- **Premikanje ali kopiranje skupine prostorov** ohrani spojene zidove zunaj skupine spojene.
- **Redo ohrani identiteto kote zidu.**
- **Izbira zidu z izklopljenim Risanjem** v Lastnostih več ne vrže napake.
- **Upodobitev se prestavi na WebGL,** ko grafična kartica ne more zagnati, namesto da bi se ustavila.
- **Preverjanje EnergyPlus je mogoče spet vklopiti.**
- **Dokumenti se odprejo kot središčeno pogovorno okno.** {{key:Esc}}, X ali klik na zatemnjeno stran ga zapre.
- **Gumbi {{ui:Tloris}}, {{ui:Razdeli}} in {{ui:3D}} se prikažejo,** takoj ko je model odprt, ne šele potem, ko ste enkrat vklopili Risanje.

## Iskreno o omejitvah

- Nič ni bilo natisnjeno na pravi strojni opremi. Podpore za smolo so nove in še niso preizkušene.
- Rezultati vetra, potresa, betona in končnih elementov so pomoč inženirju za preverjanje, preverjeni proti zaprtim oblikam, ne proti pravi stavbi.
- Scan to BIM je bil preizkušen na sintetični stavbi, ne na pravem posnetku, in najde samo pravokotne prostore.
- Collada tukaj še ni bila odprta v Blenderju ali Google Earth.
- Ocena osvetlitve je preverjena proti našemu lastnemu sledenju, ne proti drugim programom za osvetlitev.
- Južnoafriške številke niso preverjene.
- Slogi spojev zidov (na stik, poševno, ravno) in prednost sloja še niso izdelani; vogali so poševni.
- Jeziki, razen angleščine, so strojni osnutki.

## Jeziki

54 jezikov, deset novih. Ti, razen angleščine, so strojni osnutki, ki jih še ni prebral govorec; teme pomoči so večinoma v angleščini.

## Prej: 0.8 in 0.8.1

To je, kaj se je spremenilo v BimCraft 0.8 (2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. BimCraft lahko zdaj odgovarja na vprašanja o stavbi in jo preizkusi z ljudmi, zvokom, vodo, vetrom in potresi ter jo riše z več orodji; 0.8.1 je popravljalna izdaja.

### Novo

**Preizkusite stavbo**

- **Ljudje v stavbi.** Razdelek {{ui:Ljudje v stavbi}} levega podokna pelje evakuacijo ali običajen dan prihodov skozi vaše prostore, vrata in stopnišča. Vidite čakalne vrste tam, kjer se stavba zoži, najdaljšo pot do izhoda iz vsakega prostora in kako dolgo traja zadnja oseba. Označite {{ui:Zaprto}} na vratih, da vidite, kaj se spremeni, in {{ui:Pokaži ljudi v pogledu 3D}}, da spremljate hodce. Ugotovitve gredo v Težave. Grob model množice za oblikovalske odločitve, ne potrdilo o požarni varnosti. Glejte [Sprehod ljudi skozi stavbo](topic:people-in-the-building).
- **Akustika prostorov in poslušanje.** Razdelek {{ui:Akustika prostorov}} da čas dozvanjanja vsake sobe po oktavnih pasovih (Sabine in Eyring) iz njene velikosti in izbranih oblog, z lastnim ciljem pa pove, koliko absorpcije bi ustrezalo. {{ui:Predvajaj v tem prostoru}} predvaja glas, ploskanje, odščipnjene note ali vašo lastno zvočno datoteko skozi impulzni odziv, izračunan za sobo. Vrednosti absorpcije so tipične objavljene vrednosti, ki jih lahko zamenjate. Glejte [Akustika prostorov](topic:room-acoustics).
- **Predvajanje poplave, vetra in potresa.** {{ui:Predvajanje nevarnosti}} predvaja vodo, ki se dviga po sobah, pritisk vetra na vsako etažo in potres, ki trese etaže, na tlorisu ali pogledu z drsnikom časa. Preprosti modeli z njihovimi predpostavkami na plošči; ne kontrola skladnosti. Glejte [Predvajanje poplave, vetra ali potresa](topic:hazard-playback).
- **Kaj se obrablja v petdesetih letih.** {{ui:Pogled življenjskega cikla}} našteje okna, vrata, obloge in streho z življenjsko dobo vsakega, leti, ko jih zamenjate, in, ko vpišete ceno na enoto, strošek po letih in njegovo sedanjo vrednost. {{ui:Shrani razpored (CSV)}} ga zapiše. Življenjske dobe so načrtovalske vrednosti. Glejte [Poglejte, kaj se obrablja v petdesetih letih](topic:life-cycle-view).
- **Betonske in potresne kontrole.** Bloka {{ui:Betonski elementi}} in {{ui:Potresne obtežbe}} v zavihku {{ui:Analiza}} preverita betonske grede in stebre po ACI 318-19 ter naredita ekvivalentne bočne sile po ASCE 7-22 na togih ploščah z zamikom etaž. Za inženirja v pregled. Glejte [Preverjanje betonskih elementov in potresne obtežbe](topic:concrete-and-seismic).

**Preverite in poročajte**

- **Preverite glede na IDS.** Naložite datoteko `.ids`, ki vam jo je dal naročnik, in vidite vsak element, ki ne izpolnjuje zahtev, v Težavah, preden dostavite IFC. Odprite {{ui:Preverjanje glede na IDS}} pod {{ui:Preverjanja modela}}. Glejte [Preverjanje modela glede na IDS naročnika](topic:check-against-ids).
- **Oznake in razpredelnice.** Določite lastne oznake, nastavite jih na mnogo elementov hkrati in naredite razpredelnice, katerih stolpci, filtri in skupine jih berejo; oznake se hranijo v IFC. Glejte [Oznake in razpredelnice](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} napolni predlogo specifikacije iz odprtega IFC in jo shrani kot PDF, dokument Word ali Markdown. Glejte [Dokumenti iz modela](topic:documents-from-the-model).
- **Primerjajte optični posnetek z modelom.** Z odprtim oblakom točk {{ui:Primerjaj}} presodi vsak element kot zgrajen, delno zgrajen, manjkajoč ali nedosežen, in pokaže odstotek zgrajenega. Glejte [Primerjava optičnega posnetka z modelom](topic:compare-scan-with-model).
- **Ogljik in stroški.** Podokno Ogljik sešteje vgrajeni ogljik iz tabele faktorjev, ki jo lahko urejate, podokno Stroški pa razporedi cene po razporedu 4D. Faktorji, ki pridejo z BimCraft, so splošni in označeni kot nepreverjeni. Glejte [Vgrajeni ogljik in stroški](topic:embodied-carbon-and-5d-cost).
- **Katerakoli kartografska projekcija.** {{ui:Meri}} › {{ui:Koordinatni sistem…}} sprejme številko EPSG, cono UTM, ime ali vašo lastno definicijo projekcije. Glejte [Georeferenciranje s katerokoli projekcijo](topic:georeference-any-projection).

**Risanje in urejanje**

- **Premakni, poravnaj in razporedi.** Pod {{ui:Zgradba}}; {{key:Shift+M}} začne Premakni (navadni {{key:M}} je še vedno Meri). Premakni kopira med delom s {{key:C}}, vsak korak je en razveljavitev, potuje pa v seji Live TeamWork. Glejte [Premakni, kopiraj, poravnaj in razporedi](topic:move-align-distribute).
- **Slike pod tlorisom.** {{ui:Zgradba}} › {{ui:Slika}} postavi PNG, JPEG ali WebP pod tlorisom nivoja ali na navpično ravnino. Merilo nastavite z dvema točkama, premaknete, zavrtite, zbledite in zaklenete. Izrez, kopiran v MarkupCraft, se prilepi v merilu svojega lista. Glejte [Slika pod tlorisom](topic:pictures-as-backgrounds).
- **Skeniranje v zidove.** Z odprtim posnetkom se zidovi, vrata in prostori pojavijo kot predlogi, ki jih obdržite ali zavrnete posamično, v enem koraku razveljavitve. Najdejo se samo zidovi v dveh pravokotnih smereh. Glejte [Pretvorba posnetka v zidove](topic:scan-to-walls).
- **Sled, peresa in skica stopnišča.** {{ui:Preriši}} prikaže drugi nivo črtkano pod tlorisom, {{ui:Peresa}} da zidovom, vratom in oknom lastno debelino črte v enem pogledu, {{ui:Skiciraj stopnišče}} pa spremeni hojo črto v stopnišče. Odpre se mreža Wavefront OBJ. Glejte [Sled nivoja, peresa in stopnišče iz skice](topic:trace-pens-stairs-obj).
- **Zgradbe okoli naslova.** Zgradbe in parcela, ki jih je našel CivilCraft Naslov v lokacijo, pridejo kot predlogi; označite tiste, ki jih želite dodati. Glejte [Začnite z lokacijo iz CivilCraft](topic:site-from-civilcraft).
- **Risbe panelov.** {{ui:Zgradba}} › {{ui:Risbe panelov}} uokviri zidove, tla in strehe iz lesa ali lahkega jeklenega profila ter shrani seznam krojenja kot CSV in delavniške risbe kot PDF. Začetne vrednosti, ne konstrukcijska zasnova. Glejte [Risbe panelov](topic:panel-drawings).
- **Simbolna paleta in rastline.** {{ui:Zgradba}} › {{ui:Paleta simbolov}} najde električne in vodovodne simbole po imenu; vir {{ui:Rastline}} v {{ui:Knjižnica}} našteje okoli 400 rastlin s simboli v tlorisu. Glejte [Simbolna paleta](topic:symbol-palette) in [Postavitev rastline](topic:plant-list).

**Cevi, kanali in energija**

- **Split, VRF in ventilatorske enote.** Notranje in zunanje enote s svojimi priključki ter priključni vodi, dimenzionirani iz tabele tipičnih primerov, ki jih lahko spremenite. Glejte [Split, VRF in ventilatorske enote](topic:split-vrf-fan-coils).
- **Izračuni.** Podokno Izračuni preveri dimenzije napajalnih cevi in kanalov s padcem tlaka, vodi kable po kabelskih policah in v cevovodih ter pokaže njihovo zapolnjenost, osvetljenost pa izračuna iz datotek IES ali EULUMDAT. Privzete vrednosti so označene; vpišite vrednosti svojega predpisa. Glejte [Izračuni cevi, kanalov, kablov in svetlobe](topic:mep-calculations).
- **Datoteke PCF.** {{ui:Izvozi PCF}} v orodju Cev zapiše odseke za programe za napetosti cevi in izometrijo, datoteka PCF, prebrana nazaj, pa nariše svojo cev. Glejte [Datoteke za cevne komponente](topic:piping-pcf).
- **Sončna PV.** Namestite nize na strehe ali tla, jih senčite iz modela, ocenite letno energijo, preverite stringe in naredite podatke za enočrtni diagram. Začetni modul in izgube so splošni. Glejte [Sončna PV](topic:solar-pv).
- **Datoteka EnergyPlus.** Podokno Preveri z EnergyPlus zapiše model kot IDF za zagon v vašem EnergyPlus. Zagon v brskalniku potrebuje gradnjo, ki jo gostite sami in vpišete njen naslov; BimCraft je ne prinaša. Glejte [Preverjanje ogrevanja in hlajenja z EnergyPlus](topic:check-with-energyplus).

**Slike in datoteke**

- **Izberite upodabljalnik.** {{ui:Upodobitev}} ima izbiro {{ui:Pogon}}. Naša dva vgrajena motorja (Hitro in Sledilnik žarkov) ostaneta privzeta. {{ui:Odpri v …}} shrani prizor kot datoteko USD ali glTF, projektna mapa Unreal kot .zip; v CadCraft Studio lahko dodatek doda motor. Vtičnik Unreal, ki odpre projekt, ni izdan. Glejte [Izberite program, ki riše sliko](topic:render-engines).
- **Razveljavitev v Studiu.** Znotraj CadCraft Studio BimCraft Studiu pove za vsak dokončan korak, da lahko Studio razveljavi vaš zadnji korak v katerem koli oknu, ki ste ga nazadnje uporabili. Glejte [Razveljavitev med aplikacijami](topic:undo-across-apps).
- **Dodatki v datoteki.** IFC zapiše, kateri dodatki so pisali vanj, in ponudi tiste, ki jih nimate, ko ga odprete. Glejte [Dodatki v vaši datoteki](topic:add-ons-in-your-file).

**V vseh aplikacijah**

- **Povežite svojo umetno inteligenco.** Vaš pomočnik lahko upravlja BimCraft preko povezave Studia in odgovarja na vprašanja o modelu, na primer katere sobe so pod dano površino. Studio nima lastne umetne inteligence. Glejte [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja Prelom, 2 vrstici ali 1 vrstica; Prelom ostane privzet.
- **Vnosne naprave.** Sledilna ploščica, pero, 3D miška, krmilnik in nastavitve MIDI so deljene med vsemi aplikacijami.
- **Težave in Live.** Opozorilna plošča in seje Live delujejo kot prej, z novimi preverjanji zgoraj, ki napajajo Težave.
- **Jeziki.** 54 jezikov, deset novih. Ti, razen angleščine, so strojni osnutki, ki jih še ni prebral govorec; teme pomoči so večinoma v angleščini.

### Popravljeno v 0.8.1

- **Trak in razporeditev brskalnika projekta.** Vstavi › Uvozi CAD, Vstavi › Slika in Upravljaj › Enote projekta so pisali »Še ni izdelano v BimCraft«. Slika zdaj odpre orodje Slika, Uvozi CAD odpre {{ui:Zgradba}} › {{ui:Iz risbe …}} (DWG, DXF, PDF ali posnetek), Enote projekta pa {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Enote}}. Premakni in Poravnaj zaženeta orodji Premakni in Poravnaj, Nivo odpre {{ui:Dodaj nivoje …}}, Faze odpre razdelek Faze prenove, Materiali pa knjižnico materialov.
- **Razred DWG.** Razdelek razredov DWG je bil prebran kot napačna vrsta; popravljeno v BimCraft in drugih aplikacijah, ki berejo DWG.
- **Jezik med delovanjem.** Studio in pakirane izdaje lahko zdaj zamenjajo jezik brez ponovnega zagona. To še ni preizkušeno na vseh platformah; sporočite, če se jezik ne spremeni.
- **Skripta arhiva Archicad.** `archicad_bundle.py`, ločen prenos, zdaj najde pot Archicad, opazuje mapo do 20 sekund in poskusi znova poleg paketa.

### Še ni v tej različici

- **Varnostna in oblikovalska pomoč.** Ljudje v stavbi nimajo omejitve potovalne razdalje iz gradbenega predpisa (vi vpišete omejitev) in niso bili ročno preverjeni na pravem tlorisu. Vrednosti akustike, življenjskega cikla in nevarnosti so načrtovalske vrednosti, ne kontrola predpisov.
- **Podnebne prihodnosti in EnergyPlus.** Ni vgrajenih podnebnih prihodnosti: za zagon poplave lahko naložite datoteko scenarija. Zagon EnergyPlus v brskalniku ni del te izdaje.
- **Postavitev traku.** Predizmera materiala ostane »Ni izdelano«, ker BimCraft nima seznama količin materiala, 54 drugih zatemnjenih orodij traku pa nima še nobenega orodja BimCraft za seboj.
- **Podpisovanje in platforme.** Namestitveni programi za Windows in .dmg za macOS niso podpisani, zato SmartScreen pokaže {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}, macOS pa zahteva desni klik in {{ui:Odpri}}. Gradnja za iPad in iPhone ni bila ponovno zgrajena za 0.8.1.
- **Preizkusi pravih strani.** Nekateri starejši brskalniški preizkusi BimCraft na naši testni strani še vedno padejo, kot so padali pred 0.8.1.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet). Prejšnje spremembe so v [Novosti v različici 0.7](topic:whats-new-0-7).
