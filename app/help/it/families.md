---
title: Famiglie e relative dimensioni
summary: Porte, finestre e arredi sono raggruppati in famiglie. Ogni dimensione di una famiglia è un tipo nel file IFC, così l'elenco dei tipi resta breve in BimCraft mentre gli altri programmi leggono tipi semplici.
keywords: famiglia, famiglie, tipo, tipi, dimensione, dimensioni, tipo di porta, tipo di finestra, arredo, tavolo, scaffale, mobile, nuova dimensione, duplica, inserisci famiglia, file di famiglia, ccfamily, libreria IFC, libreria di progetto, gruppo, visibilità, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Cos'è una famiglia

Una famiglia è un tipo di oggetto in più dimensioni: una porta a battente singolo che è larga 32, 36 e 42 pollici, o un tavolo che esiste lungo e corto. In BimCraft la famiglia si vede una volta sola, con le sue dimensioni sotto di essa, invece di un lungo elenco di tipi.

IFC non ha famiglie. Nel file ogni dimensione è un normale tipo (un tipo di porta, un tipo di finestra, un tipo di arredo…), e la famiglia è un gruppo che elenca le sue dimensioni. Gli altri programmi BIM leggono i tipi e il gruppo così come sono; BimCraft ricostruisce da essi la famiglia.

## Dove trovarle

- Il gruppo **Famiglie** del browser di progetto elenca le famiglie di questo modello, con quante dimensioni hanno e quante sono posizionate. Sotto di esse ci sono le **Famiglie di partenza**: le porte e le finestre degli strumenti Porta e Finestra, oltre a un tavolo, un'unità a scaffali e un mobile base.
- {{ui:Build}} › {{ui:Famiglie…}} mostra lo stesso elenco in una finestra.
- Fare clic su una famiglia per aprirla: le sue dimensioni, i valori di ciascuna dimensione e quanti elementi usano ciascuna dimensione.

## Porte e finestre

Gli strumenti Porta e Finestra elencano le famiglie di quel tipo, poi una **lista delle dimensioni** accanto. Scegliere una dimensione, oppure digitare **W** e **H**: una larghezza e un'altezza che nessuna dimensione ha ancora diventano una nuova dimensione della famiglia quando si posiziona la porta. Le porte della stessa dimensione condividono un tipo.

In {{ui:Proprietà}}, una porta o una finestra selezionata mostra la sua **Famiglia** e la sua **Dimensione**. Scegliere un'altra dimensione dalla lista, oppure digitare una nuova larghezza o altezza. {{ui:Apri la famiglia}} apre la famiglia a cui appartiene.

Il telaio di ogni porta o finestra segue lo spessore della propria parete, come prima delle famiglie. Il tipo della dimensione mantiene anche la porta disegnata in un muro da 140 mm, per i programmi che leggono i tipi.

## Nuova dimensione da questa famiglia

1. Aprire la famiglia.
2. Sotto **Nuova dimensione da questa famiglia**, digitare i suoi valori (Width, Height e gli altri parametri della famiglia) e, se si vuole, un nome. Senza nome viene chiamata in base ai suoi valori.
3. Fare clic su {{ui:Crea la dimensione}}.

Due dimensioni non possono avere gli stessi valori. **Rinomina** cambia il nome di una dimensione; **Rimuovi** elimina una dimensione che nessuno usa; **Seleziona** sceglie gli elementi di quella dimensione.

## Posizionare arredi

1. {{ui:Build}} › {{ui:Inserisci famiglia}}, oppure {{ui:Posiziona}} nella finestra di una famiglia.
2. Nella barra, scegliere la famiglia e la sua dimensione.
3. Fare clic sulla pianta per posizionarlo sul livello. Premere {{key:R}} per ruotarlo di 90° prima di fare clic. {{key:Esc}} termina.

Le **Proprietà** di un pezzo posizionato mostrano la sua dimensione, dove si trova e di quanto è ruotato; {{key:Delete}} lo rimuove. Ogni pezzo di una dimensione condivide la forma di quella dimensione, quindi modificando la famiglia cambiano tutti.

## Dimensioni da una tabella

