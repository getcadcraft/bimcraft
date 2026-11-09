---
title: Čo je nové vo verziách 0.8 a 0.8.1
summary: BimCraft pridáva ľudí prechádzajúcich budovou, akustiku miestností, ktorú môžete počuť, prehrávanie povodne, vetra a zemetrasenia, päťdesiatročný pohľad na životný cyklus, kontroly podľa IDS, značky a harmonogramy, Presunúť, Zarovnať a Rozmiestniť, obrázky pod pôdorysom, múry zo skenu, výkresy panelov, solárnu energiu, rozdelené a VRF systémy, dimenzovanie potrubí a káblov, kontroly betónu a seizmiky, ľubovoľnú mapovú projekciu, výber vykresľovacieho motora a vrátenie späť v Studio; 0.8.1 opravuje sivé nástroje rozloženia Ribbon.
keywords: čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, evakuácia, ľudia, rady, akustika, dozvuk, impulzná odozva, povodeň, vietor, zemetrasenie, nebezpečenstvo, životný cyklus, životnosť, ids, značky, harmonogramy, presunúť, zarovnať, rozmiestniť, obrázok, podklad, sken na múry, lokalita z civilcraft, výkresy panelov, konštrukcia, solárna, pv, rozdelený, vrf, fan coil, dimenzovanie potrubia, káblová lišta, osvetlenie, betón, seizmika, porovnať sken, epsg, projekcia, dokumenty, šablóna, uhlík, náklady, energyplus, vykresľovací motor, otvoriť v, usd, glb, unreal, späť, doplnky, pcf, symboly, rastliny, obkresliť, perá, ribbon, prehliadač projektu, rozloženie
from: 87b03056
---

Toto sa zmenilo v BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s verziou 0.7. BimCraft teraz dokáže odpovedať na otázky o budove a overiť ju s ľuďmi, zvukom, vodou, vetrom a zemetraseniami a kresliť ju s viacerými nástrojmi; 0.8.1 je opravná verzia.

## Nové

### Overenie budovy

- **Ľudia v budove.** Sekcia {{ui:People in the building}} ľavého panela prevedie ľudí evakuáciou alebo bežným dňom príchodov cez vaše miestnosti, dvere a schodiská. Vidíte rady tam, kde sa budova zužuje, najdlhšiu cestu k východu z každej miestnosti a ako dlho trvá posledný človek. Zaškrtnite {{ui:Shut}} pri dverách, aby ste videli, čo sa zmení, a zaškrtnite {{ui:Show the people in the 3D view}}, aby ste sledovali chodcov. Zistenia idú do Problémov. Hrubý model davu na rozhodnutia pri návrhu, nie certifikát protipožiarnej bezpečnosti. Pozrite [Prechod ľudí budovou](topic:people-in-the-building).
- **Akustika miestností a jej vypočutie.** Sekcia {{ui:Room acoustics}} uvádza dobu dozvuku každej miestnosti podľa oktávových pásiem (Sabine a Eyring) z jej veľkosti a povrchových úprav, ktoré vyberiete. S vlastným cieľom povie, koľko pohltenia by ho splnilo. {{ui:Play it in this room}} prehrá hlas, tlesknutie, štipnuté tóny alebo váš vlastný zvukový súbor cez impulznú odozvu vypočítanú pre miestnosť. Hodnoty pohltenia sú typické publikované hodnoty, ktoré môžete nahradiť. Pozrite [Akustika miestností](topic:room-acoustics).
- **Povodeň, vietor a zemetrasenie.** {{ui:Hazard playback}} prehrá stúpanie vody cez miestnosti, tlak vetra na každé podlažie a zemetrasenie otriasajúce podlažiami, na pôdoryse alebo na pohľade s časovým posuvníkom. Jednoduché modely s ich predpokladmi sú na paneli; nejde o kontrolu normy. Pozrite [Prehranie povodne, vetra alebo zemetrasenia](topic:hazard-playback).
- **Čo sa opotrebuje za päťdesiat rokov.** {{ui:Life-cycle view}} uvádza okná, dvere, povrchové úpravy a strechu s dobou životnosti každého, rokmi výmeny a, keď zadáte cenu za jednotku, náklady podľa roka a ich súčasnú hodnotu. {{ui:Save the schedule (CSV)}} ich zapíše do súboru. Doby životnosti sú plánovacie údaje. Pozrite [Čo sa za päťdesiat rokov opotrebuje](topic:life-cycle-view).
- **Kontroly betónu a seizmiky.** Bloky {{ui:Concrete members}} a {{ui:Seismic loads}} na karte {{ui:Analysis}} kontrolujú betónové trámy a stĺpy podľa ACI 318-19 a vytvárajú ekvivalentné bočné sily podľa ASCE 7-22 na tuhých stropoch s driftom podlažia. Na kontrolu inžinierom. Pozrite [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic).

