---
title: Pacchetti di tipi: condividere tipi di muro come file aperti
summary: Salvare tipi di muro con i loro strati, materiali, tag e codici di classificazione, e le famiglie, come un unico file aperto (JSON semplice oppure IFC), e aggiungerli a un altro progetto. Anche i tipi di muro di un file IFC di un altro programma possono essere letti.
keywords: pacchetto di tipi, tipi, tipo di muro, condividere, esportare, importare, libreria, formato aperto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiali, strati, modello, standard di studio, famiglie
from: e4c91331
---

## Cosa si fa

Portare i tipi di muro da un progetto a un altro, oppure consegnarli a qualcuno che lavora in un altro programma. Un pacchetto di tipi contiene ogni tipo di muro con i suoi strati, spessori, materiali, anima, intercapedini, priorità degli strati, livello di sviluppo, dati per il computo e codici di classificazione, più le famiglie che si aggiungono. È un file aperto: testo JSON semplice che chiunque può leggere, oppure un file IFC. Nulla al suo interno è legato a uno studio, a un paese o a un account.

## Salvare i tipi da un progetto

1. Aprire **Dati** nella barra del modello e scegliere {{ui:Pacchetti di tipi}}.
2. In {{ui:Salva i tipi di questo progetto}}, spuntare i tipi di muro da includere. I tipi propri del progetto sono già spuntati; un tipo di partenza può essere aggiunto e viene inserito come copia. Spuntare le famiglie se si vogliono includere.
3. Digitare un {{ui:Nome del pacchetto}}.
4. {{ui:Salva come pacchetto (.json)}} scarica un file `.cctypes.json`. {{ui:Salva come IFC (.ifc)}} scarica un file IFC che contiene solo tipi: ogni tipo di muro come IfcWallType con il suo set di strati di materiale, materiali e classificazione, per qualsiasi programma BIM.

## Aggiungere tipi a un progetto

1. Nella stessa finestra, scegliere {{ui:Apri un pacchetto o un file IFC…}} e selezionare un pacchetto `.json` oppure un file `.ifc`.
2. La finestra elenca cosa contiene il file: ogni tipo di muro con il suo spessore, numero di strati e codici, i materiali e le famiglie.
3. Scegliere cosa succede a un {{ui:Un tipo che questo progetto ha già}}: **Mantieni quello del progetto**, **Aggiungi quello del pacchetto come copia** (riceve un nuovo nome che termina con "(2)"), oppure **Sostituisci (solo se nessun muro lo usa)**.
4. {{ui:Aggiungi al progetto}}. La finestra elenca ciò che è stato aggiunto, copiato, sostituito o mantenuto. È un unico passo di annullamento.

I nuovi tipi sono subito nell'elenco dei tipi dello strumento Muro.

## Tipi di solaio, copertura e soffitto

L'elenco dei tipi da salvare contiene anche i tipi di solaio, copertura e soffitto del progetto e i loro tipi di partenza (contrassegnati Solaio, Copertura, Soffitto). Un pacchetto può contenere tutti e quattro i tipi; ogni tipo indica la sua classe IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipo di solaio, copertura o soffitto usato dagli elementi non viene sostituito da un pacchetto: modificarlo nell'editor dei tipi.

## Un tipo come elemento della libreria

Spuntare esattamente un tipo e scegliere **Salva come elemento della libreria…**. Viene salvato un file `.cctype.json`: un elemento della libreria di tipo Tipi che contiene quel solo tipo (i suoi strati, materiali, LOD e codici di classificazione). Caricarlo in Libreria per condividerlo. **Apri un pacchetto o un file IFC** legge anche un elemento del genere e aggiunge il suo tipo al progetto come un pacchetto.

## Da sapere

- Un file IFC di un altro programma può essere aperto anche qui. Ciascuno dei suoi tipi di muro che ha strati di materiale viene letto: il nome, i materiali e gli spessori degli strati e le eventuali intercapedini sono quelli del file. Quali strati sono l'anima e cosa fa ciascuno strato (finitura, struttura, isolamento) viene stimato; il tipo è contrassegnato **(stimato)**, e conviene verificarlo nell'editor del tipo di muro. Un tipo di muro senza strati viene escluso e indicato per nome.
- Un materiale già presente nel progetto viene mantenuto così com'è. Un nuovo materiale il cui nome è già usato riceve "(pacchetto)" dopo il nome.
- Un tipo usato dai muri non viene mai sostituito da un pacchetto. Modificarlo nell'editor del tipo di muro, che sposta correttamente i suoi muri.
- Un codice impostato su un muro non viaggia: appartiene a quel muro. Un codice impostato sul tipo sì.
- Un file con un campo che il formato non prevede, uno strato il cui materiale manca, o qualsiasi cosa che non sia testo semplice viene rifiutato, e il messaggio indica dove e perché.
- Non ancora implementato: tipi di solaio, copertura e soffitto (in questa versione non hanno tipi: ciascuno ha il proprio spessore), tipi di porta e finestra diversi dalle famiglie, e tratteggi o colori dal file di un altro programma.
