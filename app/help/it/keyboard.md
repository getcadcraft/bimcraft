---
title: Tasti e mouse
summary: Ogni azione di tasti, mouse, trackpad e tocco in BimCraft, raggruppata per ciò che si sta guardando.
keywords: tastiera, scorciatoie, tasti di scelta rapida, tasti, mouse, trackpad, tocco, orbita, pan, zoom, nascondi, isola, vedere attraverso, annulla, ripristina, copia, incolla, duplica, salva, adatta, stampa vista, escape, impostazioni, disegna, parete, porta, finestra, pianta
from: 5c6eedce
---

BimCraft ha poche scorciatoie. Gran parte del lavoro si svolge con il mouse e i pannelli. Le scorciatoie scritte con {{key:Mod}} usano Cmd su Mac e Ctrl altrove. Vedere [Tasti, mouse e trackpad](common:keys) per come sono scritti i tasti in questa guida.

## Ovunque

| Tasto | Cosa fa |
|---|---|
| {{key:Ctrl+Shift+F}} | Ciclare le modalità schermo: normale, schermo intero, schermo intero con le barre nascoste. Ctrl su ogni piattaforma, anche su Mac |
| {{key:Esc}} | Uscire dallo schermo intero |
| {{key:Mod+,}} | Aprire {{ui:Impostazioni}}. Vedere [Impostazioni di BimCraft](topic:settings) |
| {{key:Tab}} | Spostarsi tra pulsanti, caselle di controllo e valori. Ogni controllo è raggiungibile dalla tastiera |

## Vista 3D (modelli IFC)

| Tasto o azione | Cosa fa |
|---|---|
| {{key:F}} | Adattare l'intero modello, vista a tre quarti (come {{ui:Adatta}}) |
| {{key:Esc}} | Deselezionare, oppure interrompere il posizionamento o l'incollatura |
| Clic | Selezionare l'elemento sotto il puntatore; fare clic sullo sfondo vuoto per deselezionare |
| {{key:Mod}}+clic oppure {{key:Shift}}+clic | Aggiungere un elemento alla selezione, oppure toglierlo |
| {{key:H}} | Nascondere gli elementi selezionati. Vedere [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate) |
| {{key:I}} | Mostrare solo gli elementi selezionati (isolare) |
| {{key:T}} | Mostrare gli elementi selezionati, con tutto il resto visto in trasparenza |
| {{key:Shift+H}} | Mostrare di nuovo ogni elemento |
| {{ui:Cammina}} | Poi {{key:W}} {{key:A}} {{key:S}} {{key:D}} o le frecce per camminare, {{key:Shift}} corre, trascinare guarda intorno, {{key:Esc}} ferma. Vedere [Cammina nel modello](topic:walk) |
| {{key:M}} | Misurare distanze e aree delle facce. Vedere [Misura distanze, aree delle facce e posizioni in 3D](topic:measure) |
| Trascinare con il pulsante sinistro | Orbitare |
| Trascinare con il pulsante destro | Pan |
| {{key:Shift}} o {{key:Mod}} e trascinare con il pulsante sinistro | Pan (utile su un trackpad) |
| Scorrere la rotellina, o trascinare con il pulsante centrale | Zoom |
| Scorrimento a due dita o pizzico su un trackpad | Zoom |
| Un dito (tocco) | Orbitare; un tocco seleziona |
| Due dita (tocco) | Pizzico per lo zoom, spostarle insieme per il pan |

| {{key:X}} | Piano di sezione attivo e disattivo. Vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane) |
| {{key:Shift+X}} | Box di sezione attorno agli elementi selezionati, con il locale impostato nelle Impostazioni |

Non ci sono tasti per {{ui:Sopra}}, {{ui:Anteriore}} e {{ui:Lato}}; usare i pulsanti.

## Modifica

Gli stessi comandi sono nella barra degli strumenti: {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}} e il menu {{ui:Altro}}, che mostra ogni tasto. Funzionano nella vista 3D di un modello IFC, non mentre si digita in un campo. Vedere [Copiare, incollare e duplicare elementi della libreria](topic:copy-paste).

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+Z}} | Annullare l'ultima modifica |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Ripristinare ciò che Annulla ha ritirato |
| {{key:Mod+C}} | Copiare gli elementi selezionati (anche i loro nomi e proprietà vanno negli Appunti come testo) |
| {{key:Mod+X}} | Tagliare gli elementi selezionati: li copia, poi li elimina |
| {{key:Mod+V}} | Incollare ciò che si è copiato: segue il puntatore; fare clic dove va |
| {{key:Mod+Shift+V}} | Incollare nella stessa posizione: dove era un taglio, oppure accanto agli originali dopo una copia |
| {{key:Mod+D}} | Duplicare: copiare gli elementi selezionati e avviare l'incollatura |
| {{key:Delete}} | Eliminare gli elementi selezionati, con le loro parti e aperture. Vedere [Eliminare, tagliare, copiare e incollare elementi edilizi](topic:edit-elements) |
| {{key:Mod+A}} | Selezionare ogni elemento visibile |
| {{key:Esc}} | Deselezionare tutto |

