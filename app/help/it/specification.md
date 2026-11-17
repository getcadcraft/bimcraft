---
title: Scrivere la specifica dal modello
summary: Una sezione di specifica per ogni tipo di muro, porta, finestra, solaio e finitura in uso, con i propri dati letti dal modello e il testo scritto, prodotta come documento PDF o Word.
keywords: specifica, capitolato, disegni esecutivi, fase 5, documenti di costruzione, sezione, tipo di muro, tipo di porta, tipo di finestra, finitura, classificazione, uniclass, omniclass, masterformat, documento, pdf, word, docx, abachi
from: a6acc6d4
---

## Obiettivo

Ottenere una specifica che segue il modello: una sezione per ogni tipo effettivamente presente nell'edificio, ciascuna con la sua stratigrafia e le sue quantità lette dal modello, e il testo che si scrive per essa.

## Passaggi

1. Attivare {{ui:Disegna}}, aprire **Abachi** nel pannello di sinistra e fare clic su **Specifica**.
2. La finestra di dialogo elenca una sezione per ogni tipo di muro, tipo di porta, tipo di finestra, solaio e finitura di locale in uso. Sotto ciascun titolo ci sono i suoi **dati**, letti dal modello: spessore, gli strati uno per uno, il livello di sviluppo, le dimensioni, quanti e quanto. Una sezione i cui elementi portano un codice di classificazione mostra il codice nel proprio titolo.
3. Scrivere il testo della specifica nella casella sotto una sezione. **Seleziona i suoi elementi** mostra a che cosa si riferisce la sezione.
4. Fare clic su **Salva**. È un solo passo di Annulla, e il testo viene conservato nel file dell'edificio.
5. Aprire **Documenti dal modello**, scegliere il modello **Specifica** e fare clic su **Anteprima**, poi salvarlo come PDF, Word o Markdown. Vedere [Documenti dal modello](topic:documents-from-the-model).

## Gli abachi dei disegni esecutivi come documento

Il modello **Abachi dei disegni esecutivi** stampa direttamente dal modello gli abachi di porte, finestre e finiture, nell'impaginazione dello studio. Nel modello personale scrivere `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, oppure il nome di un'impostazione salvata, per esempio `{{schedule Door schedule by floor}}`. `{{specification}}` stampa la specifica.

## Da sapere

- I dati sono quelli del modello. Cambiano quando cambia il modello; il testo no.
- BimCraft non scrive alcuna clausola di alcuna norma né testo di alcun costruttore. Una sezione senza testo stampa "Nessun testo di specifica scritto finora."
- Il testo scritto per un tipo che non è più nel modello viene conservato ed elencato sotto "Testo per i tipi non più presenti nel modello".
- Per cambiare un tipo generico in una stratigrafia specifica, vedere [Strumenti per i muri](topic:wall-tools) (Scambia tipo).
