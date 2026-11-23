---
title: Kaj je novega v 0.9 (prej)
summary: Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje na mrežo, nivoji pod tlemi, kote mreže in Meri na tlorisu, podvojeni pogledi z delovnimi slogi in tabelami peres, Prijavi kot, izvoz Collada in Google Earth, Skeniranje v BIM, analiza vetra in potresa, dodatki za tiskanje s smolo.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, 0.9, opombe o izdaji, oblike zidov, pravokotnik, mnogokotnik, lok, izbira črt, obris preriši, odmik, združi, raztegni z okvirjem, poravnaj in zakleni, razdeli zid, reža, ponovno združi, zakleni na mrežo, rast od, meri od, dodaj nivo spodaj, klet, ukaz nivo, kote mreže, meri na tlorisu, delovni slog, podvojen pogled, lastna kopija, povezan pogled, tabela peres, natisni kot prikazano, prijavi kot, vnesite merilo, uvozi svg, vstavi v tloris, vstavi v model, collada, dae, kmz, google earth, skeniranje v bim, veter, potres, končni elementi, plošča dokumentov, tiskanje s smolo, kaj je novega, opombe o izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, evakuacija, ljudje, vrste, akustika, odmev, impulzni odziv, poplava, veter, potres, nevarnost, življenjski cikel, življenjska doba, ids, oznake, razporedi, premakni, poravnaj, razporedi, slika, podlaga, skeniranje v zidove, teren iz civilcraft, risbe panelov, ogrodje, sončna energija, pv, razdeli, vrf, ventilatorski konvektor, dimenzioniranje cevi, kabelski kanal, osvetljenost, beton, potres, primerjava skeniranja, epsg, projekcija, dokumenti, predloga, ogljik, stroški, pogon upodabljanja, odpri v, usd, glb, unreal, razveljavi, dodatki, pcf, simboli, rastline, obris, peresa, trak, brskalnik projektov, postavitev
from: 816df7f8
---

To so spremembe v BimCraftu 0.9 v primerjavi z 0.8.1. Dve veliki temi sta pravo orodje za zidove in pogledi, ki se obnašajo tako, kot pričakujejo ljudje, ki prihajajo iz velikih programov za BIM. Ob tem so tu še izvoz Collada, pomočniki, ki lahko postavljajo električne naprave, Skeniranje v BIM ter analiza vetra, potresa in končnih elementov na zavihku {{ui:Analiza}}.

## Novo

### Zidovi

- **Risanje celih oblik.** V {{ui:Risanje}} odprite {{ui:Oblike}} (ali izberite obliko v seznamu Oblika v vrstici Zid) za pravokotnik, zasukan pravokotnik, mnogokotnik s 3 do 64 stranicami, lok po središču, tangentni lok, zidove na izbranih črtah ali zidove okoli zaprtega območja, na katerega kliknete znotraj. Pravokotnik so štirje zidovi s štirimi povezanimi vogali in enim korakom razveljavitve. Glejte [Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje](topic:wall-tools).
- **Nastavite pred risanjem, spremenite pozneje.** Vrstica Zid ima {{ui:Odmik}} in {{ui:Združi}} (odznačite za samostojne zidove). Pozneje uporabite {{ui:Odmik}}, {{ui:Raztegni z okvirjem}} in {{ui:Poravnaj in zakleni}} na narisanih zidovih. Premaknjen ali raztegnjen zid obdrži svoja vrata, okna in kote. Vsak recept je en korak razveljavitve.
- **Rezanje zidov.** {{ui:Razdeli}}, {{ui:Reža}}, {{ui:Prosti konci}}, {{ui:Izbriši odsek}} in {{ui:Ponovno združi}} prerežejo zid s klikom ali tam, kjer ga prečka drug zid. Rez skozi vrata je zavrnjen. Glejte [Oblike zidov, razdelitev, odmik, raztezanje in zaklepanje](topic:wall-tools).
- **Zidovi se zaklenejo na linije mreže.** Izberite zid ob liniji mreže in označite {{ui:Zakleni na mrežo}} v {{ui:Lastnosti}}. Ko je orodje Mreža vklopljeno, v {{ui:Premakni za}} vnesite razdaljo za izbrano linijo in zaklenjeni zidovi sledijo v enem koraku razveljavitve.
- **Oblikovanje enega zidu.** V {{ui:Lastnosti}} enega zidu lahko njegov vrh ali spodnji del pripnete na streho, tla ali strop, uredite njegov obris višine, ga nagnete ali izrežete odprtino v zidu brez vrat ali oken. Glejte [Oblika zidu](topic:wall-shape).
- **Dolžina pove, kateri konec ostane.** {{ui:Rast od}} določi, ali pri spremembi dolžine ostane na mestu začetek, konec ali središče.
- **Dolžina in kota na tlorisu se ujemata.** {{ui:Meri od}} (središčnica, notranja ali zunanja stran) poganja tako polje Dolžina kot kote zidov na tlorisu. Začne se pri središčnici, zato kote zidov na tlorisu zdaj kažejo središčnico, kjer so prej kazale zunanjo stran. Spremenite ga v vrstici Zid, v {{ui:Lastnosti}} ali v {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Zidovi}}.

