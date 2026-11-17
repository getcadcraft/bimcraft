---
title: Disegnare muri
summary: Disegnare i muri sulla pianta di un piano facendo clic sugli angoli o digitando le lunghezze; gli angoli si uniscono da soli e i muri vengono salvati come IFC.
keywords: curvo, arco, linea di riferimento, allineamento, muro, muri, disegno, pianta, pianta del piano, locale, angolo, unione, tipo di muro, 2x6, 2x4, cmu, calcestruzzo, altezza, livello, livelli, piano, lunghezza digitata, ortho, snap
from: 8269cd4b
---

## Cosa si fa

Disegnare i muri di un edificio sulla pianta di ogni piano. Fare clic dove inizia un muro e poi su ogni angolo; BimCraft unisce gli angoli per conto dell'utente, assegna a ogni muro i suoi strati (rivestimento, pannello di fondo, montanti, cartongesso …) e lo porta fino al piano superiore. La vista 3D mostra i muri man mano che si disegnano.

## Aprire la pianta

1. Iniziare un nuovo edificio ([Avviare un nuovo edificio](topic:start-a-new-building)) oppure aprire un modello IFC.
2. Fare clic su {{ui:Disegna}} nella barra degli strumenti. Si apre subito un nuovo edificio con il comando attivo.
3. La pianta di un livello viene mostrata a sinistra e la vista 3D a destra. Scegliere il piano nell'elenco in cima alla pianta, oppure con il pulsante rotondo accanto nel pannello **Livelli**.
4. {{ui:Pianta}}, {{ui:Dividi}} e {{ui:3D}} sono strumenti della riga {{ui:Vista}} della barra degli strumenti (i comandi PLAN, SPLIT e i tasti funzionano come prima). Usare {{ui:Pianta}} per la sola pianta, {{ui:Dividi}} per entrambe, {{ui:3D}} per chiudere la pianta. Quando la finestra è stretta (o la dimensione dell'interfaccia è grande), {{ui:Dividi}} mette la pianta sopra la vista 3D invece che accanto.

La pianta taglia il livello a 4'-0" (1200 mm) sopra il suo pavimento, come fa una pianta. Scorrere la rotella per lo zoom; trascinare con il pulsante centrale o destro (oppure tenere premuto {{key:Space}} e trascinare) per fare pan; con {{ui:Seleziona}} attivo, un semplice trascinamento fa pan. {{key:F}} con il puntatore sulla pianta la adatta.

## Disegnare una stanza

1. Fare clic su {{ui:Parete}} (oppure premere {{key:W}}).
2. Scegliere il tipo di muro nel primo elenco, per esempio **Exterior 2×6** o **Interior 2×4**.
3. Scegliere l'altezza: **Fino al livello superiore** (il muro segue se quel livello si sposta), **Fino a** un livello più in alto per un muro che attraversa più livelli (un vano scala, un locale a doppia altezza, un timpano alto), oppure **Altezza fissa** e digitarla. Un muro così appartiene al livello su cui è stato disegnato; le piante dei livelli che attraversa lo mostrano più chiaro, i locali si chiudono contro di esso, e da quelle piante è possibile fare clic per inserire porte e finestre (una porta poggia sul pavimento di quel livello). Per spostare o rimodellare il muro stesso, andare al livello da cui inizia.
4. Fare clic dove inizia il primo muro.
5. Fare clic su ogni angolo. Ogni clic crea un muro; il successivo inizia dove è finito il precedente. Lunghezza e angolo sono mostrati accanto al puntatore.
6. Fare di nuovo clic sul primo punto per chiudere la stanza. La riga di stato indica quanti muri ha la stanza e, in modalità mezzeria, ogni muro riceve il suo strato esterno sul lato esterno della stanza.
7. Premere {{key:Esc}} (oppure fare clic destro, o doppio clic) per fermarsi senza chiudere.

Gli angoli si uniscono da soli: due muri si incontrano con un giunto obliquo, un muro che termina su un altro si ferma alla sua faccia (una T), e tre o più muri in un punto condividono l'angolo. I muri che si incrociano restano come sono.

Un'intera stanza in una volta: aprire {{ui:Forme}} per un rettangolo, un rettangolo ruotato, un poligono, archi, muri su linee scelte o intorno a un contorno (vedere [Forme di muro, divisione, offset, allungamento e blocco](topic:wall-tools)).

## Scegliere il riferimento del disegno

Scegliere **Mezzeria**, **Faccia interna** o **Faccia esterna** prima del primo clic. Con una faccia selezionata, i clic e le lunghezze digitate descrivono quella faccia; BimCraft sposta la mezzeria del muro di metà dello spessore totale e unisce gli angoli consecutivi. Scegliere **Esterno a sinistra** o **Esterno a destra** rispetto alla direzione di disegno. Per un contorno chiuso disegnato in senso antiorario, l'esterno è a destra; in senso orario, a sinistra. Con **Faccia interna** il corpo del muro va sul lato esterno della linea; con **Faccia esterna**, sull'altro lato. Il disegno per faccia mantiene il lato esterno scelto quando si chiude il giro. Sulla mezzeria, i muri che non chiudono una stanza prendono il lato esterno scelto; chiudere una stanza imposta da sola il lato esterno di ogni muro verso l'esterno della stanza, in qualunque senso sia stata disegnata.

Cambiare il tipo di muro, il riferimento o il lato esterno interrompe la catena corrente. Vicino a un angolo di inversione, i giunti lunghi vengono chiusi lasciando estremità squadrate.

Mentre si disegna, un estremo nello spazio vuoto può allinearsi orizzontalmente o verticalmente con un estremo di un muro o con un angolo precedente. Una guida tratteggiata collega quel punto al puntatore agganciato. {{key:Shift}} mantiene la direzione di disegno a squadra; l'allineamento si ferma poi lungo quella direzione. Gli estremi, i punti medi e le intersezioni dei muri vicini hanno la precedenza sull'allineamento lontano.

## Linea di posizione

Con **Riferimento** su **Faccia esterna** o **Faccia interna**, il muro mantiene quella faccia come linea di posizione. Più tardi, se il muro diventa più spesso o il suo esterno viene invertito, quella faccia resta dov'è e il muro cresce o si inverte attorno a essa. Un muro dritto che la incontra in un angolo la segue, così l'angolo resta chiuso. È possibile cambiare la linea di posizione in seguito in **Proprietà**: vedere [Modificare un muro, una porta o una finestra](topic:change-a-wall-or-door).

## Disegnare un muro curvo

1. Fare clic su {{ui:Parete}}, poi scegliere **Curvo** nell'elenco **Forma** della riga delle opzioni.
2. Fare clic dove inizia il muro, poi dove finisce.
3. Fare clic su un punto del suo arco. Oppure digitare l'altezza dell'arco e premere {{key:Enter}}.
4. La catena prosegue dalla fine del muro. Premere {{key:Esc}} per terminarla.

Un muro curvo si unisce ai muri alle sue estremità (funzionano gli angoli e le unioni a T), forma stanze e ospita porte e finestre lungo il suo arco. Restano unità dritte, squadrate rispetto al muro nel loro punto medio, e la loro distanza è misurata lungo l'arco. Un muro può girare al massimo di tre quarti di cerchio. Si aggancia alle sue estremità e al punto medio del suo arco.

Non ancora implementato per i muri curvi: {{ui:Rifila / estendi}} e {{ui:Angolo}}, l'ossatura, le quote automatiche della pianta e l'aggancio lungo l'arco. Vedere [Cosa non è ancora implementato](topic:not-built-yet).

## Digitare una lunghezza invece di fare clic

Dopo il primo clic, digitare e premere {{key:Enter}}:

| Digitare | Disegna |
|---|---|
| `12'6"` o `3810` | un muro di quella lunghezza, nella direzione indicata dal puntatore |
| `12'6"<90` | di quella lunghezza, con quell'angolo (gradi, in senso antiorario da destra) |
| `@3000,0` | fino a un punto a quella distanza dall'ultimo, in orizzontale e in verticale |
| `1200,3400` | fino a quel punto sulla pianta |

Digitando un numero mentre lo strumento Parete è attivo, si va direttamente nella casella {{ui:Lunghezza}}. In piedi e pollici un numero semplice è in pollici; in millimetri è in millimetri. È sempre possibile digitare l'unità: `3.5 m`, `10 ft`, `6 1/2"`.

## Agganci

- Gli estremi dei muri, gli angoli delle loro facce e i punti medi dei muri si agganciano quando il puntatore è vicino (un quadrato, un triangolo).
- Il puntatore si aggancia alla linea centrale di un muro o a una delle due facce (una croce).
- Dall'ultimo punto, la direzione resta ferma ogni 15° quando è vicina; tenere premuto {{key:Shift}} per mantenerla a 0°, 90°, 180° o 270°.
- Le direzioni libere arrotondano la lunghezza a 1/2" (o 10 mm).

## Modificare, annullare, eliminare

- Ogni muro è un passo nelle **Modifiche**: {{ui:Annulla}} e {{ui:Ripristina}} riprendono i muri e li rimettono.
- Con {{ui:Seleziona}} attivo, fare clic su un muro nella pianta per sceglierlo; la vista 3D e **Proprietà** lo seguono. {{key:Delete}} elimina i muri scelti, e i muri che erano uniti a essi vengono riordinati.

## Livelli

Il pannello **Livelli** elenca ogni livello con la sua quota e la sua altezza.

- Digitare un nuovo nome, una quota o un'altezza e premere {{key:Enter}}. Cambiare l'altezza (o la quota) di un livello sposta i livelli sopra di esso della stessa quantità, e i muri che arrivano fino a un livello seguono.
- {{ui:Aggiungi un livello in cima}} aggiunge un livello sopra quello più alto, alto quanto esso.
- {{ui:Aggiungi un livello sotto}} aggiunge un livello sotto il più basso (un seminterrato), alto quanto quest'ultimo: la sua quota è negativa quando il livello più basso è a 0, e nessun altro livello si sposta. {{ui:Annulla}} lo toglie di nuovo.
- {{ui:Copia questo livello…}} ridisegna su un altro livello, o su uno nuovo in cima, ciò che si vede sul livello osservato: i suoi muri con porte e finestre, pavimenti e soffitti (non i tetti). I muri che arrivavano fino al livello superiore arrivano fino al livello sopra il nuovo; i locali compaiono da soli. Un solo {{ui:Annulla}} riprende tutto. Se l'altro livello ha già dei muri, la copia si aggiunge a essi.
- {{ui:Unità}} nella barra degli strumenti sceglie le unità (piedi e pollici, pollici, piedi decimali, millimetri, centimetri o metri) per tutto ciò che gli strumenti di disegno mostrano e leggono.

## Salvare

Fare clic su {{ui:Salva come IFC}}. Ogni muro diventa un muro IFC con la sua linea centrale, la sua forma unita, il suo tipo e i suoi strati, `Pset_WallCommon` e quantità di base (lunghezza, altezza, aree e volumi), così altri programmi BIM lo aprono e lo inseriscono nell'abaco.

## Da sapere

- I muri sono disegnati sulla loro linea centrale. Lo spessore viene dal tipo di muro.
- La pianta mostra pieni i muri disegnati qui, e tutto il resto (elementi di libreria, modelli di altri programmi) tagliato dallo stesso piano, con ciò che sta sotto il taglio in linee sottili.
- I muri creati da altri programmi compaiono nella pianta ma non possono ancora essere modificati con questi strumenti.
