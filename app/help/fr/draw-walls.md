---
title: Dessiner des murs
summary: Dessinez les murs sur le plan d'un niveau en cliquant sur leurs angles ou en saisissant des longueurs ; les angles se raccordent d'eux-mêmes, et les murs sont enregistrés au format IFC.
keywords: courbe, arc, ligne de localisation, justification, mur, murs, dessiner, plan, plan d'étage, pièce, angle, raccorder, type de mur, 2x6, 2x4, cmu, béton, hauteur, niveau, niveaux, étage, longueur saisie, ortho, accrochage
from: 8269cd4b
---

## Ce que vous allez faire

Dessinez les murs d'un bâtiment sur un plan de chaque niveau. Cliquez à l'endroit où un mur commence, puis sur chaque angle ; BimCraft raccorde les angles pour vous, donne à chaque mur ses couches (bardage, panneau de contreventement, montants, plaque de plâtre …) et le fait monter jusqu'au niveau supérieur. La vue 3D affiche les murs au fur et à mesure.

## Ouvrir le plan

1. Commencez un nouveau bâtiment ([Commencer un nouveau bâtiment](topic:start-a-new-building)) ou ouvrez un modèle IFC.
2. Cliquez sur {{ui:Dessin}} dans la barre d'outils. Un nouveau bâtiment s'ouvre déjà avec celui-ci activé.
3. Le plan d'un niveau s'affiche à gauche et la vue 3D à droite. Choisissez le niveau dans la liste en haut du plan, ou avec le bouton rond à côté dans le panneau **Niveaux**.
4. {{ui:Plan}}, {{ui:Diviser}} et {{ui:3D}} sont des outils de la rangée {{ui:Vue}} de la barre d'outils (les commandes PLAN, SPLIT et les touches fonctionnent comme avant). Utilisez {{ui:Plan}} pour le plan seul, {{ui:Diviser}} pour les deux, {{ui:3D}} pour fermer le plan. Lorsque la fenêtre est étroite (ou la taille de l'interface grande), {{ui:Diviser}} place le plan au-dessus de la vue 3D au lieu de côté.

Le plan coupe le niveau à 4'-0" (1200 mm) au-dessus de son sol, comme le fait un plan d'étage. Faites défiler pour zoomer ; faites glisser avec le bouton central ou droit (ou maintenez {{key:Space}} et faites glisser) pour un panoramique ; avec {{ui:Sélectionner}} activé, un glisser simple fait aussi un panoramique. {{key:F}} avec le pointeur sur le plan ajuste la vue.

## Dessiner une pièce

