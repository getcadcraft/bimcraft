---
title: Nube de puntos formatokuéra: mba'épa ojepe'a ha mba'épa exportar
summary: Mba'eichagua láser escaneo archivokuéra ojepe'a 3D vistape, mba'eichagua scanner fabricante propio formato, ha mba'épa exportar scanner software-gui, escaneo ojepe'a ko'ápe.
keywords: nube de puntos, escaneo láser, escaneo, formatokuéra, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportación, ndojepe'aí, ndojeleeí
from: 1e985f01
---

## Mba'épa ojepe'a ko'ápe

Eiporavo {{ui:Open}} térã emoĩ página-pe (ehecha tema point cloud modelo ndive ohechaukáva) upéva ojepe'a haguã:

| Formato | Extensión | Mba'épa ojeleeha |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puntos, colores, intensidad, LiDAR clasekuéra, coordenada sistema. LAZ 1 GB peve. |
| E57 | `.e57` | Escaneo tapichakue, pose-pe oñeikotevẽva; colores, térã intensidad archivo colorkuéra ndaiporiri. Imagen archivo-pe oñeheja (ohechauka). 6 millón puntos ha 512 MB peve ko'ágã: escaneo tuichave LAS térã LAZ-pe exportar. |
| PLY | `.ply` | Tekst ha binario (ambos byte orden): vértices x y z, colores ha intensidad. Caras ndojeleei (ohechauka). |
| PCD | `.pcd` | Tekst ha binario: x y z, colores ojuntáva térã apartado, intensidad. PCD comprimido ko'ágã ndojeleeíva: guardar binario térã tekst-pe. |
| PTX | `.ptx` | Escaneo peteĩ térã mbohapy, cada ijetuʼũ transform-pe; scanner ndomedía puntokuéra ojeheja. Metro-pe. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, intensidad ha colores columnakuéra oĩramo. |

## Archivokuéra ojeleéva scanner software-pe añónte

Oĩ escaneo archivokuéra scanner fabricante propio formato, descripción ndojehechaukavéiva ha lector abierto ndaiporiva. BimCraft ndojeleéi, ha ojeike jave ohechauka tarjeta ha'e mba'épa ha mba'épa ojapo. Exportar escaneo fabricante software-gui E57 térã LAS (térã PTX, PTS), upéi ejeike exportado archivo.

| Archivo | Extensión | Exportar ko'ápe |
|---|---|---|
| ReCap proyecto | `.rcp` | ReCap: ejeike proyecto ha exportar. Proyecto omaña ha'e hese escaneokuérare, upévare `.rcp` anivéma ndoreguerú puntokuéra. |
| ReCap escaneo | `.rcs` | ReCap: ejeike escaneo oikóva proyecto ha exportar. |
| FARO escaneo | `.fls` | FARO SCENE. |
| Leica escaneo | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble escaneo | `.tzf` | Trimble RealWorks térã Trimble Business Center. |
| Z+F escaneo | `.zfs` | Z+F LaserControl. |

:::tip
Exportación formato ojerekóramo, LAS térã LAZ ojapo BimCraft ohechaukáva tapichakue (colores, intensidad, clasekuéra ha coordenada sistema) archivo michĩvéva.
:::

## Mba'éichapa ndojeleéi kóva

Kóva formatokuéra ndojehechaukavéi, ha ojeleéva ha'e cada fabricante propio software biblioteca-pe, ijuridicción-pe. BimCraft ojeleé tenda ha'e ndoguerekói formato hekopete hese-pe, upévare escaneo ndojehasa'ỹi ndive ojeike jave; nde ordenador-pe ojeleéva.
