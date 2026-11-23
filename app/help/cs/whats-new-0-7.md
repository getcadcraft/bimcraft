---
title: Co je nového ve verzi 0.7 (dřívější)
summary: BimCraft přidává stěny přes několik podlaží a Kopírovat toto podlaží, stěny z PDF a skenů, vlastní skladby stěn, bohatší rodiny, zařízení MEP s přípojkami, sady kolizí, otvory a svary potrubí, dokumenty k aktivům, COBie a čtení senzorů, oblohu, slunce, denní světlo na mřížce a zátěže pro vytápění a chlazení, registraci skenů, živý pohled a sledování paprsků na grafické kartě, STEP a USD, varianty položek knihovny a další pro asistenty AI.
keywords: co je nového 0.7, dřívější verze, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, stěny přes podlaží, kopírovat toto podlaží, pdf, sken, obkreslení, stěny z výkresů, skladby stěn, vrstvy, jádro, membrána, referenční kóty, knihovna materiálů, zobrazované jednotky, styl zobrazení, konstrukce, trámy, rodiny, parametry, značka půdorysu, body, opakování, úroveň podrobnosti, vnořené rodiny, velikosti v CSV, na prvek, zařízení, porty, připojení, vůle, otvory, svary, výkaz řezů, dokumenty, cobie, senzory, mqtt, živý kanál, vertikální součinitel oblohy, solární zisk, mřížka denního světla, vytápění, chlazení, zátěže, součinitel prostupu tepla, registrace skenů, icp, e57, živý pohled, sledování paprsků, webgpu, odšumění, fyzická obloha, míchání světel, fronta vykreslování, váš počítač, step, usd, balík projektu, rozpracování hmoty, varianty, asistenti, api doplňků, rostlina, elektro, kontroly návrhu
from: a638080d
---

Toto je to, co se změnilo v BimCraft 0.7 oproti 0.6. Seznam je seskupen podle oblastí, nejdůležitější je první.

## Novinky

### Stavba budovy

