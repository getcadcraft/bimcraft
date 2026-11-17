---
title: Klávesy a myš
summary: Každá akce klávesnicí, myší, touchpadem a dotykem v BimCraftu, seskupená podle toho, na co se díváte.
keywords: klávesnice, zkratky, horké klávesy, klávesy, myš, touchpad, dotyk, orbit, posun, zoom, skrýt, izolovat, průhled, zpět, znovu, kopírovat, vložit, duplikovat, uložit, přizpůsobit, tiskový pohled, escape, nastavení, kreslení, stěna, dveře, okno, půdorys
from: 5c6eedce
---

BimCraft má málo zkratek. Většinu práce děláte myší a panely. Zkratky psané s {{key:Mod}} používají Command na Macu a Ctrl jinde. Jak se klávesy v této nápovědě píšou, viz [Klávesy, myši a touchpady](common:keys).

## Všude

| Klávesa | Co dělá |
|---|---|
| {{key:Ctrl+Shift+F}} | Přepíná režimy obrazovky: normální, celá obrazovka, celá obrazovka se skrytými lištami. Ctrl na všech platformách, včetně Macu |
| {{key:Esc}} | Ukončí celou obrazovku |
| {{key:Mod+,}} | Otevře {{ui:Settings}}. Viz [Nastavení BimCraftu](topic:settings) |
| {{key:Tab}} | Přesun mezi tlačítky, zaškrtávacími políčky a hodnotami. Ke každému ovládacímu prvku se dostanete z klávesnice |

## 3D pohled (modely IFC)

| Klávesa nebo akce | Co dělá |
|---|---|
| {{key:F}} | Přizpůsobí celý model, třičtvrteční pohled (stejné jako {{ui:Fit}}) |
| {{key:Esc}} | Zruší výběr, nebo ukončí umisťování či vkládání |
| Klik | Vybere prvek pod ukazatelem; klik na prázdné pozadí výběr zruší |
| {{key:Mod}}+klik nebo {{key:Shift}}+klik | Přidá prvek do výběru, nebo jej z něj odebere |
| {{key:H}} | Skryje vybrané prvky. Viz [Skrytí, izolace a průhled prvků](topic:hide-and-isolate) |
| {{key:I}} | Zobrazí jen vybrané prvky (izolace) |
| {{key:T}} | Zobrazí vybrané prvky, vše ostatní průhledné |
| {{key:Shift+H}} | Znovu zobrazí všechny prvky |
| {{ui:Walk}} | Pak {{key:W}} {{key:A}} {{key:S}} {{key:D}} nebo šipky procházejí, {{key:Shift}} běží, tažení se rozhlíží, {{key:Esc}} zastaví. Viz [Procházení modelem](topic:walk) |
| {{key:M}} | Měří vzdálenosti a plochy stěn. Viz [Měření vzdáleností, ploch stěn a poloh v 3D](topic:measure) |
| Tažení levým tlačítkem | Otáčení kolem modelu (orbit) |
| Tažení pravým tlačítkem | Posun |
| {{key:Shift}} nebo {{key:Mod}} a tažení levým tlačítkem | Posun (vhodné na touchpadu) |
| Otočení kolečka, nebo tažení prostředním tlačítkem | Zoom |
| Posun dvěma prsty nebo stažení a roztažení na touchpadu | Zoom |
| Jeden prst (dotyk) | Otáčení; klepnutí vybere |
| Dva prsty (dotyk) | Stažením zoom, posunutím společně posun |

| {{key:X}} | Rovina řezu zapnuta a vypnuta. Viz [Řez modelu IFC rovinou řezu](topic:section-plane) |
| {{key:Shift+X}} | Box řezu kolem vybraných prvků, s místností nastavenou v Nastavení. |

Pro {{ui:Top}}, {{ui:Front}} a {{ui:Side}} žádné klávesy nejsou; použijte tlačítka.

## Úpravy

Stejné příkazy jsou na panelu nástrojů: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} a nabídka {{ui:More}}, která u každého příkazu ukazuje klávesu. Fungují v 3D pohledu modelu IFC, ne když píšete do pole. Viz [Kopírování, vkládání a duplikování položek knihovny](topic:copy-paste).

| Klávesa | Co dělá |
|---|---|
| {{key:Mod+Z}} | Vrátí poslední změnu zpět |
| {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} | Znovu provede to, co Zpět vzalo zpět |
| {{key:Mod+C}} | Zkopíruje vybrané prvky (jejich názvy a vlastnosti se také uloží do schránky jako text) |
| {{key:Mod+X}} | Vyjme vybrané prvky: zkopíruje je a pak smaže |
| {{key:Mod+V}} | Vloží, co jste zkopírovali; vložení sleduje ukazatel, klikněte, kam to má jít |
| {{key:Mod+Shift+V}} | Vloží na stejné místo: kam směřoval výřez, nebo vedle originálů po kopírování |
| {{key:Mod+D}} | Duplikace: zkopíruje vybrané prvky a začne je vkládat |
| {{key:Delete}} | Smaže vybrané prvky i s jejich částmi a otvory. Viz [Mazání, vyjmutí, kopírování a vkládání stavebních prvků](topic:edit-elements) |
| {{key:Mod+A}} | Vybere všechny zobrazené prvky |
| {{key:Esc}} | Zruší výběr |

