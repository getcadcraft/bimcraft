---
title: A nappali fény becslése minden helyiségben
summary: Minden helyiség átlagos nappali fényfaktora az ablakaiból, belső felületeiből és az ablakok által látott égboltból, a modellben mért égboltszöggel. Korai tervezési becslés, nem szimuláció és nem előírás-ellenőrzés.
keywords: nappali fény, nappali fényfaktor, átlagos nappali fényfaktor, adf, függőleges égboltkomponens, vsc, napenergia-nyereség, nap, g-érték, rács, osztott fluxus, égboltkomponens, belsőleg visszavert komponens, természetes fény, ablak, üvegezés, égboltszög, akadály, árnyékolás, erkély, túlnyúlás, visszaverődés, áteresztés, korai tervezés, elemzés, helyiségek, terek
from: 5f300a78
---

A jobb oldali panel {{ui:Természetes fény}} lapja minden helyiség **átlagos nappali fényfaktorát** számítja ki: a borús égboltról érkező fény mekkora része jut át átlagosan a helyiségbe, százalékban. A nyitott IFC-modell helyiségeit (tereit) és ablakait olvassa be. A modell nem változik, és semmi sem kerül feltöltésre.

:::warning
Ennek a lapnak minden eleme **tervezési segédeszköz, nem megfelelőségi számítás**: közzétett módszerekkel készült korai tervezési becslés, **nem szimuláció** és **nem ellenőrzés** épületszabályzat vagy szabvány szerint. A BS EN 17037, a LEED, a BREEAM és az energetikai előírások a hely éghajlatával készített nappali fény-szimulációt kérnek; ezekhez használjon nappali fény-szimulációs programot.
:::

## Számítás

1. Nyisson meg egy IFC-modellt, amelyben vannak helyiségek (terek) és ablakok. Az itt rajzolt modelleknek minden zárt falkészlet belsejében van egy helyiségük.
2. Nyissa meg a {{ui:Természetes fény}} lapot, és kattintson a {{ui:Számítás}} gombra.
3. Minden helyiség megmutatja nappali fényfaktorát és egy sávot: 2% alatt, 2–5%, 5% vagy több. Kattintson egy helyiségre a felületei és minden ablak területének és égboltszögének megtekintéséhez; a helyiség és az ablakai kijelölődnek a modellben.

Módosítson egy bemenetet, és a számok azonnal követik. A modell megváltoztatása után kattintson a {{ui:Számítás újra}} gombra. A {{ui:CSV}} minden helyiséget elment a számaival és a felhasznált bemenetekkel együtt.

## A képlet

Átlagos nappali fényfaktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), összeadva a helyiség ablakain (Littlefair képlete, a BRE 209, a BS 8206-2 és a CIBSE LG10 szerint):

- **T**, az üveg fényáteresztése (kezdésként 0,7: használja a gyártó adatát).
- **Ag**, az üvegezett terület: minden ablak területe (teljes szélesség × magasság, különben a modellben szereplő méret) × az **üvegezési arány** (kezdésként 0,75: a többi keret).
- **θ**, az ablak által látott égboltszög fokban (lentebb).
- **M**, a karbantartási tényező az üvegen lévő szennyeződésre (kezdésként 1).
- **A**, a helyiség minden belső felülete: padló, falak, mennyezet és ablakok, a helyiség saját alakjából véve.
- **R**, ezek átlagos visszaverődése, területtel súlyozva: padló 0,2, falak 0,5, mennyezet 0,7 kezdésként; az üveg 0,1-nek számít.

## Az égboltszög mérése

Minden ablaknál a BimCraft a modellt egy, az ablakra merőleges függőleges síkkal vágja, az üveg külső síkjától, és a horizontról egyenesen felfelé néz: minden, ami a vágásban az ablak előtt van (szemben lévő épület, felette erkély vagy túlnyúlás, az eresz), elrejt a 90°-ból egy részt. A θ az, ami megmarad. Az ablak maga és a fal, amelyben van, nincs benne. Ezt az ablak szélessége mentén öt helyen végzi el, és átlagot vesz, így egy vékony oszlop a közepe előtt a részét veszi el, nem az egész eget.

Az ablak közepe fölött 8,5 m-rel magasabb és 9,9 m-re lévő épület 40,65°-ot takar el (az a szög, amelynek tangense 8,5 ÷ 9,9), így θ = 49,35°.

## Az egyes ablakok függőleges égboltkomponense

A {{ui:Számítás}} minden ablaknál méri azt is, az egész égboltból mit lát: ugyanazt a függőleges vágást, az ablak előtt lévő minden irányba forgatva (2°-onként, egyik oldaltól a másikig), így a szomszédos épület, egy bordázat vagy egy mély falsík a részét veszi el. Ebből a BimCraft kiszámítja a **függőleges égboltkomponenst (VSC)**: a borús égbolt fényének mekkora része éri az üveget, a nyitott, lapos tető által kapott fény arányában. Az ablak, előtte semmi nélkül, **39,6%**-ot kap, ez a függőleges ablak legtöbbje. A 25°-kal az ablak fölé emelkedő hosszú épület körülbelül **27%**-ot hagy, ezt az angol irányelv (BRE 209) nagyjából irányadó értékként használja. Egy helyiség részletében minden ablak megmutatja a VSC-jét és az **elzáródási szögét** (milyen magasra emelkednek a dolgok közvetlenül előtte).

