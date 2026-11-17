---
title: Mesurer sur le plan
summary: Cliquez deux points sur le plan d'un niveau pour lire la distance et les écarts en X et Y, enchaînez des clics pour un total cumulé, et ne conservez rien dans le modèle.
keywords: mesure, plan, distance, cote, mètre ruban, total cumulé, enchaîner, dx, dy, droit, accrochage, extrémités de murs, lignes de trame, poteaux, vérifier une longueur
from: 7235633f
---

## Ce que vous allez faire

Vérifiez une longueur sur le plan d'un niveau, comme la largeur d'une pièce ou la distance entre deux lignes de trame, sans rien ajouter au modèle. Pour mesurer dans la vue 3D, voir [Mesurer les distances, aires de faces et positions en 3D](topic:measure).

## Étapes

1. Affichez le plan du niveau voulu : {{ui:Plan}} pour le plan seul, ou {{ui:Diviser}}.
2. Dans le groupe {{ui:Dessin}}, cliquez sur {{ui:Mesurer}}. Si seul le plan est affiché, vous pouvez appuyer sur {{key:M}} à la place.
3. Cliquez le premier point. Les points s'accrochent aux murs, aux lignes de trame et aux poteaux.
4. Cliquez le second point. Une ligne de cote affiche la distance, et la barre d'état donne la distance avec les écarts en X et Y.
5. Pour poursuivre la mesure, cliquez un troisième point. Chaque tronçon est mesuré et le total est ajouté.
6. Maintenez {{key:Shift}} pendant le clic pour que le tronçon reste droit par rapport au précédent.
7. Appuyez sur {{key:Esc}} pour effacer la mesure, ou choisissez un autre outil.

## Remarques

- Rien n'est écrit dans le modèle, et la cote disparaît quand vous l'effacez. Pour des cotes permanentes, voir [Assemblages de murs et cotes de référence](topic:wall-assemblies).
- Lorsque la vue 3D est à l'écran, {{key:M}} reste la mesure 3D. {{key:Shift+M}} correspond à Déplacer.
- La distance utilise l'unité d'affichage que vous avez choisie dans {{ui:Paramètres}}.
