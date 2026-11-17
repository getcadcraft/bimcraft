---
title: Voir un dessin DWG ou DXF en 3D
summary: Passez l'espace objet d'un dessin en 3D pour voir les élévations, les épaisseurs, les faces 3D, les maillages et les blocs, tournez autour, cliquez sur un objet pour voir ses propriétés, et voyez ce qui n'est pas encore dessiné.
keywords: 3d, dwg, dxf, dessin, espace objet, orbite, coupe, découpe, sélection, choisir, propriétés, attributs, handle, élévation, épaisseur, extrusion, 3dface, polyface, maillage, polyligne 3d, blocs, vues, perspective, parallèle, étendue, acis, solides
from: a0c6cd17
---

## Ce que vous allez faire

Regardez l'espace objet d'un dessin en 3D. Les lignes et polylignes se trouvent à leurs hauteurs réelles, les objets ayant une épaisseur se dressent comme des murs, et les faces 3D, maillages et blocs 3D s'affichent comme des surfaces autour desquelles vous pouvez tourner. Les feuilles restent en 2D.

## Étapes

1. Ouvrez un DWG ou un DXF. Voir [Afficher un dessin DWG ou DXF](topic:view-dwg). Il s'ouvre en 3D, sauf si {{ui:Paramètres}} › BimCraft › **Dessins ouverts en** indique {{ui:Objet (2D)}}.
2. En 2D, cliquez sur {{ui:3D}} dans la barre au-dessus du dessin, ou appuyez sur {{key:3}}.
3. Patientez un instant la première fois : la barre d'état affiche « Construction du dessin en 3D… », puis le nombre de lignes et de faces affichées.
4. Tournez, faites un panoramique et zoomez (voir le tableau ci-dessous).
5. Cliquez sur une vue dans la deuxième barre : {{ui:Iso}}, {{ui:Dessus}}, {{ui:Dessous}}, {{ui:Avant}}, {{ui:Arrière}}, {{ui:Gauche}} ou {{ui:Droite}}.
6. Cliquez sur {{ui:Perspective}} pour basculer entre une vue en perspective et une vue parallèle.
7. Cliquez sur {{ui:Étendue}} ou appuyez sur {{key:F}} pour revoir l'ensemble du dessin.
8. Cliquez de nouveau sur {{ui:3D}}, appuyez sur {{key:3}}, ou cliquez sur {{ui:Modèle}} ou sur un onglet de feuille pour revenir en 2D.

## Ce que vous devez voir

- L'espace objet en 3D, Z vers le haut, dans les couleurs propres au dessin. Les faces sont un ton plus clair que leurs arêtes.
- Les calques que vous désactivez dans {{ui:Calques}} disparaissent aussi de la vue 3D.
- À droite : le nombre de lignes et de faces, la taille du dessin en X, Y et Z, **Dans la vue 2D uniquement** et **Pas encore dessiné**.

## Couper avec un plan de coupe

Cliquez sur {{ui:Coupe}} dans la barre 3D, ou appuyez sur {{key:X}}. La barre située dessous fonctionne comme pour les modèles IFC (voir [Couper un modèle IFC avec un plan de coupe](topic:section-plane)) : coupez depuis {{ui:Dessus}}, {{ui:Avant}} ou {{ui:Côté}}, faites glisser ou saisissez le décalage — ici dans les unités propres au dessin — et {{ui:Inverser}} pour garder l'autre côté. Ce que le plan retire ne peut pas être sélectionné. Revenir en 2D supprime la coupe.

## Voir les propriétés d'un objet

Cliquez sur un objet dans la vue 3D. Il prend la couleur de sélection, et {{ui:Propriétés}} affiche ce que le fichier indique à son sujet : son type, son calque, sa couleur, son type de ligne et son handle, puis ses données propres, comme le début, la fin et la longueur d'une ligne, le centre et le rayon d'un cercle, les coins d'une face 3D, ou le bloc d'une référence de bloc, son point d'insertion, son échelle, sa rotation et les valeurs de ses attributs.

