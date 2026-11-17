---
title: Formats de núvol de punts: què s'obre i què cal exportar
summary: Quins fitxers d'escaneig làser s'obren a la vista 3D, quins són el format propi d'un fabricant d'escàners, i què cal exportar del programari de l'escàner perquè l'escaneig s'obri aquí.
keywords: núvol de punts, escaneig làser, escaneig, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exporta, no s'obre, no es llegeix
from: 1e985f01
---

## Què s'obre aquí

Obriu aquests fitxers amb {{ui:Oberta}} o deixant-los caure a la pàgina (vegeu el tema sobre com mostrar un núvol de punts al costat del model):

| Format | Extensió | Què es llegeix |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punts, colors, intensitat, classes LiDAR, el sistema de coordenades. LAZ fins a 1 GB. |
| E57 | `.e57` | Cada escaneig del fitxer, col·locat segons la seva posició; colors, o intensitat quan el fitxer no té colors. Les imatges del fitxer s'exclouen (es diu). Fins a 6 milions de punts i 512 MB per ara: exporteu els escanejos més grans com a LAS o LAZ. |
| PLY | `.ply` | Text i binari (amb tots dos ordres de bytes): les coordenades x y z dels vèrtexs, colors i intensitat. Les cares s'exclouen (es diu). |
| PCD | `.pcd` | Text i binari: x y z, colors agrupats o separats, intensitat. Els fitxers PCD comprimits encara no es llegeixen: deseu-los en binari o en text. |
| PTX | `.ptx` | Un o més escanejos, cadascun col·locat per la seva pròpia transformació; els punts que l'escàner no ha mesurat s'exclouen. Metres. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, amb intensitat i colors quan hi són les columnes. |

## Fitxers que només llegeix el programari de l'escàner

Alguns fitxers d'escaneig són el format propi d'un fabricant d'escàners, sense descripció publicada ni lector obert. BimCraft no els pot llegir, i en obrir-ne un apareix una targeta que diu què és i què cal fer. Exporteu l'escaneig des del programari del fabricant com a E57 o LAS (o PTX, PTS), i després obriu el fitxer exportat.

| Fitxer | Extensió | Exporta-ho des de |
|---|---|---|
| Projecte ReCap | `.rcp` | ReCap: obriu el projecte i exporteu-lo. El projecte només apunta als seus escanejos, de manera que copiar només el `.rcp` no dóna cap punt. |
| Escaneig ReCap | `.rcs` | ReCap: obriu el projecte al qual pertany l'escaneig i exporteu-lo. |
| Escaneig FARO | `.fls` | FARO SCENE. |
| Escaneig Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneig Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Escaneig Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quan l'exportació demani un format, LAS o LAZ conserva tot el que mostra BimCraft (colors, intensitat, classes i el sistema de coordenades) en el fitxer més petit.
:::

## Per què no es llegeixen aquests fitxers

Aquests formats no estan publicats, i l'única manera de llegir-los és la biblioteca de programari de cada fabricant, sota les seves pròpies condicions. BimCraft només llegeix formats que pot llegir amb el seu propi codi a l'ordinador, de manera que un escaneig mai no s'ha d'enviar enlloc per obrir-lo.
