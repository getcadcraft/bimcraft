---
title: Tronçons de fabrication en tuyauterie acier et feuilles de tronçons
summary: Découpez un tronçon de tuyauterie acier à souder bout à bout en tronçons de fabrication, de longueur maximale choisie et aux soudures sur site que vous placez, numérotez-les, et téléchargez une feuille par tronçon de fabrication (vue 3D, longueurs de coupe, raccords, soudures, nomenclature des matériaux) en PDF et CSV ; les gaines reçoivent une liste de coupe de morceaux droits.
keywords: tronçon de fabrication, tronçons de fabrication, feuille de tronçon, isométrique, fabrication, préfabrication, soudure sur site, soudure en atelier, soudure bout à bout, longueur de coupe, liste de coupe, nomenclature des matériaux, bom, tuyau acier, schedule 40, numéro de ligne, liste de coupe des gaines, pièces de gainage
from: 539f51de
---

## Ce que vous allez faire

Transformez un tronçon de tuyauterie acier en pièces qu'un atelier soude et qu'un monteur pose : des tronçons de fabrication qui ne dépassent pas une longueur que vous choisissez, coupés aux soudures sur site que vous placez, chacun avec sa propre feuille.

Seule la **tuyauterie acier à souder bout à bout** est découpée en tronçons de fabrication (dimensions de tuyau ASME B36.10M, coudes à grand rayon ASME B16.9). Les joints du cuivre, du PVC et du PEX ne sont pas des soudures bout à bout : leurs tronçons n'ont donc pas de tronçons de fabrication.

## Découper un tronçon en tronçons de fabrication

1. Sélectionnez un tronçon de tuyau acier. Dans Propriétés, cochez **Découper en tronçons de fabrication**.
2. **Longueur maximale par tronçon de fabrication** : la plus grande longueur d'axe qu'un tronçon de fabrication peut avoir (6 m, environ 20 ft, par défaut).
3. **Numéro de ligne** : fait partie du numéro de chaque tronçon de fabrication. Un tronçon nouvellement découpé reçoit le prochain numéro libre de son système.

Les tronçons de fabrication sont numérotés le long du tronçon depuis son premier point : `CHW-12-S01`, `CHW-12-S02` … (le système, le numéro de ligne, le tronçon de fabrication). Un tronçon de fabrication s'allonge pièce par pièce ; la pièce qui le rendrait trop long commence le suivant, et une longueur droite plus longue qu'un tronçon de fabrication est coupée là où le tronçon de fabrication est plein.

## Placer les soudures sur site

1. Ouvrez {{ui:Build}} et choisissez {{ui:Soudure sur site}}.
2. Cliquez sur un tuyau découpé à l'endroit où va la soudure sur site. Dans une longueur droite, le tuyau est coupé à cet endroit ; dans un raccord ou une vanne, la soudure se déplace vers le joint le plus proche.

Les propriétés listent les soudures sur site du tronçon, chacune avec {{ui:Supprimer}}. Chaque modification correspond à une étape de {{ui:Annuler}}.

## Feuilles de tronçons

Dans les propriétés d'un tronçon découpé :

- {{ui:Feuilles de tronçons (PDF)}} : une page par tronçon de fabrication. À gauche, le tronçon de fabrication en vue isométrique à 30° : ses longueurs droites numérotées, les soudures en atelier en points, les soudures sur site marquées FW, et le nord du plan. À droite, le numéro, la dimension, la série et la longueur du tronçon de fabrication, puis ses **longueurs de coupe**, ses **raccords**, ses **soudures** (une soudure bout à bout en atelier à chaque joint à l'intérieur du tronçon de fabrication, une soudure sur site là où il rejoint le suivant) et sa **nomenclature des matériaux**, avec la masse du tuyau (masse ASME B36.10M, extrémités lisses).
- {{ui:Liste de tronçons (CSV)}} : la même chose, un bloc par tronçon de fabrication.

:::note
Les longueurs de coupe sont bout à bout tels que dessinés : aucun jeu de racine ni marge de soudure n'est déduit. Les coudes sont à grand rayon B16.9 ; les tés, réductions et vannes sont génériques, dimensionnés d'après le tuyau et non d'après B16.9 ou un fabricant, et la feuille l'indique. Les masses des raccords ne sont pas données. Une aide au dessin et à la coordination, à faire dimensionner par un ingénieur.
:::

## Dans le fichier IFC

Chaque partie d'un tronçon découpé porte **CadCraft_Spool** avec son SpoolId, le tronçon, le numéro du tronçon de fabrication dans le tronçon, et l'endroit où il commence et finit le long du tronçon. Le tronçon conserve ses règles (longueur maximale, soudures sur site, numéro de ligne) dans son propre ensemble, de sorte que les tronçons de fabrication sont retrouvés à l'identique à la réouverture du fichier.

## Gaines : une liste de coupe

Ouvrez {{ui:Build}} et cliquez sur {{ui:Liste de coupe des gaines}} : un CSV des morceaux droits de gaine par système, forme et dimension, chaque longueur droite étant découpée en morceaux de la **Longueur de morceau** de la barre Gaine (1500 mm, environ 5 ft, par défaut), plus le reste. Longueurs seulement : ni coutures, ni épaisseurs de tôle, ni raccords.
