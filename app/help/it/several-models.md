---
title: Visualizzare più modelli IFC insieme
summary: Aggiungere altri file IFC alla scena, come architettura, struttura e impianti, vederli nelle stesse coordinate, spostarne uno, nasconderne uno e scegliere quale modificare.
keywords: federazione, federato, modello federato, più modelli, più file, combinare, sovrapporre, coordinamento, disciplina, struttura, mep, impianti, offset, sposta modello, modello attivo, aggiungi un modello
from: df0efbbf
---

## Obiettivo

Osservare in un unico luogo modelli di discipline diverse: il modello dell'architetto con dentro quelli strutturali e degli impianti. Ciascuno resta un file a sé; BimCraft li mostra soltanto insieme.

## Passaggi

1. Aprire il primo modello IFC come di consueto.
2. In {{ui:Modelli}} a sinistra, fare clic su {{ui:Aggiungi un modello…}} e scegliere uno o più file IFC. Ciascuno compare nell'elenco e nella vista 3D.
3. Deselezionare un modello per nasconderlo; selezionarlo per mostrarlo di nuovo.
4. Se un modello arriva nel punto sbagliato (un diverso punto di rilievo), fare clic su {{ui:Sposta}} sotto di esso, digitare di quanto spostarlo lungo X, Y e Z in metri, e fare clic su {{ui:Applica}}.
5. Il modello con il punto è quello che si modifica. Fare clic sul punto di un altro modello per modificare quello.
6. Fare clic su × accanto a un modello per toglierlo dalla scena.

## Apri i modelli del team

Quando il modello aperto è un file cloud in un progetto di team, {{ui:Apri i modelli del team}} compare sotto l'elenco. Apre accanto a questo gli altri modelli IFC del progetto, ciascuno spostato dell'offset impostato dal progetto. I modelli nascosti per l'utente restano esclusi e vengono conteggiati; un modello che il progetto ruota viene aperto senza rotazione e conteggiato anche così; i file che non sono IFC (per esempio un DWG) vengono saltati e indicati nella riga di stato. Un modello già aperto non viene mai aperto due volte. Il pulsante è nascosto per un file che non fa parte di un progetto di team.

## Cosa si vede

- Ogni modello nelle coordinate del primo modello, come lo posiziona il suo file. I modelli esportati dallo stesso progetto si allineano senza spostare nulla.
- Scegliere un elemento di un modello che non si sta modificando mostra le sue proprietà in sola lettura, con {{ui:Modifica quel modello}} per passare.
- L'{{ui:Albero del modello}}, i {{ui:Piani}}, il {{ui:Colore}}, l'elenco {{ui:Modifiche}}, il posizionamento di elementi della libreria e {{ui:Salva come IFC}} lavorano tutti sul modello che si modifica. Nascondere, isolare, vedere attraverso e {{ui:Seleziona tutto}} funzionano su tutti i modelli.
- {{ui:Salva come IFC}} scarica il modello che si modifica, con le sole modifiche.

## Errori comuni

- **Un modello è lontano o manca.** Il suo file usa altre coordinate. Usare {{ui:Adatta}} per trovarlo, poi {{ui:Sposta}} per collocarlo.
- **Elimina o Copia sono disattivati su un elemento scelto.** Appartiene a un altro modello: passare prima a quello.
- **Aprire un file con Scegli un file ha sostituito tutto.** Così si avvia una nuova scena. Usare {{ui:Aggiungi un modello…}} per aggiungere file a quella già aperta.

## Prossimi passi

- [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate)
- [Colorare gli elementi per proprietà](topic:color-by-property)
