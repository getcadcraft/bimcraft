---
title: Carbonio incorporato e costi sul cronoprogramma
summary: Sommare il carbonio incorporato del modello da una tabella di fattori aperta e modificabile, e distribuire i prezzi sul cronoprogramma 4D in una curva di costi e di flusso di cassa. Entrambi partono da valori digitati o importati.
keywords: carbonio incorporato, carbonio, co2, kgco2e, emissioni, tabella dei fattori, epd, 5d, costo, flusso di cassa, curva a S, costo del cronoprogramma, prezzi, prezzi del computo
from: 83e82840
---

## Carbonio incorporato

Aprire il pannello **Carbonio**. La quantità di ciascun elemento (volume, area o lunghezza) viene moltiplicata per un fattore della tabella, per modulo del ciclo di vita: la fase di prodotto è obbligatoria, il trasporto e lo scarto sono facoltativi. I totali si ottengono per materiale, classe e piano, e per metro quadrato di superficie di piano.

**La tabella dei fattori è propria dell'utente.** Le righe fornite con BimCraft sono valori generici di partenza, dell'ordine di grandezza giusto. Non provengono da una banca dati, sono contrassegnate come non verificate e vanno sostituite con la fonte che si usa (un EPD, una banca dati nazionale o i dati della propria azienda). Modificare le righe nel pannello, oppure importare ed esportare la tabella come CSV o JSON. Le righe aggiunte sostituiscono la riga di partenza con lo stesso id. La tabella viene salvata nel modello.

Gli elementi senza corrispondenza, o senza quantità, sono elencati in Problemi invece di essere conteggiati come zero.

## Costi sul cronoprogramma 4D

Aprire il pannello **Costo** accanto al cronoprogramma 4D. Assegnare dei prezzi (digitarli, importare un CSV o JSON, oppure portare le voci di TakeoffCraft), associare ogni prezzo ai materiali del modello con parole chiave, e il pannello valorizza gli elementi di ogni attività. Il costo di un'attività viene distribuito sui suoi giorni dall'inizio alla fine (in modo uniforme, oppure con carico anteriore o posteriore), e il pannello disegna la curva cumulativa del flusso di cassa per giorno, settimana o mese, con il costo per fase e per pacchetto, e ciò che è pianificato rispetto a ciò che è costruito a una data. Esportazione in CSV. Nulla viene valorizzato finché non si forniscono dei prezzi: nessuno è fornito di serie.

## Valuta

Una tabella dei prezzi può indicare in quale valuta sono i suoi prezzi (tre lettere, per esempio USD o EUR). Il pannello 5D ha un campo per questo; viene salvato nel file insieme ai prezzi, e le esportazioni JSON la includono. Una tabella creata prima di questa funzione, o lasciata vuota, non ha valuta: i suoi costi sono mostrati in USD, la valuta predefinita dell'applicazione, e il pannello e i totali correnti lo indicano. Non viene effettuata alcuna conversione tra valute.
