---
title: La tavolozza dei simboli
summary: Trovare simboli elettrici e idraulici per nome o immagine, contrassegnare con la stella quelli che si usano e posizionarli sulla pianta con un clic.
keywords: tavolozza simboli, pulsante barra simboli, il muro segue, simboli, simboli elettrici, simboli idraulici, pianta idraulica, water closet, vaso, lavabo, lavello, vasca, doccia, scarico a pavimento, ispezione, attacco per tubo, scaldabagno, valvola, saracinesca, acqua fredda, acqua calda, scarico, sfiato, stile di linea, preferiti, ricerca
from: 67f20bc0
---

## Cosa si fa

Aprire un unico pannello che elenca i simboli elettrici e i simboli della pianta idraulica con le loro immagini e i loro nomi, trovare quello che serve e posizionarlo sulla pianta. Nulla qui richiede internet: i simboli sono forniti con l'app.

## Aprire e posizionare un simbolo

1. Aprire un modello e aprire {{ui:Build}} › {{ui:Tavolozza simboli}} (comando digitato: SYMBOLS). Lo stesso pulsante è nel menu Strumenti della barra Disegna, e come **Simboli** nel gruppo Libreria della barra degli strumenti.
2. Scegliere un insieme: **Elettrico** o **Idraulico**, oppure **Tutti gli insiemi**. Digitare nella casella di ricerca per restringere l'elenco. Si può cercare per nome o per abbreviazione (WC, CW, HB).
3. Fare clic su un simbolo. La pianta è pronta a posizionarlo.
   - Un simbolo **elettrico** avvia lo strumento Elettrico con quel dispositivo scelto, quindi tutto ciò che si trova in [Il piano elettrico](topic:electrical-plan) si applica: fare clic sulla pianta, un unico passo di annullamento.
   - Un simbolo **idraulico** avvia lo strumento simbolo di pianta. Fare clic sulla pianta. Un apparecchio montato a parete (un vaso, un lavabo, una vasca, un lavello, un attacco per tubo) si aggancia alla faccia del muro più vicina con il retro contro il muro; scarichi, valvole, lo scaldabagno e gli stili di linea vanno dove si fa clic.
4. Premere {{key:R}} per ruotare il simbolo di 90 gradi ({{key:Shift}}+{{key:R}} lo ruota nell'altro verso), oppure digitare un angolo in **Rotazione** nella barra delle opzioni. Premere {{key:Esc}} per fermarsi.

Un apparecchio o un attacco per tubo agganciato a una faccia di muro ricorda quel muro: quando il muro si sposta, il simbolo si sposta con esso (stessa faccia, stessa distanza lungo il muro) nello stesso passo di annullamento. Se si elimina il muro, il simbolo resta dov'era e **Problemi** elenca "ha perso il suo muro"; spostarlo o eliminarlo. I simboli posizionati lontano dai muri non sono legati a nulla.

Ogni simbolo posizionato è un passo di annullamento. Un simbolo posizionato è un'annotazione di pianta nel file IFC, con il suo tag (WC1, WC2, ...). Selezionarlo per cambiarne tag o rotazione in **Proprietà**, oppure premere {{key:Delete}}.

## Cosa contiene l'insieme idraulico

Apparecchi (vaso, orinatoio, lavabo, vasca, doccia, lavello da cucina, lavello singolo), uno scarico a pavimento, ispezioni a pavimento e a parete, un attacco per tubo, un idrante a parete, uno scaldabagno, valvole (saracinesca, a globo, a sfera, di ritegno, a farfalla, riduttrice di pressione) e stili di linea con le loro abbreviazioni: acqua fredda (CW), acqua calda (HW), ritorno acqua calda (HWR), scarico (W), sfiato (V), scarico pluviale (SD) e gas (G). I disegni si scalano con la pianta, quindi mantengono la loro dimensione sulla tavola stampata. Uno stile di linea è un breve tratto che mostra lo stile sulla pianta; i veri tratti di tubazione si disegnano con gli strumenti per le tubazioni.

:::note
Sono simboli comuni di pianta idraulica, disegnati da noi; non sono certificati secondo ISO 4067-1 o ASME Y32.4. Sono stati confrontati con legende di disegno pubbliche e manuali di formazione (l'elenco è nella nota sulle fonti dell'insieme, che indica dove corrispondono e dove differiscono), non copiati da alcun prodotto, e sono liberi da usare (Apache-2.0). Gli insiemi di disegno differiscono, quindi verificare la legenda del proprio progetto. Sono simboli di pianta, non un progetto idraulico: non dimensionano le tubazioni né verificano le norme.
:::

## Preferiti e tastiera

- Fare clic sulla stella di un simbolo (oppure premere {{key:F}} su di esso) per tenerlo tra i preferiti. I preferiti sono elencati per primi e restano in questo browser. **Solo preferiti** mostra solo quelli.
- {{key:Down}} dalla casella di ricerca passa ai simboli; i tasti freccia, {{key:Home}} e {{key:End}} si muovono tra di essi; {{key:Enter}} sceglie quello attivo; {{key:Esc}} chiude la tavolozza.
- Su un telefono la tavolozza è un foglio in fondo allo schermo; si sposta quando si sceglie un simbolo, così si vede la pianta. Riaprirla dal menu {{ui:Build}} oppure dal pulsante **Tavolozza** nella barra delle opzioni.

:::tip
Se un file usa un insieme di simboli che questa versione non ha, la pianta mostra un riquadro al posto del simbolo e **Problemi** lo elenca.
:::

## Collegare un elemento posizionato a un simbolo

Un corpo illuminante dalla Libreria è un elemento 3D, ma un layout elettrico lo mostra come il suo simbolo. Lo si posiziona **una volta** e lo si collega:

1. Scegliere Build › **Collegamento simbolo** (oppure digitare SYMBOLLINK). Si apre una sezione Collegamento simbolo nel pannello di sinistra.
2. Selezionare gli elementi posizionati nella pianta o nel 3D. La sezione indica quanti sono selezionati e a cosa sono collegati.
3. Scegliere il **Simbolo** (da qualsiasi insieme di simboli: Elettrico, Idraulico) e scegliere **Collega**.

L'elemento resta un solo elemento, e ogni elenco lo conta una volta:

- Il **3D** mostra sempre il suo corpo.
- Una **pianta** mostra la sua forma in pianta, come prima.
- Una pianta la cui impostazione **Questa vista mostra gli elementi collegati come** è su **Il loro simbolo (un layout degli impianti)** mostra il simbolo al suo posto. Un clic sul simbolo seleziona l'elemento. La scelta è mantenuta per quella vista (la pianta di un livello, la sua pianta del soffitto o una chiamata) nel file.

**Ruotare il simbolo di 90°** ruota il simbolo rispetto al suo elemento. **Rimuovere il collegamento** lo toglie; l'elemento resta. L'elenco **Simboli collegati** elenca ogni elemento collegato una volta, con il suo livello e il locale in cui si trova.

Non ancora implementato: la scelta di una vista su una tavola è la scelta della pianta del livello che mostra; i dispositivi posizionati con lo strumento Elettrico sono simboli in ogni pianta, come prima.
