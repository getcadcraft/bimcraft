---
title: Détecter les conflits
summary: Repérez les endroits où des éléments d'un ensemble heurtent des éléments d'un autre — gaines à travers des poutres, murs dans des dalles — dans un modèle ou dans plusieurs, avec une tolérance, et transformez un conflit en problème.
keywords: conflit, détection de conflits, vérification de conflits, conflit dur, interférence, collision, coordination, chevauchement, tolérance, mep, structure
from: 9cb12346
---

## Ce que vous allez faire

Repérez les endroits où deux ensembles d'éléments se heurtent, par exemple tout le modèle des réseaux face à la structure, puis examinez chaque cas et gardez ceux qui comptent comme problèmes.

## Étapes

1. Ouvrez un modèle IFC, et ajoutez les autres avec {{ui:Ajouter un modèle…}} si vous vérifiez entre plusieurs modèles. Voir [Voir plusieurs modèles IFC ensemble](topic:several-models).
2. Ouvrez {{ui:Détection de conflits}} dans le panneau de gauche.
3. Dans {{ui:Vérifier}} et {{ui:Contre}}, choisissez deux ensembles : les éléments que vous avez sélectionnés, une classe (dans tous les modèles ouverts), un ensemble de recherche enregistré (voir [Trouver des éléments par classe, nom ou propriété](topic:find)), ou tout.
4. Réglez le chevauchement à ignorer, en mètres. 0.01 ignore les éléments qui ne font que se toucher.
5. Cliquez sur {{ui:Lancer}}. La vérification se fait en arrière-plan ; {{ui:Annuler}} l'arrête.
6. Cliquez sur un résultat pour le voir : les deux éléments sont sélectionnés et affichés, le reste est rendu transparent, et la vue fait un zoom sur eux.
7. Cliquez sur {{ui:En faire un problème}} sous un résultat pour le consigner dans l'onglet {{ui:Problèmes}}. Voir [Problèmes et fichiers BCF](topic:issues-bcf).

## Ce que vous devriez voir

- Les conflits listés avec les noms des deux éléments (et leurs fichiers lorsque plusieurs modèles sont ouverts), ainsi que leur profondeur de chevauchement, le plus profond en premier.
- Les faces qui se touchent seulement, comme un mur posé sur une dalle ou une porte dans son ouverture, ne sont pas des conflits.

## Bon à savoir

- Il s'agit d'une vérification basique de conflit dur : des éléments dont les surfaces se croisent. Un élément entièrement caché dans un autre (une canalisation noyée dans un mur) n'est pas encore détecté.
- La profondeur est le plus petit chevauchement des enveloppes des deux éléments : c'est une indication, pas une mesure exacte.

## Suite

- [Mesurer des distances, des aires de faces et des positions en 3D](topic:measure)
- [Masquer, isoler et rendre transparents des éléments](topic:hide-and-isolate)
