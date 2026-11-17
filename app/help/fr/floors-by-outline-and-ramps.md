---
title: Planchers de forme quelconque, ouvertures et rampes
summary: Dessinez un plancher ou une dalle par son contour (un balcon, un porte-à-faux, un palier), percez-y des ouvertures et dessinez des rampes avec leurs paliers.
keywords: plancher, dalle, contour, balcon, porte-à-faux, palier, terrasse, ouverture de plancher, trou, gaine, vide, rampe, pente, rampe accessible, rampe pour fauteuil roulant, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ce que vous allez faire

Créer des planchers qui ne suivent pas les pièces, comme un balcon au-delà des murs, et dessiner des rampes entre les niveaux.

## Dessiner un plancher par son contour

1. Activez {{ui:Dessin}}, choisissez le niveau, puis {{ui:Build}} › {{ui:Plancher par contour}}.
2. Dans la ligne sous les outils, choisissez la nature (dalle béton ou plancher bois), son usage (plancher ou palier), son épaisseur et la hauteur de sa face supérieure au-dessus du niveau (0 = au niveau du sol de l'étage ; une valeur négative le place plus bas).
3. Cliquez sur les angles. L'outil s'accroche aux murs, aux lignes de trame et à leurs croisements ; maintenez {{key:Shift}} pour garder un bord d'équerre. La longueur de chaque côté et la surface s'affichent au fur et à mesure. {{key:Backspace}} annule le dernier angle.
4. Cliquez de nouveau sur le premier angle, double-cliquez ou appuyez sur {{key:Enter}} pour terminer.

## Percer une ouverture

Cliquez sur le plancher (dans la vue 3D, ou sur son contour dans le plan), puis dans {{ui:Propriétés}} cliquez sur {{ui:Ajouter une ouverture}} et cliquez sur les angles de l'ouverture à l'intérieur du plancher, en terminant comme ci-dessus. Les propriétés du plancher listent ses ouvertures, chacune avec {{ui:Supprimer}}, ainsi que sa surface sans elles.

## Dessiner une rampe

1. Choisissez {{ui:Build}} › {{ui:Rampe}}. Réglez sa largeur, et si elle va **jusqu'au niveau supérieur** ou **sur un dénivelé** que vous saisissez.
2. Choisissez son mode : **par pente** (1:12 au départ ; la rampe a la longueur que le dénivelé exige) ou **par longueur** (votre second clic fixe la longueur, et la pente suit).
3. Cliquez sur le pied de la rampe (le milieu de son bord inférieur), puis cliquez dans le sens de la montée. L'aperçu affiche sa longueur, ses volées et sa pente.

Un dénivelé de plus de 30 in (760 mm) est découpé en volées séparées par un palier de 5 ft (1525 mm). Ce sont des valeurs de planification courantes, et non les exigences de votre réglementation : vérifiez les règles en vigueur là où vous construisez. Une rampe plus raide que 1:12 est signalée dans ses **Propriétés**.

## Ce que vous devez voir

- Chaque plancher, ouverture et rampe constitue une seule étape : {{key:Mod+Z}} l'annule.
- Sur le plan, le contour d'un plancher dessiné (une ouverture est tracée barrée), et pour une rampe son contour, ses volées, ses paliers et une flèche de montée avec sa pente.
- Les **Propriétés** d'un plancher dessiné (nature, usage, épaisseur, face supérieure, surface, ouvertures) et d'une rampe (largeur, face supérieure, dénivelé, pente ou longueur) ; {{key:Delete}} supprime l'un ou l'autre.
- Une rampe menant au niveau supérieur suit ce niveau lorsque sa hauteur change.
- Dans le fichier IFC : un plancher dessiné est une dalle (IfcSlab, plancher ou palier) dont les ouvertures sont découpées (IfcOpeningElement) ; une rampe est un IfcRamp composé de volées inclinées (IfcRampFlight) et de dalles de palier, avec sa pente et sa largeur.

:::note
Les planchers dessinés ainsi restent là où vous les avez tracés. Les planchers créés avec {{ui:Plancher}} suivent les pièces lorsque les murs bougent : voir [Pièces, planchers, plafonds et toitures](topic:floors-and-roofs).
:::
