---
title: Falak tervsorozatból (PDF vagy szkennelés)
summary: Alakítsa egy PDF lapjait vagy egy szkennelt rajzot falakká, ajtókká és ablakokká, minden lap egy szintnek felel meg, és a lap az alaprajza alatt marad.
keywords: pdf, tervek, tervsorozat, szkennelés, szkennelt rajz, tiff, követés, falak PDF-ből, falak szkennelésből, szintek, lapok, méretarány, ajtók, ablakok, nyitási irány, párkány, alátét
from: b70d9db7
---

## Mit fog csinálni

Kezdjen modellt a papíron meglévő tervekből: egy PDF-ből (vonalas rajzként, vagy PDF-en belüli szkennelésként) vagy egy szkennelésből (PNG, JPEG, TIFF egy vagy több oldallal). Minden oldal egy szint falai, ajtói és ablakai lesz.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} funkciót. Válassza a {{ui:Build}} › {{ui:Rajzból…}} parancsot, majd a {{ui:Rajz kiválasztása…}} gombot, és válassza ki a PDF-et vagy a szkennelést.
2. **Oldalak és szintek.** Minden oldal fel van sorolva azzal, hogy mi (**vonalas rajz**, vagy **kép (követve)**), és a szinttel, ahová kerül: az Ön egyik szintje, **egy új szint a többi felett**, vagy **az oldal kimarad**. Az oldalak sorrendben párosulnak a szintjeivel; bármelyiket megváltoztathatja.
3. **Méretarány.** PDF esetén adja meg, hogyan lett rajzolva (**1 : 100**, **1 : 50**…). Másnál, vagy ha nem tudja, válassza az **Ismert távolságból** lehetőséget: kattintson egy méretvonal vagy méretarány-sáv két végpontjára az előnézeten, majd írja be a valódi távolságot. Minden oldal ugyanazt a méretarányt használja.
4. Válassza ki a **falfajtát** és az **új szint magasságát**. Hagyja bejelölve a **Minden oldal a szintje alaprajza alatt** lehetőséget, hogy minden oldalt vékony vonalként lássa a saját alaprajza alatt.
5. A választások alatti sor megmondja, hány fal, ajtó és ablak lesz, és hány szinten. Kattintson az {{ui:Elkészítés}} gombra.

## Hogyan olvassa az oldalt

- **Falak** azokból a párhuzamos vonalpárokból jönnek, amelyek legfeljebb 600 mm-re vannak egymástól (a fal két oldala); a fal annyi vastag, mint a rés. A kitöltéseket és a feliratokat kihagyja.
- **Ajtók és ablakok.** A falban lévő rés (500–2600 mm), mellette nyitási ívvel, ajtó: a rés egyik végén van a zsanérja, és az ív oldala felé nyílik. A rés vagy fal, amelyben párkány-vonalak vannak, ablak. Ahol nincs egyik sem, 1300 mm-ig ajtó, e fölött ablak.
- **A szkennelés** először kiegyenesedik, ha ferdén szkennelték (ezt a párbeszédpanel jelzi), fekete-fehérré alakul, megtisztul a foltoktól, és követve lesz. A **képként szereplő PDF-oldal** először kirajzolódik, majd ugyanígy kezelik. A követés minden vonal közepét megkeresi, és ehhez egyenes vonalakat és íveket illeszt; nem használ hálózatot és betanított modellt.
- **A helyiségek** magától követik a falak által alkotott zárt hurkokat. Ha a PDF tartalmaz szöveget, a helyiség nevét a benne lévő felirat adja (a legnagyobbé; a méret, a méretarány vagy a lapszám nem név). A szkennelésben nincs szöveg, így helyiségeik a programtól kapott neveiket tartják meg.
- **Minden, amit az oldalról olvastak, ellenőrizetlen**: minden fal, ajtó, ablak és helyiség szaggatott keretet és „?” jelet kap az alaprajzon, amíg Ön ellenőrizte. Jelölje ki azt, amit ellenőrzött, és használja a {{ui:Eszközök}} › {{ui:Megjelölés ellenőrzöttként}} parancsot. Lásd [Elemek megjelölése ellenőrzöttként vagy helyszínen igazoltként](topic:verification).

## Mit fog látni

- A falak, ajtók, ablakok és helyiségek minden szinten, és az esetleges új szintek, mind egy lépésben: a {{key:Mod+Z}} mindent visszavon.
- Minden oldal vékony vonalként a szintje alaprajza alatt, a {{ui:Build}} › {{ui:Rajzból…}} alatt listázva, {{ui:Eltávolítás}} gombbal.

:::note
Ez az, amit a vonalak adtak, az oldal pontosságával. A szkennelés elveszíthet egy halvány falat, összekapcsolhat két nagyon közeli falat, vagy falat talál egy foltban; a nyitási ív nélküli rés egyszerű ajtó lesz. Ellenőrizze minden szintet az oldallal szemben, mielőtt rájuk hagyatkozik, és javítsa a hibásakat a {{ui:Fal}}, {{ui:Ajtó}} és {{ui:Ablak}} eszközökkel.
:::
