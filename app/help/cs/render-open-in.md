---
title: Otevření scény v jiném programu
summary: Uložte scénu jako soubor USD nebo glTF pro libovolný program, který je čte, nebo ji ze Studia otevřete v programu na tomto počítači.
keywords: otevřít v, usd, gltf, glb, export, program pro vykreslování, archviz, studio, usdview, odeslat, předání, balíček, složka unreal
from: 0a6559ee
---

Vyberte položku **Otevřít v** v seznamu Motor v {{ui:Vykreslit}}, abyste scénu převzali do jiného programu. Nic se nevrací do modelu.

## Soubor pro libovolný program

- **Soubor USD** uloží scénu jako `.usdc` (nebo `.usdz`, když model nese obrázky): [stejný soubor jako Uložit jako USD](topic:usd), s materiály, svítidly a kamerami. Zachovává instancování a přesné hodnoty materiálů. Většina vykreslovačů, herních motorů a prohlížečů čte USD.
- **Soubor glTF (.glb)** uloží odlehčený soubor glTF 2.0 s materiály, texturami a svítidly; co obsahuje a co vynechává, viz [Odeslání modelu do vykreslovacího programu](topic:model-for-rendering).
- **Složka projektu Unreal (.zip)** uloží složku, kterou zapisuje [Odeslání scény do herního motoru](topic:render-unreal), pro projekt na libovolném počítači.

Všechny tři fungují v prohlížeči i ve Studiu.

## Ve Studiu: otevřít v programu

Studio vypíše programy nalezené na tomto počítači, které umějí scénu otevřít: usdview, pokud je ve vašem vyhledávací cestě, a výchozí program počítače pro daný typ souboru. Vyberte jeden, u programu, který čte USD i glTF, zvolte formát, a klikněte na {{ui:Vykreslit}}. Studio zapíše balíček do nové složky v Dokumentech (`CadCraft hand-off`; nic se nepřepíše, každé odeslání má vlastní složku) a spustí na ní program, pak oznámí, kde soubory jsou.

| Program | Nejlépe čte |
|---|---|
| usdview | USD |
| Výchozí program počítače | Cokoli, co počítač má pro daný typ souboru |

Studio spouští jen programy z tohoto pevného seznamu; nespustí nic, co stránka požaduje jménem, a nikdy nespustí program pod licencí GNU GPL (viz [Nakreslení obrazu jiným programem](topic:render-other-program#programs-cadcraft-never-runs)). Libovolný program, který čte USD nebo glTF, otevře soubor z oddílu **Soubor pro libovolný program** výše.

:::note
Twinmotion, Enscape a další vizualizační programy v seznamu nejsou: CadCraft s nimi nebyl ověřen a o nich netvrdí nic. Vstupní cestou je soubor glTF nebo USD odsud; viz poznámky k [zásuvným vykreslovačům](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
