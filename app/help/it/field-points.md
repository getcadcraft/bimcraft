---
title: Punti di picchettamento e verifiche come costruito
summary: Numerare i punti in cui una squadra picchetta dal modello — centri dei pilastri, estremità dei muri, tirafondi, guaine, qualsiasi elemento selezionato — scriverli per una stazione totale, poi rileggere i punti misurati dalla squadra come costruiti e vedere cosa è fuori.
keywords: punti di tracciamento, picchettamento, picchettare, stazione totale, rilievo, file di punti, csv, txt, pnezd, penzd, xyz, nord, est, quota, come costruito, verifica, tolleranza, scostamento, tirafondi, centri dei pilastri, estremità dei muri, guaine, coordinate di rilievo, conversione cartografica
from: acea9606
---

La scheda {{ui:Punti}} a destra crea i punti che una squadra picchetta in cantiere dal modello aperto, e verifica i punti che la squadra misura dopo.

## Creare i punti

1. Aprire un modello IFC e la scheda {{ui:Punti}}.
2. Selezionare cosa picchettare: **centri dei pilastri** (il piede dell'asse di ogni pilastro), **estremità dei muri** (entrambe le estremità dell'asse di ogni muro, alla base), **tirafondi**, **guaine** (elementi il cui nome o tipo indica guaina), e gli **elementi selezionati** (ciascuno nel suo punto di posizionamento — selezionarli prima nella vista).
3. Scegliere il primo numero e un prefisso, le coordinate, le unità, le colonne e il file:
   - **Modello**: le coordinate proprie del file. **Griglia di rilievo**: la griglia cartografica della georeferenziazione del modello (mostrata solo quando l'IFC ha una conversione cartografica), in metri o nell'unità scelta.
   - Colonne **PNEZD** (punto, nord, est, quota, descrizione), **PENZD** oppure **XYZ**; **CSV** (virgole) oppure **TXT** (tabulazioni).
4. Premere {{ui:Crea punti}}: l'elenco li mostra e la vista li segna in blu. {{ui:Scarica i punti}} scrive il file.

I punti hanno un ordine fisso — per tipo, poi a righe lungo la pianta — quindi crearli di nuovo dallo stesso modello dà gli stessi numeri. Il file è quello che apre CivilCraft e che scrive EXPORTPOINTS di CadCraft: un punto per riga, tre decimali, una descrizione tra virgolette quando contiene una virgola.

## Verificare i punti come costruiti

Quando la squadra rimanda ciò che ha misurato, scegliere una **tolleranza** in millimetri e il modo di abbinare i punti — per **numero del punto** (hanno mantenuto i propri numeri) oppure per la **misura più vicina** — e premere {{ui:Leggi i punti come costruiti…}}. Leggere il file nelle stesse unità e coordinate con cui è stato scritto.

Ogni punto di progetto risulta quindi **entro** la tolleranza, **fuori** da essa, **non misurato**, e ogni misura che nessuno aveva richiesto è **in più**. La tabella dà le differenze nell'unità scelta nella barra degli strumenti, con i piedi mostrati come pollici decimali (come costruito meno progetto: est, nord, quota e la distanza in pianta); la vista segna ogni punto in verde o in rosso con una linea verso la misura, e in grigio quando non è stato misurato. {{ui:Rapporto (CSV)}} scrive l'intero confronto.

Nulla qui modifica il modello. Non ancora implementato: picchettare a partire dai bordi dei solai, dalle intersezioni di griglia o dalle aperture create automaticamente, e inviare i punti direttamente a uno strumento: usare il file.
