---
title: Potrubia a vzduchotechnické potrubia
summary: Kreslite trasy potrubia a vzduchotechnického potrubia v pôdoryse podľa ich osí; kolená, T-kusy, redukcie a prechody sa vytvoria za vás, trasy patria do systémov s prepojenými portami v súbore IFC a zobrazujú sa v pôdorysoch, tabuľkách a výkaze výmer.
keywords: potrubie, potrubia, rozvody, vodoinštalácia, kanalizácia, vzduchotechnika, MEP, strojné zariadenia, koleno, T-kus, redukcia, prechod, tvarovka, tvarovky, ventil, ventily, hradiaci ventil, guľový ventil, priamy ventil, spätný ventil, stúpačka, sklon, odpad, splašková, dažďová, odvetranie, studená voda, teplá voda, chladená voda, vykurovanie, plyn, protipožiarna ochrana, privádzaný vzduch, odvádzaný vzduch, odvod, systém, systémy, port, porty, konektor, konektory, zariaďovací predmet, zariaďovacie predmety, umývadlo, drez, WC, sprcha, práčovňa, hydraulické jednotky, uhc, dfu, dimenzovanie odpadov, hlavný zvod, odbočka, ramal, coletor, prietok vzduchu, cfm, trenie, rovnaké trenie, dimenzovanie, tabuľka, výkaz výmer, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Čo urobíte

Kreslite potrubia a vzduchotechnické potrubia budovy rovnako ako steny: kliknite na rohy osi trasy vo výške, ktorú nastavíte. BimCraft vytvorí tvarovky, zaradí každú časť do jej systému a prepojí ich, takže iné programy čítajú trasu ako jeden prepojený systém.

## Kreslenie potrubia

1. Zapnite {{ui:Kresliť}}, otvorte {{ui:Zostava}} a vyberte {{ui:Potrubie}}.
2. Na lište vyberte **systém** (studená voda, teplá voda, splašková kanalizácia, plyn…). Nastaví obvyklý materiál: meď pre vodu, PVC pre odpady a odvetranie, oceľ pre vykurovanie, chladenú vodu, plyn a protipožiarnu ochranu. Ak potrebujete, zmeňte **materiál**, **triedu** a **rozmer**. Rozmery a steny pochádzajú z verejných noriem: oceľové potrubie ASME B36.10M, medená rúrka ASTM B88, PVC ASTM D1785 a PEX ASTM F876. Brazílske projekty môžu použiť **PVC vodovodné potrubie (NBR 5648)**, PVC na lepenie pre studenú vodu, a **PVC kanalizačné potrubie (NBR 5688)**, normálnej alebo vystuženej série, pre odpady a odvetranie: ich rozmery sa pomenúvajú podľa DN (DN 25, DN 100). Keď vyberiete jedno z nich, výber iného systému ostane pri brazílskych potrubiach (PVC kanalizačné potrubie pre splaškový odpad po PVC vodovodnom potrubí).
3. Nastavte **Výška**: výšku osi potrubia nad úrovňou.
4. Kliknite tam, kde potrubie začína, potom na každý roh. Na poslednom bode dvakrát kliknite alebo stlačte {{key:Enter}}. {{key:Backspace}} vezme späť posledný roh; {{key:Esc}} zruší trasu.

Potrubie sa prichytáva ako steny a k iným trasám: začnite na konci potrubia, aby ste pokračovali od neho, alebo skončite na priamke potrubia, aby ste sa odbočili. Nová trasa preberie výšku potrubia, ku ktorému sa prichytí.

Trasa začatá alebo ukončená na porte zariadenia preberá jeho rozmer a systém a zostáva k nemu pripevnená: pozrite [MEP zariadenia s portami](topic:mep-equipment) a [Pripojenie potrubí a vzduchotechnických potrubí k zariadeniam](topic:mep-connections).

## Nastavenie plumbingového štandardu projektu

Prvý zoznam na lište potrubia je **plumbingový štandard** modelu: **US (IPC, palce)** alebo **Brazília (ABNT, DN)**. Uloží sa do modelu, takže každý, kto otvorí súbor, začína trasy rovnako. V režime **US** začína nová trasa v medi (voda) alebo PVC Schedule 40 (odpady), v palcoch, so sklonom International Plumbing Code. V režime **Brazília** začína studená voda ako PVC soldável DN 25, splaškové a dažďové odpady a odvetranie ako PVC esgoto DN 100 so sklonom podľa NBR 8160 a teplá voda v medi. Platí aj pre trasu začatú na konektore zariaďovacieho predmetu alebo porte zariadenia. Už nakreslené potrubia si ponechajú svoj materiál a vlastné tabuľky; zoznam materiálov zostáva otvorený, takže môžete zámerne nakresliť jednu brazílsku trasu v americkom modeli. Súbor bez voľby sa správa ako doteraz: nová trasa sleduje práve použitý materiál.

