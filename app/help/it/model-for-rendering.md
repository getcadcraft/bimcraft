---
title: Inviare il modello a un programma di rendering
summary: Salvare ciò che mostra la vista 3D come modello glTF (.glb) con materiali, texture e lampade, per i programmi di rendering e visualizzazione che leggono glTF.
keywords: glb, gltf, gl transmission format, esporta, rendering, render, visualizzazione, tempo reale, archviz, materiali, texture, lampade, luci, asset, asset personalizzato
from: e62d57dc
---

{{ui:Per il rendering}} sulla barra degli strumenti salva ciò che mostra la vista 3D come un unico file **.glb** (glTF 2.0, il formato aperto del Khronos Group). I programmi di rendering che leggono glTF lo aprono con i materiali e le lampade del modello. Twinmotion elenca glTF e GLB tra i file di geometria che importa e ne mantiene le luci (documentazione di Epic, "Importing geometry in Twinmotion"): usare {{ui:Per il rendering}} e importare lì il .glb. Non si carica nulla: il file viene creato su questo computer.

## Salvarlo

1. Aprire il modello IFC e impostare la vista 3D: nascondere i piani, gli elementi o i modelli collegati che non servono, e [dipingere i materiali](topic:paint-materials) che si vogliono vedere.
2. Fare clic su {{ui:Per il rendering}} (oppure digitare `GLB`).
3. Il file viene scaricato come "<nome del modello>.glb". La barra di stato indica quanti triangoli, materiali e lampade contiene.

## Cosa contiene il file

- **Geometria** di ogni elemento mostrato dalla vista 3D, in metri, con Y in alto (assi propri di glTF). Un oggetto per piano e materiale, chiamato "Level 1 — Brick, red", così nel programma di rendering si può scegliere un materiale e sostituirlo con il proprio.
- **Materiali:** ogni colore con l'aspetto scelto in [Render](topic:render) (opaco, satinato, lucido, metallo, vetro…), e ogni materiale della libreria dipinto con il suo colore, la sua rugosità e la sua **texture** (l'immagine è nel file, scalata alla dimensione reale: un mattone ha la dimensione di un mattone). Il vetro è trasparente.
- **Lampade:** ogni apparecchio luminoso acceso in Render › Lampade, come luce puntiforme o faretto, con la sua luminosità (lumen convertiti in candela), il colore e l'angolo del fascio.
- **Dove si trova il sito:** latitudine e longitudine del sito sono scritte nel file come riferimento. I programmi di rendering hanno un proprio sole: inserire lì il luogo.

## Cosa lascia fuori

- Il taglio di sezione (vanno inseriti interi elementi) e gli elementi mostrati in trasparenza (vengono esclusi).
- Oggetti singoli per ogni elemento (al loro posto, un oggetto per piano e materiale), proprietà IFC, mappe bump, viste salvate e percorsi registrati.
- Spigoli e sfondo.

## Enscape e altri renderer a plug-in

Enscape funziona all'interno di un altro programma di progettazione e non ha un file da aprire per un intero progetto. Due modi:

- Aprire l'**IFC** del modello (File › Salva) nel programma in cui gira Enscape; la maggior parte legge IFC. I colori vengono mantenuti; i materiali della libreria arrivano come colori.
- Importare una **piccola parte** (un mobile, un apparecchio) come asset personalizzato: prima isolarla, poi fare clic su {{ui:Per Enscape (.gltf)}}. La libreria di asset personalizzati di Enscape elenca file .gltf, .obj e .fbx, non .glb; per questo il pulsante salva la stessa scena come un unico **.gltf** autonomo (i dati binari e le immagini sono nel file; non serve copiare altro insieme ad esso). Enscape consiglia asset piccoli (sotto circa 20.000 triangoli).

:::note
In CadCraft Studio lo stesso file glTF (e un file USD) si può salvare anche da {{ui:Render}} › Motore › **File glTF** / **File USD**, oppure aprire direttamente in un programma su questo computer: vedi [Aprire la scena in un altro programma](topic:render-open-in). Un plug-in o un collegamento in tempo reale per Enscape o Twinmotion non è ancora implementato. I formati FBX e Datasmith non hanno una specifica pubblicata, quindi BimCraft non li scrive; glTF è la via aperta.
:::
