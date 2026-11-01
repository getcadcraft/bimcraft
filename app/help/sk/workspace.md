---
title: Obrazovka BimCraft
summary: Prehliadka každej lišty, panela a tlačidla pod jeho názvom na obrazovke a toho, ako sa obrazovka mení pre každý druh súboru.
keywords: obrazovka, rozloženie, panely, panel nástrojov, rozhranie, ui, prehliadka, panel vlastností, prehliadač, lišta aplikácie
from: 2eb01ec2
---

Obrazovka BimCraft má hore lištu a pod ňou tri oblasti: panel vľavo, javisko v strede a panel {{ui:Vlastnosti}} vpravo. To, čo sa v každej oblasti zobrazí, závisí od toho, čo ste otvorili: model IFC, súbor projektu alebo rodiny, výkres alebo priečinok.

## Lišta aplikácie

Tenká lišta hore patrí stránke CadCraft, nie samotnému BimCraft. Zľava doprava:

- Značka CadCraft: vedie na domovskú stránku CadCraft.
- Názov aplikácie a ponuka verzií. V zostavení pre zamestnancov ukazuje, ktoré zostavenie používate, a umožňuje prepnúť na vydanú verziu.
- {{ui:O aplikácii BimCraft}}: stránka aplikácie na webe.
- {{ui:Nastavenia}}: vlastné nastavenia BimCraft a tie, ktoré majú spoločné všetky aplikácie. Pozrite [Nastavenia BimCraft](topic:settings).
- {{ui:Celá obrazovka}}: prepína režimy obrazovky. Pozrite nižšie [Režimy obrazovky](topic:workspace#screen-modes).
- {{ui:Papier}} a {{ui:Model}}: svetlý a tmavý motív. 3D pohľad a 2D výkresy sledujú motív, ktorý zvolíte.

## Ľavý panel

Ľavý panel vždy začína sekciou **Otvoriť súbor alebo priečinok**:

- Plocha na pustenie, {{ui:Vyberte súbor alebo sem pretiahnite súbor či priečinok}}. Kliknutím vyberiete jeden súbor alebo na ňu pustíte súbor či priečinok (alebo kamkoľvek na stránku).
- {{ui:Otvoriť priečinok}}: vyberte celý priečinok projektu. Pozrite [Otvorenie celého priečinka projektu](topic:open-project-folder).
- {{ui:Nedávne priečinky}}: zobrazí sa v Chrome a Edge po otvorení priečinka výberom priečinka alebo pustením. Kliknutím na {{ui:Znova otvoriť}} a názov priečinka ho otvoríte znova, alebo malým × ho zabudnete.

Pod ňou sa podľa okolností zobrazujú sekcie:

| Sekcia | Kedy sa zobrazí | Čo obsahuje |
|---|---|---|
| {{ui:Zmeny}} | Je otvorený model IFC | Vaše neuložené úpravy, najnovšie navrchu, s {{ui:Späť}} a {{ui:Uložiť ako IFC}} |
| {{ui:Súbor}} | Je otvorený model alebo karta súboru | Údaje o súbore: veľkosť, schéma alebo vydanie, projekt, autor, počet prvkov |
| {{ui:Výkres}} | Je otvorený DWG alebo DXF | Formát, jednotky, počty entít a hladín, listy, prepojené výkresy, vybavenie |
| {{ui:Priečinok}} | Je otvorený priečinok | Počty súborov a modelov, veľkosť, nájdené problémy |
| {{ui:Späť do priečinka}} | Otvorili ste súbor z priečinka | Vráti na správu o priečinku |
| {{ui:Hladiny}} | Je otvorený výkres | Zaškrtávacie pole pre každú hladinu, s {{ui:Všetky zapnúť}} a {{ui:Všetky vypnúť}} |
| {{ui:Podlažia}} | Je otvorený model IFC | Zaškrtávacie pole pre každé podlažie, najvyššie podlažie navrchu |
| {{ui:Prvky}} | Je otvorený model IFC | Koľko prvkov každého druhu model obsahuje (30 najčastejších) |

## Javisko

Stred obrazovky zobrazuje otvorený súbor.

- **Prázdne**: „Otvorte model budovy.“ s {{ui:Vybrať súbor}} a {{ui:Otvoriť priečinok}} a krátkym popisom každého formátu.
- **Model IFC**: 3D pohľad s panelom nástrojov navrchu, v pomenovaných skupinách ako v kresliacej aplikácii CadCraft, s ikonou každého nástroja nad jeho názvom: {{ui:Zobrazenie}} ({{ui:Prispôsobiť}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Bok}}, {{ui:Hrany}}, {{ui:Priestory}}); {{ui:Upraviť}} ({{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}} a {{ui:Viac}}, pozrite [Kopírovanie, prilepenie a duplikovanie položiek knižnice](topic:copy-paste)); {{ui:Model}} ({{ui:Jednotky}} a {{ui:Kresliť}}); {{ui:Knižnica}} ({{ui:Knižnica}}, {{ui:Vybavenie}}, {{ui:Aktualizácie}}, {{ui:Autori}}); {{ui:Prehliadka}} ({{ui:Zobraziť}}, {{ui:Rez}}, {{ui:Prechádzka}}, {{ui:Merať}}; pozrite [Rez modelu IFC rovinou rezu](topic:section-plane)); a {{ui:Výstup}} (vykreslenie, živý pohľad, VR, exporty, maľovanie a uložené pohľady). Keď je zapnuté {{ui:Kresliť}}, lišta Kresliť pod ním vyzerá rovnako: {{ui:Zobrazenie}} (úroveň a druh pôdorysu), {{ui:Kresliť}}, {{ui:Upraviť}} a {{ui:Knižnica}}. V pravom dolnom rohu je kocka pohľadu. Pozrite [Otvorenie modelu IFC a rozhliadnutie v 3D](topic:open-ifc-model). {{ui:Nastavenia}}, {{ui:Všeobecné}} vyberá, či tieto tlačidlá majú ikony, štítky alebo oboje, zobrazuje alebo skrýva názvy skupín, a pravým kliknutím na panel nástrojov usporiadate jeho nástroje a skupiny. V nízkom okne panel nástrojov vynechá názvy pod ikonami.
- **Súbor projektu alebo rodiny**: karta súboru s náhľadovým obrázkom, informáciami o projekte a prepojenými súbormi. Pozrite [Čítanie súboru projektu alebo rodiny](topic:read-rvt-file).
- **DWG alebo DXF**: rad kariet ({{ui:Model}}, potom jedna na každý list, potom {{ui:Vybavenie}}, keď má výkres označené vybavenie, {{ui:3D}}, {{ui:Prispôsobiť}} a {{ui:Náhľad tlače}}), výkres a živé súradnice X a Y v rohu. Pozrite [Zobrazenie výkresu DWG alebo DXF](topic:view-dwg) a [Zobrazenie výkresu DWG alebo DXF v 3D](topic:dwg-in-3d).
- **Priečinok**: správa o priečinku s rámčekom {{ui:Začnite tu}} a tabuľkami modelov, odkazov, modelov IFC a výkresov. Pozrite [Otvorenie celého priečinka projektu](topic:open-project-folder).

