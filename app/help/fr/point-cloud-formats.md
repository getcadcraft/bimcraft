---
title: Formats de nuage de points : ce qui s'ouvre et ce qu'il faut exporter
summary: Quels fichiers de scan laser s'ouvrent dans la vue 3D, lesquels sont au format propre à un fabricant de scanner, et ce qu'il faut exporter du logiciel du scanner pour que le scan s'ouvre ici.
keywords: nuage de points, scan laser, scan, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, impossible d'ouvrir, non lu
from: 1e985f01
---

## Ce qui s'ouvre ici

Ouvrez ces fichiers avec {{ui:Ouvert}} ou en les déposant sur la page (voir la rubrique sur l'affichage d'un nuage de points à côté du modèle) :

| Format | Extension | Ce qui est lu |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4 : points, couleurs, intensité, classes LiDAR, système de coordonnées. LAZ jusqu'à 1 Go. |
| E57 | `.e57` | Chaque scan du fichier, placé selon sa pose ; couleurs, ou intensité lorsque le fichier n'a pas de couleurs. Les images du fichier sont omises (signalé). Jusqu'à 6 millions de points et 512 Mo pour l'instant : exportez les scans plus volumineux en LAS ou LAZ. |
| PLY | `.ply` | Texte et binaire (les deux ordres d'octets) : les x y z des sommets, couleurs et intensité. Les faces sont omises (signalé). |
| PCD | `.pcd` | Texte et binaire : x y z, couleurs regroupées ou séparées, intensité. Les fichiers PCD compressés ne sont pas encore lus : enregistrez-les en binaire ou en texte. |
| PTX | `.ptx` | Un ou plusieurs scans, chacun placé par sa propre transformation ; les points que le scanner n'a pas mesurés sont omis. En mètres. |
| PTS, XYZ | `.pts`, `.xyz` | Texte : x y z, avec intensité et couleurs lorsque les colonnes sont présentes. |

## Fichiers que seul le logiciel du scanner lit

Certains fichiers de scan sont au format propre à un fabricant de scanner, sans description publiée ni lecteur ouvert. BimCraft ne peut pas les lire, et leur ouverture affiche une carte qui indique ce que c'est et ce qu'il faut faire. Exportez le scan depuis le logiciel du fabricant au format E57 ou LAS (ou PTX, PTS), puis ouvrez le fichier exporté.

| Fichier | Extension | Exporter depuis |
|---|---|---|
| Projet ReCap | `.rcp` | ReCap : ouvrez le projet et exportez-le. Le projet ne fait que pointer vers ses scans ; copier seul le `.rcp` ne donne aucun point. |
| Scan ReCap | `.rcs` | ReCap : ouvrez le projet auquel appartient le scan et exportez-le. |
| Scan FARO | `.fls` | FARO SCENE. |
| Scan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scan Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Scan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Lorsque l'export demande un format, LAS ou LAZ conserve tout ce que BimCraft affiche (couleurs, intensité, classes et système de coordonnées) dans le fichier le plus petit.
:::

## Pourquoi ces fichiers ne sont pas lus

Ces formats ne sont pas publiés, et la seule façon de les lire est la bibliothèque logicielle de chaque fabricant, selon ses propres conditions. BimCraft ne lit que les formats qu'il peut lire avec son propre code sur votre ordinateur ; ainsi, un scan n'a jamais besoin d'être envoyé quelque part pour être ouvert.