- **Stěny přes několik podlaží.** Seznam výšek nástroje Stěna nabízí **Až do** kteréhokoli vyššího podlaží, jako to dělají Vlastnosti u vybrané stěny. Půdorysy podlaží mezi tím ukazují stěnu světlejší, místnosti tam se k ní přichytí a dveře a okna jí lze přidat z těchto půdorysů. **Prochází** ve Vlastnostech uvádí podlaží, kterými prochází. Viz [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door#change-a-wall).
- **Kopírovat toto podlaží.** {{ui:Kopírovat toto podlaží…}} v panelu Podlaží nakreslí znovu stěny podlaží s jeho dveřmi a okny, jeho podlahy a stropy na jiném podlaží, nebo na novém podlaží nad ním, v jednom kroku zpět. Místnosti vzniknou samy. Viz [Kreslení stěn](topic:draw-walls#levels).
- **Stěny z PDF nebo skenu.** {{ui:Sestavení}} › {{ui:Z výkresu…}} nyní přijme PDF (čárovou kresbu, nebo sken uvnitř něj), nebo naskenovaný půdorys (PNG, JPEG, TIFF, více stran): každá stránka se stane stěnami, dveřmi, okny a místnostmi jednoho podlaží, s ponechanou stránkou pod jeho půdorysem. Obkreslení nepoužívá síť ani natrénovaný model a výsledek je to, co čáry daly: každé podlaží zkontrolujte podle jeho stránky. Viz [Stěny z sady výkresů](topic:walls-from-plans).
- **Vlastní skladby stěn.** {{ui:Skladby stěn…}} sestaví typ stěny vrstvu po vrstvě, s jádrem, vzduchovými mezerami a membránami, a s okótovaným náhledem. {{ui:Knihovna materiálů…}} uchovává materiály projektu v IFC. {{ui:Kótování}} › {{ui:Referenční kóta}} měří k lícům a osám jádra a řídí se stěnami, když se změní. Od přispěvatele z komunity Doc (drsurfbum). Viz [Skladby stěn a referenční kóty](topic:wall-assemblies).
- **Zobrazované jednotky a ovládání pohledů.** {{ui:Jednotky}} na panelu nástrojů zobrazuje délky ve stopách a palcích, v palcích, desetinných stopách, milimetrech, centimetrech nebo metrech, v kótách, rozpisech, souřadnicích, měřeních a řezech. {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} jsou na panelu nástrojů, rozdělení lze přetáhnout (nebo posunout z klávesnice), {{ui:Stínovaný}}, {{ui:Hrany}} a {{ui:Drátový}} sídlí vedle kostky pohledu a sklon, lem a podhled střechy změní vybranou střechu okamžitě. Od přispěvatele z komunity Joel (yisraelk). Viz [Kreslení stěn](topic:draw-walls#levels).
- **Podlahové trámy podle rozpětí.** {{ui:Konstrukce}} může navrhnout vyrobené trámy (předběžně), stejně jako řezané dřevo: vybere nejmenší uvedenou řadu a výšku, která dosáhne na rozpětí, 16" nebo 24" osově, v kterémkoli směru; jdou do IFC a do výkazu řezů. Návrh z publikované tabulky výrobce, není to statika. Také od Joela. Viz [Konstrukce stěn, podlah a střech](topic:framing).
- **Více elektrických zařízení.** {{ui:Elektro}} přidává zásuvky pro data, telefon a audio-video, přepínač volby, časovač, termostat, detektory kouře a tepla, ruční hlásič a sirénu, ventilátor, energoměr a podružný rozvaděč, každé s vlastní třídou IFC. Viz [Elektrický plán](topic:electrical-plan).

### Rodiny

- **Rodiny umějí více.** Parametry mohou být celá čísla, text, materiál, pero nebo výplň. Rodina může kreslit vlastní značku půdorysu, opakovat těleso, označit části pro hrubší úrovně podrobnosti, obsahovat jiné rodiny (nohu ve stole) a mít body, které lze táhnout, také u umístěného prvku v půdorysu. Velikosti se berou z tabulky CSV a parametry označené **Na prvek** nechají dvoje dveře stejné velikosti lišit. Viz [Úprava rodiny](topic:family-editor#plan-symbol) a [Rodiny a jejich velikosti](topic:families#sizes-from-a-table).

### Potrubí, vzduchovody a zařízení

- **Zařízení s přípojkami.** {{ui:Sestavení}} › {{ui:Zařízení}} umístí obecnou vzduchotechnickou jednotku, vložený ventilátor, čerpadlo, kotel, ohřívač vody, koncovou jednotku, difuzor, mřížku nebo nádrž, dimenzované podle hodnot, které zadáte, s přípojkami potrubí a vzduchovodů jako porty. Každé se ukládá jako jeho třída IFC s porty IFC. Viz [Zařízení MEP s přípojkami](topic:mep-equipment).
- **Propojené trasy.** Potrubí nebo vzduchovod začatý na portu převezme jeho velikost a systém a zůstane k němu připojen: posunete-li čerpadlo, jeho potrubí ho následuje. {{ui:Zkontrolovat připojení}} vypíše otevřené porty, volné konce, nesoulad velikostí a systémů a trasy, které nic nedodává. Viz [Připojení potrubí a vzduchovodů k zařízení](topic:mep-connections).
- **Potrubí a vzduchovody proti konstrukci.** {{ui:Kontrola kolizí}} má hotové sady a {{ui:Potrubí a vzduchovody × konstrukce}} jedním kliknutím; {{ui:Zkontrolovat vůle}} použije izolaci každé trasy plus mezeru, kterou zadáte; {{ui:Potřebné prostupy}} vypíše místa, kde trasy procházejí stěnami a deskami, jako problémy v CSV a BCF. Nic se neřeže. Viz [Kontrola potrubí a vzduchovodů proti konstrukci](topic:mep-against-structure).
- **Svary ocelového potrubí.** Ocelová trasa se řeže na očíslované svary podle nejdelší délky a na {{ui:Montážní svar}}, které umístíte; {{ui:Listy spoolů (PDF)}} dá stránku na každý spool s jeho izometrickým pohledem, délkami řezů, tvarovkami, svary a kusovníkem, a {{ui:Řezný plán vzduchovodů}} vypíše rovné kusy vzduchovodu. Viz [Ocelové svary potrubí a listy spoolů](topic:pipe-spools).

Jsou to pomůcky pro kreslení a koordinaci, dimenzované inženýrem: žádné průtoky, tlaky ani vyvažování.

### Provoz budovy

- **Dokumenty u každého aktiva.** Záložka {{ui:Podklady}} propojí návody, záruky, fotografie a výkresy s aktivem podle názvu souboru vedle IFC nebo webové adresy; do IFC jde jen odkaz. Viz [Dokumenty](topic:assets-and-maintenance#documents).
- **Tabulka COBie.** {{ui:Uložit jako COBie (.xlsx)}} zapíše předávací sešit COBie 2.4, a přečtený sešit COBie vypíše každou změnu před jediným {{ui:Použít}}. Ještě neprošel validátorem COBie. Viz [Tabulka COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Čtení senzorů a živé kanály.** Otevřete CSV s hodnotami, nebo {{ui:Připojit}} přímo z prohlížeče ke svému brokeru MQTT, nebo k adrese, na kterou odpovídá váš systém budovy: každé aktivum ukáže svou poslední hodnotu a graf, je obarveno na modelu a je označeno, když je mimo limity uložené v IFC. Hodnoty zůstávají v záložce; hesla se nikdy neukládají. Viz [Čtení senzorů](topic:assets-and-maintenance#sensor-readings) a [Živé hodnoty](topic:assets-and-maintenance#live-readings).

### Denní světlo a energie

- **Obloha a slunce u každého okna.** Záložka {{ui:Denní světlo}} dá každému oknu jeho vertikální součinitel oblohy a úhel zastínění, sleduje slunce během dne pomocí {{ui:Slunce okny v daném dni}} a spočítá {{ui:Činitel denní osvětlenosti v mřížce}} v každé místnosti, nakreslený v jejím půdorysu. Viz [Vertikální součinitel oblohy každého okna](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Zátěže pro vytápění a chlazení.** {{ui:Tepelné a chladicí zátěže}} spočítá tepelnou ztrátu každé místnosti, její vytápění za rok z denostupňů a její špičku chlazení, z toho, co ji v modelu ohraničuje, a z U-hodnoty každého prvku; U-hodnota zadaná tam se zapíše do IFC. Viz [Odhad tepelných a chladicích zátěží](topic:heating-and-cooling-loads).

Obojí jsou pomůcky pro návrh podle publikovaných metod, ne výpočty pro shodu s předpisy, a každý panel to říká.

### Skeny

- **Registrace více skenů.** {{ui:Registrace skenů…}} (na úvodním panelu, nebo v {{ui:Zobrazit}}) umístí skeny do jednoho rámce podle vybraných dvojic bodů nebo zadaných cílů, zpřesní je metodou ICP nejprve bod k bodu a pak bod k rovině, uloží registraci jako malý soubor projektu a zapíše registrovaný mrak jako jeden soubor LAS nebo E57. Viz [Registrace více skenů do jednoho](topic:register-scans).

### Obrázky a živý pohled

- **Živý pohled.** {{ui:Živý pohled}} na panelu nástrojů ukazuje model ve vzhledu v reálném čase vedle 3D pohledu, sleduje jej i každou změnu, s Procházkou, denní dobou a měsícem; {{ui:Živý pohled v novém okně}} jej umístí na druhou obrazovku. Viz [Živý pohled](topic:live-view).
- **Sledování paprsků na grafické kartě.** S WebGPU spustí {{ui:Vykreslit}} › {{ui:Vysoká kvalita (sledování paprsků)}} vlastní sledovač paprsků CadCraft na grafické kartě, lze jej zastavit a {{ui:Pokračovat}}, a na konci se odšumí; bez WebGPU použije sledovač paprsků WebGL jako dřív. Viz [Vysoká kvalita](topic:render#high-quality).
- **Více v dialogu Vykreslit** (na grafické kartě, takže potřebuje WebGPU): fyzickou oblohu a obrázky oblohy, profily světel IES, kameru s clonovým číslem, hloubkou ostrosti, dvoubodovou perspektivou, vyvážením bílé a 360° panoramaty, stupnici pro hotový obrázek, míchání světel a prvky vykreslení po vykreslení, mlhu, kouř a kaustiky, uložení jako 16bitové PNG, EXR nebo soubor vykreslení, a frontu vykreslování. Viz [Oblohy a profily světel na grafické kartě](topic:render#skies-and-light-profiles-on-the-graphics-card) a [Fronta vykreslování](topic:render#the-render-queue).
- **Váš počítač.** {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Vykreslování}} › {{ui:Váš počítač}} ukáže grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci smí použít, a úroveň, od které vykreslování začíná. Viz [Co váš počítač vykresluje](topic:your-machine).

### Soubory a další aplikace

- **Otevírání souborů STEP.** Díl `.step` nebo `.stp`, kus zařízení nebo model dodavatele (AP203, AP214, AP242) se otevře jako malý model IFC, každé těleso je prvkem, který lze prohlížet, řezat, měřit a uložit jako IFC. Barvy a názvy dílů sestavy zatím nečte. Viz [Soubory, které BimCraft otevírá a ukládá](topic:files#what-it-opens).
- **Export USD.** {{ui:USD}} na panelu nástrojů zapíše otevřené modely jako `.usda`, `.usdc` nebo `.usdz`, uspořádané podle areálu, budovy, podlaží a profese, s každou třídou IFC, GlobalId a vlastnostmi každého prvku. Viz [Export modelu jako USD](topic:usd).
- **Hmota z CivilCraft.** Hmota budovy poslaná z pohledu areálu CivilCraft ukáže své studijní čísla ve Vlastnostech a {{ui:Rozpracovat tuto hmotu}} postaví stěny na každém podlaží a podlahu z ní v jednom kroku zpět. Viz [Rozpracování hmoty budovy z areálové studie](topic:develop-a-mass).
- **Položky knihovny s variantami.** Položka, která přichází v několika variantách, má volbu {{ui:Varianta}} v záložce {{ui:Knihovna}}; umístěný prvek si svou variantu ponechá v IFC, {{ui:Vyměnit položku…}} vypíše ostatní varianty a kopie i aktualizace ji zachovají. Viz [Umístění a výměna položky knihovny s variantami](topic:library-variants).
- **Balíky projektu ve složce.** {{ui:Otevřít složku}} vypíše soubory `.ccbundle.zip` pod {{ui:Projektové svazky}}, a každé rozvržení v balíku má **Otevřít v …**: PDF do MarkupCraft, DWG do CadCraft, v nové záložce. Viz [Otevření rozvržení](topic:open-project-bundle#open-a-layout).

### Asistenti a doplňky

- **Další možnosti pro asistenty AI.** Asistent nyní umí přejmenovat prvky a nastavit hodnoty vlastností, přesunout a smazat prvky, změnit stěny, dveře a okna, exportovat USD a vykreslit obrázek nebo spustit frontu vykreslování; každá změna je jeden krok zpět. Viz [Nechte asistenta AI pracovat s vaším modelem](topic:assistants).
- **Doplňky mohou stavět v modelu.** API doplňků 1.1 umožňuje doplňku provést změnu v modelu jako jeden krok zpět (putuje v Live TeamWork), číst model a číst trasy potrubí a vzduchovodů, porty, zařízení a svary.
- **Doplněk Plant** (vypnutý, dokud jej nezapnete v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Doplňky}}): kontrola specifikací potrubí proti trasám, izometrické výkresy trasy jako SVG a DXF s kusovníkem, obecná procesní zařízení s hrdly umístěná v modelu, směrovač mezi dvěma porty a kontrola rozvržení továrny. Pomůcka pro kreslení, ne schválení inženýrem; jeho texty jsou jen v angličtině.

## Změněno

- **První dům na notebooku.** Na obrazovce velikosti notebooku se BimCraft spustí jen s půdorysem, lišta Kreslení je úzký panel s půdorysem vedle něj, půdorys a 3D pohled se vrátí do zobrazení, když je kresba opustí, 3D pohled zarámuje celý dům v úzkém okně a dveře a okna se vybírají před kótami.
- **Ukládání obrázku.** **Uložit PNG** v dialogu Vykreslit je nyní {{ui:Uložit}}, vedle něj je {{ui:Uložit jako}} pro ostatní formáty. Viz [Uložení obrázku](topic:render#save-the-picture).
- **Záložka Analýza** má blok {{ui:Návrhové kontroly}}: vytvoří kombinace zatížení podle ASCE 7 nebo EN 1990 pro vaše případy a zkontroluje každý válcovaný ocelový profil I (velikost W, S, IPE, HEA nebo HEB podle názvu profilu a velikosti) podle AISC 360 nebo EN 1993-1-1 a ukáže, jak velkou část své únosnosti využívá. Je to pomůcka, dokud profil neprojde inženýrem; svařované tvary a jiné průřezy hlásí „nekontrolováno“. Viz [Návrhové kontroly](topic:frame-analysis#design-checks).

## Opraveno

- Opakování (redo) po kroku, který vytvořil novou velikost rodiny, selhalo („žádná velikost“). Každý krok nyní při opakování vytváří stejné GlobalId IFC, takže opakování funguje u rodin a každé další změny.
- Když dva lidé uložili tutéž rodinu (v relaci Live TeamWork nebo ve dvou oknech), druhé uložení tiše přepsalo změnu prvního. Nyní uložení odmítne a řekne, jak vidět jejich změnu a znovu udělat tu vaši.
- Model v amerických geodetických stopách byl čten jako 0,3048 m na stopu místo 0,3048006096 m, což posunulo každé georeferencované IFC v amerických stopách na mapě.
- Editor rodin: jeho zavření už neshodí zaměření klávesnice na stránku, jeho Uložit zůstává na očích na telefonu a jeho pole už nezpůsobují, že telefon přiblíží.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má pro každou z délky, plochy, objemu, úhlu a sklonu jeden seznam se přesnými velikostmi, jaké dávají definice jednotek (americká geodetická stopa je vlastní jednotka). Vypněte jednotky, které nikdy nepoužíváte, a vypadnou ze seznamů; označte jednu hvězdičkou a nová práce v ní začne. Soubor si vždy ponechá svou vlastní jednotku. V BimCraft seznam {{ui:Jednotky}} na panelu nástrojů sleduje přepínače, hvězdička nastaví zobrazované jednotky, dokud je nevyberete na panelu nástrojů (vaše dřívější volba se zachová), a pole délky nástrojů kreslení přijímají značku libovolné jednotky, například `3.5 m` nebo `10 US ft`. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozvržení a panely, které se schovávají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vejde na obrazovku více (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlý pruh nadpisu: přetažením jej ukotvíte nebo odtrhnete, pustíte-li jej na pruh jiného panelu, sdílí rámec jako záložky, připnutím jej můžete odsunout k okraji, nebo jej skryjete a vyvoláte zpět od okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se dají posouvat.** Přetáhněte dialog za jeho záhlaví mimo kresbu; vrátí se tam, kde jste jej nechali. Dvojklikem na záhlaví jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro asistenty AI.** Deset připravených požadavků pro vašeho asistenta (uklidit výkres, vytisknout sadu, zkontrolovat výkresy, položit modelu otázky, sečíst výkaz výměr, zkusit variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehraný našimi testy. Aplikace žádnou AI neobsahují. Viz [Recepty pro asistenty AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají každé slovo aplikací, jako koncepty ještě nepřečtené rodilým mluvčím. Témata nápovědy jsou v angličtině, několik z nich ve španělštině.
- **CadCraft Studio** řekne, proč kontrola aktualizací selhala (pro váš systém zatím není soubor, není síť, špatný podpis), místo jen „Hotovo“, a přestane vracet kartu Co je nového, kterou jste zavřeli, dokud nebude novější vydání.

## Ještě není v této verzi

- **0.7 není podepsána kódem.** Podepisování a balík Microsoft Store se přesunuly do 0.8, protože ověření certifikátu ještě nepřišlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Ve Windows, zastaví-li SmartScreen instalátor, zvolte {{ui:Více informací}} a pak {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím není sestavení pro iPad ani iPhone.
- Seznamy úhlů a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- Sledování paprsků na grafické kartě, doplňky dialogu Vykreslit a fronta vykreslování potřebují WebGPU (bez něj vysoká kvalita používá sledovač paprsků WebGL); živý pohled používá WebGPU, je-li v prohlížeči k dispozici, jinak WebGL 2. Byly zde testovány jen na softwarové náhradě grafické karty, zatím ne na skutečných grafických kartách. Živý pohled v BimCraft nemá rozptyl ani sdílení (to má ModelCraft).
- Vykreslení nahraného procházení jako videa v BimCraft není vestavěné.
- Kontrola návrhu: profil I, jehož název profilu v IFC není velikost W, S, IPE, HEA nebo HEB (nebo jehož velikost se od ní liší), se bere jako svařovaný a vrací „nekontrolováno“, stejně jako trubky, úhelníky, U profily, štíhlé prvky a kroucení. Kontroly zatím žádný inženýr neprošel.
- Kreslené prvky nelze kopírovat jednotlivě, otáčet, zrcadlit ani řadit do pole (celé podlaží kopírovat lze), a není zde dělená stěna, nástroj Text ani montovaná stěna. Stěna, která se na horním podlaží stýká se stěnou z nižšího podlaží, se nerozřezává do 3D tělesa této stěny, a rozpisy uvádějí otvor horního podlaží pod jeho vlastním podlažím.
- Rodiny: knihovna rodin sdílená mezi projekty není hotová. Rodiny a kopírovaná podlaží zatím nebyla otevřena v jiných BIM programech.
- MEP: zařízení je obecné (bez dat výrobců); tee a redukce na ocelových svarech jsou obecné, ne z tabulky ASME B16.9; porty položek knihovny umístěných z záložky {{ui:Knihovna}} se do IFC nezapisují; nic neprošlo kontrolou inženýrem.
- Doplněk Plant zatím nedokáže nakreslit vedenou trasu do modelu, číslovat svary na svých izometriích ani zkontrolovat rozvržení zařízení umístěného z knihovny.
- Rostliny z knihovny rostlin CivilCraft zatím nejdou umístit ze záložky {{ui:Knihovna}} v BimCraft.
- Energie: žádná hodinová simulace, žádná metoda ISO 52016-1 a žádné klimatické soubory. Aktiva: žádné hostované dvojče, které by uchovávalo hodnoty nebo posílalo upozornění, když je BimCraft zavřený.
- Registrace skenů byla zkoušena na zkušebních skenech, ne na skutečné sadě skenů skeneru; soubory E57 se stále otevírají až do 6 milionů bodů a 512 MB.
- Balíky projektů se otevírají jen v BimCraft (ostatní aplikace berou rozvržení přes **Otevřít v …**), a balíky a dvouprogramová sada byly zkoušeny na náhradách, ne s Archicadem nebo Revitem samotnými.

Vše ostatní je v [Co ještě není hotovo](topic:not-built-yet).
