---
title: Registrare più scansioni in una
summary: Posizionare scansioni fatte da punti diversi in un unico sistema di riferimento tramite coppie di punti scelti o target digitati, affinarle con ICP, salvare la registrazione come progetto ed esportare la nuvola registrata come LAS o E57.
keywords: registrazione, scansioni, nuvola di punti, icp, iterative closest point, target, coppie di punti, trasformazione rigida, allineare, unire, e57, las, scansione per BIM
from: e8e270db
---

## Cosa farai

Diverse scansioni dello stesso luogo (ciascuna da una propria posizione dello scanner) partono nelle loro coordinate. Registrarle: assegnare a ciascuna scansione un'unica posizione in modo che stiano tutte in un unico sistema di riferimento, poi salvare il tutto come progetto e scrivere la nuvola registrata in un unico file LAS o E57.

## Posizionare le scansioni

1. Aprire la finestra ({{ui:Registra scansioni…}} nel pannello iniziale, oppure {{ui:Mostra}} › {{ui:Registra scansioni…}} quando un modello è aperto). {{ui:Aggiungi scansioni…}} accetta file LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, oppure li si trascina nella finestra. Le scansioni con unità diverse vengono rifiutate con una nota: convertirne prima una.
2. Scegliere {{ui:Scansione da spostare}} e {{ui:Posiziona rispetto a}}. L'immagine mostra ogni scansione nel sistema di riferimento così com'è ora, con un colore ciascuna: {{ui:Pianta}}, {{ui:Anteriore}} o {{ui:Lato}}; trascinare per spostare la vista, usare la rotella per lo zoom.
3. **Per coppie di punti.** Cliccare {{ui:Scegli una coppia}}, poi un punto sulla scansione da spostare, quindi lo stesso punto su un'altra scansione (un angolo, un target, la base di un pilastro). Farlo almeno tre volte, con punti non allineati e distanziati. Cliccare {{ui:Posiziona con le coppie}}: la scansione viene posizionata con un adattamento ai minimi quadrati, e **Residuo** indica di quanto ogni coppia ancora sbaglia. Una coppia con un numero grande è una scelta errata: rimuoverla con la croce e posizionare di nuovo.
4. **Per target.** Se le coordinate reali di un punto sono note (target rilevati), cliccare {{ui:Scegli, poi digita il target}}, cliccare il punto sulla sua scansione e digitare X, Y e Z del target nella riga. Coppie e target digitati si possono mescolare liberamente.

## Affinare con ICP

Le coppie danno un posizionamento approssimativo. {{ui:Affina}} sposta la scansione finché le sue superfici non coincidono con quelle dell'altra: prima **punto a punto**, poi **punto a piano**. La tabella elenca ogni passo con il suo errore e quanti punti sono stati abbinati; la riga sopra disegna la discesa dell'errore. {{ui:Ferma}} termina l'elaborazione dopo il passo in corso e mantiene ciò che è stato raggiunto. {{ui:Annulla}} annulla l'intera elaborazione (o l'ultimo posizionamento); {{ui:Reimposta}} riporta la scansione alle sue coordinate nel file.

Per mantenere il lavoro rapido su un portatile, ICP lavora su una quota ridotta dei punti ({{ui:Punti usati}}, da 5,000 a 60,000) e ignora le corrispondenze oltre {{ui:Massima distanza di corrispondenza}} (per impostazione predefinita il 5% delle dimensioni della scansione, che si riduce man mano che l'algoritmo si stabilizza). Serve prima un posizionamento approssimativo: le scansioni che si sovrappongono appena segnalano che non possono essere abbinate. Superfici solo piane o solo rettilinee non possono correggere una posizione lungo sé stesse; in quel caso aggiungere coppie.

## Salvare ed esportare

- {{ui:Salva progetto}} scrive un piccolo file `.ccscans.json`: il nome di ogni scansione, la sua dimensione e un'impronta dei suoi primi 64 KB, con la sua trasformazione. Non contiene punti. {{ui:Apri progetto…}} ritrova i file di scansione tramite questi riferimenti (i file devono essere già aggiunti) e ripristina ogni trasformazione.
- {{ui:Esporta LAS}} ed {{ui:Esporta E57}} scrivono un unico file con ogni scansione nella sua posizione registrata. I punti negli originali non vengono mai riscritti; la trasformazione viene applicata in uscita. Con {{ui:Leggi ogni punto dai file}} attivo, ogni file viene riletto per ogni punto (fino a 20 milioni per scansione); disattivo, vengono scritti solo i punti mostrati nel visualizzatore.
- {{ui:Mostra la nuvola registrata}} (in BimCraft) scrive il LAS e lo apre nella vista 3D accanto al modello, come qualsiasi altra nuvola.

:::note
Nulla viene caricato. La registrazione lavora nelle unità dei file e mantiene i millimetri: un LAS viene scritto con una scala adatta (fino a 0.1 mm), un E57 con valori in doppia precisione. Un sistema di coordinate viene riportato nel LAS solo quando tutte le scansioni indicano lo stesso codice EPSG. Lo scrittore E57 è nostro; è verificato rileggendo i suoi file con questo lettore e con libE57Format.
:::
