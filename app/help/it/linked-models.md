---
title: Collegare altri modelli per il coordinamento
summary: Mostrare accanto al proprio un altro modello IFC come riferimento (mai unito), posizionarlo con coordinate condivise, coordinate cartografiche o due punti, agganciarsi ad esso mentre si disegna e ricaricarlo quando cambia il file.
keywords: collegamento, modello collegato, riferimento, xref, coordinamento, federazione, struttura, MEP, consulente, coordinate condivise, rilievo, coordinate cartografiche, ricarica, scarica, riferimento documento, IfcDocumentReference
from: 3e0f1eab
---

## Cosa si fa

Disegnare sul modello di un consulente (la struttura, gli impianti, l'edificio esistente) senza copiare nulla nel proprio file.

Un **modello collegato** è mostrato nella vista 3D e tagliato nelle piante, ma non viene mai modificato né salvato nel proprio modello. Il modello conserva solo il collegamento: il nome del file e dove si trova.

## Collegare un modello

1. Nella sezione {{ui:Modelli collegati}} del pannello a sinistra, fare clic su {{ui:Collega un modello…}} e scegliere il file IFC. Compare subito e nella sua riga è scritto **Mostrato**.
2. Scegliere dove si trova in {{ui:Posizionamento}}:
   - **Coordinate condivise** (come punto di partenza): le sue coordinate sono le proprie, come quando entrambi i modelli sono stati tracciati dalla stessa origine.
   - **Coordinate cartografiche**: le coordinate cartografiche di entrambi i file le allineano (entrambi devono avere una conversione cartografica; BimCraft lo segnala quando una non ce l'ha).
   - **Per due punti…**: fare clic su un punto del modello collegato, poi sul punto corrispondente nel proprio; quindi una seconda coppia. Il collegamento viene spostato e ruotato (attorno alla verticale) per adattarsi.
3. Ogni collegamento e modifica di posizionamento è un solo passaggio: {{key:Mod+Z}} lo annulla.

## Uso

- Le piante mostrano il modello collegato tagliato all'altezza di taglio del piano come linee sottili, e lo strumento {{ui:Parete}} e gli altri strumenti di disegno si agganciano ai suoi angoli e spigoli.
- Selezionare i suoi elementi nella vista 3D per leggerne le proprietà; un modello collegato non è mai quello da modificare, quindi il suo pulsante di opzione in {{ui:Modelli}} è disattivato.
- **Il file è cambiato?** Quando il browser può controllare il file (un file aperto tramite il selettore file, o in Studio), BimCraft ricarica il collegamento da solo pochi secondi dopo il salvataggio del file, e lo segnala. Altrimenti fare clic su {{ui:Ricarica}}.
- {{ui:Scarica}} lo nasconde e libera la memoria; il collegamento resta nel modello. {{ui:Carica…}} lo mostra di nuovo (si sceglie il file: un browser non può aprire un file solo in base al nome).
- La × rimuove il collegamento dal proprio modello.

## Cosa si vede

- Nel proprio file IFC: un IfcDocumentReference per ogni collegamento (il nome del file), collegato al progetto, e dove si trova nel set di proprietà del progetto CadCraft_Links. Riaprendo il modello, i suoi collegamenti compaiono come **Non caricato** finché non vengono caricati.

:::note
I controlli di interferenza, Confronta e Trova possono usare un collegamento caricato come qualsiasi altro modello aperto: vedi [Vedi più modelli IFC insieme](topic:several-models).
:::
