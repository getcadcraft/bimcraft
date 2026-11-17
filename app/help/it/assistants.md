---
title: Fare lavorare un assistente IA sul modello
summary: Attivare gli assistenti nelle Impostazioni, così un assistente sul computer può trovare elementi, leggerne le proprietà, isolarli nella vista e disegnare muri, porte, finestre, solai, piani e griglie, tramite CadCraft Studio. Disattivato finché non lo si attiva.
keywords: ai, assistente, mcp, script, automazione, studio, trova elementi, isola, proprietà, permessi, disconnetti, attività, disegna muri, aggiungi porte, aggiungi finestre, piani, griglie, solai, annulla, salva, riga di comando, cli, headless, usa con assistenti ai
from: c5ee595b
---

## Cosa imparerai

Come consentire a un assistente IA (qualsiasi assistente che parla MCP) di guardare il modello IFC aperto e di disegnarvi, che cosa può e non può fare, e come fermarlo.

## Cosa può fare un assistente in BimCraft

| Chiede di | Cosa succede | Richiede |
|---|---|---|
| Trovare elementi | Ottiene un elenco di elementi per classe, piano, nome o valore di proprietà, come fa **Trova** | Lettura |
| Leggere le proprietà | Ottiene attributi, tipo, set di proprietà e quantità di un elemento, come li mostra **Proprietà** | Lettura |
| Descrivere il modello, elencare i muri | Ottiene piani, muri, porte, finestre, locali, solai, griglie e colonne, e per ogni muro estremi, tipo e altezza | Lettura |
| Isolare, rendere trasparente, nascondere o mostrare | La vista 3D cambia come se si usasse il menu {{ui:Show}} | Modificare la vista e disegnare |
| Disegnare muri, porte, finestre, solai, piani o linee di griglia | Il modello cambia come se si usassero gli strumenti {{ui:Draw}}: i muri si uniscono, locali, solai e tetti seguono | Modificare la vista e disegnare |
| Cambiare un nome o un valore di proprietà | Il Nome, la Descrizione, il Tipo di oggetto o l'Etichetta di un elemento, oppure un valore di proprietà. Un valore condiviso con altri elementi viene prima copiato per lui; un valore del suo tipo cambia solo se l'assistente lo indica, perché ogni elemento di quel tipo segue | Modificare la vista e disegnare |
| Spostare, eliminare, modificare muri, porte e finestre | Gli elementi si spostano o vengono eliminati insieme a ciò che ospitano; i muri disegnati con gli strumenti {{ui:Draw}} cambiano per estremi o tipo, porte e finestre per posizione, dimensione o tipo, e locali e giunzioni seguono | Modificare la vista e disegnare |
| Impostare, disporre e leggere un abaco | "Un abaco delle porte per piano, con resistenza al fuoco e ferramenta": l'assistente dà il nome all'abaco, le sue colonne (una proprietà o un'etichetta diventa una colonna) e il suo raggruppamento; BimCraft lo compila dal modello e lo impagina, prendendo ciò che l'assistente non ha indicato dallo standard dello studio. La configurazione si aggiunge all'elenco Abachi. Ogni riga restituita indica i suoi elementi, così può selezionarli | Lettura per leggere; Modificare la vista e disegnare per salvare una configurazione |
| Esportare un abaco | CSV, Excel o testo separato da tabulazioni da incollare in Google Sheets (nulla viene inviato a Google) | Esportazione |
| Leggere e impostare le finiture dei locali | I tipi di finitura, la finitura di pavimento, parete e soffitto di ogni locale, le zone; aree, numero di piastrelle e volumi del sottofondo derivano poi dagli abachi delle finiture | Lettura; Modificare la vista e disegnare per impostarle |
| Selezionare elementi, annullare i propri passaggi | Gli elementi vengono scelti nella vista; l'ultimo passaggio viene annullato | Modificare la vista e disegnare |
| Salvare | Un nuovo file IFC con ogni modifica, come lo crea {{ui:Save as IFC}} (l'originale non viene mai modificato) | Salvataggio |
| Esportare USD | I modelli aperti in OpenUSD (.usda, .usdc o .usdz), come lo scrive {{ui:USD}} sulla barra degli strumenti | Esportazione |
| Generare un render di un'immagine, eseguire la coda di render | Un'immagine della vista 3D, come la crea la finestra {{ui:Render}} con le impostazioni di render, a meno che non ne chieda altre; oppure immagini di alta qualità aggiunte alla coda della finestra e renderizzate una dopo l'altra (la coda richiede WebGPU). Nulla del modello cambia ([Generare un render](topic:render)) | Esportazione |

Ogni modifica fatta da un assistente è un passaggio in **Modifiche**, denominato "Assistente: …" (ad esempio "Assistente: aggiungi 4 muri"), così {{key:Mod+Z}} annulla l'intera azione e si vede di chi è stato il passaggio. Nella finestra non può aprire file: si apre il modello, e l'assistente lavora su quello aperto.

## Attivarlo

Gli assistenti raggiungono BimCraft tramite CadCraft Studio sul computer; il browser normale non ha accesso.

1. Aprire {{ui:Settings}} e scegliere la scheda **BimCraft**.
2. In **Assistenti**, selezionare **Consenti agli assistenti IA e agli script di usare BimCraft**.
3. **Lettura** è già selezionata. Selezionare anche **Modificare la vista e disegnare** se l'assistente può isolare e nascondere elementi e disegnare, e **Salvataggio** se può salvare il modello come nuovo file.
4. Collegare l'assistente in Studio (Studio mostra l'indirizzo e le impostazioni da incollare nell'assistente).

## Mentre un assistente è collegato

Una nota in cima al pannello destro indica quale assistente è collegato e cosa può fare. Fare clic su {{ui:Disconnect}} per terminare subito la sua sessione; dovrà ricollegarsi per continuare.

**Attività**, sotto **Assistenti** in Impostazioni, elenca ogni chiamata fatta dall'assistente, dalla più recente, con l'esito.

:::tip
Formulare la richiesta con parole semplici, per esempio: isolare i muri esterni del piano 1, quali porte non hanno la resistenza al fuoco?, oppure disegnare un locale di 6 per 4 metri al piano 1 con una porta nel muro sud. L'assistente trova gli elementi e li mostra nella vista, oppure li disegna.
:::

## Senza finestra: script e riga di comando

Gli stessi strumenti di disegno funzionano sui file IFC nelle cartelle indicate, senza alcuna finestra aperta: il server MCP e la riga di comando di CadCraft possono creare un nuovo edificio o aprire un file IFC, descriverlo, aggiungere muri, porte, finestre, solai, piani e griglie, annullare e salvarlo come nuovo file `.ifc`. Si decide quali cartelle può usare e se può modificare o salvare qualcosa.

## Disattivarlo

Deselezionare **Consenti agli assistenti IA e agli script di usare BimCraft**. Ogni assistente viene disconnesso subito, e l'impostazione viene mantenuta per la prossima volta.

## Vedi anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che richiama.
- [Trovare elementi per classe, nome o proprietà](topic:find)
- [Nascondere, isolare e rendere trasparenti gli elementi](topic:hide-and-isolate)
- [Impostazioni di BimCraft](topic:settings)
