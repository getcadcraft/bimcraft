---
title: La vista live
summary: Un pannello accanto al modello che lo mostra nell'aspetto in tempo reale, con sole, ombre e luce riflessa, e segue ogni modifica; percorrerlo e impostare l'ora del giorno e il mese.
keywords: vista live, tempo reale, tempo reale, render in tempo reale, percorso, percorrere, prima persona, presentazione, cliente, secondo schermo, seconda finestra, monitor, ora del giorno, sole, stagione, mese, ombre, occlusione ambientale, riflessi, luce riflessa, illuminazione globale, webgpu, webgl
from: ea5c02bf
---

La vista live mostra il modello nell'aspetto in tempo reale: il cielo e il sole dalla posizione e dalla data del proprio sito, le ombre del sole, le vernici e i materiali assegnati agli elementi, le lampade, e la luce riflessa da pareti e pavimenti. Segue ciò che si fa: se si ruota la vista 3D, ruota anche lei; se si modifica il modello, mostra il cambiamento poco dopo. Nulla viene caricato.

Disegna la stessa scena, vernici, lampade e sole di [Renderizza un'immagine](topic:render); per un'immagine finita usare quella.

## Apertura

1. Aprire un modello e scegliere {{ui:Vista live}} nella barra degli strumenti. Il pannello si apre sopra l'app, in basso a destra.
2. Trascinare la barra del titolo per spostarlo, tirare l'angolo per ingrandirlo.
3. {{ui:Vista live in una nuova finestra}} (il pulsante accanto) o {{ui:Nuova finestra}} nel pannello la sposta in una finestra propria, per un secondo schermo. Se il browser blocca le finestre popup, si apre come pannello.
4. {{ui:Chiudi}} la chiude.

## I comandi

| Controllo | Cosa fa |
|---|---|
| {{ui:Segui la vista}} | Attivo: la vista live guarda dove guarda la vista 3D. Camminando si disattiva |
| {{ui:Cammina}} | Percorre il modello (sotto) |
| {{ui:Gravità}} | Durante il percorso: stare sui pavimenti e salire le scale. Disattivo: volare |
| {{ui:Ora}} | L'ora del giorno. Il sole si sposta trascinando |
| {{ui:Mese}} | Il mese, per vedere il sole in inverno e in estate |
| {{ui:Qualità}} | {{ui:Per questo computer}}, oppure {{ui:Bassa}}, {{ui:Medio}} o {{ui:Alta}} |

La riga in basso indica cosa disegna la vista (WebGPU o WebGL 2), la qualità e la luce riflessa.

## Percorrere il modello

1. Girare la vista 3D verso il punto in cui si vuole stare e scegliere {{ui:Cammina}}. Si sta sul pavimento sotto il punto di vista, alti 1.6 m.
2. Fare clic sulla vista live, poi usare {{key:W}} {{key:A}} {{key:S}} {{key:D}} o i tasti freccia. Tenere premuto {{key:Shift}} per correre. Trascinare per guardarsi intorno.
3. I gradini fino a 40 cm vengono saliti (scale); tutto ciò che è più alto è un muro. I muri fermano e si scivola lungo di essi.
4. Con {{ui:Gravità}} disattivato si vola: {{key:E}} sale, {{key:Q}} scende.
5. {{key:Esc}} ferma il percorso.

## Luce riflessa

La luce che rimbalza da una parete illuminata dal sole sul pavimento, e l'interno più scuro di una stanza, sono calcolate in background su ogni core del processore. Mentre lavora, la riga in basso dice {{ui:Luce riflessa: 40 %}}; quando è pronta, la vista la recepisce. Dopo ogni modifica ricomincia.

:::note
Si tratta di un'approssimazione per una vista live, non di un'immagine renderizzata: i piccoli dettagli tra i punti ricevono la luce riflessa dei punti vicini.
:::

:::note
I browser differiscono. Dove il browser ha WebGPU, la vista live lo usa; altrove usa WebGL 2 e appare uguale. Senza nessuno dei due, il pannello lo segnala.
:::