## Kreslenie vzduchotechnického potrubia

1. Vyberte {{ui:VZT potrubie}}. Vyberte systém (privádzaný, odvádzaný, odvod alebo vonkajší vzduch) a tvar: okrúhly, obdĺžnikový alebo plochý oválny.
2. Zadajte šírku a výšku (šírka okrúhleho potrubia je jeho priemer) a **Výška** pre výšku osi.
3. Ak chcete rozmer odvodiť z prietoku vzduchu, zadajte **Prietok** a sadzbu **Trenie** a kliknite na {{ui:Dimenzovať}}. Potrubie sa dimenzuje podľa rovnakého trenia, metódou z kapitoly o návrhu vzduchotechnického potrubia v ASHRAE Handbook, a zaokrúhli sa na skladový rozmer, takže trenie vychádza na alebo pod zadanou sadzbou. Ak nie je zadaná sadzba, použije sa 0.08 in. vodného stĺpca na 100 ft (0.8 Pa/m). Obdĺžnikové potrubie si zachová výšku, ktorú ste zadali, a dostane šírku; BimCraft to oznámi, keď sú jeho strany väčšie než 4 ku 1.
4. Kliknite na rohy ako pri potrubí.

## Zariaďovacie predmety

{{ui:Zostava}} › {{ui:Umiestniť rodinu}} ponúka päť predmetov, z ktorých môžete začať, každý s odpadom a prípojkou studenej vody: **WC**, **Umývadlo**, **Kuchynský drez**, **Sprchová vanička** a **Práčovňa**. Ich predná strana je otočená k vám pri umiestňovaní a zadná strana sa opiera o stenu. Ich odpady sú na najmenšom odpadovom rozmere NBR 8160 (DN 100 pre WC, DN 50 pre kuchynský drez, DN 40 pre ostatné); voda je DN 20. Zmeňte ich rozmery alebo ich upravte ako ktorúkoľvek rodinu: pozrite [Rodiny a ich rozmery](topic:families).

Rodina hovorí, aký zariaďovací predmet je, pod {{ui:Zariaďovací predmet}} na karte {{ui:Konektory}} editora rodiny. Jej odpad sa potom počíta v hydraulických jednotkách: 6 UHC pre WC, 1 pre umývadlo, 3 pre kuchynský drez alebo práčovňu, 2 pre sprchu (NBR 8160), alebo odpadové hydraulické jednotky z IPC Table 709.1.

## Od konektora zariaďovacieho predmetu

Prvky umiestnené z rodiny s konektormi (odpad a kohútik umývadla, hrdlo koncového vzduchotechnického prvku: pozrite [Úprava rodiny](topic:family-editor)) zobrazujú svoje voľné konektory ako body, keď je zapnutý {{ui:Potrubie}} alebo {{ui:VZT potrubie}}, a ukazovateľ sa na ne prichytáva.

- **Začiatok na konektore**: trasa preberie svoj systém a rozmer (potrubie materiálu z lišty na rozmere konektora alebo tesne nad ním; okrúhle vzduchotechnické potrubie jeho priemer). Keď konektor smeruje nadol alebo nahor, ako odpad pod umývadlom, trasa najprv ide priamo nadol alebo nahor do výšky v **Výška**, potom pokračuje podľa vašich kliknutí.
- **Koniec na konektore**: trasa ide nadol alebo nahor na konektor a tam končí.

Trasa je pripojená k prvku v súbore IFC, takže iné programy vidia zariaďovací predmet ako súčasť jeho systému. Prvok umiestnený neskôr s konektorom na konci trasy sa k nej tiež pripojí. Trasa odsunutá od konektora k nemu už nie je pripojená.

## Tvarovky, ktoré pre vás vytvoríme

