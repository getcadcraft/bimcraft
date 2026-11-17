---
title: Odhadnite denné svetlo v každej miestnosti
summary: Priemerný činiteľ dennej osvetlenosti každej miestnosti z jej okien, jej vnútorných plôch a oblohy, ktorú každé okno vidí, s uhlom oblohy meraným v modeli. Odhad v ranej fáze návrhu, nie simulácia ani kontrola predpisov.
keywords: denné svetlo, činiteľ dennej osvetlenosti, priemerný činiteľ dennej osvetlenosti, adf, vertikálna zložka oblohy, vsc, solárny zisk, slnko, g-hodnota, mriežka, rozdelený tok, zložka oblohy, vnútorne odrazená zložka, prirodzené svetlo, okno, zasklenie, uhol oblohy, zatienenie, balkón, presah, odrazivosť, priepustnosť, skorý návrh, analýza, miestnosti, priestory
from: 5f300a78
---

Karta {{ui:Denné svetlo}} na pravom paneli vypočíta **priemerný činiteľ dennej osvetlenosti** každej miestnosti: aký podiel svetla zamračenej oblohy vonku sa v priemere dostane do miestnosti, v percentách. Číta miestnosti (priestory) a okná otvoreného modelu IFC. V modeli sa nič nemení a nič sa neodosiela.

:::warning
Všetko v tejto karte je **pomôcka pri návrhu, nie výpočet na overenie súladu**: odhady v ranej fáze návrhu podľa uverejnených metód, **nie simulácia** a **nie kontrola voči stavebnému predpisu alebo normám**. BS EN 17037, LEED, BREEAM a energetické predpisy vyžadujú simuláciu denného svetla s klímou daného miesta; na ne použite program na simuláciu denného svetla.
:::

## Výpočet

1. Otvorte model IFC, ktorý má miestnosti (priestory) a okná. Modely nakreslené tu majú miestnosť v každom uzavretom obvode stien.
2. Otvorte kartu {{ui:Denné svetlo}} a kliknite na {{ui:Vypočítať}}.
3. Každá miestnosť ukáže svoj činiteľ dennej osvetlenosti a pásmo: pod 2 %, 2–5 %, 5 % a viac. Kliknite na miestnosť a uvidíte jej plochy a plochu a uhol oblohy každého okna; miestnosť a jej okná sa označia v modeli.

Zmena vstupu sa hneď premietne do čísel; po zmene modelu kliknite na {{ui:Vypočítať znova}}. {{ui:CSV}} uloží každú miestnosť s jej číslami a použitými vstupmi.

## Vzorec

Priemerný činiteľ dennej osvetlenosti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sčítané cez okná miestnosti (Littlefairov vzorec, používaný v BRE 209, BS 8206-2 a CIBSE LG10):

- **T**, priepustnosť svetla sklom (0.7 na začiatok: použite údaj výrobcu).
- **Ag**, presklená plocha: plocha každého okna (jeho celková šírka × výška, inak jeho veľkosť v modeli) × **podiel zasklenia** (0.75 na začiatok: zvyšok je rám).
- **θ**, uhol oblohy, ktorý okno vidí, v stupňoch (nižšie).
- **M**, faktor údržby pre znečistenie skla (1 na začiatok).
- **A**, každá vnútorná plocha miestnosti: podlaha, steny, strop a okná, prevzaté z vlastného tvaru miestnosti.
- **R**, ich priemerná odrazivosť vážená plochou: podlaha 0.2, steny 0.5, strop 0.7 na začiatok; sklo sa počíta ako 0.1.

## Ako sa meria uhol oblohy

Pre každé okno BimCraft prereže model zvislou rovinou kolmou na okno, od vonkajšej strany skla, a pozerá sa od horizontu priamo nahor: všetko, čo rez zasiahne pred oknom (budova oproti, balkón alebo presah nad ním, okraj strechy), skryje časť tých 90°. θ je to, čo zostane. Samo okno a stena, v ktorej je, sa nerátajú. Robí to na piatich miestach po šírke okna a berie priemer, takže tenký stĺpik pred stredom zoberie svoj podiel, nie celú oblohu.

Budova 8.5 m nad stredom okna a 9.9 m ďaleko skryje 40.65° (uhol, ktorého tangens je 8.5 ÷ 9.9), takže θ = 49.35°.

## Vertikálna zložka oblohy každého okna

