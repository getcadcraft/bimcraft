---
title: Esportare il modello in USD
summary: Scrivere i modelli IFC aperti come USD per il rendering, l'assemblaggio di scene e altri programmi 3D, con la classe IFC, il GlobalId e le proprietà di ogni elemento.
keywords: usd, usda, usdc, usdz, openusd, esporta, ifc, globalid, proprietà, piani, discipline, assemblaggio di scene, archviz, rendering
from: 2be5f7b8
---

{{ui:USD}} sulla barra degli strumenti scrive ciò che è aperto (ogni modello, compresi i modelli federati, nella posizione in cui sono stati posizionati) come un unico file USD.

## Esportare

1. Scegliere {{ui:USD}} sulla barra degli strumenti.
2. Scegliere {{ui:Testo (.usda)}}, {{ui:Binario (.usdc)}} oppure {{ui:Pacchetto (.usdz)}}.
3. Il file viene scaricato. La barra di stato indica quanti elementi sono stati inclusi.

## Cosa c'è nel file

| Nel modello IFC | Nel file USD |
|---|---|
| Sito, edificio, piani | Gruppi annidati, piani in ordine di quota |
| Ogni elemento | Un prim sotto il suo piano e la sua disciplina (Architettura, Struttura, MEP, Arredi, Sito, Spazi, Altro), con la geometria come mesh |
| Classe, GlobalId, nome, tipo, tag | Attributi chiamati `ifc:class`, `ifc:globalId`, `ifc:name` e così via |
| Set di proprietà e di quantità | Un attributo per proprietà; lunghezze, aree e volumi in metri, metri quadrati e metri cubi |
| Colori | Materiali (con trasparenza) |
| Spazi | Mantenuti, contrassegnati come guide perché i motori di rendering li saltino |

La geometria si trova nelle coordinate proprie del file IFC. La disposizione segue le convenzioni USD per gli edifici scritte da CadCraft.
