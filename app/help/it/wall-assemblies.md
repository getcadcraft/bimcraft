---
title: Stratigrafie delle pareti e quote di riferimento
summary: Creare i propri tipi di muro strato per strato, con un nucleo esplicito, tenere una libreria dei materiali del progetto e quotare su facce e mezzerie che restano agganciate quando il muro cambia.
keywords: lod, livello di sviluppo, lod 200, lod 300, generico, stratigrafia, tipo di muro, strati, nucleo, faccia del nucleo, mezzeria del nucleo, intercapedine, intercapedine d'aria, membrana, membrana traspirante, libreria dei materiali, materiali, spessore, quota di riferimento, quota, associativo, linea di posizionamento, rivestimento esterno, montante, cartongesso
from: 4ea8fbf5
---

## Cosa farai

Creare un tipo di muro che corrisponda al muro che si costruirà: un rivestimento esterno, un tavolato, un nucleo con montanti da 5½ pollici e cartongesso, oppure mattoni, un'intercapedine d'aria e un muro a telaio in legno. Indicare quali strati sono il nucleo, così una quota o una linea di posizionamento possono tenere fermo il nucleo mentre le finiture intorno cambiano. Poi quotare i muri sulle facce e sulle mezzerie che si intendono.

## Creare un tipo di muro

1. Iniziare un edificio oppure aprire un modello IFC, attivare {{ui:Disegna}} e scegliere lo strumento {{ui:Parete}}.
2. Scegliere un punto di partenza in {{ui:Tipo di muro}} e aprire {{ui:Stratigrafie delle pareti…}}. Un punto di partenza si apre come copia; dare un nome al nuovo tipo.
3. Gli strati vanno dall'esterno, in alto nell'elenco, all'interno, in basso. Scegliere il materiale di ogni strato, digitarne lo spessore (unità del progetto, oppure valori espliciti come `12.7 mm` o `1/2"`), scegliere la sua funzione (finitura, supporto, struttura, isolamento, membrana) e spuntare gli strati **Nucleo**. Il nucleo deve essere un unico gruppo continuo.
4. {{ui:Aggiungi strato}} aggiunge uno strato, {{ui:Aggiungi intercapedine}} aggiunge un'intercapedine d'aria con la sua ventilazione (non specificata, non ventilata, ventilata), {{ui:Aggiungi membrana}} aggiunge uno strato senza spessore nominale, come una membrana traspirante. Le frecce spostano uno strato verso l'esterno o verso l'interno.
5. L'anteprima disegna gli strati in scala, con il nucleo sottolineato e numerato come le righe, e quota ogni strato, il nucleo e il totale. {{ui:Salva tipo}}.

Il nuovo tipo compare nell'elenco dello strumento Parete e in **Proprietà** di un muro selezionato. Salvare un tipo modificato cambia ogni muro che lo usa; {{ui:Duplica tipo}} ne crea uno separato e lo assegna solo ai muri selezionati. Ogni salvataggio è un unico passo di annullamento, insieme ai muri che sposta, alle porte e alle finestre che contengono e alle quote che ne dipendono.

Un'intercapedine aggiunge spessore. Una membrana non ne aggiunge: resta nel tipo perché un abaco possa trovarla in seguito, e non conta nello spessore del muro o del nucleo. Un'intercapedine o una membrana non sono mai contate come materiale pieno. In un file salvato come IFC2X3 una membrana è conservata nel registro del tipo ma lasciata fuori dagli strati di materiale fisico.

## Contrassegnare un tipo con il suo livello di sviluppo (LOD)

Un tipo può dichiarare quanto è sviluppato. Nell'editor, **Livello di sviluppo (LOD)** offre la scala fissa 100, 200, 300, 350, 400 e 500, oppure **Non impostato**. Un muro generico ("Muro 230 generico") è LOD 100 o 200; una stratigrafia specifica con i suoi strati reali ("230 mattone in laterizio, intonacato su entrambi i lati") è LOD 300 o superiore. Il contrassegno lo imposta l'utente: BimCraft non lo calcola, e i tipi di partenza non ne hanno.

