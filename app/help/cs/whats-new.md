---
title: Co je nového ve verzi 0.8 a 0.8.1
summary: BimCraft přidává lidi procházející budovou, akustiku místností, kterou lze slyšet, přehrávání záplavy, větru a zemětřesení, pohled na životní cyklus na padesát let, kontroly podle IDS, značky a tabulky, Přesunout, Zarovnat a Rozmístit, obrázky pod půdorysem, stěny ze skenu, výkresy panelů, solární, rozdělené a VRF systémy, dimenzování potrubí a kabelů, kontroly betonu a seismiky, libovolnou mapovou projekci, volbu vykreslovacího enginu a zpět ve Studiu; 0.8.1 opravuje zešedlé nástroje rozvržení s pásem karet.
keywords: co je nového, poznámky k vydání, seznam změn, změny, 0.8, 0.8.1, verze, nové funkce, evakuace, lidé, fronty, akustika, dozvuk, impulzní odezva, záplava, vítr, zemětřesení, nebezpečí, životní cyklus, životnost, ids, značky, tabulky, přesunout, zarovnat, rozmístit, obrázek, podklad, sken na stěny, lokalita z civilcraft, výkresy panelů, konstrukce, solární, pv, rozdělený, vrf, fan coil, dimenzování potrubí, kabelový žlab, osvětlení, beton, seismika, porovnat sken, epsg, projekce, dokumenty, šablona, uhlík, náklady, energyplus, vykreslovací engine, otevřít v, usd, glb, unreal, zpět, doplňky, pcf, symboly, rostliny, obkreslit, pera, ribbon, prohlížeč projektu, rozvržení
from: 87b03056
---

Toto se změnilo ve verzi BimCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. BimCraft nyní umí odpovídat na otázky o budově a testovat ji, s lidmi, zvukem, vodou, větrem a zemětřesením, a kreslit ji s více nástroji; 0.8.1 je opravná verze.

## Nové

### Testování budovy

- **Lidé v budově.** Sekce {{ui:Lidé v budově}} levého panelu provede evakuací nebo běžným dnem příchodů vašimi místnostmi, dveřmi a schodišti. Vidíte fronty tam, kde se budova zužuje, nejdelší cestu k východu z každé místnosti a to, jak dlouho trvá poslední osoba. Zaškrtněte {{ui:Zavřeno}} u dveří a uvidíte, co se změní; zaškrtněte {{ui:Zobrazit lidi ve 3D pohledu}}, abyste sledovali chodce. Nálezy jdou do Problémů. Jde o hrubý model davu pro návrhová rozhodnutí, nikoli o certifikát požární bezpečnosti. Viz [Provedení lidí budovou](topic:people-in-the-building).
- **Akustika místností, a slyšte ji.** Sekce {{ui:Akustika místností}} udává dobu dozvuku každé místnosti podle oktávových pásem (Sabine a Eyring) z její velikosti a vybraných povrchů a s vlastním cílem řekne, kolik pohltivosti by ho splnilo. {{ui:Přehrát v této místnosti}} přehraje hlas, tlesknutí, drnkané tóny nebo váš vlastní zvukový soubor přes impulzní odezvu vypočtenou pro místnost. Hodnoty pohltivosti jsou typické publikované hodnoty, které můžete nahradit. Viz [Akustika místností](topic:room-acoustics).
- **Přehrávání záplavy, větru a zemětřesení.** {{ui:Přehrání nebezpečí}} přehraje stoupající vodu místnostmi, tlak větru na každé podlaží a zemětřesení otřásající podlažími, na půdorysu nebo pohledu s časovým posuvníkem. Jednoduché modely s jejich předpoklady se zobrazí na panelu; nejde o kontrolu podle předpisů. Viz [Přehrání záplavy, větru nebo zemětřesení](topic:hazard-playback).
- **Co se za padesát let opotřebuje.** {{ui:Pohled na životní cyklus}} vypíše okna, dveře, povrchy a střechu, každé s životností a roky výměny, a když zadáte cenu za jednotku, náklady podle roku a jejich současnou hodnotu. {{ui:Uložit harmonogram (CSV)}} je zapíše do souboru. Životnosti jsou plánovací údaje. Viz [Co se za padesát let opotřebuje](topic:life-cycle-view).
- **Kontroly betonu a seismiky.** Bloky {{ui:Betonové prvky}} a {{ui:Seismická zatížení}} na kartě {{ui:Analýza}} kontrolují betonové nosníky a sloupy podle ACI 318-19 a vytvářejí ekvivalentní vodorovné síly podle ASCE 7-22 na tuhých stropech, s mezipodlažním posunem. K posouzení inženýrem. Viz [Kontrola betonových prvků a seismická zatížení](topic:concrete-and-seismic).

