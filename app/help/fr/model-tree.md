---
title: Se repérer avec l'arborescence du modèle
summary: Parcourez un modèle IFC par projet, site, bâtiment, niveau et espace, avec ses éléments regroupés par type ; cochez les cases pour afficher et masquer, cliquez sur une ligne pour la sélectionner, double-cliquez pour zoomer dessus.
keywords: arborescence du modèle, arborescence, arbre, structure, structure spatiale, navigateur, vue d'ensemble, niveau, étage, espace, pièce, groupe, classe, masquer, afficher, sélectionner, zoom
from: 69de4ab7
---

## Ce que vous allez faire

Voir comment un modèle est assemblé et atteindre n'importe quel élément sans le chercher en 3D : le bâtiment, ses niveaux, les espaces de chaque niveau et les éléments qui s'y trouvent, regroupés par type (murs, portes, dalles…).

## Étapes

1. Ouvrez un modèle IFC. L'{{ui:Arborescence du modèle}} à gauche s'ouvre jusqu'aux niveaux.
2. Cliquez sur la flèche à côté d'une ligne pour l'ouvrir ou la fermer. Un niveau contient d'abord ses espaces, puis ses éléments par type avec leur nombre. Un élément composé de parties, comme un escalier, contient ses parties.
3. Décochez la case d'une ligne pour masquer tout ce qu'elle contient ; cochez-la pour l'afficher à nouveau. Une case avec un tiret signifie que seule une partie de son contenu est affichée.
4. Cliquez sur le nom d'une ligne pour sélectionner ce qu'elle représente : un élément, ou tous les éléments d'un groupe, d'un niveau ou d'un espace. {{key:Mod}}+clic ajoute à la sélection, ou la retire.
5. Cliquez sur le bouton {{ui:i}} à côté d'un niveau, d'un espace ou d'un bâtiment pour voir ses propres propriétés.
6. Double-cliquez sur une ligne pour zoomer dessus.

## Ce que vous devez voir

- Quand vous sélectionnez un élément dans la vue 3D, l'arborescence s'ouvre jusqu'à lui et le marque.
- Les éléments masqués sont barrés. Les cases de l'arborescence et {{ui:Afficher}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) fonctionnent ensemble : voir [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate).
- Les éléments que le modèle ne place dans aucun niveau se trouvent dans un groupe à la fin, **Pas dans la structure spatiale**.
- Un long groupe affiche 200 lignes à la fois ; cliquez sur **Afficher plus** sous celui-ci pour le reste.

## Touches

Lorsque le nom d'une ligne a le focus : {{key:Up}} et {{key:Down}} déplacent, {{key:Right}} ouvre, {{key:Left}} ferme ou remonte, {{key:Space}} coche la case, {{key:Enter}} sélectionne.

## Erreurs fréquentes

- **La case d'un niveau est cochée mais rien ne s'affiche.** La liste {{ui:Niveaux}} sous l'arborescence désactive d'elle-même des niveaux entiers : cochez-les aussi là.
- **Une ligne ne sélectionne rien.** Certaines lignes, comme un espace vide, n'ont aucun élément pouvant être dessiné ; la barre d'état l'indique.

## Suite

- [Supprimer, couper, copier et coller des éléments de bâtiment](topic:edit-elements)
- [Afficher et masquer niveaux, espaces et arêtes](topic:storeys-and-spaces)
