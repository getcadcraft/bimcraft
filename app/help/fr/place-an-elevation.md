---
title: Placer une façade et ouvrir sa vue
summary: Placez un repère de façade sur le plan d'étage, orientez-le vers ce que vous voulez voir, puis retrouvez son dessin dans le navigateur de projet, modifiez-le et placez-le sur une feuille. Étapes pour les dispositions en ruban et pour la disposition classique.
keywords: façade, vue de façade, repère de façade, étiquette de façade, placer une façade, nouvelle façade, créer une façade, façade extérieure, vue de côté, vue de face, vue depuis un point, où est ma façade, ouvrir la façade, façade sur une feuille, inverser la façade, renommer la façade, façade nord, vues en mosaïque, vue divisée, plan et 3D côte à côte
from: a7cfd2b9
---

## Ce que vous allez faire

Créez votre propre façade : un dessin du bâtiment vu depuis un point que vous choisissez, dans la direction que vous choisissez. Il suffit de deux clics sur un plan d'étage. Le dessin figure ensuite dans la liste des autres façades du bâtiment.

:::note
Les quatre côtés sont déjà disponibles. Chaque bâtiment possède les façades nord, est, sud et ouest dans le {{ui:Project browser}} sous {{ui:Elevations}}, sans rien placer. Placez-en une vous-même lorsque vous voulez une vue depuis un autre endroit : de face sur une aile en biais, depuis une cour intérieure, ou sur un mur à l'intérieur d'une pièce.
:::

## Où se trouve l'outil

- Dispositions en ruban : {{ui:View}} › **Créer** › {{ui:Elevation}}.
- Disposition classique : activez {{ui:Draw}}, puis {{ui:Build}} › {{ui:Elevation}}.
- Tout style de menu : la commande s'appelle Altitude ; la palette de commandes la trouve, et la ligne de commande accepte ELEVATION.

## Étapes

1. Choisissez {{ui:Elevation}}. Une façade se place sur un plan d'étage : si vous étiez dans la vue 3D, BimCraft affiche le plan du niveau où vous vous trouviez. Le pointeur indique **Cliquez à l'endroit où se trouve la façade**.
2. Cliquez à l'endroit d'où la vue est prise. Pour une façade extérieure, cliquez hors du bâtiment, à faible distance du mur que vous voulez voir.
3. Le pointeur indique maintenant **Cliquez dans le sens de la vue**. Déplacez-vous vers le bâtiment : une flèche indique la direction, et le court trait tracé à travers votre premier clic correspond au bord depuis lequel la vue est prise. Cliquez.
4. Un cercle portant un numéro et un pointeur apparaît sur le plan. C'est le repère de façade. Le premier porte le numéro 1, le suivant le numéro 2.
5. Appuyez sur Échap pour terminer, ou continuez et placez-en un autre.

Placer un repère ne demande qu'une seule étape : {{key:Mod+Z}} l'annule.

## Ouvrir le dessin

Le plan reste devant vous après le second clic. Le dessin se trouve dans le {{ui:Project browser}} :

1. Ouvrez {{ui:Elevations}}. La vôtre figure après les quatre côtés, sous le nom **Façade 1**.
2. Cliquez sur le bouton crayon {{ui:Edit in this view}} sur sa ligne pour voir le dessin et y travailler : déplacer murs, portes, fenêtres et niveaux, ajouter des remarques et des cotes. Voir [Modifier dans les façades et coupes](topic:edit-in-elevations).
3. Cliquez sur la ligne elle-même pour ouvrir le jeu de plans, ou ajoutez la vue à une feuille de votre choix. Voir [Vues et feuilles](topic:views-and-sheets).

En disposition classique, le navigateur de projet se trouve dans le panneau de gauche lorsque {{ui:Draw}} est activé. Dans les dispositions en ruban, il s'agit de l'onglet {{ui:Project Browser}} sous Propriétés.

## Ce que montre la vue

- Tout ce qui se trouve devant le repère, dans la limite du bâtiment. Rien derrière lui.
- Les niveaux, avec leurs noms et leurs hauteurs.
- Si le repère se trouve à l'intérieur du bâtiment, tout ce dans quoi il se trouve est coupé à cet endroit, comme le ferait une coupe. Pour une façade extérieure propre, placez-vous à l'extérieur.

## La modifier

Sélectionnez le repère sur le plan (cliquez sur son cercle avec {{ui:Select}}). Les propriétés contiennent :

- {{ui:Label}} : son numéro ou un nom personnel, jusqu'à 8 caractères.
- {{ui:Flip the view}} : regarder dans le sens opposé depuis le même point.
- {{ui:Look as far as}} : jusqu'où la vue porte devant le repère. 0 affiche tout.

Appuyez sur Suppr pour supprimer le repère et son dessin. Annuler les remet tous les deux en place.

:::tip
Pour voir le plan et la vue 3D en même temps pendant votre travail, utilisez {{ui:View}} › **Fenêtres** › {{ui:Tile Views}} dans les dispositions en ruban, ou {{ui:Split}} dans la disposition classique. Un clic sur un onglet de vue revient à une seule vue.
:::

## Limites

- Un repère ne peut pas encore être déplacé ni tourné sur le plan. Supprimez-le et replacez-le, ou utilisez {{ui:Flip the view}}.
- Dans la liste des vues que vous pouvez ajouter à une feuille, une façade personnelle figure avec les coupes.
- Les étiquettes de portes et de fenêtres sont dessinées sur les quatre façades latérales, et non sur celle que vous avez placée.

## Dans l'IFC

Le repère est enregistré dans le fichier comme un IfcAnnotation nommé « Elevation 1 », avec le type d'objet « Elevation marker », dans le niveau où il a été placé. Un autre logiciel l'affiche comme une annotation ; le dessin lui-même est produit par BimCraft à partir du modèle à chaque fois.
