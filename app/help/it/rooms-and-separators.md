---
title: Locali e separatori di locali
summary: Scegliere un locale per dargli un nome e un numero e leggerne superficie, perimetro e volume. Disegnare un separatore di locali dove due locali si incontrano senza parete tra loro.
keywords: locale, locali, separatore di locali, linea di separazione, spazio, IfcSpace, nome, numero, superficie, perimetro, volume, pianta aperta, dividere un locale, cucina e soggiorno, non chiuso
from: d4c1d66b
---

## Cosa si fa

Dare un nome ai locali definiti dalle pareti, e dividere un locale aperto in due senza una parete.

## Dove si trovano gli strumenti

- Layout a barra multifunzione: {{ui:Architettura}} › **Locali e aree** › {{ui:Locale}} e {{ui:Separatore di locali}}.
- Layout classico: la barra Disegna › menu {{ui:Locali}}.
- Qualsiasi stile di menu: i comandi si chiamano Locale e Separatore di locali; la tavolozza dei comandi li trova.

## Passaggi

1. Disegnare le pareti. Ogni anello chiuso di pareti è già un locale: BimCraft lo crea, gli assegna un numero e ne calcola la superficie man mano che si disegna.
2. Scegliere {{ui:Locale}}. Spostarsi sulla pianta: il locale sotto il puntatore si evidenzia con la sua superficie, il perimetro e il volume.
3. Per dare rapidamente un nome ai locali, inserire prima un {{ui:Nome}} e un {{ui:Numero}} nella riga, poi fare clic nel locale. Il numero aumenta di uno per il locale successivo (101, 102; A-09, A-10).
4. Oppure fare clic su un locale: viene selezionato, e in {{ui:Proprietà}} sono disponibili nome, numero, superficie, perimetro, volume e il suo tag.
5. Per dividere un locale aperto, scegliere {{ui:Separatore di locali}} e fare clic su due punti: da parete a parete, oppure da parete a un altro separatore. Continuare a fare clic per una catena; Invio, Esc o un doppio clic la terminano.

## Cosa fa un separatore

- Delimita i locali come una parete senza spessore. Le superfici dei due locali sommate danno esattamente il locale di partenza.
- Il locale che contiene il centro del vecchio locale mantiene nome e numero. L'altro è nuovo.
- Un separatore che si ferma in campo aperto, senza toccare nulla a un'estremità, non divide nulla. Prolungarlo e lo farà.
- La parte di un separatore che sta dentro una parete viene ignorata, quindi è possibile agganciare le linee di mezzeria delle pareti.
- Selezionare un separatore e premere Delete per rimuoverlo: i due locali tornano uno solo. Annulla lo ripristina.

## Se non c'è un locale dove si fa clic

La barra di stato lo indica: le pareti in quel punto non si chiudono. Chiudere lo spazio, oppure disegnare un separatore che lo attraversi. Non viene rifiutato nulla: semplicemente non c'è ancora un locale chiuso.

## Nell'IFC

Un locale è un IfcSpace con il proprio numero (Name), nome (LongName) e Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Il volume è la superficie per l'altezza fino al livello superiore.

Un separatore di locali è un IfcVirtualElement, l'entità che IFC prevede per un confine non costruito. Ha una linea e nessun corpo, quindi un altro programma non legge alcuna parete e non lo conteggia.

## Non ancora implementato

- Separatori curvi.
- Un locale che segue un soffitto inclinato: il volume è sempre la superficie per l'altezza del livello.
- Le relazioni di confine dello spazio (IfcRelSpaceBoundary) non vengono scritte, né per le pareti né per i separatori.

Vedere anche [Tag di locali e aree](topic:room-and-area-tags), [Aree e confini delle aree](topic:areas-and-area-boundaries).