- Une référence de bloc se sélectionne en entier, ainsi que les blocs qu'elle contient.
- Un clic à quelques pixels d'une ligne sélectionne la ligne.
- Maintenez {{key:Mod}} et cliquez pour sélectionner d'autres objets, ou pour en retirer un ; {{ui:Propriétés}} les compte alors par type.
- {{key:Esc}}, ou un clic sur un espace vide, annule la sélection.
- Les objets situés sur des calques que vous avez désactivés ne peuvent pas être sélectionnés.

## Se déplacer

:::mouse
| Pour | Faites ceci |
|---|---|
| Tourner | Faites glisser avec le bouton central, ou avec le bouton gauche |
| Panoramique | Faites glisser avec le bouton droit, ou maintenez {{key:Shift}} et faites glisser |
| Zoomer | Faites défiler la molette ; le zoom se fait vers ce qui se trouve sous le pointeur |
| Tout voir | {{ui:Étendue}} ou {{key:F}} |
| Regarder de côté | Cliquez sur une face, une arête ou un coin du ViewCube, dans l'angle inférieur droit |
:::

Le ViewCube peut être remplacé par une icône d'axes, ou masqué, dans {{ui:Paramètres}}. Voir [Paramètres de BimCraft](topic:settings).

:::mac mouse
Sur un pavé tactile, glissez à deux doigts pour tourner, maintenez {{key:Shift}} et glissez pour faire un panoramique, et pincez pour zoomer.
:::

:::touch
Faites glisser avec un doigt pour tourner. Pincez avec deux doigts pour zoomer ; déplacez-les ensemble pour faire un panoramique.
:::

## Ce qui est dessiné en 3D

| Dans le dessin | En 3D |
|---|---|
| Lignes, polylignes 3D | À leurs hauteurs réelles |
| Polylignes, cercles, arcs, ellipses | Dans leur plan propre, à leur altitude, inclinés lorsque le dessin les incline |
| Épaisseur sur les lignes, polylignes, cercles et arcs | Murs de cette hauteur ; les cercles sont fermés en haut et en bas |
| Faces 3D, maillages polyface, maillages de polygones | Surfaces ombrées avec leurs arêtes visibles |
| Blocs | Placés, tournés et mis à l'échelle en 3D, y compris les blocs imbriqués |
| Hachures | Leurs contours |
| Simples tracés 2D | À plat, là où ils ont été dessinés |

## Dans la vue 2D uniquement

Le texte, le texte multiligne et les attributs visibles des blocs sont dessinés en 3D, dans leur plan propre et à leur hauteur propre, et un clic dessus les sélectionne. Les polylignes larges affichent leur largeur sous forme de bande plate. Les repères multiples, images et motifs de hachures sont comptés sous **Dans la vue 2D uniquement** : voyez-les dans l'onglet {{ui:Modèle}} ou sur les feuilles.

## Pas encore dessiné

Les solides et surfaces enregistrés comme corps ACIS (solides 3D, corps, régions et surfaces) ainsi que les maillages de subdivision sont listés sous **Pas encore dessiné**, avec leur nombre. Ils sont ignorés, et non approximés.

## Erreurs fréquentes

- **Tout paraît plat.** Le dessin est en 2D : ses lignes n'ont pas de hauteur. Cliquez sur {{ui:Avant}} pour vérifier ; un dessin plat apparaît comme une ligne.
- **Un modèle plein n'affiche rien.** Les solides créés avec un modeleur de solides sont des corps ACIS, listés sous **Pas encore dessiné**. Exportez le modèle en IFC ou en faces 3D depuis le logiciel qui l'a créé.
- **Le dessin est un petit amas au centre.** Quelque chose de lointain dans l'espace objet, comme une ancienne copie d'un plan, agrandit l'étendue. Zoomez avec la molette à l'endroit que vous voulez examiner.

## Suite

- [Travailler avec les calques et les feuilles](topic:dwg-layers-sheets)
- [Couper un modèle IFC avec un plan de coupe](topic:section-plane)
