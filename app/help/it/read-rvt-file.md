---
title: Leggere un file di progetto o di famiglia
summary: Aprire un file .rvt, .rfa, .rte o .rft e leggerne la versione, il lavoro condiviso, le informazioni di progetto, i parametri di famiglia, i collegamenti e l'immagine di anteprima, senza il programma che l'ha creato.
keywords: rvt, rfa, rte, rft, file di progetto, famiglia, versione, quale versione, build, lavoro condiviso, centrale, informazioni di progetto, anteprima, miniatura, collegamenti
from: df3600e1
---

## Cosa farai

Scoprire cosa contiene un file di progetto o di famiglia senza aprirlo in Revit: quale versione lo ha salvato, se è in lavoro condiviso, le informazioni di progetto e a cosa si collega. Utile quando un file arriva da qualcun altro e serve sapere in quale versione aprirlo.

## Passaggi

1. Cliccare {{ui:Scegliere un file}}.
2. Scegliere un file `.rvt`, `.rfa`, `.rte` o `.rft`.
3. Attendere un momento. La riga di stato indica "Lettura del file…" e poi "Aperto *nome file*".
4. Guardare la parte alta della scheda: l'immagine di anteprima salvata nel file, il tipo di file, la versione con cui è stato salvato e il nome del progetto.
5. Scorrere in basso per leggere le sezioni della scheda.

## Cosa si vede

La scheda al centro, con queste sezioni quando il file le contiene:

| Sezione | Cosa indica |
|---|---|
| File | Nome file, dimensione, tipo (progetto, modello di progetto, famiglia o modello di famiglia), la versione e la build con cui è stato salvato, il lavoro condiviso, il percorso del modello centrale, dove è stato salvato l'ultima volta, chi lo ha salvato, la lingua e il GUID del documento |
| Informazioni di progetto | I campi propri del progetto, come nome, numero, cliente, indirizzo e stato. I campi ancora sui valori predefiniti del nuovo progetto vengono omessi. |
| Famiglia, Famiglia: … | Per una famiglia: il suo nome, la categoria, la versione, l'ultimo aggiornamento e i suoi parametri, gruppo per gruppo |
| File collegati e di riferimento | Ogni modello collegato, collegamento CAD, immagine e tabella di note che il file indica, con il suo percorso salvato |

A sinistra, il pannello {{ui:File}} ripete i dati principali e aggiunge **Letto**: quanto del file BimCraft ha effettivamente letto, di solito circa 40 KB di un file di molti megabyte. A destra, il pannello {{ui:Proprietà}} indica che le proprietà degli elementi richiedono il modello 3D.

## Perché non c'è il 3D

Il modello 3D e gli elementi all'interno di un file di progetto sono memorizzati in un formato non documentato. BimCraft legge solo le parti del file che sono documentate o chiaramente leggibili: le informazioni sul file, le informazioni di progetto, i dati di famiglia, l'elenco dei collegamenti e l'immagine di anteprima. Non tenta di indovinare il resto. Per vedere il modello in 3D e leggere le proprietà degli elementi, esportare IFC dal programma che ha creato il file. Vedi [Ottenere un file di progetto in 3D tramite IFC](topic:rvt-to-ifc).

## Errori comuni

- **Aspettarsi il 3D.** Vedi sopra.
- **I collegamenti mostrano solo il percorso salvato.** Un file aperto da solo non può verificare se i suoi collegamenti esistono. Aprire invece la cartella in cui si trova: BimCraft segnala ogni collegamento come trovato o non trovato. Vedi [Aprire un'intera cartella di progetto](topic:open-project-folder).
- **"Questo file è incompleto…"** Il file è stato interrotto durante la copia, il caricamento o la sincronizzazione. Lo stesso accade con un file su un'unità cloud ancora "solo online". BimCraft lo apre comunque e mostra solo ciò che è stato recuperato: un avviso ambra in alto nella scheda, una sezione **Recuperato da questo file** che elenca le parti di cui ogni byte è nel file, e **Non presente nel file** per il resto. Nulla viene riempito per la parte mancante, quindi versione, immagine di anteprima o informazioni di progetto possono mancare quando erano memorizzate oltre il punto di interruzione. Se è stato interrotto anche l'elenco del contenuto del file, non si può aprire nulla. Copiare di nuovo l'originale e riaprirlo per il file completo.
- **"Nessuna immagine di anteprima in questo file".** Alcuni file vengono salvati senza. È normale.
- **Aprire un backup per errore.** I file con nomi come `Tower.0004.rvt` sono backup numerati. Aprire la cartella li raggruppa con il loro modello.
