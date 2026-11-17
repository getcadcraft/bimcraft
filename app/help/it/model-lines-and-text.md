---
title: Linee e testo del modello: disegnati nel modello, sul piano di lavoro
summary: Una linea del modello è una linea, una polilinea o un arco che vive nel modello e si vede in ogni vista che lo include. Il testo del modello è una scritta 3D con profondità reale. Entrambi si disegnano sul piano di lavoro.
keywords: linea del modello, testo del modello, testo 3D, scritta, insegna, segnaletica, linea in 3D, arco, polilinea, piano di lavoro, testo estruso, carattere, profondità, linea di dettaglio, linea di disegno, annotazione, IfcAnnotation
from: fc9cccb5
---

## Obiettivo

Disegnare linee e scritte che fanno parte del modello, non di una sola vista.

## Passaggi

1. Impostare prima il piano di lavoro (vedi **Il piano di lavoro**). Un piano di livello si disegna in pianta; un piano verticale nel Visualizzatore del piano di lavoro.
2. Per una linea scegliere **Linea del modello** nel menu **Build** e poi **Linea**, **Polilinea** o **Arco (tre punti)**:
   - una linea richiede due clic;
   - una polilinea richiede un clic per ogni punto, poi {{key:Enter}} o un doppio clic. Un clic sul primo punto la chiude;
   - un arco richiede tre clic: inizio, un punto per cui passa, fine.
3. Per il testo scegliere **Testo del modello**. Digitare le parole, impostare l'altezza delle maiuscole e la profondità, poi fare clic dove inizia il testo (l'estremità sinistra della sua linea di base).
4. Selezionare una linea o un testo per vederlo in **Proprietà**. Le parole, l'altezza e la profondità di un testo si possono cambiare lì. Delete lo elimina.

## Dove si vedono

- Una linea del modello appare nella pianta del suo livello, nella vista 3D, nel pannello dei prospetti e delle sezioni e nel Visualizzatore del piano di lavoro quando giace sul piano di lavoro. Una linea di disegno (Annota, Linea) appartiene a una sola vista.
- Il testo del modello è geometria solida: si vede ovunque si vede il modello, in pianta, in 3D, nei prospetti e nelle sezioni, e nelle tavole.
- Le linee del modello non vengono ancora disegnate sulle tavole stampate. Il testo del modello sì.

## Il carattere

Il testo del modello usa lo stesso carattere delle tavole e dei PDF: Liberation Sans, sotto la SIL Open Font License. Una lettera che il carattere non possiede viene disegnata come punto interrogativo, e viene segnalata. C'è un solo carattere e un solo peso. Le lettere sono spaziate secondo le larghezze del carattere, senza crenatura.

## Nel file IFC

- Una linea del modello è un IfcAnnotation con tipo oggetto ModelLine. La sua forma è una curva 3D: una polilinea, oppure un cerchio tagliato per un arco.
- Il testo del modello è un IfcBuildingElementProxy con tipo oggetto ModelText. La sua forma è un solido estruso per ogni pezzo di lettera, con i fori di lettere come O e B. Le sue quantità sono l'area della faccia e il volume (area della faccia per profondità).

## Da sapere

- Ogni dimensione viene creata come richiesto. Vengono rifiutati solo una linea senza lunghezza, un arco i cui tre punti sono allineati, o un testo senza lettere, perché non c'è nulla da creare.
- Ogni linea, e ogni testo o modifica a esso, è un passaggio di Annulla.
