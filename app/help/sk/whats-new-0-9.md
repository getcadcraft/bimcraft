---
title: Novinky vo verzii 0.9 (staršie)
summary: Tvary múrov, rozdelenie, odsadenie, natiahnutie a zamknutie na osi, úrovne pod zemou, kóty osí a meranie v pôdoryse, duplikované pohľady s pracovnými štýlmi a tabuľkami pier, Hlásiť ako, export Collada a Google Earth, Scan do BIM, analýza vetra a seizmicity a doplnky tlače živicou.
keywords: whats new 0.9, staršia verzia, novinky, 0.9, poznámky k vydaniu, tvary múrov, obdĺžnik, mnohouholník, oblúk, výber čiar, obkresliť obrys, odsadenie, spojiť, natiahnutie rámčekom, zarovnať a zamknúť, rozdeliť múr, medzera, znova spojiť, zamknúť na os, narastať od, merať od, pridať úroveň nižšie, suterén, príkaz úroveň, kóty osí, meranie v pôdoryse, pracovný štýl, duplikovať pohľad, vlastná kópia, prepojený pohľad, tabuľka pier, tlačiť ako zobrazené, hlásiť ako, zadať mierku, importovať svg, umiestniť do pôdorysu, umiestniť do modelu, collada, dae, kmz, google earth, scan do bim, zaťaženie vetrom, seizmika, konečné prvky, panel dokumentov, tlač živicou, novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, evakuácia, ľudia, fronty, akustika, dozvuk, impulzová odozva, povodeň, vietor, zemetrasenie, nebezpečenstvo, životný cyklus, životnosť, ids, značky, tabuľky, presunúť, zarovnať, rozmiestniť, obrázok, podklad, sken na múry, lokalita z civilcraft, výkresy panelov, konštrukcia, slnko, fotovoltika, pv, rozdeliť, vrf, fan coil, dimenzovanie potrubia, kábelový žľab, osvetlenie, betón, seizmika, porovnať sken, epsg, zobrazenie, dokumenty, šablóna, uhlík, náklady, energyplus, vykresľovací modul, otvoriť v, usd, glb, unreal, späť, doplnky, pcf, symboly, rastliny, obkresliť, perá, pás s nástrojmi, prehliadač projektu, rozloženie
from: 816df7f8
---

Toto sa zmenilo v BimCraft 0.9 oproti 0.8.1. Dve hlavné témy sú skutočný nástroj na múry a pohľady, ktoré sa správajú tak, ako ľudia z veľkých BIM programov očakávajú. Okolo nich pribudnú export Collada, asistenti, ktorí dokážu umiestniť elektrické zariadenia, Scan do BIM a analýza vetra, seizmicity a konečných prvkov na karte {{ui:Analýza}}.

## Nové

### Múry