### Kontrola a výkaz

- **Kontrola podle IDS.** Načtěte soubor `.ids`, který vám zadavatel poslal, a v Problémech uvidíte každý prvek, který mu nevyhovuje, dříve než předáte IFC. Otevřete {{ui:Kontrola podle IDS}} v části {{ui:Kontroly modelu}}. Viz [Kontrola modelu podle IDS zadavatele](topic:check-against-ids).
- **Značky a tabulky.** Definujte vlastní značky, přiřaďte je mnoha prvkům najednou a vytvořte tabulky, jejichž sloupce, filtry a skupiny je čtou; značky se uchovávají v IFC. Viz [Značky a tabulky](topic:tags-and-schedules).
- **Dokumenty z modelu.** {{ui:Dokumenty z modelu}} vyplní šablonu specifikace z otevřeného IFC a uloží ji jako PDF, dokument Word nebo Markdown. Viz [Dokumenty z modelu](topic:documents-from-the-model).
- **Porovnání skenu s modelem.** Když je otevřeno mračno bodů, {{ui:Porovnat}} posoudí každý prvek jako postavený, částečně postavený, chybějící nebo nedosažený a ukáže procento dokončení. Viz [Porovnání skenu s modelem](topic:compare-scan-with-model).
- **Uhlík a náklady.** Panel Uhlík sečte vtělený uhlík z tabulky faktorů, kterou můžete upravit, a panel Náklady rozloží ceny na 4D harmonogram. Faktory dodané s BimCraft jsou obecné a označené jako neověřené. Viz [Vtělený uhlík a náklady](topic:embodied-carbon-and-5d-cost).
- **Libovolná mapová projekce.** {{ui:Měřit}} › {{ui:Souřadnicový systém…}} přijme číslo EPSG, zónu UTM, název nebo vaši vlastní definici projekce. Viz [Georeferencování v libovolné projekci](topic:georeference-any-projection).

### Kreslení a úpravy

