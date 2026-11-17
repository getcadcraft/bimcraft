---
title: Forme dei muri, divisione, offset, stiramento e blocco
summary: Disegnare muri come rettangolo, poligono o arco, su linee già esistenti o intorno a un contorno; dividerli, togliere un pezzo, applicare un offset, stirarli a riquadro, allinearli e bloccarli tra loro, a una quota o a una linea di griglia. Ogni modifica mantiene i muri uniti ed è un unico passo di annullamento.
keywords: cambia tipo, ritipizza, cosa si è spostato, lod, livello di sviluppo, stile di unione, mitra, a battuta, taglio a squadra, unioni dei muri, successivo, attraversa, impedisci unione, consenti unione, priorità layer, nucleo, priorità, incrocio, rettangolo, rettangolo ruotato, poligono, inscritto, circoscritto, arco, centro, arco tangente, scegli linee, scheda, ricalca, contorno, bacchetta magica, dividi, divisione con spazio, spazio, elimina segmento, ricongiungi, offset, copia, stira a riquadro, selezione a riquadro, stira, allinea, blocca, lucchetto, vincolo, blocca quota, modifica quota, griglia, blocca alla griglia, sposta linea di griglia, offset di posizionamento, unione disattiva, isolato, cresci da, misura da, linea di mezzeria, faccia interna, faccia esterna, scollega, alt
from: 5b7d2f75
---

## Cosa farai

Creare e modificare i muri con le ricette dello strumento Parete. Ognuna finisce come disegnare un muro per i suoi angoli: gli angoli si uniscono da soli, le unioni sono salvate nel file, e l'intera modifica è un passo in **Modifiche** che {{ui:Annulla}} riporta indietro. I muri mantengono la loro identità: un muro diviso, distanziato o stirato resta lo stesso muro, con le sue porte, le sue finestre e le sue quote.

## Disegnare un rettangolo, un poligono o un arco

Con {{ui:Disegna}} attivo, aprire {{ui:Forme}} nel gruppo Disegna (oppure scegliere una forma nell'elenco **Forma** della riga Parete). La riga Parete mostra il tipo di muro, il riferimento del disegno, il lato esterno e la sommità, come per lo strumento {{ui:Parete}}. Poi fare clic, oppure digitare i punti (x,y · @dx,dy · @lunghezza<angolo · una lunghezza lungo il puntatore):

- **Rettangolo**: due angoli opposti. Quattro muri, quattro angoli uniti, un passo.
- **Rettangolo ruotato**: dove iniziano e finiscono il primo lato (che ne fissa rotazione e lunghezza), poi un terzo clic per l'altro lato.
- **Poligono**: il centro, poi un angolo (**Inscritto**) oppure il punto medio di un lato (**Circoscritto**). Impostare prima **Lati** (da 3 a 64).
- **Arco, centro**: il centro, l'inizio (che fissa il raggio), la fine. **Verso**: il percorso più corto, antiorario o orario. Un arco che copre tre quarti di cerchio è disegnato come due muri.
- **Arco tangente**: fare clic sulla fine di un muro, poi dove finisce l'arco. L'arco parte dalla fine del muro nella direzione propria del muro.

Una forma chiusa ha l'esterno rivolto verso l'esterno. Disegnata su **Faccia esterna** o **Faccia interna**, la faccia su cui si fa clic è quella che resta ferma.

## Muri su linee già esistenti

- **Scegli linee**: fare clic su una linea e vi si mette un muro. Premere {{key:Tab}} (oppure tenere premuto {{key:Shift}} mentre si fa clic) per prendere l'intera catena di linee unite una dopo l'altra. Le linee sono le linee di disegno di questa vista, il riferimento di ricalco e le linee di griglia.
- **Ricalca contorno**: fare clic dentro un'area chiusa da quelle linee o da muri. I muri seguono il contorno più piccolo intorno al clic.

## Impostare prima di disegnare: offset e unione

La riga Parete ha altri due campi, usati dallo strumento {{ui:Parete}} e dalle forme:

- **Offset**: i muri sono disegnati a questa distanza dalla linea su cui si fa clic: + alla sua sinistra, − alla sua destra, vista nel verso in cui si disegna.
- **Unione**: disattivarla per disegnare muri isolati. Le loro estremità ricevono **Impedisci unione** e restano libere ovunque vadano (vedere [Modificare un muro](topic:change-a-wall-or-door)).

## Dividere, togliere un pezzo, ricongiungere

Aprire {{ui:Muri}} nel gruppo Modifica.

- **Dividi**: fare clic su un muro dove va tagliato, oppure digitare la distanza dal suo inizio. Vicino a un muro che lo attraversa, il taglio si aggancia al punto di incontro. Le due parti hanno lo stesso tipo e restano unite una dopo l'altra. **Spazio** lascia uno spazio di quella lunghezza centrato sul taglio. **Estremità libere** assegna invece alle estremità tagliate **Impedisci unione** (in Impostazioni › BimCraft › Muri › **Quando un muro viene diviso** si imposta quale opzione è spuntata all'inizio). Una porta o una finestra va con il pezzo in cui si trova; un taglio attraverso di essa viene rifiutato.
- **Elimina segmento**: fare clic dove inizia il pezzo e dove finisce. Una porta nel pezzo va con esso.
- **Ricongiungi**: fare clic sulle due parti di un muro (allineate, dello stesso tipo). Tornano un unico muro, quello cliccato per primo, con le porte di entrambe.

