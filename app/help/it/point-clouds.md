---
title: Mostrare una nuvola di punti accanto al modello
summary: Aprire una scansione laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) nella vista 3D da sola o con un modello IFC, colorarla, tagliare una sottile sezione, misurare fino ai suoi punti e passarla all'app di disegno per tracciare le linee come costruito.
keywords: nuvola di punti, scansione laser, scansione, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, come costruito, rilievo, registrazione, sezione, taglio in pianta, snap, misura, traccia, scansione per BIM
from: d0a3e740
---

## Cosa farai

Osservare una scansione laser di un edificio accanto al suo modello: verificare che quanto costruito corrisponda al progetto, misurare tra punti scansionati e tagliare una sottile sezione per leggere muri, porte e pilastri.

## Passaggi

1. Aprire la nuvola: {{ui:Aperta}} un file `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz`, oppure trascinarlo nella pagina (vedi l'argomento sui formati di nuvole di punti per sapere cosa porta ciascun formato e cosa esportare dal software proprio dello scanner). Con un modello aperto, la nuvola si unisce al modello nella vista 3D; aprire una nuvola non chiude mai il modello né le sue modifiche non salvate. Senza modello, la nuvola si apre da sola.
2. Sotto la barra degli strumenti compare la barra della nuvola. Indica quanti punti sono visibili e quanti ne contiene il file.
3. Scegliere {{ui:Colora per}}: i colori del file (quando lo scanner li ha memorizzati), {{ui:Altezza}}, {{ui:Intensità}}, {{ui:Classe}} (classi LiDAR come terreno, vegetazione ed edificio) oppure {{ui:Un colore}}. {{ui:Dimensione}} rende i punti più grandi o più piccoli.
4. Cliccare {{ui:Pianta}} sotto {{ui:Sezione}} per mantenere solo una fascia sottile di 1.2 m sopra il punto più basso, vista dall'alto: muri, aperture di porte e pilastri si leggono come una pianta. {{ui:Anteriore}} e {{ui:Lato}} tagliano fasce verticali per prospetti e sezioni. Spostare la fascia con {{ui:A}} e cambiare {{ui:Spessore}} (in metri). {{ui:Disattivato}} mostra di nuovo l'intera nuvola.
5. Cliccare {{ui:Misura}} nella barra degli strumenti. Il puntatore fa snap ai punti della nuvola (l'etichetta dice "nuvola di punti"), così si può misurare da muro a muro nella sezione, oppure dall'elemento del modello alla scansione. Uno spigolo o un angolo del modello a portata ha comunque la precedenza.
6. Con {{ui:Misura}} › {{ui:Posizione}}, un punto della nuvola fornisce la sua latitudine e longitudine dal sistema di coordinate della nuvola, quando il file ne indica uno.
7. {{ui:Nascondi}} nasconde la nuvola per un momento; {{ui:Rimuovi}} la toglie. {{ui:Mostra}} › {{ui:Nuvola di punti}} nasconde o mostra la barra.

## Dove va la nuvola

{{ui:Posiziona}} nella barra indica come la nuvola si allinea con il modello:

- **Coordinate del modello**: i numeri della nuvola sono quelli del modello (una scansione registrata nelle coordinate del progetto).
- **Coordinate cartografiche**: il modello ha una conversione cartografica (IfcMapConversion) e la nuvola è nello stesso sistema proiettato: la nuvola viene posizionata tramite essa. Se i due indicano sistemi diversi, la riga di stato lo segnala.
- **Centrata sul modello**: quando nessuna delle due opzioni pone la nuvola vicino al modello, il suo centro va al centro del modello e il punto più basso al pavimento del modello. Scegliere un'altra opzione per modificarlo.

Quando il file non indica le sue unità, BimCraft legge i metri e offre {{ui:Unità}} nella barra.

## Tracciare le linee come costruito

Cliccare {{ui:Traccia in CadCraft}} per passare la nuvola all'app di disegno in una nuova scheda. Si apre lì sotto il disegno, dove una sezione in pianta e lo snap a oggetto permettono di disegnare i muri sopra la scansione. Vedi l'argomento CadCraft sulle nuvole di punti.

## Quanti punti

Una scansione può contenere centinaia di milioni di punti. BimCraft legge ogni punto una volta e ne conserva una quota uniforme da disegnare: {{ui:Mostra}} nella barra imposta quanti (1, 2, 5 o 10 milioni). Più punti richiedono più memoria e una scheda grafica più veloce. I conteggi per classe LiDAR riguardano ogni punto del file.

:::note
I file vengono letti su questo computer; nulla viene caricato. Vengono letti LAS 1.0–1.4 e LAZ (file LAZ fino a 1 GB, tenuti in memoria durante la lettura); file E57 fino a 6 milioni di punti e 512 MB per ora (scansioni più grandi: esportare LAS o LAZ); PLY, PCD e PTX per intero; le nuvole di testo sono `x y z`, con colonne colore (`r g b`) e intensità quando sono presenti.
:::

## Più scansioni

Le scansioni fatte da posizioni diverse possono essere registrate in un unico sistema di riferimento, affinate con ICP ed esportate come un unico LAS o E57: vedi [Registrare più scansioni in una](topic:register-scans).
