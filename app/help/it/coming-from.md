---
title: Dagli altri programmi BIM e di disegno
summary: Come le abitudini dei programmi BIM desktop e della visualizzazione DWG corrispondono a BimCraft, e le differenze che creano problemi.
keywords: passaggio, migrazione, familiare, BIM desktop, famiglia, parametri, browser di progetto, tavolozza proprietà, cubo di navigazione, xref, gestore layer, differenze, confronto
from: 2de629af
---

Se si conosce Revit, gran parte di BimCraft risulterà familiare nei termini e diversa nell'ambito. La differenza più importante: **questa versione legge e ispeziona i modelli e modifica i dati IFC. Non crea modelli come Revit, per ora.** Non è possibile disegnare muri, inserire famiglie, creare viste o tavole, né salvare un file di progetto. Ciò che è possibile fare è aprire quasi qualsiasi file di edificio su qualsiasi computer con un browser, vederne il contenuto, controllare un'intera cartella di progetto e correggere i dati di un modello IFC.

## Abitudini a confronto

| Se si è abituati a | In BimCraft |
|---|---|
| Aprire un `.rvt` in Revit per vedere il modello | BimCraft apre il `.rvt` come scheda del file: versione, informazioni di progetto, collegamenti, anteprima. Per il modello 3D, esportare in IFC e aprire quello. [Leggere un file di progetto o di famiglia](topic:read-rvt-file) |
| Verificare in quale versione è stato salvato un file prima di aprirlo | La scheda indica "saved in Revit …" in alto, senza aggiornare né modificare il file |
| Il Browser di progetto | Nessun browser di viste e tavole. Un modello IFC ha gli elenchi {{ui:Piani}} ed {{ui:Elementi}}; un disegno ha schede per tavola |
| La tavolozza Proprietà | Il pannello {{ui:Proprietà}} a destra, per l'elemento selezionato. Set di proprietà IFC al posto dei gruppi di parametri |
| Parametri di istanza e di tipo | Set di proprietà di istanza, e set contrassegnati con "(tipo)". Una modifica di tipo si applica a ogni elemento del tipo, come in Revit. [Modificare una proprietà di tipo per ogni elemento di un tipo](topic:type-vs-instance) |
| Modifica tipo | Nessuna finestra di dialogo: fare clic su un valore in un set "(tipo)" e digitare |
| Selezione di molti elementi, filtri, Seleziona tutte le istanze | Un elemento alla volta. Non ancora implementato |
| Il cubo di vista e la ruota di navigazione | Un cubo di navigazione nell'angolo in basso a destra, quattro pulsanti ({{ui:Adatta}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Lato}}) e orbita libera. Nessuna ruota di navigazione |
| {{key:Shift}} e trascinamento con il pulsante centrale per orbitare, trascinamento con il pulsante centrale per il pan | Trascinare con il pulsante sinistro per orbitare, con il destro (oppure {{key:Shift}} e trascinare) per il pan, la rotella per lo zoom. Lo stile menu {{ui:Barra multifunzione BIM}} passa al pan con il pulsante centrale e all'orbita con {{key:Shift}} e il pulsante centrale. [Menu, tasti e mouse](topic:menus-keys-and-mouse) |
| Piante, sezioni, box di sezione | Un solo piano di {{ui:Sezione}} alla volta ({{key:X}}); nessun box di sezione né piante 2D. [Tagliare un modello IFC con un piano di sezione](topic:section-plane) |
| Nascondere nella vista, isolare, visibilità e grafica | {{ui:Piani}} accesi e spenti, {{ui:Spazi}} e {{ui:Spigoli}}. Nessun nascondimento per singolo elemento, per ora |
| Locali | Spazi IFC, nascosti all'inizio. Fare clic su {{ui:Spazi}} |
| Salva, Salva con nome, sincronizza con il file centrale | {{ui:Salva come IFC}} scarica un nuovo file IFC. L'originale non cambia mai. Nessun file centrale, nessuna condivisione del lavoro |
| Annulla con {{key:Mod+Z}} | Funziona sulle modifiche IFC fino al salvataggio. [Modificare le proprietà IFC e salvare una copia modificata](topic:edit-ifc-properties) |
| Gestisci collegamenti | Aprire la cartella del progetto: ogni collegamento viene verificato e contrassegnato come **In questa cartella**, **Trovato con lo stesso nome**, **File di libreria** o **Non in questa cartella**. [Aprire un'intera cartella di progetto](topic:open-project-folder) |
| Verifica, oppure apertura di un file per vedere se è danneggiato | Il rapporto della cartella controlla in pochi secondi ogni copia e backup, per verificare che non siano troncati. [Verificare una cartella per copie danneggiate](topic:check-folder-health) |
| Scegliere il file giusto da una cartella disordinata | La casella {{ui:Inizia da qui}} ne suggerisce uno, con i motivi |

Se si aprono principalmente modelli per controllarli, come in un programma di verifica o visualizzazione IFC, scegliere lo stile menu {{ui:Visualizzatore}}: gli strumenti di visualizzazione e verifica vengono prima, e gli strumenti di costruzione attendono in un unico menu. Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse).

