---
title: Risoluzione dei problemi
summary: Messaggi che BimCraft mostra, cause e cosa fare, per l'apertura di file, cartelle, modelli 3D, disegni e modifiche.
keywords: problema, errore, non funziona, impossibile aprire, non riuscito, incompleto, danneggiato, lento, arresto anomalo, vuoto, mancante, messaggio, guida
from: 1e5a79fc
---

I messaggi compaiono nella riga di stato in fondo all'area di lavoro, in rosso quando qualcosa non è riuscito. Cercare il messaggio qui sotto.

## Apertura dei file

**"*nome* non è un file IFC, RVT, RFA, DWG o DXF."**
BimCraft non ha riconosciuto il file. Verificare l'estensione e che il file non sia vuoto. I file PDF, le immagini e i file di Office non si aprono.

**".ifczip non è ancora supportato. Salvare o esportare il modello come file .ifc semplice."** (vale anche per `.ifcxml`)
Decomprimere il `.ifczip` (è uno zip normale che contiene un `.ifc`) oppure esportare un IFC semplice.

**"… è un file di progetto che BimCraft non legge ancora."**
Un file `.pln`, `.pla`, `.tpl` o `.bpn`. Esportare IFC o DWG da esso e aprire quello: vedi [Aprire i file di progetto .pln e .pla](topic:pln-project-files).

**"Questo file IFC non può essere letto."**
Il file IFC è danneggiato oppure non è davvero IFC. Aprirlo in un editor di testo: un vero file IFC inizia con `ISO-10303-21;`. Esportarlo di nuovo.

**"Questo file è incompleto: è di … MB, ma il suo stesso indice punta a dati che arrivano almeno a … MB. …"**
Il file di progetto o di famiglia è stato troncato durante la copia, il caricamento o la sincronizzazione. Un file di un'unità cloud "solo online" appare allo stesso modo. Un file aperto da solo si apre ancora, con questo messaggio in alto nella scheda e "Vengono mostrati i dati recuperati; copiare di nuovo l'originale per avere il modello completo.": la scheda mostra solo le parti di cui ogni byte è nel file ed elenca le altre sotto **Non nel file**. Rendere il file disponibile offline nell'unità cloud, oppure copiare di nuovo l'originale, e riaprirlo. In una cartella, BimCraft mostra invece la copia di backup completa più recente.

**"… Anche l'elenco dei contenuti del file è nella parte mancante, quindi nulla al suo interno può essere aperto."**
Il file è stato troncato così presto che manca anche il suo elenco dei contenuti. Da questa copia non si può recuperare nulla. Copiare di nuovo l'originale e riaprirlo.

**"Questo file composto non ha un flusso BasicFileInfo, quindi non è un file Revit."**
Il file è un file composto di altro tipo (i vecchi documenti di Office usano lo stesso contenitore). Verificare di aver scelto il file giusto.

**"Ancora in elaborazione il precedente…"**
BimCraft è ancora occupato con il file o la cartella precedente. Attendere che la riga di stato termini, poi riprovare.

**Il selettore dei file non offre il mio file.**
Il selettore offre solo `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` e `.dxf`. Trascinare invece gli altri file nella pagina, e BimCraft dirà se può leggerli.

## Apertura delle cartelle

**"Questa cartella ha più di 20,000 file. Scegliere una cartella più piccola, ad esempio quella di un solo progetto."**
Si è scelta una cartella troppo in alto, come un intero disco. Scegliere una cartella di progetto.

**"Il browser non ha concesso l'accesso a *nome*. Sceglierla di nuovo con Apri una cartella."**
Si è fatto clic su {{ui:Riapri}} per una cartella recente e il permesso del browser è stato negato oppure è scaduto. Scegliere di nuovo la cartella, oppure trascinarla.

**Il browser dice che caricherà i file.**
È la formulazione del browser per consegnare i file alla pagina. BimCraft non li invia a nessuno. Per evitare il dubbio, trascinare la cartella.

**Su un telefono o un tablet non succede nulla.**
Molti browser mobili non possono scegliere cartelle. Aprire singoli file, oppure usare un computer.

## Il motore IFC si carica la prima volta

**La riga di stato resta su "Avvio del motore IFC…", oppure mostra un errore come "Failed to fetch".**
Il motore IFC non può essere scaricato. Potrebbe essere che si sia offline, oppure che un firewall o un blocco dei contenuti lo stia impedendo.

