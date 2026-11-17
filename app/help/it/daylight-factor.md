---
title: Stimare la luce naturale in ogni locale
summary: Il fattore medio di luce diurna di ogni locale in base alle sue finestre, alle superfici interne e al cielo visto da ciascuna finestra, con l'angolo del cielo misurato nel modello. Una stima in fase di progettazione preliminare, non una simulazione né una verifica normativa.
keywords: luce diurna, fattore di luce diurna, fattore medio di luce diurna, adf, componente di cielo verticale, vsc, guadagno solare, sole, valore g, griglia, flusso suddiviso, componente di cielo, componente riflessa internamente, luce naturale, finestra, vetrazione, angolo del cielo, ostruzione, ombreggiamento, balcone, aggetto, riflettanza, trasmittanza, progettazione preliminare, analisi, locali, spazi
from: 5f300a78
---

La scheda {{ui:Luce naturale}} nel pannello di destra calcola il **fattore medio di luce diurna** di ogni locale: quanta parte della luce di un cielo coperto esterno raggiunge il locale, in media, in percentuale. Legge i locali (spazi) e le finestre del modello IFC aperto. Nel modello non viene cambiato nulla e non viene caricato nulla.

:::warning
Tutto ciò che è in questa scheda è **uno strumento di progettazione, non un calcolo di conformità**: stime preliminari con metodi pubblicati, **non una simulazione** e **non una verifica rispetto a un codice edilizio o a una norma**. BS EN 17037, LEED, BREEAM e i codici energetici richiedono una simulazione della luce diurna con il clima del luogo; per quelli usare un programma di simulazione della luce diurna.
:::

## Come si calcola

1. Aprire un modello IFC che abbia locali (spazi) e finestre. I modelli disegnati qui hanno un locale all'interno di ogni insieme chiuso di muri.
2. Aprire la scheda {{ui:Luce naturale}} e fare clic su {{ui:Calcola}}.
3. Ogni locale mostra il suo fattore di luce diurna e una fascia: sotto il 2 %, 2–5 %, 5 % o più. Fare clic su un locale per vedere le sue superfici e l'area e l'angolo del cielo di ogni finestra; il locale e le sue finestre vengono selezionati nel modello.

Modificando un dato di ingresso, i valori si aggiornano subito; dopo aver modificato il modello, fare clic su {{ui:Calcola di nuovo}}. {{ui:CSV}} salva ogni locale con i suoi valori e i dati usati.

## La formula

