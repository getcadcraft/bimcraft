---
title: Déplacer, copier, aligner et répartir les éléments de bâtiment
summary: Déplacez murs, dalles, poteaux et éléments placés par un point de base et un second point ou une distance saisie, copiez-les au fil de l'opération, et alignez-les ou espacez-les uniformément, sur le plan ou à partir d'une sélection en 3D.
keywords: déplacer, copier, aligner, répartir, espacement, décalage, point de base, déplacement, murs, poteaux, dalles, MOVE, ALIGN, DISTRIBUTE, Maj+M
from: 75890e37
---

## Ce que vous allez faire

Déplacer un mur, un poteau, une dalle ou un élément de bibliothèque placé à un nouvel endroit, en faire des copies, ou aligner plusieurs éléments, sans les redessiner.

## Noms et touches

Les commandes s'appellent {{ui:Déplacer}}, {{ui:Aligner}} et {{ui:Répartir}}, et vous pouvez saisir `MOVE`, `ALIGN` et `DISTRIBUTE` dans la ligne de commande, comme dans l'application de dessin CadCraft. Une différence : dans BimCraft, {{key:M}} correspond à {{ui:Mesurer}}, donc Déplacer a sa propre touche, {{key:Shift+M}}. Les outils se trouvent dans le menu {{ui:Build}}.

## Déplacer

1. Sélectionnez ce qu'il faut déplacer, sur le plan ou dans la vue 3D. Murs, dalles, poteaux et éléments de bibliothèque placés peuvent tous entrer dans une même sélection.
2. Appuyez sur {{key:Shift+M}} ou choisissez {{ui:Déplacer}}.
3. Cliquez sur un point de base, puis sur un second point. Ou, après le point de base, saisissez une distance et appuyez sur {{key:Enter}} : l'élément part dans la direction indiquée par le pointeur depuis le point de base. Vous pouvez aussi saisir `dx,dy` (ou `@dx,dy`), ou `longueur<angle`.
4. Appuyez sur {{key:C}} pour activer {{ui:Copier}} : chaque déplacement crée alors des copies et reste prêt pour le suivant. Appuyez sur {{key:Esc}} pour arrêter.

Vous pouvez aussi cliquer les deux points dans la vue 3D : avec Déplacer activé, le pointeur rencontre la hauteur du sol du niveau, donc un clic à cet endroit est un point du plan. Maintenez {{key:Shift}} enfoncé pendant le clic pour sélectionner un autre élément à la place. Utilisez une vue plan, {{ui:Dessus}}, {{ui:Avant}} ou {{ui:Côté}} comme vous le souhaitez : les points se trouvent toujours sur ce niveau.

Un mur emporte avec lui ses portes et fenêtres. Une dalle dessinée emporte ses ouvertures. Les pièces, dalles et plafonds qui suivent les murs sont mis à jour. Les murs qui se joignaient au mur déplacé restent à leur place.

Chaque déplacement constitue une seule modification : un seul {{key:Mod+Z}} l'annule, et elle est transmise à tous les participants d'une session Live TeamWork. Un élément de bibliothèque placé ne peut pas être copié de cette façon ; utilisez {{ui:Édition}} › {{ui:Copier}} et {{ui:Coller}}.

## Aligner

Sélectionnez deux éléments ou plus, choisissez {{ui:Aligner}}, puis un côté (gauche, centre, droite, haut, milieu ou bas) et ce à quoi aligner : l'ensemble sélectionné, le premier sélectionné, le dernier sélectionné, ou un point que vous cliquez. Appuyez sur {{ui:Aligner}} dans la barre.

## Répartir

Sélectionnez trois éléments ou plus, choisissez {{ui:Répartir}}, puis une direction (horizontalement ou verticalement) et l'espacement : intervalles égaux entre eux, ou centres équidistants. Les deux éléments aux extrémités restent en place.

Les murs déplacés par Aligner ou Répartir conservent leurs jonctions, comme avec Déplacer : un mur joint à un mur déplacé glisse le long de sa propre ligne pour rester joint, les cloisons qui s'y raccordent le suivent, et deux murs joints qui sont tous deux déplacés conservent leur angle là où leurs nouvelles lignes se rencontrent. Les pièces restent fermées. C'est une étape dans **Modifications**.