- **Kreslenie celých tvarov.** V {{ui:Kresliť}} otvorte {{ui:Tvary}} (alebo vyberte tvar v zozname Tvar v riadku Múr) pre obdĺžnik, pootočený obdĺžnik, mnohouholník s 3 až 64 stranami, oblúk podľa stredu, dotyčnicový oblúk, múry na vybraných čiarach alebo múry okolo uzavretej plochy, na ktorú kliknete vnútri. Obdĺžnik je štyri múry so štyrmi spojenými rohmi a jedným krokom späť. Pozrite si [Tvary múrov, rozdelenie, odsadenie, natiahnutie a zamknutie](topic:wall-tools).
- **Nastavte pred kreslením, zmeňte potom.** Riadok Múr má {{ui:Odsadenie}} a {{ui:Spojenie}} (odškrtnite, ak chcete kresliť voľne stojace múry). Potom použite {{ui:Odsadenie}}, {{ui:Natiahnutie rámčekom}} a {{ui:Zarovnať a zamknúť}} na nakreslených múroch. Presunutý alebo natiahnutý múr si zachová svoje dvere, okná a kóty. Každá operácia je jeden krok späť.
- **Rezanie múrov.** {{ui:Rozdeliť}}, {{ui:Medzera}}, {{ui:Voľné konce}}, {{ui:Zmazať úsek}} a {{ui:Znova spojiť}} rozrežú múr na kliknutie alebo tam, kde ho pretína iný múr. Rez cez dvere sa odmietne. Pozrite si [Tvary múrov, rozdelenie, odsadenie, natiahnutie a zamknutie](topic:wall-tools).
- **Zamknutie múrov na osi.** Vyberte múr pozdĺž osi a zaškrtnite {{ui:Zamknúť na os}} v paneli {{ui:Vlastnosti}}. Pri zapnutom nástroji Os zadajte vzdialenosť do {{ui:Posunúť o}} pre vybranú čiaru a zamknuté múry nasledujú v jednom kroku späť.
- **Tvar jedného múra.** V paneli {{ui:Vlastnosti}} jedného múra môžete pripojiť jeho hornú alebo spodnú hranu k streche, podlahe alebo stropu, upraviť jeho obrys v pohľade, naklopiť ho alebo vyrezať otvor v múre bez dverí alebo okien. Pozrite si [Tvar múra](topic:wall-shape).
- **Dĺžka ukazuje, ktorý koniec ostane.** {{ui:Narastať od}} nastaví, či pri zmene dĺžky ostane na mieste začiatok, koniec alebo stred.
- **Dĺžka a kóta v pôdoryse sa zhodujú.** {{ui:Merať od}} (osová čiara, vnútorný líc alebo vonkajší líc) ovplyvňuje políčko Dĺžka aj kóty múrov v pôdoryse. Začína od osovej čiary, takže kóty múrov v pôdoryse teraz udávajú osovú čiaru tam, kde predtým udávali vonkajší líc. Zmeňte ho v riadku Múr, v paneli {{ui:Vlastnosti}} alebo cez {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Múry}}.

### Úrovne, osi a meranie

- **Pridanie úrovne nižšie.** {{ui:Pridať úroveň nižšie}} v paneli {{ui:Úrovne}} pridá úroveň pod najnižšiu, rovnako vysokú, na zápornej kóte (Úroveň -1, Úroveň -2). Nič iné sa nepohne. {{ui:Pridať úrovne…}} teraz prijme záporné výšky. Napísanie LEVEL, LEVELS, STOREY alebo STOREYS na príkazovom riadku otvorí {{ui:Pridať úrovne…}} a v ponukách a pásoch s nástrojmi je tlačidlo {{ui:Úrovne}}. Pozrite si [Pozemky, budovy a úrovne](topic:site-building-and-levels).
- **Kóty osí v pôdoryse.** Pri zapnutom nástroji {{ui:Os}} zaškrtnite {{ui:Kóty}}, aby sa v pôdoryse každej úrovne kreslili rozostupy medzi susednými čiarami a celková veľkosť za značkami. Pozrite si [Okótovanie osi](topic:grid-dimensions).
- **Meranie v pôdoryse.** {{ui:Merať}} v skupine {{ui:Kresliť}} udá vzdialenosť s rozdielmi X a Y medzi dvoma kliknutiami. Do modelu sa nič neukladá. Pozrite si [Meranie v pôdoryse](topic:measure-on-the-plan).
- **Zmena viacerých stĺpcov naraz.** Vyberte stĺpce spolu s múrom a výber vypíše každý druh s {{ui:Zachovať len tieto}}. Jedným kliknutím sa stĺpce zachovajú a zobrazia sa ich spoločné polia.
- **Jedna zobrazovacia jednotka všade.** Súradnice, merania, rezy, mierky listov, zaťaženia a výsledky rámovej analýzy a text Problémov nasledujú jednotku, ktorú vyberiete. Exporty zostávajú v SI.

### Pohľady, listy a tlač

