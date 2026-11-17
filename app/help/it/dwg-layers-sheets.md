---
title: Lavorare con layer e tavole
summary: Attivare e disattivare i layer del disegno, passare dallo spazio modello alle tavole, e capire come le tavole mostrano il modello attraverso i loro viewport.
keywords: layer, accensione layer, congela, scongela, tavole, layout, spazio carta, schede, viewport, gestione layer, la
from: a9a16b53
---

## Cosa si fa

Pulire la vista di un disegno affollato spegnendo i layer, poi guardare le tavole del disegno una per una.

## Passaggi: layer

1. Aprire un disegno DWG o DXF.
2. Trovare l'elenco {{ui:Layer}} a sinistra. Ogni layer ha una casella, un campione di colore e il suo nome.
3. Deselezionare un layer per nascondere tutto ciò che sta su di esso.
4. Fare clic su {{ui:Tutti spenti}} per nascondere ogni layer.
5. Selezionare solo i layer che si vogliono vedere.
6. Fare clic su {{ui:Tutti accesi}} per mostrare di nuovo tutto.

## Cosa si deve vedere

I layer scompaiono e ricompaiono insieme, su {{ui:Modello}} e su ogni foglio. I layer spenti o congelati nel disegno stesso partono deselezionati.

## Passaggi: tavole

1. Guardare la riga di schede sopra il disegno: {{ui:Modello}}, poi ogni tavola per nome.
2. Fare clic su una scheda di tavola.
3. Guardare la tavola: il foglio sta su uno sfondo più scuro, e ogni viewport mostra la sua parte del modello alla propria scala e angolazione.
4. Fare zoom su un viewport per leggere i dettagli. Si fa lo zoom sulla tavola, non sul viewport, quindi l'intera tavola si sposta insieme.
5. Fare clic su {{ui:Adatta}} oppure fare doppio clic per vedere di nuovo tutta la tavola.

## Come funzionano qui le tavole

Una tavola (un layout, o spazio carta) contiene un cartiglio e viewport che guardano nello spazio modello. BimCraft disegna ogni viewport ritagliato sul suo bordo, alla propria scala e rotazione, e nasconde i layer congelati in quel viewport. Il primo viewport di ogni tavola è la tavola stessa e non viene disegnato due volte.

## Errori comuni

- **Aspettarsi che le modifiche ai layer vengano salvate.** Le impostazioni dei layer influiscono solo sulla vista, finché non si apre un altro file.
- **Aspettarsi il controllo dei layer per singolo viewport.** L'elenco {{ui:Layer}} cambia un layer dovunque. I layer congelati in un viewport dal disegno restano congelati lì.
- **Cercare una ricerca di layer o degli stati dei layer.** Non ancora implementato. L'elenco è nell'ordine del disegno.
- **Aspettarsi di lavorare dentro un viewport.** Non c'è nulla da attivare: BimCraft mostra solo la tavola. Usare {{ui:Modello}} per guardare direttamente lo spazio modello.