1. Cliquez sur {{ui:Mur}} (ou appuyez sur {{key:W}}).
2. Choisissez le type de mur dans la première liste, par exemple **Extérieur 2×6** ou **Intérieur 2×4**.
3. Choisissez sa hauteur : **Jusqu'au niveau supérieur** (le mur suit si ce niveau se déplace), **Jusqu'à** un niveau plus haut pour un mur qui traverse plusieurs niveaux (un hall d'escalier, une pièce à double hauteur, un pignon élevé), ou **Hauteur fixe** et saisissez-la. Un mur de ce type appartient au niveau sur lequel vous l'avez dessiné ; les plans des niveaux qu'il traverse l'affichent en plus clair, les pièces s'y arrêtent contre lui, et vous pouvez cliquer sur des portes et fenêtres à insérer dedans depuis ces plans (une porte repose sur le sol de ce niveau). Pour déplacer ou modifier le mur lui-même, allez au niveau où il commence.
4. Cliquez à l'endroit où le premier mur commence.
5. Cliquez sur chaque angle. Chaque clic crée un mur ; le suivant commence là où le précédent s'est terminé. La longueur et l'angle s'affichent à côté du pointeur.
6. Cliquez de nouveau sur le premier point pour fermer la pièce. La barre d'état indique le nombre de murs de la pièce ; en mode axe, chaque mur reçoit sa couche extérieure du côté extérieur de la pièce.
7. Appuyez sur {{key:Esc}} (ou faites un clic droit, ou un double-clic) pour arrêter sans fermer.

Les angles se raccordent d'eux-mêmes : deux murs se rejoignent en onglet, un mur qui se termine contre un autre s'arrête à sa face (un T), et trois murs ou plus en un même point partagent l'angle. Les murs qui se croisent restent tels quels.

Pour une pièce entière d'un coup : ouvrez {{ui:Formes}} pour un rectangle, un rectangle pivoté, un polygone, des arcs, des murs sur des lignes choisies ou autour d'un contour (voir [Formes de murs, division, décalage, étirement et verrouillage](topic:wall-tools)).

## Choisir la référence de dessin

Choisissez **Axe**, **Face intérieure** ou **Face extérieure** avant le premier clic. Lorsqu'une face est sélectionnée, vos clics et longueurs saisies décrivent cette face ; BimCraft décale l'axe du mur de la moitié de l'épaisseur totale et raccorde les angles consécutifs. Choisissez **Extérieur à gauche** ou **Extérieur à droite** par rapport au sens de tracé. Pour un contour fermé dessiné dans le sens antihoraire, l'extérieur est à droite ; dans le sens horaire, à gauche. Avec **Face intérieure**, le corps du mur va du côté extérieur de votre ligne ; avec **Face extérieure**, de l'autre côté. Le dessin par face conserve le côté extérieur choisi lorsque vous fermez la boucle. Sur l'axe, les murs qui ne ferment pas une pièce prennent le côté extérieur que vous avez choisi ; fermer une pièce règle seul le côté extérieur de chaque mur vers l'extérieur de la pièce, quel que soit le sens de tracé.

Changer le type de mur, la référence ou le côté extérieur termine la chaîne en cours. Près d'un angle de rebroussement, les onglets trop longs sont limités par des extrémités droites.

Pendant le dessin, une extrémité située dans le vide peut s'aligner horizontalement ou verticalement sur une extrémité de mur ou un angle précédent. Une ligne de guidage en pointillés relie ce point au pointeur accroché. {{key:Shift}} maintient la direction de tracé d'équerre ; l'alignement s'arrête alors le long de cette direction. Les extrémités, milieux et intersections de murs proches gardent la priorité sur un alignement lointain.

## Ligne de localisation

Avec **Référence** sur **Face extérieure** ou **Face intérieure**, le mur conserve cette face comme ligne de localisation. Plus tard, si le mur s'épaissit ou si son extérieur est inversé, cette face reste en place et le mur grandit ou se retourne autour d'elle. Un mur droit qui la rejoint à un angle la suit, si bien que l'angle reste fermé. Vous pouvez changer la ligne de localisation ensuite dans **Propriétés** : voir [Modifier un mur, une porte ou une fenêtre](topic:change-a-wall-or-door).

## Dessiner un mur courbe

1. Cliquez sur {{ui:Mur}}, puis choisissez **Courbe** dans la liste **Forme** de la rangée d'options.
2. Cliquez à l'endroit où le mur commence, puis à celui où il finit.
3. Cliquez sur un point de son arc. Ou saisissez la hauteur de l'arc et appuyez sur {{key:Enter}}.
4. La chaîne se poursuit depuis la fin du mur. Appuyez sur {{key:Esc}} pour la terminer.

Un mur courbe se raccorde aux murs à ses extrémités (les angles et raccords en T fonctionnent), crée des pièces et reçoit des portes et fenêtres le long de son arc. Elles restent des éléments droits, d'équerre avec le mur en leur milieu, et leur distance est mesurée le long de l'arc. Un mur peut tourner de trois quarts de cercle au maximum. Il s'accroche à ses extrémités et au milieu de son arc.

Pas encore disponible pour les murs courbes : {{ui:Ajuster / prolonger}} et {{ui:Angle}}, la charpente, les cotes automatiques de plan et l'accrochage le long de l'arc. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).

## Saisir une longueur au lieu de cliquer

Après le premier clic, saisissez puis appuyez sur {{key:Enter}} :

