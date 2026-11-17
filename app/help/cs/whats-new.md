---
title: Co je nového ve verzi 0.9
summary: Tvary stěn, rozdělení, odsazení, natažení a zamknutí k ose mřížky, úrovně pod zemí, kóty mřížky a měření na půdorysu, duplikované pohledy s pracovními styly a tabulkami per, Hlásit jako, export Collada a Google Earth, Scan do BIM, větrná a seismická analýza, doplňky pro tisk pryskyřicí.
keywords: co je nového, 0.9, poznámky k vydání, tvary stěn, obdélník, mnohoúhelník, oblouk, vybrané čáry, obkreslení obrysu, odsazení, spojení, natažení oknem, zarovnat a zamknout, rozdělit stěnu, mezera, spojit zpět, zamknout k ose, růst od, měřit od, přidat úroveň pod, suterén, příkaz úrovně, kóty mřížky, měření na půdorysu, pracovní styl, duplikovat pohled, vlastní kopie, propojený pohled, tabulka per, tisk jak zobrazeno, hlásit jako, zadat měřítko, importovat svg, umístit do půdorysu, umístit do modelu, collada, dae, kmz, google earth, scan do bim, zatížení větrem, seismika, konečné prvky, panel dokumentů, tisk pryskyřicí, co je nového, seznam změn, změny, 0.8, 0.8.1, verze, nové funkce, evakuace, lidé, fronty, akustika, dozvuk, impulzní odezva, záplava, vítr, zemětřesení, nebezpečí, životní cyklus, životnost, ids, značky, rozpisy, přesun, zarovnat, rozmístit, obrázek, podklad, sken na stěny, areál z civilcraft, výkresy panelů, rámování, solár, pv, rozdělit, vrf, fan coil, dimenzování potrubí, kabelová lávka, osvětlení, beton, seismika, porovnání skenu, epsg, zobrazení, dokumenty, šablona, uhlík, náklady, energyplus, vykreslovací engine, otevřít v, usd, glb, unreal, zpět, doplňky, pcf, symboly, rostliny, trasa, pera, pás karet, panel projektu, rozvržení
from: 5624fe88
---

Toto je to, co se změnilo v BimCraft 0.9 oproti 0.8.1. Dvě hlavní témata jsou skutečný nástroj pro stěny a pohledy, které se chovají tak, jak to čekají lidé přicházející z velkých BIM programů. Kolem nich přicházejí export Collada, asistenti, kteří umějí umístit elektrická zařízení, Scan do BIM a větrná, seismická a konečnoprvková analýza v záložce {{ui:Analýza}}.

## Novinky

### Stěny

- **Kreslení celých tvarů.** V {{ui:Kreslení}} otevřete {{ui:Tvary}} (nebo zvolte tvar v seznamu Tvar v řádku Stěna) pro obdélník, pootočený obdélník, mnohoúhelník o 3 až 64 stranách, oblouk podle středu, tečnový oblouk, stěny na vybraných čarách, nebo stěny kolem uzavřené oblasti, do které kliknete. Obdélník je čtyři stěny se čtyřmi spojenými rohy a jeden krok zpět. Viz [Tvary stěn, rozdělení, odsazení, natažení a zamknutí](topic:wall-tools).
- **Nastavit před kreslením, změnit potom.** Řádek Stěna má {{ui:Odsazení}} a {{ui:Spojení}} (zrušte zaškrtnutí, chcete-li kreslit volně stojící stěny). Poté použijte {{ui:Odsazení}}, {{ui:Natažení oknem}} a {{ui:Zarovnat a zamknout}} na nakreslených stěnách. Přesunutá nebo natažená stěna si ponechá své dveře, okna a kóty. Každý recept je jeden krok zpět.
- **Rozřezání stěn.** {{ui:Rozdělit}}, {{ui:Mezera}}, {{ui:Volné konce}}, {{ui:Smazat úsek}} a {{ui:Spojit zpět}} přerazí stěnu jedním kliknutím nebo tam, kde ji protíná jiná stěna. Řez dveřmi se odmítne. Viz [Tvary stěn, rozdělení, odsazení, natažení a zamknutí](topic:wall-tools).
- **Zamykání stěn k osám mřížky.** Vyberte stěnu podél osy mřížky a zaškrtněte {{ui:Zamknout k ose}} ve {{ui:Vlastnostech}}. Při zapnutém nástroji Mřížka zadejte do {{ui:Posunout o}} vzdálenost pro vybranou osu a zamčené stěny ji následují v jednom kroku zpět.
- **Tvar jedné stěny.** Ve {{ui:Vlastnostech}} jedné stěny můžete připojit její horní nebo spodní hranu ke střeše, podlaze nebo stropu, upravit její obrys v pohledu, naklonit ji, nebo vyříznout otvor ve stěně bez dveří a oken. Viz [Tvar stěny](topic:wall-shape).
- **Délka říká, který konec drží.** {{ui:Růst od}} nastaví, zda při změně délky zůstane na místě začátek, konec, nebo střed.
- **Délka a kóta v půdorysu souhlasí.** {{ui:Měřit od}} (osa, vnitřní líc, nebo vnější líc) řídí jak pole Délka, tak kóty stěn v půdorysu. Začíná na ose, takže kóty stěn v půdorysu nyní čtou osu tam, kde dřív četly vnější líc. Změňte to v řádku Stěna, ve {{ui:Vlastnostech}}, nebo v {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Stěny}}.

