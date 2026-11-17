---
title: Afficher un dessin DWG ou DXF
summary: Ouvrez un DWG ou un DXF, déplacez-vous dans l'espace objet et les feuilles, lisez les coordonnées et voyez ce qui n'est pas encore dessiné.
keywords: blocs dynamiques, états de visibilité, dwg, dxf, cao, dessin, 2d, vue, visionneuse, panoramique, zoom, espace objet, espace papier, présentation, coordonnées, ouvrir dwg
from: 4db3122a
---

## Ce que vous allez faire

Ouvrir un dessin CAO, le voir en 3D ou en 2D, vous déplacer dedans, passer de l'espace objet à ses feuilles et lire les coordonnées. BimCraft affiche les dessins DWG et DXF ; il ne les modifie pas et ne les enregistre pas. Pour en changer un, cliquez sur {{ui:Modifier dans CadCraft}} : le dessin s'ouvre dans l'application de dessin CadCraft, dans un nouvel onglet.

## Étapes

1. Cliquez sur {{ui:Choisir un fichier}}, ou déposez le dessin sur la page.
2. Choisissez un fichier `.dwg` ou `.dxf`.
3. Attendez que la ligne d'état affiche « Lecture du dessin… ». Les grands dessins prennent quelques secondes. Elle indique ensuite la durée de la lecture, « rendu… » pendant que la première image est dessinée, puis la durée de ce rendu.
4. Le dessin s'ouvre en 3D, le moyen le plus rapide d'afficher un grand dessin (voir [Voir un dessin DWG ou DXF en 3D](topic:dwg-in-3d)). Cliquez sur {{ui:Modèle}} pour la vue 2D à plat. Pour ouvrir toujours les dessins en 2D, réglez {{ui:Paramètres}} › {{ui:BimCraft}} › **Les dessins s'ouvrent en** sur « {{ui:Objet (2D)}} ». Un dessin sans rien dans l'espace objet, ou un navigateur qui ne peut pas afficher la 3D, s'ouvre en 2D.
5. Regardez les onglets au-dessus du dessin : {{ui:Modèle}} d'abord, puis un onglet par feuille, dans l'ordre du dessin.
6. Cliquez sur un onglet de feuille pour voir cette feuille : le papier, avec le modèle affiché à travers ses fenêtres de présentation.
7. Cliquez sur {{ui:Modèle}} pour revenir à l'espace objet.
8. Placez le pointeur sur le dessin et lisez les coordonnées X et Y dans le coin.

## Ce que vous devez voir

- Le dessin, ajusté à la fenêtre. Les couleurs suivent le dessin ; les lignes blanches (couleur 7) sont dessinées avec la couleur d'encre du thème, et les couleurs pâles sont assombries sur le thème clair pour rester lisibles.
- Le panneau {{ui:Dessin}} à gauche : fichier, taille, format (par exemple « AutoCAD 2018 (AC1032) »), unités, nombre d'entités et de calques, nombre de feuilles, et les dessins liés et équipements lorsqu'il y en a.
- La liste {{ui:Calques}} à gauche.
- À droite : comment se déplacer, les dessins et images liés, et **Pas encore dessiné**.

## Se déplacer

:::mouse
| Pour | Faites ceci |
|---|---|
| Panoramique | Faites glisser avec n'importe quel bouton de la souris |
| Zoom | Faites défiler la molette ; le point sous le pointeur reste en place |
| Ajuster | Double-cliquez, appuyez sur {{key:F}}, ou cliquez sur {{ui:Ajuster}} |
:::

:::mac mouse
Sur un pavé tactile, le défilement à deux doigts **zoome**, il ne fait pas de panoramique. Le pincement zoome aussi. Pour faire un panoramique, cliquez et faites glisser.
:::

:::touch
Faites glisser avec un doigt pour faire un panoramique. Le zoom par pincement n'est pas encore disponible pour les dessins : touchez {{ui:Ajuster}} pour voir la feuille entière, et utilisez une souris ou un pavé tactile pour zoomer.
:::

## Blocs dynamiques

Un bloc dynamique est dessiné comme le dessin le montre : chaque bloc placé dans l'état de visibilité enregistré avec le dessin (« Plan » ou « Façade », « Vasque simple » ou « Double vasque »). À droite, **Blocs dynamiques** liste chaque bloc placé dans l'espace objet : combien sont placés, les états qu'ils affichent et tous les états du bloc. Dans {{ui:3D}}, cliquez sur un bloc placé pour voir **Bloc dynamique**, **État affiché** et **Autres états** dans {{ui:Propriétés}}. BimCraft ne change pas d'état.

## Pas encore dessiné

Certains types d'objets ne sont pas dessinés dans cette version. Ils sont comptés sous **Pas encore dessiné** à droite (« Ces parties du dessin sont ignorées pour le moment, sans être devinées. »), pour que vous sachiez qu'il manque quelque chose. Les lignes, polylignes, arcs, cercles, ellipses, splines, hachures et remplissages pleins, textes et textes multilignes, blocs avec attributs, cotes, lignes de repère et lignes de repère multiples, tableaux, images et fenêtres de présentation sont dessinés. Les faces 3D, les maillages polyface et les maillages de polygones sont dessinés par leurs arêtes vues d'en haut ; passez en {{ui:3D}} pour les voir comme des surfaces.

Un DXF binaire ne s'ouvre pas : BimCraft le signale. Enregistrez-le à nouveau en DXF ASCII, ou en DWG, depuis le programme qui l'a créé.

## Erreurs fréquentes

- **Le dessin paraît vide.** Certains calques peuvent être désactivés ou gelés dans le dessin lui-même ; ils sont décochés au départ dans {{ui:Calques}}. Cliquez sur {{ui:Tout activer}}. Si la ligne d'état affiche « *nom* est un dessin vide : il ne contient ni lignes, ni texte, ni blocs. », il n'y a rien dedans.
- **Une feuille affiche un cadre vide.** La feuille dépend peut-être de dessins liés. Voir [Trouver les dessins liés et les images](topic:dwg-linked-files).
- **Le texte paraît un peu différent.** BimCraft dessine le texte dans une police sans empattement étroite, et non dans les polices du dessin ; le texte peut donc être un peu plus large ou plus étroit que dans le programme qui l'a créé.
- **« *nom* n'a pas pu être lu. Il est peut-être endommagé, ou enregistré dans un format que le lecteur ne gère pas encore. »** Le crochet à la fin indique le code de format du fichier. Enregistrez-le depuis le programme qui l'a créé en DWG plus ancien ou en DXF, puis réessayez.
- **Vous voulez mesurer, dessiner ou modifier.** BimCraft ne fait que visualiser les dessins. Cliquez sur {{ui:Modifier dans CadCraft}} pour ouvrir le même fichier dans l'application de dessin CadCraft, qui le modifie et enregistre une copie en DWG ou DXF. Votre fichier d'origine n'est pas modifié, et les dessins liés restent dans BimCraft. Le bouton n'apparaît que là où CadCraft vous est ouvert.

## Suite

- [Voir un dessin DWG ou DXF en 3D](topic:dwg-in-3d)
- [Travailler avec les calques et les feuilles](topic:dwg-layers-sheets)
- [Vérifier un dessin en mode impression](topic:print-view)
