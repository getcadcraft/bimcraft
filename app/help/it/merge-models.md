---
title: Unire le modifiche di due persone su un modello
summary: Far unire a git, Fossil o Mercurial due copie modificate dello stesso modello IFC oggetto per oggetto, così due persone possono disegnare sullo stesso edificio e riunire il lavoro.
keywords: unisci, unione, git, fossil, mercurial, controllo di versione, conflitto, tre vie, cadcraft merge, gitattributes, ifc, globalid, team, due copie, rami
from: 50733df8
---

Due persone prendono una copia dello stesso edificio: una disegna l'ala est e l'altra quella ovest; più tardi le copie devono diventare una sola. Se hanno toccato oggetti diversi, un programma può farlo al posto di una persona.

## Come funziona

Ogni muro, porta, livello, locale e set di proprietà di un file IFC ha un GlobalId che non cambia mai. L'unione cerca gli oggetti tramite quell'id, non tramite il numero che il file assegna loro (`#123`), perché i numeri cambiano quando un programma salva. Le parti che dipendono da un oggetto e non hanno un id proprio (posizionamenti, forme, unità) vengono confrontate per il loro contenuto.

Entrambe le copie devono avere la stessa versione IFC (2x3, 4 o 4.3). L'unione mantiene il file così com'è, con il suo ordine e i suoi numeri, e vi aggiunge ciò che è nuovo; così un diff di git dell'unione mostra solo ciò che l'unione ha modificato.

## Impostazione

Git richiede due righe, una volta per repository:

```
# .gitattributes
*.ifc merge=cadcraft

# una volta, su ogni computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Senza git, eseguire `cadcraft merge <base> <ours> <theirs>`. Fossil e Mercurial accettano gli stessi tre file nella propria impostazione dello strumento di unione. Non si carica nulla: tutto viene eseguito sul proprio computer.

## Le regole

- Un attributo modificato da un solo lato viene preso. La stessa modifica su entrambi i lati viene presa una volta.
- Lo stesso attributo modificato in due modi (lo stesso livello rinominato in due modi) è un **conflitto**: resta il lato proprio e il rapporto elenca entrambi. Aprire il risultato e correggerlo a mano.
- Un elenco di elementi (i muri di un livello, le proprietà di un set) si unisce come insieme: viene conservato ciò che uno dei due lati ha aggiunto ed eliminato ciò che uno dei due lati ha rimosso. Due persone che aggiungono ciascuna muri allo stesso livello non creano un conflitto.
- Un oggetto aggiunto su uno dei due lati viene conservato, con la sua forma e le sue proprietà. Rimosso da un lato e non toccato dall'altro: rimosso. Rimosso da un lato e modificato dall'altro: rimosso e segnalato.
- Data, ora e autore del file, e la storia del proprietario di ciascun oggetto, restano quelli propri.

La geometria viene unita per intero: la forma di un muro viene da un lato solo, mai mescolata punto per punto. I file IFC compressi e IFCX non vengono uniti. Dopo un'unione, aprire il risultato in BimCraft e controllare il pannello Problemi prima di salvare.
