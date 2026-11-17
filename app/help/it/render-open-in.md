---
title: Aprire la scena in un altro programma
summary: Salvare la scena come file USD o glTF per qualsiasi programma che li legge, oppure aprirla da Studio in un programma su questo computer.
keywords: apri in, usd, gltf, glb, esporta, programma di rendering, archviz, studio, usdview, invia, passaggio, pacchetto, cartella unreal
from: 0a6559ee
---

Scegliere una voce **Apri in** nell'elenco Motore di {{ui:Render}} per portare la scena in un altro programma. Nulla torna al modello.

## Un file per qualsiasi programma

- **File USD** salva la scena come `.usdc` (o `.usdz` quando il modello contiene immagini): lo [stesso file di Salva come USD](topic:usd), con materiali, lampade e camere. Mantiene le istanze e i valori esatti dei materiali. La maggior parte dei renderer, dei motori di gioco e dei visualizzatori legge USD.
- **File glTF (.glb)** salva il file glTF 2.0, più leggero, con materiali, texture e lampade; vedi [Inviare il modello a un programma di rendering](topic:model-for-rendering) per ciò che include e ciò che lascia fuori.

- **Cartella del progetto Unreal (.zip)** salva la cartella che scrive [Inviare la scena a un motore di gioco](topic:render-unreal), per un progetto su qualsiasi computer.

Tutti e tre funzionano nel browser e in Studio.

## In Studio: aprire la scena in un programma

Studio elenca i programmi trovati su questo computer che possono aprire la scena: usdview, se è nel percorso di ricerca, e il programma del computer per quel tipo di file. Scegliere un programma, scegliere USD o glTF dove li legge entrambi, e fare clic su {{ui:Render}}. Studio scrive il pacchetto in una nuova cartella dentro Documenti (`CadCraft hand-off`; nulla viene sovrascritto, ogni invio ha la propria cartella), avvia il programma su di essa e indica dove si trovano i file.

| Programma | Legge meglio |
|---|---|
| usdview | USD |
| Il programma del computer | Qualunque cosa il computer abbia per quel tipo di file |

Studio avvia solo programmi da questo elenco fisso; non esegue nulla che la pagina chiede per nome, e non avvia mai un programma sotto la licenza GNU GPL (vedi [Disegnare l'immagine con un altro programma](topic:render-other-program#programs-cadcraft-never-runs)). Qualunque programma che legge USD o glTF apre il file da **Un file per qualsiasi programma** qui sopra.

:::note
Twinmotion, Enscape e altri programmi di visualizzazione non sono nell'elenco: CadCraft non è stato verificato con loro e non fa alcuna affermazione su di essi. Un file glTF o USD da qui è la via d'accesso; vedi le note sui [renderer plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
