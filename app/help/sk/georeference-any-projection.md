---
title: Georeferencovanie s ľubovoľným zobrazením
summary: Povedzte BimCraft, v akom mapovom systéme sú súradnice modelu — zo celého zoznamu EPSG, z ľubovoľného pásma UTM alebo zo zobrazenia, ktoré definujete sami — a použite ho pre Polohu, mapové vrstvy a mračná bodov.
keywords: zobrazenie, súradnicový systém, crs, epsg, utm, pásmo utm, vlastné zobrazenie, proj4, reťazec proj, prj, wkt, georeferencovanie, prevod na mapu, ifcprojectedcrs, moje projekcie, zemepisná šírka, zemepisná dĺžka, súradnica východu, súradnica severu, lambert, gauss-kruger, štátna rovina, národná sieť
from: 6894c1f2
---

Niektoré plány sú nakreslené v mapovom systéme, ktorý nie je v krátkom zozname: v pásme UTM, v národnej sieti alebo v zobrazení, ktoré niekto zapísal ako textovú definíciu. {{ui:Merať}} › {{ui:Súradnicový systém…}} vám umožní určiť, ktorý systém model používa.

## Výber systému pre model

1. Otvorte model, vyberte {{ui:Merať}} a potom {{ui:Súradnicový systém…}}.
2. Píšte do vyhľadávacieho poľa. Funguje ktorýkoľvek z týchto:
   - číslo EPSG: `32633` alebo `EPSG:2277`;
   - pásmo UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - slová z názvu: `lambert 93`, `mga zone 56`, `texas central`;
   - definícia zobrazenia: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, voliteľne s názvom pred ňou (`My grid = +proj=…`);
   - text súboru `.prj`, alebo použite {{ui:Načítať súbor .prj…}}.
3. Vyberte výsledok a potom {{ui:Použiť tento systém}}.

Voľba sa uloží do modelu (sada vlastností s názvom `CadCraft_CRS` na projekte), takže sa znova otvorí spolu s modelom. Model uložte, aby sa zachovala. {{ui:Odstrániť z modelu}} vráti to, čo hovorí súbor.

Ak vaša definícia dáva rovnaké súradnice ako niektorý uvedený systém EPSG, BimCraft to oznámi a použije tento kód; keď viacero uvedených systémov zdieľa tú istú matematiku, pomenuje aj ostatné.

## Moje projekcie

Definíciu, ktorú vložíte, alebo súbor `.prj`, ktorý načítate, môžete uchovať pomocou {{ui:Uložiť do Mojich projekcií}}. Zoznam je v tomto zariadení (v tomto prehliadači) a ponúkne sa pri ďalšom otvorení výberu.

## Na čo sa to používa

- {{ui:Merať}} › {{ui:Poloha}} prevedie vybratý bod na zemepisnú šírku a dĺžku cez systém modelu. Predtým sa zastavilo s poznámkou, keď súbor pomenoval svoj mapový systém bez kódu EPSG; s uloženou voľbou dá odpoveď.
- Mapové vrstvy pod modelom používajú ten istý systém. Mračno bodov alebo súbor terénu v inom systéme sa ponúkne v systéme modelu (pozri nižšie).
- {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Poloha}} › {{ui:Vybrať iný systém…}} nastaví, čo {{ui:Poloha}} uvádza aj: zemepisnú šírku a dĺžku v ľubovoľnom uvedenom geografickom systéme alebo súradnice východu a severu v ľubovoľnom uvedenom zobrazenom systéme, okrem vlastného systému modelu.

## Model, ktorý ešte nie je na mape

Ak súbor nemá prevod na mapu, výber systému otvorí {{ui:Umiestniť tento model na mapu}}. Môžete ho otvoriť aj z {{ui:Merať}} › {{ui:Mapový začiatok…}}.