- **Přesunout, Zarovnat a Rozmístit.** Pod {{ui:Sestavení}}; {{key:Shift+M}} spustí Přesunout (prosté {{key:M}} je stále Měřit). Přesun za pochodu kopíruje s klávesou {{key:C}}, každý krok je jeden krok zpět a funguje v relaci Live TeamWork. Viz [Přesun, kopírování, zarovnání a rozmístění](topic:move-align-distribute).
- **Obrázky pod půdorysem.** {{ui:Sestavení}} › {{ui:Obrázek}} umístí PNG, JPEG nebo WebP pod půdorys podlaží nebo na svislou rovinu. Měřítko nastavíte dvěma body a obrázek můžete posouvat, otáčet, ztlumit a zamknout. Oblast zkopírovaná v MarkupCraft se vloží v měřítku svého listu. Viz [Obrázek pod půdorysem](topic:pictures-as-backgrounds).
- **Stěny ze skenu.** Při otevřeném skenu přijdou stěny, dveře a místnosti jako návrhy, které po jednom ponecháte nebo zamítnete, v jediném kroku zpět. Nacházejí se jen stěny ve dvou na sebe kolmých směrech. Viz [Přeměna skenu na stěny](topic:scan-to-walls).
- **Obkreslení, pera a nakreslení schodiště.** {{ui:Obkreslit}} zobrazí jiné podlaží přerušovanou čarou pod půdorysem, {{ui:Pera}} dá stěnám, dveřím a oknům vlastní tloušťku čáry v jednom pohledu a {{ui:Nakreslit schodiště}} promění čáru chůze ve schodiště. Otevře se síť Wavefront OBJ. Viz [Obkreslení podlaží, pera a schodiště z náčrtu](topic:trace-pens-stairs-obj).
- **Budovy kolem adresy.** Budovy a parcela, které našel CivilCraft v nástroji Adresa na lokalitu, se objeví jako návrhy; zaškrtnete ty, které chcete přidat. Viz [Začátek z lokality CivilCraft](topic:site-from-civilcraft).
- **Výkresy panelů.** {{ui:Sestavení}} › {{ui:Výkresy panelů}} rámuje stěny, podlahy a střechy z dřeva nebo lehkých tenkostěnných ocelových profilů a uloží seznam řezů jako CSV a dílenské výkresy jako PDF. Jde o výchozí hodnoty, nikoli o konstrukční návrh. Viz [Výkresy panelů](topic:panel-drawings).
- **Paleta symbolů a rostliny.** {{ui:Sestavení}} › {{ui:Paleta symbolů}} najde elektrické a instalatérské symboly podle názvu; zdroj {{ui:Rostliny}} v {{ui:Knihovna}} vypisuje asi 400 rostlin s půdorysnými symboly. Viz [Paleta symbolů](topic:symbol-palette) a [Umístění rostliny](topic:plant-list).

### Potrubí, kanály a energie

- **Rozdělené, VRF a fan coily.** Vnitřní a venkovní jednotky s jejich přípojkami a sady potrubí dimenzované podle tabulky typických příkladových hodnot, které můžete změnit. Viz [Rozdělené, VRF a fan coily](topic:split-vrf-fan-coils).
- **Výpočty.** Panel Výpočty kontroluje dimenzování napájecího potrubí a kanálů s tlakovou ztrátou, vede kabely žlaby a chráničkami a ukazuje jejich naplnění, a počítá osvětlenost ze souborů IES nebo EULUMDAT. Výchozí hodnoty jsou označeny; zadejte hodnoty podle svých předpisů. Viz [Výpočty potrubí, kanálů, kabelů a světla](topic:mep-calculations).
- **Soubory PCF.** Příkaz **Exportovat PCF** nástroje Potrubí zapíše trasy pro programy pro analýzu napětí potrubí a izometrie a soubor PCF načtený zpět vykreslí své potrubí. Viz [Soubory s komponentami potrubí](topic:piping-pcf).
- **Solární PV.** Umístěte pole na střechy nebo na zem, stínujte je podle modelu, odhadněte roční výrobu energie, zkontrolujte řetězce a vytvořte data jednopólového schématu. Výchozí modul a ztráty jsou obecné. Viz [Solární PV](topic:solar-pv).
- **Soubor EnergyPlus.** Panel Kontrola s EnergyPlus zapíše model jako IDF pro spuštění ve vašem vlastním EnergyPlus. Spuštění v prohlížeči potřebuje sestavení, které hostujete sami a jehož adresu zadáte; BimCraft jej neobsahuje. Viz [Kontrola vytápění a chlazení v EnergyPlus](topic:check-with-energyplus).

### Obrázky a soubory

- **Volba vykreslovacího enginu.** {{ui:Vykreslit}} má volbu {{ui:Engine}}. Naše dva vestavěné enginy (Fast a Path tracer) zůstávají výchozí. **Otevřít v** uloží scénu jako soubor USD nebo glTF a složku projektu Unreal jako .zip; v CadCraft Studio může doplněk přidat engine. Plugin Unreal, který projekt otevírá, není vydán. Viz [Volba programu, který kreslí obrázek](topic:render-engines).
- **Zpět ve Studiu.** V CadCraft Studio sdělí BimCraft Studiu každý dokončený krok, aby Studio mohlo vrátit váš poslední krok v okně, které jste použili naposledy. Viz [Zpět napříč aplikacemi](topic:undo-across-apps).
- **Doplňky v souboru.** IFC eviduje, které doplňky do něj zapisovaly, a při otevření nabídne ty, které nemáte. Viz [Doplňky v souboru](topic:add-ons-in-your-file).

