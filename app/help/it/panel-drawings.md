---
title: Disegni dei pannelli in legno o acciaio leggero
summary: Disegna le pareti, i solai e i tetti del modello come pannelli di ossatura in legno o acciaio leggero, vedi ogni montante, cordolo, architrave, travetto e puntone in scala, e salva l'elenco di taglio come CSV e i disegni di officina come PDF.
keywords: pannello, ossatura, disegno di officina, elenco di taglio, acciaio leggero, montante in acciaio, LGS, legno, travetto, puntone, architrave, lunghezze commerciali, PDF
from: c09f916e
---

## Aprire i pannelli

Scegliere {{ui:Disegni dei pannelli}} nel menu {{ui:Build}} (oppure digitare {{cmd:PANELS}}). L'elenco contiene ogni parete disegnata, ogni solaio e ogni tetto del modello, ciascuno con una spunta. Le pareti arrivano con le loro porte e finestre come aperture. Un solaio viene disegnato come il rettangolo intorno al suo contorno, con i travetti nel senso corto. Un tetto viene disegnato come un timpano sopra il contorno delle sue pareti, con la pendenza del tetto; l'elenco lo segnala, perché un tetto a padiglione o complesso non è un timpano.

## Materiale, dimensione e interasse

Scegliere {{ui:Materiale}}: **Legno** oppure **Acciaio leggero**. I pezzi in acciaio sono montanti a C indicati con profondità e spessore (per esempio C92-1.2), con una guida per i cordoli. {{ui:Sezione dell'elemento}} sceglie una dimensione per tutti i pannelli spuntati, oppure lasciarla su Predefinita per usare i valori predefiniti di ogni tipo di pannello. {{ui:Interasse}} è la distanza tra i montanti, i travetti o i puntoni. Sono valori di partenza da impostare. Non sono una verifica normativa: se un montante a quell'interasse regge quella parete, e se un architrave regge quella luce, lo stabiliscono le tabelle normative (l'add-on Regolamenti edilizi contiene quelle dell'IRC) e il progettista strutturale.

## Cosa si ottiene

Il primo pannello spuntato è disegnato in scala nella finestra di dialogo, con le quote. {{ui:Elenco di taglio (CSV)}} salva tutti i pezzi di ogni pannello per contrassegno, dimensione e lunghezza, e le lunghezze commerciali da acquistare per essi. {{ui:Disegni di officina (PDF)}} salva una pagina A3 per ogni pannello, con ogni pezzo contrassegnato e il suo elenco di taglio. {{ui:Disegno (SVG)}} salva il primo pannello come disegno. Tutto ciò che il codice di ossatura trova non realizzabile (un'apertura troppo vicina all'estremità di una parete, un architrave che non entra sotto i cordoli, un pezzo più lungo della lunghezza commerciale maggiore) è elencato in **Problemi** oltre che nella finestra di dialogo.

## Cosa non fa

I pannelli sono disegni ricavati dal modello ogni volta che si chiedono: nel modello non viene scritto nulla, quindi corrispondono sempre al modello. Per inserire l'ossatura nel modello come elementi, usare {{ui:Ossatura}} per pareti, solai e tetti in legno.
