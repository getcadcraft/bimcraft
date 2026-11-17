---
title: Crea un abaco delle apparecchiature ed esporta in CSV
summary: Trasformare i tag delle voci di un disegno di cucina in un abaco delle apparecchiature, filtrarlo, passare a ogni voce sulla sua tavola e scaricarlo come CSV.
keywords: apparecchiature, abaco, ristorazione, cucina, tag delle voci, kcl, attributi, distinta base, bom, distinta dei materiali, csv, foglio di calcolo, esportazione, estrazione dei dati
from: e3faa1c8
---

## Cosa farai

Leggere l'elenco delle apparecchiature da un disegno di cucina o di ristorazione, controllarlo, trovare ogni voce sulla pianta e scaricarlo come file di foglio di calcolo.

Questo funziona su disegni i cui tag delle apparecchiature riportano i dati come attributi di blocco, come fanno le librerie di progettazione di cucine quali KCL: ogni tag contiene il numero della voce (`KCL-ITEM`), la quantità, la categoria, il costruttore, il modello, i dati elettrici e idraulici e le note. Gli altri disegni non hanno la scheda {{ui:Apparecchiature}}.

## Passaggi

1. Aprire il disegno, preferibilmente dalla sua cartella di progetto, così caricano anche i disegni collegati.
2. Fare clic sulla scheda {{ui:Apparecchiature}} sopra il disegno. La sua etichetta mostra quante voci sono sulle tavole, per esempio "Apparecchiature (88)".
3. Leggere l'abaco: **Voce**, **Q.tà**, **Apparecchiatura**, **Costruttore**, **Modello**, **Elettrico**, **Idraulico** e **Dove**.
4. Scegliere cosa elencare nel menu sopra la tabella: **Tutte le tavole**, una tavola, **Non su nessuna tavola**, oppure **Tutto ciò che è taggato nel disegno**. Ogni scelta mostra il proprio conteggio.
5. Digitare nella casella del filtro ("Filtro: categoria, costruttore, modello…") per restringere l'elenco, per esempio `frigorifero` o `208`.
6. Fare clic sul nome della tavola nella colonna **Dove** di una voce.
7. Guardare il disegno: BimCraft passa a quella tavola, ingrandisce la voce e disegna un cerchio attorno ad essa. La riga di stato dice "Voce *n*, *categoria* è evidenziata con un cerchio su *tavola*."
8. Fare clic su {{ui:Apparecchiature}} per tornare all'abaco.
9. Fare clic su {{ui:Scarica CSV}}.

## Cosa dovrebbe comparire

- Un file chiamato "*nome disegno* equipment.csv" (con il nome della tavola tra parentesi quando ne è stata elencata una sola) nella cartella dei download. Si apre in Excel, Numbers, LibreOffice o Google Sheets.
- La riga di stato: "Scaricato *nome file* (*n* voci)."

Il CSV ha queste colonne: Voce, Q.tà, Categoria, Costruttore, Modello, Elettrico, Idraulico, Note, Note elettriche, Note idrauliche, Tavole, Posizionate (quanti tag). Scarica esattamente le righe mostrate nella tabella, dopo il menu e il filtro.

## Come viene costruito l'abaco

- Viene letto dai **tag stessi**, non dall'abaco disegnato sulla tavola. La nota sopra la tabella indica quanti tag sono stati letti.
- Una riga corrisponde a un numero di voce con un solo insieme di dati. La sua quantità è la **somma** dei suoi tag, come conta un abaco stampato: scaffalature taggate "5" in un punto e "3" in un altro sono 8, mostrati come "5 + 3".
- **Dove** elenca le tavole che mostrano ciascuna voce, calcolate da ciò che mostrano le viewport di ciascuna tavola, cioè ciò che viene stampato. "Solo modello" significa che nessuna tavola la mostra.
- **Numero usato due volte** segnala un numero di voce su due apparecchiature diverse. La riga ha un segno ambra.
- I tag che nessuna tavola mostra sono tenuti separati sotto **Non su nessuna tavola**. Spesso sono residui di piante precedenti o di altre commesse, e non vengono mai mescolati in **Tutte le tavole**.
- **Elettrico** mostra ampere, kW, HP, volt, fase, collegamento e spina come taggati. **Idraulico** mostra le dimensioni dei collegamenti: CW acqua fredda, HW acqua calda, DD scarico diretto, ID scarico indiretto, e gas. Gli altri campi dei tag non sono ancora mostrati.

## Errori comuni

- **Nessuna scheda {{ui:Apparecchiature}}.** Il disegno non ha tag `KCL-ITEM`, oppure le sue apparecchiature sono disegnate senza dati. Non c'è nulla da leggere.
- **I conteggi differiscono dall'abaco stampato.** Un abaco stampato può elencare numeri di riserva o usare nomi più brevi dei tag. Fidarsi dei tag per ciò che è posizionato; verificare le differenze con il progettista.
- **Aprendo il CSV compaiono caratteri strani.** Il file è in UTF-8. Aprirlo con il comando di importazione del foglio di calcolo e scegliere UTF-8 se il programma lo chiede.
- **Una cella inizia con un apostrofo.** I valori che iniziano con `=`, `+`, `-` o `@` ricevono un `'` iniziale perché i fogli di calcolo non li eseguano come formule.
- **{{key:F}} e {{key:P}} non fanno nulla.** Agiscono sul disegno, non sull'abaco. Fare prima clic su una linguetta di tavola.
