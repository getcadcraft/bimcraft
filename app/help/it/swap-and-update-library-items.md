---
title: Sostituire un elemento posizionato e aggiornare gli elementi della libreria
summary: Sostituire un elemento della libreria posizionato con un altro, mantenendo la sua posizione e il suo numero di elemento, e verificare in Libreria le versioni più recenti di tutto ciò che è nel modello.
keywords: sostituisci, sostituzione, sostituto, aggiorna, versione più recente, verifica aggiornamenti, libreria, ritirato, cambio di licenza, numero dell'elemento
from: 8bdfe01d
---

## Cosa si fa

Cambiare idea su un elemento senza spostarlo di nuovo, e tenere aggiornati gli elementi della libreria presenti in un modello.

## Sostituire un elemento

1. Fare clic su un elemento della libreria posizionato nel modello.
2. In {{ui:Proprietà}}, fare clic su {{ui:Sostituisci elemento…}} nella casella **Elemento della libreria**. Si apre la scheda {{ui:Libreria}}.
3. Trovare il nuovo elemento e fare clic sulla sua scheda.
4. Fare clic su {{ui:Sostituisci … con questo}}.

L'elemento mantiene posizione, rotazione, piano, numero dell'elemento, quantità e note. Il suo tipo, la forma e i dati dell'elemento cambiano in quelli del nuovo elemento. Gli elementi posizionati nello stesso modo condividono un tipo, come quando si posizionano.

Un elemento che ha delle varianti (vedere [Posizionare e sostituire un elemento della libreria con varianti](topic:library-variants)) elenca le altre varianti in cima alla scheda {{ui:Libreria}} quando lo si sostituisce: un clic per ciascuna.

Quando il nuovo elemento è una cosa di tipo diverso, per esempio un lavello al posto di un tavolo, la classe IFC dell'elemento cambia di conseguenza (qui da elemento di arredo a terminale sanitario), così altri software lo catalogano correttamente. Resta lo stesso elemento, con lo stesso GlobalId, quindi i collegamenti a esso continuano a funzionare. {{key:Mod+Z}} ripristina la vecchia classe con il vecchio elemento.

## Verificare gli aggiornamenti

1. Fare clic su {{ui:Aggiornamenti}} nella barra degli strumenti (oppure su {{ui:Verifica aggiornamenti}} nella casella di un elemento della libreria).
2. Leggere l'elenco: ogni elemento della libreria nel modello con la sua versione nel modello, l'ultima versione e uno stato: **Aggiornato**, **Versione più recente**, **Ritirato** o **Non trovato**. Indica anche cosa è cambiato (geometria, dati, licenza o correzione).
3. Fare clic su {{ui:Aggiorna}} su una riga, oppure su {{ui:Aggiorna tutto}}.

## Cosa si dovrebbe vedere

- "Aggiornati *n* posizionamenti. Posizioni, numeri degli elementi, quantità e note sono conservati."
- Righe "Aggiornato: *elemento*" nell'elenco delle modifiche. {{key:Mod+Z}} annulla ciascuna.

## Da sapere

- Solo gli elementi provenienti dalla Libreria possono essere verificati. Gli elementi da file non hanno un id di libreria.
- Quando una licenza è cambiata, la copia già posizionata mantiene la licenza con cui è arrivata finché non la si aggiorna.
- Un elemento **Ritirato** non viene proposto per nuovi posizionamenti. Uno ritirato per motivi di copyright non può essere scaricato affatto; sostituirlo con {{ui:Sostituisci elemento…}}.
- Una variante posizionata resta quella variante se la versione più recente dell'elemento la prevede ancora; altrimenti assume la variante predefinita dell'elemento.
- La verifica invia solo gli id e le versioni degli elementi, mai il modello.
