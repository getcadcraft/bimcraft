---
title: Far camminare le persone nell'edificio
summary: Un'evacuazione o l'arrivo normale di una giornata attraverso locali, porte e scale, con code dove l'edificio si restringe, il percorso più lungo verso un'uscita da ogni locale e i risultati come Problemi. Un modello di folla approssimativo per decisioni progettuali, non un certificato antincendio.
keywords: persone, evacuazione, esodo, fuga, uscita, distanza di percorrenza, coda, folla, flusso, larghezza della porta, scale, arrivi, collo di bottiglia, simulazione, occupanti, pedoni, cosa succede se, porta bloccata
from: 84aa8920
---

La sezione {{ui:Persone nell'edificio}} del pannello a sinistra fa camminare le persone attraverso locali, porte e scale del modello IFC aperto. Nel modello non viene modificato nulla e nulla viene caricato.

:::warning
Questo è **uno strumento di progettazione, non un certificato antincendio**. Non tiene conto di fuoco, fumo, panico, differenze di mobilità o di ciò che una norma richiede. I limiti restano a carico di chi progetta: la distanza più lunga verso un'uscita e il tempo disponibile sono valori digitati, e nessuno viene assunto.
:::

## Avviare

1. Aprire un modello con locali chiusi e porte. Una porta con un locale su un solo lato è un'uscita; una porta tra due locali li collega; una scala collega i locali alle sue estremità.
2. Scegliere **Evacuazione** (tutti camminano verso un'uscita), **Arrivi** (tutti entrano e raggiungono un locale) oppure **Scambio** (le persone nei locali escono mentre altrettante entrano), e la superficie di pavimento per persona. I locali con nomi come corridoio, scala, atrio o servizi igienici non ospitano nessuno.
3. Fare clic su {{ui:Avvia}}. Si ottengono l'ora in cui l'ultima persona è uscita (e quando lo sono la metà e nove su dieci), la coda a ogni porta e scala, il locale con il percorso più lungo e una pianta che riproduce la simulazione.

## Ipotesi

Spuntare {{ui:Chiusa}} su una porta nella tabella e avviare di nuovo: le persone trovano un'altra strada, oppure i locali senza via d'uscita sono elencati come errori. Una porta due volte più larga svuota un locale molto prima; la tabella mostra dove si formano le code.

## Come funziona

Ogni locale è una griglia, quindi le persone girano intorno agli angoli, non attraverso i muri. La velocità cala man mano che un locale si riempie (S = 1.4 (1 − 0.266 D) m/s, D in persone per m²). Una porta lascia passare 1.3 persone al secondo per ogni metro della sua larghezza, meno 150 mm per lato; una scala 1.0 e più lenta nel cammino. Le persone aspettano in una coda in ordine di arrivo. Un numero di esecuzione ripete esattamente la stessa simulazione.

L'assistente può eseguire la stessa cosa: richiedere un'evacuazione, oppure il percorso più lungo verso un'uscita da ogni locale.

## Persone in ogni locale

Aprire {{ui:Persone in ogni locale}} per digitare un numero per qualsiasi locale. Una casella vuota usa il dato della superficie (mostrato in grigio); 0 svuota un locale. I numeri digitati vengono usati nella simulazione e sono conservati in questo browser.

## Flusso contrario alle porte

In **Scambio**, le persone che escono e quelle che entrano si incontrano nelle stesse porte. Quando una porta fa passare qualcuno in senso opposto subito dietro l'ultima persona, mantiene una parte della sua portata (qui 0.8; è un'ipotesi, perché i valori pubblicati variano), e la tabella conta i cambi di direzione. Una porta che cambia direzione spesso è elencata in Problemi come nota.

## Scale e pianerottoli

Ogni pianerottolo di una scala costa a chi cammina un secondo per girarsi (un'ipotesi). Una scala dritta non ne ha; una scala a L o a U ne ha uno. La portata della scala dipende comunque dalla larghezza della sua rampa.

## Nella vista 3D

Spuntare {{ui:Mostra le persone nella vista 3D}} e i pedoni compaiono come figure nel modello, colorati in base a ciò che stanno facendo, e si muovono mentre si riproduce la simulazione. Nel modello non viene aggiunto nulla.
