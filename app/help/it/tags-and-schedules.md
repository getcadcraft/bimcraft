---
title: Assegnare tag agli elementi e fare abachi per tag
summary: Definire tag propri (un nome, un tipo, i valori ammessi, quali classi), assegnarli a molti elementi in una volta e creare abachi le cui colonne, filtri e raggruppamenti leggono i tag. I tag sono conservati nell'IFC.
keywords: tag, tagging, proprietà personalizzate, parametri, parametri condivisi, set di proprietà, pset, abaco, filtro, raggruppa per, finitura, resistenza al fuoco, modifica in blocco, csv
from: 9cc7c90d
---

## Cosa si fa

Un tag è una proprietà propria, come *Finitura* o *Resistenza al fuoco*. Lo si definisce una volta per il progetto, lo si imposta su molti elementi in una volta, e ogni abaco in BimCraft può leggerlo: l'abaco dei tag qui, {{ui:Quantità}}, Trova, Colore per proprietà e [Documenti dal modello](topic:documents-from-the-model).

## Passi

1. Aprire un modello IFC, oppure iniziare un nuovo edificio.
2. Nel pannello di sinistra, sotto {{ui:Quantità}}, aprire {{ui:Tag}}.
3. Fare clic su {{ui:Aggiungi un tag}}. Dare un nome, scegliere il suo tipo e, se si vuole, elencare i valori ammessi (separati da virgole) e le classi per cui è (`IfcDoor`, `IfcWall` …). Fare clic su {{ui:Aggiungi il tag}}.
4. Selezionare gli elementi nel modello (Trova aiuta: selezionare ogni porta in una volta).
5. Sotto {{ui:Tagga la selezione}}, scegliere o digitare un valore per ogni tag da impostare, lasciare gli altri come sono e fare clic su {{ui:Applica a … elementi selezionati}}.
6. Sotto {{ui:Abaco dei tag}}, selezionare le colonne, aggiungere filtri, scegliere {{ui:Raggruppa per}}, poi {{ui:Scarica CSV}}.

## Cosa si dovrebbe vedere

- Un passo nell'elenco delle modifiche per ogni definizione salvata e ogni assegnazione; {{ui:Annulla}} lo ripristina.
- Gli elementi di una classe per cui un tag non è previsto sono esclusi da quel tag, e la riga di stato indica quanti sono.
- L'abaco dei tag elenca una riga per elemento, raggruppata per il campo scelto; fare clic sulla prima cella di una riga per scegliere quell'elemento.
- {{ui:Quantità}} elenca i tag sotto `CadCraft_Tags`, così si possono sommare aree o conteggi per tag anche lì.

## Tipi

I tipi sono la stessa lista dei parametri di famiglia: Lunghezza (millimetri), Angolo (gradi), Numero, Numero intero, Sì / No, Penna (1–16), Testo, Materiale e Riempimento. Un valore che non corrisponde al suo tipo, o non è uno dei valori ammessi, viene rifiutato con un messaggio e nulla cambia.

## Da sapere

- Tutto è IFC semplice, quindi altri programmi leggono i valori: le definizioni sono nel set di proprietà `CadCraft_TagDefs` sul progetto, i valori nel set di proprietà `CadCraft_Tags` su ogni elemento (una proprietà per tag). Le lunghezze sono scritte nell'unità di lunghezza del file.
- `IfcWall` nelle classi di un tag include anche i muri standard-case e a elementi.
- Rinominare un tag rinomina i suoi valori su ogni elemento nello stesso passo. Rimuovere un tag rimuove solo la sua definizione: i valori già impostati restano sugli elementi come proprietà semplici. Cancellarli prima (scegliere {{ui:Cancella}}) per toglierli.
- I tag nell'app di disegno CadCraft (attributi di blocco) non sono ancora implementati.
