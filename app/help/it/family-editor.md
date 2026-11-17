---
title: Modificare una famiglia
summary: Cambiare parametri, formule e solidi di una famiglia, mostrare parti tramite un parametro Sì / No, tagliare e unire solidi, dare alla famiglia dei connettori per tubi e canali, e vedere il risultato disegnato dall'IFC che verrà salvato.
keywords: editor famiglia, modifica famiglia, parametro, parametri, formula, formule, visibilità, sì no, solido, solidi, box, estrusione, estrudi, rivoluzione, sweep, profilo, arco, booleana, booleane, taglia, unisci, differenza, unione, maniglia, maniglie, piano di lavoro, schizzo, nuova famiglia, connettore, connettori, punto di connessione, connettore di tubazione, connettore di canale, scarico, alimentazione idrica
from: 1ab31c10
---

## Aprire l'editor

Aprire una famiglia (il gruppo **Famiglie** del browser di progetto, oppure {{ui:Build}} › {{ui:Famiglie…}}) e fare clic su {{ui:Modifica la famiglia}}. Per partire da zero, fare clic su {{ui:Nuova famiglia}}: dare un nome, indicare cos'è (una porta, una finestra, un arredo, un apparecchio o altro) e, per una porta o una finestra, da quale partenza provengono il suo simbolo in pianta e la sua maniglia. L'editor si apre su una famiglia con alcuni parametri e un solido.

Modificare una famiglia di partenza mantiene le modifiche solo in questo modello. Gli altri modelli mantengono la partenza così com'è.

Nulla nel modello cambia finché non si fa clic su {{ui:Salva la famiglia}}. L'editor ha il proprio annulla e ripristina (i pulsanti freccia accanto al nome, oppure {{key:Mod+Z}} e {{key:Mod+Y}}); il salvataggio è un solo passo nell'annulla del modello.

## Parametri

La scheda {{ui:Parametri}} elenca i parametri della famiglia: un nome, un tipo e un valore predefinito. I tipi: **Lunghezza** (millimetri), **Angolo** (gradi), **Numero**, **Numero intero**, **Sì / No**, **Penna** (1–16), e tre che contengono parole invece di numeri: **Testo**, **Materiale** (uno dei materiali del progetto) e **Riempimento** (un riempimento di pianta). Le parole non si usano nelle formule; colorano un solido (il suo **Materiale**), riempiono una parte di simbolo, oppure vengono stampate come `{Nome}` nel testo di un simbolo. La casella **Per elemento** rende il parametro qualcosa che ogni elemento posizionato imposta per sé, invece che per la sua dimensione.

