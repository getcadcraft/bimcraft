---
title: Façades, coupes et feuilles
summary: Tracez des traits de coupe sur le plan, puis ouvrez Feuilles pour obtenir un jeu prêt à imprimer, généré à partir du modèle : plans de chaque niveau, les quatre façades, coupes de bâtiment, nomenclatures et ossature des murs, avec cartouches et échelles, en un seul PDF.
keywords: feuilles, jeu de dessins, dossier d'exécution, impression, tracer, pdf, façade, façades, façade nord, coupe, coupe de bâtiment, trait de coupe, découper, lignes masquées, cartouche, numéro de feuille, échelle, 1/4" = 1'-0", 1:50, 1:100, papier, 11x17, 24x36, A3, A1, jeu pour permis
from: 91ed0cde
---

## Ce que vous allez faire

Produire un jeu de dessins à partir du modèle : le plan de chaque niveau, les façades nord, est, sud et ouest, une coupe de bâtiment pour chaque trait de coupe, les nomenclatures des portes, des fenêtres, des pièces et du bois, et une façade de chaque mur à ossature. Le jeu est dessiné à nouveau à partir du modèle chaque fois que vous l'ouvrez : il correspond donc toujours à ce que vous avez construit.

## Tracer un trait de coupe

1. Sur un niveau, ouvrez {{ui:Build}} et choisissez {{ui:Trait de coupe}}.
2. Cliquez là où la ligne commence et là où elle finit. Le petit trait en son milieu indique le côté vers lequel regarde la coupe : la gauche de la ligne, en allant du premier clic au second.
3. La ligne apparaît sur le plan avec ses extrémités et sa lettre (A, puis B, et ainsi de suite).

Sélectionnez la ligne pour la modifier dans **Propriétés** : sa lettre, **Inverser la vue** pour regarder dans l'autre sens, et **Voir jusqu'à** pour arrêter la vue à une distance donnée derrière la coupe (0 affiche tout ce qui se trouve derrière). Appuyez sur {{key:Delete}} pour la supprimer.

## Ouvrir les feuilles

1. Cliquez sur {{ui:Feuilles}} dans la barre du modèle (à côté de {{ui:Imprimer}}).
2. Les feuilles sont listées à gauche : **A-101** et suivantes pour les plans, **A-201** pour les façades, **A-301** pour les coupes, **A-401** pour les nomenclatures et **S-101** pour l'ossature des murs. Cliquez sur l'une d'elles pour la voir.
3. Choisissez le **Papier** : Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 ou A1. Le papier conserve son nom normalisé, et sa taille est écrite dans les {{ui:Unités}} choisies, par exemple *Letter · 8.5 × 11 in* ou *A3 · 297 × 420 mm*.
4. Cliquez sur {{ui:Télécharger le jeu en PDF}} : une page par feuille.

## Notes standard d'un jeu de réglementation

Dans une feuille, {{ui:Notes standard}} permet de placer des notes d'un jeu de réglementation (par discipline) dans la colonne de droite de la feuille. Chaque note conserve le jeu et l'article dont elle provient, et la feuille imprimée indique quand ce jeu n'est pas vérifié. Les notes sont un point de départ : la personne responsable du dessin décide de ce qu'elles disent. Elles nécessitent le module complémentaire « Réglementation du bâtiment ».

## Ce qui figure sur les feuilles

- Les **plans** montrent murs, portes, fenêtres, pièces avec leurs surfaces, cotes et traits de coupe, à la plus grande échelle normalisée qui convient : 1/4" = 1'-0" ou plus petite (1:50 ou plus petite en millimètres).
- Les **façades** sont dessinées à partir du modèle 3D, lignes cachées retirées, deux par feuille, toutes à la même échelle, avec une ligne de sol en dessous. La toiture, les fondations et le terrain apparaissent tels qu'ils sont modélisés.
- Les **coupes** remplissent ce que traverse la coupe (murs, planchers, toiture) et dessinent ce qui est vu au-delà.
- **Les façades et les coupes portent leurs annotations** : un repère pour chaque niveau avec son nom et sa hauteur à droite, la hauteur entre niveaux à gauche, et, sur une façade, la largeur du bâtiment en dessous et une étiquette (D1, W1) sur chaque porte et fenêtre d'un mur qui vous fait face. Pour les murs propres à une pièce, voir [Façades intérieures](topic:interior-elevations).
- Les **nomenclatures** sont les mêmes tableaux que {{ui:Nomenclatures}} dans la barre du modèle.
- L'**ossature** montre pour chaque mur à ossature les montants, lisses, linteaux et appuis de fenêtre, tels qu'ils sont vus depuis l'extérieur, afin qu'une équipe puisse les implanter. Voir [Ossature des murs, planchers et toitures](topic:framing).

Chaque feuille possède un cartouche avec son numéro, son titre, le nom du fichier et la date.

:::tip
Les feuilles proviennent du modèle : pour modifier un dessin, modifiez le modèle, puis ouvrez de nouveau {{ui:Feuilles}}.
:::

:::note
Les façades et les coupes n'affichent que des traits et des remplissages : les cotes, les repères de niveau et les notes qui s'y rapportent ne sont pas encore disponibles.
:::
