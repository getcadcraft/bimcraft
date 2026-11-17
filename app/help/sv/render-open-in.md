---
title: Öppna scenen i ett annat program
summary: Spara scenen som en USD-fil eller glTF-fil för alla program som läser dem, eller öppna den från Studio i ett program på den här datorn.
keywords: öppna i, usd, gltf, glb, export, renderingsprogram, archviz, studio, usdview, skicka, överlämning, paket, unreal-mapp
from: 0a6559ee
---

Välj en post **Öppna i** i motorlistan för {{ui:Rendera}} för att ta scenen till ett annat program. Inget kommer tillbaka till modellen.

## En fil för alla program

- **USD-fil** sparar scenen som `.usdc` (eller `.usdz` när modellen har bilder): [samma fil som Spara som USD](topic:usd), med material, lampor och kameror. Den behåller instansering och de exakta materialvärdena. De flesta renderare, spelmotorer och visare läser USD.
- **glTF-fil (.glb)** sparar den lättare glTF 2.0-filen med material, texturer och lampor; se [Skicka modellen till ett renderingsprogram](topic:model-for-rendering) för vad den innehåller och vad den utelämnar.
- **Unreal-projektmapp (.zip)** sparar mappen som [Skicka scenen till en spelmotor](topic:render-unreal) skriver, för ett projekt på valfri dator.

Alla tre fungerar i webbläsaren och i Studio.

## I Studio: öppna den i ett program

Studio listar de program den hittar på den här datorn som kan öppna scenen: usdview om det finns på din sökväg, och datorns egna program för filtypen. Välj ett, välj USD eller glTF där det läser båda, och klicka på {{ui:Rendera}}. Studio skriver paketet i en ny mapp under Dokument (`CadCraft hand-off`; ingenting skrivs över, varje sändning får sin egen mapp) och startar programmet på den, och säger sedan var filerna finns.

| Program | Läser bäst |
|---|---|
| usdview | USD |
| Datorns eget program | Det datorn har för filtypen |

Studio startar bara program från den här fasta listan; den kör inget som sidan begär med namn, och den startar aldrig ett program under GNU GPL-licensen (se [Rita bilden med ett annat program](topic:render-other-program#programs-cadcraft-never-runs)). Alla program som läser USD eller glTF öppnar filen från **En fil för alla program** ovan.

:::note
Twinmotion, Enscape och andra visualiseringsprogram finns inte i listan: CadCraft har inte testat dem och gör inga påståenden om dem. En glTF- eller USD-fil härifrån är vägen in; se anteckningarna om [insticksrenderare](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
