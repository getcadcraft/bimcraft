---
title: Odhad denního světla v každé místnosti
summary: Průměrný činitel denní osvětlenosti každé místnosti z jejích oken, vnitřních ploch a oblohy, kterou každé okno vidí, s úhlem oblohy změřeným v modelu. Odhad v rané fázi návrhu, ne simulace ani kontrola předpisů.
keywords: denní světlo, činitel denní osvětlenosti, průměrný činitel denní osvětlenosti, adf, vertikální složka oblohy, vsc, solární zisk, slunce, g-hodnota, mřížka, rozdělený tok, složka oblohy, vnitřně odražená složka, přirozené světlo, okno, prosklení, úhel oblohy, zastínění, balkon, převis, odrazivost, propustnost, rané navrhování, analýza, místnosti, prostory
from: 5f300a78
---

Karta {{ui:Denní světlo}} v pravém panelu vypočítá **průměrný činitel denní osvětlenosti** každé místnosti: kolik světla ze zataženého venkovního nebe se v průměru dostane do místnosti, v procentech. Čte místnosti (prostory) a okna otevřeného modelu IFC. V modelu se nic nemění a nic se nenahrává.

:::warning
Vše na této kartě je **pomůcka pro návrh, ne výpočet pro posouzení souladu**: odhady v rané fázi návrhu podle publikovaných metod, **ne simulace** a **ne kontrola podle stavebního předpisu ani normy**. BS EN 17037, LEED, BREEAM a energetické předpisy vyžadují simulaci denního světla s klimatem daného místa; pro ně použijte program na simulaci denního světla.
:::

## Postup

1. Otevřete model IFC, který má místnosti (prostory) a okna. Modely nakreslené zde mají místnost uvnitř každé uzavřené sady stěn.
2. Otevřete kartu {{ui:Denní světlo}} a klikněte na {{ui:Vypočítat}}.
3. Každá místnost ukazuje svůj činitel denního světla a pásmo: pod 2 %, 2–5 %, 5 % a více. Klikněte na místnost a uvidíte její plochy a plochu a úhel oblohy každého okna; místnost a její okna se vyberou v modelu.

Změníte-li vstup, čísla se okamžitě přepočítají; po změně modelu klikněte na {{ui:Vypočítat znovu}}. {{ui:CSV}} uloží každou místnost s jejími čísly a použitými vstupy.

## Vzorec

Průměrný činitel denní osvětlenosti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sečtený přes okna místnosti (Littlefairův vzorec, používaný v BRE 209, BS 8206-2 a CIBSE LG10):

- **T**, propustnost světla skla (0.7 pro začátek: použijte údaj výrobce).
- **Ag**, prosklená plocha: plocha každého okna (jeho celková šířka × výška, jinak jeho velikost v modelu) × **podíl prosklení** (0.75 pro začátek: zbytek je rám).
- **θ**, úhel oblohy, kterou okno vidí, ve stupních (níže).
- **M**, udržovací činitel pro znečištění skla (1 pro začátek).
- **A**, každá vnitřní plocha místnosti: podlaha, stěny, strop a okna, převzaté z vlastního tvaru místnosti.
- **R**, jejich průměrná odrazivost vážená plochou: podlaha 0.2, stěny 0.5, strop 0.7 pro začátek; sklo se počítá jako 0.1.

## Jak se měří úhel oblohy

Pro každé okno BimCraft přeřízne model svislou rovinou kolmou k oknu, od vnější strany skla, a dívá se od horizontu přímo nahoru: vše, co řez zasáhne před oknem (protilehlá budova, balkon nebo převis nad ním, okap), zakryje část těch 90°. θ je to, co zbude. Samo okno a stěna, ve které sedí, se nepočítají. Děje se to na pěti místech napříč šířkou okna a bere se průměr, takže tenký sloup před středem zabere svůj podíl, ne celou oblohu.

Budova 8.5 m nad středem okna a 9.9 m daleko zakryje 40.65° (úhel, jehož tangens je 8.5 ÷ 9.9), takže θ = 49.35°.

## Vertikální složka oblohy každého okna

