---
title: Pozemok, budova na ňom a jej úrovne
summary: Nakreslite obrys pozemku, umiestnite a otočte budovu na pozemku, pridajte úrovne v zadaných výškach alebo rozdeľte výšku budovy a kreslite na zvolenej úrovni.
keywords: pozemok, stavebná čiara, odstup, vecné bremeno, právo prechodu, hranica pozemku, parcela, hranica, umiestnenie budovy, otočenie budovy, úrovne, podlažia, pridať úrovne, rozdelenie výšky, výška podlažia, IfcSite, IfcBuilding, IfcBuildingStorey, priestorová štruktúra
from: 48d10c1e
---

## Čo urobíte

Nastavte časti modelu IFC, ktoré obsahujú všetko ostatné: pozemok, budovu na ňom a úrovne budovy.

Model je usporiadaný ako **pozemok**, ktorý drží **budovu**, a tá drží svoje **úrovne** (podlažia); múry, podlahy a všetko ostatné patrí k úrovni. {{ui:Súbor}} › {{ui:Nová budova}} nastaví všetky tri. Model z iného programu, ktorý má budovu, ale nemá pozemok, dostane pozemok, keď prvýkrát nakreslíte jeden: budova sa na ňom umiestni tam, kde už bola.

## Nakreslenie pozemku

1. Zapnite {{ui:Kresliť}} a potom vyberte {{ui:Zostava}} › {{ui:Pozemok}}.
2. Kliknite na rohy pozemku (nástroj sa prichytáva ako nástroj Múr). Kliknite znova na prvý roh, dvakrát kliknite alebo stlačte {{key:Enter}}, aby ste dokončili. {{key:Backspace}} vezme späť roh.
3. Riadok zobrazuje plochu pozemku. Nakreslite ho znova, ak ho chcete zmeniť.

Každý pôdorys úrovne zobrazuje obrys pozemku ako hranicu vlastníctva.

## Umiestnenie budovy na pozemku

Keď je zapnutý {{ui:Pozemok}}, napíšte **X** a **Y** budovy na pozemku a jej **Otočenie** v stupňoch, alebo kliknite na {{ui:Umiestniť budovu kliknutím}} a kliknite, kam má ísť počiatok budovy. Všetko v budove (úrovne, múry, osi, všetko, čo ste nakreslili) sa pohne s ňou; pozemok a jeho obrys zostávajú. Pôdorysy stále zobrazujú každú úroveň kolmo na budovu.

## Stavebné čiary a vecné bremená

Stavebné čiary a vecné bremená (zriadenia, práva prechodu) sa kreslia na pozemku ako obmedzenia. **Upozorňujú, nikdy neblokujú**: múr nad jednou sa nakreslí tak, ako ste žiadali, a v Problémoch sa objaví upozornenie s názvom múru a čiary alebo vecného bremena. Keď múr posuniete späť, upozornenie zmizne. Upozornenie sa dá prijať s dôvodom (napríklad uvoľnenie, ktoré udelil úrad).

- **Stavebná čiara z odstupov.** {{ui:Zostava}} › {{ui:Stavebná čiara}}, potom {{ui:Odstupy}}: zadajte, ako ďaleko čiara stojí od každej hranice pozemku. Hranice sú počas činnosti nástroja očíslované v pôdoryse. Čiara sa vypočíta z týchto vzdialeností a sleduje obrys pozemku, ak ho nakreslíte znova s rovnakým počtom hraníc. Vzdialenosti sú vaše, čítate ich z vlastníckeho listu alebo územného plánu; BimCraft žiadne nedopĺňa.
- **Nakreslená stavebná čiara.** So zapnutou {{ui:Stavebná čiara}} kliknite na jej body a dokončite dvojitým kliknutím alebo {{key:Enter}}. Dokončite na prvom bode pre uzavretú čiaru: plocha vnútri je miesto, kde sa smie stavať, a múr s akoukoľvek časťou mimo nej dostane upozornenie. Otvorená čiara upozorní len na múr, ktorý ju pretína.
- **Vecné bremeno.** {{ui:Zostava}} › {{ui:Vecné bremeno}}: vyberte jeho druh, zadajte jeho názov, registrovanú referenciu a šírku, potom kliknite na jeho stredovú čiaru a dokončite (pás), alebo ho uzavrite na prvom bode (plocha). Múr s akoukoľvek časťou na ňom dostane upozornenie na každej úrovni.
- Plocha presne na čiare sa dotýka, nepretína (tolerancia je 1 mm).
- Aktuálny variant hmoty každej sady variantov sa kontroluje rovnako ako múry: hmota mimo hranice, cez stavebnú čiaru alebo na vecnom bremene dostane upozornenie. Pozri [Varianty hmôt vedľa seba](topic:massing-options).
- Vyberte jedno pomocou {{ui:Vybrať}}, aby ste zmenili jeho názov, referenciu, druh alebo šírku, presunuli ho alebo zmazali.

Kreslia sa na pôdoryse každej úrovne, na listoch a v PDF pôdoryse: stavebné čiary prerušované, vecné bremená bodkované, každé s popiskom. V súbore IFC je každé anotáciou (IfcAnnotation, typ BuildingLine alebo Servitude) na pozemku, s jeho čiarou ako jednoduchou krivkou, ktorú môžu čítať iné programy. Kontrola používa skutočný obrys každého múru na pôdoryse, so spojmi tak, ako sú nakreslené; zakrivený múr sa kontroluje podľa vlastnej hrúbky okolo svojej stredovej čiary.

## Pridanie úrovní

V paneli {{ui:Úrovne}} {{ui:Pridať úroveň navrch}} pridá jednu a {{ui:Pridať úroveň nižšie}} pridá jednu pod najnižšiu (suterén, v zápornej výške). {{ui:Pridať úrovne…}} pridá viac naraz:

- **V týchto výškach**: zadajte výšky nad najnižšou úrovňou oddelené čiarkami (napríklad `12', 24', 36'`). Výšky, kde už úroveň je, sa preskočia.
- **Rozdelenie výšky budovy**: zadajte výšku budovy a počet úrovní. Úrovne, ktoré máte, sa presunú na nové výšky od najnižšej nahor, chýbajúce sa pridajú a všetky nad nimi zostanú, kde sú.

Múry, ktoré idú do úrovne nad nimi, ju nasledujú, rovnako ako stĺpy a rampy.

{{ui:Kopírovať túto úroveň…}} (v tom istom paneli) skopíruje to, čo je nakreslené na úrovni, na ktorú sa pozeráte, na inú úroveň alebo na novú úroveň navrchu, takže pôdorys podlažia môže ísť hore budovou v jednom kroku. Pozri [Kreslenie múrov](topic:draw-walls).

## Kreslenie na úrovni

Každý nástroj {{ui:Kresliť}} pracuje na úrovni zvolenej v zozname úrovní pôdorysu (alebo vybranej v paneli {{ui:Úrovne}}): čo nakreslíte, patrí tejto úrovni.

## Čo by ste mali vidieť

- Každá z týchto zmien je jeden krok: {{key:Mod+Z}} ju vezme späť.
- V súbore IFC: pozemok (IfcSite) s jeho obrysom a plochou, budova (IfcBuilding) umiestnená na ňom a úrovne (IfcBuildingStorey) v budove.

Pozri aj [Súradnice v BimCraft](topic:coordinates) pre počiatok projektu a geodetický bod.
