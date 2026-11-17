---
title: Groupes de modèle
summary: Réunissez des éléments choisis en un groupe nommé, replacez le groupe ailleurs, et modifiez une copie pour modifier toutes les autres.
keywords: groupe, groupe de modèle, regroupement, dégrouper, instance, copie, répétition, unité type, travée, appartement, modifier le groupe, IfcGroup
from: 121c5027
---

## Ce que vous allez faire

Grouper une travée type, la placer plusieurs fois, et modifier toutes les copies en en modifiant une seule.

## Où se trouve l'outil

- Dispositions en ruban : {{ui:Architecture}} › **Modèle** › {{ui:Groupe de modèle}}.
- Disposition classique : la barre {{ui:Dessin}} › menu {{ui:Pièces}} › Groupe de modèle.

## Étapes

1. Avec Sélectionner, choisissez les éléments : cliquez sur l'un, Ctrl+clic ou Maj+clic sur les autres.
2. Choisissez {{ui:Groupe de modèle}}. Ils deviennent un groupe immédiatement. Saisissez un {{ui:Nom du groupe}} dans la ligne au préalable pour le nommer, ou saisissez-en un après pour le renommer.
3. Appuyez sur {{ui:En placer un autre}} et cliquez à l'endroit où la copie doit se trouver : son coin inférieur gauche va au point cliqué.
4. Modifiez une copie quelconque : déplacez une extrémité de mur, redimensionnez une porte, supprimez un poteau. Toutes les autres copies du groupe changent dans la même étape, et une seule action Annuler les rétablit toutes.
5. Tant que l'outil Groupe de modèle est actif, un clic sur un élément sélectionne tout son groupe.

## Autres actions

- {{ui:Ajouter la sélection}} : ajoute d'autres éléments au groupe que vous avez sélectionné en dernier.
- {{ui:Dégrouper}} : cette copie redevient des éléments ordinaires. Les autres copies restent un groupe.
- Déplacez une copie entière avec {{ui:Déplacer}} : elle reste le même groupe, à un nouvel endroit ; les autres ne bougent pas.
- Supprimez les éléments d'une copie, et cette copie disparaît.

## Ce qui peut figurer dans un groupe

Les murs avec leurs portes et fenêtres, les poteaux et les dalles dessinées peuvent être replacés et rester identiques. Un groupe peut aussi contenir d'autres éléments, mais alors il ne peut pas encore être replacé ; la ligne indique pourquoi.

Les copies sont déplacées, non tournées ni symétrisées.

## Dans le fichier IFC

Un groupe est un IfcGroup avec un IfcRelAssignsToGroup vers ses membres, qui restent des murs, poteaux et dalles ordinaires. Chaque copie d'un même groupe porte le même identifiant de définition.

## Pas encore disponible

- Tourner ou symétriser une copie.
- Escaliers, toitures, dalles de pièces et éléments de bibliothèque dans un groupe replacé.
- Le profil, la pente et les ouvertures d'un mur ne sont pas reportés sur les copies.
- Groupes dans des groupes.

Voir aussi [Déplacer, aligner et répartir](topic:move-align-distribute).
