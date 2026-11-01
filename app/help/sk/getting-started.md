---
title: Začíname s BimCraft
summary: Čo BimCraft robí dnes, ako otvoriť svoj prvý model, pozrieť si ho v 3D, zmeniť jednu hodnotu a uložiť kópiu.
keywords: začiatok, prvé spustenie, otvoriť, ifc, rvt, dwg, rýchly štart, úvod, prehliadač, bim
from: fc2dea19
---

BimCraft je aplikácia rodiny CadCraft na modely budov. V tomto zostavení budovy **otvára, číta a kontroluje** a **upravuje údaje v modeloch IFC**. Nové prvky zatiaľ nekreslí ani nemodeluje. Predstavte si ho ako prehliadač a kontrolu modelov, ktorá vám navyše dovolí opraviť názvy, značky a hodnoty vlastností v súbore IFC.

Čo otvára:

| Súbor | Čo dostanete |
|---|---|
| IFC (`.ifc`) | Celý model v 3D: otáčanie, podlažia, vlastnosti prvkov a úpravy názvov a hodnôt vlastností |
| Súbory projektov a rodín (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartu súboru: vydanie, v ktorom bol uložený, informácie o projekte, náhľadový obrázok a prepojené súbory. Bez 3D. |
| DWG a DXF | Výkres v 2D: priestor modelu a každý list, hladiny, prepojené výkresy, náhľad tlače a tabuľka vybavenia pre označené výkresy stravovacích prevádzok |
| Priečinok projektu | Správu o každom modeli v priečinku: zálohy, odkazy, poškodené kópie a návrh, ktorým súborom začať |

Všetko prebieha vo vašom prehliadači, na vašom počítači. **Nič sa nenahráva.** Podrobnosti nájdete v [Súbory, ktoré BimCraft otvára a ukladá](topic:files).

## Otvorenie BimCraft

1. Otvorte BimCraft v aktuálnom prehliadači. Funguje Chrome, Edge, Firefox aj Safari; rozdiely uvádza [Prehliadače, zariadenia a pamäť](topic:platforms).
2. Počkajte na prázdnu obrazovku s textom „Otvorte model budovy.“

:::note
BimCraft beží v prehliadači a na počítači v CadCraft Studio spolu s ostatnými aplikáciami. Ukladanie do cloudu zatiaľ nie je k dispozícii: súbory otvárate z vášho počítača a kópie ukladáte späť naň.
:::

## Otvorenie prvého modelu

Najrýchlejší spôsob, ako zistiť, čo BimCraft robí, je súbor IFC.

1. V strede obrazovky kliknite na {{ui:Vybrať súbor}}.
2. V {{pick:mac=Finderi|windows=Prieskumníkovi|linux=správcovi súborov}} vyberte súbor `.ifc` a potvrďte.
3. Počkajte, kým riadok stavu dole na obrazovke zobrazuje „Spúšťa sa modul IFC…“ a potom „Vytvára sa geometria“.

V strede by ste mali vidieť model v 3D, vľavo panel {{ui:Súbor}} a zoznam {{ui:Podlažia}} a vpravo prázdny panel {{ui:Vlastnosti}}. Riadok stavu sa skončí slovom „Otvorené“ a počtom prvkov.

:::tip
Súbor môžete tiež pretiahnuť z {{pick:mac=Finderu|windows=Prieskumníka|linux=správcu súborov}} priamo na stránku. Počas ťahania obrazovka zobrazuje „Pustením otvoríte“.
:::

:::offline
Modul IFC sa pri prvom otvorení modelu IFC načíta zo stránky, ak nebol BimCraft uložený na offline použitie. Výkresy DWG a DXF, súbory projektov a priečinky nepotrebujú nič navyše: ich čítačky sú súčasťou aplikácie. Ak tlačidlo na lište aplikácie znie {{ui:Pripravené offline}}, všetko sa otvorí aj offline. Ak nie, modely IFC sa neotvoria, kým sa nepripojíte, ibaže sa už jeden otvoril na tejto karte. Pozrite [Online a offline](topic:online-offline).
:::

:::online
Idete niekam bez pripojenia? Na lište aplikácie kliknite na {{ui:Uložiť na offline použitie}} a počkajte na {{ui:Pripravené offline}}. Uložená kópia (asi 11 MB) obsahuje modul IFC. Pozrite [Práca offline](common:offline).
:::

## Rozhliadnutie

:::mouse
1. Ťahaním ľavým tlačidlom myši model otáčate.
2. Kolieskom meníte zväčšenie.
3. Ťahaním pravým tlačidlom myši posúvate pohľad. Na touchpade Macu namiesto toho podržte {{key:Shift}} a ťahajte.
4. Stlačením klávesu {{key:F}} alebo kliknutím na {{ui:Prispůsobiť}} znova uvidíte celý model.
:::

:::touch
1. Ťahaním jedným prstom otáčate.
2. Štipnutím dvoma prstami meníte zväčšenie a pohybom dvoch prstov spolu posúvate pohľad.
3. Ťuknutím na {{ui:Prispůsobiť}} znova uvidíte celý model.
:::

## Jedna skutočná vec: oprava značky

1. Kliknite na stenu, dvere alebo ľubovoľný prvok v modeli. Zmodrie a vpravo sa zobrazia jeho vlastnosti.
2. V paneli {{ui:Vlastnosti}} kliknite na hodnotu vedľa položky **Značka**.
3. Napíšte novú značku a stlačte {{key:Enter}}.
4. Pozrite sa na sekciu {{ui:Zmeny}}, ktorá sa otvorila vľavo: vaša zmena je v nej uvedená so starou a novou hodnotou.

## Uloženie kópie

1. V sekcii {{ui:Zmeny}} kliknite na {{ui:Uložiť ako IFC}} alebo stlačte {{key:Mod+S}}.
2. Nový súbor nájdete v priečinku na stiahnuté súbory. Má názov pôvodného súboru s pridaným " (edited)", napríklad `Clinic (edited).ifc`.

Váš pôvodný súbor sa nikdy nezmení. [Zmena vlastností IFC a uloženie upravenej kópie](topic:edit-ifc-properties) vysvetľuje úpravy v plnom rozsahu.

## Kam ďalej

- [Obrazovka BimCraft](topic:workspace): každý panel pod jeho názvom.
- [Ak prichádzate z iných programov na BIM a kreslenie](topic:coming-from): čo bude pôsobiť inak, ak ste zvyknutí na Revit.
- [Otvorenie celého priečinka projektu](topic:open-project-folder): nasmerujte BimCraft na priečinok projektu a nechajte ho súbory roztriediť.
- [Zobrazenie výkresu DWG alebo DXF](topic:view-dwg): listy, hladiny a náhľad tlače.