### Podlaží, mřížky a měření

- **Přidat úroveň pod.** {{ui:Přidat úroveň pod}} v panelu {{ui:Podlaží}} přidá podlaží pod nejnižší, stejně vysoké, na záporné kótě (Úroveň -1, Úroveň -2). Nic jiného se nepohne. {{ui:Přidat podlaží…}} nyní přijímá záporné výšky. Napíšete-li na příkazový řádek LEVEL, LEVELS, STOREY nebo STOREYS, otevře se {{ui:Přidat podlaží…}}, a v nabídkách a záložkách pásu karet je tlačítko {{ui:Podlaží}}. Viz [Areály, budovy a podlaží](topic:site-building-and-levels).
- **Kóty mřížky v půdorysu.** Se zapnutým nástrojem {{ui:Mřížka}} zaškrtněte {{ui:Kóty}}, chcete-li nakreslit rozestupy mezi sousedními čarami a celkovou velikost za bublinami na půdorysu každého podlaží. Viz [Kótování mřížky](topic:grid-dimensions).
- **Měření v půdorysu.** {{ui:Měřit}} ve skupině {{ui:Kreslení}} dá vzdálenost s rozdíly X a Y mezi dvěma kliky. Nic se v modelu neukládá. Viz [Měření v půdorysu](topic:measure-on-the-plan).
- **Změna více sloupů najednou.** Vyberte sloupy spolu se stěnou a výběr vypíše každý druh s {{ui:Nechat jen tyto}}. Jedno kliknutí ponechá sloupy a ukáže jejich společná pole.
- **Jedna zobrazovaná jednotka všude.** Souřadnice, měření, řezy, měřítka listů, záložka rámu se zatíženími a výsledky a text Problémů se řídí jednotkou, kterou zvolíte. Exporty zůstávají v SI.

### Pohledy, listy a tisk