## Stile di unione, Impedisci unione, priorità dei layer

Aprire {{ui:Muri}} nel gruppo Modifica.

- **Stile di unione**: fare clic su un angolo dove finiscono due muri diritti. Ogni clic passa allo stile successivo: **Mitra** (entrambe le estremità tagliate sulla linea dall'angolo interno a quello esterno, ciò con cui parte ogni angolo), **A battuta** (un muro passa fino alla faccia esterna dell'altro, che si ferma contro il suo lato) e **Taglio a squadra** (come a battuta, e il muro che passa termina a squadra; ad angolo retto appare come a battuta). **Successivo**, oppure {{key:Tab}}, rende passante l'altro muro. L'elenco **Stile** nella barra mostra l'angolo cliccato per ultimo. Le stesse due scelte sono in **Proprietà** di un muro: **Stile di unione all'inizio / alla fine** e **Passa attraverso**. Ogni modifica è un passo in **Modifiche**. Pianta, corpo 3D, locali e quantità seguono.
- In una T il muro al cui lato si arriva passa sempre. Dove due muri si incrociano, un clic (oppure **Continuo dove incrocia** in Proprietà) dice quale dei due è continuo; questo decide quali strati del muro sono disegnati attraverso l'incrocio.
- Lo stile appartiene all'unione: resta quando i muri si spostano e va via solo quando l'unione va via (il muro è eliminato, diviso a quell'estremità, oppure l'estremità riceve Impedisci unione). Un angolo con un muro curvo, o dove si incontrano tre o più muri, mantiene la mitra. Un angolo più acuto di circa 30 gradi, o più piatto di circa 150, ricade anch'esso sulla mitra.
- **Impedisci unione**: fare clic vicino a un'estremità di muro. Quell'estremità viene liberata: non si unisce a nulla, ovunque vada il muro, finché non la si clicca di nuovo. Le estremità libere sono marcate con una croce mentre lo strumento è attivo. Lo stesso interruttore è **Unisci all'inizio / Unisci alla fine** in Proprietà.
- **Priorità layer**: dove si incontrano muri con strati, lo strato più forte taglia quello più debole, così i nuclei si uniscono ai nuclei e una finitura si ferma contro lo strato più forte. Ogni strato ha una priorità da 0 a 999; di default deriva dalla sua funzione (struttura 800, supporto 600, isolamento 400, membrana 300, finitura 200, intercapedine 100). {{ui:Priorità layer}} apre la stratigrafia, dove la colonna **Priorità** imposta il numero proprio di uno strato. Gli strati di pari priorità si fermano l'uno contro l'altro, e una linea è disegnata solo tra materiali diversi. Si vede nelle piante a dettaglio **Medio** o **Fine**, negli angoli, nelle T e negli incroci di due muri diritti; in Impostazioni › BimCraft › Muri › **Pulisci gli strati dei muri dove si incontrano** lo si disattiva. Cambia solo ciò che è disegnato dentro i muri: i contorni e le quantità dei muri restano come li dà lo stile di unione.