### Nivoji, mreže in merjenje

- **Dodaj nivo spodaj.** {{ui:Dodaj nivo spodaj}} v podoknu {{ui:Nivoji}} doda nivo pod najnižjim, enako visok kot ta, na negativni koti (Nivo -1, Nivo -2). Nič drugega se ne premakne. {{ui:Dodaj nivoje …}} zdaj sprejme negativne višine. Vnos LEVEL, LEVELS, STOREY ali STOREYS v ukazno vrstico odpre {{ui:Dodaj nivoje …}}, v menijih in zavihkih traku pa je gumb {{ui:Nivoji}}. Glejte [Lokacije, stavbe in nivoji](topic:site-building-and-levels).
- **Kote mreže na tlorisu.** Z vklopljenim orodjem {{ui:Mreža}} označite {{ui:Kote}}, da se na tlorisu vsake etaže narišejo razmiki med sosednjimi linijami in skupna velikost onkraj krogcev. Glejte [Kotiranje mreže](topic:grid-dimensions).
- **Merjenje na tlorisu.** {{ui:Meri}} v skupini {{ui:Risanje}} prikaže razdaljo z razlikama X in Y med dvema klikoma. V model se nič ne shrani. Glejte [Merjenje na tlorisu](topic:measure-on-the-plan).
- **Spremenite več stolpcev naenkrat.** Izberite stolpce skupaj z zidom in seznam pri vsaki vrsti prikaže {{ui:Ohrani samo te}}. En klik ohrani stolpce in pokaže njihova skupna polja.
- **Ena enota prikaza povsod.** Koordinate, mere, prerezi, merila listov, zavihek obremenitev in rezultatov okvirja ter besedilo v podoknu Težave sledijo enoti, ki jo izberete. Izvozi ostanejo v enotah SI.

### Pogledi, listi in tisk

