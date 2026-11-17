---
title: Livello di sviluppo (LOD) e verifiche di tappa
summary: Assegnare a ogni elemento un livello di sviluppo, vedere da dove deriva, verificare il modello rispetto al LOD richiesto da una tappa e correggere i tag mancanti e i locali senza nome. Ogni controllo fornisce solo un suggerimento: nulla viene bloccato.
keywords: lod, livello di sviluppo, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, tappa, tabella delle tappe, controlli del modello, tag mancanti, locali senza nome, generico nelle fasi iniziali, classe IFC, classificazione
from: 2091c79b
---

## Cosa si fa

Indicare quanto è sviluppato ciascun elemento, quindi verificare l'intero modello rispetto a ciò che richiede una tappa del progetto.

## Passaggi

1. Scegliere un elemento (o più elementi) e aprire {{ui:Proprietà}}. Trovare {{ui:Livello di sviluppo}}.
2. Scegliere un livello dall'elenco. Ogni livello è indicato da ciò che significa e comprende quelli inferiori. Un passaggio di annullamento copre l'intera selezione.
3. Verificare da dove deriva il livello: dall'elemento stesso, dal suo tipo o da un contrassegno verificato in campo.
4. Per verificare il modello, aprire {{ui:Controlli del modello}} a sinistra, quindi {{ui:Tappe LOD}}. Scegliere la tappa e la tabella (la tabella iniziale oppure un proprio file CSV o JSON da caricare con {{ui:Carico}}).
5. Fare clic su {{ui:Verifica il modello}}. I totali e una riga per ogni voce della tabella indicano quali elementi hanno raggiunto il proprio livello e quali no; i risultati compaiono anche nell'elenco dei problemi.
6. In {{ui:Tag mancanti e locali senza nome}}, fare clic su {{ui:Trova}}, modificare le proposte se si desidera, quindi fare clic su {{ui:Applica}}.

## Risultato atteso

- Il livello scelto per l'elemento, con accanto la sua classe IFC e i codici di classificazione.
- Totali e righe per la tappa. Una tabella non modifica mai il significato di un livello: la scala è fissa, una tabella indica solo quale livello richiede una tappa.
- "Generico nelle fasi iniziali": suggerimento a mantenere gli elementi generici in una tappa iniziale. È solo un suggerimento.

## Da sapere

- Nulla qui blocca il lavoro. Un modello al di sotto del livello richiesto da una tappa viene elencato, non rifiutato.
- Le tre parti di un livello (geometria, informazioni, documentazione) possono essere impostate singolarmente; un contrassegno indica soddisfatto, inferiore o non dichiarato.
