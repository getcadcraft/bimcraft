---
title: Otvorenie scény v inom programe
summary: Uložte scénu ako súbor USD alebo glTF pre ľubovoľný program, ktorý ich číta, alebo ju otvorte zo Studia v programe na tomto počítači.
keywords: otvoriť v, usd, gltf, glb, export, program na vykreslenie, archviz, studio, usdview, odoslať, odovzdanie, balík, priečinok unreal
from: 0a6559ee
---

Vyberte položku **Otvoriť v** v zozname motorov v {{ui:Vykresliť}} a scénu odošlite do iného programu. Do modelu sa nič nevráti.

## Súbor pre ľubovoľný program

- **Súbor USD** uloží scénu ako `.usdc` (alebo `.usdz`, keď model obsahuje obrázky): [rovnaký súbor ako Uložiť ako USD](topic:usd), s materiálmi, svetlami a kamerami. Zachováva inštancovanie a presné hodnoty materiálov. Väčšina vykresľovačov, herných motorov a prehliadačov číta USD.
- **Súbor glTF (.glb)** uloží ľahší súbor glTF 2.0 s materiálmi, textúrami a svetlami; čo obsahuje a čo vynecháva, pozri [Odoslanie modelu do vykresľovacieho programu](topic:model-for-rendering).

- **Priečinok projektu Unreal (.zip)** uloží priečinok, ktorý zapíše [Odoslanie scény do herného motora](topic:render-unreal), pre projekt na ľubovoľnom počítači.

Všetky tri fungujú v prehliadači aj v Studiu.

## V Studiu: otvorenie v programe

Studio vypíše programy, ktoré nájde na tomto počítači a ktoré dokážu scénu otvoriť: usdview, ak je v vašej ceste pre vyhľadávanie, a vlastný program počítača pre daný typ súboru. Vyberte jeden, pri programe, ktorý číta USD aj glTF, vyberte USD alebo glTF, a kliknite na {{ui:Vykresliť}}. Studio zapíše balík do nového priečinka v Dokumentoch (`CadCraft hand-off`; nič sa neprepíše, každé odoslanie dostane vlastný priečinok), spustí na ňom program a potom povie, kde sú súbory.

| Program | Najlepšie číta |
|---|---|
| usdview | USD |
| Vlastný program počítača | Čokoľvek, čo má počítač pre daný typ súboru |

Studio spúšťa iba programy z tohto pevného zoznamu; nespustí nič, čo si stránka vyžiada menom, a nikdy nespustí program pod licenciou GNU GPL (pozri [Vykreslenie obrazu iným programom](topic:render-other-program#programs-cadcraft-never-runs)). Každý program, ktorý číta USD alebo glTF, otvorí súbor z časti **Súbor pre ľubovoľný program** vyššie.

:::note
Twinmotion, Enscape a ďalšie vizualizačné programy nie sú v zozname: CadCraft s nimi nebol overený a nevyjadruje sa k nim. Súbor glTF alebo USD odtiaľto je vstupnou cestou; pozri poznámky o [pluginových vykresľovačoch](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