- **Delovni slog.** {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Delovni slog}} izbere, ali ima vsak pogled svoje oznake in tabele peres ali jih deli z drugimi. Glejte [Delovni slog, podvojeni pogledi, peresa na papirju, Prijavi kot in predloge](topic:working-style).
- **Podvajanje pogleda.** Tlorisi, stropni tlorisi, klici detajlov, pogledi (fasade) in prerezi se lahko podvojijo kot {{ui:Lastna kopija}} ali {{ui:Povezano}}; {{ui:Naredi lastno kopijo}} povezanega pogleda naredi neodvisnega. Glejte [Delovni slog, podvojeni pogledi, peresa na papirju, Prijavi kot in predloge](topic:working-style).
- **Natisnite kot prikazano ali prek tabele peres.** Prepisi peres se hranijo v IFC skupaj s pogledom, listi in PDF-ji jih narišejo kot zaslon. Ista tema zajema tudi tabele peres.
- **Prijavi kot.** {{ui:Prijavi kot}} v {{ui:Lastnosti}} zapiše ploščo, narisano kot cesto, zid kot panel ali streho kot klančino v IFC kot razred, ki ga izberete, in jo tako šteje v razporedih, Količinah, Iskanju, Obarvaj po in Težavah.
- **Urejanje v pogledih in prerezih.** Risanje in premikanje zidov, odprtin, nivojev, kot in opomb kar v pogledu ali prerezu, z vašimi velikostmi listov in glavami risb. Glejte [Urejanje v pogledih in prerezih](topic:edit-in-elevations).
- **Listi.** Vsak list je lahko pokončen ali ležeč. Polje {{ui:Vnesite merilo}} je poleg seznama meril na vsakem vstavljenem pogledu (1:64, 2:1, 1/4" = 1'). Vstavljeno risbo lahko povlečete ali premaknete s puščičnimi tipkami, {{ui:Formati…}} › {{ui:Uvozi SVG…}} pa vaš lastni načrt lista spremeni v glavo risbe s polji, vnesenimi po listu.
- **Knjižnični podatki na listu.** Risarski komplet z elementi knjižnice dobi razpored Zasluge knjižnice, ki ga lahko postavite na kateri koli list. Glejte [Zasluge knjižnice](topic:library-credits).

### Knjižnica: postavljanje

- **Postavitev sledi pogledu.** V pogledu Tloris knjižnica prikaže {{ui:Vstavi v tloris}}; v 3D prikaže {{ui:Vstavi v model}}; v razdeljenem pogledu prikaže gumb s spustnim menijem z glavnim dejanjem {{ui:Vstavi v tloris}}. Oba načina zapišeta isti element IFC. Kartico iz knjižnice lahko povlečete tudi na tloris ali 3D pogled; s peresom ali prstom pritisnite in držite, nato povlecite. Glejte [Postavljanje iz knjižnice](topic:place-from-library).

### Datoteke in pomočniki

- **Collada in Google Earth.** {{ui:Collada}} na orodni vrstici (v meniju {{ui:Datoteka}} v slogih menijev) zapiše .dae ali .kmz, postavljen tam, kjer je model na zemljevidu. Glejte [Izvoz modela kot Collada ali za Google Earth](topic:collada).
- **Pomočniki lahko postavljajo električne naprave.** Vaš povezani pomočnik ima nova orodja za dodajanje, seznam, spreminjanje in brisanje naprav ter za nastavitev luči. Pomočniki ostanejo izklopljeni, dokler jih ne vklopite v {{ui:Nastavitve}}. Glejte [Naj AI pomočnik dela z vašim modelom](topic:assistants).
- **Skeniranje v BIM (dodatek).** Privzeto izklopljeno, potrebuje dodatek Oblaki točk. Iz skeniranja predlaga tla, zidove, vrata in okna z izmerjenim odklonom za vsakega; sprejetje je en korak razveljavitve.

### Analiza

- **Podatki o vetru in potresu za lokacijo.** Na zavihku {{ui:Analiza}}: obremenitve vetra po ASCE 7-10 ali 7-16 za togo zaprto stavbo, s silo na vsaki etaži kot primeri obremenitev, ter podatki o potresnem mestu z iskanjem USGS in projektnim spektrom.
- **Nadaljnje konstrukcijske preverbe in končni elementi.** Preverjanja betona po ACI 318-19, ekvivalentne vodoravne sile po ASCE 7-22, zamik etaže, plošče in zidovi kot plošče ter kombinacije obremenitev po ASCE 7 in EN 1990. Naš lastni mehanizem za končne elemente obravnava lupine, tetraedre in modalno analizo. Glejte [Preverjanje betonskih elementov in potresne obremenitve](topic:concrete-and-seismic) in [Analiza okvirjev](topic:frame-analysis).

### Drugi dodatki in dokumenti

- **Notranja osvetlitev (dodatek).** Postavi svetilke in v tloris vsakega nivoja zapiše luks kot števila, z oceno bleščanja in natisljivim poročilom.
- **Podokno Dokumenti.** {{ui:Datoteka}} › {{ui:Dokumenti…}} ima odjavo in prijavo z datoteko zaklepa, oznake revizij, stanja izdaje in zgodovino.
- **Regije in jeklo.** Paketi risb in gradbenih predpisov Južne Afrike v dodatku Predpisi ter 976 jeklenih mer za Združeno kraljestvo v skupni tabeli prerezov.
- **Brezplačni dodatki za tiskanje s smolo.** Rezalnik, podpore in podlaga, preizkus osvetlitve ter datotečne oblike GOO, SL1, Chitubox in Anycubic, vse privzeto izklopljeno.

## V vsaki aplikaciji

- Ko se miška ustavi nad gumbom ali kontrolo, se prikaže Bootstrap nasvet.
- Začetni nasvet na prazni risalni površini ima gumb za zaprtje; BimCraft si zapomni, da je bil zaprt.
- Vrstica zavihkov podokna, ki se ne prilega, se zdaj pomika namesto da bi bila odrezana.
- Z odprtim dokumentom brskalniški zavihek bere „<dokument> - BimCraft | CadCraft“.
- V {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Postavitev}} so postavitve spustni seznam izbir z dvema vrsticama.
- Seznam jezikov v {{ui:Nastavitve}} ponuja več jezikov kot v 0.8; jeziki, razen angleščine, so strojni osnutki.

