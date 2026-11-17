---
title: Confronta due versioni di un modello
summary: Aprire due versioni dello stesso modello IFC e vedere quali elementi sono stati aggiunti, rimossi e modificati, abbinati tramite i loro GlobalId, con un CSV di ogni modifica.
keywords: confronta, differenza, versioni, revisione, modifiche, modificato, aggiunto, rimosso, spostato, GlobalId, guid, cosa è cambiato
from: cfca6971
---

## Cosa si fa

Vedere cosa è cambiato tra il modello che si aveva e quello ricevuto: quali elementi sono nuovi, quali sono spariti, quali sono stati spostati o hanno nuovi valori di proprietà.

## Passaggi

1. Aprire la versione più recente, poi fare clic su {{ui:Aggiungi un modello…}} e scegliere quella precedente. Vedere [Vedere più modelli IFC insieme](topic:several-models).
2. In {{ui:Modelli}}, aprire {{ui:Confronta versioni}}.
3. Scegliere la {{ui:Versione precedente}} e la {{ui:Versione successiva}}.
4. Fare clic su {{ui:Confronta}}.
5. Fare clic su un elemento in un elenco per selezionarlo e vederne le proprietà. Fare clic su {{ui:Scarica CSV}} per ogni modifica, proprietà per proprietà.
6. Fare clic su {{ui:Cancella}} per tornare alla vista normale.

## Cosa si vede

- Gli elementi **Aggiunti** in blu, dalla versione più recente.
- Gli elementi **Rimossi** in rosso, dalla versione precedente.
- Gli elementi **Modificati** in ocra, dalla versione più recente, ognuno con l'indicazione di cosa è cambiato: proprietà, uno spostamento con la distanza, oppure una nuova forma.
- Tutto ciò che è uguale, trasparente.

## Da sapere

- Gli elementi vengono abbinati tramite il loro GlobalId. Un programma che assegna nuovi GlobalId a ogni esportazione fa apparire ogni elemento come rimosso e poi di nuovo aggiunto.
- Le posizioni vengono confrontate dove i modelli si trovano nella scena. Se una versione è stata spostata di proposito, allinearle prima con {{ui:Sposta}} in {{ui:Modelli}}.
- Un GlobalId usato due volte nello stesso modello viene escluso dal confronto. [Verificare un modello per problemi comuni](topic:model-checks) li individua.

## Avanti

- [Segnalazioni e file BCF](topic:issues-bcf)
- [Sommare le quantità per proprietà](topic:quantity-totals)
