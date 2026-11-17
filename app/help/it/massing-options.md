---
title: Opzioni di volumetria affiancate
summary: Mantenere più opzioni di volumetria nello stesso modello, rendere corrente una di esse, verificarla rispetto alle linee di edificazione e alle servitù del sito, importare volumetrie da ModelCraft e sviluppare l'opzione scelta in pareti e solai.
keywords: volumetria, massa, opzione, opzioni, set di opzioni, schema, concept, progettazione concettuale, fase 2, alternative, confronta opzioni, opzione corrente, massa dell'edificio, spingi tira, modelcraft, civilcraft, superficie lorda di pavimento, impronta, volume, sviluppa massa, servitù, diritto di passaggio, linea di edificazione, arretramento
from: 69a01459
---

## Cosa si fa

Mantenere le opzioni di volumetria di un concept in un solo modello invece che in file separati: più volumi edilizi affiancati, uno dei quali è l'**opzione corrente**, gli altri conservati per il confronto.

Un'opzione di volumetria è un volume edilizio: un contorno innalzato a un'altezza, con un certo numero di piani. Non sono ancora pareti. Se ne possono conservare quante si vuole, raggruppate in **set di opzioni** (le opzioni di uno stesso set sono alternative tra loro).

## Conservare un'opzione

1. Aprire {{ui:Dal programma dei locali al volume}}, digitare il programma dei locali e il contorno, e scegliere {{ui:Trova opzioni}}.
2. Scegliere una delle opzioni elencate.
3. Sotto {{ui:Opzioni di volumetria nel modello}}, digitare un nome per il {{ui:Set di opzioni}} se lo si desidera, e scegliere {{ui:Conserva l'opzione selezionata}}.

L'opzione compare nel modello come volume edilizio e nell'elenco, con i suoi piani, l'impronta, la superficie lorda di pavimento e il volume. Non si costruisce nulla. Conservarne un'altra allo stesso modo.

La prima opzione di un set è la sua opzione corrente. Ogni passaggio è un solo passo di annullamento.

## L'opzione corrente

Una opzione per ogni set è quella corrente. Significa due cose:

- **I suoi piani contano come superfici dell'edificio.** L'opzione corrente ha uno spazio per piano con la superficie lorda di quel piano, quindi tutto ciò che legge le superfici vede l'opzione in vigore e nessun'altra.
- **È verificata rispetto al sito.** Se esce dal confine del sito, su una linea di edificazione o su una servitù, compare in {{ui:Problemi}} un avviso che la nomina. È solo un avviso: nulla viene rifiutato. Le opzioni non correnti non sono verificate.

Scegliere {{ui:Rendi corrente}} su un'altra opzione per cambiarla.

{{ui:Nascondi le opzioni che non sono correnti}} nasconde le altre nella vista 3D. Vale solo per questo browser e non viene salvato nel file.

## Volumetrie da ModelCraft

In ModelCraft, {{ui:Esporta}} › {{ui:Volumetria verso BimCraft…}} invia ogni gruppo o componente come un'opzione. BimCraft apre il file con le opzioni elencate.

Per portarle in un modello già aperto, scegliere {{ui:Aggiungi opzioni di volumetria da un file}} e selezionare il file `.ifc`. I suoi volumi entrano come opzioni di un set, in un solo passo di annullamento, nella posizione in cui sono stati modellati. Un file di volumi edilizi da CivilCraft funziona allo stesso modo.

Un'opzione contrassegnata "(forma semplificata)" non era un semplice blocco verticale in ModelCraft (si arretra, è inclinata o non è chiusa). La sua massa qui è il contorno della base innalzato alla sua altezza; le sue superfici di piano e il suo volume sono quelli misurati dal solido stesso.

## Sviluppare l'opzione scelta

Scegliere {{ui:Sviluppa}} su un'opzione. Diventa livelli (sommati fino al suo numero di piani), pareti lungo il suo contorno su ogni piano e un solaio su ciascuno, in un solo passo di annullamento. L'opzione esce dall'elenco; le altre opzioni restano com'erano. Non c'è ancora una copertura.

{{ui:Rinomina}} cambia il nome di un'opzione, {{ui:Rimuovi}} la toglie dal modello. Rimuovere l'opzione corrente rende corrente la prima altra opzione del set.

## Cosa si vede

- Ogni opzione conservata come blocco nella vista 3D e come riga nell'elenco.
- "(corrente)" accanto a un'opzione per ogni set.
- Un avviso in {{ui:Problemi}} quando l'opzione corrente attraversa il confine del sito, una linea di edificazione o una servitù.

## Da sapere

- Nel file IFC un'opzione è un building element proxy con il set di proprietà `CadCraft_SiteMass` (il suo set di opzioni, il nome dell'opzione e se è corrente sono in quel set). I piani dell'opzione corrente sono spazi di tipo `MassingFloor`. Gli altri programmi leggono il proxy come elemento generico.
- Conservare un'opzione non aggiunge mai livelli; svilupparla sì.
- Un assistente può elencare le opzioni conservate, conservarne una, renderne una corrente, rinominarla, svilupparla o rimuoverla.
