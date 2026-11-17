---
title: Scegliere quale programma disegna l'immagine
summary: La scelta del motore nella finestra Render: i nostri due motori, gli altri programmi in CadCraft Studio e che cosa fa il web al loro posto.
keywords: render, motore, renderer, motore di render, plug-in, plugin, studio, programma esterno, disegnato da, coda, motore add-on
from: 44a1ef5e
---

{{ui:Render}} ha una scelta **Motore** sopra **Modo**. I nostri due motori sono sempre disponibili e funzionano ovunque; gli add-on possono aggiungerne altri e, in CadCraft Studio, l'elenco comprende anche i programmi che prendono in carico la scena.

| Motore | Che cosa fa | Dove |
|---|---|---|
| Integrato: Veloce | L'immagine fissa rapida: luce diurna, ombre morbide, effetti di vetro e metallo, in pochi secondi | Il browser e Studio |
| Integrato: Path tracer | Luce che rimbalza tra le superfici sulla scheda grafica o sul processore, la coda di render e gli altri computer della rete | Il browser e Studio |
| Motore di un add-on | Disegna e restituisce l'immagine: vedi [Disegnare l'immagine con un altro programma](topic:render-other-program) | Il browser (un motore scritto in JavaScript) o Studio (un motore che esegue un programma) |
| Un programma che prende in carico la scena | Studio mette la scena nella sua cartella e la mantiene allineata | Studio |
| Apri in … | Salva la scena e la apre in un programma; non torna nulla: vedi [Aprire la scena in un altro programma](topic:render-open-in) | Il web salva il file |

## Come si comporta la scelta

- Scegliere Veloce o Path tracer cambia anche **Modo**, e viceversa. Nient'altro nella finestra cambia per chi non usa mai un altro motore.
- Un motore non disponibile resta nell'elenco con il motivo ("non trovato", "richiede una versione più recente"); non si può sceglierlo. Nel browser un motore che funziona solo in Studio mostra "salva un file": {{ui:Render}} allora salva la scena e le sue impostazioni in un file da portare a quel programma.
- La scelta viene salvata con le impostazioni di render del file, e il motore scelto per ultimo è quello iniziale per i file che non hanno una scelta propria.
- Un'immagine di un altro programma indica quale programma l'ha disegnata e la sua versione, nella finestra e nella coda di render. Le promesse della pagina [Render](topic:render) riguardano solo **i nostri** motori: un altro programma illumina, regola i toni e campiona a modo suo, quindi due immagini della stessa scena sono simili per inquadratura, sole, lampade ed esposizione, ma non pixel per pixel.

## Ciò che ogni motore riceve

La scena va a un altro programma come **pacchetto**: il modello come file USD (lo stesso file che scrive [Salva come USD](topic:usd)) e un file di impostazioni che contiene ciò a cui un importatore USD non può essere affidato: i valori esatti dei materiali, le lampade accese con la loro potenza e i profili di luce, il sole, il cielo, l'esposizione e la camera come la finestra la disegnerebbe. Non viene caricato nulla da nessuna parte.

## La coda di render

Un'immagine per un altro programma può attendere in [la coda di render](topic:render#the-render-queue) come quelle nostre; il suo lavoro ricorda per quale motore è.
