---
title: Coordinate in BimCraft
summary: Dove si sta lavorando: la posizione del puntatore nella pianta e nella vista 3D, il livello attivo, l'origine del progetto e il punto di rilievo del sito.
keywords: coordinate, dove si trova, posizione, puntatore, lettura, x y z, livello, piano, origine del progetto, origine, punto base, punto di rilievo, sito, coordinate cartografiche, coordinate Est, coordinate Nord, georeferenziazione, unità, posizione
from: 84df5245
---

## Cosa si fa

Sapere a colpo d'occhio dove ci si trova in un modello: su quale livello si sta disegnando, quanto è distante il puntatore dall'origine del progetto e dove si trova il punto di rilievo del sito.

## Dove compaiono i numeri

- **Sopra la vista 3D** (in basso a destra, accanto al cubo di navigazione): spostare il puntatore sul modello. Il riquadro indica il livello su cui si trova il punto e quanto è alto sopra il pavimento di quel livello, poi le **X, Y e Z**. Sullo spazio vuoto legge il punto sul pavimento del livello più basso.
- **Sulla pianta** (in basso a destra, mentre {{ui:Disegna}} è attivo): il livello mostrato dalla pianta e l'altezza del suo pavimento, e le **X e Y** del puntatore mentre si trova sulla pianta.
- Quando il file ha una conversione cartografica (è stato esportato con coordinate cartografiche), entrambi i riquadri aggiungono le **coordinate Est e Nord** sulla griglia cartografica, nelle {{ui:Unità}} scelte (con l'unità sempre scritta accanto; piedi e pollici appaiono come piedi decimali). Un disegno (DWG o DXF) mantiene le proprie unità: il suo riquadro del puntatore le indica e non vengono mai convertite.

Ogni X, Y e Z è misurata dall'**origine del progetto**, nelle {{ui:Unità}} scelte sulla barra degli strumenti (piedi e pollici, pollici, piedi decimali, millimetri, centimetri o metri). La Y positiva punta verso il nord del modello, che non sempre coincide con il nord reale. Le coordinate Est e Nord seguono la stessa scelta (piedi e pollici appaiono come piedi decimali); quando l'unità del sistema cartografico è diversa da quella scelta, viene indicata tra parentesi dopo i numeri, per esempio *(piedi di rilevamento USA)*, così che un topografo possa vedere in quale unità è scritto il sistema stesso.

## I due marcatori

- **Origine del progetto** (un cerchio rosso con una croce): il punto 0, 0, 0 da cui sono misurate tutte le coordinate del modello.
- **Punto di rilievo** (un cerchio blu con un triangolo): il punto di riferimento del sito, per il quale sono indicate la latitudine, la longitudine e la quota, oppure le coordinate cartografiche. Nella vista 3D, puntarlo per leggere dove si trova.

Quando il sito coincide con l'origine del progetto, come in un nuovo edificio disegnato qui, un solo marcatore mostra entrambi. Fare clic sul pulsante a mirino in uno dei due riquadri per nascondere o mostrare i marcatori; BimCraft ricorda la scelta in questo browser.

## Cosa si dovrebbe vedere

- I numeri cambiano mentre si sposta il puntatore, e il riquadro della pianta indica il livello scelto nell'elenco dei livelli.
- I marcatori restano fermi mentre si ruota, si sposta e si ingrandisce la vista.

:::tip
Per leggere latitudine e longitudine di un punto, usare {{ui:Misura}} › {{ui:Posizione}}: consultare la sezione [Misurare distanze, aree delle facce e posizioni in 3D](topic:measure).
:::

:::touch
Su uno schermo a tocco il riquadro 3D non mostra nulla finché non si usa un mouse o una penna: con il dito la vista si sposta.
:::
