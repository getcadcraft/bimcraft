---
title: Novinky ve verzi 0.9 (dřívější)
summary: Tvary stěn, rozdělení, odsazení, natažení a zamknutí k ose mřížky, podlaží pod úrovní terénu, kóty mřížky a Měřit na půdorysu, duplicitní pohledy s pracovními styly a tabulkami per, Vykázat jako, export Collada a Google Earth, Scan do BIM, analýza větru a seismicity, doplňky pro tisk z pryskyřice.
keywords: novinky 0.9, dřívější verze, novinky, 0.9, poznámky k vydání, tvary stěn, obdélník, mnohoúhelník, oblouk, výběr čar, obkreslit obrys, odsazení, spojení, natažení oknem, zarovnat a zamknout, rozdělit stěnu, mezera, spojit zpět, zamknout k ose, růst od, měřit od, přidat úroveň pod, suterén, příkaz podlaží, kóty mřížky, měřit na půdorysu, pracovní styl, duplikovat pohled, vlastní kopie, propojený pohled, tabulka per, tisk tak, jak je vidět, vykázat jako, zadejte měřítko, import svg, umístit do půdorysu, umístit do modelu, collada, dae, kmz, google earth, scan do bim, zatížení větrem, seismicita, konečné prvky, panel dokumentů, tisk z pryskyřice, novinky, changelog, změny, 0.8, 0.8.1, verze, nové funkce, evakuace, lidé, fronty, akustika, dozvuk, impulsní odezva, záplava, vítr, zemětřesení, nebezpečí, životní cyklus, životnost, ids, značky, tabulky, posun, zarovnat, rozmístit, obrázek, podklad, sken na stěny, lokalita z civilcraft, výkresy panelů, rámová konstrukce, solár, fv, rozdělený, vrf, fan coil, dimenzování potrubí, kabelová žlab, osvětlení, beton, seismicita, porovnání skenu, epsg, projekce, dokumenty, šablona, uhlík, náklady, jádro vykreslování, otevřít v, usd, glb, unreal, zpět, doplňky, pcf, symboly, rostliny, obkreslení, pera, pás nástrojů, prohlížeč projektu, rozvržení
from: 816df7f8
---

Toto se změnilo v BimCraft 0.9 oproti 0.8.1. Dvě hlavní témata jsou skutečný nástroj pro stěny a pohledy, které se chovají tak, jak lidé z velkých BIM programů čekají. Kolem nich přicházejí export Collada, asistenti, kteří umějí umisťovat elektrická zařízení, Scan do BIM a práce s větrem, seismicitou a konečnými prvky na kartě {{ui:Analýza}}.

## Nové

### Stěny

- **Kreslení celých tvarů.** V {{ui:Kreslení}} otevřete {{ui:Tvary}} (nebo vyberte tvar v seznamu Tvar v řádku Stěna) pro obdélník, pootočený obdélník, mnohoúhelník o 3 až 64 stranách, oblouk podle středu, tečnový oblouk, stěny podél vybraných čar nebo stěny kolem uzavřené oblasti, na kterou kliknete uvnitř. Obdélník je čtyři stěny se čtyřmi spojenými rohy a jeden krok zpět. Viz [Tvary stěn, rozdělení, odsazení, natažení a zamknutí](topic:wall-tools).
- **Nastavit před kreslením, změnit potom.** Řádek Stěna má {{ui:Odsazení}} a {{ui:Spojení}} (zrušte zaškrtnutí pro samostatné stěny). Potom použijte {{ui:Odsazení}}, {{ui:Natažení oknem}} a {{ui:Zarovnat a zamknout}} na nakreslených stěnách. Přesunutá nebo natažená stěna si zachová dveře, okna a kóty. Každý postup je jeden krok zpět.
- **Rozřezání stěn.** {{ui:Rozdělit}}, {{ui:Mezera}}, {{ui:Volné konce}}, {{ui:Smazat úsek}} a {{ui:Spojit zpět}} rozřežou stěnu jedním kliknutím nebo tam, kde ji protíná jiná stěna. Řez přes dveře je odmítnut. Viz [Tvary stěn, rozdělení, odsazení, natažení a zamknutí](topic:wall-tools).
- **Zamknutí stěn k osám mřížky.** Vyberte stěnu podél osy mřížky a zaškrtněte {{ui:Zamknout k ose}} v {{ui:Vlastnosti}}. S nástrojem Mřížka zapnutým napište vzdálenost do pole {{ui:Posunout o}} pro vybranou čáru a zamknuté stěny se posunou v jednom kroku zpět.
- **Tvar jedné stěny.** V {{ui:Vlastnosti}} jedné stěny můžete její horní nebo spodní hranu připojit ke střeše, podlaze nebo stropu, upravit obrys výšky, naklonit ji nebo vyříznout otvor ve stěně bez dveří nebo oken. Viz [Tvar stěny](topic:wall-shape).
- **Délka říká, který konec zůstane.** {{ui:Růst od}} nastaví, zda při změně délky zůstane na místě začátek, konec nebo střed.
- **Délka a kóta na půdorysu se shodují.** {{ui:Měřit od}} (osa, vnitřní líc nebo vnější líc) řídí jak pole Délka, tak kóty stěn na půdorysu. Začíná na ose, takže kóty stěn na půdorysu nyní ukazují osu, kde dříve ukazovaly vnější líc. Změníte ji v řádku Stěna, v {{ui:Vlastnosti}} nebo v {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Stěny}}.

