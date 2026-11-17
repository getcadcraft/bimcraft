---
title: Posizionare e sostituire un elemento della libreria con varianti
summary: Alcuni elementi della libreria esistono in più dimensioni o opzioni. Scegliere la variante prima di posizionarla, vedere quale variante è un elemento posizionato, sostituirla con un'altra variante con un clic, e mantenerla quando l'elemento viene aggiornato.
keywords: variante, varianti, dimensioni, opzioni, configurazione, libreria, librarycraft, posiziona, sostituisci, configuratore, famiglia, tipo, aggiornamento, connessioni
from: c05f0af3
---

## Cosa farai

Posizionare un elemento della libreria nella dimensione o opzione necessaria, e cambiare idea più tardi senza riposizionarlo. Un elemento con varianti è un solo elemento della libreria (un nome, una licenza, una versione) con una tabella delle varianti in cui si presenta: per esempio una piastra di montaggio in Piccola, Media e Grande, o la stessa piastra senza fori.

## Scegliere la variante e posizionarla

1. Aprire la scheda {{ui:Libreria}} e fare clic sulla scheda dell'elemento.
2. Sotto il nome, la scelta {{ui:Variante}} elenca ogni variante con la sua dimensione. Viene scelta per prima la variante predefinita dell'elemento.
3. Scegliere una variante. La pianta, la dimensione e il corpo 3D seguono la scelta.
4. Fare clic su {{ui:Posiziona nel piano}} (o {{ui:Posiziona nel modello}} nella vista 3D) e posizionarla come qualsiasi elemento: vedere [Posizionare apparecchiature e arredi dalla libreria](topic:place-from-library).

L'elemento posizionato prende il nome dell'elemento e della variante, per esempio *Piastra di montaggio — Grande*, così l'abaco delle {{ui:Apparecchiature}} e l'albero li distinguono. Ogni variante è un proprio tipo IFC: posizionare due volte la stessa variante condivide un tipo; una variante diversa ne ha uno proprio.

## Vedere quale variante è un elemento posizionato

Selezionare l'elemento. In {{ui:Proprietà}}, la casella **Elemento della libreria** ha una riga **Variante**. L'IFC la conserva in `CadCraft_LibraryItem`: `Variant` (l'id della variante), `VariantName` e `VariantValues` (i valori delle opzioni, come testo), così gli altri programmi possono leggerla.

## Sostituire con un'altra variante

1. Selezionare l'elemento posizionato e fare clic su {{ui:Sostituisci elemento…}} nella casella **Elemento della libreria**. Si apre la scheda {{ui:Libreria}}.
2. In alto, **Altre varianti di** *l'elemento* elenca ogni variante con la sua dimensione. Quella posizionata è contrassegnata e non può essere scelta.
3. Fare clic su {{ui:Sostituisci con …}} sulla variante desiderata.

L'elemento mantiene posizione, rotazione, piano, numero dell'elemento, quantità e note; il suo tipo, la sua forma e i suoi dati cambiano con l'altra variante. {{key:Mod+Z}} riporta indietro la prima. Si può comunque scegliere un altro elemento dall'elenco sottostante, come prima: vedere [Sostituire un elemento posizionato e aggiornare gli elementi dalla libreria](topic:swap-and-update-library-items).

## Copia, incolla e aggiornamenti

- Una copia di una variante posizionata è la stessa variante: in questo modello, e in un altro modello aperto nella stessa scheda del browser, tramite Copia e Incolla.
- Gli **aggiornamenti** mantengono la variante: se la nuova versione dell'elemento la possiede ancora, il posizionamento diventa quella variante della nuova versione. Se la nuova versione non la possiede più, il posizionamento prende la variante predefinita dell'elemento.

## Da sapere

- Solo alcuni elementi della libreria hanno varianti. Le schede non lo indicano; la scelta {{ui:Variante}} compare quando se ne apre una.
- Un elemento può elencare **connessioni** (punti di collegamento per tubazioni e canali) per variante. La scheda Libreria mostra quante ne ha una variante. Non sono ancora scritte nell'IFC quando si posiziona l'elemento dalla scheda Libreria.
- Una variante senza corpo 3D viene posizionata con una scatola segnaposto, come ogni simbolo 2D.
- Le dimensioni nella scelta sono in millimetri, come le scrive la libreria.
