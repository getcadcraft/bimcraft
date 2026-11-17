---
title: Potrubí a vzduchovody
summary: Kreslete trasy potrubí a vzduchovodů v půdorysu podle jejich osy; kolena, T-kusy, redukce a přechody se vytvoří za vás, trasy patří do soustav s připojenými body v souboru IFC a objevují se v půdorysech, rozpisech a odečtu množství.
keywords: potrubí, instalace, vodoinstalace, vzduchovod, vzduchovody, vzduchotechnika, mep, strojní, koleno, T-kus, redukce, přechod, tvarovka, tvarovky, armatura, armatury, kulový kohout, globusový ventil, zpětný ventil, stoupačka, spád, odpad, kanalizace, dešťová, odvětrání, studená voda, teplá voda, chlazená voda, topení, plyn, požární ochrana, přívod vzduchu, odvod vzduchu, odsávání, soustava, soustavy, bod, body, konektor, konektory, zařizovací předmět, umyvadlo, dřez, záchod, sprcha, pračkový dřez, jednotky zařízení, UHC, DFU, dimenzování odpadů, odbočka, ramal, coletor, průtok vzduchu, cfm, tření, rovnoměrné tření, dimenzování, rozpis, odečet množství, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Co uděláte

Kreslete potrubí a vzduchovody budovy stejně jako stěny: klikejte na rohy osy trasy ve výšce, kterou nastavíte. BimCraft vytvoří tvarovky, zařadí každou část do její soustavy a propojí je, takže ji jiné programy čtou jako jednu propojenou soustavu.

## Nakreslení potrubí

1. Zapněte {{ui:Kreslení}}, otevřete {{ui:Sestavení}} a zvolte {{ui:Potrubí}}.
2. Na liště vyberte **soustavu** (studená voda, teplá voda, splašková kanalizace, plyn…). Nastaví obvyklý materiál: měď pro vodu, PVC pro odpady a odvětrání, ocel pro topení, chlazenou vodu, plyn a požární ochranu. Pokud potřebujete, změňte **materiál**, **třídu** a **velikost**. Velikosti a stěny pocházejí z veřejných norem: ocelové potrubí ASME B36.10M, měděná trubka ASTM B88, PVC ASTM D1785 a PEX ASTM F876. Brazilské projekty mohou použít **PVC vodovodní potrubí (NBR 5648)**, lepené PVC pro studenou vodu, a **PVC odpadní potrubí (NBR 5688)**, řada normální nebo zesílená, pro odpady a odvětrání: jejich velikosti se označují DN (DN 25, DN 100). Jakmile některé z nich vyberete, volba jiné soustavy zůstane u brazilských potrubí (PVC odpadní potrubí pro splaškový odpad po PVC vodovodním potrubí).
3. Nastavte **Ve výšce**: výšku osy potrubí nad úrovní.
4. Klikněte, kde potrubí začíná, a pak na každý roh. Na posledním bodě dvakrát klikněte nebo stiskněte {{key:Enter}}. {{key:Backspace}} vrátí poslední roh zpět; {{key:Esc}} trasu zahodí.

Potrubí se přichytává stejně jako stěny a k dalším trasám: začněte na konci potrubí, abyste navázali, nebo skončete na přímce potrubí, abyste z něj odbočili. Nová trasa převezme výšku potrubí, ke kterému se přichytí.

Trasa začatá nebo ukončená na bodě zařízení převezme jeho velikost a soustavu a zůstane k němu připevněna: viz [Zařízení MEP s body](topic:mep-equipment) a [Připojení potrubí a vzduchovodů k zařízení](topic:mep-connections).

## Nastavení instalační normy projektu

První seznam na liště potrubí je **instalační norma** modelu: **US (IPC, palce)** nebo **Brazílie (ABNT, DN)**. Ukládá se v modelu, takže každý, kdo soubor otevře, začíná trasy stejným způsobem. U **US** nová trasa začíná v mědi (voda) nebo v PVC Schedule 40 (odpady), v palcích, se spádem podle International Plumbing Code. U **Brazílie** studená voda začíná jako PVC soldável DN 25, splaškové a dešťové odpady a odvětrání jako PVC esgoto DN 100 se spádem podle NBR 8160 a teplá voda v mědi. Platí to i pro trasu začatou na připojce zařizovacího předmětu nebo na bodě zařízení. Již nakreslené potrubí si ponechá svůj materiál a své vlastní tabulky; seznam materiálů zůstává otevřený, takže můžete v modelu US záměrně nakreslit jednu brazilskou trasu. Soubor bez volby se chová jako dříve: nová trasa se řídí materiálem, který je zrovna použit.

