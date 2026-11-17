---
title: Una mappa sul terreno sotto il modello
summary: Posare una mappa stradale o una foto aerea sul terreno sotto un modello IFC georeferenziato, da riquadri di mappa, servizi cartografici o un'immagine con un file di mondo.
keywords: mappa, livelli di mappa, mappa di base, aerea, satellite, sito, terreno, riquadri, xyz, wms, wmts, servizio di mappa, file di mondo, georeferenziazione, ifcmapconversion, CRS proiettato, epsg, contesto del sito
from: 84e2e9df
---

## Cosa si fa

Vedere il modello nel suo luogo: la mappa stradale o la foto aerea del sito sul terreno sotto di esso.

## Passaggi

1. Aprire un modello IFC che riporta il suo luogo sulla mappa (una conversione cartografica, IfcMapConversion, con un sistema di coordinate proiettato). Gli esportatori la scrivono quando le coordinate del progetto (punto di rilievo, coordinate condivise) sono impostate.
2. Scegliere {{ui:Mostra}} › {{ui:Livelli di mappa…}}. La finestra indica il sistema del modello, per esempio EPSG:28356. Un modello senza conversione cartografica non può avere layer cartografici: la finestra lo dice.
3. Attivare {{ui:Layer cartografici da internet}}. Fino ad allora nessun server viene interpellato; quando è attivo, i server aggiunti vedono l'area intorno al modello e il proprio indirizzo internet, mai il modello.
4. In {{ui:Aggiungi un layer}} scegliere riquadri (un indirizzo con `{z}`, `{x}` e `{y}`), un servizio WMS, WMTS o ArcGIS ({{ui:Ottieni layer}}, poi sceglierne uno), oppure un'immagine con il suo file di mondo.
5. Chiudere la finestra. La mappa si trova sul terreno appena sotto il punto più basso del modello, sopra l'impronta del modello e altrettanto oltre intorno ad essa.

:::note
La mappa è solo a schermo; non viene salvata nel file IFC. L'elenco dei layer è conservato in questo browser. Usare solo servizi cartografici i cui termini lo consentono.
:::
