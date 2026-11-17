---
title: Démarrer un nouveau bâtiment
summary: Créez un modèle de bâtiment vierge avec ses niveaux, dessinez ses murs, placez des éléments depuis la bibliothèque et enregistrez-le au format IFC.
keywords: nouveau, nouveau bâtiment, vierge, vide, partir de zéro, gabarit, niveaux, étages, planchers, créer, modèle
from: 68786865
---

## Ce que vous allez faire

Démarrez un modèle de bâtiment à partir de rien au lieu d'en ouvrir un. BimCraft crée un modèle IFC vierge avec un projet, un site, le bâtiment et ses niveaux. Vous pouvez placer sur les niveaux des équipements et du mobilier issus de la bibliothèque, puis enregistrer le tout dans un fichier IFC.

:::note
Les murs peuvent être dessinés dès maintenant : voir [Dessiner des murs](topic:draw-walls). Les portes, fenêtres, planchers et toitures arriveront ensuite.
:::

## Étapes

1. Cliquez sur {{ui:Nouveau bâtiment}} sous **Ouvrir un fichier ou un dossier**, ou sur la page d'accueil.
2. Saisissez le **Nom du bâtiment**.
3. Choisissez le nombre de **Niveaux** (de 1 à 200).
4. Saisissez la **Hauteur d'étage**, du plancher au plancher : par exemple `10'-0"`, `10'6"` ou `3000 mm`. Un nombre sans unité est en pieds aux États-Unis, et en millimètres ailleurs.
5. Tous les champs sont déjà remplis : vous pouvez les laisser tels quels. Sous eux, la zone indique avec quoi vous démarrez : les unités, le **Type de mur** que l'outil Mur dessine en premier (choisissez-en un autre dans la liste si vous le souhaitez) et la première feuille.
6. Cliquez sur {{ui:Créer}}. Les niveaux sont empilés à partir de 0, chacun à une hauteur d'étage au-dessus du précédent, et nommés Niveau 1, Niveau 2, etc. Ils apparaissent dans l'arborescence du modèle, et le plan du Niveau 1 s'ouvre à côté de la vue 3D, avec {{ui:Dessin}} activé.
7. Dessinez les murs : cliquez sur {{ui:Mur}}, puis sur deux points. Voir [Dessiner des murs](topic:draw-walls). Renommez les niveaux ou modifiez leurs hauteurs dans le panneau **Niveaux**.
8. Placez les éléments : voir [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library). La barre de placement liste tous les niveaux.
9. Cliquez sur {{ui:Enregistrer au format IFC}}. Le fichier prend le nom du bâtiment, par exemple `Smith's house.ifc`.

## À savoir

- Le modèle est enregistré en millimètres, au format IFC4. Les autres logiciels BIM peuvent l'ouvrir.
- Un nouveau bâtiment comprend une feuille, **A-101**, qui contient le plan du niveau le plus bas : A3 à 1:100 si vous travaillez en unités métriques, Tabloid à 1/8" = 1'-0" sinon. Elle reste vide jusqu'au premier mur, puis affiche le plan au fur et à mesure du dessin. Ouvrez-la sous **Feuilles** dans le navigateur de projet pour modifier son papier, son échelle ou son cartouche, ajouter des vues ou la supprimer. Un bâtiment démarré à partir d'un gabarit reprend à la place les feuilles de ce gabarit.
- Pour modifier ce avec quoi tout nouveau bâtiment démarre (le type de mur pour les projets métriques, les niveaux, la première feuille, l'outil actif après Créer), voir [Règles par défaut](topic:default-policies).
- Rien n'a besoin d'être configuré avant le premier mur. Le type de mur, les hauteurs d'étage, les unités et la feuille peuvent tous être modifiés plus tard.
- **Niveaux** dans le panneau de gauche ne liste que les niveaux qui contiennent quelque chose ; l'arborescence du modèle les liste tous.
- Tant que vous n'avez pas enregistré, le nouveau bâtiment compte comme travail non enregistré. BimCraft demande confirmation avant d'ouvrir un autre fichier ou de quitter, et conserve une copie dans ce navigateur au cas où l'onglet se fermerait.
