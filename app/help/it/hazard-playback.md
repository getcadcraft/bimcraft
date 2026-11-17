---
title: Riproduzione di alluvione, vento o terremoto sull'edificio
summary: Acqua che sale attraverso i locali, pressione del vento su ciascun piano o terremoto che scuote i piani, riprodotti su una pianta o un prospetto con un cursore temporale. Modelli semplici con le ipotesi elencate; non una verifica normativa né un progetto strutturale.
keywords: rischio, alluvione, vento, terremoto, sismico, drift, oscillazione, taglio alla base, livello dell'acqua, clima, scenario, innalzamento del livello del mare, riproduzione, piano, periodo
from: ff0d34d1
---

La sezione {{ui:Riproduzione di un evento pericoloso}} del pannello sinistro riproduce un evento pericoloso sul modello IFC aperto. Nulla nel modello viene modificato.

:::warning
Si tratta di **modelli semplici per vedere cosa un evento pericoloso fa a questa disposizione**, non di uno studio sulle alluvioni, di una verifica secondo le norme sul vento né di un progetto strutturale. Ogni risultato elenca le proprie ipotesi.
:::

## Alluvione

Impostare il livello massimo dell'acqua sopra il piano più basso e i minuti per salire, mantenere e scendere. L'acqua entra in un locale attraverso un'apertura la cui soglia è stata superata, e i locali collegati a locali bagnati da aperture sotto il livello dell'acqua si trovano allo stesso livello (quasi statico). La tabella indica quando ciascun locale si bagna per la prima volta e con quale profondità; la pianta riproduce l'evoluzione. Digitare la quantità massima d'acqua che un locale può contenere: i locali che la superano vengono segnalati come avvisi. **Scenari climatici futuri:** caricare un proprio file di scenario (JSON o CSV con un anno, un innalzamento del livello del mare e un fattore di alluvione) e scegliere un anno. Oppure attivare l'add-on Scenari climatici futuri e scegliere uno scenario e un anno: l'alluvione viene eseguita due volte, attuale e futura, affiancate (vedere "Scenari climatici futuri: alluvione, calore e incendi boschivi nel 2050 e nel 2080"). I tipi Esposizione agli incendi boschivi e Calore: file meteo futuro compaiono nello stesso elenco.

## Vento

La pressione segue ½ρV², con la velocità che cresce con l'altezza; la forza su un piano è questa pressione per un fattore di raffica, i due coefficienti di pressione, la larghezza e l'altezza del piano. Si ottengono il taglio, il momento di ribaltamento e l'oscillazione.

## Terremoto

Un edificio a taglio: una massa per piano (impronta × chilogrammi per metro quadrato, che si imposta), la stessa rigidezza in ogni piano calibrata sul primo periodo indicato (un decimo di secondo per piano se lo si lascia vuoto, e il programma lo segnala), smorzamento e un moto del suolo generato (un impulso o un rumore filtrato) con l'accelerazione di picco scelta. Il risultato è lo spostamento relativo di ciascun piano (drift), le accelerazioni dei piani e il taglio alla base; il prospetto riproduce l'oscillazione, disegnata più grande del reale. Digitare un rapporto di spostamento ammesso: i piani che lo superano vengono segnalati come avvisi. Il calcolo è elastico: nulla cede né si fessura.

## Rigidezza dei piani dal telaio di analisi

Per un terremoto o per l'oscillazione dovuta al vento, scegliere **Il telaio di analisi** come fonte della rigidezza invece di digitare un periodo. Ogni piano viene spinto lateralmente a turno, il telaio (travi, pilastri, controventi, solai) viene risolto, e la rigidezza dei piani con tutti gli elementi che lavorano insieme guida il calcolo. Il peso è quello degli elementi del telaio più il carico del solaio per metro quadrato impostato nella casella di ciascuna pianta. Viene mostrato il primo periodo reale. Il calcolo è elastico: nulla cede e la torsione non è modellata. Per il vento, le forze di piano restano quelle ipotizzate sopra (un profilo a legge di potenza, il proprio fattore di raffica e i coefficienti di pressione fissi, non una norma sul vento); solo l'oscillazione proviene dal telaio, risolvendo la matrice di rigidezza completa del telaio con quelle forze. Il modello richiede un IFC con un telaio che la scheda Analisi possa leggere.

## Unità di misura

Profondità dell'acqua, oscillazione e spostamento piano per piano, distanze e aree sono mostrate nelle {{ui:Unità}} scelte. Forze (kN), tempi e accelerazioni mantengono le proprie unità, e un valore digitato in una casella etichettata in metri resta in metri. Lo stesso vale per i risultati di evacuazione, luce naturale, riscaldamento e raffrescamento e arredo: lunghezze, aree e volumi seguono la scelta; pressione, portata, temperatura, energia e potenza non vengono mai convertite.
