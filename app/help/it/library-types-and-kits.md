---
title: Simboli, tipi e asset, modelli di progetto e Quick Kit
summary: La libreria ha tre tipi di elemento (Simboli, Tipi, Asset). Aggiungere un Tipo al progetto, partire da un modello di progetto condiviso, aggiungere un Quick Kit, e condividere i propri tramite la pagina di caricamento della libreria.
keywords: libreria, simboli, tipi, asset, tipo, tipo di parete, tipo di pavimento, tipo di copertura, tipo di soffitto, modello di progetto, modello, Quick Kit, kit, condivisione, caricamento, versione, registro delle modifiche, LOD, classificazione, licenza, note dalla pratica
from: e13b0e67
---

## Cosa farai

Trovare in Libreria ciò che serve in base a cosa è, aggiungere un Tipo al progetto che si sta disegnando, avviare un nuovo progetto da un modello condiviso da qualcuno, e condividere i propri modelli, tipi e kit.

## I tre tipi di elemento della libreria

- **Simboli** sono convenzioni di disegno: solo 2D, disegnati alla dimensione di annotazione, raggruppati per disciplina.
- **Tipi** descrivono di cosa è fatto un elemento: i suoi strati con lo spessore reale, il suo livello di sviluppo (LOD) e il suo codice di classificazione. Un Tipo viene aggiunto al progetto, non disegnato.
- **Asset** sono oggetti fisici come porte, finestre, arredi, apparecchi ed apparecchiature, con una vista in pianta e un corpo 3D a dimensione reale.

Nella scheda {{ui:Libreria}}, scegliere {{ui:Libreria}} e usare **Tipo di elemento** per mostrare Tutto, Simboli, Tipi o Asset.

## Aggiungere un Tipo al progetto

1. Scegliere **Tipi** sotto Tipo di elemento e aprirne uno.
2. Controllare la composizione, il LOD e la classificazione sotto l'immagine, quindi scegliere {{ui:Aggiungi a questo progetto}}.
3. Viene aggiunto come tipo di parete, pavimento, copertura o soffitto con cui si può disegnare. Se un tipo con quel nome è già presente, il nuovo viene aggiunto come copia e il proprio resta invariato. Un solo {{ui:Annulla}} lo rimuove.

## Modelli di progetto e Quick Kit

Scegliere {{ui:Kit}} per vedere ciò che è stato condiviso.

- **Un modello di progetto** è un file IFC con livelli, griglie, tipi e impostazioni. {{ui:Salva nei miei modelli}} lo mette in Nuovo edificio, sotto Inizia da.
- **Un Quick Kit** è un elenco di elementi della libreria. {{ui:Mostra gli elementi del kit}} li elenca come schede che si possono posizionare.
- Ogni kit ha una versione e un registro delle modifiche, dal più recente. Una versione che inizia con 0 serve per la discussione; 1.0.0 è riservata a ciò che il proprietario della linea ha adottato.

## Condividere i propri

- **Un modello di progetto:** {{ui:Salva come modello}}, spuntare {{ui:Crea anche un file da condividere nella Libreria}}, aggiungere ciò che contiene e una versione. Si ottiene un file `.json`.
- **Un Quick Kit:** in {{ui:Kit}}, scegliere {{ui:Crea un Quick Kit da questo progetto}}. Elenca gli elementi della libreria che il progetto usa.
- **Un Tipo:** in {{ui:Pacchetti di tipi}}, spuntare un tipo e scegliere {{ui:Salva come elemento della libreria…}}.

Caricare il file nella pagina di caricamento della libreria. Il file passa la stessa verifica di ogni elemento, e la licenza si sceglie lì: ogni elemento dichiara la sua licenza. Per gli elementi sono richiesti il LOD, una classe IFC e un codice di classificazione (un codice, non solo un nome).

## Note dalla pratica

Su ogni pagina di un elemento della libreria, i membri con accesso possono aggiungere una nota: usato in un progetto reale, provato su un progetto di esempio, oppure trovato un problema. Indicare in poche parole che tipo di progetto e omettere i nomi dei clienti. Una nota è pubblica e non è una recensione: non cambia l'elemento.

## Da sapere

- Nulla viene inviato dall'app. I file sono creati sul proprio computer e il caricamento è manuale.
- Un kit creato da un modello porta il testo IFC esattamente come salvato. Verificarlo per eventuali dati privati prima del caricamento.
- CadCraft mostra Simboli e Asset nella sua scheda Libreria; Tipi e modelli sono per i progetti BimCraft.
