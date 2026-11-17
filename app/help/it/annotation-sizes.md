---
title: Disegnare a grandezza reale, annotare in scala
summary: L'edificio è sempre disegnato a grandezza reale. Testi, quote, etichette, nomi dei locali, cerchietti della griglia e simboli sono dimensionati sulla carta, in millimetri come stampati, e mantengono quella dimensione quando la scala di un disegno passa da 1:100 a 1:50.
keywords: scala dell'annotazione, annotativo, dimensione del testo, altezza del testo, altezza su carta, dimensione del testo della quota, dimensione dell'etichetta, dimensione del nome del locale, cerchietto della griglia, dimensione del simbolo, scala del disegno, 1:50, 1:100, standard dello studio, lettering, disegnare in 1:1, grandezza reale, testo della tavola
from: 94118788
---

## Cosa farai

Impostare una volta, per l'edificio, quanto sono alte le scritte dei disegni sulla carta. Non si scala mai il modello e non si ridimensiona mai il testo per una scala: BimCraft calcola la dimensione dall'altezza sulla carta e dalla scala del disegno.

## Come funziona

- Il modello è a grandezza reale. Un muro lungo 10 m è lungo 10 000 mm a ogni scala.
- Un'annotazione ha un'**altezza su carta**: l'altezza di una lettera maiuscola sul foglio stampato, in millimetri.
- A una scala 1:100 un testo di 2.5 mm è alto 250 mm nel modello; a 1:50 è alto 125 mm. Su carta è 2.5 mm in entrambi i casi.
- I simboli di pianta (elettrici, idraulici) sono disegnati in millimetri su carta e seguono la stessa regola.

## Passaggi

1. Aprire il browser di progetto. Sotto {{ui:Sheets}} fare clic su {{ui:Annotation sizes…}}.
2. Digitare un'altezza in millimetri per i tipi da impostare: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} e {{ui:Schedule text}}. Un campo vuoto mantiene la dimensione propria di BimCraft, mostrata in grigio.
3. Fare clic su {{ui:Save}}. È un'unica operazione che si può annullare.

Da quel momento ogni tavola, il set di tavole, la pianta in PDF e i prospetti e le sezioni usano le dimensioni impostate. La distanza tra la linea di quota e il suo testo, la dimensione di un cerchietto della griglia e l'altezza di una riga dell'abaco crescono con il loro testo.

## Una pianta con una scala propria

Assegnare una scala alla pianta nel suo intervallo di vista ({{ui:Scale}}; vedi [Viste e tavole](topic:views-and-sheets)). Allora:

- a video, i nomi dei locali, le etichette, il testo delle quote e i cerchietti della griglia sono disegnati alla loro dimensione stampata rispetto al modello, quindi si vede ciò che mostrerà la tavola;
- i simboli di pianta e le loro etichette sono dimensionati per quella scala. Se la scala passa da 1:100 a 1:50, sono la metà nel modello e uguali su carta.

Una pianta senza scala propria mantiene il testo fisso a video, e i suoi simboli sono dimensionati per 1:50 (1/4" = 1'-0" in piedi e pollici), come prima.

## Le dimensioni dello studio

Con l'add-on Default Policies attivo, impostare le altezze dello studio in Impostazioni › Globale › Default Policies › {{ui:Annotation sizes on paper}}. Un nuovo edificio le prende quando si fa clic su Crea. In un edificio già avviato, la finestra di dialogo ha {{ui:Use my office's sizes}}. Vedi [Default Policies](topic:default-policies).

## Le dimensioni di un pacchetto normativo

Un pacchetto normativo può fornire le altezze del testo richieste dal suo luogo (l'add-on Building regulations, convenzioni di disegno). Selezionare il pacchetto in Impostazioni › Building regulations, poi nella finestra di dialogo fare clic su {{ui:Use a regulation pack's sizes}}: le caselle si riempiono, si controllano e si salvano. Una dimensione che un pacchetto fornisce in punti è una dimensione del carattere, e viene convertita in altezza delle maiuscole, quindi va verificata. Nulla viene impostato finché non si salva.

## Cosa si vede

- La stessa altezza del testo in millimetri su una tavola a 1:100 e su una tavola a 1:50, mentre la pianta stessa è doppia a 1:50.
- Le dimensioni seguono l'edificio: sono salvate nel suo file IFC.

## Da sapere

- Le dimensioni proprie di BimCraft sono quelle che le sue tavole hanno sempre usato (circa 1.5 mm di maiuscole per il testo delle quote). Non sono uno standard di disegno: impostare quelle dello studio.
- Un'altezza deve essere compresa tra 0.5 e 50 mm.
- Le scritte del cartiglio e le legende delle note chiave non rientrano in questo: mantengono le proprie dimensioni.
