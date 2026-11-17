---
title: Pièces et séparateurs de pièces
summary: Choisissez une pièce pour la nommer et la numéroter, et lisez sa surface, son périmètre et son volume. Dessinez un séparateur de pièce là où deux pièces se rejoignent sans mur entre elles.
keywords: pièce, pièces, séparateur de pièce, ligne de séparation, espace, IfcSpace, nom, numéro, surface, périmètre, volume, plan ouvert, diviser une pièce, cuisine et séjour, non fermé
from: d4c1d66b
---

## Ce que vous allez faire

Nommez les pièces délimitées par les murs, et divisez une pièce ouverte en deux sans mur.

## Où trouver les outils

- Dispositions en ruban : {{ui:Architecture}} › **Pièce et surface** › {{ui:Pièce}} et {{ui:Séparateur de pièce}}.
- Disposition classique : la barre Dessin › menu {{ui:Pièces}}.
- Tout style de menu : les commandes s'appellent Room et Room Separator ; la palette de commandes les trouve.

## Étapes

1. Dessinez les murs. Chaque boucle fermée de murs est déjà une pièce : BimCraft la crée, la numérote et lui donne sa surface au fur et à mesure que vous dessinez.
2. Choisissez {{ui:Pièce}}. Déplacez-vous sur le plan : la pièce sous le pointeur s'allume avec sa surface, son périmètre et son volume.
3. Pour nommer vite les pièces, saisissez d'abord un {{ui:Nom}} et un {{ui:Numéro}} dans la ligne, puis cliquez dans la pièce. Le numéro augmente d'une unité pour la pièce suivante (101, 102 ; A-09, A-10).
4. Ou cliquez simplement sur une pièce : elle est sélectionnée, et Propriétés affiche son nom, son numéro, sa surface, son périmètre, son volume et son repère.
5. Pour diviser une pièce ouverte, choisissez {{ui:Séparateur de pièce}} et cliquez sur deux points : mur à mur, ou mur à un autre séparateur. Continuez à cliquer pour tracer une suite de segments ; Entrée, Échap ou un double-clic termine.

## Ce que fait un séparateur

- Il délimite les pièces comme un mur sans épaisseur. Les surfaces des deux pièces additionnées donnent exactement la pièce d'origine.
- La pièce qui contient le milieu de l'ancienne pièce garde son nom et son numéro. L'autre est nouvelle.
- Un séparateur qui s'arrête en plein espace, sans toucher quoi que ce soit à une extrémité, ne divise rien. Prolongez-le et il le fera.
- La partie d'un séparateur située dans un mur est ignorée, de sorte que vous pouvez vous accrocher aux axes des murs.
- Sélectionnez un séparateur et appuyez sur Suppr pour le retirer : les deux pièces redeviennent une seule. Annuler le remet en place.

## S'il n'y a pas de pièce à l'endroit cliqué

La barre d'état l'indique : les murs ne se referment pas à cet endroit. Fermez l'écart, ou dessinez un séparateur au travers. Rien n'est refusé ; il n'y a simplement pas encore de pièce fermée.

## Dans l'IFC

Une pièce est un IfcSpace avec son numéro (Name), son nom (LongName) et Qto_SpaceBaseQuantities : NetFloorArea, NetPerimeter, Height, NetVolume. Le volume est la surface multipliée par la hauteur jusqu'au niveau supérieur.

Un séparateur de pièce est un IfcVirtualElement, l'entité que l'IFC utilise pour une limite qui n'est pas construite. Il a une ligne et pas de corps : un autre logiciel ne lit donc aucun mur pour lui et ne compte rien.

## Pas encore disponible

- Séparateurs courbes.
- Une pièce qui suit un plafond incliné : le volume est toujours la surface multipliée par la hauteur du niveau.
- Les relations de limites d'espace (IfcRelSpaceBoundary) ne sont pas écrites, ni pour les murs ni pour les séparateurs.

Voir aussi [Repères de pièces et de surfaces](topic:room-and-area-tags), [Surfaces et limites de surface](topic:areas-and-area-boundaries).
