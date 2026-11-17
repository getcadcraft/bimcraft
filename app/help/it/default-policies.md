---
title: "Criteri predefiniti: impostare con cosa parte un nuovo edificio"
summary: Indicare una volta quale tipo di muro, livelli, primo foglio, tag LOD, unità e strumento usa un nuovo edificio, per progetti metrici e imperiali, e condividere i criteri in ufficio come un piccolo file.
keywords: predefinito, predefiniti, criteri predefiniti, criterio, standard di ufficio, impostazioni predefinite di ufficio, modello, nuovo edificio, primo tipo di muro, muro metrico, muratura, LOD, livello di sviluppo, primo foglio, foglio, scala, livelli, altezza di piano, nomi dei livelli, strumento muro, unità, condivisione, esportazione, importazione, json
from: 42379aa5
---

## Cosa si fa

Indicare a BimCraft con cosa deve partire un nuovo edificio, così nessuno in ufficio deve cambiare le stesse cose ogni volta. È un add-on: resta disattivato finché non lo si attiva, e un criterio non impostato lascia il valore predefinito di BimCraft esattamente com'è.

:::note
Questi sono valori predefiniti per gli edifici **nuovi** e le cose **nuove**. Un progetto già avviato non viene modificato.
:::

## Passaggi

1. Aprire le Impostazioni, andare su {{ui:Add-on}} e attivare {{ui:Criteri predefiniti}}.
2. Nelle Impostazioni aprire la scheda **BimCraft** e scegliere {{ui:Criteri predefiniti}} nell'elenco a sinistra.
3. Impostare i criteri desiderati. Ognuno parte su **quello di BimCraft**, con ciò che è indicato tra parentesi. Un criterio con una casella **Metrico** e una **Imperiale** accetta un valore per ogni tipo di progetto; compilare solo quelle necessarie.
4. Non c'è un pulsante Salva: ogni modifica viene salvata appena la si fa. Un valore non utilizzabile viene rifiutato con un messaggio e il vecchio valore resta.
5. Fare clic su {{ui:Nuovo edificio}}. La finestra di dialogo viene compilata con i criteri, e ogni valore impostato da un criterio riporta accanto **da Criteri predefiniti**. È ancora possibile modificarne uno qualsiasi prima di {{ui:Crea}}.

## I criteri

- **Unità di un nuovo edificio**: le unità passano a questa scelta alla creazione.
- **Numero di livelli**, **Nomi dei livelli** e **Altezza di piano**. In un nome, `{n}` conta 1, 2, 3; `{n0}` conta 0, 1, 2; `{nn}` e `{nn0}` fanno lo stesso con due cifre. Quindi `Piano {nn0}` dà Piano 00, Piano 01, Piano 02.
- **Primo tipo di muro**: ciò che lo strumento Muro disegna per primo. Un ufficio metrico può partire con Muratura esterna 300 mm mentre i progetti imperiali mantengono Esterno 2×6.
- **Tag LOD sui tipi di muro iniziali**: il livello di sviluppo (da LOD 100 a 500) che i nove tipi iniziali mostrano ovunque venga elencato un tipo. Vedi [Costruire le stratigrafie dei muri](topic:wall-assemblies).
- **LOD di un tipo di muro appena creato**: il tag con cui parte un nuovo tipo nell'editor dei tipi. È possibile modificarlo lì.
- **Primo foglio**: il suo formato, scala, numero e nome (usare `{level}` per il nome del livello più basso), oppure nessun primo foglio.
- **Dimensioni delle annotazioni su carta** (Impostazioni › Globale › Criteri predefiniti): le altezze dell'ufficio, in millimetri come stampati, per note, testo delle quote, tag, nomi dei locali, lettere dei cerchietti di griglia, titoli delle viste e testo degli abachi. Un nuovo edificio le prende alla creazione e le mantiene nel suo file. Vedi [Disegnare a grandezza reale, annotare in scala](topic:annotation-sizes).
- **Strumento attivo dopo la creazione**: Seleziona, come fa BimCraft da sé, oppure Muro, così i primi due clic sulla pianta disegnano già un muro.

## Impaginazione degli abachi: lo standard dell'ufficio

In **Impostazioni › Globale › Criteri predefiniti**, sotto **Impaginazione dell'abaco (standard dell'ufficio)**, impostare come viene raggruppato ogni abaco, se ha subtotali e un totale, il suo titolo e il maiuscolo o minuscolo delle intestazioni di colonna. Ogni abaco che non dichiara le proprie li prende, chiunque lo configuri. Vedi [Impaginare, salvare ed esportare un abaco](topic:schedule-layouts).

## Condividerli in ufficio

1. Nelle Impostazioni aprire la scheda **Globale** e scegliere {{ui:Criteri predefiniti}}.
2. Digitare il **Nome dell'ufficio**, se si vuole. Viene scritto nel file.
3. Fare clic su {{ui:Salva in un file}}. Si ottiene un piccolo file che termina con `.ccdefaults.json`.
4. Su un altro computer, attivare l'add-on, aprire lo stesso punto e fare clic su {{ui:Carica da un file}}. I criteri del file sostituiscono quelli di quel computer.

La scheda Globale contiene anche il **Sistema di unità di un nuovo progetto**, che vale per ogni app che ha l'add-on, e {{ui:Reimposta ogni criterio}}. {{ui:Reimposta ai valori predefiniti di BimCraft}} nella scheda BimCraft cancella solo quelli di BimCraft.

## Da sapere

- Il file è JSON semplice e leggibile: un elenco di nomi di criteri e valori. Un criterio che il file nomina e questa versione non conosce viene escluso e segnalato nel messaggio; il resto viene caricato comunque.
- I criteri sono conservati in questo browser, per ogni app CadCraft su questo computer. Non sono memorizzati nel file dell'edificio e non vengono sincronizzati tra computer: usare il file.
- Il tag LOD di un tipo iniziale deriva dal criterio di questo computer. Un tipo creato come copia di uno iniziale porta il suo tag nel file dell'edificio.
- BimCraft non ha un'impostazione di precisione, quindi qui non c'è un criterio di precisione.
- Un edificio avviato da un modello porta i livelli e i fogli del modello stesso. Si applicano comunque il criterio del tipo di muro e quello delle unità.
- Disattivare l'add-on e tutto torna quello di BimCraft. I criteri vengono conservati per quando lo si riattiva.
