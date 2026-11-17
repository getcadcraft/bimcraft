---
title: Abachi, quote e PDF della pianta
summary: Abachi di porte, finestre, muri e locali che cambiano mentre si disegna, quote sulla pianta, e la pianta di un livello salvata in PDF a una scala standard.
keywords: abaco, abaco delle porte, abaco delle finestre, abaco dei muri, abaco dei locali, quantità, computo, superficie, csv, foglio di calcolo, quote, quota, stampa, pdf, plot, scala, 1/4", 1:50, tavola
from: d97cd16e
---

## Cosa si fa

Vedere a cosa ammonta l'edificio disegnato, mentre lo si disegna: quante porte e finestre di ogni dimensione, quanto muro di ogni tipo, quanto è grande ogni locale. Mettere quote sulla pianta e salvarla in PDF per stampare o inviare.

## Abachi

Con {{ui:Disegna}} attivo, **Abachi** nel pannello di sinistra mostra una tabella alla volta:

- **Porte** e **Finestre**: ciascuna con la sua marca (D1, D2 … e W1 …, assegnate al posizionamento), il suo tipo, larghezza, altezza (e davanzale), livello e il muro in cui si trova.
- **Muri per tipo**: per ogni tipo di muro, quanti muri, il loro spessore, la loro lunghezza totale e la loro superficie laterale come **Superficie lorda**, **Detrazioni** e **Superficie netta**, con un totale.
- **Locali**: numero, nome, livello, superficie e perimetro, con la superficie totale.
- **Solai**: ogni solaio con il suo livello, tipo e spessore, e la sua superficie lorda, le detrazioni e la superficie netta.
- **Finiture**: ogni strato di finitura dei tipi di muro (per materiale e lato del muro) e i soffitti, con il numero di facce e lordo, detrazioni e netto.
- **Tipi di muro: dati di computo**: ciò che è stato inserito una volta per ogni tipo di muro (unità, malta, prezzo), con il numero di muri, la loro lunghezza e la superficie netta, e il prezzo moltiplicato per la quantità misurata. Vedi [Stratigrafie dei muri](topic:wall-assemblies).

- **Finiture per locale**, **Finiture per muro**, **Finiture per zona** e **Quantità di finiture**: cosa copre ogni locale, con le superfici, il numero di piastrelle compresi i tagli e i volumi di sottofondo. Vedi [Finiture dei locali e abachi delle finiture](topic:room-finishes).
- Le proprie **configurazioni**: un abaco raggruppato, totalizzato e salvato con un nome. Vedi [Impaginare, salvare ed esportare un abaco](topic:schedule-layouts).

Le tabelle cambiano a ogni modifica. Fare clic su una riga, o su una singola cifra, per scegliere gli elementi da cui deriva. **Scarica CSV** salva la tabella, da aprire in un foglio di calcolo; **Scarica Excel** e **Copia per Google Sheets** sono sotto di essa. **Finiture dei locali** e **Capitolato** ([Scrivere il capitolato dal modello](topic:specification)) si aprono dallo stesso punto.

## Superficie e volume di ogni strato

Scegliere **Strati: superficie e volume** nell'elenco degli Abachi. Ha una riga per ogni strato di ogni tipo di muro, solaio, copertura e soffitto in uso: l'elemento, il tipo e il suo LOD, lo strato (contato dal lato esterno di un muro, dalla parte superiore di un solaio, copertura o soffitto), il suo materiale e funzione, il suo spessore, quanti elementi, la **superficie netta** e il **volume**.

- La superficie è la superficie netta degli elementi di quel tipo, misurata esattamente come in Muri per tipo, Solai e Finiture, secondo il metodo di misurazione del progetto. Una copertura è misurata sulla falda; nessun metodo di misurazione ha una regola per le coperture.
- Il volume è quella superficie per lo spessore proprio dello strato.
- Un solaio, una copertura o un soffitto senza tipo è una sola riga: uno strato del proprio spessore.
- Un'intercapedine d'aria è elencata con la sua superficie ed esclusa dal volume totale. Una membrana ha una superficie e nessun volume.

Fare clic su una riga per scegliere i suoi elementi. **Scarica CSV** salva la tabella.

## Come si misurano le superfici

Ogni superficie è composta da tre numeri che si sommano: il lordo meno le detrazioni è il netto. La regola è scritta sopra ciascuna di queste tabelle, ed è una sola regola: gli abachi, le quantità salvate nel file IFC e il computo inviato a TakeoffCraft usano tutti la stessa.

