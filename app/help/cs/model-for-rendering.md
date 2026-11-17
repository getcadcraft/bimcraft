---
title: Odeslání modelu do programu pro vykreslování
summary: Uložte to, co ukazuje 3D pohled, jako model glTF (.glb) s materiály, texturami a svítidly, pro vykreslovací a vizualizační programy, které čtou glTF.
keywords: glb, gltf, gl transmission format, export, vykreslování, render, vizualizace, v reálném čase, archviz, materiály, textury, svítidla, světla, asset, vlastní asset
from: e62d57dc
---

{{ui:Pro vykreslování}} na panelu nástrojů uloží to, co ukazuje 3D pohled, jako jeden soubor **.glb** (glTF 2.0, otevřený formát Khronos Group). Vykreslovací programy, které čtou glTF, jej otevřou s materiály modelu a svítidly; Twinmotion mezi geometrickými soubory, které importuje, uvádí glTF a GLB a zachovává jejich světla (dokumentace Epic, "Import geometrie v Twinmotion"): použijte {{ui:Pro vykreslování}} a soubor .glb tam importujte. Nic se nenahrává: soubor vzniká na tomto počítači.

## Uložení

1. Otevřete model IFC a nastavte 3D pohled: skryjte podlaží, prvky nebo připojené modely, které nechcete, a [nabarvěte materiály](topic:paint-materials), které chcete vidět.
2. Klikněte na {{ui:Pro vykreslování}} (nebo napište `GLB`).
3. Soubor se stáhne jako "<název modelu>.glb". Stavový řádek uvádí, kolik trojúhelníků, materiálů a svítidel obsahuje.

## Co soubor obsahuje

- **Geometrie** každého prvku, který 3D pohled zobrazuje, v metrech, s osou Y nahoru (vlastní osy glTF). Jeden objekt na podlaží a materiál, pojmenovaný "Level 1 — Brick, red", takže v programu pro vykreslování můžete vybrat materiál a nahradit jej vlastním.
- **Materiály:** každá barva se vzhledem, který jste jí zvolili v [Vykreslení](topic:render) (matný, saténový, lesklý, kovový, sklo…), a každý nabarvený materiál knihovny s barvou, drsností a **texturou** (její obrázek je v souboru, zmenšený na skutečnou velikost: cihla má velikost cihly). Sklo je průhledné.
- **Svítidla:** každé světelné těleso zapnuté v Vykreslit › Svítidla, jako bodové nebo reflektorové světlo se svým jasem (lumeny převedené na kandely), barvou a úhlem svazku.
- **Kde je pozemek:** zeměpisná šířka a délka pozemku jsou zapsány v souboru pro informaci. Programy pro vykreslování mají vlastní slunce: zadejte tam místo.

## Co vynechává

- Řez (celé prvky se zahrnou) a prvky zobrazené průhledně (vynechají se).
- Objekty prvek po prvku (místo nich jeden objekt na podlaží a materiál), vlastnosti IFC, bump mapy, uložené pohledy a zaznamenané procházky.
- Hrany a pozadí.

## Enscape a ostatní vykreslovače jako zásuvné moduly

Enscape běží uvnitř jiného návrhového programu a nemá soubor, který by otevřel celý projekt. Dva způsoby:

- Otevřete **IFC** modelu (Soubor › Uložit) v programu, ve kterém Enscape běží; většina jich čte IFC. Barvy se přenesou; materiály knihovny přijdou jako jejich barvy.
- Přineste **malou část** (nábytek, svítidlo) jako vlastní asset: nejprve ji izolujte a pak klikněte na {{ui:Pro Enscape (.gltf)}}. Knihovna vlastních assetů v Enscape vypisuje soubory .gltf, .obj a .fbx, ne .glb, takže toto tlačítko uloží stejnou scénu jako jeden samostatný soubor **.gltf** (binární data a obrázky jsou uvnitř souboru; není třeba nic dalšího kopírovat). Enscape doporučuje malé assety (pod zhruba 20 000 trojúhelníků).

:::note
V CadCraft Studiu lze stejný soubor glTF (a soubor USD) uložit také z {{ui:Vykreslit}} › Engine › **Soubor glTF** / **Soubor USD**, nebo jej otevřít přímo v programu na tomto počítači: viz [Otevření scény v jiném programu](topic:render-open-in). Zásuvný modul nebo živé propojení pro Enscape nebo Twinmotion ještě není hotové. Formáty FBX a Datasmith nemají zveřejněnou specifikaci, takže je BimCraft nezapisuje; glTF je otevřená cesta.
:::
