---
title: Afficher et masquer les niveaux, les espaces et les arêtes
summary: Désactivez des niveaux pour voir l'intérieur d'un bâtiment, affichez les pièces et les espaces, et activez ou désactivez les lignes d'arêtes.
keywords: niveaux, étages, planchers, masquer, isoler, pièces, espaces, ifcspace, arêtes, visibilité, coupe
from: b838dcc0
---

## Ce que vous allez faire

Regardez à l'intérieur d'un modèle IFC en désactivant les niveaux situés au-dessus de celui qui vous intéresse, puis affichez les pièces et les espaces, et désactivez les lignes d'arêtes pour un rendu plus net.

## Étapes : observer un étage

1. Ouvrez un modèle IFC. Voir [Ouvrir un modèle IFC et le parcourir en 3D](topic:open-ifc-model).
2. Repérez la liste {{ui:Niveaux}} à gauche. Le niveau le plus haut vient en premier, comme on lit une coupe de la toiture vers le bas.
3. Décochez la toiture et tous les niveaux au-dessus de l'étage souhaité.
4. Cliquez sur {{ui:Dessus}} pour regarder cet étage depuis le dessus.
5. Recochez les niveaux pour les rétablir.

## Ce que vous devez voir

Chaque niveau décoché disparaît aussitôt, avec tout ce qu'il contient. La liste n'affiche que les niveaux qui comportent quelque chose de visible. Les éléments non affectés à un niveau sont regroupés en bas, sous **Hors niveau** ; les éléments de site et une partie du mobilier s'y retrouvent souvent.

## Étapes : afficher les pièces et les espaces

1. Cliquez sur {{ui:Espaces}} dans la barre d'outils au-dessus du modèle. Le bouton reste enfoncé.
2. Regardez le modèle : les pièces et les espaces apparaissent en volumes pâles et translucides.
3. Cliquez sur un espace pour lire ses propriétés, comme son nom, son numéro et sa surface, à droite.
4. Cliquez de nouveau sur {{ui:Espaces}} pour les masquer.

Les espaces sont masqués à l'ouverture d'un modèle, car ils recouvriraient sinon les murs et les planchers.

## Étapes : les arêtes

1. Cliquez sur {{ui:Arêtes}} pour désactiver les fines lignes d'arêtes.
2. Cliquez à nouveau dessus pour les réactiver.

Sur les très grands modèles (plus de 1.5 million de triangles), le bouton est grisé, avec l'info-bulle « Les arêtes sont désactivées pour les très grands modèles ». Cela économise la mémoire.

## Erreurs courantes

- **Décocher un niveau et voir encore des parties de celui-ci.** Un élément appartient au niveau que le logiciel d'export lui a affecté. Un mur haut ou un escalier n'appartient souvent qu'à son niveau de base ; il reste donc visible lorsque le niveau au-dessus est masqué, ou disparaît avec le niveau du dessous.
- **Masquer des niveaux pour voir l'intérieur.** Une boîte de coupe est souvent plus rapide : voir [Couper un modèle IFC avec un plan de coupe](topic:section-plane#a-section-box). Vous pouvez aussi décocher les lignes de l'{{ui:Arborescence du modèle}} (voir [Se repérer avec l'arborescence du modèle](topic:model-tree)).
- **Cliquer sur un espace à travers un mur.** Le clic sélectionne la surface visible la plus proche. Masquez le niveau au-dessus, ou passez à {{ui:Dessus}}, puis cliquez.
- **Les noms de niveaux semblent étranges.** BimCraft affiche les noms de niveaux enregistrés dans le fichier. S'ils indiquent « Level 1 » ou un numéro, c'est ce qu'a écrit l'exporteur.
