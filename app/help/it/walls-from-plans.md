---
title: Muri da una serie di piante (PDF o scansione)
summary: Trasformare le pagine di un PDF, o di un disegno scansionato, in muri, porte e finestre, con un livello per ogni pagina e la pagina tenuta sotto ogni pianta.
keywords: pdf, piante, serie di piante, scansione, disegno scansionato, tiff, ricalco, muri da un pdf, muri da una scansione, livelli, pagine, scala, porte, finestre, verso di apertura, davanzale, sottofondo
from: b70d9db7
---

## Cosa farai

Avviare un modello dalle piante che si hanno su carta: un PDF (disegnato a linee, oppure una scansione dentro un PDF) oppure una scansione (PNG, JPEG, TIFF con una o più pagine). Ogni pagina diventa i muri, le porte e le finestre di un livello.

## Passaggi

1. Attivare {{ui:Disegna}}. Scegliere {{ui:Build}} › {{ui:Da un disegno…}}, poi {{ui:Scegliere un disegno…}} e selezionare il PDF o la scansione.
2. **Pagine e livelli.** Ogni pagina è elencata con ciò che è (**disegno a linee**, oppure **un'immagine (ricalcata)**) e il livello in cui va: uno dei livelli che si hanno, **un nuovo livello sopra gli altri**, oppure **escludi questa pagina**. Le pagine si abbinano ai livelli in ordine; è possibile cambiarne una qualsiasi.
3. **Scala.** Per un PDF, indicare come è stato disegnato (**1 : 100**, **1 : 50**…). Per il resto, oppure se non si sa, scegliere **da una distanza nota**: fare clic sui due estremi di una quota o di una barra di scala nell'anteprima, poi digitare la distanza reale. Tutte le pagine usano l'unica scala.
4. Scegliere il **tipo di muro** e l'**altezza di un nuovo livello**. Lasciare spuntato **Mantieni ogni pagina sotto la pianta del suo livello** per vedere ogni pagina come linee sottili sotto la sua pianta.
5. La riga sotto le scelte dice quanti muri, porte e finestre verranno creati, e su quanti livelli. Fare clic su {{ui:Crea}}.

## Come legge una pagina

- **I muri** derivano da coppie di linee parallele distanti fino a 600 mm (le due facce di un muro); il muro è spesso quanto lo spazio. Tratteggi e scritte sono esclusi.
- **Porte e finestre.** Un varco in un muro (da 500 a 2600 mm) con un arco di apertura disegnato accanto è una porta, incernierata a un'estremità del varco e apre dal lato dell'arco. Un varco o un muro con linee di davanzale è una finestra. Un varco senza nessuno dei due è una porta fino a 1300 mm e una finestra oltre.
- **Una scansione** viene prima raddrizzata se è stata acquisita storta (la finestra di dialogo lo dice), resa in bianco e nero, ripulita dai puntini e ricalcata; una **pagina PDF che è un'immagine** viene prima disegnata e poi trattata allo stesso modo. Il ricalco trova il centro di ogni tratto e vi adatta linee rette e archi; non usa rete né un modello addestrato.
- **I locali** si ricavano da soli dai cicli chiusi che formano i muri. Quando il PDF ha testo, un locale prende il nome dalla scritta al suo interno (la più grande; una quota, una scala o un numero di tavola non è un nome). Una scansione non ha testo, quindi i suoi locali mantengono i nomi che assegna il programma.
- **Tutto ciò che viene letto dalla pagina è segnato come non verificato**: ogni muro, porta, finestra e locale ha un riquadro tratteggiato e un "?" nella pianta finché non lo si controlla. Scegliere ciò che è stato verificato e usare {{ui:Strumenti}} › {{ui:Contrassegna come verificato}}. Vedere [Contrassegnare gli elementi come verificati o verificati in cantiere](topic:verification).

## Risultato

- I muri, le porte, le finestre e i locali di ogni livello, e gli eventuali nuovi livelli, come un unico passo: {{key:Mod+Z}} riporta tutto indietro.
- Ogni pagina come linee sottili sotto la pianta del suo livello, elencata in {{ui:Build}} › {{ui:Da un disegno…}} con {{ui:Rimuovi}}.

:::note
È quello che hanno dato le linee, con la precisione della pagina. Una scansione può perdere un muro debole, unire due muri molto vicini, oppure trovare un muro in una macchia. Un verso di apertura che il disegno non mostra trasforma un varco in una semplice porta. Controllare ogni livello rispetto alla pagina prima di fidarsene, e correggere ciò che non va con gli strumenti {{ui:Parete}}, {{ui:Porta}} e {{ui:Finestra}}.
:::
