---
title: Lo schermo di BimCraft
summary: Un giro di ogni barra, pannello e pulsante, con il nome che hanno sullo schermo, e come cambia lo schermo a seconda del tipo di file.
keywords: schermo, disposizione, pannelli, barra degli strumenti, interfaccia, ui, giro, pannello proprietà, browser, barra dell'app
from: 2eb01ec2
---

Lo schermo di BimCraft ha una barra in alto e tre aree sotto di essa: un pannello a sinistra, la scena al centro e il pannello {{ui:Proprietà}} a destra. Ciò che compare in ciascuna area dipende da cosa è stato aperto: un modello IFC, un file di progetto o di famiglia, un disegno o una cartella.

## La barra dell'app

La barra sottile in alto appartiene al sito CadCraft, non a BimCraft stesso. Da sinistra a destra:

- Il marchio CadCraft: porta alla home page di CadCraft.
- Il nome dell'app e un menu delle versioni. Nella build per lo staff mostra quale build è in uso e permette di passare a una versione rilasciata.
- {{ui:Informazioni su BimCraft}}: la pagina dell'app sul sito.
- {{ui:Impostazioni}}: le impostazioni di BimCraft e quelle comuni a tutte le app. Vedere [Impostazioni di BimCraft](topic:settings).
- {{ui:Schermo intero}}: passa da una modalità dello schermo all'altra. Vedere [Modalità dello schermo](topic:workspace#screen-modes) più sotto.
- {{ui:Carta}} e {{ui:Modello}}: i temi chiaro e scuro. La vista 3D e i disegni 2D seguono il tema scelto.

## Il pannello di sinistra

Il pannello di sinistra inizia sempre con **Aprire un file o una cartella**:

- L'area di rilascio, {{ui:Scegliere un file, oppure trascinare qui un file o una cartella}}. Fare clic per scegliere un file, oppure rilasciarvi sopra un file o una cartella (o in un punto qualsiasi della pagina).
- {{ui:Apri una cartella}}: scegliere un'intera cartella di progetto. Vedere [Aprire un'intera cartella di progetto](topic:open-project-folder).
- {{ui:Cartelle recenti}}: compare in Chrome ed Edge dopo aver aperto una cartella con il selettore di cartelle o trascinandola. Fare clic su {{ui:Riapri}} e sul nome della cartella per aprirla di nuovo, oppure sulla piccola × per dimenticarla.

Sotto, le sezioni compaiono a seconda del caso:

| Sezione | Quando compare | Cosa contiene |
|---|---|---|
| {{ui:Modifiche}} | È aperto un modello IFC | Le modifiche non salvate, le più recenti per prime, con {{ui:Annulla}} e {{ui:Salva come IFC}} |
| {{ui:File}} | È aperto un modello o una scheda di file | Dati sul file: dimensione, schema o versione, progetto, autore, numero di elementi |
| {{ui:Disegno}} | È aperto un DWG o DXF | Formato, unità, numero di entità e di layer, tavole, disegni collegati, apparecchiature |
| {{ui:Cartella}} | È aperta una cartella | Numero di file e di modelli, dimensione, problemi trovati |
| {{ui:Torna alla cartella}} | Si è aperto un file da una cartella | Torna al rapporto della cartella |
| {{ui:Layer}} | È aperto un disegno | Una casella per ogni layer, con {{ui:Tutti accesi}} e {{ui:Tutti spenti}} |
| {{ui:Piani}} | È aperto un modello IFC | Una casella per ogni piano, il piano più alto per primo |
| {{ui:Elementi}} | È aperto un modello IFC | Quanti elementi di ciascun tipo contiene il modello (i 30 più comuni) |

## La scena

Il centro dello schermo mostra il file aperto.