- Una **formula** fa seguire ad un parametro altri, per esempio `Width / 30` oppure `if(Width > 1200, 2, 1)`. Le lunghezze nelle formule sono in millimetri, oppure si scrive un'unità: `3'`, `6in`, `50cm`.
- Rinominare un parametro lo rinomina in ogni formula e campo che lo usa. Un parametro ancora in uso non si può rimuovere.
- Il **Materiale** di un solido prende il colore di un materiale del progetto (o di un parametro Materiale), **Visibile a** lo nasconde alle scale di dettaglio più grossolane, e **Ripeti** crea copie: un numero (un numero o un parametro intero da 1 a 200) e il passo tra esse in x, y e z. Un solido ripetuto è una fila di tavole, barre o fori; usato in un taglio, le copie vengono tagliate insieme.
- Una famiglia di porta o finestra riceve anche due nomi dal suo muro: `WallThickness` e `Face` (1 o −1, il lato verso cui si apre la porta).

## Solidi

La scheda {{ui:Solidi}} elenca i solidi. Aggiungere un box, un'estrusione, una rivoluzione o uno sweep:

| Solido | Cosa si imposta |
|---|---|
| Box | i suoi due angoli: x0 a x1, y0 a y1, z0 a z1 |
| Estrusione | un profilo su un piano di lavoro (pianta, prospetto o lato), dove si trova il piano e una profondità |
| Rivoluzione | un profilo, un asse sul piano e un angolo fino a 360° |
| Sweep | un percorso di punti e un raggio (un'asta o un corrimano) |

Ogni numero può essere un numero digitato o un'espressione dei parametri. Ogni solido ha un colore e **Visibile quando**: lasciarlo vuoto per mostrarlo sempre, oppure indicare un parametro Sì / No (o scrivere un confronto come `Shelves >= 3`) per mostrarlo solo in quel caso. È un parametro di visibilità.

### Disegnare un profilo

Il profilo di un'estrusione o di una rivoluzione si disegna sul suo piano di lavoro sotto l'anteprima:

- Fare clic sul foglio per aggiungere un punto dopo quello selezionato.
- Trascinare un punto per spostarlo. I punti si agganciano alla griglia; tenere premuto {{key:Shift}} per posizionarli liberamente.
- Fare clic su un piccolo quadrato di un segmento per aggiungere lì un punto. {{key:Shift}}+clic su di esso per rendere quel segmento un arco (fare clic di nuovo per l'altro verso, poi diritto).
- Fare doppio clic su un punto per rimuoverlo.

I punti cavi sono impostati da parametri: modificarli nella tabella, non trascinandoli.

## Booleane

La scheda {{ui:Booleane}} taglia il secondo solido dal primo, oppure li unisce. Il risultato di una booleana può essere tagliato o unito di nuovo. Un solido usato in una booleana viene disegnato solo come sua parte.

Quando il secondo solido è nascosto dal suo parametro Sì / No, il primo viene mantenuto così com'è; quando il primo è nascosto, anche il risultato è nascosto.

## Simbolo in pianta

La scheda {{ui:Simbolo in pianta}} disegna ciò che la pianta mostra per questa famiglia al posto del taglio dei suoi solidi: linee, rettangoli, cerchi, archi, poligoni e testo, sugli assi propri della famiglia. Ogni parte ha una **penna** (1–16, un'espressione o un parametro Penna), un **riempimento** (nessuno, pieno, diagonale, incrociato, calcestruzzo, isolante, terra, oppure un parametro Riempimento), un'espressione **mostrato da**, un **intervallo di taglio** in millimetri sopra la sua base (una parte è disegnata a peso pieno quando il taglio della pianta cade al suo interno, sottile sotto, tratteggiata sopra: un mobile sopra il taglio appare tratteggiato), un livello di dettaglio e una ripetizione. Il testo può indicare parametri come `{Nome}`. **La pianta mostra: il taglio dei solidi** mantiene la pianta che taglia i solidi mentre il simbolo resta nella famiglia. Gli altri programmi leggono il simbolo come impronta della famiglia (linee e forme; il testo resta in BimCraft).

## Famiglie interne

La scheda {{ui:Famiglie interne}} mette un'altra famiglia dentro questa: una gamba in un tavolo, una maniglia su una porta. Scegliere la famiglia, poi dove va (x, y, z), di quanto è ruotata (solo quarti di giro: 0, 90, 180, 270), quando è mostrata, e i valori che riceve, uno per riga come `Height = Height - 40`. Salvando la famiglia interna, questa viene ridisegnata; una famiglia tenuta da un'altra non può essere eliminata; una famiglia non può contenere se stessa, nemmeno tramite un'altra, e l'annidamento si ferma a quattro livelli.

## Hotspot

Un hotspot è un punto o uno spigolo che si trascina per cambiare un parametro. Nella scheda {{ui:Hotspot}} aggiungerne uno, scegliere l'asse lungo cui trascina e il parametro numerico che cambia, e scrivere la sua posizione con le stesse espressioni dei solidi. Nell'anteprima, scegliere **Hotspot** sotto le maniglie per trascinarli. Su un elemento posizionato nella pianta (selezionarlo con {{ui:Seleziona}}) gli hotspot x e y compaiono come grip: trascinandone uno, l'elemento assume la dimensione che porta l'hotspot lì, attraverso le formule intermedie; un Annulla lo riporta indietro. Un hotspot non può cambiare un parametro pilotato, un Sì / No o una parola.

Nella vista 3D gli stessi hotspot compaiono come grip sull'elemento selezionato, e anche quelli su-giù (asse z) compaiono lì, cosa che la pianta non può disegnare. Selezionare l'elemento, trascinare un grip lungo il suo asse e rilasciare: l'elemento assume la dimensione che porta l'hotspot lì, come un solo passo di annullamento. I grip sono nascosti mentre il riquadro di sezione è attivo, perché usa gli stessi grip.

## Connettori

Le famiglie posizionate a pavimento (arredi, apparecchi e altre) hanno una scheda {{ui:Connettori}}: i punti dove una tubazione o un canale si collega all'elemento, come il rubinetto e lo scarico di un lavabo. Fare clic su {{ui:Aggiungi un connettore}} e impostare:

- **Tipo**: tubazione o canale, e il suo **Sistema** (acqua fredda, scarico sanitario, aria di mandata…).
- **x**, **y** e **z**: dove si trova, negli assi propri della famiglia. Come i numeri di un solido, ciascuno può essere un numero o una formula dei parametri, così il connettore si sposta con la dimensione.
- **Uscita**: la direzione in cui una tubazione o un canale esce, lungo uno degli assi della famiglia (uno scarico sotto un lavabo è **Giù**).
- **Dimensione (mm)**: la dimensione nominale della tubazione (DN) o il diametro del canale circolare.
- **Flusso**: **In** per un connettore alimentato (un rubinetto), **Out** per uno che scarica.

L'anteprima disegna ogni connettore come un anello con una freccia nella direzione di uscita. Porte e finestre non hanno connettori.

Per un apparecchio idraulico, scegliere quale è sotto **Apparecchio idraulico** (vaso, lavabo, lavello da cucina, doccia, lavatoio). Gli apparecchi di partenza lo indicano già.

Ogni elemento posizionato dalla famiglia riceve i suoi connettori come punti di connessione nel file IFC, e vengono ricreati quando l'elemento cambia dimensione o la famiglia viene salvata. I programmi che leggono i sistemi IFC vedono dove appartiene ogni tubazione o canale.

## L'anteprima e le sue maniglie

L'anteprima è la famiglia scritta come IFC, dallo stesso codice che la salva nel modello, e riletta. Ciò che si vede è ciò che ricevono gli altri programmi. Sotto di essa, **Dimensione mostrata** imposta i valori dei parametri usati dall'anteprima.

Le **maniglie** sono punti sull'anteprima: **La dimensione** mostra una maniglia per Width, Depth e Height; **Il solido selezionato** ne mostra una su ogni faccia del solido scelto. Trascinare una maniglia:

- su una faccia impostata da un parametro, cambia la dimensione mostrata (le formule della famiglia vengono mantenute);
- su una faccia impostata da un numero digitato, cambia il numero.

## Salvataggio

{{ui:Salva la famiglia}} controlla la famiglia, poi ridisegna ogni sua dimensione e ricrea ogni suo elemento, come un solo passo annullabile. Se una dimensione non può essere disegnata con la modifica (per esempio un solido non avrebbe larghezza a quella dimensione), nulla viene salvato e l'editor indica quale dimensione.

Se qualcun altro ha salvato la stessa famiglia mentre l'editor era aperto (in una sessione Live TeamWork, o in un'altra finestra), {{ui:Salva la famiglia}} rifiuta e lo dice, invece di sostituire la sua modifica con la propria. Chiudere l'editor, riaprire la famiglia per vedere la sua modifica, e rifare la propria.

:::note
La geometria viene salvata come solidi propri di IFC: estrusioni, rivoluzioni, dischi lungo un percorso e risultati di booleane. Nulla viene trasformato in un elenco di triangoli, così i file restano piccoli e gli altri programmi leggono le forme come forme. I profili con archi vengono salvati con archi in IFC4; IFC2X3 non ha segmenti d'arco in un profilo, quindi lì gli archi vengono salvati come brevi tratti dritti.
:::

Vedi anche [Famiglie e relative dimensioni](topic:families).
