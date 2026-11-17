---
title: Prospetti, sezioni e tavole
summary: Disegnare linee di sezione in pianta, poi aprire Tavole per un set pronto alla stampa ricavato dal modello: piante di ogni piano, i quattro prospetti, sezioni dell'edificio, abachi e ossature dei muri, con cartigli e scale, in un unico PDF.
keywords: tavole, set di disegni, documenti di costruzione, stampa, plot, pdf, prospetto, prospetti, prospetto nord, sezione, sezione dell'edificio, linea di sezione, taglio, linee nascoste, cartiglio, numero tavola, scala, 1/4" = 1'-0", 1:50, 1:100, carta, 11x17, 24x36, A3, A1, set per la richiesta di permesso
from: 91ed0cde
---

## Obiettivo

Creare un set di disegni dal modello: la pianta di ogni piano, i prospetti nord, est, sud e ovest, una sezione dell'edificio per ogni linea di sezione, gli abachi di porte, finestre, locali e legname, e un prospetto di ciascun muro con ossatura. Il set viene ridisegnato dal modello ogni volta che lo si apre, quindi corrisponde sempre a ciò che è stato costruito.

## Disegnare una linea di sezione

1. Su un piano, aprire {{ui:Build}} e scegliere {{ui:Linea di sezione}}.
2. Fare clic dove inizia la linea e dove finisce. La linea corta al centro indica il lato verso cui guarda la sezione: la sinistra della linea, andando dal primo clic al secondo.
3. La linea appare in pianta con le sue testate e la sua lettera (A, poi B, e così via).

Scegliere la linea per modificarla in **Proprietà**: la sua lettera, **Inverti la vista** per guardare dall'altra parte, e **Guarda fino a** per fermare la vista a una distanza impostata dietro il taglio (0 mostra tutto ciò che sta dietro). Premere {{key:Delete}} per rimuoverla.

## Aprire le tavole

1. Fare clic su {{ui:Tavole}} nella barra del modello (accanto a {{ui:Stampa}}).
2. Le tavole sono elencate a sinistra: **A-101** e seguenti per le piante, **A-201** per i prospetti, **A-301** per le sezioni, **A-401** per gli abachi e **S-101** per l'ossatura dei muri. Fare clic su una per vederla.
3. Scegliere il **Formato carta**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 o A1. Il formato mantiene il proprio nome standard e la sua dimensione è scritta nelle {{ui:Unità}} scelte, per esempio *Letter · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. Fare clic su {{ui:Scarica il set come PDF}}: una pagina per tavola.

## Note standard da un pacchetto normativo

In una tavola, {{ui:Note standard}} permette di inserire note da un pacchetto normativo (per disciplina) nella colonna di destra della tavola. Ogni nota conserva il pacchetto e la clausola da cui proviene, e la tavola stampata indica quando quel pacchetto non è verificato. Le note sono un punto di partenza: il responsabile del disegno decide che cosa dicono. Richiedono l'add-on Regolamenti edilizi.

## Cosa c'è sulle tavole

- **Le piante** mostrano muri, porte, finestre, locali con le rispettive aree, quote e linee di sezione, alla scala standard più grande che entra: 1/4" = 1'-0" o più piccola (1:50 o più piccola in millimetri).
- **I prospetti** sono disegnati dal modello 3D con le linee nascoste eliminate, due per tavola, tutti alla stessa scala, con una linea di terra sotto di essi. Tetto, fondazioni e terreno appaiono come sono modellati.
- **Le sezioni** riempiono ciò che il taglio attraversa (muri, solai, tetto) e disegnano ciò che si vede oltre.
- **Prospetti e sezioni riportano le loro annotazioni:** un segno per ogni piano con nome e quota a destra, l'altezza tra i piani a sinistra, e, su un prospetto, la larghezza dell'edificio sotto di esso e un'etichetta (D1, W1) su ogni porta e finestra di un muro rivolto verso chi guarda. Per i muri propri di un locale vedere [Prospetti interni](topic:interior-elevations).
- **Gli abachi** sono le stesse tabelle di {{ui:Abachi}} nella barra del modello.
- **L'ossatura** mostra montanti, cordoli, architravi e davanzali di ogni muro con ossatura come visti dall'esterno, così una squadra può tracciarla. Vedere [Ossatura di muri, solai e tetti](topic:framing).

Ogni tavola ha un cartiglio con il suo numero, il suo titolo, il nome del file e la data.

:::tip
Le tavole derivano dal modello: per modificare un disegno, modificare il modello e riaprire {{ui:Tavole}}.
:::

:::note
I prospetti e le sezioni mostrano solo linee e campiture: quote, segni di piano e note su di essi non sono ancora implementati.
:::
