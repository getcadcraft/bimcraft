---
title: Novinky ve verzi 0.7
summary: BimCraft přidává stěny přes několik podlaží a Kopírovat toto podlaží, stěny z PDF a skenů, vlastní skladby stěn, bohatší rodiny, zařízení TZB s přípojkami, sady kolizí, prostupy a spoly potrubí, dokumenty majetku, COBie a hodnoty senzorů, oblohu, slunce, denní světlo v mřížce a tepelné a chladicí zátěže, registraci skenů, živý pohled a sledování paprsků na grafické kartě, STEP a USD, varianty položek knihovny a další pro AI asistenty.
keywords: novinky, co je nového, poznámky k vydání, changelog, změny, 0.7, verze, nové funkce, stěny přes podlaží, kopírovat toto podlaží, pdf, sken, obkreslení, stěny z půdorysů, skladby stěn, vrstvy, jádro, membrána, referenční kóty, knihovna materiálů, jednotky zobrazení, styl zobrazení, konstrukce, nosníky, rodiny, parametry, symbol půdorysu, horké body, opakování, úroveň detailu, vnořené rodiny, rozměry CSV, na prvek, zařízení, přípojky, připojení, vůle, prostupy, spoly, listy spoolů, řezný plán vzduchovodů, dokumenty, cobie, senzory, mqtt, živý tok, svislý oblohový činitel, sluneční zisk, denní světlo v mřížce, vytápění, chlazení, zátěže, součinitel U, registrace skenů, icp, e57, živý pohled, sledování paprsků, webgpu, odšumění, fyzikální obloha, míchání světel, fronta vykreslení, váš počítač, step, usd, svazek projektu, rozpracovat hmotu, varianty, asistenti, api doplňků, zařízení TZB, elektro, kontroly návrhu
from: 5c27b80a
---

Toto se změnilo v BimCraftu 0.7 oproti 0.6. Seznam je seskupen podle oblastí, nejdůležitější jsou první.

## Nové

### Kreslení budovy

