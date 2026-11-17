---
title: Copier, coller et dupliquer des éléments de bibliothèque
summary: Copiez un élément de bibliothèque placé et collez-le à l'endroit de votre choix, à la même position à côté de l'original, ou dans un autre modèle ; copiez les propriétés de tout autre élément sous forme de texte ; annuler et rétablir.
keywords: copier, coller, dupliquer, presse-papiers, coller à la même position, couper, supprimer, tout sélectionner, annuler, rétablir, menu Édition, plus, élément de bibliothèque, placement, répéter, réseau
from: 6ac15931
---

## Ce que vous allez faire

Placez d'autres copies d'un élément que vous avez déjà posé : une deuxième table de travail, une rangée de lavabos. Ce sujet concerne les **éléments de bibliothèque placés**, c'est-à-dire les éléments que BimCraft a écrits dans le modèle : l'un d'eux peut être collé dans n'importe quel modèle, même dans un autre onglet. Les murs, les portes et tous les autres éléments se copient, se coupent, se collent et se suppriment de la même façon dans leur propre modèle : voir [Supprimer, couper, copier et coller des éléments du bâtiment](topic:edit-elements).

Les commandes se trouvent dans la barre d'outils au-dessus du modèle : {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}} et {{ui:Plus}}, un menu contenant {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}} et {{ui:Désélectionner tout}}. Une commande qui ne peut pas agir pour le moment est grisée ; pointez-la pour lire la raison, ou cliquez dessus et la barre d'état indique le motif.

## Étapes

1. Ouvrez un modèle IFC contenant un élément de bibliothèque, ou placez-en un d'abord. Voir [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library).
2. Cliquez sur l'élément dans la vue 3D. Ses propriétés affichent une zone **Élément de bibliothèque**.
3. Cliquez sur {{ui:Copier}} ou appuyez sur {{key:Mod+C}}.
4. Cliquez sur {{ui:Coller}} ou appuyez sur {{key:Mod+V}}. La barre de placement s'ouvre et une boîte semi-transparente suit le pointeur, orientée comme l'original.
5. Appuyez sur {{key:R}} pour la tourner de 90°, sur {{key:Tab}} pour accrocher son dos à un mur, ou saisissez X et Y dans la barre de placement.
6. Cliquez à l'endroit où la copie doit aller. Chaque clic place une autre copie ; appuyez sur {{key:Esc}} pour arrêter.
7. Cliquez sur {{ui:Enregistrer au format IFC}} pour télécharger la copie modifiée du modèle.

## Coller à la même position

{{ui:Plus}}, {{ui:Coller à la même position}} ou {{key:Mod+Shift+V}} colle sans cliquer, aux mêmes X et Y et avec la même orientation :

- **Dans le même modèle, au même niveau** : deux éléments exactement au même endroit ne serviraient à rien, donc la copie est placée juste à côté de l'original, à la largeur d'un élément plus 100 mm le long de sa propre largeur. Refaites {{ui:Coller à la même position}} à partir de la nouvelle copie pour faire une rangée.
- **Vers un autre niveau ou dans un autre modèle** : mêmes X, Y et orientation exacts. BimCraft utilise le niveau portant le même nom ; s'il n'en existe pas, celui dont la hauteur est la plus proche. La barre d'état indique lequel.

## Dupliquer

{{ui:Plus}}, {{ui:Dupliquer}} ou {{key:Mod+D}} copie l'élément choisi et lance immédiatement son collage : une étape au lieu de deux.

## Dans un autre modèle ou un autre onglet

Ce que vous copiez est conservé dans ce navigateur : vous pouvez ouvrir un autre modèle IFC, ou BimCraft dans un autre onglet, et coller là-bas. L'autre modèle a besoin de l'élément de bibliothèque lui-même : BimCraft l'a lorsque l'élément a été placé, remplacé ou mis à jour dans cet onglet. Un élément placé lors d'une session précédente ne peut être recollé que dans son propre modèle ; dans un autre modèle, placez-le depuis l'onglet {{ui:Bibliothèque}}.

## Ce que vous devez voir

- La copie dans le modèle, sélectionnée, avec le même élément de bibliothèque, la même licence, les mêmes données d'équipement, la même quantité et la même note que l'original, et le **prochain numéro d'élément libre**. Modifiez le numéro dans Propriétés, sous `CadCraft_Placement`.
- « Placé : *élément* (élément *n*) » dans la liste des modifications. {{key:Mod+Z}} l'annule ; {{key:Mod+Y}} le rétablit.

## Bon à savoir

- Les copies partagent le type de l'original, donc elles utilisent toutes un même jeu de géométrie, comme le fait de placer deux fois le même élément.
- {{ui:Annuler}} et {{ui:Rétablir}} couvrent toutes les modifications : valeurs modifiées, placements, collages, remplacements et mises à jour. Rétablir remet un placement au même endroit ; une nouvelle modification efface ce qui pouvait être rétabli.
- Dans la vue 2D d'un dessin, il n'y a rien à sélectionner, donc rien à copier. Utilisez {{ui:Modifier dans CadCraft}} pour modifier le dessin, lorsqu'il s'affiche.

## Erreurs fréquentes

- **{{ui:Coller}} indique que les éléments viennent d'un autre modèle.** Le dernier élément copié était un élément du bâtiment, ou plusieurs éléments : ceux-ci ne se collent que dans leur propre modèle. Choisissez un seul élément de bibliothèque placé et copiez-le.
- **{{ui:Coller}} indique que la copie vient d'un autre modèle sans son élément de bibliothèque.** Placez une fois l'élément depuis l'onglet {{ui:Bibliothèque}} dans cet onglet, puis copiez et collez-le.
- **{{key:Mod+C}} copie du texte de la page à la place.** Du texte était sélectionné sur la page. Cliquez d'abord sur le modèle.

## Voir aussi

- [Touches et souris](topic:keyboard#edit)
- [Paramètres de BimCraft](topic:settings)
