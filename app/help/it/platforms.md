---
title: Browser, dispositivi e memoria
summary: Cosa cambia in BimCraft tra Chrome, Edge, Firefox e Safari, su Mac, Windows e Linux, con un mouse, un trackpad o il tocco, e quanto grande può essere un file.
keywords: browser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefono, tocco, trackpad, memoria, file grandi, webgl, prestazioni
from: fd8acba1
---

BimCraft funziona nelle versioni attuali di Chrome, Edge, Firefox e Safari, su Mac, Windows e Linux. La vista 3D richiede WebGL, che ogni browser attuale supporta. Vedi [Browser e computer](common:browsers) per ciò che serve in generale alle app.

## Aprire una cartella

| Browser | {{ui:Apri una cartella}} fa questo | Trascinare una cartella | {{ui:Cartelle recenti}} |
|---|---|---|---|
| Chrome, Edge | Il selettore di cartelle del browser, poi "Consentire al sito di visualizzare i file?": fare clic su **Visualizza file** | Si apre senza richiesta | Sì, per le cartelle scelte o trascinate |
| Firefox | Il selettore di cartelle del sistema | Si apre senza richiesta | No |
| Safari | Il selettore di cartelle del sistema, con un pulsante **Carica** (nulla viene caricato) | Si apre senza richiesta | No |

Dietro le quinte: Chrome ed Edge usano il selettore File System Access e possono ricordare la cartella. Firefox e Safari usano il selettore di cartelle più vecchio, che passa tutti i file della cartella in una volta e non può essere ricordato. Una cartella trascinata viene letta voce per voce in ogni browser.

:::chromium
Brave e alcuni altri browser basati su Chromium disattivano il selettore di cartelle. BimCraft usa allora il selettore di cartelle del sistema, e il browser può chiedere "Caricare *n* file su questo sito?". Nulla viene caricato; i file vanno solo alla scheda. Trascinare la cartella evita la domanda.
:::

## Mac, Windows e Linux

- Le scorciatoie scritte {{key:Mod+S}} e {{key:Mod+Z}} usano Command su Mac e Ctrl su Windows e Linux.
- {{key:Ctrl+Shift+F}} (modalità schermo) è Control su ogni piattaforma, incluso Mac.
- Le finestre di dialogo dei file e la cartella dei download sono quelle del proprio sistema.

## Mouse, trackpad e tocco

| Input | Vista 3D | Disegno 2D |
|---|---|---|
| Mouse | Trascinamento sinistro ruota, trascinamento destro sposta, la rotella fa zoom, il clic seleziona | Qualsiasi trascinamento sposta, la rotella fa zoom, il doppio clic adatta |
| Trackpad | Clic e trascinamento ruotano; {{key:Shift}} oppure {{key:Mod}} e trascinamento spostano; lo scorrimento a due dita o il pizzico fanno zoom | Clic e trascinamento spostano; lo scorrimento a due dita o il pizzico fanno zoom |
| Tocco | Un dito ruota, due dita pizzicano e spostano, il tocco seleziona | Un dito sposta; nessuno zoom a pizzico per ora; toccare {{ui:Adatta}} |

Su un trackpad Mac, il clic destro è un clic con due dita (o Control-clic). Vedi [Tasti, mouse e trackpad](common:keys).

Tablet e telefoni possono aprire singoli file e guardarli, ma lo schermo è piccolo, molti browser per dispositivi mobili non permettono di scegliere cartelle, e i modelli grandi potrebbero non entrare nella loro memoria. Un computer funziona meglio.

## File grandi e memoria

Tutto ciò che BimCraft legge risiede nella memoria della scheda del browser. Quanta memoria può usare una scheda dipende dal browser e dal proprio computer, più che da BimCraft.

| File | Quanto viene letto | Cosa aspettarsi |
|---|---|---|
| IFC | L'intero file, più la geometria 3D costruita da esso | Dipende dal computer e dal browser; un modello di diverse centinaia di megabyte può essere troppo per un portatile. Oltre 1,5 milioni di triangoli, gli spigoli vengono disattivati |
| File di progetto e di famiglia | Da circa 40 KB a 100 KB, qualunque sia la dimensione | Anche modelli centrali molto grandi si aprono in un attimo, anche da un'unità di rete |
| DWG e DXF | L'intero file | I disegni molto grandi mostrano "Questo disegno è molto grande; ne è mostrata solo una parte." |
| Cartelle | L'elenco dei file, più qualche kilobyte per modello | Fino a 20.000 file |

Se una scheda esaurisce la memoria, il browser mostra la propria pagina di errore (per esempio "Aw, Snap!" in Chrome). Chiudere le altre schede, ricaricare BimCraft e riprovare, oppure usare un computer con più memoria.

## Correlati

- [Online e offline](topic:online-offline)
- [Risoluzione dei problemi](topic:troubleshooting)
