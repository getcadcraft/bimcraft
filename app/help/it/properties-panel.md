---
title: Campi del pannello Proprietà
summary: Cosa significa ogni campo del pannello Proprietà e dei pannelli File, Disegno e Cartella, e quali si possono modificare.
keywords: proprietà, campi, attributi, globalid, guid, copia, copia valore, copia tutto, csv, appunti, numero di serie, tag, tipo di oggetto, linea, express id, set di proprietà, pset, quantità, schema, pannello file
from: fe55b435
---

## Un elemento IFC

In cima al pannello {{ui:Proprietà}} compaiono il tipo dell'elemento senza il prefisso "Ifc" (per esempio "Door", "WallStandardCase", "FurnishingElement") e il suo nome, oppure "Senza nome".

| Campo | Significato | Modificabile |
|---|---|---|
| Nome | Il nome dell'elemento, spesso il nome della famiglia e del tipo dato dall'esportatore | Sì |
| Tipo | Il nome del tipo dell'elemento, quando ne ha uno | No |
| Tipo di oggetto | Una descrizione libera del tipo, che alcuni esportatori compilano | Sì |
| Tag | Il tag o il contrassegno dell'elemento; molti esportatori vi scrivono l'ID dell'elemento | Sì |
| Descrizione | Testo libero | Sì |
| GlobalId | L'identificatore IFC permanente di 22 caratteri dell'elemento, uguale in ogni esportazione dello stesso elemento | No |
| Linea | Il numero di riga dell'elemento (`#1234`) in questo file IFC. Cambia da un'esportazione all'altra | No |

Sotto compaiono i **set di proprietà**, ordinati per nome:

- Ogni set si apre e si chiude cliccando sul suo nome. I primi tre sono aperti.
- Un set contrassegnato "(tipo)" appartiene al tipo dell'elemento: "Proprietà di tipo: una modifica qui si applica a ogni elemento di questo tipo."
- I set di quantità (lunghezze, aree, volumi, conteggi, pesi) sono in sola lettura.
- Elenchi e valori enumerati sono mostrati in sola lettura.
- I valori Sì/No compaiono come **Sì** o **No**.
- I numeri sono arrotondati a quattro decimali per la visualizzazione. Le lunghezze (una proprietà di lunghezza o la lunghezza di una quantità) compaiono nelle {{ui:Unità}} scelte nella barra degli strumenti, con l'unità accanto, e si può digitare un nuovo valore in quell'unità o con un'altra unità (2.4 m, 8'-0"): BimCraft riscrive nel file il numero del file stesso. Gli altri numeri sono mostrati come il file li contiene.
- Un valore vuoto compare come *vuoto*. Un valore modificato è in grassetto con una barra blu accanto.

## Copiare un valore

Ogni valore in {{ui:Proprietà}} ha un piccolo pulsante di copia accanto: cliccarlo per mettere quel valore negli appunti esattamente come mostrato, per esempio un GlobalId, un numero di serie o qualsiasi valore di un set di proprietà. Copiare non avvia mai una modifica.

In alto, {{ui:Copia tutto}} copia ogni valore dell'elemento come testo, set per set, e {{ui:Copia come CSV}} copia le righe di gruppo, proprietà e valore da incollare in un foglio di calcolo; i valori vuoti vengono mantenuti, così ogni campo ha una riga. Funziona allo stesso modo per un elemento di un altro modello aperto; quando sono aperti più modelli, il CSV inizia con una colonna Modello che indica il file.

## Il pannello File (IFC)

| Campo | Significato |
|---|---|
| File, Dimensione | Il file aperto |
| Schema | La versione IFC, come IFC2X3 o IFC4 |
| Progetto | Il nome del progetto e il nome esteso |
| Fase | La fase del progetto, se l'esportatore ne ha scritta una |
| Esportato da | Il programma di esportazione, dall'intestazione del file |
| Autore | L'autore nell'intestazione del file |
| Esportato | La data e l'ora nell'intestazione del file |
| Elementi | Quanti elementi con una forma sono stati disegnati |
| Triangoli | Quanti triangoli formano le loro forme; una misura del peso del modello |

## Il pannello File (progetto e file di famiglia)

| Campo | Significato |
|---|---|
| Tipo | Progetto, Modello di progetto, Famiglia o Modello di famiglia |
| Salvato in | La versione che ha salvato per ultima il file |
| Build | La build esatta di quella versione |
| Letto | Quanto del file BimCraft ha letto, rispetto alle sue dimensioni |

## Il pannello Disegno (DWG e DXF)

| Campo | Significato |
|---|---|
| Formato | La versione con cui è stato salvato il disegno, con il suo codice di formato, come AC1032 |
| Unità | Le unità di inserimento del disegno, quando sono impostate |
| Entità | Quanti oggetti sono stati letti |
| Layer | Quanti layer |
| Tavole | Quante tavole (layout), oppure Nessuna |
| Disegni collegati | Quanti dei suoi disegni collegati sono stati trovati e caricati |
| Attrezzature | Quanti elementi di attrezzatura con etichetta sono sulle tavole |

## Il pannello Cartella

| Campo | Significato |
|---|---|
| Cartella, File, Dimensione | La cartella aperta, quanti file contiene e la loro dimensione totale |
| Modelli | File di progetto e di famiglia, ciascuno con i suoi backup contati una volta |
| Disegni CAD, modelli IFC | Quanti di ciascuno |
| Problemi | Quante copie di modelli sono incomplete o illeggibili, oppure Nessuno |
