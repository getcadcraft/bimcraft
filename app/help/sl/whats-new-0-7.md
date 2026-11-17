---
title: Novosti v različici 0.7 (prejšnja)
summary: BimCraft doda zidove čez več nivojev in Kopiraj ta nivo, zidove iz PDF in optičnih posnetkov, lastne sestave zidov, bogatejše družine, MEP opremo s priključki, nabore kolizij, odprtine in cevne odseke, dokumente sredstev, COBie in odčitke senzorjev, nebo, sonce, dnevno svetlobo po mreži ter toplotne in hladilne obremenitve, registracijo optičnih posnetkov, pogled v živo in sledenje žarkom na grafični kartici, STEP in USD, variante knjižnice ter več za pomočnike z umetno inteligenco.
keywords: novosti 0.7, prejšnja različica, opombe ob izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove zmožnosti, zidovi čez nivoje, kopiraj ta nivo, pdf, optični posnetek, sled, zidovi iz načrtov, sestave zidov, sloji, jedro, membrana, referenčne kote, knjižnica materialov, prikazne enote, slog pogleda, ogrodje, nosilci, družine, parametri, simbol v tlorisu, vroče točke, ponavljanje, stopnja podrobnosti, gnezdene družine, velikosti v csv, na element, oprema, priključki, povezave, odmiki, odprtine, cevni odseki, odseki cevi, varjenje na mestu, seznam krojenja kanalov, dokumenti, cobie, senzorji, mqtt, živi vir, vertikalni faktor neba, sončni dobitek, mreža dnevne svetlobe, ogrevanje, hlajenje, obremenitve, u-vrednost, registracija optičnih posnetkov, icp, e57, pogled v živo, sledenje žarkom, webgpu, odšumljanje, fizično nebo, mešanje svetlobe, vrsta upodabljanja, vaš računalnik, step, usd, paket projekta, razvoj mase, variante, pomočniki, vmesnik dodatkov, obrat, električna, preverjanja dimenzioniranja
from: ef226539
---

To je, kaj se je spremenilo v BimCraft 0.7 v primerjavi z 0.6. Seznam je razvrščen po področjih, najpomembnejše je prvo.

## Novo

### Risanje stavbe

