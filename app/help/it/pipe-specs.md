---
title: Specifiche tubazioni, valvole, serrande e famiglie dei produttori
summary: Impostare proprie specifiche di tubazione (tabelle dei diametri con materiale, giunzione e scabrezza), salvate nel file del modello; inserire valvole, un filtro e serrande sulle tratte; e importare il modello di una valvola o di un'apparecchiatura di un produttore come famiglia con bocchettoni di collegamento.
keywords: specifica tubazione, specifiche tubazioni, specifica di tubazione, classe di tubazione, tubazione personalizzata, tabella dei diametri, tubo, tubo igienico, inox, schedule, diametro esterno, spessore di parete, diametro interno, scabrezza, classe di pressione, csv, json, importa, esporta, foglio di calcolo, standard, bpe, din, en 10357, en 10255, valvola, valvole, valvola a farfalla, valvola di bilanciamento, valvola di regolazione, filtro, serranda, serranda di regolazione, serranda tagliafuoco, oem, produttore, costruttore, famiglia, famiglie, bocchettoni, connessioni, step, obj, gltf, ifc, radiatore, convettore, pannello radiante, unità di trattamento aria, diffusore, griglia
from: bc2f7c4e
---

## Cosa si fa

Disegnare tubazioni con una specifica propria, invece delle tabelle integrate di acciaio, rame e plastica; inserire valvole e serrande sulle tratte e posizionare il modello di un costruttore con bocchettoni a cui si collegano le tubazioni.

:::note
Strumento di disegno e di coordinamento. Una specifica di tubazione contiene i valori digitati o importati: verificare ogni tabella con lo standard di progetto. Le valvole, il filtro e le serrande integrate sono forme schematiche dimensionate in base alla tratta, non la lunghezza di un costruttore o di uno standard per valvole.
:::

## Impostare una specifica di tubazione

1. Attivare {{ui:Disegna}}, aprire {{ui:Build}} e scegliere {{ui:Specifiche tubazioni}}. Lo stesso pulsante si trova nella barra dello strumento Tubazione.
2. Scegliere {{ui:Nuovo}}, oppure partire da un file, da un incolla o da una specifica di partenza (vedi sotto).
3. Digitare il nome, lo standard o il riferimento seguito, il materiale e il tipo di estremità o di giunzione.
4. Digitare una riga per ogni dimensione: il nome della dimensione, il diametro esterno e lo spessore di parete, in millimetri. Se si dispone del diametro interno invece dello spessore, digitare quello: l'altro valore viene compilato automaticamente. DN, classe di pressione e peso sono facoltativi.
5. Facoltativo: la scabrezza in millimetri (il calcolo della perdita di carico la usa), uno spessore di isolamento con cui partono le nuove tratte, il raggio della curva come fattore del diametro esterno, se la specifica prevede raccordi a T e riduzioni, e un colore proprio in 3D.
6. Selezionare i servizi per cui le nuove tratte devono partire con questa specifica, ad esempio acqua refrigerata.
7. Scegliere {{ui:Salva nel modello}}.

Le specifiche sono salvate nel file del modello. Chiunque apra il file le ritrova, e {{ui:Annulla}} annulla una modifica.

Una specifica, o una delle sue dimensioni, non può essere eliminata finché sul disegno c'è una tratta che la usa. Se si modificano i valori di una dimensione, le tratte in quella dimensione vengono ridisegnate.

## Riutilizzare una specifica in un altro modello

- {{ui:Esporta .json}} salva la specifica selezionata in un file piccolo; {{ui:Esporta tutto}} salva tutte le specifiche del modello. {{ui:Importa un file}} le rilegge.
- {{ui:Esporta .csv}} salva la tabella delle dimensioni per un foglio di calcolo. {{ui:Importa un file}} legge anche un `.csv`.
- {{ui:Incolla righe}} accetta una tabella copiata da un foglio di calcolo. La prima riga indica le colonne: `Size`, `OD` e `Wall` (oppure `ID`), e facoltativamente `DN`, `Pressure`, `Weight`. Una riga per ogni dimensione. I valori sono in millimetri, salvo che si scelgano i pollici o che una cella indichi la propria unità (`0.065 in`).

## Specifiche di partenza

{{ui:Aggiungi una specifica di partenza}} aggiunge al modello una di queste specifiche, come copia modificabile:

| Partenza | Dimensioni |
|---|---|
| Tubo ASME BPE | da 1/4" a 6" |
| Tubo EN 10357 serie A (DIN 11850 riga 2) | da DN10 a DN200 |
| Tubo d'acciaio EN 10255, serie media | da DN15 a DN150 |
| Tubo d'acciaio EN 10255, serie pesante | da DN15 a DN125 |

