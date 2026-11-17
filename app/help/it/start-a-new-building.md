---
title: Iniziare un nuovo edificio
summary: Creare un modello di edificio vuoto con i suoi livelli, disegnare i suoi muri, posizionare elementi dalla libreria e salvarlo come IFC.
keywords: nuovo, nuovo edificio, vuoto, da zero, modello di partenza, livelli, piani, solai, crea, modello
from: 68786865
---

## Cosa si fa

Avviare un modello di edificio da zero invece di aprirne uno. BimCraft crea un modello IFC vuoto con un progetto, un sito, l'edificio e i suoi livelli. Si possono posizionare sui livelli apparecchiature e arredi dalla libreria, e salvarlo come file IFC.

:::note
I muri si possono disegnare ora: vedere [Disegnare muri](topic:draw-walls). Porte, finestre, solai e tetti non sono ancora implementati.
:::

## Passi

1. Fare clic su {{ui:Nuovo edificio}} in **Apri un file o una cartella**, oppure nella pagina iniziale.
2. Digitare il **Nome dell'edificio**.
3. Scegliere quanti **Livelli** ha (da 1 a 200).
4. Digitare l'**Altezza del livello**, da pavimento a pavimento: per esempio `10'-0"`, `10'6"` o `3000 mm`. Un numero senza unità è in piedi negli USA, in millimetri altrove.
5. Ogni campo è già compilato, quindi si possono lasciare tutti come sono. Sotto di essi la casella indica con cosa si inizia: le unità, il **Tipo di muro** che lo strumento Muro disegna per primo (sceglierne un altro dall'elenco, se si preferisce) e la prima tavola.
6. Fare clic su {{ui:Crea}}. I livelli sono impilati a partire da 0, ciascuno un'altezza di livello sopra il precedente, e sono denominati Livello 1, Livello 2 e così via. Compaiono nell'albero del modello, e la pianta del Livello 1 si apre accanto alla vista 3D con {{ui:Disegna}} attivo.
7. Disegnare i muri: fare clic su {{ui:Parete}} e poi su due punti. Vedere [Disegnare muri](topic:draw-walls). Rinominare i livelli o cambiarne le altezze nel pannello **Livelli**.
8. Posizionare elementi: vedere [Posizionare apparecchiature e arredi dalla libreria](topic:place-from-library). La barra di posizionamento elenca tutti i livelli.
9. Fare clic su {{ui:Salva come IFC}}. Il file prende il nome dell'edificio, per esempio `Smith's house.ifc`.

## Da sapere

- Il modello è salvato in millimetri, come IFC4. Altri programmi BIM lo aprono.
- Un nuovo edificio include una tavola, **A-101**, che contiene la pianta del livello più basso: A3 in scala 1:100 quando si lavora in unità metriche, Tabloid con 1/8" = 1'-0" altrimenti. È vuota fino al primo muro, poi mostra la pianta man mano che la si disegna. Aprirla sotto **Tavole** nel browser di progetto per modificarne carta, scala o cartiglio, aggiungere viste o eliminarla. Un edificio avviato da un modello porta invece le tavole del modello.
- Per cambiare ciò con cui ogni nuovo edificio inizia (il tipo di muro per i progetti metrici, i livelli, la prima tavola, lo strumento attivo dopo Crea), vedere [Politiche predefinite](topic:default-policies).
- Non serve configurare nulla prima del primo muro. Il tipo di muro, le altezze dei livelli, le unità e la tavola si possono modificare in seguito.
- **Piani** nel pannello di sinistra elenca solo i livelli con qualcosa al loro interno; l'albero del modello li elenca tutti.
- Finché non si salva, il nuovo edificio conta come lavoro non salvato. BimCraft chiede conferma prima di aprire un altro file o uscire, e conserva una copia in questo browser nel caso la scheda si chiuda.
