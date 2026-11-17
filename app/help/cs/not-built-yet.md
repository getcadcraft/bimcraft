---
title: Co zatím není hotovo
summary: Co tato verze BimCraft zatím nedělá a co použít místo toho dnes.
keywords: chybějící, omezení, limity, nepodporováno, plán vývoje, tvorba, modelování, řezy, měření, kolize, bcf, cloud, desktop, export
from: 87777dcc
---

BimCraft je dnes čtečka, kontrolor a editor dat IFC, který začal kreslit budovy: stěny, dveře a okna, místnosti, podlahy, stropy a střechy (viz [Kreslení stěn](topic:draw-walls), [Dveře a okna](topic:doors-and-windows) a [Místnosti, podlahy, stropy a střechy](topic:floors-and-roofs)). Toto je upřímný seznam toho, co zatím nedělá, s tím, co dělat místo toho.

## Modelování a tvorba

| Zatím ne | Místo toho, dnes |
|---|---|
| Kreslení trámů; sloupy z ocelových profilů | Použijte program pro tvorbu modelu a pak zde otevřete jeho export IFC. Obdélníkové a kruhové sloupy zde lze umístit (viz [Osy a sloupy](topic:grids-and-columns)); přímé, L, U, točivé a spirálové schodiště a zábradlí se zde kreslí (viz [Schodiště a zábradlí](topic:stairs-and-railings)) |
| Okno v čele vikýře; vikýře na rovinách střechy kreslené ručně; zakřivené střechy; textura vykreslené krytiny střechy | Roviny střechy kreslené podle jejich rohů a sklon u každé stěny: viz [Střechy: sklon u každé stěny, štíty, přístřešky a roviny střech](topic:roofs) |
| Úprava stěn, dveří nebo oken, které vytvořil jiný program | Váš program pro tvorbu modelu; kreslicí nástroje mění jen to, co sami nakreslily |
| Profily stěn s převisy nebo otvory; otvory ve stěnách, které nejsou obdélníky; přidávání nebo odebírání bodů profilu stěny v 3D pohledu | Profil, připojení, sklon a otvory fungují v {{ui:Vlastnosti}}, v pohledech a řezech, na pohledu na čelo stěny a úchyty ve 3D, pro přímé i zakřivené stěny: viz [Tvar stěny: připojení, profil, sklon a otvory](topic:wall-shape) |
| U zakřivených stěn: {{ui:Oříznout / prodloužit}} a {{ui:Roh}}, rámování, automatické kóty v půdorysu, přichytávání podél oblouku (přichytává ke koncům a ke středu oblouku) | Pro tyto případy kreslete stěnu přímo, nebo použijte přímé úseky. Zakřivené stěny jsou v [Kreslení stěn](topic:draw-walls) |
| Tažení umístěné položky knihovny v 3D pohledu | Přetáhněte ji v půdorysu, nebo zadejte X, Y a Rotaci v {{ui:Vlastnosti}}: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library) |
| Umisťování rostlin z knihovny rostlin pracovního prostoru Landscape v CivilCraft | Vysaďte je v CivilCraft, nebo umístěte stromy a keře z entourage (okolí) knihovny: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library) |
| V doplňku Plant (vypnutém, dokud ho nezapnete): kreslení trasovaného vedení do modelu, čísla svitků na jeho isometriích, kontrola rozmístění zařízení umístěného z knihovny | Vedení nakreslete pomocí {{ui:Potrubí}} (viz [Potrubí a vzduchotechnika](topic:pipes-and-ducts)); kontrolu rozmístění čte vlastní tabulka zařízení doplňku |
| Otáčení, zrcadlení nebo vytváření pole jednotlivých nakreslených stěn, dveří a oken (stěny se posouvají a kopírují nástroji {{ui:Posunout}}, Odsazení a natažení boxem: viz [Tvary stěn, rozdělení, odsazení, natažení a zámek](topic:wall-tools)); styl spojení (na dorazu, na roh) v rozích se zakřivenou stěnou nebo se třemi a více stěnami (viz [Tvary stěn, rozdělení, odsazení, natažení a zámek](topic:wall-tools)); nástroj Text; fasádní stěny | Zkopírujte vše v úrovni příkazem {{ui:Kopírovat toto podlaží…}} (viz [Kreslení stěn](topic:draw-walls#levels)); jinak je nakreslete znovu |
| Vrstvy skladby stěny kreslené v půdorysu a řezu; kóty v řezech a pohledech; referenční kóty k dveřím, oknům a jiným komponentám; skladby a membrány v tabulkách a množstvích; knihovna materiálů sdílená mezi projekty; priorita vrstev v řezech, pohledech a 3D a v uzlech tří a více stěn (v půdorysu se rohy, spoje T a křížení dvou stěn čistí podle priority vrstev: viz [Tvary stěn, rozdělení, odsazení, natažení a zámek](topic:wall-tools)); obalené nebo proměnné vrstvy; úprava skladby stěny, kterou vytvořil jiný program | Vrstvy jsou v typu stěny a v jejím náhledu ({{ui:Skladby stěn…}}); stěny se měří jako jedna obálka: viz [Skladby stěn a referenční kóty](topic:wall-assemblies) |
| Změna tvaru nebo velikosti prvku (kromě stěn, dveří a oken nakreslených zde a prvků umístěných z rodiny) | Váš program pro tvorbu modelu. Mazání, vyjmutí, kopírování a vkládání fungují zde: viz [Mazání, vyjmutí, kopírování a vložení stavebních prvků](topic:edit-elements) |
| Mazání podlaží, prostorů, budov nebo pozemku | Smažte prvky, které jsou v nich |
| Vložení stavebních prvků do jiného modelu | Kopírujte a vkládejte v rámci jednoho modelu; umístěné položky knihovny se vloží do kteréhokoli modelu |
| Přidávání nových vlastností nebo sad vlastností | Vyplňte zde existující hodnoty, nebo přidejte parametr ve svém programu pro tvorbu modelu a exportujte znovu |
| Úprava množství, seznamů, výčtů | Váš program pro tvorbu modelu |
| Ukládání projektových souborů jiných programů | BimCraft ukládá IFC (a své vlastní soubory rodin: viz [Rodiny a jejich velikosti](topic:families)) |
| Rodiny: knihovna rodin umísťovaných z půdorysu a sdílená mezi projekty (Knihovna); bod pro uchopení přetažený v 3D pohledu umístěného prvku (přetahují se v náhledu editoru rodin a v půdorysu); úrovně podrobnosti volené pro každý pohled (jedna úroveň pro projekt; listy volí podle měřítka); rotační těleso na svislé rovině uvnitř jiné rodiny otočené o čtvrt otáčky; vlastní půdorysné symboly dveří a oken (kreslí se symboly výchozí rodiny) | Rodiny s typovanými parametry, vzorci, vlastním půdorysným symbolem, aktivními body, opakováními, úrovněmi podrobnosti, rodinami uvnitř rodin, velikostmi z tabulky a parametry jednotlivých prvků se vytvářejí zde: viz [Úprava rodiny](topic:family-editor) a [Rodiny a jejich velikosti](topic:families). Duplikujte rodinu a začněte od ní |
| Úprava typů jiných programů jako rodin; převod položky knihovny na rodinu | Typy jiných programů jsou vypsány, seskupeny podle odhadu a jejich prvky vybrány. Položky knihovny se umisťují tak, jak jsou |
| Tvarovky, ventily a zařízení výrobců (kapacity, hmotnosti, rozměry přípojek výrobců); délky T-kusů a redukcí ASME B16.9 na ocelových svitcích; tlakové ztráty tvarovkami, průtoky a vyvažování; sprinklery; kabelové žlaby; dimenzování stoupaček a odvětrání podle armatur; tažení rohů vedení; vyřezávání otvorů ve stěnách a deskách; uvolnění konce vedení připojeného k přípojce (kromě smazání zařízení); přípojky u položek knihovny umístěných z panelu Knihovna; hmotnosti tvarovek; švy, tloušťky a spojky vzduchotechniky | Vedení potrubí a vzduchotechniky s obecnými standardními tvarovkami, systémy, půdorysy, tabulkami a výkazem výměr se kreslí zde: viz [Potrubí a vzduchotechnika](topic:pipes-and-ducts). Obecná zařízení s přípojkami, připojená vedení a kontrola připojení: [Zařízení MEP s přípojkami](topic:mep-equipment), [Připojení potrubí a vzduchotechniky k zařízení](topic:mep-connections). Sady kolizí, vůle a seznam otvorů: [Kontrola potrubí a vzduchotechniky vůči konstrukci](topic:mep-against-structure). Ocelové svitky a listy, seznam řezů vzduchotechniky: [Ocelové svitky potrubí a listy svitků](topic:pipe-spools). Výrobní položky z vašeho programu MEP přineste jako IFC |
| Posudky norem u svařovaných I-profilů, u I-profilů, jejichž profil IFC není pojmenován jako válcovaný profil W, S, IPE, HEA nebo HEB, a u trubek, úhelníků a U-profilů (vrací se jako nekontrolované); vzpěr nebo dynamická odezva (vlastní frekvence jsou v bloku Konečné prvky) (druhý řád je jen P-Delta: pružný, ohybový, bez snížení tuhosti); stěny a desky v analýze; zatížení z ploch (kromě jednoho tlaku na každou betonovou desku) | Karta {{ui:Analýza}} udává síly, reakce a průhyby trámů, sloupů a ztužidel lineární analýzou prvního řádu a posuzuje válcované I-profily; je to pomůcka, dokud ji neprověří statik: viz [Analýza nosné konstrukce](topic:frame-analysis#design-checks) |

## Prohlížení modelů

| Zatím ne | Místo toho, dnes |
|---|---|
| 3D z projektových souborů | Exportujte IFC a otevřete je. Viz [Dostat projektový soubor do 3D přes IFC](topic:rvt-to-ifc) |
| Vnitřní pohledy ve vygenerované sadě výkresů (z Vlastností místnosti a na vašich listech se vytvářejí); vlastní kóty na pohledech a řezech (kóty úrovní, výšky, šířka a značky dveří/oken se kreslí; poznámky se píší v pohledu: viz [Úpravy v pohledech a řezech](topic:edit-in-elevations)); kreslení stěn v pohledu (kreslí se v rovině řezu); šablony týmu přes Studio | Sada výkresů vytvořená z modelu: viz [Pohledy, řezy a listy](topic:sheets). Pro libovolný model IFC: jedna rovina {{ui:Řez}}, nebo řezný box; viz [Řez modelu IFC rovinou](topic:section-plane) |
| Výnosové pohledy, detailní pohledy, kreslicí pohledy a legendy; kreslicí čáry a šrafy kreslené v pohledu; oříznutí pohledu nebo řezu; šablony pohledů pro pohledy, řezy, stropní půdorysy a 3D pohledy; stropní půdorysy ve vygenerované sadě výkresů; celá sada vlastních listů v jednom PDF | Půdorysy a stropní půdorysy mají rozsahy pohledu, oblast oříznutí, měřítko a podklad (půdorysy také šablony) a vaše vlastní listy přijímají půdorysy, stropní půdorysy, pohledy, řezy a tabulky, každý uložený jako PDF: viz [Pohledy, rozsahy pohledů a vlastní listy](topic:views-and-sheets) |
| Dodatečné přesunutí umístěného světla ke stropu; šikmé nebo schodovité stropy; vzory stropů jiné než pět mřížek; vlastní symbol svítidla ve stropním půdorysu | Umístěte je s **Uchycení: Na stropě**; stropní půdorys nakreslí svítidlo z jeho vlastního tvaru: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library) |
| Sdílení sad hledání s jinými, sady uvnitř souboru IFC | Sady zůstanou v tomto prohlížeči; viz [Hledání prvků podle třídy, názvu nebo vlastnosti](topic:find) |
| Měření úhlů nebo podél dráhy o více bodech | Měřte každou část nástrojem {{ui:Měřit}}: viz [Měření vzdáleností, ploch čel a poloh ve 3D](topic:measure) |
| Textury v živém 3D pohledu | Natřené materiály ukazují svou barvu v pohledu a svou texturu ve vykreslených obrázcích: viz [Vykreslení obrázku modelu](topic:render) |
| Měkké kolize (vůle) mezi libovolnými dvěma sadami, skupiny kolizí, ukládání výsledků kolizí | Spusťte {{ui:Kontrola kolizí}} a z důležitých kolizí vytvořte problémy: viz [Kontrola kolizí](topic:clash-check). Potrubí a vzduchotechnika vůči konstrukci mají {{ui:Zkontrolovat vůle}}: viz [Kontrola potrubí a vzduchotechniky vůči konstrukci](topic:mep-against-structure) |
| Uložení více modelů jako jedné sady nebo úprava dvou modelů najednou | Upravujte jeden model najednou; každý ukládá svůj vlastní soubor |
| Přiřazování problémů, termínů, štítků, více pohledů na problém, úprava problému | Jeden pohled na problém; viz [Problémy a soubory BCF](topic:issues-bcf) |
| `.ifczip` a `.ifcxml` | Rozbalte je, nebo exportujte prostý `.ifc` |
| Mapové vrstvy pro model bez převodu do mapy nebo v pohledech výkresu | Exportujte model se souřadnicemi: viz [Mapa na terénu pod modelem](topic:map-layers) |
| Skeny E57 nad 6 milionů bodů nebo 512 MB; vlastní soubory výrobců skenerů (RCP, RCS, FLS, LGS, TZF, ZFS); mračna bodů v 3D pohledu výkresu; ukládání polohy mračna s modelem | Exportujte sken jako LAS nebo LAZ a otevřete jej vedle modelu IFC: viz [Formáty mračen bodů](topic:point-cloud-formats) a [Zobrazení mračna bodů vedle modelu](topic:point-clouds) |
| Registrace skenů: samostatné hledání cílů (koule, šachovnice) ve skenu, řešení všech skenů najednou (vyrovnání svazku), měřítko, registrace vůči modelu | Vyberte odpovídající body nebo zadejte souřadnice cílů, pak upřesněte jeden sken po druhém pomocí ICP: viz [Sloučení více skenů do jednoho](topic:register-scans) |
| Otevírání projektových souborů .pln, .pla, .tpl a .bpn | Exportujte z nich IFC a DWG, nebo projektový balík: viz [Otevření souborů .pln a .pla](topic:pln-project-files) a [Otevření projektového balíku](topic:open-project-bundle) |
| Otevření seznamu {{ui:Prvky}} pro výběr podle druhu | Klikněte na skupinu druhu ve {{ui:Stromu modelu}}: viz [Orientace ve stromu modelu](topic:model-tree) |
| Psaní komentáře nebo názvu u problému ve VR, hlasové poznámky, ruční posun roviny řezu ve VR, řezný box ve VR | Umístěte problém ve VR a pak přidejte jeho slova na kartě Problémy; rovinu řezu nebo box nastavte v 3D pohledu, než vstoupíte: viz [Kontrola modelu v headsetu VR](topic:vr-review) |
| Vidění lidí u stolu ve VR (zobrazují se jen lidé ve VR), nahrávání procházky ve VR | Požádejte je, ať se připojí ve VR, nebo sledujte v 3D pohledu |
| Simulace denního osvětlení (klimatické denní osvětlení, oslnění, hodiny slunce); střešní okna v činiteli denní osvětlenosti; ověření podle BS EN 17037 nebo schémat zelených budov; metoda energie ISO 52016-1, hodinová simulace energie, tepelná hmota a mosty, klimatické soubory | Pomůcky pro návrh: průměrný činitel denní osvětlenosti, vertikální složka oblohy každého okna, slunce procházející okny v daném datu a činitel denní osvětlenosti na mřížce ([Odhad denního osvětlení v každé místnosti](topic:daylight-factor)); tepelné ztráty, stupňodenní rok a maximum chlazení na místnost ([Odhad zatížení vytápěním a chlazením](topic:heating-and-cooling-loads)). Pro doložení shody použijte simulační program |
| Hostované dvojče budovy: údaje uchovávané a upozornění e-mailem, když je BimCraft zavřený, e-maily o termínu údržby; MQTT 5; načítání úloh COBie zpět | Údaje o měření z CSV nebo přímo z vašeho vlastního brokera nebo adresy, dokud je model otevřen; limity, které označují aktiva; dokumenty; export a import COBie: viz [Uchovávání dat o aktivech a záznamu údržby v modelu](topic:assets-and-maintenance) |
| Zásuvný modul nebo živé propojení pro Enscape, Twinmotion nebo jiné vizualizační programy; soubory FBX nebo Datasmith; jeden objekt na prvek, uložené pohledy a procházky v .glb | Uložte .glb pro vykreslovací programy, které čtou glTF; soubor USD (jeden objekt na prvek s jeho daty IFC: viz [Export modelu jako USD](topic:usd)); nebo IFC pro ty, které běží uvnitř jiného návrhového programu: viz [Odeslání modelu do vykreslovacího programu](topic:model-for-rendering) a [Otevření scény v jiném programu](topic:render-open-in) |
| Jiný program kreslí obrázek Vykreslení bez doplňku vykreslovacího jádra (CadCraft nikdy nespouští program pod licencí GNU GPL); panoramatické nebo stereo kamery a obloha přes jiný program; zásuvný modul Unreal Engine (soubory se zapisují, zásuvný modul, který je otevírá, zatím nevyšel) | Naše vlastní jádra Fast a Path tracer; jádro doplňku ([nakreslete obrázek jiným programem](topic:render-other-program)); soubor USD, glTF nebo složka Unreal ze seznamu jader, který lze odnést do libovolného programu |
| V živém pohledu: rozptyl rostlin a skal, sdílení panoramat, prohlídka, offline prohlížeč nebo video | Živý pohled ModelCraftu je má; zde obrázky vykreslení a panoramata 360°: viz [Živý pohled](topic:live-view) a [Vykreslení obrázku modelu](topic:render) |

## Výkresy

| Zatím ne | Místo toho, dnes |
|---|---|
| Úprava, měření nebo ukládání DWG a DXF | Kreslicí aplikace CadCraft ({{ui:Upravit v CadCraft}} v 2D pohledu) |
| Tisk nebo export PDF | Tiskněte z programu, který výkres vytvořil; nejdřív jej zkontrolujte pomocí {{ui:Pohled na tisk}} |
| Styly vykreslení a tabulky per | {{ui:Pohled na tisk}} zobrazuje prostou černou s tloušťkami čar |
| Soubory DWG starší než R13 a binární DXF (BimCraft to řekne, když jej otevřete) | Uložte výkres znovu jako novější DWG, nebo jako ASCII DXF |
| Výkresy propojené uvnitř propojených výkresů | Otevřete je přímo |
| Obrázky TIFF | Uložte kopii PNG nebo JPEG se stejným názvem a přidejte ji |
| Výkresy DGN | Uvedeny jen v přehledech složek |
| Objekty uvedené pod **Zatím nenakresleno** | Prohlédněte si výkres v programu, který jej vytvořil |
| Tělesa ACIS, tělesa, oblasti a plochy a dělené sítě ve 3D | Exportujte IFC nebo 3D plochy z programu, který výkres vytvořil |
| Obrázky, víceúrovňové výnosy a listy ve 3D pohledu výkresu | Uvidíte je na kartě {{ui:Model}} a na listech |
| Výběr objektů v 2D pohledu výkresu | Přepněte na {{ui:3D}} a klikněte tam na objekt: viz [Prohlížení výkresu DWG nebo DXF ve 3D](topic:dwg-in-3d) |
| Tabulky zařízení z výkresů bez značek KCL-ITEM | Není k dispozici |
| Tabulka zařízení jako XLSX nebo PDF | {{ui:Stáhnout CSV}} a otevřete ji v tabulkovém procesoru |

## Soubory a platformy

| Zatím ne | Místo toho, dnes |
|---|---|
| Ukládání do cloudu | Ukládejte kopie do počítače nebo na kancelářský server. Ukládání do cloudu zatím není k dispozici |
| Zapamatování složek ve Firefoxu a Safari | Vyberte složku znovu, nebo ji přetáhněte |
| Zpět po uložení | Otevřete původní soubor znovu a začněte od začátku |
| Doplnění chybějící části useknutého projektového souboru | Zkopírujte původní soubor znovu; ve složce BimCraft čte nejnovější úplnou zálohu |
| Znovuotevření souborů, které jste měli otevřené | Neuložené změny se nabídnou jako "Obnovit práci?", když se vrátíte; otevřete soubory znovu ze seznamu posledních |