## Popravljeno

- **Premikanje deluje na stopnicah** in na klančinah, ograjah, ravninah streh, samostojnih napravah, slikah in poteh.
- **Vlečenje zidu več ne popači sobe.** Osrednji prijemalnik premakne zid pravokotno na samega sebe, njegovi vogali pa drsijo ob povezanih zidovih. Držite {{key:Mod}} za staro prosto premikanje; {{ui:Poravnaj pravokotno}} vrne 90 stopinj.
- **Sprememba debeline ali tipa na povezanem vozlišču** zdaj ohrani vogal zaprt pri L, T, vozlišču treh zidov in ob ukrivljenem zidu.
- **Premik ali kopiranje skupine sob** ohrani povezane zidove zunaj skupine povezane.
- **Uveljavitev ohrani identiteto kote zidu.**
- **Izbira zidu z izklopljenim Risanjem** v Lastnostih ne sproži več napake.
- **Upodabljanje preklopi na WebGL**, kadar se GPU ne more zagnati, namesto da bi se ustavilo.
- **Preverjanje EnergyPlus** se lahko spet vklopi.
- **Dokumenti se odprejo kot središčno pogovorno okno.** {{key:Esc}}, križec ali klik na zatemnjeno stran ga zapre.
- **Gumbi {{ui:Plan}}, {{ui:Razdeli}} in {{ui:3D}} se prikažejo,** takoj ko je model odprt, ne šele potem, ko je bilo Risanje enkrat vklopljeno.

## Iskrene omejitve

- Nič ni bilo natisnjeno na pravi strojni opremi. Podpore za smolo so nove in še nepreizkušene.
- Rezultati vetra, potresa, betona in končnih elementov so pripomočki za preverjanje za inženirja, preverjeni z zaprtimi oblikami, ne z resnično stavbo.
- Skeniranje v BIM je bilo preizkušeno na sintetični stavbi, ne na resničnem skenu, in najde samo pravokotne sobe.
- Collada tu ni bila odprta v Blenderju ali Google Earthu.
- Ocena osvetlitve je preverjena z našo lastno sledjo, ne z drugimi programi za osvetlitev.
- Južnoafriške številke niso preverjene.
- Slogi stikov zidov (na stik, na zalogaj, pravokotno odrezano) in prednost slojev niso izdelani; vogali so pokošeni.
- Jeziki, razen angleščine, so strojni osnutki.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet). Prejšnje spremembe so v opombah za 0.8 in 0.8.1 nižje na tej strani.

## Prej: 0.8 in 0.8.1

To so spremembe v BimCraftu 0.8 (2026-11-01) in 0.8.1 (2026-11-02) v primerjavi z 0.7. BimCraft zdaj odgovarja na vprašanja o stavbi in jo preizkuša z ljudmi, zvokom, vodo, vetrom in potresi ter jo riše z več orodji; 0.8.1 je popravna izdaja.

### Novo

**Preizkusite stavbo**

