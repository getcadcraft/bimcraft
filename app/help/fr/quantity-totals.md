---
title: Additionner les quantités, lister les éléments et établir la nomenclature des espaces
summary: Comptez les éléments et additionnez leurs longueurs, surfaces, volumes ou toute propriété numérique, regroupés par n'importe quelle propriété ; listez une ligne par élément ; ou établissez la nomenclature des espaces avec leurs surfaces et volumes. Chacun se télécharge en CSV.
keywords: quantité, quantités, métré, totaux, somme, nomenclature, bordereau des quantités, boq, qto, csv, regrouper par, comptage, longueur, surface, volume, espaces, pièces, nomenclature des pièces, nomenclature des surfaces, liste des éléments
from: e2e7210c
---

## Ce que vous allez faire

Obtenir des totaux à partir d'un modèle : longueurs de murs par niveau, nombre de portes par type, volume de dalle par matériau, coût de chaque zone.

## Étapes

1. Ouvrez un modèle IFC.
2. Ouvrez {{ui:Totaux des quantités}} dans le panneau de gauche.
3. Dans {{ui:Compter}}, choisissez {{ui:Tous les éléments}} ou seulement ceux que vous avez sélectionnés.
4. Sous {{ui:Regrouper par}}, choisissez une propriété, comme {{ui:Classe}}. Cliquez sur {{ui:Ajouter un regroupement}} pour affiner, jusqu'à trois niveaux, par exemple par {{ui:Niveau}}.
5. Sous {{ui:Additionner}}, cochez les nombres à totaliser. Les ensembles de quantités du modèle sont cochés au départ.
6. Cliquez sur {{ui:Télécharger le CSV}} pour ouvrir le tableau dans un tableur.

## Ce que vous devez voir

- Une ligne par groupe, avec le nombre d'éléments qu'il contient et chaque total, plus une ligne de total.
- Les éléments sans valeur sont comptés mais n'ajoutent rien. Dans ce cas, le CSV ajoute une colonne « Exclus » à côté du total pour que vous voyiez combien il y en a.
- Les nombres sont exprimés dans les unités du fichier, telles qu'il les enregistre, souvent des millimètres pour les longueurs.

## Une ligne par élément, ou les espaces

Modifiez {{ui:Afficher}} :

- **Une ligne par élément** : chaque élément sur sa propre ligne, avec les propriétés sous {{ui:Colonnes}} et les nombres sous {{ui:Additionner}}. Le CSV commence par le GlobalId de chaque élément. Cliquez sur la première valeur d'une ligne pour sélectionner cet élément.
- **Espaces** : chaque pièce avec son numéro, son nom, son niveau, sa surface et son volume, ainsi que leurs totaux. Les surfaces et volumes proviennent des quantités de l'espace telles que le fichier les indique. Lorsque le fichier n'en a aucune, ils sont mesurés à partir de la forme de l'espace, en m² et m³, et affichés en italique ; le CSV indique lequel est lequel.

## Suite

- [Rechercher des éléments par classe, nom ou propriété](topic:find)
- [Colorer des éléments selon une propriété](topic:color-by-property)

## Infrastructure (IFC 4.3)

Choisissez **Infrastructure (IFC 4.3)** dans la liste des vues pour voir les routes, voies ferrées, ponts et ouvrages maritimes totalisés par classe et type, avec la longueur, la surface et le volume que le fichier indique lui-même. Une quantité que le fichier n'indique pas reste vide, elle n'est jamais calculée. **Envoyer les quantités d'infrastructure à TakeoffCraft** enregistre un fichier `.quantities.json` que TakeoffCraft ouvre comme quantités typées.
