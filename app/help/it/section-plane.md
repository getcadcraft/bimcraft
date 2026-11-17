---
title: Tagliare un modello IFC con un piano di sezione
summary: Tagliare il modello 3D dall'alto, dal fronte o dal lato, oppure mantenere solo ciò che si trova dentro un box di sezione o un volume di più box con facce inclinate, per vedere all'interno; spostare il taglio trascinandolo o digitando, invertirlo e scegliere cosa mostra il taglio.
keywords: sezione, piano di sezione, box di sezione, grip, trascina, margine, riquadro di selezione, box di ritaglio, taglio, ritaglio, affettare, taglio in pianta, pianta, prospetto, interno, inverti, distanza, volume di sezione, sezione a gradini, a L, inclinazione, taglio inclinato, piano obliquo, piano aggiuntivo
from: 6315e71a
---

## Cosa si fa

Tagliare un modello IFC con un piano per vederne l'interno: dall'alto per una pianta, oppure dal fronte o dal lato per una sezione dell'edificio.

## Passaggi

1. Aprire un modello IFC ed esplorarlo in 3D. Vedere [Aprire un modello IFC ed esplorarlo in 3D](topic:open-ifc-model).
2. Fare clic su {{ui:Sezione}} nella barra degli strumenti, oppure premere {{key:X}}. Il modello viene tagliato a metà altezza e sotto la barra degli strumenti compare una barra.
3. Scegliere da dove tagliare: {{ui:Sopra}}, {{ui:Anteriore}} o {{ui:Lato}}. Anteriore e Lato ruotano anche la vista per guardare il taglio.
4. Spostare il taglio: trascinare il cursore **Distanza**, oppure digitare una distanza in metri nella casella e premere {{key:Enter}}. È possibile digitare anche millimetri, ad esempio `1200 mm`.
5. Fare clic su {{ui:Inverti}} per mantenere l'altro lato del taglio.
6. Fare clic su un elemento del taglio per vederne le proprietà.
7. Fare clic su {{ui:Disattivato}}, fare di nuovo clic su {{ui:Sezione}}, oppure premere {{key:X}} per rimuovere il taglio.

## Un box di sezione

Fare clic su {{ui:Box}} nella stessa barra per mantenere solo ciò che si trova dentro un box. Ciascuno di {{ui:X}}, {{ui:Y}} e {{ui:Z}} ha due cursori: dove inizia e dove finisce il box, in metri dal bordo del modello. I valori compaiono accanto ad essi.

- {{ui:Box intorno alla scelta}} adatta il box agli elementi selezionati e ingrandisce la vista su di essi. Lascia 300 mm di margine su ogni lato; per modificarlo, andare in {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Spazio intorno alla scelta}}.
- Con elementi selezionati, {{ui:Mostra}} › {{ui:Box di sezione intorno alla scelta}} oppure {{key:Shift+X}} fa lo stesso in un solo passaggio, anche quando non c'è alcun taglio attivo.
- **Grip** sul box lo spostano con il puntatore: trascinare un quadratino al centro di una faccia per spostare quella faccia, uno al centro di uno spigolo per spostare le due facce che vi si incontrano, oppure uno su un angolo per spostare le tre. I cursori seguono. In {{ui:Sopra}} un angolo sposta il box in pianta, in {{ui:Anteriore}} o {{ui:Lato}} in prospetto.
- {{ui:Intero modello}} riapre il box su tutto il modello.
- {{ui:Sopra}}, {{ui:Anteriore}} o {{ui:Lato}} tornano a un solo piano.

## Un volume di più box, facce inclinate e piani aggiuntivi

Un box non è sempre la forma necessaria: una sezione a gradini, un'ala a L oppure un taglio lungo una parete non squadrata rispetto alla griglia.

