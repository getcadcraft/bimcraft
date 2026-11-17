---
title: Vedere un disegno DWG o DXF in 3D
summary: Passare lo spazio modello di un disegno al 3D per vedere altezze, spessori, facce 3D, mesh e blocchi, orbitarci intorno, fare clic su un oggetto per vederne le proprietà e vedere ciò che non è ancora disegnato.
keywords: 3d, dwg, dxf, disegno, spazio modello, orbita, sezione, taglio, ritaglio, scelta, seleziona, proprietà, attributi, handle, altezza, spessore, estrusione, 3dface, polyface, mesh, polilinea 3d, blocchi, viste, prospettiva, parallela, estensione, acis, solidi
from: a0c6cd17
---

## Cosa si fa

Guardare lo spazio modello di un disegno in 3D. Linee e polilinee stanno alla loro altezza reale, gli oggetti con uno spessore si alzano come muri, e le facce 3D, le mesh e i blocchi 3D si mostrano come superfici intorno alle quali si può orbitare. I fogli restano 2D.

## Passaggi

1. Aprire un DWG o un DXF. Vedere [Visualizzare un disegno DWG o DXF](topic:view-dwg). Si apre in 3D, a meno che {{ui:Impostazioni}} › {{ui:BimCraft}} › **I disegni si aprono in** indichi {{ui:Modello (2D)}}.
2. Dal 2D, fare clic su {{ui:3D}} nella barra sopra il disegno, oppure premere {{key:3}}.
3. Attendere un momento la prima volta: la riga di stato indica "Costruzione del disegno in 3D…", poi quante linee e facce mostra.
4. Orbitare, fare pan e zoom (vedere la tabella sotto).
5. Fare clic su una vista nella seconda barra: {{ui:Iso}}, {{ui:Sopra}}, {{ui:Sotto}}, {{ui:Anteriore}}, {{ui:Posteriore}}, {{ui:Sinistra}} o {{ui:Destra}}.
6. Fare clic su {{ui:Prospettiva}} per passare da una vista prospettica a una vista parallela.
7. Fare clic su {{ui:Estensione}} o premere {{key:F}} per vedere di nuovo tutto il disegno.
8. Fare di nuovo clic su {{ui:3D}}, premere {{key:3}}, oppure fare clic su {{ui:Modello}} o su una scheda di foglio per tornare al 2D.

## Cosa si deve vedere

- Lo spazio modello in 3D, Z verso l'alto, con i colori del disegno. Le facce sono un tono più chiare dei loro spigoli.
- I layer spenti in {{ui:Layer}} scompaiono anche dalla vista 3D.
- A destra: il numero di linee e di facce, le dimensioni del disegno in X, Y e Z, **Solo nella vista 2D** e **Non ancora disegnato**.

## Tagliare con un piano di sezione

Fare clic su {{ui:Sezione}} nella barra 3D, oppure premere {{key:X}}. La barra sotto funziona come per i modelli IFC (vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane)): tagliare da {{ui:Sopra}}, {{ui:Anteriore}} o {{ui:Lato}}, trascinare o digitare lo scostamento — qui nelle unità proprie del disegno — e {{ui:Inverti}} per tenere l'altro lato. Ciò che il piano taglia via non può essere scelto. Tornare al 2D elimina il taglio.

## Vedere le proprietà di un oggetto

Fare clic su un oggetto nella vista 3D. Diventa del colore di scelta e {{ui:Proprietà}} mostra ciò che il file dice su di esso: tipo, layer, colore, tipo di linea e handle, poi i suoi dati, come inizio, fine e lunghezza di una linea, centro e raggio di un cerchio, angoli di una faccia 3D, oppure il blocco, il punto di inserimento, la scala, la rotazione e i valori degli attributi di un riferimento a blocco.

- Un riferimento a blocco viene scelto per intero, insieme ai blocchi annidati in esso.
- Un clic a pochi pixel da una linea sceglie la linea.
- Tenere premuto {{key:Mod}} e fare clic per scegliere altri oggetti, o per toglierne uno; {{ui:Proprietà}} allora li conta per tipo.
- {{key:Esc}}, oppure un clic su uno spazio vuoto, annulla la scelta.
- Gli oggetti sui layer spenti non possono essere scelti.

## Spostarsi

:::mouse
| Per | Fare questo |
|---|---|
| Orbitare | Trascinare con il pulsante centrale, oppure con quello sinistro |
| Fare pan | Trascinare con il pulsante destro, oppure tenere premuto {{key:Shift}} e trascinare |
| Zoom | Scorrere la rotella; lo zoom avviene verso ciò che si trova sotto il puntatore |
| Vedere tutto | {{ui:Estensione}} oppure {{key:F}} |
| Guardare da un lato | Fare clic su una faccia, uno spigolo o un angolo del cubo di navigazione nell'angolo in basso a destra |
:::

Il cubo di navigazione può essere sostituito con un'icona degli assi, oppure nascosto, in {{ui:Impostazioni}}. Vedere [Impostazioni di BimCraft](topic:settings).

:::mac mouse
Su un trackpad, scorrere con due dita per orbitare, tenere premuto {{key:Shift}} e scorrere per fare pan, e pizzicare per lo zoom.
:::

:::touch
Trascinare con un dito per orbitare. Pizzicare con due dita per lo zoom, e muoverle insieme per fare pan.
:::

## Cosa viene disegnato in 3D

| Nel disegno | In 3D |
|---|---|
| Linee, polilinee 3D | Alla loro altezza reale |
| Polilinee, cerchi, archi, ellissi | Nel proprio piano, alla propria quota, inclinati quando il disegno li inclina |
| Spessore su linee, polilinee, cerchi e archi | Muri di quell'altezza; i cerchi sono chiusi sopra e sotto |
| Facce 3D, mesh polyface, mesh poligonali | Superfici ombreggiate con i loro spigoli visibili |
| Blocchi | Posizionati, ruotati e scalati in 3D, anche i blocchi annidati |
| Tratteggi | I loro contorni |
| Semplici linee 2D | Piatte, dove sono state disegnate |

## Solo nella vista 2D

Testo, testo multilinea e attributi visibili dei blocchi sono disegnati in 3D, nel proprio piano e alla propria altezza, e un clic su di essi li sceglie. Le polilinee larghe mostrano la loro larghezza come una fascia piatta. Le linee di richiamo multiple, le immagini e i motivi di tratteggio sono contati sotto **Solo nella vista 2D**: vederli nella scheda {{ui:Modello}} o nei fogli.

## Non ancora disegnato

I solidi e le superfici memorizzati come corpi ACIS (solidi 3D, corpi, regioni e superfici) e le mesh di suddivisione sono elencati sotto **Non ancora disegnato** con il loro numero. Vengono saltati, non indovinati.

## Errori comuni

- **Tutto sembra piatto.** Il disegno è 2D: le sue linee non hanno altezza. Fare clic su {{ui:Anteriore}} per verificare; un disegno piatto appare come una linea.
- **Un modello solido non mostra nulla.** I solidi creati con un modellatore solido sono corpi ACIS, elencati sotto **Non ancora disegnato**. Esportare il modello come IFC o come facce 3D dal programma che lo ha creato.
- **Il disegno è un piccolo ammasso al centro.** Qualcosa di lontano nello spazio modello, come una vecchia copia di una pianta, ingrandisce le estensioni. Fare zoom con la rotella dove si vuole guardare.

## Prossimi passi

- [Lavorare con layer e tavole](topic:dwg-layers-sheets)
- [Tagliare un modello IFC con un piano di sezione](topic:section-plane)
