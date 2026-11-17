---
title: Tag di locali e aree
summary: Inserire un tag con numero, nome e superficie su un locale o un'area. Il tag segue l'elemento e la sua dimensione dipende dall'altezza su carta.
keywords: tag, tag locale, tag area, tagga locale, tagga area, tagga tutti, etichetta, altezza del testo, altezza su carta, annotazione
from: 67059d8a
---

## Cosa si fa

Taggare locali e aree uno per uno o tutti insieme, e spostare un tag dove risulta leggibile.

## Dove si trovano gli strumenti

- Layout a barra multifunzione: {{ui:Architettura}} › **Locali e aree** › {{ui:Tagga locale}} e {{ui:Tagga area}}.
- Layout classico: la barra Disegna › menu {{ui:Locali}}.
- Un locale o un'area selezionati: Proprietà › {{ui:Aggiungi un tag}}.

## Passaggi

1. Scegliere {{ui:Tagga locale}} e fare clic in un locale, nel punto in cui deve trovarsi il tag.
2. Oppure premere {{ui:Tagga tutti i non taggati}} nella riga: ogni locale di questo piano privo di tag ne riceve uno al centro. È un'unica operazione di annulla.
3. Per spostare un tag, selezionarlo con Seleziona e trascinarlo. In Proprietà è disponibile {{ui:Riportalo al centro}}.
4. {{ui:Tagga area}} funziona allo stesso modo per le aree.

## Cosa fa un tag

- Riporta numero, nome e superficie, nelle unità di visualizzazione scelte.
- Segue il proprio locale: rinominare il locale o spostare una parete, e il testo e la posizione del tag cambiano nella stessa operazione.
- Le dimensioni sono definite su carta: {{ui:Altezza del testo su carta}} è in millimetri (2.5 come valore iniziale). A una scala di vista di 1:50 un tag di 2.5 mm è alto 125 mm nel modello; a 1:100 è 250 mm.
- Un locale con tag mostra il tag al posto della sua semplice etichetta.
- Quando il suo locale o la sua area vengono eliminati, il tag viene eliminato con loro. Annulla li ripristina entrambi.

## Nell'IFC

Un tag è un IfcAnnotation (ObjectType ROOMTAG o AREATAG) con il proprio testo come letterale di testo e il GlobalId dell'elemento a cui si riferisce. Il testo nel file riporta la superficie in metri quadrati.

## Non ancora implementato

- Forme di tag personalizzate e linea di richiamo.
- I tag su porte, finestre e pareti sono uno strumento separato (vedere gli stili di tag delle tavole).

Vedere anche [Locali e separatori di locali](topic:rooms-and-separators).