### Podlaží, mřížky a měření

- **Přidat úroveň pod.** {{ui:Přidat úroveň pod}} v panelu {{ui:Podlaží}} přidá podlaží pod nejnižší, stejně vysoké, na záporné kótě (Podlaží -1, Podlaží -2). Nic jiného se nehýbe. {{ui:Přidat podlaží…}} nyní přijímá záporné výšky. Napsání LEVEL, LEVELS, STOREY nebo STOREYS na příkazovém řádku otevře {{ui:Přidat podlaží…}} a v nabídkách a kartách pásu je tlačítko {{ui:Podlaží}}. Viz [Lokality, budovy a podlaží](topic:site-building-and-levels).
- **Kóty mřížky na půdorysu.** S nástrojem {{ui:Mřížka}} zapnutým zaškrtněte {{ui:Kóty}}, aby se nakreslil rozestup mezi sousedními čarami a celková velikost za bublinami na půdorysu každého podlaží. Viz [Okótování mřížky](topic:grid-dimensions).
- **Měření na půdorysu.** {{ui:Měřit}} ve skupině {{ui:Kreslení}} udá vzdálenost s rozdíly X a Y mezi dvěma kliknutími. Nic se v modelu neukládá. Viz [Měření na půdorysu](topic:measure-on-the-plan).
- **Změna více sloupů najednou.** Vyberte sloupy spolu se stěnou a seznam je rozdělí podle druhu s {{ui:Nechat jen tyto}}. Jedním kliknutím se sloupy ponechají a ukážou se jejich společná pole.
- **Jedna zobrazovací jednotka všude.** Souřadnice, měření, řezy, měřítka listů, zatížení a výsledky na kartě rámu a text v panelu Problémy se řídí jednotkou, kterou vyberete. Exporty zůstávají v SI.

### Pohledy, listy a tisk

