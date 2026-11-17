---
title: Colorer les éléments selon une propriété
summary: Peignez chaque élément selon la valeur d'une propriété, comme sa classe, son type, son niveau, son matériau, sa résistance au feu ou son coût ; lisez la légende, cliquez sur une valeur pour n'afficher que ces éléments, et enregistrez les couleurs sous forme de schéma à réutiliser sur d'autres modèles.
keywords: couleur, colorer, colorer selon, légende, aspect, propriété, type, matériau, résistance au feu, filtre, isoler, thème, valeurs, schéma, schéma de couleurs, enregistrer les couleurs, réutiliser, équipe, json, pastille
from: f081d343
---

## Ce que vous allez faire

Voyez d'un coup d'œil comment une propriété est répartie dans le modèle : quels murs sont extérieurs, quels matériaux sont utilisés où, quels éléments n'ont pas de résistance au feu. Chaque élément prend la couleur de sa valeur, et la légende indique ce que signifie chaque couleur et combien d'éléments la possèdent.

## Étapes

1. Ouvrez un modèle IFC.
2. Cliquez sur l'onglet {{ui:Couleur}} à droite.
3. Choisissez une propriété dans la liste. Les premières appartiennent à chaque élément ({{ui:Classe}}, {{ui:Type}}, {{ui:Niveau}}, {{ui:Matériau}}, {{ui:Nom}}…) ; les autres viennent des ensembles de propriétés et des ensembles de quantités du modèle, sous le nom de l'ensemble. Le nombre après chacune indique combien d'éléments la possèdent.
4. Lisez la légende : une couleur, la valeur et le nombre d'éléments qui la possèdent.
5. Cliquez sur une valeur pour n'afficher que ces éléments. Maintenez {{key:Mod}} et cliquez pour ajouter d'autres valeurs. Appuyez sur {{key:Shift+H}} pour tout afficher à nouveau.
6. Cliquez sur {{ui:Désactivé}} pour revenir aux couleurs d'origine du modèle.

## Ce que vous devez voir

- Jusqu'à sept valeurs reçoivent chacune leur couleur, la plus fréquente en premier. Au-delà, les valeurs restantes partagent un même gris, listé sous **Autres valeurs**.
- Un nombre qui prend de nombreuses valeurs différentes est réparti en six plages égales, du clair (bas) au foncé (haut).
- Les éléments sans la propriété sont d'un gris pâle, listés sous **Sans valeur**, pour que les éléments colorés ressortent.
- Les couleurs changent avec Papier et Objet, et restent en place pendant que vous modifiez le modèle.
- La propriété d'un type compte pour chaque élément de ce type ; lorsqu'un élément a sa propre valeur pour la même propriété, sa valeur propre l'emporte.

## Modifier les couleurs et les conserver sous forme de schéma

- Cliquez sur la pastille d'une valeur dans la légende pour choisir une autre couleur. Le modèle est aussitôt repeint.
- {{ui:Enregistrer le schéma}} télécharge les couleurs dans un petit fichier `.json` nommé d'après la propriété, par exemple `Class colors.json`.
- Sur un autre modèle, ou sur l'ordinateur d'un collègue, cliquez sur {{ui:Ouvrir un schéma…}} et choisissez ce fichier. Chaque valeur du schéma reçoit sa couleur, si bien que la même résistance au feu ou le même système a la même couleur dans chaque modèle.
- Une valeur absente du schéma est peinte en gris et listée comme « absente du schéma » ; les valeurs du schéma que ce modèle n'a pas restent listées avec 0, pour que vous voyiez le schéma complet.
- Un schéma conserve ses couleurs dans les deux thèmes. Choisir une propriété dans la liste repart des couleurs automatiques.

## Erreurs courantes

- **« Ce modèle n'a pas de valeurs … ».** Le schéma a été enregistré pour une propriété que ce modèle n'a pas (un autre nom d'ensemble de propriétés, par exemple). Ouvrez un schéma créé pour ce type de modèle, ou choisissez une propriété dans la liste.

- **Une propriété manque dans la liste.** Aucun élément géométrique du modèle ne la possède. Les propriétés des niveaux et des espaces eux-mêmes ne sont pas listées.
- **Tout a la même couleur.** Tous les éléments ont la même valeur, ou aucune : regardez les nombres de la légende.

## Suite

- [Masquer, isoler et rendre transparents les éléments](topic:hide-and-isolate)
- [Se repérer avec l'arborescence du modèle](topic:model-tree)
