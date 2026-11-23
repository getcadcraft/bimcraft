---
title: Portare nella Libreria oggetti e file di famiglia propri
summary: Leggere i file di famiglia (.rfa) e i file IFC, DWG, DXF, glTF o OBJ nella scheda Libreria, posizionarli come qualsiasi elemento della libreria e conservarli in I miei oggetti, un elenco privato visibile solo a chi lo ha creato.
keywords: rfa, famiglia, famiglie, libreria di famiglie, oggetti propri, i miei oggetti, oggetti privati, libreria privata, importa oggetti, contenuti del costruttore, oggetti BIM, oggetto ifc, gltf, obj, blocco dwg, conserva, passa, migra
from: 886261f8
---

## Che cosa si fa

Portare in BimCraft gli oggetti già disponibili: una libreria di famiglie da Revit, un download IFC o DWG di un costruttore, una mesh da un altro modellatore. Si legge il file nella scheda {{ui:Libreria}}, si posiziona l'oggetto nel modello come vero elemento IFC e, se lo si vuole riutilizzare in seguito, lo si conserva in {{ui:I miei oggetti}}.

## Passi

1. Aprire un modello IFC, oppure iniziare un nuovo edificio.
2. Cliccare la scheda {{ui:Libreria}} accanto a {{ui:Proprietà}}.
3. Cliccare {{ui:File…}}, poi {{ui:Scegliere un file…}}. Scegliere un file o più file insieme: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. Oppure cliccare {{ui:Scegli una cartella…}} per leggere un'intera cartella e le cartelle al suo interno (fino a 200 file in una volta).
4. Cliccare una scheda per vedere che cosa è stato letto: l'anteprima in pianta, il nome, il costruttore e il modello, le dimensioni e le note.
5. Cliccare {{ui:Posiziona nel piano}} o {{ui:Posiziona nel modello}} per posizionarlo.
6. Per riutilizzarlo in altri progetti, cliccare {{ui:Conserva in I miei oggetti}}. Con più file letti, {{ui:Conserva tutto in I miei oggetti}} li conserva in una volta.
7. Più tardi, cliccare {{ui:I miei oggetti}} nella scheda Libreria per trovarli. Si posizionano, si sostituiscono e si aggiornano come qualsiasi elemento della libreria.

I file vengono letti in questa scheda. Nulla viene caricato finché non si sceglie {{ui:Conserva in I miei oggetti}}.

## Che cosa si legge da ogni tipo di file

| File | Che cosa si ottiene |
|---|---|
| IFC | Ogni tipo di elemento come oggetto con la sua vera forma 3D, la classe IFC e i set di proprietà |
| glTF, GLB, OBJ | Un oggetto con la sua vera forma 3D come mesh. Impostare prima le unità e quale direzione è verso l'alto. |
| DWG, DXF | Ogni blocco come oggetto con il suo disegno in pianta e i suoi attributi |
| File di famiglia (`.rfa`) | Il nome della famiglia, la categoria, il costruttore, il modello, i parametri e i suoi tipi. **Non la sua forma 3D:** al suo posto sta un parallelepipedo con Larghezza, Profondità e Altezza della famiglia. |
| CSV | Un oggetto per riga: nome, dimensioni e dati, disegnato come parallelepipedo |

## File di famiglia e la loro forma 3D

La forma 3D dentro un file `.rfa` è memorizzata in un formato non documentato, quindi BimCraft legge i dati della famiglia e non ne indovina la geometria. La scheda lo dice: "Geometria non letta da questa famiglia; al suo posto un parallelepipedo."

Per portare una famiglia con la sua forma reale, esportarla dal programma che l'ha creata (Revit):

1. Aprire la famiglia, oppure un progetto con la famiglia inserita.
2. Scegliere **File > Esporta > IFC**. Si veda [le impostazioni di esportazione che funzionano meglio qui](topic:rvt-to-ifc).
3. In BimCraft, leggere il file `.ifc` con {{ui:File…}}. Ogni tipo di famiglia arriva come oggetto proprio, con la sua forma e i set di proprietà.

Molti costruttori offrono un download IFC o DWG accanto al file di famiglia. Quelli si leggono direttamente.

## Tipi di famiglia

Una famiglia con più tipi arriva come un unico elemento con una scelta {{ui:Variante}}, una variante per tipo. Ogni variante ha i valori che differiscono tra i tipi e il proprio parallelepipedo quando il tipo ha una Larghezza e una Profondità. Una famiglia con un solo tipo è un elemento semplice, riempito con i valori di quel tipo.

Alcune famiglie tengono i tipi in un catalogo: un file `.txt` con lo stesso nome accanto al file di famiglia. Scegliere entrambi insieme, oppure scegliere la cartella, e le righe del catalogo diventano le varianti.

## Dati di una famiglia su una forma reale

Se una cartella contiene un file di famiglia e un file IFC, glTF o OBJ con lo stesso nome (`Chair.rfa` e `Chair.ifc`), sceglierli insieme oppure scegliere la cartella. BimCraft crea un unico elemento: il file di famiglia fornisce nome, costruttore, modello, parametri e tipi, e l'altro file fornisce la vera forma 3D. Le note indicano da quale file proviene la forma. Una sola forma viene usata per ogni tipo.

Quando un file di famiglia contiene un'immagine salvata, i dettagli dell'elemento mostrano quell'immagine sotto il disegno in pianta. L'immagine viene mostrata solo lì; non viene conservata con l'elemento.

## I miei oggetti

{{ui:I miei oggetti}} è l'elenco privato nella Libreria. Solo chi lo ha creato vede che cosa contiene: non è nella libreria pubblica, non nella ricerca e non è mostrato al team. Segue l'account, quindi gli stessi oggetti si trovano su un altro computer dopo l'accesso alla libreria.

- Per conservare un oggetto occorre essere connessi alla libreria. Si veda [accedere alla libreria](topic:library-credits).
- Conservare un oggetto invia quel solo oggetto all'account. Finché non lo si fa, resta sul computer.
- {{ui:Rimuovi da I miei oggetti}} toglie un oggetto dall'elenco. Le copie già posizionate nei disegni restano.
- Per condividere un oggetto con tutti, caricarlo nella libreria pubblica, sotto una licenza scelta.

:::note
I miei oggetti è in fase di prova e potrebbe non essere ancora aperto per questo account. Se la fonte manca, oppure compare "I miei oggetti non è ancora aperto per questo account", si possono comunque leggere e posizionare i file propri con {{ui:File…}}; sono salvati all'interno del modello.
:::

## Errori comuni

- **Aspettarsi la vera forma della famiglia da un `.rfa`.** Si leggono solo i dati. Esportare IFC per la forma.
- **Due elementi dove ci si aspettava uno.** Una famiglia e il suo file di forma si uniscono solo quando i nomi coincidono esattamente, a parte la terminazione, e stanno nella stessa cartella.
- **Una mesh arriva mille volte troppo grande o coricata.** Impostare {{ui:Unità del file}} e {{ui:Asse verticale di una mesh}} in {{ui:File…}} prima di scegliere il file.
- **"Nessun dato di famiglia" su un file.** È un progetto (`.rvt` salvato con un'altra estensione) o un modello di famiglia, non una famiglia. Si veda [Leggere un file di progetto o di famiglia](topic:read-rvt-file).
- **Conservare contenuti che non si ha il diritto di memorizzare.** Alcune librerie a pagamento non consentono copie al di fuori del loro servizio. Verificare le condizioni dei contenuti non creati in proprio.
