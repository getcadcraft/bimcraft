---
title: Aprire un modello IFC e guardarsi attorno in 3D
summary: Aprire un file IFC, ruotare, spostare e ingrandire, e usare Adatta, Sopra, Anteriore e Lato per orientarsi.
keywords: ifc, 3d, orbita, pan, zoom, adatta, vista dall'alto, vista frontale, vista laterale, navigare, viewcube, camera
from: 68b460dd
---

## Obiettivo

Aprire un modello IFC, muoversi in 3D e passare alle viste standard. Circa cinque minuti.

Serve un file `.ifc`. La maggior parte dei programmi BIM ne esporta uno; in Revit è **File > Export > IFC**. Vedi [Portare un file di progetto in 3D tramite IFC](topic:rvt-to-ifc).

## Passaggi

1. Fare clic su {{ui:Scegliere un file}} (o sull'area di trascinamento in alto a sinistra).
2. Scegliere il file `.ifc` e confermare.
3. Attendere che la riga di stato finisca. Mostra "Avvio del motore IFC…" la prima volta, poi "Lettura del modello…" e "Costruzione della geometria: … di … elementi".
4. Osservare il modello: si apre in una vista a tre quarti, adattato allo schermo.
5. Fare clic su {{ui:Sopra}} nella barra degli strumenti sopra il modello per guardare dall'alto.
6. Fare clic su {{ui:Anteriore}} per guardare il fronte, poi su {{ui:Lato}} per guardare dal lato.
7. Fare clic su {{ui:Adatta}}, oppure premere {{key:F}}, per tornare alla vista a tre quarti dell'intero modello.

## Cosa si dovrebbe vedere

- Il modello al centro, con bordi scuri sottili per un aspetto da disegno.
- Il pannello {{ui:File}} a sinistra: il nome del file, la dimensione, lo schema IFC (per esempio IFC2X3 o IFC4), il nome del progetto, la fase, il programma da cui è stato esportato, l'autore, la data di esportazione e i conteggi di elementi e triangoli.
- Gli elenchi {{ui:Piani}} ed {{ui:Elementi}} sotto di esso.
- La riga di stato: "Aperto *nome file*: *n* elementi in *s* s".

## Muoversi

:::mouse
| Per | Fare questo |
|---|---|
| Ruotare | Trascinare con il pulsante sinistro |
| Spostare | Trascinare con il pulsante destro, oppure tenere premuto {{key:Shift}} (o {{key:Mod}}) e trascinare con il pulsante sinistro |
| Ingrandire | Girare la rotella, oppure trascinare con il pulsante centrale |
| Vedere tutto | Premere {{key:F}} o fare clic su {{ui:Adatta}} |
:::

:::mac mouse
Con il trackpad: trascinare con un dito premuto per ruotare; tenere premuto {{key:Shift}} o {{key:Mod}} e trascinare per spostare; scorrere con due dita o pizzicare per ingrandire. Un clic con due dita è un clic destro, e si può trascinare con esso per spostare, ma {{key:Shift}} e trascinamento è più semplice.
:::

:::touch
| Per | Fare questo |
|---|---|
| Ruotare | Trascinare con un dito |
| Ingrandire | Pizzicare con due dita |
| Spostare | Muovere insieme due dita |
| Vedere tutto | Toccare {{ui:Adatta}} |
:::

La rotazione avviene sempre attorno a un punto al centro del modello. Lo spostamento sposta quel punto, quindi dopo uno spostamento lungo la rotazione può sembrare fuori centro: fare clic su {{ui:Adatta}} per reimpostarla.

## Ombreggiato, spigoli o wireframe

Tre piccoli pulsanti sopra il cubo di navigazione scelgono come è disegnato il modello: {{ui:Ombreggiato}}, {{ui:Ombreggiato con spigoli}} (il predefinito) e {{ui:Wireframe}}. Sono anche comandi (Vista nei menu e nell'elenco Personalizza), quindi possono avere tasti propri. {{ui:Pianta}}, {{ui:Dividi}} e {{ui:3D}} sono nella riga {{ui:Vista}} della barra degli strumenti.

## Errori comuni

- **Aspettarsi viste con nome.** BimCraft ha quattro viste fisse ({{ui:Adatta}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Lato}}), il cubo di navigazione nell'angolo in basso a destra e la rotazione libera. Non salva le viste.
- **Cercare piante e sezioni.** In questa versione non ci sono piante 2D né box di sezione. Tagliare il modello con un solo piano di {{ui:Sezione}} ([Tagliare un modello IFC con un piano di sezione](topic:section-plane)), oppure spegnere i piani: [Mostrare e nascondere piani, spazi e spigoli](topic:storeys-and-spaces).
- **Aprire un file di progetto e aspettarsi il 3D.** Un file di progetto si apre come una scheda file. Esportare prima l'IFC.
- **Aprire un `.ifczip`.** Decomprimerlo, oppure esportare un `.ifc` semplice.
- **Un modello molto grande rallenta la scheda o la fa bloccare.** Vedi [Browser, dispositivi e memoria](topic:platforms).

## Avanti

[Scegliere un elemento e leggerne le proprietà](topic:inspect-element).
