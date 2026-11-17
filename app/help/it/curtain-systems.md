---
title: "Sistemi di facciata continua: pareti vetrate su una griglia, con montanti"
summary: Disegnare un sistema di facciata continua come un muro oppure posizionarlo su una faccia, poi impostare le linee della sua griglia e i suoi montanti. Viene salvato come IfcCurtainWall con i suoi pannelli e montanti.
keywords: sistema di facciata continua, facciata continua, griglia della facciata, montante, vetrazione, vetrina, parete vetrata, pannello, vetro, per faccia, faccia, massa, linea di griglia, interasse, profilo, traverso, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Cosa si fa

Creare una parete vetrata composta da vetri tra i montanti, cambiare la posizione delle linee della griglia e scegliere quali linee portano un montante.

## Passaggi

1. Attivare **Disegna** e aprire il menu **Costruisci** (con il layout a barra multifunzione: la scheda Architettura).
2. Scegliere **Sistema di facciata continua**. Nella sua riga impostare il piano superiore (il livello sopra, oppure un'altezza), una linea ogni tot lungo di esso, una linea ogni tot verso l'alto (lasciare vuoto per nessuna), se riceve i montanti e il profilo del montante.
3. Fare clic dove inizia e dove finisce, come per disegnare un muro. Shift lo mantiene squadrato.
4. Per cambiare la griglia scegliere **Griglia di facciata** e fare clic sul sistema:
   - **Aggiungere una linea**: una linea verticale va dove si fa clic. Per una linea di livello, digitare prima la sua altezza in **A**.
   - **Spostare una linea**: fare clic sulla linea, poi dove deve andare.
   - **Rimuovere una linea**: fare clic sulla linea.
   - **Impostare per interasse**: digitare l'interasse in **Ogni**, poi fare clic sul sistema.
5. Per cambiare i montanti scegliere **Montante**, selezionare su cosa agisce (la linea verticale su cui si fa clic, la linea di livello a un'altezza, il bordo, oppure ogni linea), scegliere **Posiziona montanti** o **Rimuovi montanti** e un profilo, poi fare clic sul sistema.
6. Selezionare un sistema per vederne tutto in **Proprietà**: ogni linea della griglia con la sua posizione, un segno per il suo montante e un pulsante per rimuoverlo; l'interasse; il bordo; il profilo; lo spessore del vetro.

## Per faccia

**Per faccia** crea un sistema di facciata continua su una faccia piana che si fa clic nella vista 3D. La sua riga ha le stesse impostazioni di griglia e montanti.

- Funziona su qualsiasi faccia piana di qualsiasi elemento mostrato nella vista 3D: una massa, un muro, un solaio, una falda di tetto, un pilastro, un elemento posizionato. La faccia può essere verticale, inclinata o orizzontale.
- Il sistema prende il contorno della faccia. Un timpano o un'altra forma irregolare taglia vetri e montanti secondo la forma.
- Può invece creare un **muro**, lungo la base di una faccia verticale e alto quanto la faccia. Un muro qui è sempre verticale, quindi una faccia inclinata o orizzontale non può produrne uno.
- Non crea un tetto. Un tetto in BimCraft si calcola dal contorno di un livello e da una pendenza, non da una singola faccia.
- Una faccia curva è composta da molte piccole facce piane: un clic ne prende una.
- Una faccia con aperture: il sistema copre il contorno esterno della faccia.

## Come si misura

- **Area lorda** è il contorno del sistema.
- **Area vetrata** è l'area dei vetri così come realizzati: ogni vetro perde metà della larghezza di un montante su un lato con un montante di griglia, e tutta la larghezza su un montante di bordo.
- Un montante verticale attraversa da bordo a bordo. Un montante orizzontale si ferma a ogni montante verticale e al bordo. I montanti di bordo stanno all'interno del contorno; dove due si incontrano, passa quello più verticale. I giunti sono tagliati a squadra, non a 45°.
- **Abachi**: l'elenco **Sistemi di facciata continua** con questi numeri, una volta che il modello ne ha uno.

## Nel file IFC

Un IfcCurtainWall sul suo livello, composto da un IfcPlate (pannello di facciata) per ogni vetro e da un IfcMember (montante) per ogni tratto di montante, ciascuno con la propria forma, materiale e quantità di base.

## Da sapere

- Qualsiasi dimensione viene realizzata come richiesto. Viene rifiutato solo un contorno senza area, perché non c'è nulla da realizzare.
- Un sistema disegnato come un muro mantiene l'altezza con cui è stato disegnato. Se in seguito si sposta un livello, impostarne di nuovo l'altezza in Proprietà.
- Lo strumento Sposta non sposta ancora un sistema di facciata continua. Eliminarlo e disegnarlo di nuovo, oppure modificarne la griglia sul posto.
- Annulla torna indietro passo per passo: l'intero sistema, una modifica alla griglia, una modifica ai montanti.
