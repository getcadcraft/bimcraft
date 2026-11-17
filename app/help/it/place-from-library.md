---
title: Posizionare apparecchiature e arredi dalla libreria
summary: Trovare un elemento nella Libreria, in un file o nel disegno aperto, posizionarlo su un piano di un modello IFC con un'anteprima fantasma, ruotarlo, agganciarlo a un muro e salvare.
keywords: sposta, ruota, gira, trascina, libreria, librarycraft, posiziona, inserisci, apparecchiatura, arredo, blocco, famiglia, elemento, catalogo, contenuto, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## Cosa si fa

Inserire un elemento della libreria in un modello IFC: un lavello, un tavolo da lavoro, una sedia. BimCraft lo scrive come un vero elemento IFC con un tipo, così ogni copia dello stesso elemento condivide un'unica geometria, e i suoi dati, il numero di elemento e la licenza lo accompagnano.

## Passi

1. Aprire un modello IFC.
2. Fare clic sulla scheda {{ui:Libreria}} accanto a {{ui:Proprietà}} a destra, oppure su {{ui:Libreria}} nella barra degli strumenti sopra il modello.
3. Scegliere una sorgente:
   - **Simboli integrati**: simboli generici di pianta degli impianti idraulici inclusi in BimCraft sotto Apache-2.0, disponibili offline. Verificarne le dimensioni prima della costruzione. Per i simboli elettrici di pianta e i dispositivi elettrici IFC, usare **Build › Elettrico**.
   - **Libreria**: la libreria CadCraft di questo sito. Gli elementi pubblici non richiedono l'accesso.
   - **Questo file**: i blocchi di un disegno DWG o DXF aperto. Un blocco dinamico con stati di visibilità viene proposto una volta per stato, denominato "Lavello: doppia vasca", ciascuno disegnato solo con gli oggetti di quello stato.
   - **File…**: un file DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV sul proprio computer. Viene letto in questa scheda; nulla viene caricato.
   - **Altre fonti**: un'altra libreria che usa lo stesso formato di fonte. Aggiungerne l'indirizzo una volta; viene conservato in questo browser.
4. Cercare o scegliere una categoria, poi fare clic su una scheda. La scheda mostra un'anteprima di pianta, il nome, il produttore e il modello, la licenza e la versione.
5. Fare clic su {{ui:Posiziona nel piano}} (nella vista Pianta) oppure {{ui:Posiziona nel modello}} (nella vista 3D). In {{ui:Dividi}}, dove pianta e vista 3D sono entrambe visibili, il pulsante è un pulsante diviso: l'azione principale è {{ui:Posiziona nel piano}}, e la freccia all'estremità destra apre un menu con {{ui:Posiziona nel modello}}. Oppure trascinare la scheda, o l'immagine nei dettagli dell'elemento, sulla pianta o sulla vista 3D: l'elemento viene posizionato dove si rilascia. Con una penna o un dito, tenere premuta la scheda per un momento, poi trascinare.
6. Scegliere il piano nella barra di posizionamento. Nella vista 3D, i piani sopra di esso sono nascosti durante il posizionamento e la vista si porta in alto; in pianta, la pianta mostra già quel piano. Scegliere {{ui:Posiziona nel modello}} dalla sola pianta apre la vista 3D accanto ad essa.
7. Spostare il puntatore sul modello: un riquadro trasparente indica dove va l'elemento.
8. Premere {{key:R}} per ruotarlo di 90°. Premere {{key:Tab}} (oppure {{ui:Aggancio alla parete}}) per appoggiare il suo retro sul muro più vicino, rivolto verso il locale.
9. Fare clic per posizionarlo. Oppure digitare la posizione in **X, Y (mm)**, per esempio `1200, 3400`, e premere {{key:Enter}}.

Una lampada o qualsiasi cosa appesa dall'alto: impostare **Montaggio** su **Al soffitto**. La parte superiore dell'elemento si trova allora sotto il controsoffitto sul punto (oppure all'altezza del livello dove non c'è un soffitto). Con una pianta del soffitto nella vista in pianta, **Montaggio** parte da **Al soffitto**.
10. Rispondere all'unica domanda: il **numero di elemento** (viene compilato il successivo numero libero), la quantità e una nota. Premere {{key:Enter}}.
11. Posizionarne altri, oppure premere {{key:Esc}} per fermarsi.
12. Fare clic su {{ui:Salva come IFC}} per scaricare la copia modificata.

## Pianta o modello

