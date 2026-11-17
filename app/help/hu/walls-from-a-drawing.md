---
title: Falak lerajzolt alaprajzból
summary: Alakítson DWG- vagy DXF-alaprajzot szinten lévő falakká, ajtókká és ablakokká, és tartsa meg a rajzot az alaprajz alatt hivatkozásként.
keywords: dwg, dxf, követés, alaprajz importálása, átalakítás, CAD-ból BIM, 2D-ből 3D, vonalakból falak, rétegek, blokkok, ajtók blokkokból, alátét, hivatkozási rajz, háttér, külső hivatkozás, xref, rajzoló program
from: 3bf213f1
---

## Mit fog csinálni

Használja azt az alaprajzot, amelyet Ön (vagy más) a rajzoló programban készített a modell kiindulópontjaként: a falvonalai falakká, az ajtó- és ablakblokkjai ajtókká és ablakokká válnak.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, és válassza ki azt a szintet, amelyet a rajz mutat az alaprajz szintlistájában.
2. Válassza a {{ui:Build}} › {{ui:Rajzból…}} parancsot, majd a {{ui:Rajz kiválasztása…}} gombot, és válassza ki a DWG- vagy DXF-fájlt.
3. A párbeszédpanelen:
   - **A rajz mértékegységei** a rajzból származnak; válasszon másikat, ha rosszak (a lábban rajzolt alaprajz hüvelykként olvasva tizenkétszer túl kicsi lesz).
   - **Falrétegek a falakkal**: jelölje be azokat a rétegeket, amelyeken a falvonalak vannak. A nevükben „wall” vagy „fal” szót tartalmazó rétegek automatikusan be vannak jelölve.
   - **A vonalak**: **minden fal mindkét oldala** (ahogy az alaprajzokat általában rajzolják: a 600 mm-nél közelebbi párhuzamos vonalpárokból egy fal lesz, amely annyi vastag, mint a köztük lévő rés), **a falak tengelyvonalai**, vagy **egy oldal**, a fal bal vagy jobb oldalán. Tengelyvonal vagy egy oldal esetén a falfajta adja a vastagságot.
   - **Falfajta** és **Falmagasság**, ahogy a {{ui:Fal}} eszköznél.
   - **Blokkok**: minden olyan blokkhoz, amely ajtó vagy ablak, válasszon ajtó- vagy ablaktípust, vagy hagyja ki. Azok a blokkok, amelyek nevében „door” vagy „window” szerepel, automatikusan ki vannak választva. Mindegyik abba a falba kerül, amelyen ül, a fal mentén akkora szélességgel, mint a blokk; az ajtó az ívének rajzolt oldala felé nyílik.
   - **Hova kerül**: a rajz saját koordinátáinál, vagy a bal alsó sarkával az alaprajz origóján.
   - **A rajz megtartása az alaprajz alatt**: hagyja bejelölve, hogy a készített elemek alatt vékony vonalként lássa a rajzot.
4. A választások alatti sor megmondja, hány fal, ajtó és ablak lesz. Kattintson az {{ui:Elkészítés}} gombra.

## Mit fog látni

- A falak, ajtók és ablakok a szinten, ahol találkoznak, összekapcsolva, a bezárt helyiségekkel; mindez egy lépés, így a {{key:Mod+Z}} visszavonja.
- A rajz vékony vonalként az alaprajz alatt. A {{ui:Build}} › {{ui:Rajzból…}} listázza a szinten megtartott rajzokat, mindegyik mellett {{ui:Eltávolítás}} gombbal; eltávolításuk a falakat megtartja.
- Az IFC-fájlban a megtartott rajz a szint megjegyzése (a vonalaival), így más BIM-programok is megjelenítik.

:::note
PDF vagy szkennelt rajz is működik: lásd [Falak tervsorozatból](topic:walls-from-plans). Az ívek kimaradnak (a BimCraft egyenes falakat rajzol), ugyanígy a blokkon belüli vonalak is. A „mindkét oldal” módban a párjuk nélküli vonalakat a párbeszédpanel számolja, és kihagyja: ezeket a falakat a {{ui:Fal}} eszközzel rajzolja meg, vagy rendezze a {{ui:Módosítás}} › {{ui:Vágás / nyújtás}} segítségével (lásd [Falak vágása, nyújtása és összekapcsolása](topic:trim-extend-walls)).
:::

:::tip
Szkennelés fölé rajzolt a rajzoló programban? Nyissa meg itt is a szkennelést, és ellenőrizze vele a falakat: lásd [Modell szkennelésből](topic:model-from-a-scan).
:::
