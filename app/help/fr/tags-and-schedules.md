---
title: Étiqueter les éléments et établir des nomenclatures par étiquette
summary: Définissez vos propres étiquettes (un nom, un type, les valeurs admises, les classes concernées), étiquetez de nombreux éléments d'un coup et créez des nomenclatures dont les colonnes, filtres et regroupements lisent ces étiquettes. Les étiquettes sont conservées dans l'IFC.
keywords: étiquettes, étiquette, étiquetage, propriétés personnalisées, paramètres, paramètres partagés, ensemble de propriétés, pset, nomenclature, filtre, regrouper par, finition, résistance au feu, modification groupée, csv
from: 9cc7c90d
---

## Ce que vous allez faire

Une étiquette est une propriété qui vous appartient, comme *Finition* ou *Résistance au feu*. Vous la définissez une fois pour le projet, vous la renseignez sur de nombreux éléments d'un coup, et toutes les nomenclatures de BimCraft peuvent la lire : la nomenclature des étiquettes ici, {{ui:Quantités}}, Rechercher, Colorer par propriété et [Documents issus du modèle](topic:documents-from-the-model).

## Étapes

1. Ouvrez un modèle IFC ou démarrez un nouveau bâtiment.
2. Dans le panneau de gauche, sous {{ui:Quantités}}, ouvrez {{ui:Étiquettes}}.
3. Cliquez sur {{ui:Ajouter un repère}}. Donnez-lui un nom, choisissez son type et, si vous le souhaitez, listez les valeurs admises (séparées par des virgules) et les classes auxquelles elle s'applique (`IfcDoor`, `IfcWall` …). Cliquez sur {{ui:Ajouter l'étiquette}}.
4. Sélectionnez les éléments dans le modèle (Rechercher aide : choisissez toutes les portes d'un coup).
5. Sous {{ui:Étiqueter la sélection}}, choisissez ou saisissez une valeur pour chaque étiquette à renseigner, laissez les autres telles quelles, puis cliquez sur {{ui:Appliquer à … éléments sélectionnés}}.
6. Sous {{ui:Nomenclature des étiquettes}}, cochez les colonnes, ajoutez des filtres, choisissez {{ui:Regrouper par}}, puis cliquez sur {{ui:Télécharger le CSV}}.

## Ce que vous devez voir

- Une étape dans la liste des modifications pour chaque définition enregistrée et chaque étiquetage ; {{ui:Annuler}} les rétablit.
- Les éléments d'une classe à laquelle une étiquette ne s'applique pas sont exclus de cette étiquette, et la barre d'état indique combien.
- La nomenclature des étiquettes liste une ligne par élément, regroupée par le champ choisi ; cliquez sur la première cellule d'une ligne pour sélectionner cet élément.
- {{ui:Quantités}} liste les étiquettes sous `CadCraft_Tags`, de sorte que vous pouvez y totaliser des surfaces ou des comptages par étiquette.

## Types

Les types sont la même liste que celle des paramètres de famille : Longueur (millimètres), Angle (degrés), Nombre, Nombre entier, Oui / Non, Stylo (1–16), Texte, Matériau et Remplissage. Une valeur qui ne correspond pas à son type, ou qui ne figure pas parmi les valeurs admises, est refusée avec un message, et rien ne change.

## À savoir

- Tout est en IFC standard, donc les autres logiciels lisent les valeurs : les définitions sont dans un ensemble de propriétés `CadCraft_TagDefs` sur le projet, et les valeurs dans un ensemble de propriétés `CadCraft_Tags` sur chaque élément (une propriété par étiquette). Les longueurs sont écrites dans l'unité de longueur du fichier.
- `IfcWall` dans les classes d'une étiquette couvre aussi les murs de type standard et les murs à éléments multiples.
- Renommer une étiquette renomme ses valeurs sur chaque élément dans la même étape. Supprimer une étiquette ne supprime que sa définition : les valeurs déjà saisies restent sur les éléments comme propriétés simples. Effacez-les d'abord (choisissez {{ui:Effacer}}) pour les retirer.
- Les étiquettes de l'application de dessin CadCraft (attributs de bloc) ne sont pas encore disponibles.
