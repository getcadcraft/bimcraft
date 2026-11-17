---
title: Verificare il tempo di riverbero di un locale e ascoltarlo
summary: Tempo di riverbero per banda d'ottava di ogni locale (Sabine ed Eyring) in base a dimensioni e finiture, con un obiettivo a scelta, e una voce, un battito di mani o musica riprodotti attraverso una risposta impulsiva calcolata del locale.
keywords: acustica, riverbero, tempo di riverbero, rt60, sabine, eyring, assorbimento, eco, suono, ascolto, risposta impulsiva, parlato, aula, ufficio, moquette, pannello di controsoffitto, rumore
from: 16996cbb
---

La sezione {{ui:Acustica dei locali}} del pannello di sinistra calcola per quanto tempo il suono persiste in ciascun locale. Legge da ogni locale superficie, altezza, pareti, porte e finestre dal modello IFC aperto. Nel modello non viene modificato nulla.

## Scegliere le finiture

Dove il modello indica cosa riveste una superficie, il locale la legge: lo strato interno di ogni tipo di parete (cartongesso, intonaco, mattone, calcestruzzo e blocco sono riconosciuti), il tipo di pavimento (legno o calcestruzzo) e se un soffitto è rivestito con pannelli. L'etichetta accanto a ogni scelta indica se proviene dal modello, è un valore predefinito o una scelta propria; per cambiarla, selezionare una finitura diversa. Ciò che il modello non indica resta sul valore predefinito. I coefficienti sono **valori tipici pubblicati**; sostituirli con i dati di prova di un prodotto quando disponibili. Inserire un **obiettivo** (il riverbero più lungo alle medie frequenze che si desidera) e ogni locale che lo supera viene segnalato, con l'assorbimento necessario per ridurlo.

## Leggere la tabella

Il riverbero è indicato da 125 Hz a 4 kHz. Sabine è adatto ai locali riverberanti ed Eyring a quelli smorzati; la riga contrassegnata *Usato* adotta Eyring dove l'assorbimento medio supera 0.2. È incluso l'assorbimento dell'aria (accorcia le bande alte nei locali grandi). Si tratta di un modello statistico: presuppone che il suono si diffonda uniformemente, quindi i locali lunghi o bassi e quelli molto piccoli danno solo un'indicazione approssimativa, e non vengono conteggiati arredi, persone e porte aperte.

## Ascoltare

{{ui:Riproduci in questo locale}} riproduce una voce (generata qui), un battito di mani, note pizzicate o **un proprio file audio** (resta sul computer) attraverso una risposta impulsiva calcolata per il locale: il suono diretto, le prime riflessioni di un volume a scatola di quelle dimensioni e una coda che si attenua con il tempo di riverbero proprio del locale in ogni banda. {{ui:Riproduci senza locale}} riproduce lo stesso suono, allo stesso livello, senza il locale. È possibile salvare la risposta impulsiva o il suono nel locale come file WAV. Suona come un locale di quelle dimensioni e finiture, non come un locale reale.

## Persone e arredi

Inserire il numero di **persone in questo locale** per aggiungerne l'assorbimento. Gli arredi presenti nel modello (divani, letti, sedie, tavoli, armadi, riconosciuti dal nome) aggiungono il proprio. I valori sono stime di progetto arrotondate; per un locale importante, sostituirli con misure.

## Sorgente e ascoltatore

In {{ui:Sorgente e ascoltatore}}, premere {{ui:Posiziona la sorgente}} o {{ui:Posiziona l'ascoltatore}} e fare clic sulla pianta del locale. Il suono riprodotto viene quindi percepito da quel punto: il suono diretto arriva dopo la distanza e la parte riverberante è al livello di quella distanza. Annullare entrambi per tornare alla casella della distanza.

## Assorbimento non uniforme e modi del locale

In {{ui:Assorbimento non uniforme (stanza a scatola)}}, inserire il locale come un box e scegliere le finiture di pavimento, soffitto e pareti. La tabella aggiunge Fitzroy e Arau-Puchades a Sabine ed Eyring: trattano separatamente le tre coppie di superfici opposte, così un locale con moquette e soffitto duro non risulta troppo corto. Quando le coppie differiscono molto, una nota indica quale considerare. Sotto la tabella, **Modi del locale** elenca le onde stazionarie più basse del box e la frequenza al di sotto della quale il locale ha modi distinti invece di un campo sonoro uniforme. Si tratta di previsioni per un locale a box, uno strumento di progetto e non di una misura.

## Unità

Superfici, altezze, volumi e distanze dei locali sono mostrati nelle {{ui:Unità}} scelte (piedi quadrati e cubici, pollici, millimetri, centimetri o metri). Il calcolo resta in SI; cambia solo la visualizzazione. Tempi (secondi), frequenze e livelli non cambiano.
