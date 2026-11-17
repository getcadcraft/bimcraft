---
title: Edifici confinanti e particella da CivilCraft
summary: Prendere gli edifici e la particella che Indirizzo al terreno di CivilCraft ha trovato intorno a un indirizzo come suggerimenti, e aggiungere quelli selezionati.
keywords: terreno, indirizzo, particella, confinanti, contesto, civilcraft, ccsite, edifici, perimetro del terreno, suggerisci
from: 3be9407b
---

## Funzione

In CivilCraft, Superficie › Altro › Indirizzo al terreno trova gli edifici, la particella, la zonizzazione, la zona alluvionale e il suolo intorno a un indirizzo a partire da dati aperti. Il suo pulsante "Invia a BimCraft come suggerimenti" (oppure "Salva il terreno come file", poi aprire qui il `.ccsite.json`) li porta in BimCraft. Non viene aggiunto nulla finché non si conferma.

## Come si usa

1. Avviare o aprire un modello. Il punto dell'indirizzo si trova nell'origine del piano corrente.
2. Una casella elenca ciascun edificio confinante e la particella con una casella di controllo. Deselezionare ciò che non si vuole.
3. Gli edifici di cui la fonte non ha fornito l'altezza usano l'altezza digitata in cima alla casella. Un edificio di cui è stato fornito solo il numero di piani conta 3 m per piano, e la casella lo indica.
4. Premere "Aggiungi quelli selezionati". Gli edifici diventano muri intorno alle loro impronte, alti quanto indicato, in un solo passo di Annulla. La particella diventa il perimetro del terreno, come secondo passo di Annulla.

Zonizzazione, zona alluvionale e suolo sono elencati solo a titolo informativo; non vengono disegnati.

## Da sapere

- I perimetri hanno la qualità dei dati aperti: OpenStreetMap e i livelli catastali locali differiscono molto da luogo a luogo. Verificare ciò che conta con un rilievo.
- Le posizioni sono espresse in metri a est e a nord del punto dell'indirizzo, con un'approssimazione piana, accurate a pochi metri entro pochi chilometri.
- I dati conservano le licenze delle loro fonti (OpenStreetMap è ODbL); la casella mostra la riga di attribuzione.
