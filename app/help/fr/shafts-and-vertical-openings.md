---
title: Gaines et trémies dans les planchers
summary: Une gaine est un seul contour qui découpe chaque plancher, plafond et toit situé entre deux niveaux. Une trémie n'en découpe qu'un. Ouverture dans un mur découpe un mur.
keywords: gaine, cage d'ascenseur, gaine d'ascenseur, trémie d'escalier, contremarche, trémie, ouverture dans un plancher, ouverture dans un plafond, ouverture dans un toit, lanterneau, trou dans un plancher, ouverture dans un mur, IfcOpeningElement, déduction, surface nette
from: 8e9e1641
---

## Ce que vous allez faire

Découper une cage d'ascenseur dans un bâtiment avec un seul croquis, percer un trou dans un plancher, et lire ce qui a été retiré des surfaces.

## Où se trouvent les outils

- Dispositions en ruban : {{ui:Architecture}} › **Ouverture** › {{ui:Gaine}}, {{ui:Trémie}} et {{ui:Ouverture dans un mur}}.
- Disposition classique : la barre {{ui:Dessin}} › menu {{ui:Pièces}} (Gaine, Trémie) et › menu {{ui:Murs}} (Ouverture dans un mur).

## Une gaine

1. Ouvrez le plan du niveau où commence la gaine. Choisissez {{ui:Gaine}}.
2. Dans la ligne, choisissez le {{ui:Niveau de base}} et le {{ui:Niveau supérieur}}, ainsi que les décalages si la gaine commence ou se termine au-dessus ou en dessous de ces niveaux.
3. Cliquez sur les angles du contour. Cliquez à nouveau sur le premier angle, double-cliquez ou appuyez sur Entrée pour terminer.
4. Chaque plancher, plafond et toit situé entre les deux hauteurs est découpé. La ligne d'état indique combien.

Une gaine est une seule chose. Sélectionnez son contour sur n'importe quel niveau qu'elle traverse : Propriétés affiche son nom, ses niveaux et ses décalages, ce qu'elle découpe et la surface retirée. Modifiez-la et chaque ouverture suit. Supprimez-la et chaque ouverture disparaît. Chacune constitue une seule étape d'annulation.

Elle continue de découper : un plancher créé plus tard entre ses niveaux est découpé sans qu'on le demande, et un plancher que vous supprimez n'est plus concerné.

Le plancher sur lequel la gaine repose n'est pas découpé (son dessus est la base). Donnez à la base un décalage négatif pour le découper aussi. Donnez au sommet un décalage positif pour traverser le toit.

## Une trémie

1. Choisissez {{ui:Trémie}}. Dans la ligne, choisissez ce qu'il faut découper : le plancher, le plafond ou le toit.
2. Cliquez sur les angles du contour et terminez comme ci-dessus.
3. Le plancher, le plafond ou le toit de ce niveau situé sous le contour est découpé. Il appartient à cet élément seul : supprimez le plancher et l'ouverture disparaît avec lui.

## Une ouverture dans un mur

{{ui:Ouverture dans un mur}} est l'outil de [Façonner un mur](topic:wall-shape) : cliquez sur un mur dans le plan, ou sur deux angles de sa face en 3D.

## Quantités

Selon la règle de mesure des planchers, la surface nette d'un élément est sa surface brute moins ce qui en est découpé. Une gaine ou une trémie constitue une déduction sur chaque plancher et chaque plafond qu'elle découpe ; les nomenclatures Planchers et finitions et les quantités IFC affichent les mêmes chiffres. Sur un toit, la déduction est la surface de la toiture : la surface en plan divisée par le cosinus de la pente.

Un contour qui déborde du bord ne déduit que la partie située sur l'élément.

## Si rien n'est découpé

Une gaine sans obstacle sur son passage est tout de même créée, et la ligne d'état le signale : elle découpera ce qui sera construit là plus tard. Une trémie a besoin de quelque chose en dessous ; sans rien, la ligne d'état le dit et rien n'est créé.

## Dans l'IFC

Chaque découpe est un IfcOpeningElement relié par IfcRelVoidsElement à l'élément découpé, de sorte que tout logiciel IFC affiche le trou. Un toit est découpé face par face. La gaine elle-même est un IfcGroup de ses ouvertures.

## Pas encore disponible

- Contours courbes.
- Les murs d'une gaine : dessinez-les avec l'outil Mur.
- La modification du contour en faisant glisser ses angles (modifiez-le dans Propriétés, ou supprimez-le et redessinez-le).
- Les propriétés d'un plancher dessiné n'affichent que sa surface moins ses propres ouvertures ; les nomenclatures et les quantités IFC incluent celles de la gaine.

Voir aussi [Pièces et séparateurs de pièces](topic:rooms-and-separators).
