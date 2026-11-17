---
title: Segnalazioni, revisioni e registro delle modifiche
summary: Registrare ogni set di tavole consegnato, vedere cosa è cambiato da allora su ogni tavola ed elemento, e conservare istruzioni di cantiere, disegni di officina e modelli collegati in relazione alla segnalazione a cui appartengono.
keywords: segnalazione, set emesso, set inviato, invio, revisione, revisioni, cosa è cambiato, dopo la segnalazione, registro delle modifiche, registro dei disegni, transmittal, istruzione di cantiere, disegno di officina, modello collegato, gara, cantiere, istantanea, confronta
from: 4c732832
---

## Cosa farai

Registrare una segnalazione: quali tavole sono state emesse, in quale data, per quale scopo, ciascuna alla propria revisione. In seguito, chiedere cosa è cambiato dalla segnalazione. Conservare le istruzioni di cantiere e i disegni di officina restituiti in relazione alla segnalazione.

## Passaggi

1. Nel pannello a sinistra, aprire **Segnalazioni e revisioni**.
2. Scegliere **Registra una segnalazione**. La revisione è proposta (A, poi B; una revisione numerata come P1 aumenta). Scegliere per quale scopo è emessa, a chi va, la data e le tavole. Quando la fase del progetto è impostata, lo scopo la segue. Quando il pacchetto della pratica edilizia ha un elenco di documenti di supporto, le tavole collegate a quell'elenco sono spuntate automaticamente.
3. Lasciare spuntata **Salva anche una copia del modello come emesso** per conservare il modello esattamente come è stato emesso. La copia viene scaricata; il suo nome, la dimensione e lo SHA-256 sono conservati con la segnalazione.
4. Scegliere **Registra questa segnalazione**. Una tavola modificata dall'ultima emissione riceve la nuova revisione. Una tavola non modificata mantiene la propria revisione. Il cartiglio di ciascuna tavola mostra la sua revisione.
5. Per vedere cosa è cambiato, scegliere **Modifiche successive** accanto a una segnalazione. Ogni tavola riporta Uguale o Modificata, con gli elementi aggiunti, modificati e rimossi. Fare clic su un numero per selezionare quegli elementi.
6. Scegliere **Aggiungi una registrazione** per un'istruzione di cantiere, un disegno di officina, un set di annotazioni, un modello collegato o una nota. Selezionare la segnalazione a cui si riferisce. Un file scelto è registrato con il suo nome, la dimensione e lo SHA-256; il file resta dove si trova.
7. **Registro delle modifiche dei disegni** mostra una riga per ogni tavola e una colonna per ogni segnalazione. **Scarica il registro (CSV)** lo salva con le segnalazioni e le registrazioni.
8. **Salva la cronologia delle segnalazioni** scrive un file `.issues.json`. MarkupCraft, TakeoffCraft e DetailCraft lo leggono con **Leggi una cronologia delle segnalazioni**.

## Da sapere

- La cronologia è conservata nel file IFC (set di proprietà `CadCraft_Issues` sul progetto). Gli altri programmi la ignorano.
- Una tavola risulta modificata quando cambia la sua stessa impostazione, o quando cambia un elemento che mostra: una pianta mostra il suo livello, un prospetto o una sezione l'intero modello, un abaco di porte o finestre le loro porte o finestre.
- Un elemento risulta modificato quando cambia una proprietà, la sua posizione, le sue dimensioni o la sua forma.
- Per vedere esattamente quale proprietà è cambiata, aprire la copia salvata del modello emesso con **Confronta versioni**.
- Rimuovere una segnalazione conserva le sue registrazioni, senza segnalazione. Ogni passaggio è annullabile con un solo {{ui:Annulla}}.
- Un modello con più di 60.000 elementi non conserva una registrazione di ciascun elemento con la segnalazione. Le tavole sono comunque confrontate.

## Non ancora implementato

- Le tavole non sono salvate come PDF con la segnalazione.
- Una nuvola di revisione non viene disegnata sulle tavole di BimCraft. Registrare le nuvole in MarkupCraft, sulla segnalazione.
