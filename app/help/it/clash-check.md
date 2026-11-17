---
title: Verificare le interferenze
summary: Trovare dove gli elementi di un insieme si incrociano con quelli di un altro — condotti attraverso travi, muri nei solai — in un modello o in più modelli, con una tolleranza, e trasformare un'interferenza in una segnalazione.
keywords: interferenza, rilevamento delle interferenze, verifica delle interferenze, interferenza rigida, collisione, coordinamento, sovrapposizione, tolleranza, mep, struttura
from: 9cb12346
---

## Cosa si fa

Trovare i punti in cui due insiemi di elementi si incontrano, per esempio tutto il modello degli impianti rispetto alla struttura, poi esaminare ciascun punto e tenere come segnalazioni quelli che contano.

## Passaggi

1. Aprire un modello IFC e aggiungere gli altri con {{ui:Aggiungi un modello…}} se si verifica su più modelli. Vedere [Vedere più modelli IFC insieme](topic:several-models).
2. Aprire {{ui:Verifica delle interferenze}} nel pannello di sinistra.
3. In {{ui:Controlla}} e {{ui:Rispetto a}}, scegliere due insiemi: gli elementi selezionati, una classe (su ogni modello aperto), un insieme di ricerca salvato (vedere [Trovare elementi per classe, nome o proprietà](topic:find)), oppure tutto.
4. Impostare quanta sovrapposizione ignorare, in metri. 0.01 ignora gli elementi che si toccano appena.
5. Fare clic su {{ui:Avvia}}. La verifica viene eseguita in background; {{ui:Annulla}} la interrompe.
6. Fare clic su un risultato per visualizzarlo: i due elementi vengono selezionati e mostrati, tutto il resto diventa trasparente e la vista si ingrandisce su di essi.
7. Fare clic su {{ui:Crea una segnalazione}} sotto un risultato per documentarlo nella scheda {{ui:Segnalazioni}}. Vedere [Segnalazioni e file BCF](topic:issues-bcf).

## Cosa si dovrebbe vedere

- Le interferenze elencate con i nomi di entrambi gli elementi (e i loro file, quando sono aperti più modelli) e quanto si sovrappongono, a partire dalla più profonda.
- Le facce che si toccano soltanto, come un muro appoggiato su un solaio o una porta nella sua apertura, non sono interferenze.

## Da sapere

- Questa è una verifica di base delle interferenze rigide: elementi le cui superfici si intersecano. Un elemento completamente nascosto dentro un altro (un tubo incassato in un muro) non viene ancora trovato.
- La profondità è quanto i limiti dei due elementi si sovrappongono al minimo: una guida, non una misura esatta.

## Vedi anche

- [Misurare distanze, aree delle facce e posizioni in 3D](topic:measure)
- [Nascondere, isolare e rendere trasparenti gli elementi](topic:hide-and-isolate)
