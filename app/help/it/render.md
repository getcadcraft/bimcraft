---
title: Generare un render del modello
summary: Crea un'immagine in luce diurna della vista 3D: cielo, sole alla latitudine del sito, ombre morbide, finestre in vetro; con WebGPU, path tracing sulla scheda grafica con cieli, camera, miscelazione delle luci, correzione colore, nebbia e una coda di render.
keywords: render, preimpostazione, preimpostazioni, preimpostazione di scena, interno, esterno, vista in sezione, notte, un clic, rendering, path tracing, ray tracing, illuminazione globale, riflessi, rifrazione, alta qualità, foto, fotorealistico, realistico, immagine, png, fisso, cielo, sole, luce diurna, ombre, ombre morbide, occlusione ambientale, vetro, finestre, metallo, materiali, esposizione, luminosità, nuvoloso, crepuscolo, studio, presentazione, visualizzazione, webgpu, riduzione rumore, cielo fisico, hdri, ies, profondità di campo, panorama, bilanciamento del bianco, miscelazione delle luci, elementi di render, exr, png a 16 bit, nebbia, caustiche, coda di render
from: beb74cc7
---

{{ui:Render}} sulla barra degli strumenti crea un'immagine della vista 3D che sembra la luce del giorno: un cielo, il sole dove la latitudine del sito lo colloca, ombre morbide, luce da tutta la volta celeste che scurisce gli angoli e colori che possono sembrare vetro o metallo. Il modello e il file non vengono modificati.

## Generare il render della vista

