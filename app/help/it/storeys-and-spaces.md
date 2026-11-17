---
title: Mostrare e nascondere piani, spazi e spigoli
summary: Disattivare piani per vedere l'interno di un edificio, mostrare locali e spazi, e attivare o disattivare le linee degli spigoli.
keywords: piani, livelli, solai, nascondi, isola, locali, spazi, ifcspace, spigoli, visibilità, sezione
from: b838dcc0
---

## Cosa si fa

Guardare dentro un modello IFC disattivando i piani sopra quello che interessa, poi mostrare locali e spazi, e disattivare le linee degli spigoli per una vista più pulita.

## Passi: guardare un solo piano

1. Aprire un modello IFC. Vedere [Aprire un modello IFC e guardarlo in 3D](topic:open-ifc-model).
2. Trovare l'elenco {{ui:Piani}} a sinistra. Il piano più alto è per primo, come leggere una sezione dal tetto in giù.
3. Deselezionare il tetto e ogni piano sopra quello che si vuole vedere.
4. Fare clic su {{ui:Sopra}} per guardare dall'alto su quel piano.
5. Selezionare di nuovo i piani per ripristinarli.

## Cosa si dovrebbe vedere

Ogni piano deselezionato scompare subito, con tutto ciò che contiene. L'elenco mostra solo i piani che contengono qualcosa di visibile. Gli elementi non assegnati a nessun piano sono raggruppati come **Non su un piano** in fondo; elementi di sito e alcuni arredi vi finiscono spesso.

## Passi: mostrare locali e spazi

1. Fare clic su {{ui:Spazi}} nella barra sopra il modello. Il pulsante resta premuto.
2. Guardare il modello: locali e spazi appaiono come volumi chiari e trasparenti.
3. Fare clic su uno spazio per leggerne le proprietà, come nome, numero e area, a destra.
4. Fare di nuovo clic su {{ui:Spazi}} per nasconderli.

Gli spazi sono nascosti all'apertura di un modello, perché altrimenti coprirebbero muri e solai.

## Passi: spigoli

1. Fare clic su {{ui:Spigoli}} per disattivare le linee sottili degli spigoli.
2. Fare di nuovo clic per riattivarle.

Su modelli molto grandi (oltre 1.5 milioni di triangoli) il pulsante è disattivato con la scritta "Gli spigoli sono disattivati per i modelli molto grandi". Questo fa risparmiare memoria.

## Errori comuni

- **Deselezionare un piano e vedere ancora parti di esso.** Un elemento appartiene al piano che il programma di esportazione gli ha assegnato. Un muro alto o una scala spesso appartengono solo al piano di base, quindi restano quando si nasconde il piano sopra, oppure scompaiono con il piano sotto.
- **Nascondere i piani per vedere dentro.** Una scatola di sezione è spesso più rapida: vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane#a-section-box). Si possono anche deselezionare righe in {{ui:Albero del modello}} (vedere [Orientarsi con l'albero del modello](topic:model-tree)).
- **Fare clic su uno spazio attraverso un muro.** Il clic seleziona la superficie visibile più vicina. Nascondere il piano sopra, oppure passare a {{ui:Sopra}}, poi fare clic.
- **I nomi dei piani sembrano strani.** BimCraft mostra i nomi dei piani salvati nel file. Se dicono "Level 1" o un numero, è ciò che ha scritto l'esportatore.
