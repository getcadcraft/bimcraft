---
title: Instradare automaticamente condotte, scarichi, tubazioni dell'acqua e del refrigerante
summary: Nel controllo delle interferenze BimCraft trova un percorso intorno al modello aperto per condotte, scarichi a gravità, acqua fredda e calda e tubazioni del refrigerante split o multi-split, e disegna i tratti con i loro raccordi in un solo passo di annullamento. Strumento di disegno: dimensioni, pendenze e verifiche derivano dalle tabelle del programma e dai numeri digitati; nulla qui afferma che un progetto rispetti una normativa.
keywords: instradamento automatico, autorouting, instrada condotte, instrada tubazioni, scarico, sanitario, gravità, colonna, sfiato, sifone, acqua, acqua calda, anello di ritorno, ricircolo, refrigerante, split, multi-split, VRF, lunghezza equivalente, kit di derivazione, braga
from: 5841d513
---

## Che cosa si fa

Lasciare che BimCraft disponga una rete di tratti tra connettori già presenti nel modello, intorno a muri e travi, poi verificarla con numeri visibili.

## Passi

1. Aprire il modello e il controllo delle interferenze. Sotto **Instrada condotte automaticamente** scegliere un'unità di trattamento aria e i suoi terminali, oppure sotto **Instrada altri impianti automaticamente** scegliere un impianto.
2. **Scarico sanitario a gravità.** Digitare la posizione dell'uscita e, se disponibili, le posizioni delle colonne. Spuntare **Instrada ogni piano in una sola volta** per prendere ogni piano con apparecchi: gli scarichi di ciascun piano si collegano alla colonna alla propria quota, e la colonna va da sopra il rubinetto più alto fino al suo piede. Premere {{ui:Instrada}}.
3. **Sifone verso sfiato.** Il pannello elenca la distanza da ogni sifone al suo sfiato. Digitare in **Massima distanza da un sifone allo sfiato** il valore massimo consentito dalla normativa; ogni apparecchio oltre tale valore è elencato come non eseguito, con i millimetri in eccesso. Spuntare **Sfiato attraverso la colonna** quando gli apparecchi non hanno un proprio tratto di sfiato: la distanza è allora misurata fino alla colonna. BimCraft non include una tabella normativa per questo: il numero si digita.
4. **Acqua fredda e calda.** Scegliere la sorgente, digitare la pressione alla sorgente e la pressione richiesta a un apparecchio. Spuntare **Acqua calda**, scegliere il collegamento caldo dello scaldabagno, e spuntare **Anello di ritorno** per terminare una linea di ritorno sul collegamento di **ritorno caldo** dello scaldabagno, oppure su qualsiasi altro collegamento scelto (quest'ultimo termina 150 mm più corto, aperto, da collegare).
5. **Split, multi-split e VRF.** Scegliere l'unità esterna, spuntare le unità interne e digitare la capacità di ciascuna. Digitare i limiti dai dati del costruttore. Digitare la **lunghezza equivalente** di una curva e di un kit di derivazione (valori del costruttore): la lunghezza più lunga e quella totale vengono verificate sulle lunghezze equivalenti.
6. Premere {{ui:Instrada}}. Il pannello indica quanti tratti ha disegnato e che cosa non è riuscito a fare, e perché. {{ui:Annulla}} riporta tutto indietro in un solo passo.

## Che cosa si dovrebbe vedere

Tubi con gomiti, T e riduzioni; scarichi che scendono almeno della pendenza minima per la loro dimensione; tratti di sfiato agli apparecchi; linee del refrigerante come coppia di linee liquido e gas che svolta sempre nello stesso verso a ogni angolo, con un kit di derivazione segnato dove una derivazione si stacca dalla dorsale.

## Da sapere

- Dove uno scarico incontra un altro scarico il modello disegna una T. La pianta indica questi punti come giunzioni a braga a 45 gradi, così il raccordo si può modificare.
- L'acqua calda usa il collegamento caldo dell'apparecchio quando la sua famiglia ne ha uno, e un collegamento a 100 mm accanto a quello freddo quando non ne ha.
- Le linee del refrigerante partono tra le due bocche di ciascuna unità. Quando le due bocche di un'unità sono troppo vicine per una curva, la coppia resta centrata tra di esse.
- La rete idrica usa la curva di domanda e i valori di attrito mostrati nei calcoli; sostituirli con quelli della normativa prima di fidarsi delle pressioni.
- Le case grandi possono richiedere mezzo minuto o più, soprattutto per la rete calda.
- Questo è uno strumento di disegno. Una persona qualificata verifica dimensioni, pendenze, sfiati e pressioni rispetto alla normativa applicabile.

## Avanti

[Verificare le interferenze](topic:clash-check) · [Verificare tubi e condotte rispetto alla struttura](topic:mep-against-structure) · [Collegamenti tra tubi e apparecchiature](topic:mep-connections)