## Cambiare il tipo di molti muri

Passare dalle piante di schizzo ai disegni esecutivi è soprattutto un cambio di tipo: un muro generico diventa la stratigrafia specifica. Non si ridisegna nulla.

1. Scegliere i muri (uno, oppure più con {{key:Ctrl}} o {{key:Shift}}).
2. In Proprietà, premere **Cambia tipo…** sotto Tipo di muro (oppure aprire {{ui:Muri}} nel gruppo Modifica e scegliere {{ui:Cambia tipo}}, che apre la stessa lista). La lista si apre dentro Proprietà, nel blocco dei muri scelti. Non è una finestra di dialogo e non copre nulla: la pianta, la vista 3D e la selezione continuano a funzionare mentre è aperta, e segue i muri che si scelgono.
3. La lista mostra ogni tipo di muro con il suo spessore e il suo contrassegno LOD, per esempio "Muro 230 generico, LOD 200" e "230 mattone in laterizio, intonacato su entrambi i lati, LOD 300". I tipi che i muri scelti hanno ora sono contrassegnati. Digitare in **Trova** per restringere: un nome, uno spessore, oppure `lod 300`.
4. Fare clic su un tipo. Ogni muro scelto cambia in un unico passo, quindi un solo {{ui:Annulla}} riporta indietro l'intero cambio. La piccola x chiude la lista.

Ogni muro mantiene la sua linea di posizionamento. Un muro sulla sua mezzeria cresce da entrambi i lati; un muro la cui linea di posizionamento è una faccia mantiene quella faccia e cresce dall'altra parte, e i muri uniti ad esso lo seguono agli angoli. I muri bloccati a un muro cambiato lo seguono. Porte e finestre restano nei loro muri e vengono ritagliate di nuovo per il nuovo spessore.

Dopo il cambio, la lista mostra **Cosa si è spostato**: quanti muri sono cambiati e a che cosa, lo spessore e il LOD prima e dopo, i muri che si sono spostati di lato per mantenere la loro linea di posizionamento, i muri uniti che hanno seguito, le porte e le finestre ricollocate, e ogni locale la cui area è cambiata, con l'area prima e dopo. La barra di stato dice lo stesso in una riga. Il rapporto si limita a informare; non blocca mai un cambio. Scegliere un tipo in **Proprietà › Tipo di muro** fa lo stesso cambio e dà lo stesso rapporto.

