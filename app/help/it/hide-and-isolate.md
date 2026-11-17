---
title: Nascondere, isolare e rendere trasparenti gli elementi
summary: Selezionare più elementi, nasconderli, mostrare solo quelli, oppure mostrarli con tutto il resto trasparente, e poi riportare tutto visibile.
keywords: nascondi, isola, trasparenza, trasparente, fantasma, raggi X, mostra tutto, rendi visibile, selezione multipla, selezione di più elementi, clic con Ctrl, clic con Shift, visibilità
from: 97e98b8c
---

## Cosa si ottiene

Ridurre la vista a ciò che si sta guardando: nascondere gli elementi che intralciano, mostrare solo quelli selezionati, oppure mantenere tutto il resto sullo schermo come un contorno tenue, così da sapere ancora dove ci si trova.

## Passaggi

1. Aprire un modello IFC. Vedere [Aprire un modello IFC e osservarlo in 3D](topic:open-ifc-model).
2. Fare clic su un elemento per selezionarlo. Per selezionarne altri, tenere premuto {{key:Mod}} o {{key:Shift}} e fare clic su ciascuno. Fare clic su un elemento già selezionato in quel modo lo deseleziona.
3. Aprire {{ui:Mostra}} nella barra degli strumenti e scegliere cosa fare, oppure premere il suo tasto:
   - {{ui:Nascondi}} ({{key:H}}) nasconde gli elementi selezionati.
   - {{ui:Isola}} ({{key:I}}) mostra solo gli elementi selezionati.
   - {{ui:Trasparenza}} ({{key:T}}) mostra gli elementi selezionati così come sono e tutto il resto trasparente.
4. Fare clic su {{ui:Mostra tutto}} nello stesso menu, oppure premere {{key:Shift+H}}, per mostrare di nuovo ogni elemento.
5. Per tagliare via tutto ciò che sta attorno agli elementi selezionati, fare clic su {{ui:Box di sezione intorno alla scelta}} nello stesso menu, oppure premere {{key:Shift+X}}. Vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane).

## Risultato atteso

- Con più elementi selezionati, {{ui:Proprietà}} indica quanti sono e li elenca per classe. Fare clic su uno solo per vederne le proprietà.
- Gli elementi nascosti non possono essere selezionati: un clic colpisce ciò che sta dietro di essi.
- Anche gli elementi trasparenti non possono essere selezionati, quindi si può fare clic direttamente attraverso i muri fino a ciò che è stato isolato.
- Gli spigoli si nascondono con il proprio elemento e diventano tenui insieme a esso.
- Nascondere, isolare e la trasparenza restano attivi durante la modifica, l'inserimento di elementi di libreria o il taglio del modello con un piano di sezione. Aprire un altro modello mostra di nuovo tutto.

## Errori comuni

- **Le voci del menu sono grigie.** Non c'è nulla di selezionato. Selezionare prima un elemento; puntare una voce per leggere perché non può agire.
- **Isola ha mostrato un muro che avevo nascosto.** Isolare mostra esattamente ciò che è stato selezionato, nascosto o no.
- **Manca un intero piano.** Dipende dall'elenco {{ui:Piani}}, non da {{ui:Mostra tutto}}: spuntare di nuovo il piano.

## Argomenti successivi

- [Mostrare e nascondere piani, spazi e spigoli](topic:storeys-and-spaces)
- [Tagliare un modello IFC con un piano di sezione](topic:section-plane)
