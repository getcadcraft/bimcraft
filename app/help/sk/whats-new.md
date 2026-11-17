---
title: Čo je nové vo verzii 0.9
summary: Tvary stien, rozdelenie, odsadenie, natiahnutie a zamknutie na osi, úrovne pod zemou, kóty osí a meranie v pôdoryse, duplikované pohľady s pracovnými štýlmi a tabuľkami pier, Hlásiť ako, export Collada a Google Earth, Sken na BIM, analýza vetra a zemetrasenia, doplnky na 3D tlač živicou.
keywords: čo je nové, 0.9, poznámky k vydaniu, tvary stien, obdĺžnik, mnohouholník, oblúk, vybrať čiary, obkresliť obrys, odsadenie, spojenie, natiahnutie rámčekom, zarovnať a zamknúť, rozdeliť stenu, medzera, znova spojiť, zamknúť na os, narastať od, merať od, úroveň pod, suterén, príkaz úrovne, kóty osí, meranie v pôdoryse, pracovný štýl, duplikovať pohľad, vlastná kópia, tabuľka pier, tlač ako zobrazené, hlásiť ako, collada, dae, kmz, google earth, sken na bim, zaťaženie vetrom, zemetrasenie, konečné prvky, dokumenty, 3D tlač živicou, čo je nové, zmeny, 0.8, 0.8.1, verzia, nové funkcie, evakuácia, ľudia, fronty, akustika, dozvuk, impulzná odozva, povodeň, vietor, zemetrasenie, riziko, životný cyklus, životnosť, ids, značky, rozpisy, presun, zarovnanie, rozdelenie, obrázok, pozadie, sken na steny, lokalita z civilcraft, výkresy panelov, konštrukcia, solárna, fotovoltika, rozdelený systém, vrf, ventilátorový konvektor, dimenzovanie potrubia, káblový žľab, osvetlenie, betón, seizmický, porovnanie skenu, epsg, projekcia, dokumenty, šablóna, uhlík, náklady, energyplus, render engine, otvoriť v, usd, glb, unreal, späť, doplnky, pcf, symboly, rastliny, obkres, perá, pás, panel projektu, rozloženie
from: 5624fe88
---

Toto sa zmenilo v BimCraft 0.9 v porovnaní s 0.8.1. Dve hlavné témy sú skutočný nástroj Stena a pohľady, ktoré sa správajú tak, ako ľudia z veľkých BIM programov očakávajú. Okolo nich prichádza export Collada, asistenti, ktorí vedia umiestniť elektrické zariadenia, Sken na BIM a analýza vetra, zemetrasenia a konečných prvkov na karte {{ui:Analýza}}.

## Nové

### Steny