- **Vuota**: "Aprire un modello di edificio." con {{ui:Scegliere un file}} e {{ui:Apri una cartella}}, e una breve descrizione di ogni formato.
- **Modello IFC**: la vista 3D con una barra degli strumenti in alto, in gruppi con nome come quelli dell'app di disegno CadCraft, con l'icona di ogni strumento sopra il suo nome: {{ui:Vista}} ({{ui:Adatta}}, {{ui:Dall'alto}}, {{ui:Frontale}}, {{ui:Lato}}, {{ui:Spigoli}}, {{ui:Spazi}}); {{ui:Modifica}} ({{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}} e {{ui:Altro}}, vedere [Copiare, incollare e duplicare elementi della libreria](topic:copy-paste)); {{ui:Modello}} ({{ui:Unità}} e {{ui:Disegna}}); {{ui:Libreria}} ({{ui:Libreria}}, {{ui:Apparecchiature}}, {{ui:Aggiornamenti}}, {{ui:Crediti}}); {{ui:Verifica}} ({{ui:Mostra}}, {{ui:Sezione}}, {{ui:Cammina}}, {{ui:Misura}}; vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane)); e {{ui:Output}} (render, vista live, VR, esportazioni, vernice e viste salvate). Con {{ui:Disegna}} attivo, la barra Disegna sotto di essa ha lo stesso aspetto: {{ui:Vista}} (il livello e il tipo di pianta), {{ui:Disegna}}, {{ui:Modifica}} e {{ui:Libreria}}. Un cubo di navigazione si trova nell'angolo in basso a destra. Vedere [Aprire un modello IFC e guardarsi intorno in 3D](topic:open-ifc-model). {{ui:Impostazioni}}, {{ui:Generali}} sceglie se mostrare icone, etichette o entrambe su questi pulsanti, mostra o nasconde i nomi dei gruppi; facendo clic con il pulsante destro sulla barra degli strumenti si dispongono i suoi strumenti e gruppi. In una finestra bassa la barra degli strumenti toglie i nomi sotto le icone.
- **File di progetto o di famiglia**: la scheda del file, con l'immagine di anteprima, le informazioni di progetto e i file collegati. Vedere [Leggere un file di progetto o di famiglia](topic:read-rvt-file).
- **DWG o DXF**: una fila di schede ({{ui:Modello}}, poi una per ogni tavola, poi {{ui:Apparecchiature}} quando il disegno ha apparecchiature con tag, {{ui:3D}}, {{ui:Adatta}} e {{ui:Vista di stampa}}), il disegno e le coordinate X e Y in tempo reale in un angolo. Vedere [Visualizzare un disegno DWG o DXF](topic:view-dwg) e [Vedere un disegno DWG o DXF in 3D](topic:dwg-in-3d).
- **Cartella**: il rapporto della cartella, con il riquadro {{ui:Inizia da qui}} e le tabelle di modelli, collegamenti, modelli IFC e disegni. Vedere [Aprire un'intera cartella di progetto](topic:open-project-folder).

La **riga di stato** in fondo alla scena indica cosa sta facendo BimCraft ("Lettura del modello…", "Costruzione della geometria: 1200 di 5400 elementi") e cosa è andato storto, in rosso, quando qualcosa non riesce. I messaggi di esito positivo svaniscono dopo pochi secondi.

## Il pannello Proprietà

Il pannello di destra mostra:

- Per un modello IFC: l'elemento selezionato, con nome, tipo, etichetta, GlobalId e ogni set di proprietà. I valori modificabili hanno l'aspetto di pulsanti. Vedere [Campi del pannello Proprietà](topic:properties-panel).
- Per un disegno: come spostarsi, i disegni e le immagini collegati al disegno e se ciascuno è stato trovato, e un elenco di ciò che è **Non ancora disegnato**.
- Per una scheda di file o una cartella: una breve nota su cosa aprire dopo.

## Su uno schermo piccolo

Quando la finestra è più stretta dello schermo di un portatile, BimCraft impila le aree: la scena in alto, poi i pannelli sotto. Scorrere la pagina per raggiungere i pannelli. Su un telefono formano una sola colonna; su un tablet, due.

## Modalità dello schermo

Il pulsante {{ui:Schermo intero}} nella barra dell'app, oppure {{key:Ctrl+Shift+F}} su ogni piattaforma, passa da una all'altra di tre modalità:

1. Normale.
2. Schermo intero, con le barre ancora visibili.
3. Schermo intero con la barra dell'app nascosta. Portare il puntatore sul bordo superiore, oppure toccarlo, per farla riapparire.

Premere {{key:Esc}} per tornare alla modalità normale. I browser senza supporto dello schermo intero (come su un iPhone) passano solo tra normale e barre nascoste.

## Argomenti correlati

- [Tasti e mouse](topic:keyboard)
- [File che BimCraft apre e salva](topic:files)
