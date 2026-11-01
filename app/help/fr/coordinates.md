---
title: Coordonnées dans BimCraft
summary: Où vous travaillez : la position du pointeur dans le plan et dans la vue 3D, le niveau où vous vous trouvez, l'origine du projet et le point topographique du site.
keywords: coordonnées, où suis-je, position, pointeur, affichage, x y z, niveau, étage, origine du projet, origine, point de base, point topographique, site, coordonnées cartographiques, coordonnées Est et Nord, géoréférencement, unités, emplacement
from: 84df5245
---

## Ce que vous allez faire

Savoir où vous vous trouvez dans un modèle d'un coup d'œil : le niveau sur lequel vous dessinez, la distance du pointeur à l'origine du projet et l'emplacement du point topographique du site.

## Où s'affichent les valeurs

- **Dans la vue 3D** (en bas à droite, à côté du ViewCube) : déplacez le pointeur sur le modèle. L'encadré indique le niveau sur lequel se trouve le point et sa hauteur au-dessus du sol de ce niveau, puis ses **X, Y et Z**. Au-dessus d'un espace vide, il lit le point sur le sol du niveau le plus bas.
- **Dans le plan** (en bas à droite, pendant que {{ui:Dessin}} est activé) : le niveau affiché par le plan et la hauteur de son sol, ainsi que les **X et Y** du pointeur lorsqu'il se trouve sur le plan.
- Lorsque le fichier comporte une conversion cartographique (il a été exporté avec des coordonnées cartographiques), les deux encadrés ajoutent les **coordonnées Est et Nord** sur la grille cartographique, dans les {{ui:Unités}} que vous avez choisies (avec toujours l'unité écrite à côté ; les pieds et pouces s'affichent en pieds décimaux). Un dessin (DWG ou DXF) conserve ses propres unités : son affichage du pointeur les nomme, et il n'est jamais converti.

Chaque X, Y et Z est mesuré à partir de l'**origine du projet**, dans les {{ui:Unités}} choisies sur la barre d'outils (pieds et pouces, pouces, pieds décimaux, millimètres, centimètres ou mètres). L'axe Y positif pointe vers le nord du modèle, qui n'est pas toujours le vrai nord. Les coordonnées Est et Nord cartographiques suivent le même choix (les pieds et pouces s'affichent en pieds décimaux) ; lorsque l'unité propre du système cartographique diffère de celle que vous avez choisie, elle est indiquée entre parenthèses après les nombres, par exemple *(US survey feet)*, afin qu'un géomètre voie dans quelle unité le système lui-même est exprimé.

## Les deux marqueurs

- **Origine du projet** (un cercle rouge avec une croix) : le point 0, 0, 0 à partir duquel toutes les coordonnées du modèle sont mesurées.
- **Point topographique** (un cercle bleu avec un triangle) : le point de référence du site, celui pour lequel sont données sa latitude, sa longitude et son altitude, ou ses coordonnées cartographiques. Dans la vue 3D, placez le pointeur dessus pour lire sa position.

Lorsque le site se trouve sur l'origine du projet, comme dans un nouveau bâtiment dessiné ici, un seul marqueur les représente tous les deux. Cliquez sur le bouton réticule de l'un ou l'autre encadré pour masquer ou afficher les marqueurs ; BimCraft mémorise votre choix dans ce navigateur.

## Ce que vous devez voir

- Les valeurs changent lorsque le pointeur se déplace, et l'encadré du plan indique le niveau que vous avez choisi dans la liste des niveaux.
- Les marqueurs restent en place lorsque vous tournez autour du modèle, faites un panoramique ou zoomez.

:::tip
Pour lire la latitude et la longitude d'un point, utilisez {{ui:Mesurer}} › {{ui:Position}} : voir [Mesurer les distances, les aires de faces et les positions en 3D](topic:measure).
:::

:::touch
Sur un écran tactile, l'encadré 3D n'affiche rien tant que vous n'utilisez pas une souris ou un stylet : un doigt déplace la vue.
:::
