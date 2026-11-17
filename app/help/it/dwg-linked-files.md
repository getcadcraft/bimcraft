---
title: Trovare disegni collegati e immagini
summary: Mostrare i disegni collegati di un disegno (riferimenti esterni o xref) e le immagini del cartiglio, aprendo la sua cartella oppure aggiungendo i file a mano.
keywords: xref, riferimento esterno, disegno collegato, allega, sovrapposizione, immagine, figura, logo, cartiglio, xref mancante, etransmit, gestore riferimenti
from: 5593d4b1
---

## Cosa si fa

Completare un disegno: mostrare i disegni a cui si collega (riferimenti esterni, o xref) e le immagini che usa, come un logo nel cartiglio.

## Il modo semplice: aprire la cartella

1. Fare clic su {{ui:Apri una cartella}} e scegliere la cartella che contiene il disegno e i suoi collegamenti, per esempio l'intera cartella `Cad` di un progetto.
2. Nel rapporto della cartella, scorrere fino a **Disegni CAD**.
3. Fare clic sul disegno.
4. Guardare il pannello {{ui:Proprietà}} a destra, sotto **Disegni collegati** e **Immagini**.

BimCraft cerca ogni disegno collegato per il suo nome ("*nome*.dwg"), prima nella stessa cartella del disegno, poi ovunque nella cartella aperta. Le immagini vengono trovate allo stesso modo, e anche con un nome simile: un'esportazione eTransmit o Revit spesso aggiunge il nome del progetto davanti, quindi `logo.png` viene trovato come `Tower-logo-5425051.png`.

## Il modo alternativo: aggiungere i file a mano

1. Aprire il disegno da solo.
2. A destra, sotto **Disegni collegati**, fare clic su {{ui:Aggiungi disegni collegati…}}. Sotto **Immagini**, il pulsante è {{ui:Aggiungi immagini…}}; entrambi aprono lo stesso selettore.
3. Scegliere i file `.dwg` collegati e i file delle immagini. È possibile sceglierne più di uno alla volta.
4. Attendere mentre BimCraft riapre il disegno con essi.

## Cosa si deve vedere

Ogni disegno collegato e ogni immagine è elencato con un'etichetta:

| Etichetta | Significa |
|---|---|
| **Mostrato** | Trovato e disegnato. Il percorso sotto indica da dove proviene, oppure "aggiunto manualmente". |
| **Mostrato, nome simile** | Un'immagine trovata con un nome simile. Verificare che sia quella giusta. |
| **Non trovato** | Non è nella cartella né nei file aggiunti. Un'immagine mancante appare come il suo riquadro vuoto. |
| **TIFF non visualizzabile nel browser** | L'immagine è un file TIFF, che i browser non disegnano. Salvarla come PNG con lo stesso nome e aggiungerla. |
| **Impossibile leggere** | Il file è stato trovato ma non è stato possibile aprirlo come immagine. |

Il pannello {{ui:Disegno}} a sinistra mostra "*n* di *m* caricati" per i disegni collegati. I layer dei disegni collegati compaiono in {{ui:Layer}} come "*nome collegamento*|*layer*".

## Errori comuni

- **Aprire solo il disegno.** "Questo disegno mostra solo il proprio contenuto finché non vengono aggiunti i suoi disegni collegati. Aprire l'intera cartella del progetto li trova automaticamente."
- **Aprire una cartella troppo piccola.** Se i collegamenti stanno in una cartella affiancata, aprire la cartella madre.
- **Collegamenti rinominati.** BimCraft abbina i disegni collegati per nome. Un collegamento rinominato sul disco non viene trovato; aggiungerlo a mano.
- **Collegamenti di collegamenti.** BimCraft carica i disegni a cui il disegno aperto si collega. I disegni collegati al loro interno non vengono cercati, quindi di solito non compaiono in questa versione.