1. Zadajte začiatok modelu ako súradnice východu a severu v danom systéme, alebo zadajte zemepisnú šírku a dĺžku a vyberte {{ui:Previesť na súradnice východu a severu}}.
2. Zadajte otočenie k mriežkovému severu (stupne, proti smeru hodinových ručičiek; 0 znamená, že os Y modelu smeruje na mriežkový sever) a výšku začiatku.
3. Mierka začína rozdielom jednotiek medzi modelom a mapou (0.001 pre model v milimetroch na mriežke v metroch). Meňte ju iba pre kombinovaný faktor od zeme po mriežku.
4. Vyberte {{ui:Umiestniť na mapu}}. Jeden krok späť zapíše IfcProjectedCRS a IfcMapConversion (IFC4). Samotný model sa nehýbe.

Súbor IFC2X3 nemá ani jednu z týchto entít. BimCraft zapíše tie isté čísla spôsobom, ktorý štandard dovoľuje: sady vlastností buildingSMART `ePSet_MapConversion` a `ePSet_ProjectedCRS` na projekte, zemepisnú šírku a dĺžku lokality a pravý sever. Dialóg to uvádza. Model uložte, aby sa zachoval.

## Model, ktorý je už na mape

Keď súbor sa už sám umiestňuje na mapu a vy vyberiete iný systém, BimCraft sa opýta:

- {{ui:Zmeniť iba to, čo hlási Poloha}} zachová vlastnú georeferenciu súboru a použije vašu voľbu pre {{ui:Poloha}}, mapové vrstvy a mračná bodov (čísla modelu sa potom čítajú ako súradnice v novom systéme).
- {{ui:Presunúť model do tohto systému}} prepíše georeferenciu: začiatok sa prevedie cez zobrazenie (súradnice východu a severu, výška, otočenie a mierka) a IfcProjectedCRS (názov, datum, zobrazenie, pásmo, jednotka) sa prepíše, takže uložené IFC hovorí o novom systéme. Miesto na Zemi zostane rovnaké: začiatok si zachová zemepisnú šírku a dĺžku. Prvky vnútri modelu sa nikdy nemenia; mení sa iba georeferencia.

Dialóg pred voľbou ukáže starý a nový začiatok. Presun tam a späť vráti začiatok do jedného milimetra.

## Mračná bodov a terén v inom systéme

Mračno alebo prieskumný súbor nesie vlastný systém (LAS, LAZ, E57, GeoTIFF) alebo žiadny. Keď sa líši od systému modelu, BimCraft ponúkne {{ui:Preprojektovať do systému modelu}}. Body sa presúvajú po dávkach (v pracovnom vlákne, keď ich je veľa, aby stránka zostala použiteľná), súbor na vašom počítači sa nedotkne a stavový riadok uvedie, čo sa urobilo. Súbor otvorte znova, aby ste sa vrátili k jeho vlastnému systému. Pre mračno, ktoré je už otvorené, to isté urobí {{ui:Preprojektovať do modelu…}} v paneli mračna.

Ak súbor nepomenúva žiadny systém, BimCraft sa opýta {{ui:V akom systéme je tento súbor?}}: vyberte ho pomocou {{ui:Vyberte systém…}} a odpoveď sa pre tento súbor na tomto zariadení zapamätá. {{ui:Ponechať vlastný systém súboru}} ponechá body tak, ako sú.

## Keď je niečo približné

Problémy sa uvádzajú v dialógu a v paneli Problémy, nikdy potichu:

- Miesto mimo oblasti, pre ktorú je systém určený: čísla fungujú, ale skreslenie rastie.
- Posuny datum, ktoré potrebujú mriežkový súbor (NADCON, NTv2 a podobné), nie sú k dispozícii. Systémy na inom datume sa presúvajú posunom bez mriežky, ktorý uvádza register EPSG, a výsledok je približný s presnosťou, ktorú správa uvádza v metroch.
- Bod, ktorý sa nedá premietnuť, sa vynechá a spočíta; súbor nad limitom veľkosti sa odmietne s uvedeným limitom.

:::tip
Mapové súradnice vyžadujú prevod na mapu. Súbor bez neho sa umiestni na mapu pomocou {{ui:Mapový začiatok…}}.
:::

:::note
Presun medzi datumami bez mriežkového súboru je presný na niekoľko metrov; výsledok Polohy uvádza, o koľko, keď to katalóg pozná.
:::
