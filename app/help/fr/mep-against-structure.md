---
title: Vérifier les tuyaux et gaines par rapport à la structure
summary: Lancez les jeux de détection de conflits prêts à l'emploi entre tuyaux et gaines, d'une part, et murs, dalles, poutres et poteaux, d'autre part ; repérez les tronçons plus proches de la structure que leur isolation et un jeu ne le permettent, et listez les réservations nécessaires à travers murs et dalles, en CSV et en BCF.
keywords: mep, conflit, détection de conflits, coordination, structure, murs, dalles, poutres, poteaux, dégagement, conflit mou, isolation, jeu, réservation, réservations, traversée, fourreau, carottage, travaux de gros œuvre, bcf, csv
from: 2d597f01
---

## Ce que vous allez faire

Vérifiez que les réseaux s'intègrent au bâtiment : ce qui heurte la structure, ce qui passe trop près d'elle, et où murs et dalles doivent être percés. Ouvrez {{ui:Détection de conflits}} dans le panneau de gauche ; la section **Tuyaux et gaines par rapport à la structure** se trouve sous la vérification habituelle.

## Conflits durs

Les deux listes d'ensembles proposent maintenant aussi **Tuyaux et gaines**, **Murs**, **Dalles et toitures**, **Poutres**, **Poteaux** et **Structure** (les quatre), avec le nombre d'éléments de chacun. Cliquez sur {{ui:Tuyaux et gaines × structure}} pour choisir le premier et le dernier et lancer la vérification ; ou choisissez vous-même une paire et cliquez sur {{ui:Lancer}}. Voir [Vérifier les conflits](topic:clash-check).

## Dégagements

Certains réseaux ont besoin d'espace autour d'eux : leur isolation, et de la place pour intervenir ou pour un fourreau.

1. Donnez à un tronçon de tuyau ou de gaine son épaisseur d'**Isolation** dans les Propriétés (rien n'est dessiné pour elle).
2. Saisissez le **Jeu autour des tuyaux et gaines** (mm) dans Détection de conflits.
3. Cliquez sur {{ui:Vérifier les dégagements}} : chaque partie plus proche d'un mur, d'une dalle, d'une poutre ou d'un poteau que son isolation plus le jeu est listée, avec la distance qu'elle a et la distance qu'elle devrait avoir. Cliquez sur une ligne pour voir les deux.

Une partie qui traverse un mur ou une dalle est une réservation, pas un dégagement : elle est listée à cet endroit.

## Réservations nécessaires

Cliquez sur {{ui:Réservations nécessaires}}. Là où l'axe d'un tronçon traverse un mur ou une dalle, BimCraft liste la réservation dont il a besoin : ronde pour un tuyau ou une gaine ronde, sinon rectangulaire, de la taille extérieure du tronçon, plus deux fois son isolation, plus deux fois le jeu, centrée à l'endroit où il traverse. Cliquez sur une ligne pour voir le tronçon et le mur ou la dalle.

- {{ui:Réservations en CSV}} : une ligne par réservation, avec le tronçon, sa taille et son isolation, la taille de la réservation, l'élément traversé et son GlobalId, le niveau, les X, Y et Z du centre, et la profondeur de traversée du tronçon.
- {{ui:Réservations en problèmes BCF}} : un problème par réservation, avec une caméra qui la regarde et le tronçon et l'élément sélectionnés, pour le logiciel de l'ingénieur structure.

:::note
Rien n'est découpé : les réservations forment une liste destinée à ceux qui les dimensionnent. Le jeu est à votre charge ; aucune norme ne dit quelle taille une réservation doit avoir. Les poutres et les poteaux sont des conflits, non des réservations : savoir si un tuyau peut les traverser relève de l'ingénieur structure.
:::
