---
title: Infobulles en deux temps, et informations au survol sur le plan
summary: Pointez un outil pour voir aussitôt son nom et son raccourci, et ce qu'il fait un instant plus tard. Posez le pointeur sur un mur, une porte, une fenêtre, une pièce ou une cote pour le lire sans le sélectionner.
keywords: infobulle, astuce, raccourci, touche, commande saisie, description, survol, pointer, type de mur, niveau, taille, droit, biais, hors équerre, courbe, porte, fenêtre, pièce, surface, cote, sans sélectionner
from: 2e701f08
---

## Ce que vous allez faire

Apprendre le raccourci d'un outil en pointant dessus, et lire ce qu'est un élément du plan sans le choisir.

## Étapes

1. Pointez un outil, par exemple {{ui:Mur}} dans la barre Dessin. Presque aussitôt, une infobulle affiche son nom et son raccourci (**Mur**, **W**).
2. Gardez le pointeur là. Un instant plus tard, une ligne sous lui indique ce que fait l'outil.
3. Ouvrez un plan, l'outil {{ui:Sélectionner}} activé. Posez le pointeur sur un mur. Une infobulle à côté du pointeur indique son type, son niveau, sa longueur et son épaisseur, et s'il est droit ou biais.
4. Passez sur une porte, une fenêtre, une pièce ou une cote pour lire celle-ci à la place. Rien n'est sélectionné.

## Ce qu'affiche l'infobulle d'un outil

- **Étape 1** : le nom de la commande dans le style de menu que vous utilisez, et ses touches dans ce style. Lorsqu'une ligne de commande est affichée, elle montre aussi le mot à saisir lorsque la commande n'a pas de touche.
- **Étape 2** : une ligne de description. C'est le texte du bouton propre à la commande, si bien que chaque endroit où la commande apparaît (la barre Dessin, un ruban, un style de menu, les lignes d'outils d'une présentation) dit la même chose.
- Un outil désactivé indique la raison à la place.

## Ce qu'affiche le survol

- **Mur** : type, niveau, longueur et épaisseur, puis **Droit**, **Biais** (avec l'angle) ou **Courbe**. Droit signifie d'équerre avec la direction principale des murs auxquels il est joint : un bâtiment tourné sur la page reste droit. Un mur seul est droit.
- **Porte ou fenêtre** : type, niveau, largeur et hauteur, la hauteur d'allège d'une fenêtre, et le mur qui la contient.
- **Pièce** : nom et numéro, niveau, et la surface telle que le plan l'indique.
- **Cote** : sa longueur, si elle couvre tout le mur ou seulement la partie entre des ouvertures, la face à partir de laquelle elle est mesurée, et le mur auquel elle appartient.

## Bon à savoir

- Le survol fonctionne avec l'outil Sélectionner. Pendant qu'un outil de dessin est actif, l'outil affiche ses propres repères à la place.
- Il disparaît dès que vous quittez l'objet, appuyez sur un bouton de la souris, tournez la molette ou appuyez sur une touche.
- Les infobulles n'apparaissent jamais sur écran tactile.