Il contrassegno compare accanto al nome del tipo nell'elenco dello strumento Parete, in **Proprietà** di un muro e nell'elenco di [Cambia tipo](topic:wall-tools); il rapporto dopo un cambio di tipo dice se il livello è salito o sceso. Per vederlo nell'abaco **Muri per tipo** e nel suo CSV, spuntare **Mostra il LOD di ogni tipo di muro nell'abaco dei muri** in Impostazioni › BimCraft › Muri: si aggiunge un'ultima colonna, LOD. Il valore è salvato nel file IFC con il tipo (nel set di proprietà `CadCraft_WallType` del tipo, come proprietà `LOD` e dentro il registro del tipo), quindi resta quando si riapre il file. Per ora il contrassegno vale solo per i tipi di muro, non per i singoli elementi né per altri tipi di elemento.

## Muri generici per la fase di schizzo

L'elenco Tipo dello strumento Parete inizia con due muri **generici**: **Muro generico 200 mm (esterno)** e **Muro generico 100 mm (interno)**. Ciascuno è uno strato del materiale generico, contrassegnato LOD 200. Usarli quando si sa dove vanno i muri ma non ancora di che cosa sono fatti.

Un muro il cui tipo è contrassegnato **LOD 100** o **LOD 200** è disegnato in ogni pianta come **una sola fascia tratteggiata**, a ogni livello di dettaglio: nessuno strato, nessuna linea di strato. Questo vale per i muri generici e per qualsiasi tipo proprio contrassegnato LOD 100 o 200. Il muro è completo: ha il suo spessore, le sue porte e finestre, i suoi locali e le sue quantità.

Per svilupparlo, cambiarne il tipo (Modifica › Muri › **Cambia tipo**, oppure Tipo in Proprietà). Il muro non viene mai ridisegnato: lo stesso muro assume il nuovo tipo, e il rapporto dice che cosa si è spostato. Un tipo contrassegnato LOD 300 o superiore è disegnato con i suoi strati, come prima.

Per disegnare ogni muro per i suoi strati, qualunque sia il contrassegno: Impostazioni › BimCraft › Muri, e togliere la spunta a **Disegna i muri di un tipo LOD 100 o LOD 200 come una sola fascia tratteggiata**.

Anche le porte e le finestre di partenza sono tipi generici (una dimensione e un modo di apertura, non un prodotto). Con **Mostra il LOD di ogni tipo di muro nell'abaco dei muri** attivo, gli abachi Porte e Finestre mostrano LOD 200 per loro.

## Assegnare a un tipo i dati di computo

Nell'editor del tipo di muro, **Dati di computo** raccoglie ciò che un computista deve sapere sul muro, una volta sola per il tipo: l'**elemento** di cui è costruito (un mattone o un blocco: nome, lunghezza, altezza e larghezza), la **malta** (nome e spessore del giunto) e un **prezzo unitario** con il suo codice di valuta (tre lettere, come USD, EUR o ZAR) e il riferimento: per m² o ft² di superficie netta del muro, per metro o piede di lunghezza del muro, oppure per ogni muro. Tutto è facoltativo.

Il dato è salvato con il tipo nel file. Ogni muro del tipo lo riporta: {{ui:Abachi}} › **Tipi di muro: dati di computo** elenca l'elemento, la malta, il prezzo e il prezzo per la quantità misurata, e il computo passato a TakeoffCraft riporta questi dati sulla voce di quel tipo di muro. Modificarlo sul tipo e ogni muro lo segue.

Altri tre campi servono a contare mattoni o blocchi e malta:

- **Sfrido sugli elementi, %** si aggiunge al numero di elementi. Lasciarlo vuoto per usare la cifra del metodo di misura del progetto, oppure nessuno se il metodo non ne prevede. Inserire 0 per non avere sfrido, qualunque cosa dica il metodo.
- **Malta in più, %** serve per incavi o forature che assorbono malta. Si aggiunge al volume di malta. Lasciarlo vuoto se non serve.
- **Strati realizzati con questo elemento**: spuntare ogni strato che è un paramento di questo mattone o blocco. Un muro a cassa vuota ne ha due. Senza spunte, si contano gli strati del nucleo.

