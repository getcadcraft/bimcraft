---
title: Quotatura di una griglia
summary: Mostra la spaziatura tra le linee della griglia vicine e la dimensione complessiva della griglia sulla pianta di ogni piano, salvata nell'IFC e che segue la griglia quando le linee cambiano.
keywords: griglia, quote della griglia, quota, spaziatura, campate, dimensione complessiva, cerchietti, griglia dei pilastri, pianta, tavola
from: aaea5d08
---

## Cosa si ottiene

Riportare sulle piante la spaziatura tra le linee della griglia e la dimensione complessiva della griglia, oltre i cerchietti, così che le tavole ricavate da esse riportino le quote. Serve prima una griglia: vedere [Griglie e pilastri](topic:grids-and-columns).

## Passaggi

1. Mostrare la pianta di un piano e fare clic su {{ui:Griglia}} per attivare lo strumento griglia. Compare la riga delle opzioni della griglia.
2. Spuntare {{ui:Quote}}. Sulla pianta vengono disegnate la spaziatura tra le linee numerate vicine e quella tra le linee con lettere vicine, e la dimensione complessiva in ciascuna direzione.
3. Passare a un altro piano: le stesse quote compaiono sulla sua pianta.
4. Spostare una linea, rinominarne una o aggiungerne una. Le quote seguono la griglia.
5. Deselezionare {{ui:Quote}} per toglierle di nuovo.

## Note

- Ogni modifica è un'unica operazione di annullamento: {{key:Mod+Z}} la annulla.
- L'impostazione viene salvata nell'IFC insieme alla griglia, e le piante inserite nelle tavole riportano le quote.
- Se il modello non ha una griglia modificabile (una griglia arrivata da un file di un altro programma non può essere modificata qui), la riga di stato dice "Nessuna griglia da modificare."
