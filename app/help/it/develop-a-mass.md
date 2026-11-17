---
title: Sviluppare una massa edilizia da uno studio di sito
summary: Prendere una massa edilizia studiata nella vista di sito di CivilCraft e svilupparla in livelli, muri e solai, mantenendo la posizione del sito sulla mappa.
keywords: massa, massa edilizia, massing, studio di sito, sviluppare, CivilCraft, consegna, livelli, muri, solai, impronta, georeferenziazione, IFC
from: 557b94d1
---

La vista di sito di CivilCraft può disegnare masse edilizie su una particella e verificarle rispetto al terreno, ai limiti digitati e al sole. **Sviluppa in BimCraft** apre lì BimCraft in una nuova scheda con le masse; **Masse come IFC** le salva come file da aprire qui nel modo consueto. In entrambi i casi ogni massa arriva come un sito, un edificio con un livello per piano, e un blocco (la massa stessa) che riporta i suoi dati.

## Sviluppare una massa

1. Selezionare una massa nella vista 3D. Le Proprietà mostrano la sua destinazione, i piani e l'altezza di piano, l'impronta, la superficie lorda di pavimento, come si appoggia sulla pendenza e la sua particella.
2. Fare clic su **Sviluppa questa massa**.

In un unico passaggio di annullamento, ogni livello di quell'edificio riceve muri lungo l'impronta (l'impronta è la faccia esterna dei muri; ciascun muro sale fino al livello superiore, e quello più in alto è alto un piano) e un solaio sotto l'intero edificio. Il blocco viene sostituito, e l'edificio conserva i dati dello studio nel set di proprietà `CadCraft_SiteMass`, contrassegnato come sviluppato. Non c'è copertura: una copertura dipende dal progetto.

## La posizione del sito

Un file di CivilCraft è scritto nell'unità di lunghezza del progetto e, quando il progetto di CivilCraft aveva un sistema di coordinate, lo riporta come conversione cartografica del progetto. Lo sviluppo di una massa non lo modifica, quindi l'edificio resta dove dice la mappa.