- **Zidovi čez več nivojev.** Seznam višin v orodju Zid ponuja **Do** katerikoli nivo više, kot to naredijo Lastnosti za izbrani zid. Tlorisi vmesnih nivojev prikažejo zid svetleje, prostori tam se zaprejo ob njem, vrata in okna pa je mogoče vstaviti vanj iz teh tlorisov; **Teče skozi** v Lastnostih navede nivoje, skozi katere gre. Glejte [Spremenite zid, vrata ali okno](topic:change-a-wall-or-door#change-a-wall).
- **Kopiraj ta nivo.** {{ui:Kopiraj ta nivo …}} v plošči Nivoji nariše zidove nivoja z njihovimi vrati in okni, njegove talne plošče in stropove ponovno na drugem nivoju ali na novem nivoju nad njim, v enem koraku razveljavitve; prostori se pojavijo sami. Glejte [Narišite zidove](topic:draw-walls#levels).
- **Zidovi iz PDF ali optičnega posnetka.** {{ui:Zgradba}} › {{ui:Iz risbe …}} zdaj sprejme PDF (črte ali optični posnetek znotraj njega) ali skeniran tloris (PNG, JPEG, TIFF, več strani): vsaka stran postane zidovi, vrata, okna in prostori nivoja, s stranjo, ohranjeno pod njegovim tlorisom. Sled ne uporablja omrežja in ne naučenega modela, rezultat pa je to, kar so črte dale: vsak nivo preverite glede na njegovo stran. Glejte [Zidovi iz nabora načrtov](topic:walls-from-plans).
- **Lastne sestave zidov.** {{ui:Sestave zidov…}} sestavi tip zidu plast za plastjo, z jedrom, zračnimi režami in membranami, ter predogled z kotami; {{ui:Knjižnica materialov…}} hrani materiale projekta v IFC; {{ui:Opombe}} › {{ui:Referenčna kota}} meri do lic in osrednjih črt jedra ter sledi zidovom, ko se spremenijo. Od sodelavca skupnosti Doc (drsurfbum). Glejte [Sestave zidov in referenčne kote](topic:wall-assemblies).
- **Prikazne enote in nadzor pogleda.** {{ui:Enote}} v orodni vrstici prikaže dolžine v čevljih in palcih, palcih, decimalnih čevljih, milimetrih, centimetrih ali metrih, v kotah, razpredelnicah, koordinatah, meritvah in prerezih. {{ui:Tloris}}, {{ui:Razdeli}} in {{ui:3D}} so v orodni vrstici, razdelitev se da povleči (ali premakniti s tipkovnico), {{ui:Osenčeno}}, {{ui:Robovi}} in {{ui:Žični model}} so ob kocki pogleda, naklon, previs in podstrešje izbrane strehe pa se spremenijo takoj. Od sodelavca skupnosti Joel (yisraelk). Glejte [Narišite zidove](topic:draw-walls#levels).
- **Talni nosilci po razponu.** {{ui:Ogrodje}} lahko razporedi inženirske nosilce (predhodno) in tudi žagan les, izbere najmanjšo navedeno serijo in višino, ki doseže razpon, 16" ali 24" osno, v katerikoli smeri; gredo v IFC in seznam krojenja. Predlog iz objavljene tabele proizvajalca, ne inženirska rešitev. Tudi od Joela. Glejte [Ogrodje zidov, tal in streh](topic:framing).
- **Več električnih naprav.** {{ui:Elektrika}} doda podatkovne, telefonske in avdio-video vtičnice, izbirno stikalo, časovnik, termostat, detektorje dima in toplote, ročni javljalnik in sirene, ventilator, števec energije in podrejeno ploščo, vsako s svojim razredom IFC. Glejte [Električni tloris](topic:electrical-plan).

### Družine

- **Družine zmorejo več.** Parametri so lahko cela števila, besedilo, material, peresa ali polnilo; družina lahko nariše svoj simbol v tlorisu, ponovi trdno telo, označi dele za grobejše stopnje podrobnosti, drži druge družine (noga v mizi) in ima vroče točke, ki jih povlečete, tudi na postavljenem elementu v tlorisu. Velikosti prihajajo iz tabele CSV, parametri, označeni z **Na element**, pa dovolijo, da se dvoje vrat iste velikosti razlikuje. Glejte [Urejanje družine](topic:family-editor#plan-symbol) in [Družine in njihove velikosti](topic:families#sizes-from-a-table).

### Cevi, kanali in oprema

- **Oprema s priključki.** {{ui:Zgradba}} › {{ui:Oprema}} postavi splošen prezračevalnik, vgradni ventilator, črpalko, kotel, grelnik vode, končno enoto, difuzor, rešetko ali rezervoar; velikosti določi z vrednostmi, ki jih vpišete, njeni cevni in kanalni priključki pa so priključna mesta. Vsaka je shranjena kot svoj razred IFC s priključki IFC. Glejte [MEP oprema s priključki](topic:mep-equipment).
- **Povezani odseki.** Cev ali kanal, začet na priključku, prevzame njegovo velikost in sistem ter ostane pritrjen nanj: premaknete črpalko in njena cev sledi. {{ui:Preveri povezave}} našteje odprta priključna mesta, prosta konca, neskladja v velikosti in sistemu ter odseke, ki jih nič ne napaja. Glejte [Povežite cevi in kanale z opremo](topic:mep-connections).
- **Cevi in kanali proti konstrukciji.** {{ui:Preverjanje kolizij}} ima pripravljene nabore, {{ui:Cevi in zračni kanali × konstrukcija}} pa z enim klikom; {{ui:Preveri odmike}} uporabi izolacijo vsakega odseka plus režo, ki jo vpišete; {{ui:Potrebne odprtine}} našteje, kje odseki prehajajo skozi zidove in plošče, kot CSV in zadeve BCF. Nič se ne reže. Glejte [Preverjanje cevi in kanalov glede na konstrukcijo](topic:mep-against-structure).
- **Jeklene cevne odseke.** Jekleni odsek se reže na oštevilčene odseke pri najdaljši dolžini in na {{ui:Montažni var}}, ki ga postavite; {{ui:Listi odsekov (PDF)}} da stran za vsak odsek z njegovim izometričnim pogledom, dolžinami rezanja, fitingi, vari in kosovnico, {{ui:Seznam krojenja kanalov}} pa našteje ravne kanalske kose. Glejte [Jekleni cevni odseki in listi odsekov](topic:pipe-spools).

To so pripomočki za risanje in usklajevanje, ki jih dimenzionira inženir: brez pretokov, tlakov ali uravnoteženja.

### Upravljanje stavbe

- **Dokumenti na sredstvo.** Zavihek {{ui:Sredstva}} poveže priročnike, garancije, fotografije in risbe s sredstvom preko imena datoteke ob IFC ali spletnega naslova; v IFC gre samo povezava. Glejte [Dokumenti](topic:assets-and-maintenance#documents).
- **Preglednica COBie.** {{ui:Shrani kot COBie (.xlsx)}} zapiše delovni zvezek COBie 2.4 za predajo, delovni zvezek COBie, prebran nazaj, pa našteje vsako spremembo, preden ena {{ui:Uporabi}}. Še ni prestal preverjanja z validatorjem COBie. Glejte [Preglednica COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Odčitki senzorjev in živi viri.** Odprite CSV z odčitki ali {{ui:Poveži}} neposredno iz brskalnika na svoj posrednik MQTT ali naslov, na katerega odgovarja vaš sistem stavbe: vsako sredstvo pokaže zadnji odčitek in graf, je obarvano na modelu ter označeno, če je zunaj mej, shranjenih v IFC. Odčitki ostanejo v zavihku; gesla se nikoli ne shrani. Glejte [Odčitki senzorjev](topic:assets-and-maintenance#sensor-readings) in [Živi odčitki](topic:assets-and-maintenance#live-readings).

### Dnevna svetloba in energija

- **Nebo in sonce pri vsakem oknu.** Zavihek {{ui:Dnevna svetloba}} da vsakemu oknu vertikalno komponento neba in kot ovire, sledi soncu skozi datum z {{ui:Sonce skozi okna na izbrani datum}} ter izračuna {{ui:Faktor dnevne svetlobe po mreži}} čez vsak prostor, narisan v njegovem tlorisu. Glejte [Vertikalna komponenta neba pri vsakem oknu](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Toplotne in hladilne obremenitve.** {{ui:Toplotne in hladilne obremenitve}} izračuna toplotno izgubo vsakega prostora, njegovo ogrevanje čez leto iz stopinjskih dni in njegov vrh hlajenja, iz tega, kar ga omejuje v modelu, in iz U-vrednosti vsakega elementa; tam vpisana U-vrednost se zapiše v IFC. Glejte [Ocena toplotnih in hladilnih obremenitev](topic:heating-and-cooling-loads).

Oboje sta pripomočka za oblikovanje po objavljenih metodah, ne izračuna skladnosti, in vsaka plošča to pove.

### Optični posnetki

- **Registracija več optičnih posnetkov.** {{ui:Registriraj skene…}} (na začetni plošči ali v {{ui:Pokaži}}) postavi posnetke v en okvir z izbranimi pari točk ali vpisanimi tarčami, jih natančno nastavi z ICP točka-točka in nato točka-ravnina, shrani registracijo kot majhno datoteko projekta in zapiše registrirani oblak kot eno datoteko LAS ali E57. Glejte [Registracija več posnetkov v enega](topic:register-scans).

### Slike in pogled v živo

- **Pogled v živo.** {{ui:Pogled v živo}} v orodni vrstici prikaže model v realnočasovnem videzu poleg 3D pogleda, sledi mu in vsaki spremembi, s Sprehodom, časom dneva in mesecem; {{ui:Pogled v živo v novem oknu}} ga da na drug zaslon. Glejte [Pogled v živo](topic:live-view).
- **Sledenje žarkom na grafični kartici.** Z WebGPU {{ui:Upodobitev}} › {{ui:Visoka kakovost (sledenje žarkom)}} zažene lastni sledilnik žarkov CadCraft na grafični kartici, lahko se ustavi in {{ui:Nadaljuj}}, ob koncu pa se odšumi; brez WebGPU uporabi sledilnik žarkov WebGL kot prej. Glejte [Visoka kakovost](topic:render#high-quality).
- **Več v pogovornem oknu Upodobitev** (na grafični kartici, zato potrebuje WebGPU): fizično nebo in slike neba, profile svetil IES, kamero z zaslonko, globinsko ostrino, dvotočkovno perspektivo, belo ravnovesje in 360° panorame, stopnjo za končano sliko, mešanje svetlobe in elemente upodobitve po upodobitvi, meglo, dim in kavstike, shranjevanje kot 16-bitni PNG, EXR ali datoteka upodobitve ter vrsto upodabljanja. Glejte [Nebesa in profili svetlobe na grafični kartici](topic:render#skies-and-light-profiles-on-the-graphics-card) in [Vrsta upodabljanja](topic:render#the-render-queue).
- **Vaš računalnik.** {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Upodabljanje}} › {{ui:Vaš računalnik}} prikaže grafiko, jedra procesorja in pomnilnik, ki jih ta brskalnik dovoli aplikaciji, ter nivo, na katerem se upodabljanje začne. Glejte [Kaj vaš računalnik upodablja](topic:your-machine).

### Datoteke in druge aplikacije

- **Datoteke STEP se odprejo.** Del `.step` ali `.stp`, kos opreme ali model dobavitelja (AP203, AP214, AP242) se odpre kot majhen model IFC, vsak trden del kot element, ki ga lahko pregledate, prerežete, izmerite in shranite kot IFC. Barve in imena delov sestava še niso prebrana. Glejte [Datoteke, ki jih BimCraft odpre in shrani](topic:files#what-it-opens).
- **Izvoz USD.** {{ui:USD}} v orodni vrstici zapiše odprte modele kot `.usda`, `.usdc` ali `.usdz`, razporejene po lokaciji, stavbi, etaži in disciplini, z razredom IFC, GlobalId in lastnostmi vsakega elementa. Glejte [Izvoz modela kot USD](topic:usd).
- **Masa iz CivilCraft.** Masa stavbe, poslana iz pogleda na lokacijo v CivilCraft, pokaže svoje študijske številke v Lastnostih, {{ui:Razvij to maso}} pa zgradi zidove na vsakem nivoju in tla iz nje v enem koraku razveljavitve. Glejte [Razvijte maso stavbe iz študije lokacije](topic:develop-a-mass).
- **Elementi knjižnice z variantami.** Element, ki pride v več variantah, ima izbiro {{ui:Različica}} v zavihku {{ui:Knjižnica}}; postavljeni element ohrani svojo varianto v IFC, {{ui:Zamenjaj element …}} našteje druge variante, kopije in posodobitve pa jo ohranijo. Glejte [Postavitev in zamenjava elementa knjižnice z variantami](topic:library-variants).
- **Paketi projektov v mapi.** {{ui:Odpri mapo}} našteje datoteke `.ccbundle.zip` pod {{ui:Projektni svežnji}}, vsaka postavitev v paketu pa ima **Odpri v …**: PDF v MarkupCraft, DWG v CadCraft, v novem zavihku. Glejte [Odprite postavitev](topic:open-project-bundle#open-a-layout).

### Pomočniki in dodatki

- **Več za pomočnike z umetno inteligenco.** Pomočnik lahko zdaj preimenuje elemente in nastavi vrednosti lastnosti, premika in briše elemente, spreminja zidove, vrata in okna, izvozi USD ter upodobi sliko ali zažene vrsto upodabljanja; vsaka sprememba je en korak razveljavitve. Glejte [Naj pomočnik z umetno inteligenco dela z vašim modelom](topic:assistants).
- **Dodatki lahko gradijo v modelu.** API dodatkov 1.1 omogoča dodatku, da naredi spremembo v modelu kot en korak razveljavitve (potuje v Live TeamWork), prebere model ter prebere cevne in kanalne odseke, priključke, opremo in cevne odseke.
- **Dodatek Plant** (izklopljen, dokler ga ne vklopite v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Dodatki}}): specifikacije cevi, preverjene glede na odseke, izometrične risbe odseka kot SVG in DXF s kosovnico, splošna procesna oprema s priključki, postavljena v model, usmerjevalnik med dvema priključkoma in preverjanje postavitve obrata. Pripomoček za risanje, ne inženirska odobritev; njegova besedila so samo v angleščini.

## Spremenjeno

- **Prvi dom na prenosniku.** Na zaslonu velikosti prenosnika se BimCraft zažene samo s tlorisom, vrstica Risanje je ozka plošča s tlorisom poleg nje, tloris in 3D pogled se vrneta v pogled, ko ju risba zapusti, 3D pogled uokviri celotno hišo v ozkem podoknu, vrata in okna pa se izberejo pred kotnimi črtami.
- **Shranjevanje slike.** **Shrani PNG** v pogovornem oknu Upodobitev je zdaj {{ui:Shrani}}, poleg njega pa je {{ui:Shrani kot}} za druge oblike. Glejte [Shranjevanje slike](topic:render#save-the-picture).
- **Zavihek Analiza** ima blok {{ui:Preverjanja dimenzioniranja}}: naredi kombinacije obtežb po ASCE 7 ali EN 1990 za vaše primere in preveri vsak valjan jekleni I-profil (velikost W, S, IPE, HEA ali HEB po imenu profila in velikosti) po AISC 360 ali EN 1993-1-1 ter pokaže, koliko njegove nosilnosti uporablja. Pomoč, dokler inženir ne pregleda; varjeni profili in drugi preseki pravijo »ni preverjeno«. Glejte [Preverjanja dimenzioniranja](topic:frame-analysis#design-checks).

## Popravljeno

- Ponovitev po koraku, ki je naredil novo velikost družine, ni uspela (»ni velikosti«). Vsak korak zdaj ob ponovitvi naredi iste GlobalId-je IFC, zato ponovitev deluje za družine in vsako drugo spremembo.
- Ko sta dve osebi shranili isto družino (v seji Live TeamWork ali v dveh oknih), je druga shramba tiho nadomestila spremembo prve. Zdaj zavrne in pove, kako videti spremembo drugega in ponovno narediti svojo.
- Model v ameriških geodetskih čevljih je bil prebran kot 0.3048 m na čevelj namesto 0.3048006096 m, kar je premaknilo vsak georeferenciran IFC v ameriških čevljih na zemljevidu.
- Urejevalnik družin: zapiranje ne spusti več tipkovniškega fokusa na stran, njegov Shrani ostane viden na telefonu, njegova polja pa ne povečajo telefona.

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima po en seznam za dolžino, površino, prostornino, kot in naklon, z natančnimi velikostmi, ki jih dajo definicije enot (ameriški geodetski čevelj je svoja enota). Izklopite enote, ki jih nikoli ne uporabljate, in zapustijo sezname; označite eno, in novo delo se začne v njej. Datoteka vedno ohrani svojo enoto. V BimCraft seznam {{ui:Enote}} v orodni vrstici sledi stikalom, zvezdica nastavi prikazne enote, dokler jih ne izberete v orodni vrstici (vaša prejšnja izbira ostane), polja dolžine v orodjih za risanje pa sprejmejo oznako katerekoli enote, na primer `3.5 m` ali `10 US ft`. Glejte [Enote, vpisane vrednosti in seznami enot](common:unit-lists).
- **Gostejša postavitev in plošče, ki se umaknejo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Strnjeno}} na zaslonu prikaže več (zasloni na dotik in telefoni ohranijo svoje velike gumbe). Vsaka stranska plošča ima tanko naslovno vrstico: povlecite jo, da jo pripnete ali odlepite, spustite na vrstico druge plošče, da delita okvir kot zavihke, pripnete jo, da se umakne na rob, ali jo skrijete in spet prikličete z roba. Glejte [Razporeditev plošč](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Pogovorno okno povlecite za naslovno vrstico stran od risbe; ko se vrne, je tam, kjer ste ga pustili. Dvojni klik na naslovno vrstico ga spet center. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike z umetno inteligenco.** Deset zgledov zahtev za vašega pomočnika (uredite risbo, natisnite niz, preverite risbe, vprašajte model, seštejte predizmero, preizkusite varianto dela …), vsak z orodji, ki jih kliče, in dovoljenji, ki jih potrebuje, in vsakega ponovijo naši testi. Aplikacije ne vsebujejo umetne inteligence. Glejte [Recepti za pomočnike z umetno inteligenco](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia** imajo zdaj vse besede aplikacij, kot osnutke, ki jih govorec ni pregledal. Teme pomoči so v angleščini, nekatere v španščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitev ni uspelo (še ni datoteke za vaš sistem, ni omrežja, slab podpis), namesto le »Končano«, in preneha vračati kartico Kaj je novega, ki ste jo zaprli, dokler ni novejše izdaje.

## Še ni v tej različici

- **0.7 ni podpisan s kodo.** Podpisovanje in paket Microsoft Store sta preložena na 0.8, ker preverjanje certifikata še ni prišlo. Preverite SHA-256 ob vsaki datoteki na getcadcraft.com/download. Če SmartScreen v Windows ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu prvič z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. CadCraft Studio še ni v nobeni trgovini z aplikacijami, zato še ni gradnje za iPad ali iPhone.
- Seznami kotov in naklonov v {{ui:Enote}} se shranijo, vendar jih nobeno polje še ne bere.
- Sledenje žarkom na grafični kartici, dodatki v pogovornem oknu Upodobitev in vrsta upodabljanja potrebujejo WebGPU (brez njega visoka kakovost uporabi sledilnik žarkov WebGL); pogled v živo uporablja WebGPU, kjer ga brskalnik ima, sicer WebGL 2. Preizkušeni so bili tukaj samo na programski nadomestni grafični kartici, še ne na pravih grafičnih karticah. Pogled v živo v BimCraft nima razpršitve ali deljenja (ModelCraft ju ima).
- Upodabljanje posnetega sprehoda kot video ni vgrajeno v BimCraft.
- Preverjanja dimenzioniranja: I-profil, katerega ime profila IFC ni velikost W, S, IPE, HEA ali HEB (ali katerega velikost se od nje razlikuje), se šteje za varjenega in se vrne kot »ni preverjeno«, enako za cevi, kotnike, kanale, vitke dele in zvijanje. Še noben inženir ni pregledal preverjanj.
- Narisanih elementov ni mogoče kopirati enega za drugim, obrniti, zrcaliti ali razporediti v matriko (lahko se kopira cel nivo), prav tako ni deljenja zidu, orodja Besedilo ali zavesne stene. Zid, ki se na zgornjem nivoju stakne z zidom z nižjega nivoja, ne bo prerezan v njegovo 3D telo, razpredelnice pa navedejo odprtino na zgornjem nivoju pod lastnim nivojem zidu.
- Družine: knjižnica družin, deljenih med projekti, ni izdelana. Družine in kopirani nivoji še niso bili odprti v drugih BIM programih.
- MEP: oprema je splošna (brez podatkov proizvajalcev); T kosi in reducirni kosi na jeklenih odsekih so splošni, ne iz tabele ASME B16.9; priključki elementov knjižnice, postavljenih iz zavihka {{ui:Knjižnica}}, se ne zapišejo v IFC; nič ni pregledal inženir.
- Dodatek Plant še ne more narisati usmerjenega odseka v model, oštevilčiti odsekov na svojih izometričnih risbah ali preveriti postavitve opreme, postavljene iz knjižnice.
- Obrati iz knjižnice obratov CivilCraft še ne morejo biti postavljeni iz zavihka {{ui:Knjižnica}} v BimCraft.
- Energija: brez urne simulacije, brez metode ISO 52016-1 in brez podnebnih datotek. Sredstva: brez gostujočega dvojčka, ki bi hranil odčitke ali pošiljal opozorila, ko je BimCraft zaprt.
- Registracija optičnih posnetkov je bila preizkušena na preskusnih posnetkih, še ne na nizu posnetkov pravega skenerja; datoteke E57 se še vedno odprejo do 6 milijonov točk in 512 MB.
- Paketi projektov se odprejo samo v BimCraft (druge aplikacije sprejmejo postavitev preko **Odpri v …**), paketi in komplet za dva programa pa so bili preizkušeni na nadomestkih, še ne z Archicad ali Revit samima.

Vse drugo je v [Kaj še ni izdelano](topic:not-built-yet).
