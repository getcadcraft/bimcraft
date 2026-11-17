---
title: Ricalca un livello, imposta le penne per vista, schizza una scala, apri un OBJ
summary: Mostra un altro livello tratteggiato sotto la pianta e allinealo, assegna a muri, porte e finestre una propria penna in una vista, traccia una linea di percorso per ottenere una scala, e apri una mesh Wavefront OBJ.
keywords: riferimento di ricalco, fantasma, sottofondo, penna, spessore di linea, tipo di linea, sostituzione, scala, schizzo, pianerottolo, OBJ, mesh, importa, Wavefront
from: 333ebbde
---

## Ricalcare un livello

Scegliere {{ui:Ricalca}} nel menu {{ui:Build}}, poi una vista nell'elenco: la pianta di un altro livello, la pianta del soffitto di un livello oppure un callout (ritagliato sulla sua porzione). I suoi muri, pilastri e solai appaiono tratteggiati sotto la pianta che si sta disegnando. Spostarlo facendo clic su un punto base del riferimento e poi sul punto in cui deve andare, oppure digitare X, Y e un angolo (ruota attorno al proprio centro). {{ui:Reimposta}} lo riporta al suo posto, {{ui:Nascondi}} lo rimuove. È solo un riferimento: nulla lo seleziona, non viene stampato e non viene salvato nell'IFC. BimCraft lo ricorda per ciascun livello in questo browser.

## Penne per vista

Scegliere {{ui:Penne}}. Indicare a cosa serve la penna: tutti i muri, tutte le porte, tutte le finestre, il tipo dell'elemento selezionato oppure gli elementi selezionati. Scegliere uno spessore, un tipo di linea (continua, a trattini, punteggiata) e un colore, poi {{ui:Applica}}. La modifica vale solo per la pianta di questo livello. Una selezione prevale su un tipo, e un tipo prevale su un'intera categoria. {{ui:Cancella tutto}} le rimuove. Restano salvate in questo browser. Spuntare **Colori delle penne in 3D** per colorare sul modello, nella vista 3D, le penne colorate (lo spessore e il trattino sono quelli della linea, quindi lì si vede solo il colore); togliere la spunta per tornare indietro. {{ui:Stampa}} le disegna sul PDF della pianta: lo spessore si scala dallo schermo (la penna predefinita dei muri, 1.75 pixel, equivale a 0.5 mm), i trattini restano trattini e un colore viene stampato con il suo valore del tema Carta.

## Una scala da uno schizzo

Scegliere {{ui:Schizza scala}} e fare clic sugli angoli della linea di percorso, a partire dal primo gradino. Una linea è una scala dritta, due linee che si incontrano ad angolo retto sono una L, tre linee (salita, traversa, ritorno) sono una U. Premere {{key:L}} per disegnare un pianerottolo: fare clic sui suoi angoli e premere {{key:Enter}}; il suo lato corto stabilisce la larghezza della scala. Premere {{key:Enter}} per posizionare la scala. Ogni pedata viene calcolata dalla lunghezza della linea e dal numero di alzate che richiede l'altezza. Dopo, è una scala normale: modificarla nelle Proprietà, e il vano scala e i corrimano la seguono.

Spuntare **Crea come famiglia** nella riga dello strumento (oppure premere {{key:F}}) prima di {{key:Enter}}, per posizionare la scala come famiglia (una scala dritta, a L o a U). Entra come un unico elemento e si apre nell'editor delle famiglie con la sua larghezza, la pedata, l'altezza totale, le pedate di ciascuna rampa e l'intervallo di una U come parametri, così si possono aggiungere misure, un simbolo di pianta o punti di controllo. Gradini e altezza delle alzate ne derivano. Non ha corrimano né vano scala: quelli appartengono a una scala normale.

## Aprire un OBJ

Aprire un file `.obj` come ogni altro file. Un OBJ non ha unità, quindi BimCraft legge metri con Y verso l'alto, come scrive la maggior parte dei programmi. Ogni oggetto o gruppo diventa un elemento mesh su un unico livello, che poi si può visualizzare, misurare, sezionare, posizionare in un modello e salvare come IFC. Linee, curve e superfici vengono esclusi, e la riga di stato lo segnala.

Un oggetto che è esattamente un prisma retto (una mesh chiusa con due facce di estremità parallele e identiche e lati piani perpendicolari ad esse: una soletta, un montante, un blocco di muro, una piastra con fori) viene salvato nell'IFC come solido estruso IFC con il suo profilo e la sua profondità, non come elenco di triangoli. Gli altri programmi lo leggono come un vero solido, resta leggero, e la sua profondità e il suo profilo si possono modificare in seguito. La riga di stato indica quanti oggetti sono stati mantenuti in questo modo. Tutto ciò che non è esattamente un prisma (una forma rastremata, una mesh con un vertice spostato, una mesh con una fessura) resta in triangoli. Un file STEP viene letto allo stesso modo.
