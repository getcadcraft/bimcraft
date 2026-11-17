---
title: Kaj še ni izdelano
summary: Kaj ta gradnja BimCraft še ne počne in kaj uporabiti namesto tega danes.
keywords: manjka, omejitve, ni podprto, načrt razvoja, izdelava, modeliranje, prerezi, meri, kolizija, bcf, oblak, namizje, izvoz
from: 87777dcc
---

BimCraft je danes bralnik, preverjalnik in urejevalnik podatkov IFC, ki je začel risati stavbe: zidove, vrata in okna, sobe, plošče, stropove in strehe (glejte [Risanje zidov](topic:draw-walls), [Vrata in okna](topic:doors-and-windows) in [Sobe, plošče, stropi in strehe](topic:floors-and-roofs)). To je iskren seznam tistega, kar še ne počne, z navedbo, kaj storiti namesto tega.

## Modeliranje in izdelava

| Še ni | Namesto tega, danes |
|---|---|
| Risanje nosilcev; stebri iz jeklenih profilov | Uporabite svoj program za izdelavo, nato tu odprite njegov izvoz IFC. Pravokotni in okrogli stebri se postavijo tukaj (glejte [Mreže in stebri](topic:grids-and-columns)); ravna, L, U, vijačna in spiralna stopnišča ter ograje se tukaj narišejo (glejte [Stopnišča in ograje](topic:stairs-and-railings)) |
| Okno v čelu strešne kapice; strešne kapice na strešnih ravninah, narisane ročno; ukrivljene strehe; strešna kritina s teksturo v upodobitvi | Strešne ravnine, narisane po njihovih vogalih, in naklon za vsak zid: glejte [Strehe: naklon za vsak zid, čela, lope in strešne ravnine](topic:roofs) |
| Spreminjanje zidov, vrat ali oken, ki jih je naredil drug program | Vaš program za izdelavo; orodja za risanje spreminjajo samo to, kar so narisala |
| Profili zidov s previsi ali luknjami; odprtine v zidu, ki niso pravokotne; dodajanje ali odstranjevanje točk profila zidu v 3D pogledu | Profil, pritrditev, nagib in odprtine delujejo v {{ui:Lastnosti}}, v pogledih in prerezih, na licu zidu ter z ročicami v 3D, za ravne in ukrivljene zidove: glejte [Oblikovanje zidu: pritrditev, profil, nagib in odprtine](topic:wall-shape) |
| Na ukrivljenih zidovih: {{ui:Prirezi / podaljšaj}} in {{ui:Vogal}}, uokvirjanje, samodejne kote v tlorisu, lovljenje vzdolž loka (lovi na njegova konca in sredino loka) | Za to narišite zid raven ali uporabite ravne odseke. Ukrivljeni zidovi so v [Risanje zidov](topic:draw-walls) |
| Vlečenje postavljenega elementa knjižnice v 3D pogledu | Povlecite ga v tlorisu ali vtipkajte X, Y in Vrtenje v {{ui:Lastnosti}}: glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library) |
| Postavljanje rastlin iz knjižnice rastlin delovnega okolja Krajina v CivilCraft | Posadite jih v CivilCraft ali postavite drevesa in grmičevje iz okolice knjižnice: glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library) |
| V dodatku Plant (izklopljen, dokler ga ne vklopite): risanje vodene proge v model, številke cevi na njenih izometrijah, preverjanje postavitve opreme, postavljene iz knjižnice | Progo narišite z {{ui:Cev}} (glejte [Cevi in kanali](topic:pipes-and-ducts)); preverjanje postavitve bere lastno tabelo opreme dodatka |
| Obračanje, zrcaljenje ali polje posameznih narisanih zidov, vrat in oken (zidovi se premikajo, kopirajo in raztegujejo z Premakni, Odmik in raztegovanjem s škatlo: glejte [Oblike zidov, delitev, odmik, raztegovanje in zaklep](topic:wall-tools)); način spoja (stik, pravokotno) na vogalih z ukrivljenim zidom ali tremi zidovi ali več (glejte [Oblike zidov, delitev, odmik, raztegovanje in zaklep](topic:wall-tools)); orodje Besedilo; zavesne stene | Kopirajte vse na nivoju z {{ui:Kopiraj ta nivo …}} (glejte [Risanje zidov](topic:draw-walls#levels)); sicer jih narišite znova |
| Plasti sestave zidu, narisane v tlorisu in prerezu; kote v prerezih in pogledih; referenčne kote do vrat, oken in drugih komponent; sestave in membrane v razpredelnicah in količinah; knjižnica materialov, deljena med projekti; prednost plasti v prerezih, pogledih in 3D ter v vozliščih treh zidov ali več (v tlorisu so vogali, T-stiki in križišča dveh zidov očiščeni po prednosti plasti: glejte [Oblike zidov, delitev, odmik, raztegovanje in zaklep](topic:wall-tools)); ovite ali spremenljive plasti; urejanje sestave zidu, ki ga je naredil drug program | Plasti so v tipu zidu in njegovem predogledu ({{ui:Sestave zidov…}}); zidovi se merijo kot en ovoj: glejte [Sestave zidov in referenčne kote](topic:wall-assemblies) |
| Spreminjanje oblike ali velikosti elementa (razen zidov, vrat in oken, narisanih tukaj, ter elementov, postavljenih iz družine) | Vaš program za izdelavo. Brisanje, rezanje, kopiranje in lepljenje delujejo tukaj: glejte [Brisanje, rezanje, kopiranje in lepljenje gradbenih elementov](topic:edit-elements) |
| Brisanje etaž, prostorov, stavb ali parcele | Izbrišite elemente v njih |
| Lepljenje gradbenih elementov v drug model | Kopirajte in prilepite znotraj enega modela; postavljeni elementi knjižnice se prilepijo v kateri koli model |
| Dodajanje novih lastnosti ali nizov lastnosti | Vnesite obstoječe vrednosti tukaj ali dodajte parameter v svojem programu za izdelavo in izvozite znova |
| Urejanje količin, seznamov in naštevanj | Vaš program za izdelavo |
| Shranjevanje projektnih datotek drugih programov | BimCraft shrani IFC (in svoje datoteke družin: glejte [Družine in njihove velikosti](topic:families)) |
| Družine: knjižnica družin, postavljenih iz tlorisa in deljenih med projekti (Knjižnica), vozlišče, povlečeno v 3D pogledu postavljenega elementa (vlečejo se v predogledu urejevalnika družin in v tlorisu), stopnje podrobnosti, izbrane za vsak pogled (ena stopnja za projekt; listi izberejo glede na merilo), vrtenje po navpični ravnini znotraj druge družine, zasukano za četrt obrata, lastni simboli tlorisa za vrata in okna (rišejo se simboli iz začetne družine) | Družine s tipiziranimi parametri, formulami, lastnim simbolom v tlorisu, vozlišči, ponovitvami, stopnjami podrobnosti, družinami znotraj družin, velikostmi iz tabele in parametri po elementih se naredijo tukaj: glejte [Urejanje družine](topic:family-editor) in [Družine in njihove velikosti](topic:families). Podvojite družino, da začnete iz nje |
| Urejanje tipov drugih programov kot družin; spreminjanje elementa knjižnice v družino | Tipi drugih programov so našteti, razvrščeni po ugibanju, njihovi elementi pa izbrani. Elementi knjižnice se postavijo, kot so |
| Proizvajalčevi okovi, ventili in oprema (zmogljivosti, teže, velikosti priključkov proizvajalcev); dolžine T-kosov in redukcij ASME B16.9 na jeklenih cevnih sklopih; izgube tlaka skozi okove, pretoki in uravnoteženje; sprinklerji; kabelske police; dimenzioniranje stolpov in prezračevanja po enotah armatur; vlečenje kotov proge; rezanje odprtin v zidovih in ploščah; sprostitev konca proge, pritrjenega na priključek (razen z brisanjem opreme); priključki na elemente knjižnice, postavljene iz plošče Knjižnica; teže okovov; šive, debeline in spojke kanalov | Proge cevi in kanalov s splošnimi standardnimi okovi, sistemi, tlorisi, razpredelnicami in popisom so narisane tukaj: glejte [Cevi in kanali](topic:pipes-and-ducts). Splošna oprema s priključki, povezanimi progami in preverjanjem povezav: [Oprema MEP s priključki](topic:mep-equipment) in [Povezava cevi in kanalov z opremo](topic:mep-connections). Nabori kolizij, odmiki in seznam odprtin: [Preverjanje cevi in kanalov glede na konstrukcijo](topic:mep-against-structure). Jekleni cevni sklopi in listi ter seznam krojenja kanalov: [Jekleni cevni sklopi in listi](topic:pipe-spools). Proizvajalčeve elemente prinesite iz vašega programa MEP kot IFC |
| Projektne kode preverjanj varjenih I-profilov, I-profilov, katerih IFC profil ni imenovan kot valjani W, S, IPE, HEA ali HEB, ter cevi, kotnikov in kanalov (vrnejo se kot nepreverjeni); uklon ali dinamični odziv (naravne frekvence so v bloku končnih elementov) (drugi red je samo P-Delta: elastično, upogibno, brez zmanjšanja togosti); zidovi in plošče v analizi; obtežbe iz površin (razen enega tlaka na vsako betonsko ploščo) | Zavihek {{ui:Analiza}} da sile, reakcije in pomike nosilcev, stebrov in diagonal z analizo prvega reda in preveri valjane I-profile, kar je pomoč, dokler inženir ne pregleda: glejte [Analiza konstrukcijskega okvirja](topic:frame-analysis#design-checks) |

## Ogled modelov

| Še ni | Namesto tega, danes |
|---|---|
| 3D iz projektnih datotek | Izvozite IFC in ga odprite. Glejte [Projektna datoteka v 3D prek IFC](topic:rvt-to-ifc) |
| Notranji pogledi v ustvarjenem nizu risb (iz {{ui:Lastnosti}} sobe in na vaših listih se izdelajo); vaše kote v pogledih in prerezih (oznake nivojev, višine, širina ter oznake vrat in oken so narisane; opombe se zapišejo v pogledu: glejte [Urejanje v pogledih in prerezih](topic:edit-in-elevations)); risanje zidov v pogledu (narišejo se v ravnini prereza); predloge tima prek Studia | Komplet risb iz modela: glejte [Pogledi, prerezi in listi](topic:sheets). Za poljuben model IFC: ena ravnina {{ui:Prerez}} ali prerezna škatla; glejte [Rez modela IFC z ravnino prereza](topic:section-plane) |
| Pogledi klicev, podrobni pogledi, risalni pogledi in legende; risalne črte in šrafura, narisane v pogledu; obrezovanje pogleda ali prereza; predloge pogledov za poglede, prereze, stropne tlorise in 3D; stropni tlorisi v ustvarjenem nizu risb; cel niz vaših listov v enem PDF | Tlorisi in stropni tlorisi imajo obsege pogledov, območje obrezovanja, merilo in podlago (tlorisi tudi predloge), vaši listi pa sprejmejo tlorise, stropne tlorise, poglede, prereze in razpredelnice, vsak shranjen kot PDF: glejte [Pogledi, obsegi pogledov in vaši listi](topic:views-and-sheets) |
| Premikanje postavljene svetilke na strop pozneje; nagnjeni ali stopničasti stropovi; vzorci stropov, razen petih mrež; lastni simbol svetilke v stropnem tlorisu | Postavite jo z **Namestitev: Na strop**; stropni tlorис riše svetilko iz lastne oblike: glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library) |
| Deljenje iskalnih nizov z drugimi; nizi v datotekah IFC | Nizi ostanejo v tem brskalniku; glejte [Iskanje elementov po razredu, imenu ali lastnosti](topic:find) |
| Merjenje kotov ali vzdolž poti več točk | Izmerite vsak del z {{ui:Meri}}: glejte [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure) |
| Teksture v živem 3D pogledu | Naslikani materiali kažejo svojo barvo v pogledu in teksturo na upodobljenih slikah: glejte [Upodobitev slike modela](topic:render) |
| Mehke kolizije odmika med poljubnima nizoma, skupine kolizij, shranjevanje rezultatov kolizij | Zaženite {{ui:Preverjanje kolizij}} in naredite zadeve za tiste, ki so pomembne: glejte [Preverjanje kolizij](topic:clash-check). Cevi in kanali glede na konstrukcijo imajo {{ui:Preveri odmike}}: glejte [Preverjanje cevi in kanalov glede na konstrukcijo](topic:mep-against-structure) |
| Shranjevanje več modelov kot enega niza ali urejanje dveh modelov hkrati | Urejajte en model naenkrat; vsak shrani svojo datoteko |
| Dodeljevanje zadev, rokov, oznak, več pogledov na zadevo, urejanje zadeve | En pogled na zadevo; glejte [Zadeve in datoteke BCF](topic:issues-bcf) |
| `.ifczip` in `.ifcxml` | Razpakirajte ali izvozite navaden `.ifc` |
| Sloji zemljevida za model brez pretvorbe zemljevida ali v pogledih risbe | Izvozite model s koordinatami: glejte [Zemljevid na tleh pod modelom](topic:map-layers) |
| E57 skeniranja z več kot 6 milijoni točk ali 512 MB; lastne datoteke proizvajalcev skenerjev (RCP, RCS, FLS, LGS, TZF, ZFS); oblaki točk v 3D pogledu risbe; shranjevanje položaja oblaka z modelom | Izvozite skeniranje kot LAS ali LAZ in ga odprite poleg modela IFC: glejte [Formati oblakov točk](topic:point-cloud-formats) in [Prikaz oblaka točk poleg modela](topic:point-clouds) |
| Registracija skenov: samodejno iskanje tarč (krogel, šahovnic) v skenu, reševanje vseh skenov skupaj (prilagoditev snopa), merilo, registracija proti modelu | Izberite ujemajoče se točke ali vtipkajte koordinate tarč, nato pa izboljšajte en skeniranje naenkrat z ICP: glejte [Registracija več skenov v enega](topic:register-scans) |
| Odpiranje projektnih datotek `.pln`, `.pla`, `.tpl` in `.bpn` | Izvozite IFC in DWG iz njih ali projektni paket: glejte [Odpiranje projektnih datotek .pln in .pla](topic:pln-project-files) in [Odpiranje projektnega paketa](topic:open-project-bundle) |
| Odpiranje seznama {{ui:Elementi}} za izbiro po vrsti | Kliknite skupino vrste v {{ui:Drevo modela}}: glejte [Iskanje poti z drevesom modela](topic:model-tree) |
| Vnašanje komentarja ali naslova zadeve v VR, glasovne opombe, premikanje ravnine prereza z roko v VR, prerezna škatla v VR | Postavite zadevo v VR, nato dodajte besede v zavihku Zadeve; ravnino prereza ali škatlo nastavite v 3D pogledu, preden vstopite: glejte [Pregled modela v slušalkah VR](topic:vr-review) |
| Videti ljudi za mizo v VR (kažejo se samo ljudje v VR), snemanje sprehoda v VR | Prosite jih, naj se pridružijo v VR, ali sledite v 3D pogledu |
| Simulacija dnevne svetlobe (klimatsko odvisna dnevna svetloba, bleščanje, sončne ure), strešna okna v faktorju dnevne svetlobe, preverjanja po BS EN 17037 ali shemah zelenih stavb; metoda energije ISO 52016-1, urna simulacija energije, toplotna masa in mostovi, podnebne datoteke | Pomožna orodja za oceno: povprečni faktor dnevne svetlobe, navpična komponenta neba vsakega okna, sonce skozi okna na datum in faktor dnevne svetlobe na mreži ([Ocena dnevne svetlobe v vsaki sobi](topic:daylight-factor)); toplotne izgube, dnevno-stopinjsko leto in konica hlajenja na sobo ([Ocena ogrevalnih in hladilnih obremenitev](topic:heating-and-cooling-loads)). Za skladnost uporabite program za simulacijo |
| Gostujoči gradbeni dvojček: meritve shranjene in opozorila poslana po e-pošti, ko je BimCraft zaprt, opomniki o vzdrževanju po e-pošti; MQTT 5; branje nazaj opravil COBie | Meritve iz CSV ali neposredno iz vašega brokerja ali naslova, medtem ko je model odprt; mejne vrednosti, ki označijo sredstva; dokumenti ter izvoz in uvoz COBie: glejte [Hrani podatke o sredstvih in vzdrževalni zapis v modelu](topic:assets-and-maintenance) |
| Vtičnik ali živa povezava za Enscape, Twinmotion ali druge programe za vizualizacijo; datoteke FBX ali Datasmith; en objekt na element, shranjeni pogledi in sprehodi v .glb | Shranite .glb za programe za upodabljanje, ki berejo glTF, datoteko USD (en objekt na element, s podatki IFC: glejte [Izvoz modela kot USD](topic:usd)) ali IFC za tiste, ki delujejo znotraj drugega projektnega programa: glejte [Pošiljanje modela programu za upodabljanje](topic:model-for-rendering) in [Odpiranje scene v drugem programu](topic:render-open-in) |
| Drug program, ki riše sliko upodobitve brez dodatka za motor upodabljanja (CadCraft ne zažene programa pod licenco GNU GPL); panoramske ali stereo kamere in nebo prek drugega programa; vtičnik za Unreal Engine (datoteke so zapisane, vtičnik, ki jih odpre, ni izdan) | Naša motorja Fast in Path tracer; motor dodatka ([narišite sliko z drugim programom](topic:render-other-program)); datoteka mape USD, glTF ali Unreal iz seznama motorjev, ki jo odnesete v kateri koli program |
| V živem pogledu: raztresanje rastlin in skal, deljenje panoram, ogled, brezpovezavni pregledovalnik ali video | Živi pogled ModelCraft to ima; tu so slike upodobitve in 360° panorame: glejte [Živi pogled](topic:live-view) in [Upodobitev slike modela](topic:render) |

## Risbe

| Še ni | Namesto tega, danes |
|---|---|
| Urejanje, merjenje ali shranjevanje DWG in DXF | Aplikacija za risanje CadCraft ({{ui:Uredi v CadCraft}} na 2D pogledu) |
| Tiskanje ali izvoz PDF | Natisnite iz programa, ki je risbo naredil; prej preverite z {{ui:Pogled tiska}} |
| Stili izrisa in tabele peres | {{ui:Pogled tiska}} prikaže navadno črno z debelinami črt |
| Datoteke DWG starejše od R13 in binarni DXF (BimCraft to pove, ko ga odprete) | Shranite risbo znova kot novejši DWG ali kot ASCII DXF |
| Risbe, povezane v povezanih risbah | Odprite jih neposredno |
| Slike TIFF | Shranite kopijo PNG ali JPEG z istim imenom in jo dodajte |
| Risbe DGN | Navedene so samo v poročilih o mapah |
| Predmeti, našteti pod **Še ni narisano** | Risbo oglejte v programu, ki jo je naredil |
| Trdna telesa ACIS, telesa, območja in ploskve ter podmreže v 3D | Izvozite IFC ali 3D ploskve iz programa, ki je risbo naredil |
| Slike, večkratne vodilke in listi v 3D pogledu risbe | Oglejte si jih na zavihku {{ui:Model}} in na listih |
| Izbiranje predmetov v 2D pogledu risbe | Preklopite na {{ui:3D}} in kliknite predmet tam: glejte [Ogled risbe DWG ali DXF v 3D](topic:dwg-in-3d) |
| Razpredelnice opreme iz risb brez oznak `KCL-ITEM` | Ni na voljo |
| Razpredelnica opreme kot XLSX ali PDF | {{ui:Prenesi CSV}} in odprite v preglednici |

## Datoteke in platforme

| Še ni | Namesto tega, danes |
|---|---|
| Shranjevanje v oblak | Shranjujte kopije na svoj računalnik ali strežnik v pisarni. Shranjevanje v oblak še ni na voljo |
| Zapomnitev map v Firefoxu in Safariju | Znova izberite mapo ali jo povlecite vanj |
| Razveljavitev po shranjevanju | Znova odprite prvotno datoteko, da začnete znova |
| Dopolnjevanje manjkajočega dela odrezane projektne datoteke | Znova kopirajte prvotno; v mapi BimCraft prebere najnovejšo popolno varnostno kopijo |
| Ponovno odpiranje datotek, ki ste jih imeli odprte | Neshranjene spremembe se ob vrnitvi ponudijo kot „Obnovite svoje delo?“; datoteke znova odprite s seznama nedavnih |