Il pulsante di posizionamento della Libreria segue la vista in uso, e cambia non appena si cambia vista (i pulsanti {{ui:Pianta}}, {{ui:Dividi}} e {{ui:3D}}, la tastiera, l'apertura di un file). Pianta mostra un solo pulsante, {{ui:Posiziona nel piano}}; 3D mostra un solo pulsante, {{ui:Posiziona nel modello}}; Dividi mostra il pulsante diviso, con {{ui:Posiziona nel piano}} come azione principale e {{ui:Posiziona nel modello}} nel suo menu. Entrambi i modi usano la stessa barra di posizionamento e scrivono lo stesso elemento IFC: il puntatore lavora nella vista in pianta per l'uno e nella vista 3D per l'altro. Premere {{key:Esc}} in qualsiasi momento per fermarsi.

Trascinare una scheda non ha un tasto proprio: il pulsante diviso, o il pulsante semplice, fa lo stesso con la tastiera.

## Spostare o ruotare un elemento posizionato

In {{ui:Disegna}}, selezionare l'elemento nella pianta. Compare una maniglia quadrata sul suo punto di inserimento e una maniglia tonda accanto ad essa.

- Trascinare l'elemento, o la sua maniglia quadrata, per spostarlo. Si aggancia come lo strumento Muro (estremità e facce dei muri); {{key:Shift}} lo mantiene perpendicolare a dove si trovava.
- Trascinare la maniglia tonda per ruotarlo a passi di 15°. Tenere premuto {{key:Shift}} per passi di 1°.
- Premere {{key:R}} per ruotarlo di 90°.
- Nelle **Proprietà** (anche nella vista 3D), digitare **X**, **Y** e **Rotazione (°)**, oppure fare clic su **Ruota di 90°**.

Ogni spostamento è un passo di annullamento e viaggia in Live TeamWork. L'elemento mantiene il suo numero di elemento, i suoi dati di libreria e la sua altezza sopra il livello. Non ancora implementato: trascinarlo nella vista 3D.

## Cosa si dovrebbe vedere

- L'elemento nel modello, selezionato, con le sue proprietà a destra: un riquadro **Elemento di libreria** con la sua licenza e attribuzione, e gli insiemi `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` e, per gli elementi di disegni con tag, `CadCraft_SourceAttributes`.
- "Posizionato: *elemento* (elemento *n*)" nell'elenco delle modifiche. {{key:Mod+Z}} lo annulla.
- La riga di stato: "*Elemento* posizionato come elemento *n*."

## Utile sapere

- Alcuni elementi hanno più dimensioni o opzioni: la scheda mostra allora una scelta **Variante**, e quella scelta è quella posizionata. Vedi [Posizionare e sostituire un elemento di libreria con varianti](topic:library-variants).
- Un elemento senza corpo 3D (un simbolo 2D) viene posizionato con un solido provvisorio; si indica la sua altezza quando richiesto.
- Altri uguali: selezionare un elemento posizionato e usare {{ui:Copia}} e {{ui:Incolla}}, oppure {{key:Mod+D}}. Vedi [Copiare, incollare e duplicare elementi di libreria](topic:copy-paste).
- Per avviare ogni posizionamento con l'aggancio alla parete attivo, attivare **Avvia con aggancio alla parete** in [Impostazioni di BimCraft](topic:settings).
- Le lunghezze vengono convertite nelle unità del modello, quali che siano.
- **Entourage** (alberi, arbusti, persone, auto) è presente anche nella libreria: cercare "albero", "persona" o "auto". Sono disegnati da CadCraft (CC0) e mantengono i propri colori quando sono posizionati (un tronco marrone, foglie verdi, i finestrini di un'auto trasparenti), in BimCraft e negli altri programmi BIM. Compaiono nelle [immagini renderizzate](topic:render).
- In un file IFC2X3 il corpo viene scritto come solido sfaccettato; in IFC4 come insieme di facce triangolate. Entrambi si aprono in altri strumenti IFC.
- Un disegno (DWG o DXF) non può essere salvato qui, quindi gli elementi vengono posizionati solo in modelli IFC. Usare **Questo file** su un disegno per vedere in cosa diventerebbero i suoi blocchi.

## Elementi nella propria lingua

Un elemento può avere il proprio nome, descrizione e tipo in altre lingue. Quando li ha nella lingua impostata in BimCraft (Impostazioni › Generali › Lingua), la pagina dell'elemento mostra quelli, con sotto il nome dato dal suo produttore, e **Posiziona** scrive nel modello il nome nella propria lingua, così l'abaco {{ui:Apparecchiature}} lo elenca in quel modo. L'elemento resta lo stesso elemento: il controllo degli aggiornamenti e la sostituzione si basano sull'elemento stesso, mai sul nome. Gli elementi senza traduzione mantengono le loro parole.

## Errori comuni

- **Manca il pulsante di posizionamento.** Nessun modello IFC è aperto. Aprirne prima uno.
- **Il fantasma non segue il puntatore.** Il puntatore è fuori dall'area del modello, oppure il piano del livello non è visibile. Fare clic su {{ui:Sopra}}.
- **{{ui:Aggancio alla parete}} dice che non ci sono muri.** Il piano non ha muri nell'IFC (alcune esportazioni collocano i muri su un altro piano). Scegliere quel piano, oppure digitare X e Y.
- **Gli elementi di un file hanno la dimensione sbagliata.** Il file non ha unità, oppure ne indica di sbagliate. In {{ui:File…}} scegliere le unità e rileggere il file.

:::tip
Posizionare due volte lo stesso elemento condivide un unico tipo IFC, quindi un modello con quaranta sedie memorizza la sedia una sola volta.
:::