## Dalla visualizzazione di file DWG

Se si aprono DWG in AutoCAD o in un visualizzatore DWG:

| Se si è abituati a | In BimCraft |
|---|---|
| Schede Modello e layout in basso | Schede sopra il disegno: {{ui:Modello}} e una per tavola |
| ZOOM Estensione, doppio clic sulla rotella | Doppio clic, {{key:F}} oppure {{ui:Adatta}} |
| Pan con il pulsante centrale | Trascinare con qualsiasi pulsante |
| Il gestore layer | L'elenco {{ui:Layers}}: spuntare per mostrare, togliere la spunta per nascondere, {{ui:All on}} e {{ui:All off}} |
| Il gestore dei riferimenti esterni (xref) | **Disegni collegati** a destra, con **Visualizzato** o **Non trovato**, e {{ui:Aggiungi disegni collegati…}} |
| Anteprima di stampa | {{ui:Vista di stampa}} oppure {{key:P}}: nero su bianco con spessori di linea. Non stampa |
| Estrazione dati degli attributi di blocco | La scheda {{ui:Apparecchiature}} per i disegni di ristorazione con tag, con {{ui:Scarica CSV}} |
| Misurare, disegnare, modificare, salva con nome | Non in BimCraft. L'app di disegno CadCraft disegna e modifica |

## Differenze che creano problemi

- **Funziona nel browser, e il browser tratta i file con cautela.** BimCraft può leggere solo i file e le cartelle che gli vengono consegnati, scegliendoli o trascinandoli. Non può aprire un file da solo e non può salvarvi sopra. Ogni salvataggio è uno scaricamento.
- **Nulla viene caricato.** La parola "carica" che compare in alcune finestre di scelta cartella dei browser è quella del browser stesso. I file restano sul computer.
- **IFC è il formato dei modelli.** Un file di progetto si apre come scheda perché il suo contenuto 3D non è documentato. Considerare IFC il modo in cui i modelli entrano in BimCraft.
- **Le modifiche sono copy-on-write.** Cambiare il valore di un elemento non cambia mai i suoi vicini, anche quando l'esportatore ha condiviso quel valore tra loro. Le proprietà di tipo sono l'eccezione voluta.
- **Nessun progetto, nessuna vista.** BimCraft mostra un file alla volta e non ricorda nulla dopo la chiusura della scheda, tranne i nomi delle cartelle recenti in Chrome e Edge.
- **Tasti Mac.** Dove le scorciatoie di Revit per Windows usano Ctrl, quelle di BimCraft usano {{key:Mod}}: Command su Mac.
- **Le abitudini con il mouse.** L'orbita è con il pulsante sinistro, non con {{key:Shift}} e il pulsante centrale, a meno di scegliere lo stile menu {{ui:Barra multifunzione BIM}} oppure di impostare i pulsanti da sé in [Menu, tasti e mouse](topic:menus-keys-and-mouse).

Vedere [Cosa non è ancora implementato](topic:not-built-yet) per ciò che conviene usare oggi.