| Kde | Čo vytvorí BimCraft |
|---|---|
| Trasa mení smer | Koleno. Oceľové potrubie s dlhým polomerom podľa ASME B16.9 (1.5 × rozmer), iné potrubie s jedným vonkajším priemerom, okrúhle vzduchotechnické potrubie s 1.5 priemeru, obdĺžnikové vzduchotechnické potrubie s jednou šírkou (alebo jednou výškou pri otočení nahor alebo nadol) |
| Trasa končí na priamke inej trasy | T-kus; druhá trasa sa tam rozdelí |
| Dve trasy sa stretnú koniec na koniec pri rôznych rozmeroch | Redukcia (potrubia) alebo prechod (vzduchotechnické potrubie) |
| Dve trasy rovnakého rozmeru sa stretnú koniec na koniec pod uhlom | Koleno |

Pri zmene, presune alebo zmazaní trasy sa každá tvarovka na tej úrovni vytvorí znova. Ak je noha príliš krátka pre tvarovky na svojich koncoch, BimCraft to oznámi a nič nezmení: posuňte roh ďalej.

:::note
Tvarovky a ventily sú všeobecné: odvodené z rozmeru potrubia alebo vzduchotechnického potrubia, nie z katalógu výrobcu. Tvarovky na zasúvanie, lisované a drážkované tvarovky, telá ventilov a zariadenia majú vlastné rozmery výrobcov; overte ich u svojho dodávateľa pred objednaním.
:::

## Stúpačky

Počas kreslenia zadajte novú výšku do **Výška** a stlačte {{key:Enter}}: trasa ide na poslednom rohu priamo nahor alebo nadol, s kolenom na každom konci. Stúpačka môže ísť nahor do úrovne nad ňou. Každá úroveň zobrazuje časti trasy, ktoré dosiahne jej rozsah pohľadu, s **UP** alebo **DN** pri stúpačke.

## Odpady a ich sklon

Splaškové a dažďové odpady začínajú na najmenšom sklone, ktorý International Plumbing Code povoľuje pre ich rozmer: 1/4 in. na ft až do 2-1/2 in., 1/8 in. na ft od 3 do 6 in., 1/16 in. na ft od 8 in. Brazílske PVC kanalizačné potrubie začína so sklonom podľa NBR 8160: 2 % až do DN 75, 1 % od DN 100. Zadajte iný sklon na lište alebo vo {{ui:Vlastnosti}}: `1/4"/ft`, `2 %` alebo `1:50`. Trasa klesá od svojho prvého bodu, takže odpady kreslite v smere ich odtoku. Pôdorys zobrazuje spád a šípku. Vlastnosti upozornia, keď je odpad plochší než minimum kódexu.

## Dimenzovanie odpadov podľa hydraulických jednotiek

Vyberte splaškový odpad: **Hydraulické jednotky** vo Vlastnostiach uvádza, koľko prenáša a najmenší rozmer, ktorý potrebuje. Počíta sa každý zariaďovací predmet, ktorého odpadový konektor je na trase, a každý odpad, ktorý do nej ústi: kreslite odpady v smere ich odtoku, každý končí na odpade, do ktorého ústi.

- Odpady z brazílskeho PVC kanalizačného potrubia počítajú **UHC** a riadia sa NBR 8160; ostatné počítajú **DFU** a riadia sa International Plumbing Code.
- **Odpad**: **Odbočka** sa dimenzuje podľa tabuľky kódexu pre odbočky zariaďovacích predmetov; **Hlavný zvod** podľa jeho tabuľky a sklonu, takže jeho **Sklon** je dôležitý.
- Odpad nikdy nie je menší než odpady zariaďovacích predmetov, ktoré obsluhuje (WC potrebuje DN 100, alebo 3 in.), ani menší než odpad, ktorý doňho ústi. Podľa NBR 8160 je hlavný zvod minimálne DN 100.

{{ui:Dimenzovať odpady}} urobí každý splaškový odpad modelu, ktorý je príliš malý pre svoje hydraulické jednotky, rozmerom, ktorý potrebuje, ako jeden krok, ktorý môžete vrátiť. Odpad nakreslený väčší, než potrebuje, zostane tak, ako je. Keď odpad nesie viac, než dokáže najväčší rozmer jeho potrubia pri svojom sklone, BimCraft to oznámi: dajte mu strmší sklon alebo iné potrubie.

:::note
Tabuľky sú tabuľky vodorovných odpadov. Stúpačky, odvetrania a dažďové odpady sa tu nedimenzujú: skontrolujte ich a celý návrh podľa kódexu, ktorý platí pre projekt.
:::

## Ventily

1. Vyberte {{ui:Ventil}} a druh: hradiaci, guľový, priamy alebo spätný.
2. Kliknite na potrubie, kde má byť. Potrubie sa okolo neho preruší a ventil je pripojený na obe strany.