- **Un muro**: il lordo è una faccia del muro, la sua lunghezza sull'asse per la sua altezza (la faccia reale per un muro con sommità o base sagomata). Ogni porta, finestra e altra apertura viene detratta, larghezza per altezza, una volta per apertura.
- **Un solaio o un soffitto**: il lordo è l'area all'interno del suo contorno. Ogni apertura e ogni foro al suo interno viene detratto una volta.
- **Una finitura di parete**: ogni strato di finitura del tipo di muro copre una faccia del muro, misurata come il muro, con le stesse aperture detratte. Una finitura è uno strato del muro: è elencata in Finiture e non viene sommata alla superficie del muro, quindi un muro con una porta non viene mai contato due volte.

Questo è il **predefinito CadCraft**: ogni apertura viene detratta, qualunque sia la sua dimensione; le lunghezze dei muri sono sull'asse; gli sguinci non sono misurati. È ciò che usa ogni progetto finché non se ne sceglie un altro.

## Scegliere un metodo di misurazione

Sopra l'abaco, **Metodo di misurazione** elenca i metodi forniti con BimCraft, e **Carica un file di metodo** carica quello dello studio. La scelta viene salvata nel file IFC, come un unico passo di annullamento, e tre cose ne seguono l'esempio contemporaneamente: gli abachi, le quantità nette salvate nel file e il computo inviato a TakeoffCraft. La regola sopra ogni tabella inizia allora con il metodo, la sua fonte, la data in cui è stata letta la fonte e le parole **Non verificato da un computista**.

Un metodo è un piccolo file di dati, non codice di programma. Per ogni quantità indica:

- **la più piccola apertura detratta**: per esempio, un'apertura di 0,5 m² o meno resta nella superficie del muro;
- **come si misurano le giunzioni dei muri**: sull'asse; oppure con un muro che termina contro un altro, misurato alla faccia di quel muro; oppure con ogni estremità di muro che incontra un altro muro misurata alla faccia vicina;
- **se gli sguinci sono misurati** per una finitura (i risvolti della finitura nelle aperture), come superficie oppure, se poco profondi, come lunghezza. La profondità di uno sguincio è presa pari alla metà dello spessore del muro;
- **cosa dice sulla muratura**: come viene misurata, e qualsiasi percentuale di scarto o di malta che dichiara.

I metodi forniti con BimCraft:

| Metodo | Muri: la più piccola apertura detratta | Finiture di parete | Soffitti | Muratura |
|---|---|---|---|---|
| Predefinito CadCraft | ogni apertura | ogni apertura | ogni foro | nessuna percentuale |
| RICS NRM 2 (Regno Unito), 2ª edizione 2021 | 0,5 m² o meno resta | 1 m² o meno resta | 1 m² o meno resta | per superficie; nessuna percentuale dichiarata |
| AAQS Standard Method for Africa 2015 | 0,5 m² o meno resta | 0,5 m² o meno resta | 0,5 m² o meno resta | per superficie; netto misurato, scarto 0% |
| IS 1200 (India), 1976, muratura | 0,1 m² o meno resta | predefinito (vedi sotto) | predefinito | per volume |
| BIA Technical Note 10 (Stati Uniti), 2009 | ogni apertura | predefinito | predefinito | scarto del 5% sulle unità, del 15% sulla malta |

Leggere questi limiti prima di affidarsi a un metodo:

- **Nessun computista ha verificato nessuno di essi.** Ognuno è stato preparato leggendo la fonte indicata e registrando i suoi valori con la clausola da cui provengono. Se si è computisti e si può verificarne uno, gli autori dell'app saranno lieti di saperlo.
- Dove una regola non poteva essere letta dalla fonte, il metodo indica **non confermata** per essa e si usa il predefinito CadCraft. Nessun metodo fornito con BimCraft ha una regola confermata per le giunzioni dei muri, gli sguinci o i solai, quindi questi sono misurati nel modo predefinito con tutti.
- L'IS 1200 detrae le aperture nell'intonaco in tre fasce. Un file di metodo non può ancora contenere fasce, quindi le finiture di parete usano il predefinito con quel metodo, e la regola lo dichiara.
- Lo South African Standard System of Measuring Building Work **non** è tra questi: il suo testo non è stato leggibile. Il metodo AAQS per l'Africa dichiara di basarsi sull'edizione 1991 di quel sistema, ma è un documento diverso.
- Il BIA Technical Note 10 è una nota di stima del settore, non un metodo di misurazione standard.
- Un'apertura esattamente della dimensione più piccola segue le parole del metodo ("non superiore a", "inferiore a"). Le dimensioni entro 2 parti su 10 000 da essa contano come esattamente quella.
- Con un metodo, la superficie laterale netta del muro e la superficie netta di un solaio o di un soffitto nel file seguono il metodo, e l'insieme di quantità ne riporta il nome. I valori lordi e i volumi nel file restano come disegnati.