| Saisie | Dessine |
|---|---|
| `12'6"` ou `3810` | un mur de cette longueur, dans la direction indiquée par le pointeur |
| `12'6"<90` | un mur de cette longueur, à cet angle (en degrés, dans le sens antihoraire à partir de la droite) |
| `@3000,0` | jusqu'à un point situé à cette distance du dernier, en travers et vers le haut |
| `1200,3400` | jusqu'à ce point sur le plan |

Saisir un nombre pendant que l'outil Mur est activé l'envoie directement dans la zone {{ui:Longueur}}. En pieds et pouces, un nombre seul représente des pouces ; en millimètres, des millimètres. Vous pouvez toujours saisir l'unité : `3.5 m`, `10 ft`, `6 1/2"`.

## Accrochages

- Les extrémités de murs, leurs angles de face et les milieux de murs s'accrochent lorsque le pointeur est proche (un carré, un triangle).
- Le pointeur s'accroche à l'axe d'un mur ou à l'une de ses faces (une croix).
- Depuis le dernier point, la direction se maintient à chaque 15° lorsqu'elle est proche ; maintenez {{key:Shift}} pour la garder à 0°, 90°, 180° ou 270°.
- Pour les directions libres, la longueur est arrondie à 1/2" (ou 10 mm).

## Modifier, annuler, supprimer

- Chaque mur correspond à une étape dans **Modifications** : {{ui:Annuler}} et {{ui:Rétablir}} retirent les murs puis les remettent en place.
- Avec {{ui:Sélectionner}} activé, cliquez sur un mur dans le plan pour le choisir ; la vue 3D et **Propriétés** suivent. {{key:Delete}} supprime les murs choisis, et les murs qu'ils raccordaient sont de nouveau nettoyés.

## Niveaux

Le panneau **Niveaux** liste chaque niveau avec son altitude et sa hauteur.

- Saisissez un nouveau nom, une altitude ou une hauteur, puis appuyez sur {{key:Enter}}. Modifier la hauteur (ou l'altitude) d'un niveau déplace les niveaux au-dessus de la même valeur, et les murs qui montent jusqu'à un niveau suivent.
- {{ui:Ajouter un niveau au-dessus}} ajoute un niveau au-dessus du plus haut, de même hauteur.
- {{ui:Ajouter un niveau en dessous}} ajoute un niveau sous le plus bas (un sous-sol), de même hauteur que celui-ci : son altitude est négative lorsque le niveau le plus bas est à 0, et aucun autre niveau ne bouge. Annuler le retire.
- {{ui:Copier ce niveau…}} redessine sur un autre niveau, ou sur un nouveau niveau au-dessus, ce qui se trouve sur le niveau que vous regardez : ses murs avec leurs portes et fenêtres, planchers et plafonds (pas les toitures). Les murs qui montaient jusqu'au niveau supérieur montent jusqu'au niveau au-dessus du nouveau ; les pièces apparaissent d'elles-mêmes. Une seule {{ui:Annuler}} retire tout. Si l'autre niveau comporte déjà des murs, la copie s'y ajoute.
- {{ui:Unités}} dans la barre d'outils choisit les unités (pieds et pouces, pouces, pieds décimaux, millimètres, centimètres ou mètres) pour tout ce que les outils de dessin affichent et lisent.

## Enregistrer

Cliquez sur {{ui:Enregistrer au format IFC}}. Chaque mur devient un mur IFC avec son axe, sa forme raccordée, son type et ses couches, `Pset_WallCommon` et ses quantités de base (longueur, hauteur, surfaces et volumes), afin que d'autres logiciels BIM l'ouvrent et l'intègrent dans une nomenclature.

## Bon à savoir

- Les murs sont dessinés sur leur axe. L'épaisseur vient du type de mur.
- Le plan affiche en plein les murs dessinés ici, et tout le reste (éléments de bibliothèque, modèles d'autres logiciels) coupé par le même plan, avec ce qui se trouve sous la coupe en traits fins.
- Les murs créés par d'autres logiciels apparaissent dans le plan, mais ne peuvent pas encore être modifiés avec ces outils.
