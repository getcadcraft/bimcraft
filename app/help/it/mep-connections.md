---
title: Collega tubazioni e canali alle apparecchiature
summary: Iniziare o terminare una tubazione o un canale su un attacco, in modo che ne assuma la dimensione e il sistema e rimanga fissato ad esso, poi verificare le connessioni: attacchi aperti, dimensioni e sistemi non corrispondenti, percorsi senza sorgente.
keywords: mep, collega, connessione, connessioni, attacco, attacchi, attacco aperto, dimensione non corrispondente, sistema non corrispondente, sorgente, verifica connessioni, fissato, segue, sposta apparecchiatura, ifcrelconnectsports, coordinamento
from: 29144fb0
---

## Cosa si farà

Unire i percorsi alle apparecchiature in modo che il modello sia un unico sistema collegato: l'uscita di una pompa con la tubazione che ne esce, il collo di un diffusore con il suo canale di derivazione. Poi far elencare a BimCraft ciò che non è unito.

## Disegnare da un attacco

1. Scegliere {{ui:Tubazione}} o {{ui:Canale}}.
2. Spostare il puntatore su un attacco di un'apparecchiatura (i piccoli cerchi; un attacco aperto è disegnato nel colore di avviso). Il puntatore vi si aggancia e indica **su un attacco**.
3. Fare clic: il percorso parte all'altezza dell'attacco e **assume la sua dimensione e il suo sistema** (una tubazione assume anche il materiale abituale del sistema). La riga di stato indica cosa ha assunto.
4. Continuare a disegnare come di consueto. Terminare un percorso su un altro attacco fissa anche quell'estremità.

L'estremità di un percorso su un attacco è **fissata** ad esso: spostando o ruotando l'apparecchiatura (nelle Proprietà), l'estremità del percorso la segue; modificando il percorso, quell'estremità resta sull'attacco. Gli altri angoli del percorso restano dove sono, quindi dopo uno spostamento ampio il primo tratto può staccarsi dall'attacco con un'angolazione: spostare anche l'angolo successivo.

## Verificare le connessioni

Aprire {{ui:Build}} e fare clic su {{ui:Verifica le connessioni}}. L'elenco sotto la barra mostra:

| Riga | Cosa significa |
|---|---|
| Un attacco non è collegato | Un'apparecchiatura ha una connessione a cui non è disegnato nulla |
| Nulla alla sua estremità | Un percorso termina nel vuoto |
| Attacchi uniti di dimensioni diverse | Un percorso di una dimensione incontra un attacco o un percorso di un'altra senza un riduttore (dimensione nominale di una tubazione, forma e lati di un canale) |
| Attacchi uniti di sistemi diversi | Ad esempio un canale di ripresa su un diffusore di mandata |
| Una tubazione unita a un canale | Due connessioni di tipo diverso si incontrano |
| Nessuna apparecchiatura nella sua rete la alimenta | Nulla di ciò a cui un percorso è unito, per quanto lontano lungo la rete, ha un'uscita. Scarichi, acque meteoriche e sfiati non vengono verificati in questo senso: la loro acqua arriva dagli apparecchi sanitari |
| Fissato a un attacco di un'apparecchiatura non più nel modello | L'apparecchiatura è stata eliminata; disegnare di nuovo l'estremità oppure eliminare il percorso |

Gli errori vengono prima. Fare clic su una riga per selezionare ciò che indica. {{ui:Chiudi}} nasconde l'elenco. La verifica legge il modello così come è disegnato: controlla connessioni e dimensioni, mai portate, pressioni o bilanciamenti.
