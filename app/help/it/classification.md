---
title: Codici di classificazione (Uniclass, OmniClass, UniFormat)
summary: Assegnare a ogni elemento e tipo un codice di classificazione, scegliere quali sistemi usa un progetto, cercare nelle tabelle Uniclass fornite con l'app, caricare le tabelle con licenza del proprio studio e mostrare i codici negli abachi. I codici vengono scritti nel file IFC per gli altri software.
keywords: classificazione, classificare, codice, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabella, codice dell'elemento, codice del tipo, codice predefinito, IfcClassification, IfcClassificationReference, cobie, colonna di abaco, csv, licenza
from: 222b94cd
---

## Cosa si fa

Applicare un codice di classificazione a pareti, solai, coperture, porte, finestre e qualsiasi altro elemento del modello, in fino a tre sistemi affiancati: Uniclass, OmniClass e UniFormat. Altre discipline e altri software si basano sul codice, non sul nome, quindi i codici vengono salvati nel file IFC come riferimenti di classificazione che qualsiasi programma BIM legge.

## Assegnare un codice a un elemento

1. Selezionare un elemento (o più elementi) e aprire **Proprietà**. Aprire la sezione {{ui:Classificazione}}.
2. Digitare il codice nella casella del suo sistema e premere Invio. Con un elenco di codici caricato, digitare parte di un codice o alcune parole ("facciata continua") e scegliere tra le corrispondenze: il titolo del codice viene compilato automaticamente.
3. {{ui:Si applica a}} indica dove va il codice: **Questo elemento**, oppure **Il suo tipo (ogni elemento del tipo)**. Un codice su un tipo di parete viene letto da ogni parete di quel tipo, anche da quelle disegnate in seguito.
4. {{ui:Cancella}} rimuove un codice.

Sotto ogni codice la sezione indica da dove viene: impostato su questo elemento, dal suo tipo, oppure il codice predefinito di progetto per la sua classe. Il codice proprio di un elemento prevale sempre su quello del suo tipo, e quello del tipo su un predefinito. Con più elementi selezionati, una casella che dice "varia" significa che non condividono lo stesso codice; digitandone uno, lo si assegna a tutti. Ogni modifica è un unico passo di annullamento.

Un codice può sempre essere digitato, che un elenco sia caricato oppure no. Se non sembra un codice di quel sistema, o non è nell'elenco caricato, un suggerimento lo segnala e il codice viene mantenuto come digitato.

## Scegliere i sistemi del progetto

Aprire **Dati** nella barra del modello e scegliere {{ui:Classificazione}} (oppure {{ui:Classificazione di progetto…}} nella sezione Proprietà).

- Spuntare i sistemi che usa questo progetto. Proprietà mostra allora solo quelli.
- **Uniclass**: le tabelle Elementi / funzioni (EF), Sistemi (Ss) e Prodotti (Pr) sono fornite con l'app. Sono © NBS, con licenza Creative Commons Attribution-NoDerivatives 4.0, e vengono trasmesse invariate. La finestra di dialogo mostra l'edizione di ciascuna tabella e il giorno in cui è stata letta. Non sono le tabelle più recenti: l'editore ne pubblica di nuove ogni trimestre sul proprio sito.
- **OmniClass** e **UniFormat**: nessun elenco di codici è fornito con l'app, perché il loro editore non consente di trasmettere le tabelle senza una licenza. Digitare un codice qualsiasi, oppure caricare la tabella con licenza del proprio studio.
- {{ui:Carica una tabella (CSV)…}} legge la tabella dello studio da un file CSV con una colonna dei codici e una colonna dei titoli (una riga di intestazione chiamata Code, Number o Identifier e Title, Name o Description viene riconosciuta da sola; senza di essa vengono usate le prime due colonne). La tabella resta in questo browser e non viene mai inserita nel file di progetto. Nel file vengono salvati solo i codici assegnati. È possibile caricare una tabella Uniclass più recente allo stesso modo.
- {{ui:Assegnare agli elementi un codice predefinito in base alla loro classe}} dà a ogni muro, solaio, copertura, porta, finestra, scala, rampa, pilastro, trave e pezzo di arredo un codice Uniclass iniziale dalla tabella Elementi / funzioni quando non ne ha uno proprio. Anche gli elementi disegnati in seguito lo ricevono.
- {{ui:Mostra i codici come colonne negli abachi}} aggiunge una colonna per sistema alle tabelle Porte, Finestre, Pareti per tipo e Locali e al loro CSV. Una riga di più elementi mostra "varia" quando i loro codici differiscono.

## Da sapere

- I codici predefiniti sono una scelta iniziale di CadCraft, non dell'editore, e non sono stati verificati da un professionista. Verificarli rispetto allo standard del proprio progetto.
- Nel file un predefinito è una vera classificazione, contrassegnata con il nome di relazione "CadCraft default", e viene sostituito non appena l'elemento o il suo tipo riceve un codice proprio.
- I codici che un file importato ha già vengono letti e mostrati, qualunque sia la grafia dell'altro programma per il nome del sistema. I codici di qualsiasi altro sistema (quello di uno studio) vengono elencati e lasciati invariati.
- I codici vengono riletti quando il file viene riaperto, qui o in un altro programma. Vengono anche riportati nell'esportazione IFC5 alpha (IFCX), quando questa opzione di laboratorio è attiva, tranne un codice impostato su una copertura.
- Non ancora implementato: un albero per sfogliare una tabella livello per livello, codici su piani e locali come predefiniti di progetto, e la verifica di un codice rispetto all'edizione indicata nel file.
