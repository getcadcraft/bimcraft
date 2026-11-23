---
title: Čo je nové vo verzii 0.7 (staršie)
summary: BimCraft pridáva steny cez viac úrovní a Kopírovať túto úroveň, steny z PDF a skenov, vlastné skladby stien, bohatšie rodiny, zariadenia MEP s prípojkami, sady kolízií, otvory a montážne celky potrubia, dokumenty majetku, COBie a údaje zo senzorov, oblohu, slnko, denné svetlo na sieti a tepelné straty a chladiace záťaže, registráciu skenov, živý pohľad a path tracing na grafickej karte, STEP a USD, varianty položiek knižnice a ďalšie pre asistentov AI.
keywords: čo je nové 0.7, staršie vydanie, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, steny cez úrovne, kopírovať túto úroveň, pdf, sken, obkres, steny z plánov, skladby stien, vrstvy, jadro, fólia, referenčné kóty, knižnica materiálov, zobrazované jednotky, štýl zobrazenia, konštrukcia, trámy, rodiny, parametre, značka v pôdoryse, opakovanie, úroveň detailu, vnorené rodiny, veľkosti csv, na prvok, zariadenie, prípojky, pripojenia, odstupy, otvory, montážne celky, zvar na stavbe, zoznam rezov, dokumenty, cobie, senzory, mqtt, živé dáta, vertikálny komponent oblohy, solárny zisk, mriežka denného svetla, vykurovanie, chladenie, záťaže, u-hodnota, registrácia skenov, icp, e57, živý pohľad, path tracing, webgpu, odšumenie, fyzikálna obloha, miešanie svetiel, rad vykreslení, váš počítač, step, usd, balík projektu, rozpracovať hmotu, varianty, asistenti, API doplnkov, rastlina, elektro, kontroly návrhu
from: a638080d
---

Toto sa zmenilo v BimCraft 0.7 v porovnaní s 0.6. Zoznam je zoskupený podľa oblastí, najdôležitejšie sú prvé.

## Nové

### Kreslenie budovy