- **Pracovný štýl.** {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Pracovný štýl}} určí, či každý pohľad má vlastné anotácie a tabuľky pier, alebo ich zdieľa. Pozrite si [Pracovný štýl, duplikované pohľady, perá na papieri, Hlásiť ako a šablóny](topic:working-style).
- **Duplikovanie pohľadu.** Pôdorysy, pôdorysy stropov, výnosky, pohľady a rezy možno duplikovať ako {{ui:Vlastná kópia}} alebo {{ui:Prepojené}}; {{ui:Vytvoriť vlastnú kópiu}} urobí prepojený pohľad nezávislým. Pozrite si [Pracovný štýl, duplikované pohľady, perá na papieri, Hlásiť ako a šablóny](topic:working-style).
- **Tlač tak, ako sa zobrazuje, alebo cez tabuľku pier.** Prepísania pier sa uchovávajú v IFC spolu s pohľadom a listy a PDF ich kreslia tak, ako ich zobrazuje obrazovka. Rovnaká téma pokrýva tabuľky pier.
- **Hlásiť ako.** {{ui:Hlásiť ako}} v paneli {{ui:Vlastnosti}} zapíše dosku nakreslenú ako cestu, múr ako panel alebo strechu ako rampu do IFC ako triedu, ktorú vyberiete, a tak ich počíta v tabuľkách, výkazoch množstiev, Hľadať, Farba podľa a Problémoch.
- **Úprava v pohľadoch a rezoch.** Kreslite a posúvajte múry, otvory, úrovne, kóty a poznámky priamo v pohľade alebo reze, s vlastnými formátmi listov a popisovými poliami. Pozrite si [Úprava v pohľadoch a rezoch](topic:edit-in-elevations).
- **Listy.** Každý list môže byť na šírku alebo na výšku. Vedľa zoznamu mierok na každom umiestnenom pohľade je pole {{ui:Zadajte mierku}} (1:64, 2:1, 1/4" = 1'). Umiestnený výkres môžete potiahnuť alebo posunúť klávesmi so šípkami a {{ui:Formáty…}} › {{ui:Importovať SVG…}} premení váš vlastný návrh listu na popisové pole s poľami zadávanými pre každý list.
- **Uvedenie autorov z knižnice na liste.** Sada výkresov s položkami knižnice dostane tabuľku uvedenia autorov z knižnice, ktorú môžete umiestniť na ľubovoľný list. Pozrite si [Uvedenie autorov z knižnice](topic:library-credits).

### Knižnica: umiestňovanie

- **Umiestnenie podľa pohľadu.** V zobrazení {{ui:Pôdorys}} knižnica ukazuje {{ui:Umiestniť do pôdorysu}}; v {{ui:3D}} ukazuje {{ui:Umiestniť do modelu}}; v zobrazení {{ui:Rozdeliť}} ukazuje rozdelené tlačidlo s {{ui:Umiestniť do pôdorysu}} ako hlavnou akciou. Oba spôsoby zapíšu rovnaký IFC prvok. Kartu knižnice môžete aj potiahnuť na pôdorys alebo do 3D pohľadu; perom alebo prstom stlačte a podržte, potom potiahnite. Pozrite si [Umiestnenie z knižnice](topic:place-from-library).

### Súbory a asistenti

- **Collada a Google Earth.** {{ui:Collada}} na paneli nástrojov (v ponuke {{ui:Súbor}} v štýloch s ponukami) zapíše .dae alebo .kmz umiestnený tam, kde je model na mape. Pozrite si [Export modelu ako Collada alebo pre Google Earth](topic:collada).
- **Asistenti môžu umiestňovať elektrické zariadenia.** Váš pripojený asistent má nové nástroje na pridanie, vypísanie, zmenu a zmazanie zariadení a na nastavenie svetiel. Asistenti zostávajú vypnutí, kým ich nezapnete v nastaveniach. Pozrite si [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
- **Scan do BIM (doplnok).** Predvolene vypnutý a vyžaduje doplnok Mračná bodov. Z skenu navrhuje podlahy, múry, dvere a okná s nameranou odchýlkou pre každý; prijatie je jeden krok späť.

### Analýza

- **Údaje o lokalite pre vietor a seizmicitu.** Na karte {{ui:Analýza}}: zaťaženia vetrom podľa ASCE 7-10 alebo 7-16 pre tuhú uzavretú budovu so silou na každom podlaží ako zaťažovacími prípadmi a údaje o seizmickej lokalite s vyhľadaním v USGS a návrhovým spektrom.
- **Nadväzujúca konštrukčná kontrola a konečné prvky.** Kontroly betónu podľa ACI 318-19, ekvivalentné horizontálne sily podľa ASCE 7-22, medzipodlažný posun, dosky a múry ako plošné prvky a kombinácie zaťažení podľa ASCE 7 a EN 1990. Náš vlastný modul konečných prvkov počíta škrupiny, štvorsteny a modálnu analýzu. Pozrite si [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic) a [Rámová analýza](topic:frame-analysis).

### Ďalšie doplnky a dokumenty

- **Interiérové osvetlenie (doplnok).** Umiestňuje svietidlá a zapisuje osvetlenie v luxoch ako čísla do pôdorysu každej úrovne, s odhadom oslnenia a tlačiteľnou správou.
- **Panel dokumentov.** {{ui:Súbor}} › {{ui:Dokumenty…}} má vybratie a vrátenie so zámkovým súborom, písmená revízií, stavy vydania a históriu.
- **Regióny a oceľ.** Južnoafrické balíky výkresov a stavebných predpisov v doplnku Predpisy a 976 britských rozmerov ocele v spoločnej tabuľke prierezov.
- **Bezplatné doplnky tlače živicou.** Slicer, podpery a podložka, test expozície a formáty súborov GOO, SL1, Chitubox a Anycubic, všetko predvolene vypnuté.

## Vo všetkých aplikáciách

- Podržanie kurzora nad tlačidlom alebo ovládacím prvkom zobrazí bublinovú nápovedu (tooltip).
- Úvodný tip na prázdnej ploche výkresu má tlačidlo zavrieť; BimCraft si zapamätá, že bol zavretý.
- Pruh kariet panela, ktorý sa nezmestí, sa teraz posúva namiesto toho, aby bol orezaný.
- Keď je otvorený dokument, karta prehliadača číta "<document> - BimCraft | CadCraft".
- V časti {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Rozloženie}} sú rozloženia rozbaľovacím zoznamom dvojriadkových možností.
- Zoznam jazykov v {{ui:Nastavenia}} ponúka viac jazykov než vo verzii 0.8; jazyky iné ako angličtina sú strojové koncepty.

## Opravené

- **Presun funguje na schodiskách** a na rampách, zábradliach, rovinách striech, voľne stojacich zariadeniach, obrázkoch a trasách.
- **Ťahanie múra už nezkosí miestnosť.** Stredový úchyt posúva múr rovnobežne so sebou samým a jeho rohy sa posúvajú po spojených múroch. Držte {{key:Mod}} pre starý voľný presun; {{ui:Zarovnať do pravého uhla}} vráti 90 stupňov.
- **Zmena hrúbky alebo typu v spojenom uzle** teraz udrží roh uzavretý pri L, T, uzle troch múrov a vedľa zakriveného múra.
- **Presun alebo kopírovanie skupiny miestností** zachová spojené múry mimo skupiny spojené.
- **Znova** zachová identitu kóty múra.
- **Výber múra pri vypnutom Kresliť** už v paneli Vlastnosti nevyvolá chybu.
- **Vykresľovanie sa prepne na WebGL**, keď sa GPU nemôže spustiť, namiesto zastavenia.
- **Kontrolu EnergyPlus možno znova zapnúť.**
- **Dokumenty sa otvárajú ako vycentrované dialógové okno.** {{key:Esc}}, krížik alebo kliknutie na stmavenú stránku ho zatvoria.
- **Tlačidlá {{ui:Pôdorys}}, {{ui:Rozdeliť}} a {{ui:3D}} sa zobrazia**, keď je otvorený model, nie až potom, čo sa raz zapne {{ui:Kresliť}}.

## Čestné obmedzenia

- Nič sa netlačilo na skutočnom hardvéri. Podpery z živice sú nové a nepreverené.
- Výsledky vetra, seizmicity, betónu a konečných prvkov sú kontrolné pomôcky pre inžiniera, overené proti uzavretým vzorcom, nie proti skutočnej budove.
- Scan do BIM sa testoval na syntetickej budove, nie na skutočnom skene, a nachádza len pravouhlé miestnosti.
- Collada tu nebola otvorená v Blenderi ani v Google Earth.
- Odhad osvetlenia je overený proti nášmu vlastnému obkresleniu, nie proti iným programom na osvetlenie.
- Južnoafrické čísla nie sú overené.
- Štýly spojov múrov (butt, mitre, square off) a priorita hladín ešte nie sú hotové; rohy sú zrezané do uhla.
- Jazyky iné ako angličtina sú strojové koncepty.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Staršie zmeny sú v poznámkach k verziám 0.8 a 0.8.1 nižšie na tejto stránke.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo v BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti 0.7. BimCraft teraz dokáže odpovedať na otázky o budove a overovať ju s ľuďmi, zvukom, vodou, vetrom a zemetraseniami a kresliť ju viacerými nástrojmi; 0.8.1 je opravné vydanie.

### Nové

**Overenie budovy**

- **Ľudia v budove.** Časť {{ui:Ľudia v budove}} ľavého panela prejde cez vaše miestnosti, dvere a schodištia evakuáciu alebo bežný deň príchodov. Vidíte rady tam, kde sa budova zužuje, najdlhšiu cestu k východu z každej miestnosti a ako dlho trvá posledný človek. Zaškrtnite {{ui:Zatvorené}} pri dverách, aby ste videli, čo sa zmení, a zaškrtnite {{ui:Zobraziť ľudí v pohľade 3D}}, aby ste sledovali chodcov. Zistenia idú do Problémov. Hrubý model davu pre návrhové rozhodnutia, nie certifikát požiarnej bezpečnosti. Pozrite si [Prechod ľudí budovou](topic:people-in-the-building).
- **Akustika miestností a jej vypočutie.** Časť {{ui:Akustika miestností}} udáva dobu dozvuku každej miestnosti podľa oktávových pásiem (Sabine a Eyring) z jej veľkosti a povrchových úprav, ktoré vyberiete, a s vlastným cieľom povie, aký útlm by ho splnil. {{ui:Prehrať v tejto miestnosti}} prehrá hlas, tlesknutie, trhané tóny alebo váš vlastný zvukový súbor cez impulznú odozvu vypočítanú pre miestnosť. Hodnoty útlmu sú typické publikované hodnoty, ktoré môžete nahradiť. Pozrite si [Akustika miestností](topic:room-acoustics).
- **Prehrávanie povodne, vetra a zemetrasenia.** {{ui:Prehrávanie rizika}} prehrá stúpanie vody cez miestnosti, tlak vetra na každé podlažie a zemetrasenie otriasajúce podlažiami, v pôdoryse alebo pohľade s časovým posúvačom. Jednoduché modely s ich predpokladmi na paneli; nie je to kontrola predpisov. Pozrite si [Prehrať povodeň, vietor alebo zemetrasenie](topic:hazard-playback).
- **Čo sa opotrebuje za päťdesiat rokov.** {{ui:Pohľad na životný cyklus}} vypíše okná, dvere, povrchové úpravy a strechu, každý s životnosťou, rokmi výmeny a, keď zadáte cenu za jednotku, náklady podľa rokov a ich súčasnú hodnotu. {{ui:Uložiť harmonogram (CSV)}} ju zapíše. Životnosti sú plánovacie údaje. Pozrite si [Čo sa opotrebuje počas päťdesiatich rokov](topic:life-cycle-view).
- **Kontroly betónu a seizmicity.** Bloky {{ui:Betónové prvky}} a {{ui:Seizmické zaťaženia}} na karte {{ui:Analýza}} kontrolujú betónové nosníky a stĺpy podľa ACI 318-19 a vytvárajú ekvivalentné horizontálne sily podľa ASCE 7-22 na tuhých podlažiach, s medzipodlažným posunom. Na kontrolu pre inžiniera. Pozrite si [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic).

**Kontrola a správy**

- **Kontrola podľa IDS.** Načítajte súbor `.ids`, ktorý vám dal klient, a pozrite si v Problémoch každý prvok, ktorý ho nespĺňa, skôr než odovzdáte IFC. Otvorte {{ui:Kontrola podľa IDS}} pod {{ui:Kontroly modelu}}. Pozrite si [Kontrola modelu podľa IDS klienta](topic:check-against-ids).
- **Značky a tabuľky.** Definujte vlastné značky, nastavte ich na mnohé prvky naraz a vytvorte tabuľky, ktorých stĺpce, filtre a skupiny ich čítajú; značky sa uchovávajú v IFC. Pozrite si [Značky a tabuľky](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} vyplní šablónu špecifikácie z otvoreného IFC a uloží ju ako PDF, dokument Word alebo Markdown. Pozrite si [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnanie skenu s modelom.** Pri otvorenom bodovom mračne {{ui:Porovnať}} posúdi každý prvok ako postavený, čiastočne postavený, chýbajúci alebo nedosiahnutý a ukáže percento postavenej časti. Pozrite si [Porovnanie skenu s modelom](topic:compare-scan-with-model).
- **Uhlík a náklady.** Panel Uhlík sčíta vtelený uhlík z tabuľky faktorov, ktorú môžete upraviť, a panel Náklady rozloží ceny na 4D harmonogram. Faktory, ktoré prichádzajú s BimCraft, sú všeobecné a označené ako neoverené. Pozrite si [Vtelený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Ľubovoľné zobrazenie mapy.** {{ui:Merať}} › {{ui:Súradnicový systém…}} prijme číslo EPSG, zónu UTM, názov alebo vašu vlastnú definíciu zobrazenia. Pozrite si [Georeferencovanie s ľubovoľným zobrazením](topic:georeference-any-projection).

**Kreslenie a úprava**

- **Presun, kopírovanie, zarovnanie a rozmiestnenie.** Pod {{ui:Zostava}}; {{key:Shift+M}} spustí Presun (obyčajné {{key:M}} je stále Merať). Presun kopíruje za pochodu s {{key:C}}, každý krok je jeden krok späť a funguje v relácii Live TeamWork. Pozrite si [Presun, kopírovanie, zarovnanie a rozmiestnenie](topic:move-align-distribute).
- **Obrázky pod pôdorysom.** {{ui:Zostava}} › {{ui:Obrázok}} umiestni PNG, JPEG alebo WebP pod pôdorys úrovne alebo na zvislú rovinu. Mierku nastavte dvoma bodmi a posúvajte, otáčajte, zoslabte a zamknite ho. Oblasť skopírovaná v MarkupCraft sa vloží v mierke svojho listu. Pozrite si [Vloženie obrázka pod pôdorys](topic:pictures-as-backgrounds).
- **Múry zo skenu.** Pri otvorenom skene prídu múry, dvere a miestnosti ako návrhy, ktoré jeden po druhom ponechajte alebo odmietnete, v jednom kroku späť. Nájdu sa len múry v dvoch kolmých smeroch. Pozrite si [Premena skenu na múry](topic:scan-to-walls).
- **Obkreslenie, perá a schodisko z náčrtu.** {{ui:Obkresliť}} zobrazí inú úroveň čiarkovane pod pôdorysom, {{ui:Perá}} dá múrom, dverám a oknám vlastnú hrúbku čiary v jednom pohľade a {{ui:Náčrt schodiska}} premení chôdzovú čiaru na schodisko. Otvára sa sieť Wavefront OBJ. Pozrite si [Obkreslenie úrovne, perá a schodisko z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy okolo adresy.** Budovy a parcela, ktoré našla funkcia Adresa na lokalitu v CivilCraft, prichádzajú ako návrhy; zaškrtnete tie, ktoré chcete pridať. Pozrite si [Začiatok z lokality CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelov.** {{ui:Zostava}} › {{ui:Výkresy panelov}} rámuje múry, podlahy a strechy z dreva alebo ľahkej tenkostennej ocele a ukladá rezný zoznam ako CSV a dielenské výkresy ako PDF. Štartovacie hodnoty, nie konštrukčný návrh. Pozrite si [Výkresy panelov](topic:panel-drawings).
- **Paleta symbolov a rastliny.** {{ui:Zostava}} › {{ui:Paleta symbolov}} nájde elektrické a vodoinštalačné symboly podľa názvu; zdroj {{ui:Rastliny}} v {{ui:Knižnica}} vypisuje asi 400 rastlín so symbolmi v pôdoryse. Pozrite si [Paleta symbolov](topic:symbol-palette) a [Umiestnenie rastliny](topic:plant-list).

**Potrubia, vzduchotechnika a energia**

- **Split, VRF a fan coily.** Vnútorné a vonkajšie jednotky s ich pripojeniami a chladiace vedenia dimenzované z tabuľky typických príkladových hodnôt, ktoré môžete zmeniť. Pozrite si [Split, VRF a fan coily](topic:split-vrf-fan-coils).
- **Výpočty.** Panel Výpočty kontroluje rozmery prívodného potrubia a potrubia vzduchotechniky s tlakovou stratou, vedie káble cez žľaby a chráničky a ukazuje ich naplnenie a počíta osvetlenie zo súborov IES alebo EULUMDAT. Predvolené hodnoty sú označené; zadajte hodnoty podľa svojho predpisu. Pozrite si [Výpočty potrubia, vzduchotechniky, káblov a svetla](topic:mep-calculations).
- **Súbory PCF.** **Exportovať PCF** nástroja Potrubie zapíše trasy pre programy na pevnosť potrubia a izometriu a súbor PCF spätne načítaný nakreslí svoje potrubie. Pozrite si [Súbory komponentov potrubia](topic:piping-pcf).
- **Solárna fotovoltika (PV).** Umiestnite polia panelov na strechy alebo na zem, zatieňte ich z modelu, odhadnite ročnú energiu, skontrolujte reťazce a vytvorte údaje pre jednovodičovú schému. Štartovací modul a straty sú všeobecné. Pozrite si [Solárna fotovoltika](topic:solar-pv).
- **Súbor EnergyPlus.** Panel Kontrola s EnergyPlus zapíše model ako IDF, ktorý spustíte vo svojom EnergyPlus. Spustenie v prehliadači potrebuje zostavu, ktorú hostujete sami a zadáte jej adresu; BimCraft ju neobsahuje. Pozrite si [Kontrola vykurovania a chladenia s EnergyPlus](topic:check-with-energyplus).

**Obrázky a súbory**

- **Výber vykresľovacieho modulu.** {{ui:Vykresliť}} má voľbu {{ui:Modul}}. Naše dva vstavané moduly (Fast a Path tracer) zostávajú predvolené. **Otvoriť v** uloží scénu ako súbor USD alebo glTF a priečinok projektu Unreal ako .zip; v CadCraft Studio môže doplnok pridať modul. Plugin pre Unreal, ktorý projekt otvorí, nie je vydaný. Pozrite si [Výber programu, ktorý nakreslí obrázok](topic:render-engines).
- **Späť v Studiu.** V CadCraft Studio hlási BimCraft Studiu každý dokončený krok, aby Studio mohlo vrátiť späť váš posledný krok v tom okne, ktoré ste použili naposledy. Pozrite si [Späť naprieč aplikáciami](topic:undo-across-apps).
- **Doplnky vo vašom súbore.** IFC zaznamenáva, ktoré doplnky do neho zapisovali, a pri otvorení ponúkne tie, ktoré nemáte. Pozrite si [Doplnky vo vašom súbore](topic:add-ons-in-your-file).

**Vo všetkých aplikáciách**

- **Pripojte svoju AI.** Váš vlastný asistent môže ovládať BimCraft cez pripojenie Studia a odpovedať na otázky o modeli, napríklad ktoré miestnosti majú zadanú plochu. Studio nemá vlastnú AI. Pozrite si [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka Zalomiť, 2 riadky alebo 1 riadok; Zalomiť zostáva predvolené.
- **Vstupné zariadenia.** Nastavenia touchpadu, pera, 3D myši, ovládača a MIDI sú zdieľané všetkými aplikáciami.
- **Problémy a Live.** Panel upozornení a relácie Live fungujú ako predtým; nové kontroly uvedené vyššie napájajú Problémy.
- **Jazyky.** 54 jazykov, z toho desať nových. Jazyky iné ako angličtina sú strojové koncepty, ktoré ešte nečítal rodený hovorca; témy pomocníka sú väčšinou v angličtine.

### Opravené vo verzii 0.8.1

- **Rozloženie pásu nástrojov a prehliadača projektu.** Vložiť › Importovať CAD, Vložiť › Obrázok a Spravovať › Jednotky projektu hlásili "Ešte nie je v BimCraft hotové". Obrázok teraz otvorí nástroj {{ui:Obrázok}}, Importovať CAD otvorí {{ui:Zostava}} › {{ui:Z výkresu…}} (DWG, DXF, PDF alebo sken) a Jednotky projektu otvoria {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Jednotky}}. Presun a Zarovnanie spustia nástroje Presun a Zarovnanie, Úroveň otvorí {{ui:Pridať úrovne…}}, Fázy otvoria časť Fázy rekonštrukcie a Materiály otvoria knižnicu materiálov.
- **Časť tried DWG.** Čítala sa ako nesprávny typ; opravené v BimCraft a ostatných aplikáciách, ktoré čítajú DWG.
- **Jazyk za behu.** Studio a zabalené vydania môžu teraz prepnúť jazyk bez reštartu. Ešte to nie je otestované na každej platforme; dajte nám vedieť, ak sa jazyk nezmení.
- **Skript balíka Archicad.** `archicad_bundle.py`, samostatné stiahnutie, teraz nájde cestu k Archicadu, sleduje priečinok až 20 sekúnd a opakuje pokus vedľa balíka.

### Ešte nie je v tejto verzii

- **Bezpečnostné a návrhové pomôcky.** Ľudia v budove nemajú limit dĺžky úniku z stavebného predpisu (limit zadáte vy) a neboli ručne overené na skutočnom pôdoryse. Hodnoty akustiky, životného cyklu a rizík sú plánovacie hodnoty, nie kontrola predpisov.
- **Klimatické scenáre a EnergyPlus.** Nie sú vstavané klimatické scenáre: pre výpočet povodne môžete načítať súbor scenára. Spustenie EnergyPlus v prehliadači nie je súčasťou tohto vydania.
- **Rozloženie pásu nástrojov.** Výkaz materiálu zostáva "Ešte nie je hotové", pretože BimCraft nemá zoznam množstiev materiálu, a 54 ďalších šedých nástrojov na páse nemá zatiaľ za sebou nástroj BimCraft.
- **Podpisovanie a platformy.** Inštalátory pre Windows a .dmg pre macOS nie sú podpísané, takže SmartScreen zobrazí {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}, a macOS potrebuje kliknutie pravým tlačidlom a potom {{ui:Otvorené}}. Zostava pre iPad a iPhone nebola znova zostavená pre 0.8.1.
- **Testy na reálnych stránkach.** Niektoré staršie testy prehliadača BimCraft stále zlyhávajú na našej testovacej stránke, ako aj pred 0.8.1.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Staršie zmeny sú v [Novinky vo verzii 0.7](topic:whats-new-0-7).
