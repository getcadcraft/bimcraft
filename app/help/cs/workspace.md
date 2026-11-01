---
title: Obrazovka BimCraftu
summary: Prohlídka všech lišt, panelů a tlačítek podle jejich názvů na obrazovce a jak se obrazovka mění podle druhu souboru.
keywords: obrazovka, rozvržení, panely, panel nástrojů, rozhraní, uživatelské rozhraní, prohlídka, panel vlastností, prohlížeč, lišta aplikace
from: 2eb01ec2
---

Obrazovka BimCraftu má nahoře lištu a pod ní tři oblasti: panel vlevo, scénu uprostřed a panel {{ui:Vlastnosti}} vpravo. Co se v jednotlivých oblastech zobrazí, závisí na tom, co jste otevřeli: model IFC, soubor projektu nebo rodiny, výkres nebo složku.

## Lišta aplikace

Tenká lišta nahoře patří webu CadCraft, ne samotnému BimCraftu. Zleva doprava:

- Značka CadCraft: přejde na domovskou stránku CadCraftu.
- Název aplikace a nabídka verzí. V interní verzi ukazuje, kterou verzi používáte, a umožňuje přepnout na vydanou verzi.
- {{ui:O aplikaci BimCraft}}: stránka aplikace na webu.
- {{ui:Nastavení}}: vlastní nastavení BimCraftu a nastavení společná všem aplikacím. Viz [Nastavení BimCraftu](topic:settings).
- {{ui:Celá obrazovka}}: přepíná režimy obrazovky. Viz [Režimy obrazovky](topic:workspace#screen-modes) níže.
- {{ui:Papír}} a {{ui:Model}}: světlý a tmavý motiv. 3D pohled a 2D výkresy se řídí zvoleným motivem.

## Levý panel

Levý panel vždy začíná sekcí **Otevřít soubor nebo složku**:

- Plocha pro přetažení, {{ui:Vyberte soubor, nebo sem přetáhněte soubor či složku}}. Kliknutím vyberete jeden soubor, nebo na ni (či kamkoli na stránku) přetáhněte soubor nebo složku.
- {{ui:Otevřít složku}}: vyberte celou složku projektu. Viz [Otevření celé složky projektu](topic:open-project-folder).
- {{ui:Nedávné složky}}: objeví se v Chromu a Edgi poté, co složku otevřete výběrem složky nebo přetažením. Kliknutím na {{ui:Znovu otevřít}} a název složky ji otevřete znovu, nebo malým × ji zapomenete.

Pod ní se podle situace zobrazují další sekce:

| Sekce | Kdy se zobrazí | Co obsahuje |
|---|---|---|
| {{ui:Změny}} | Je otevřen model IFC | Vaše neuložené úpravy, nejnovější nahoře, s {{ui:Zpět}} a {{ui:Uložit jako IFC}} |
| {{ui:Soubor}} | Je otevřen model nebo karta souboru | Údaje o souboru: velikost, schéma nebo verze, projekt, autor, počet prvků |
| {{ui:Výkres}} | Je otevřen DWG nebo DXF | Formát, jednotky, počty entit a vrstev, listy, propojené výkresy, zařízení |
| {{ui:Složka}} | Je otevřena složka | Počty souborů a modelů, velikost, nalezené problémy |
| {{ui:Zpět na složku}} | Otevřeli jste soubor ze složky | Vrátí se k přehledu složky |
| {{ui:Vrstvy}} | Je otevřen výkres | Zaškrtávací pole pro každou vrstvu, s {{ui:Vše zapnout}} a {{ui:Vše vypnout}} |
| {{ui:Podlaží}} | Je otevřen model IFC | Zaškrtávací pole pro každé podlaží, nejvyšší nahoře |
| {{ui:Prvky}} | Je otevřen model IFC | Kolik prvků každého druhu model obsahuje (30 nejběžnějších) |

## Scéna

Střed obrazovky zobrazuje otevřený soubor.

- **Prázdná**: „Otevřete model budovy.“ s {{ui:Vybrat soubor}} a {{ui:Otevřít složku}} a krátkým popisem každého formátu.
- **Model IFC**: 3D pohled s panelem nástrojů nahoře, v pojmenovaných skupinách jako v kreslicí aplikaci CadCraft, s ikonou každého nástroje nad jeho názvem: {{ui:Pohled}} ({{ui:Přizpůsobit}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Z boku}}, {{ui:Hrany}}, {{ui:Prostory}}); {{ui:Úpravy}} ({{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}} a {{ui:Více}}, viz [Kopírování, vkládání a duplikování položek knihovny](topic:copy-paste)); {{ui:Model}} ({{ui:Jednotky}} a {{ui:Kreslit}}); {{ui:Knihovna}} ({{ui:Knihovna}}, {{ui:Zařízení}}, {{ui:Aktualizace}}, {{ui:Zdroje}}); {{ui:Revize}} ({{ui:Zobrazit}}, {{ui:Řez}}, {{ui:Procházka}}, {{ui:Měřit}}; viz [Řez modelem IFC pomocí roviny řezu](topic:section-plane)); a {{ui:Výstup}} (vykreslení, živý pohled, VR, exporty, malování a uložené pohledy). Když je zapnuto {{ui:Kreslit}}, má panel Kreslení pod ním stejný vzhled: {{ui:Pohled}} (podlaží a druh půdorysu), {{ui:Kreslit}}, {{ui:Úpravy}} a {{ui:Knihovna}}. V pravém dolním rohu je kostka pohledu. Viz [Otevření modelu IFC a prohlídka ve 3D](topic:open-ifc-model). V {{ui:Nastavení}}, {{ui:Obecné}} zvolíte, zda tlačítka zobrazují ikony, popisky, nebo obojí, zobrazíte nebo skryjete názvy skupin, a pravým kliknutím na panel nástrojů uspořádáte jeho nástroje a skupiny. V nízkém okně panel nástrojů názvy pod ikonami vynechá.
- **Soubor projektu nebo rodiny**: karta souboru s náhledovým obrázkem, informacemi o projektu a propojenými soubory. Viz [Čtení souboru projektu nebo rodiny](topic:read-rvt-file).
- **DWG nebo DXF**: řada karet ({{ui:Model}}, potom jedna na každý list, potom {{ui:Zařízení}}, pokud výkres obsahuje označená zařízení, {{ui:3D}}, {{ui:Přizpůsobit}} a {{ui:Pohled na tisk}}), výkres a živé souřadnice X a Y v rohu. Viz [Zobrazení výkresu DWG nebo DXF](topic:view-dwg) a [Zobrazení výkresu DWG nebo DXF ve 3D](topic:dwg-in-3d).
- **Složka**: přehled složky s rámečkem {{ui:Začněte zde}} a tabulkami modelů, odkazů, modelů IFC a výkresů. Viz [Otevření celé složky projektu](topic:open-project-folder).