- **Steny cez viac úrovní.** Zoznam výšky nástroja Stena ponúka **Až po** ľubovoľnú vyššiu úroveň, ako to robia Vlastnosti pri vybranej stene. Pôdorysy úrovní medzi nimi zobrazujú stenu svetlejšie, miestnosti sa k nej tam uzatvárajú a dvere a okná sa do nej dajú umiestniť z týchto pôdorysov; **Prechádza** vo Vlastnostiach uvádza úrovne, ktorými prechádza. Pozri [Zmena steny, dverí alebo okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopírovať túto úroveň.** {{ui:Kopírovať túto úroveň…}} v paneli Úrovne nakreslí znova steny úrovne s jej dverami a oknami, jej podlahy a stropy na inej úrovni alebo na novej úrovni nad ňou, v jednom kroku späť; miestnosti sa objavia samé. Pozri [Kreslenie stien](topic:draw-walls#levels).
- **Steny z PDF alebo skenu.** {{ui:Zostava}} › {{ui:Z výkresu…}} teraz berie PDF (čiarovú kresbu alebo sken v ňom) alebo naskenovaný pôdorys (PNG, JPEG, TIFF, viac strán): každá strana sa stane stenami, dverami, oknami a miestnosťami jednej úrovne, so stranou ponechanou pod jej pôdorysom. Obkreslenie nepoužíva sieť ani natrénovaný model a výsledok je to, čo dali čiary: skontrolujte každú úroveň oproti jej strane. Pozri [Steny zo sady plánov](topic:walls-from-plans).
- **Vlastné skladby stien.** {{ui:Skladby stien…}} vytvorí typ steny vrstvu po vrstve, s jadrom, vzduchovými medzerami a fóliami, a s okótovaným náhľadom; {{ui:Knižnica materiálov…}} uchováva materiály projektu v IFC; {{ui:Anotovať}} › {{ui:Referenčná kóta}} meria na líce a čiary jadra a nasleduje steny, keď sa zmenia. Od prispievateľa z komunity, Doc (drsurfbum). Pozri [Skladby stien a referenčné kóty](topic:wall-assemblies).
- **Zobrazované jednotky a ovládanie pohľadu.** {{ui:Jednotky}} na paneli nástrojov zobrazuje dĺžky v stopách a palcoch, v palcoch, desatinných stopách, milimetroch, centimetroch alebo metroch, v kótach, tabuľkách, súradniciach, meraniach a rezoch. {{ui:Pôdorys}}, {{ui:Rozdeliť}} a {{ui:3D}} sú na paneli nástrojov, rozdelenie sa dá potiahnuť (alebo presunúť z klávesnice), {{ui:Tieňovaný}}, {{ui:Hrany}} a {{ui:Drôtený}} sú vedľa kocky pohľadu a sklon strechy, lemovanie a podhľad menia vybranú strechu okamžite. Od prispievateľa z komunity, Joel (yisraelk). Pozri [Kreslenie stien](topic:draw-walls#levels).
- **Trámy podláh podľa rozpätia.** {{ui:Konštrukcia}} môže rozložiť konštrukčné trámy podláh (predbežné) aj z rezivového dreva, pričom vyberie najmenšiu uvedenú radu a výšku, ktorá dosiahne rozpätie, 16" alebo 24" o os, v ktoromkoľvek smere; idú do IFC a do zoznamu rezov. Návrh z publikovanej tabuľky výrobcu, nie inžinierske posúdenie. Tiež od Joela. Pozri [Konštrukcia stien, podláh a striech](topic:framing).
- **Viac elektrických zariadení.** {{ui:Elektro}} pridáva dátové, telefónne a audio-video zásuvky, prepínač voľby, časovač, termostat, detektory dymu a tepla, tlačidlo požiarneho hlásiča a sirénu, ventilátor, merač energie a podružný rozvádzač, každé s vlastnou triedou IFC. Pozri [Elektrický pôdorys](topic:electrical-plan).

### Rodiny

- **Rodiny robia viac.** Parametre môžu byť celé čísla, text, materiál, pero alebo výplň; rodina môže nakresliť vlastnú značku v pôdoryse, zopakovať pevné teleso, označiť časti pre hrubšie úrovne detailu, obsahovať iné rodiny (nohu v stole) a mať aktívne body, ktoré potiahnete, aj na umiestnenom prvku v pôdoryse. Veľkosti prichádzajú z tabuľky CSV a parametre označené **Na prvok** dovolia, aby sa dve dvere rovnakej veľkosti líšili. Pozri [Úprava rodiny](topic:family-editor#plan-symbol) a [Rodiny a ich veľkosti](topic:families#sizes-from-a-table).

### Potrubia, vzduchotechnika a zariadenia

- **Zariadenia s prípojkami.** {{ui:Zostava}} › {{ui:Vybavenie}} umiestni všeobecný vzduchotechnický agregát, potrubný ventilátor, čerpadlo, kotol, ohrievač vody, koncovú jednotku, difúzor, mriežku alebo nádrž, s veľkosťou podľa hodnôt, ktoré napíšete, a s prípojkami potrubia a vzduchotechniky. Každé sa uloží ako svoja trieda IFC s prípojkami IFC. Pozri [Zariadenia MEP s prípojkami](topic:mep-equipment).
- **Pripojené trasy.** Potrubie alebo vzduchovod začaté na prípojke prevezme jej veľkosť a systém a zostane k nej pripojené: presuniete čerpadlo a jeho potrubie ho nasleduje. {{ui:Skontrolovať pripojenia}} vypíše otvorené prípojky, voľné konce, nesúlad veľkosti a systému a úseky, ktoré nič nedodáva. Pozri [Pripojenie potrubí a vzduchovodov k zariadeniu](topic:mep-connections).
- **Potrubia a vzduchovody voči konštrukcii.** {{ui:Kontrola kolízií}} má hotové sady a {{ui:Potrubie a VZT potrubie × konštrukcia}} jedným kliknutím; {{ui:Skontrolovať odstupy}} používa izoláciu každého úseku plus medzeru, ktorú napíšete; {{ui:Potrebné otvory}} vypíše miesta, kde úseky prechádzajú stenami a stropmi, ako problémy v CSV a BCF. Nič sa nevyreže. Pozri [Kontrola potrubí a vzduchovodov voči konštrukcii](topic:mep-against-structure).
- **Oceľové montážne celky potrubia.** Oceľový úsek sa rozreže na očíslované montážne celky pri najdlhšej dĺžke a na {{ui:Zvar na stavbe}}, ktoré umiestnite; {{ui:Listy montážnych celkov (PDF)}} dá stranu na každý celok s jeho izometrickým pohľadom, dĺžkami rezov, tvarovkami, zváranými spojmi a kusovníkom, a {{ui:Zoznam rezov VZT potrubia}} vypíše rovné kusy vzduchovodu. Pozri [Oceľové montážne celky potrubia a listy celkov](topic:pipe-spools).

Ide o pomôcky pre kreslenie a koordináciu, veľkosti určuje inžinier: žiadne prietoky, tlaky ani vyvažovanie.

### Prevádzka budovy

- **Dokumenty pre každý majetok.** Karta {{ui:Podklady}} prepojí návody, záruky, fotografie a výkresy s prvkom cez názov súboru vedľa IFC alebo webovú adresu; do IFC ide len odkaz. Pozri [Dokumenty](topic:assets-and-maintenance#documents).
- **Tabuľka COBie.** {{ui:Uložiť ako COBie (.xlsx)}} zapíše odovzdávací zošit COBie 2.4 a zošit COBie načítaný späť vypíše každú zmenu pred jedným {{ui:Použiť}}. Ešte neprešiel validátorom COBie. Pozri [Tabuľka COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Odčítania senzorov a živé dáta.** Otvorte CSV s odčítaniami, alebo sa {{ui:Pripojiť}} priamo z prehliadača k vášmu vlastnému brokeru MQTT alebo k adrese, ktorú odpovedá váš riadiaci systém budovy: každý majetok zobrazí posledné odčítanie a graf, je zafarbený na modeli a označený, keď je mimo limitov uložených v IFC. Odčítania zostávajú na karte; heslá sa nikdy neukladajú. Pozri [Odčítania senzorov](topic:assets-and-maintenance#sensor-readings) a [Živé odčítania](topic:assets-and-maintenance#live-readings).

### Denné svetlo a energia

- **Obloha a slnko pri každom okne.** Karta {{ui:Denné svetlo}} dá každému oknu jeho vertikálny komponent oblohy a uhol prekážky, sleduje slnko cez dátum pomocou {{ui:Slnko cez okná v určitý dátum}} a vypočíta {{ui:Činiteľ dennej osvetlenosti na sieti}} cez každú miestnosť, nakreslený na jej pôdoryse. Pozri [Vertikálny komponent oblohy každého okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Tepelné straty a chladiace záťaže.** {{ui:Tepelné straty a chladiace záťaže}} vypočíta tepelnú stratu každej miestnosti, jej vykurovanie za rok zo stupňových dní a jej špičku chladenia, z toho, čo ju ohraničuje v modeli, a z U-hodnoty každého prvku; U-hodnota zadaná tam sa zapíše do IFC. Pozri [Odhad tepelných strát a chladiacich záťaží](topic:heating-and-cooling-loads).

Obe sú pomôcky pri návrhu podľa publikovaných metód, nie výpočty na preukázanie súladu, a každý panel to hovorí.

### Skeny

- **Registrácia viacerých skenov.** {{ui:Registrácia skenov…}} (na štartovacom paneli alebo v {{ui:Zobraziť}}) umiestni skeny do jedného rámca podľa vybraných dvojíc bodov alebo napísaných cieľov, spresní ich metódou ICP bod k bodu a potom bod k rovine, uloží registráciu ako malý súbor projektu a zapíše zaregistrovaný mrak ako jeden súbor LAS alebo E57. Pozri [Registrácia viacerých skenov do jedného](topic:register-scans).

### Obrázky a živý pohľad

- **Živý pohľad.** {{ui:Živý pohľad}} na paneli nástrojov zobrazí model v reálnom vzhľade vedľa 3D pohľadu, sleduje ho a každú zmenu, s Prechádzkou, časom dňa a mesiacom; {{ui:Živý pohľad v novom okne}} ho umiestni na druhú obrazovku. Pozri [Živý pohľad](topic:live-view).
- **Path tracing na grafickej karte.** S WebGPU {{ui:Vykresliť}} › {{ui:Vysoká kvalita (path tracing)}} spustí vlastný path tracer CadCraft na grafickej karte, dá sa zastaviť a {{ui:Pokračovať}}, a na konci sa odšumí; bez WebGPU použije WebGL path tracer ako predtým. Pozri [Vysoká kvalita](topic:render#high-quality).
- **Viac v dialógu Vykresliť** (na grafickej karte, takže potrebuje WebGPU): fyzikálna obloha a obrázky oblohy, svetelné profily IES, kamera s clonovým číslom, hĺbkou ostrosti, dvojbodovou perspektívou, vyvážením bielej a 360° panorámami, úprava hotového obrázka, miešanie svetiel a prvky vykreslenia po vykreslení, hmla, dym a kaustiky, uloženie ako 16-bitový PNG, EXR alebo súbor vykreslenia, a rad vykreslení. Pozri [Oblohy a svetelné profily na grafickej karte](topic:render#skies-and-light-profiles-on-the-graphics-card) a [Rad vykreslení](topic:render#the-render-queue).
- **Váš počítač.** {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Vykresľovanie}} › {{ui:Váš počítač}} zobrazí grafiku, jadrá procesora a pamäť, ktoré táto prehliadač dovoľuje aplikácii použiť, a úroveň, od ktorej sa vykresľovanie spúšťa. Pozri [S čím váš počítač vykresľuje](topic:your-machine).

### Súbory a ďalšie aplikácie

- **Otvorenie súborov STEP.** Súbor `.step` alebo `.stp` s časťou, zariadením alebo modelom dodávateľa (AP203, AP214, AP242) sa otvorí ako malý model IFC, každé teleso ako prvok, ktorý môžete skúmať, rezať, merať a uložiť ako IFC. Farby a názvy častí zostavy sa zatiaľ nečítajú. Pozri [Súbory, ktoré BimCraft otvára a ukladá](topic:files#what-it-opens).
- **Export do USD.** {{ui:USD}} na paneli nástrojov zapíše otvorené modely ako `.usda`, `.usdc` alebo `.usdz`, usporiadané podľa lokality, budovy, podlažia a disciplíny, s triedou IFC, GlobalId a vlastnosťami každého prvku. Pozri [Export modelu do USD](topic:usd).
- **Hmota z CivilCraft.** Hmota budovy poslaná z pohľadu lokality v CivilCraft zobrazí svoje štúdijné čísla vo Vlastnostiach a {{ui:Rozpracovať túto hmotu}} postaví steny na každej úrovni a podlahu z nej v jednom kroku späť. Pozri [Rozpracovanie hmoty budovy zo štúdie lokality](topic:develop-a-mass).
- **Položky knižnice s variantmi.** Položka, ktorá prichádza v niekoľkých variantoch, má výber {{ui:Variant}} na karte {{ui:Knižnica}}; umiestnený prvok si v IFC zachová svoj variant, {{ui:Vymeniť položku…}} vypíše ostatné varianty a kópie a aktualizácie ho zachovajú. Pozri [Umiestnenie a výmena položky knižnice s variantmi](topic:library-variants).
- **Balíky projektov v priečinku.** {{ui:Otvoriť priečinok}} vypíše súbory `.ccbundle.zip` pod {{ui:Balíky projektu}} a každé rozloženie v balíku má **Otvoriť v …**: PDF do MarkupCraft, DWG do CadCraft, v novej karte. Pozri [Otvorenie rozloženia](topic:open-project-bundle#open-a-layout).

### Asistenti a doplnky

- **Viac pre asistentov AI.** Asistent môže teraz premenovať prvky a nastaviť hodnoty vlastností, presúvať a mazať prvky, meniť steny, dvere a okná, exportovať USD a vykresliť obrázok alebo spustiť rad vykreslení; každá zmena je jeden krok späť. Pozri [Nechajte asistenta AI pracovať s vaším modelom](topic:assistants).
- **Doplnky môžu stavať v modeli.** API doplnkov 1.1 umožňuje doplnku urobiť zmenu v modeli ako jeden krok späť (prenáša sa v Live TeamWork), čítať model a čítať úseky potrubia a vzduchovodov, prípojky, zariadenia a montážne celky.
- **Doplnok Plant** (vypnutý, kým ho nezapnete v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Doplnky}}): kontroly špecifikácií potrubia voči úsekom, izometrické výkresy úseku ako SVG a DXF s kusovníkom, všeobecné procesné zariadenia s hrdlami umiestnenými v modeli, smerovač medzi dvoma prípojkami a kontrola rozloženia prevádzky. Pomôcka pre kreslenie, nie schválenie inžinierom; jeho texty sú len v angličtine.

## Zmenené

- **Prvý dom na notebooku.** Na obrazovke veľkosti notebooku sa BimCraft spustí len s pôdorysom, lišta Kreslenie je úzky panel s pôdorysom vedľa neho, pôdorys a 3D pohľad sa vrátia do zobrazenia, keď ich kresba opustí, 3D pohľad zarámuje celý dom v úzkom paneli a dvere a okná sa vyberajú pred kótami.
- **Uloženie obrázka.** **Uložiť PNG** v dialógu Vykresliť je teraz {{ui:Uložiť}}, vedľa neho {{ui:Uložiť ako}} pre ostatné formáty. Pozri [Uloženie obrázka](topic:render#save-the-picture).
- **Karta Analýza** má blok {{ui:Kontroly návrhu}}: vytvára kombinácie zaťažení podľa ASCE 7 alebo EN 1990 pre vaše prípady a kontroluje každý valcovaný oceľový I-profil (W, S, IPE, HEA alebo HEB podľa názvu profilu a veľkosti) podľa AISC 360 alebo EN 1993-1-1 a ukazuje, koľko z jeho únosnosti využíva. Pomôcka, kým ju neprekontroluje inžinier; zvárané tvary a iné prierezy hlásia „nekontrolované“. Pozri [Kontroly návrhu](topic:frame-analysis#design-checks).

## Opravené

- Opakovanie (znova) po kroku, ktorý vytvoril novú veľkosť rodiny, zlyhalo („žiadna veľkosť“). Každý krok teraz pri znovuopakovaní vytvorí rovnaké IFC GlobalId, takže znova funguje pre rodiny a každú inú zmenu.
- Keď dvaja ľudia uložili tú istú rodinu (v relácii Live TeamWork alebo v dvoch oknách), druhé uloženie potichu prepísalo zmenu prvého. Teraz odmietne uložiť a povie, ako vidieť ich zmenu a znova urobiť vašu.
- Model v amerických geodetických stopách sa čítal ako 0.3048 m na stopu namiesto 0.3048006096 m, čo posúvalo každý georeferencovaný IFC v amerických stopách na mape.
- Editor rodín: zatvorenie už neprenesie klávesový fokus na stránku, jeho Uložiť zostáva viditeľné na telefóne a jeho polia už nespôsobujú, že telefón priblíži.

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami, ktoré dávajú definície jednotiek (americká geodetická stopa je vlastná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a vypadnú zo zoznamov; označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy zachová svoju jednotku. V BimCraft zoznam {{ui:Jednotky}} na paneli nástrojov nasleduje prepínače, hviezdička nastavuje zobrazované jednotky, kým ich nevyberiete na paneli nástrojov (váš skorší výber sa zachová), a polia dĺžky v nástrojoch kreslenia prijímajú značku ľubovoľnej jednotky, napríklad `3.5 m` alebo `10 US ft`. Pozri [Jednotky, písané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú schovať.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si zachovajú veľké tlačidlá). Každý bočný panel má štíhly pruh nadpisu: potiahnite ho, aby sa panel ukotvil alebo odplával, pustite ho na pruh iného panela, aby sa zdieľal jeden rámec ako karty, pripnite ho, aby sa zasunul k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógy sa dajú presúvať.** Potiahnite dialóg za pruh nadpisu mimo kresby; vráti sa tam, kde ste ho nechali. Dvojklikom na pruh nadpisu ho znova vycentrujete. Pozri [Presun dialógu](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov AI.** Desať prepracovaných požiadaviek pre váš vlastný asistent (upratať výkres, vytlačiť sadu, skontrolovať výkresy, položiť otázky o modeli, spočítať výkaz výmer, vyskúšať variant dielu…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá zopakovaná našimi testami. Aplikácie neobsahujú AI. Pozri [Recepty pre asistentov AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz všetky slová aplikácií ako koncepty, ktoré ešte nečítal rodený hovorca. Témy pomocníka sú v angličtine, niektoré v španielčine.
- **CadCraft Studio** hovorí, prečo kontrola aktualizácie zlyhala (zatiaľ žiadny súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len „Hotovo“, a neprinesie späť kartu Čo je nové, ktorú ste zavreli, kým nebude novšie vydanie.

## Ešte nie je v tejto verzii

- **0.7 nie je podpísaný kódom.** Podpisovanie a balík Microsoft Store sa presunuli do 0.8, lebo overenie certifikátu ešte neprišlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť napriek tomu}}. Na Macu prvýkrát kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvorené}}. CadCraft Studio ešte nie je v obchode s aplikáciami a zatiaľ neexistuje zostava pre iPad ani iPhone.
- Zoznamy uhla a sklonu v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadne pole nečíta.
- Sledovanie ciest na grafickej karte, dodatočné funkcie v dialógu Vykresliť a rad vykreslení potrebujú WebGPU (bez neho vysoká kvalita používa WebGL path tracer); živý pohľad používa WebGPU, ak ho prehliadač má, inak WebGL 2. Boli tu otestované len na softvérovej náhrade grafickej karty, zatiaľ nie na skutočných grafických kartách. Živý pohľad v BimCraft nemá rozptyl ani zdieľanie (ModelCraft ich má).
- Vykreslenie nahratej prechádzky ako video nie je v BimCraft zabudované.
- Kontroly návrhu: profil I, ktorého názov IFC nie je veľkosťou W, S, IPE, HEA alebo HEB (alebo ktorého veľkosť sa od nej líši), sa berie ako zváraný a vráti sa ako „nekontrolované“, rovnako ako rúrky, uhly, U-profily, štíhle prvky a krútenie. Žiaden inžinier zatiaľ kontroly neprekontroloval.
- Nakreslené prvky sa nedajú kopírovať jeden po druhom, otáčať, zrkadliť ani rozmnožovať do radu (kopírovať sa dá celá úroveň). Nie je tu rozdelenie steny, nástroj Text ani záclonová stena. Stena, ktorá na vyššej úrovni stretáva stenu z nižšej úrovne, sa nerozreže do 3D telesa tej steny a rozpisy uvádzajú otvor na vyššej úrovni pod úrovňou jeho steny.
- Knižnica rodín zdieľaná medzi projektmi nie je hotová. Rodiny a kopírované úrovne ešte neboli otvorené v iných BIM programoch.
- MEP: zariadenia sú všeobecné (bez údajov výrobcov); T-kusy a redukcie na oceľových montážnych celkoch sú všeobecné, nie z tabuľky ASME B16.9; prípojky položiek knižnice umiestnených z karty {{ui:Knižnica}} sa nezapisujú do IFC; nič neprekontroloval inžinier.
- Doplnok Plant zatiaľ nevie nakresliť vedenú trasu do modelu, očíslovať montážne celky na svojich izometriách ani skontrolovať rozloženie zariadení umiestnených z knižnice.
- Rastliny z knižnice rastlín CivilCraft sa zatiaľ nedajú umiestniť z karty {{ui:Knižnica}} v BimCraft.
- Energia: žiadna hodinová simulácia, žiadna metóda ISO 52016-1 a žiadne klimatické súbory. Podklady: žiadny hostovaný digitálny dvojník, ktorý by uchovával odčítania alebo posielal upozornenia, keď je BimCraft zatvorený.
- Registrácia skenov bola vyskúšaná na skúšobných skenoch, zatiaľ nie na reálnej sade skenov zo skenera; súbory E57 sa stále otvoria až do 6 miliónov bodov a 512 MB.
- Balíky projektov sa otvárajú len v BimCraft (ostatné aplikácie prijmú rozloženie cez **Otvoriť v …**), a balíky aj dvojprogramová sada boli testované na náhradách, zatiaľ nie s Archicad ani Revit samotnými.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet).
