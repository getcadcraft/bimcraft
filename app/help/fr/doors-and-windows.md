---
title: Portes et fenêtres
summary: Placez des portes et des fenêtres dans les murs dessinés : pointez un mur, voyez le sens d'ouverture et les distances aux angles, cliquez ; l'ouverture se découpe elle-même dans le mur.
keywords: porte, portes, fenêtre, fenêtres, ouverture, sens d'ouverture, paumelle, sens, inverser, porte coulissante, porte à galandage, porte de garage, double porte, fenêtre à battant, fenêtre à guillotine simple, fenêtre à guillotine double, coulissante, fenêtre fixe, appui, linteau, porte pliante, porte de placard, portes-fenêtres, porte de grange, impostes latérales, porte d'entrée, fenêtre à soufflet, fenêtre panoramique, imposte
from: 4d8ac009
---

## Ce que vous allez faire

Placez des portes et des fenêtres dans les murs que vous avez dessinés ([Dessiner des murs](topic:draw-walls)). Pointez un mur et la porte ou la fenêtre indique où elle irait, dans quel sens elle s'ouvre et la distance à chaque angle. Cliquez : l'ouverture se découpe dans le mur sur le plan et en 3D.

## Placer une porte

1. {{ui:Dessin}} étant activé, cliquez sur {{ui:Porte}} (ou appuyez sur {{key:D}}).
2. Choisissez le type : **Porte battante simple**, **Porte battante double**, **Porte coulissante**, **Porte à galandage**, **Porte de garage**, **Porte de placard pliante**, **Portes-fenêtres**, **Porte de grange (sur le mur)** ou **Porte d'entrée avec impostes latérales**. Sa taille habituelle remplit **L** et **H** ; choisissez-en une autre dans la liste des tailles à côté, ou saisissez-en d'autres, par exemple `2'-8"` ou `800`. La liste propose aussi les familles de portes de ce modèle (voir [Familles et leurs tailles](topic:families)).
3. Pointez un mur. Le symbole de la porte suit le pointeur le long du mur, et la distance depuis chaque extrémité de cette face s'affiche sur le plan.
4. La porte s'ouvre du côté du mur où se trouve le pointeur. Appuyez sur {{key:H}} (ou cliquez sur {{ui:Inverser}}) pour placer les paumelles à l'autre extrémité.
5. Cliquez. La porte est placée et l'outil reste actif pour la suivante. Pointez le milieu d'un mur et la porte se centre d'elle-même.

Pour la placer à une distance exacte, pointez le mur près de l'angle à partir duquel vous mesurez, saisissez la distance (par exemple `2'` ou `600`) et appuyez sur {{key:Enter}}. La distance se mesure de l'extrémité la plus proche de la face du mur jusqu'au bord de la porte.

## Placer une fenêtre

1. Cliquez sur {{ui:Fenêtre}} (ou appuyez sur {{key:N}}).
2. Choisissez le type : **Fenêtre fixe**, **Fenêtre à guillotine simple**, **Fenêtre à guillotine double**, **Fenêtre à battant**, **Fenêtre coulissante**, **Fenêtre à soufflet**, **Fenêtre panoramique** ou **Imposte**, puis ses **L**, **H** et **Appui** (la hauteur du bas de la fenêtre au-dessus du sol).
3. Pointez un mur et cliquez, ou saisissez une distance et appuyez sur {{key:Enter}} comme pour les portes. Une fenêtre se place côté extérieur du mur.

## Déplacer, inverser, supprimer

- Avec {{ui:Sélectionner}} activé, faites glisser une porte ou une fenêtre le long de son mur. Faites-la glisser sur un autre mur pour la déplacer là.
- {{key:Delete}} supprime les portes et fenêtres choisies ; le mur se referme.
- Déplacer ou supprimer un mur déplace ou supprime ce qu'il contient. Lorsque le début d'un mur se déplace le long de sa propre ligne, ses portes et fenêtres conservent leur place.
- {{ui:Annuler}} et {{ui:Rétablir}} reprennent chaque placement, déplacement ou suppression, dans les deux sens.

## Ce qui est refusé

- **Ça ne rentre pas dans ce mur.** La porte ou la fenêtre est plus large que le mur, ou dépasserait de son extrémité. Essayez une largeur plus petite ou un mur plus long.
- **Elle est plus haute que le mur.** L'appui plus la hauteur dépasse le haut du mur.

## Ce qui est enregistré

Chaque porte ou fenêtre est une porte ou fenêtre IFC avec ses dimensions, son fonctionnement (par exemple, battant simple à gauche), son type de taille (un type pour chaque taille de sa famille), `Pset_DoorCommon` ou `Pset_WindowCommon` et les quantités de base, remplissant une ouverture IFC dans son mur. La surface nette latérale et le volume du mur ne comptent pas l'ouverture. D'autres logiciels BIM l'ouvrent comme une porte dans un mur.

## Bon à savoir

- Le plan montre les portes ouvertes à 90° avec leur sens d'ouverture, les portes coulissantes en deux vantaux, les portes à galandage glissant dans le mur, les portes de garage sous forme de trait en pointillés en hauteur, et les fenêtres avec leur cadre et leurs lignes de vitrage.
- La largeur est la largeur hors tout du cadre ; le vantail de porte correspond à la largeur moins les deux montants.
- La copie de portes et fenêtres dessinées n'est pas encore disponible : placez-en une autre.

## Fenêtre de sous-sol pour sortie de secours et puits

Choisissez **Sortie de secours de sous-sol avec puits** dans la liste des types de fenêtres. Elle commence comme une fenêtre à battant de 36 × 48 in avec un appui à 36 in au-dessus du niveau. Le puits se trouve à l'extérieur du mur, avec au moins 48 in de largeur libre, une saillie de 36 in et un fond situé 6 in sous l'appui. Il apparaît en traits pointillés sur le plan et sous forme de trois côtés ouverts sur le dessus en 3D. Le puits fait partie du corps IFC de la fenêtre : enregistrer, déplacer, redimensionner ou supprimer la fenêtre l'emporte avec elle. Le redimensionnement garde au moins 6 in de chaque côté de chaque montant.

Ces valeurs sont des paramètres de modélisation, non une attestation de conformité de sortie de secours. Vérifiez séparément l'ouverture libre réelle du fabricant, les exigences locales, le niveau du terrain, le drainage et toute échelle requise. La profondeur et la hauteur du puits sont des dimensions prédéfinies ; elles ne suivent pas le terrain.