- **Kreslenie celých tvarov.** V {{ui:Kresliť}} otvorte {{ui:Tvary}} (alebo vyberte tvar v zozname Tvar riadku Stena) pre obdĺžnik, pootočený obdĺžnik, mnohouholník s 3 až 64 stranami, oblúk podľa stredu, dotyčnicový oblúk, steny na vybraných čiarach alebo steny okolo uzavretej plochy, do ktorej kliknete. Obdĺžnik je štyri steny so štyrmi spojenými rohmi a jeden krok späť. Pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a zamknutie](topic:wall-tools).
- **Nastavte pred kreslením, zmeňte potom.** Riadok Stena má {{ui:Odsadenie}} a {{ui:Spojenie}} (zrušte zaškrtnutie, ak chcete kresliť voľne stojace steny). Potom na nakreslených stenách použite {{ui:Odsadenie}}, {{ui:Natiahnutie rámčekom}} a {{ui:Zarovnať a zamknúť}}. Presunutá alebo natiahnutá stena si zachová dvere, okná a kóty. Každý recept je jeden krok späť.
- **Rezanie stien.** {{ui:Rozdeliť}}, {{ui:Medzera}}, {{ui:Voľné konce}}, {{ui:Zmazať úsek}} a {{ui:Znova spojiť}} rozrežú stenu kliknutím alebo tam, kde ju iná stena križuje. Rez cez dvere sa odmietne. Pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a zamknutie](topic:wall-tools).
- **Zamknutie stien na osiach.** Vyberte stenu pozdĺž osi a zaškrtnite {{ui:Zamknúť na os}} vo {{ui:Vlastnostiach}}. So zapnutým nástrojom {{ui:Os}} napíšte vzdialenosť do {{ui:Posunúť o}} pre vybranú čiaru a zamknuté steny nasledujú v jednom kroku späť.
- **Tvar jednej steny.** Vo {{ui:Vlastnostiach}} jednej steny môžete pripojiť jej vrch alebo spodok ku streche, podlahe alebo stropu, upraviť jej obrys v pohľade, nakloniť ju alebo vyrezať otvor v stene bez dverí alebo okna. Pozri [Tvar steny](topic:wall-shape).
- **Dĺžka hovorí, ktorý koniec drží.** {{ui:Narastať od}} určuje, či začiatok, koniec alebo stred zostáva na mieste, keď zmeníte dĺžku.
- **Dĺžka a kóta v pôdoryse sa zhodujú.** {{ui:Merať od}} (os, vnútorný líc alebo vonkajší líc) riadi aj pole Dĺžka, aj kóty stien v pôdoryse. Začína sa na osi, takže kóty stien v pôdoryse teraz čítajú os tam, kde predtým čítali vonkajší líc. Zmeňte ho v riadku Stena, vo {{ui:Vlastnostiach}} alebo v {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Múry}}.

### Úrovne, osi a meranie

- **Pridať úroveň nižšie.** {{ui:Pridať úroveň nižšie}} v paneli {{ui:Úrovne}} pridá úroveň pod najnižšiu, rovnako vysokú ako ona, v zápornej kóte (Úroveň -1, Úroveň -2). Nič iné sa nepohne. {{ui:Pridať úrovne…}} už prijíma záporné výšky. Ak na príkazový riadok napíšete LEVEL, LEVELS, STOREY alebo STOREYS, otvorí sa {{ui:Pridať úrovne…}}, a v ponukách a na kartách pásu je tlačidlo {{ui:Úrovne}}. Pozri [Lokality, budovy a úrovne](topic:site-building-and-levels).
- **Kóty osí v pôdoryse.** S nástrojom {{ui:Os}} zapnutým zaškrtnite {{ui:Kóty}}, aby sa nakreslil rozstup susedných čiar a celkový rozmer za bublinami na pôdoryse každej úrovne. Pozri [Kótovanie osí](topic:grid-dimensions).
- **Meranie v pôdoryse.** {{ui:Merať}} v skupine {{ui:Kresliť}} zadá vzdialenosť s rozdielmi X a Y medzi dvoma kliknutiami. V modeli sa nič neukladá. Pozri [Meranie v pôdoryse](topic:measure-on-the-plan).
- **Zmena viacerých stĺpov naraz.** Vyberte stĺpce spolu so stenou a výber vypíše každý druh s {{ui:Zachovať len tieto}}. Jedno kliknutie zachová stĺpce a zobrazí ich spoločné polia.
- **Jedna zobrazovaná jednotka všade.** Súradnice, merania, rezy, mierky listov, zaťaženia a výsledky karty rámov a text Problémov nasledujú jednotku, ktorú vyberiete. Exporty zostávajú SI.

### Pohľady, listy a tlač

