---
title: Quantità verso TakeoffCraft
summary: Un clic invia le quantità del modello a TakeoffCraft — muri per tipo, tetti per superficie inclinata, colmi, displuvi e compluvi, fondazioni, porte e finestre, mobili bassi, dispositivi elettrici, superficie dei piani e la distinta di taglio del legname — segnate su una pianta di ogni livello, con le composizioni dei pacchetti di categoria sugli elementi.
keywords: computo, computo metrico, preventivo, stima, distinta dei materiali, distinta base, takeoffcraft, quantità, superficie dei muri, superficie del tetto, quadrati, plinto, calcestruzzo, yard cubi, distinta di taglio, legname, pacchetto di categoria, composizione
from: c5a745af
---

## Cosa si fa

Trasformare il modello in una distinta dei materiali e in un preventivo in TakeoffCraft. BimCraft disegna una pianta di ogni livello a una scala standard, segna ogni quantità su di essa e inserisce il computo nel PDF. TakeoffCraft misura da sé i segni, quindi ogni numero può essere verificato sulla tavola.

## Inviarlo

1. Fare clic su {{ui:Computo}} nella barra del modello (accanto a {{ui:Tavole}}).
2. TakeoffCraft si apre in una nuova scheda con le piante. Quando lo chiede, scegliere di aprire il computo trovato nel PDF.
3. Aggiungere i prezzi nella tabella delle quantità di TakeoffCraft; le composizioni elencano già i materiali.

:::note
Quando TakeoffCraft non è disponibile qui, il pulsante scarica il PDF. Aprirlo in TakeoffCraft più tardi: trova il computo al suo interno.
:::

## Cosa viene misurato

- **Muri** per tipo e altezza: le loro linee d'asse come tratti, con l'altezza del muro sull'elemento, così TakeoffCraft fornisce la lunghezza e la superficie del muro. Ogni tratto porta le porte e le finestre del muro, che TakeoffCraft detrae una volta dalla superficie del muro con la stessa regola degli abachi di BimCraft: i due concordano su lordo, detrazioni e netto. I dati di computo di un tipo di muro (unità, malta, prezzo; vedere [Composizioni dei muri](topic:wall-assemblies)) arrivano come una riga valorizzata su quell'elemento del tipo. Con un metodo di misura diverso da quello predefinito (vedere [Scegliere un metodo di misura](topic:plan-schedules-and-pdf#choose-a-measurement-method)), il computo riporta il metodo, ogni tratto riporta ciò che i punti di giunzione detraggono dalla sua faccia del muro, e TakeoffCraft misura con lo stesso metodo e lo indica. Un tipo la cui unità ha una lunghezza e un'altezza trasmette due componenti con quantità: le unità da ordinare e il volume di malta, valorizzati quando il prezzo del tipo è a unità, a 1000 unità o a m³ di malta. Un conteggio che cade esattamente su un numero intero può risultare di una unità in più in TakeoffCraft, perché la trasmissione arrotonda le posizioni sulla tavola.
- **Tetti**: ogni falda del tetto come superficie con la sua pendenza (TakeoffCraft fornisce la superficie inclinata), colmi, displuvi e compluvi (displuvi e compluvi lungo la loro pendenza), gronde e timpani.
- **Fondazioni**: plinti e muri di fondazione come tratti lungo le loro mezzerie, platee come superfici con il loro spessore, così il calcestruzzo risulta dal volume.
- **Porte e finestre** contate per tipo, con le cornici delle finestre.
- **Mobili bassi** per lunghezza dei loro fronti.
- **Dispositivi elettrici** contati per tipo.
- **Superficie dei piani** di ogni livello, dai suoi locali.
- **La distinta di taglio del legname** dall'ossatura, contata su una tavola propria (un punto per pezzo).

Dove un pacchetto di categoria ha una composizione corrispondente — muri esterni e interni, solai, plinti, muri di fondazione, tegole, coppi di colmo e displuvio, compluvi, gronde, porte interne, cornici delle finestre, mobili bassi, prese, interruttori, lampade, scatole di derivazione e il quadro — l'elemento arriva con i suoi materiali e le sue formule. I pacchetti arrivano senza prezzi e non sono ancora stati verificati da un computista.

:::tip
Le piante sono costruite ogni volta dal modello al clic, quindi dopo una modifica basta fare di nuovo clic su {{ui:Computo}}.
:::
