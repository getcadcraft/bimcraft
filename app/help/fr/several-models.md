---
title: Voir plusieurs modèles IFC ensemble
summary: Ajoutez d'autres fichiers IFC à la scène, par exemple l'architecture, la structure et les réseaux, voyez-les dans les mêmes coordonnées, déplacez-en un, masquez-en un et choisissez celui que vous modifiez.
keywords: fédérer, fédération, modèle fédéré, plusieurs modèles, fichiers multiples, combiner, superposition, coordination, discipline, structure, mep, réseaux, décalage, déplacer le modèle, modèle actif, ajouter un modèle
from: df0efbbf
---

## Ce que vous allez faire

Voir les modèles des différentes disciplines au même endroit : le modèle de l'architecte avec les modèles de structure et de réseaux. Chacun reste un fichier distinct ; BimCraft se contente de les afficher ensemble.

## Étapes

1. Ouvrez le premier modèle IFC comme d'habitude.
2. Dans {{ui:Modèles}}, à gauche, cliquez sur {{ui:Ajouter un modèle…}} et choisissez un ou plusieurs fichiers IFC. Chacun apparaît dans la liste et dans la vue 3D.
3. Décochez un modèle pour le masquer ; cochez-le pour l'afficher à nouveau.
4. Si un modèle arrive au mauvais endroit (un autre point de levé), cliquez sur {{ui:Déplacer}} sous ce modèle, saisissez la distance de déplacement le long de X, Y et Z en mètres, puis cliquez sur {{ui:Appliquer}}.
5. Le modèle marqué d'un point est celui que vous modifiez. Cliquez sur le point d'un autre modèle pour le modifier.
6. Cliquez sur × à côté d'un modèle pour le retirer de la scène.

## Ouvrir les modèles de l'équipe

Lorsque le modèle ouvert est un fichier cloud d'un projet d'équipe, {{ui:Ouvrir les modèles de l'équipe}} apparaît sous la liste. Il ouvre à côté de celui-ci les autres modèles IFC du projet, chacun déplacé du décalage défini par le projet. Les modèles masqués pour vous restent à l'écart et sont comptés ; un modèle que le projet fait pivoter est ouvert sans rotation et compté aussi ; les fichiers non IFC (un DWG, par exemple) sont ignorés et nommés dans la ligne d'état. Un modèle déjà ouvert n'est jamais ouvert deux fois. Le bouton est masqué pour un fichier qui n'appartient pas à un projet d'équipe.

## Ce que vous devez voir

- Chaque modèle dans les coordonnées du premier modèle, telles que son fichier les place. Les modèles exportés depuis le même projet s'alignent sans rien déplacer.
- Sélectionner un élément d'un modèle que vous ne modifiez pas affiche ses propriétés en lecture seule, avec {{ui:Modifier ce modèle}} pour changer.
- {{ui:Arborescence du modèle}}, {{ui:Niveaux}}, {{ui:Couleur}}, la liste {{ui:Modifications}}, le placement d'éléments de bibliothèque et {{ui:Enregistrer au format IFC}} travaillent tous sur le modèle que vous modifiez. Masquer, isoler, la vue transparente et {{ui:Tout sélectionner}} fonctionnent sur tous les modèles.
- {{ui:Enregistrer au format IFC}} télécharge le modèle que vous modifiez, avec ses seules modifications.

## Erreurs fréquentes

- **Un modèle est loin ou manquant.** Son fichier utilise d'autres coordonnées. Utilisez {{ui:Ajuster}} pour le trouver, puis {{ui:Déplacer}} pour le mettre en place.
- **Supprimer ou Copier est grisé sur un élément sélectionné.** Il appartient à un autre modèle : passez d'abord à celui-ci.
- **Ouvrir un fichier avec Choisir un fichier a tout remplacé.** Cela crée une nouvelle scène. Utilisez {{ui:Ajouter un modèle…}} pour ajouter des fichiers à celle que vous avez.

## Suite

- [Masquer, isoler et rendre transparents des éléments](topic:hide-and-isolate)
- [Colorer des éléments selon une propriété](topic:color-by-property)
