---
title: Posiziona un prospetto e apri la sua vista
summary: Posiziona un marcatore di prospetto sulla pianta, orientalo nella direzione in cui vuoi vedere l'edificio, poi trova il suo disegno nel browser di progetto, modificalo e inseriscilo in una tavola. Passaggi per le barre multifunzione e per il layout classico.
keywords: prospetto, vista di prospetto, marcatore di prospetto, etichetta di prospetto, posiziona un prospetto, nuovo prospetto, crea un prospetto, prospetto esterno, vista laterale, vista frontale, vista da un punto, dove si trova il mio prospetto, apri prospetto, prospetto in una tavola, inverti prospetto, rinomina prospetto, prospetto nord, affianca viste, dividi vista, pianta e 3D affiancate
from: a7cfd2b9
---

## Cosa farai

Creerai un prospetto personale: un disegno dell'edificio visto da un punto che scegli, con l'orientamento che preferisci. Bastano due clic su una pianta. Il disegno viene poi elencato insieme agli altri prospetti dell'edificio.

:::note
I quattro lati sono già disponibili. Ogni edificio ha i prospetti Nord, Est, Sud e Ovest nel {{ui:Project browser}} sotto {{ui:Elevations}}, senza dover posizionare nulla. Posiziona un prospetto personale quando vuoi una vista da un punto diverso: perpendicolare a un'ala inclinata, dall'interno di un cortile, oppure di una parete all'interno di una stanza.
:::

## Dove si trova lo strumento

- Layout a barra multifunzione: {{ui:View}} › **Crea** › {{ui:Elevation}}.
- Layout classico: attiva {{ui:Draw}}, poi {{ui:Build}} › {{ui:Elevation}}.
- Qualsiasi stile di menu: il comando si chiama Elevazione; la tavolozza dei comandi lo trova e la riga di comando accetta ELEVATION.

## Passaggi

1. Scegli {{ui:Elevation}}. Il prospetto viene posizionato su una pianta, quindi se eri nella vista 3D BimCraft mostra la pianta del livello in cui ti trovavi. Il puntatore indica **Fai clic dove si trova il prospetto**.
2. Fai clic nel punto da cui viene presa la vista. Per un prospetto esterno, fai clic all'esterno dell'edificio, a poca distanza dalla parete che vuoi vedere.
3. Il puntatore ora indica **Fai clic nel modo in cui appare**. Spostati verso l'edificio: una freccia mostra la direzione e la linea corta che attraversa il primo clic è il bordo da cui si guarda la vista. Fai clic.
4. Sulla pianta compare un cerchio con un numero e un puntatore. Questo è il marcatore di prospetto. Il primo è 1, il successivo è 2.
5. Premi Esc per terminare, oppure continua e posiziona un altro marcatore.

Posizionare un marcatore è un solo passaggio: {{key:Mod+Z}} lo annulla.

## Apri il disegno

Dopo il secondo clic la pianta resta davanti a te. Il disegno si trova nel {{ui:Project browser}}:

1. Apri {{ui:Elevations}}. Il tuo prospetto è elencato dopo i quattro lati come **Prospetto 1**.
2. Fai clic sul pulsante a forma di matita {{ui:Edit in this view}} nella sua riga per vedere il disegno e lavorarci: sposta muri, porte, finestre e livelli, aggiungi note e quote. Vedi [Modifica nei prospetti e nelle sezioni](topic:edit-in-elevations).
3. Fai clic sulla riga stessa per aprire il set di disegni, oppure aggiungi la vista a una tavola personale. Vedi [Viste e tavole](topic:views-and-sheets).

Nel layout classico il browser di progetto si trova nel pannello sinistro mentre {{ui:Draw}} è attivo. Nei layout a barra multifunzione è la scheda {{ui:Project Browser}} sotto Proprietà.

## Cosa mostra la vista

- Tutto ciò che si trova davanti al marcatore, fino all'edificio. Nulla dietro di esso.
- I livelli, con i rispettivi nomi e altezze.
- Se il marcatore si trova all'interno dell'edificio, tutto ciò in cui si trova viene tagliato in quel punto, come farebbe una sezione. Per un prospetto esterno pulito, posizionati all'esterno.

## Modificalo

Seleziona il marcatore sulla pianta (fai clic sul suo cerchio con {{ui:Select}}). Proprietà offre:

- {{ui:Label}}: il suo numero oppure un nome personale, fino a 8 caratteri.
- {{ui:Flip the view}}: guarda nella direzione opposta dallo stesso punto.
- {{ui:Look as far as}}: la distanza davanti al marcatore fino a cui arriva la vista. 0 mostra tutto.

Premi Delete per rimuovere il marcatore e il suo disegno. Annulla li ripristina entrambi.

:::tip
Per vedere la pianta e la vista 3D contemporaneamente mentre lavori, usa {{ui:View}} › **Finestre** › {{ui:Tile Views}} nei layout a barra multifunzione, oppure {{ui:Split}} nel layout classico. Un clic su una scheda di vista torna a una sola vista.
:::

## Limiti

- Un marcatore non può ancora essere trascinato o ruotato sulla pianta. Eliminalo e posizionalo di nuovo, oppure usa {{ui:Flip the view}}.
- Nell'elenco delle viste che puoi inserire in una tavola, un prospetto personale è elencato insieme alle sezioni.
- Le etichette di porte e finestre vengono disegnate sui quattro prospetti dei lati, non su quello che hai posizionato.

## Nel file IFC

Il marcatore viene salvato nel file come IfcAnnotation denominato "Elevation 1" con tipo di oggetto "Elevation marker", nel livello in cui è stato posizionato. Gli altri programmi lo mostrano come un'annotazione; il disegno vero e proprio viene creato da BimCraft a partire dal modello ogni volta.
