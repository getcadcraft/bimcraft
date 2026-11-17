---
title: Add-on usati nel file
summary: BimCraft segnala in un file IFC quali add-on vi hanno scritto, e propone di aggiungere quelli mancanti quando lo si apre.
keywords: add-on, addon, questo file usa, add-on mancante, trusscraft, libreria, registrazione, cadcraft_addons
from: 9d9500d8
---

## Cosa fa

Quando un add-on scrive nel modello (una capriata, un tratto di tubazione), BimCraft registra l'add-on e la sua versione nel progetto IFC, in un set di proprietà chiamato CadCraft_AddOns. La registrazione viene scritta nello stesso passaggio di annullamento della modifica dell'add-on, quindi annullare la modifica elimina anche la registrazione. Gli altri programmi ignorano il set di proprietà; ciò che l'add-on ha disegnato resta comunque nel file.

## Passaggi

1. Aprire un file IFC che un add-on ha contribuito a creare.
2. Se un add-on usato non è attivo, una nota sopra il modello indica quali sono, con un pulsante per aggiungerli dall'account della Libreria.
3. Aggiungerli, oppure chiudere la nota. Il modello si apre in ogni caso.

## Errori comuni

- **Non compare nessuna nota.** Non è stato effettuato l'accesso all'account in questa scheda, oppure il file non contiene registrazioni (è stato creato prima delle registrazioni, o da un altro programma).
- **L'elenco delle modifiche riporta "undefined".** Risolto: ora le etichette mostrano il nome dell'add-on.

## Passaggi successivi

- [Inserire attrezzature e arredi dalla libreria](topic:place-from-library)
