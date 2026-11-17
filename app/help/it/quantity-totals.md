---
title: Sommare quantità, elencare elementi e creare l'abaco degli spazi
summary: Contare gli elementi e sommarne lunghezze, aree, volumi o qualsiasi proprietà numerica, raggruppati per qualsiasi proprietà; elencare una riga per elemento; oppure creare l'abaco degli spazi con aree e volumi. Ciascuno si scarica come CSV.
keywords: quantità, computo, totali, somma, abaco, computo metrico, boq, qto, csv, raggruppa per, conteggio, lunghezza, area, volume, spazi, stanze, abaco delle stanze, abaco delle aree, elenco elementi
from: e2e7210c
---

## Cosa farai

Ricavare dei totali da un modello: lunghezze dei muri per piano, conteggi delle porte per tipo, volume dei solai per materiale, il costo di ogni zona.

## Passaggi

1. Aprire un modello IFC.
2. Aprire {{ui:Totali di quantità}} nel pannello di sinistra.
3. In {{ui:Conteggio}}, scegliere {{ui:Ogni elemento}} oppure solo quelli selezionati.
4. Sotto {{ui:Raggruppa per}}, scegliere una proprietà, come {{ui:Classe}}. Cliccare {{ui:Aggiungi un raggruppamento}} per suddividere ulteriormente, fino a tre livelli, per esempio per {{ui:Piano}}.
5. Sotto {{ui:Somma}}, spuntare i valori da totalizzare. Le serie di quantità del modello sono spuntate all'inizio.
6. Cliccare {{ui:Scarica CSV}} per aprire la tabella in un foglio di calcolo.

## Cosa si vede

- Una riga per gruppo con quanti elementi contiene e ciascun totale, più una riga di totale.
- Gli elementi senza valore vengono contati ma non aggiungono nulla. In tal caso il CSV aggiunge una colonna "escluso" accanto al totale, così si vede quanti sono.
- I numeri sono nelle unità del file, come le memorizza il file, spesso millimetri per le lunghezze.

## Una riga per elemento, oppure gli spazi

Cambiare {{ui:Mostra}}:

- **Una riga per elemento**: ogni elemento su una riga propria, con le proprietà sotto {{ui:Colonne}} e i valori sotto {{ui:Somma}}. Il CSV inizia con il GlobalId di ogni elemento. Cliccare il primo valore di una riga per selezionare quell'elemento.
- **Spazi**: ogni stanza con il suo numero, nome, piano, area e volume, e i relativi totali. Aree e volumi provengono dalle quantità dello spazio così come le dichiara il file. Quando il file non ne ha, vengono misurati dalla forma dello spazio in m² e m³ e mostrati in corsivo; il CSV indica quale è quale.

## Avanti

- [Trovare elementi per classe, nome o proprietà](topic:find)
- [Colorare gli elementi in base a una proprietà](topic:color-by-property)

## Infrastruttura (IFC 4.3)

Scegliere **Infrastruttura (IFC 4.3)** nell'elenco delle viste per vedere strade, ferrovie, ponti e opere marittime totalizzati per classe e tipo, con la lunghezza, l'area e il volume che il file stesso dichiara. Una quantità che il file non dichiara viene lasciata vuota, mai calcolata. **Invia le quantità delle infrastrutture a TakeoffCraft** salva un file `.quantities.json` che TakeoffCraft apre come quantità tipizzate.