- **Pracovní styl.** {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Pracovní styl}} volí mezi tím, že každý pohled má vlastní anotace a tabulky per, nebo že je sdílí. Viz [Pracovní styl, duplikované pohledy, pera na papíru, Hlásit jako a šablony](topic:working-style).
- **Duplikace pohledu.** Půdorysy, půdorysy stropů, výnosky, pohledy a řezy lze duplikovat jako {{ui:Vlastní kopie}} nebo {{ui:Propojeno}}; {{ui:Udělat vlastní kopii}} propojený pohled osamostatní. Viz [Pracovní styl, duplikované pohledy, pera na papíru, Hlásit jako a šablony](topic:working-style).
- **Tisk jak zobrazeno, nebo přes tabulku per.** Přepsání per se ukládají do IFC spolu s pohledem a listy a PDF je kreslí tak, jak je zobrazuje obrazovka. Stejné téma pokrývá i tabulky per.
- **Hlásit jako.** {{ui:Hlásit jako}} ve {{ui:Vlastnostech}} zapíše desku nakreslenou jako silnici, stěnu jako panel nebo střechu jako rampu do IFC jako třídu, kterou zvolíte, a počítá ji tak v rozpisech, Množstvích, Hledání, Barvě podle a Problémech.
- **Úpravy v pohledech a řezech.** Kreslete a posouvejte stěny, otvory, podlaží, kóty a poznámky přímo v pohledu nebo řezu, s vlastními velikostmi listů a rámy výkresů. Viz [Úpravy v pohledech a řezech](topic:edit-in-elevations).
- **Listy.** Každý list může být na šířku nebo na výšku. Pole {{ui:Zadat měřítko}} sedí vedle seznamu měřítek na každém umístěném pohledu (1:64, 2:1, 1/4" = 1'). Umístěný výkres můžete přetáhnout nebo posunout šipkami, a {{ui:Formáty…}} › {{ui:Importovat SVG…}} promění váš vlastní návrh listu v rámec výkresu s poli vyplňovanými pro každý list zvlášť.
- **Kredity knihovny na listu.** Sada výkresů s položkami knihovny dostane rozpis Kredity knihovny, který lze umístit na libovolný list. Viz [Kredity knihovny](topic:library-credits).

### Knihovna: umísťování

- **Umístění sleduje pohled.** V pohledu Půdorys ukazuje Knihovna {{ui:Umístit do půdorysu}}; ve 3D ukazuje {{ui:Umístit do modelu}}; v Rozdělení ukazuje rozdělovací tlačítko s {{ui:Umístit do půdorysu}} jako hlavní akcí. Oba způsoby zapíšou stejný prvek IFC. Kartu Knihovny můžete také přetáhnout na půdorys nebo 3D pohled; s perem nebo prstem podržte a pak přetáhněte. Viz [Umístění z Knihovny](topic:place-from-library).

### Soubory a asistenti

- **Collada a Google Earth.** {{ui:Collada}} na panelu nástrojů (v nabídce Soubor ve stylech nabídek) zapíše soubor .dae, nebo .kmz umístěný tam, kde je model na mapě. Viz [Export modelu jako Collada nebo pro Google Earth](topic:collada).
- **Asistenti mohou umístit elektrická zařízení.** Váš připojený asistent má nové nástroje pro přidávání, výpis, změnu a mazání zařízení a pro nastavování světel. Asistenti zůstávají vypnutí, dokud je v {{ui:Nastavení}} nezapnete. Viz [Nechte asistenta AI pracovat s vaším modelem](topic:assistants).
- **Scan do BIM (doplněk).** Ve výchozím nastavení vypnutý a vyžaduje doplněk Point clouds. Navrhne podlaží, stěny, dveře a okna ze skenu s měřenou odchylkou u každého; přijetí je jeden krok zpět.

### Analýza

- **Údaje o větru a seismicitě.** V záložce {{ui:Analýza}}: zatížení větrem podle ASCE 7-10 nebo 7-16 pro tuhou uzavřenou budovu, se silou na každém podlaží jako případy zatížení, a údaje o seismicitě místa s vyhledáním USGS a návrhovým spektrem.
- **Navazující konstrukční výpočty a konečné prvky.** Kontroly betonu podle ACI 318-19, ekvivalentní vodorovné síly podle ASCE 7-22, mezipodlažní posuv, desky a stěny jako plošné prvky, a kombinace zatížení podle ASCE 7 a EN 1990. Náš vlastní engine konečných prvků řeší skořepiny, čtyřstěny a modální analýzu. Viz [Kontrola betonových prvků a tvorba seismických zatížení](topic:concrete-and-seismic) a [Analýza rámů](topic:frame-analysis).

### Jiné doplňky a dokumenty

- **Vnitřní osvětlení (doplněk).** Umisťuje svítidla a zapisuje osvětlenost v luxech jako čísla do půdorysu každého podlaží, s odhadem oslnění a tiskovou zprávou.
- **Panel dokumentů.** {{ui:Soubor}} › {{ui:Dokumenty…}} má vybrání a vrácení se zámkovým souborem, písmena revizí, stavy vydání a historii.
- **Oblasti a ocel.** Jihoafrické balíky výkresů a stavebních předpisů v doplňku Regulations a 976 britských ocelových profilů ve sdílené tabulce průřezů.
- **Bezplatné doplňky pro tisk pryskyřicí.** Slicer, podpěry a raft, zkouška expozice a formáty souborů GOO, SL1, Chitubox a Anycubic, všechny vypnuté ve výchozím nastavení.

## Ve všech aplikacích

- Najetí myší na tlačítko nebo ovládací prvek ukáže bublinu nápovědy Bootstrap.
- Úvodní tip na prázdné kreslicí ploše má tlačítko zavření; BimCraft si zapamatuje, že byl zavřen.
- Pruh záložek panelu, který se nevejde, se nyní posouvá místo toho, aby byl oříznut.
- Když je otevřený dokument, karta prohlížeče ukazuje „<dokument> - BimCraft | CadCraft“.
- V {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Rozvržení}} jsou rozvržení rozbalovací seznam s dvouřádkovými volbami.
- Seznam jazyků v {{ui:Nastavení}} nabízí více jazyků než 0.8; jiné jazyky než angličtina jsou strojové koncepty.

