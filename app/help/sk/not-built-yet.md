---
title: Čo ešte nie je hotové
summary: Čo táto zostava BimCraft zatiaľ nerobí a čo na to použiť dnes.
keywords: chýbajúce, obmedzenia, limity, nepodporované, plán rozvoja, tvorba, modelovanie, rezy, meranie, kolízia, BCF, cloud, počítač, export
from: 87777dcc
---

BimCraft je dnes čítačka, kontrolór a editor dát IFC, ktorý začal kresliť budovy: steny, dvere a okná, miestnosti, podlahy, stropy a strechy (pozri [Kreslenie stien](topic:draw-walls), [Dvere a okná](topic:doors-and-windows) a [Miestnosti, podlahy, stropy a strechy](topic:floors-and-roofs)). Toto je úprimný zoznam toho, čo ešte nerobí, s tým, čo použiť namiesto toho.

## Modelovanie a tvorba

| Ešte nie | Namiesto toho dnes |
|---|---|
| Kreslenie trámov; stĺpy z oceľových profilov | Použite svoj tvorivý program a potom tu otvorte jeho export IFC. Obdĺžnikové a okrúhle stĺpy sa tu umiestňujú (pozri [Osi a stĺpy](topic:grids-and-columns)); priame, L, U, točité a špirálové schodištia a zábradlia sa tu kreslia (pozri [Schodištia a zábradlia](topic:stairs-and-railings)) |
| Okno v čele strešného vikiera; vikiere na strešných rovinách kreslené rukou; zakrivené strechy; textúra vykreslenej strešnej krytiny | Strešné roviny kreslené podľa rohov a sklon pre každú stenu: pozri [Strechy: sklon pre každú stenu, štíty, pulty a strešné roviny](topic:roofs) |
| Úprava stien, dverí alebo okien, ktoré vytvoril iný program | Váš tvorivý program; kresliace nástroje menia iba to, čo nakreslili |
| Profily stien s previsnutiami alebo dierami; otvory v stenách, ktoré nie sú obdĺžnikové; pridávanie alebo odoberanie bodov profilu steny v 3D pohľade | Profil, pripojenie, sklon a otvory fungujú vo Vlastnostiach, v pohľadoch a rezoch, na pohľade na čelo steny a úchytmi v 3D, pre priame aj zakrivené steny: pozri [Tvar steny: pripojenie, profil, sklon a otvory](topic:wall-shape) |
| Na zakrivených stenách: {{ui:Orezať / predĺžiť}} a {{ui:Roh}}, rámovanie, automatické kóty pôdorysu, prichytávanie pozdĺž oblúka (prichytáva sa ku koncom a stredu oblúka) | Na tieto účely kreslite stenu rovnú alebo použite rovné úseky. Zakrivené steny sú v [Kreslenie stien](topic:draw-walls) |
| Presúvanie umiestnenej položky knižnice v 3D pohľade | Presuňte ju v pôdoryse alebo zadajte X, Y a Otočenie v {{ui:Vlastnosti}}: pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library) |
| Umiestňovanie rastlín z knižnice rastlín pracovného priestoru Landscape v CivilCraft | Vysaďte ich v CivilCraft alebo umiestnite stromy a kry z okolia knižnice: pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library) |
| V doplnku Plant (vypnutý, kým ho nezapnete): kreslenie trasovaného úseku do modelu, čísla zvitkov na jeho izometriách, kontrola rozloženia zariadení umiestnených z knižnice | Úsek nakreslite nástrojom {{ui:Potrubie}} (pozri [Potrubia a vzduchotechnické potrubie](topic:pipes-and-ducts)); kontrola rozloženia číta vlastnú tabuľku zariadení doplnku |
| Otáčanie, zrkadlenie alebo usporiadanie jednotlivých nakreslených stien, dverí a okien (steny sa presúvajú a kopírujú nástrojmi Presunúť, {{ui:Odsadenie}} a natiahnutie škatuľou: pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a uzamknutie](topic:wall-tools)); štýl spojenia (na tupo, do pravého uhla) v rohoch so zakrivenou stenou alebo s tromi stenami a viac (pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a uzamknutie](topic:wall-tools)); nástroj Text; záclonové steny | Skopírujte všetko na úrovni pomocou {{ui:Kopírovať túto úroveň…}} (pozri [Kreslenie stien](topic:draw-walls#levels)); inak ich nakreslite znova |
| Vrstvy skladby steny kreslené v pôdoryse a v reze; kóty v rezoch a pohľadoch; referenčné kóty k dverám, oknám a ďalším komponentom; skladby a membrány v tabuľkách a množstvách; knižnica materiálov zdieľaná medzi projektmi; priorita vrstiev v rezoch, pohľadoch a 3D a v uzloch troch stien a viac (v pôdoryse sa rohy, T-spoje a križovania dvoch stien čistia podľa priority vrstiev: pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a uzamknutie](topic:wall-tools)); obalené alebo premenlivé vrstvy; úprava skladby steny, ktorú vytvoril iný program | Vrstvy sú v type steny a jej náhľade ({{ui:Skladby stien…}}); steny sa merajú ako jeden obal: pozri [Skladby stien a referenčné kóty](topic:wall-assemblies) |
| Zmena tvaru alebo veľkosti prvku (okrem stien, dverí a okien nakreslených tu a prvkov umiestnených z rodiny) | Váš tvorivý program. Zmazanie, vystrihnutie, kopírovanie a prilepenie fungujú tu: pozri [Zmazanie, vystrihnutie, kopírovanie a prilepenie prvkov budovy](topic:edit-elements) |
| Zmazanie podlaží, priestorov, budov alebo pozemku | Zmažte prvky, ktoré sú v nich |
| Vkladanie prvkov budovy do iného modelu | Kopírujte a prilepujte v rámci jedného modelu; umiestnené položky knižnice sa prilepia do ľubovoľného modelu |
| Pridávanie nových vlastností alebo sád vlastností | Vyplňte tu existujúce hodnoty alebo pridajte parameter vo svojom tvorivom programe a exportujte znova |
| Úprava množstiev, zoznamov, enumerácií | Váš tvorivý program |
| Ukladanie projektových súborov iných programov | BimCraft ukladá IFC (a svoje vlastné súbory rodín: pozri [Rodiny a ich veľkosti](topic:families)) |
| Rodiny: knižnica rodín umiestňovaná z pôdorysu a zdieľaná medzi projektmi (Knižnica), aktívny bod presúvaný v 3D pohľade umiestneného prvku (presúvajú sa v náhľade editora rodín a v pôdoryse), úrovne detailu volené pre každý pohľad (jedna úroveň pre projekt; listy volia podľa mierky), rotačné teleso na zvislej rovine vnútri inej rodiny otočené o štvrtinu otáčky, vlastné značky dverí a okien v pôdoryse (kreslia sa podľa štartovacej rodiny) | Rodiny s typovanými parametrami, vzorcami, vlastnou značkou v pôdoryse, aktívnymi bodmi, opakovaniami, úrovňami detailu, rodinami v rodinách, veľkosťami z tabuľky a parametrami jednotlivých prvkov sa vytvárajú tu: pozri [Úprava rodiny](topic:family-editor) a [Rodiny a ich veľkosti](topic:families). Na začatie duplikujte rodinu |
| Úprava typov iných programov ako rodín; premena položky knižnice na rodinu | Typy iných programov sa vypíšu, zoskupia podľa odhadu a ich prvky sa vyberú. Položky knižnice sa umiestňujú tak, ako sú |
| Tvarovky, ventily a zariadenia výrobcov (kapacity, hmotnosti, rozmery pripojení výrobcov); dĺžky T-kusov a redukcií ASME B16.9 na oceľových zvitkoch; tlakové straty cez tvarovky, prietoky a vyregulovanie; sprinklery; káblové žľaby; dimenzovanie stúpačiek a odvetraní podľa jednotiek zariadení; ťahanie rohov úseku; vyrezávanie otvorov v stenách a doskách; uvoľnenie konca úseku pevne pripojeného na prípojku (okrem zmazania zariadenia); prípojky na položkách knižnice umiestnených z panela Knižnica; hmotnosti tvaroviek; švy, hrúbky plechu a spojky vzduchovodov | Úseky potrubí a vzduchovodov so všeobecnými štandardnými tvarovkami, systémami, pôdorysmi, tabuľkami a výkazom sa kreslia tu: pozri [Potrubia a vzduchotechnické potrubie](topic:pipes-and-ducts). Všeobecné zariadenia s prípojkami, pripojené úseky a kontrola pripojení: [Zariadenia MEP s prípojkami](topic:mep-equipment), [Pripojenie potrubí a vzduchovodov k zariadeniam](topic:mep-connections). Sady kolízií, odstupy a zoznam otvorov: [Kontrola potrubí a vzduchovodov voči konštrukcii](topic:mep-against-structure). Oceľové zvitky a listy, zoznam rezania vzduchovodov: [Oceľové zvitky potrubia a listy zvitkov](topic:pipe-spools). Položky výrobcov prineste z vášho programu MEP ako IFC |
| Kontroly normy návrhu zváraných I-profilov, I-profilov, ktorých profil IFC nie je pomenovaný ako valcovaný rozmer W, S, IPE, HEA alebo HEB, a trubiek, uholníkov a U-profilov (vracajú sa ako nekontrolované); vzpernosť alebo dynamická odozva (vlastné frekvencie sú v bloku Konečné prvky) (druhý rád je iba P-Delta: pružný, ohybový, bez zníženia tuhosti); steny a dosky v analýze; zaťaženia zadané z plôch (okrem jedného tlaku na každej betónovej doske) | Karta {{ui:Analýza}} dáva sily, reakcie a prehyby trámov, stĺpov a diagonál lineárnou analýzou prvého rádu a kontroluje valcované I-profily; je to pomôcka, kým ju neprekontroluje inžinier: pozri [Analýza rámovej konštrukcie](topic:frame-analysis#design-checks) |

## Prezeranie modelov

| Ešte nie | Namiesto toho dnes |
|---|---|
| 3D z projektových súborov | Exportujte IFC a otvorte ho. Pozri [Získanie projektového súboru v 3D cez IFC](topic:rvt-to-ifc) |
| Vnútorné pohľady vo vygenerovanej sade výkresov (z Vlastností miestnosti a na vašich listoch sa vytvárajú); vaše vlastné kóty na pohľadoch a rezoch (značky úrovní, výšky, šírka a značky dverí / okien sa kreslia; poznámky sa píšu v pohľade: pozri [Úprava v pohľadoch a rezoch](topic:edit-in-elevations)); kreslenie stien v pohľade (kreslia sa v rovine rezu); šablóny tímu cez Studio | Sada výkresov vytvorená z modelu: pozri [Pohľady, rezy a listy](topic:sheets). Pre ľubovoľný model IFC: jedna rovina {{ui:Rez}} alebo rezný box; pozri [Rez modelu IFC rovinou rezu](topic:section-plane) |
| Výnosové pohľady, detailné pohľady, kresliace pohľady a legendy; kresliarske čiary a šráfovanie kreslené v pohľade; orezanie pohľadu alebo rezu; šablóny pohľadov pre pohľady, rezy, stropné pôdorysy a 3D pohľady; stropné pôdorysy vo vygenerovanej sade výkresov; celá sada vašich listov v jednom PDF | Pôdorysy a stropné pôdorysy majú rozsahy pohľadov, oblasť orezania, mierku a podklad (pôdorysy aj šablóny), a vaše vlastné listy prijímajú pôdorysy, stropné pôdorysy, pohľady, rezy a tabuľky, každý uložený ako PDF: pozri [Pohľady, rozsahy pohľadov a vaše vlastné listy](topic:views-and-sheets) |
| Dodatočné presunutie umiestneného svetla ku stropu; šikmé alebo odsadené stropy; vzory stropov iné ako päť mriežok; vlastná značka svetla v stropnom pôdoryse | Umiestnite ho s **Montáž: Na strop**; stropný pôdorys nakreslí svietidlo podľa jeho vlastného tvaru: pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library) |
| Zdieľanie sád vyhľadávania s inými, sád vnútri súboru IFC | Sady zostávajú v tomto prehliadači; pozri [Vyhľadanie prvkov podľa triedy, názvu alebo vlastnosti](topic:find) |
| Meranie uhlov alebo pozdĺž cesty z viacerých bodov | Každú časť zmerajte nástrojom {{ui:Merať}}: pozri [Meranie vzdialeností, plôch čiel a polôh v 3D](topic:measure) |
| Textúry v živom 3D pohľade | Maľované materiály ukazujú svoju farbu v pohľade a svoju textúru vo vykreslených obrázkoch: pozri [Vykreslenie obrázka modelu](topic:render) |
| Kolízie odstupov (mäkké) medzi ľubovoľnými dvoma sadami, skupiny kolízií, ukladanie výsledkov kontroly kolízií | Spustite {{ui:Kontrola kolízií}} a z dôležitých vytvorte problémy: pozri [Kontrola kolízií](topic:clash-check). Potrubia a vzduchovody voči konštrukcii majú {{ui:Skontrolovať odstupy}}: pozri [Kontrola potrubí a vzduchovodov voči konštrukcii](topic:mep-against-structure) |
| Ukladanie viacerých modelov ako jednej sady alebo úprava dvoch modelov naraz | Upravujte jeden model naraz; každý ukladá vlastný súbor |
| Priraďovanie problémov, termínov, štítkov, viacerých pohľadov na problém, úprava problému | Jeden pohľad na problém; pozri [Problémy a súbory BCF](topic:issues-bcf) |
| `.ifczip` a `.ifcxml` | Rozbaľte alebo exportujte jednoduchý `.ifc` |
| Vrstvy mapy pre model bez prevodu mapy alebo vo výkresových pohľadoch | Exportujte model so súradnicami: pozri [Mapa na zemi pod modelom](topic:map-layers) |
| Skeny E57 nad 6 miliónov bodov alebo 512 MB; vlastné súbory výrobcov skenerov (RCP, RCS, FLS, LGS, TZF, ZFS); mračná bodov v 3D pohľade výkresu; ukladanie polohy mračna s modelom | Exportujte sken ako LAS alebo LAZ a otvorte ho vedľa modelu IFC: pozri [Formáty mračien bodov](topic:point-cloud-formats) a [Zobrazenie mračna bodov vedľa modelu](topic:point-clouds) |
| Registrácia skenov: samostatné hľadanie cieľov (gule, šachovnice) v skene, riešenie všetkých skenov naraz (vyrovnanie zväzku), mierka, registrácia voči modelu | Vyberte zodpovedajúce body alebo zadajte súradnice cieľov, potom spresnite jeden sken naraz metódou ICP: pozri [Registrácia viacerých skenov do jedného](topic:register-scans) |
| Otváranie projektových súborov `.pln`, `.pla`, `.tpl` a `.bpn` | Exportujte z nich IFC a DWG alebo projektový balík: pozri [Otvorenie súborov projektov .pln a .pla](topic:pln-project-files) a [Otvorenie projektového balíka](topic:open-project-bundle) |
| Otvorenie zoznamu {{ui:Prvky}} na výber podľa druhu | Kliknite na skupinu druhu v {{ui:Strom modelu}}: pozri [Orientácia v strome modelu](topic:model-tree) |
| Písanie komentára alebo názvu problému vo VR, hlasové poznámky, ručné presúvanie roviny rezu vo VR, rezný box vo VR | Umiestnite problém vo VR a potom pridajte jeho text na karte Problémy; rovinu rezu alebo box nastavte v 3D pohľade ešte pred vstupom: pozri [Revízia modelu v náhlavnej VR súprave](topic:vr-review) |
| Vidieť ľudí pri stole vo VR (zobrazujú sa iba ľudia vo VR), nahrávanie prechádzky vo VR | Požiadajte ich, aby sa pripojili vo VR, alebo sledujte v 3D pohľade |
| Simulácia denného svetla (denné svetlo podľa klímy, oslnenie, hodiny slnka), strešné okná v činiteli denného osvetlenia, kontroly voči BS EN 17037 alebo schémam zelených budov; energetická metóda ISO 52016-1, hodinová energetická simulácia, tepelná hmota a tepelné mostíky, klimatické súbory | Pomôcky pri návrhu: priemerný činiteľ denného osvetlenia, zvislá zložka oblohy každého okna, slnko cez okná v daný dátum a činiteľ denného osvetlenia na mriežke ([Odhad denného svetla v každej miestnosti](topic:daylight-factor)); tepelná strata, rok stupňových dní a špička chladenia na miestnosť ([Odhad záťaže na vykurovanie a chladenie](topic:heating-and-cooling-loads)). Na preukázanie súladu použite simulačný program |
| Hostované dvojča budovy: údaje uchovávané a upozornenia posielané e-mailom, keď je BimCraft zatvorený, e-maily o splatnej údržbe; MQTT 5; spätné čítanie úloh COBie | Údaje z meraní z CSV alebo priamo z vášho vlastného brokera alebo adresy, kým je model otvorený; limity, ktoré označujú majetok; dokumenty; COBie von a dnu: pozri [Uchovávanie údajov o majetku a záznamu údržby v modeli](topic:assets-and-maintenance) |
| Zásuvný modul alebo živé prepojenie pre Enscape, Twinmotion alebo iné vizualizačné programy; súbory FBX alebo Datasmith; jeden objekt na prvok, uložené pohľady a prechádzky v .glb | Uložte .glb pre vykresľovacie programy, ktoré čítajú glTF, súbor USD (jeden objekt na prvok, s jeho údajmi IFC: pozri [Export modelu do USD](topic:usd)), alebo IFC pre tie, ktoré bežia vnútri iného návrhového programu: pozri [Odoslanie modelu do vykresľovacieho programu](topic:model-for-rendering) a [Otvorenie scény v inom programe](topic:render-open-in) |
| Iný program kreslí obrázok Render bez doplnku vykresľovacieho jadra (CadCraft nikdy nespúšťa program pod licenciou GNU GPL); panoramatické alebo stereo kamery a obloha z obrázka cez iný program; zásuvný modul Unreal Engine (súbory sa zapisujú, zásuvný modul, ktorý ich otvorí, nie je vydaný) | Naše vlastné jadrá Fast a Path tracer; jadro doplnku ([nakreslite obrázok iným programom](topic:render-other-program)); súbor USD, glTF alebo priečinok Unreal zo zoznamu Engine, ktorý si môžete zobrať do ľubovoľného programu |
| V živom pohľade: rozmiestňovanie rastlín a skál, zdieľanie panorám, prehliadka, offline prehliadač alebo video | Živý pohľad v ModelCraft ich má; tu sú vykreslené obrázky a 360° panorámy: pozri [Živý pohľad](topic:live-view) a [Vykreslenie obrázka modelu](topic:render) |

## Výkresy

| Ešte nie | Namiesto toho dnes |
|---|---|
| Úprava, meranie alebo ukladanie DWG a DXF | Kresliaca aplikácia CadCraft ({{ui:Upraviť v CadCraft}} v 2D pohľade) |
| Tlač alebo export PDF | Tlačte z programu, ktorý výkres vytvoril; najprv to skontrolujte pomocou {{ui:Náhľad tlače}} |
| Štýly vykreslenia a tabuľky pier | {{ui:Náhľad tlače}} zobrazuje jednoliato čiernu s hrúbkami čiar |
| Súbory DWG staršie ako R13 a binárny DXF (BimCraft to oznámi, keď ho otvoríte) | Uložte výkres znova ako novší DWG alebo ako ASCII DXF |
| Výkresy prepojené vnútri prepojených výkresov | Otvorte ich priamo |
| Obrázky TIFF | Uložte kópiu PNG alebo JPEG s rovnakým názvom a pridajte ju |
| Výkresy DGN | Uvedené iba v prehľadoch priečinkov |
| Objekty uvedené pod **Ešte nie je nakreslené** | Pozrite si výkres v programe, ktorý ho vytvoril |
| Telesá ACIS, telesá, oblasti a plochy a delené siete v 3D | Exportujte IFC alebo 3D plochy z programu, ktorý výkres vytvoril |
| Obrázky, viacnásobné vynášacie čiary a listy v 3D pohľade výkresu | Pozrite si ich na karte {{ui:Model}} a na listoch |
| Výber objektov v 2D pohľade výkresu | Prepnite na {{ui:3D}} a kliknite tam na objekt: pozri [Pozrite si výkres DWG alebo DXF v 3D](topic:dwg-in-3d) |
| Tabuľky zariadení z výkresov bez značiek `KCL-ITEM` | Nie je k dispozícii |
| Tabuľka zariadení ako XLSX alebo PDF | {{ui:Stiahnuť CSV}} a otvorte ho v tabuľkovom procesore |

## Súbory a platformy

| Ešte nie | Namiesto toho dnes |
|---|---|
| Ukladanie do cloudu | Ukladajte kópie do svojho počítača alebo kancelárskeho servera. Ukladanie do cloudu zatiaľ nie je k dispozícii |
| Pamätanie priečinkov vo Firefoxe a Safari | Vyberte priečinok znova alebo ho presuňte |
| Vrátenie späť po uložení | Otvorte pôvodný súbor znova a začnite odznova |
| Doplnenie chýbajúcej časti useknutého projektového súboru | Skopírujte pôvodný znova; v priečinku BimCraft číta najnovšiu úplnú zálohu |
| Znovuotvorenie súborov, ktoré ste mali otvorené | Neuložené zmeny sa ponúknu späť ako "Obnoviť prácu?", keď sa vrátite; otvorte súbory znova zo zoznamu nedávnych |
