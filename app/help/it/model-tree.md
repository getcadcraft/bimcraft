---
title: Orientarsi con l'albero del modello
summary: Esplorare un modello IFC per progetto, sito, edificio, piano e spazio, con gli elementi raggruppati per tipo; selezionare le caselle per mostrare e nascondere, fare clic su una riga per sceglierla, doppio clic per ingrandire.
keywords: albero del modello, albero, struttura, struttura spaziale, browser, schema, navigatore, piano, livello, pavimento, spazio, locale, gruppo, classe, nascondi, mostra, scegli, seleziona, ingrandisci
from: 69de4ab7
---

## Obiettivo

Vedere come è composto un modello e raggiungere ogni elemento senza cercarlo in 3D: l'edificio, i suoi piani, gli spazi di ogni piano e gli elementi al loro interno, raggruppati per tipo (pareti, porte, solai…).

## Passaggi

1. Aprire un modello IFC. L'{{ui:Albero del modello}} a sinistra si apre fino ai piani.
2. Fare clic sulla freccia accanto a una riga per aprirla o chiuderla. Un piano contiene prima i suoi spazi, poi i suoi elementi per tipo, con quanti ce ne sono. Un elemento composto da parti, come una scala, contiene le sue parti.
3. Deselezionare la casella di una riga per nascondere tutto ciò che contiene; selezionarla per mostrarlo di nuovo. Una casella con un trattino significa che solo una parte di ciò che contiene è mostrata.
4. Fare clic sul nome di una riga per scegliere ciò che rappresenta: un elemento, oppure ogni elemento di un gruppo, piano o spazio. {{key:Mod}}+clic lo aggiunge alla scelta, o lo toglie.
5. Fare clic sul pulsante {{ui:i}} accanto a un piano, uno spazio o un edificio per vederne le proprietà.
6. Fare doppio clic su una riga per ingrandire fino a essa.

## Cosa si dovrebbe vedere

- Quando si sceglie un elemento nella vista 3D, l'albero si apre fino a esso e lo contrassegna.
- Gli elementi nascosti sono barrati. Le caselle dell'albero e {{ui:Mostra}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funzionano insieme: vedi [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate).
- Gli elementi che il modello non colloca in nessun piano sono in un gruppo alla fine, **Non nella struttura spaziale**.
- Un gruppo lungo mostra 200 righe alla volta; fare clic su **Mostra altro** sotto di esso per il resto.

## Tasti

Con il nome di una riga attivo: {{key:Up}} e {{key:Down}} spostano, {{key:Right}} apre, {{key:Left}} chiude o risale di livello, {{key:Space}} seleziona la casella, {{key:Enter}} sceglie.

## Errori comuni

- **La casella di un piano è selezionata ma non si vede nulla.** L'elenco {{ui:Piani}} sotto l'albero spegne da solo interi piani: selezionare la casella anche lì.
- **Una riga non sceglie nulla.** Alcune righe, come uno spazio vuoto, non hanno elementi che si possono disegnare; la riga di stato lo indica.

## Avanti

- [Eliminare, tagliare, copiare e incollare elementi dell'edificio](topic:edit-elements)
- [Mostrare e nascondere piani, spazi e spigoli](topic:storeys-and-spaces)
