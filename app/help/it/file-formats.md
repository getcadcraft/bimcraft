---
title: Cosa legge BimCraft da ogni formato
summary: Esattamente cosa legge BimCraft dai file IFC, di progetto e di famiglia, DWG e DXF, e cosa lascia invariato.
keywords: formati, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versioni, compatibilità, cosa viene letto
from: 9b8dfb4f
---

## IFC

| Lettura | Dettagli |
|---|---|
| Geometria | Ogni elemento con una forma, colorato come indica il file. Locali e spazi sono disegnati trasparenti e nascosti all'inizio |
| Piani | I piani dell'edificio in ordine di quota, e quali elementi stanno su ciascun piano. Gli elementi su nessun piano sono raggruppati come "Non su un piano" |
| Conteggi degli elementi | Quanti elementi per tipo (muri, porte, solai…), mostrati in {{ui:Elements}} |
| Dati di progetto | Nome del progetto, nome esteso e fase; schema; il programma che esporta, autore e data di esportazione dall'intestazione del file |
| Dati dell'elemento | Nome, tipo, tipo di oggetto, tag, descrizione, GlobalId; ogni set di proprietà e set di quantità dell'elemento e del suo tipo |

Modificabili: nome, tipo di oggetto, tag, descrizione e singoli valori di proprietà. Salvato come nuovo file IFC. Si aprono gli schemi IFC2X3, IFC4 e IFC4X3, letti dal motore IFC proprio di BimCraft; ciò che non può ancora essere disegnato è elencato sotto **Non ancora disegnato** nel pannello {{ui:File}}. Il modello viene spostato nell'origine all'apertura, quindi un modello posizionato lontano appare comunque al centro dello schermo. `.ifczip` e `.ifcxml` non si aprono.

## File di progetto e di famiglia

`.rvt` progetti, `.rte` modelli di progetto, `.rfa` famiglie e `.rft` modelli di famiglia.

| Lettura | Dettagli |
|---|---|
| Informazioni sul file | Versione e build, condivisione del lavoro, percorso del modello centrale, percorso dell'ultimo salvataggio, nome utente, lingua, GUID del documento |
| Informazioni di progetto | I campi propri del progetto (nome, numero, committente, indirizzo, stato…), senza i valori predefiniti di nuovo progetto |
| Informazioni sulla famiglia | Nome della famiglia, categoria, versione, ultimo aggiornamento, e i suoi parametri per gruppo |
| Collegamenti | L'elenco dei modelli collegati, dei collegamenti CAD, delle immagini e delle tabelle di keynote a cui punta il file |
| Immagine di anteprima | La miniatura salvata nel file |

Non letti: il modello 3D, gli elementi, le viste, le tavole e gli abachi. Sono memorizzati in un formato non documentato. BimCraft legge solo alcune decine di kilobyte da ciascun file, quindi la dimensione del file conta poco.

## File .pln, .pla, .tpl e .bpn

Non ancora letti: BimCraft lo segnala quando ne si apre uno. Esportare IFC per il modello e DWG per i disegni; vedi [Aprire i file di progetto .pln e .pla](topic:pln-project-files).

## DWG e DXF

| Lettura | Dettagli |
|---|---|
| Spazi | Spazio modello e ogni tavola (layout), nell'ordine delle schede |
| Viewport | Le viewport di ogni tavola, con la loro scala, rotazione e i layer congelati |
| Layer | Nome, colore, acceso/spento, congelato, flag di stampa e spessore di linea |
| Oggetti | Linee, polilinee, archi, cerchi, ellissi, spline, tratteggi e solidi, testo e testo multilinea, blocchi e attributi, quote, linee di richiamo e linee di richiamo multiple, tabelle, punti, immagini |
| Disegni collegati | Disegnati dove sono inseriti, quando si trovano i loro file |
| Immagini | Disegnate dai file immagine quando trovati (PNG, JPEG, GIF, BMP, WebP; non TIFF) |
| Tag delle apparecchiature | Tag delle voci di cucina (attributi `KCL-ITEM`), per l'abaco delle apparecchiature |

Tutto il resto viene conteggiato sotto **Non ancora disegnato**, senza essere indovinato. I formati DWG da AutoCAD 2000 a 2018 sono quelli verificati (anche i file R13 e R14 sono accettati, ma nessuno era nel set di prova; i DWG più vecchi non si aprono); il pannello {{ui:Drawing}} mostra il codice del formato, come AC1032. I file DXF di ogni versione si aprono, R12 compreso. Entrambi sono letti dai lettori propri di BimCraft, in questa scheda. Nulla viene salvato di nuovo in DWG o DXF.

## In una cartella

| Tipo | Estensioni | Nel rapporto |
|---|---|---|
| Modelli | `.rvt` `.rfa` `.rte` `.rft` | Raggruppati con copie di backup numerate, controllati, scheda letta, collegamenti verificati |
| IFC | `.ifc` | Elencati; si aprono in 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Elencati con i modelli che li collegano; DWG e DXF si aprono in 2D, DGN no |
| Residui | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Elencati sotto **Messi da parte** |
| Cartelle di servizio | `*_backup`, `*_log`, `Revit_temp`, cartelle nascoste | Elencate sotto **Messi da parte**, non lette |

Vedi [Rapporto della cartella: ruoli, stati e collegamenti](topic:folder-roles).
