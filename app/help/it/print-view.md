---
title: Controllare un disegno nella vista di stampa
summary: Passare un DWG o DXF alla vista di stampa per vederlo in bianco e nero con i suoi spessori di linea e senza i layer che non vengono mai stampati.
keywords: stampa, plot, anteprima, anteprima di stampa, spessori di linea, lineweight, monocromatico, bianco e nero, defpoints, non stampare
from: 1a59c23e
---

## Cosa farai

Vedere come apparirà un foglio su carta prima di stamparlo dal programma che l'ha creato: nero su bianco, spessori di linea alla loro larghezza reale e senza i layer impostati per non stampare.

## Passaggi

1. Aprire un disegno DWG o DXF.
2. Cliccare una scheda del foglio sopra il disegno.
3. Cliccare {{ui:Vista di stampa}} alla fine delle schede, oppure premere {{key:P}}.
4. Ingrandire un dettaglio per confrontare linee pesanti e linee leggere.
5. Cliccare di nuovo {{ui:Vista di stampa}}, oppure premere {{key:P}}, per tornare ai colori normali.

## Cosa si vede

- Carta bianca su una scrivania grigia, ogni linea e ogni testo in nero, qualunque sia il tema.
- Spessori di linea: su un foglio ogni spessore è disegnato alla sua larghezza reale su carta, quindi una linea da 0.5 mm è il doppio di una da 0.25 mm a qualsiasi zoom. Una linea non viene mai disegnata più sottile del suo spessore a schermo.
- I layer impostati per non stampare e il layer DEFPOINTS sono nascosti.
- Il pulsante {{ui:Vista di stampa}} resta premuto. La vista di stampa resta attiva quando si cambia foglio o si apre un altro disegno, finché non la si disattiva.

In {{ui:Modello}}, la vista di stampa usa solo gli spessori a schermo (linee sottili di un pixel, quelle più pesanti un po' più spesse), perché lo spazio modello non ha una dimensione del foglio.

## Errori comuni

- **Aspettarsi che stampi.** La vista di stampa è un'anteprima. La stampa e l'esportazione PDF non sono ancora integrate in BimCraft; stampare dal programma che ha creato il disegno.
- **Aspettarsi gli stili di stampa.** Le tabelle delle penne e i colori degli stili di stampa non vengono letti. Tutto è nero semplice.
- **Premere P mentre si digita.** {{key:F}} e {{key:P}} non fanno nulla mentre si digita in un campo, o mentre è visibile l'abaco delle attrezzature.
