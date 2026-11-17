---
title: Verifica tubazioni e canali rispetto alla struttura
summary: Eseguire i set di interferenze predefiniti di tubazioni e canali rispetto a muri, solai, travi e pilastri, trovare i percorsi più vicini alla struttura di quanto consentano isolamento e spazio libero, ed elencare in CSV e BCF le aperture che i percorsi richiedono attraverso muri e solai.
keywords: mep, interferenza, verifica interferenze, coordinamento, struttura, muri, solai, travi, pilastri, distanza libera, interferenza morbida, isolamento, spazio libero, apertura, aperture, penetrazione, guaina, carotaggio, opere murarie, bcf, csv
from: 2d597f01
---

## Cosa si farà

Assicurarsi che gli impianti si adattino all'edificio: cosa entra nella struttura, cosa passa troppo vicino e dove muri e solai richiedono fori. Aprire {{ui:Verifica delle interferenze}} nel pannello a sinistra; la sezione **Tubazioni e canali rispetto alla struttura** si trova sotto la verifica abituale.

## Interferenze rigide

Le liste dei due set ora offrono anche **Tubazioni e canali**, **Muri**, **Solai e tetti**, **Travi**, **Pilastri** e **Struttura** (tutti e quattro), con il numero di elementi che ciascuno contiene. Fare clic su {{ui:Tubazioni e canali × struttura}} per scegliere il primo e l'ultimo ed eseguire la verifica; oppure scegliere una coppia qualsiasi e fare clic su {{ui:Avvia}}. Vedi [Verifica delle interferenze](topic:clash-check).

## Distanze libere

Alcuni impianti richiedono spazio intorno a sé: il loro isolamento e lo spazio per lavorare o per una guaina.

1. Assegnare a un percorso di tubazione o canale lo spessore **Isolamento** nelle Proprietà (per esso non viene disegnato nulla).
2. Digitare lo **Spazio libero intorno a tubazioni e canali** (mm) nella Verifica delle interferenze.
3. Fare clic su {{ui:Verifica le distanze}}: ogni parte più vicina a un muro, solaio, trave o pilastro di quanto siano il suo isolamento più lo spazio libero viene elencata con la distanza che ha e quella che richiede. Fare clic su una riga per vedere le due.

Una parte che attraversa un muro o un solaio è un'apertura, non una distanza libera, e viene elencata lì.

## Aperture necessarie

Fare clic su {{ui:Aperture necessarie}}. Dove la linea centrale di un percorso attraversa un muro o un solaio, BimCraft elenca l'apertura che serve: tonda per una tubazione o un canale tondi, altrimenti rettangolare, grande quanto la dimensione esterna del percorso più il doppio del suo isolamento più il doppio dello spazio libero, centrata nel punto in cui il percorso attraversa. Fare clic su una riga per vedere il percorso e il muro o il solaio.

- {{ui:Aperture come CSV}}: una riga per apertura, con il percorso, la sua dimensione e il suo isolamento, la dimensione dell'apertura, l'elemento attraversato e il suo GlobalId, il piano, le coordinate X, Y e Z del centro e di quanto il percorso attraversa.
- {{ui:Aperture come segnalazioni BCF}}: una segnalazione per apertura, con una telecamera che la inquadra e il percorso e l'elemento scelti, per il programma dell'ingegnere strutturista.

:::note
Non si taglia nulla: le aperture sono un elenco per chi le dimensiona. Lo spazio libero si digita a mano; nessuna norma dice quanto deve essere grande un'apertura. Travi e pilastri sono interferenze, non aperture: se una tubazione possa passare attraverso uno di essi spetta all'ingegnere strutturista.
:::
