---
title: Verifica elementi in calcestruzzo e crea carichi sismici
summary: Impostare le armature di travi e pilastri in calcestruzzo del modello aperto, verificarli secondo ACI 318-19, calcolare le forze orizzontali equivalenti secondo ASCE 7-22 su solai rigidi e mostrare lo spostamento relativo di piano. Un ausilio per la verifica da parte di un ingegnere.
keywords: calcestruzzo, calcestruzzo armato, ACI 318, ACI 318-19, armatura, ferri, trave, pilastro, taglio, staffe, sismica, terremoto, forza laterale equivalente, ELF, ASCE 7-22, spostamento, spostamento di piano, solai, diaframma rigido, peso di piano, utilizzo, strutturale, ingegnere, analisi
from: 2f342e72
---

I blocchi {{ui:Elementi in calcestruzzo}} e {{ui:Carichi sismici}} della scheda {{ui:Analisi}} verificano travi e pilastri in calcestruzzo armato dell'IFC aperto, e calcolano le forze orizzontali di un terremoto sui solai del suo telaio. Sono gli stessi blocchi di DetailCraft, eseguiti dopo l'analisi della scheda {{ui:Analisi}} e salvati nell'IFC insieme alle altre impostazioni di analisi.

:::warning
I risultati sono **per la verifica da parte di un ingegnere**: un ausilio finché non ne è stato fatto un controllo. Le verifiche del calcestruzzo usano le sollecitazioni del primo ordine (un pilastro in un telaio considerato non soggetto a spostamenti laterali viene dimensionato per il suo momento amplificato), senza amplificazione per spostamento laterale, senza progetto a torsione, senza dettagli sismici (capitolo 18 ACI) e senza dettagli delle staffe. I carichi sismici non tengono conto del fattore di ridondanza, dell'effetto sismico verticale, dell'amplificazione torsionale ed effetti P-delta. **I carichi del vento non sono ancora implementati**: i capitoli della norma sul vento non sono presenti nelle pagine di riferimento del progetto.
:::

## Cosa legge BimCraft

L'analisi legge travi, pilastri e controventi del modello con i loro profili (vedere [Analizzare il telaio strutturale](topic:frame-analysis)). Il blocco {{ui:Elementi in calcestruzzo}} elenca ogni sezione che usano. Premere {{ui:Imposta come calcestruzzo…}} su una sezione che è in calcestruzzo: BimCraft ricava un rettangolo dall'area e dalla rigidezza del profilo (la larghezza b e l'altezza h, che si possono poi modificare). Una sezione non vicina a un rettangolo, come un profilo in acciaio laminato, dà una dimensione da correggere, oppure viene lasciata invariata.

Una sezione impostata come calcestruzzo, e ogni elemento il cui materiale è denominato calcestruzzo, viene analizzata come calcestruzzo: E = 4700 √f′c, 2400 kg/m³, e per impostazione predefinita con **sezioni fessurate** (pilastri 0.70 Ig, travi 0.35 Ig; ACI 318-19 Tabella 6.6.3.1.1(a)). Scegliere {{ui:Sezioni lorde}} per disattivarle. Senza queste impostazioni il modello viene analizzato esattamente come prima.

## Armature, combinazioni, verifica

Indicare il copriferro, le armature superiori, inferiori e laterali (oppure una gabbia per i pilastri) e le staffe di ogni sezione; impostare f′c, fy, fyt, K e, per i pilastri, con o senza spostamento laterale (sway o non-sway). Assegnare ai casi di carico il loro tipo, premere {{ui:Crea le combinazioni}} (ASCE 7 §5.3.1) e poi {{ui:Verifica il calcestruzzo}}: ogni elemento riceve un utilizzo, colorato sul modello. Gli elementi oltre la capacità e uno spostamento di piano oltre il limite sono elencati in {{ui:Problemi}} con la loro clausola; fare clic su uno di essi per selezionare l'elemento.

## Solai e carichi sismici

Nel blocco {{ui:Carichi sismici}}, {{ui:Trova i piani}} individua i livelli in cui si incontrano due o più travi; ciascuno diventa un diaframma rigido. {{ui:Prendi i pesi dai casi}} legge il peso sismico di ogni solaio dai casi cui si assegna un fattore. Compilare SDS, SD1, S1, R, Ie, Cd, TL, il sistema e la categoria di rischio, poi {{ui:Crea i casi sismici}} (ASCE 7-22 12.8: periodo, taglio alla base, distribuzione lungo i piani, torsione accidentale del 5 %). Le forze di piano e la verifica dello spostamento relativo (12.12) compaiono dopo un'esecuzione. Lo stesso periodo e la stessa rigidezza di piano alimentano il terremoto in [Riprodurre un'alluvione, un vento o un terremoto](topic:hazard-playback) quando si sceglie il telaio di analisi come sua fonte.

Solai e muri in calcestruzzo diventano piastre nell'analisi, e il blocco {{ui:Armatura dei solai}} calcola l'acciaio necessario per metro. I dettagli di ogni verifica sono nell'argomento di DetailCraft con lo stesso nome.
