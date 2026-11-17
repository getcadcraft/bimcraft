---
title: Odošlite model do programu na vykreslenie
summary: Uložte to, čo zobrazuje 3D pohľad, ako model glTF (.glb) s jeho materiálmi, textúrami a svetlami pre vykresľovacie a vizualizačné programy, ktoré čítajú glTF.
keywords: glb, gltf, gl transmission format, export, vykreslenie, vykresliť, vizualizácia, v reálnom čase, archviz, materiály, textúry, svietidlá, svetlá, asset, vlastný asset
from: e62d57dc
---

{{ui:Na vykreslenie}} na paneli nástrojov uloží to, čo zobrazuje 3D pohľad, ako jeden súbor **.glb** (glTF 2.0, otvorený formát skupiny Khronos Group). Vykresľovacie programy, ktoré čítajú glTF, ho otvoria s materiálmi a svetlami modelu; Twinmotion uvádza glTF a GLB medzi geometrickými súbormi, ktoré importuje, a zachováva ich svetlá (dokumentácia spoločnosti Epic, "Importing geometry in Twinmotion"): použite {{ui:Na vykreslenie}} a v programe Twinmotion importujte .glb. Nič sa nenahráva: súbor sa vytvára na tomto počítači.

## Uloženie

1. Otvorte model IFC a nastavte 3D pohľad: skryte podlažia, prvky alebo prepojené modely, ktoré nechcete, a [natrite materiály](topic:paint-materials), ktoré chcete vidieť.
2. Kliknite na {{ui:Na vykreslenie}} (alebo napíšte `GLB`).
3. Súbor sa stiahne ako "<názov modelu>.glb". Stavový riadok uvedie, koľko trojuholníkov, materiálov a svetiel obsahuje.

## Čo súbor obsahuje

- **Geometria** každého prvku, ktorý 3D pohľad zobrazuje, v metroch, s osou Y smerom nahor (vlastné osi glTF). Jeden objekt pre každé podlažie a materiál, pomenovaný "Level 1 — Brick, red", aby ste mohli v programe na vykreslenie vybrať materiál a nahradiť ho vlastným.
- **Materiály:** každá farba so vzhľadom, ktorý ste pre ňu zvolili v [Vykreslenie](topic:render) (matný, saténový, lesklý, kovový, sklo…), a každý natretý materiál knižnice s farbou, drsnosťou a **textúrou** (jej obrázok je v súbore, zmenšený na skutočnú veľkosť: tehla má veľkosť tehly). Sklo je priehľadné.
- **Svietidlá:** každé svietidlo, ktoré je zapnuté v {{ui:Vykresliť}} › Svietidlá, ako bodové alebo reflektorové svetlo s jeho jasom (lúmeny prepočítané na kandely), farbou a uhlom zväzku.
- **Poloha staveniska:** zemepisná šírka a dĺžka staveniska sú zapísané v súbore na referenciu. Programy na vykreslenie majú vlastné slnko: zadajte tam miesto.

## Čo vynecháva

- Rez (zapisujú sa celé prvky) a prvky zobrazené priehľadne (vynechajú sa).
- Objekty prvok po prvku (namiesto toho jeden objekt pre každé podlažie a materiál), vlastnosti IFC, bump mapy, uložené pohľady a zaznamenané prechádzky.
- Hrany a pozadie.

## Enscape a ďalšie vykresľovače pluginov

Enscape beží vo vnútri iného projektantského programu a nemá súbor, ktorý by otvoril celý projekt. Sú dva spôsoby:

- Otvorte **IFC** modelu (Súbor › Uložiť) v programe, v ktorom beží Enscape; väčšina z nich číta IFC. Farby sa prenesú; materiály knižnice prídu ako svoje farby.
- Prineste **malú časť** (nábytok, svietidlo) ako vlastný asset: najprv ju izolujte a potom kliknite na {{ui:Pre Enscape (.gltf)}}. Knižnica vlastných assetov Enscape ponúka súbory .gltf, .obj a .fbx, nie .glb, takže toto tlačidlo uloží rovnakú scénu ako jeden samostatný súbor **.gltf** (binárne dáta a obrázky sú vnútri súboru; nič iné s ním kopírovať netreba). Enscape odporúča malé assety (pod asi 20,000 trojuholníkov).

:::note
V CadCraft Studio sa rovnaký súbor glTF (a súbor USD) dá uložiť aj z {{ui:Vykresliť}} › Motor › **Súbor glTF** / **Súbor USD**, alebo otvoriť priamo v programe na tomto počítači: pozri [Otvorenie scény v inom programe](topic:render-open-in). Plugin alebo živé prepojenie pre Enscape alebo Twinmotion ešte nie je hotové. Formáty FBX a Datasmith nemajú zverejnenú špecifikáciu, takže ich BimCraft nezapisuje; otvorenou cestou je glTF.
:::
