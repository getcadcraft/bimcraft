---
title: Čo je nové vo verzii 0.7
summary: BimCraft pridáva steny cez viacero úrovní a Kopírovať túto úroveň, steny z PDF a skenov, vlastné skladby stien, bohatšie rodiny, zariadenia MEP s portami, sady kolízií, otvory a montážne celky potrubí, dokumenty majetku, COBie a údaje zo senzorov, oblohu, slnko, denné svetlo na sieti a záťaže na vykurovanie a chladenie, registráciu skenov, živý pohľad a path tracing na grafickej karte, STEP a USD, varianty knižnice a ďalšie možnosti pre AI asistentov.
keywords: čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, steny cez úrovne, kopírovať túto úroveň, pdf, sken, obrysovanie, steny z pôdorysov, skladby stien, hladiny, jadro, membrána, referenčné kóty, knižnica materiálov, zobrazované jednotky, štýl zobrazenia, konštrukcia, trámy, rodiny, parametre, symbol pôdorysu, aktívne body, opakovať, úroveň podrobností, vnorené rodiny, rozmery CSV, na prvok, zariadenia, porty, pripojenia, odstupy, otvory, montážne celky, listy montážnych celkov, zvar na stavbe, zoznam rezov vzduchotechnického potrubia, dokumenty, cobie, senzory, mqtt, živý kanál, vertikálna zložka oblohy, solárny zisk, sieť denného svetla, vykurovanie, chladenie, záťaže, U-hodnota, registrácia skenov, icp, e57, živý pohľad, path tracing, webgpu, odšumenie, fyzikálna obloha, miešanie svetla, fronta vykreslenia, váš počítač, step, usd, balík projektu, rozpracovať hmotu, varianty, asistenti, API doplnkov, plant, elektro, kontroly návrhu
from: 5c27b80a
---

Toto sa zmenilo v BimCraft 0.7 oproti verzii 0.6. Zoznam je zoskupený podľa oblastí, najdôležitejšie sú na začiatku.

## Novinky

### Kreslenie budovy