### Kontrola a výkazy

- **Kontrola podľa IDS.** Načítajte súbor `.ids`, ktorý vám dodal klient, a pred doručením IFC uvidíte v Problémoch každý prvok, ktorý ho nespĺňa. Otvorte {{ui:Check against an IDS}} v časti {{ui:Model checks}}. Pozrite [Kontrola modelu podľa IDS klienta](topic:check-against-ids).
- **Značky a harmonogramy.** Definujte vlastné značky, nastavte ich na mnoho prvkov naraz a vytvárajte harmonogramy, ktorých stĺpce, filtre a skupiny ich čítajú. Značky sa uchovávajú v IFC. Pozrite [Značky a harmonogramy](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Documents from the model}} vyplní šablónu špecifikácie z otvoreného IFC a uloží ju ako PDF, dokument Word alebo Markdown. Pozrite [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnanie skenu s modelom.** Ak je otvorený oblak bodov, {{ui:Compare}} posúdi každý prvok ako postavený, čiastočne postavený, chýbajúci alebo nedosiahnutý a zobrazí percento postavenia. Pozrite [Porovnanie skenu s modelom](topic:compare-scan-with-model).
- **Uhlík a náklady.** Panel Uhlík sčíta vtelený uhlík z tabuľky faktorov, ktorú môžete upravovať, a panel Náklady rozloží ceny na harmonogram 4D. Faktory dodávané s BimCraft sú všeobecné a označené ako neoverené. Pozrite [Vtelený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Ľubovoľná mapová projekcia.** {{ui:Measure}} › {{ui:Coordinate system…}} prijme číslo EPSG, zónu UTM, názov alebo vašu vlastnú definíciu projekcie. Pozrite [Georeferencovanie s ľubovoľnou projekciou](topic:georeference-any-projection).

### Kreslenie a úpravy

- **Presunúť, Zarovnať a Rozmiestniť.** Pod {{ui:Build}}; {{key:Shift+M}} spustí Presunúť (obyčajné {{key:M}} je stále Merať). Presunúť kopíruje počas pohybu s {{key:C}}, každý krok je jedno vrátenie späť a prenáša sa v relácii Live TeamWork. Pozrite [Presunúť, kopírovať, zarovnať a rozmiestniť](topic:move-align-distribute).
- **Obrázky pod pôdorysom.** {{ui:Build}} › {{ui:Picture}} umiestni PNG, JPEG alebo WebP pod pôdorys podlažia alebo na zvislú rovinu. Mierku nastavíte dvoma bodmi a môžete ho posúvať, otáčať, stlmiť a zamknúť. Oblasť skopírovaná v MarkupCraft sa vloží v mierke svojho listu. Pozrite [Obrázok pod pôdorysom](topic:pictures-as-backgrounds).
- **Múry zo skenu.** Pri otvorenom skene prídu múry, dvere a miestnosti ako návrhy, ktoré si jeden po druhom ponecháte alebo odmietnete, v jednom kroku späť. Nájdu sa iba múry v dvoch kolmých smeroch. Pozrite [Premena skenu na múry](topic:scan-to-walls).
- **Obkreslenie, perá a schodisko z náčrtu.** {{ui:Trace}} zobrazí inú úroveň podlažia čiarkovane pod pôdorysom, {{ui:Pens}} dá múrom, dverám a oknám vlastnú hrúbku čiary v jednom pohľade a {{ui:Sketch stair}} premení pohybovú čiaru na schodisko. Otvorí sa sieť Wavefront OBJ. Pozrite [Obkreslenie podlažia, perá a schodisko z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy okolo adresy.** Budovy a parcela, ktoré našiel nástroj CivilCraft Adresa na lokalitu, prídu ako návrhy; zaškrtnite tie, ktoré chcete pridať. Pozrite [Začiatok z lokality CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelov.** {{ui:Build}} › {{ui:Panel drawings}} rámuje múry, podlahy a strechy z dreva alebo ľahkej oceľovej tenkostennej konštrukcie a uloží zoznam rezania ako CSV a dielenské výkresy ako PDF. Ide o východiskové hodnoty, nie o statický návrh. Pozrite [Výkresy panelov](topic:panel-drawings).
- **Paleta symbolov a rastliny.** {{ui:Build}} › {{ui:Symbol palette}} nájde elektrotechnické a inštalatérske symboly podľa názvu; zdroj {{ui:Plants}} v {{ui:Library}} uvádza asi 400 rastlín s pôdorysnými symbolmi. Pozrite [Paleta symbolov](topic:symbol-palette) a [Umiestnenie rastliny](topic:plant-list).

### Potrubia, vzduchotechnika a energia

- **Split, VRF a fan coil.** Vnútorné a vonkajšie jednotky s ich prípojkami a potrubné sady dimenzované podľa tabuľky typických príkladových hodnôt, ktoré môžete zmeniť. Pozrite [Split, VRF a fan coil](topic:split-vrf-fan-coils).
- **Výpočty.** Panel Výpočty kontroluje dimenzie prívodného potrubia a vzduchovodov podľa tlakovej straty, vedie káble cez káblové lišty a chráničky a ukazuje ich naplnenie, a počíta osvetlenie zo súborov IES alebo EULUMDAT. Predvolené hodnoty sú označené; zadajte hodnoty vašej normy. Pozrite [Výpočty potrubia, vzduchovodov, káblov a svetla](topic:mep-calculations).
- **Súbory PCF.** Príkaz **Exportovať PCF** v nástroji Potrubie zapíše trasy pre programy na pevnostnú analýzu potrubia a izometrie a súbor PCF načítaný späť nakreslí jeho potrubie. Pozrite [Súbory komponentov potrubia](topic:piping-pcf).
- **Solárna energia (PV).** Osadíte polia na strechy alebo na terén, zatienite ich z modelu, odhadnete ročnú energiu, skontrolujete reťazce a vytvoríte dáta jednopólovej schémy. Štartovací modul a straty sú všeobecné. Pozrite [Solárna energia (PV)](topic:solar-pv).
- **Súbor EnergyPlus.** Panel Kontrola s EnergyPlus zapíše model ako IDF, ktorý spustíte vo svojom EnergyPlus. Spustenie v prehliadači potrebuje zostavu, ktorú hostujete sami a zadáte jej adresu; BimCraft ju neobsahuje. Pozrite [Kontrola vykurovania a chladenia s EnergyPlus](topic:check-with-energyplus).

### Obrázky a súbory

- **Výber vykresľovacieho motora.** {{ui:Render}} má voľbu {{ui:Engine}}. Naše dva vstavané motory (Fast a Path tracer) zostávajú predvolené. **Otvoriť v** uloží scénu ako súbor USD alebo glTF a projektový priečinok Unreal ako .zip; v CadCraft Studio môže doplnok pridať motor. Zásuvný modul Unreal, ktorý projekt otvorí, nie je vydaný. Pozrite [Výber programu, ktorý kreslí obrázok](topic:render-engines).
- **Vrátenie späť v Studio.** V CadCraft Studio BimCraft oznamuje Studiu každý dokončený krok, aby Studio mohlo vrátiť späť váš posledný krok v okne, ktoré ste použili naposledy. Pozrite [Vrátenie späť naprieč aplikáciami](topic:undo-across-apps).
- **Doplnky vo vašom súbore.** IFC zaznamenáva, ktoré doplnky doň zapisovali, a pri otvorení ponúkne tie, ktoré nemáte. Pozrite [Doplnky vo vašom súbore](topic:add-ons-in-your-file).

### Vo všetkých aplikáciách

- **Pripojte svoju AI.** Váš vlastný asistent môže ovládať BimCraft cez pripojenie Studia a odpovedať na otázky o modeli, napríklad ktoré miestnosti sú pod danou plochou. Studio nemá vlastnú AI. Pozrite [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
- **Riadky panela nástrojov.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ponúka Zalomenie, 2 riadky alebo 1 riadok; Zalomenie zostáva predvolené.
- **Vstupné zariadenia.** Nastavenia trackpadu, pera, 3D myši, ovládača a MIDI sú zdieľané všetkými aplikáciami.
- **Problémy a Live.** Panel upozornení a relácie Live fungujú ako predtým, s novými kontrolami uvedenými vyššie, ktoré prispievajú do Problémov.
- **Jazyky.** 54 jazykov, z toho desať nových. Iné ako angličtina sú strojové koncepty, ktoré ešte neprečítal rodený hovorca; témy pomocníka sú väčšinou v angličtine.

## Opravené vo verzii 0.8.1

- **Rozloženie Ribbon + Prehliadač projektu.** Vložiť › Importovať CAD, Vložiť › Obrázok a Spravovať › Jednotky projektu hlásili "Ešte nie je hotové v BimCraft". Obrázok teraz otvorí nástroj Obrázok, Importovať CAD otvorí {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF alebo sken) a Jednotky projektu otvoria {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Presunúť a Zarovnať spustia nástroje Presunúť a Zarovnať, Úroveň otvorí {{ui:Add levels…}}, Fázy otvoria sekciu Fázy renovácie a Materiály otvoria knižnicu materiálov.
- **Sekcia tried DWG.** Bola čítaná ako nesprávny typ; opravené v BimCraft a ostatných aplikáciách, ktoré čítajú DWG.
- **Jazyk počas behu.** Studio a zabalené edície môžu teraz prepnúť jazyk bez reštartu. Nie je to ešte otestované na každej platforme; dajte nám vedieť, ak sa jazyk nezmení.
- **Skript balíka Archicad.** `archicad_bundle.py`, samostatné stiahnutie, teraz nájde cestu Archicadu, sleduje priečinok až 20 sekúnd a opakuje pokus vedľa balíka.

## Ešte nie je v tejto verzii

- **Bezpečnostné a návrhové pomôcky.** Ľudia v budove nemajú limit dĺžky úniku z stavebného predpisu (zadáte ho vy) a neboli ručne overené na skutočnom pôdoryse. Hodnoty akustiky, životného cyklu a rizika sú plánovacie hodnoty, nie kontrola normy.
- **Klimatické scenáre a EnergyPlus.** Nie sú vstavané klimatické scenáre: pre prehľad povodne môžete načítať súbor scenára. Spustenie EnergyPlus v prehliadači nie je súčasťou tohto vydania.
- **Rozloženie Ribbon.** Výkaz výmer materiálu zostáva "Ešte nie je hotové", pretože BimCraft nemá zoznam množstiev materiálov, a 54 ďalších sivých nástrojov na páse Ribbon ešte nemá za sebou nástroj BimCraft.
- **Podpisovanie a platformy.** Inštalátory pre Windows a .dmg pre macOS nie sú podpísané, takže SmartScreen zobrazí {{ui:More info}}, potom {{ui:Run anyway}}, a macOS vyžaduje kliknutie pravým tlačidlom a potom {{ui:Open}}. Zostava pre iPad a iPhone nebola pre 0.8.1 znova zostavená.
- **Testy reálnych stránok.** Niektoré staršie testy prehliadača BimCraft stále zlyhávajú na našej testovacej stránke, ako aj pred verziou 0.8.1.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