1. Impostare la vista 3D come si vuole che appaia nell'immagine: orbitare e zoomare, nascondere i piani o gli elementi non voluti e impostare una [sezione](topic:section-plane) se l'immagine deve mostrare un taglio.
2. Fare clic su {{ui:Render}} sulla barra degli strumenti.
3. Scegliere una {{ui:Scena}} se quella premuta non è quella voluta (vedi [Preimpostazioni di scena](topic:render#scene-presets-a-good-picture-in-one-click)), scegliere la {{ui:Dimensione}}, poi fare clic su {{ui:Render}} nella finestra di dialogo.

   L'immagine si riempie durante il render e diventa più liscia a ogni passaggio. {{ui:Ferma}} (o {{key:Esc}}) la termina in anticipo e conserva l'immagine ottenuta fino a quel momento.

4. Fare clic su {{ui:Salva}} per scaricarla come PNG, oppure su {{ui:Salva con nome}} per un altro formato (vedi [Salvare l'immagine](topic:render#save-the-picture)). Prende il nome dal file del modello.

:::tip
Iniziare con {{ui:Bozza}} alla {{ui:Dimensione della vista}} per controllare la camera, poi fare il render {{ui:Buona}} o {{ui:Migliore}} a una dimensione maggiore per l'immagine finale.
:::

## Preimpostazioni di scena: una buona immagine con un clic

In alto nella finestra ci sono quattro pulsanti {{ui:Scena}}. Ognuno imposta in un solo clic cielo, luminosità, terreno, linee di contorno, qualità e sole, così non c'è nulla da imparare prima della prima immagine. Fare clic su uno, poi su {{ui:Render}}.

| {{ui:Scena}} | Che cosa imposta | Da usare per |
|---|---|---|
| {{ui:Esterno}} | Cielo sereno, il sole del modello, terreno acceso | L'edificio dall'esterno |
| {{ui:Interno}} | Cielo nuvoloso (luce uniforme, senza macchie di sole dirette), mezzo stop più luminoso | Una vista dall'interno di una stanza |
| {{ui:Vista in sezione}} | Studio bianco, senza terreno, linee di contorno nel render veloce | Un modello tagliato da una sezione |
| {{ui:Notte}} | Il sole sotto l'orizzonte (mezzanotte di pieno inverno nell'emisfero del sito), uno stop più luminoso | Lampade che illuminano il modello. Senza lampade l'immagine è buia |

- {{ui:Scegli per questa vista}} sceglie automaticamente {{ui:Vista in sezione}} quando un taglio di sezione è attivo, {{ui:Interno}} quando la camera è dentro il modello, altrimenti {{ui:Esterno}}. La prima volta che si apre la finestra parte così da solo.
- Ogni impostazione resta qui sotto e può essere modificata. Dopo aver cambiato una di esse, nessun pulsante scena risulta più premuto e la riga sotto i pulsanti indica che le impostazioni sono personali. Fare clic di nuovo sulla scena per riportare i suoi valori.
- Una scena non modifica il motore, la modalità, la dimensione, i materiali, la camera o le lampade.

:::note
Le scene danno gli stessi valori in ModelCraft e BimCraft. L'aspetto dell'immagine finita dipende dal modello e dalla scheda grafica.
:::

## Che cosa appare nell'immagine

Ciò che la vista 3D mostra in pieno: gli elementi nascosti e trasparenti, i piani nascosti e i modelli nascosti sono esclusi, e i locali compaiono solo quando {{ui:Spazi}} è attivo. Un piano o una scatola di sezione tagliano l'immagine come tagliano la vista. Gli elementi mostrano i propri colori: il colore per proprietà (la scheda {{ui:Colore}}) non viene usato.

## Impostazioni

| Impostazione | Che cosa fa |
|---|---|
| {{ui:Dimensione}} | La dimensione della vista, il doppio della vista, Full HD, 4K o un quadrato |
| {{ui:Modo}} | {{ui:Veloce}}, oppure {{ui:Alta qualità (path tracing)}} (sotto) con il suo {{ui:Limite di tempo}} |
| {{ui:Qualità}} | Quanti passaggi (o, in alta qualità, campioni) vengono mediati: {{ui:Bozza}} 16, {{ui:Buona}} 64, {{ui:Migliore}} 256. Più passaggi danno ombre e bordi più lisci e richiedono più tempo |
| {{ui:Cielo}} | {{ui:Cielo sereno}}, {{ui:Nuvoloso}}, {{ui:Crepuscolo}} oppure {{ui:Studio bianco}} (uno sfondo bianco semplice) |
| {{ui:Sole}} | 21 giugno alle 15:00 alla latitudine indicata dal file per il suo sito (IfcSite), ruotato verso il nord reale del modello. Attivare la casella {{ui:Usa un'altra data e ora per questa immagine}} per un altro orario |
| {{ui:Luminosità}} | Più chiaro o più scuro, a passi (stop) |
| {{ui:Terreno sotto il modello}} | Un terreno al punto più basso del modello, che riceve le ombre e sfuma nell'orizzonte |
| {{ui:Disegna gli spigoli}} | Disegna sottilmente gli spigoli degli elementi sopra l'immagine |

Quando il sole è sotto l'orizzonte all'ora scelta è notte: il cielo diventa scuro e le lampade del modello lo illuminano.

## Lampade

Ogni apparecchio di illuminazione del modello è una lampada nell'immagine: gli apparecchi di un file IFC (IfcLightFixture, o un elemento tipizzato come apparecchio di illuminazione), compresi quelli che si posizionano dalla libreria. Ognuno irradia verso il basso da poco sotto l'apparecchio. Quando il file indica la potenza di un apparecchio, la sua luminosità ne deriva; altrimenti è di 800 lumen, bianco caldo.

La finestra elenca le lampade sotto {{ui:Lampade}}: deselezionarne una per spegnerla, oppure digitare la sua luminosità in lumen. Queste modifiche vengono salvate nell'IFC (nel set di proprietà `CadCraft_Light` dell'apparecchio, dove si possono modificare anche in Proprietà), e {{key:Ctrl+Z}} le annulla.

Quando un file non dice dove si trova il sito, il sole è posto a 40° nord e la finestra lo indica. L'ora è l'ora locale del sito, calcolata dalla sua longitudine, quindi può differire di un'ora dove gli orologi sono impostati diversamente.

Queste impostazioni vengono conservate in questo browser per la prossima immagine. Non sono salvate nel file IFC.

## Vetro e altri materiali

Sotto {{ui:Materiali}}, ogni colore sullo schermo ha un aspetto: {{ui:Opaco}}, {{ui:Satinato}}, {{ui:Lucido}}, {{ui:Metallo}}, {{ui:Metallo lucidato}}, {{ui:Vetro}} o {{ui:Vetro satinato}}. I colori che il file IFC rende trasparenti (per esempio i vetri delle finestre) partono come {{ui:Vetro}}.

:::note
In modalità {{ui:Veloce}}, vetro e metallo riflettono il cielo, non il resto del modello, e la luce non si curva attraverso il vetro. La modalità {{ui:Alta qualità (path tracing)}} qui sotto fa entrambe le cose.
:::

## Alta qualità

Scegliere {{ui:Modo}} › {{ui:Alta qualità (path tracing)}} per un'immagine che segue la luce come la vede una camera:

- la luce rimbalza tra le superfici, quindi una stanza illuminata da una finestra o da una lampada è illuminata da ogni lato e i colori si diffondono sulle superfici vicine;
- il vetro è vetro vero: la luce si curva attraverso di esso e il vetro riflette il modello;
- metallo e superfici lucide riflettono il resto del modello;
- i pannelli luminosi illuminano come pannelli, con ombre morbide.

È molto più lenta di {{ui:Veloce}}: ogni passaggio ricalcola la luce di ogni pixel. L'immagine parte granulosa e si schiarisce man mano che i campioni si sommano; quindi conviene iniziare in piccolo ({{ui:Dimensione della vista}}, {{ui:Bozza}}) e scegliere un {{ui:Limite di tempo}}: quando scade, l'immagine ottenuta resta. Anche {{ui:Ferma}} la conserva. Il primo passaggio attende mentre il browser prepara il path tracer.

Dove il browser ha WebGPU, il path tracer è quello di CadCraft e gira sulla scheda grafica; la riga sotto l'immagine lo indica. Dopo {{ui:Ferma}} o il limite di tempo, {{ui:Riprendi}} continua la stessa immagine fino a completare tutti i campioni; cambiare un'impostazione o premere di nuovo {{ui:Render}} ricomincia da zero. Senza WebGPU l'immagine viene calcolata con WebGL (la riga lo indica) e {{ui:Riprendi}} non è disponibile.

:::linux
Firefox e la maggior parte delle configurazioni di Chrome su Linux non hanno ancora WebGPU; in quei casi l'alta qualità usa WebGL.
:::

In questa modalità gli spigoli non vengono disegnati, le texture mostrano colore e rugosità ma non le loro asperità, e un taglio di sezione viene eseguito sul modello prima che inizi l'immagine.

{{ui:Riduci rumore (elimina la grana rimasta dopo i campioni)}} è attivo per impostazione predefinita: quando l'immagine è finita, o fermata, la grana residua viene eliminata da una rete neurale creata per questo (la rete pubblicata da Intel Open Image Denoise, eseguita sul proprio computer: sulla scheda grafica, altrimenti sul processore). {{ui:Mostra}} › {{ui:L'immagine prima della riduzione del rumore}} la mostra come è stata renderizzata.

## Cieli e profili di luce sulla scheda grafica

Con WebGPU, l'alta qualità offre altri due cieli:

- {{ui:Cielo fisico}} calcola la luce del giorno dall'altezza del sole: un blu intenso sopra la testa, una fascia pallida all'orizzonte e un sole che diventa più caldo e più debole quando è basso. {{ui:Foschia}} va da una giornata molto limpida (2) a una foschiosa (10).
- {{ui:Immagine del cielo (HDRI)}} illumina il modello con un'immagine panoramica di un luogo reale. {{ui:Scegli un'immagine…}} prende un file `.hdr` o `.exr` equirettangolare; {{ui:Ruota}} lo ruota attorno al modello e {{ui:Luminosità dell'immagine}} lo rende più chiaro o più scuro. L'immagine porta con sé il proprio sole, quindi il sole del modello non viene aggiunto. Resta in uso solo finché la pagina è aperta: dopo la riapertura, sceglierla di nuovo.

Ogni lampada nell'elenco {{ui:Lampade}} può ricevere il profilo di luce di un produttore: {{ui:Profilo IES…}} legge un file IES (LM-63) e la lampada irradia la luce come fa quell'apparecchio (un faretto stretto, un lavamuro). Ogni lampada con quel nome lo usa, e la lampada mantiene la propria luminosità. Fare clic sul nome del profilo per smettere di usarlo.

Le finestre di vetro trasparente aiutano la luce del cielo a entrare in una stanza.

La modalità {{ui:Veloce}} e il path tracer WebGL mostrano {{ui:Cielo fisico}} e {{ui:Immagine del cielo (HDRI)}} come cielo sereno e ignorano i profili di luce.

## La camera

{{ui:Fotocamera}} imposta l'immagine come una fotografia:

- {{ui:Esposizione}}: mantenere il {{ui:Cursore di luminosità}}, oppure scegliere {{ui:Impostazioni della fotocamera}} e impostare {{ui:Apertura (numero f)}}, {{ui:Tempo di otturazione}} e {{ui:ISO}} come su una macchina fotografica; l'EV accanto è il valore di esposizione usuale. f/16 a 1/100 s e ISO 100 corrispondono a una giornata di sole; una scena più scura richiede un'apertura più ampia, un otturatore più lento o un ISO più alto. Funziona in ogni modalità.
- {{ui:Profondità di campo}} sfuoca ciò che è più vicino o più lontano della {{ui:Distanza di messa a fuoco (m)}}, come farebbe un obiettivo con quel numero f (lasciarla vuota per mettere a fuoco ciò che si trova al centro della vista); {{ui:Forma del diaframma}} dà alle luci fuori fuoco una forma rotonda o a lamelle.
- {{ui:Prospettiva a due punti (le linee verticali restano verticali)}} livella la camera e sposta l'immagine, come fa un obiettivo architettonico tilt-shift, così le pareti non si inclinano quando si guarda in alto o in basso un edificio.
- {{ui:Bilanciamento del bianco}} stabilisce quale colore di luce appare bianco: più basso (per esempio 3000 K) per la luce calda delle lampade, più alto per l'ombra e le giornate nuvolose.
- {{ui:Proiezione}}: {{ui:Panorama a 360°}} crea un'immagine 2:1 di tutto ciò che sta attorno alla camera, per i visualizzatori di panorami; {{ui:Panorama stereo a 360°}} affianca un panorama per l'occhio sinistro e uno per il destro, per i visori; {{ui:Mappa cubica (6 facce)}} crea sei viste quadrate in una griglia 3 × 2. La larghezza deriva da {{ui:Dimensione}}.

Proiezione, profondità di campo, prospettiva a due punti e bilanciamento del bianco richiedono il path tracer sulla scheda grafica (WebGPU), quindi compaiono solo in {{ui:Alta qualità (path tracing)}}.

## Rifinire l'immagine

{{ui:Immagine}} applica la correzione colore all'immagine di alta qualità come a una fotografia, e ogni comando modifica subito l'immagine finita, senza un nuovo render:

- {{ui:Resa (trasformazione di visualizzazione)}}: {{ui:ACES filmic}} (l'immagine come prima), {{ui:AgX}} (più morbido, mantiene il colore nella luce molto intensa), {{ui:Filmic}} (una dolce curva da pellicola) oppure {{ui:Standard}} (semplice: la luce forte va a bianco pieno).
- {{ui:Contrasto}} e {{ui:Compressione delle luci}} (recupera dettagli nelle parti molto luminose).
- {{ui:Bagliore (bloom)}} (un alone morbido intorno alle luci intense), {{ui:Abbagliamento}} con i suoi {{ui:Raggi di abbagliamento}} (raggi a stella dai punti più luminosi) e {{ui:Vignettatura}} (angoli più scuri).
- {{ui:Tabella colori (.cube)…}} applica una correzione colore da un file `.cube`, con la sua {{ui:Intensità della tabella colori}}; come un'immagine del cielo, resta in uso solo finché la pagina è aperta.

## Salvare l'immagine

{{ui:Salva con nome}} accanto a {{ui:Salva}} sceglie il file: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} per condividere (JPEG e WebP solo dove il browser sa scriverli), e dopo un render di alta qualità sulla scheda grafica anche:

- {{ui:PNG, 16 bit}}: l'immagine corretta con passaggi più fini tra le sfumature, per la stampa o per ulteriori modifiche.
- {{ui:EXR, ogni livello (float a 32 bit)}}: l'immagine come renderizzata (luce lineare, senza correzione), con ogni elemento di render e ogni gruppo di luci come livello proprio, per i programmi di compositing.
- {{ui:File di render (.ccrender, per correggerlo più tardi)}}: tutto ciò che la finestra serve per miscelare e correggere di nuovo l'immagine. {{ui:Apri un file di render…}} lo riporta, con la sua miscela e la sua correzione, senza renderizzare.

## Miscelare le luci dopo il render

Attivare {{ui:Miscelazione della luce (modifica colore e luminosità di ogni lampada dopo il render)}} prima di premere {{ui:Render}}. Quando l'immagine è finita (o fermata), {{ui:Miscela l'immagine}} elenca le sue luci per gruppi: il cielo, il sole e le lampade per nome (ogni lampada con lo stesso nome forma un gruppo). Disattivare un gruppo, assegnargli un colore o renderlo più chiaro o più scuro cambia subito l'immagine, senza renderizzare di nuovo. {{ui:Salva miscela}} conserva la miscela con un nome da scegliere più tardi; {{ui:Come renderizzato}} torna all'immagine com'era stata creata. {{ui:Salva}} salva l'immagine miscelata.

