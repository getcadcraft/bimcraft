---
title: Confronta una scansione con il modello e il cronoprogramma 4D
summary: Verificare ogni elemento del modello rispetto a una nuvola di punti aperta (realizzato, parzialmente realizzato, mancante, non raggiunto), mostrare la percentuale realizzata, colorare il modello di conseguenza e, con un cronoprogramma 4D caricato, elencare ciò che è in ritardo o in anticipo nel giorno 4D.
keywords: scansione, nuvola di punti, avanzamento, percentuale completata, realizzato, mancante, in ritardo, in anticipo, 4D, avanzamento di cantiere, scostamento, come costruito, scansione laser, drone, confronto
from: 6fdc9003
---

Aprire un IFC, aprire accanto una nuvola di punti e posizionarla sul modello (vedere [Nuvole di punti](topic:point-clouds)). La sezione {{ui:Confronta la scansione con il modello}} compare nel pannello di destra mentre una nuvola è aperta.

## Cosa fa

Premere {{ui:Confronta}}. Ogni elemento del modello viene valutato per la sua superficie, perché è ciò che vede uno scanner. Le sei facce del suo box sono suddivise in celle di circa 20 cm; una cella conta quando un punto della scansione rientra nella {{ui:Tolleranza}} (50 mm all'inizio) rispetto alla faccia. Conta la faccia grande migliore, così un muro scansionato da un lato non viene penalizzato per l'altro lato.

- **Realizzato**: almeno il 40 % della superficie è visto.
- **Parzialmente**: dal 10 % al 40 %.
- **Mancante**: meno di questo, ma la scansione raggiunge l'elemento (punti entro 1.5 m da esso).
- **Non raggiunto**: la scansione non è mai arrivata lì, quindi non si dice nulla.

Per gli elementi realizzati e parzialmente realizzati fornisce anche lo scostamento medio dei punti di scansione dalla superficie del modello, e indica se l'elemento è al suo posto (entro la tolleranza), vicino (entro tre volte) o fuori posto (oltre). Rileva solo scostamenti fino a cinque volte la tolleranza: un elemento costruito oltre tale distanza dal suo posto risulta mancante.

La sintesi riporta la percentuale realizzata tra gli elementi raggiunti dalla scansione, per numero e per volume. Gli elementi parzialmente realizzati sono contati a parte e non vengono aggiunti a quelli realizzati.

## Rispetto al cronoprogramma 4D

Con un cronoprogramma 4D caricato (vedere [Cronoprogramma 4D](topic:4d-schedule)), il risultato usa anche il giorno impostato sul cursore 4D: gli elementi previsti entro quel giorno che la scansione non mostra come realizzati sono **in ritardo**; gli elementi non ancora previsti che risultano realizzati sono **in anticipo**. Gli elementi in ritardo sono elencati in {{ui:Problemi}}, e la tabella può essere filtrata su di essi. Senza un cronoprogramma non si dice nulla su ritardi o anticipi.

## La tabella e il modello

Fare clic su una riga per selezionare l'elemento. {{ui:Colora il modello}} colora gli elementi di verde (realizzato), ambra (parzialmente), rosso (mancante) o grigio (non raggiunto); {{ui:Colori propri}} li ripristina. {{ui:Salva CSV}} scrive la tabella. {{ui:Segna gli elementi corrispondenti come verificati sul campo}} segna come verificato sul campo ogni elemento visto come realizzato e entro la tolleranza (LOD 500, metodo scansione), in un solo passaggio che si può annullare. Vedere [Segnare gli elementi come verificati o verificati sul campo](topic:verification).

:::warning
Questo confronta il box di ogni elemento con punti di scansione entro una tolleranza. **Non è un rilievo, un computo metrico né una base per i pagamenti**. Un elemento nascosto dietro uno scansionato (un muro dietro un rivestimento, un solaio sotto una finitura di pavimento) condivide la sua superficie e può risultare realizzato; un elemento curvo o inclinato ha un box più grande del suo corpo e può risultare parziale o mancante. Guardare l'elenco prima di agire. I commenti dei permessi e le note di avanzamento non rientrano in questo: restano nelle colonne in cui vengono conservati.
:::

Un assistente può eseguire lo stesso confronto con lo strumento {{ui:Confronta la scansione con il modello}}; non modifica nulla nel modello.
