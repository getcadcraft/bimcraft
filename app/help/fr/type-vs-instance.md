---
title: Modifier une propriété de type pour chaque élément d'un type
summary: Distinguer les propriétés de type des propriétés d'occurrence, modifier une valeur sur le type pour que chaque élément la suive, et vérifier que la modification propre à un élément reste la sienne.
keywords: type, occurrence, propriétés de type, type de famille, partagé, copie à l'écriture, tous les éléments, modification en masse, fabricant, modèle
from: bffd8789
---

## Ce que vous allez faire

Définir le fabricant d'un type de porte pour que chaque porte de ce type l'affiche, puis donner à une seule porte sa propre résistance au feu sans toucher aux autres. Cela montre la différence entre propriétés de type et propriétés d'occurrence dans BimCraft.

## Type ou occurrence ?

- Une propriété d'**occurrence** appartient à un seul élément : son repère, sa marque, sa pièce, sa propre résistance au feu.
- Une propriété de **type** appartient au type que partagent de nombreux éléments : fabricant, modèle, largeur d'un type de porte.

Dans le panneau {{ui:Properties}}, les ensembles issus du type portent « (type) » après leur nom, et la ligne « Propriété de type : une modification ici s'applique à chaque élément de ce type. ». Tous les autres ensembles appartiennent à l'élément lui-même. **Type** dans le premier bloc indique le nom du type.

## Étapes : modifier le type

1. Ouvrez un modèle IFC et cliquez sur une porte.
2. Notez son **Type** dans le premier bloc du panneau {{ui:Properties}}, par exemple « Single-Flush 900 x 2100 ».
3. Faites défiler jusqu'à un ensemble dont le nom se termine par « (type) ».
4. Cliquez sur la valeur à modifier, par exemple **Manufacturer**.
5. Saisissez la nouvelle valeur et appuyez sur {{key:Enter}}.
6. Regardez la liste {{ui:Changes}} : l'entrée se termine par « (type) ».
7. Cliquez sur une autre porte du même type.
8. Vérifiez la même valeur : elle affiche aussi la nouvelle valeur.

## Étapes : modifier un seul élément

1. Cliquez sur une porte.
2. Ouvrez un ensemble dont le nom ne contient pas « (type) », par exemple `Pset_DoorCommon`.
3. Cliquez sur une valeur, comme **FireRating**, saisissez une nouvelle valeur et appuyez sur {{key:Enter}}.
4. Cliquez sur la porte voisine, du même type.
5. Vérifiez la même valeur : elle affiche toujours l'ancienne valeur.

Même si l'exporteur a partagé cet ensemble de propriétés entre les deux portes, BimCraft a donné à la première porte sa propre copie avant de la modifier. Voir [Pourquoi votre modification ne change qu'un seul élément](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Enregistrer

1. Cliquez sur {{ui:Save as IFC}} ou appuyez sur {{key:Mod+S}}.
2. Ouvrez la copie enregistrée dans BimCraft, ou dans n'importe quelle visionneuse IFC, pour vérifier les deux modifications.

## Erreurs fréquentes

- **Tous les modèles n'ont pas de types.** Certains exporteurs n'écrivent aucun objet de type, ou mettent tout sur l'occurrence. Il n'y a alors pas d'ensembles « (type) », et chaque élément doit être modifié individuellement.
- **La même valeur apparaît dans un ensemble de type et dans un ensemble d'occurrence.** Certains exporteurs écrivent un paramètre aux deux endroits. D'autres programmes peuvent lire l'un ou l'autre ; modifiez les deux si vous voulez qu'ils concordent.
- **Vouloir sélectionner « toutes les portes de ce type » pour les modifier ensemble.** Il n'y a pas de sélection multiple dans cette version. Une propriété de type est le moyen de modifier de nombreux éléments à la fois.
