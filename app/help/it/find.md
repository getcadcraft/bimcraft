---
title: Trovare elementi per classe, nome o proprietà
summary: Trovare ogni elemento che corrisponde a una o più regole (la sua classe, il nome, il tipo, il piano, il materiale o il valore di una proprietà), selezionarli tutti e conservare le regole come set di ricerca con nome.
keywords: trova, cerca, filtra, interroga, regola, set di ricerca, set di selezione, ricerca salvata, proprietà, valore, classe, materiale, seleziona tutto
from: 3d293bc2
---

## Obiettivo

Selezionare in un solo passaggio ogni elemento di un tipo o con un determinato valore: ogni porta, ogni muro del Piano 2, ogni elemento con resistenza al fuoco EI60, ogni muro il cui costo supera una soglia impostata.

## Passaggi

1. Aprire un modello IFC.
2. Aprire {{ui:Trova}} nel pannello di sinistra.
3. Nella prima regola, scegliere una proprietà (prima quelle dell'elemento, come {{ui:Classe}} e {{ui:Piano}}, poi i set di proprietà del modello), il modo di confronto e un valore. La casella del valore suggerisce i valori presenti nel modello.
4. Per restringere la ricerca, fare clic su {{ui:Aggiungi una regola}}. Scegliere {{ui:Tutte le regole}} per richiederle tutte, oppure {{ui:Una qualsiasi regola}} per una sola.
5. Fare clic su {{ui:Trova}}, oppure premere {{key:Enter}} in una casella del valore. Gli elementi corrispondenti vengono selezionati.
6. Per conservare le regole, fare clic su {{ui:Salva come set}}, digitare un nome e fare di nuovo clic. Per trovare di nuovo con un set, fare clic sul suo nome.

## Risultato atteso

- Gli elementi corrispondenti sono selezionati nella vista 3D e nell'albero del modello, e {{ui:Proprietà}} indica quanti sono per classe. Premere {{key:I}} per mostrare solo questi, {{key:H}} per nasconderli.
- Le parole corrispondono senza distinguere maiuscole e minuscole. I numeri si confrontano come numeri: "è maggiore di 1000" confronta il valore, non il testo.
- {{ui:ha un valore}} e {{ui:non ha un valore}} non richiedono alcun valore; trovano ciò che è compilato, oppure ciò che manca.
- I set salvati restano in questo browser per ogni modello aperto.

## Errori comuni

- **Non si trova nulla.** Una regola ha bisogno di un valore che possa corrispondere: controllare i suggerimenti nella casella del valore.
- **Una proprietà manca dall'elenco.** Nessun elemento con una forma in questo modello la possiede.

## Prossimi argomenti

- [Colorare gli elementi per proprietà](topic:color-by-property)
- [Nascondere, isolare e rendere trasparenti gli elementi](topic:hide-and-isolate)
