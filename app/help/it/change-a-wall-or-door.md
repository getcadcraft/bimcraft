---
title: Modificare un muro, una porta o una finestra
summary: Selezionare un muro, una porta o una finestra disegnati e cambiarne il tipo, la dimensione, l'altezza o la posizione in Proprietà, oppure trascinarlo nella pianta; ogni modifica è un passaggio annullabile.
keywords: squadra, squadrare, 90, angolo retto, obliquo, angolo, ortho, dimensione del locale, faccia interna, faccia esterna, misura da, distanza di spostamento, distanza digitata, curvo, arco, altezza dell'arco, raggio, linea di riferimento, allineamento, modifica, proprietà, tipo di muro, spessore, lunghezza, altezza, offset di base, sommità, piano, inverti, esterno, dimensione porta, dimensione finestra, davanzale, distanza, sposta, grip, trascina, cambia tipo, più elementi
from: 63052d5d
---

## Cosa farai

Modificare ciò che si è disegnato: selezionare un muro, una porta o una finestra, poi digitare un nuovo numero in **Proprietà** oppure trascinarlo nella pianta. La pianta e la vista 3D seguono, gli angoli si ricongiungono e porte e finestre restano nei loro muri.

## Modificare un muro

1. Con {{ui:Draw}} e {{ui:Select}} attivi, fare clic sul muro nella pianta (o nella vista 3D).
2. **Proprietà** mostra una casella con i numeri del muro. Modificarne uno e premere {{key:Enter}}:
   - **Tipo di muro**: un altro dei tipi di partenza. Spessore e strati cambiano con esso.
   - **Spessore**: uno spessore qualsiasi. Il tipo mantiene gli altri strati e il suo strato principale (i montanti o il blocco) assorbe la differenza, per esempio "Esterno 2×6, 200 mm".
   - **Misura da**: **Linea di mezzeria**, **Faccia interna** o **Faccia esterna**. **Lunghezza** e **Dimensione del locale** leggono e impostano a partire da esso. Faccia esterna è ciò che mostrano le quote della pianta.
   - **Lunghezza**: l'estremità del muro si sposta lungo la sua linea. Il muro unito a quell'estremo si sposta squadrato rispetto a se stesso e mantiene il proprio angolo.
   - **Dimensione del locale** (quando c'è un muro parallelo attraverso il locale): digitare la dimensione desiderata. Questo muro si sposta squadrato e i muri uniti si allungano per seguirlo.
   - **Sposta squadrando**: digitare di quanto spostare il muro squadrato rispetto a se stesso: un numero semplice lo sposta verso l'esterno, un numero negativo verso l'interno.
   - **Angolo rispetto al muro unito**: l'angolo rispetto al muro unito al suo inizio. Digitare 90 per impostarlo squadrato. Un muro non unito a nulla mostra **Direzione**, in gradi da est.
   - **Squadra**: riporta a angolo retto i muri collegati a questo, lungo la direzione in cui corre la maggior parte della loro lunghezza. Lavora sull'intero locale o layout collegato, qualunque dei suoi muri si selezioni. Un muro più di 10 gradi lontano da un angolo retto resta com'è, quindi uno impostato a 45 gradi è al sicuro. Un {{ui:Undo}} annulla tutto.
   - **Altezza del muro**: **Fino al piano superiore** segue quel piano; **Fino al livello 3** (e qualsiasi piano più in alto) crea un muro che attraversa i piani intermedi; digitare un'altezza imposta poi quanto la sommità è sotto o sopra quel piano. **Altezza fissa** mantiene il numero digitato. **Attraversa** elenca i piani attraversati da un tale muro: è disegnato più chiaro nelle loro piante, i locali vi si chiudono contro, e porte e finestre vi possono essere collocate da quelle piante. Viene spostato e rimodellato al piano da cui inizia.
   - **Offset di base**: quanto sopra il piano inizia il muro. La sua sommità resta dov'era.
   - **Esterno**: {{ui:Flip}} porta gli strati esterni sull'altra faccia.
   - **Linea di riferimento**: **Linea di mezzeria**, **Faccia esterna**, **Faccia interna**, **Faccia sinistra** o **Faccia destra**. Cambiarla non sposta nulla. Più tardi, quando il muro diventa più spesso (per tipo o **Spessore**) o la sua parte esterna viene invertita, la linea di riferimento resta ferma e il muro cresce o si inverte attorno ad essa. Un muro dritto che la incontra in un angolo segue, così l'angolo resta chiuso. La linea di riferimento del muro selezionato è disegnata tratteggiata nella pianta. Selezionare più muri per impostarla per tutti.
   - **Altezza dell'arco** (muri curvi): quanto il centro si scosta da una linea retta. 0 lo rende dritto; un valore negativo lo curva dall'altra parte. Il raggio è mostrato accanto.
3. Ogni modifica è un passaggio in **Modifiche**; {{ui:Undo}} lo annulla.

## Trascinare un muro nella pianta

Quando un muro è selezionato, mostra tre grip: un quadrato a ogni estremo e un cerchio al centro.

- Trascinare un estremo per allungare, accorciare o ruotare il muro. Scatta come lo strumento Muro, e si aggancia squadrato al muro unito all'altra estremità quando si è entro 3 gradi; {{key:Shift}} lo mantiene sugli assi della pianta.
- I muri uniti all'estremo trascinato mantengono il loro angolo: le loro estremità scorrono lungo le proprie linee per incontrare la nuova linea del muro, così nulla diventa inclinato. Tenere premuto {{key:Mod}} per un trascinamento libero (l'estremo del muro unito segue e quel muro ruota), oppure {{key:Alt}} per spezzare le giunzioni di questo muro.
- Trascinare il centro per spostare l'intero muro squadrato rispetto a se stesso, in qualunque direzione. Le sue estremità scorrono lungo i muri uniti, che mantengono il loro angolo.
- Tenere premuto {{key:Mod}} mentre si trascina il centro per uno spostamento libero, quando si vuole davvero spezzare l'angolo. {{ui:Square up}} lo riporta.
- Mentre un grip è tenuto, digitare una distanza e premere {{key:Enter}} (oppure rilasciare): il muro va esattamente di quella distanza, nel modo in cui lo si stava trascinando. {{key:Esc}} annulla lo spostamento.
- Un muro curvo selezionato mostra grip agli estremi e un grip tondo al centro dell'arco. Trascinare il grip tondo per curvarlo.
- Porte e finestre restano nel muro. Un muro troppo corto per ciò che contiene viene rifiutato con "Non entra in quel muro."