Quando sulla pagina è selezionato del testo, {{key:Mod+C}} copia quel testo come di consueto.

## Vista in pianta (Disegna)

Funzionano con {{ui:Disegna}} attivo e quando non si digita in un campo. Vedere [Disegnare pareti](topic:draw-walls) e [Porte e finestre](topic:doors-and-windows).

| Tasto o azione | Cosa fa |
|---|---|
| {{key:V}} | {{ui:Seleziona}} |
| {{key:W}} | {{ui:Parete}} |
| {{key:D}} | {{ui:Porta}} |
| {{key:N}} | {{ui:Finestra}} |
| {{key:H}} | Con {{ui:Porta}} o {{ui:Finestra}}: cerniere dall'altro lato |
| {{key:Shift}} mentre si disegna una parete | Mantenerla a 0°, 90°, 180° o 270° |
| Cifre e i segni di piede e pollice (`'` e `"`) | Iniziare a digitare una lunghezza nella casella {{ui:Lunghezza}}; {{key:Enter}} la usa |
| {{key:Enter}}, {{key:Esc}}, clic destro o doppio clic | Terminare la parete che si sta disegnando; {{key:Esc}} di nuovo torna a {{ui:Seleziona}} |
| {{key:Delete}} | Eliminare le pareti, porte e finestre selezionate; le pareti rimaste si ricollegano |
| {{key:F}} con il puntatore sulla pianta | Adattare la pianta |
| Scorrere la rotellina | Zoom attorno al puntatore |
| Trascinare con il pulsante centrale o destro, oppure {{key:Space}} e trascinare | Pan; con {{ui:Seleziona}} attivo, un semplice trascinamento fa anche pan |
| Trascinare una porta o una finestra con {{ui:Seleziona}} | Spostarla lungo la sua parete, o su un'altra parete |
| Due dita (tocco) | Pizzico per lo zoom, spostarle insieme per il pan |

## Posizionare e incollare elementi della libreria

| Tasto | Cosa fa |
|---|---|
| {{key:R}} | Ruotare l'elemento di 90° |
| {{key:Tab}} | Aggancio alla parete attivo e disattivo: il retro dell'elemento va contro la parete più vicina |
| {{key:Enter}} in **X, Y (mm)** | Posizionare alla posizione digitata |
| {{key:Esc}} | Interrompere il posizionamento o l'incollatura |

## Modifica di valori IFC

| Tasto | Cosa fa |
|---|---|
| {{key:Enter}} | Mantenere il valore digitato |
| {{key:Esc}} | Annullare e ripristinare il valore precedente |
| Clic altrove | Mantenere il valore digitato |
| {{key:Mod+Z}} | Annullare l'ultima modifica. Solo mentre ci sono modifiche non salvate e non si digita in un campo |
| {{key:Mod+Y}} | Ripristinare ciò che Annulla ha ritirato |
| {{key:Mod+S}} | Salvare come IFC. Solo con modifiche non salvate; altrimenti si apre il comando di salvataggio del browser |

Per modificare solo con la tastiera: premere {{key:Tab}} finché un valore è evidenziato, quindi premere {{key:Enter}} per iniziare a digitare.

## Disegni 2D (DWG e DXF)

| Tasto o azione | Cosa fa |
|---|---|
| {{key:F}} | Adattare il disegno o la tavola |
| {{key:P}} | Vista di stampa attiva e disattiva |
| Doppio clic | Adattare |
| Trascinare con un pulsante qualsiasi | Pan |
| Scorrere la rotellina | Zoom sul puntatore |
| Scorrimento a due dita o pizzico su un trackpad | Zoom sul puntatore. Lo scorrimento a due dita non fa pan |
| Un dito (tocco) | Pan. Lo zoom a pizzico per i disegni non è ancora implementato |

## Disegni in 3D

| Tasto o azione | Cosa fa |
|---|---|
| {{key:3}} | 3D attivo e disattivo (anche sulla vista 2D) |
| {{key:F}} | Estensioni: l'intero disegno |
| Trascinare con il pulsante centrale o sinistro | Orbitare |
| Trascinare con il pulsante destro, oppure {{key:Shift}} e trascinare | Pan |
| Scorrere la rotellina | Zoom verso ciò che è sotto il puntatore |
| Scorrimento a due dita su un trackpad | Orbitare; con {{key:Shift}}, pan |
| Pizzico su un trackpad | Zoom |
| Un dito (tocco) | Orbitare |
| Due dita (tocco) | Pizzico per lo zoom, spostarle insieme per il pan |

{{key:F}}, {{key:P}} e {{key:3}} non fanno nulla mentre si digita in un campo, mentre è visualizzato l'abaco delle apparecchiature, o quando si tiene premuto {{key:Mod}} o {{key:Alt}}.

## File

| Azione | Cosa fa |
|---|---|
| Trascinare un file sulla pagina | Lo apre |
| Trascinare una cartella sulla pagina | La apre come cartella di progetto, senza richiesta di autorizzazione |
