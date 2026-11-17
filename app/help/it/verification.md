---
title: Contrassegnare gli elementi come verificati o verificati in campo
summary: Un elemento letto da un PDF o da una scansione non è verificato finché non viene controllato. Contrassegnare gli elementi come verificati, oppure come verificati in campo (LOD 500) indicando chi li ha misurati, quando e come, e consegnare un modello as-built che indica quale elemento è quale.
keywords: non verificato, verificato, controllato, verificato in campo, as built, as-built, lod 500, chiusura lavori, consegna, misurato in cantiere, metro a nastro, laser, scansione, rilievo, edificio esistente, intervento, contrassegna come verificato, verifica, fase 7
from: df35d908
---

## Cosa farai

Tenere traccia di ciò che nel modello qualcuno ha effettivamente esaminato. Un elemento ha uno dei tre contrassegni, oppure nessuno:

- **Non verificato**: il programma lo ha riconosciuto da un PDF, un disegno scansionato, un disegno ricalcato o una scansione di nuvola di punti. Nessuno lo ha ancora controllato.
- **Verificato**: una persona lo ha confrontato con il disegno da cui proviene.
- **Verificato in campo (LOD 500)**: una persona lo ha misurato in cantiere. Chi, quando e come vengono conservati con esso.
- **Nessun contrassegno**: disegnato da una persona. Il modello non fa affermazioni al riguardo.

## Passaggi

1. Selezionare uno o più elementi (muri, porte, finestre, locali, qualsiasi elemento).
2. In {{ui:Proprietà}}, aprire {{ui:Verifica}}.
3. Digitare chi lo ha controllato o misurato. La data è quella di oggi, a meno che non venga modificata.
4. Fare clic su {{ui:Contrassegna come verificato}}. Per una misura in cantiere, scegliere come è stato misurato (metro a nastro, distanziometro laser, scansione, rilievo) e fare clic su {{ui:Contrassegna come verificato in campo (LOD 500)}}.
5. {{ui:Contrassegna come non verificato}} e {{ui:Rimuovi il contrassegno}} annullano. Ogni clic è un passaggio che si può annullare, per l'intera selezione.

Per contrassegnare rapidamente una selezione: {{ui:Strumenti}} › {{ui:Contrassegna come verificato}} (digitato: `MARKCHECKED`) la contrassegna come verificata dall'utente corrente, con la data di oggi.

## Cosa si dovrebbe vedere

- Nella pianta, un elemento non verificato ha un riquadro tratteggiato e un "?"; uno verificato in campo ha un segno di spunta. Deselezionare {{ui:Mostra i contrassegni di verifica nella pianta}} nella sezione {{ui:Audit}} per nasconderli.
- {{ui:Abachi}} › {{ui:Verifica}} elenca ogni elemento contrassegnato, con piano, stato, chi, quando, come e la provenienza.
- L'Audit elenca gli elementi non verificati e conta un elemento verificato in campo come LOD 500. Vedi [Audit del modello](topic:audit-the-model).

## Da una scansione

Quando si confronta una scansione con il modello, {{ui:Contrassegna gli elementi corrispondenti come verificati in campo}} contrassegna ogni elemento che la scansione ha rilevato come costruito entro la tolleranza, con il metodo "scansione" e la tolleranza nella nota. Vedi [Confrontare una scansione con il modello](topic:compare-scan-with-model).

:::warning
Il confronto abbina il riquadro di ogni elemento ai punti della scansione. Non è un rilievo. Usarlo per gli elementi che sono stati anche esaminati direttamente.
:::

## Il modello come costruito e il pacchetto di consegna

{{ui:Crea il pacchetto di consegna}} nella scheda {{ui:Asset}} inserisce nello zip il modello come costruito (as-built), con:

- una dichiarazione sul progetto con il numero di elementi verificati in campo, verificati, non verificati e senza contrassegno;
- `as-built/verified-elements.csv`: ogni elemento e locale con il suo stato, chi, quando e come;
- `as-built/as-built-drawings.pdf`: il set di disegni così com'è ora;
- il registro delle modifiche ai disegni, quando il modello ha emesso dei set.

Vedi [Asset e manutenzione](topic:assets-and-maintenance).

## Come è conservato nell'IFC

Ogni elemento contrassegnato porta il set di proprietà `CadCraft_Verification`: State, By, On, Method, Source, Note e LevelOfDevelopment (`LOD 500` mentre è verificato in campo). Sono proprietà di testo semplice, quindi gli altri programmi le elencano, e Trova, Colora per proprietà e gli abachi con tag possono usarle. La dichiarazione as-built è il set di proprietà `CadCraft_AsBuilt` sul progetto. Un elemento senza il set non è stato misurato in cantiere.

## Avanti

- [Muri da un insieme di piante](topic:walls-from-plans)
- [Audit del modello](topic:audit-the-model)