Queste tabelle riportano i diametri esterni e gli spessori di parete che due o più pagine di fornitori pubblicate indicano per lo standard e che concordano tra loro. Non sono tratte dagli standard stessi. Le dimensioni indicate da una sola pagina sono omesse. Ogni specifica di partenza mostra le proprie pagine di fonte ed è contrassegnata come "verificare con lo standard di progetto". Non sono indicate scabrezza, classe di pressione o peso.

## Disegnare una tratta in una specifica

1. Scegliere {{ui:Tubazione}}. Un servizio selezionato in una specifica parte in quella specifica. Per ogni altra tratta, scegliere la specifica nell'elenco dei materiali: le specifiche compaiono dopo i materiali integrati come "Spec: nome".
2. L'elenco delle dimensioni contiene ora solo le dimensioni di quella specifica. Sceglierne una e disegnare la tratta.

Per spostare in seguito una tratta in una specifica, selezionarla e cambiare **Materiale** in Proprietà. La sua dimensione diventa quella della specifica più vicina per diametro esterno.

Nel file IFC la tubazione riporta il nome, lo standard, il materiale, la giunzione e le dimensioni della specifica (`CadCraft_PipeSpec` e `Pset_PipeSegmentTypeCommon`, sul tubo e sul suo tipo).

I calcoli di dimensionamento e di perdita di carico leggono il diametro interno della specifica. Se la specifica ha una scabrezza, l'attrito della tratta è calcolato con essa (Darcy-Weisbach); altrimenti si usa il valore predefinito consueto del calcolo.

## Valvole, filtro e serrande

1. Scegliere {{ui:Valvola}} e selezionare il tipo nella barra: a saracinesca, a sfera, a farfalla, a globo, di ritegno, di bilanciamento o di regolazione, oppure un filtro, per le tubazioni; una serranda di regolazione o una serranda tagliafuoco, per i canali.
2. Fare clic sulla tratta dove va. La tratta viene interrotta attorno alla valvola e i due lati restano collegati. La valvola assume la dimensione della tratta e si sposta con essa.

Le Proprietà della tratta elencano ciascun elemento con {{ui:Rimuovi}}; la tratta si richiude.

Il calcolo della perdita di carico conta una perdita di raccordo solo per le valvole a saracinesca, a sfera, a globo e di ritegno. Gli altri tipi, le serrande e le famiglie dei produttori non aggiungono perdite in quel calcolo: tenerne conto nella propria verifica. Sono conteggiati nell'abaco **Raccordi e valvole** e nel computo, e scritti nel file IFC come valvole, un filtro (il filtro) e serrande con due bocchettoni collegati.

## Il modello di un produttore come famiglia

1. Aprire {{ui:Build}} e scegliere {{ui:Famiglie}}, poi {{ui:Importa un modello}}. Si leggono i file IFC, STEP, OBJ, STL, glTF e gli elementi della Libreria. Per OBJ e STL, impostare prima le unità del file e l'asse verticale.
2. Nella finestra dei bocchettoni, digitare il nome, il produttore e il numero del modello.
3. Scegliere se va **Su una tratta** (una valvola, un filtro o una serranda) oppure è **Apparecchiatura**, e come viene scritto nel file.
4. Assegnare i bocchettoni. Ognuno ha un nome, tubazione o canale, il servizio, la dimensione in millimetri (il diametro esterno per una tubazione), la dimensione nominale come la indica la propria specifica, il tipo di estremità, la posizione e il verso in cui è rivolto. {{ui:Su una faccia}} mette un bocchettone al centro di una faccia del riquadro del modello. La piccola vista dall'alto mostra i bocchettoni.
5. Scegliere {{ui:Salva la famiglia nel modello}}.

Una famiglia da porre su una tratta deve avere esattamente due bocchettoni rivolti in senso opposto su una stessa linea. Sceglierla nell'elenco dello strumento Valvola e fare clic su una tratta: viene posizionata alla sua lunghezza e le tubazioni si collegano ai suoi bocchettoni.

Una famiglia non viene mai allungata. Se i suoi bocchettoni non hanno la dimensione della tratta, viene segnalato al momento del posizionamento, e {{ui:Verifica le connessioni}} la elenca.

Un'apparecchiatura di tipo famiglia si posiziona con {{ui:Apparecchiature}}, tipo **Famiglia del produttore**. Tubazioni e canali si agganciano ai suoi bocchettoni.

{{ui:Scarica come elemento della libreria}} salva una famiglia con i suoi bocchettoni come file da inviare alla Libreria.

## Radiatori e convettori

{{ui:Apparecchiature}} include anche **Radiatore** e **Convettore / pannello radiante**: corpi generici con un collegamento di mandata e di ritorno per l'acqua di riscaldamento. Vedi [Apparecchiature MEP con bocchettoni](topic:mep-equipment).