- **Stěny přes několik podlaží.** Seznam výšek nástroje Stěna nabízí **Až do** libovolného vyššího podlaží, stejně jako Vlastnosti u vybrané stěny. Půdorysy podlaží mezi nimi zobrazují stěnu světleji, místnosti tam těsně přiléhají ke stěně a dveře a okna do ní lze umístit z těchto půdorysů; **Prochází** ve Vlastnostech uvádí podlaží, kterými prochází. Viz [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopírovat toto podlaží.** {{ui:Kopírovat toto podlaží…}} v panelu Podlaží znovu nakreslí stěny podlaží s dveřmi a okny, jeho podlahy a stropy na jiném podlaží nebo na novém podlaží nad ním, jedním krokem zpět; místnosti se objeví samy. Viz [Kreslení stěn](topic:draw-walls#levels).
- **Stěny z PDF nebo skenu.** {{ui:Sestavení}} › {{ui:Z výkresu…}} nyní přijme PDF (čárovou kresbu nebo sken v něm) nebo naskenovaný půdorys (PNG, JPEG, TIFF, více stran): každá strana se stane stěnami, dveřmi, okny a místnostmi podlaží, přičemž strana zůstane uložena pod jeho půdorysem. Obkreslení nepoužívá síť ani naučený model a výsledek odpovídá tomu, co čáry daly: zkontrolujte každé podlaží podle jeho strany. Viz [Stěny ze sady půdorysů](topic:walls-from-plans).
- **Vlastní skladby stěn.** {{ui:Skladby stěn…}} sestaví typ stěny vrstvu po vrstvě, s jádrem, vzduchovými mezerami a membránami, a s kótovaným náhledem; {{ui:Knihovna materiálů…}} uchovává materiály projektu v IFC; {{ui:Kótování}} › {{ui:Referenční kóta}} měří k plochám a osám jádra a při změně stěn je sleduje. Od přispěvatele z komunity, Doc (drsurfbum). Viz [Skladby stěn a referenční kóty](topic:wall-assemblies).
- **Jednotky zobrazení a ovládání pohledu.** {{ui:Jednotky}} na panelu nástrojů zobrazují délky ve stopách a palcích, palcích, desetinných stopách, milimetrech, centimetrech nebo metrech, v kótách, tabulkách, souřadnicích, měřeních a řezech. {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} jsou na panelu nástrojů, rozdělení lze přetáhnout (nebo přesunout z klávesnice), {{ui:Stínovaný}}, {{ui:Hrany}} a {{ui:Drátový}} jsou vedle kostky pohledu a sklon střechy, čelní prkno a podhled mění vybranou střechu okamžitě. Od přispěvatele z komunity, Joel (yisraelk). Viz [Kreslení stěn](topic:draw-walls#levels).
- **Nosníky podlah podle rozpětí.** {{ui:Konstrukce}} umí rozvrhnout inženýrské nosníky (předběžně) i řezivo: vybere nejmenší uvedenou řadu a výšku, která rozpětí dosáhne, při osové vzdálenosti 16" nebo 24" v kterémkoli směru; jdou do IFC i do seznamu řezů. Jde o návrh z publikované tabulky výrobce, nikoli o inženýrský výpočet. Také od Joela. Viz [Konstrukce stěn, podlah a střech](topic:framing).
- **Další elektrické prvky.** {{ui:Elektro}} přidává datové, telefonní a audiovizuální zásuvky, přepínač volby, časovač, termostat, hlásiče kouře a tepla, ruční hlásič a sirénu, ventilátor, elektroměr a podrozvaděč, každý s vlastní třídou IFC. Viz [Elektroinstalační plán](topic:electrical-plan).

### Rodiny

- **Rodiny umějí víc.** Parametry mohou být celá čísla, text, materiál, pero nebo výplň; rodina může kreslit vlastní symbol půdorysu, opakovat těleso, označit díly pro hrubší úrovně detailu, obsahovat jiné rodiny (nohu v tabulce) a mít horké body, které přetáhnete, i na umístěném prvku v půdorysu. Rozměry pocházejí z tabulky CSV a parametry označené **Na prvek** nechají dvoje dveře stejné velikosti lišit. Viz [Úprava rodiny](topic:family-editor#plan-symbol) a [Rodiny a jejich rozměry](topic:families#sizes-from-a-table).

### Potrubí, vzduchovody a zařízení

- **Zařízení s přípojkami.** {{ui:Sestavení}} › {{ui:Zařízení}} umístí obecnou vzduchotechnickou jednotku, vložený ventilátor, čerpadlo, kotel, ohřívač vody, koncovou jednotku, difuzor, mřížku nebo nádrž, dimenzovanou podle hodnot, které zadáte, s připojením potrubí a vzduchovodů jako přípojkami. Každé se uloží jako svá třída IFC s přípojkami IFC. Viz [Zařízení TZB s přípojkami](topic:mep-equipment).
- **Propojené trasy.** Potrubí nebo vzduchovod začatý na přípojce převezme svou velikost a systém a zůstane k ní připojen: přesunete-li čerpadlo, potrubí ho následuje. {{ui:Zkontrolovat připojení}} vypíše volné přípojky, otevřené konce, nesoulad velikostí a systémů a trasy, které nic nedodávají. Viz [Připojení potrubí a vzduchovodů k zařízení](topic:mep-connections).
- **Potrubí a vzduchovody vůči konstrukci.** {{ui:Kontrola kolizí}} má hotové sady a {{ui:Potrubí a vzduchovody × konstrukce}} jedním kliknutím; {{ui:Zkontrolovat vůle}} použije izolaci každé trasy plus mezeru, kterou zadáte; {{ui:Potřebné prostupy}} vypíše místa, kde trasy procházejí stěnami a deskami, jako problémy ve formátech CSV a BCF. Nic se neřeže. Viz [Kontrola potrubí a vzduchovodů vůči konstrukci](topic:mep-against-structure).
- **Ocelové spoly potrubí.** Ocelová trasa se rozdělí na očíslované spoly o nejdelší délce a na montážní svary {{ui:Montážní svar}}, které umístíte; {{ui:Listy spoolů (PDF)}} dá stranu na každý spool s jeho izometrickým pohledem, délkami řezů, tvarovkami, svary a kusovníkem, a {{ui:Řezný plán vzduchovodů}} vypíše rovné kusy vzduchovodu. Viz [Ocelové spoly potrubí a listy spoolů](topic:pipe-spools).

Jde o pomůcky pro kreslení a koordinaci, dimenzované inženýrem: žádné průtoky, tlaky ani vyvažování.

### Provoz budovy

- **Dokumenty u majetku.** Karta {{ui:Majetek}} propojí návody, záruky, fotografie a výkresy s majetkem podle názvu souboru vedle IFC nebo podle webové adresy; do IFC jde jen odkaz. Viz [Dokumenty](topic:assets-and-maintenance#documents).
- **Tabulka COBie.** {{ui:Uložit jako COBie (.xlsx)}} zapíše předávací sešit COBie 2.4 a sešit COBie načtený zpět vypíše každou změnu, než jednou použijete {{ui:Použít}}. Zatím neprošel validátorem COBie. Viz [Tabulka COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Hodnoty senzorů a živé toky.** Otevřete CSV s hodnotami, nebo se {{ui:Připojit}} přímo z prohlížeče ke svému brokeru MQTT nebo adrese, na které odpovídá váš budovní systém: každý majetek ukáže poslední hodnotu a graf, je obarven na modelu a označen, je-li mimo limity uložené v IFC. Hodnoty zůstávají na kartě; hesla se nikdy neukládají. Viz [Hodnoty senzorů](topic:assets-and-maintenance#sensor-readings) a [Živé hodnoty](topic:assets-and-maintenance#live-readings).

### Denní světlo a energie

- **Obloha a slunce u každého okna.** Karta {{ui:Denní světlo}} dá každému oknu jeho svislý oblohový činitel a úhel zakrytí, sleduje slunce během dne pomocí {{ui:Slunce okny v daném dni}} a vypočítá {{ui:Činitel denní osvětlenosti v mřížce}} napříč každou místností, nakreslený v jejím půdorysu. Viz [Svislý oblohový činitel každého okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Tepelné a chladicí zátěže.** {{ui:Tepelné a chladicí zátěže}} spočítá tepelnou ztrátu každé místnosti, její vytápění za rok z denostupňů a její špičkové chlazení, a to z toho, co ji v modelu ohraničuje, a z součinitele prostupu tepla U každého prvku; zde zadaný součinitel U se zapíše do IFC. Viz [Odhad tepelných a chladicích zátěží](topic:heating-and-cooling-loads).

Obě jsou návrhové pomůcky podle publikovaných metod, nikoli výpočty pro schválení, a každé okno to říká.

### Skeny

- **Registrace více skenů.** {{ui:Registrace skenů…}} (na úvodním panelu nebo v {{ui:Zobrazit}}) umístí skeny do jednoho rámce podle vybraných dvojic bodů nebo zadaných cílů, zpřesní je metodou ICP, nejprve bod k bodu a potom bod k rovině, uloží registraci jako malý projektový soubor a zapíše zaregistrovaný mrak jako jeden soubor LAS nebo E57. Viz [Registrace více skenů do jednoho](topic:register-scans).

### Obrázky a živý pohled

- **Živý pohled.** {{ui:Živý pohled}} na panelu nástrojů zobrazí model v realistickém vzhledu vedle 3D pohledu, sleduje jej a každou změnu, s Procházkou, denní dobou a měsícem; {{ui:Živý pohled v novém okně}} jej umístí na druhou obrazovku. Viz [Živý pohled](topic:live-view).
- **Sledování paprsků na grafické kartě.** S WebGPU spustí {{ui:Vykreslit}} › {{ui:Vysoká kvalita (sledování paprsků)}} vlastní sledování paprsků CadCraftu na grafické kartě, lze jej zastavit a {{ui:Pokračovat}}, a na konci se odšumí; bez WebGPU použije dosavadní sledování paprsků WebGL. Viz [Vysoká kvalita](topic:render#high-quality).
- **Další možnosti v dialogu Vykreslit** (běží na grafické kartě, proto potřebují WebGPU): fyzikální oblohu a obrázky oblohy, profily světelných zdrojů IES, kameru s clonou, hloubkou ostrosti, dvoubodovou perspektivou, vyvážením bílé a 360° panoramaty, barevnou úpravu hotového obrázku, míchání světel a prvky vykreslení po vykreslení, mlhu, kouř a kaustiky, uložení jako 16bitové PNG, EXR nebo soubor vykreslení a frontu vykreslení. Viz [Oblohy a profily světel na grafické kartě](topic:render#skies-and-light-profiles-on-the-graphics-card) a [Fronta vykreslení](topic:render#the-render-queue).
- **Váš počítač.** {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Vykreslování}} › {{ui:Váš počítač}} ukáže grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci dovolí použít, a úroveň, od které začíná vykreslování. Viz [S čím váš počítač vykresluje](topic:your-machine).

### Soubory a jiné aplikace

- **Otevírání souborů STEP.** Součást `.step` nebo `.stp`, kus zařízení nebo model dodavatele (AP203, AP214, AP242) se otevře jako malý model IFC; každé těleso je prvkem, který můžete prohlédnout, řezat, měřit a uložit jako IFC. Barvy a názvy dílů sestavy se zatím nečtou. Viz [Soubory, které BimCraft otevírá a ukládá](topic:files#what-it-opens).
- **Export USD.** {{ui:USD}} na panelu nástrojů zapíše otevřené modely jako `.usda`, `.usdc` nebo `.usdz`, uspořádané podle lokality, budovy, podlaží a profese, s třídou IFC, GlobalId a vlastnostmi každého prvku. Viz [Export modelu do USD](topic:usd).
- **Hmota z CivilCraftu.** Hmota budovy odeslaná z pohledu lokality v CivilCraftu ukazuje své studijní hodnoty ve Vlastnostech a {{ui:Rozpracovat tuto hmotu}} z ní jedním krokem zpět vytvoří stěny na každém podlaží a podlahu. Viz [Rozpracování hmoty budovy z průzkumu lokality](topic:develop-a-mass).
- **Položky knihovny s variantami.** Položka, která se dodává v několika variantách, má výběr {{ui:Varianta}} na kartě {{ui:Knihovna}}; umístěný prvek si svou variantu zachová v IFC, {{ui:Vyměnit položku…}} vypíše ostatní varianty a kopie i aktualizace ji zachovávají. Viz [Umístění a výměna položky knihovny s variantami](topic:library-variants).
- **Projektové svazky ve složce.** {{ui:Otevřít složku}} vypíše soubory `.ccbundle.zip` pod {{ui:Projektové svazky}} a každé uspořádání ve svazku má **Otevřít v …**: PDF do MarkupCraftu, DWG do CadCraftu, v nové kartě. Viz [Otevření uspořádání](topic:open-project-bundle#open-a-layout).

### Asistenti a doplňky

- **Více pro AI asistenty.** Asistent nyní může přejmenovat prvky a nastavit hodnoty vlastností, přesunout a smazat prvky, změnit stěny, dveře a okna, exportovat USD, vykreslit obrázek nebo spustit frontu vykreslení; každá změna je jeden krok zpět. Viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).
- **Doplňky mohou stavět v modelu.** API doplňků 1.1 umožňuje doplňku provést změnu v modelu jako jeden krok zpět (přenáší se v Live TeamWork), číst model a číst trasy potrubí a vzduchovodů, přípojky, zařízení a spoly.
- **Doplněk Plant** (vypnutý, dokud jej nezapnete v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Doplňky}}): kontrola specifikací potrubí podle tras, izometrické výkresy trasy jako SVG a DXF s kusovníkem, obecné procesní zařízení s hrdly umístěné v modelu, směrovač mezi dvěma přípojkami a kontrola uspořádání závodu. Jde o pomůcku pro kreslení, nikoli o schválení inženýrem; jeho texty jsou jen v angličtině.

## Změněno

- **První dům na notebooku.** Na obrazovce velikosti notebooku BimCraft začíná jen s půdorysem, lišta Kreslení je úzký panel s půdorysem vedle něj, půdorys a 3D pohled se vrátí do zobrazení, když je výkres opustí, 3D pohled zarámuje celý dům v úzkém okně a dveře a okna se vybírají před kótovacími čarami.
- **Ukládání obrázku.** **Uložit PNG** v dialogu Vykreslit je nyní {{ui:Uložit}}, vedle něj je {{ui:Uložit jako}} pro ostatní formáty. Viz [Uložení obrázku](topic:render#save-the-picture).
- **Karta Analýza** má blok {{ui:Návrhové kontroly}}: vytváří kombinace zatížení podle ASCE 7 nebo EN 1990 pro vaše případy a kontroluje každý válcovaný ocelový I-profil (tvar W, S, IPE, HEA nebo HEB podle názvu profilu a velikosti) podle AISC 360 nebo EN 1993-1-1 a ukazuje, jakou část své únosnosti využívá. Jde o pomůcku, dokud ji neprojde inženýr; svařované tvary a jiné průřezy hlásí „nekontrolováno“. Viz [Návrhové kontroly](topic:frame-analysis#design-checks).

## Opraveno

- Opakování po kroku, který vytvořil novou velikost rodiny, selhalo („žádná velikost“). Každý krok nyní při opakování vytvoří stejné IFC GlobalId, takže opakování funguje pro rodiny i pro každou jinou změnu.
- Když dva lidé uložili stejnou rodinu (v relaci Live TeamWork nebo ve dvou oknech), druhé uložení tiše přepsalo změnu prvního. Nyní uložení odmítne a řekne, jak vidět jejich změnu a znovu provést vaši.
- Model v US survey feet byl čten jako 0.3048 m na stopu místo 0.3048006096 m, což posunulo každé georeferencované IFC v US stopách na mapě.
- Editor rodin: po zavření už nepřesune fokus klávesnice na stránku, jeho {{ui:Uložit}} zůstane na telefonu na očích a jeho pole už nezpůsobí přiblížení telefonu.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má jeden seznam pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi podle definic jednotek (US survey foot je vlastní jednotka). Vypněte jednotky, které nepoužíváte, a opustí seznamy jednotek; označte jednu hvězdičkou a nová práce v ní začne. Soubor si vždy zachová vlastní jednotku. V BimCraftu seznam {{ui:Jednotky}} na panelu nástrojů sleduje přepínače, hvězdička nastavuje zobrazované jednotky, dokud je nevyberete na panelu nástrojů (váš dřívější výběr se zachová), a políčka délky nástrojů kreslení přijmou označení libovolné jednotky, například `3.5 m` nebo `10 US ft`. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se uklidí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vejde na obrazovku více (dotykové obrazovky a telefony si zachovají velká tlačítka). Každý boční panel má tenký záhlavní pruh: přetažením jej ukotvíte nebo odpoutáte, přetažením na záhlaví jiného panelu sdílíte jeden rámec jako karty, připnutím jej zasunete k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se hýbou.** Přetáhněte dialog za jeho záhlaví mimo kresbu; vrátí se tam, kde jste ho nechali. Dvojklikem na záhlaví jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro AI asistenty.** Deset propracovaných požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, položit modelu otázky, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý ověřený našimi testy. Aplikace žádnou AI neobsahují. Viz [Recepty pro AI asistenty](common:assistants-recipes).
- **Jazyky.** Nově je k dispozici **Português (Portugal)** v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Pro **Português (Portugal)**, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** jsou nyní k dispozici všechna slova aplikací jako koncepty, dosud neprověřené rodilým mluvčím. Témata nápovědy jsou v angličtině, několik v češtině.
- **CadCraft Studio** uvádí, proč kontrola aktualizace selhala (pro váš systém ještě není soubor, chybí síť, neplatný podpis), místo pouhého „Hotovo“, a přestane vracet kartu Novinky, kterou jste zavřeli, dokud nevyjde novější verze.

## Ještě není v této verzi

- **0.7 není podepsána kódem.** Podepisování a balíček Microsoft Store se přesunuly do verze 0.8, protože ověření certifikátu ještě nedorazilo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen zastaví instalátor, zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Open}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje sestavení pro iPad ani iPhone.
- Seznamy úhlů a sklonů v {{ui:Jednotky}} se ukládají, ale žádné pole je zatím nečte.
- Vykreslování na grafické kartě, doplňky v dialogu Vykreslit a fronta vykreslení potřebují WebGPU (bez něj používá vysoká kvalita sledování paprsků WebGL); živý pohled používá WebGPU, kde jej prohlížeč má, jinak WebGL 2. Byly otestovány jen na softwarové náhradě grafické karty, zatím ne na skutečných grafických kartách. Živý pohled v BimCraftu nemá rozptyl ani sdílení (ty má ModelCraft).
- Vykreslení zaznamenané procházky jako video není v BimCraftu zabudováno.
- Kontroly návrhu: I-profil, jehož název profilu IFC není velikostí W, S, IPE, HEA nebo HEB (nebo jehož velikost se od ní liší), se považuje za svařovaný a vrací se jako „nekontrolováno“, stejně jako trubky, úhelníky, U-profily, štíhlé díly a krut. Žádný inženýr kontroly zatím neprověřil.
- Nakreslené prvky nelze kopírovat jeden po druhém, otáčet, zrcadlit ani vytvářet z nich pole (lze zkopírovat celé podlaží), a není zde dělená stěna, nástroj Text ani obvodová stěna. Stěna, která na horním podlaží narazí na stěnu z nižšího podlaží, se neřeže do 3D tělesa této stěny a tabulky uvádějí otvor horního podlaží pod podlažím své stěny.
- Rodiny: knihovna rodin sdílená mezi projekty není hotova. Rodiny a zkopírovaná podlaží zatím nebyla otevřena v jiných programech BIM.
- MEP: zařízení je obecné (bez dat výrobců); T-kusy a redukce na ocelových spolech jsou obecné, ne z tabulky ASME B16.9; přípojky položek knihovny umístěných z karty {{ui:Knihovna}} se nezapisují do IFC; nic neprověřil inženýr.
- Doplněk Plant zatím nemůže nakreslit vedenou trasu do modelu, očíslovat spoly na svých izometriích ani zkontrolovat uspořádání zařízení umístěného z knihovny.
- Závody z knihovny závodů CivilCraftu zatím nelze umístit z karty {{ui:Knihovna}} v BimCraftu.
- Energie: žádná hodinová simulace, žádná metoda ISO 52016-1 a žádné klimatické soubory. Majetek: žádné hostované dvojče, které by uchovávalo hodnoty nebo odesílalo upozornění, když je BimCraft zavřený.
- Registrace skenů byla vyzkoušena na zkušebních skenech, zatím ne na skutečné sadě skenů ze skeneru; soubory E57 se zatím otevřou až do 6 milionů bodů a 512 MB.
- Projektové svazky se otevírají jen v BimCraftu (ostatní aplikace přebírají uspořádání přes **Otevřít v …**). Svazky i sada pro dva programy byly testovány na náhradách, zatím ne s Archicadem nebo Revitem.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet).