- **Pracovný štýl.** {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Pracovný štýl}} volí medzi tým, že každý pohľad má vlastné anotácie a tabuľky pier, alebo ich zdieľa. Pozri [Pracovný štýl, duplikované pohľady, perá na papieri, Hlásiť ako a šablóny](topic:working-style).
- **Duplikovanie pohľadu.** Pôdorysy, stropné pôdorysy, výnosky, pohľady a rezy možno duplikovať ako {{ui:Vlastná kópia}} alebo {{ui:Prepojené}}; {{ui:Vytvoriť vlastnú kópiu}} urobí prepojený pohľad nezávislým. Pozri [Pracovný štýl, duplikované pohľady, perá na papieri, Hlásiť ako a šablóny](topic:working-style).
- **Tlač tak, ako je zobrazené, alebo cez tabuľku pier.** Prepísania pier sa ukladajú v IFC spolu s pohľadom a listy a PDF ich kreslia tak, ako ich zobrazuje obrazovka. Tá istá téma pokrýva tabuľky pier.
- **Hlásiť ako.** {{ui:Hlásiť ako}} vo {{ui:Vlastnostiach}} zapíše plochu nakreslenú ako cestu, stenu ako panel alebo strechu ako rampu do IFC ako triedu, ktorú vyberiete, a počíta ju tak v rozpisoch, množstvách, Hľadať, Farba podľa a Problémoch.
- **Úprava v pohľadoch a rezoch.** Kreslite a presúvajte steny, otvory, úrovne, kóty a poznámky priamo v pohľade alebo reze, s vlastnými veľkosťami listov a popisovými poliami. Pozri [Úprava v pohľadoch a rezoch](topic:edit-in-elevations).
- **Listy.** Každý list môže byť na šírku alebo na výšku. Pole {{ui:Zadajte mierku}} je vedľa zoznamu mierok na každom umiestnenom pohľade (1:64, 2:1, 1/4" = 1'). Umiestnený výkres môžete potiahnuť alebo posunúť šípkami a {{ui:Formáty…}} › {{ui:Import SVG…}} premení váš vlastný návrh listu na popisové pole s poľami vyplnenými pre každý list.
- **Uvedenia knižnice na liste.** Sada výkresov s položkami knižnice dostane rozpis uvedení knižnice, ktorý môžete umiestniť na ľubovoľný list. Pozri [Uvedenia knižnice](topic:library-credits).

### Knižnica: umiestňovanie

- **Umiestnenie podľa pohľadu.** V pôdorysnom pohľade knižnica zobrazuje {{ui:Umiestniť do pôdorysu}}; v 3D zobrazuje {{ui:Umiestniť do modelu}}; v rozdelenom zobrazení tlačidlo rozdelenia s {{ui:Umiestniť do pôdorysu}} ako hlavnou akciou. Oba spôsoby zapíšu ten istý prvok IFC. Kartu knižnice môžete tiež potiahnuť na pôdorys alebo do 3D pohľadu; perom alebo prstom stlačte a podržte, potom potiahnite. Pozri [Umiestnenie z knižnice](topic:place-from-library).

### Súbory a asistenti

- **Collada a Google Earth.** {{ui:Collada}} na paneli nástrojov (v štýloch ponuky v ponuke Súbor) zapíše .dae alebo .kmz umiestnený tam, kde je model na mape. Pozri [Export modelu ako Collada alebo pre Google Earth](topic:collada).
- **Asistenti môžu umiestňovať elektrické zariadenia.** Váš pripojený asistent má nové nástroje na pridávanie, výpis, zmenu a zmazanie zariadení a na nastavenie svetiel. Asistenti zostávajú vypnutí, kým ich nezapnete v {{ui:Nastavenia}}. Pozri [Nechajte asistenta AI pracovať s vaším modelom](topic:assistants).
- **Sken na BIM (doplnok).** Predvolene vypnutý a potrebuje doplnok Mračná bodov. Navrhuje podlažia, steny, dvere a okná zo skenu s nameranou odchýlkou pre každé; prijatie je jeden krok späť.

### Analýza

- **Údaje o vetre a zemetrasení pre lokalitu.** Na karte {{ui:Analýza}}: zaťaženia vetrom podľa ASCE 7-10 alebo 7-16 pre tuhú uzavretú budovu, so silou na každom podlaží ako zaťažovacími prípadmi, a údaje o seizmickej lokalite s vyhľadávaním USGS a návrhovým spektrom.
- **Nadväzujúca konštrukčná analýza a konečné prvky.** Kontroly betónu podľa ACI 318-19, ekvivalentné bočné sily podľa ASCE 7-22, výchylka podlažia, dosky a steny ako dosky a kombinácie zaťažení podľa ASCE 7 a EN 1990. Náš vlastný engine konečných prvkov robí škrupiny, štvorsteny a modálnu analýzu. Pozri [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic) a [Analýza rámov](topic:frame-analysis).

### Ďalšie doplnky a dokumenty

- **Interiérové osvetlenie (doplnok).** Umiestňuje svetelné telesá a zapisuje luxy ako čísla do pôdorysu každej úrovne, s odhadom oslnenia a tlačiteľnou správou.
- **Panel dokumentov.** {{ui:Súbor}} › {{ui:Dokumenty…}} má výdaj a vrátenie so zamykacím súborom, revízne písmená, stavy vydania a históriu.
- **Regulácie a oceľ.** Juhoafrické balíky výkresov a stavebných predpisov v doplnku Regulations a 976 britských oceľových veľkostí v spoločnej tabuľke prierezov.
- **Doplnky na 3D tlač živicou (zadarmo).** Slicer, podpery a raft, test expozície a formáty súborov GOO, SL1, Chitubox a Anycubic, všetky predvolene vypnuté.

## Vo všetkých aplikáciách

- Keď nad tlačidlom alebo ovládaním podržíte kurzor, zobrazí sa bublinová nápoveda Bootstrap.
- Štartovací tip na prázdnej ploche kreslenia má tlačidlo zatvorenia; BimCraft si zapamätá, že bol zavretý.
- Pás kariet panela, ktorý sa nezmestí, sa teraz posúva namiesto toho, aby bol odrezaný.
- Keď je otvorený dokument, karta prehliadača číta „<dokument> - BimCraft | CadCraft“.
- V {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Rozloženie}} sú rozloženia rozbaľovací zoznam dvojriadkových volieb.
- Zoznam jazykov v {{ui:Nastavenia}} ponúka viac jazykov ako vo verzii 0.8; jazyky iné ako angličtina sú strojové koncepty.

