---
title: Misurare distanze, aree delle facce e posizioni in 3D
summary: Misurare tra due punti di un modello IFC con aggancio ad angoli e spigoli, leggere la differenza lungo X, Y e Z e misurare l'area di una faccia piana.
keywords: misura, misurazione, distanza, lunghezza, quota, area, area della faccia, aggancio, angolo, spigolo, metro a nastro, righello, distanza di sicurezza, posizione, latitudine, longitudine, lat long, coordinate, georeferenziazione, conversione cartografica, EPSG, rilievo, coordinate est, coordinate nord, WGS 84, datum
from: 5f430bba
---

## Cosa si fa

Verificare una distanza di sicurezza, la lunghezza di una parete o le dimensioni di una faccia direttamente dal modello, senza aprire il programma di modellazione.

## Passaggi

1. Aprire un modello IFC.
2. Fare clic su {{ui:Misura}} nella barra degli strumenti, oppure premere {{key:M}}. Si apre una barra in basso nella vista.
3. **Una distanza:** con {{ui:Distanza}} scelta, fare clic sul primo punto, poi sul secondo. Vicino a un angolo il puntatore si aggancia ad esso, vicino a uno spigolo sullo spigolo; l'etichetta piccola accanto al puntatore indica quale. Ogni coppia di clic produce una misura.
4. **L'area di una faccia:** scegliere {{ui:Area della faccia}} e fare clic su una faccia. L'intera faccia piana si illumina e compare la sua area.
5. **Linee dritte:** tenere premuto {{key:Shift}} mentre si sceglie il secondo punto, oppure premere {{ui:Dritto}} nella barra per mantenerlo attivo. La linea segue l'unico asse più vicino al puntatore (in vista dall'alto, lungo X o Y della pianta; in altre viste lungo X, Y o Z), e l'etichetta del puntatore dice "dritto lungo un asse". {{key:M}} continua ad avviare e fermare la misura.
6. Fare clic su {{ui:Cancella}} per rimuovere le misure, oppure su {{ui:Fine}} (o {{key:Esc}}) per smettere di misurare.

## Cosa si vede

- Una linea tra i due punti con la sua lunghezza, e nella barra la lunghezza con quanto si estende lungo X, Y e Z (negli assi del modello, Z verso l'alto), tutto nell'{{ui:Unità}} scelta nella barra degli strumenti.
- L'area di una faccia in metri quadrati, sulla faccia e nella barra.
- Le etichette restano sulle misure mentre si orbita, si sposta e si zooma.
- Mentre si misura, i clic non selezionano gli elementi. Un piano o un box di sezione taglia comunque il modello, e si può misurare ciò che mostra, facce tagliate incluse.

## Dove si trova un punto sulla Terra

Fare clic su {{ui:Posizione}} nella barra di misura, poi su un punto del modello (si aggancia ad angoli e spigoli come per le distanze). La barra mostra:

- la **latitudine e longitudine**, in gradi decimali e in gradi, primi e secondi, in WGS 84 come impostazione iniziale;
- le **coordinate cartografiche** (est e nord, scritte nell'{{ui:Unità}} scelta nella barra degli strumenti) nel sistema cartografico del modello, per esempio `EPSG:28356`;
- la **quota** e il datum verticale indicato dal file, e il **datum proprio** del file (per esempio GDA94).

{{ui:Copia}} mette tutto negli Appunti su una sola riga. Per cambiare il sistema in cui sono espresse latitudine e longitudine, andare in {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Posizione}}: WGS 84 (come GPS e mappe web), il datum proprio del file, oppure un altro comune come ETRS89 o NAD83.

Questo richiede un modello georeferenziato: uno esportato con coordinate cartografiche (una conversione cartografica verso un sistema proiettato con un codice EPSG). Un modello che ha solo latitudine e longitudine del sito riceve una posizione approssimata, calcolata dal punto del sito e dal suo nord reale, e la barra lo segnala. Con più modelli aperti, ogni punto usa la georeferenziazione del proprio modello.

:::note
Il passaggio tra datum (per esempio da GDA94 a WGS 84) avviene senza file di griglia, quindi è preciso entro pochi metri; la riga di stato indica quanto. Le coordinate cartografiche in sé sono esatte.
:::

## Errori comuni

- **"…non ha georeferenziazione".** Il file non ha conversione cartografica né latitudine e longitudine del sito. Esportarlo di nuovo con il suo sistema di coordinate impostato (coordinate condivise o punto di rilievo nello strumento di modellazione).
- **Coordinate cartografiche ma nessuna latitudine e longitudine.** Il file indica il suo sistema cartografico senza codice EPSG, oppure con uno che non è nell'elenco; la riga di stato dice quale.

- **Il punto cade sulla faccia, non sull'angolo.** L'aggancio guarda l'elemento sotto il puntatore. Avvicinarsi all'angolo, o zoomare.
- **L'area è più piccola del previsto.** Le aperture sono escluse, e una faccia che si piega è più facce: fare clic su ciascuna.
- **{{key:Esc}} ha smesso di misurare.** Il primo {{key:Esc}} elimina una distanza a metà; il secondo ferma.

## Prossimi passi

- [Tagliare un modello IFC con un piano di sezione](topic:section-plane)
- [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate)
