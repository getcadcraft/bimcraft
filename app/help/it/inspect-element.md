---
title: Scegliere un elemento e leggerne le proprietà
summary: Fare clic su un elemento qualsiasi del modello 3D per evidenziarlo e leggerne il nome, il tipo, il tag, il GlobalId, gli insiemi di proprietà e le quantità.
keywords: proprietà, selezione, clic, elemento, parametri, insiemi di proprietà, pset, quantità, globalid, guid, tipo, ispezione
from: 43b80aa8
---

## Cosa si ottiene

Selezionare elementi in un modello IFC e leggere tutto ciò che il file dice su di essi: attributi, insiemi di proprietà, proprietà di tipo e quantità.

## Passaggi

1. Aprire un modello IFC.
2. Fare clic su un elemento, per esempio una porta. Fare clic senza trascinare: un trascinamento di più di pochi pixel attiva l'orbita invece di selezionare.
3. Osservare l'elemento: viene evidenziato in blu.
4. Guardare il pannello {{ui:Proprietà}} a destra. In alto ci sono la classe dell'elemento (come "Porta" o "WallStandardCase") e il suo nome.
5. Leggere il primo blocco: **Nome**, **Tipo**, **Tipo di oggetto**, **Tag**, **Descrizione**, **GlobalId** e **Riga**.
6. Scorrere verso il basso fino agli insiemi di proprietà. I primi tre sono aperti; fare clic sul nome di un altro insieme per aprirlo.
7. Fare clic su un altro elemento per passare a esso.
8. Premere {{key:Esc}}, oppure fare clic sullo sfondo vuoto, per annullare la selezione.

## Risultato atteso

- L'elemento evidenziato e i suoi dati sulla destra.
- Insiemi di proprietà in ordine alfabetico. Gli insiemi che provengono dal **tipo** dell'elemento hanno " (tipo)" dopo il nome e la nota "Proprietà di tipo: una modifica qui si applica a ogni elemento di questo tipo."
- Insiemi di quantità (come lunghezze, aree e volumi) elencati insieme agli altri insiemi. Le quantità sono di sola lettura.
- I valori modificabili appaiono come pulsanti. [Modificare le proprietà IFC e salvare una copia modificata](topic:edit-ifc-properties) mostra come fare.

[Campi del pannello Proprietà](topic:properties-panel) spiega ciascun campo.

## Come raggiungere gli elementi nascosti

1. Per raggiungere qualcosa all'interno dell'edificio, deselezionare i piani sopra di esso nell'elenco {{ui:Piani}}.
2. Per raggiungere un muro dietro un volume di locale, disattivare {{ui:Spazi}}.
3. Fare clic sull'elemento.

## Errori comuni

- **Trascinare un poco mentre si fa clic.** BimCraft lo tratta come un'orbita e non seleziona. Tenere il mouse fermo.
- **Aspettarsi unità accanto ai numeri.** I valori sono mostrati come memorizzati nel file, arrotondati a quattro decimali, senza simbolo di unità. Le lunghezze in un'esportazione metrica sono di solito millimetri o metri; verificare le impostazioni dell'esportatore.
- **Cercare un parametro con il suo nome familiare.** Gli esportatori rinominano e raggruppano i parametri in insiemi di proprietà IFC come `Pset_WallCommon`. Scorrere ogni insieme; i parametri personalizzati si trovano spesso in un insieme che porta il nome del programma che esporta o della propria azienda.
- **Aspettarsi una casella di ricerca.** Fare clic per selezionare un elemento; {{key:Mod}}+clic o {{key:Shift}}+clic ne selezionano altri, e {{key:Mod+A}} seleziona ogni elemento visualizzato. L'elenco {{ui:Elementi}} a sinistra conta soltanto gli elementi per classe; non è cliccabile.
- **Selezionare su una scheda di file di progetto.** Una scheda di file non ha elementi da selezionare: "Le proprietà dell'elemento richiedono il modello 3D. Aprire un'esportazione IFC di questo file per vederle."