Fattore medio di luce diurna (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sommato sulle finestre del locale (formula di Littlefair, usata da BRE 209, BS 8206-2 e CIBSE LG10):

- **T**, la trasmittanza luminosa del vetro (0.7 come valore iniziale: usare il dato del produttore).
- **Ag**, l'area vetrata: l'area di ogni finestra (larghezza × altezza totali, altrimenti la sua dimensione nel modello) × la **quota vetrata** (0.75 come valore iniziale: il resto è telaio).
- **θ**, l'angolo di cielo visto dalla finestra, in gradi (sotto).
- **M**, il fattore di manutenzione per lo sporco sul vetro (1 come valore iniziale).
- **A**, ogni superficie interna del locale: pavimento, pareti, soffitto e finestre, ricavate dalla forma propria del locale.
- **R**, la loro riflettanza media, pesata per area: pavimento 0.2, pareti 0.5, soffitto 0.7 come valori iniziali; il vetro conta come 0.1.

## Come si misura l'angolo del cielo

Per ogni finestra BimCraft taglia il modello con un piano verticale perpendicolare alla finestra, a partire dalla faccia esterna del vetro, e guarda dall'orizzonte direttamente verso l'alto: tutto ciò che il taglio incontra davanti alla finestra (un edificio di fronte, un balcone o un aggetto sopra, la gronda) nasconde una parte di quei 90°. θ è ciò che resta. La finestra stessa e il muro in cui si trova sono esclusi. Lo fa in cinque punti lungo la larghezza della finestra e ne prende la media, così un montante sottile davanti al centro prende la sua parte, non tutto il cielo.

Un edificio alto 8.5 m sopra il centro della finestra e distante 9.9 m nasconde 40.65° (l'angolo la cui tangente è 8.5 ÷ 9.9), lasciando θ = 49.35°.

## Componente di cielo verticale di ogni finestra

{{ui:Calcola}} misura anche, per ogni finestra, quanto vede dell'intero cielo: lo stesso taglio verticale, ruotato in ogni direzione lungo il fronte della finestra (ogni 2°, da un lato all'altro), così un edificio di lato, un'aletta o uno sguincio profondo prendono la loro parte. Da questo BimCraft calcola la **componente di cielo verticale (VSC)**: quanta luce del cielo coperto raggiunge il vetro, come quota di ciò che riceverebbe un tetto piano e aperto. Una finestra senza nulla davanti ottiene il **39.6 %**, il massimo per una finestra verticale; un edificio lungo che si alza di 25° sopra la finestra lascia circa il **27 %**, il valore che le linee guida britanniche (BRE 209) usano come regola pratica. Ogni finestra nel dettaglio di un locale mostra la sua VSC e il suo **angolo di ostruzione** (quanto in alto si alzano le cose direttamente davanti a essa).

Il cielo è il cielo coperto standard CIE, che è tre volte più luminoso direttamente sopra che all'orizzonte, e il taglio è esatto: nulla viene campionato.

## Il sole attraverso le finestre in una data

Aprire {{ui:Sole attraverso le finestre in una data}} e scegliere una data. BimCraft segue il sole durante quella giornata a intervalli di un quarto d'ora e somma, per ogni finestra, il calore che il sole fa passare attraverso il vetro:

- il **sole diretto**, quando è davanti alla finestra e niente nel modello lo nasconde (lo stesso taglio esatto, rivolto verso il sole: un balcone che ombreggia il sole alto d'estate a mezzogiorno lascia entrare il sole basso d'inverno);
- la **luce del cielo** sul vetro, meno ciò che la finestra non può vedere;
- la luce **riflessa dal suolo** (la sua riflettanza: 0.2 come valore iniziale);
- tutto attraverso il **valore g** del vetro (la quota di energia solare che lascia passare: 0.6 come valore iniziale; usare il dato del produttore) e la sua quota vetrata.

Ogni locale mostra il totale della giornata in kWh e il suo picco in watt con l'ora; il dettaglio di un locale disegna la giornata come grafico. Il cielo è sereno secondo il modello di Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), con i valori estivi o invernali del luogo e della stagione e l'altezza del sito; la posizione del sole è quella di NOAA. La latitudine e la longitudine del sito provengono dal sito IFC, e il nord dal nord reale del modello; se il modello non ha un sito, digitare latitudine e longitudine. Gli orari sono quelli standard (senza ora legale) nel fuso orario digitato, altrimenti quello suggerito dalla longitudine.

Cosa non include: le nuvole (è una giornata serena), il vetro che lascia entrare meno luce con angoli bassi, i telai che ombreggiano il vetro, le tende, e ciò che le pareti e il tetto assorbono. La stima di raffrescamento nella stessa scheda usa il picco.

## Il fattore di luce diurna su una griglia

Aprire {{ui:Fattore di luce diurna su una griglia}} e {{ui:Calcola la griglia}}: BimCraft disegna una griglia sul pavimento di ogni locale all'altezza del piano di lavoro (0.85 m come valore iniziale), a mezzo metro dalle pareti, e calcola il fattore di luce diurna in ogni punto con il **metodo del flusso suddiviso BRE**:

- la **componente di cielo**: il cielo coperto visto dal punto attraverso l'apertura di ogni finestra, meno i telai;
- la **componente riflessa esternamente**: ciò che il punto vede degli edifici esterni attraverso la finestra, illuminati a un decimo della luminosità del cielo dietro di essi (modificare la luminosità dell'ostruzione se sono molto più chiari o più scuri);
- la **componente riflessa internamente**: la luce che rimbalza nel locale, dalle superfici del locale e dalle loro riflettanze, dall'area delle finestre e da quanta è esterna ad esse (la formula BRE, con la trasmittanza del vetro al posto del vetro trasparente che essa presupponeva).

Ogni locale mostra la sua media, il punto più basso e quanta parte riceve il 2 % o più; il dettaglio di un locale disegna la sua pianta con ogni punto colorato in base al proprio fattore di luce diurna e le finestre in rosso. Per mantenere il calcolo veloce su qualsiasi computer, un locale ha al massimo **400 punti**: in un locale grande l'interasse cresce per adattarsi (digitare un interasse per sceglierne uno proprio).

## Cosa non include

- Le finestre in copertura (vetri piani o inclinati) sono elencate ma non conteggiate: le formule qui sono per le finestre nelle pareti.
- Le finestre senza un locale dietro (un atrio senza spazio, per esempio) sono elencate a parte.
- Sguinci delle finestre (l'apertura è presa sulla faccia esterna), abbagliamento, ore di sole e luce diurna basata sul clima. Per BS EN 17037, LEED o BREEAM usare un programma di simulazione della luce diurna.
- Le fasce provengono dalle linee guida britanniche più datate (BS 8206-2), mostrate come guida, mai come esito positivo o negativo.
