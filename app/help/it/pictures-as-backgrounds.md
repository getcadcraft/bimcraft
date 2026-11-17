---
title: Inserire un'immagine sotto la pianta
summary: Posizionare un'immagine PNG, JPEG o WebP (una planimetria scansionata, uno schizzo, una foto del sito, una vista aerea) sotto la pianta di un piano o su un piano verticale, scalarla con due punti, spostarla, ruotarla, sfumarla e bloccarla, vederla in 3D e nel PDF della pianta, e conservarla accanto al modello in un pacchetto.
keywords: immagine, sfondo, PNG, JPEG, WebP, scansione, schizzo, foto, vista aerea, planimetria del sito, scala, opacità, blocca, sottofondo, ricalco
from: e3c78d1f
---

## Posizionare un'immagine

Attivare {{ui:Disegna}}, andare al piano e scegliere {{ui:Immagine}} nel menu {{ui:Build}}. Poi {{ui:Inserisci immagine…}} e scegliere un file PNG, JPEG o WebP. Viene letto nel browser e non viene mai caricato. Compare sotto la pianta, adattato alla vista, e la barra degli strumenti indica che non è ancora scalata. Tutto ciò che si disegna sta sopra di essa.

## Impostare la scala

Scegliere {{ui:Scala}}, fare clic su due punti dell'immagine di cui si conosce la distanza reale (due estremità di una parete su una planimetria scansionata, una quota stampata su uno schizzo), poi digitare la distanza e premere {{key:Enter}}. L'immagine si ingrandisce o si rimpicciolisce attorno al primo punto cliccato. {{key:Esc}} annulla.

## Incollare un'area copiata

In MarkupCraft, {{ui:Copia area}} copia una parte di un foglio PDF come immagine. Tornati in BimCraft, con la pianta di un piano visualizzata, premere {{key:Ctrl+V}} (oppure {{ui:Incolla}} nel menu {{ui:Modifica}}): l'area finisce sulla pianta come immagine, centrata dove si trova il puntatore (oppure al centro della vista). Se il foglio aveva una scala di disegno, entra alla sua dimensione reale, quindi una parete su di esso è lunga quanto le proprie pareti. Senza scala entra alla dimensione del foglio e si avvia {{ui:Scala}}, così si possono fare clic su due punti e digitare la loro distanza. Un'area copiata come sovrapposizione inizia con l'opacità con cui è stata copiata. È un solo passaggio di annullamento e viene conservata come qualsiasi altra immagine.

{{ui:Incolla}} usa ciò che è stato copiato per ultimo: un'area copiata oppure qualcosa copiato in BimCraft. {{key:Ctrl+V}} incolla anche qualsiasi altra immagine PNG, JPEG o WebP negli Appunti, posizionata come {{ui:Inserisci immagine…}} e non ancora scalata. Un'area copiata viene ricordata per sei ore.

## Spostare, ruotare, sfumare, bloccare

{{ui:Sposta}} richiede un punto base sull'immagine e poi il punto in cui deve andare. {{ui:Ruota}} richiede un angolo in gradi, attorno al centro dell'immagine. {{ui:Opacità}} la sfuma in modo che le linee disegnate risaltino. {{ui:Blocca}} impedisce che si sposti mentre si disegna; un'immagine bloccata consente comunque di cambiarne l'opacità e di nasconderla. Ogni modifica è un passaggio di annullamento.

## Più immagini, più piani

Un'immagine appartiene al piano su cui è stata posizionata e compare nella pianta e nella pianta del controsoffitto di quel piano. Fare clic su un'immagine per lavorarci, oppure scegliere dall'elenco. {{ui:Nascondi}} la disattiva senza rimuoverla; {{ui:Rimuovi}} (oppure {{key:Delete}}) la toglie dal modello.

## Immagini nella vista 3D

