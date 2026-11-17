---
title: Esporta il modello come Collada o per Google Earth
summary: Scrive i modelli IFC aperti in un file Collada (.dae) per Blender e altri programmi 3D, oppure in un pacchetto Google Earth (.kmz) posizionato dove si trova il modello sulla mappa.
keywords: collada, dae, kmz, kml, google earth, blender, esporta, geolocalizzazione, georeferenziazione, latitudine, longitudine, posizione, programmi 3D
from: 81cfec09
---

{{ui:Collada}} sulla barra degli strumenti (oppure {{ui:Esporta Collada (.dae, .kmz)…}} nel menu File degli stili menu e barra multifunzione) scrive ciò che è aperto in Collada 1.4.1: ogni modello visualizzato, quelli federati nelle posizioni in cui sono stati collocati.

## Esporta

1. Scegliere {{ui:Collada}}.
2. Scegliere il formato:
   - {{ui:File Collada (.dae), per Blender e altri programmi 3D}}.
   - {{ui:Pacchetto Google Earth (.kmz): il modello posizionato dove si trova sulla mappa}}. Disponibile solo quando il modello ha una posizione.
3. Scegliere le opzioni, poi {{ui:Esporta}}. Il file viene scaricato e la barra di stato indica quanti elementi sono stati inclusi.

| Opzione | Cosa fa |
|---|---|
| {{ui:Scrivere la posizione nel file}} | Aggiunge al file .dae latitudine, longitudine, altezza e orientamento dell'origine del file |
| {{ui:Altezza}} | {{ui:A terra: il livello 0 del modello poggia sul terreno}}, oppure {{ui:L'altezza propria del modello sul livello del mare}} |
| {{ui:Includere locali e spazi}} | Anche gli spazi vengono inclusi (di norma sono esclusi) |
| {{ui:Includere elementi nascosti}} | Anche gli elementi nascosti vengono scritti (di norma viene scritto solo ciò che si vede) |

## Cosa contiene il file

| Nel modello | Nel file Collada |
|---|---|
| Edificio, piani | Nodi annidati, piani in ordine di quota; gli elementi su nessun piano sono sotto "Unplaced" |
| Ogni elemento | Un nodo con la propria mesh, con il nome del modello (il suo nome, altrimenti classe e tag) |
| Classe, GlobalId, tipo predefinito | Nei dati extra del nodo (profilo IFC), con il nome esatto (profilo ModelCraft) |
| Colori | Materiali, con trasparenza |
| Unità e assi | Metri, Z verso l'alto. Il livello 0 del modello in primo piano è all'altezza 0 |

Il modello resta vicino all'origine rispetto al terreno, così i programmi che lavorano in precisione singola lo mostrano senza tremolio. ModelCraft scrive i propri file Collada con lo stesso scrittore e li apre con i nomi degli elementi.

## Da dove viene la posizione

Il modello in primo piano fornisce la posizione, nello stesso modo in cui {{ui:Misura}} ricava latitudine e longitudine di un punto:

- Una conversione cartografica (IFC4 IfcMapConversion, oppure i set di proprietà IFC2X3) attraverso il sistema di coordinate del modello. Un sistema scelto per il modello prevale su quello indicato nel file.
- Altrimenti la latitudine e la longitudine del sito (approssimate: sufficienti per l'intero sito).

L'orientamento è misurato, non supposto: tiene conto della rotazione della mappa, del nord reale e della convergenza della mappa. Per assegnare una posizione a un modello, usare {{ui:Origine sulla mappa…}} in Misura.

## In altri programmi

- **Google Earth** legge il .kmz: il modello appare nella posizione, orientato verso nord. Un .dae semplice non contiene una posizione che Google Earth legga; usare il .kmz.
- **Blender** (4.x e precedenti): File, Importa, Collada (.dae). Ogni elemento viene importato come oggetto separato con il proprio materiale. La posizione è conservata nei dati extra del file, che Blender non legge. Blender 5.0 ha eliminato l'importatore Collada integrato; in quel caso usare {{ui:USD}} oppure l'esportazione glTF, oppure aprire il .dae in Blender 4.5 e salvare un .blend.

I nostri test verificano ogni file rispetto allo schema Collada 1.4.1 e lo rileggono con un lettore Collada indipendente. Non sono ancora stati aperti in Blender o Google Earth.
