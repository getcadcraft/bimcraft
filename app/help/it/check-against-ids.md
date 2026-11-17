---
title: Verificare un modello rispetto all'IDS del cliente
summary: Caricare il file .ids ricevuto e vedere in Problemi ogni elemento che non lo rispetta, prima di consegnare l'IFC.
keywords: ids, specifica di consegna delle informazioni, buildingsmart, requisiti, consegna, verifica, validazione, qa, eir, bep, proprietà, classificazione, materiale, approvvigionamento
from: 7b960222
---

## Cosa si fa

Un IDS (Information Delivery Specification, uno standard buildingSMART) è l'elenco di ciò che un IFC deve contenere: quali classi, quali proprietà con quali valori, classificazioni, materiali, dove devono trovarsi gli elementi. I clienti e gli enti appaltanti pubblici ne inviano uno con la commessa. BimCraft verifica il modello IFC aperto rispetto a questo file ed elenca ogni elemento che non soddisfa i requisiti.

## Passaggi

1. Aprire un modello IFC.
2. Aprire {{ui:Verifica con un IDS}} nel pannello di sinistra, sotto {{ui:Controlli del modello}}, oppure scegliere {{ui:Verifica con IDS…}} dal menu nello stile dei menu in uso.
3. Fare clic su {{ui:Carica un file .ids…}} e scegliere il file. Non viene caricato nulla.
4. Leggere il risultato: ogni specifica con {{ui:Superata}} o {{ui:Non superata}} e il numero di elementi a cui si applica.
5. Aprire Problemi ({{key:Ctrl+Shift+M}}) e fare clic su una verifica non superata per selezionare l'elemento e ingrandirlo nella vista.

## Cosa si dovrebbe vedere

- Un avviso per ogni elemento e per ogni requisito non soddisfatto, con il nome della specifica, ciò che chiede l'IDS e ciò che possiede l'elemento.
- Una specifica obbligatoria a cui nessun elemento del modello corrisponde genera un avviso a sé.
- Il rapporto di verifica (in Problemi) inizia con l'IDS: il titolo, la versione, l'autore e, per ogni specifica, il numero di elementi applicabili, superati e non superati.

## Da sapere

- L'IFC conserva solo un riferimento all'IDS (nome, titolo, versione e un hash), non l'IDS stesso: l'IDS di un cliente può essere riservato e l'IFC viene inviato ad altre persone. L'IDS resta in questo browser accanto al modello, quindi quando si riapre qui l'IFC salvato viene verificato di nuovo. Caricare o dimenticare l'IDS è un unico passo che si può annullare.
- Aperto su un altro computer o in un altro browser, Problemi mostra una nota che l'IDS non è stato trovato: caricarlo di nuovo per ripetere la verifica.
- Per inviare l'IDS insieme all'IFC, attivare {{ui:Conserva l'IDS dentro l'IFC}} nelle Impostazioni, nella scheda BimCraft, prima di caricarlo.
- Ogni modifica, annullamento e ripristino viene verificato di nuovo poco dopo.
- I valori sono confrontati nel modo dell'IDS: il testo esattamente (conta la distinzione tra maiuscole e minuscole), i numeri in unità SI con una piccola tolleranza (le lunghezze in metri, quindi un modello in millimetri viene prima convertito).
- Una specifica scritta per un'altra versione IFC (per esempio IFC2X3 quando il modello è IFC4) viene comunque verificata, e il risultato lo indica.
- Se il file IDS contiene errori che un controllo dell'IDS segnalerebbe, la finestra di dialogo li elenca; le specifiche che li contengono risultano non superate.
- È possibile accettare una non conformità indicando un motivo, come per qualsiasi problema. Resta accettata finché i valori dell'elemento restano gli stessi.

- I pattern nell'IDS sono letti come valore completo. Un `^` all'inizio e un `$` alla fine sono intesi anch'essi come "valore completo", come la maggior parte dei file IDS li intende.

## Vedi anche

- [Verificare un modello per problemi comuni](topic:model-checks)
- [Modificare una parete o una porta](topic:change-a-wall-or-door)