## Opravené

- **Presun funguje na schodoch** a na rampách, zábradliach, rovinách striech, voľne stojacich zariadeniach, obrázkoch a cestách.
- **Ťahanie steny už nezošikmí miestnosť.** Stredový úchyt presunie stenu kolmo na seba a jej rohy kĺžu po spojených stenách. Podržte {{key:Mod}} pre starý voľný presun; {{ui:Zarovnať do pravého uhla}} vráti 90 stupňov.
- **Zmena hrúbky alebo typu v spojenom uzle** teraz udrží roh uzavretý na L, na T, v uzle troch stien a vedľa zakrivenej steny.
- **Presun alebo kopírovanie skupiny miestností** udrží spojené steny mimo skupiny spojené.
- **Opakovanie zachová identitu kóty steny.**
- **Výber steny pri vypnutom Kreslení** už nevyvolá chybu vo Vlastnostiach.
- **Vykresliť sa vráti na WebGL**, keď grafická karta nemôže spustiť, namiesto zastavenia.
- **Kontrolu EnergyPlus možno znova zapnúť.**
- **Dokumenty sa otvárajú ako vycentrovaný dialóg.** {{key:Esc}}, X alebo kliknutie na stmavenú stránku ho zatvorí.
- **Tlačidlá {{ui:Pôdorys}}, {{ui:Rozdeliť}} a {{ui:3D}} sa zobrazia**, len čo je model otvorený, nie až po tom, čo ste raz zapli Kreslenie.

## Úprimné obmedzenia

