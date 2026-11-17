---
title: Surfaces et limites de surface
summary: Mesurez la surface brute du bâtiment ou la surface locative à l'intérieur de limites que vous dessinez ou que vous prenez sur les murs, et listez les surfaces dans une nomenclature.
keywords: surface, surfaces, limite de surface, référentiel de surface, surface brute de bâtiment, surface brute de plancher, GFA, locative, plan des surfaces, nomenclature des surfaces, choisir des murs, non fermée
from: c79f96d2
---

## Ce que vous allez faire

Dessinez les limites d'un référentiel de surfaces, placez des surfaces à l'intérieur, et lisez les totaux.

## Où se trouvent les outils

- Disposition en ruban : {{ui:Architecture}} › **Pièce et surface** › {{ui:Surface}} et {{ui:Limite de surface}}.
- Disposition classique : la barre Dessin › menu {{ui:Pièces}}.

## Étapes

1. Choisissez {{ui:Limite de surface}}. Dans la ligne, choisissez le {{ui:Référentiel}} : Brute du bâtiment ou Locative. Chaque référentiel a ses propres limites.
2. Choisissez comment tracer les lignes dans {{ui:Créer par}} :
   - **Dessiner** : cliquez point après point.
   - **Choisir des murs : ligne d'axe** : cliquez sur un mur, et sa ligne d'axe devient une limite.
   - **Choisir des murs : la face cliquée** : cliquez sur un mur du côté voulu ; cette face devient la limite. Pour la surface brute du bâtiment, cliquez sur l'extérieur des murs extérieurs.
3. Choisissez {{ui:Surface}}. Choisissez le même référentiel, saisissez si vous le souhaitez un nom, un numéro ou un type, puis cliquez à l'intérieur des limites.
4. La surface est mesurée aussitôt. Sélectionnez-la pour modifier son nom, son numéro ou son type dans les Propriétés.

## Ce qui dépend de quoi

- Une limite tracée en choisissant un mur suit ce mur : si vous déplacez le mur, la surface est mesurée à nouveau dans la même étape.
- Une limite que vous avez dessinée reste à l'endroit où vous l'avez tracée.
- Les faces de murs qui se rejoignent à un angle s'y rejoignent aussi : quatre murs choisis ferment une surface sans trou.
- Les limites de surface apparaissent sur le plan lorsqu'un outil de pièce ou de surface est en main, afin de ne pas encombrer le plan le reste du temps.

## Si les limites ne se referment pas

La surface est tout de même placée. Elle affiche **Non fermée** et n'est mesurée qu'une fois les limites refermées autour d'elle. Ce n'est qu'un conseil : rien n'est refusé.

## La nomenclature

Panneau de gauche › {{ui:Nomenclatures}} › **Surfaces** : référentiel, numéro, nom, type, niveau, surface et périmètre, avec un total. Un clic sur une ligne sélectionne la surface. {{ui:Télécharger le CSV}} donne le même tableau.

## Dans l'IFC

Une surface est un IfcSpace sans corps géométrique : PredefinedType GFA pour le référentiel de surface brute du bâtiment, USERDEFINED avec ObjectType Rentable pour la surface locative. Elle porte GrossFloorArea et GrossPerimeter, et aucune surface nette, afin de ne pas être prise pour une pièce. Une limite est un IfcVirtualElement.

## Pas encore disponible

- Des référentiels personnalisés (seulement Brute du bâtiment et Locative).
- Des remplissages en couleur par type de surface.
- Des règles qui placent la limite à votre place, comme « jusqu'à la ligne de vitrage ».

Voir aussi [Pièces et séparateurs de pièces](topic:rooms-and-separators), [Repères de pièce et de surface](topic:room-and-area-tags).
