---
title: Invia un elemento a PartCraft e riportalo nel modello
summary: Scegliere un supporto, una staffa, un parapetto o un pezzo di attrezzatura, progettarlo come parte in PartCraft con l'edificio intorno e accettare la nuova forma nel modello.
keywords: PartCraft, parte, invia, collegamento, elemento, supporto, staffa, recinzione, parapetto, attrezzatura, progetta, andata e ritorno, accetta, modificato, collegamenti parti
from: 4ce2f449
---

## Cosa si fa

Progettare un elemento dell'edificio come parte: inviarlo a PartCraft, modificarlo lì (tagliare, aggiungere, forare, ridimensionare) e riportare la nuova forma nel modello.

## Passaggi

1. Scegliere un elemento nel modello: un elemento generico, un'attrezzatura, un pilastro, una trave, un parapetto o un arredo.
2. Scegliere {{ui:Collegamenti parti}} nella barra degli strumenti, poi {{ui:Invia a PartCraft}}. PartCraft si apre in una nuova scheda con l'elemento come parte. Gli elementi entro 3 m sono disegnati in grigio accanto a esso, così da progettarlo nel suo contesto. Lì non possono essere modificati.
3. Modificare la parte in PartCraft. In PartCraft scegliere {{ui:File}} › {{ui:Esporta}} › {{ui:Salva in BimCraft}}. Si può salvare in BimCraft tutte le volte che serve.
4. Tornando in BimCraft, il pulsante {{ui:Collegamenti parti}} mostra un conteggio, e la scheda dell'elemento lo elenca come {{ui:Modificato in PartCraft}} con la variazione di dimensioni e volume espressa a parole.
5. Scegliere {{ui:Mostra}} per guardarlo, poi {{ui:Accetta}} per dare all'elemento la nuova forma, oppure {{ui:Mantieni la mia}} per lasciarlo com'era.

## Cosa si vede

- Accettare è un solo passaggio di annullamento. L'elemento mantiene posto, GlobalId, tipo, materiale e proprietà. Viene sostituito solo il suo corpo.
- L'elemento riceve un set di proprietà {{ui:CadCraft_PartLink}} con il collegamento, il suo stato e la revisione.
- {{ui:Invia di nuovo}} apre di nuovo lo stesso elemento in PartCraft, sullo stesso collegamento.

## Da sapere

- I muri, i pavimenti, i tetti, le porte, le finestre, le scale, le rampe e gli spazi sono disegnati dagli strumenti di costruzione a partire da un contorno e vengono ricostruiti dopo ogni modifica. Un corpo proveniente da un'altra applicazione verrebbe sovrascritto, perciò questi elementi vengono rifiutati, con il motivo indicato.
- La forma torna come mesh (una tassellazione IFC), non come caratteristiche della parte. La cronologia della parte resta in PartCraft.
- Se l'elemento è cambiato nel modello dopo averlo inviato, la scheda lo segnala prima di accettare: accettando si sostituiscono anche quelle modifiche.
- Non viene caricato nulla. Le due applicazioni sono pagine dello stesso sito e si passano l'elemento in questo browser. Entrambe devono essere aperte nello stesso browser.
- L'elemento deve chiudersi in un solido in PartCraft. Un elemento con ampi vuoti aperti viene rifiutato lì, con il numero di spigoli aperti.
- Per accettare, rendere attivo il modello che contiene l'elemento.
