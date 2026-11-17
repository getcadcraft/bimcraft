---
title: Porte e finestre
summary: Inserire porte e finestre nei muri disegnati: puntare un muro, vedere il verso di apertura e le distanze dagli angoli, fare clic; l'apertura nel muro si ritaglia da sola.
keywords: porta, porte, finestra, finestre, apertura, verso di apertura, cerniera, lato, inverti, porta scorrevole, porta a scomparsa, porta del garage, porta doppia, a battente, a ghigliottina singola, a ghigliottina doppia, scorrevole, finestra fissa, davanzale, architrave, pieghevole, porta armadio, porte francesi, porta a fienile, sopraluci laterali, porta d'ingresso, vasistas, finestra panoramica, sopraluce
from: 4d8ac009
---

## Cosa si fa

Inserire porte e finestre nei muri disegnati ([Disegnare muri](topic:draw-walls)). Puntare un muro e la porta o la finestra mostra dove andrebbe, in quale verso si apre e quanto dista da ciascun angolo. Fare clic, e l'apertura si ritaglia da sola nel muro, nella pianta e in 3D.

## Inserire una porta

1. Con {{ui:Disegna}} attivo, fare clic su {{ui:Porta}} (oppure premere {{key:D}}).
2. Scegliere il tipo: **Porta a battente singola**, **Porta a battente doppia**, **Porta scorrevole**, **Porta a scomparsa**, **Porta del garage**, **Porta pieghevole per armadio**, **Porte francesi**, **Porta a fienile (sul muro)** o **Porta d'ingresso con sopraluci laterali**. La sua dimensione abituale riempie **L** e **A**; sceglierne un'altra dall'elenco delle dimensioni accanto, oppure digitarne altre, per esempio `2'-8"` o `800`. L'elenco offre anche le famiglie di porte di questo modello (vedi [Famiglie e loro dimensioni](topic:families)).
3. Puntare un muro. Il simbolo della porta segue il puntatore lungo il muro, e la distanza da ciascuna estremità di quella faccia compare sulla pianta.
4. La porta si apre verso il lato del muro su cui si trova il puntatore. Premere {{key:H}} (oppure fare clic su {{ui:Inverti}}) per mettere le cerniere dall'altra estremità.
5. Fare clic. La porta viene inserita e lo strumento resta attivo per la successiva. Puntando al centro di un muro la porta si centra da sola.

Per inserirla a una distanza esatta, puntare il muro vicino all'angolo da cui si misura, digitare la distanza (per esempio `2'` o `600`) e premere {{key:Enter}}. La distanza va dall'estremità più vicina della faccia del muro al bordo della porta.

## Inserire una finestra

1. Fare clic su {{ui:Finestra}} (oppure premere {{key:N}}).
2. Scegliere il tipo: **Finestra fissa**, **Finestra a ghigliottina singola**, **Finestra a ghigliottina doppia**, **Finestra a battente**, **Finestra scorrevole**, **Finestra a vasistas**, **Finestra panoramica** o **Sopraluce**, e la sua **L**, **A** e **Davanzale** (l'altezza del fondo della finestra sopra il pavimento).
3. Puntare un muro e fare clic, oppure digitare una distanza e premere {{key:Enter}} come per le porte. Una finestra si trova sull'esterno del muro.

## Spostare, invertire, eliminare

- Con {{ui:Seleziona}} attivo, trascinare una porta o una finestra lungo il suo muro. Trascinarla su un altro muro per spostarla lì.
- {{key:Delete}} elimina le porte e le finestre selezionate; il muro si richiude.
- Spostare o eliminare un muro sposta o elimina ciò che contiene. Quando l'inizio di un muro si sposta lungo la propria linea, le sue porte e finestre mantengono la loro posizione.
- {{ui:Annulla}} e {{ui:Ripristina}} riportano indietro e avanti ogni inserimento, spostamento o eliminazione.

## Che cosa viene rifiutato

- **Non entra in quel muro.** La porta o la finestra è più larga del muro, oppure sporgerebbe da una sua estremità. Provare una larghezza minore o un muro più lungo.
- **È più alta del muro.** Il davanzale più l'altezza superano la sommità del muro.

## Che cosa viene salvato

Ogni porta o finestra è una porta o finestra IFC con la sua dimensione, il suo funzionamento (per esempio battente singola a sinistra), il suo tipo di dimensione (un tipo per ogni dimensione della sua famiglia), `Pset_DoorCommon` o `Pset_WindowCommon` e le quantità di base, e riempie un'apertura IFC nel suo muro. L'area netta laterale e il volume del muro escludono l'apertura. Altri programmi BIM la aprono come porta in un muro.

## Da sapere

- La pianta mostra le porte aperte a 90° con il loro verso di apertura, le porte scorrevoli come due ante, le porte a scomparsa che scorrono dentro il muro, le porte del garage come una linea tratteggiata in alto, e le finestre con le linee del telaio e del vetro.
- La larghezza è la larghezza totale del telaio; l'anta della porta è la larghezza meno i due stipiti.
- Copiare porte e finestre disegnate non è ancora implementato: inserirne un'altra.

## Finestra di emergenza del seminterrato con intercapedine

Scegliere **Finestra di emergenza del seminterrato con intercapedine** nell'elenco dei tipi di finestra. Parte come una finestra a battente di 36 × 48 in con un davanzale a 36 in dal livello. L'intercapedine è sull'esterno del muro, con almeno 48 in di larghezza libera, 36 in di sporgenza e un fondo 6 in sotto il davanzale. Appare come linee tratteggiate in pianta e come tre lati aperti in alto in 3D. L'intercapedine fa parte del corpo IFC della finestra, quindi salvare, spostare, ridimensionare o eliminare la finestra la porta con sé. Il ridimensionamento mantiene almeno 6 in accanto a ciascuno stipite.

Queste sono impostazioni di modellazione predefinite, non una certificazione di conformità delle vie di fuga. Verificare separatamente la luce netta effettiva del produttore, i requisiti locali, il livello del terreno, lo scolo e qualsiasi scala necessaria. Profondità e altezza dell'intercapedine sono dimensioni preimpostate; non seguono il terreno.
