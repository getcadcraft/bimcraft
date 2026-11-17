---
title: Prechod z iných BIM a výkresových programov
summary: Ako návyky z desktopového BIM modelovania a prezerania DWG zodpovedajú BimCraftu a rozdiely, na ktoré ľudia narážajú.
keywords: prechod, presun, známe, desktopové bim, rodina, parametre, prehliadač projektu, paleta vlastností, kocka pohľadu, xref, správca hladín, rozdiely, porovnanie
from: 2de629af
---

Ak poznáte Revit, väčšina BimCraftu bude pôsobiť známo slovami a neznáme rozsahom. Najdôležitejší rozdiel: **táto verzia číta a kontroluje modely a upravuje údaje IFC. Zatiaľ nemodeluje ako Revit.** Nemôžete kresliť steny, umiestňovať rodiny, vytvárať pohľady ani listy či ukladať projektový súbor. Môžete však otvoriť takmer každý súbor budovy na ľubovoľnom počítači s prehliadačom, pozrieť si, čo obsahuje, skontrolovať celý priečinok projektu a opraviť údaje v modeli IFC.

## Zmapované návyky

| Ak ste zvyknutí na | V BimCraftu |
|---|---|
| Otvorenie `.rvt` v Revite, aby ste videli model | BimCraft otvorí `.rvt` ako kartu súboru: verziu, údaje o projekte, odkazy, náhľad. Pre 3D model exportujte IFC a otvorte ten. [Čítanie súboru projektu alebo rodiny](topic:read-rvt-file) |
| Kontrolu, v ktorej verzii bol súbor uložený, pred jeho otvorením | Karta hore uvádza "uložené v Revit …", bez aktualizácie a bez zásahu do súboru |
| Prehliadač projektu | Žiadny prehliadač pohľadov a listov. Model IFC má zoznamy {{ui:Podlažia}} a {{ui:Prvky}}; výkres má karty listov |
| Paleta vlastností | Panel {{ui:Vlastnosti}} vpravo, pre prvok, na ktorý ste klikli. Sady vlastností IFC namiesto skupín parametrov |
| Parametre inštancie a typu | Sady vlastností inštancie a sady označené "(typ)". Zmena typu sa uplatní na každý prvok daného typu, ako v Revite. [Zmena vlastnosti typu pre každý prvok typu](topic:type-vs-instance) |
| Upraviť typ | Žiadne dialógové okno: kliknite na hodnotu v sade "(typ)" a zadajte ju |
| Výber viacerých prvkov, filtre, Vybrať všetky inštancie | Jeden prvok naraz. Ešte nie je hotové |
| Kocka pohľadu a navigačné koliesko | Kocka pohľadu v pravom dolnom rohu, štyri tlačidlá ({{ui:Prispôsobiť}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Bok}}) a voľné otáčanie. Žiadne navigačné koliesko |
| {{key:Shift}} a ťahanie stredným tlačidlom na otáčanie, ťahanie stredným na posun | Ťahanie ľavým otáča, ťahanie pravým (alebo {{key:Shift}} a ťahanie) posúva, koliesko približuje. Štýl ponuky {{ui:Pás kariet BIM}} prepína posun na ťahanie stredným a otáčanie na {{key:Shift}} so stredným tlačidlom. [Ponuky, klávesy a myš](topic:menus-keys-and-mouse) |
| Pôdorysy, rezy, rezné boxy | Jedna rovina {{ui:Rez}} naraz ({{key:X}}); žiadny rezný box ani 2D pôdorysy. [Rez modelu IFC rovinou rezu](topic:section-plane) |
| Skryť v pohľade, izolovať, viditeľnosť/grafika | {{ui:Podlažia}} zapnuté a vypnuté, {{ui:Priestory}} a {{ui:Hrany}}. Skrývanie po jednotlivých prvkoch zatiaľ ešte nie je hotové |
| Miestnosti | Priestory IFC, spočiatku skryté. Kliknite na {{ui:Priestory}} |
| Uložiť, Uložiť ako, synchronizácia s centrálnym súborom | {{ui:Uložiť ako IFC}} stiahne nový súbor IFC. Pôvodný sa nikdy nemení. Žiadny centrálny súbor, žiadna zdieľaná práca |
| Späť pomocou {{key:Mod+Z}} | Funguje pri úpravách IFC, kým neuložíte. [Zmena vlastností IFC a uloženie upravenej kópie](topic:edit-ifc-properties) |
| Správa odkazov | Otvorte priečinok projektu: každý odkaz sa skontroluje a označí ako **V tomto priečinku**, **Nájdený s rovnakým názvom**, **Súbor knižnice** alebo **Nie je v tomto priečinku**. [Otvorenie celého priečinka projektu](topic:open-project-folder) |
| Audit alebo otvorenie súboru, aby ste zistili, či je poškodený | Správa o priečinku za niekoľko sekúnd skontroluje každú kópiu a zálohu, či nie je skrátená. [Kontrola priečinka na poškodené kópie](topic:check-folder-health) |
| Výber správneho súboru z neprehľadného priečinka | Pole {{ui:Začnite tu}} navrhne jeden súbor s dôvodmi |