- **Pracovní styl.** {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Pracovní styl}} volí mezi tím, že každý pohled má vlastní anotace a tabulky per, nebo že je sdílí. Viz [Pracovní styl, duplikované pohledy, pera na papíře, Vykázat jako a šablony](topic:working-style).
- **Duplikování pohledu.** Půdorysy, půdorysy stropů, výnosky, pohledy a řezy lze duplikovat jako {{ui:Vlastní kopie}} nebo {{ui:Propojeno}}; {{ui:Udělat vlastní kopii}} propojený pohled osamostatní. Viz [Pracovní styl, duplikované pohledy, pera na papíře, Vykázat jako a šablony](topic:working-style).
- **Tisk tak, jak se zobrazuje, nebo přes tabulku per.** Přepsání per se uchovává v IFC spolu s pohledem a listy a PDF je kreslí tak, jak je vidět na obrazovce. Stejné téma pokrývá i tabulky per.
- **Vykázat jako.** {{ui:Vykázat jako}} v {{ui:Vlastnosti}} zapíše desku nakreslenou jako silnici, stěnu jako panel nebo střechu jako rampu do IFC jako třídu, kterou vyberete, a v tabulkách, Množstvích, Najít, Obarvit podle a Problémech ji počítá právě tak.
- **Úpravy v pohledech a řezech.** Kreslete a posouvejte stěny, otvory, podlaží, kóty a poznámky přímo v pohledu nebo řezu, s vlastními velikostmi listů a razítky. Viz [Úpravy v pohledech a řezech](topic:edit-in-elevations).
- **Listy.** Každý list může být na šířku nebo na výšku. Pole {{ui:Zadejte měřítko}} sedí vedle seznamu měřítek u každého umístěného pohledu (1:64, 2:1, 1/4" = 1'). Umístěný výkres můžete přetáhnout nebo posunout klávesami se šipkami a {{ui:Formáty…}} › {{ui:Importovat SVG…}} promění váš vlastní návrh listu v razítko s poli vyplňovanými pro každý list.
- **Zásluhy knihovny na listu.** Sada výkresů s položkami knihovny dostane tabulku zásluh knihovny, kterou můžete umístit na libovolný list. Viz [Zásluhy knihovny](topic:library-credits).

### Knihovna: umísťování

- **Umístění podle pohledu.** V pohledu {{ui:Půdorys}} zobrazí Knihovna {{ui:Umístit do půdorysu}}; ve 3D {{ui:Umístit do modelu}}; v pohledu {{ui:Rozdělit}} tlačítko s rozbalovací nabídkou a hlavní akcí {{ui:Umístit do půdorysu}}. Oba způsoby zapíšou stejný prvek IFC. Kartu z Knihovny můžete přetáhnout i na půdorys nebo 3D pohled; perem nebo prstem stiskněte a podržte, potom táhněte. Viz [Umístění z Knihovny](topic:place-from-library).

### Soubory a asistenti

- **Collada a Google Earth.** {{ui:Collada}} na panelu nástrojů (v nabídce {{ui:Soubor}} u stylů nabídek) zapíše soubor .dae, nebo .kmz umístěný tam, kde je model na mapě. Viz [Export modelu jako Collada nebo pro Google Earth](topic:collada).
- **Asistenti umějí umisťovat elektrická zařízení.** Váš připojený asistent má nové nástroje pro přidávání, výpis, změnu a mazání zařízení a pro nastavování světel. Asistenti zůstávají vypnutí, dokud je v {{ui:Nastavení}} nezapnete. Viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).
- **Scan do BIM (doplněk).** Ve výchozím nastavení vypnutý a vyžaduje doplněk Mračna bodů. Navrhuje podlaží, stěny, dveře a okna ze skenu s naměřenou odchylkou u každého; přijetí je jeden krok zpět.

### Analýza

- **Data místa pro vítr a seismicitu.** Na kartě {{ui:Analýza}}: zatížení větrem podle ASCE 7-10 nebo 7-16 pro tuhou uzavřenou budovu se silou na každém podlaží jako zatěžovací případy, a data místa seismicity s vyhledáním USGS a návrhovým spektrem.
- **Navazující konstrukční práce a konečné prvky.** Kontroly betonu podle ACI 318-19, ekvivalentní vodorovné síly podle ASCE 7-22, mezipodlažní posun, desky a stěny jako plošné prvky a kombinace zatížení z ASCE 7 a EN 1990. Náš vlastní výpočetní modul konečných prvků zvládá skořepiny, čtyřstěny a modální analýzu. Viz [Kontrola betonových prvků a seismická zatížení](topic:concrete-and-seismic) a [Rámová analýza](topic:frame-analysis).

### Ostatní doplňky a dokumenty

- **Interiérové osvětlení (doplněk).** Umisťuje svítidla a zapisuje osvětlení v luxech jako čísla do půdorysu každého podlaží, s odhadem oslnění a tiskovou zprávou.
- **Panel dokumentů.** {{ui:Soubor}} › {{ui:Dokumenty…}} nabízí vypůjčení a vrácení se zámkovým souborem, revizní písmena, stavy vydání a historii.
- **Regiony a ocel.** Jihoafrické balíčky výkresů a stavebních předpisů v doplňku Předpisy a 976 britských ocelových profilů ve sdílené tabulce průřezů.
- **Bezplatné doplňky pro tisk z pryskyřice.** Slicer, podpěry a raft, zkouška expozice a formáty souborů GOO, SL1, Chitubox a Anycubic, všechny ve výchozím nastavení vypnuté.