**Note su questo metodo**, sotto il selettore, indica ciò che ogni fonte lascia aperto. **Apri la fonte** porta al documento.

### Il metodo proprio dello studio

Un file di metodo è un JSON nel formato `cadcraft-measurement-method`. Ogni valore indica la clausola da cui proviene; un valore senza clausola viene rifiutato. Il file viene controllato al caricamento, un campo errato viene indicato per nome, e nulla viene usato da un file che non supera il controllo. Una volta scelto, il file viene salvato nel progetto, così il progetto si apre allo stesso modo su un altro computer. Il suo id è un nome semplice scelto da chi lo crea (può non essere l'id di un metodo fornito con l'app).

## Mattoni, blocchi e malta

**Tipi di muro: dati di computo** conta le unità e la malta di ogni tipo di muro la cui unità ha una lunghezza e un'altezza (vedi [Assegnare a un tipo i dati di computo](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ecco le formule, esattamente come calcolate:

- **Unità per superficie di un paramento** = 1 / ((lunghezza dell'unità + giunto) × (altezza dell'unità + giunto)). Un mattone 215 × 65 mm con un giunto di 10 mm: 1 / (225 × 75 mm) = 59,26 per m².
- **Unità di larghezza attraverso un paramento** = (spessore del paramento + giunto) / (larghezza dell'unità + giunto), arrotondato a un numero intero, almeno 1. Un paramento di 102,5 mm di mattoni da 102,5 mm è 1; un muro di 215 mm degli stessi mattoni è 2.
- **Unità** = unità per superficie × unità di larghezza attraverso × la superficie netta della faccia del muro, sommate sui paramenti di muratura del tipo.
- **Unità da ordinare** = unità × (1 + scarto % / 100), arrotondato per eccesso a un'unità intera. Lo scarto è quello inserito sul tipo; se non ne è inserito nessuno, quello del metodo, se ne dichiara uno; altrimenti 0%.
- **Malta** = superficie netta × spessore del paramento, meno il volume delle unità (unità × lunghezza × altezza × larghezza), poi più la percentuale aggiuntiva inserita sul tipo per fori o perforazioni, poi più l'eventuale margine del metodo se lo dichiara. Richiede la larghezza dell'unità.

Cosa si assume: ogni paramento di muratura di un tipo è costruito con la sua unica unità; un paramento più spesso di una larghezza di unità è contato come quel numero di larghezze di unità, ciascuna come un paramento posato per lungo, quindi i mattoni tagliati, i chiusini e le forme speciali non sono contati separatamente; dove nessuno strato è indicato come costruito con l'unità, gli strati interni sono considerati come paramenti, e la nota sopra la tabella lo dichiara. **Importo** è il prezzo moltiplicato per l'unità a cui si riferisce, che ora può anche essere un'unità da ordinare, 1000 unità da ordinare o un m³ di malta.

Le marche sono il tag IFC degli elementi: cambiarne una in **Proprietà** (Tag) e l'abaco segue. Per ogni modello IFC, disegnato o no, [Sommare quantità, elencare elementi e pianificare spazi](topic:quantity-totals) somma qualsiasi proprietà.

## Quote

La pianta mostra la lunghezza di ogni muro disegnato lungo la sua faccia esterna (un muro interno: lungo una faccia) e, per un muro con porte o finestre, una catena dagli angoli a ciascuna apertura. {{ui:Quote}} nella barra del modello le nasconde e le mostra di nuovo.

## Salvare la pianta come PDF

1. Mostrare il livello desiderato e impostare le unità nel pannello **Livelli**.
2. Fare clic su {{ui:Stampa}} nella barra del modello.
3. BimCraft salva "<file> — <livello>.pdf": la pianta in bianco e nero alla scala standard più grande che entra nella pagina (1/4" = 1'-0", 1/8" = 1'-0" … su Letter in piedi e pollici; 1:50, 1:100 … su A4 in millimetri), con i muri campiti, porte, finestre, nomi e superfici dei locali, quote, e una fascia del titolo con il livello, il file, l'altezza di sezione, la data e la scala.

Il PDF è disegnato come linee e testo, quindi resta nitido a qualsiasi zoom e il suo testo è ricercabile.

## Utile sapere

- Gli abachi elencano ciò che hanno realizzato gli strumenti di disegno. Porte e finestre provenienti da un altro programma compaiono invece in Quantità totali.
- Per valutare il lavoro, consegnare le quantità a TakeoffCraft: vedi [Quantità a TakeoffCraft](topic:takeoff). Il download CSV resta per un foglio di calcolo.