Due cose bloccano un cambio, e in quel caso non si modifica nulla: una porta o una finestra che non entrerebbe più nel suo muro (un muro si accorcia dove un angolo segue; rendere prima la porta più stretta o spostarla lontano dall'angolo), e un blocco che il cambio spezzerebbe (un muro bloccato a una linea di griglia dalla sua mezzeria mentre la sua linea di posizionamento è una faccia; sbloccarlo oppure riportare la linea di posizionamento sulla mezzeria).

Un assistente collegato a BimCraft può fare lo stesso cambio (strumenti `wall_types_list` e `walls_swap_type`) e riceve lo stesso rapporto.

Il contrassegno LOD di un tipo si imposta nell'editor delle stratigrafie: vedere [Stratigrafie delle pareti](topic:wall-assemblies).

## Offset e stiramento a riquadro

- **Offset**: fare clic su un muro, poi sul lato in cui spostarlo, oppure digitare la distanza. Il muro si sposta perpendicolarmente a sé stesso e i muri uniti ad esso si allungano. Spuntare **Copia** per una copia parallela (non è unita all'originale).
- **Stira a riquadro**: fare clic su due angoli di un riquadro, poi su un punto da cui spostare e un punto dove spostare. Ogni estremità di muro dentro il riquadro si sposta; un muro interamente dentro si sposta e i muri che vi si appoggiano vengono con lui; i muri che attraversano il riquadro si stirano.

## Modificare una quota e bloccarla

Scegliere una quota di riferimento (Annota › {{ui:Quota di riferimento}}) e digitarne il valore in **Proprietà**: il muro del suo secondo riferimento si sposta perpendicolarmente a sé stesso, il primo riferimento resta fermo e i muri uniti seguono. Spuntare **Blocca questa quota** per mantenere il valore: quando in seguito si sposta uno dei due muri, l'altro lo segue. Un valore bloccato non si può sovrascrivere finché non lo si sblocca.

## Allineare e bloccare

**Allinea e blocca**: fare clic su una faccia di muro (oppure sulla mezzeria, vicino al centro del muro) o su una linea di griglia, poi sulla faccia del muro da portare su quella linea. Il muro si sposta perpendicolarmente sulla linea. Spuntare prima **Blocca** per tenerli allineati: un lucchetto appare nella pianta, e quando un muro si sposta l'altro lo segue. **Proprietà** di un muro elenca i suoi **Blocchi**, ognuno con **Sblocca**.

## Bloccare i muri alle linee di griglia

Scegliere un muro che corre lungo una linea di griglia, oppure la cui estremità vi sta sopra, e scegliere la linea di griglia in **Proprietà** › **Blocca alla griglia**. Poi scegliere la linea di griglia con lo strumento {{ui:Griglia}} e digitare una distanza in {{ui:Sposta di}}: la linea si sposta perpendicolarmente a sé stessa e i muri bloccati ad essa seguono, con i loro muri uniti, in un unico passo. Un muro bloccato a una linea di griglia non può essere spostato da solo fuori da essa (spostare la linea, oppure sbloccare il muro); una linea di griglia ruotata in modo che un muro bloccato non possa restare perpendicolare ad essa viene rifiutata. Rinominare la linea mantiene il blocco; eliminarla rimuove il blocco.

## Lunghezza: quale lato resta fermo e che cosa misura

- **Cresci da** (Proprietà di un muro): **L'inizio resta fermo** (si muove la fine), **La fine resta ferma** (si muove l'inizio) oppure **Il centro resta fermo** (si muovono entrambe le estremità di metà). Mentre si digita la Lunghezza, la pianta segna il punto che resta fermo. Il muro unito all'estremità che si muove si sposta perpendicolarmente a sé stesso e mantiene il suo angolo.
- **Misura da** (accanto a Quote nella pianta, in Proprietà e in Impostazioni › BimCraft › Muri): la linea di mezzeria, la faccia interna o la faccia esterna. Il campo Lunghezza e le quote dei muri nella pianta leggono la stessa, quindi concordano. Parte dalla linea di mezzeria.
- Per spostare un muro libero dalle sue unioni (si spezzano, il muro mantiene la sua identità), tenere premuto {{key:Alt}} mentre si trascina la sua maniglia centrale.

## Cose utili da sapere

- Queste ricette sono quelle della specifica dello strumento Parete (pagine da 4 a 9). Lo stile di unione e la priorità dei layer sono pensati per muri diritti; la priorità dei layer si vede solo in pianta (non in sezioni, prospetti o 3D, dove un muro è un unico corpo), non nei nodi di tre muri o più, e le membrane non vengono trascinate.
- Lo stile di un'unione è salvato nel suo registro nel file IFC (il nome dell'`IfcRelConnectsPathElements`, per esempio `CadCraft join L butt 1`), quindi gli altri programmi leggono ancora l'unione e un file più vecchio si apre con mitre.
- I blocchi e le unioni sono salvati nel file IFC (i blocchi come `CadCraft_WallHolds` sul progetto, le unioni come `IfcRelConnectsPathElements`), quindi restano quando si riapre il file.
- I muri curvi si possono dividere, ricongiungere e privare di un pezzo; non si distanziano né si bloccano.
- Vedere anche [Disegnare muri](topic:draw-walls), [Modificare un muro, una porta o una finestra](topic:change-a-wall-or-door) e [Modellare un muro](topic:wall-shape).
