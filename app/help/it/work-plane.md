---
title: Il piano di lavoro: impostarlo, mostrarlo, guardarlo di fronte
summary: Il piano di lavoro è il piano usato dalle linee del modello, dal testo del modello e dal Visualizzatore piano di lavoro. Impostarlo a un livello, a una faccia, a un piano di riferimento con nome o a una linea; mostrarlo nelle viste; aprire il visualizzatore per disegnare su un piano verticale.
keywords: piano di lavoro, imposta piano di lavoro, mostra piano di lavoro, piano di riferimento, visualizzatore piano di lavoro, piano con nome, faccia, livello, piano verticale, disegnare su una parete, disegno di prospetto, aggancio, allineamento, piano di rif
from: 8aceee1d
---

## Cosa si farà

Scegliere il piano su cui si disegna, vederne la posizione e disegnare su un piano verticale.

## Passaggi

1. Attivare **Disegna** e aprire il menu **Costruisci** (in un layout a barra multifunzione: la scheda Architettura, Piano di lavoro).
2. Scegliere **Imposta piano di lavoro**. Quindi eseguire una di queste operazioni:
   - scegliere un livello in **Imposta a**;
   - scegliere un piano di riferimento con nome nell'elenco accanto;
   - fare clic su una linea nella pianta: una parete, una linea di griglia, un piano di riferimento, una linea del modello o un sistema di facciata continua. Il piano di lavoro diventa il piano verticale passante per quella linea;
   - fare clic su una faccia piana nella vista 3D. Il piano di lavoro giace su quella faccia.
3. Scegliere **Mostra piano di lavoro** per vederlo: un foglio colorato con una griglia in metri nella vista 3D, un contorno o una linea tratteggiata nella pianta, e un contorno tratteggiato nel pannello di prospetto e sezione. Sceglierlo di nuovo per nasconderlo.
4. Scegliere **Visualizzatore piano di lavoro** per guardare il piano di fronte. Le linee nere sono il modello tagliato dal piano. Usare i suoi strumenti per disegnare una linea del modello, un testo del modello o un piano di riferimento sul piano. **Guarda in 3D** ruota la vista 3D per fronteggiare il piano.

## Piani di riferimento

Un piano di riferimento è un piano con nome che si disegna come una linea.

1. Scegliere **Piano di riferimento**. Digitare un nome nella sua riga, se lo si vuole (altrimenti viene assegnato automaticamente), e un'altezza.
2. Fare clic dove inizia e dove finisce. Nella pianta questo crea un piano verticale. Nel Visualizzatore piano di lavoro crea un piano perpendicolare al piano di lavoro.
3. Compare come una linea verde tratteggiata con il suo nome nella pianta, e come un contorno tratteggiato nella vista 3D e nel pannello di prospetto e sezione.
4. Selezionarlo per rinominarlo, cambiarne lunghezza, altezza e base, oppure premere **Usa come piano di lavoro**.

Due piani di riferimento non possono avere lo stesso nome, perché il nome serve per sceglierne uno.

## Da sapere

- Un modello senza piano di lavoro impostato lavora sul suo livello più basso.
- Il piano di lavoro viene salvato nel file. Mostrarlo o nasconderlo viene ricordato in questo browser, non nel file.
- Se il piano di lavoro segue un piano di riferimento e si sposta quel piano, il piano di lavoro si sposta con esso.
- Su un piano di lavoro verticale, gli strumenti Linea del modello e Testo del modello aprono il visualizzatore, perché una pianta non può indicare un'altezza.
- Gli strumenti di disegno agganciano le estremità dei piani di riferimento disegnati in pianta allo stesso modo in cui agganciano le estremità delle altre linee nel visualizzatore.

## Nel file IFC

- Il piano di lavoro è un set di proprietà (CadCraft_WorkPlane) sul progetto.
- Un piano di riferimento è un IfcAnnotation con tipo oggetto ReferencePlane e il suo nome. La sua forma è il contorno chiuso del piano, così un altro programma ne mostra la posizione. Il suo set CadCraft_ReferencePlane contiene origine, direzione, normale ed estensione. IFC non ha una classe per un piano di riferimento; un'annotazione non viene conteggiata come elemento edilizio e non delimita i locali.