- Nič sa netlačilo na reálnom hardvéri. Podpery živice sú nové a neoverené.
- Výsledky vetra, zemetrasenia, betónu a konečných prvkov sú pomôcky pre inžiniera, overené proti uzavretým tvarom vzorcov, nie proti skutočnej budove.
- Sken na BIM bol testovaný na syntetickej budove, nie na reálnom skene, a nachádza len miestnosti s pravými uhlami.
- Collada tu nebola otvorená v Blenderi ani Google Earth.
- Odhad osvetlenia je overený proti nášmu vlastnému sledovaniu, nie proti iným programom osvetlenia.
- Juhoafrické čísla sú neoverené.
- Štýly spojenia stien (na tupo, zrezanie, na pravý uhol) a priorita vrstiev nie sú hotové; rohy sú zrezané.
- Jazyky iné ako angličtina sú strojové koncepty.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Staršie zmeny sú v poznámkach k verziám 0.8 a 0.8.1 nižšie na tejto stránke.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo v BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s 0.7. BimCraft teraz vie odpovedať na otázky o budove a testovať ju s ľuďmi, zvukom, vodou, vetrom a zemetraseniami a kresliť ju s ďalšími nástrojmi; 0.8.1 je opravné vydanie.

### Nové

**Otestujte budovu**

- **Ľudia v budove.** Sekcia {{ui:Ľudia v budove}} ľavého panela prejde evakuáciu alebo bežný deň príchodov cez vaše miestnosti, dvere a schodištia. Vidíte rady tam, kde sa budova zužuje, najdlhšiu cestu k výstupu z každej miestnosti a ako dlho trvá posledný človek. Zaškrtnite {{ui:Zavreté}} pri dverách, aby ste videli, čo sa zmení, a zaškrtnite {{ui:Zobraziť ľudí v pohľade 3D}}, aby ste sledovali chodcov. Zistenia idú do Problémov. Hrubý model davu pre rozhodnutia pri návrhu, nie certifikát požiarnej bezpečnosti. Pozri [Prechádzka ľudí budovou](topic:people-in-the-building).
- **Akustika miestností a jej vypočutie.** Sekcia {{ui:Akustika miestností}} dá dobu dozvuku každej miestnosti podľa oktávových pásiem (Sabine a Eyring) z jej veľkosti a povrchov, ktoré vyberiete, a s vlastným cieľom povie, koľko pohltenia by ho splnilo. {{ui:Prehrať v tejto miestnosti}} prehrá hlas, tlesknutie, zadrnkané tóny alebo váš vlastný zvukový súbor cez impulznú odozvu vypočítanú pre miestnosť. Hodnoty pohltenia sú typické publikované hodnoty, ktoré môžete nahradiť. Pozri [Akustika miestností](topic:room-acoustics).
- **Prehrávanie povodne, vetra a zemetrasenia.** {{ui:Prehrávanie rizika}} prehráva stúpajúcu vodu cez miestnosti, tlak vetra na každé podlažie a zemetrasenie otriasajúce podlažiami, na pôdoryse alebo v pohľade s časovým posuvníkom. Jednoduché modely s ich predpokladmi sú na paneli; nie je to kontrola podľa predpisov. Pozri [Prehranie povodne, vetra alebo zemetrasenia](topic:hazard-playback).
- **Čo sa opotrebuje za päťdesiat rokov.** {{ui:Pohľad na životný cyklus}} vypíše okná, dvere, povrchy a strechu s životnosťou každého, roky, kedy sa vymieňajú, a ak zadáte cenu za jednotku, cenu podľa roka a jej súčasnú hodnotu. {{ui:Uložiť harmonogram (CSV)}} ho zapíše. Životnosti sú plánovacie čísla. Pozri [Pozrite si, čo sa opotrebuje za päťdesiat rokov](topic:life-cycle-view).
- **Kontroly betónu a seizmiky.** Sekcie {{ui:Betónové prvky}} a {{ui:Seizmické zaťaženia}} karty {{ui:Analýza}} kontrolujú betónové nosníky a stĺpy podľa ACI 318-19 a robia ekvivalentné bočné sily podľa ASCE 7-22 na tuhých podlažiach, s výchylkou podlažia. Na kontrolu inžinierom. Pozri [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic).

