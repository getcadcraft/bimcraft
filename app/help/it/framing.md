---
title: Ossatura di muri, solai e coperture
summary: Generare montanti, cordoli, architravi, travetti, puntoni o capriate dal modello e conservarli con esso; vengono rifatti quando cambiano i muri, le aperture, i solai o la copertura, e l'abaco Legname è l'elenco di taglio.
keywords: TJI, travetto a I, tabella delle luci, carica una tabella, ossatura, telaio, montante, montanti, cordolo, cordolo superiore, architrave, montante di testa, montante di sostegno, trimmer, montante corto, soglia, traversine, angolo, angolo californiano, T, travetto, travetto di bordo, puntone, puntone di displuvio, puntone di compluvio, puntone corto, trave di colmo, travetto di controsoffitto, catena, capriata, legname, elenco di taglio, board feet, 2x4, 2x6, interasse
from: 76d0ffb5
---

## Obiettivo

Realizzare l'ossatura dell'edificio partendo da ciò che è stato disegnato. BimCraft dispone montanti, cordoli e architravi nei muri, i travetti nei solai e i puntoni (o le capriate) nella copertura; li dimensiona con tabelle predefinite etichettate, li conserva con il modello e li rifà ogni volta che cambia ciò che incorniciano. L'abaco **Legname** è l'elenco di taglio.

## Realizzare l'ossatura

1. Su un livello, aprire {{ui:Build}} e scegliere {{ui:Ossatura}}.
2. Scegliere l'**interasse** (16 in o 24 in; 400 o 600 mm), gli **angoli** (a tre montanti oppure californiani), **Puntoni** o **Capriate** per le coperture, e se i muri ricevono una fila di **traversine** a metà altezza. Per i solai scegliere **Legname segato** oppure **TJI (preliminare)** e impostare la direzione dei travetti su automatica, asse X o asse Y della pianta.
3. Fare clic su **Realizza l'ossatura di ogni muro**, oppure fare clic su un muro, un solaio o una copertura (sul livello su cui poggia la copertura) per realizzare solo quello.

Disattivare **Mostra ossatura** per nascondere ogni elemento dell'ossatura, come un layer; **Trasparenza** nasconde i muri, i solai e le coperture che sono incorniciati, così da guardare la sola ossatura.

## Cosa si ottiene

- **Muri**: una piastra inferiore (tagliata alle porte), un doppio cordolo superiore, montanti sulla disposizione dall'inizio del muro, montanti di testa e di sostegno e un architrave per ogni porta e finestra, montanti corti sopra gli architravi e sotto le finestre, una soglia grezza sotto le finestre, angoli dove i muri si incontrano (il muro che prosegue prende i montanti d'angolo), due montanti di rinforzo dove un altro muro si innesta a T, e traversine tra i montanti.
- **Solai**: travetti attraverso il lato corto del solaio per impostazione predefinita, oppure lungo l'asse della pianta scelto; travetti di bordo intorno al perimetro, e travetti di chiusura doppi e architravi intorno a un vano scala, con i travetti che lo attraversano tagliati corti (travetti di coda). La modalità TJI sceglie la serie e l'altezza più piccole elencate che raggiungono la luce netta misurata con l'interasse scelto.
- **Coperture**: puntoni comuni squadrati su ciascuna gronda, puntoni corti dove displuvi e compluvi li tagliano, puntoni di displuvio e di compluvio, travi di colmo, travetti di controsoffitto sui cordoli e catene; oppure capriate semplici all'interasse, un pezzo ciascuna.

## Modificarla

Selezionare un pezzo di ossatura nella vista 3D o nell'albero del modello. **Proprietà** mostra la sua ossatura: si possono cambiare l'interasse, il tipo e la direzione dei travetti del solaio, gli angoli, le traversine o l'ossatura della copertura. Spostare muri, porte e finestre, oppure cambiare il solaio o la copertura, rifà l'ossatura da sola.

Per conservare un pezzo posizionato di proposito quando l'ossatura viene rifatta, selezionarlo e scegliere **Conserva questo pezzo quando l'ossatura viene rifatta**. Un pezzo conservato resta dov'è; quando l'ossatura intorno ad esso cambia, viene contrassegnato perché sia verificato.

