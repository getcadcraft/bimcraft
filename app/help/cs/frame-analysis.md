---
title: Analýza konstrukčního rámu
summary: Síly, reakce a průhyby nosníků, sloupů a ztužidel modelu pod zatěžovacími stavy a kombinacemi, které nastavíte, uložené v IFC. Pomůcka pro analýzu, ne kontrola podle normy.
keywords: analýza, jednotky, stopy a palce, zobrazovaná jednotka, statická analýza, návrhové kontroly, využití, válcovaný, svařovaný, AISC 360, EN 1993-1-1, analýza rámu, analytický model, metoda tuhosti, zatížení, zatěžovací stav, kombinace, stálé zatížení, proměnné zatížení, vlastní tíha, reakce, ohybový moment, posouvající síla, normálová síla, průhyb, deformovaný tvar, podpory, kloubově, vetknutí, uvolnění, zpráva, pdf, csv, craftscript, frame3d, nosníky, sloupy, prvky
from: b93b58c4
---

Karta {{ui:Analýza}} vpravo najde síly v nosnících, sloupech a ztužidlech otevřeného modelu, reakce v patách sloupů a to, jak moc se prvky ohýbají, pro zatížení, která zadáte.

:::warning
Je to **pomůcka pro analýzu, ne kontrola podle normy**. Analýza nepoužívá žádnou návrhovou normu: nedimenzuje prvky ani nekontroluje únosnosti a nevolí součinitele zatížení. Inženýr zkontroluje analytický model, jeho zatížení a podpory a rozhodne, co čísla znamenají. Blok {{ui:Návrhové kontroly}} pod ním kontroluje válcované ocelové profily I podle AISC 360 nebo EN 1993-1-1; je to pomůcka, dokud ji inženýr neprověří: viz [Návrhové kontroly](topic:frame-analysis#design-checks).
:::

## Spuštění

1. Otevřete model IFC a kartu {{ui:Analýza}}.
2. Vyberte jeden nebo více nosníků, sloupů nebo ztužidel ve pohledu, zvolte {{ui:Stav}}, {{ui:Zatížení}} a {{ui:Směr}}, zadejte hodnotu a stiskněte {{ui:Přidat zatížení}}: kN/m pro zatížení rozložené po prvku, kN pro bodové zatížení.
3. Stiskněte {{ui:Spustit analýzu}}.

Tabulka uvádí největší normálovou sílu každého prvku, posouvající síly, ohybové momenty, krut a průhyb; kliknutím na název prvku jej vyberete ve pohledu. Níže jsou reakce. {{ui:Na modelu}} nakreslí deformovaný tvar, nebo jeden účinek jako diagram vedle každého prvku. Výsledky zastarají, když se model změní: spusťte ji znovu.

Každé zatížení a nastavení je jedna změna v seznamu {{ui:Změny}}: {{ui:Zpět}} ji vrátí a {{ui:Uložit jako IFC}} je uchová v souboru (sada vlastností projektu `CadCraft_Analysis`), takže až se model příště otevře zde, jeho zatížení tu ještě budou.

## Jak se vytváří analytický model

- Každý IfcBeam, IfcColumn a IfcMember, jehož tvar je jediná přímá extruze, se stane prvkem na těžišťové čáře svého průřezu. Jeho průřezové vlastnosti se berou z profilu: tvary I, U, L a T, obdélníky a trubky, kruhy a kruhové trubky, nebo jakýkoli uzavřený obrys (pak je torzní konstanta odhadem, což je uvedeno ve zprávě). Cokoli jiného se vynechá a spočítá.
- V modelu nosníky končí na líci sloupu a sedí pod podlahou. Každý konec prvku se posune podél své vlastní čáry na osu prvku, do něhož se napojuje, když je tato osa blízko (do zhruba velikosti průřezů), a tento prvek se tam rozdělí. Zpráva uvádí, kolik konců se posunulo.
- **Paty sloupů**, pod nimiž nic není, jsou podpory: vetknuté (začátek), nebo kloubově uložené (držené na místě a proti kroucení, volné v natočení).
- **Konce nosníků** jsou tuhé nebo kloubové podle pravidla {{ui:Konce nosníků bez spoje}}; **ztužidla** (IfcMember) jsou na obou koncích kloubová. Vyberte jeden prvek, chcete-li jeho koncům nebo patě sloupu dát vlastní pravidlo.
- Materiály podle názvu: beton (E = 30 GPa), dřevo (E = 11 GPa), jinak ocel (E = 200 GPa).

Pokud se rám může pohybovat, aniž by se cokoli ohýbalo (mechanismus), výpočet se zastaví a uvede, kde a kterým směrem.

## Stavy, kombinace, znaménka a zpráva

Analýza začíná **Stálým zatížením** (vlastní tíha), **Proměnným** a **Stálé + proměnné**; přidejte stavy a kombinace se součiniteli, které vyžaduje vaše návrhová norma. N > 0 je tah; My > 0 způsobí tah na místní záporné straně prvku (nosník, který se prohýbá pod gravitací, má My > 0). {{ui:Přehled (PDF)}} a {{ui:Přehled (CSV)}} obsahují předpoklady, průřezy, stavy, reakce se svými součty, síly v prvcích, posuny a obálku. {{ui:Exportovat jako CraftScript}} zapíše rám pro pracovní prostor Script v PartCraft, kde jej knihovní funkce `frame3d` řeší v čitelném kódu.

Metoda je metoda přímé tuhosti, lineární a prvního řádu, pokud nezaškrtnete Účinky 2. řádu (P-Delta), a je ověřena na učebnicových případech.

**Účinky 2. řádu (P-Delta).** Zaškrtněte *Účinky 2. řádu (P-Delta)* vedle Spustit: každá kombinace se řeší znovu s normálovými silami prvků působícími na deformovaný rám (každý prvek rozdělen na 4 části, takže se počítá i ohyb prvku mezi jeho konci), dokud se normálové síly neustálí. Řádek výsledku uvádí počet průchodů a o kolik vzrostl výkyv; momenty, průhyby, návrhové kontroly a zpráva pak používají tyto výsledky. Nad pružným kritickým zatížením rámu se výpočet zastaví a řekne to. Je pružný s malým natočením, pouze ohybový, bez redukce tuhosti a bez fiktivních zatížení (ne sám o sobě metoda přímé analýzy AISC); desky, stěny a tuhé podlahy zůstávají v prvním řádu.

**Tlak podlahy na desky.** Pro betonové desky (analýza čte desku jako deskový prvek, je-li její materiál beton) má blok Zatížení {{ui:Tlak na všechny desky}}: zadejte kN/m², zvolte výše uvedený stav a stiskněte {{ui:Přidat na desky}}. Působí na každou desku, kterou analýza nalezla, směrem dolů, a je uveden s odkazem Odebrat. Je to jeden tlak pro všechny desky, ne jeden na každou desku, a není to normové zatížení: zadejte hodnotu, kterou vám dá váš inženýr.

**Vlastní frekvence (konečné prvky).** Blok {{ui:Konečné prvky: vlastní frekvence}} pod výsledky najde nejnižší tvary stejného modelu pomocí enginu konečných prvků: nosníky s jejich uvolněními konců, desky a stěny jako rovinné čtyřuzlové skořepiny, tuhé podlahy, podpory. Zvolte počet tvarů (3, 6, 10 nebo 20) a prvek desky (čtyřuzlovou skořepinu pro tlusté nebo tenké desky, nebo prvek pro tenké desky) a stiskněte {{ui:Najít frekvence}}. Tabulka uvádí frekvenci každého tvaru v Hz, jeho periodu v sekundách a jeho efektivní modální hmotnost ve směrech X, Y a Z jako podíl hmoty, která se může pohybovat; {{ui:Zobrazit na modelu}} nakreslí libovolný tvar stejně jako deformovaný tvar. Hmotnost je hustota materiálu krát objem: zatížení hmotnost nepřidávají a materiál bez hustoty ji nemá. Zpráva (PDF, CSV) tabulku obsahuje. Je pružná a jen pro malé pohyby a zde se z žádné normy netvoří seismické ani větrné zatížení. Nejde o kontrolu podle normy; výsledky zkontroluje váš inženýr.

**Spektrum odezvy, časový průběh a pushover.** Pod frekvencemi jsou tři další bloky, které používají stejný model konečných prvků. Hmotnost pro všechny je hustota materiálu plus svislá zatížení zaškrtnutých stavů, každé vynásobené činitelem, který zadáte (například stálé zatížení 1 a proměnné podíl, který počítáte jako hmotnost).

{{ui:Spektrální analýza}} přečte každý tvar z zadaného spektra (tabulka periody a zrychlení, nebo tvar ASCE 7 z SDS, SD1 a TL; tlačítko {{ui:Použít hodnoty z bloku Seismicita}} zkopíruje tyto hodnoty z bloku Seismicita) a kombinuje tvary pomocí CQC, SRSS, pravidla deseti procent nebo absolutního součtu, pak skládá směry X, Y a Z (100 % + 30 % nebo SRSS). Dává smykovou sílu v základu, mezipodlažní posuny, koncové síly prvků a tabulku tvarů, která varuje, když použité tvary nesou méně než 90 % hmoty. Výsledky můžete škálovat činitelem nebo na smykovou sílu v základu, kterou zadáte; blok tuto sílu nikdy sám nepočítá. Výsledky nemají znaménko.

{{ui:Časový průběh}} spustí zemní zrychlení pomocí modální superpozice (přesné pro přímky záznamu mezi body), nebo přímou integrací (Newmarkova průměrného zrychlení s Rayleighovým tlumením). Vstupem je vymyšlený sinus nebo impuls (vždy označený jako syntetický), záznam, který vložíte, nebo textový soubor, který otevřete (čas a zrychlení, jedno zrychlení na řádek s krokem, nebo soubor typu PEER s hlavičkou DT=; v g nebo m/s²). Dává posun střechy a smykovou sílu v základu v čase, posun každé úrovně a obálku koncových sil prvků. Modely s velmi dlouhým záznamem ho uchovají jen pro relaci.

{{ui:Pushover}} tlačí střechu do strany v malých krocích (tvar jako první tvar, nebo rovnoměrný), s plastickými klouby na koncích prvků, které mají tvar I. Kloub se plasticky poddá při plastickém momentu, který klesá s rostoucí normálovou silou (vypočteno z nakresleného tvaru, zaoblení se zanedbávají); zpevnění je volitelné, P-delta je volitelné a gravitační kombinace se může použít nejdřív. Dává křivku únosnosti (smyková síla v základu proti posunu střechy), první kloub a stav a plastické natočení každého kloubu. {{ui:Spustit nelineární časový průběh}} spustí stejné klouby pod záznamem z bloku Časový průběh na malých modelech. Klouby vznikají jen na koncích prvků (v rozpětí umístěte uzel tam, kde má kloub vzniknout); prvek uvolněný na obou koncích žádný nemá, a plastizace a vzpěr ztužidel se nemodelují; desky a stěny zůstávají pružné; kritéria přijetí nejsou uvedena. Nejde o kontrolu podle normy; výsledky zkontroluje váš inženýr. Nastavení se ukládají s modelem a zpráva obsahuje tabulky.

Ještě není hotovo: vzpěr, oprava chybějící hmoty pro spektrum odezvy, úprava záznamů, kritéria přijetí pro klouby (dynamická odezva je výše), plošná zatížení jiná než jeden tlak na všechny desky, excentricity prvků, ztužidla pouze v tahu, stěny a desky v rámu, návrhové kontroly svařovaných tvarů a průřezů jiných než válcovaných I. Viz [Ještě není hotovo](topic:not-built-yet).

## Jednotky

Délky se řídí jednotkou, kterou zvolíte na panelu nástrojů ({{ui:Jednotky}}), jako zbytek BimCraftu: polohy zatížení, které zadáváte a vidíte ({{ui:Zdroj}}, {{ui:Do}}, {{ui:Ve výšce}}), body zatížení uzlů a reakcí, výšky podlaží v {{ui:Seismicita}}, a sloupce průhybu a driftu (stopy a palce tyto malé délky ukazují v desetinných palcích). Jednotku změníte kdykoli; karta se překreslí. Síly zůstávají v kN a kN·m; zpráva (PDF, CSV) a soubor CraftScript zůstávají v milimetrech s uvedenou jednotkou. Rozměry průřezů, průměry prutů a krytí v bloku {{ui:Beton}} zůstávají v milimetrech, jak se jmenují.

## Návrhové kontroly

Blok {{ui:Návrhové kontroly}} (stejný jako v DetailCraft) přijímá {{ui:Návrhová norma}}, ASCE 7 + AISC 360 nebo EN 1990 + EN 1993-1-1, a {{ui:Jakost oceli}}. Každému zatěžovacímu stavu přiřaďte druh (stálé, proměnné, vítr …) a {{ui:Vytvořit kombinace}} zapíše kombinace zatížení normy z vašich stavů; analýza je pak spustí jako kterékoli jiné kombinace.

{{ui:Zkontrolovat prvky}} pak zkontroluje každý **válcovaný ocelový profil I** pomocí kontrol DetailCraft (tah, tlak se vzpěrem, ohyb s klopením, smyk, ohyb s normálovou silou, průhyb; klauzule jsou ve zprávě) a ukáže, kolik ze své únosnosti využívá, obarveno na modelu. Je to **pomůcka, dokud ji inženýr nezkontroluje**.

**Které prvky se kontrolují.** Profil IFC neříká, zda je ocelový profil I válcovaný, nebo svařovaný, takže BimCraft jej označí za válcovaný jen tehdy, když jeho název profilu (jinak název typu prvku) je rozměr z tabulek AISC W nebo S, nebo z tabulek EN 10365 IPE, HEA nebo HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **a** výška, šířka, stojina a pásnice v souboru odpovídají tomuto rozměru v toleranci 1 %. Každý jiný profil I (plechový nosník, rozměr pod jiným názvem, upravený rozměr) se bere jako svařovaný a vrátí se jako **nezkontrolováno**, stejně jako trubky, úhelníky, U-profily a jiné průřezy, štíhlé části a krut. Tyto prvky zkontrolujte s inženýrem.