Ogni immagine si trova anche nella vista 3D come piano piatto: un'immagine di pianta giace sul suo piano, un'immagine su un piano verticale sta sopra la sua linea di sezione. È disegnata sopra il modello senza nasconderlo, e il modello nasconde la parte dell'immagine che gli sta dietro. Le immagini sovrapposte si ordinano per distanza. Opacità, Nascondi, Blocca e Rimuovi funzionano allo stesso modo, e {{ui:Mostra in 3D}} disattiva tutti i piani solo nella vista 3D. Un piano contiene al massimo 8 immagini, per mantenere veloci le viste.

## Un'immagine su un piano verticale

Sotto {{ui:Posiziona su}} scegliere {{ui:Piano verticale (linea di sezione)}}, poi {{ui:Inserisci immagine…}}. Fare clic sulle due estremità di una linea sulla pianta (l'estremità di una faccia di parete si aggancia), oppure scegliere in {{ui:Su una linea di sezione}} una linea di sezione con nome del piano, e non serve nessun clic. L'immagine sta sul piano sopra quella linea, larga quanto la linea. Impostarne la {{ui:Larghezza}}, la posizione {{ui:Lungo la linea}} e l'{{ui:Altezza dal livello}} digitando; {{ui:Ruota}} la ruota nel proprio piano. Un'immagine verticale non è disegnata sotto la pianta; la pianta mostra la sua linea mentre ci si lavora. BimCraft non ha una finestra di sezione 2D interattiva: sezioni e prospetti sono disegnati sulle tavole, e le immagini non vengono ancora stampate in quelle viste di tavola.

## Stampa

{{ui:Vista di stampa}} su una pianta scrive le immagini del piano nel PDF sotto il disegno, alla loro scala, rotazione e opacità, ritagliate al foglio; un'immagine nascosta resta esclusa. Un JPEG viene inserito così com'è; le altre immagini vengono prima ridotte a 200 dpi sul foglio.

## Conservate accanto al modello

I byte dell'immagine non vengono scritti nel testo IFC. Il modello fa riferimento a ciascuna per nome (un IfcDocumentReference come pictures/<id>.png) e i byte viaggiano in un pacchetto di progetto. Usare {{ui:Salva come pacchetto…}} (oppure {{ui:Salva come IFC}} e sceglierlo): si ottiene un unico file .ccbundle con il modello e le sue immagini; l'IFC resta piccolo e le modifiche restano veloci. Aprendo il .ccbundle le immagini tornano.

Un .ifc semplice non può contenere un'immagine senza diventare grande. Quando se ne salva uno, BimCraft indica quante immagini sono conservate all'esterno e propone un pacchetto, oppure un IFC semplice che incorpora le immagini fino a 512 KB e lascia fuori le altre. Un .ifc semplice aperto senza il suo pacchetto mostra quelle immagini come mancanti e Problemi le elenca; aprire il .ccbundle in cui sono state salvate. I file salvati dalla prima versione, con l'immagine dentro l'IFC, si aprono ancora, e un salvataggio come pacchetto sposta fuori le loro immagini. Un'immagine viene conservata così com'è fino a 6 MB; una più grande viene prima ridotta, e viene segnalato. Gli altri programmi aprono il modello e ignorano le immagini. Un'immagine non ancora scalata è elencata in Problemi come nota.

## Nelle tavole di sezione e di prospetto

Un'immagine su un piano verticale (scegliere {{ui:Verticale}} nel pannello delle immagini e fare clic sulle due estremità di una linea, oppure collocarla su una linea di sezione con nome) è stampata nelle viste di tavola che la guardano direttamente. Una sezione mostra un'immagine che sta sulla sua linea di taglio, oppure che è stata posta su quella linea di sezione per nome. Un prospetto mostra ogni immagine verticale il cui piano è rivolto verso di esso. L'immagine è disegnata sotto le linee della vista, alla scala della vista, ritagliata alla vista, e mantiene la sua opacità. Aprire {{ui:Tavole…}} per vederla; il PDF della tavola la include come immagine. Vista da dietro, un'immagine è specchiata, come in 3D. Le immagini nascoste sono escluse.
