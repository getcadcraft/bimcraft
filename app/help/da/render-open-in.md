---
title: Åbn scenen i et andet program
summary: Gem scenen som en USD-fil eller en glTF-fil til ethvert program, der læser dem, eller åbn den fra Studio i et program på denne computer.
keywords: åbn i, usd, gltf, glb, eksport, renderingsprogram, archviz, studio, usdview, send, overdragelse, pakke, unreal-mappe
from: 0a6559ee
---

Vælg et **Åbn i**-punkt i motorlisten i {{ui:Render}} for at tage scenen med til et andet program. Intet kommer tilbage til modellen.

## En fil til ethvert program

- **USD-fil** gemmer scenen som `.usdc` (eller `.usdz`, når modellen har billeder): [den samme fil som Gem som USD](topic:usd), med materialer, lamper og kameraer. Den bevarer instancing og de præcise materialeværdier. De fleste renderere, spilmotorer og fremvisere læser USD.
- **glTF-fil (.glb)** gemmer den lettere glTF 2.0-fil med materialer, teksturer og lamper; se [Send modellen til et renderingsprogram](topic:model-for-rendering) for, hvad den medtager og udelader.

- **Unreal-projektmappe (.zip)** gemmer den mappe, som [Send scenen til en spilmotor](topic:render-unreal) skriver, til et projekt på en vilkårlig computer.

Alle tre virker i browseren og i Studio.

## I Studio: åbn den i et program

Studio lister de programmer, den finder på denne computer, der kan åbne scenen: usdview, hvis det er på din søgesti, og computerens eget program for filtypen. Vælg et, vælg USD eller glTF, hvor det læser begge, og klik på {{ui:Render}}. Studio skriver pakken i en ny mappe under Dokumenter (`CadCraft hand-off`; intet overskrives, og hver afsendelse får sin egen mappe), starter programmet på den og fortæller, hvor filerne ligger.

| Program | Læser bedst |
|---|---|
| usdview | USD |
| Computerens eget program | Det computeren har til filtypen |

Studio starter kun programmer fra denne faste liste; den kører ikke noget, siden beder om ved navn, og den starter aldrig et program under GNU GPL-licensen (se [Tegn billedet med et andet program](topic:render-other-program#programs-cadcraft-never-runs)). Ethvert program, der læser USD eller glTF, åbner filen fra **En fil til ethvert program** ovenfor.

:::note
Twinmotion, Enscape og andre visualiseringsprogrammer er ikke på listen: CadCraft er ikke testet med dem, og der fremsættes ingen påstand om dem. En glTF- eller USD-fil herfra er vejen ind; se noterne om [plug-in-renderere](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