Az égbolt a CIE szabványos borús égbolt, amely egyenesen fölfelé háromszor világosabb, mint a horizonton; a vágás pedig pontos, semmi sincs mintavételezve.

## A nap az ablakokon át egy adott napon

Nyissa meg a {{ui:Nap az ablakokon át egy adott napon}} lapot, és válasszon dátumot. A BimCraft negyedórás lépésekben követi a napot azon a napon, és minden ablaknál összeadja, mekkora hőt hoz a nap az üvegen át:

- a **közvetlen napsütés**, ha az ablak előtt van, és a modellben semmi sem takarja (ugyanaz a pontos vágás, a nap felé fordítva: az erkély, amely délben a magas nyári napot árnyékolja, beengedi az alacsony téli napot);
- az **égbolt fénye** az üvegen, mínusz amit az ablak nem lát;
- a **talajról visszavert fény** (visszaverődése kezdésként 0,2);
- mindez az üveg **g-értékén** (a napenergia áteresztésének aránya: kezdésként 0,6; használja a gyártó adatát) és az üvegezési arányán keresztül.

Minden helyiség a nap összesített értékét kWh-ban és a csúcsát wattban mutatja, az idővel együtt; a helyiség részlete a napot diagramon rajzolja ki. Az égbolt a Hottel-modell szerinti tiszta égbolt (Duffie & Beckman, *Solar Engineering of Thermal Processes*), a hely és az évszak nyári vagy téli adataival, valamint a telep magasságával. A nap helyzete a NOAA-é. A telep szélességi és hosszúsági foka az IFC telepéből származik, az észak pedig a modell valódi északjából; ha a modellnek nincs telepe, írja be a szélességi és hosszúsági fokot. Az időpontok a standard idő szerint értendők (nyári időszámítás nélkül), abban az időzónában, amelyet megad, különben abban, amelyet a hosszúsági fok sugall.

Kimarad: a felhők (ez egy tiszta nap), az üveg alacsony szögnél kevesebbet enged be, a keretek árnyékolása, a redőnyök, valamint amit a falak és a tető elnyelnek. Az azonos lap hűtési becslése a csúcsértéket használja.

## A nappali fényfaktor rácson

Nyissa meg a {{ui:Világosságtényező rácson}} lapot, és kattintson az {{ui:A rács kiszámítása}} gombra: a BimCraft minden helyiség padlója fölé rácsot rak a munkasík magasságában (kezdésként 0,85 m), a faltól fél méterre befelé, és minden ponton kiszámítja a nappali fényfaktort a **BRE osztott fluxus módszerével**:

- az **égboltkomponens**: a borús égbolt, amelyet a pont az ablaknyíláson át lát, mínusz a keretek;
- a **külsőleg visszavert komponens**: amit a pont az ablakon át a kinti épületekről lát, amelyek a mögöttük lévő égbolt tizedével világítanak (módosítsa az akadály fényerejét, ha sokkal világosabbak vagy sötétebbek);
- a **belsőleg visszavert komponens**: a helyiségben oda-vissza verődő fény a helyiség felületeiből és visszaverődéseiből, az ablakok területéből és abból, mennyi van kívülük (a BRE-képlet, az üveg áteresztésével a feltételezett tiszta üveg helyett).

Minden helyiség megmutatja az átlagát, a legalacsonyabb pontját és azt, hogy területének mekkora része kap 2% vagy annál többet. A helyiség részlete a helyiség alaprajzát rajzolja ki, minden pontot a nappali fényfaktora szerint színezve, az ablakokat pirossal. Hogy bármely számítógépen gyors maradjon, egy helyiség legfeljebb **400 pontot** kap: nagy helyiségben a távolság nő, hogy beleférjen (adjon meg távolságot, ha saját értéket szeretne).

## Mi marad ki

- A tetőablakok (vízszintesen vagy lejtősen fekvő üveg) fel vannak sorolva, de nem számítanak bele: az itteni képletek a falakban lévő ablakokra vonatkoznak.
- Az ablakok, amelyek mögött nincs helyiség (például egy előtér tér nélkül), külön vannak felsorolva.
- Az ablakvájatok (a nyílást a külső síkon veszi fel), a vakító fény, a napos órák és az éghajlat-alapú nappali fény. A BS EN 17037, LEED vagy BREEAM ellenőrzéshez használjon nappali fény-szimulációs programot.
- A sávok régebbi brit irányelvből származnak (BS 8206-2), útmutatóként jelennek meg, soha nem megfelelés vagy elutasítás jelzéseként.