## Modificare una porta o una finestra

1. Fare clic sulla porta o sulla finestra nella pianta.
2. In **Proprietà**: **Tipo** (un'altra porta o finestra dello stesso genere), **Larghezza**, **Altezza**, **Davanzale** (finestre), **Dal punto iniziale** e **Dal punto finale** (la distanza da ciascun estremo della faccia del muro fino al suo bordo), **Cerniere** {{ui:Flip}} (porte a un battente e finestre a battente; porte scorrevoli, a scomparsa, scorrevoli esterne e a libro dicono invece **Apre verso**; finestre fisse, a ghigliottina e panoramiche, e porte doppie, non ne hanno), e **Apertura verso** (porte) oppure **Lato telaio** (finestre) {{ui:Flip}}.
3. Oppure trascinarla lungo il suo muro, o su un altro muro: vedi [Porte e finestre](topic:doors-and-windows).

## Modificare più elementi insieme

Selezionare più muri (oppure più porte, o più finestre) con {{key:Shift}}+clic o {{key:Mod}}+clic. **Proprietà** offre ciò che hanno in comune: **Cambia tipo…**, l'altezza, la dimensione. Una modifica li imposta tutti, e un {{ui:Undo}} annulla tutto.

## Da sapere

- I numeri compaiono nelle {{ui:Units}} scelte sulla barra degli strumenti.
- Muri, porte e finestre provenienti da altri programmi mostrano i loro dati IFC in **Proprietà** come prima, senza questa casella.
