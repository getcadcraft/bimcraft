---
title: Verificare una cartella per copie danneggiate, collegamenti mancanti e residui
summary: Usare il rapporto della cartella per trovare file di modello troncati, scegliere la copia di backup completa più recente, vedere quali collegamenti mancano e individuare i file di blocco e temporanei.
keywords: controllo dello stato, danneggiato, corrotto, incompleto, troncato, backup, collegamenti mancanti, xref mancante, audit, residui, file di blocco, dwl, bak, consegna
from: 3025a539
---

## Cosa si fa

Verificare una cartella di progetto prima di consegnarla o di iniziare a lavorarci: ogni modello è completo, qual è l'ultimo backup valido e tutti i file collegati sono presenti?

## Passaggi: copie danneggiate

1. Aprire la cartella di progetto. Vedere [Aprire un'intera cartella di progetto](topic:open-project-folder).
2. Leggere le note sotto il nome della cartella. "2 file sono incompleti o illeggibili. Vedere i modelli sotto." indica che c'è qualcosa da controllare.
3. In **Modelli**, guardare la colonna **Stato**. **Completo** va bene. Un "1 incompleto" in arancione significa che una copia è danneggiata ma un'altra è valida. Un **Incompleto** in rosso significa che non è stata trovata nessuna copia valida.
4. Aprire **Tutte le … copie** sotto un modello con un problema. Elenca il file principale e ogni backup numerato, dal più recente, con dimensione, data e stato.
5. Leggere la nota sopra l'elenco, per esempio "Tower.rvt è incompleto (183.2 MB, dovrebbe essere di almeno 214.0 MB). La scheda mostra la copia completa più recente, Tower.0012.rvt (Mar 3, 2025)."
6. Fare clic sulla copia da aprire. Si possono selezionare solo le copie complete.

## Cosa fa il controllo dello stato

Ogni copia di ogni modello riceve un controllo rapido della sua intestazione, 512 byte ciascuna, quindi anche una cartella con modelli molto grandi viene controllata in pochi secondi. Un file il cui indice interno punta oltre la sua fine è stato troncato durante la copia, il caricamento o la sincronizzazione. Un file su un'unità cloud ancora "solo online" appare allo stesso modo.

La scheda di ogni modello viene letta dal file principale quando è valido, e dalla copia di backup valida più recente quando non lo è.

## Passaggi: collegamenti mancanti

1. Cercare la nota "*n* file collegati non sono in questa cartella." sotto il nome della cartella.
2. Scorrere fino a **File collegati e di riferimento**. I collegamenti mancanti sono elencati per primi.
3. Leggere la colonna **Dove** per ogni collegamento:
   - **In questa cartella**: trovato nel percorso salvato dal modello.
   - **Trovato con lo stesso nome**: un file con lo stesso nome si trova altrove nella cartella. Verificare che sia quello giusto.
   - **File di libreria**: una tabella di codici keynote o di assiemi. Questi file arrivano con il programma su ogni computer, quindi non sono attesi nella cartella.
   - **Non in questa cartella**: non trovato da nessuna parte nella cartella.
4. Leggere **Usato da** per vedere quali modelli collegano ciascun file.

BimCraft cerca ogni collegamento prima per il suo percorso relativo, poi per la fine del percorso salvato (quindi `\\server\jobs\Tower\Cad\X-Refs\site.dwg` viene trovato in `X-Refs/site.dwg` quando si è scelta la cartella `Cad`), e infine per nome file in qualsiasi punto della cartella.

## Passaggi: residui

1. Scorrere fino a **Messo da parte** alla fine del rapporto.
2. Leggere le tre righe che possono comparire:
   - Cartelle di servizio (`*_backup`, `*_log`, `Revit_temp`): non lette.
   - Residui di blocco, di log e di backup: file come `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Sono lasciati da programmi che si sono bloccati o che erano aperti quando la cartella è stata copiata. Di solito si possono eliminare senza rischi quando nessuno ha i file aperti.
   - Altri file: tutto il resto che BimCraft non legge.

## Errori comuni

- **Eliminare il file principale danneggiato prima di salvare un backup valido.** Copiare prima la copia completa più recente, poi intervenire sul file danneggiato.
- **Fidarsi ciecamente di "Trovato con lo stesso nome".** Due disegni diversi possono avere lo stesso nome. In caso di dubbio, aprirli entrambi.
- **Pensare che un file di libreria mancante sia un problema.** Le tabelle dei codici keynote e degli assiemi risiedono con il programma su ogni computer.
- **Il numero di file differisce tra i browser.** In Firefox e Safari, {{ui:Apri una cartella}} consegna ogni file, inclusi quelli nelle cartelle di servizio, quindi il conteggio (e il limite di 20,000 file) li include. Trascinando la cartella vengono saltati, come fanno Chrome ed Edge. Per il resto il rapporto è identico.
