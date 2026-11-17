---
title: Cavedi e aperture attraverso i solai
summary: Un cavedio è un unico contorno che taglia ogni solaio, controsoffitto e tetto tra due piani. Un'apertura verticale ne taglia uno. Apertura nel muro taglia un muro.
keywords: cavedio, vano ascensore, vano scala, apertura per scala, alzata, apertura verticale, apertura nel solaio, apertura nel controsoffitto, apertura nel tetto, lucernario, foro nel solaio, apertura nel muro, IfcOpeningElement, detrazione, area netta
from: 8e9e1641
---

## Obiettivo

Praticare un vano ascensore attraverso un edificio con un unico schizzo, praticare un foro in un solaio e leggere quanto è stato sottratto alle aree.

## Dove si trovano gli strumenti

- Layout a barra multifunzione: {{ui:Architettura}} › **Apertura** › {{ui:Cavedio}}, {{ui:Apertura verticale}} e {{ui:Apertura nel muro}}.
- Layout classico: nella barra Disegna, il menu {{ui:Locali}} (Cavedio, Apertura verticale) e il menu {{ui:Muri}} (Apertura nel muro).

## Un cavedio

1. Aprire la pianta del piano da cui inizia il cavedio. Scegliere {{ui:Cavedio}}.
2. Nella riga scegliere il {{ui:Piano di base}} e il {{ui:Piano superiore}}, e gli offset se inizia o finisce sopra o sotto di essi.
3. Fare clic sugli angoli del contorno. Fare di nuovo clic sul primo angolo, fare doppio clic o premere Invio per terminare.
4. Ogni solaio, controsoffitto e tetto tra le due altezze viene tagliato. La riga di stato indica quanti.

Un cavedio è un unico oggetto. Scegliere il suo contorno su un qualsiasi piano che attraversa: Proprietà riporta il nome, i piani e gli offset, ciò che taglia e l'area sottratta. Modificandolo, ogni apertura lo segue. Eliminandolo, scompaiono tutte le aperture. Ciascuna operazione è un solo passo di Annulla.

Continua a tagliare: un solaio creato in seguito tra i suoi piani viene tagliato senza richiesta, e un solaio eliminato viene escluso.

Il solaio su cui poggia il cavedio non viene tagliato (la sua parte superiore è la base). Assegnare alla base un offset negativo per tagliare anche quello. Assegnare alla parte superiore un offset positivo per passare attraverso il tetto.

## Un'apertura verticale

1. Scegliere {{ui:Apertura verticale}}. Nella riga scegliere che cosa tagliare: il solaio, il controsoffitto o il tetto.
2. Fare clic sugli angoli del contorno e terminare come sopra.
3. Il solaio, il controsoffitto o il tetto di questo piano sotto il contorno viene tagliato. Appartiene a quell'unico elemento: eliminando il solaio, l'apertura va con esso.

## Un'apertura nel muro

{{ui:Apertura nel muro}} è lo strumento di [Modellare un muro](topic:wall-shape): fare clic su un muro in pianta, oppure su due angoli della sua faccia in 3D.

## Quantità

Secondo la regola di misurazione dei solai, l'area netta di un elemento è la sua area lorda meno ciò che gli viene tagliato. Un cavedio o un'apertura verticale è una detrazione su ciascun solaio e controsoffitto che tagliano; gli abachi di solai e finiture e le quantità IFC mostrano gli stessi valori. Su un tetto la detrazione è l'area della superficie del tetto: l'area in pianta divisa per il coseno della pendenza.

Un contorno che sporge dal bordo detrae solo la parte che giace sull'elemento.

## Se non si taglia nulla

Un cavedio senza ostacoli viene comunque creato e lo dichiara: taglierà ciò che sarà costruito in seguito. Un'apertura verticale ha bisogno di qualcosa sotto di sé; se non c'è nulla, la riga di stato lo indica e non viene creato nulla.

## Nell'IFC

Ogni taglio è un IfcOpeningElement con IfcRelVoidsElement verso l'elemento tagliato, così qualsiasi programma IFC mostra il foro. Un tetto viene tagliato faccia per faccia. Il cavedio stesso è un IfcGroup delle sue aperture.

## Non ancora implementato

- Contorni curvi.
- I muri di un cavedio: disegnarli con lo strumento Muro.
- Modifica del contorno trascinandone gli angoli (cambiarlo in Proprietà, oppure eliminarlo e disegnarlo di nuovo).
- Le Proprietà di un solaio disegnato mostrano solo la sua area al netto delle proprie aperture; gli abachi e le quantità IFC includono quelle del cavedio.

Vedere anche [Locali e separatori di locale](topic:rooms-and-separators).
