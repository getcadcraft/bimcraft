---
title: Il piano elettrico
summary: Posizionare prese, interruttori, luci, sensori, scatole di derivazione e quadri sulla pianta con gli stessi simboli dell'add-on Elettrico di CadCraft, collegare gli interruttori alle luci che accendono ed elencare dispositivi e circuiti negli abachi.
keywords: elettrico, piano elettrico, presa, presa di corrente, doppia, interruttore, deviatore, dimmer, luce, luce a soffitto, luce incassata, downlight, sensore di movimento, scatola di derivazione, quadro, quadro di distribuzione, circuito, carico, watt, ampere, linea dell'interruttore, abaco dei dispositivi, abaco dei quadri
from: f7de1947
---

## Cosa farai

Disegnare il piano elettrico dell'edificio nel modello: prese, interruttori e quadri sulle pareti, luci e sensori sul soffitto. Ogni dispositivo è un vero elemento elettrico nel file IFC, con il suo tag, circuito e carico, e gli interruttori ricordano le luci che accendono.

## Posizionare i dispositivi

1. Su un livello, aprire {{ui:Build}} e scegliere {{ui:Elettrico}}.
2. Scegliere il dispositivo: prese (alimentazione, dati, telefono, audio-video), interruttori e sensori (anche un termostato e un timer), luci, rilevatori e allarmi, una scatola di derivazione, un quadro o un sottoquadro.
3. Digitare un **Circuito** se lo si conosce (un nome qualsiasi: 1, 2, A-3). Lasciare vuota l'**Altezza di montaggio** per usare l'altezza abituale di quel dispositivo.
4. Fare clic sulla pianta. Prese, interruttori e quadri vanno sulla faccia della parete più vicina, rivolti verso il locale; luci, sensori e scatole di derivazione vanno sul soffitto nel punto in cui si fa clic.

I dispositivi ricevono il tag mentre vengono posizionati: **R** per le prese, **S** per gli interruttori, **L** per le luci, **M** per i sensori di movimento, **J** per le scatole di derivazione, **P** per i quadri. I dispositivi su una parete si spostano con essa quando si sposta la parete.

Preferisci sfogliare per immagine? Aprire la **Tavolozza dei simboli** da {{ui:Build}} per trovare un dispositivo per nome, mettere la stella a quelli che si usano e posizionarlo con un solo clic: vedi [La tavolozza dei simboli](topic:symbol-palette).

## Collegare gli interruttori alle luci

1. Selezionare un interruttore (o un sensore di movimento) e fare clic su **Collega luci** in **Proprietà**.
2. Fare clic su ogni luce che accende. Fare di nuovo clic su una luce collegata per scollegarla.
3. Premere {{key:Enter}} o fare clic su **Fine**.

La pianta disegna una curva tratteggiata dall'interruttore a ciascuna delle sue luci. Le **Proprietà** di una luce mostrano quali interruttori la accendono.

## Il locale in cui si trova un dispositivo

Ogni dispositivo sa in quale locale si trova. Un dispositivo su una parete è nel locale verso cui è rivolto; un dispositivo a soffitto è nel locale sopra cui si trova. **Proprietà** mostra **Locale**, e l'abaco **Dispositivi elettrici** ha una colonna **Locale** (numero e nome, per esempio 101 Cucina).

Viene tenuto aggiornato: rinominare o rinumerare il locale, spostare il dispositivo o spostare una parete, e il locale viene seguito nello stesso passaggio. Un dispositivo sulla faccia esterna di un edificio, o in uno spazio che non è un locale, risulta non in un locale.

Il locale viene anche scritto nel file, nel set di proprietà `CadCraft_Location` del dispositivo (Room, RoomNumber, RoomName), quindi Trova, Colora per proprietà e un abaco dei tag possono usarlo, e lo può usare anche un altro programma. I simboli in pianta e gli elementi collegati a un simbolo ricevono lo stesso set; vedi [Tavolozza dei simboli](topic:symbol-palette).

## Lasciare che l'assistente li posizioni

Con un assistente collegato (Impostazioni › Assistenti, con le modifiche consentite), è possibile chiedere i dispositivi a parole: "mettere una doppia presa ogni 2 m lungo le pareti del soggiorno, a 300 mm da terra, sul circuito 3", oppure "aggiungere una luce a soffitto con il suo interruttore vicino alla porta". L'assistente usa cinque strumenti: `devices_add`, `device_change`, `lights_set`, `devices_delete` e `devices_list`. Creano gli stessi dispositivi dello strumento Elettrico, sulle stesse pareti e con gli stessi tag, circuiti, carichi e altezze, e ogni chiamata è un solo passo di annullamento.

Un dispositivo non ottiene mai un tipo che lo strumento Elettrico non ha: un tipo sconosciuto viene rifiutato e all'assistente viene fornito l'elenco. Una presa o un interruttore deve trovarsi entro 600 mm da una faccia di parete, come un clic, altrimenti la chiamata viene rifiutata e non viene posizionato nulla. Le altezze predefinite sono in millimetri: 300 per le prese, 1100 per gli interruttori; un dispositivo a soffitto pende dal soffitto.

## Modificare ed elencare

Selezionare un dispositivo per cambiarne tag, circuito, carico (watt) e altezza di montaggio. Selezionarne più di uno per metterli tutti sullo stesso circuito in una volta. Premere {{key:Delete}} per rimuoverne uno; una luce eliminata viene tolta dai suoi interruttori.

In {{ui:Abachi}} scegliere **Dispositivi elettrici** per ogni dispositivo con il suo livello, circuito, carico, altezza e le luci accese da ciascun interruttore, oppure **Circuiti** per i dispositivi di ciascun circuito, il carico totale e la corrente. Entrambi sono anche nella tavola degli abachi del set di tavole: vedi [Prospetti, sezioni e tavole](topic:sheets).

:::note
Le altezze di montaggio e i carichi sono valori predefiniti di progetto (una presa a 16" da terra e 200 W, un interruttore a 48", una luce a soffitto da 60 W), non un progetto: l'elettricista o l'ingegnere dimensiona i circuiti e verifica le norme.
:::

:::tip
I simboli sono quelli che l'add-on Elettrico di CadCraft disegna sulle planimetrie di impianto, quindi un piano di una delle due app si legge allo stesso modo.
:::