## Nakreslení vzduchovodu

1. Zvolte {{ui:Potrubí vzduchu}}. Vyberte soustavu (přívod, odvod, odsávání nebo venkovní vzduch) a tvar: kruhový, obdélníkový nebo ploché oválné.
2. Zadejte šířku a výšku (šířka kruhového vzduchovodu je jeho průměr) a **Ve výšce** pro výšku osy.
3. Chcete-li ho dimenzovat podle průtoku vzduchu, zadejte **Průtok vzduchu** a **Tření** a klikněte na {{ui:Navrhnout velikost}}. Vzduchovod se dimenzuje rovnoměrným třením, metodou z kapitoly o návrhu vzduchovodů v ASHRAE Handbook, a zaokrouhlí se na skladovou velikost, takže tření vyjde na hodnotu nebo pod hodnotu, kterou jste zadali. Bez zadané hodnoty tření se použije 0.08 in. vodního sloupce na 100 ft (0.8 Pa/m). Obdélníkový vzduchovod si zachová výšku, kterou jste zadali, a dostane šířku; BimCraft to uvede, když jsou jeho strany více než 4 ku 1.
4. Klikejte na rohy jako u potrubí.

## Zařizovací předměty

{{ui:Sestavení}} › {{ui:Umístit rodinu}} nabízí pět zařizovacích předmětů jako výchozí, každý s odtokem a připojkou studené vody: **Záchod**, **Umyvadlo**, **Kuchyňský dřez**, **Sprchová vanička** a **Pračkový dřez**. Jejich přední strana je obrácena k vám, když je umisťujete, a zadní strana přiléhá ke stěně. Odtoky jsou na nejmenším odtoku zařizovacího předmětu podle NBR 8160 (DN 100 pro záchod, DN 50 pro kuchyňský dřez, DN 40 pro ostatní); voda je DN 20. Změňte jejich velikosti nebo je upravte jako kteroukoli rodinu: viz [Rodiny a jejich velikosti](topic:families).

Rodina určuje, který zařizovací předmět představuje, pod {{ui:Zařizovací předmět}} na záložce {{ui:Konektory}} editoru rodiny. Její odtok se pak počítá v jednotkách zařízení: 6 UHC pro záchod, 1 pro umyvadlo, 3 pro kuchyňský dřez nebo pračkový dřez, 2 pro sprchu (NBR 8160), nebo odvodní jednotky zařízení z tabulky IPC 709.1.

## Z připojky zařizovacího předmětu

Prvky umístěné z rodiny s konektory (odtok a výtok umyvadla, hrdlo koncového vzduchového prvku: viz [Úprava rodiny](topic:family-editor)) zobrazují své volné konektory jako body, zatímco je zapnuto {{ui:Potrubí}} nebo {{ui:Potrubí vzduchu}}, a kurzor se k nim přichytává.

- **Začít na konektoru**: trasa převezme soustavu a velikost (potrubí materiálu z lišty na velikosti konektoru nebo těsně nad ní; kruhový vzduchovod jeho průměr). Když konektor směřuje dolů nebo nahoru, jako odtok pod umyvadlem, trasa nejdřív jde rovně dolů nebo nahoru do výšky **Ve výšce** a pak dál podle vašich kliknutí.
- **Skončit na konektoru**: trasa sjede nebo vyjede na něj a tam skončí.

Trasa je v souboru IFC připojena k prvku, takže ostatní programy vidí zařizovací předmět jako součást jeho soustavy. Prvek umístěný později s konektorem na konci trasy je k ní také připojen. Trasa přesunutá pryč od konektoru už k němu připojena není.

## Tvarovky, které vytvoří BimCraft