Il prezzo può essere anche per elemento da ordinare, per 1000 elementi da ordinare o per m³ di malta. Dove l'elemento ha lunghezza e altezza, **Tipi di muro: dati di computo** mostra gli elementi per m² (o ft²) di un paramento, gli elementi da ordinare e il volume di malta; le formule sono in [Mattoni, blocchi e malta](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipo ha un solo elemento: due paramenti di elementi diversi (un paramento esterno in mattoni e uno interno in blocchi) non si possono ancora contare su un solo tipo.

## Tenere fermo il nucleo

In **Proprietà**, impostare la **Linea di posizionamento** di un muro su una faccia del nucleo o sulla mezzeria del nucleo. Quando in seguito si aggiunge o si ispessisce una finitura, quella linea resta dov'è e il muro cresce intorno ad essa; i muri che la incontrano in un angolo la seguono, così gli angoli restano chiusi.

## Materiali del progetto

{{ui:Libreria dei materiali…}} elenca i materiali del progetto: nome, categoria, lo spessore con cui parte uno strato, colore di visualizzazione, motivo di tratteggio di sezione e note. La libreria è salvata nell'IFC con il progetto. Scegliere un materiale per uno strato dà a quello strato lo spessore predefinito del materiale, che si può poi cambiare; modificare la libreria in seguito non ridimensiona mai i muri già disegnati. Si può anche creare un materiale dall'elenco dei materiali dello strato con {{ui:+ Nuovo materiale…}}.

## Quote di riferimento

{{ui:Annota}} › {{ui:Quota di riferimento}}: scegliere orizzontale, verticale o allineata, e un riferimento: la faccia della finitura esterna o interna, la faccia del nucleo esterna o interna, la mezzeria del muro o la mezzeria del nucleo. Scegliere il primo muro, cambiare il riferimento se lo si vuole, scegliere il secondo, poi fare clic dove va la linea di quota. Due riferimenti su un muro ne misurano lo spessore totale o quello del nucleo. {{ui:Quote di riferimento…}} elenca le quote della vista, incluse quelle che hanno perso un muro, con Proprietà, Ricollega riferimenti ed Elimina.

### Quotare tutta la pianta con delle regole

{{ui:Annota}} › {{ui:Quota la pianta…}} quota l'esterno della pianta del piano che si sta guardando: la dimensione complessiva nelle due direzioni, una fila di quote lungo ogni bordo esterno (estremità dei muri, muri che arrivano al bordo, porte e finestre in esso), con le file collocate fuori dall'edificio. Spuntare ciò che si vuole, leggere il conteggio, poi {{ui:Aggiungi le quote}}. Sono quote di riferimento normali, quindi seguono i muri quando si spostano, e si può scegliere, spostare o eliminare ciascuna; l'intero insieme è un unico passo di annullamento, e rieseguirlo non ne crea di doppie.

Quota solo l'esterno: i locali all'interno dell'edificio, i muri curvi e i muri non perpendicolari alla pianta sono lasciati agli strumenti manuali, e le linee di griglia non sono muri, quindi le quote tra griglie non vengono create qui. L'assistente collegato può fare lo stesso con `plan_dimension`.

La quota è agganciata ai muri, non a un punto dello schermo: quando un muro si sposta o cambia tipo, il valore segue. Se un muro viene eliminato, la quota risulta non risolta e non mostra numeri, finché non la si ricollega o non si annulla. Anche la casella della lunghezza accetta coordinate di pianta come `10',12'` per una linea di quota in un punto preciso.

Le quote riguardano i muri disegnati da BimCraft, nelle viste in pianta. Non ancora implementato: quote in sezioni e prospetti, verso porte, finestre e altri componenti, e strati di stratigrafia disegnati in pianta e in sezione; vedere [Cosa non è ancora implementato](topic:not-built-yet).

## Vedere anche

[Disegnare muri](topic:draw-walls), [Modificare un muro, una porta o una finestra](topic:change-a-wall-or-door), [Proprietà](topic:properties-panel).
