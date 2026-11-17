---
title: Appliquer des matériaux sur les murs, les planchers et les toitures
summary: Donnez aux éléments un matériau comme brique, bardage, bardeaux, bois ou carrelage, sur l'élément entier ou sur une seule face, enregistré dans l'IFC et visible dans les images rendues.
keywords: peinture, matériau, matériaux, finition, finitions, texture, brique, bardage, bardeaux, couverture, bois, pierre, carrelage, béton, crépi, herbe, gravier, verre, métal, face du mur, intérieur, extérieur, finition de sol, pièce, style de surface
from: fbfed676
---

{{ui:Peinture}} dans la barre d'outils ouvre la bibliothèque de matériaux par-dessus la vue 3D : brique et parpaing, bardage, couverture, bois, pierre, carrelage, béton, crépi, sol, verre et métal.

## Appliquer aux éléments

1. Cliquez sur {{ui:Peinture}}.
2. Cliquez sur un matériau.
3. Cliquez sur les éléments dans la vue 3D. Chaque clic applique le matériau à l'élément cliqué.

Pour peindre plusieurs éléments à la fois, sélectionnez-les d'abord (clic, {{key:Ctrl}}+clic, ou une [recherche](topic:find)), puis cliquez sur le matériau : chaque élément sélectionné le reçoit d'un seul coup.

L'élément affiche immédiatement la couleur du matériau dans la vue 3D. Sa texture apparaît dans une [image rendue](topic:render). {{key:Esc}} ou {{ui:Fermer}} met fin à l'application.

## Peindre une seule face

Choisissez {{ui:Seulement la face cliquée}}, puis cliquez sur la face voulue : l'extérieur d'un mur en bardage et son intérieur dans un autre revêtement, ou le dessus d'un plancher en bois tandis que sa sous-face reste inchangée. Le reste de l'élément conserve son matériau.

Une face est déterminée à partir des directions propres à l'élément ; elle reste donc la même face lorsque vous déplacez ou pivotez l'élément.

Pour peindre les planchers pièce par pièce, donnez à chaque pièce son propre plancher ({{ui:Dessin}} › {{ui:Plancher}} › **Cette pièce**, voir [Pièces, planchers, plafonds et toitures](topic:floors-and-roofs)), puis peignez le dessus de chaque plancher.

## Retirer un matériau

Cliquez sur l'échantillon rayé ({{ui:Aucun matériau}}), puis cliquez sur l'élément. Tous les matériaux qu'il porte, faces comprises, sont retirés.

## Dans le fichier

Peindre modifie l'IFC (une étape à chaque fois, et {{key:Ctrl+Z}} l'annule) et reste de l'IFC standard :

- chaque élément peint reçoit le jeu de propriétés `CadCraft_Render` qui nomme son matériau, ainsi qu'une propriété par face peinte ;
- son corps reçoit un style de surface à la couleur du matériau, afin que les autres programmes BIM affichent cette couleur. En IFC4, le style nomme aussi la texture.

Lorsque BimCraft remodèle un mur que vous avez peint (si vous déplacez son extrémité, par exemple), le mur conserve son matériau et sa couleur, dans BimCraft, dans les images et dans les autres programmes.

:::note
Les textures sont dessinées par BimCraft lui-même : elles fonctionnent hors ligne et sont libres d'utilisation pour tout usage (CC0). Vos propres textures d'image ne sont pas encore disponibles.
:::

## Textures dans la vue 3D

Un mur en brique peint montre ses briques, un plancher en bois ses lames, à leur taille réelle, dès que la peinture est appliquée. Décochez **Afficher les textures dans la vue 3D** dans la palette Peinture pour voir des couleurs unies à la place (un très grand modèle les désactive automatiquement et l'indique). La couleur par propriété affiche toujours ses propres couleurs. Les textures sont dessinées par le programme : rien n'est téléchargé, et les rendus comme le fichier glTF les incluent dans tous les cas.
