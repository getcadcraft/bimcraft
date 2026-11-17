---
title: Solai di qualsiasi forma, aperture e rampe
summary: Disegnare un solaio o una soletta dal suo contorno (un balcone, uno sbalzo, un pianerottolo), praticarvi aperture e disegnare rampe con i loro pianerottoli.
keywords: solaio, soletta, contorno, balcone, sbalzo, pianerottolo, pedana, apertura del solaio, foro, vano, cavedio, vuoto, rampa, pendenza, rampa accessibile, rampa per sedie a rotelle, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Obiettivo

Realizzare solai che non seguono i locali, come un balcone oltre i muri, e disegnare rampe tra i livelli.

## Disegnare un solaio dal suo contorno

1. Attivare {{ui:Disegna}}, scegliere il livello, poi {{ui:Build}} › {{ui:Solaio per contorno}}.
2. Nella riga sotto gli strumenti, scegliere il tipo (soletta di calcestruzzo o solaio in legno), il suo uso (solaio o pianerottolo), lo spessore e quanto sia alta la sua parte superiore sopra il livello (0 = a livello con il pavimento del livello; un valore negativo lo abbassa).
3. Fare clic sugli angoli. Lo strumento si aggancia ai muri, alle linee della griglia e alle loro intersezioni; tenere premuto {{key:Shift}} per mantenere squadrato un bordo. La lunghezza di ogni bordo e l'area sono mostrate man mano. {{key:Backspace}} annulla l'ultimo angolo.
4. Fare di nuovo clic sul primo angolo, fare doppio clic, oppure premere {{key:Enter}} per terminare.

## Praticare un'apertura

Fare clic sul solaio (nella vista 3D, oppure sul suo contorno nella pianta), poi in {{ui:Proprietà}} fare clic su {{ui:Aggiungi un'apertura}} e fare clic sugli angoli dell'apertura all'interno del solaio, terminando come sopra. L'elenco {{ui:Proprietà}} del solaio riporta le sue aperture, ciascuna con {{ui:Elimina}}, e la sua area senza di esse.

## Disegnare una rampa

1. Scegliere {{ui:Build}} › {{ui:Rampa}}. Impostare la sua larghezza, e se va **al livello superiore** oppure **in salita di un dislivello** che si digita.
2. Scegliere come è impostata: **per pendenza** (1:12 come valore di partenza; la rampa è lunga quanto richiede il dislivello) oppure **per lunghezza** (il secondo clic imposta la lunghezza, e la pendenza ne deriva).
3. Fare clic sul piede della rampa (il centro del suo bordo inferiore), poi fare clic nel verso di salita. L'anteprima mostra la sua lunghezza, le sue tratte e la sua pendenza.

Un dislivello superiore a 30 in (760 mm) è diviso in tratte con un pianerottolo di 5 ft (1525 mm) tra l'una e l'altra. Sono valori comuni di pianificazione, non le norme: verificare le regole del luogo di costruzione. Una rampa più ripida di 1:12 è segnalata nelle sue {{ui:Proprietà}}.

## Cosa si vede

- Ogni solaio, apertura e rampa è un solo passaggio: {{key:Mod+Z}} lo annulla.
- Nella pianta, il contorno di un solaio disegnato (un'apertura è disegnata incrociata) e il contorno di una rampa, con le sue tratte, i pianerottoli e una freccia in salita con la sua pendenza.
- Proprietà di un solaio disegnato (tipo, uso, spessore, parte superiore, area, aperture) e di una rampa (larghezza, parte superiore, dislivello, pendenza o lunghezza); {{key:Delete}} elimina entrambi.
- Una rampa verso il livello superiore segue quel livello quando la sua altezza cambia.
- Nel file IFC: un solaio disegnato è una soletta (IfcSlab, un solaio o un pianerottolo) con le sue aperture ritagliate (IfcOpeningElement); una rampa è un IfcRamp fatto di tratte inclinate (IfcRampFlight) e solette di pianerottolo, con la sua pendenza e la sua larghezza.

:::note
I solai disegnati in questo modo restano dove sono stati disegnati. I solai creati con {{ui:Solaio}} seguono i locali quando i muri si spostano: vedere [Locali, solai, controsoffitti e coperture](topic:floors-and-roofs).
:::
