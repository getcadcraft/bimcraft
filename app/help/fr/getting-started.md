---
title: Premiers pas avec BimCraft
summary: Ce que BimCraft fait aujourd'hui, comment ouvrir votre premier modèle, le regarder en 3D, modifier une valeur et enregistrer une copie.
keywords: démarrage, première utilisation, ouvrir, ifc, rvt, dwg, prise en main, introduction, visionneuse, bim
from: fc2dea19
---

BimCraft est l'application de modèle de bâtiment de la famille CadCraft. Dans cette version, elle **ouvre, lit et inspecte** des fichiers de bâtiment, et elle **modifie les données des modèles IFC**. Elle ne dessine pas encore de nouveaux éléments et ne les modélise pas non plus. Voyez-la comme une visionneuse et un outil de contrôle de modèle, qui vous permet aussi de corriger les noms, les repères et les valeurs de propriétés d'un fichier IFC.

Ce qu'elle ouvre :

| Fichier | Ce que vous obtenez |
|---|---|
| IFC (`.ifc`) | Le modèle complet en 3D : orbite, niveaux, propriétés des éléments, et modification des noms et des valeurs de propriétés |
| Fichiers de projet et de famille (`.rvt`, `.rfa`, `.rte`, `.rft`) | Une fiche de fichier : la version dans laquelle il a été enregistré, les informations du projet, l'image d'aperçu et les fichiers liés. Pas de 3D. |
| DWG et DXF | Le dessin en 2D : espace objet et chaque feuille, calques, dessins liés, vue d'impression, et une nomenclature d'équipements pour les dessins de restauration étiquetés |
| Un dossier de projet | Un rapport sur chaque modèle du dossier : sauvegardes, liens, copies endommagées, et une suggestion du fichier par lequel commencer |

Tout se passe dans votre navigateur, sur votre ordinateur. **Rien n'est téléversé.** Consultez [Les fichiers que BimCraft ouvre et enregistre](topic:files) pour les détails.

## Ouvrir BimCraft

1. Ouvrez BimCraft dans un navigateur récent. Chrome, Edge, Firefox et Safari fonctionnent tous ; [Navigateurs, appareils et mémoire](topic:platforms) en liste les différences.
2. Attendez l'écran vide qui indique « Ouvrez un modèle de bâtiment. »

:::note
BimCraft s'exécute dans le navigateur, et sur le bureau dans CadCraft Studio, avec les autres applications. L'enregistrement dans le cloud n'est pas encore disponible : vous ouvrez des fichiers depuis votre ordinateur et vous y enregistrez des copies.
:::

## Ouvrir votre premier modèle

Le moyen le plus rapide de voir ce que fait BimCraft est d'ouvrir un fichier IFC.

1. Cliquez sur {{ui:Choisir un fichier}} au milieu de l'écran.
2. Choisissez un fichier `.ifc` dans {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et confirmez.
3. Patientez pendant que la ligne d'état en bas de l'écran affiche « Démarrage du moteur IFC… », puis « Construction de la géométrie ».

Vous devriez voir le modèle en 3D au milieu, un panneau {{ui:Fichier}} et une liste {{ui:Niveaux}} à gauche, et un panneau {{ui:Propriétés}} vide à droite. La ligne d'état se termine par « Ouvert » et le nombre d'éléments.

:::tip
Vous pouvez aussi faire glisser un fichier depuis {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} directement sur la page. L'écran affiche « Déposer pour ouvrir » pendant que vous le faites glisser.
:::

:::offline
Le moteur IFC se charge depuis le site la première fois que vous ouvrez un modèle IFC, sauf si BimCraft a été enregistré pour une utilisation hors ligne. Les dessins DWG et DXF, les fichiers de projet et les dossiers n'ont besoin de rien d'autre : leurs lecteurs font partie de l'application. Si le bouton de la barre de l'application indique {{ui:Prêt hors ligne}}, tout s'ouvre hors ligne. Sinon, les modèles IFC ne s'ouvriront pas avant que vous soyez de nouveau connecté, sauf si l'un d'eux a déjà été ouvert dans cet onglet. Consultez [En ligne et hors ligne](topic:online-offline).
:::

:::online
Vous partez dans un endroit sans connexion ? Cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application et attendez {{ui:Prêt hors ligne}}. La copie enregistrée (environ 11 Mo) comprend le moteur IFC. Consultez [Travailler hors ligne](common:offline).
:::

## Regarder autour de soi

:::mouse
1. Faites glisser avec le bouton gauche de la souris pour tourner autour du modèle.
2. Faites défiler la molette pour zoomer.
3. Faites glisser avec le bouton droit de la souris pour un panoramique. Sur un pavé tactile de Mac, maintenez {{key:Shift}} et faites glisser à la place.
4. Appuyez sur {{key:F}} ou cliquez sur {{ui:Ajuster}} pour revoir tout le modèle.
:::

:::touch
1. Faites glisser avec un doigt pour tourner.
2. Pincez avec deux doigts pour zoomer, et déplacez deux doigts ensemble pour un panoramique.
3. Touchez {{ui:Ajuster}} pour revoir tout le modèle.
:::

## Faire une vraie modification : corriger un repère

1. Cliquez sur un mur, une porte ou n'importe quel élément du modèle. Il devient bleu et ses propriétés apparaissent à droite.
2. Dans le panneau {{ui:Propriétés}}, cliquez sur la valeur à côté de **Tag**.
3. Saisissez le nouveau repère et appuyez sur {{key:Enter}}.
4. Regardez la section {{ui:Modifications}} qui s'est ouverte à gauche : votre modification y figure avec l'ancienne et la nouvelle valeur.

## Enregistrer une copie

1. Cliquez sur {{ui:Enregistrer au format IFC}} dans la section {{ui:Modifications}}, ou appuyez sur {{key:Mod+S}}.
2. Retrouvez le nouveau fichier dans votre dossier de téléchargements. Il porte le nom de l'original auquel s'ajoute « (edited) », par exemple `Clinic (edited).ifc`.

Votre fichier d'origine n'est jamais modifié. [Modifier des propriétés IFC et enregistrer une copie modifiée](topic:edit-ifc-properties) explique en détail la modification.

## Pour aller plus loin

- [L'écran de BimCraft](topic:workspace) : chaque panneau, par son nom.
- [Vous venez d'autres programmes de BIM et de dessin](topic:coming-from) : ce qui change si vous avez l'habitude de Revit.
- [Ouvrir un dossier de projet entier](topic:open-project-folder) : indiquez un dossier de projet à BimCraft et laissez-le trier les fichiers.
- [Afficher un dessin DWG ou DXF](topic:view-dwg) : feuilles, calques et vue d'impression.
