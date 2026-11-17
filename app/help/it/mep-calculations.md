---
title: Dimensionamento di tubazioni e canali, riempimento dei cavi e illuminazione
summary: Verificare le dimensioni delle tubazioni e dei canali di alimentazione con la perdita di pressione, instradare i cavi in passerelle e tubi guida e vederne il riempimento, e calcolare l'illuminamento nei locali da file IES o EULUMDAT. I valori predefiniti sono etichettati; digitare i valori della norma in vigore.
keywords: dimensionamento, dimensionamento tubazioni, dimensionamento canali, perdita di pressione, unità di apparecchio, domanda, hunter, hazen-williams, velocità, attrito, attrito uguale, pressione del ventilatore, serranda, percorso critico, passerella portacavi, tubo guida, riempimento, tabella dei cavi, ies, ldt, eulumdat, fotometria, illuminamento, lux, uniformità, calcolo illuminotecnico, densità di potenza, mep, calcoli, problemi
from: 9cb90815
---

## Cosa si farà

Disegnare tubazioni, canali, passerelle e tubi guida come di consueto, poi aprire il riquadro **Calcoli**. Ogni scheda legge il modello, mostra una tabella ed elenca ciò che non va come Problemi nel pannello ⚠. Quando una dimensione risolverebbe un Problema, **Applica dimensioni** modifica i percorsi con un'unica operazione di {{ui:Annulla}}.

Questi sono strumenti di supporto al disegno. Ogni valore predefinito è etichettato a schermo, e nessuno di essi è una tabella normativa: digitare i numeri della norma a cui si progetta e far verificare il risultato dall'ingegnere che ne risponde.

## Tubazioni

1. Scegliere la chiave del **sistema** (acqua fredda è `cw`, acqua calda `hw`).
2. Impostare la velocità massima e, se si vuole verificare la pressione, la pressione alla sorgente e la pressione minima necessaria a un apparecchio.
3. Fare clic su {{ui:Verifica}}.

Ogni tubo porta la domanda delle unità di apparecchio che sono a valle di esso. La domanda deriva da una curva di unità di apparecchio rispetto alla portata, secondo il metodo descritto da Hunter. **La curva integrata è un esempio, non una tabella normativa**; i Problemi lo segnalano finché non si digita la propria. L'attrito è Hazen–Williams, i raccordi sono coefficienti di perdita, e un dislivello costa 9.8 kPa per metro. Le unità di un apparecchio derivano dal suo tipo, oppure dal numero impostato con lo strumento assistente `loads_set`.

## Canali

Impostare il sistema, il tasso di attrito (attrito uguale) o una velocità, e le eventuali perdite di batteria, filtro o silenziatore. I terminali prendono la portata d'aria da `loads_set` sul diffusore. La tabella mostra velocità e attrito per ogni tratto, la **pressione del ventilatore** sul percorso critico e la pressione che la serranda di ciascun altro terminale deve assorbire. Le perdite dei raccordi usano coefficienti predefiniti arrotondati, non una banca dati di raccordi.

## Passerelle e tubi guida

Disegnarli con lo strumento Canale: i sistemi **Passerella portacavi** e **Tubo guida** vengono salvati come condotti per cavi, così gli altri programmi li leggono come passerelle e tubi guida. Nella scheda Cavi, incollare l'elenco dei cavi (sigla, diametro esterno in mm, numero, da, a). `da` e `a` sono la sigla di un apparecchio oppure un punto `x,y,z` in millimetri. I cavi seguono il percorso continuo più breve attraverso passerelle e tubi guida; ogni percorso mostra il proprio riempimento rispetto ai limiti che si digitano, e la tabella si salva come CSV con una lunghezza che include una percentuale di abbondanza e gli estremi.

## Illuminazione

Assegnare a ciascun apparecchio luminoso il suo file IES (LM-63) o EULUMDAT con lo strumento assistente `photometry_set`. Digitare i valori obiettivo, la spaziatura della griglia e l'altezza del piano di lavoro. Il risultato è solo illuminamento **diretto**: nessuna riflessione tra superfici e nessuna ombra, quindi è un valore minimo in un locale.

## Sprinkler antincendio

Il componente aggiuntivo **Sprinkler antincendio** ha una propria scheda; vedere la sua guida.
