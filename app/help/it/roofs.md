---
title: Tetti: una pendenza per ogni parete, timpani, tetti a una falda e falde
summary: Impostare ogni parete sotto un tetto come inclinata, a timpano o nessuna, usare i preset Tetto a padiglione, Timpani e Tetto a una falda, alzare il tetto con l'altezza del cordolo, aggiungere fascia e sottogronda, e disegnare singole falde dove il tetto automatico non va bene.
keywords: cambiare un tetto, modificare un tetto, tetto selezionato, proprietà del tetto, annullare il tetto, tetto, pendenza, per parete, timpano, testata a timpano, tetto a una falda, padiglione, compluvio, colmo, altezza del cordolo, tallone, fascia, sottogronda, gronda, sbalzo, falda, tetto del portico, abbaino, abbaino a timpano, abbaino a una falda
from: 096084a7
---

## Obiettivo

Dare forma al tetto a partire dalle pareti sotto di esso. Ogni parete ha la propria impostazione, quindi un tetto può essere a padiglione sul davanti, a timpano sulle testate e fermarsi a filo contro una parete più alta sul retro. Per un portico o per una falda che il tetto automatico non sa creare, disegnare la falda indicandone gli angoli.

## Mettere un tetto

1. Sul livello le cui pareti sostengono il tetto, fare clic su {{ui:Copertura}}.
2. Digitare la **Pendenza** (`6/12`, oppure gradi come `30`) e lo **Sbalzo**.
3. Scegliere un preset: **Tetto a padiglione**, **Timpani sui lati corti**, **Timpani sui lati lunghi**, oppure **Tetto a una falda** (il lato più vicino al puntatore è la gronda bassa; gli altri lati sono testate a timpano).
4. Lasciare **Fascia e sottogronda** attivo per le gronde chiuse con una fascia, oppure disattivarlo per un bordo di tetto senza rivestimento.
5. Puntare all'interno dell'edificio: gronda, colmo, displuvi e compluvi compaiono sulla pianta. Fare clic.

Qualsiasi contorno va bene: forme a L, a T, a U e a croce, angoli obliqui e rientranze. Displuvi, colmi e compluvi si trovano dove le falde si incontrano.

## Una parete alla volta

Selezionare il tetto (sul livello sopra le pareti, fare clic all'interno del suo contorno) e guardare sotto **Ogni parete** in **Proprietà**. Puntare una riga evidenzia quella parete sulla pianta.

- **Inclinata**: la parete ha una falda inclinata sopra di sé. Digitare accanto la sua pendenza, per esempio `12/12` per testate ripide su un tetto `6/12`.
- **Testata a timpano**: il tetto termina con una testata verticale sopra quella parete, la parete viene riempita fino al tetto e il tetto sporge oltre di essa per lo **Sbalzo del timpano**.
- **Nessuna (a filo)**: il tetto si ferma su quella parete senza sbalzo e senza parete a timpano, per un tetto contro una parete più alta.

L'elenco **Testate** in alto imposta tutte le pareti in una volta; **Imposta per parete** compare quando le pareti non corrispondono più a un preset.

## Modificare un tetto già creato

Selezionare il tetto: **Proprietà** mostra le stesse impostazioni dello strumento Copertura, cioè **Pendenza**, **Sbalzo**, **Sbalzo del timpano**, **Altezza del cordolo**, **Altezza della fascia**, **Gronda chiusa** e **Spessore**. Ogni modifica appare subito nella pianta e in 3D, con gli stessi controlli dello strumento (una pendenza di 80 gradi o più viene rifiutata, così come un'impostazione che non può produrre un tetto). Digitare un valore e premere {{key:Enter}}, oppure uscire dalla casella.

Ogni modifica è un passo di annullamento. Più modifiche alla stessa casella una dopo l'altra (digitare `6/12`, poi `7/12`, poi `8/12`) formano un solo passo, quindi {{key:Ctrl}}+{{key:Z}} ripristina ciò che il tetto aveva prima della serie; modificare un'altra casella avvia un nuovo passo.

## Altezza del cordolo, fascia e sottogronda

- **Altezza del cordolo** è il punto in cui le falde del tetto incontrano l'esterno delle pareti, misurato dal pavimento del livello. Lasciarla vuota per appoggiare il tetto sulla sommità delle pareti; digitare un valore maggiore per un tallone rialzato.
- **Altezza della fascia** è la tavola lungo le gronde e lungo i timpani. Digitare `0` per nessuna fascia.
- **Gronda chiusa** pone una sottogronda orizzontale sotto ogni gronda, dalla parete al retro della fascia.

Ogni falda incontra la propria parete all'altezza del cordolo; così le pareti con pendenze diverse mantengono una sola linea di cordolo e le loro gronde finiscono a altezze diverse, come sarebbero in una struttura reale.

## Disegnare una falda

1. Sul livello su cui poggia la falda, aprire {{ui:Build}} e scegliere {{ui:Falda}}.
2. Digitare la **Pendenza** e, se non è sulla sommità delle pareti, l'**Altezza di gronda**.
3. Fare clic sugli angoli. Il primo lato disegnato è la gronda; la falda sale da essa verso il resto della forma.
4. Fare clic di nuovo sul primo angolo, fare doppio clic oppure premere {{key:Enter}} per finire. {{key:Esc}} elimina gli angoli.

Una falda non segue le pareti. Selezionarla sul livello superiore (fare clic al suo interno) per modificarne la pendenza, l'altezza di gronda o lo spessore, oppure premere {{key:Delete}} per rimuoverla.

## Aggiungere un abbaino

1. Mostrare il livello su cui si trova il tetto.
2. Aprire {{ui:Build}} e scegliere {{ui:Abbaino}}.
3. Nella riga delle opzioni scegliere **Tipo di abbaino** (**A timpano** o **A una falda**) e impostare **Larghezza**, **Parete frontale** (l'altezza della parete frontale dalla sommità del tetto alla gronda dell'abbaino), **Pendenza** e **Sbalzo**.
4. Fare clic su una falda del tetto dove va il centro della facciata dell'abbaino.

BimCraft costruisce la parete frontale, due pareti laterali e il tetto dell'abbaino, e lo prolunga all'indietro fino a incontrare il tetto. Un abbaino a timpano ha due falde che si incontrano in un colmo. Un abbaino a una falda ha una sola falda, che deve essere meno ripida del tetto. Il tetto sotto l'abbaino viene tagliato via. L'abbaino segue il tetto quando le pareti si spostano.

Selezionarlo per modificarne tipo, larghezza, parete frontale, pendenza o sbalzo in **Proprietà**. {{key:Delete}} lo rimuove e chiude di nuovo il tetto. Deve stare su una sola falda del tetto, lontano da displuvi, compluvi e colmo; e solo i tetti creati con lo strumento {{ui:Copertura}} accettano abbaini, non le falde disegnate a mano. Non ancora implementato: una finestra sulla facciata dell'abbaino e gli abbaini su falde disegnate a mano.

## Che cosa viene salvato

I tetti sono tetti IFC fatti di una soletta per falda, pareti a timpano, un elemento di fascia e un rivestimento di sottogronda. Il tetto conserva le lunghezze di colmo, displuvio, compluvio, gronda e timpano, e le sue superfici, per i computi. Una falda è un tetto IFC con una sola soletta.

:::tip
L'annullamento riporta indietro qualunque modifica del tetto in un solo passo, compreso un preset che cambia ogni parete.
:::