## Solai TJI da una tabella caricata

BimCraft non contiene tabelle delle luci dei produttori di travetti (sono del produttore, e cambiano a ogni edizione). Selezionare l'ossatura di un solaio, impostare **Travetti del solaio** su **TJI (preliminare)** e scegliere **Carica una tabella…** in **Proprietà**: un file in formato `cadcraft-tji-table`, JSON o CSV, preparato dalle tabelle delle luci correnti del produttore. Indica il produttore, il prodotto e l'edizione, e da dove provengono i numeri; elenca per ogni caso di carico (carico variabile, carico permanente, limite di freccia, lunghezza di appoggio) la luce netta massima di ogni serie e altezza per ogni interasse.

- BimCraft prende la **luce netta** del solaio, sceglie l'altezza più bassa e, al suo interno, la serie la cui luce elencata la raggiunge per l'interasse e il caso di carico scelti, e inquadra il solaio con essa. Se la luce o l'interasse sono fuori dalla tabella, lo dice e non cambia nulla.
- I carichi, il limite di freccia, la lunghezza di appoggio, la tabella e la frase "Indicazioni preliminari di disposizione; la scelta definitiva richiede le tabelle del produttore e i carichi di progetto" sono stampati sull'abaco Legname, scritti nel modello con l'ossatura ed elencati nel pannello **Problemi** come nota. Una tabella contrassegnata come esempio lo dichiara in un avviso.
- Con il componente aggiuntivo **Regolamenti edilizi** attivo, la sua regola sui travetti del solaio legge anche una tabella caricata; senza tabella i travetti TJI sono esclusi da quella verifica, come prima.
- La tabella resta in questo browser finché non la si cancella o non se ne carica un'altra. Il file: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: in, ft, psf; oppure `metric`: mm, m, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) e `rows` (`series`, `depth`, `spans`: per ogni id di caso, l'interasse e la luce netta massima, come `"16": "15-6"`). In CSV gli stessi dati sono righe `# chiave = valore`, seguite da `series,depth,case,spacing,span`.
- Senza tabella caricata, un layout TJI viene rifiutato e non cambia nulla: **Caricare una tabella TJI: le tabelle sono del produttore e non sono integrate nel programma.** Un modello realizzato con la vecchia tabella TJI integrata (prima di questa modifica) mantiene ogni travetto che ha; Proprietà e Problemi indicano che serve la tabella, e il solaio può essere realizzato di nuovo dopo averne caricata una. I travetti in legno segato funzionano come prima.

Questa è una guida di disposizione. La scelta definitiva dei travetti richiede le tabelle del produttore, i carichi di progetto e l'ingegnere.

## L'elenco di taglio

Nel pannello Abachi scegliere **Legname**: ogni pezzo di ossatura raggruppato per dimensione e per lunghezza di magazzino che si acquisterebbe (lunghezze intere di 2' da 8'; passi di 600 mm a partire da 2400 mm per i valori in millimetri), con il numero di pezzi e i board feet. **CSV** scarica l'abaco.

:::warning
Le dimensioni di architravi, travetti, puntoni e travetti di controsoffitto provengono da tabelle predefinite etichettate per una casa tipica a uno o due piani, non da calcoli ingegneristici. **Proprietà** segnala quando una luce o un'apertura supera la sua tabella. Un progettista o un ingegnere verifica luci, carichi e collegamenti.

Le disposizioni TJI usano solo una tabella caricata, preparata dalle tabelle correnti del produttore; BimCraft non ne include nessuna. Il suggerimento non verifica appoggi, carichi concentrati, sbalzi, fori, architravi di vano scala o collegamenti, e la sezione a I del modello è schematica.
:::

## Cosa viene salvato

Ogni muro, solaio o copertura con ossatura è un assieme di elementi IFC ("Framing") di membri IFC (montanti, cordoli, puntoni, catene, traversine, capriate) e di travi (architravi, travetti, travi di bordo, travi di colmo), ciascuno con la sua dimensione, la sua lunghezza e i board feet.