## Opraveno

- **Pohyb funguje na schodištích** a na rampách, zábradlích, rovinách střech, volně stojících zařízeních, obrázcích a cestách.
- **Tažení stěny už nezkosí místnost.** Střední úchyt posune stěnu kolmo k sobě a její rohy klouzají podél spojených stěn. Držte {{key:Mod}} pro starý volný pohyb; {{ui:Srovnat do pravého úhlu}} vrátí 90 stupňů.
- **Změna tloušťky nebo typu ve spojeném uzlu** nyní drží roh uzavřený u L, T, uzlu o třech stěnách i vedle zakřivené stěny.
- **Přesun nebo kopie skupiny místností** drží spojené stěny mimo skupinu spojené.
- **Opětovné provedení zachovává identitu kóty stěny.**
- **Výběr stěny s vypnutým Kreslením** už ve Vlastnostech nevyvolá chybu.
- **Vykreslení přejde na WebGL,** když grafická karta nemůže startovat, místo aby se zastavilo.
- **Kontrolu EnergyPlus lze znovu zapnout.**
- **Dokumenty se otevírají jako vycentrovaný dialog.** {{key:Esc}}, křížek nebo klik na ztlumenou stránku dialog zavře.
- **Tlačítka {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} se ukážou,** jakmile je model otevřen, ne jen poté, co jste jednou zapnuli Kreslení.

## Upřímně o omezeních

- Nic nebylo vytištěno na skutečném hardwaru. Podpěry pro pryskyřici jsou nové a nevyzkoušené.
- Výsledky větru, seismiky, betonu a konečných prvků jsou pomůcky pro kontrolu inženýrem, ověřené proti uzavřeným tvarům, ne proti skutečné budově.
- Odhad osvětlení je ověřen proti našemu vlastnímu sledování paprsků, ne proti jiným programům pro osvětlení.
- Jihoafrická čísla nejsou ověřena.
- Styly spojů stěn (na tupo, pokos, srovnat konec) a priorita vrstev nejsou hotové; rohy jsou pokosy.
- Jazyky jiné než angličtina jsou strojové koncepty.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Dřívější změny jsou v poznámkách k verzím 0.8 a 0.8.1 níže na této stránce.

## Dříve: 0.8 a 0.8.1

Toto je to, co se změnilo v BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti 0.7. BimCraft nyní umí odpovídat na otázky o budově a testovat ji s lidmi, zvukem, vodou, větrem a zemětřesením, a kreslit ji s více nástroji; 0.8.1 je opravná verze.

### Novinky

**Testování budovy**