| Kde | Co vytvoří BimCraft |
|---|---|
| Trasa se láme | Koleno. Ocelové potrubí s dlouhým poloměrem podle ASME B16.9 (1.5 × velikost), jiné potrubí na jeden vnější průměr, kruhový vzduchovod na 1.5 průměru, obdélníkový vzduchovod na jednu šířku (nebo jednu výšku při zatáčce nahoru nebo dolů) |
| Trasa končí na ose jiné trasy | T-kus; druhá trasa se tam rozdělí |
| Dvě trasy se stýkají čelem na různých velikostech | Redukce (potrubí) nebo přechod (vzduchovody) |
| Dvě trasy stejné velikosti se stýkají čelem pod úhlem | Koleno |

Když trasu změníte, přesunete nebo smažete, každá tvarovka na dané úrovni se vytvoří znovu. Pokud je úsek příliš krátký pro tvarovky na svých koncích, BimCraft to oznámí a nic nezmění: přesuňte roh dál.

:::note
Tvarovky a armatury jsou obecné: nakreslené podle velikosti potrubí nebo vzduchovodu, ne podle katalogu výrobce. Nasouvací, lisované a drážkované tvarovky, těla armatur a zařízení mají vlastní velikosti výrobců; před objednávkou je ověřte u dodavatele.
:::

## Stoupačky

Při kreslení zadejte novou výšku do **Ve výšce** a stiskněte {{key:Enter}}: trasa jde na posledním rohu rovně nahoru nebo dolů, s kolenem na každém konci. Stoupačka může vystoupat do úrovně nad ní. Každá úroveň ukazuje části trasy, které dosáhnou do jejího rozsahu pohledu, u stoupačky s **UP** nebo **DN**.

## Odpady a jejich spád

Splaškové a dešťové odpady začínají na nejmenším spádu, který International Plumbing Code dovoluje pro jejich velikost: 1/4 in. na stopu až do 2-1/2 in., 1/8 in. na stopu od 3 do 6 in., 1/16 in. na stopu od 8 in. Brazilské PVC odpadní potrubí začíná na spádu podle NBR 8160: 2 % až do DN 75, 1 % od DN 100. Jiný spád zadejte na liště nebo ve {{ui:Vlastnosti}}: `1/4"/ft`, `2 %` nebo `1:50`. Trasa klesá od svého prvního bodu, takže odpady kreslete ve směru jejich toku. Půdorys ukazuje spád a šipku. Vlastnosti upozorní, když je odpad plošší než minimum předpisu.

## Dimenzování odpadů podle jednotek zařízení

Vyberte splaškový odpad: **Jednotky zařízení** ve {{ui:Vlastnosti}} říká, kolik jich nese a jakou nejmenší velikost potřebují. Počítá se každý zařizovací předmět, jehož připojka odtoku je na trase, a počítá se i každý odpad, který do ní teče: kreslete odpady ve směru jejich toku, každý končí na odpadu, do kterého teče.

- Odpady z brazilského PVC odpadního potrubí se počítají v **UHC** a řídí se NBR 8160; ostatní se počítají v **DFU** a řídí se International Plumbing Code.
- **Odpad**: **Odbočka** se dimenzuje podle tabulky předpisu pro odbočky zařízení; **Hlavní odpad** podle své tabulky podle spádu, takže záleží na jeho **Spádu**.
- Odpad není nikdy menší než odtoky zařizovacích předmětů, které obsluhuje (záchod potřebuje DN 100, neboli 3 in.), ani než odpad, který do něj teče. Podle NBR 8160 je hlavní odpad alespoň DN 100.

{{ui:Dimenzovat odpady}} nastaví každý splaškový odpad modelu, který je na své jednotky zařízení příliš malý, na velikost, kterou potřebuje, jako jeden krok, který můžete vrátit zpět. Odpad nakreslený větší, než potřebuje, zůstane beze změny. Když odpad nese víc, než dokáže největší velikost jeho potrubí při daném spádu, BimCraft to oznámí: dejte mu strmější spád nebo jiné potrubí.

:::note
Tabulky jsou pro vodorovné odpady. Stoupačky, odvětrání a dešťové odpady se zde nedimenzují: zkontrolujte je a celý návrh podle předpisu, který se na projekt vztahuje.
:::

## Armatury