**Riadok stavu** dole na javisku hovorí, čo BimCraft práve robí („Číta sa model…“, „Vytvára sa geometria: 1200 z 5400 prvkov“) a čo sa pokazilo, červenou, keď niečo zlyhá. Správy o úspechu po niekoľkých sekundách zmiznú.

## Panel Vlastnosti

Pravý panel zobrazuje:

- Pre model IFC: prvok, na ktorý ste klikli, s jeho názvom, typom, značkou, GlobalId a každou sadou vlastností. Hodnoty, ktoré môžete zmeniť, vyzerajú ako tlačidlá. Pozrite [Polia panela Vlastnosti](topic:properties-panel).
- Pre výkres: ako sa pohybovať, prepojené výkresy a obrázky výkresu a či sa každý našiel, a zoznam toho, čo je **Zatiaľ nevykreslené**.
- Pre kartu súboru alebo priečinok: krátku poznámku o tom, čo otvoriť ďalej.

## Na malej obrazovke

Keď je okno užšie než obrazovka notebooku, BimCraft oblasti poskladá pod seba: navrchu javisko, pod ním panely. Na panely sa dostanete posúvaním stránky. Na telefóne tvoria jeden stĺpec, na tablete dva.

## Režimy obrazovky

Tlačidlo {{ui:Celá obrazovka}} na lište aplikácie alebo {{key:Ctrl+Shift+F}} na každej platforme prepína tri režimy:

1. Normálny.
2. Celá obrazovka, lišty stále viditeľné.
3. Celá obrazovka so skrytou lištou aplikácie. Presunutím ukazovateľa k hornému okraju alebo ťuknutím tam ju vrátite.

Stlačením klávesu {{key:Esc}} sa vrátite do normálneho režimu. Prehliadače bez podpory celej obrazovky (napríklad na iPhone) prepínajú iba medzi normálnym režimom a skrytými lištami.

## Súvisiace

- [Klávesy a myš](topic:keyboard)
- [Súbory, ktoré BimCraft otvára a ukladá](topic:files)
