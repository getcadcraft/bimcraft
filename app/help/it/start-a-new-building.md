---
title: Iniziare un nuovo edificio
summary: Creare un modello di edificio vuoto con i suoi livelli, disegnarne i muri, posizionare elementi dalla libreria e salvarlo come IFC.
keywords: nuovo, nuovo edificio, vuoto, partire da zero, modello base, livelli, piani, creare, modello
from: 546b8ae8
---

## Cosa si fa

Iniziare un modello di edificio da zero invece di aprirne uno. BimCraft crea un modello IFC vuoto con un progetto, un sito, l'edificio e i suoi livelli. È possibile posizionare sui livelli attrezzature e arredi dalla libreria e salvare il tutto come file IFC.

:::note
I muri si possono già disegnare: vedere [Disegnare i muri](topic:draw-walls). Porte, finestre, solai e tetti sono i prossimi in costruzione.
:::

## Passaggi

1. Fare clic su {{ui:Nuovo edificio}} sotto **Aprire un file o una cartella**, oppure nella pagina iniziale.
2. Digitare il **Nome dell'edificio**.
3. Scegliere quanti **Livelli** ha (da 1 a 200).
4. Digitare l'**Altezza del livello**, da pavimento a pavimento: ad esempio `10'-0"`, `10'6"` o `3000 mm`. Un numero senza unità è in piedi negli Stati Uniti e in millimetri altrove.
5. Fare clic su {{ui:Crea}}. I livelli sono sovrapposti a partire da 0, ciascuno a un'altezza di livello sopra il precedente, e si chiamano Livello 1, Livello 2 e così via. Compaiono nell'albero del modello e la pianta del Livello 1 si apre accanto alla vista 3D con {{ui:Disegna}} attivo.
6. Disegnare i muri: vedere [Disegnare i muri](topic:draw-walls). Rinominare i livelli o cambiarne le altezze nel pannello **Livelli**.
7. Posizionare gli elementi: vedere [Posizionare attrezzature e arredi dalla libreria](topic:place-from-library). La barra di posizionamento elenca tutti i livelli.
8. Fare clic su {{ui:Salva come IFC}}. Il file prende il nome dell'edificio, ad esempio `Casa Rossi.ifc`.

## Da sapere

- Il modello viene salvato in millimetri, come IFC4. Gli altri programmi BIM lo aprono.
- **Piani** nel pannello di sinistra elenca solo i livelli su cui c'è qualcosa; l'albero del modello li elenca tutti.
- Finché non si salva, il nuovo edificio conta come lavoro non salvato. BimCraft chiede conferma prima di aprire un altro file o di uscire e conserva una copia in questo browser nel caso la scheda si chiuda.
