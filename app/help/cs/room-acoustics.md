---
title: Ověřte dozvuk místnosti a poslechněte si ho
summary: Doba dozvuku po oktávových pásmech pro každou místnost (Sabine a Eyring) podle její velikosti a povrchových úprav, vlastní cílová hodnota a hlas, tlesknutí nebo hudba přehrané přes vypočtenou impulzní odezvu místnosti.
keywords: akustika, dozvuk, doba dozvuku, rt60, sabine, eyring, pohltivost, ozvěna, zvuk, poslech, impulzní odezva, řeč, učebna, kancelář, koberec, akustický podhled, hluk
from: 16996cbb
---

Sekce {{ui:Akustika místností}} v levém panelu počítá, jak dlouho zvuk v každé místnosti doznívá. Čte z otevřeného modelu IFC podlahovou plochu každé místnosti, její výšku, stěny, dveře a okna. Model se nemění.

## Volba povrchových úprav

Pokud model říká, co je na povrchu, místnost to přečte: vnitřní vrstvu typu každé stěny (sádrokarton, omítka, cihla, beton a tvárnice jsou známé), druh podlahy (dřevo nebo beton) a to, zda je strop obložen podhledem. Štítek vedle každé volby říká, zda je z modelu, výchozí, nebo vaše volba. Jinou úpravu vyberte, pokud chcete výchozí hodnotu přepsat. Co model neříká, zůstává na výchozí hodnotě. Součinitele jsou **typické publikované hodnoty**; až budete mít zkušební data výrobku, nahraďte je jimi. Zadejte **cíl** (nejdelší středofrekvenční dozvuk, jaký chcete) a každá místnost nad ním se označí varováním spolu s pohltivostí, která by ji snížila.

## Čtení tabulky

Dozvuk je uveden pro 125 Hz až 4 kHz. Sabine se hodí pro živé místnosti a Eyring pro tlumené. Řádek označený *Použito* použije Eyringa, je-li průměrná pohltivost vyšší než 0.2. Pohlcování vzduchem je zahrnuto (zkracuje vysoká pásma ve velkých místnostech). Je to statistický model: předpokládá, že se zvuk šíří rovnoměrně, takže dlouhé nebo ploché místnosti a velmi malé místnosti jsou jen hrubým vodítkem. Nábytek, lidé a otevřené dveře se nepočítají.

## Poslech

{{ui:Přehrát v této místnosti}} přehraje hlas (vytvořený zde), tlesknutí, trhané tóny nebo **váš vlastní zvukový soubor** (zůstává v počítači) přes impulzní odezvu vypočtenou pro místnost: přímý zvuk, první odrazy krabicové místnosti této velikosti a dochvění, které se v každém pásmu utlumí podle vlastního dozvuku místnosti. {{ui:Přehrát bez prostoru}} přehraje tentýž zvuk ve stejné hlasitosti bez místnosti. Impulzní odezvu nebo zvuk v místnosti můžete uložit jako soubory WAV. Zní jako místnost dané velikosti a úpravy, ne jako nějaká skutečná místnost.

## Lidé a nábytek

Zadejte počet **osob v této místnosti**, aby se přičetla jejich pohltivost. Nábytek v modelu (pohovky, postele, židle, stoly, skříně, vyhledané podle názvu) přidá svou vlastní. Hodnoty jsou hrubé plánovací údaje, zaokrouhlené. U místnosti, na které záleží, je nahraďte měřeními.

## Zdroj a posluchač

V sekci {{ui:Zdroj a posluchač}} stiskněte {{ui:Umístit zdroj}} nebo {{ui:Umístit posluchače}} a klikněte do půdorysu místnosti. Přehrávaný zvuk se pak slyší odtud: přímý zvuk dorazí po vzdálenosti a dozvuková část má hlasitost odpovídající této vzdálenosti. Obojí zrušte, když se chcete vrátit k poli vzdálenosti.

## Nerovnoměrná pohltivost a módy místnosti

V sekci {{ui:Nerovnoměrná absorpce (krabicová místnost)}} zadejte místnost jako kvádr a vyberte úpravy její podlahy, stropu a stěn. Tabulka přidá k Sabineovi a Eyringovi ještě Fitzroyho a Arau-Puchadesa: ty zacházejí se třemi dvojicemi protilehlých ploch odděleně, takže místnost s kobercem a tvrdým stropem se nevyhodnotí jako příliš krátká. Když se dvojice výrazně liší, poznámka říká, které věřit. Pod tabulkou **Módy místnosti** vypisuje nejnižší stojaté vlny kvádru a kmitočet, pod nímž má místnost oddělené módy místo rovnoměrného zvukového pole. Jde o předpovědi pro krabicovou místnost, pomůcku při návrhu, nikoli měření.

## Jednotky

Plochy, výšky, objemy a vzdálenosti místností se zobrazují v {{ui:Jednotky}}, které jste zvolili (čtvereční a krychlové stopy, palce, milimetry, centimetry nebo metry). Výpočet sám zůstává v SI; mění se jen zobrazení. Časy (sekundy), kmitočty a hladiny se nemění.