Vo {{ui:Vlastnosti}} trasy sú jej ventily uvedené, každý s tlačidlom {{ui:Odstrániť}}.

Ďalšie druhy ventilov, sitko, klapky na vzduchotechnických potrubiach, vaše vlastné špecifikácie potrubia a rodiny výrobcov: pozrite [Špecifikácie potrubia, ventily, klapky a rodiny výrobcov](topic:pipe-specs).

## Zmena trasy

Vyberte ľubovoľnú časť trasy v pôdoryse alebo 3D pohľade. Vo {{ui:Vlastnosti}}:

- **Systém**, **Materiál**, **Trieda** a **Rozmer** (potrubia), alebo **Tvar**, **Šírka**, **Výška** (vzduchotechnické potrubia).
- **Výška nad úrovňou** posunie celú trasu nahor alebo nadol.
- **Izolácia**: jej hrúbka, uchovaná pre kontrolu prestupov a zoznam otvorov (nič sa pre ňu nekreslí): pozrite [Kontrola potrubí a vzduchotechnických potrubí voči konštrukcii](topic:mep-against-structure).
- Oceľové potrubie: **Rozdeliť na montážne celky**: pozrite [Oceľové potrubie, montážne celky a listy montážnych celkov](topic:pipe-spools).
- **Sklon** (potrubia).
- **Prietok** s {{ui:Dimenzovať}}: pre vodu najmenší rozmer, ktorý udrží vodu na 8 ft/s (2.4 m/s), alebo 5 ft/s (1.5 m/s) pre teplú vodu; pri 3 m/s pre brazílske PVC vodovodné potrubie (NBR 5626). Pre vzduchotechnické potrubia rýchlosť a sadzbu trenia potrubia tak, ako je nakreslené. Splaškové odpady sa dimenzujú podľa hydraulických jednotiek: pozrite **Dimenzovanie odpadov podľa hydraulických jednotiek** vyššie.

Každá zmena je jedným krokom {{ui:Späť}}. {{key:Delete}} odstráni celú trasu.

## Pôdorysy

- Potrubia menšie než 150 mm (asi 6 in.) sa kreslia ako jedna čiara na ich osi, väčšie potrubia a všetky vzduchotechnické potrubia ako dve čiary v ich šírke.
- Každý systém má vlastnú farbu; PDF pôdorysu ich tlačí čiernou.
- Každá trasa je označená svojím rozmerom a systémom (napríklad `2" CW` alebo `16×10 SA`).
- Rozsah pohľadu pôdorysu určuje, ktoré trasy zobrazuje, a {{ui:Zobrazené v tomto pôdoryse}} môže vynechať **Potrubia** alebo **Vzduchotechnické potrubia**: pozrite [Pohľady, rozsahy pohľadov a vlastné listy](topic:views-and-sheets).

## Tabuľky a výkaz výmer

Panel {{ui:Tabuľky}} pridá **Potrubia** (podľa systému, materiálu a rozmeru, s ich dĺžkami), **Vzduchotechnické potrubia** (podľa systému, tvaru a rozmeru, s dĺžkami a vonkajšou plochou) a **Tvarovky a ventily** (podľa druhu a rozmeru, spočítané). Kliknite na riadok, aby ste vybrali, čo zoznam obsahuje; {{ui:Stiahnuť CSV}} ho stiahne.

{{ui:Výkaz výmer}} odovzdá trasy do TakeoffCraft: potrubie a vzduchotechnické potrubie podľa rozmeru ako trasy nakreslené v pôdoryse (odpady so sklonom merané po ich sklone), tvarovky a ventily spočítané tam, kde sú: pozrite [Odoslanie množstiev modelu do TakeoffCraft](topic:takeoff). Stúpačky sú z tohto listu vynechané, pretože pôdorys ich nemôže zmerať; tabuľka Potrubia uvádza ich dĺžku.

## V súbore IFC

Každá trasa je zostava obsahujúca svoje časti: segmenty potrubia a vzduchotechnického potrubia, tvarovky a ventily, každý s typom, materiálom, farbou pre svoj systém a portami. Dotýkajúce sa porty sú prepojené a každá časť patrí do svojho distribučného systému (súbory IFC2X3 dostanú to isté ako prietokové segmenty, tvarovky a regulátory v systéme). Iné programy, ktoré čítajú systémy IFC, vidia jednu prepojenú trasu na systém. Vlastná definícia trasy sa uchováva s ňou, takže ju BimCraft pri zmene vytvorí znova rovnako.
