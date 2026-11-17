---
title: Modéliser à partir d'un scan
summary: Un court parcours depuis un scan laser jusqu'aux murs : ouvrez le nuage de points à côté d'un nouveau bâtiment, alignez-le sur un niveau et tracez ses murs sur le plan.
keywords: scan, scan laser, nuage de points, tel que construit, bâtiment existant, relevé, tracer, scan vers BIM, modèle à partir d'un scan, tranche, aligner, équerre, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Ce que vous allez faire

Dessiner un bâtiment existant à partir de son scan laser : des murs là où le scan les montre, au bon niveau, d'équerre entre eux.

## Étapes

1. **Un bâtiment où dessiner.** {{ui:Fichier}} › {{ui:Nouveau bâtiment}}, avec autant de niveaux que le bâtiment en compte (vous pourrez en ajouter plus tard, voir [Le site, le bâtiment qui s'y trouve et ses niveaux](topic:site-building-and-levels)). {{ui:Dessin}} s'active.
2. **Le scan.** {{ui:Afficher}} › {{ui:Nuage de points}} et choisissez le fichier (LAS, LAZ, E57, PLY, PCD, PTX ou XYZ : voir [Afficher un nuage de points à côté du modèle](topic:point-clouds)). Le nuage s'affiche dans la vue 3D, et le plan montre sa **tranche** : les points scannés situés à 1200 mm (4 feet) au-dessus du niveau, sous forme de points. C'est la hauteur où les murs, portes et fenêtres se lisent le mieux.
3. **Alignez-le sur le niveau.** Ouvrez le menu {{ui:Scan}} de la barre de modèle et cliquez sur {{ui:Aligner son sol sur ce niveau}} : le nuage monte ou descend jusqu'à ce que le sol qu'il a scanné repose sur le niveau affiché. Vérifiez que la tranche coupe maintenant les murs.
4. **D'équerre avec le bâtiment.** {{ui:Scan}} › {{ui:Le mettre d'équerre avec le bâtiment}} fait pivoter le nuage pour que les murs de sa tranche suivent les axes du plan, de sorte que les murs dessinés avec {{key:Shift}} maintenu s'alignent sur le scan. Il pivote autour du centre des murs trouvés, afin que des arbres ou le mur d'un voisin capturés dans la tranche ne fassent pas dévier le scan. Alignez d'abord le sol : la tranche coupe alors les murs.
5. **Tracez les murs.** Choisissez {{ui:Mur}} et cliquez le long des points : l'outil s'accroche aux points scannés (le repère d'accrochage est un petit losange) ainsi qu'aux murs que vous avez dessinés. Un mur est dessiné sur son axe ; cliquez donc au milieu des deux rangées de points que laisse un mur. Saisissez son épaisseur en choisissant d'abord le type de mur. Ajoutez ensuite les portes et fenêtres là où la tranche montre les vides.
6. **Le niveau suivant.** Choisissez le niveau au-dessus dans la liste des niveaux du plan : la tranche suit la hauteur de coupe du niveau. Ne réalignez le sol sur ce niveau que si les sols du scan ne sont pas là où se trouvent vos niveaux.

## Ce que vous devez voir

- La tranche change quand vous changez de niveau, et une tranche plus épaisse ({{ui:Scan}} › {{ui:Épaisseur de la tranche}}) montre davantage de points là où un scan est clairsemé.
- {{ui:Scan}} › {{ui:Annuler l'alignement}} remet le nuage là où il était placé à l'ouverture. L'alignement ne déplace le nuage que dans la vue : il n'est pas enregistré dans le fichier IFC, et les murs que vous avez dessinés restent en place. L'alignement suit le nuage quand vous changez {{ui:Placer}} ou {{ui:Unités}}, ou quand vous ouvrez un autre modèle.
- {{ui:Scan}} › {{ui:Afficher la tranche sur le plan}} masque ou affiche les points.

:::tip
Grands scans : le plan dessine jusqu'à 60,000 points de la tranche et la vue 3D quelques millions de l'ensemble du nuage, choisis uniformément à travers le scan, afin qu'un gros fichier reste rapide. Pour tracer dans l'application de dessin, utilisez {{ui:Tracer dans CadCraft}} de la barre du nuage.
:::
