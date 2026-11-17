---
title: Le site, le bâtiment et ses niveaux
summary: Tracez le contour du site, placez et tournez le bâtiment sur le site, ajoutez des niveaux à des hauteurs données ou répartissez la hauteur du bâtiment, puis dessinez sur le niveau de votre choix.
keywords: site, plan de site, ligne d'implantation, recul, servitude, droit de passage, limite de propriété, lot, parcelle, limite, implantation, placement du bâtiment, faire pivoter le bâtiment, placer le bâtiment, niveaux, étages, planchers, ajouter des niveaux, répartir la hauteur, hauteur d'étage à étage, IfcSite, IfcBuilding, IfcBuildingStorey, structure spatiale
from: 48d10c1e
---

## Ce que vous allez faire

Mettre en place les parties d'un modèle IFC qui portent tout le reste : le site, le bâtiment sur celui-ci et les niveaux du bâtiment.

Un modèle est organisé en un **site** qui contient un **bâtiment**, lequel contient ses **niveaux** (étages) ; les murs, les planchers et tout le reste appartiennent à un niveau. {{ui:Fichier}} › {{ui:Nouveau bâtiment}} met en place les trois. Un modèle issu d'un autre logiciel qui comporte un bâtiment mais pas de site reçoit un site la première fois que vous en dessinez un : le bâtiment y est placé là où il se trouvait déjà.

## Tracer le site

1. Activez {{ui:Dessin}}, puis choisissez {{ui:Build}} › {{ui:Site}}.
2. Cliquez sur les angles du site (l'outil s'accroche comme l'outil Mur). Cliquez à nouveau sur le premier angle, double-cliquez ou appuyez sur {{key:Enter}} pour terminer. {{key:Backspace}} retire un angle.
3. La ligne affiche la surface du site. Redessinez-le pour le modifier.

Le plan de chaque niveau affiche le contour du site comme une limite de propriété.

## Placer le bâtiment sur le site

Avec {{ui:Site}} activé, saisissez les **X** et **Y** du bâtiment sur le site et sa **rotation** en degrés, ou cliquez sur {{ui:Placer le bâtiment par un clic}} puis cliquez à l'endroit où doit aller l'origine du bâtiment. Tout ce qui se trouve dans le bâtiment (niveaux, murs, trames, tout ce que vous avez dessiné) se déplace avec lui ; le site et son contour restent en place. Les plans continuent d'afficher chaque niveau d'équerre avec le bâtiment.

## Lignes d'implantation et servitudes

Les lignes d'implantation et les servitudes (droits de passage) sont dessinées sur le site comme des contraintes. Elles **avertissent, elles ne bloquent jamais** : un mur qui en empiète est dessiné comme vous l'avez demandé, et un avertissement nommant le mur et la ligne ou la servitude apparaît dans Problèmes. Déplacez le mur en arrière et l'avertissement disparaît. Un avertissement peut être accepté avec un motif (une dérogation accordée par l'autorité, par exemple).

- **Ligne d'implantation à partir des reculs.** {{ui:Build}} › {{ui:Ligne d'implantation}}, puis {{ui:Reculs}} : saisissez la distance de retrait de la ligne par rapport à chaque limite du site. Les limites sont numérotées sur le plan pendant que l'outil est actif. La ligne est calculée à partir de ces distances et suit le contour du site si vous le redessinez avec autant de limites. Les distances sont les vôtres, tirées de votre titre de propriété ou de votre plan d'urbanisme ; BimCraft n'en renseigne aucune.
- **Une ligne d'implantation dessinée.** Avec {{ui:Ligne d'implantation}} activé, cliquez sur ses points et terminez par un double-clic ou {{key:Enter}}. Terminez sur le premier point pour une ligne fermée : la surface à l'intérieur est celle où l'on peut construire, et un mur qui en déborde reçoit un avertissement. Une ligne ouverte n'avertit que pour un mur qui la croise.
- **Une servitude.** {{ui:Build}} › {{ui:Servitude}} : choisissez sa nature, saisissez son nom, sa référence enregistrée et sa largeur, puis cliquez sur son axe et terminez (une bande), ou fermez-la sur son premier point (une surface). Un mur qui en touche une partie reçoit un avertissement, à chaque niveau.
- Une face exactement sur une ligne est en contact, et non en croisement (la tolérance est de 1 mm).
- L'option de volumétrie en cours de chaque ensemble d'options est vérifiée comme les murs : un volume hors de la limite, au-dessus d'une ligne d'implantation ou sur une servitude reçoit un avertissement. Voir [Options de volumétrie côte à côte](topic:massing-options).
- Sélectionnez-en une avec {{ui:Sélectionner}} pour modifier son nom, sa référence, sa nature ou sa largeur, la déplacer ou la supprimer.

Elles sont dessinées sur le plan de chaque niveau, sur les feuilles et dans le PDF du plan : lignes d'implantation en tirets, servitudes en pointillés, chacune avec son libellé. Dans le fichier IFC, chacune est une annotation (IfcAnnotation, type BuildingLine ou Servitude) sur le site, avec sa ligne sous forme de courbe simple que d'autres logiciels peuvent lire. La vérification utilise le contour réel de chaque mur sur le plan, avec ses jonctions telles que dessinées ; un mur courbe est vérifié selon sa propre épaisseur autour de son axe.

## Ajouter des niveaux

Dans le panneau {{ui:Niveaux}}, {{ui:Ajouter un niveau au-dessus}} en ajoute un, et {{ui:Ajouter un niveau en dessous}} en ajoute un sous le plus bas (un sous-sol, à une altitude négative). {{ui:Ajouter des niveaux…}} en ajoute plusieurs à la fois :

- **À ces hauteurs** : saisissez les hauteurs au-dessus du niveau le plus bas, séparées par des virgules (par exemple `12', 24', 36'`). Les hauteurs où un niveau existe déjà sont ignorées.
- **Répartir la hauteur du bâtiment** : saisissez la hauteur du bâtiment et le nombre de niveaux. Les niveaux existants passent à leurs nouvelles hauteurs, du plus bas vers le haut ; les niveaux manquants sont ajoutés, et ceux qui se trouvent au-dessus restent en place.

Les murs qui montent jusqu'au niveau supérieur le suivent, de même que les poteaux et les rampes.

{{ui:Copier ce niveau…}} (même panneau) copie ce qui est dessiné sur le niveau que vous regardez vers un autre niveau ou vers un nouveau niveau au-dessus, afin qu'un plan d'étage puisse monter dans le bâtiment en une seule étape. Voir [Dessiner des murs](topic:draw-walls).

## Dessiner sur un niveau

Chaque outil de {{ui:Dessin}} travaille sur le niveau choisi dans la liste des niveaux du plan (ou sélectionné dans le panneau {{ui:Niveaux}}) : ce que vous dessinez appartient à ce niveau.

## Ce que vous devez voir

- Chacune de ces modifications constitue une étape : {{key:Mod+Z}} l'annule.
- Dans le fichier IFC : le site (IfcSite) avec son contour et sa surface, le bâtiment (IfcBuilding) placé dessus, et les niveaux (IfcBuildingStorey) du bâtiment.

Voir aussi [Coordonnées dans BimCraft](topic:coordinates) pour l'origine du projet et le point de levé.
