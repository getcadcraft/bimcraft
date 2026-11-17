---
title: Unità all'importazione: il file dichiara le sue unità, oppure viene chiesto prima
summary: Quando un file importato dichiara le sue unità, BimCraft le usa e lo indica. Quando non le dichiara, BimCraft chiede prima di inserire qualcosa e ricorda la risposta per quel file.
keywords: unità, importa, apri, OBJ, STL, DWG, DXF, IFC, nuvola di punti, elemento della libreria, millimetri, metri, pollici, piedi, scala, dimensione sbagliata, troppo grande, troppo piccolo, 1000 volte, chiedi, ricordato
from: f044e9bc
---

## Cosa farai

Importare un file e verificare che entri alla dimensione corretta.

## Passaggi

1. Aprire o aggiungere il file come di consueto: {{ui:Aperta}}, {{ui:File}} della Libreria, {{ui:Nuvole di punti}}, oppure Costruisci › Da un disegno.
2. Se il file dichiara le sue unità, non viene chiesto nulla. La barra di stato indica quali unità dichiara il file.
3. Se non le dichiara, una finestra chiede le **Unità di** del file. Scegliere quanto vale un'unità nel file e fare clic su {{ui:Usa queste unità}}. Nulla viene inserito prima della risposta.
4. {{ui:Annulla}} (oppure {{key:Esc}}) non porta dentro nulla.

## Quali file dichiarano le unità

- **IFC**: dichiara la propria unità di lunghezza, e "Aperto" indica quale. Un IFC che non ne dichiara nessuna viene chiesto prima di aprirsi; la risposta viene scritta nel modello, quindi il file la dichiara una volta salvato.
- **DWG e DXF**: le unità di inserimento del disegno. Un disegno che non le ha viene chiesto (file della Libreria, Costruisci › Da un disegno, terreno da curve di livello).
- **Elenchi di punti** per il terreno: non dichiarano unità. Viene chiesto.
- **Nuvole di punti**: LAS e LAZ con un sistema di coordinate, E57, PTX e PLY dichiarano le proprie. Gli altri vengono chiesti.
- **OBJ e STL**: non dichiarano mai unità. Viene chiesto.
- **glTF e GLB**: metri, secondo la regola del formato.
- **Immagini**: non hanno una dimensione propria. Un'immagine viene adattata alla vista e la sua dimensione si imposta con **Scala con due punti**. La dimensione data viene ricordata per quel file: inserito di nuovo, entra a quella dimensione e la barra di stato lo indica.
- **L'add-on Nuvole di punti**: chiede quando si crea una nuvola il cui file non dichiara un'unità, ed etichetta i numeri della nuvola nell'unità che porta con sé.

## Da sapere

- La risposta viene ricordata per quel file (nome, dimensione e data) su questo computer, in tutte le app CadCraft. La volta successiva che lo stesso file viene inserito non viene chiesto nulla, e la barra di stato indica che sono state usate le unità ricordate.
- Per essere chiesto di nuovo: palette dei comandi ({{key:Mod+K}}) › **Chiedi di nuovo le unità dei file importati**.
- Un elenco di unità già presente in un'importazione (le Unità della Libreria, le Unità della barra della nuvola, Unità del disegno in Da un disegno) cambia comunque le unità in seguito. L'elenco Unità dello strumento terreno ora è solo il punto da cui parte la domanda.