{{ui:Elementi di render (albedo, normali, profondità, diffuso, speculare, trasmissione, emissione, ID)}} conserva anche le parti dell'immagine. {{ui:Mostra}} passa la vista a una di esse: i colori delle superfici (albedo), le normali, la profondità, la luce diffusa, speculare e trasmessa (ciascuna diretta e indiretta), ciò che emette luce e il cielo, e un colore per oggetto o per materiale per creare maschere.

Entrambe le funzioni conservano livelli aggiuntivi sulla scheda grafica. Alle dimensioni grandi la scheda grafica potrebbe non avere spazio; la finestra lo indica e una dimensione più piccola funziona.

## Nebbia, fumo, rumore e caustiche

Queste opzioni si trovano in {{ui:Nebbia, fumo e rumore}} e funzionano in {{ui:Alta qualità (path tracing)}} sulla scheda grafica; gli altri motori le escludono.

- {{ui:Nebbia e foschia}} riempie l'aria fino a un'altezza con una foschia illuminata dal sole, dal cielo e dalle lampade. {{ui:Fin dove si vede, in metri}} ne imposta la densità (circa 100 m è una leggera foschia, 20 m una nebbia fitta), {{ui:Altezza della nebbia sopra il terreno, in metri}} è il punto in cui finisce, e {{ui:Raggi di luce}} indica quanto la foschia brilla verso la luce. La luce del sole esce dalla nebbia nella sua parte alta, quindi dove il sole passa da una finestra o tra gli edifici si vede come raggi di luce.
- {{ui:Fumo o nuvola}} aggiunge un volume di fumo o di nuvola illuminato come la nebbia. {{ui:Tipo}} è una {{ui:Nuvola}}, una {{ui:Colonna di fumo}} oppure {{ui:Da un file di volume (.ccvol)}}, il formato a griglia di CadCraft. {{ui:Dettaglio}} e {{ui:Variazione}} modificano una nuvola o una colonna creata; {{ui:Dimensione del lato più lungo, in metri (0 = la dimensione del modello)}}, {{ui:Sposta X (m)}}, {{ui:Sposta Y (m)}}, {{ui:Sposta Z (m)}} e {{ui:Ruota}} la posizionano (parte al centro del modello); {{ui:Spessore}} la rende più densa, {{ui:Bagliore in avanti}} la rende più luminosa verso la luce, e {{ui:Colore}} la tinge. Un file di volume resta in uso solo finché la pagina è aperta, come un'immagine del cielo.
- {{ui:Fermarsi prima dove l'immagine è pulita (campionamento adattivo)}} non assegna altri campioni ai pixel già stabilizzati. {{ui:Rumore accettabile}} è quanta grana resta quando un pixel si ferma. La riga sotto l'immagine indica quanti campioni ha ricevuto in media un pixel.
- {{ui:Caustiche (luce piegata dal vetro o riflessa dagli specchi)}} traccia la luce delle lampade e del sole, così la macchia luminosa sotto una sfera di vetro o la luce di uno specchio su una parete esce pulita invece che granulosa. È disattivata mentre sono attivi nebbia, fumo, miscelazione delle luci o elementi di render, ed è pensata per le immagini, non per le immagini a 360°.

## La coda di render

{{ui:Coda di render}} nella finestra: {{ui:Aggiungi questa immagine alla coda}} conserva impostazioni e vista dell'immagine, e {{ui:Avvia la coda}} renderizza in sequenza, uno dopo l'altro, quello che attende su questo computer. Chiudere la pagina mantiene la coda; aprire lo stesso modello per proseguire. {{ui:Salva}} scarica un'immagine completata; {{ui:Rimuovi}} e {{ui:Rimuovi i completati}} riordinano l'elenco. La coda renderizza in alta qualità, quindi richiede WebGPU.

## Quanto tempo richiede

L'immagine viene creata sul proprio computer, dalla sua scheda grafica; nulla viene caricato. Il tempo cresce con i passaggi e i pixel: {{ui:Migliore}} ha 16 volte i passaggi di {{ui:Bozza}}, e un'immagine 4K ha circa quattro volte i pixel di Full HD. I modelli grandi richiedono più tempo per ogni passaggio.
