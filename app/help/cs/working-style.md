---
title: Pracovní styl, duplikované pohledy, pera na papíře, Vykázat jako a šablony
summary: Nastavte, jak se BimCraft chová podle toho, jak pracujete, duplikujte libovolný pohled jako vlastní kopii nebo propojený, uchovávejte přepsání per v souboru a tiskněte tak, jak je vidět, nebo přes tabulku per, vykažte prvek jako jinou třídu IFC a začínejte projekty z vlastních šablon.
keywords: pracovní styl, duplikovat pohled, duplikovat, kopie pohledu, závislý pohled, propojený pohled, vlastní kopie, přepsání per, pera, tloušťky čar, tisk podle zobrazení, tabulka per, styl vykreslení, ctb, monochromatický, stupně šedi, vykázat jako, třída ifc, překlasifikovat, předdefinovaný typ, obecný model, deska jako silnice, stěna jako panel, střecha jako rampa, šablona projektu, šablona, nový ze šablony, uložit jako šablonu, firemní standard
from: 231d98b0
---

## Co uděláte

Nastavte BimCraft podle toho, jak pracujete, duplikujte pohledy, tiskněte je tak, jak očekáváte, počítejte prvky jako to, čím skutečně jsou, a začínejte každý projekt ze šablony vaší firmy.

## Výběr pracovního stylu

1. Otevřete {{ui:Nastavení}} a kartu {{ui:BimCraft}}. Najděte {{ui:Pracovní styl}}.
2. Vyberte jednu možnost:
   - {{ui:Každý pohled vlastní}} (první volba): duplikovaný pohled zkopíruje své poznámky a zůstanou jeho; listy se tisknou tak, jak se zobrazují na obrazovce.
   - {{ui:Sdílené poznámky a tabulky per}}: duplikované pohledy sdílejí poznámky; tisk jde přes tabulku per.
3. Pod volbou jsou čtyři věci, které nastavuje. Změníte-li kteroukoli z nich samostatně, styl se zobrazí jako {{ui:Vlastní}}.

Pracovní styl se uchovává v tomto prohlížeči, stejně jako rozvržení pracovního prostoru. Šablona jej přenese do nových modelů.

## Duplikování pohledu

1. V {{ui:Správce pohledů}} má každý půdorys, půdorys stropu, výnoska, pohled a řez tlačítko {{ui:Duplikovat}} (dva listy).
2. Pojmenujte kopii a vyberte, jak se bude chovat:
   - {{ui:Vlastní kopie}}: její kreslení, kóty, oříznutí, skryté prvky a pera se zkopírují a zůstanou jejími. Úprava kteréhokoli pohledu nikdy nezmění druhý, takže pohled na vydaném listu zůstane tak, jak byl vydán.
   - {{ui:Propojeno}}: zobrazuje tentýž pohled se stejnou sadou poznámek a nastavení.
3. Kopie je uvedena pod {{ui:Duplikované pohledy}}. Klikněte na ni, abyste ji otevřeli; lišta nad půdorysem říká, že jde o kopii, a tlačítkem {{ui:Nahoru}} se vrátíte k jejímu pohledu.
4. Její tlačítko s posuvníkem otevře nastavení: název, {{ui:Rozsah pohledu}} (vlastní kopie má vlastní), {{ui:Udělat vlastní kopii}} pro propojenou a {{ui:Smazat}}.

Kopie pohledů a řezů se umisťují na vaše listy stejně jako pohledy, ze kterých vznikly. Duplikování je jeden krok zpět a kopie se ukládají do IFC vedle výnosek.

## Pera uložená s pohledem a tištěná podle zobrazení

1. Zapněte {{ui:Kreslení}} a zvolte {{ui:Pera}}.
2. {{ui:Pro}} nyní vypíše každou kategorii: stěny, dveře a okna, desky, střechy, sloupy, schodiště, nábytek a ostatní, a také kreslení a kóty.
3. {{ui:Použít}} uloží pero do IFC u zobrazeného pohledu: půdorysu, půdorysu stropu, výnosky nebo duplikovaného pohledu. Pera vytvořená před verzí 0.9 se uchovávala v prohlížeči; {{ui:Ponechat v souboru}} je přesune.
4. Listy a PDF kreslí každé pero tak, jak se zobrazuje na obrazovce.

Chcete-li tisknout přes tabulku per, nastavte {{ui:Tisk}} v řádku Pera na {{ui:Přes tabulku per}} a potom vyberte tabulku (barevná, monochromatická, stupně šedi) nebo zvolte {{ui:Upravit tabulku per…}}: každá barva dostane barvu, tloušťku a rastr, se kterými se vytiskne. Tabulka je soubor stylů vykreslování CadCraft, takže {{ui:Importovat…}} přijme tabulku vytvořenou v aplikaci CadCraft a {{ui:Exportovat}} ji vrátí zpět. Model si ponechá svou volbu; pokud žádná není, rozhoduje pracovní styl.

## Vykázání prvku jako jiné třídy

Deska nakreslená jako silnice, stěna použitá jako panel, střecha tvarovaná jako rampa: ponechte nástroj, kterým jste je nakreslili, a vykažte je jako to, čím ve skutečnosti jsou.

1. Vyberte prvek a otevřete {{ui:Vlastnosti}}. Otevřete {{ui:Vykázat jako}}.
2. Napište do vyhledávacího pole třídu, která odpovídá tvaru, vyberte ji a její předdefinovaný typ. Pro vlastní typ vyberte USERDEFINED a zadejte název.
3. {{ui:Použít}} (jeden krok zpět). {{ui:Vymazat}} jej vykáže znovu jako nakreslený.

Upravujete jej nadále nástrojem, kterým byl nakreslen. Uložené IFC zapíše prvek jako vykázanou třídu, takže jej jiné programy, výkaz {{ui:Množství}}, Najít, Obarvit podle, kontroly modelu a {{ui:Problémy}} počítají jako tuto třídu. Tabulky vynechají stěnu vykázanou jako panel z tabulky stěn a {{ui:Prvky podle vykázané třídy}} vypíše každou takovou. Funguje to u souborů IFC4 a IFC2X3; seznam nabízí jen třídy, které odpovídají verzi IFC souboru. Dveře, okna, schodiště, místnosti a úrovně si ponechají svou vlastní třídu.

## Uložení projektu jako šablony a začátek z ní

1. S otevřeným projektem klikněte na {{ui:Uložit jako šablonu}} vedle {{ui:Uložit}}.
2. Pojmenujte ji. Zaškrtněte {{ui:Také stáhnout soubor šablony}}, chcete-li ji sdílet jako soubor IFC, a {{ui:Začínat z ní nové modely}}, chcete-li ji nastavit jako výchozí.
3. Šablona uchovává úrovně, šablony pohledů a nastavení pohledů, duplikované pohledy a výnosky, kreslení, pera a tabulku per, značky, rodiny a typy, listy, velikosti listů, razítka a pracovní styl. Stěny, podlahy, dveře a všechny ostatní prvky modelu se vynechají.
4. Klikněte na {{ui:Nová budova}} a vyberte ji pod {{ui:Začít z}}, nebo zvolte {{ui:Soubor šablony…}} pro šablonu, kterou jste dostali. Nový projekt dostane vlastní název a vlastní identitu projektu; vše ostatní je tak, jak je v šabloně.

:::note
Šablony se uchovávají v tomto prohlížeči. Týmové šablony sdílené přes CadCraft Studio ještě nejsou hotové: pošlete místo toho soubor šablony.
:::