{{ui:Dimensioni da una tabella…}} nella finestra di una famiglia legge un file CSV (virgola, punto e virgola o tabulazione). La prima riga dà il nome alle colonne: il nome o l'etichetta di un parametro e, facoltativamente, `Name`. Le lunghezze sono in millimetri se non si scrive un'unità (`1.2 m`, `36 in`); le colonne Sì / No accettano sì, no, true, false, 1 o 0; un parametro senza colonna mantiene il suo valore predefinito. Ogni riga diventa una dimensione, in un unico passo annullabile; una dimensione già presente viene saltata. Una riga che non si legge, o che la famiglia non sa disegnare, rifiuta l'intera tabella e indica la sua riga. Al massimo 200 righe e 1 MB. {{ui:Salva le dimensioni come tabella}} scrive la stessa tabella in uscita.

## Impostazioni per ogni elemento

Un parametro contrassegnato **Per elemento** nell'editor (un Sì / No che aggiunge un sopraluce, un'etichetta, un materiale) non fa parte di una dimensione: due porte della stessa dimensione possono essere diverse. Selezionare l'elemento e **Proprietà** mostra questi parametri; cambiandone uno, quell'elemento viene ridisegnato con una forma propria (arredi e apparecchi ottengono una forma propria, porte e finestre vengono ricreate nei loro muri). Riportarli tutti ai valori predefiniti e l'elemento torna alla forma della sua dimensione.

## Livello di dettaglio

{{ui:Build}} › {{ui:Famiglie…}} › **Livello di dettaglio** imposta, per ogni famiglia del modello, cosa viene salvato nei solidi e disegnato nei simboli in pianta: **Fine** mantiene tutto, **Medio** e **Grossolano** tralasciano le parti che l'editor contrassegna come più fini (file più piccoli, viste più rapide). **Automatico** salva tutto e lascia che la scala della vista di una tavola scelga: 1:50 e oltre fine, 1:100 medio, 1:200 e inferiori grossolano. Un solo passo annullabile.

## Duplicare una famiglia

Non serve partire da zero. {{ui:Duplica}} copia una famiglia con i suoi parametri, solidi e dimensioni sotto un nuovo nome. Modificare la copia nell'editor; l'originale resta com'era.

## File di famiglia

- {{ui:Salva il file della famiglia}} salva un `.ccfamily.json`: i parametri, i solidi e le dimensioni della famiglia. Aprirlo in un altro modello con {{ui:Apri un file di famiglia…}} nel gruppo Famiglie.
- {{ui:Salva come IFC}} salva la famiglia come piccolo file IFC: i tipi delle sue dimensioni e il suo gruppo, dichiarati da una libreria di progetto IFC. Gli altri programmi lo aprono come un insieme di tipi; BimCraft lo riapre come famiglia.

Un file di famiglia aperto qui viene letto come dati e verificato prima che venga scritto qualsiasi cosa. Una famiglia la cui chiave è già nel modello entra come famiglia separata. Una famiglia che ne contiene altre (vedi Famiglie interne, nella guida dell'editor) porta con sé le altre: il file le elenca, e il modello mantiene quelle che già ha.

## Famiglie nella Libreria

Aprire {{ui:Famiglie…}} e scegliere {{ui:Dalla Libreria…}} per vedere le famiglie condivise nella Libreria. {{ui:Aggiungi a questo progetto}} legge una famiglia come un file di famiglia: BimCraft verifica ogni campo prima di creare qualsiasi cosa, la famiglia entra come famiglia a sé stante e si apre nell'editor. Aggiungerla è un solo passo di annullamento. Per condividere le proprie, usare {{ui:Salva tutto come libreria}} e inviare il file alla Libreria (il personale della Libreria pubblica un file di famiglia con un comando, e ogni famiglia è un elemento a sé con le sue dimensioni). Se la Libreria non è raggiungibile, l'elenco lo segnala e non cambia nulla.

## Tipi di altri programmi

I tipi creati da altri programmi compaiono anche nel gruppo Famiglie, raggruppati per un'ipotesi: in base alla parte del nome dei loro elementi prima dei due punti, altrimenti in base ai nomi dei tipi che differiscono solo per i numeri. La finestra della famiglia indica quale ipotesi è stata usata. Sono elencati e si possono selezionare i loro elementi, ma non vengono modificati qui: non hanno una ricetta di famiglia.

:::note
Le porte e le finestre di partenza sono disegnate esattamente come prima delle famiglie. I file creati prima delle famiglie si aprono invariati: le loro porte e finestre compaiono sotto la famiglia con le dimensioni in uso, e passano su una dimensione propria la prima volta che vengono modificate.
:::

Vedi anche [Modificare una famiglia](topic:family-editor) e [Porte e finestre](topic:doors-and-windows).