1. In {{ui:Box}}, fare clic su {{ui:Aggiungi un box}}. Il taglio ora mantiene ciò che si trova dentro **uno qualsiasi** dei box, quindi due box formano un volume a gradini o a L. L'elenco accanto indica quale box modificano i cursori ({{ui:Box 1}}, {{ui:Box 2}}…); {{ui:Rimuovi questo box}} elimina quello scelto. Un volume può contenere fino a 8 box.
2. Aprire {{ui:Inclinazione e piani}} per modellare il box scelto:
   - Scegliere una {{ui:Faccia}} e digitare di quanto si inclina in ciascuna direzione, in gradi (fino a 80). La faccia ruota attorno al proprio centro; le altre facce restano dove le posizionano i cursori. {{ui:Squadra}} la riporta indietro.
   - {{ui:Aggiungi un piano}} taglia il box con un altro piano. {{ui:Facce}} indica la direzione verso cui è rivolto il lato eliminato, in gradi da X verso Y; {{ui:Pendenza}} è quanto ruota verso l'alto (0 per un piano verticale, 90 per uno orizzontale); {{ui:Distanza}} è la distanza del piano dal centro del box, in metri. × lo rimuove. Un box può avere fino a 6 piani aggiuntivi.
3. Dove il volume taglia solidi, le facce di taglio vengono riempite come prima, anche dove due box si incontrano in un gradino.

:::tip
Se il contorno scompare e non resta nulla, le inclinazioni o i piani non lasciano nulla dentro quel box; la barra lo segnala. Ridurre l'inclinazione di una faccia o modificare la distanza di un piano.
:::

## Un edificio ruotato nel proprio sito

Molti modelli collocano l'edificio con un angolo rispetto agli assi del file (nord vero, coordinate condivise). Quando le pareti sono inclinate, una nuova sezione parte squadrata rispetto all'edificio: {{ui:Anteriore}}, {{ui:Lato}} e il box seguono le proprie pareti, e {{ui:Squadrato rispetto all'edificio}} nella barra di sezione è attivo. Farvi clic per tornare agli assi del modello, e di nuovo per ripristinare (la barra di stato indica di quanto è ruotato l'edificio). Con **Impostazioni › BimCraft › Un edificio ruotato nel proprio sito › Come collocato nel sito**, sezioni e viste partono invece dagli assi del modello. Vedere [Impostazioni](topic:settings).

## Cosa si dovrebbe vedere

- **Sopra** mantiene ciò che sta sotto il taglio, così si guarda dall'alto nei locali. La distanza è misurata verso l'alto dal fondo del modello.
- **Anteriore** mantiene ciò che sta dietro il taglio, visto dal fronte; **Lato** mantiene ciò che sta oltre, visto dal lato. La distanza è misurata dal fronte o dal lato del modello.
- Un sottile contorno colorato indica dove si trova il piano.
- Dove il piano taglia una parete, un solaio o un altro solido, la faccia di taglio è riempita con un colore scuro, come in una sezione disegnata. {{ui:Riempimento}} nella barra attiva e disattiva questo effetto.
- Il cubo di navigazione nell'angolo in basso a destra ruota il modello per guardare il taglio da qualsiasi lato.
- Il clic seleziona ciò che si vede: ciò che è stato tagliato via non può essere selezionato.

## Errori comuni

- **Nulla è cambiato.** Il taglio potrebbe trovarsi sopra il tetto o fuori dal modello. Trascinare il cursore oppure digitare una distanza minore.
- **La distanza è tornata indietro.** Una distanza oltre il modello viene riportata alla sua estremità, e la barra di stato lo indica.
- **Una segnalazione mostra solo una parte del volume.** Una segnalazione (BCF) conserva un solo box con le sue facce inclinate e i suoi piani: il primo box del volume. La barra di stato lo indica quando si crea la segnalazione.
- **Il taglio è vuoto.** {{ui:Riempimento}} nella barra è disattivato: farvi clic per riempire le facce di taglio di pareti, solai e altri solidi.
- **Un taglio riempito appare punteggiato o manca un pezzo.** Il riempimento richiede solidi chiusi; un elemento la cui forma nel file non è chiusa (un singolo foglio, fogliame di alberi) resta non riempito anziché essere coperto. Un elemento composto da parti di colori diversi (un telaio e il suo vetro) viene riempito quando le sue parti combaciano.
- **Dov'è la barra di sezione?** Si trova in cima alla vista 3D che taglia: nella metà 3D in {{ui:Dividi}}, e sotto la barra di disegno in {{ui:Pianta}} da sola. In una vista bassa scorre.

## Passi successivi

- [Mostrare e nascondere piani, spazi e spigoli](topic:storeys-and-spaces)
- [Vedere un disegno DWG o DXF in 3D](topic:dwg-in-3d) — i disegni in 3D hanno lo stesso piano di sezione
