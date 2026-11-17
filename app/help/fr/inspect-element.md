---
title: Choisir un élément et lire ses propriétés
summary: Cliquez sur n'importe quel élément du modèle 3D pour le mettre en évidence et lire son nom, son type, son étiquette, son GlobalId, ses ensembles de propriétés et ses quantités.
keywords: propriétés, sélectionner, cliquer, élément, paramètres, ensembles de propriétés, pset, quantités, globalid, guid, type, inspecter
from: 43b80aa8
---

## Ce que vous allez faire

Sélectionner des éléments dans un modèle IFC et lire tout ce que le fichier en dit : attributs, ensembles de propriétés, propriétés de type et quantités.

## Étapes

1. Ouvrez un modèle IFC.
2. Cliquez sur un élément, par exemple une porte. Cliquez sans faire glisser : un glissement de plus de quelques pixels fait tourner la vue au lieu de sélectionner.
3. Regardez l'élément : il est surligné en bleu.
4. Regardez le panneau {{ui:Propriétés}} à droite. En haut figurent la nature de l'élément (comme « Porte » ou « WallStandardCase ») et son nom.
5. Lisez le premier bloc : **Nom**, **Type**, **Type d'objet**, **Étiquette**, **Description**, **GlobalId** et **Ligne**.
6. Faites défiler jusqu'aux ensembles de propriétés. Les trois premiers sont ouverts ; cliquez sur le nom de tout autre ensemble pour l'ouvrir.
7. Cliquez sur un autre élément pour passer à celui-ci.
8. Appuyez sur {{key:Esc}}, ou cliquez sur le fond vide, pour désélectionner.

## Ce que vous devez voir

- L'élément surligné et ses données à droite.
- Les ensembles de propriétés par ordre alphabétique. Les ensembles issus du **type** de l'élément portent la mention « (type) » après leur nom, et la note « Propriété de type : une modification ici s'applique à chaque élément de ce type. »
- Les ensembles de quantités (longueurs, surfaces et volumes) listés avec les autres ensembles. Les quantités sont en lecture seule.
- Les valeurs modifiables ressemblent à des boutons. [Modifier les propriétés IFC et enregistrer une copie modifiée](topic:edit-ifc-properties) montre comment faire.

[Champs du panneau Propriétés](topic:properties-panel) explique chaque champ.

## Accéder aux éléments masqués

1. Pour atteindre quelque chose à l'intérieur du bâtiment, décochez les niveaux situés au-dessus dans la liste {{ui:Niveaux}}.
2. Pour atteindre un mur derrière un volume de pièce, désactivez {{ui:Espaces}}.
3. Cliquez sur l'élément.

## Erreurs fréquentes

- **Un léger glissement pendant le clic.** BimCraft traite cela comme une rotation et ne sélectionne pas. Gardez la souris immobile.
- **Attendre des unités à côté des nombres.** Les valeurs sont affichées telles qu'elles sont stockées dans le fichier, arrondies à quatre décimales, sans symbole d'unité. Les longueurs d'un export métrique sont en général en millimètres ou en mètres ; vérifiez les réglages de l'exporteur.
- **Chercher un paramètre par son nom habituel.** Les exporteurs renomment et regroupent les paramètres dans des ensembles de propriétés IFC comme `Pset_WallCommon`. Parcourez chaque ensemble ; les paramètres personnalisés se trouvent souvent dans un ensemble portant le nom du logiciel d'export ou celui de votre entreprise.
- **Chercher une zone de recherche.** Cliquez pour sélectionner un élément ; {{key:Mod}}+clic ou {{key:Shift}}+clic en sélectionne d'autres, et {{key:Mod+A}} sélectionne tous les éléments affichés. La liste {{ui:Éléments}} à gauche ne compte les éléments que par nature ; elle n'est pas cliquable.
- **Sélectionner sur une carte de fichier de projet.** Une carte de fichier n'a pas d'éléments à sélectionner : « Les propriétés des éléments nécessitent le modèle 3D. Ouvrez un export IFC de ce fichier pour les voir. »