- **Ljudje v stavbi.** Razdelek {{ui:Ljudje v stavbi}} levega podokna pelje evakuacijo ali običajen dan prihodov skozi vaše sobe, vrata in stopnice. Vidite vrste tam, kjer se stavba zoži, najdaljšo pot do izhoda iz vsake sobe in koliko časa potrebuje zadnja oseba. Označite {{ui:Zaprto}} pri vratih, da vidite, kaj se spremeni, in {{ui:Pokaži ljudi v pogledu 3D}}, da spremljate hodce. Ugotovitve gredo v Težave. Grob model množice za projektne odločitve, ne potrdilo o požarni varnosti. Glejte [Sprehod ljudi skozi stavbo](topic:people-in-the-building).
- **Akustika prostorov in poslušanje.** Razdelek {{ui:Akustika prostorov}} da vsaki sobi čas odmeva po oktavnih pasovih (Sabine in Eyring) iz njene velikosti in izbranih obdelav, z lastnim ciljem pa pove, koliko absorpcije bi ga doseglo. {{ui:Predvajaj v tem prostoru}} predvaja glas, ploskanje, odščipnjene tone ali vašo zvočno datoteko skozi impulzni odziv, izračunan za sobo. Podatki o absorpciji so tipične objavljene vrednosti, ki jih lahko nadomestite. Glejte [Akustika prostorov](topic:room-acoustics).
- **Predvajanje poplave, vetra in potresa.** {{ui:Predvajanje nevarnosti}} predvaja vodo, ki se dviga po sobah, pritisk vetra na vsaki etaži in potres, ki trese etaže, na tlorisu ali pogledu z drsnikom časa. Preprosti modeli s predpostavkami na podoknu; ni preverba po predpisih. Glejte [Predvajanje poplave, vetra ali potresa](topic:hazard-playback).
- **Kaj se obrabi v petdesetih letih.** {{ui:Pogled življenjskega cikla}} našteje okna, vrata, obdelave in streho z življenjsko dobo vsakega, leta zamenjave in, ko vpišete ceno na enoto, strošek po letih in njegovo sedanjo vrednost. {{ui:Shrani razpored (CSV)}} ga zapiše. Življenjske dobe so načrtovalne vrednosti. Glejte [Poglejte, kaj se obrabi v petdesetih letih](topic:life-cycle-view).
- **Preverjanje betona in potresa.** Bloka {{ui:Betonski elementi}} in {{ui:Potresne obremenitve}} zavihka {{ui:Analiza}} preverita betonske nosilce in stebre po ACI 318-19 ter naredita ekvivalentne vodoravne sile po ASCE 7-22 na togih etažah, z zamikom etaže. Za preverbo inženirja. Glejte [Preverjanje betonskih elementov in potresne obremenitve](topic:concrete-and-seismic).

**Preverite in poročajte**

- **Preverjanje glede na IDS.** Naložite datoteko `.ids`, ki vam jo je dal naročnik, in v Težavah vidite vsak element, ki ji ne ustreza, še preden oddate IFC. Odprite {{ui:Preverjanje glede na IDS}} pod {{ui:Preverjanja modela}}. Glejte [Preverjanje modela glede na IDS naročnika](topic:check-against-ids).
- **Oznake in razporedi.** Določite lastne oznake, jih nastavite na številnih elementih naenkrat in naredite razporede, katerih stolpci, filtri in skupine jih berejo; oznake se hranijo v IFC. Glejte [Oznake in razporedi](topic:tags-and-schedules).
- **Dokumenti iz modela.** {{ui:Dokumenti iz modela}} napolni predlogo specifikacije iz odprtega IFC in jo shrani kot PDF, dokument Word ali Markdown. Glejte [Dokumenti iz modela](topic:documents-from-the-model).
- **Primerjava skeniranja z modelom.** Z odprtim oblakom točk {{ui:Primerjaj}} oceni vsak element kot zgrajen, delno zgrajen, manjkajoč ali nedosežen in pokaže odstotek zgrajenega. Glejte [Primerjava skeniranja z modelom](topic:compare-scan-with-model).
- **Ogljik in strošek.** Podokno Ogljik sešteje vgrajeni ogljik iz tabele faktorjev, ki jo lahko uredite, podokno Strošek pa razporedi cene po 4D razporedu. Faktorji, ki pridejo z BimCraftom, so splošni in označeni kot nepreverjeni. Glejte [Vgrajeni ogljik in strošek](topic:embodied-carbon-and-5d-cost).
- **Poljubna kartografska projekcija.** {{ui:Meri}} › {{ui:Koordinatni sistem…}} sprejme številko EPSG, UTM cono, ime ali vašo lastno definicijo projekcije. Glejte [Georeferenciranje s poljubno projekcijo](topic:georeference-any-projection).

**Risanje in urejanje**

