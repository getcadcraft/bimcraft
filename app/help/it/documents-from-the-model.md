---
title: Documenti dal modello
summary: Scrivere una specifica o una descrizione una volta come modello, con campi per quantità, proprietà e tag, e compilarla dall'IFC aperto come PDF o documento Word.
keywords: documento, documenti, specifica, spec, descrizione, modello, markdown, report, word, docx, pdf, quantità, abaco, categoria, abaco delle porte, finiture, documentcad
from: 2b0c9156
---

## Cosa si fa

Un modello è un testo in Markdown con campi tra doppie graffe. BimCraft compila i campi dal modello aperto (conteggi, quantità per tipo, proprietà, [tag](topic:tags-and-schedules) del modello) e salva il risultato come PDF, documento Word (.docx) o Markdown.

## Passaggi

1. Aprire un modello IFC.
2. Nel pannello di sinistra, sotto {{ui:Quantità}}, aprire {{ui:Documenti dal modello}}.
3. Scegliere un modello: {{ui:Porte e ferramenta}} oppure {{ui:Muri, rivestimenti e finiture}}, oppure {{ui:Carica un modello di documento (.md)…}} per uno proprio.
4. Se il modello legge tag che il modello non definisce ancora, fare clic su {{ui:Aggiungi i tag di questo modello di documento}}, poi taggare gli elementi sotto {{ui:Tag}}.
5. Modificare il testo come si desidera e fare clic su {{ui:Mostra il documento}}.
6. Fare clic su {{ui:PDF}} (scegliendo prima A4 o Letter) oppure su {{ui:Word (.docx)}}.

## Cosa si dovrebbe vedere

- Il documento compilato sotto i pulsanti, con le sue tabelle.
- Un elenco di avvisi quando un campo non si può leggere (un tag non definito, una proprietà che il modello non ha, un blocco mai chiuso); un campo del genere viene stampato come `[?…]`.
- Pagine PDF con il titolo del documento e "Pagina 1 di 3" in fondo a ogni pagina; le tabelle lunghe riportano la riga di intestazione nelle pagine successive.

## Campi

| Campo | Restituisce |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | il nome e la descrizione del progetto, il nome del file, la data di oggi |
| `{{count IfcDoor}}` | quante porte |
| `{{sum IfcWall NetSideArea}}` | un totale, con la sua unità |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | calcolo (`+ - * /` e parentesi) su termini tra parentesi quadre: `[sum …]`, `[count …]` e, dentro un each, `[qty Width]`. `round n` imposta i decimali, `unit` aggiunge un'unità. Ciò che non può leggere, o una divisione per zero, viene stampato come `[?…]` e genera un avviso |
| `{{qty IfcWall NetSideArea by Type}}` | una tabella: una riga per tipo con conteggio e totale, e una riga di totale |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | una tabella, una riga per elemento |
| `{{tag Finish}}` | in un ciclo, il valore dell'elemento; altrove ogni valore usato (Rovere, Vernice) |
| `{{tags}}` | le definizioni dei tag come tabella |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | il testo una volta per elemento; la parte dopo `{{else}}` quando non ce ne sono |
| `{{#group IfcWall by Type}} … {{/group}}` | il testo una volta per tipo, con `{{value}}`, `{{count}}`, `{{sum Length}}` e un normale `{{#each}}` all'interno |

All'interno di `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (il Tag IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (quella dell'elemento, con la sua unità).

Una classe può essere più d'una (`IfcDoor|IfcWindow`) oppure ogni elemento (`*`). Restringerne una qualsiasi con `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. I test sono `=`, `!=`, `~` (contiene), `>`, `<`, `>=`, `<=`, `has` e `hasnot`; per unirne più d'uno si usa `and`; un valore con spazi va tra "virgolette". `sort Name` ordina un ciclo.

## Abachi e specifica nel documento

`{{schedule doors}}` stampa un abaco del modello come tabella, nel layout del proprio ufficio: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, oppure il nome di una configurazione salvata in Abachi. `{{specification}}` stampa la specifica del progetto. I modelli **Elenchi dei disegni di lavoro** e **Specifica** li usano. Nell'anteprima, fare clic su una cifra di un abaco per selezionare gli elementi da cui proviene. Vedi [Impaginare, salvare ed esportare un abaco](topic:schedule-layouts) e [Scrivere la specifica dal modello](topic:specification).

## Da sapere

- Un campo indica un valore integrato (Name, Type, Storey, Class, Material, Mark), un tag (`tag:Fire rating`, oppure il suo nome), una proprietà (`Pset_WallCommon.FireRating`) oppure solo il nome di una proprietà (`NetSideArea`, `Width`). Un nome semplice legge il set proprio di ciascun elemento, prima i set di quantità: quindi `Width` su una porta è la larghezza della porta, non lo spessore di un muro. Dentro `where`, un nome semplice legge il set che la maggior parte degli elementi scelti possiede.
- Le quantità sono ciò che dicono i set di quantità del file (BimCraft li scrive per ciò che disegna); le unità derivano dalle impostazioni di unità del file.
- Le parole dei campi (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) restano in inglese in ogni lingua. I modelli di esempio sono in inglese.
- Il testo del modello non diventa mai formattazione: un nome con un `*` o un `|` viene stampato così com'è.
- Conservare un modello modificato con {{ui:Conserva in questo browser}} (solo questo browser lo ha) oppure con {{ui:Scarica il modello di documento}}.
- Il testo PDF usa i caratteri PDF standard: un carattere fuori dal testo dell'Europa occidentale viene stampato come "?" e la riga di stato indica quanti sono.
- I modelli per categoria si trovano nella Libreria (tipo Modello di documento). In Documenti dal modello, scegliere {{ui:Dalla Libreria…}}, sceglierne uno, e il suo testo e i tag che legge vengono importati; modificarlo a piacere. Pubblicare un proprio modello nella Libreria è lo stesso caricamento di qualsiasi altro elemento. Non ancora implementato: calcoli oltre a conteggi e totali.
