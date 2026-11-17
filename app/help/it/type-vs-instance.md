---
title: Modificare una proprietà di tipo per ogni elemento di un tipo
summary: Distinguere le proprietà di tipo dalle proprietà dell'istanza, modificare un valore sul tipo perché ogni elemento lo segua, e verificare che la modifica di un singolo elemento resti sua.
keywords: tipo, istanza, proprietà di tipo, tipo di famiglia, condiviso, copia alla scrittura, tutti gli elementi, modifica di massa, produttore, modello
from: bffd8789
---

## Cosa si fa

Impostare il produttore su un tipo di porta perché ogni porta di quel tipo lo mostri, poi dare a una sola porta una propria classe di resistenza al fuoco senza toccare le altre. Questo mostra la differenza tra proprietà di tipo e proprietà dell'istanza in BimCraft.

## Tipo o istanza?

- Una proprietà **istanza** appartiene a un solo elemento: il suo tag, il suo contrassegno, il suo locale, la sua resistenza al fuoco.
- Una proprietà di **tipo** appartiene al tipo che molti elementi condividono: produttore, modello, larghezza di un tipo di porta.

Nel pannello {{ui:Proprietà}}, i set che provengono dal tipo hanno " (tipo)" dopo il loro nome e la riga "Proprietà di tipo: una modifica qui si applica a ogni elemento di questo tipo." Ogni altro set appartiene all'elemento stesso. **Tipo** nel primo blocco mostra il nome del tipo.

## Passi: modificare il tipo

1. Aprire un modello IFC e fare clic su una porta.
2. Annotare il suo **Tipo** nel primo blocco del pannello {{ui:Proprietà}}, per esempio "Singola liscia 900 x 2100".
3. Scorrere fino a un set il cui nome termina con "(tipo)".
4. Fare clic sul valore da modificare, per esempio **Produttore**.
5. Digitare il nuovo valore e premere {{key:Enter}}.
6. Controllare l'elenco {{ui:Modifiche}}: la voce termina con "(tipo)".
7. Fare clic su un'altra porta dello stesso tipo.
8. Verificare lo stesso valore: mostra anche il nuovo valore.

## Passi: modificare un solo elemento

1. Fare clic su una porta.
2. Aprire un set senza "(tipo)" nel nome, per esempio `Pset_DoorCommon`.
3. Fare clic su un valore, come **FireRating**, digitare un nuovo valore e premere {{key:Enter}}.
4. Fare clic sulla porta accanto, dello stesso tipo.
5. Verificare lo stesso valore: mostra ancora il vecchio valore.

Anche se l'esportatore ha condiviso quel set di proprietà tra entrambe le porte, BimCraft ha dato alla prima porta una propria copia prima di modificarla. Vedi [Perché la modifica cambia un solo elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Salvare

1. Fare clic su {{ui:Salva come IFC}} oppure premere {{key:Mod+S}}.
2. Aprire la copia salvata in BimCraft, o in un visualizzatore IFC, per verificare entrambe le modifiche.

## Errori comuni

- **Non ogni modello ha dei tipi.** Alcuni esportatori non scrivono oggetti di tipo, oppure mettono tutto sull'istanza. Allora non ci sono set "(tipo)", e ogni elemento va modificato singolarmente.
- **Lo stesso valore compare in un set di tipo e in un set di istanza.** Alcuni esportatori scrivono un parametro in entrambi i posti. Altri programmi possono leggerne uno o l'altro; modificare entrambi se si vuole che coincidano.
- **Aspettarsi di selezionare "tutte le porte di questo tipo" e modificarle insieme.** In questa versione non esiste la selezione multipla. Una proprietà di tipo è il modo per cambiare molti elementi in una volta.
