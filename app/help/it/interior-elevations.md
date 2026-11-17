---
title: Prospetti interni
summary: Crea una tavola che mostra dall'interno le quattro pareti di un locale, con quote e tag, e salvala come PDF.
keywords: prospetto interno, locale, parete, mobile, cucina, prospetto, tavola, PDF, quota, tag, spazio, A-501
from: 1e3a70a8
---

## Cosa farai

Scegli un locale e ottieni una tavola che mostra le sue quattro pareti come le vedresti stando al suo interno. È pensata per cucine, bagni e qualsiasi locale in cui servono i mobili, le porte e le finestre di ogni parete.

## Crea la tavola

1. Selezionare il locale. Nel piano con {{ui:Disegna}} attivo, fare clic all'interno del locale. Nella vista 3D o nell'albero del modello, selezionare lo spazio (un IfcSpace).
2. In **Proprietà**, fare clic su {{ui:Prospetti interni…}}.
3. La finestra di dialogo si apre con la tavola.
4. Fare clic su {{ui:Scarica il PDF}} per salvarla. Il file si chiama "<file> — Interior elevations — <room>.pdf" ed è un PDF vettoriale.
5. Fare clic su {{ui:Chiudi}} al termine.

## Cosa mostra la tavola

La tavola contiene quattro viste, due per due, alla stessa scala: la scala standard più grande che entra. Sono **Parete nord**, **Parete est**, **Parete sud** e **Parete ovest**. Un cartiglio riporta il numero di tavola A-501, il titolo "Prospetti interni — " con il numero e il nome del locale, il progetto e la data.

Ogni vista è tagliata a metà del locale e guarda la parete su quel lato. Le pareti laterali, e ciò che è tagliato in esse come una finestra, appaiono come campitura grigia in sezione attorno alla vista. La vista si ferma appena oltre la faccia della parete, quindi non si vede nulla dietro la parete.

Ogni vista riporta:

- la larghezza del locale sotto di essa, da faccia interna a faccia interna;
- l'altezza del locale accanto, dal pavimento al livello superiore;
- un tag quadrato su ogni porta e un tag esagonale su ogni finestra di quella parete, con il loro contrassegno (D1, W1 e così via);
- un tag circolare con il numero dell'elemento su ogni elemento della libreria posizionato davanti a quella parete: mobili, arredi ed apparecchiature.

:::note
Le viste sono create ogni volta dal modello all'apertura della finestra di dialogo, quindi corrispondono sempre al modello. Spostare un mobile, quindi riaprire la finestra di dialogo.
:::

## Sulle tavole personalizzate

Ogni parete di ogni locale è anche una vista che si può inserire in una tavola creata: nel browser del progetto fare clic su {{ui:Nuova tavola}}, quindi, sotto **Prospetti interni**, aggiungere "101 Cucina — Parete nord" e le altre. Porta con sé le stesse quote e gli stessi tag.

## Non ancora implementato

Prospetti interni nel set di disegni generato (vengono dal pannello **Proprietà** del locale o dalle tavole personalizzate), locali non prevalentemente rettangolari (la vista appare quadrata su ciascun lato del riquadro del locale), disegno, note o quote personalizzate su di essi, e la scelta delle pareti da mostrare. Vedere [Cosa non è ancora implementato](topic:not-built-yet).
