---
title: Grilles et poteaux
summary: Tracer des lignes de grille avec des bulles numérotées et lettrées, par écart ou une à une, dessiner murs et poteaux le long de ces lignes, et les voir sur les plans, les élévations et les coupes.
keywords: grille, grilles, ligne de grille, trame de poteaux, axe, axes, bulle, ligne de grille, trame structurelle, 1 2 3, A B C, poteau, poteaux, pilier, montant, accrochage, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ce que vous allez faire

Implanter un bâtiment sur une grille, puis dessiner des murs et placer des poteaux le long de ses lignes.

## Placer une grille complète

1. Activez {{ui:Dessin}}, puis choisissez {{ui:Build}} › {{ui:Grille}}.
2. Cliquez sur {{ui:Placer une grille…}}. Indiquez combien de **lignes numérotées** (1, 2, 3…) et de **lignes lettrées** (A, B, C…) vous voulez, et l'écart entre elles. Saisissez un seul écart, ou plusieurs séparés par des virgules pour des travées inégales (par exemple `20', 24', 20'`). {{ui:Au-delà des dernières lignes}} indique de combien chaque ligne dépasse les lignes extrêmes de l'autre type, et {{ui:Rotation (degrés)}} fait pivoter toute la grille.
3. Cliquez sur {{ui:La placer}}, puis cliquez à l'endroit où doit se trouver le premier croisement (1 / A). L'aperçu suit le pointeur.

Les lignes numérotées montent sur le plan et sont espacées en largeur ; les lignes lettrées traversent le plan et sont espacées vers le haut. Les lettres sautent I et O, comme sur les plans, afin de ne jamais se confondre avec 1 et 0.

## Tracer les lignes de grille une à une

Avec {{ui:Grille}} activé, cliquez où une ligne commence puis où elle finit. Elle reçoit l'étiquette suivante de la série des lignes qu'elle suit (après 3 vient 4 ; après B vient C). Appuyez sur {{key:Esc}} pour arrêter.

## Modifier une ligne de grille

Avec {{ui:Grille}} activé, cliquez sur une ligne pour la sélectionner. Saisissez une nouvelle {{ui:Étiquette}} et appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Supprimer cette ligne}} (ou appuyez sur {{key:Delete}}). {{ui:Bulles}} place les bulles aux deux extrémités, au début ou à la fin de chaque ligne, ou nulle part. Chaque modification correspond à une étape : {{key:Mod+Z}} l'annule.

## Dessiner le long de la grille

L'outil {{ui:Mur}}, l'outil {{ui:Poteau}} et les autres outils de dessin s'accrochent aux lignes de grille et à leurs croisements (le repère d'accrochage est un petit cercle avec une croix).

**Poteaux :** choisissez {{ui:Build}} › {{ui:Poteau}}, puis la forme (rectangulaire ou ronde), la dimension, et si le poteau va **jusqu'au niveau supérieur** ou jusqu'à une hauteur fixe, puis cliquez. {{ui:À chaque croisement de la grille}} place un poteau à chaque croisement qui n'en a pas encore. Cliquez sur un poteau pour modifier sa forme, sa dimension ou sa hauteur dans {{ui:Propriétés}} ; {{key:Delete}} le supprime. Les poteaux qui vont jusqu'au niveau supérieur le suivent lorsque sa hauteur change.

## Ce que vous devez voir

- La grille sur le plan de chaque niveau, avec une bulle et son étiquette aux extrémités de chaque ligne.
- Les lignes de grille sur le jeu de dessins : sur les plans, et sur les élévations et les coupes où une ligne est vue de bout, avec sa bulle au-dessus du bâtiment. Voir [Façades, coupes et feuilles](topic:sheets).
- Dans le fichier IFC : une grille pour le bâtiment (IfcGrid, ses lignes numérotées dans une liste et ses lignes lettrées dans l'autre), et les poteaux en IfcColumn avec leur dimension, leur hauteur et leurs quantités. Les autres logiciels BIM affichent les deux.

:::note
Une grille venue d'un fichier d'un autre logiciel est affichée, et les outils s'y accrochent, mais ses lignes ne peuvent pas être modifiées ici.
:::
