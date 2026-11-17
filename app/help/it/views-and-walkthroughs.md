---
title: Salvare viste e percorsi
summary: Conservare per nome le viste della camera del modello, tornarvi, riprodurle una dopo l'altra e registrare un percorso attraverso l'edificio da riprodurre.
keywords: viste, viste salvate, camera, camere, punto di vista, scena, scene, tour, presentazione, percorso, percorrere, sorvolo, registra, riproduci, tracciato, animazione
from: 3af19a36
---

{{ui:Viste}} sulla barra degli strumenti conserva le camere della vista 3D nel file del modello, così si può tornare direttamente a queste viste, anche da chi riceve il modello.

## Salvare una vista

1. Impostare la vista 3D: orbitare, zoomare, nascondere ciò che non serve.
2. Fare clic su {{ui:Viste}}, digitare un nome (o mantenere quello proposto) e fare clic su {{ui:Salva vista}} oppure premere {{key:Enter}}.

Salvare con un nome già presente nell'elenco aggiorna quella vista. Fare clic sul nome di una vista per tornarvi; la camera si sposta lì con fluidità.

Le frecce cambiano l'ordine, la matita rinomina, il cestino elimina. Ogni modifica è un passaggio, quindi {{key:Ctrl+Z}} la annulla.

## Riprodurre le viste

{{ui:Riproduci le viste}} passa da una vista alla successiva nell'ordine dell'elenco, fermandosi per un attimo su ciascuna. {{key:Esc}} o {{ui:Ferma}} lo termina.

## Registrare un percorso

1. Attivare [Cammina](topic:walk) e iniziare a camminare all'interno dell'edificio.
2. In {{ui:Viste}}, fare clic su {{ui:Registra un percorso}}.
3. Camminare con {{key:W}} {{key:A}} {{key:S}} {{key:D}} e guardarsi intorno con il mouse.
4. Fare clic su {{ui:Ferma la registrazione}}. Il percorso viene salvato come "Walk 1", con la sua lunghezza.

Fare clic su un percorso per riprodurlo come lo si è percorso. {{key:Esc}} lo ferma.

## Renderizzare un percorso come video

Fare clic sull'icona a pellicola accanto a un percorso. La finestra video disegna ogni fotogramma del percorso con le impostazioni di Render scelte per ultime, alla dimensione, frequenza di fotogrammi e qualità scelte qui. Salvarlo come video WebM o MP4, oppure come ZIP con un'immagine per fotogramma. I fotogrammi richiedono quanto le immagini, quindi iniziare con {{ui:Rapido}}.

## Narrare un percorso

Fare clic sull'icona a fumetto accanto a un percorso. Scrivere una riga per ogni cosa detta, e iniziare una riga con l'istante in cui inizia (`12`, `0:12` o `1:02.5`); una riga senza orario segue la riga sopra dopo il tempo necessario a pronunciarla. Scegliere la lingua, quella di chi guarderà il percorso se è nota, ad esempio se è il cliente a guardarlo. {{ui:Anteprima}} riproduce le parole con la voce di questo computer e le mostra come sottotitoli; lo stesso avviene ogni volta che il percorso viene riprodotto. {{ui:Salva con il percorso}} conserva la narrazione nell'IFC insieme al percorso.

Un assistente collegato può scrivere la narrazione: chiedergli di esaminare il percorso e le viste salvate, e imposterà le righe nella lingua indicata, come un unico passaggio annullabile.

Il video generato non ha audio proprio, perché un browser non può registrare la propria voce. Salvare i sottotitoli (`.srt` o `.vtt`) e aggiungerli al video nel lettore o nell'editor. Le voci disponibili dipendono dal computer: una lingua senza voce installata ottiene comunque i sottotitoli.

## Nel file

Viste e percorsi sono conservati nell'IFC come set di proprietà `CadCraft_Views` sul progetto: IFC semplice che gli altri programmi ignorano. Sono nelle coordinate del primo modello, quindi restano validi dopo il ricaricamento del modello o l'aggiunta di un altro.

:::tip
Per creare un'immagine da una vista salvata, andare alla vista, poi fare clic su [Render](topic:render).
:::
