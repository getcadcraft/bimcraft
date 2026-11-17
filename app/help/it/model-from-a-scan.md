---
title: Modello da una scansione
summary: Breve guida dalla scansione laser alle pareti: aprire la nuvola di punti accanto a un nuovo edificio, allinearla a un livello e tracciare le sue pareti in pianta.
keywords: scansione, scansione laser, nuvola di punti, as-built, edificio esistente, rilievo, tracciare, dalla scansione a BIM, modello da scansione, sezione, allinea, squadra, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Obiettivo

Disegnare un edificio esistente a partire dalla sua scansione laser: pareti dove la scansione le mostra, al livello giusto, squadrate tra loro.

## Passaggi

1. **Un edificio in cui disegnare.** {{ui:File}} › {{ui:Nuovo edificio}}, con tanti piani quanti ne ha l'edificio (i piani si possono aggiungere in seguito, vedi [Il sito, l'edificio su di esso e i suoi piani](topic:site-building-and-levels)). {{ui:Disegna}} si attiva.
2. **La scansione.** {{ui:Mostra}} › {{ui:Nuvola di punti}} e scegliere il file (LAS, LAZ, E57, PLY, PCD, PTX o XYZ: vedi [Mostrare una nuvola di punti accanto al modello](topic:point-clouds)). La nuvola appare nella vista 3D e la pianta mostra la sua **sezione**: i punti scansionati a 1200 mm (4 feet) sopra il livello, come puntini. È l'altezza a cui pareti, porte e finestre si leggono meglio.
3. **Allinearla al livello.** Aprire il menu {{ui:Scansione}} della barra del modello e fare clic su {{ui:Allinea il suo pavimento a questo livello}}: la nuvola si sposta in alto o in basso finché il pavimento scansionato si trova sul livello mostrato. Verificare che la sezione ora tagli le pareti.
4. **Squadrare rispetto all'edificio.** {{ui:Scansione}} › {{ui:Squadra rispetto all'edificio}} ruota la nuvola in modo che le pareti nella sua sezione corrano lungo gli assi della pianta, così le pareti disegnate tenendo premuto {{key:Shift}} si allineano con la scansione. La rotazione avviene attorno al centro delle pareti trovate, così alberi o un muro del vicino catturati nella sezione non fanno deviare la scansione. Allineare prima il pavimento: in questo modo la sezione taglia le pareti.
5. **Tracciare le pareti.** Scegliere {{ui:Parete}} e fare clic lungo i puntini: lo strumento aggancia i punti scansionati (il segno di aggancio è un piccolo rombo) oltre che le pareti già disegnate. Una parete è disegnata sulla sua linea di mezzeria: fare clic lungo il centro delle due file di puntini che una parete lascia; digitare lo spessore scegliendo prima il tipo di parete. Poi aggiungere porte e finestre dove la sezione mostra le interruzioni.
6. **Il piano successivo.** Scegliere il livello superiore nell'elenco dei livelli della pianta: la sezione segue l'altezza di taglio del livello. Allineare di nuovo il pavimento a quel livello solo se i pavimenti della scansione non coincidono con i livelli.

## Cosa si dovrebbe vedere

- La sezione cambia cambiando livello, e una sezione più spessa ({{ui:Scansione}} › {{ui:Spessore della sezione}}) mostra più punti dove la scansione è rada.
- {{ui:Scansione}} › {{ui:Annulla l'allineamento}} riporta la nuvola dov'era quando è stata aperta. L'allineamento sposta la nuvola solo nella vista: non viene salvato nel file IFC, e le pareti disegnate restano dove sono. L'allineamento segue la nuvola quando si cambiano {{ui:Posiziona}} o {{ui:Unità}}, oppure si apre un altro modello.
- {{ui:Scansione}} › {{ui:Mostra la sezione sulla pianta}} nasconde o mostra i puntini.

:::tip
Scansioni grandi: la pianta disegna fino a 60.000 punti della sezione e la vista 3D alcuni milioni dell'intera nuvola, entrambi scelti in modo uniforme nella scansione, così un file grande resta veloce. Per tracciare nell'app di disegno, usare la barra della nuvola {{ui:Traccia in CadCraft}}.
:::
