---
title: Masquer, isoler et rendre transparents des éléments
summary: Sélectionnez plusieurs éléments, masquez-les, n'affichez que ceux-là, ou affichez-les avec tout le reste en transparence, puis tout rétablir.
keywords: masquer, isoler, transparence, fantôme, rayons X, tout afficher, réafficher, sélection multiple, Ctrl+clic, Maj+clic, visibilité
from: 97e98b8c
---

## Ce que vous allez faire

Dégager la vue jusqu'à ce que vous regardez : masquer les éléments qui gênent, n'afficher que ceux que vous avez choisis, ou garder tout le reste à l'écran sous forme de contour discret pour vous repérer.

## Étapes

1. Ouvrez un modèle IFC. Voir [Ouvrir un modèle IFC et le parcourir en 3D](topic:open-ifc-model).
2. Cliquez sur un élément pour le sélectionner. Pour en sélectionner d'autres, maintenez {{key:Mod}} ou {{key:Shift}} et cliquez sur chacun. Cliquer ainsi sur un élément déjà sélectionné le retire de la sélection.
3. Ouvrez {{ui:Afficher}} dans la barre d'outils et choisissez l'action, ou appuyez sur sa touche :
   - {{ui:Masquer}} ({{key:H}}) masque les éléments sélectionnés.
   - {{ui:Isoler}} ({{key:I}}) n'affiche que les éléments sélectionnés.
   - {{ui:Transparence}} ({{key:T}}) affiche les éléments sélectionnés tels quels et tout le reste en transparence.
4. Cliquez sur {{ui:Tout afficher}} dans le même menu, ou appuyez sur {{key:Shift+H}}, pour réafficher tous les éléments.
5. Pour couper tout ce qui entoure les éléments sélectionnés, cliquez sur {{ui:Boîte de coupe autour de la sélection}} dans le même menu, ou appuyez sur {{key:Shift+X}}. Voir [Couper un modèle IFC avec un plan de coupe](topic:section-plane).

## Ce que vous devez voir

- Avec plusieurs éléments sélectionnés, {{ui:Propriétés}} indique leur nombre et les liste par classe. Cliquez sur un élément seul pour voir ses propriétés.
- Les éléments masqués ne peuvent pas être sélectionnés : un clic atteint ce qui se trouve derrière eux.
- Les éléments en transparence ne peuvent pas non plus être sélectionnés, de sorte que vous pouvez cliquer à travers les murs jusqu'aux éléments isolés.
- Les arêtes se masquent avec leur élément et deviennent discrètes avec lui.
- Masquer, isoler et la transparence restent en l'état pendant que vous modifiez, placez des éléments de bibliothèque ou coupez le modèle avec un plan de coupe. Ouvrir un autre modèle réaffiche tout.

## Erreurs fréquentes

- **Les éléments du menu sont grisés.** Rien n'est sélectionné. Cliquez d'abord sur un élément ; survolez une entrée pour lire pourquoi elle ne peut pas agir.
- **Isoler a affiché un mur que j'avais masqué.** Isoler affiche exactement ce que vous avez sélectionné, masqué ou non.
- **Un niveau entier manque.** Cela vient de la liste {{ui:Niveaux}}, et non de {{ui:Tout afficher}} : cochez à nouveau le niveau.

## Suite

- [Afficher et masquer niveaux, espaces et arêtes](topic:storeys-and-spaces)
- [Couper un modèle IFC avec un plan de coupe](topic:section-plane)
