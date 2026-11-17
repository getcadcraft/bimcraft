---
title: Riprodurre un cronoprogramma di cantiere sul modello
summary: Apri un elenco di attività come CSV, collega ogni attività agli elementi tramite una proprietà e scorri le date per vedere cosa è costruito, in corso e non ancora iniziato.
keywords: 4d, cronoprogramma, sequenza di costruzione, linea del tempo, fasi, programma, gantt, attività, date, simulazione, avanzamento, costruito, csv, stage, fase, work package, wbs, gruppo
from: 1b985a64
---

## Cosa farai

Osservare l'edificio che prende forma: ogni attività del cronoprogramma è collegata agli elementi che costruisce, mostrata giorno per giorno.

## Passaggi

1. Aprire un modello IFC e aprire {{ui:4D schedule}} nel pannello sinistro.
2. Fare clic su {{ui:Download a template}} per un elenco di attività con una settimana per piano, e modificarlo in un foglio di calcolo. Oppure crearne uno proprio.
3. Fare clic su {{ui:Open a task list…}} e scegliere il CSV.
4. Trascinare il cursore della data, oppure fare clic su {{ui:Play}}.

## L'elenco delle attività

Un CSV con una riga di intestazione e le colonne **Task**, **Start**, **Finish**, **Field** e **Value**. Vanno bene sia le virgole sia i punti e virgola.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Scrivere le date nel formato AAAA-MM-GG.
- Una riga collega l'attività a ogni elemento il cui **Field** ha esattamente quel **Value**. Il campo è una proprietà come Storey, Class, Name, Type, Material, Tag o GlobalId, oppure una proprietà scritta con il suo set e il suo nome: `Pset_WallCommon.FireRating`.
- Ripetere un'attività su più righe, con le stesse date, per collegare più elementi.

## Fasi e pacchetti di lavoro

Aggiungere una colonna **Stage**, una colonna **Package**, o entrambe, per raggruppare le attività in fasi e pacchetti di lavoro. Anche Phase e WBS funzionano come nomi di colonna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Un'attività appartiene a una sola fase e a un solo pacchetto. Se una riga successiva della stessa attività indica un altro, quella riga viene elencata con il suo numero di riga e ignorata.
- Lo stesso nome di pacchetto in due fasi sono due pacchetti.

Quando l'elenco contiene gruppi, sopra la data compare un elenco {{ui:Show}}. Scegliere una fase o un pacchetto e viene riprodotto come un unico blocco:

- il cursore e {{ui:Play}} vanno dall'inizio più precoce del gruppo alla fine più tardiva,
- sono elencate e colorate solo le attività del gruppo, e tutto ciò che è fuori dal gruppo è trasparente,
- la riga sotto l'elenco indica quante sue attività sono completate, in corso e da fare in quella data,
- {{ui:Select its elements}} seleziona tutti gli elementi del gruppo, per {{ui:Show}}, {{ui:Section}} o un abaco.

Scegliere **Ogni attività** per rivedere l'intero cronoprogramma.

## Cosa si vede

- **Costruito**: elementi le cui attività sono tutte completate, nei propri colori.
- **In corso**: elementi con un'attività in corso quel giorno, in ocra. Un'attività è in corso dalla data di inizio fino alla data di fine compresa.
- **Non iniziato**: trasparente.
- Gli elementi che non rientrano in nessuna attività restano come sono. L'elenco mostra quanti elementi ha trovato ogni attività. Le righe che non è stato possibile leggere, o che non hanno trovato nulla, sono elencate con il loro numero di riga.

## Collegamenti, diagramma di Gantt e MS Project

- Aprire un file XML di Microsoft Project (`.xml`) oppure un CSV con una colonna `Predecessors`. I collegamenti possono essere fine-inizio, inizio-inizio, fine-fine o inizio-fine, ciascuno con un anticipo o un ritardo in giorni.
- Sotto l'elenco delle attività, il diagramma di Gantt disegna ogni attività come una barra con frecce per i collegamenti. Le attività sul percorso critico sono rosse. Un ciclo di collegamenti o un predecessore inesistente viene elencato nel pannello.
- {{ui:Save as MS Project XML}} e {{ui:Save CSV with links}} riscrivono il cronoprogramma con i suoi collegamenti.

## Passaggi successivi

- [Trovare elementi per classe, nome o proprietà](topic:find)
- [Colorare gli elementi in base a una proprietà](topic:color-by-property)
