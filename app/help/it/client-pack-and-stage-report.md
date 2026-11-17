---
title: Pacchetti per il cliente, relazioni di fase e confronto delle opzioni
summary: Creare un pacchetto per il cliente o una relazione di fase dal modello, con le opzioni di volumetria confrontate per superficie e costo, le superfici dei piani, i disegni con le loro revisioni e lo storico delle emissioni. Ogni cifra conserva gli elementi da cui deriva.
keywords: pacchetto cliente, presentazione, relazione di fase, relazione, confronto delle opzioni, opzioni, confronta opzioni, superficie e costo, costo per opzione, nessuna tariffa, volumetria, superfici dei piani, elenco disegni, storico delle emissioni, cifre, cifre collegate
from: f6679bf5
---

## Cosa si fa

Creare un pacchetto per il cliente o una relazione di fase dal modello così com'è ora, e confrontare fianco a fianco le opzioni di volumetria conservate, per superficie e costo.

## Passaggi

1. Nel pannello di sinistra aprire **Pacchetto cliente e relazione di fase**.
2. Scegliere **Apri in Documenti** accanto a Pacchetto cliente o Relazione di fase. Il documento compare in Documenti a partire dal modello, dove è possibile modificarne il testo.
3. Nell'anteprima, fare clic su una cifra per selezionare gli elementi da cui deriva.
4. Scegliere **Crea il pacchetto**. Viene salvato un archivio zip: il documento come PDF, un'immagine della vista 3D e `figures.csv`, che elenca ogni cifra con i GlobalId dei suoi elementi.

## I campi

Possono essere usati in qualsiasi documento.

| Campo | Cosa stampa |
|---|---|
| `{{stage}}` | La fase di progetto dai dettagli del disegno. |
| `{{options}}` | Le opzioni di volumetria conservate, affiancate: piani, altezza, impronta, superficie lorda di pavimento, involucro e costo. |
| `{{areas}}` | Superficie di pavimento per livello, dai locali. |
| `{{sheets}}` | Le tavole con la revisione in cui si trovano e la data dell'ultima emissione. |
| `{{issues}}` | Lo storico delle emissioni e il registro delle modifiche dei disegni. |
| `{{changes}}` | Che cosa è cambiato dall'ultima emissione, tavola per tavola. |

## Come sono valutati i costi

Il costo deriva solo dal tariffario del progetto (Energia/Costo, costo 5D). Nulla viene stimato al posto dell'utente.

- Una riga di tariffa valuta un'opzione solo quando le sue classi indicano `IfcBuildingElementProxy`.
- La superficie di pavimento è valutata da una riga le cui parole indicano l'uso dell'opzione, come ufficio. In mancanza, si usa una riga con le parole superficie lorda di pavimento o massa edilizia. Una riga per m² usa la superficie lorda di pavimento. Una riga per m³ usa il volume.
- L'involucro (perimetro per altezza) è valutato da una riga con la parola involucro o facciata.
- Un'opzione senza una riga corrispondente mostra **Nessuna tariffa**. Un totale viene mostrato solo quando ogni parte richiesta ha una tariffa.

## Da sapere

- Conservare le opzioni con **Conserva come opzione** nell'elenco della volumetria del programma dei locali. Vedere Opzioni di volumetria.
- Un PDF non può selezionare elementi. Al di fuori di BimCraft, `figures.csv` porta il collegamento da ogni cifra ai suoi elementi.

## Non ancora implementato

- Le tavole e le viste disegnate non vengono inserite nel documento. Il pacchetto contiene solo un'immagine della vista 3D.
