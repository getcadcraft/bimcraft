---
title: Afficher un nuage de points à côté du modèle
summary: Ouvrez un scan laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) dans la vue 3D seul ou avec un modèle IFC, colorez-le, découpez-le en une fine tranche, mesurez jusqu'à ses points, et transmettez-le à l'application de dessin pour tracer les lignes telles que construites.
keywords: nuage de points, scan laser, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tel que construit, relevé, recalage, tranche, coupe en plan, accrochage, mesurer, tracer, du scan au BIM
from: d0a3e740
---

## Ce que vous allez faire

Observer un scan laser d'un bâtiment à côté de son modèle : vérifier que ce qui a été construit correspond à la conception, mesurer entre des points scannés, et découper une fine tranche pour lire murs, portes et poteaux.

## Étapes

1. Ouvrez le nuage : {{ui:Ouvert}} un fichier `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz`, ou déposez-le sur la page (voir la rubrique sur les formats de nuage de points pour ce que chacun apporte, et ce qu'il faut exporter du logiciel propre au scanner). Si un modèle est ouvert, le nuage rejoint le modèle dans la vue 3D ; ouvrir un nuage ne ferme jamais le modèle ni ses modifications non enregistrées. Sans modèle, le nuage s'ouvre seul.
2. La barre du nuage apparaît sous la barre d'outils. Elle indique combien de points sont affichés et combien le fichier en contient.
3. Choisissez {{ui:Colorer par}} : les couleurs propres au fichier (lorsque le scanner les a enregistrées), {{ui:Hauteur}}, {{ui:Intensité}}, {{ui:Classe}} (classes LiDAR telles que sol, végétation et bâtiment) ou {{ui:Une seule couleur}}. {{ui:Taille}} rend les points plus gros ou plus petits.
4. Cliquez sur {{ui:Plan}} sous {{ui:Tranche}} pour ne garder qu'une fine bande de 1.2 m au-dessus du point le plus bas, vue de dessus : murs, ouvertures de portes et poteaux se lisent comme un plan d'étage. {{ui:Avant}} et {{ui:Côté}} découpent des bandes verticales pour les élévations et les coupes. Déplacez la bande avec {{ui:À}}, et modifiez {{ui:Épaisseur}} (en mètres). {{ui:Désactivé}} affiche de nouveau le nuage entier.
5. Cliquez sur {{ui:Mesurer}} dans la barre d'outils. Le pointeur s'accroche aux points du nuage (l'étiquette indique « nuage de points »), ce qui permet de mesurer de mur à mur dans la tranche, ou d'un élément du modèle jusqu'au scan. Un coin ou une arête du modèle à portée l'emporte toujours.
6. Avec {{ui:Mesurer}} › {{ui:Position}}, un point du nuage donne sa latitude et sa longitude dans le système de coordonnées propre au nuage, lorsque le fichier en nomme un.
7. {{ui:Masquer}} cache le nuage un instant ; {{ui:Supprimer}} le retire. {{ui:Afficher}} › {{ui:Nuage de points}} masque ou affiche la barre.

## Où se place le nuage

{{ui:Placer}} dans la barre indique comment le nuage s'aligne avec le modèle :

- **Coordonnées du modèle** : les nombres du nuage sont ceux du modèle lui-même (un scan recalé sur les coordonnées de la conception).
- **Coordonnées cartographiques** : le modèle a une conversion cartographique (IfcMapConversion) et le nuage est dans le même système projeté : le nuage est placé à travers elle. Si les deux désignent des systèmes différents, la ligne d'état le signale.
- **Centré sur le modèle** : lorsqu'aucun des deux ne place le nuage près du modèle, son centre est posé sur le centre du modèle et son point le plus bas sur le sol du modèle. Choisissez une autre option pour le modifier.

Lorsque le fichier n'indique pas ses unités, BimCraft lit des mètres et propose {{ui:Unités}} dans la barre.

## Tracer les lignes telles que construites

Cliquez sur {{ui:Tracer dans CadCraft}} pour transmettre le nuage à l'application de dessin, dans un nouvel onglet. Il s'y ouvre sous le dessin, où une tranche de plan et l'accrochage aux objets vous permettent de dessiner les murs par-dessus le scan. Voir la rubrique CadCraft sur les nuages de points.

## Combien de points

Un scan peut contenir des centaines de millions de points. BimCraft lit chaque point une fois et conserve une part régulière pour le dessiner : {{ui:Afficher}} dans la barre règle ce nombre (1, 2, 5 ou 10 millions). Plus de points demandent plus de mémoire et une carte graphique plus rapide. Les comptages par classe LiDAR portent sur tous les points du fichier.

:::note
Les fichiers sont lus sur cet ordinateur ; rien n'est envoyé. Les formats LAS 1.0–1.4 et LAZ sont lus (fichiers LAZ jusqu'à 1 Go, gardés en mémoire pendant leur lecture) ; les fichiers E57 jusqu'à 6 millions de points et 512 Mo pour l'instant (scans plus volumineux : exportez en LAS ou LAZ) ; PLY, PCD et PTX entièrement ; les nuages en texte sont des `x y z`, avec des colonnes de couleur (`r g b`) et d'intensité lorsqu'elles sont présentes.
:::

## Plusieurs scans

Des scans pris depuis des positions différentes peuvent être recalés dans un même repère, affinés avec l'ICP et exportés en un seul LAS ou E57 : voir [Recaler plusieurs scans en un seul](topic:register-scans).
