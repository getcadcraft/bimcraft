---
title: Ouvrir un modèle IFC et se déplacer en 3D
summary: Ouvrez un fichier IFC, faites tourner, panoramiquez et zoomez, et utilisez Ajuster, Dessus, Avant et Côté pour vous repérer.
keywords: ifc, 3d, orbite, panoramique, zoom, ajuster, vue de dessus, vue de face, vue de côté, naviguer, viewcube, caméra
from: 68b460dd
---

## Ce que vous allez faire

Ouvrir un modèle IFC, tourner autour, panoramiquer, zoomer et atteindre les vues standard. Environ cinq minutes.

Vous avez besoin d'un fichier `.ifc`. La plupart des logiciels BIM en exportent un ; dans Revit, c'est **Fichier > Exporter > IFC**. Voir [Charger un fichier de projet en 3D via IFC](topic:rvt-to-ifc).

## Étapes

1. Cliquez sur {{ui:Choisir un fichier}} (ou sur la zone de dépôt en haut à gauche).
2. Choisissez votre fichier `.ifc` et confirmez.
3. Attendez que la barre d'état ait fini. Elle affiche « Démarrage du moteur IFC… » la première fois, puis « Lecture du modèle… » et « Construction de la géométrie : … sur … éléments ».
4. Regardez le modèle : il s'ouvre dans une vue aux trois quarts, ajusté à l'écran.
5. Cliquez sur {{ui:Dessus}} dans la barre d'outils au-dessus du modèle pour regarder verticalement vers le bas.
6. Cliquez sur {{ui:Avant}} pour voir la façade, puis sur {{ui:Côté}} pour voir de côté.
7. Cliquez sur {{ui:Ajuster}}, ou appuyez sur {{key:F}}, pour revenir à la vue aux trois quarts de l'ensemble du modèle.

## Ce que vous devez voir

- Le modèle au centre, avec de fines arêtes sombres pour un aspect de dessin.
- Le panneau {{ui:Fichier}} à gauche : le nom du fichier, sa taille, le schéma IFC (par exemple IFC2X3 ou IFC4), le nom du projet, la phase, le logiciel d'export, l'auteur, la date d'export, et les nombres d'éléments et de triangles.
- Les listes {{ui:Niveaux}} et {{ui:Éléments}} situées en dessous.
- La barre d'état : « Ouvert *nom du fichier* : *n* éléments en *s* s ».

## Se déplacer

:::mouse
| Pour | Faites ceci |
|---|---|
| Tourner autour | Glissez avec le bouton gauche |
| Panoramique | Glissez avec le bouton droit, ou maintenez {{key:Shift}} (ou {{key:Mod}}) et glissez avec le bouton gauche |
| Zoomer | Faites défiler la molette, ou glissez avec le bouton central |
| Tout voir | Appuyez sur {{key:F}} ou cliquez sur {{ui:Ajuster}} |
:::

:::mac mouse
Sur un pavé tactile : glissez avec un doigt appuyé pour tourner ; maintenez {{key:Shift}} ou {{key:Mod}} et glissez pour panoramiquer ; faites défiler avec deux doigts ou pincez pour zoomer. Un clic à deux doigts est un clic droit, et vous pouvez glisser avec lui pour panoramiquer, mais {{key:Shift}} et glisser est plus simple.
:::

:::touch
| Pour | Faites ceci |
|---|---|
| Tourner autour | Glissez avec un doigt |
| Zoomer | Pincez avec deux doigts |
| Panoramique | Déplacez deux doigts ensemble |
| Tout voir | Touchez {{ui:Ajuster}} |
:::

La rotation tourne toujours autour d'un point au milieu du modèle. Le panoramique déplace ce point ; après un long panoramique, la rotation peut sembler décentrée : cliquez sur {{ui:Ajuster}} pour la réinitialiser.

## Ombré, arêtes ou fil de fer

Trois petits boutons juste au-dessus du ViewCube choisissent le mode de dessin du modèle : {{ui:Ombré}}, {{ui:Ombré avec arêtes}} (par défaut) et {{ui:Fil de fer}}. Ce sont aussi des commandes (Vue dans les menus et la liste de personnalisation), elles peuvent donc avoir vos propres touches. {{ui:Plan}}, {{ui:Diviser}} et {{ui:3D}} se trouvent sur la ligne {{ui:Vue}} de la barre d'outils.

## Erreurs fréquentes

- **Attendre des vues nommées.** BimCraft dispose de quatre vues fixes ({{ui:Ajuster}}, {{ui:Dessus}}, {{ui:Avant}}, {{ui:Côté}}), du ViewCube dans le coin inférieur droit et d'une orbite libre. Il n'enregistre pas de vues.
- **Chercher des plans et des coupes.** Il n'y a pas de plans 2D ni de boîtes de coupe dans cette version. Coupez le modèle avec un seul plan de {{ui:Coupe}} ([Couper un modèle IFC avec un plan de coupe](topic:section-plane)), ou désactivez des niveaux : [Afficher et masquer niveaux, espaces et arêtes](topic:storeys-and-spaces).
- **Ouvrir un fichier de projet et attendre de la 3D.** Un fichier de projet s'ouvre comme une fiche de fichier. Exportez d'abord en IFC.
- **Ouvrir un `.ifczip`.** Décompressez-le, ou exportez un `.ifc` simple.
- **Un très grand modèle rend l'onglet lent ou le fait planter.** Voir [Navigateurs, appareils et mémoire](topic:platforms).

## Suite

[Sélectionner un élément et lire ses propriétés](topic:inspect-element).
