---
title: Spool di tubazioni in acciaio e tavole degli spool
summary: Suddividere una tratta di tubazione in acciaio saldata testa a testa in spool di lunghezza massima e nelle saldature di cantiere posizionate, numerarli, e scaricare una tavola per ogni spool (vista 3D, lunghezze di taglio, raccordi, saldature, distinta dei materiali) in PDF e CSV; i canali ottengono una distinta di taglio dei tratti diritti.
keywords: spool, spool, tavola dello spool, isometrica, fabbricazione, prefabbricazione, saldatura di cantiere, saldatura in officina, saldatura di testa, lunghezza di taglio, distinta di taglio, distinta dei materiali, bom, tubo d'acciaio, schedule 40, numero di linea, distinta di taglio dei canali, pezzi di canalizzazione
from: 539f51de
---

## Cosa si fa

Trasformare una tratta di tubazione in acciaio nei pezzi che un'officina salda e un montatore installa: spool non più lunghi della lunghezza scelta, suddivisi dove si posizionano le saldature di cantiere, ognuno con la propria tavola.

Solo la **tubazione in acciaio saldata testa a testa** viene suddivisa in spool (dimensioni secondo ASME B36.10M, curve secondo ASME B16.9 a raggio lungo). Le giunzioni di rame, PVC e PEX non sono saldature di testa, quindi le loro tratte non hanno spool.

## Suddividere una tratta in spool

1. Selezionare una tratta di tubazione in acciaio. In Proprietà, selezionare **Suddividi in spool**.
2. **Spool più lungo**: la massima lunghezza sull'asse che può avere uno spool (inizialmente 6 m, circa 20 ft).
3. **Numero di linea**: parte del numero di ogni spool. Una nuova tratta suddivisa riceve il successivo numero libero del suo sistema.

Gli spool sono numerati lungo la tratta a partire dal suo primo punto: `CHW-12-S01`, `CHW-12-S02` … (il sistema, il numero di linea, lo spool). Uno spool cresce pezzo per pezzo; il pezzo che lo renderebbe troppo lungo inizia lo spool successivo, e un tratto diritto più lungo di uno spool viene tagliato quando lo spool è pieno.

## Posizionare le saldature di cantiere

1. Aprire {{ui:Build}} e scegliere {{ui:Saldatura in cantiere}}.
2. Fare clic sulla tubazione con spool dove va la saldatura di cantiere. Su un tratto diritto il tubo viene tagliato lì; su un raccordo o una valvola, la saldatura si sposta sul giunto più vicino.

Le Proprietà elencano le saldature di cantiere della tratta, ciascuna con {{ui:Rimuovi}}. Ogni modifica è un passo di {{ui:Annulla}}.

## Tavole degli spool

Nelle Proprietà di una tratta con spool:

- {{ui:Tavole degli spool (PDF)}}: una pagina per spool. A sinistra, lo spool in vista isometrica a 30°: i tratti diritti numerati, le saldature in officina come punti, le saldature di cantiere contrassegnate FW e il nord della pianta. A destra, il numero dello spool, la dimensione, lo schedule e la lunghezza, poi le sue **lunghezze di taglio**, i **raccordi**, le **saldature** (una saldatura di testa in officina a ogni giunto all'interno dello spool, una saldatura di cantiere dove incontra lo spool successivo) e la sua **distinta dei materiali** con il peso tubo (peso a estremità lisce ASME B36.10M).
- {{ui:Elenco degli spool (CSV)}}: lo stesso contenuto, un blocco per spool.

:::note
Le lunghezze di taglio sono da estremità a estremità come disegnate: non si detrae alcun gioco di radice né sovrametallo di saldatura. Le curve sono a raggio lungo B16.9; raccordi a T, riduzioni e valvole sono generici, dimensionati in base alla tubazione e non secondo B16.9 o un produttore, e la tavola lo indica. I pesi dei raccordi non sono forniti. Strumento di disegno e di coordinamento, dimensionato da un ingegnere.
:::

## Nel file IFC

Ogni parte di una tratta con spool riporta **CadCraft_Spool** con il suo SpoolId, la tratta, il numero dello spool nella tratta e il punto in cui inizia e finisce lungo la tratta. La tratta conserva le proprie regole (spool più lungo, saldature di cantiere, numero di linea) nel proprio insieme, così gli spool si ritrovano uguali alla riapertura del file.

## Canali: una distinta di taglio

Aprire {{ui:Build}} e fare clic su {{ui:Distinta di taglio dei canali}}: un CSV dei tratti diritti di canale per sistema, forma e dimensione, con ogni tratto diritto tagliato in pezzi della **Lunghezza del pezzo** nella barra del Canale (inizialmente 1500 mm, circa 5 ft) e lo scarto. Solo lunghezze: niente cuciture, spessori o connettori.
