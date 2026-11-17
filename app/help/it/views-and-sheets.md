---
title: Viste, intervalli di vista e tavole proprie
summary: Trovare ogni pianta, prospetto, sezione, vista 3D, abaco e tavola nel browser di progetto, impostare come viene tagliata ogni pianta e cosa mostra, creare dettagli, disegnare linee e tratteggi in una sola vista, conservare le impostazioni nei modelli di vista e disporre tavole proprie.
keywords: dettaglio, pianta ingrandita, dettaglio, disegno, linee di dettaglio, linee di disegno, tratteggio, area tratteggiata, regione riempita, motivo di riempimento, pianta del soffitto riflessa, rcp, pianta del soffitto, griglia del soffitto, apparecchi di illuminazione, browser di progetto, viste, intervallo di vista, ritaglio, regione di ritaglio, vista ritagliata, scala della vista, sottofondo, mostra un altro livello, mezzatinta, piano di sezione, altezza di taglio, alto, basso, profondità della vista, visibilità, categorie, nascondi nella vista, modello di vista, modelli, tavola, tavole, cartiglio, viewport, scala, disporre tavole, layout, pdf, impostazioni della vista in pianta, browser
from: ee1d5afe
---

## Cosa farai

Lavorare come si organizzano i progetti BIM: ogni vista in un unico elenco, ogni pianta tagliata dove serve, le stesse impostazioni per più piante tramite un modello, e tavole disposte a mano.

## Il browser di progetto

1. Attivare {{ui:Disegna}}. Il pannello a sinistra ha un {{ui:Browser di progetto}} sotto i modelli.
2. Elenca:
   - **Piante dei piani**: ogni livello. Fare clic su uno per vederne la pianta. Il pulsante a cursore accanto imposta il suo intervallo di vista (più sotto). Una pianta che segue un modello mostra il nome del modello.
   - **Piante dei soffitti**: la pianta riflessa del soffitto di ogni livello (più sotto).
   - **Dettagli**: ogni dettaglio con la vista su cui è disegnato, e {{ui:Nuovo dettaglio}}. **Mancanti** elenca i dettagli la cui vista non esiste più.
   - **Prospetti** e **Sezioni**: i quattro lati e ogni linea di sezione. Fare clic su uno per aprire il set di tavole in cui è disegnato.
   - **Viste 3D**: le viste salvate con {{ui:Viste}}.
   - **Abachi**: fare clic su uno per mostrarlo sotto la pianta.
   - **Tavole**: le tavole create, {{ui:Nuova tavola}}, e {{ui:Set di tavole…}} per l'intero set ricavato dal modello.
   - **Modelli di vista**, con {{ui:Nuovo modello}}, e **Collegamenti** (i modelli collegati).

## Impostare l'intervallo di vista di una pianta

1. Fare clic sul pulsante a cursore accanto a un livello in **Piante dei piani**.
2. Impostare le altezze, sopra quel livello:
   - **Taglio a**: dove la pianta taglia muri, porte e finestre (1200 mm, circa 4 ft, se non viene modificato).
   - **Alto**: gli elementi sopra il taglio e sotto l'altezza massima sono disegnati tratteggiati (un pensile alto, una trave). Lasciare vuoto per l'altezza del livello.
   - **Basso** e **Profondità sotto Basso**: gli elementi più bassi del taglio sono disegnati con linee sottili fino al basso, e per quella distanza sotto di esso.
3. Sotto **Mostrato in questa pianta**, deselezionare ciò che la pianta esclude: arredi, locali, pilastri e così via.
4. Per escludere singoli elementi: selezionarli nella pianta o nella vista 3D, aprire la finestra e fare clic su {{ui:Nascondi qui la selezione}}. {{ui:Mostrali tutti}} li riporta.
5. Fare clic su {{ui:Usa queste impostazioni}}.

La pianta viene tagliata di nuovo subito, e il set di tavole e le tavole seguono. La fetta di una nuvola di punti segue anche l'altezza di taglio.

## Ritagliare una pianta, darle una scala, mostrare sotto un altro livello

Tutti e tre sono nella stessa finestra (il pulsante a cursore accanto a un livello):

- **Scala**: la scala con cui la pianta viene stampata ({{ui:Stampa}} sulla barra della pianta) e con cui entra in una tavola. **Adatta** sceglie la scala standard più grande che entra.
- **Regione di ritaglio**: fare clic su {{ui:Disegna sulla pianta…}}, poi fare clic su un angolo e sull'angolo opposto sulla pianta ({{key:Esc}} termina). La pianta fuori dalla regione viene velata a schermo, e ci si può comunque lavorare; in stampa, nelle tavole e nel set di tavole, la pianta mostra solo ciò che è dentro. {{ui:Cancella}} rimuove il ritaglio. {{ui:Adatta}} adatta il ritaglio.
- **Sottofondo**: scegliere un altro livello. I suoi muri, gli elementi tagliati, le porte e le finestre sono disegnati chiari sotto questa pianta, per allineare le cose con il livello sotto o sopra. Non possono essere selezionati qui, e in stampa appaiono grigio chiaro.