- **Premakni, poravnaj in razporedi.** Pod {{ui:Zgradba}}; {{key:Shift+M}} začne Premik (navadni {{key:M}} je še vedno Meri). Premik med potekom kopira s {{key:C}}, vsak korak je en korak razveljavitve, in potuje v seji Live TeamWork. Glejte [Premikanje, kopiranje, poravnava in razporejanje](topic:move-align-distribute).
- **Slike pod tlorisom.** {{ui:Zgradba}} › {{ui:Slika}} postavi PNG, JPEG ali WebP pod tloris nivoja ali na navpično ravnino. Merilo nastavite z dvema točkama, premikate, obračate, zbledite in zaklenete. Območje, kopirano v MarkupCraft, se prilepi pri merilu svojega lista. Glejte [Slika pod tlorisom](topic:pictures-as-backgrounds).
- **Zidovi iz skeniranja.** Z odprtim skeniranjem pridejo zidovi, vrata in sobe kot predlogi, ki jih obdržite ali zavrnete posamično, v enem koraku razveljavitve. Najdejo se samo zidovi v dveh pravokotnih smereh. Glejte [Pretvorba skeniranja v zidove](topic:scan-to-walls).
- **Preriši, peresa in skica stopnic.** {{ui:Preriši}} pokaže drugi nivo črtkano pod tlorisom, {{ui:Peresa}} da zidovom, vratom in oknom lastno debelino črte v enem pogledu, {{ui:Skiciraj stopnišče}} pa pretvori potezo hoje v stopnišče. Odpre se mreža Wavefront OBJ. Glejte [Preriši nivo, peresa in stopnico iz skice](topic:trace-pens-stairs-obj).
- **Stavbe okoli naslova.** Stavbe in parcela, ki jih je našel Naslov v lokacijo v CivilCraftu, pridejo kot predlogi; označite tiste, ki jih želite dodati. Glejte [Začetek z lokacijo iz CivilCraft](topic:site-from-civilcraft).
- **Risbe panelov.** {{ui:Zgradba}} › {{ui:Risbe panelov}} uokviri zidove, tla in strehe iz lesa ali lahkih jeklenih profilov ter shrani seznam rezanja kot CSV in delavniške risbe kot PDF. Začetne vrednosti, ne konstrukcijska zasnova. Glejte [Risbe panelov](topic:panel-drawings).
- **Paleta simbolov in rastline.** {{ui:Zgradba}} › {{ui:Paleta simbolov}} poišče električne in vodovodne simbole po imenu; vir {{ui:Rastline}} v {{ui:Knjižnica}} našteje približno 400 rastlin s simboli za tloris. Glejte [Paleta simbolov](topic:symbol-palette) in [Postavitev rastline](topic:plant-list).

**Cevi, kanali in energija**

- **Split, VRF in ventilatorski konvektorji.** Notranje in zunanje enote s svojimi priključki ter linijski seti, dimenzionirani iz tabele tipičnih primerov, ki jih lahko spremenite. Glejte [Split, VRF in ventilatorski konvektorji](topic:split-vrf-fan-coils).
- **Izračuni.** Podokno Izračuni preveri dimenzije napajalnih cevi in kanalov s padcem tlaka, vodi kable skozi kabelske police in cevi ter prikaže njihovo zapolnjenost, osvetljenost pa izračuna iz datotek IES ali EULUMDAT. Privzete vrednosti so označene; vpišite vrednosti svojega predpisa. Glejte [Izračuni cevi, kanalov, kablov in svetil](topic:mep-calculations).
- **Datoteke PCF.** {{ui:Izvozi PCF}} orodja Cev zapiše poteze za programe za napetost cevi in izometrične programe, datoteka PCF, prebrana nazaj, pa nariše svojo cev. Glejte [Datoteke s komponentami cevi](topic:piping-pcf).
- **Sončna energija (PV).** Namestite polja na strehe ali tla, jih zasenčite iz modela, ocenite letno energijo, preverite nize in naredite podatke za enočrtni diagram. Začetni modul in izgube so splošni. Glejte [Sončna energija (PV)](topic:solar-pv).
- **Datoteka EnergyPlus.** Podokno Preveri z EnergyPlus zapiše model kot IDF za zagon v vašem EnergyPlus. Zagon v brskalniku potrebuje gradnjo, ki jo gostite sami, in naslov, ki ga vpišete; BimCraft je ne vsebuje. Glejte [Preverjanje ogrevanja in hlajenja z EnergyPlus](topic:check-with-energyplus).

**Slike in datoteke**

