---
title: Lavorare su un modello insieme con Live TeamWork
summary: Cosa cambia in BimCraft mentre si è in una sessione Live TeamWork da CadCraft Studio: le modifiche di tutti allo stesso modello IFC, l'annullamento delle proprie modifiche e l'unione da un browser sulla stessa rete.
keywords: live, live teamwork, studio live, insieme, collaborare, sessione, condividi live, unisciti, ifc, proprietà, rinomina, cursore, puntatore, vedersi a vicenda, nomi, colore, selezione, annulla, host
from: 32061b72
---

## Cosa si imparerà

Cosa succede a un modello IFC quando più persone lo modificano allo stesso tempo. CadCraft Studio avvia e unisce la sessione Live TeamWork (Condividi, Unisciti); questa pagina riguarda il modello stesso.

## Tutti modificano insieme

Il modello dell'host arriva a tutti quelli che si uniscono. Rinominare gli elementi, cambiare i valori delle loro proprietà, inserire, scambiare o rimuovere elementi e elementi della libreria come al solito. Le proprie modifiche si vedono subito; quelle degli altri compaiono un istante dopo essere state fatte. Quando una modifica cambia ciò che si vede (un elemento inserito o rimosso), BimCraft ridisegna il modello e mantiene la vista.

- **Due persone modificano lo stesso elemento:** vince la modifica più recente sulla stessa riga del modello. Un insieme di proprietà condiviso da più elementi viene copiato per l'elemento che si modifica, come sempre, così gli altri mantengono i propri valori.
- **Un elemento appena rimosso da qualcuno** non può più essere modificato: la modifica viene annullata e la barra di stato ne indica il motivo.
- Le nuove righe di ogni persona nel modello ricevono numeri propri, così due persone non ottengono mai lo stesso numero.

## Vedersi a vicenda

Ogni persona nella sessione ha un proprio colore. Nella vista 3D si vede il puntatore di ciascuno come una freccia del suo colore con il nome accanto, sull'elemento che sta indicando, e un riquadro tratteggiato del suo colore intorno a ogni elemento selezionato.

Puntatori, nomi e selezioni valgono solo per la sessione: non vengono mai salvati nel file né finiscono nell'annullamento di nessuno. Scorrono fino alla posizione di ciascuno, quindi restano fluidi anche su una connessione lenta.

## Annulla agisce solo sul proprio lavoro

{{ui:Annulla}} annulla l'ultima modifica propria e lascia intatte quelle degli altri. Quando qualcuno ha cambiato la stessa cosa in seguito, non si annulla nulla e la barra di stato indica chi l'ha fatto.

## Unirsi da un browser

Un collega senza Studio può scansionare l'immagine sotto il codice dell'host con un telefono, un tablet o un computer sulla stessa rete. BimCraft si apre nel browser e apre il modello dell'host non appena l'host consente l'accesso. Un link di invito permette di unirsi da un'altra rete: l'host ha bisogno di una postazione del piano Team Cloud per l'app, gli altri si uniscono gratuitamente, e il link funziona solo finché la sessione dell'host è aperta.

## Quando la sessione termina

Solo l'host salva il modello. Tutti gli altri conservano una copia non salvata; per conservarla, usare Salva come IFC.

:::note
Solo il primo modello della scena viene condiviso. Aprire un altro file durante una sessione lascia la sessione in quella finestra.
:::
