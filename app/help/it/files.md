---
title: File che BimCraft apre e salva
summary: Tutti i formati che BimCraft apre, cosa conserva, cosa salva, dove vanno i file salvati e cosa cambia tra browser e quando si è offline.
keywords: formati, apri, salva, esporta, scarica, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, caricare, privacy, dimensione del file
from: a1f0161b
---

BimCraft legge i file sul computer, nella scheda del browser. **Nulla viene caricato** su CadCraft né presso altri. Quando si salva, BimCraft consegna al browser un nuovo file da scaricare; non sovrascrive mai un file aperto.

## Cosa apre

| Formato | Estensioni | Cosa si ottiene |
|---|---|---|
| IFC | `.ifc` | Il modello in 3D, i piani, il numero di elementi e le proprietà di ogni elemento. Nomi, etichette e singoli valori di proprietà possono essere modificati. |
| File di progetto e di famiglia | `.rvt` `.rfa` `.rte` `.rft` | Una scheda del file: versione, build, lavoro condiviso, informazioni di progetto, parametri di famiglia, file collegati e immagine di anteprima. Nessun 3D. |
| DWG | `.dwg` | Il disegno in 2D: spazio modello, ogni tavola, layer, disegni collegati, immagini e vista di stampa. Lo spazio modello anche in 3D. I formati da AutoCAD 2000 a 2018 sono quelli verificati. |
| DXF | `.dxf` | Lo stesso del DWG. |
| STEP | `.step` `.stp` | Una parte, un'apparecchiatura o il modello di un fornitore (AP203, AP214, AP242) in 3D: ogni solido diventa un elemento (un proxy di elemento edilizio) di un piccolo modello IFC su un piano, letto come triangoli alla dimensione reale, un assieme con ogni parte dove il file la colloca. Da lì funziona come qualsiasi IFC: proprietà, sezioni, misura, salvataggio come IFC. I colori e l'albero dell'assieme non vengono letti. |
| Nuvole di punti | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | La scansione nella vista 3D, accanto a un modello o da sola: vedere [Mostrare una nuvola di punti accanto al modello](topic:point-clouds). |
| Pacchetto di progetto | `.ccbundle.zip` | Il modello con le sue viste, i layout e i gruppi di proprietà: vedere [Aprire un pacchetto di progetto](topic:open-project-bundle). |
| Una cartella | qualsiasi | Un rapporto su ogni modello, disegno e pacchetto di progetto in essa contenuto. Qualsiasi IFC, modello, disegno o pacchetto del rapporto si apre con un clic. |

[Cosa legge BimCraft da ciascun formato](topic:file-formats) entra nei dettagli.

BimCraft stabilisce che cos'è un file guardandone i primi byte oltre al nome, quindi un file di progetto con un'estensione insolita si apre comunque come scheda del file.

### Non aperti

- `.ifczip` e `.ifcxml`: BimCraft indica ".ifczip non è ancora supportato. Salvare o esportare il modello come file .ifc semplice." Decomprimere il `.ifczip` (contiene un `.ifc` semplice) oppure esportare di nuovo come IFC semplice.
- I disegni DGN sono elencati nel rapporto di una cartella ma non si aprono.
- PDF, immagini e file di Office non si aprono da soli. Le immagini sono usate come figure dentro un DWG e {{ui:Costruzione}} › {{ui:Da un disegno…}} trasforma le pagine di un PDF o di una scansione in muri: vedere [Muri da una serie di piante](topic:walls-from-plans).

## Cosa salva

| Si fa clic su | Si ottiene | Dove |
|---|---|---|
| {{ui:Salva come IFC}} | Un nuovo file IFC con le modifiche, chiamato "*nome originale* (edited).ifc" | La cartella dei download del browser |
| {{ui:Scarica CSV}} nell'abaco delle apparecchiature | Un CSV delle voci dell'elenco, chiamato "*nome del disegno* equipment.csv" | La cartella dei download del browser |

Altre cose vengono salvate dove sono create, ciascuna nel proprio argomento: {{ui:USD}} ([Esportare il modello come USD](topic:usd)), il .glb {{ui:Per il rendering}}, le immagini renderizzate, le tavole e le piante in PDF, gli abachi e gli elenchi in CSV, le segnalazioni BCF, il foglio di calcolo COBie, i file di famiglia e le scansioni registrate in LAS o E57. BimCraft non salva DWG, DXF né file di progetto e non modifica mai i file aperti.

:::chromium
Chrome ed Edge salvano i download nella cartella impostata nelle loro impostazioni, di solito Download. Per ricevere ogni volta la richiesta di dove salvare, attivare "Chiedi dove salvare ogni file prima di scaricarlo" nelle impostazioni di download del browser.
:::

:::firefox
Firefox salva nella cartella Download, a meno che nelle sue impostazioni non si scelga "Chiedi sempre dove salvare i file".
:::

:::safari
Safari salva in Download, a meno che non si scelga un'altra cartella in **Safari > Impostazioni > Generali > Posizione download file**.
:::

## Salvare una seconda volta

Ogni salvataggio scarica l'intero modello con **tutte le modifiche dall'apertura**, non solo quelle fatte dopo l'ultimo salvataggio. L'elenco {{ui:Modifiche}} riparte vuoto dopo ogni salvataggio, quindi non si può annullare oltre un salvataggio. Per ripartire dall'originale, aprire di nuovo il file originale.

## File grandi e memoria

- I file **IFC** sono letti per intero nella memoria della scheda e la geometria 3D ne richiede ancora di più. Un modello di alcune centinaia di megabyte può essere troppo per un portatile. Oltre 1,5 milioni di triangoli gli spigoli vengono disattivati per risparmiare memoria ("Gli spigoli sono disattivati per i modelli molto grandi").
- I **file di progetto** non sono letti per intero. BimCraft legge solo le piccole parti che servono, circa da 40 KB a 100 KB qualunque sia la dimensione del file, quindi un modello centrale da 500 MB su un'unità di rete si apre in un attimo.
- I file **DWG e DXF** sono letti per intero. Un disegno molto grande mostra "Questo disegno è molto grande; ne viene mostrata solo una parte."
- Le **cartelle** fino a 20.000 file si aprono. Di ogni modello vengono letti solo i pochi kilobyte necessari alla sua scheda.

Vedere [Browser, dispositivi e memoria](topic:platforms) per altro.

## Online e offline

Aprire i file non richiede mai internet. Un lettore viene caricato dal sito la prima volta che serve: il motore IFC, la prima volta che si apre un modello IFC ("Avvio del motore IFC…"). I lettori DWG e DXF fanno parte dell'app.

:::offline
Si è offline. Se il pulsante della barra dell'app indica {{ui:Pronto per l'uso offline}}, ogni formato si apre come al solito. In caso contrario un modello IFC non si può aprire, a meno che uno non sia già stato aperto in questa scheda: ricollegarsi prima. Vedere [Online e offline](topic:online-offline).
:::

Per usare BimCraft senza connessione, fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online e attendere {{ui:Pronto per l'uso offline}}. La copia salvata è di circa 33 MB; include il motore IFC, quindi anche i modelli IFC si aprono offline. [Lavorare offline](common:offline) spiega le copie salvate in generale.

## Salvataggio nel cloud

Il salvataggio nel cloud non è ancora disponibile. Salvare le copie modificate sul proprio computer o sul file server dell'ufficio, come qualsiasi altro file. Vedere [I propri file](common:your-files).