- **Izbira pogona upodabljanja.** {{ui:Upodobitev}} ima izbiro {{ui:Pogon}}. Naša dva vgrajena pogona (Hitri in Sledilnik poti) ostaneta privzeta. **Odpri v** shrani prizor kot datoteko USD ali glTF, mapo projekta Unreal pa kot .zip; v CadCraft Studiu lahko dodatek doda pogon. Vtičnik Unreal, ki odpre projekt, ni izdan. Glejte [Izbira programa, ki nariše sliko](topic:render-engines).
- **Razveljavitev v Studiu.** Znotraj CadCraft Studia BimCraft Studiu sporoči vsak končan korak, da lahko Studio razveljavi vaš zadnji korak v katerem koli oknu, ki ste ga nazadnje uporabljali. Glejte [Razveljavitev med aplikacijami](topic:undo-across-apps).
- **Dodatki v vaši datoteki.** IFC zabeleži, kateri dodatki so vanj pisali, in ob odprtju ponudi tiste, ki jih nimate. Glejte [Dodatki v vaši datoteki](topic:add-ons-in-your-file).

**V vsaki aplikaciji**

- **Povežite svojo umetno inteligenco.** Vaš lastni pomočnik lahko upravlja BimCraft prek povezave Studia in odgovarja na vprašanja o modelu, na primer katere sobe so pod dano površino. Studio nima lastne umetne inteligence. Glejte [Naj AI pomočnik dela z vašim modelom](topic:assistants).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ponuja Prelomi, 2 vrstici ali 1 vrstico; Prelomi ostane privzeto.
- **Vhodne naprave.** Nastavitve sledilne ploščice, peresa, 3D miške, krmilnika in MIDI so skupne vsem aplikacijam.
- **Težave in Live.** Podokno opozoril in seje Live delujejo kot prej, z novimi preverbami zgoraj, ki napajajo Težave.
- **Jeziki.** 54 jezikov, deset novih. Jeziki, razen angleščine, so strojni osnutki, ki jih še ni prebral materni govorec; pomoč je večinoma v angleščini.

### Popravljeno v 0.8.1

- **Postavitev traku + Brskalnik projektov.** Vstavi › Uvozi CAD, Vstavi › Slika in Upravljanje › Enote projekta so pokazali „Še ni izdelano v BimCraftu“. Slika zdaj odpre orodje Slika, Uvozi CAD odpre {{ui:Zgradba}} › {{ui:Iz risbe …}} (DWG, DXF, PDF ali skeniranje), Enote projekta pa {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Enote}}. Premik in Poravnava zaženeta orodji Premik in Poravnava, Nivo odpre {{ui:Dodaj nivoje …}}, Faze odpre razdelek Faze prenove, Materiali pa knjižnico materialov.
- **Razdelek razredov DWG.** Bral se je kot napačna vrsta; popravljeno v BimCraftu in drugih aplikacijah, ki berejo DWG.
- **Jezik med izvajanjem.** Studio in pakirane izdaje lahko zdaj zamenjajo jezik brez ponovnega zagona. To še ni preizkušeno na vseh platformah; sporočite nam, če se jezik ne spremeni.
- **Skript paketa Archicad.** `archicad_bundle.py`, ločen prenos, zdaj najde pot Archicada, do 20 sekund opazuje mapo in poskusi znova ob paketu.

### Še ni v tej različici

- **Varnostna in projektna pomoč.** Ljudje v stavbi nimajo omejitve razdalje poti iz gradbenega predpisa (vi jo vpišete) in niso bili ročno preverjeni na pravem načrtu. Akustične, življenjske in nevarnostne vrednosti so načrtovalne vrednosti, ne preverba predpisov.
- **Klimatske prihodnosti in EnergyPlus.** Vgrajenih klimatskih prihodnosti ni: za tek poplave lahko naložite datoteko scenarija. Zagon EnergyPlus v brskalniku ni del te izdaje.
- **Postavitev traku.** Material Takeoff ostane „Še ni izdelano“, ker BimCraft nima seznama predizmer materialov, za 54 drugih zasivljenih orodij na traku pa še ni orodja BimCraft.
- **Podpisovanje in platforme.** Namestitveni programi za Windows in datoteke .dmg za macOS niso podpisani, zato SmartScreen prikaže {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}, macOS pa zahteva desni klik in nato {{ui:Odprto}}. Gradnja za iPad in iPhone ni bila ponovno zgrajena za 0.8.1.
- **Preizkusi na realnih straneh.** Nekateri stari preizkusi brskalnika BimCraft na naši testni strani še vedno ne uspejo, kot so tudi pred 0.8.1.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet). Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
