---
title: Rifila, estendi e unisci i muri
summary: Rifilare o estendere i muri fino a un altro muro, e unire due muri nel punto in cui si incontrano, ciascuno come un passo che si può annullare.
keywords: rifila, estendi, angolo, unisci, incontro, pulisci, estremità del muro, angolo del muro, taglia indietro, allunga, accorcia, modifica, TR
from: a6fb2e8b
---

## Cosa si fa

Sistemare i muri disegnati: tagliare indietro un muro che passa oltre un altro, allungare quello che si ferma prima, oppure chiudere un angolo aperto.

## Passi

1. Attivare {{ui:Disegna}} e scegliere il livello nell'elenco dei livelli della pianta.
2. **Rifilare o estendere fino a un muro:** scegliere {{ui:Modifica}} › {{ui:Rifila / estendi}}. Fare clic sul muro a cui rifilare o estendere (il bordo), poi su ciascun muro da modificare. Un muro che passa oltre il bordo viene tagliato fino ad esso, e la parte su cui si fa clic è quella che resta; un muro che si ferma prima viene allungato fino a incontrare il bordo. Il bordo resta scelto, quindi si possono selezionare più muri uno dopo l'altro. Premere {{key:Esc}} per scegliere un altro bordo.
3. **Unire due muri in un angolo:** scegliere {{ui:Modifica}} › {{ui:Angolo}}, fare clic sul primo muro, poi sul secondo. Entrambi arrivano al punto in cui si incontrano, e BimCraft pulisce l'angolo. Quando un muro attraversa l'altro, resta la parte su cui si è fatto clic.
4. Premere {{key:Esc}} per ricominciare, oppure {{key:V}} per tornare a {{ui:Seleziona}}.

## Cosa si dovrebbe vedere

- Mentre si punta un muro, la pianta mostra dove andrebbe, già unito ai muri che incontra, con la sua nuova lunghezza.
- Ogni modifica è un passo: {{key:Mod+Z}} lo annulla.
- Stanze, pavimenti, soffitti, tetti e ciò che segue i muri vengono ricreati, come dopo ogni modifica ai muri. Una stanza chiusa da un angolo compare con il suo numero e la sua area.
- Una porta o una finestra su una parte che viene tagliata viene eliminata insieme ad essa.

## Da sapere

- I muri sono disegnati sulla linea di mezzeria, quindi vengono rifilati ed estesi lungo di essa: un muro incontra la linea di mezzeria dell'altro, e il giunto viene pulito a T o a L.
- BimCraft spiega perché non può farlo: i due muri sono paralleli, la linea del muro passa accanto all'altro muro, una porta o una finestra è di intralcio (spostarla o eliminarla prima), oppure non resterebbe nulla del muro (meno di 1 mm). Un muro che resta più corto di 50 mm viene creato, con un avviso in Problemi: vedi [Consigli sul disegno](topic:drawing-advice).
- Solo i muri disegnati in BimCraft possono essere rifilati o estesi.

Vedi anche [Disegnare muri](topic:draw-walls) e [Modificare un muro, una porta o una finestra](topic:change-a-wall-or-door).
