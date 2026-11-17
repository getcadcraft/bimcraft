---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu che corrisponda al modo di lavorare già abituale, assegnare a ogni comando un tasto personale, spostare i comandi tra i menu e stabilire cosa fanno la rotella e ciascun pulsante del mouse.
keywords: stile menu, menu, barra dei menu, barra multifunzione, riga di comando, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, mouse, rotella, inverti, direzione zoom, pulsante centrale, pan, orbita, tasti a due lettere, esporta, importa, cambio, familiare
from: a424e836
---

I comandi di BimCraft sono gli stessi, qualunque sia il modo in cui vi si arriva. Uno **stile dei menu** decide solo dove si trovano sullo schermo, come si chiamano e con quali tasti si eseguono, così è possibile mantenere le abitudini che si hanno già. Scegliere uno stile in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu, tasti e mouse}}; la modifica è immediata e questo browser la ricorda.

## I cinque stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:CadCraft}} | La barra degli strumenti e i tasti propri di BimCraft ({{key:W}} muro, {{key:D}} porta, {{key:N}} finestra, {{key:X}} sezione, {{key:F}} adatta). Il punto di partenza. |
| {{ui:Progettazione casa}} | Una barra dei menu (File, Modifica, Build, Libreria, 3D, CAD, Strumenti, Vista) sopra una fila di strumenti per edifici, disposti come nei programmi di progettazione residenziale. Gli stessi tasti singoli, più {{key:Mod+L}} per la libreria, {{key:F9}} per la vista 3D, {{key:F10}} per la pianta e {{key:F11}} per entrambe. |
| {{ui:Barra multifunzione BIM}} | Schede di pulsanti grandi (Architettura, Inserisci, Annota, Modifica, Vista, Output) con un menu File e pulsanti rapidi a destra. Tasti a due lettere: {{key:W}} poi {{key:A}} per un muro, {{key:D}} {{key:R}} porta, {{key:W}} {{key:N}} finestra, {{key:S}} {{key:C}} sezione, {{key:Z}} {{key:F}} adatta. Il pulsante centrale esegue il pan; {{key:Shift}} e il pulsante centrale fanno l'orbita. |
| {{ui:Disegno classico}} | Una barra piccola e una riga di comando, per chi digita i comandi: WALL, DOOR, WINDOW, ROOF, U (annulla), ZOOM, SECTION, PLOT, INSERT, HELP. Basta digitare ovunque e le lettere vanno alla riga di comando; {{key:Enter}} esegue, {{key:Enter}} senza nulla ripete l'ultimo comando, {{key:Esc}} la svuota. |
| {{ui:Visualizzatore}} | Per aprire e verificare i modelli invece di disegnarli: menu {{ui:File}}, {{ui:Vista}}, {{ui:Mostra}}, {{ui:Controlla}} e {{ui:Modifica}} sopra una fila di strumenti di visualizzazione (adatta, alto, fronte, lato, sezione, misura, nascondi, isola, trasparenza, mostra tutto, percorso). Gli strumenti per edifici attendono in un menu {{ui:Modello}} alla fine. Gli stessi tasti dello stile proprio di BimCraft. |

I menu e le barre compaiono quando un modello è aperto o quando si inizia un nuovo edificio; prima di allora, il pannello a sinistra apre i file e avvia gli edifici.

:::tip
Un tasto che appartiene al layout proprio di BimCraft, ma non allo stile scelto, non fa nulla, e la riga di stato indica dove è finito il suo comando ("Nella Barra multifunzione BIM, Sezione è SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato, e uno strumento in uso mantiene i propri tasti: {{key:R}} e {{key:Tab}} durante il posizionamento, {{key:W}} {{key:A}} {{key:S}} {{key:D}} durante il percorso, {{key:H}} con gli strumenti porta e finestra, i numeri mentre si digita una lunghezza.
:::

## Crearsi il proprio stile

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). Fare clic su {{ui:Aggiungi un tasto}} e premere il tasto, oppure due tasti di seguito per un tasto a due lettere. Fare clic su un tasto per rimuoverlo.
3. Con una barra dei menu o una barra multifunzione, {{ui:Dove si trova}} sposta il comando in un altro menu o pannello, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella, i pulsanti che fanno il pan della pianta e cosa fa ciascun pulsante nelle viste 3D.
5. Assegnare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile predefinito crea una copia personale ("La mia Progettazione casa"); quello predefinito non cambia mai. Un tasto assegnato a due comandi, o uno che verrebbe eseguito prima che si possa digitare un tasto a due lettere, viene mostrato in rosso e deve essere corretto prima di poter salvare.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (l'impostazione iniziale) oppure {{ui:Scorrere in avanti riduce}}, e la velocità. Il pizzico sul trackpad ingrandisce sempre nel verso in cui si muovono le dita.
- **Eseguire il pan della pianta e dei disegni con**: uno qualsiasi dei pulsanti sinistro, centrale e destro. {{key:Space}} e il trascinamento fanno il pan anche; un trascinamento con il sinistro esegue il pan solo dove un clic non selezionerebbe né disegnerebbe.
- **Trascinamento nelle viste 3D**: {{ui:Impostazione di ogni vista}} mantiene i pulsanti di BimCraft (sinistro orbita, destro esegue il pan). Oppure assegnare a ogni pulsante orbita, pan, zoom o nessuna azione; {{key:Shift}} con il pulsante inverte orbita e pan. Un clic senza trascinamento seleziona comunque.

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come un piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di BimCraft: tutto il resto (un comando che questa versione non ha, un tasto che qui non funziona) viene escluso e conteggiato nella riga di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto le schede degli stili fa aprire ogni app nello stile corrispondente (la propria barra degli strumenti, una barra dei menu, una barra multifunzione o Disegno classico; {{ui:Visualizzatore}} è esclusivo di BimCraft e non ha corrispondenze altrove), con le modifiche fatte in ciascuna app; un'app senza uno stile corrispondente mantiene il proprio. Scegliere un altro stile in un'app cambia solo quella app.
:::

Vedi anche: [Tastiera e mouse](topic:keyboard) · [Impostazioni di BimCraft](topic:settings) · [Provenienza da altri programmi BIM e di disegno](topic:coming-from)
