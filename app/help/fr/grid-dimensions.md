---
title: Coter une grille
summary: Afficher l'écart entre les lignes de grille voisines et la taille globale de la grille sur le plan de chaque niveau, enregistré dans l'IFC et suivant la grille lorsque les lignes changent.
keywords: grille, cotes de grille, cote, écart, travées, taille globale, bulles, trame de poteaux, plan, feuille
from: aaea5d08
---

## Ce que vous allez faire

Indiquer sur les plans l'écart entre les lignes de grille et la taille globale de la grille, au-delà des bulles, afin que les feuilles qui en sont issues portent les cotes. Il vous faut d'abord une grille : voir [Grilles et poteaux](topic:grids-and-columns).

## Étapes

1. Affichez le plan d'un niveau et cliquez sur {{ui:Grille}} pour activer l'outil grille. La ligne d'options de grille s'affiche.
2. Cochez {{ui:Cotes}}. L'écart entre les lignes numérotées voisines et entre les lignes lettrées voisines, ainsi que la taille globale dans chaque sens, sont tracés sur le plan.
3. Passez à un autre niveau : les mêmes cotes apparaissent sur son plan.
4. Déplacez une ligne, renommez-en une ou ajoutez-en une. Les cotes suivent la grille.
5. Décochez {{ui:Cotes}} pour les retirer.

## Remarques

- Chaque modification correspond à une seule étape d'annulation : {{key:Mod+Z}} l'annule.
- Le réglage est enregistré dans l'IFC avec la grille, et les plans placés sur les feuilles portent les cotes.
- Si le modèle n'a pas de grille modifiable (une grille venue d'un fichier d'un autre logiciel ne peut pas être modifiée ici), la ligne d'état indique « Il n'y a aucune grille à modifier. »
