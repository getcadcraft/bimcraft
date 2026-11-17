---
title: Rapporto della cartella: ruoli, stati e collegamenti
summary: Ogni etichetta del rapporto della cartella, il suo significato e come viene scelto il suggerimento Inizia da qui.
keywords: rapporto cartella, ruoli, stato, completo, incompleto, illeggibile, collegato, sfondo, iniziale, centrale, famiglia, solo backup, inizia da qui, stato collegamento
from: b35bdd10
---

## Stato della copia

Ogni copia di un modello, file principale e backup numerati compresi, riceve un controllo dell'intestazione.

| Etichetta | Significato |
|---|---|
| **Completo** | L'intestazione e l'indice del file rientrano nel file |
| **Incompleto** | Il file è più corto di quanto dice il suo indice: è stato interrotto durante la copia, il caricamento o la sincronizzazione, oppure è un file cloud ancora "solo online" |
| **Illeggibile** | Il file non è un compound file valido, oppure non può essere letto |

Nella colonna **Stato** un modello mostra **Completo**, un ambra "*n* incompleti" quando almeno una copia è danneggiata ma un'altra è integra, oppure **Incompleto** in rosso quando nessuna copia è integra.

## Backup

I file chiamati `Nome.0001.rvt`, `Nome.0002.rvt` e così via sono backup numerati di `Nome.rvt`. Sono raggruppati sotto il loro modello, dal più recente, in **Tutte le … copie**. La scheda viene letta dal file principale quando è completo, altrimenti dal backup completo più recente ("più recente completo").

## Ruoli

Mostrati in corsivo sotto il nome di un modello.

| Ruolo | Significato |
|---|---|
| Collegato da *altro modello*: sfondo | Un altro modello nella cartella collega questo, quindi è probabilmente lo sfondo di qualcun altro, come il modello di un consulente |
| File iniziale o senza nome | Un nome come Blank, Template, Default, Untitled o Project1: un punto di partenza, oppure un file mai nominato correttamente |
| Modello centrale | Un modello centrale di lavoro condiviso. Il lavoro avviene in una copia locale, non qui |
| Famiglia (un componente) | Un file `.rfa` o `.rft`: un componente, non il progetto |
| Solo backup | Il file principale è scomparso e restano solo i backup numerati |

## Come viene scelto Inizia da qui

BimCraft applica il ragionamento che seguirebbe un utente esperto:

1. I candidati sono i file di progetto leggibili (`.rvt`, `.rte`) che non sono collegati da un altro modello e non sono file iniziali.
2. I modelli centrali e quelli con solo backup contano solo quando non esiste di meglio.
3. Tra i candidati vince quello salvato più di recente.

La casella elenca le sue ragioni, e avvisa quando un file che sembra la scelta ovvia è danneggiato, quando altri modelli sono di sfondo e quando la scelta è un modello centrale. È una stima: verificare con chi ha lavorato per ultimo al progetto.

## Stato del collegamento

| Etichetta | Significato |
|---|---|
| **In questa cartella** | Trovato nel percorso relativo salvato, oppure alla fine del percorso completo salvato all'interno della cartella |
| **Stesso nome trovato** | Non nel suo percorso, ma un file con lo stesso nome è nella cartella. Verificare che sia quello giusto |
| **File di libreria** | Una tabella di keynote o di codici di assieme. Questi arrivano con il programma su ciascun computer |
| **Non in questa cartella** | Non trovato in nessun punto della cartella |

La colonna **Collegamenti trovati** in **Modelli** mostra quanti collegamenti di un modello sono stati trovati, rispetto a quelli previsti nella cartella (i file di libreria non sono conteggiati).

## Messe da parte

| Riga | Significato |
|---|---|
| Cartelle di manutenzione di Revit (non lette) | Le cartelle `*_backup`, `*_log` e `Revit_temp`, oltre alle cartelle nascoste e `__MACOSX` |
| Residui di blocco, log e backup | I file `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` e `.slog` |
| Altri file | Tutto il resto (i primi 40 sono indicati per nome) |
