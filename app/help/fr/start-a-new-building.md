---
title: Commencer un nouveau bâtiment
summary: Créer un modèle de bâtiment vierge avec ses niveaux, dessiner ses murs, placer des éléments de la bibliothèque et l'enregistrer en IFC.
keywords: nouveau, nouveau bâtiment, vierge, vide, partir de zéro, modèle de départ, niveaux, étages, planchers, créer, modèle
from: 546b8ae8
---

## Ce que vous allez faire

Démarrer un modèle de bâtiment à partir de rien au lieu d'en ouvrir un. BimCraft crée un modèle IFC vierge avec un projet, un site, le bâtiment et ses niveaux. Vous pouvez placer sur les niveaux des équipements et du mobilier tirés de la bibliothèque, puis enregistrer le tout dans un fichier IFC.

:::note
Les murs peuvent être dessinés dès maintenant : consultez [Dessiner des murs](topic:draw-walls). Les portes, les fenêtres, les planchers et les toits sont les prochains en cours de réalisation.
:::

## Étapes

1. Cliquez sur {{ui:Nouveau bâtiment}} sous **Ouvrir un fichier ou un dossier**, ou sur la page de démarrage.
2. Saisissez le **Nom du bâtiment**.
3. Choisissez le nombre de **Niveaux** (de 1 à 200).
4. Saisissez la **Hauteur de niveau**, de plancher à plancher : par exemple `10'-0"`, `10'6"` ou `3000 mm`. Un nombre seul est en pieds aux États-Unis, en millimètres ailleurs.
5. Cliquez sur {{ui:Créer}}. Les niveaux sont empilés à partir de 0, chacun à une hauteur de niveau au-dessus du précédent, et nommés Level 1, Level 2, etc. Ils apparaissent dans l'arborescence du modèle, et le plan du niveau 1 s'ouvre à côté de la vue 3D avec {{ui:Dessiner}} activé.
6. Dessinez les murs : consultez [Dessiner des murs](topic:draw-walls). Renommez les niveaux ou changez leurs hauteurs dans le panneau **Niveaux**.
7. Placez des éléments : consultez [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library). La barre de placement liste tous les niveaux.
8. Cliquez sur {{ui:Enregistrer au format IFC}}. Le fichier porte le nom du bâtiment, par exemple `Smith's house.ifc`.

## Bon à savoir

- Le modèle est enregistré en millimètres, en IFC4. D'autres programmes de BIM l'ouvrent.
- **Niveaux** dans le panneau de gauche ne liste que les niveaux qui contiennent quelque chose ; l'arborescence du modèle les liste tous.
- Tant que vous n'avez pas enregistré, le nouveau bâtiment compte comme un travail non enregistré. BimCraft vous demande confirmation avant que vous ouvriez un autre fichier ou que vous quittiez, et garde une copie dans ce navigateur au cas où l'onglet se fermerait.
