---
title: Aree e contorni delle aree
summary: Misurare la superficie lorda o la superficie affittabile all'interno di linee di contorno che si disegnano o si prendono dai muri, ed elencare le aree in un abaco.
keywords: area, aree, contorno area, schema area, superficie lorda, superficie lorda di piano, GFA, affittabile, pianta delle aree, abaco delle aree, selezione dei muri, non chiusa
from: c79f96d2
---

## Cosa farai

Disegnare i contorni di uno schema di aree, collocare le aree al loro interno e leggere i totali.

## Dove sono gli strumenti

- Layout a barra multifunzione: {{ui:Architecture}} › **Locali e aree** › {{ui:Area}} e {{ui:Area Boundary}}.
- Layout classico: barra Disegna › menu {{ui:Rooms}}.

## Passaggi

1. Scegliere {{ui:Area Boundary}}. Nella riga scegliere lo {{ui:Scheme}}: Superficie lorda dell'edificio o Affittabile. Ogni schema ha i propri contorni.
2. Scegliere come tracciare le linee in {{ui:Make by}}:
   - **Disegna**: fare clic punto dopo punto.
   - **Seleziona muri: linea di mezzeria**: fare clic su un muro, e la sua linea di mezzeria diventa un contorno.
   - **Seleziona muri: faccia su cui si fa clic**: fare clic su un muro dal lato desiderato; quella faccia diventa il contorno. Per la superficie lorda dell'edificio fare clic sull'esterno dei muri perimetrali.
3. Scegliere {{ui:Area}}. Scegliere lo stesso schema, digitare un nome, un numero o un tipo se lo si desidera, e fare clic all'interno dei contorni.
4. L'area viene misurata subito. Selezionarla per modificarne il nome, il numero o il tipo nelle Proprietà.

## Cosa segue cosa

- Un contorno tracciato selezionando un muro segue quel muro: spostando il muro, l'area viene misurata di nuovo nello stesso passaggio.
- Un contorno disegnato resta dove è stato disegnato.
- Le facce dei muri che si incontrano in un angolo si uniscono anche lì, quindi quattro muri selezionati chiudono un'area senza spazi.
- I contorni delle aree sono visibili in pianta mentre è attivo uno strumento locale o area, così non ingombrano la pianta il resto del tempo.

## Se i contorni non si chiudono

L'area viene comunque collocata. Riporta **Non chiusa** e non misura nulla finché i contorni non si chiudono attorno ad essa. È un consiglio: non viene rifiutato nulla.

## L'abaco

Pannello sinistro › {{ui:Schedules}} › **Aree**: schema, numero, nome, tipo, piano, area e perimetro, con un totale. Un clic su una riga seleziona l'area. {{ui:Download CSV}} fornisce la stessa tabella.

## Nell'IFC

Un'area è un IfcSpace senza corpo: PredefinedType GFA per lo schema lordo dell'edificio, USERDEFINED con ObjectType Rentable per l'affittabile. Ha GrossFloorArea e GrossPerimeter, e nessuna area netta, così non viene confusa con un locale. Un contorno è un IfcVirtualElement.

## Non ancora implementato

- Schemi propri (solo Superficie lorda dell'edificio e Affittabile).
- Riempimenti a colore per tipo di area.
- Regole che collocano il contorno al posto dell'utente, come "fino alla linea del vetro".

Vedi anche [Locali e separatori di locali](topic:rooms-and-separators), [Etichette di locali e aree](topic:room-and-area-tags).
