---
title: File che BimCraft apre e salva
summary: Ogni formato che BimCraft apre, cosa conserva, cosa salva, dove finiscono i file salvati e cosa cambia tra browser e quando si è offline.
keywords: formati, apri, salva, esporta, scarica, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, carica, privacy, dimensione file
from: a7275dbf
---

BimCraft legge i file sul computer, nella scheda del browser. **Nulla viene caricato** su CadCraft o su altri. Quando si salva, BimCraft consegna al browser un nuovo file da scaricare; non sovrascrive mai un file aperto.

## Cosa apre

| Formato | Estensioni | Cosa si ottiene |
|---|---|---|
| IFC | `.ifc` | Il modello in 3D, i piani, il conteggio degli elementi e le proprietà di ogni elemento. Nomi, tag e singoli valori delle proprietà possono essere modificati. |
| File di progetto e di famiglia | `.rvt` `.rfa` `.rte` `.rft` | Una scheda del file: rilascio, build, lavoro condiviso, informazioni di progetto, parametri di famiglia, file collegati e l'immagine di anteprima. Nessun 3D. |
| DWG | `.dwg` | Il disegno in 2D: spazio modello, ogni tavola, layer, disegni collegati, immagini e vista di stampa. Anche lo spazio modello in 3D. Sono verificati i formati da AutoCAD 2000 a 2018. |
| DXF | `.dxf` | Come DWG. |
| STEP | `.step` `.stp` | Un componente, un pezzo di attrezzatura o il modello di un fornitore (AP203, AP214, AP242) in 3D: ogni solido diventa un elemento (un proxy di elemento edilizio) di un piccolo modello IFC su un unico piano, letto come triangoli alla sua vera dimensione, un assieme con ogni parte dove il file la colloca. Da lì funziona come qualsiasi IFC: proprietà, sezioni, misura, salva come IFC. Colori e albero dell'assieme non vengono letti. |
| Nuvole di punti | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | La scansione nella vista 3D, accanto a un modello o da sola: vedi [Mostrare una nuvola di punti accanto al modello](topic:point-clouds). |
| Pacchetto di progetto | `.ccbundle.zip` | Il modello con le sue viste, i layout e i gruppi di proprietà: vedi [Aprire un pacchetto di progetto](topic:open-project-bundle). |
| Una cartella | qualsiasi | Un rapporto su ogni modello, disegno e pacchetto di progetto che contiene. Ogni IFC, modello, disegno o pacchetto nel rapporto si apre con un clic. |

[Cosa legge BimCraft da ogni formato](topic:file-formats) entra nel dettaglio.

BimCraft stabilisce che tipo di file è guardando i primi byte oltre al nome, quindi un file di progetto con un'estensione insolita si apre comunque come scheda del file.

### Non aperti

- `.ifczip` e `.ifcxml`: BimCraft segnala ".ifczip non è ancora supportato. Salvare o esportare il modello come file .ifc semplice." Decomprimere il `.ifczip` (contiene un `.ifc` semplice) o esportare di nuovo come IFC semplice.
- I disegni DGN sono elencati in un rapporto di cartella ma non si aprono.
- PDF, immagini e file di Office non si aprono da soli. Le immagini sono usate come immagini all'interno di un DWG, e {{ui:Build}} › {{ui:Da un disegno…}} trasforma le pagine di un PDF o di una scansione in muri: vedi [Muri da una serie di piante](topic:walls-from-plans).

## Cosa salva

| Si fa clic su | Si ottiene | Dove |
|---|---|---|
| {{ui:Salva come IFC}} | Un nuovo file IFC con le modifiche, chiamato "*nome originale* (modificato).ifc" | La cartella Download del browser |
| {{ui:Scarica CSV}} nell'abaco delle attrezzature | Un CSV degli elementi nell'elenco, chiamato "*nome disegno* equipment.csv" | La cartella Download del browser |

Altre cose vengono salvate dove sono create, ciascuna nel proprio argomento: {{ui:USD}} ([Esportare il modello come USD](topic:usd)), {{ui:Collada}} ([Esportare il modello come Collada o per Google Earth](topic:collada)), il .glb {{ui:Per il rendering}}, le immagini di render, tavole e piante in PDF, abachi ed elenchi in CSV, segnalazioni BCF, il foglio di calcolo COBie, i file di famiglia e le scansioni registrate come LAS o E57. BimCraft non salva DWG, DXF o file di progetto, e non modifica mai i file aperti.

:::chromium
Chrome ed Edge salvano i download nella cartella impostata nelle loro impostazioni, di solito Download. Per essere chiesti dove salvare ogni file, attivare "Chiedi dove salvare ogni file prima del download" nelle impostazioni di download del browser.
:::

:::firefox
Firefox salva nella cartella Download, a meno che non sia impostato su "Chiedi sempre dove salvare i file" nelle sue impostazioni.
:::

:::safari
Safari salva in Download, a meno che non si scelga un'altra cartella in **Safari > Impostazioni > Generali > Posizione download file**.
:::

## Salvare una seconda volta

Ogni salvataggio scarica l'intero modello con **ogni modifica dall'apertura**, non solo le modifiche fatte dopo l'ultimo salvataggio. L'elenco {{ui:Modifiche}} si svuota di nuovo dopo ogni salvataggio, quindi non è possibile annullare oltre un salvataggio. Per ripartire dall'originale, aprire di nuovo il file originale.

## File grandi e memoria

- I file **IFC** vengono letti per intero nella memoria della scheda, e la geometria 3D occupa altra memoria. Un modello di alcune centinaia di megabyte può essere troppo per un portatile. Oltre 1.5 milioni di triangoli, gli spigoli vengono disattivati per risparmiare memoria ("Spigoli disattivati per modelli molto grandi").
- I **file di progetto** non vengono letti per intero. BimCraft legge solo le piccole parti che servono, da circa 40 KB a 100 KB qualunque sia la dimensione del file, quindi un modello centrale da 500 MB su un'unità di rete si apre in un attimo.
- I file **DWG** e **DXF** vengono letti per intero. Un disegno molto grande mostra "Questo disegno è molto grande; ne viene mostrata solo una parte."
- Le **cartelle** fino a 20,000 file si aprono. Vengono letti solo i pochi kilobyte necessari a ogni scheda del modello.

Vedi [Browser, dispositivi e memoria](topic:platforms) per saperne di più.

## Online e offline

Aprire i file non richiede mai la connessione a internet. Un lettore viene caricato dal sito la prima volta che serve: il motore IFC, la prima volta che si apre un modello IFC ("Avvio del motore IFC…"). I lettori DWG e DXF fanno parte dell'app.

:::offline
Non si è connessi. Se il pulsante della barra dell'app dice {{ui:Pronto per l'uso offline}}, ogni formato si apre come di consueto. In caso contrario, un modello IFC non può aprirsi, a meno che non ne sia già stato aperto uno in questa scheda: ricollegarsi prima. Vedi [Online e offline](topic:online-offline).
:::

Per usare BimCraft senza connessione, fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online e attendere {{ui:Pronto per l'uso offline}}. La copia salvata occupa circa 33 MB; include il motore IFC, quindi anche i modelli IFC si aprono offline. [Lavorare offline](common:offline) spiega in generale le copie salvate.

## Salvataggio nel cloud

Il salvataggio nel cloud non è ancora disponibile. Salvare le copie modificate sul proprio computer o sul server di file dell'ufficio, come per qualsiasi altro file. Vedi [I tuoi file](common:your-files).