## Ve všech aplikacích

- Najetí myší na tlačítko nebo ovládací prvek ukáže nápovědu Bootstrap.
- Úvodní tip v prázdné kreslicí oblasti má tlačítko zavřít; BimCraft si pamatuje, že byl zavřen.
- Lišta karet panelu, která se nevejde, se nyní posouvá místo toho, aby byla oříznuta.
- S otevřeným dokumentem zní záložka prohlížeče „<document> - BimCraft | CadCraft“.
- V {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Rozvržení}} jsou rozvržení rozbalovací seznam voleb ve dvou řádcích.
- Seznam jazyků v {{ui:Nastavení}} nabízí více jazyků než verze 0.8; jazyky jiné než angličtina jsou strojové koncepty.

## Opraveno

- **Přesun funguje na schodištích** a také na rampách, zábradlích, rovinách střech, samostatných zařízeních, obrázcích a cestách.
- **Tažení stěny už nezkresluje místnost.** Střední úchyt přesune stěnu čtvercově k sobě a její rohy se posunou podél spojených stěn. Podržte {{key:Mod}} pro starý volný přesun; {{ui:Srovnat do pravého úhlu}} vrátí 90 stupňů.
- **Změna tloušťky nebo typu ve spojeném uzlu** nyní ponechá roh uzavřený u písmene L, T, uzlu o třech stěnách a vedle zakřivené stěny.
- **Přesun nebo kopírování skupiny místností** ponechá spojené stěny mimo skupinu spojené.
- **Znovu zachová identitu kóty stěny.**
- **Výběr stěny s vypnutým Kreslením** už nevyvolá chybu ve Vlastnostech.
- **Vykreslení se přepne na WebGL**, když GPU nelze spustit, místo zastavení.
- **Kontrolu EnergyPlus lze zase zapnout.**
- **Dokumenty se otevírají jako vystředěný dialog.** {{key:Esc}}, křížek nebo klik na ztmavenou stránku dialog zavře.
- **Tlačítka {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} se zobrazí** hned, jakmile je model otevřen, ne až po prvním zapnutí Kreslení.

## Upřímně o omezeních

- Nic nebylo vytištěno na skutečném hardwaru. Podpěry z pryskyřice jsou nové a neověřené.
- Výsledky větru, seismicity, betonu a konečných prvků jsou pomocné podklady pro inženýra, ověřené proti uzavřeným vzorcům, ne proti skutečné budově.
- Scan do BIM byl testován na syntetické budově, ne na skutečném skenu, a nachází jen pravoúhlé místnosti.
- Collada tu nebyla otevřena v Blenderu ani v Google Earth.
- Odhad osvětlení je ověřen proti naší vlastní trase, ne proti jiným programům pro osvětlení.
- Jihoafrická čísla jsou neověřená.
- Styly spojení stěn (natupo, na úhel, rovně) a priorita vrstev nejsou hotové; rohy jsou sraženy na úhel.
- Jazyky jiné než angličtina jsou strojové koncepty.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Dřívější změny jsou v poznámkách k verzím 0.8 a 0.8.1 níže na této stránce.

## Dříve: 0.8 a 0.8.1

Toto se změnilo v BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. BimCraft nyní umí odpovídat na otázky o budově a testovat ji s lidmi, zvukem, vodou, větrem a zemětřeseními a kreslit ji více nástroji; 0.8.1 je opravná verze.

### Nové

**Testování budovy**

