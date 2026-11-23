---
title: Far lavorare un assistente IA con il modello
summary: Attivare gli assistenti in Impostazioni così che un assistente sul computer possa trovare elementi, leggerne le proprietà, isolarli nella vista e disegnare muri, porte, finestre, solai, livelli e griglie, tramite CadCraft Studio. Disattivati finché non vengono attivati.
keywords: ia, assistente, mcp, script, automazione, studio, trova elementi, isola, proprietà, permessi, disconnetti, attività, disegna muri, aggiungi porte, aggiungi finestre, livelli, griglie, solai, annulla, salva, riga di comando, cli, headless, usa con assistenti IA
from: 66d72742
---

## Che cosa si impara

Come consentire a un assistente IA (qualsiasi assistente che parla MCP) di guardare nel modello IFC aperto e di disegnarvi, che cosa può e non può fare, e come interromperlo.

## Che cosa può fare un assistente in BimCraft

| Richiede | Che cosa succede | Serve |
|---|---|---|
| Trovare elementi | Ottiene un elenco di elementi per classe, piano, nome o valore di proprietà, come fa **Trova** | Lettura |
| Leggere proprietà | Ottiene gli attributi, il tipo, i set di proprietà e le quantità di un elemento, come li mostra **Proprietà** | Lettura |
| Descrivere il modello, elencare i muri | Ottiene livelli, muri, porte, finestre, locali, solai, griglie e pilastri, e per ogni muro le estremità, il tipo e l'altezza | Lettura |
| Isolare, rendere trasparente, nascondere o mostrare | La vista 3D cambia come se si usasse il menu {{ui:Mostra}} | Modifica della vista e disegno |
| Disegnare muri, porte, finestre, solai, livelli o linee di griglia | Il modello cambia come con gli strumenti {{ui:Disegna}}: i muri si uniscono, i locali, i solai e i tetti seguono | Modifica della vista e disegno |
| Cambiare un nome o un valore di proprietà | Il Nome, la Descrizione, il Tipo di oggetto o il Tag di un elemento, oppure un valore di proprietà. Un valore condiviso con altri elementi viene prima copiato per quell'elemento; un valore del suo tipo cambia solo quando l'assistente lo dichiara, perché ogni elemento di quel tipo ne segue il valore | Modifica della vista e disegno |
| Spostare, eliminare, modificare muri, porte e finestre | Gli elementi si spostano o vengono eliminati insieme a ciò che ospitano; i muri disegnati con gli strumenti {{ui:Disegna}} cambiano per estremità o tipo, porte e finestre per posizione, dimensione o tipo, e locali e unioni seguono | Modifica della vista e disegno |
| Impostare, disporre e leggere un abaco | "Un abaco delle porte per piano, con classe di resistenza al fuoco e ferramenta": l'assistente dà un nome all'abaco, alle sue colonne (una proprietà o un tag diventa una colonna) e al raggruppamento; BimCraft lo compila dal modello e lo impagina, prendendo dallo standard dello studio ciò che l'assistente non ha indicato. L'impostazione entra nell'elenco **Abachi**. Ogni riga restituita indica i suoi elementi, così l'assistente può selezionarli | Lettura per leggere; Modifica della vista e disegno per salvare un'impostazione |
| Esportare un abaco | CSV, Excel o testo separato da tabulazioni da incollare in Google Sheets (niente viene inviato a Google) | Esportazione |
| Leggere e impostare le finiture dei locali | I tipi di finitura, la finitura di pavimento, parete e soffitto di ogni locale, le zone; superfici, numero di piastrelle e volumi del sottofondo derivano poi dagli abachi delle finiture | Lettura; Modifica della vista e disegno per impostarle |
| Selezionare elementi, annullare i propri passaggi | Gli elementi si scelgono nella vista; si annulla l'ultimo passaggio | Modifica della vista e disegno |
| Salvare | Un nuovo file IFC con ogni modifica, come lo produce {{ui:Salva come IFC}} (l'originale non viene mai modificato) | Salvataggio |
| Esportare USD | I modelli aperti in OpenUSD (.usda, .usdc o .usdz), come li scrive {{ui:USD}} nella barra degli strumenti | Esportazione |
| Generare un render, eseguire la coda di render | Un'immagine della vista 3D, come la produce la finestra {{ui:Render}} con le impostazioni di render, a meno che l'assistente non chieda altre impostazioni; oppure immagini di alta qualità aggiunte alla coda della finestra e renderizzate una dopo l'altra (la coda richiede WebGPU). Il modello non cambia ([Genera un render](topic:render)) | Esportazione |

Ogni modifica di un assistente è un passaggio in **Modifiche**, chiamato "Assistente: ..." (per esempio "Assistente: aggiungi 4 muri"), quindi {{key:Mod+Z}} annulla l'intera azione e si vede di chi era il passaggio. Nella finestra l'assistente non può aprire file: si apre il modello ed esso lavora con quello aperto.

## Attivarlo

Gli assistenti raggiungono BimCraft tramite CadCraft Studio sul computer; il browser normale non ha un accesso.

1. Aprire {{ui:Impostazioni}} e scegliere la scheda **BimCraft**.
2. In **Assistenti**, spuntare **Consenti agli assistenti IA e agli script di usare BimCraft**.
3. **Lettura** è già spuntata per impostazione predefinita. Spuntare anche **Modifica della vista e disegno** se l'assistente può isolare e nascondere elementi e disegnare, e **Salvataggio** se può salvare il modello come nuovo file.
4. Collegare l'assistente in Studio (Studio mostra l'indirizzo e le impostazioni da incollare nell'assistente).

## Mentre un assistente è collegato

Una nota in cima al pannello destro indica quale assistente è collegato e che cosa può fare. Cliccare {{ui:Disconnetti}} per terminare subito la sua sessione; per continuare deve ricollegarsi.

**Attività**, sotto **Assistenti** in Impostazioni, elenca ogni chiamata fatta dall'assistente, dalla più recente, con l'indicazione se è riuscita.

:::tip
Chiedere con parole semplici, per esempio "isola i muri esterni del livello 1", "quali porte non hanno una classe di resistenza al fuoco?" oppure "disegna un locale di 6 per 4 metri al livello 1 con una porta nel muro sud". L'assistente trova gli elementi e li mostra nella vista, oppure li disegna.
:::

## Senza finestra: script e riga di comando

Gli stessi strumenti di disegno funzionano sui file IFC nelle cartelle indicate, senza finestra aperta: il server MCP e la riga di comando di CadCraft possono creare un nuovo edificio o aprire un file IFC, descriverlo, aggiungere muri, porte, finestre, solai, livelli e griglie, annullare e salvarlo come nuovo file `.ifc`. Altri quattro strumenti servono agli script: `ifc_batch` esegue fino a 200 passi di modifica come uno solo (tutto o niente: un annullamento riporta indietro l'intero blocco, e un passo rifiutato annulla i precedenti e ne indica il nome); `ifc_describe` elenca i livelli e ogni muro con le sue porte e finestre; `ifc_render_png` scrive un'immagine di controllo a tinta piatta del modello (senza materiali, texture o ombre) senza finestra; `usd_export` scrive `.usda`, `.usdc` o `.usdz`. Dalla riga di comando, `cadcraft bim script.json --from model.ifc -o out.ifc` esegue uno script di passi, e `--usd`, `--png` e `--plan` scrivono un file USD, un'immagine o una pianta dalla stessa esecuzione. Si decide quali cartelle può usare e se può modificare o salvare qualcosa.

## Disattivarlo

Deselezionare **Consenti agli assistenti IA e agli script di usare BimCraft**. Ogni assistente viene disconnesso subito, e l'impostazione viene mantenuta per la volta successiva.

## Vedi anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che chiama.
- [Trovare elementi per classe, nome o proprietà](topic:find)
- [Nascondere, isolare e rendere trasparenti gli elementi](topic:hide-and-isolate)
- [Impostazioni di BimCraft](topic:settings)
