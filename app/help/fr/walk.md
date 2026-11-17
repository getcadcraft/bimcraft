---
title: Parcourir un modèle
summary: Parcourez un modèle IFC à hauteur des yeux au clavier, la gravité vous maintenant au sol et les murs vous arrêtant.
keywords: marche, pas à pas, première personne, voler, naviguer, hauteur des yeux, gravité, collision, wasd, intérieur, visite
from: 0a22854a
---

## Ce que vous allez faire

Voyez un modèle comme une personne qui s'y tient : parcourez un couloir, entrez dans une pièce, montez un escalier.

## Étapes

1. Ouvrez un modèle IFC et cliquez sur {{ui:Marche}} dans la barre d'outils.
2. Cliquez sur le sol à l'endroit où vous voulez vous tenir. Vous vous y trouvez, les yeux à {{ui:Hauteur des yeux}} (1.6 m au départ, affichée et saisie dans les {{ui:Unités}} choisies : 5'-3" en pieds et pouces, 1600 en millimètres ; un nombre seul est exprimé dans cette unité, ou saisissez une unité comme 1.8 m), en regardant dans la direction de la vue.
3. Déplacez-vous avec {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou les touches fléchées. Maintenez {{key:Shift}} pour aller plus vite. Faites glisser dans la vue pour regarder autour de vous.
4. Appuyez sur {{key:Esc}} ou cliquez sur {{ui:Terminé}} pour arrêter. La vue reste à l'endroit où vous étiez, prête pour la rotation autour du modèle.

## Ce que vous devez voir

- **La gravité** vous maintient sur le sol situé sous vous et vous fait monter les marches et les escaliers. Désactivez-la pour flotter : {{key:E}} ou {{key:PageUp}} fait monter, {{key:Q}} ou {{key:PageDown}} fait descendre.
- **Arrêt aux murs** vous arrête juste avant les murs, les portes et tout autre obstacle, et vous laisse glisser le long de ceux-ci. Désactivez-le pour traverser.
- Les éléments masqués ou transparents, ainsi que ce qu'une coupe écarte, ne vous arrêtent pas et ne servent pas de sol.

## Erreurs courantes

- **Rien ne se passe quand j'appuie sur W.** Les touches vont vers une zone de saisie dans laquelle vous tapez : cliquez d'abord dans la vue.
- **Je suis tombé de très haut.** Il n'y avait pas de sol à cet endroit (une ouverture, ou le sol est masqué). Désactivez la gravité, ou commencez sur un étage.

## Suite

- [Masquer, isoler et rendre transparents les éléments](topic:hide-and-isolate)
- [Couper un modèle IFC avec un plan de coupe](topic:section-plane)