- **Steny cez viacero úrovní.** Zoznam výšok v nástroji Stena ponúka **Až po** ľubovoľnú vyššiu úroveň, rovnako ako Vlastnosti pri vybranej stene. Pôdorysy úrovní medzi nimi zobrazujú stenu svetlejšie, miestnosti tam priliehajú k nej a dvere a okná sa do nej dajú umiestniť z týchto pôdorysov. **Prechádza cez** vo Vlastnostiach uvádza úrovne, ktorými prechádza. Pozri [Zmena steny, dverí alebo okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopírovať túto úroveň.** {{ui:Kopírovať túto úroveň…}} v paneli Úrovne nakreslí znovu steny úrovne spolu s jej dverami a oknami, podlahy a stropy na inej úrovni alebo na novej úrovni nad ňou, a to v jednom kroku späť. Miestnosti sa objavia samy. Pozri [Kreslenie stien](topic:draw-walls#levels).
- **Steny z PDF alebo skenu.** {{ui:Zostava}} › {{ui:Z výkresu…}} teraz prijme PDF (čiarovú kresbu alebo sken v ňom) alebo naskenovaný pôdorys (PNG, JPEG, TIFF, aj viacstranový): každá strana sa stane stenami, dverami, oknami a miestnosťami jednej úrovne, pričom strana zostáva uložená pod pôdorysom. Obrysovanie nepoužíva sieť ani natrénovaný model a výsledok zodpovedá tomu, čo čiary dovolili: skontrolujte každú úroveň voči jej strane. Pozri [Steny zo sady pôdorysov](topic:walls-from-plans).
- **Vlastné skladby stien.** {{ui:Skladby stien…}} zostaví typ steny vrstvu po vrstve, s jadrom, vzduchovými medzerami a membránami, a s okótovaným náhľadom. {{ui:Knižnica materiálov…}} uchováva materiály projektu v IFC. {{ui:Anotovať}} › {{ui:Referenčná kóta}} meria k plochám a stredovým čiaram jadra a sleduje steny, keď sa zmenia. Od prispievateľa komunity Doc (drsurfbum). Pozri [Skladby stien a referenčné kóty](topic:wall-assemblies).
- **Zobrazované jednotky a ovládanie pohľadu.** {{ui:Jednotky}} na paneli nástrojov zobrazuje dĺžky v stopách a palcoch, palcoch, desatinných stopách, milimetroch, centimetroch alebo metroch, v kótach, tabuľkách, súradniciach, meraniach a rezoch. {{ui:Pôdorys}}, {{ui:Rozdelené}} a {{ui:3D}} sú na paneli nástrojov, rozdelenie sa dá ťahať (alebo presúvať z klávesnice), {{ui:Tieňovaný}}, {{ui:Hrany}} a {{ui:Drôtený}} sú vedľa kocky zobrazenia a sklon strechy, nadpražie a podhľad menia vybranú strechu okamžite. Od prispievateľa komunity Joel (yisraelk). Pozri [Kreslenie stien](topic:draw-walls#levels).
- **Trámy podlahy podľa rozpätia.** {{ui:Konštrukcia}} dokáže rozložiť konštrukčné trámy (predbežné) rovnako ako rezivo, pričom vyberie najmenšiu uvedenú radu a výšku, ktorá prekryje rozpätie, s osovou vzdialenosťou 16" alebo 24", v ľubovoľnom smere. Idú do IFC aj do zoznamu rezov. Ide o návrh z publikovanej tabuľky výrobcu, nie o inžinierske posúdenie. Tiež od Joela. Pozri [Konštrukcia stien, podláh a striech](topic:framing).
- **Viac elektrických zariadení.** {{ui:Elektro}} pridáva dátové, telefónne a audio-video zásuvky, prepínač voľby, časovač, termostat, detektory dymu a tepla, tlačidlo požiarneho hlásiča a sirénu, ventilátor, merač energie a podrozvádzač, každý s vlastnou triedou IFC. Pozri [Elektrický pôdorys](topic:electrical-plan).

### Rodiny

- **Rodiny robia viac.** Parametre môžu byť celé čísla, text, materiál, pero alebo výplň. Rodina môže nakresliť vlastný symbol pôdorysu, opakovať pevné teleso, označiť časti pre hrubšie úrovne podrobností, obsahovať iné rodiny (nohu v stole) a mať aktívne body, ktoré ťaháte, aj na umiestnenom prvku v pôdoryse. Rozmery sa berú z tabuľky CSV a parametre označené **Na prvok** umožňujú, aby sa dve dvere rovnakej veľkosti líšili. Pozri [Úprava rodiny](topic:family-editor#plan-symbol) a [Rodiny a ich rozmery](topic:families#sizes-from-a-table).

### Potrubia, vzduchotechnické potrubia a vybavenie

- **Vybavenie s portami.** {{ui:Zostava}} › {{ui:Vybavenie}} umiestni všeobecnú vzduchotechnickú jednotku, prietokový ventilátor, čerpadlo, kotol, ohrievač vody, koncovú jednotku, difúzor, mriežku alebo nádrž, s veľkosťou podľa hodnôt, ktoré zadáte, a s pripojeniami potrubí a vzduchotechnických potrubí ako portami. Každé sa uloží ako svoja trieda IFC s portami IFC. Pozri [Zariadenia MEP s portami](topic:mep-equipment).
- **Prepojené vedenia.** Potrubie alebo vzduchotechnické potrubie začaté na porte preberie jeho veľkosť a systém a zostane k nemu pripojené: presuniete čerpadlo a jeho potrubie ho nasleduje. {{ui:Skontrolovať pripojenia}} vypíše voľné porty, nepripojené konce, nesúlad veľkostí a systémov a vedenia, ktoré nič nedodávajú. Pozri [Pripojenie potrubí a vzduchotechnických potrubí k zariadeniam](topic:mep-connections).
- **Potrubia a vzduchotechnické potrubia voči konštrukcii.** {{ui:Kontrola kolízií}} má hotové sady a {{ui:Potrubie a vzduchotechnické potrubie × konštrukcia}} v jednom kroku; {{ui:Skontrolovať odstupy}} používa izoláciu každého vedenia plus medzeru, ktorú zadáte; {{ui:Potrebné otvory}} vypíše miesta, kde vedenia prechádzajú cez steny a stropy, ako problémy v CSV a BCF. Nič sa nereže. Pozri [Kontrola potrubí a vzduchotechnických potrubí voči konštrukcii](topic:mep-against-structure).
- **Oceľové montážne celky potrubia.** Oceľové vedenie sa rozdelí na očíslované montážne celky podľa najdlhšej dĺžky a na {{ui:Zvar na stavbe}}, ktoré umiestnite. {{ui:Listy montážnych celkov (PDF)}} dá stranu na každý celok s jeho izometrickým pohľadom, dĺžkami rezov, tvarovkami, zvarmi a kusovníkom a {{ui:Zoznam rezov vzduchotechnického potrubia}} vypíše rovné kusy vzduchotechnického potrubia. Pozri [Oceľové montážne celky potrubia a listy montážnych celkov](topic:pipe-spools).

Ide o pomôcky pri kreslení a koordinácii, ktoré dimenzuje inžinier: bez prietokov, tlakov a vyvažovania.

### Prevádzka budovy

- **Dokumenty na každý majetok.** Karta {{ui:Majetok}} prepája návody, záruky, fotografie a výkresy s majetkom pomocou názvu súboru vedľa IFC alebo webovej adresy; do IFC sa zapíše iba odkaz. Pozri [Dokumenty](topic:assets-and-maintenance#documents).
- **Tabuľka COBie.** {{ui:Uložiť ako COBie (.xlsx)}} zapíše odovzdávací zošit COBie 2.4 a zošit COBie načítaný späť vypíše každú zmenu pred jedným {{ui:Použiť}}. Ešte prešiel validátorom COBie. Pozri [Tabuľka COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Údaje zo senzorov a živé kanály.** Otvorte CSV s údajmi alebo použite {{ui:Pripojiť}} priamo z prehliadača k vlastnému brokeru MQTT alebo adrese, na ktorú odpovedá váš systém budovy: každý majetok ukáže posledný údaj a graf, je zafarbený na modeli a označený, ak je mimo limitov uložených v IFC. Údaje ostávajú na karte; heslá sa nikdy neukladajú. Pozri [Údaje zo senzorov](topic:assets-and-maintenance#sensor-readings) a [Živé údaje](topic:assets-and-maintenance#live-readings).

### Denné svetlo a energia

- **Obloha a slnko pri každom okne.** Karta {{ui:Denné svetlo}} dáva každému oknu jeho vertikálnu zložku oblohy a uhol zatienenia, sleduje slnko počas dátumu pomocou {{ui:Slnko cez okná v určitý dátum}} a vypočíta {{ui:Činiteľ dennej osvetlenosti na sieti}} v každej miestnosti, nakreslený na jej pôdoryse. Pozri [Vertikálna zložka oblohy každého okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Záťaže na vykurovanie a chladenie.** {{ui:Tepelné straty a chladiace záťaže}} vypočíta tepelnú stratu každej miestnosti, jej vykurovanie za rok z stupňov dní a jej špičku chladenia z toho, čím je ohraničená v modeli, a z U-hodnoty každého prvku; U-hodnota zadaná tam sa zapíše do IFC. Pozri [Odhad záťaží na vykurovanie a chladenie](topic:heating-and-cooling-loads).

Obe sú pomôcky návrhu podľa publikovaných metód, nie výpočty na preukázanie súladu, a každý panel to uvádza.

### Skeny

- **Registrácia viacerých skenov.** {{ui:Registrácia skenov…}} (na štartovacom paneli alebo v {{ui:Zobraziť}}) umiestni skeny do jedného rámca podľa vybraných dvojíc bodov alebo zadaných cieľov, spresní ich pomocou ICP bod k bodu a potom bod k rovine, uloží registráciu ako malý súbor projektu a zapíše zaregistrovaný oblak ako jeden súbor LAS alebo E57. Pozri [Registrácia viacerých skenov do jedného](topic:register-scans).

### Obrázky a živý pohľad

- **Živý pohľad.** {{ui:Živý pohľad}} na paneli nástrojov ukáže model v reálnom vzhľade vedľa 3D zobrazenia, sleduje ho a každú zmenu, s {{ui:Prechádzka}}, časom dňa a mesiacom; {{ui:Živý pohľad v novom okne}} ho umiestni na druhú obrazovku. Pozri [Živý pohľad](topic:live-view).
- **Path tracing na grafickej karte.** S WebGPU {{ui:Vykresliť}} › {{ui:Vysoká kvalita (path tracing)}} spustí vlastný path tracer CadCraft na grafickej karte, dá sa zastaviť a {{ui:Pokračovať}}, a na konci sa odšumí; bez WebGPU použije path tracer WebGL ako predtým. Pozri [Vysoká kvalita](topic:render#high-quality).
- **Ďalšie v dialógu Vykreslenie** (na grafickej karte, preto potrebuje WebGPU): fyzikálnu oblohu a obrazy oblohy, profily svetiel IES, kameru s clonovým číslom, hĺbkou ostrosti, perspektívou s dvoma bodmi, vyváženým bielym a 360° panorámami, úpravu hotového obrazu, miešanie svetla a prvky vykreslenia po vykreslení, hmlu, dym a kaustiky, uloženie ako 16-bitový PNG, EXR alebo súbor vykreslenia a frontu vykreslenia. Pozri [Oblohy a profily svetiel na grafickej karte](topic:render#skies-and-light-profiles-on-the-graphics-card) a [Fronta vykreslenia](topic:render#the-render-queue).
- **Váš počítač.** {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Vykresľovanie}} › {{ui:Váš počítač}} ukazuje grafiku, jadrá procesora a pamäť, ktoré tento prehliadač dovolí aplikácii použiť, a úroveň, na ktorej vykresľovanie začína. Pozri [Čím vaš počítač vykresľuje](topic:your-machine).

### Súbory a ďalšie aplikácie

- **Otváranie súborov STEP.** Súbor `.step` alebo `.stp` s dielom, zariadením alebo modelom dodávateľa (AP203, AP214, AP242) sa otvorí ako malý model IFC, pričom každé teleso je prvok, ktorý môžete preskúmať, rezať, merať a uložiť ako IFC. Farby a názvy dielov zostavy sa zatiaľ nečítajú. Pozri [Súbory, ktoré BimCraft otvára a ukladá](topic:files#what-it-opens).
- **Export USD.** {{ui:USD}} na paneli nástrojov zapíše otvorené modely ako `.usda`, `.usdc` alebo `.usdz`, usporiadané podľa lokality, budovy, podlažia a disciplíny, s triedou IFC, GlobalId a vlastnosťami každého prvku. Pozri [Export modelu do USD](topic:usd).
- **Hmota z CivilCraft.** Hmota budovy odoslaná z pohľadu lokality CivilCraft ukáže svoje štúdie v Vlastnostiach a {{ui:Rozpracovať túto hmotu}} zostaví z nej steny na každej úrovni a podlahu v jednom kroku späť. Pozri [Rozpracovanie hmoty budovy zo štúdie lokality](topic:develop-a-mass).
- **Položky knižnice s variantmi.** Položka, ktorá prichádza v niekoľkých variantoch, má voľbu {{ui:Variant}} na karte {{ui:Knižnica}}; umiestnený prvok si uchová svoj variant v IFC, {{ui:Vymeniť položku…}} vypíše ostatné varianty a kópie a aktualizácie ho zachovajú. Pozri [Umiestnenie a výmena položky knižnice s variantmi](topic:library-variants).
- **Balíky projektu v priečinku.** {{ui:Otvoriť priečinok}} vypíše súbory `.ccbundle.zip` pod {{ui:Balíky projektu}} a každé rozloženie v balíku má **Otvoriť v …**: PDF do MarkupCraft, DWG do CadCraft, v novej karte. Pozri [Otvorenie rozloženia](topic:open-project-bundle#open-a-layout).

### Asistenti a doplnky

- **Viac pre AI asistentov.** Asistent teraz dokáže premenovať prvky a nastaviť hodnoty vlastností, presúvať a mazať prvky, meniť steny, dvere a okná, exportovať USD a vykresliť obrázok alebo spustiť frontu vykreslenia; každá zmena je jeden krok späť. Pozri [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
- **Doplnky môžu tvoriť v modeli.** API doplnkov 1.1 umožňuje doplnku urobiť zmenu v modeli ako jeden krok späť (prenáša sa v Live TeamWork), čítať model a čítať vedenia potrubí a vzduchotechnických potrubí, porty, zariadenia a montážne celky.
- **Doplnok Plant** (vypnutý, kým ho nezapnete v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Doplnky}}): kontroly špecifikácií potrubí voči vedeniam, izometrické výkresy vedenia ako SVG a DXF s kusovníkom, všeobecné procesné zariadenia s hrdlami umiestnenými v modeli, smerovač medzi dvoma portami a kontrola rozloženia závodu. Pomôcka pri kreslení, nie schválenie inžiniera; jeho texty sú iba v angličtine.

## Zmeny

- **Prvý dom na notebooku.** Na obrazovke veľkosti notebooku sa BimCraft spustí iba s pôdorysom, panel Kreslenie je úzky panel s pôdorysom umiestneným vedľa, pôdorys a 3D zobrazenie sa vrátia do zobrazenia, keď ich výkres opustí, 3D zobrazenie rámuje celý dom v úzkom okne a dvere a okná sa vyberajú pred kótovacími čiarami.
- **Ukladanie obrázka.** **Uložiť PNG** v dialógu Vykreslenie je teraz {{ui:Uložiť}}, vedľa neho je {{ui:Uložiť ako}} pre ostatné formáty. Pozri [Uloženie obrázka](topic:render#save-the-picture).
- **Karta Analýza** má blok {{ui:Kontroly návrhu}}: vytvorí kombinácie zaťažení podľa ASCE 7 alebo EN 1990 pre vaše prípady a skontroluje každý valcovaný oceľový I-profil (W, S, IPE, HEA alebo HEB podľa názvu profilu a veľkosti) podľa AISC 360 alebo EN 1993-1-1 a ukáže, koľko svojej únosnosti využíva. Pomôcka, kým ju neprekontroluje inžinier; zvárané tvary a iné prierezy hlásia „nekontrolované“. Pozri [Kontroly návrhu](topic:frame-analysis#design-checks).

## Opravy

- Späť po kroku, ktorý vytvoril novú veľkosť rodiny, zlyhal („žiadna veľkosť“). Každý krok teraz pri opakovaní vytvára rovnaké IFC GlobalId, takže opakovanie funguje pre rodiny aj pre každú inú zmenu.
- Keď dvaja ľudia uložili tú istú rodinu (v relácii Live TeamWork alebo v dvoch oknách), druhé uloženie potichu prepísalo zmenu prvého. Teraz uloženie odmietne a povie, ako zobraziť ich zmenu a znovu urobiť vašu.
- Model v US survey feet sa čítal ako 0,3048 m na stopu namiesto 0,3048006096 m, čo posúvalo každý georeferencovaný IFC v US stopách na mape.
- Editor rodín: jeho zatvorenie už neodsunie klávesnicový fokus na stránku, jeho Uložiť zostáva na očiach na telefóne a jeho polia už na telefóne nezväčšujú zobrazenie.

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má zvlášť zoznam pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami, ktoré dávajú definície jednotiek (US survey foot je vlastná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a zmiznú zo zoznamov; označte jednu hviezdičkou a nová práca sa v nej začne. Súbor si vždy uchováva vlastnú jednotku. V BimCraft zoznam {{ui:Jednotky}} na paneli nástrojov nasleduje prepínače, hviezdička nastavuje zobrazované jednotky, kým ich nevyberiete na paneli nástrojov (váš predchádzajúci výber sa zachová) a polia dĺžky nástrojov kreslenia prijmú označenie ľubovoľnej jednotky, napríklad `3.5 m` alebo `10 US ft`. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú schovať.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si zachovajú veľké tlačidlá). Každý bočný panel má štíhly pruh s názvom: potiahnutím ho ukotvíte alebo odlepíte, pustením na pruh iného panela spoločne v jednom rámci ako karty, pripnutím ho nechá zmiznúť k okraju alebo jeho skrytím a vrátením z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógy sa dajú presúvať.** Dialóg presuňte jeho pruhom s názvom mimo výkresu; keď ho zavrete, vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na pruh s názvom ho znovu vycentrujete. Pozri [Presun dialógu](common:arrange-panels#move-a-dialog).
- **Recepty pre AI asistentov.** Desať pracovných žiadostí pre vášho asistenta (upratanie výkresu, vytlačenie sady, kontrola výkresov, otázky k modelu, súčet výkazu výmer, skúšanie variantu súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá zopakovaná našimi testami. Aplikácie neobsahujú žiadnu AI. Pozri [Recepty pre AI asistentov](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz všetky slová aplikácií, ako koncepty ešte neprekontrolované rodeným hovorcom. Témy pomocníka sú v angličtine, niektoré v španielčine.
- **CadCraft Studio** uvádza, prečo kontrola aktualizácií zlyhala (zatiaľ žiadny súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len „Hotovo“, a prestane znovu zobrazovať kartu Čo je nové, ktorú ste zavreli, dokým nebude novšie vydanie.

## Zatiaľ nie je v tejto verzii

- **0.7 nemá podpísaný kód.** Podpisovanie a balík Microsoft Store sa presunuli do verzie 0.8, lebo overenie certifikátu zatiaľ neprebehlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Viac informácií}} a potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v žiadnom obchode s aplikáciami a zatiaľ neexistuje zostava pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadne pole nečíta.
- Path tracing na grafickej karte, doplnky v dialógu Vykreslenie a fronta vykreslenia vyžadujú WebGPU (bez neho vysoká kvalita používa path tracer WebGL); živý pohľad používa WebGPU, ak ho prehliadač má, inak WebGL 2. Boli otestované iba na softvérovej náhrade grafickej karty, zatiaľ nie na skutočných grafických kartách. Živý pohľad v BimCraft nemá rozptyl ani zdieľanie (ten má ModelCraft).
- Vykreslenie nahratej prechádzky ako video nie je v BimCraft zabudované.
- Kontroly návrhu: I-profil, ktorého názov profilu IFC nie je veľkosťou W, S, IPE, HEA alebo HEB (alebo ktorého veľkosť sa od nej líši), sa považuje za zváraný a vráti sa ako „nekontrolované“, rovnako ako trubky, uhly, U-profily, štíhle časti a krútenie. Kontroly zatiaľ nepreskúmal žiadny inžinier.
- Kreslené prvky sa nedajú kopírovať jednotlivo, otáčať, zrkadliť ani usporiadať do poľa (celú úroveň kopírovať možno), a nie je tu rozdelenie steny, nástroj Text ani záclonová stena. Stena, ktorá na vyššej úrovni stretáva stenu z nižšej úrovne, sa nerezuje do 3D telesa tej steny a tabuľky uvádzajú otvor na vyššej úrovni pod úrovňou svojej steny.
- Rodiny: knižnica rodín zdieľaná medzi projektmi zatiaľ nie je hotová. Rodiny a kopírované úrovne ešte neboli otvorené v iných programoch BIM.
- MEP: zariadenia sú všeobecné (bez údajov výrobcov); odbočky a redukcie na oceľových montážnych celkoch sú všeobecné, nie z tabuľky ASME B16.9; porty položiek knižnice umiestnených z karty {{ui:Knižnica}} sa do IFC nezapisujú; nič nepreskúmal inžinier.
- Doplnok Plant zatiaľ nedokáže nakresliť vedené vedenie do modelu, očíslovať montážne celky na svojich izometriách ani skontrolovať rozloženie zariadení umiestnených z knižnice.
- Závody z knižnice závodov CivilCraft sa zatiaľ nedajú umiestniť z karty {{ui:Knižnica}} v BimCraft.
- Energia: žiadna hodinová simulácia, žiadna metóda ISO 52016-1 a žiadne klimatické súbory. Majetok: žiadny hostiteľský digitálny dvojník, ktorý by uchovával údaje alebo posielal upozornenia, keď je BimCraft zatvorený.
- Registrácia skenov bola vyskúšaná na testovacích skenoch, zatiaľ nie na sade skenov skutočného skenera; súbory E57 sa zatiaľ otvoria do 6 miliónov bodov a 512 MB.
- Balíky projektov sa otvárajú iba v BimCraft (ostatné aplikácie prijímajú rozloženie cez **Otvoriť v …**) a balíky a sada pre dva programy boli otestované na náhradách, zatiaľ nie s Archicadom ani Revitom.

Všetko ostatné je v [Čo zatiaľ nie je hotové](topic:not-built-yet).
