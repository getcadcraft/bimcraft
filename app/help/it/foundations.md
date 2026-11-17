---
title: Fondazioni sotto i muri
summary: Posizionare con un clic una soletta a contatto con il terreno, muri di fondazione con soletta, un vespaio o un seminterrato sotto un edificio; i plinti sono dimensionati dai muri e dal numero di piani, e la fondazione segue quando i muri si spostano.
keywords: fondazione, plinto, soletta a contatto con il terreno, bordo ispessito, soletta monolitica, muro di fondazione, vespaio, seminterrato, muro del seminterrato, gelo, calcestruzzo, larghezza del plinto
from: c0e20172
---

## Obiettivo

Dare all'edificio una fondazione che corrisponda ai suoi muri. BimCraft segue l'esterno dei muri, dimensiona i plinti in base al tipo di muro e a quanti piani poggiano su di essi, e rifà la fondazione ogni volta che i muri cambiano.

## Creare una fondazione

1. Sul livello i cui muri poggiano su di essa (di solito il primo), aprire {{ui:Build}} e scegliere {{ui:Fondazione}}.
2. Scegliere il tipo:
   - **Soletta a contatto con il terreno**: una soletta di calcestruzzo di 4 in il cui piano superiore è il pavimento, con un bordo ispessito sotto i muri.
   - **Muri di fondazione e soletta**: muri di fondazione fino al pavimento, su plinti, con una soletta al loro interno.
   - **Vespaio**: muri di fondazione che si fermano sotto la struttura del pavimento, su plinti, senza soletta.
   - **Seminterrato**: muri di fondazione a tutta altezza, su plinti, con una soletta di seminterrato sotto la struttura del pavimento.
3. Puntare all'interno dell'edificio: i plinti appaiono tratteggiati con le loro dimensioni. Fare clic.

Fare clic su un edificio che ha già una fondazione la seleziona, così è possibile modificarla invece di aggiungerne una seconda.

## Modificarla

Selezionare la fondazione (fare clic all'interno dell'edificio con {{ui:Fondazione}}, oppure fare clic su una sua parte nella vista 3D o nell'albero del modello) e modificarla in **Proprietà**: il tipo, la larghezza e la profondità del plinto, quanto in basso si trovi l'intradosso del plinto, lo spessore del muro, quanto sotto il pavimento si fermano i muri, l'altezza del seminterrato e lo spessore della soletta. Ogni modifica è un solo passo di annullamento.

Le misure contrassegnate **auto** derivano dai muri: plinti di 12 in, 15 in o 23 in di larghezza per uno, due o tre piani su soletta o muri di fondazione; di 18 in, 22 in o 27 in sopra un vespaio o un seminterrato; e 4 in in più sotto muri in muratura o in calcestruzzo. Digitare una misura per impostare la propria; digitare `0` per tornare ad **auto**.

:::warning
Le dimensioni automatiche sono valori predefiniti etichettati per case tipiche a struttura leggera, non sono un calcolo strutturale. Un progettista o un ingegnere verifica plinti, profondità e muri in base al terreno, alla profondità del gelo e ai carichi.
:::

## Cosa viene salvato

Una fondazione è salvata come assieme di elementi IFC ("Foundation") composto da un plinto (oppure dal bordo ispessito di una soletta), da un muro di fondazione e da una soletta, secondo le necessità del suo tipo; tutti in calcestruzzo, ciascuno con le sue quantità: lunghezze, larghezze, altezze, aree e volumi, pronti per i computi.

## Da sapere

- Spostare, aggiungere o eliminare muri rifà la fondazione sotto di essi; disegnare muri al piano superiore allarga i plinti sotto per il piano in più.
- {{key:Delete}} elimina una fondazione selezionata con tutte le sue parti.
- Con il terreno del sito nel modello (vedere [Il terreno del sito, il piazzale dell'edificio e le pavimentazioni](topic:terrain)), i muri di fondazione e i plinti del vespaio scendono con esso a gradini di 8 in.
- I plinti sotto i muri interni non sono ancora implementati.
