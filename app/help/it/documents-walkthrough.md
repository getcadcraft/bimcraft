---
title: Documenti e revisioni (l'archivio)
summary: Un percorso passo passo su un lavoro reale: mettere sotto controllo una cartella di progetto di modelli IFC, estrarre un modello, modificarlo, archiviarlo con una nota, inviarlo in revisione, approvarlo e rilasciarlo, vedere la cronologia e che cosa lo usa, cosa vede un secondo utente mentre il file è bloccato, e come funziona con le cartelle cloud.
keywords: archivio, documenti, percorso, esercitazione, estrai, archivia, revisione, rilascio, approva, blocco, cronologia, dove viene usato, ifc, modello, cartella cloud, cartella di progetto, due persone, cartella condivisa
from: 0a753f25
---

## Cosa si fa

Ana lavora alla Clinica Riverside con un collega, Ben. I modelli IFC del progetto stanno in un'unica cartella a cui entrambi accedono (un'unità condivisa, una cartella sincronizzata o una cartella cloud). Alla fine, un file sarà passato dalla prima copia alla revisione rilasciata **A**, sarà stato modificato di nuovo come **B.1**, si vedrà chi ha fatto cosa, e si vedrà che cosa vede Ben quando il file è tenuto da Ana.

Tutto è conservato in una cartella nascosta `.ccvault` accanto ai file: nessun server, nulla caricato (una cartella cloud fa eccezione, vedi l'ultimo passaggio). Per ogni pulsante e ogni regola in un unico punto, vedi l'argomento *Documenti: estrazione, revisioni e rilascio* dove la propria app lo prevede.

## 1. Impostare la cartella di progetto

1. Scegliere {{ui:Documenti}} accanto a {{ui:Apri una cartella}} nella schermata iniziale, oppure {{ui:Documenti…}} nel menu **File**.
2. Scegliere {{ui:Scegli la cartella di progetto}} e selezionare la cartella che contiene i modelli IFC del progetto. (Le cartelle di progetto funzionano in Studio e nei browser che possono aprire una cartella, come Chrome ed Edge. Negli altri browser il pannello lo segnala.)
3. Scegliere {{ui:Modifica}} accanto a **Utente:** e digitare il proprio nome, `Ana` (se lo chiede, anche il nome di questo computer). Il pannello ora dice *Utente: Ana su* seguito dal computer. Il nome compare su tutto ciò che si fa.
4. Scegliere {{ui:Avvia un archivio in questa cartella}} e digitare il nome del progetto, `Riverside clinic`. Il pannello dice *Archivio avviato per Riverside clinic.*

## 2. Mettere un file sotto controllo

1. Aprire **File non nell'archivio** e scegliere {{ui:Aggiungi}} accanto a `models/House.ifc`.
2. Compare in **File nell'archivio** alla revisione **A.1**, stato **In lavorazione**. A.1 è la sua prima copia; l'archivio conserva una copia di ogni revisione.

## 3. Estrarre, modificare, archiviare

1. Scegliere {{ui:Apri}} accanto a `models/House.ifc`. Il modello si apre in BimCraft e il pannello si chiude per permettere di vederlo. Riaprire il pannello da {{ui:Documenti}}.
2. Riaprire il pannello e scegliere {{ui:Estrai}}. La riga ora dice **Estratto da questo utente**. È stato creato un file di blocco in `.ccvault/locks`; nessun altro può estrarre questo file finché non lo si archivia.
3. Modificare il modello: spostare un muro, aggiungere una porta. Il salvataggio viene rifiutato se il modello non è estratto a questo utente, e lo dice; {{ui:Salva con nome}} funziona sempre per una copia propria.
4. Riaprire il pannello, scegliere {{ui:Archivia}} e digitare che cosa è cambiato (`Spostata la porta`). Il pannello dice *archiviato come A.2*. Il file nella cartella di progetto è ora il modello che era aperto, e il blocco è sparito. Archiviare senza modifiche mantiene la revisione.

Se si cambia idea, {{ui:Annulla estrazione}} restituisce il file senza una nuova revisione.

## 4. Revisione e rilascio

1. Scegliere {{ui:Invia in revisione}}. Lo stato diventa **In revisione** e il file diventa di sola lettura.
2. Prima dell'approvazione, scegliere {{ui:Impostazioni del progetto}} ed elencare chi può approvare (un nome per riga), per esempio `Ben` e `Carla`, e attivare la regola per cui l'approvatore deve essere diverso dall'autore. Scegliere {{ui:Salva le impostazioni}}. Ora l'archivio stesso rifiuta chiunque altro.
3. Ben (o Carla) sceglie {{ui:Approva}} e digita il nome dell'approvatore. Lo stato diventa **Rilasciato** e la revisione diventa **A**, con *approvato da* e il nome. Un file rilasciato è di sola lettura. {{ui:Rimanda indietro}} lo riporterebbe a In lavorazione, con un motivo.

Il nome dell'approvatore è quello digitato nel pannello: è una registrazione di chi ha approvato, non una prova di identità.

## 5. Una nuova revisione

1. Sul file rilasciato, scegliere {{ui:Nuova revisione}}. Si tiene per la lettera successiva.
2. Modificarlo, poi {{ui:Archivia}}. La revisione è **B.1**, in lavorazione. Rilasciarla allo stesso modo e diventa **B**. {{ui:Annulla estrazione}} prima del primo archivio lo lascia a **A**.

Le lettere di revisione vanno da A, B … Z, AA, AB. Se lo standard ne esclude alcune, l'impostazione di progetto *Usa la sequenza ASME Y14.35* salta I, O, Q, S, X e Z per le revisioni successive.

## 6. Vedere che cosa è successo

Scegliere il nome del file per aprirne i dettagli:

- **{{ui:Cronologia}}**: ogni evento, dal più recente, con chi, quale computer e quando: *Archiviato A.2* da Ana, *Rilasciato* da Ben, e così via.
- **{{ui:Revisioni}}**: la tabella delle revisioni: ogni revisione conservata, con la data, chi l'ha archiviata, la nota e chi l'ha approvata. L'archivio conserva una copia di ciascuna in `.ccvault/revs`.
- **{{ui:Usa}}**: i documenti a cui punta un modello IFC.
- **{{ui:Usato da}}**: elenca ogni modello nell'archivio che punta a questo file.

## Modelli che puntano ad altri documenti

Un modello IFC che punta ad altri documenti della cartella (disegni, abachi) li mostra sotto **Usa**, e ciascuno di questi mostra il modello sotto **Usato da**. Archiviando un documento si vede quali modelli vi fanno riferimento.

## 7. Che cosa vede Ben mentre Ana tiene il file

Ora estrarre di nuovo il file, e chiedere a Ben di aprire la stessa cartella di progetto sul suo computer e aprire il pannello. Sulla riga del file vede **Estratto da Ana sul suo computer** **dall'orario indicato**, e nessun pulsante {{ui:Estrai}}. Se ci prova comunque, l'archivio lo rifiuta: il blocco è un file che il sistema non crea due volte, quindi due persone non possono tenere entrambe il file, nemmeno nello stesso istante, quando la cartella è su disco in Studio. (In un browser la cartella consente solo un tentativo, e il pannello lo dice sotto **Cartella**.)

Se Ana è assente e Ben ha bisogno del file, {{ui:Interrompi estrazione}} lo libera. Va digitato un motivo; viene registrato nel log insieme all'estrazione a cui apparteneva. Quando il progetto elenca gli amministratori, possono farlo solo loro. Un'estrazione più vecchia del limite di scadenza (14 giorni per impostazione predefinita) viene contrassegnata come *da molto tempo*. Dopo l'interruzione, l'archiviazione in ritardo di Ana viene rifiutata, così i due non possono sovrascriversi a vicenda.

## 8. Cartelle cloud

Una cartella cloud è una cartella di progetto conservata nello spazio cloud del team, così il team non ha bisogno di un'unità condivisa. In Studio, con l'accesso al proprio account CadCraft, il pannello mostra {{ui:Apri una cartella cloud}} accanto a {{ui:Scegli la cartella di progetto}}. Sceglierla e selezionare la cartella, elencata come spazio di lavoro / cartella. Il proprietario dello spazio di lavoro crea prima la cartella, e lo spazio di archiviazione cloud del team deve essere attivo. Tutto quanto descritto sopra funziona allo stesso modo; il server crea il blocco, che è rigoroso tra le persone. Se non si ha l'accesso, il pannello chiede di accedere. In una normale scheda del browser il pulsante cloud non viene offerto: usare Studio.

## Provarlo

Eseguire gli otto passaggi sopra con una copia di un file reale. Per i passaggi a due persone serve un'altra persona, oppure due finestre con due nomi. Se si prova con una vera cartella condivisa, la pagina di test della community elenca un controllo che chiede esattamente questo, e accetta i risultati.
