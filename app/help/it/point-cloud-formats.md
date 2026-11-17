---
title: Formati di nuvole di punti: cosa si apre e cosa esportare
summary: Quali file di scansione laser si aprono nella vista 3D, quali sono un formato proprietario del produttore dello scanner e cosa esportare dal software dello scanner perché la scansione si apra qui.
keywords: nuvola di punti, scansione laser, scansione, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, esportazione, non si apre, non letto
from: 1e985f01
---

## Cosa si apre qui

Aprirli con {{ui:Aperta}} oppure trascinandoli nella pagina (vedi l'argomento sulla visualizzazione di una nuvola di punti accanto al modello):

| Formato | Estensione | Cosa viene letto |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punti, colori, intensità, classi LiDAR, il sistema di coordinate. LAZ fino a 1 GB. |
| E57 | `.e57` | Ogni scansione nel file, ciascuna posizionata secondo la sua posa; colori, oppure intensità quando il file non ha colori. Le immagini nel file vengono omesse (viene segnalato). Per ora fino a 6 milioni di punti e 512 MB: esportare scansioni più grandi come LAS o LAZ. |
| PLY | `.ply` | Testo e binario (entrambi gli ordini dei byte): x y z dei vertici, colori e intensità. Le facce vengono omesse (viene segnalato). |
| PCD | `.pcd` | Testo e binario: x y z, colori in un unico campo o separati, intensità. I file PCD compressi non sono ancora letti: salvarli come binario o testo. |
| PTX | `.ptx` | Una o più scansioni, ciascuna posizionata con la propria trasformazione; i punti che lo scanner non ha misurato vengono omessi. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Testo: x y z, con intensità e colori quando le colonne sono presenti. |

## File che legge solo il software dello scanner

Alcuni file di scansione sono un formato proprietario del produttore, senza descrizione pubblicata né lettore aperto. BimCraft non può leggerli e, aprendone uno, compare una scheda che spiega di cosa si tratta e cosa fare. Esportare la scansione dal software del produttore come E57 o LAS (oppure PTX, PTS), quindi aprire il file esportato.

| File | Estensione | Esportare da |
|---|---|---|
| Progetto ReCap | `.rcp` | ReCap: aprire il progetto ed esportarlo. Il progetto si limita a puntare alle sue scansioni, quindi copiare solo il `.rcp` non dà punti. |
| Scansione ReCap | `.rcs` | ReCap: aprire il progetto a cui appartiene la scansione ed esportarlo. |
| Scansione FARO | `.fls` | FARO SCENE. |
| Scansione Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scansione Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Scansione Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quando l'esportazione chiede un formato, LAS o LAZ conserva tutto ciò che BimCraft mostra (colori, intensità, classi e sistema di coordinate) nel file più piccolo.
:::

## Perché questi file non vengono letti

Questi formati non sono pubblicati e l'unico modo per leggerli è la libreria software di ciascun produttore, secondo le sue condizioni. BimCraft legge solo i formati che può leggere con il proprio codice sul computer, quindi una scansione non deve mai essere inviata da nessuna parte per essere aperta.
