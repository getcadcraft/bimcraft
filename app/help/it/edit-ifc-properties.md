---
title: Modificare le proprietà IFC e salvare una copia modificata
summary: Cambiare il nome, l'etichetta, la descrizione o il valore di una proprietà di un elemento, annullare, e scaricare un nuovo file IFC mentre l'originale resta com'era.
keywords: modifica, cambia, proprietà, parametri, etichetta, nome, rinomina, marcatura, salva con nome, scarica, annulla, copia, ifc, scrivi
from: f8035d62
---

## Cosa si fa

Correggere i dati di un modello IFC: rinominare un elemento, correggerne l'etichetta, cambiare il valore di una proprietà. Poi salvare un nuovo file IFC con le modifiche. Il file aperto non viene mai toccato.

## Cosa si può cambiare

| Campo | Modificabile |
|---|---|
| Nome, Tipo di oggetto, Etichetta, Descrizione | Sì |
| Valori di singole proprietà (testo, numeri, Sì/No) | Sì |
| Proprietà di tipo (set contrassegnati "(tipo)") | Sì, e la modifica vale per ogni elemento di quel tipo |
| Tipo, GlobalId, Linea | No |
| Quantità (lunghezze, aree, volumi, conteggi) | No |
| Elenchi, enumerazioni e altri valori a più parti | No |
| Geometria, posizione, aggiunta o eliminazione di elementi | No |

## Passaggi

1. Aprire un modello IFC e fare clic sull'elemento da modificare.
2. Nel pannello {{ui:Proprietà}}, fare clic sul valore da cambiare. Diventa una casella di testo. Un valore vuoto appare come *vuoto*.
3. Digitare il nuovo valore.
4. Premere {{key:Enter}}, oppure fare clic altrove, per confermare. Premere {{key:Esc}} per annullare.
5. Controllare il valore: ora è in grassetto con una barra blu accanto, che segna un valore modificato.
6. Controllare la sezione {{ui:Modifiche}} a sinistra: la modifica è elencata come *elemento*: *campo*, valore precedente a valore nuovo.
7. Ripetere per altri valori o altri elementi.
8. Fare clic su {{ui:Salva come IFC}} (indica quante modifiche sono in attesa, per esempio "Salva come IFC (3)"), oppure premere {{key:Mod+S}}.
9. Trovare "*nome originale* (modificato).ifc" nella cartella dei download.

## Cosa si deve vedere

La riga di stato dice "Salvato *nome* (modificato).ifc con *n* modifiche (… byte). Il file originale è invariato." L'elenco {{ui:Modifiche}} si svuota, pronto per il giro successivo.

## Tipi di valori

- **Testo**: tutto ciò che si digita viene mantenuto così com'è. Svuotare Nome, Tipo di oggetto, Etichetta o Descrizione rimuove il valore.
- **Numeri**: digitare un numero semplice, come `2.4` o `1200`, nelle unità proprie del file. Nessun simbolo di unità. Qualunque altra cosa mostra "Usare un numero."
- **Numeri interi** (conteggi, interi): "Usare un numero intero." se si digita un decimale.
- **Sì/No**: il valore diventa un menu con Sì e No.

Ogni valore mantiene il suo tipo IFC, quindi un numero resta un numero e gli altri programmi lo leggono correttamente.

## Annullare

1. Fare clic su {{ui:Annulla}} nella sezione {{ui:Modifiche}}, oppure premere {{key:Mod+Z}} mentre non si sta scrivendo in un campo.
2. Ripetere per annullare altro. Ogni annullamento toglie la modifica più recente.

Non si può annullare oltre un salvataggio: dopo il salvataggio l'elenco ricomincia. Il file salvato conserva tutto.

## Perché la modifica cambia un solo elemento

Gli esportatori risparmiano spazio condividendo i dati. Un set di proprietà può essere condiviso da venti porte, e un valore ("Resistenza al fuoco: 60 min") può comparire in novanta set. Se BimCraft cambiasse semplicemente il valore condiviso, ogni elemento che lo condivide cambierebbe.

Quindi BimCraft copia prima di scrivere:

- Se il set di proprietà modificato è condiviso con altri elementi, il proprio elemento riceve una copia tutta sua del set, e cambia solo la copia.
- Se il valore è condiviso con altri set, il proprio set riceve una copia tutta sua del valore.

I vicini mantengono i loro vecchi dati. Questo si chiama *copia su scrittura*. Aggiunge alcune piccole voci al file, che ogni programma IFC legge normalmente.

**Le proprietà di tipo sono un'eccezione voluta.** Un set contrassegnato "(tipo)" appartiene al tipo dell'elemento, e in IFC ogni elemento di quel tipo lo legge da lì. Cambiarlo cambia il tipo, quindi ogni elemento del tipo mostra il nuovo valore. L'elenco {{ui:Modifiche}} contrassegna tali modifiche con "(tipo)". Vedere [Cambiare una proprietà di tipo per ogni elemento di un tipo](topic:type-vs-instance).

## Avvisi prima di perdere il lavoro

- Aprire un altro file con modifiche non salvate chiede "Sono presenti *n* modifiche non salvate in *file*. Scartarle?" Fare clic su Annulla per continuare a lavorare, poi salvare.
- Chiudere o ricaricare la scheda con modifiche non salvate fa chiedere al browser se lasciare la pagina.

## Errori comuni

- **Scrivere le unità.** `2400 mm` viene rifiutato. Digitare `2400`.
- **Cambiare una proprietà di tipo quando si intendeva un solo elemento.** Cercare la nota "(tipo)" prima di digitare. Se si vuole che un elemento sia diverso, cambiare una proprietà dell'istanza oppure la sua Etichetta o il suo Nome.
- **Aspettarsi che il file originale cambi.** Il salvataggio scarica sempre un nuovo file. Sostituire l'originale a mano se è quello che si vuole, e conservare una copia.
- **Premere {{key:Mod+S}} senza modifiche.** BimCraft salva solo quando c'è qualcosa da salvare; altrimenti può aprirsi la "Salva pagina" del browser. Chiuderla.
- **Salvare due volte aspettandosi due file piccoli.** Ogni salvataggio contiene ogni modifica fatta dall'apertura del modello.
- **Aspettarsi che le modifiche tornino in un file di progetto.** BimCraft scrive solo IFC. Portare l'IFC modificato nel programma di authoring come si importa qualunque IFC.
