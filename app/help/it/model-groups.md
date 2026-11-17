---
title: Gruppi di modelli
summary: Raggruppare gli elementi scelti in un unico gruppo con nome, posizionare di nuovo il gruppo altrove e modificare una copia per cambiarle tutte.
keywords: gruppo, gruppo modello, raggruppamento, separa, istanza, copia, ripetizione, unità tipo, campata, appartamento, modifica gruppo, IfcGroup
from: 121c5027
---

## Obiettivo

Raggruppare una campata tipo, posizionarla più volte e modificare ogni copia cambiandone una.

## Dove si trova lo strumento

- Layout a barra multifunzione: {{ui:Architettura}} › **Modello** › {{ui:Gruppo modello}}.
- Layout classico: barra Disegna › menu {{ui:Locali}} › Gruppo modello.

## Passaggi

1. Con Seleziona, scegliere gli elementi: fare clic su uno, Ctrl+clic o Shift+clic sugli altri.
2. Scegliere {{ui:Gruppo modello}}. Diventano subito un gruppo. Digitare un {{ui:Nome gruppo}} nella riga prima per assegnarlo, oppure digitarlo dopo per rinominarlo.
3. Premere {{ui:Posiziona un altro}} e fare clic dove deve stare la copia: il suo angolo in basso a sinistra va al punto del clic.
4. Modificare una copia qualsiasi: spostare l'estremità di una parete, ridimensionare una porta, eliminare un pilastro. Ogni altra copia del gruppo cambia nello stesso passaggio, e un solo Annulla riporta tutto indietro.
5. Mentre Gruppo modello è attivo, un clic su un elemento sceglie tutto il suo gruppo.

## Altre operazioni

- {{ui:Aggiungi gli elementi scelti}}: aggiunge altri elementi al gruppo scelto per ultimo.
- {{ui:Separa}}: questa copia diventa di nuovo elementi normali. Le altre copie restano un gruppo.
- Spostare un'intera copia con Sposta: è lo stesso gruppo in una nuova posizione; le altre non si spostano.
- Eliminare gli elementi di una copia: quella copia scompare.

## Cosa può stare in un gruppo

Pareti con le loro porte e finestre, pilastri e solai disegnati possono essere posizionati di nuovo e restare uguali. Un gruppo può contenere anche altri elementi, ma in tal caso non può ancora essere posizionato di nuovo; la riga indica il motivo.

Le copie vengono spostate, non ruotate né specchiate.

## Nell'IFC

Un gruppo è un IfcGroup con un IfcRelAssignsToGroup verso i suoi membri, che restano normali muri, pilastri e solai. Ogni copia di uno stesso gruppo porta lo stesso identificativo di definizione.

## Non ancora implementato

- Ruotare o specchiare una copia.
- Scale, tetti, pavimenti dei locali ed elementi della libreria in un gruppo che viene posizionato di nuovo.
- Il profilo, l'inclinazione e le aperture di una parete non vengono riportati nelle copie.
- Gruppi dentro gruppi.

Vedi anche [Spostare, allineare e distribuire](topic:move-align-distribute).
