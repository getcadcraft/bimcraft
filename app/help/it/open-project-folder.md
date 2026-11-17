---
title: Apri un'intera cartella di progetto
summary: Indica a BimCraft una cartella di progetto per vedere subito ogni modello, le sue copie di backup e i suoi collegamenti, e lascia che la casella Inizia da qui suggerisca quale file aprire.
keywords: cartella, directory, cartella di progetto, unità di rete, server, inizia da qui, quale file, backup, collegamenti, xref, cartelle recenti, trascinare cartella
from: 16fbdce2
---

## Obiettivo

Aprire un'intera cartella di progetto, come quella consegnata per un lavoro, e lasciare che BimCraft la analizzi: quali modelli ci sono, quali copie sono backup, cosa è collegato a cosa, quali file sono danneggiati e quale file è più probabile che si voglia aprire.

Vengono letti solo i pochi kilobyte che ogni scheda del modello richiede, quindi una cartella su un'unità di rete o in una cartella cloud sincronizzata va bene.

## Passaggi

:::chromium
1. Fare clic su {{ui:Apri una cartella}} a sinistra (o al centro della schermata vuota).
2. Scegliere la cartella di progetto nella finestra che si apre e fare clic su **Seleziona** (oppure **Carica** o **Apri**, a seconda del sistema).
3. Fare clic su **Visualizza file** quando il browser chiede "Consentire al sito di visualizzare i file?". Questo permette solo alla scheda di leggere la cartella; nulla viene caricato.
4. Attendere mentre la riga di stato conta: "Elenco della cartella: … file", poi "Controllo dei file Revit: … di …".
:::

:::firefox
1. Fare clic su {{ui:Apri una cartella}} a sinistra (o al centro della schermata vuota).
2. Scegliere la cartella di progetto nella finestra che si apre e confermare. Firefox può chiedere di confermare che la pagina può leggere i file della cartella; restano comunque sul computer.
3. Attendere mentre la riga di stato indica "Lettura della cartella: … file", poi "Controllo dei file Revit: … di …".
:::

:::safari
1. Fare clic su {{ui:Apri una cartella}} a sinistra (o al centro della schermata vuota).
2. Scegliere la cartella di progetto nella finestra che si apre e fare clic su **Carica**. Nonostante il nome, nulla lascia il Mac: i file vengono solo passati alla scheda.
3. Attendere mentre la riga di stato indica "Lettura della cartella: … file", poi "Controllo dei file Revit: … di …".
:::

È anche possibile **trascinare la cartella** da {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} nella pagina. Una cartella trascinata si apre senza richieste di autorizzazione in ogni browser.

## Cosa si vede

Il rapporto della cartella riempie il centro:

- Il nome della cartella, i conteggi di modelli, disegni CAD, modelli IFC e file, e la dimensione totale.
- Note rosse o ambra se alcuni file sono incompleti o se alcuni file collegati mancano nella cartella.
- La casella {{ui:Inizia da qui}}: il file che BimCraft suggerisce di aprire, con i motivi.
- **Modelli**: una riga per modello, con i suoi backup raggruppati sotto.
- **File collegati e referenziati**, **Modelli IFC**, **Disegni CAD** e **Messi da parte**, quando la cartella ne contiene.

A sinistra, il pannello {{ui:Cartella}} la riassume; **Problemi** indica "Nessuno" quando ogni copia è integra.

## Usare la casella Inizia da qui

La casella indica un file e spiega perché, per esempio:

- "Lavoro salvato più recente in questa cartella (3 mar 2025)."
- "*Consultant.rvt* è collegato ad altri modelli, quindi è uno sfondo, non il file da modificare."
- "*Tower.rvt* sembra la scelta ovvia, ma è danneggiato; la sua ultima copia buona è del …"
- "Questo è un modello centrale: in Revit, aprirlo con "Create New Local" e lavorare sulla copia locale."

1. Leggere i motivi.
2. Fare clic su {{ui:Apri la sua scheda}} per leggere la scheda di quel file, oppure su {{ui:Mostra nell'elenco}} per trovare la sua riga in **Modelli**.
3. Verificare con chi ha lavorato per ultimo al progetto prima di affidarsi al file. Anche la casella lo indica: è una stima basata su nomi, date e collegamenti.

## Aprire file dal rapporto

1. Fare clic sul nome di un modello per aprire la sua scheda. La scheda verifica ogni collegamento rispetto alla cartella.
2. Fare clic su {{ui:Indietro a}} e sul nome della cartella in alto nella scheda (oppure su {{ui:Torna alla cartella}} a sinistra) per tornare indietro.
3. Fare clic su un file IFC qualsiasi in **Modelli IFC** per aprirlo in 3D.
4. Fare clic su un DWG o DXF qualsiasi in **Disegni CAD** per aprirlo in 2D. I suoi disegni collegati e le sue immagini vengono trovati automaticamente nella cartella.

## Riaprire una cartella in seguito

:::chromium
Le cartelle aperte con {{ui:Apri una cartella}} o trascinandole sono elencate a sinistra sotto {{ui:Cartelle recenti}}. Fare clic su {{ui:Riapri}} e sul nome della cartella per aprirla di nuovo senza sceglierla. Dopo un riavvio del browser, Chrome o Edge chiedono di nuovo una volta; scegliere "Consenti in ogni visita" per evitare che lo chiedano. L'elenco è conservato solo in questo browser e non viene mai inviato da nessuna parte. Fare clic su × per dimenticare una cartella.
:::

:::firefox safari
Questo browser non ricorda le cartelle tra una visita e l'altra. Scegliere di nuovo la cartella con {{ui:Apri una cartella}}, oppure trascinarla.
:::

## Errori comuni

- **Scegliere una cartella troppo grande.** Oltre 20.000 file: "Questa cartella contiene più di 20.000 file. Scegliere una cartella più piccola, per esempio di un solo progetto." Scegliere la cartella del progetto, non l'intero disco.
- **Scegliere la cartella padre di più progetti.** La casella {{ui:Inizia da qui}} sceglie allora tra progetti diversi. Scegliere un solo progetto.
- **Le cartelle interne di Revit sembrano ignorate.** Le cartelle `*_backup`, `*_log` e `Revit_temp` sono di servizio e sono elencate in **Messi da parte**, non lette.
- **Aspettarsi che un modello si apra in 3D dalla sua scheda.** Un file di progetto è solo una scheda. Aprire il suo export IFC.
- **Telefoni e tablet.** Molti browser mobili non permettono affatto di scegliere cartelle. Usare un computer.

Vedi [Controllare una cartella per copie danneggiate, collegamenti mancanti e residui](topic:check-folder-health) e [Rapporto della cartella: ruoli, stati e collegamenti](topic:folder-roles).