Pokud je na stránce vybrán text, {{key:Mod+C}} zkopíruje tento text obvyklým způsobem.

## Půdorys (Kreslení)

Tyto funkce fungují, když je {{ui:Draw}} zapnuto a nepíšete do pole. Viz [Kreslení stěn](topic:draw-walls) a [Dveře a okna](topic:doors-and-windows).

| Klávesa nebo akce | Co dělá |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:W}} | {{ui:Wall}} |
| {{key:D}} | {{ui:Door}} |
| {{key:N}} | {{ui:Window}} |
| {{key:H}} | S {{ui:Door}} nebo {{ui:Window}}: závěsy na druhém konci |
| {{key:Shift}} při kreslení stěny | Udrží ji na 0°, 90°, 180° nebo 270° |
| Číslice a znaky stop a palců (`'` a `"`) | Začne psát délku do pole {{ui:Length}}; {{key:Enter}} ji použije |
| {{key:Enter}}, {{key:Esc}}, pravé tlačítko nebo dvojklik | Ukončí kreslenou stěnu; {{key:Esc}} znovu přepne na {{ui:Select}} |
| {{key:Delete}} | Smaže vybrané stěny, dveře a okna; zbylé stěny se znovu spojí |
| {{key:F}} s ukazatelem nad půdorysem | Přizpůsobí půdorys |
| Otočení kolečka | Zoom kolem ukazatele |
| Tažení prostředním nebo pravým tlačítkem, nebo {{key:Space}} a tažení | Posun; při zapnutém {{ui:Select}} posune i obyčejné tažení |
| Tažení dveří nebo okna s {{ui:Select}} | Posune je podél stěny, nebo na jinou stěnu |
| Dva prsty (dotyk) | Stažením zoom, posunutím společně posun |

## Umisťování a vkládání položek knihovny

| Klávesa | Co dělá |
|---|---|
| {{key:R}} | Otočí položku o 90° |
| {{key:Tab}} | Přichycení ke stěně zapnuto a vypnuto: záda položky se opřou o nejbližší stěnu |
| {{key:Enter}} v poli **X, Y (mm)** | Umístí na zadanou pozici |
| {{key:Esc}} | Ukončí umisťování nebo vkládání |

## Úpravy hodnot IFC

| Klávesa | Co dělá |
|---|---|
| {{key:Enter}} | Ponechá zadanou hodnotu |
| {{key:Esc}} | Zruší a vrátí původní hodnotu |
| Klik jinde | Ponechá zadanou hodnotu |
| {{key:Mod+Z}} | Vrátí poslední změnu zpět. Jen když máte neuložené změny a nepíšete do pole |
| {{key:Mod+Y}} | Znovu provede to, co Zpět vzalo zpět |
| {{key:Mod+S}} | Uloží jako IFC. Jen když máte neuložené změny; jinak se otevře uložení prohlížeče |

Pro úpravy jen z klávesnice: stiskněte {{key:Tab}}, dokud nebude zvýrazněna hodnota, pak stiskněte {{key:Enter}} a začněte psát.

## 2D výkresy (DWG a DXF)

| Klávesa nebo akce | Co dělá |
|---|---|
| {{key:F}} | Přizpůsobí výkres nebo list |
| {{key:P}} | Tiskový pohled zapnut a vypnut |
| Dvojklik | Přizpůsobí |
| Tažení libovolným tlačítkem | Posun |
| Otočení kolečka | Zoom u ukazatele |
| Posun dvěma prsty nebo stažení a roztažení na touchpadu | Zoom u ukazatele. Posun dvěma prsty nepřesouvá |
| Jeden prst (dotyk) | Posun. Zoom stažením pro výkresy ještě není hotovo |

## Výkresy ve 3D

| Klávesa nebo akce | Co dělá |
|---|---|
| {{key:3}} | 3D zapnuto a vypnuto (i ve 2D pohledu) |
| {{key:F}} | Rozsah: celý výkres |
| Tažení prostředním nebo levým tlačítkem | Otáčení |
| Tažení pravým tlačítkem, nebo {{key:Shift}} a tažení | Posun |
| Otočení kolečka | Zoom směrem k tomu, co je pod ukazatelem |
| Posun dvěma prsty na touchpadu | Otáčení; s {{key:Shift}} posun |
| Stažení na touchpadu | Zoom |
| Jeden prst (dotyk) | Otáčení |
| Dva prsty (dotyk) | Stažením zoom, posunutím společně posun |

{{key:F}}, {{key:P}} a {{key:3}} nic nedělají, když píšete do pole, když je zobrazen rozpis zařízení, nebo když držíte {{key:Mod}} nebo {{key:Alt}}.

## Soubory

| Akce | Co dělá |
|---|---|
| Přetažení souboru na stránku | Otevře jej |
| Přetažení složky na stránku | Otevře ji jako složku projektu bez výzvy k oprávnění |