Un modello di vista porta la scala insieme alle altezze e alle categorie. La regione di ritaglio e il sottofondo appartengono sempre alla sola pianta.

## La pianta del soffitto di un livello

Ogni livello ha una pianta riflessa del soffitto accanto alla sua pianta: la pianta vista dal basso, per disporre i controsoffitti e ciò che vi è appeso.

1. Fare clic sul livello sotto **Piante dei soffitti** nel browser, oppure scegliere {{ui:Pianta del soffitto}} accanto al livello sulla barra della pianta.
2. I muri sono tagliati a 2300 mm (circa 7'-6"). Viene disegnato ciò che sta sopra quel taglio e sotto l'altezza del livello: controsoffitti con la loro griglia e un'etichetta di altezza (`CLG 2438`), luci, travi. Porte, finestre e ciò che sta sotto il taglio sono esclusi.
3. Per creare un controsoffitto, usare {{ui:Controsoffitto}} come nella pianta del piano, poi selezionarlo e scegliere il suo **Motivo** in Proprietà. Vedi [Locali, pavimenti, controsoffitti e coperture](topic:floors-and-roofs).
4. Per appendere una luce al soffitto, inserire l'elemento dalla libreria mentre la pianta del soffitto è mostrata: finisce in **Al soffitto**. Vedi [Posizionare attrezzature e arredi dalla libreria](topic:place-from-library).
5. Il pulsante a cursore accanto a una pianta del soffitto imposta il suo taglio e la sua altezza massima, la scala, le categorie, la regione di ritaglio e il sottofondo, come per una pianta di piano. Le piante del soffitto non accettano modelli di vista.

È disegnata nello stesso verso della pianta del piano (una pianta riflessa, non un'immagine speculare). Un soffitto più basso del taglio non viene disegnato: abbassare il taglio per la pianta del soffitto di quel livello. Le piante del soffitto vanno nelle tavole proprie come le piante; il set di tavole non le aggiunge da sé.

## Creare un dettaglio

Un dettaglio mostra una parte di una pianta più grande, alla propria scala, come vista a sé: una cucina, una scala, un angolo di muro.

1. Mostrare la pianta, la pianta del soffitto o il dettaglio a cui appartiene.
2. Scegliere {{ui:Annota}} › {{ui:Dettaglio}} sulla barra della pianta (oppure {{ui:Nuovo dettaglio}} nel browser), poi fare clic su un angolo dell'area e sull'angolo opposto. {{key:Esc}} termina.
3. Il dettaglio è creato a 1:20 (1/2" = 1'-0" in piedi e pollici). Il suo rettangolo e un'etichetta tonda vengono disegnati sulla pianta.
4. Fare clic sull'etichetta con {{ui:Seleziona}}, oppure sul dettaglio nel browser, per aprirlo: la pianta mostra solo quell'area, alla scala del dettaglio. La barra indica {{ui:Dettaglio:}} e il suo nome; {{ui:Su}} torna alla vista su cui è disegnato.
5. Il pulsante a cursore accanto (nel browser o sulla barra) rinomina il dettaglio, ne cambia la scala, ne ridisegna il rettangolo o lo elimina.

Un dettaglio mostra ciò che mostra la sua vista: stesso taglio, stesse categorie, i controsoffitti di una pianta del soffitto. Un dettaglio di un dettaglio funziona allo stesso modo. Un dettaglio va su una tavola come una pianta; la sua etichetta indica allora dove si trova (`1 / A-501`: la prima vista sulla tavola A-501). {{ui:Stampa}} in un dettaglio stampa solo quell'area alla sua scala.

Eliminare un dettaglio elimina anche i dettagli disegnati al suo interno, e le linee e i tratteggi disegnati in essi (viene chiesta conferma). Se il livello su cui è disegnato un dettaglio viene eliminato, il dettaglio resta in **Mancanti** finché non viene eliminato, e le tavole su cui si trova lo segnalano come mancante.

## Disegnare linee e tratteggi in una vista

Il disegno è lavoro 2D che appartiene a una sola vista: note in linee, un'area tratteggiata di calcestruzzo o terra, una regione riempita. Non è mai nella vista 3D né in un'altra pianta.

1. Mostrare la pianta del piano, la pianta del soffitto o il dettaglio in cui disegnare.
2. Scegliere dalla barra della pianta {{ui:Annota}}:
   - {{ui:Riga}}: fare clic dove inizia e dove finisce. La riga successiva inizia dove è finita l'ultima; {{key:Enter}} ricomincia da capo.
   - {{ui:Polilinea}}: fare clic sui suoi punti; {{key:Enter}} o un doppio clic la termina, un clic sul primo punto la chiude.
   - {{ui:Rettangolo}}: due angoli opposti.
   - {{ui:Area tratteggiata}}: scegliere il **Motivo** (Pieno, Diagonale, Incrocio, Calcestruzzo, Isolante, Terra) e la sua scala sulla barra, poi fare clic sugli angoli; {{key:Enter}}, un doppio clic o un clic sul primo angolo la chiudono. Con {{ui:Riempi un locale}} selezionato, un clic dentro un locale tratteggia il suo contorno.
3. I punti si agganciano come i muri; {{key:Shift}} mantiene una riga squadrata, e si può digitare una lunghezza come per i muri. {{key:Backspace}} toglie l'ultimo punto.

Selezionare una linea o un tratteggio con {{ui:Seleziona}} sulla pianta. Proprietà cambia il motivo e la scala di un tratteggio e ha {{ui:Sposta…}} (fare clic sul punto da cui spostare, poi su dove deve andare). {{key:Delete}} elimina. Ogni linea, tratteggio e modifica è un passaggio annullabile.

Linee e tratteggi vengono stampati con la pianta, finiscono nelle sue tavole e sono nel set di tavole. Deselezionare **Annotazioni** in un intervallo di vista per escluderli da quella vista.

## Conservare le impostazioni in un modello di vista

1. Fare clic su {{ui:Nuovo modello}} nel browser, oppure su {{ui:Salva come modello…}} nell'intervallo di vista di una pianta (quella pianta usa poi il modello).
2. Dare un nome, impostare le altezze e le categorie, e fare clic su {{ui:Salva il modello}}.
3. Nell'intervallo di vista di una pianta qualsiasi, scegliere il modello. La pianta prende le sue altezze e categorie; cambiare il modello per cambiare ogni pianta che lo usa. Gli elementi nascosti uno alla volta restano nascosti nella loro pianta.
4. Fare clic su un modello nel browser per modificarlo, rinominarlo o eliminarlo. Eliminandolo, le sue piante conservano le impostazioni come proprie.

## Disporre una tavola propria

1. Fare clic su {{ui:Nuova tavola}}. Digitare il numero e il titolo, e scegliere il formato del foglio.
2. Fare clic su {{ui:Aggiungi}} accanto a una pianta, una pianta del soffitto, un dettaglio, un prospetto, una sezione o un abaco. Finisce al centro della tavola.
3. Trascinarlo dove deve andare. Con l'elemento selezionato, scegliere una **Scala**, oppure lasciare quella della pianta (se ne ha una), altrimenti la scala che entra in un terzo della tavola. {{ui:Togli la tavola}} lo rimuove.
4. Fare clic su {{ui:Salva la tavola}}. Compare in **Tavole**; fare clic per modificarla in seguito.
5. {{ui:Scarica come PDF}} salva quella tavola come una pagina.

## Cosa si dovrebbe vedere

- Piante tagliate alle altezze impostate, con ciò che è sopra il taglio tratteggiato e ciò che è stato escluso non mostrato.
- Una pianta ritagliata velata fuori dalla regione a schermo e tagliata su di essa su carta, alla scala impostata.
- Una pianta del soffitto con le griglie dei controsoffitti, le etichette di altezza e le luci al soffitto.
- Dettagli con il rettangolo e l'etichetta sulla pianta, ognuno aperto alla propria scala.
- Linee e tratteggi solo nella vista in cui sono stati disegnati.
- Le tavole vengono ridisegnate dal modello ogni volta che si aprono, così corrispondono sempre ad esso. Una vista il cui livello o la cui linea di sezione è stata eliminata viene segnalata, non disegnata.
- Ogni modifica qui è un passaggio: {{key:Mod+Z}} lo annulla.

:::note
Tutto questo è conservato nel file IFC come set di proprietà che gli altri programmi non toccano: intervallo di vista e pianta del soffitto di ogni livello sul livello, i modelli, i dettagli e le tavole sul progetto. Linee e tratteggi sono annotazioni IFC nel loro livello, quindi gli altri programmi li vedono come curve 2D e aree tratteggiate (con il loro disegno di ogni motivo), ma non sanno a quale vista appartengono.
:::

:::tip
Altri programmi BIM chiamano il taglio intervallo di vista o piano di sezione, i modelli modelli di vista o impostazioni di vista, le linee di disegno linee di dettaglio, e le regioni tratteggiate regioni riempite. Le idee sono le stesse; le impostazioni di vista non passano a quei programmi.
:::
