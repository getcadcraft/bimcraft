---
title: Verificare riscaldamento e raffrescamento con la simulazione energetica
summary: Scrivere il modello come file EnergyPlus, oppure eseguire EnergyPlus versione 26.2.0 sul modello nel browser, e confrontare i suoi carichi di progetto con l'ausilio rapido per riscaldamento e raffrescamento. Un secondo parere per la progettazione preliminare, non un calcolo di conformità.
keywords: energyplus, simulazione energetica, giorno di progetto, carico di riscaldamento, carico di raffrescamento, file meteo, epw, idf, massa termica, energia annua, simulare
from: b82a5bf2
---

## Cosa si fa

Il pannello **Verifica con EnergyPlus** scrive il modello aperto come file di input di EnergyPlus (un IDF): una zona per ogni locale, le pareti, i pavimenti, le coperture e le finestre con i loro valori U, i ricambi d'aria e il riscaldamento e raffrescamento ideali. È sempre possibile **salvare quel file** ed eseguirlo nel proprio EnergyPlus.

Se si configura anche il motore, il pannello può simulare sul momento ed elenca il riscaldamento e il raffrescamento di progetto di EnergyPlus accanto a quelli dell'ausilio rapido, locale per locale.

Questo è un ausilio di progetto. Codici energetici, certificazioni e permessi richiedono uno strumento approvato e i dati climatici che richiede, e il risultato va verificato dalla persona che ne risponde.

## Configurare il motore

BimCraft non include EnergyPlus. È una build WebAssembly di grandi dimensioni (circa 6 MB compressi, più un file dati di 4.6 MB), quindi lo si ospita da sé e si digita il suo indirizzo nel pannello. La pagina lo carica solo quando si preme un pulsante di simulazione, mai all'avvio. L'indirizzo deve essere https, un percorso di questo sito oppure localhost.

## Giorni di progetto o un anno

- **Simulare giorni di progetto** non richiede un file meteo. Esegue una giornata invernale fredda senza sole e una giornata estiva calda e serena alle temperature degli input di riscaldamento e raffrescamento della scheda Luce diurna, e riporta il carico di ciascun locale in watt.
- **Simulare un anno** richiede un file meteo in formato EPW da scegliere. Aggiunge persone, luci e apparecchiature dagli stessi input (sempre accese, poiché non si inventa alcun calendario) e riporta l'energia di riscaldamento e raffrescamento di ogni locale in kWh. I file meteo hanno le proprie licenze, quindi usarne uno che sia consentito usare.

## Massa termica

Selezionare **Attribuire massa termica alle pareti con strati noti** e le pareti, le coperture e i pavimenti i cui strati di materiale sono noti vengono scritti strato per strato, con densità e calore specifico ricavati da una breve tabella di valori tipici per nome del materiale. Gli strati sono presi a partire dall'esterno, nell'ordine in cui il file li elenca. Gli elementi senza strati restano con il loro valore U e senza massa.

## Lettura del confronto

I due metodi rispondono a domande leggermente diverse. L'ausilio rapido conserva ogni elemento; il file EnergyPlus calcola la media dei valori U di ciascun locale per tipo di superficie. Una differenza superiore al 15 % nel riscaldamento di progetto di un locale è segnalata come nota nel pannello ⚠, con entrambe le cifre. Il raffrescamento differisce di più per costruzione: l'ausilio rapido ricava un picco dal sole in una data, mentre EnergyPlus dimensiona sul proprio giorno di progetto.