**Kontrola a hlásenie**

- **Kontrola podľa IDS.** Načítajte súbor `.ids`, ktorý vám dal klient, a uvidíte každý prvok, ktorý ho nespĺňa, v Problémoch, ešte pred odovzdaním IFC. Otvorte {{ui:Kontrola podľa IDS}} pod {{ui:Kontroly modelu}}. Pozri [Kontrola modelu podľa IDS klienta](topic:check-against-ids).
- **Značky a rozpisy.** Definujte vlastné značky, nastavte ich na mnohých prvkoch naraz a vytvorte rozpisy, ktorých stĺpce, filtre a skupiny ich čítajú; značky sa uchovávajú v IFC. Pozri [Značky a rozpisy](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} vyplní šablónu špecifikácie z otvoreného IFC a uloží ju ako PDF, dokument Word alebo Markdown. Pozri [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnanie skenu s modelom.** Pri otvorenom mračne bodov {{ui:Porovnať}} posúdi každý prvok ako postavený, čiastočne postavený, chýbajúci alebo nedosiahnutý, a ukáže percento postavenia. Pozri [Porovnanie skenu s modelom](topic:compare-scan-with-model).
- **Uhlík a náklady.** Panel Uhlík sčíta vtelený uhlík z tabuľky faktorov, ktorú môžete upraviť, a panel Náklady rozpočíta ceny cez 4D harmonogram. Faktory, ktoré prichádzajú s BimCraft, sú všeobecné a označené ako neoverené. Pozri [Vtelený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Ľubovoľná mapová projekcia.** {{ui:Merať}} › {{ui:Súradnicový systém…}} prijme číslo EPSG, zónu UTM, názov alebo vašu vlastnú definíciu projekcie. Pozri [Georeferencovanie s ľubovoľnou projekciou](topic:georeference-any-projection).

**Kreslenie a úpravy**

- **Presun, zarovnanie a rozdelenie.** Pod {{ui:Zostava}}; {{key:Shift+M}} spustí Presun (obyčajné {{key:M}} je stále Meranie). Presun kopíruje, keď idete, s {{key:C}}; každý krok je jeden krok späť a prenáša sa v relácii Live TeamWork. Pozri [Presun, kopírovanie, zarovnanie a rozdelenie](topic:move-align-distribute).
- **Obrázky pod pôdorysom.** {{ui:Zostava}} › {{ui:Obrázok}} umiestni PNG, JPEG alebo WebP pod pôdorys úrovne alebo na zvislú rovinu. Nastavte mierku dvoma bodmi a presúvajte, otáčajte, stmavujte a zamknite ho. Oblasť skopírovaná v MarkupCraft sa vloží v mierke svojho listu. Pozri [Obrázok pod pôdorysom](topic:pictures-as-backgrounds).
- **Steny zo skenu.** Pri otvorenom skene prichádzajú steny, dvere a miestnosti ako návrhy, ktoré si ponecháte alebo odmietnete jeden po druhom, v jednom kroku späť. Nachádzajú sa len steny v dvoch kolmých smeroch. Pozri [Premena skenu na steny](topic:scan-to-walls).
- **Obkreslenie, perá a náčrt schodiska.** {{ui:Obkresliť}} zobrazí iné podlažie prerušovane pod pôdorysom, {{ui:Perá}} dá stenám, dverám a oknám vlastnú hrúbku čiary v jednom pohľade a {{ui:Náčrt schodiska}} premení čiaru chôdze na schodište. Otvorí sa sieť Wavefront OBJ. Pozri [Obkreslenie úrovne, perá a schodište z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy okolo adresy.** Budovy a parcela, ktoré našiel CivilCraft Address to site, prichádzajú ako návrhy; zaškrtnete tie, ktoré chcete pridať. Pozri [Štart z lokality CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelov.** {{ui:Zostava}} › {{ui:Výkresy panelov}} rámuje steny, podlahy a strechy z dreva alebo ľahkej oceľe a uloží zoznam rezov ako CSV a dielenské výkresy ako PDF. Štartovacie hodnoty, nie konštrukčný návrh. Pozri [Výkresy panelov](topic:panel-drawings).
- **Paleta symbolov a rastliny.** {{ui:Zostava}} › {{ui:Paleta symbolov}} nájde elektrické a inštalatérske symboly podľa názvu; zdroj {{ui:Rastliny}} karty {{ui:Knižnica}} vypíše asi 400 rastlín so značkami v pôdoryse. Pozri [Paleta symbolov](topic:symbol-palette) a [Umiestnenie rastliny](topic:plant-list).

**Potrubia, vzduchotechnika a energia**

- **Split, VRF a ventilátorové konvektory.** Vnútorné a vonkajšie jednotky s ich prípojkami a chladiace vedenia dimenzované podľa tabuľky typických príkladových hodnôt, ktoré môžete zmeniť. Pozri [Split, VRF a ventilátorové konvektory](topic:split-vrf-fan-coils).
- **Výpočty.** Panel Výpočty kontroluje dimenzie zásobovacieho potrubia a vzduchovodov tlakovou stratou, vedie káble cez žľaby a chráničky a ukazuje ich naplnenie, a počíta osvetlenie zo súborov IES alebo EULUMDAT. Predvolené hodnoty sú označené; napíšte hodnoty vášho predpisu. Pozri [Výpočty potrubí, vzduchovodov, káblov a svetla](topic:mep-calculations).
- **Súbory PCF.** **Export PCF** nástroja Potrubie zapíše úseky pre programy na napätie potrubia a izometrie, a prečítaný súbor PCF nakreslí jeho potrubie. Pozri [Súbory komponentov potrubia](topic:piping-pcf).
- **Solárna fotovoltika.** Montujte polia na strechy alebo na zem, tieňte ich z modelu, odhadnite ročnú energiu, skontrolujte reťazce a vytvorte dáta jednočiarového schématu. Štartovací modul a straty sú všeobecné. Pozri [Solárna fotovoltika](topic:solar-pv).
- **Súbor EnergyPlus.** Panel Kontrola s EnergyPlus zapíše model ako IDF, ktorý spustíte vo vašom vlastnom EnergyPlus. Spustenie v prehliadači potrebuje zostavu, ktorú si hostíte sami a zadáte jej adresu; BimCraft ju neobsahuje. Pozri [Kontrola vykurovania a chladenia s EnergyPlus](topic:check-with-energyplus).

**Obrázky a súbory**

- **Výber renderovacieho modulu.** {{ui:Vykresliť}} má voľbu {{ui:Modul}}. Naše dva vstavané moduly (Rýchly a Path tracer) zostávajú predvolené. **Otvoriť v …** uloží scénu ako súbor USD alebo glTF a projektový priečinok Unreal ako .zip; v CadCraft Studio môže doplnok pridať modul. Zásuvný modul Unreal, ktorý projekt otvára, nie je vydaný. Pozri [Výber programu, ktorý kreslí obrázok](topic:render-engines).
- **Späť v Studiu.** V CadCraft Studio BimCraft povie Studiu každý dokončený krok, aby mohlo vrátiť váš posledný krok v okne, ktoré ste naposledy použili. Pozri [Späť naprieč aplikáciami](topic:undo-across-apps).
- **Doplnky vo vašom súbore.** IFC zaznamenáva, ktoré doplnky doň zapisovali, a pri otvorení ponúkne tie, ktoré nemáte. Pozri [Doplnky vo vašom súbore](topic:add-ons-in-your-file).

**Vo všetkých aplikáciách**

- **Pripojte svoju AI.** Váš vlastný asistent môže ovládať BimCraft cez pripojenie Studia a odpovedať na otázky o modeli, napríklad ktoré miestnosti sú pod danou plochou. Studio nemá vlastnú AI. Pozri [Nechajte asistenta AI pracovať s vaším modelom](topic:assistants).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka Zalamovať, 2 riadky alebo 1 riadok; Zalamovať zostáva predvolené.
- **Vstupné zariadenia.** Nastavenia touchpadu, pera, 3D myši, ovládača a MIDI sú zdieľané všetkými aplikáciami.
- **Problémy a Live.** Panel upozornení a relácie Live fungujú ako predtým, s novými kontrolami vyššie, ktoré napájajú Problémy.
- **Jazyky.** 54 jazykov, z toho desať nových. Tie, ktoré nie sú angličtina, sú strojové koncepty, ktoré ešte nečítal rodený hovorca; témy pomocníka sú väčšinou v angličtine.

### Opravené v 0.8.1

- **Pás + rozloženie prehliadača projektu.** Vložiť › Importovať CAD, Vložiť › Obrázok a Spravovať › Jednotky projektu hlásili „Zatiaľ nie je v BimCraft“. Obrázok teraz otvorí nástroj Obrázok, Importovať CAD otvorí {{ui:Zostava}} › {{ui:Z výkresu…}} (DWG, DXF, PDF alebo sken) a Jednotky projektu otvoria {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Jednotky}}. Presun a Zarovnanie spúšťajú nástroje Presun a Zarovnanie, Úroveň otvorí {{ui:Pridať úrovne…}}, Fázy otvoria sekciu Renovačné fázy a Materiály otvoria knižnicu materiálov.
- **Sekcia tried DWG.** Čítala sa ako zlý typ; opravené v BimCraft a v ostatných aplikáciách, ktoré čítajú DWG.
- **Jazyk za behu.** Studio a balené vydania teraz vedia prepnúť jazyk bez reštartu. Zatiaľ nie je otestované na každej platforme; dajte nám vedieť, ak sa jazyk nezmení.
- **Skript pre balík Archicad.** `archicad_bundle.py`, samostatný súbor na stiahnutie, teraz nájde cestu Archicadu, sleduje priečinok až 20 sekúnd a skúsi znova vedľa balíka.

### Ešte nie je v tejto verzii

- **Bezpečnostné a návrhové pomôcky.** Ľudia v budove nemajú limit dĺžky cesty z stavebného predpisu (zadáte ho vy) a neboli ručne skontrolovaní na reálnom pôdoryse. Akustické, životného cyklu a rizikové údaje sú plánovacie hodnoty, nie kontrola podľa predpisov.
- **Klimatické scenáre a EnergyPlus.** Žiadne vstavané klimatické scenáre: pre beh povodne môžete načítať súbor scenára. Beh EnergyPlus v prehliadači nie je súčasťou tohto vydania.
- **Rozloženie pásu.** Material Takeoff zostáva „Nie je hotové“, lebo BimCraft nemá zoznam množstiev materiálu, a 54 ďalších zašedených nástrojov pásu zatiaľ nemá za sebou nástroj BimCraft.
- **Podpisovanie a platformy.** Inštalátory Windows a .dmg pre macOS nie sú podpísané, takže SmartScreen zobrazí {{ui:Ďalšie informácie}}, potom {{ui:Spustiť napriek tomu}}, a macOS potrebuje pravé kliknutie a potom {{ui:Otvorené}}. Zostava pre iPad a iPhone nebola znovu zostavená pre 0.8.1.
- **Testy reálnych stránok.** Niektoré staršie testy prehliadača BimCraft zlyhávajú na našej testovacej stránke, ako aj pred 0.8.1.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
