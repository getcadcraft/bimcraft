---
title: Online e offline
summary: Cosa carica BimCraft dal sito, come Salva per l'uso offline rende i modelli IFC e i disegni DWG apribili senza connessione, e perché quanto si apre non viene mai caricato in rete.
keywords: offline, online, internet, connessione, nessuna rete, aereo, visita al cantiere, salva per l'uso offline, pronto per l'uso offline, caricamento, privacy, wasm, webassembly, motore IFC, dwg, cloud
from: 39e5c7eb
---

BimCraft legge i file all'interno della scheda del browser. Aprire, ispezionare, modificare e salvare non inviano mai i file da nessuna parte, né online né offline. [Lavorare offline](common:offline) spiega come funzionano le copie offline in tutte le app; questa pagina riguarda ciò che è specifico di BimCraft.

## Cosa carica BimCraft dal sito

| Parte | Quando si carica senza una copia offline | Dimensione |
|---|---|---|
| L'app stessa, con il visualizzatore 3D e il codice del motore IFC | All'apertura di BimCraft | Diversi megabyte |
| La parte WebAssembly del motore IFC | Il primo file IFC aperto nella scheda: "Avvio del motore IFC…" | Circa 1.6 MB |

I disegni DWG e DXF, i file di progetto e di famiglia e le cartelle non richiedono nulla in più: i loro lettori fanno parte dell'app.

## Salvare BimCraft per l'uso offline

1. Aprire BimCraft mentre si è online.
2. Fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app in alto.
3. Osservare il pulsante che conta: "Salvataggio 40 di 212", per esempio. La copia di BimCraft è di circa 11 MB, perché include il motore IFC.
4. Attendere {{ui:Pronto per l'uso offline}}.

Quando compare {{ui:Pronto per l'uso offline}}, i modelli IFC, i disegni DWG e DXF, i file di progetto, le cartelle e questa guida si aprono senza connessione. Non serve aprire prima un IFC o un DWG per "scaldare" i lettori.

Per aggiornare o rimuovere la copia, fare clic su {{ui:Pronto per l'uso offline}} e scegliere {{ui:Salva di nuovo (scarica la versione più recente)}} oppure {{ui:Rimuovi la copia offline}}.

## Cosa dice il pulsante

| Pulsante | Significa |
|---|---|
| {{ui:Salva per l'uso offline}} | Non c'è ancora una copia offline in questo browser. Fare clic per salvarne una |
| "Salvataggio *n* di *m*" | Salvataggio in corso; tenere aperta la scheda finché non termina |
| {{ui:Pronto per l'uso offline}} | Salvato. Passare il mouse per vedere quando; fare clic per il menu |
| {{ui:Salvataggio non riuscito}} | Alcuni file non sono stati scaricati. Controllare la connessione e fare clic per riprovare. L'ultima copia valida, se c'è, viene conservata |
| {{ui:Offline non disponibile}} | Questa finestra non può conservare una copia offline (una finestra privata o un computer gestito). Vedi [Lavorare offline](common:offline) |

:::offline
Si è offline.

- Se il pulsante dice {{ui:Pronto per l'uso offline}}, ogni tipo di file si apre come di consueto.
- Se non lo dice, funziona solo ciò che questa scheda ha già caricato: un lettore che non è mai stato caricato in questa scheda non può avviarsi, e aprire quel tipo di file mostra un errore del browser nella riga di stato. Non ricaricare la scheda finché non si torna online.
:::

## Cosa non richiede mai una connessione

Una volta aperto BimCraft nella scheda, questi funzionano offline anche senza una copia salvata:

- Lettura di file di progetto e di famiglia e controllo delle cartelle.
- Scelta di elementi, lettura delle proprietà e modifica dei valori IFC in un modello già aperto.
- {{ui:Salva come IFC}} e {{ui:Scarica CSV}}: entrambi sono download fatti nella scheda.

## Cosa non è ancora disponibile

- **Salvataggio nel cloud.** I file vengono salvati solo sul proprio computer.

Vedi [Dove finiscono i file](common:your-files).