Ak modely väčšinou otvárate na kontrolu, ako v programe na kontrolu modelov alebo prezeranie IFC, vyberte štýl ponuky {{ui:Prehliadač}}: nástroje na prezeranie a kontrolu sú na prvom mieste a nástroje na modelovanie čakajú v jednej ponuke. Pozrite si [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).

## Pri prezeraní súborov DWG

Ak otvárate súbory DWG v AutoCAD alebo v prehliadači DWG:

| Ak ste zvyknutí na | V BimCraftu |
|---|---|
| Karty Model a rozloženie dole | Karty nad výkresom: {{ui:Model}} a jedna karta na každý list |
| ZOOM Extents, dvojklik na koliesko | Dvojklik, {{key:F}} alebo {{ui:Prispôsobiť}} |
| Posun stredným tlačidlom | Ťahanie ľubovoľným tlačidlom |
| Správca hladín | Zoznam {{ui:Hladiny}}: zaškrtnutím zobrazíte, odškrtnutím skryjete, {{ui:Všetky zapnúť}} a {{ui:Všetky vypnúť}} |
| Správca xref | **Prepojené výkresy** vpravo, so stavom **Zobrazené** alebo **Nenájdené**, a {{ui:Pridať prepojené výkresy…}} |
| Náhľad vykreslenia | {{ui:Náhľad tlače}} alebo {{key:P}}: čierne na bielom s hrúbkami čiar. Netlačí sa |
| Export atribútov blokov | Karta {{ui:Vybavenie}} pre označené výkresy stravovacích prevádzok, s {{ui:Stiahnuť CSV}} |
| Meranie, kreslenie, úprava, uložiť ako | Nie je v BimCraft. Kreslí a upravuje aplikácia CadCraft na kreslenie |

## Rozdiely, na ktoré ľudia narážajú

- **Beží v prehliadači a prehliadač si dáva pozor na vaše súbory.** BimCraft dokáže čítať iba súbory a priečinky, ktoré mu odovzdáte, výberom alebo presunutím. Sám nedokáže otvoriť súbor a nedokáže prepísať žiadny. Každé uloženie je stiahnutie.
- **Nič sa nenahráva.** Slovo "nahrať" v dialógových oknách priečinkov niektorých prehliadačov je vlastná formulácia prehliadača. Súbory zostávajú na vašom počítači.
- **IFC je formát modelu.** Súbor projektu sa otvorí ako karta, lebo jeho 3D obsah nie je zdokumentovaný. IFC považujte za spôsob, akým sa modely dostávajú do BimCraftu.
- **Úpravy fungujú na princípe kópie pri zápise.** Zmena hodnoty jedného prvku nikdy nezmení jeho susedov, aj keď ju exportér medzi nimi zdieľal. Vlastnosti typu sú zámerná výnimka.
- **Žiadny projekt, žiadne pohľady.** BimCraft zobrazuje naraz jeden súbor a po zatvorení karty si o ňom nepamätá nič, okrem názvov nedávnych priečinkov v Chrome a Edge.
- **Klávesy na Macu.** Tam, kde skratky Revitu vo Windows používajú {{key:Ctrl}}, skratky BimCraftu používajú {{key:Mod}}: na Macu Command.
- **Vaše zvyky s myšou.** Otáčanie je ľavé tlačidlo, nie {{key:Shift}} so stredným tlačidlom, pokiaľ nevyberiete štýl ponuky {{ui:Pás kariet BIM}} alebo tlačidlá nenastavíte sami v [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).

Pozrite si [Čo ešte nie je hotové](topic:not-built-yet), čo použiť namiesto toho.