**Stavový řádek** ve spodní části scény říká, co BimCraft právě dělá („Čte se model…“, „Vytváří se geometrie: 1200 z 5400 prvků“) a při selhání červeně uvede, co se nepovedlo. Zprávy o úspěchu po několika sekundách zmizí.

## Panel Vlastnosti

Pravý panel zobrazuje:

- U modelu IFC: prvek, na který jste klikli, s jeho názvem, typem, značkou, GlobalId a všemi sadami vlastností. Hodnoty, které lze změnit, vypadají jako tlačítka. Viz [Pole panelu Vlastnosti](topic:properties-panel).
- U výkresu: jak se pohybovat, propojené výkresy a obrázky výkresu a zda byl každý nalezen, a seznam toho, co **Zatím nevykresleno**.
- U karty souboru nebo složky: krátkou poznámku, co otevřít dál.

## Na malé obrazovce

Když je okno užší než obrazovka notebooku, BimCraft své oblasti naskládá pod sebe: nahoře scéna, pod ní panely. K panelům se dostanete posouváním stránky. Na telefonu tvoří jeden sloupec, na tabletu dva.

## Režimy obrazovky

Tlačítko {{ui:Celá obrazovka}} v liště aplikace nebo {{key:Ctrl+Shift+F}} na všech platformách přepíná tři režimy:

1. Normální.
2. Celá obrazovka, s viditelnými lištami.
3. Celá obrazovka se skrytou lištou aplikace. Lištu vrátíte přesunutím ukazatele k hornímu okraji nebo klepnutím tam.

Klávesou {{key:Esc}} se vrátíte do normálního režimu. Prohlížeče bez podpory celé obrazovky (například na iPhonu) přepínají jen mezi normálním režimem a skrytými lištami.

## Související

- [Klávesy a myš](topic:keyboard)
- [Soubory, které BimCraft otevírá a ukládá](topic:files)
