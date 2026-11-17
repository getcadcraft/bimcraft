---
title: Muri da un disegno ricalcato
summary: Trasformare una pianta DWG o DXF in muri, porte e finestre su un livello, e tenere il disegno sotto la pianta come riferimento.
keywords: dwg, dxf, ricalco, ricalcato, importa pianta, converti, da CAD a BIM, da 2D a 3D, muri da linee, layer, blocchi, porte da blocchi, sottofondo, disegno di riferimento, sfondo, riferimento esterno (xref), programma di disegno
from: 3bf213f1
---

## Cosa farai

Usare una pianta disegnata (da sé o da un altro) nel programma di disegno come inizio del modello: le sue linee di muro diventano muri, i suoi blocchi di porte e finestre diventano porte e finestre.

## Passaggi

1. Attivare {{ui:Disegna}} e scegliere il livello che il disegno mostra nell'elenco dei livelli della pianta.
2. Scegliere {{ui:Build}} › {{ui:Da un disegno…}}, poi {{ui:Scegliere un disegno…}} e selezionare il DWG o il DXF.
3. Nella finestra di dialogo:
   - Le **Unità del disegno** provengono dal disegno; sceglierne altre se sono sbagliate (una pianta disegnata in piedi e letta come pollici è dodici volte più piccola).
   - **Layer con i muri**: spuntare i layer su cui sono le linee dei muri. I layer il cui nome dice "wall" sono spuntati automaticamente.
   - **Le linee sono**: **entrambe le facce di ogni muro** (il modo usuale in cui si disegnano le piante: ogni coppia di linee parallele distanti fino a 600 mm diventa un muro spesso quanto lo spazio), **le linee di mezzeria dei muri**, oppure **una faccia** con il muro alla sua sinistra o alla sua destra. Con le linee di mezzeria o una faccia, il tipo di muro imposta lo spessore.
   - **Tipo di muro** e **Altezza del muro**, come per lo strumento {{ui:Parete}}.
   - **Blocchi**: scegliere un tipo di porta o di finestra per ogni blocco che è una porta o una finestra, oppure lasciarlo fuori. I blocchi il cui nome dice "door" o "window" sono scelti automaticamente. Ognuno è messo nel muro su cui sta, largo quanto il blocco lungo il muro; una porta si apre dal lato verso cui è disegnato il suo arco.
   - **Dove va**: alle coordinate proprie del disegno, oppure con il suo angolo in basso a sinistra sull'origine della pianta.
   - **Mantieni il disegno sotto la pianta di questo livello**: lasciarlo spuntato per vedere il disegno come linee sottili sotto ciò che si crea.
4. La riga sotto le scelte dice quanti muri, porte e finestre verranno creati. Fare clic su {{ui:Crea}}.

## Risultato

- I muri, le porte e le finestre sul livello, uniti dove si incontrano, con i locali che chiudono; il tutto è un unico passo, quindi {{key:Mod+Z}} lo riporta indietro.
- Il disegno come linee sottili sotto la pianta. {{ui:Build}} › {{ui:Da un disegno…}} elenca i disegni conservati sul livello, ognuno con {{ui:Rimuovi}}; rimuoverne uno lascia i muri.
- Nel file IFC il disegno conservato è un'annotazione sul livello (le sue linee), quindi anche altri programmi BIM lo mostrano.

:::note
Anche un PDF o una scansione funzionano: vedere [Muri da una serie di piante](topic:walls-from-plans). Gli archi sono esclusi (BimCraft disegna muri diritti), e così le linee dentro i blocchi. Le linee senza un corrispettivo in "entrambe le facce" sono contate nella finestra di dialogo ed escluse: disegnare quei muri con lo strumento {{ui:Parete}}, oppure sistemarli con {{ui:Modifica}} › {{ui:Rifila / estendi}} (vedere [Rifilare, estendere e unire muri](topic:trim-extend-walls)).
:::

:::tip
Ricalcato su una scansione nel programma di disegno? Aprire qui anche la scansione e verificare i muri rispetto ad essa: vedere [Modello da una scansione](topic:model-from-a-scan).
:::