- **Lidé v budově.** Část {{ui:Lidé v budově}} levého panelu provede evakuaci nebo běžný příchod za den vašimi místnostmi, dveřmi a schodišti. Uvidíte fronty tam, kde se budova zužuje, nejdelší chůzi k východu z každé místnosti a jak dlouho trvá poslední člověk. Zaškrtněte {{ui:Zavřeno}} u dveří, chcete-li vidět, co se změní, a zaškrtněte {{ui:Zobrazit lidi ve 3D pohledu}}, chcete-li sledovat chodce. Zjištění jdou do Problémů. Hrubý model davu pro návrhová rozhodnutí, ne osvědčení o požární bezpečnosti. Viz [Procházka lidí budovou](topic:people-in-the-building).
- **Akustika místností a poslech.** Část {{ui:Akustika místností}} dá dobu dozvuku každé místnosti po oktávových pásmech (Sabine a Eyring) z její velikosti a povrchů, které vyberete, a s vaším vlastním cílem řekne, kolik pohltivosti by mu vyhovělo. {{ui:Přehrát v této místnosti}} přehraje hlas, tlesk, drnkané tóny nebo váš vlastní zvukový soubor přes impulzní odezvu spočítanou pro místnost. Hodnoty pohltivosti jsou typické publikované hodnoty, které můžete nahradit. Viz [Akustika místností](topic:room-acoustics).
- **Přehrávání záplavy, větru a zemětřesení.** {{ui:Přehrání nebezpečí}} přehraje vodu stoupající místnostmi, tlak větru na každé podlaží a zemětřesení, které třese podlažími, na půdorysu nebo pohledu s časovou posuvnou lištou. Jednoduché modely s předpoklady na panelu; není to kontrola podle předpisů. Viz [Přehrání záplavy, větru nebo zemětřesení](topic:hazard-playback).
- **Co se opotřebuje za padesát let.** {{ui:Pohled na životní cyklus}} vypíše okna, dveře, povrchy a střechu s životností každého, roky, kdy se vymění, a když zadáte cenu za jednotku, náklady podle roku a jejich současnou hodnotu. {{ui:Uložit harmonogram (CSV)}} jej zapíše ven. Životnosti jsou plánovací hodnoty. Viz [Co se opotřebuje za padesát let](topic:life-cycle-view).
- **Kontrola betonu a seismiky.** Bloky {{ui:Betonové prvky}} a {{ui:Seismická zatížení}} v záložce {{ui:Analýza}} kontrolují betonové trámy a sloupy podle ACI 318-19 a tvoří ekvivalentní vodorovné síly podle ASCE 7-22 na tuhých podlahách, s mezipodlažním posuvem. Pro kontrolu inženýrem. Viz [Kontrola betonových prvků a tvorba seismických zatížení](topic:concrete-and-seismic).

**Kontrola a hlášení**

