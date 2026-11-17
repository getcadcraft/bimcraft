---
title: Visualizzare un disegno DWG o DXF
summary: Aprire un DWG o DXF, spostarsi nello spazio modello e nelle tavole, leggere le coordinate e vedere ciò che non è ancora disegnato.
keywords: blocchi dinamici, stati di visibilità, dwg, dxf, cad, disegno, 2d, visualizzatore, pan, zoom, spazio modello, spazio carta, layout, coordinate, apri dwg
from: 4db3122a
---

## Cosa farai

Aprire un disegno CAD, vederlo in 3D o 2D, muoversi al suo interno, passare dallo spazio modello alle sue tavole e leggere le coordinate. BimCraft mostra i disegni DWG e DXF; non li modifica né li salva. Per modificarne uno, fare clic su {{ui:Modifica in CadCraft}} e il disegno si apre nell'app di disegno CadCraft in una nuova scheda.

## Passaggi

1. Fare clic su {{ui:Scegliere un file}}, oppure trascinare il disegno nella pagina.
2. Scegliere un file `.dwg` o `.dxf`.
3. Attendere mentre la barra di stato indica "Lettura del disegno…". I disegni grandi richiedono alcuni secondi. Poi indica quanto è durata la lettura, "rendering…" mentre viene disegnata la prima immagine, e quanto è durata.
4. Il disegno si apre in 3D, il modo più rapido per mostrare un disegno grande (vedi [Vedere un disegno DWG o DXF in 3D](topic:dwg-in-3d)). Fare clic su {{ui:Modello}} per la vista 2D piana. Per aprire sempre i disegni in 2D, impostare {{ui:Impostazioni}} › {{ui:BimCraft}} › **I disegni si aprono in** su {{ui:Modello (2D)}}. Un disegno senza nulla nello spazio modello, oppure un browser che non riesce a mostrare il 3D, si apre in 2D.
5. Osservare le schede sopra il disegno: prima {{ui:Modello}}, poi una scheda per ogni tavola, nell'ordine proprio del disegno.
6. Fare clic su una scheda di tavola per vedere quella tavola: il foglio, con il modello mostrato attraverso le sue viewport.
7. Fare clic su {{ui:Modello}} per tornare allo spazio modello.
8. Spostare il puntatore sul disegno e leggere le coordinate X e Y nell'angolo.

## Cosa si dovrebbe vedere

- Il disegno, adattato alla finestra. I colori seguono il disegno; le linee bianche (colore 7) vengono disegnate nel colore di tratto del tema, e i colori chiari vengono scuriti sul tema chiaro perché restino leggibili.
- Il pannello {{ui:Disegno}} a sinistra: file, dimensione, formato (per esempio "AutoCAD 2018 (AC1032)"), unità, conteggio di entità e layer, numero di tavole e, se presenti, i disegni collegati e le attrezzature.
- L'elenco {{ui:Layer}} a sinistra.
- A destra: come spostarsi, disegni e immagini collegate, e **Non ancora disegnato**.

## Spostarsi

:::mouse
| Per | Fare questo |
|---|---|
| Pan | Trascinare con un tasto qualsiasi del mouse |
| Zoom | Far scorrere la rotella; il punto sotto il puntatore resta fermo |
| Adatta | Doppio clic, premere {{key:F}}, oppure fare clic su {{ui:Adatta}} |
:::

:::mac mouse
Con il trackpad, lo scorrimento a due dita **fa lo zoom**, non il pan. Anche il pizzico fa lo zoom. Per spostarsi, fare clic e trascinare.
:::

:::touch
Trascinare con un dito per il pan. Lo zoom a pizzico per i disegni non è ancora implementato: toccare {{ui:Adatta}} per vedere l'intera tavola, e usare il mouse o il trackpad per ingrandire.
:::

## Blocchi dinamici

Un blocco dinamico viene disegnato come lo mostra il disegno: ogni blocco inserito nello stato di visibilità con cui il disegno è stato salvato (Plan o Front, Single bowl o Double bowl). A destra, **Blocchi dinamici** elenca ogni blocco inserito nello spazio modello: quanti sono, gli stati che mostrano e tutti gli stati che il blocco possiede. In {{ui:3D}}, fare clic su un blocco inserito per vedere in Proprietà **Blocco dinamico**, **Stato mostrato** e **Altri stati**. BimCraft non cambia stato.

## Non ancora disegnato

Alcuni tipi di oggetti non vengono disegnati in questa versione. Sono conteggiati sotto **Non ancora disegnato** a destra ("Queste parti del disegno vengono saltate per ora, senza essere indovinate."), così si sa che qualcosa manca. Vengono disegnati: linee, polilinee, archi, cerchi, ellissi, spline, tratteggi e riempimenti pieni, testo e testo multilinea, blocchi con attributi, quote, linee di richiamo e linee di richiamo multiple, tabelle, immagini e viewport. Le facce 3D, le mesh poliedriche e le mesh poligonali vengono disegnate come i loro spigoli visti dall'alto; passare a {{ui:3D}} per vederle come superfici.

Un DXF binario non si apre: BimCraft lo indica. Salvarlo di nuovo come DXF ASCII, oppure come DWG, dal programma che lo ha creato.

## Errori comuni

- **Il disegno sembra vuoto.** Alcuni layer possono essere spenti o congelati nel disegno stesso; in {{ui:Layer}} partono deselezionati. Fare clic su {{ui:Tutti accesi}}. Se la barra di stato dice "*name* è un disegno vuoto: non contiene linee, testo o blocchi.", non c'è nulla al suo interno.
- **Una tavola mostra una cornice vuota.** La tavola può dipendere da disegni collegati. Vedi [Trovare disegni e immagini collegati](topic:dwg-linked-files).
- **Il testo appare un po' diverso.** BimCraft disegna il testo con un carattere sans-serif stretto, non con i caratteri propri del disegno, quindi il testo può essere un po' più largo o più stretto che nel programma che lo ha creato.
- **"*name* non può essere letto. Potrebbe essere danneggiato, oppure salvato in un formato che il lettore non gestisce ancora."** La parentesi finale indica il codice di formato del file. Salvarlo dal programma che lo ha creato come DWG più vecchio o come DXF, e riprovare.
- **Aspettarsi di misurare, disegnare o modificare.** BimCraft si limita a visualizzare i disegni. Fare clic su {{ui:Modifica in CadCraft}} per aprire lo stesso file nell'app di disegno CadCraft, che lo modifica e salva una copia come DWG o DXF. Il file originale non cambia, e i disegni collegati restano in BimCraft. Il pulsante compare solo dove CadCraft è disponibile.

## Avanti

- [Vedere un disegno DWG o DXF in 3D](topic:dwg-in-3d)
- [Lavorare con layer e tavole](topic:dwg-layers-sheets)
- [Controllare un disegno nella vista di stampa](topic:print-view)
