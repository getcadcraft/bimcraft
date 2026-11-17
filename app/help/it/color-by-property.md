---
title: Colora gli elementi in base a una proprietà
summary: Colora ogni elemento in base al valore di una proprietà, come classe, tipo, piano, materiale, resistenza al fuoco o costo; leggere la legenda, fare clic su un valore per mostrare solo quegli elementi e salvare i colori come schema da usare su altri modelli.
keywords: colore, colora per, legenda, vista intelligente, aspetto, proprietà, tipo, materiale, resistenza al fuoco, filtro, isola, tema, valori, schema, schema colori, salva colori, riuso, team, json, campione
from: f081d343
---

## Cosa si fa

Vedere a colpo d'occhio come una proprietà è distribuita nel modello: quali muri sono esterni, quali materiali sono usati dove, quali elementi non hanno una resistenza al fuoco. Ogni elemento assume il colore del proprio valore, e la legenda indica il significato di ogni colore e quanti elementi lo hanno.

## Passaggi

1. Aprire un modello IFC.
2. Fare clic sulla scheda {{ui:Colore}} a destra.
3. Scegliere una proprietà nell'elenco. Le prime appartengono a ogni elemento ({{ui:Classe}}, {{ui:Tipo}}, {{ui:Piano}}, {{ui:Materiale}}, {{ui:Nome}}…); le altre provengono dai set di proprietà e dai set di quantità del modello, sotto il nome del set. Il numero accanto a ciascuna indica quanti elementi la hanno.
4. Leggere la legenda: un colore, il valore e quanti elementi lo hanno.
5. Fare clic su un valore per mostrare solo quegli elementi. Tenere premuto {{key:Mod}} e fare clic per aggiungere altri valori. Premere {{key:Shift+H}} per mostrare di nuovo tutto.
6. Fare clic su {{ui:Disattivato}} per tornare ai colori propri del modello.

## Cosa si vede

- Fino a sette valori ricevono ciascuno un colore, il più frequente per primo. Oltre questo numero, i valori condividono un unico grigio, elencati come **altri valori**.
- Un numero con molti valori diversi è suddiviso in sei intervalli uguali, dal chiaro (basso) allo scuro (alto).
- Gli elementi senza la proprietà sono grigio chiaro, elencati come **Nessun valore**, così quelli colorati risaltano.
- I colori cambiano passando da spazio carta a spazio modello, e restano mentre si modifica il modello.
- La proprietà di un tipo vale per ogni elemento di quel tipo; quando un elemento ha un proprio valore per la stessa proprietà, prevale il valore proprio.

## Modificare i colori e conservarli come schema

- Fare clic sul campione di un valore nella legenda per scegliere un altro colore. Il modello viene subito ridipinto.
- {{ui:Salva schema}} scarica i colori come un piccolo file `.json` con il nome della proprietà, per esempio `Class colors.json`.
- Su un altro modello, o sul computer di un collega, fare clic su {{ui:Apri schema…}} e scegliere quel file. Ogni valore dello schema riceve il suo colore, così la stessa classe di resistenza al fuoco o lo stesso sistema hanno lo stesso colore in ogni modello.
- Un valore che lo schema non contiene viene dipinto di grigio ed elencato come "not in the scheme" (non presente nello schema); i valori dello schema che questo modello non ha restano elencati con 0, così si vede l'intero schema.
- Uno schema conserva i propri colori in entrambi i temi. Scegliere una proprietà nell'elenco riparte dai colori automatici.

## Errori comuni

- **"Questo modello non ha valori di …".** Lo schema è stato salvato per una proprietà che questo modello non ha (per esempio un altro nome di set di proprietà). Aprire uno schema fatto per questo tipo di modello, oppure scegliere una proprietà nell'elenco.

- **Una proprietà manca nell'elenco.** Nessun elemento con una forma nel modello la possiede. Le proprietà dei piani e degli spazi stessi non sono elencate.
- **Tutto ha lo stesso colore.** Ogni elemento ha lo stesso valore, oppure nessuno: guardare i conteggi della legenda.

## Avanti

- [Nascondere, isolare e rendere trasparenti gli elementi](topic:hide-and-isolate)
- [Orientarsi con l'albero del modello](topic:model-tree)