:::offline
Si è offline. Se il pulsante della barra dell'app non dice {{ui:Pronto per l'uso offline}}, il motore IFC non è mai stato salvato in questo browser. Riconnettersi, riaprire il file, poi fare clic su {{ui:Salva per l'uso offline}} perché funzioni offline la volta successiva. Vedi [Online e offline](topic:online-offline).
:::

:::online
Ricaricare la pagina e riprovare. Su una rete di lavoro, chiedere al reparto IT di consentire i file `.wasm` del sito.
:::

## Salvataggio per l'uso offline

**Il pulsante dice {{ui:Salvataggio non riuscito}}.**
Alcuni file non sono stati scaricati, di solito perché la connessione è caduta. Controllare la connessione e fare di nuovo clic sul pulsante. Una copia offline precedente viene conservata finché non ne è pronta una nuova completa.

**Il pulsante dice {{ui:Offline non disponibile}}.**
Questa finestra non può conservare una copia offline, per esempio una finestra privata o un computer di lavoro gestito. Vedi [Lavorare offline](common:offline).

**Il pulsante resta su "Salvataggio *n* di *m*" per un po'.**
La copia di BimCraft pesa circa 11 MB, soprattutto il motore IFC. Tenere aperta la scheda finché non dice {{ui:Pronto per l'uso offline}}.

**BimCraft si apre offline ma sembra non aggiornato.**
La copia salvata risale a una visita precedente. Quando si è online, fare clic su {{ui:Pronto per l'uso offline}} e scegliere {{ui:Salva di nuovo (scarica la versione più recente)}}.

## Vista 3D

**Il modello non è dove ci si aspettava, oppure è minuscolo.**
Premere {{key:F}} oppure fare clic su {{ui:Adatta}}. Adatta inquadra sempre tutto il modello, compresi i piani disattivati e gli elementi isolati lontano dall'edificio, quindi l'edificio può sembrare piccolo. Da lì, fare zoom.

**Il clic non seleziona nulla.**
Tenere fermo il mouse mentre si fa clic: un piccolo trascinamento ruota la vista. Gli elementi di piani disattivati non possono essere selezionati. Con {{ui:Spazi}} attivo, gli spazi trasparenti vengono selezionati prima di ciò che c'è dentro.

**Il pulsante {{ui:Spigoli}} è disattivato: "Gli spigoli sono disattivati per i modelli molto grandi".**
Il modello ha più di 1.5 milioni di triangoli. Gli spigoli restano disattivati per risparmiare memoria.

**La scheda diventa lenta, bianca, oppure mostra la pagina di arresto anomalo del browser.**
Il modello è troppo grande per la memoria che il browser assegna alla scheda. Chiudere le altre schede e ricaricare. Esportare un IFC più piccolo: un solo edificio, una sola disciplina o meno piani. Vedi [Browser, dispositivi e memoria](topic:platforms).

**La vista 3D resta vuota.**
WebGL potrebbe essere disattivato o bloccato. Nelle impostazioni del browser attivare l'accelerazione hardware (o l'accelerazione grafica) e riavviare il browser.

## Modifica di IFC

**"Inserire un numero."** Il valore è numerico. Digitare un numero semplice senza unità, come `2.4`.

**"Inserire un numero intero."** Il valore è un conteggio o un intero. Eliminare i decimali.

**"Si possono modificare solo le proprietà a valore singolo."** Elenchi, enumerazioni e quantità sono di sola lettura.

**{{key:Mod+S}} apre la finestra "Salva pagina" del browser.**
Non ci sono modifiche non salvate, quindi BimCraft ha lasciato il tasto al browser. Chiudere la finestra.

**{{key:Mod+Z}} non fa nulla.**
Funziona solo se ci sono modifiche non salvate e non si sta digitando in un campo. Dopo un salvataggio non c'è più nulla da annullare.

**L'elenco {{ui:Modifiche}} mostra ancora modifiche dopo averle scartate e aperto un disegno o una cartella.**
Quando si risponde "Scartarle?" con OK e poi si apre qualcosa di diverso da un modello IFC, le vecchie modifiche restano in memoria e {{ui:Salva come IFC}} le salverebbe ancora. Per ripartire davvero, riaprire l'IFC originale oppure ricaricare la pagina.

**La mia modifica ha cambiato più elementi di quelli selezionati.**
È stata modificata una proprietà in un insieme contrassegnato "(tipo)". Le proprietà di tipo valgono per ogni elemento del tipo. Fare clic su {{ui:Annulla}}. Vedi [Modificare una proprietà di tipo per ogni elemento di un tipo](topic:type-vs-instance).

## Disegni

**"*nome* non può essere letto. Potrebbe essere danneggiato, oppure salvato in un formato che il lettore non gestisce ancora (…)."**
Salvare il disegno dal programma che lo ha creato come DWG più vecchio (2018 o precedente) oppure come DXF, e riprovare.

**"Questo disegno non ha nulla da mostrare."** oppure **"*nome* è un disegno vuoto: non contiene linee, testo o blocchi."**
Il disegno è vuoto, oppure contiene solo elementi che BimCraft non disegna ancora (vedi **Non ancora disegnato** a destra).

**"Questo disegno è molto grande; ne viene mostrata solo una parte."**
BimCraft ha smesso di disegnare per restare reattivo. Disattivare i layer che non servono, oppure aprire le tavole necessarie da un disegno più piccolo.

**Mancano parti di una tavola.**
Potrebbero mancare i disegni collegati: cercare sotto **Disegni collegati** a destra. Vedi [Trovare disegni collegati e immagini](topic:dwg-linked-files). Anche i layer potrebbero essere disattivati: fare clic su {{ui:Tutti accesi}}.

**Un'immagine appare come un riquadro vuoto.**
Il suo file non è stato trovato, oppure è un TIFF ("TIFF non può essere mostrato in un browser"). Aggiungere una copia PNG o JPEG con {{ui:Aggiungi immagini…}}.

**Lo scorrimento del trackpad fa zoom invece di spostare il disegno.**
Così funzionano i disegni in BimCraft. Fare clic e trascinare per spostarsi.

## Ancora bloccati

Leggere [Cosa non è ancora implementato](topic:not-built-yet): ciò che si cerca potrebbe non esistere in questa versione.