- **Kontrola podle IDS.** Nahrajte soubor `.ids`, který vám dal klient, a uvidíte v Problémech každý prvek, který mu nevyhovuje, dříve než dodáte IFC. Otevřete {{ui:Kontrola podle IDS}} v {{ui:Kontroly modelu}}. Viz [Kontrola modelu podle IDS klienta](topic:check-against-ids).
- **Značky a rozpisy.** Definujte si vlastní značky, nastavte je na mnoho prvků najednou a vytvořte rozpisy, jejichž sloupce, filtry a skupiny je čtou; značky se ukládají do IFC. Viz [Značky a rozpisy](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} vyplní šablonu specifikace z otevřeného IFC a uloží ji jako PDF, dokument Word nebo Markdown. Viz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnání skenu s modelem.** S otevřeným mrakem bodů {{ui:Porovnat}} posoudí každý prvek jako postavený, částečně postavený, chybějící nebo nedosažený, a ukáže procento postavení. Viz [Porovnání skenu s modelem](topic:compare-scan-with-model).
- **Uhlík a náklady.** Panel Uhlík sčítá vtělený uhlík z tabulky faktorů, kterou můžete upravovat, a panel Náklady rozkládá ceny přes časový plán 4D. Faktory, které přicházejí s BimCraft, jsou obecné a označené jako neověřené. Viz [Vtělený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Libovolná mapová projekce.** {{ui:Měřit}} › {{ui:Souřadnicový systém…}} přijme číslo EPSG, zónu UTM, název nebo vlastní definici projekce. Viz [Georeferencování libovolnou projekcí](topic:georeference-any-projection).

**Kreslení a úpravy**

- **Přesun, zarovnání a rozmístění.** V {{ui:Sestavení}}; {{key:Shift+M}} spustí Přesun (obyčejné {{key:M}} je pořád Měřit). Přesun kopíruje za pochodu s {{key:C}}, každý krok je jeden krok zpět a putuje v relaci Live TeamWork. Viz [Přesun, kopírování, zarovnání a rozmístění](topic:move-align-distribute).
- **Obrázky pod půdorysem.** {{ui:Sestavení}} › {{ui:Obrázek}} umístí PNG, JPEG nebo WebP pod půdorys podlaží nebo na svislou rovinu. Měřítko nastavíte dvěma body a můžete jej posouvat, otáčet, ztlumit a zamknout. Oblast zkopírovaná v MarkupCraft se vloží v měřítku svého listu. Viz [Obrázek pod půdorysem](topic:pictures-as-backgrounds).
- **Stěny ze skenu.** Při otevřeném skenu přicházejí stěny, dveře a místnosti jako návrhy, které si ponecháte nebo odmítnete jeden po druhém, v jednom kroku zpět. Nacházejí se jen stěny ve dvou kolmých směrech. Viz [Převod skenu na stěny](topic:scan-to-walls).
- **Obkreslení, pera a schodiště z náčrtu.** {{ui:Obkreslit}} ukáže jiné podlaží přerušovaně pod půdorysem, {{ui:Pera}} dá stěnám, dveřím a oknům vlastní tloušťku čáry v jednom pohledu, a {{ui:Nakreslit schodiště}} promění čáru chůze ve schodiště. Otevře se síť Wavefront OBJ. Viz [Obkreslení podlaží, pera a schodiště z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy podle adresy.** Budovy a parcela, které našel CivilCraft Address to site, přicházejí jako návrhy; zaškrtnete ty, které chcete přidat. Viz [Start z areálu CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelů.** {{ui:Sestavení}} › {{ui:Výkresy panelů}} rámuje stěny, podlahy a střechy z dřeva nebo lehké ocelové konstrukce a uloží výkaz řezů jako CSV a dílenské výkresy jako PDF. Výchozí hodnoty, ne statický návrh. Viz [Výkresy panelů](topic:panel-drawings).
- **Paleta symbolů a rostliny.** {{ui:Sestavení}} › {{ui:Paleta symbolů}} najde elektrické a instalační symboly podle názvu; zdroj {{ui:Rostliny}} v {{ui:Knihovně}} vypisuje zhruba 400 rostlin s značkami půdorysu. Viz [Paleta symbolů](topic:symbol-palette) a [Umístění rostliny](topic:plant-list).

**Potrubí, vzduchovody a energie**

- **Split, VRF a fan coily.** Vnitřní a venkovní jednotky s jejich přípojkami a chladicí vedení dimenzovaná podle tabulky typických příkladových hodnot, kterou můžete měnit. Viz [Split, VRF a fan coily](topic:split-vrf-fan-coils).
- **Výpočty.** Panel Výpočty kontroluje dimenzování přívodního potrubí a vzduchovodů s tlakovou ztrátou, vede kabely kabelovými lávkami a chráničkami a ukazuje jejich naplnění, a počítá osvětlenost ze souborů IES nebo EULUMDAT. Výchozí hodnoty jsou označeny; zadejte hodnoty vašeho předpisu. Viz [Výpočty potrubí, vzduchovodů, kabelů a světla](topic:mep-calculations).
- **Soubory PCF.** {{ui:Exportovat PCF}} nástroje Potrubí zapíše trasy pro programy pro pevnost potrubí a izometrie, a přečtený soubor PCF nakreslí jeho potrubí. Viz [Soubory komponent potrubí](topic:piping-pcf).
- **Solární PV.** Umístěte pole na střechy nebo na zem, stínujte je z modelu, odhadněte roční výrobu energie, zkontrolujte řetězce a vytvořte data jednopólového schématu. Startovací modul a ztráty jsou obecné. Viz [Solární PV](topic:solar-pv).
- **Soubor EnergyPlus.** Panel Kontrola s EnergyPlus zapíše model jako IDF pro spuštění ve vašem vlastním EnergyPlus. Spuštění v prohlížeči potřebuje sestavení, které hostujete sami, a adresu, kterou zadáte; BimCraft jej neobsahuje. Viz [Kontrola vytápění a chlazení s EnergyPlus](topic:check-with-energyplus).

**Obrázky a soubory**

- **Volba vykreslovacího enginu.** {{ui:Vykreslit}} má volbu {{ui:Engine}}. Naše dva vestavěné enginy (Rychlý a Sledovač paprsků) zůstávají výchozí. {{ui:Otevřít v}} uloží scénu jako soubor USD nebo glTF a projektovou složku Unreal jako .zip; v CadCraft Studio může doplněk přidat engine. Plugin Unreal, který projekt otevírá, není vydán. Viz [Volba programu, který kreslí obrázek](topic:render-engines).
- **Zpět ve Studiu.** Uvnitř CadCraft Studio BimCraft řekne Studiu každý dokončený krok, aby Studio mohlo vrátit váš poslední krok v okně, které jste použili naposledy. Viz [Zpět napříč aplikacemi](topic:undo-across-apps).
- **Doplňky ve vašem souboru.** IFC zaznamenává, které doplňky do něj zapisovaly, a při otevření nabídne ty, které nemáte. Viz [Doplňky ve vašem souboru](topic:add-ons-in-your-file).

**Ve všech aplikacích**

- **Připojte svou AI.** Váš vlastní asistent může ovládat BimCraft přes připojení Studia a odpovídat na otázky o modelu, například které místnosti jsou pod danou plochou. Studio nemá vlastní AI. Viz [Nechte asistenta AI pracovat s vaším modelem](topic:assistants).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí Zalomit, 2 řádky nebo 1 řádek; výchozí zůstává Zalomit.
- **Vstupní zařízení.** Nastavení touchpadu, pera, 3D myši, ovladače a MIDI sdílejí všechny aplikace.
- **Problémy a Live.** Panel upozornění a relace Live fungují jako dřív, s novými kontrolami výše, které napájejí Problémy.
- **Jazyky.** 54 jazyků, z toho deset nových. Jiné než angličtina jsou strojové koncepty, které zatím nepřečetl rodilý mluvčí; témata nápovědy jsou většinou v angličtině.

### Opraveno ve 0.8.1

- **Rozvržení pásu karet a Průzkumník projektu.** Vložit › Importovat CAD, Vložit › Obrázek a Správa › Jednotky projektu hlásily „V BimCraft zatím není hotovo“. Obrázek nyní otevře nástroj Obrázek, Importovat CAD otevře {{ui:Sestavení}} › {{ui:Z výkresu…}} (DWG, DXF, PDF nebo sken) a Jednotky projektu otevřou {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Jednotky}}. Přesun a Zarovnání spustí nástroje Přesun a Zarovnání, Úroveň otevře {{ui:Přidat podlaží…}}, Fáze otevře část Fáze rekonstrukce a Materiály otevře knihovnu materiálů.
- **Sekce DWG classes.** Byla čtena jako špatný typ; opraveno v BimCraft a ostatních aplikacích, které čtou DWG.
- **Jazyk za běhu.** Studio a zabalená vydání mohou nyní přepnout jazyk bez restartu. Zatím nebylo otestováno na každé platformě; dejte nám vědět, pokud se jazyk nezmění.
- **Skript archicad_bundle.** `archicad_bundle.py`, samostatné ke stažení, nyní najde cestu Archicadu, sleduje složku až 20 sekund a opakuje pokus vedle balíku.

### Ještě není v této verzi

- **Bezpečnostní a návrhové pomůcky.** Lidé v budově nemají limit délky úniku podle stavebního předpisu (limit zadáte vy) a nebyli ručně zkontrolováni na skutečném půdorysu. Akustické, životního cyklu a hodnoty nebezpečí jsou plánovací hodnoty, ne kontrola podle předpisů.
- **Klimatické scénáře a EnergyPlus.** Žádné vestavěné klimatické scénáře: pro běh záplavy můžete načíst soubor scénáře. Běh EnergyPlus v prohlížeči není součástí této verze.
- **Rozvržení pásu karet.** Materiálový výkaz zůstává „Není hotovo“, protože BimCraft nemá seznam množství materiálů, a 54 dalších šedých nástrojů pásu karet nemá za sebou zatím žádný nástroj BimCraft.
- **Podepisování a platformy.** Instalátory Windows a soubor .dmg pro macOS nejsou podepsány, takže SmartScreen ukazuje {{ui:Více informací}}, pak {{ui:Přesto spustit}}, a macOS vyžaduje pravé tlačítko a pak {{ui:Otevřít}}. Sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu sestaveno.
- **Testy na skutečných stránkách.** Některé starší testy prohlížeče BimCraft na naší testovací stránce stále selhávají, stejně jako před 0.8.1.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Dřívější změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
