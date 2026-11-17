---
title: Lavorare tra due programmi BIM
summary: Inviare un modello da un programma BIM a un altro tramite IFC con BimCraft nel mezzo, conservare i suoi GlobalId, i set di proprietà e le classificazioni, impostare entrambi i programmi per le stesse proprietà, e vedere cosa è tornato indietro.
keywords: ifc, andata e ritorno, interoperabilità, globalid, guid, set di proprietà, psets, classificazioni, parametri condivisi, mappatura delle proprietà, traduttore, bcf, coordinamento, scambio
from: 9f224176
---

## Cosa si fa

Spostare un modello tra due programmi BIM, per esempio da Revit ad Archicad e ritorno, tramite IFC, con BimCraft nel mezzo per verificarlo, aggiungervi contenuti e riportare ciò che è sopravvissuto. Il formato file proprio di nessuno dei due programmi viene letto: tutto passa come IFC.

## Cosa conserva BimCraft

Quando si modifica un modello in BimCraft e si fa clic su {{ui:Salva come IFC}}, ogni riga che non si è modificata viene riscritta esattamente com'era. Quindi:

- I **GlobalId** restano gli stessi, e l'altro programma può abbinare ogni elemento a quello che ha inviato.
- I **set di proprietà** e i loro valori restano, a parte i valori modificati.
- Le **classificazioni** restano collegate ai loro elementi.

## Impostare entrambi i programmi per le stesse proprietà

1. Aprire il modello in BimCraft (e il pacchetto di progetto, se se ne ha uno: i suoi gruppi di proprietà vengono aggiunti).
2. Nel pannello a sinistra, aprire {{ui:Tra due programmi BIM}}.
3. In **Mappatura delle proprietà**, scaricare ciò che ciascun programma richiede:
   - {{ui:Parametri condivisi}}: un file di parametri condivisi. In Revit caricarlo con Gestisci › Parametri condivisi e aggiungere i parametri alle categorie che li richiedono.
   - {{ui:Set di proprietà per l'esportazione IFC}}: un file di set di proprietà definito dall'utente. Nelle impostazioni di esportazione IFC di Revit, sceglierlo tra i set di proprietà definiti dall'utente, così l'IFC esportato porta lo stesso set e gli stessi nomi di proprietà.
   - {{ui:Tabella di mappatura (CSV)}}: ogni proprietà con il suo set e nome IFC, il suo tipo e i nomi corrispondenti in ciascun programma. I file di mappatura di Archicad non sono un formato pubblicato, quindi configurare a mano il suo traduttore IFC e il gestore delle proprietà partendo da questa tabella.
   - {{ui:File di mappatura}}: l'intera mappatura come un unico file, da conservare con il progetto.

I set standard (Pset_ e Qto_) sono esclusi dal file dei parametri condivisi: entrambi i programmi li scrivono dai propri dati.

## Inviare il modello e riportarlo indietro

1. Esportare IFC dal primo programma mantenendo i GlobalId (Revit: "Memorizza il GUID IFC in un parametro dell'elemento dopo l'esportazione" attivato).
2. Aprirlo in BimCraft, verificarlo ({{ui:Controlli del modello}}, {{ui:Verifica delle interferenze}}), aggiungere segnalazioni ({{ui:Segnalazioni}}, BCF), modificare i valori se serve, e fare clic su {{ui:Salva come IFC}}.
3. Aprire l'IFC salvato nel secondo programma, lavorarci, ed esportare IFC da lì mantenendo i GlobalId (traduttore di Archicad: "Identificatori unici globali: Mantieni esistenti").
4. Di nuovo in BimCraft, aprire il modello uscito, poi aggiungere quello tornato ({{ui:Aggiungi un modello}} in Modelli).
5. In {{ui:Tra due programmi BIM}}, scegliere **Inviato** e **Tornato**, e fare clic su {{ui:Crea il rapporto}}.

## Leggere il rapporto

- **Elementi**: quanti sono tornati con lo stesso GlobalId, quanti mancano e quanti sono nuovi. Gli elementi con un nuovo GlobalId compaiono come uno mancante e uno nuovo: l'altro programma non lo ha conservato.
- **Classe IFC cambiata**: elementi tornati come un altro tipo di elemento.
- **Valori delle proprietà conservati**: la quota di valori tornati invariati. L'elenco sotto mostra le proprietà con più valori modificati o mancanti.
- **Classificazioni**: conservate, modificate (stesso sistema, altro codice) oppure mancanti.

{{ui:Scarica il rapporto (CSV)}} fornisce ogni proprietà con i suoi conteggi. Per vedere quali elementi si sono spostati o hanno cambiato forma, usare {{ui:Confronta versioni}} sugli stessi due modelli.

:::note
BimCraft non esegue nessuno dei due programmi. Quali impostazioni trasportano un valore dipende dalle impostazioni IFC di ciascun programma: il rapporto mostra ciò che è tornato davvero, quindi provare un'impostazione, esportare di nuovo e confrontare.
:::

## Le segnalazioni viaggiano come BCF

Le segnalazioni create in BimCraft vengono esportate come BCF ({{ui:Segnalazioni}}), che entrambi i programmi possono leggere con i loro strumenti BCF, così una domanda su un elemento arriva alla persona che lavora nell'altro programma con il suo punto di vista.

Vedi anche [Aprire un pacchetto di progetto](topic:open-project-bundle), [Dal file di progetto a BimCraft tramite IFC](topic:rvt-to-ifc) e [Confrontare due versioni di un modello](topic:compare-versions).
