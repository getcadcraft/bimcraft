---
title: Åpne scenen i et annet program
summary: Lagre scenen som en USD-fil eller en glTF-fil for ethvert program som leser dem, eller åpne den fra Studio i et program på denne datamaskinen.
keywords: åpne i, usd, gltf, glb, eksport, renderingsprogram, archviz, studio, usdview, send, overlevering, pakke, unreal-mappe
from: 0a6559ee
---

Velg et **Åpne i**-valg i motorlisten i {{ui:Render}} for å ta scenen med til et annet program. Ingenting kommer tilbake til modellen.

## En fil for ethvert program

- **USD-fil** lagrer scenen som `.usdc` (eller `.usdz` når modellen har bilder). Det er [den samme filen som Lagre som USD](topic:usd), med materialer, lamper og kameraer. Den beholder instancing og de nøyaktige materialverdiene. De fleste renderere, spillmotorer og visningsprogrammer leser USD.
- **glTF-fil (.glb)** lagrer den lettere glTF 2.0-filen med materialer, teksturer og lamper. Se [Send modellen til et renderingsprogram](topic:model-for-rendering) for hva den tar med og hva den utelater.
- **Unreal-prosjektmappe (.zip)** lagrer mappen som [Send scenen til en spillmotor](topic:render-unreal) skriver, for et prosjekt på en hvilken som helst datamaskin.

Alle tre fungerer i nettleseren og i Studio.

## I Studio: åpne den i et program

Studio lister programmene den finner på denne datamaskinen, og som kan åpne scenen: usdview hvis det er på søkestien din, og datamaskinens eget program for filtypen. Velg ett, velg USD eller glTF der det leser begge, og klikk {{ui:Render}}. Studio skriver pakken inn i en ny mappe under Dokumenter (`CadCraft hand-off`). Ingenting overskrives, og hver sending får sin egen mappe. Deretter starter Studio programmet på den og sier hvor filene er.

| Program | Leser best |
|---|---|
| usdview | USD |
| Datamaskinens eget program | Det datamaskinen har for filtypen |

Studio starter bare programmer fra denne faste listen. Den kjører ikke noe siden ber om ved navn, og den starter aldri et program under GNU GPL-lisensen (se [Tegn bildet med et annet program](topic:render-other-program#programs-cadcraft-never-runs)). Ethvert program som leser USD eller glTF, åpner filen fra **En fil for ethvert program** over.

:::note
Twinmotion, Enscape og andre visualiseringsprogrammer står ikke på listen. CadCraft er ikke testet med dem, og gir ingen påstander om dem. En glTF- eller USD-fil herfra er veien inn. Se merknadene om [plugin-renderere](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