{{ui:Vypočítať}} tiež pre každé okno meria, čo vidí z celej oblohy: ten istý zvislý rez, otočený do každého smeru pred čelom okna (po 2°, z jednej strany na druhú), takže budova na strane, lamela alebo hlboké ostenie zoberie svoj podiel. Z toho BimCraft vypočíta **vertikálnu zložku oblohy (VSC)**: koľko svetla zamračenej oblohy sa dostane k sklu, ako podiel toho, čo by dostala otvorená plochá strecha. Okno, pred ktorým nič nie je, dostane **39.6 %**, to najviac, čo môže zvislé okno dostať; dlhá budova, ktorá sa nad oknom zdvíha o 25°, nechá približne **27 %**, hodnotu, ktorú britské usmernenia (BRE 209) používajú ako orientačné pravidlo. Každé okno v podrobnostiach miestnosti ukazuje svoju VSC a svoj **uhol prekážky** (ako vysoko sa veci zdvíhajú priamo pred ním).

Oblohu tvorí štandardná zamračená obloha CIE, ktorá je v zenite trikrát jasnejšia ako pri horizonte, a rez je presný: nič sa nevzorkuje.

## Slnko cez okná v určitý dátum

Otvorte {{ui:Slnko cez okná v určitý dátum}} a vyberte dátum. BimCraft sleduje slnko počas dňa po štvrťhodinách a pre každé okno sčíta teplo, ktoré slnko prenesie sklom:

- **priame slnko**, keď je pred oknom a nič ho v modeli nezakrýva (ten istý presný rez, otočený k slnku: balkón, ktorý tieni vysoké letné slnko na poludnie, vpustí nízke zimné slnko);
- **svetlo oblohy** na skle, mínus to, čo okno nevidí;
- svetlo **od zeme** (jej odrazivosť: 0.2 na začiatok);
- všetko cez **g-hodnotu** skla (podiel slnečnej energie, ktorú prepustí: 0.6 na začiatok; použite údaj výrobcu) a jeho podiel zasklenia.

Každá miestnosť ukáže denný súčet v kWh a svoju špičku vo wattoch s časom; podrobnosti miestnosti nakreslia deň ako graf. Obloha je jasná podľa Hottelovho modelu (Duffie & Beckman, *Solar Engineering of Thermal Processes*), s letnými alebo zimnými hodnotami pre miesto a ročné obdobie a nadmorskou výškou lokality; poloha slnka je podľa NOAA. Zemepisná šírka a dĺžka pochádzajú z lokality IFC a sever z skutočného severu modelu; ak model nemá lokalitu, zadajte zemepisnú šírku a dĺžku. Časy sú štandardné (bez letného času) v časovom pásme, ktoré zadáte, inak v tom, ktoré naznačí dĺžka.

Čo vynecháva: oblaky (je to jasný deň), sklo, ktoré pri nízkych uhloch prepúšťa menej, rámy tieniace sklo, žalúzie a to, čo steny a strecha pohlcujú. Odhad chladenia na tej istej karte používa špičkovú hodnotu.

## Činiteľ dennej osvetlenosti na mriežke

Otvorte {{ui:Činiteľ dennej osvetlenosti na mriežke}} a kliknite na {{ui:Vypočítať mriežku}}: BimCraft položí mriežku na podlahu každej miestnosti vo výške pracovnej roviny (0.85 m na začiatok), pol metra od stien, a vypočíta činiteľ dennej osvetlenosti v každom bode **metódou rozdeleného toku BRE**:

- **zložka oblohy**: zamračená obloha videná z bodu cez otvor každého okna, mínus rámy;
- **vonkajšie odrazená zložka**: to, čo bod vidí z budov vonku cez okno, svietiace na desatinu oblohy za nimi (zmeňte jas prekážky, ak sú výrazne svetlejšie alebo tmavšie);
- **vnútorne odrazená zložka**: svetlo odrážajúce sa po miestnosti z plôch miestnosti a ich odrazivostí, plochy okien a toho, aká časť je mimo nich (vzorec BRE, s priepustnosťou skla namiesto číreho skla, ktoré predpokladal).

Každá miestnosť ukáže svoj priemer, svoj najnižší bod a koľko z nej dostane 2 % alebo viac; podrobnosti miestnosti nakreslia jej pôdorys s každým bodom zafarbeným podľa jeho činiteľa a okná červenou. Aby bol výpočet rýchly na ľubovoľnom počítači, miestnosť dostane najviac **400 bodov**: vo veľkej miestnosti sa rozostup zväčší, aby to vyšlo (zadajte rozostup, ak chcete vlastný).

## Čo to vynecháva

- Strešné okná (sklo ležiace alebo šikmé) sú uvedené, ale nepočítajú sa: vzorce tu sú pre okná v stenách.
- Okná bez miestnosti za nimi (napríklad chodba bez priestoru) sú uvedené zvlášť.
- Ostenia okien (otvor sa berie na vonkajšej strane), oslnenie, hodiny slnečného svitu a denné svetlo založené na klíme. Pre BS EN 17037, LEED alebo BREEAM použite program na simuláciu denného svetla.
- Pásma pochádzajú zo staršej britskej normy (BS 8206-2), uvádzané ako orientačné, nikdy ako splnené alebo nesplnené.