### Ve všech aplikacích

- **Připojte svou AI.** Váš vlastní asistent může ovládat BimCraft přes připojení Studia a odpovídat na otázky o modelu, například které místnosti jsou pod danou plochou. Studio nemá vlastní AI. Viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí Zalomit, 2 řádky nebo 1 řádek; Zalomit zůstává výchozí.
- **Vstupní zařízení.** Nastavení trackpadu, pera, 3D myši, ovladače a MIDI jsou sdílena všemi aplikacemi.
- **Problémy a Live.** Panel upozornění a relace Live fungují jako dříve; nové kontroly výše napájejí Problémy.
- **Jazyky.** 54 jazyků, z toho deset nových. Jazyky jiné než angličtina jsou strojové koncepty, které ještě nečetl rodilý mluvčí; témata nápovědy jsou většinou v angličtině.

## Opraveno ve verzi 0.8.1

- **Rozvržení s pásem karet a Prohlížečem projektu.** Vložit › Importovat CAD, Vložit › Obrázek a Spravovat › Jednotky projektu hlásily "V BimCraft ještě není hotovo". Obrázek nyní otevře nástroj Obrázek, Importovat CAD otevře {{ui:Sestavení}} › {{ui:Z výkresu…}} (DWG, DXF, PDF nebo sken) a Jednotky projektu otevřou {{ui:Nastavení}} › {{ui:Globální}} › {{ui:Jednotky}}. Přesunout a Zarovnat spustí nástroje Přesunout a Zarovnat, Úroveň otevře {{ui:Přidat podlaží…}}, Fáze otevře sekci Renovační fáze a Materiály otevře knihovnu materiálů.
- **Sekce tříd DWG.** Byla čtena jako špatný typ; opraveno v BimCraft i v dalších aplikacích, které čtou DWG.
- **Jazyk za běhu.** Studio a balené verze nyní mohou přepnout jazyk bez restartu. Ještě nebylo otestováno na všech platformách; dejte nám vědět, pokud se jazyk nemění.
- **Skript pro balík Archicad.** `archicad_bundle.py`, samostatně stahovaný soubor, nyní najde cestu k Archicadu, sleduje složku až 20 sekund a opakuje pokus vedle balíku.

## Ještě není v této verzi

- **Bezpečnostní a návrhové pomůcky.** Lidé v budově nemají limit vzdálenosti úniku z předpisu (limit zadáte sami) a nebyli ručně ověřeni na skutečném plánu. Hodnoty akustiky, životního cyklu a nebezpečí jsou plánovací hodnoty, nikoli kontrola podle předpisů.
- **Klimatické scénáře a EnergyPlus.** Vestavěné klimatické scénáře nejsou k dispozici: pro běh záplavy můžete načíst soubor scénáře. Běh EnergyPlus v prohlížeči není součástí této verze.
- **Rozvržení s pásem karet.** Materiálový výkaz zůstává "Ještě není hotovo", protože BimCraft nemá seznam množství materiálů, a 54 dalších zešedlých nástrojů pásu karet zatím nemá za sebou nástroj BimCraft.
- **Podepisování a platformy.** Instalátory pro Windows a soubory .dmg pro macOS nejsou podepsány, takže SmartScreen zobrazí {{ui:Další informace}}, pak {{ui:Spustit přesto}}; macOS vyžaduje kliknutí pravým tlačítkem a pak {{ui:Otevřený}}. Sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu vytvořeno.
- **Testy na reálných stránkách.** Některé starší testy prohlížeče BimCraft na naší testovací stránce stále selhávají, jako selhávaly před 0.8.1.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet). Starší změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