- **Lidé v budově.** Sekce {{ui:Lidé v budově}} levého panelu provede evakuací nebo běžným dnem příchodů vašimi místnostmi, dveřmi a schodišti. Vidíte fronty tam, kde se budova zužuje, nejdelší cestu k východu z každé místnosti a to, jak dlouho trvá poslední člověk. Zaškrtněte {{ui:Zavřeno}} u dveří, abyste viděli, co se změní, a zaškrtněte {{ui:Zobrazit lidi ve 3D pohledu}}, abyste sledovali chodce. Zjištění jdou do Problémů. Jde o hrubý model davu pro návrhová rozhodnutí, ne o certifikát požární bezpečnosti. Viz [Projděte lidi budovou](topic:people-in-the-building).
- **Akustika místností a poslech.** Sekce {{ui:Akustika místností}} udává dobu dozvuku každé místnosti po oktávových pásmech (Sabine a Eyring) z její velikosti a povrchů, které zvolíte, a s vaším vlastním cílem řekne, kolik pohltivosti by ho splnilo. {{ui:Přehrát v této místnosti}} přehraje hlas, tleskání, drnkané tóny nebo váš vlastní zvukový soubor skrz impulsní odezvu spočítanou pro místnost. Hodnoty pohltivosti jsou typické publikované hodnoty, které nahradíte svými. Viz [Akustika místností](topic:room-acoustics).
- **Přehrání záplavy, větru a zemětřesení.** {{ui:Přehrání nebezpečí}} přehraje stoupání vody místnostmi, tlak větru na každé podlaží a zemětřesení, které otřásá podlažími, na půdorysu nebo pohledu s časovým posuvníkem. Jde o jednoduché modely s jejich předpoklady na panelu; nejde o kontrolu předpisů. Viz [Přehrání záplavy, větru nebo zemětřesení](topic:hazard-playback).
- **Co se opotřebuje za padesát let.** {{ui:Pohled na životní cyklus}} vypisuje okna, dveře, povrchy a střechu, každé s životností, roky výměny a, když zadáte cenu za jednotku, náklady podle roku a jejich současnou hodnotu. {{ui:Uložit harmonogram (CSV)}} je zapíše ven. Životnosti jsou plánovací údaje. Viz [Co se opotřebuje za padesát let](topic:life-cycle-view).
- **Kontroly betonu a seismicity.** Bloky {{ui:Betonové prvky}} a {{ui:Seismická zatížení}} na kartě {{ui:Analýza}} kontrolují betonové trámy a sloupy podle ACI 318-19 a tvoří ekvivalentní vodorovné síly podle ASCE 7-22 na tuhých podlažích, s mezipodlažním posunem. Je to k posouzení inženýrem. Viz [Kontrola betonových prvků a seismická zatížení](topic:concrete-and-seismic).

**Kontrola a výkaz**