1. Zvolte {{ui:Armatura}} a druh: šoupátko, kulový kohout, globusový ventil nebo zpětný ventil.
2. Klikněte na potrubí, kam má patřit. Potrubí se kolem ní přeruší a armatura se připojí na obě strany.

V {{ui:Vlastnosti}} trasy jsou vypsány její armatury, u každé s {{ui:Odebrat}}.

Další druhy armatur, filtr, klapky na vzduchovodech, vlastní specifikace potrubí a rodiny výrobců: viz [Specifikace potrubí, armatury, klapky a rodiny výrobců](topic:pipe-specs).

## Úprava trasy

Vyberte libovolnou část trasy v půdorysu nebo v pohledu 3D. V {{ui:Vlastnosti}}:

- **Soustava**, **Materiál**, **Třída** a **Velikost** (potrubí), nebo **Tvar**, **Šířka**, **Výška** (vzduchovody).
- **Výška nad úrovní** posune celou trasu nahoru nebo dolů.
- **Izolace**: její tloušťka, uchovaná pro kontrolu prostupů a seznam otvorů (pro ni se nic nekreslí): viz [Kontrola potrubí a vzduchovodů vůči konstrukci](topic:mep-against-structure).
- Ocelové potrubí: **Rozřezat na spooly**: viz [Ocelové spooly potrubí a listy spoolů](topic:pipe-spools).
- **Spád** (potrubí).
- **Průtok** s {{ui:Navrhnout velikost}}: u vody nejmenší velikost, která udrží vodu na 8 ft/s (2.4 m/s), nebo na 5 ft/s (1.5 m/s) u teplé vody; na 3 m/s u brazilského PVC vodovodního potrubí (NBR 5626). U vzduchovodů rychlost a tření podle nakresleného vzduchovodu. Splaškové odpady se dimenzují podle jejich jednotek zařízení: viz výše **Dimenzování odpadů podle jednotek zařízení**.

Každá změna je jeden krok {{ui:Zpět}}. {{key:Delete}} odstraní celou trasu.

## Půdorysy

- Potrubí menší než 150 mm (asi 6 in.) je kresleno jako jedna čára na ose, větší potrubí a všechny vzduchovody jako dvě čáry v jejich šířce.
- Každá soustava má vlastní barvu; PDF půdorysu je tiskne černě.
- Každá trasa je popsána svou velikostí a soustavou (například `2" CW` nebo `16×10 SA`).
- Rozsah pohledu půdorysu určuje, které trasy zobrazí, a {{ui:Zobrazeno v tomto půdorysu}} může vynechat **Potrubí** nebo **Vzduchovody**: viz [Pohledy, rozsahy pohledů a vlastní listy](topic:views-and-sheets).

## Rozpisy a odečet množství

Panel {{ui:Rozpisy}} přidá **Potrubí** (podle soustavy, materiálu a velikosti, s délkami), **Vzduchovody** (podle soustavy, tvaru a velikosti, s délkami a plochou vnějšího povrchu) a **Tvarovky a armatury** (podle druhu a velikosti, spočítané). Kliknutím na řádek vyberete, co se v něm vypisuje; {{ui:Stáhnout CSV}} ho stáhne.

{{ui:Odečet množství}} předá trasy do TakeoffCraft: potrubí a vzduchovody podle velikosti jako trasy nakreslené v půdorysu (odpady se spádem se měří podél jejich spádu), tvarovky a armatury se počítají tam, kde jsou: viz [Odeslání množství modelu do TakeoffCraft](topic:takeoff). Stoupačky se z tohoto listu vynechávají, protože je půdorys nemůže změřit; jejich délku má rozpis Potrubí.

## V souboru IFC

Každá trasa je sestava, která drží své části: úseky potrubí a vzduchovodů, tvarovky a armatury, každou s typem, materiálem, barvou pro svou soustavu a body. Dotýkající se body jsou propojeny a každá část patří své distribuční soustavě (soubory IFC2X3 dostávají totéž jako průtočné úseky, tvarovky a regulátory v soustavě). Ostatní programy, které čtou soustavy IFC, vidí jednu propojenou trasu na soustavu. Vlastní definice trasy se s ní uchovává, takže ji BimCraft při změně vytvoří znovu stejným způsobem.
