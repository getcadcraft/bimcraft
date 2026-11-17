---
title: Verifica un modello per problemi comuni
summary: Trovare elementi privi di una proprietà necessaria, GlobalId usati due volte, elementi su nessun piano e copie sovrapposte l'una all'altra.
keywords: verifica, controllo, controllo del modello, validazione, qa, qualità, proprietà mancante, obbligatoria, duplicato, globalid, guid, piano, sovrapposto, sovrapposizione
from: 4d835513
---

## Cosa si fa

Esaminare un modello prima di consegnarlo: i problemi che compromettono gli abachi, le quantità e altri software.

## Passaggi

1. Aprire un modello IFC.
2. Aprire {{ui:Controlli del modello}} nel pannello di sinistra.
3. Sotto {{ui:Proprietà obbligatorie}} è già presente una regola (qualsiasi classe, Nome). Cambiarne la classe (o {{ui:Qualsiasi classe}}) e la proprietà, oppure fare clic su {{ui:Aggiungi una proprietà}} per un'altra regola; la x ne rimuove una. Un elemento non supera una regola quando la proprietà manca o è vuota. Le regole restano in questo browser per tutti i modelli.
4. Fare clic su {{ui:Esegui i controlli}}.
5. Fare clic su un risultato per scegliere quegli elementi ed eseguire lo zoom su di essi.

## Cosa si vede

- **Proprietà obbligatoria mancante**: ogni regola con gli elementi che non hanno un valore per essa.
- **GlobalId usato due volte**: elementi che condividono lo stesso GlobalId. Altri software li trattano come un solo elemento.
- **Su nessun piano**: elementi con una forma che nessun piano contiene.
- **Copie una sopra l'altra**: elementi della stessa classe e dello stesso tipo, con la stessa forma nello stesso punto, che nelle quantità vengono contati due volte.

Ogni riga dei risultati è un pulsante: fare clic per scegliere quegli elementi ed eseguire lo zoom su di essi. Sono elencati solo i primi 50 gruppi di ogni controllo. Gli stessi risultati compaiono anche in {{ui:Problemi}}.

## Da sapere

- I controlli esaminano il modello attivo quando sono aperti più modelli. Vedi [Vedere più modelli IFC insieme](topic:several-models).
- Dopo una modifica, eseguire di nuovo i controlli.
- Nel pannello {{ui:Problemi}}, lunghezze, aree e volumi nel testo di un problema seguono l'unità scelta in {{ui:Unità}} nella barra degli strumenti (una porta da "800 mm" si legge 2'-7 1/2" in piedi e pollici); cambiando l'unità il pannello riformula i testi.

## Prossimi passi

- [Verificare il modello: locali, tag, LOD, interferenze e interfacce](topic:audit-the-model)
- [Trovare elementi per classe, nome o proprietà](topic:find)
- [Eliminare, tagliare, copiare e incollare elementi](topic:copy-paste)