- **Kontrola podle IDS.** Nahrajte soubor `.ids`, který vám dal klient, a v Problémech uvidíte každý prvek, který mu nevyhovuje, dříve než dodáte IFC. Otevřete {{ui:Kontrola podle IDS}} pod {{ui:Kontroly modelu}}. Viz [Kontrola modelu podle IDS klienta](topic:check-against-ids).
- **Značky a tabulky.** Definujte vlastní značky, přiřaďte je mnoha prvkům najednou a vytvořte tabulky, jejichž sloupce, filtry a seskupení je čtou; značky se uchovávají v IFC. Viz [Značky a tabulky](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} vyplní šablonu specifikace z otevřeného IFC a uloží ji jako PDF, dokument Word nebo Markdown. Viz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnání skenu s modelem.** Když je otevřen mrak bodů, {{ui:Porovnat}} posoudí každý prvek jako postavený, částečně postavený, chybějící nebo nedosažený a ukáže procento postavení. Viz [Porovnání skenu s modelem](topic:compare-scan-with-model).
- **Uhlík a náklady.** Podokno Uhlík sečte vtělený uhlík z tabulky faktorů, kterou můžete upravit, a podokno Náklady rozloží ceny přes 4D harmonogram. Faktory dodané s BimCraft jsou obecné a označené jako neověřené. Viz [Vtělený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Libovolná kartografická projekce.** {{ui:Měřit}} › {{ui:Souřadnicový systém…}} přijme číslo EPSG, zónu UTM, název nebo vlastní definici projekce. Viz [Georeferencování s libovolnou projekcí](topic:georeference-any-projection).

**Kreslení a úpravy**

- **Přesun, zarovnání a rozmístění.** Pod {{ui:Sestavení}}; {{key:Shift+M}} spustí Přesun (prosté {{key:M}} je pořád Měřit). Přesun při pohybu kopíruje s {{key:C}}, každý krok je jeden krok zpět a funguje i v relaci Live TeamWork. Viz [Přesun, kopírování, zarovnání a rozmístění](topic:move-align-distribute).
- **Obrázky pod půdorysem.** {{ui:Sestavení}} › {{ui:Obrázek}} umístí PNG, JPEG nebo WebP pod půdorys podlaží nebo na svislou rovinu. Měřítko nastavíte dvěma body a můžete jej přesunout, otočit, ztlumit a zamknout. Oblast zkopírovaná v MarkupCraft se vloží v měřítku svého listu. Viz [Obrázek pod půdorysem](topic:pictures-as-backgrounds).
- **Stěny ze skenu.** Při otevřeném skenu přijdou stěny, dveře a místnosti jako návrhy, které si jednotlivě ponecháte nebo odmítnete, v jednom kroku zpět. Nalezeny jsou jen stěny ve dvou kolmých směrech. Viz [Převod skenu na stěny](topic:scan-to-walls).
- **Obkreslení, pera a schodiště z náčrtu.** {{ui:Obkreslit}} ukáže jiné podlaží čárkovaně pod půdorysem, {{ui:Pera}} dá stěnám, dveřím a oknům vlastní tloušťku čáry v jednom pohledu a {{ui:Nakreslit schodiště}} promění čáru chůze na schodiště. Otevře se síť Wavefront OBJ. Viz [Obkreslení podlaží, pera a schodiště z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy kolem adresy.** Budovy a parcela, které našla v CivilCraft funkce Adresa na lokalitu, přijdou jako návrhy; zaškrtněte ty, které chcete přidat. Viz [Začněte s lokalitou z CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelů.** {{ui:Sestavení}} › {{ui:Výkresy panelů}} zarámuje stěny, podlahy a střechy z dřeva nebo tenkostěnné oceli a uloží seznam řezání jako CSV a dílenské výkresy jako PDF. Jde o výchozí hodnoty, ne o konstrukční návrh. Viz [Výkresy panelů](topic:panel-drawings).
- **Paleta symbolů a rostliny.** {{ui:Sestavení}} › {{ui:Paleta symbolů}} najde elektrické a instalační symboly podle názvu; zdroj {{ui:Rostliny}} v {{ui:Knihovna}} vypisuje asi 400 rostlin s půdorysnými symboly. Viz [Paleta symbolů](topic:symbol-palette) a [Umístění rostliny](topic:plant-list).

**Potrubí, vzduchotechnika a energie**

- **Split, VRF a fan coily.** Vnitřní a venkovní jednotky s jejich připojeními a sady chladicích potrubí dimenzované podle tabulky typických příkladových hodnot, které můžete změnit. Viz [Split, VRF a fan coily](topic:split-vrf-fan-coils).
- **Výpočty.** Podokno Výpočty kontroluje dimenze přívodního potrubí a vzduchotechnických kanálů s tlakovou ztrátou, vede kabely v žlabech a chráničkách a ukazuje jejich zaplnění, a počítá osvětlení z souborů IES nebo EULUMDAT. Výchozí hodnoty jsou označené; zadejte hodnoty svého předpisu. Viz [Výpočty potrubí, vzduchotechniky, kabelů a světel](topic:mep-calculations).
- **Soubory PCF.** Příkaz **Exportovat PCF** nástroje Potrubí zapíše trasy pro programy pro pevnostní analýzu potrubí a izometrie a soubor PCF načtený zpět nakreslí své potrubí. Viz [Soubory komponent potrubí](topic:piping-pcf).
- **Solární FV.** Osaďte pole na střechách nebo na zemi, stínujte je z modelu, odhadněte roční energii, zkontrolujte řetězce a vytvořte data jednopólového schématu. Startovní modul a ztráty jsou obecné. Viz [Solární FV](topic:solar-pv).
- **Soubor EnergyPlus.** Podokno Kontrola s EnergyPlus zapíše model jako IDF pro běh ve vašem vlastním EnergyPlus. Běh v prohlížeči potřebuje sestavení, které hostujete sami a jehož adresu zadáte; BimCraft ho neobsahuje. Viz [Kontrola vytápění a chlazení s EnergyPlus](topic:check-with-energyplus).

**Obrázky a soubory**

- **Volba vykreslovacího jádra.** {{ui:Vykreslit}} má volbu {{ui:Engine}}. Naše dvě vestavěná jádra (Fast a Path tracer) zůstávají výchozí. **Otevřít v** uloží scénu jako soubor USD nebo glTF a složku projektu Unreal jako .zip; v CadCraft Studiu může doplněk přidat jádro. Plugin Unreal, který projekt otevírá, nebyl vydán. Viz [Volba programu, který kreslí obrázek](topic:render-engines).
- **Zpět ve Studiu.** Uvnitř CadCraft Studia BimCraft říká Studiu každý dokončený krok, takže Studio může vzít zpět váš poslední krok v tom okně, které jste použili naposledy. Viz [Zpět napříč aplikacemi](topic:undo-across-apps).
- **Doplňky ve vašem souboru.** IFC zaznamenává, které doplňky do něj zapsaly, a při otevření nabídne ty, které nemáte. Viz [Doplňky ve vašem souboru](topic:add-ons-in-your-file).

**Ve všech aplikacích**

- **Připojte svou AI.** Váš vlastní asistent může ovládat BimCraft přes připojení Studia a odpovídat na otázky o modelu, například které místnosti leží pod danou plochou. Studio nemá vlastní AI. Viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí Zalamovat, 2 řádky nebo 1 řádek; Zalamovat zůstává výchozí.
- **Vstupní zařízení.** Nastavení touchpadu, pera, 3D myši, ovladače a MIDI je sdílené všemi aplikacemi.
- **Problémy a Live.** Panel upozornění a relace Live fungují jako dříve; nové kontroly výše napájejí Problémy.
- **Jazyky.** 54 jazyků, z toho deset nových. Jazyky jiné než angličtina jsou strojové koncepty, které ještě nepřečetl rodilý mluvčí; nápověda je převážně v angličtině.

### Opraveno ve verzi 0.8.1

- **Rozložení Ribbon + prohlížeč projektu.** Vložit › Import CAD, Vložit › Obrázek a Správa › Jednotky projektu hlásily „Ještě není hotovo v BimCraft“. Obrázek nyní otevře nástroj Obrázek, Import CAD otevře {{ui:Sestavení}} › {{ui:Z výkresu…}} (DWG, DXF, PDF nebo sken) a Jednotky projektu otevřou {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Jednotky}}. Přesun a Zarovnání spustí nástroje Přesun a Zarovnání, Podlaží otevře {{ui:Přidat podlaží…}}, Fáze otevře oddíl Renovační fáze a Materiály otevřou knihovnu materiálů.
- **Výkresové třídy DWG.** Oddíl byl čten jako špatný typ; opraveno v BimCraft i v dalších aplikacích, které čtou DWG.
- **Jazyk za běhu.** Studio a balené edice mohou nyní přepnout jazyk bez restartu. Zatím nebylo otestováno na každé platformě; dejte nám vědět, pokud se jazyk nezmění.
- **Skript Archicad bundle.** `archicad_bundle.py`, samostatné stažení, nyní najde cestu Archicadu, sleduje složku až 20 sekund a opakuje pokus vedle balíčku.

### Není zatím v této verzi

- **Bezpečnostní a návrhové pomůcky.** Lidé v budově nemá limit vzdálenosti úniku z předpisu (zadáte ho sami) a nebyl ručně ověřen na skutečném půdorysu. Hodnoty akustiky, životního cyklu a nebezpečí jsou plánovací hodnoty, ne kontrola předpisů.
- **Klimatické scénáře a EnergyPlus.** Žádné vestavěné klimatické scénáře: pro běh záplavy můžete načíst soubor scénáře. Běh EnergyPlus v prohlížeči není součástí této verze.
- **Rozvržení pásu.** Výkaz materiálu zůstává „Ještě není hotovo“, protože BimCraft nemá seznam množství materiálu, a dalších 54 našedlých nástrojů pásu zatím nemá za sebou nástroj v BimCraft.
- **Podepisování a platformy.** Instalátory pro Windows a soubory .dmg pro macOS nejsou podepsány, takže SmartScreen zobrazí {{ui:Další informace}}, potom {{ui:Přesto spustit}}, a macOS vyžaduje kliknutí pravým tlačítkem a pak {{ui:Otevřený}}. Sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu sestaveno.
- **Testy na reálných stránkách.** Některé starší testy prohlížeče BimCraft na naší testovací stránce selhávají, jako před verzí 0.8.1.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Dřívější změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
