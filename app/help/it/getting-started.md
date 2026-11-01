---
title: Primi passi con BimCraft
summary: Cosa fa oggi BimCraft, come aprire il primo modello, guardarlo in 3D, cambiare un valore e salvare una copia.
keywords: inizio, primo avvio, apri, ifc, rvt, dwg, guida rapida, introduzione, visualizzatore, bim
from: fc2dea19
---

BimCraft è l'app per i modelli di edificio della famiglia CadCraft. In questa build **apre, legge e ispeziona** file di edifici e **modifica i dati nei modelli IFC**. Non disegna né modella ancora nuovi elementi. Pensarlo come un visualizzatore e verificatore di modelli che permette anche di correggere nomi, etichette e valori delle proprietà in un file IFC.

Cosa apre:

| File | Cosa si ottiene |
|---|---|
| IFC (`.ifc`) | Il modello completo in 3D: orbita, piani, proprietà degli elementi e modifica di nomi e valori delle proprietà |
| File di progetto e di famiglia (`.rvt`, `.rfa`, `.rte`, `.rft`) | Una scheda del file: la versione in cui è stato salvato, le informazioni di progetto, l'immagine di anteprima e i file collegati. Nessun 3D. |
| DWG e DXF | Il disegno in 2D: spazio modello e ogni tavola, layer, disegni collegati, vista di stampa e un abaco delle apparecchiature per i disegni di cucine professionali con dati di tag |
| Una cartella di progetto | Un rapporto su ogni modello della cartella: backup, collegamenti, copie danneggiate e un suggerimento su quale file aprire per primo |

Tutto avviene nel browser, sul proprio computer. **Nulla viene caricato.** Vedere [File che BimCraft apre e salva](topic:files) per i dettagli.

## Aprire BimCraft

1. Aprire BimCraft in un browser recente. Chrome, Edge, Firefox e Safari funzionano tutti; [Browser, dispositivi e memoria](topic:platforms) elenca le differenze.
2. Attendere la schermata vuota con la scritta "Aprire un modello di edificio."

:::note
BimCraft funziona nel browser e, sul desktop, dentro CadCraft Studio insieme alle altre app. Il salvataggio nel cloud non è ancora disponibile: i file si aprono dal proprio computer e le copie si salvano di nuovo su di esso.
:::

## Aprire il primo modello

Il modo più rapido per vedere cosa fa BimCraft è un file IFC.

1. Fare clic su {{ui:Scegliere un file}} al centro dello schermo.
2. Selezionare un file `.ifc` in {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} e confermare.
3. Attendere mentre la riga di stato in fondo allo schermo indica "Avvio del motore IFC…" e poi "Costruzione della geometria".

Si dovrebbe vedere il modello in 3D al centro, un pannello {{ui:File}} e un elenco {{ui:Piani}} a sinistra e un pannello {{ui:Proprietà}} vuoto a destra. La riga di stato termina con "Aperto" e il numero di elementi.

:::tip
È anche possibile trascinare un file da {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} direttamente sulla pagina. Durante il trascinamento lo schermo mostra "Rilasciare per aprire".
:::

:::offline
Il motore IFC viene caricato dal sito la prima volta che si apre un modello IFC, a meno che BimCraft non sia stato salvato per l'uso offline. I disegni DWG e DXF, i file di progetto e le cartelle non richiedono nulla di più: i loro lettori fanno parte dell'app. Se il pulsante della barra dell'app indica {{ui:Pronto per l'uso offline}}, tutto si apre offline. In caso contrario i modelli IFC non si aprono finché non ci si ricollega, a meno che uno non sia già stato aperto in questa scheda. Vedere [Online e offline](topic:online-offline).
:::

:::online
Si va in un posto senza connessione? Fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app e attendere {{ui:Pronto per l'uso offline}}. La copia salvata (circa 11 MB) include il motore IFC. Vedere [Lavorare offline](common:offline).
:::

## Guardarsi intorno

:::mouse
1. Trascinare con il pulsante sinistro del mouse per orbitare attorno al modello.
2. Girare la rotellina per fare zoom.
3. Trascinare con il pulsante destro del mouse per fare pan. Su un trackpad Mac, tenere premuto {{key:Shift}} e trascinare.
4. Premere {{key:F}} o fare clic su {{ui:Adatta}} per rivedere l'intero modello.
:::

:::touch
1. Trascinare con un dito per orbitare.
2. Pizzicare con due dita per fare zoom e muovere due dita insieme per fare pan.
3. Toccare {{ui:Adatta}} per rivedere l'intero modello.
:::

## Fare una cosa concreta: correggere un'etichetta

1. Fare clic su un muro, una porta o un qualsiasi elemento del modello. Diventa blu e le sue proprietà compaiono a destra.
2. Nel pannello {{ui:Proprietà}}, fare clic sul valore accanto a **Etichetta**.
3. Digitare la nuova etichetta e premere {{key:Enter}}.
4. Guardare la sezione {{ui:Modifiche}} che si è aperta a sinistra: la modifica è elencata con il valore vecchio e quello nuovo.

## Salvare una copia

1. Fare clic su {{ui:Salva come IFC}} nella sezione {{ui:Modifiche}}, oppure premere {{key:Mod+S}}.
2. Trovare il nuovo file nella cartella dei download. Prende il nome dell'originale con " (edited)" aggiunto, ad esempio `Clinica (edited).ifc`.

Il file originale non viene mai modificato. [Modificare le proprietà IFC e salvare una copia modificata](topic:edit-ifc-properties) spiega la modifica per intero.

## Dove andare dopo

- [Lo schermo di BimCraft](topic:workspace): ogni pannello con il suo nome.
- [Per chi viene da altri programmi BIM e di disegno](topic:coming-from): cosa risulta diverso se si è abituati a Revit.
- [Aprire un'intera cartella di progetto](topic:open-project-folder): indicare a BimCraft una cartella di progetto e lasciare che ordini i file.
- [Visualizzare un disegno DWG o DXF](topic:view-dwg): tavole, layer e vista di stampa.
