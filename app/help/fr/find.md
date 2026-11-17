---
title: Rechercher des éléments par classe, nom ou propriété
summary: Rechercher chaque élément qui correspond à une ou plusieurs règles — sa classe, son nom, son type, son niveau, son matériau ou la valeur de n'importe quelle propriété — les sélectionner tous et conserver les règles sous forme d'ensemble de recherche nommé.
keywords: rechercher, recherche, filtrer, requête, règle, ensemble de recherche, ensemble de sélection, recherche enregistrée, propriété, valeur, classe, matériau, tout sélectionner
from: 3d293bc2
---

## Ce que vous allez faire

Sélectionner tous les éléments d'une même nature, ou ayant une même valeur, en une seule étape : toutes les portes, tous les murs du niveau 2, tous les éléments dont le degré coupe-feu est EI60, tous les murs dont le coût dépasse un montant donné.

## Étapes

1. Ouvrez un modèle IFC.
2. Ouvrez {{ui:Rechercher}} dans le panneau de gauche.
3. Dans la première règle, choisissez une propriété (d'abord celles de l'élément, comme {{ui:Classe}} et {{ui:Niveau}}, puis les ensembles de propriétés du modèle), le mode de comparaison et une valeur. La zone de valeur propose les valeurs présentes dans le modèle.
4. Pour affiner, cliquez sur {{ui:Ajouter une règle}}. Choisissez {{ui:Toutes les règles}} pour les exiger toutes, ou {{ui:N'importe quelle règle}} pour qu'une seule suffise.
5. Cliquez sur {{ui:Rechercher}}, ou appuyez sur {{key:Enter}} dans une zone de valeur. Les éléments correspondants sont sélectionnés.
6. Pour conserver les règles, cliquez sur {{ui:Enregistrer comme ensemble}}, saisissez un nom puis cliquez de nouveau dessus. Plus tard, cliquez sur le nom d'un ensemble pour rechercher avec lui.

## Ce que vous devez voir

- Les éléments trouvés sont sélectionnés dans la vue 3D et dans l'arborescence du modèle, et {{ui:Propriétés}} indique combien il y en a par classe. Appuyez sur {{key:I}} pour n'afficher que ceux-ci, sur {{key:H}} pour les masquer.
- Les mots sont trouvés sans tenir compte des majuscules. Les nombres se comparent en tant que nombres : « est supérieur à 1000 » désigne la valeur, et non le texte.
- {{ui:a une valeur}} et {{ui:n'a pas de valeur}} n'exigent aucune valeur ; ils trouvent ce qui est renseigné, ou ce qui manque.
- Les ensembles enregistrés restent dans ce navigateur pour chaque modèle que vous ouvrez.

## Erreurs courantes

- **Rien n'est trouvé.** Une règle a besoin d'une valeur qu'elle peut faire correspondre : consultez les suggestions dans la zone de valeur.
- **Une propriété manque dans la liste.** Aucun élément ayant une forme dans ce modèle ne la possède.

## Pour continuer

- [Colorer les éléments selon une propriété](topic:color-by-property)
- [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate)