{{ui:Vypočítat}} také měří pro každé okno, kolik vidí z celé oblohy: stejný svislý řez, otočený do každého směru přes přední stranu okna (každé 2°, z jedné strany na druhou), takže budova do strany, lamela nebo hluboké ostění zabere svůj podíl. Z toho BimCraft spočítá **vertikální složku oblohy (VSC)**: kolik světla zataženého nebe dosáhne skla, jako podíl z toho, co by dostala otevřená plochá střecha. Okno, před kterým nic není, dostane **39.6 %**, nejvíce, co může svislé okno dostat; dlouhá budova vyčnívající 25° nad oknem ponechá asi **27 %**, což je údaj, který britská směrnice (BRE 209) používá jako pravidlo palce. Každé okno v detailu místnosti ukazuje své VSC a svůj **úhel překážky** (jak vysoko se věci vypínají přímo před ním).

Obloha je standardní zataženou oblohou CIE, která je přímo nahoře třikrát jasnější než na horizontu, a řez je přesný: nic se nevzorkuje.

## Slunce přes okna v daný den

Otevřete {{ui:Slunce okny v daném dni}} a vyberte datum. BimCraft sleduje slunce v ten den po čtvrthodinách a pro každé okno sčítá teplo, které slunce propustí sklem:

- **přímé slunce**, když je před oknem a nic v modelu ho nezakrývá (stejný přesný řez, otočený ke slunci: balkon, který v poledne stíní letní slunce, pustí nízké zimní slunce dovnitř);
- **světlo oblohy** na skle, méně to, co okno nevidí;
- světlo **odražené od země** (její odrazivost: 0.2 pro začátek);
- vše přes **g-hodnotu** skla (podíl sluneční energie, kterou propustí: 0.6 pro začátek; použijte údaj výrobce) a jeho podíl prosklení.

Každá místnost ukazuje denní součet v kWh a svůj vrchol ve wattech s časem; detail místnosti vykreslí den jako graf. Obloha je jasná podle Hottelova modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), s letními nebo zimními hodnotami pro místo a roční období a s nadmořskou výškou lokality; poloha slunce je podle NOAA. Zeměpisná šířka a délka lokality pocházejí z lokality v IFC a sever ze skutečného severu modelu; pokud model lokalitu nemá, zadejte zeměpisnou šířku a délku. Časy jsou standardní (bez letního času) v časovém pásmu, které zadáte, jinak v tom, které naznačuje délka.

Co vynechává: oblaka (je to jasný den), menší propustnost skla při nízkých úhlech, rámy stínící sklo, žaluzie a to, co stěny a střecha pohltí. Odhad chlazení na stejné kartě používá vrchol.

## Činitel denní osvětlenosti na mřížce

Otevřete {{ui:Činitel denní osvětlenosti v mřížce}} a klikněte na {{ui:Vypočítat mřížku}}: BimCraft položí mřížku přes podlahu každé místnosti ve výšce pracovní roviny (0.85 m pro začátek), půl metru od stěn, a spočítá činitel denní osvětlenosti v každém bodě **metodou rozděleného toku BRE**:

- **složka oblohy**: zatažená obloha vidět z bodu skrz otvor každého okna, méně rámy;
- **vnější odražená složka**: co bod vidí z budov venku skrz okno, které svítí na desetinu oblohy za nimi (změňte jas překážky, jsou-li výrazně světlejší nebo tmavší);
- **vnitřně odražená složka**: světlo odrážející se po místnosti, z ploch místnosti a jejich odrazivostí, plochy oken a toho, kolik je mimo ně (vzorec BRE, s propustností skla místo čirého skla, s nímž počítal).

Každá místnost ukazuje svůj průměr, nejnižší bod a to, jaká část dostává 2 % nebo více; detail místnosti vykreslí její půdorys s každým bodem obarveným podle jeho činitele a okny červeně. Aby to bylo rychlé na jakémkoli počítači, místnost dostane nejvýše **400 bodů**: ve velké místnosti se rozteč zvětší, aby se vešla (zadejte rozteč, chcete-li si ji vybrat sami).

## Co vynechává

- Střešní okna (sklo ležící vodorovně nebo šikmo) jsou uvedena, ale nepočítají se: zde uvedené vzorce platí pro okna ve stěnách.
- Okna bez místnosti za nimi (například hala bez prostoru) jsou uvedena zvlášť.
- Ostění oken (otvor se bere z vnější strany), oslnění, hodiny slunce a denní světlo podle klimatu. Pro BS EN 17037, LEED nebo BREEAM použijte program na simulaci denního světla.
- Pásma pocházejí ze starších britských směrnic (BS 8206-2), uvedena jako vodítko, nikdy jako vyhověl nebo nevyhověl.
