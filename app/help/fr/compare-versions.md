---
title: Comparer deux versions d'un modèle
summary: Ouvrez deux versions du même modèle IFC et voyez quels éléments ont été ajoutés, supprimés et modifiés, appariés par leurs GlobalId, avec un CSV de chaque modification.
keywords: comparer, diff, différence, versions, révision, modifications, modifié, ajouté, supprimé, déplacé, globalid, guid, ce qui a changé
from: cfca6971
---

## Ce que vous allez faire

Voyez ce qui a changé entre le modèle que vous aviez et celui qui vous a été envoyé : quels éléments sont nouveaux, lesquels ont disparu, lesquels ont été déplacés ou ont reçu de nouvelles valeurs de propriété.

## Étapes

1. Ouvrez la version la plus récente, puis cliquez sur {{ui:Ajouter un modèle…}} et choisissez la plus ancienne. Voir [Voir plusieurs modèles IFC ensemble](topic:several-models).
2. Dans {{ui:Modèles}}, ouvrez {{ui:Comparer des versions}}.
3. Choisissez la {{ui:Version plus ancienne}} et la {{ui:Version plus récente}}.
4. Cliquez sur {{ui:Comparer}}.
5. Cliquez sur un élément dans une liste pour le choisir et voir ses propriétés. Cliquez sur {{ui:Télécharger le CSV}} pour chaque modification, propriété par propriété.
6. Cliquez sur {{ui:Effacer}} pour revenir à la vue normale.

## Ce que vous devez voir

- Éléments **ajoutés** en bleu, issus de la version la plus récente.
- Éléments **supprimés** en rouge, issus de la version la plus ancienne.
- Éléments **modifiés** en ocre, issus de la version la plus récente, chacun indiquant ce qui a changé : propriétés, déplacement avec sa distance, ou nouvelle forme.
- Tout ce qui est identique, en transparence.

## Bon à savoir

- Les éléments sont appariés par leur GlobalId. Un logiciel qui attribue de nouveaux GlobalId à chaque export fait apparaître chaque élément comme supprimé puis ajouté à nouveau.
- Les positions sont comparées là où les modèles se trouvent dans la scène. Si une version a été déplacée volontairement, alignez-les d'abord avec {{ui:Déplacer}} dans {{ui:Modèles}}.
- Un GlobalId utilisé deux fois dans un même modèle est exclu de la comparaison. [Vérifier un modèle pour les problèmes courants](topic:model-checks) les repère.

## Suite

- [Problèmes et fichiers BCF](topic:issues-bcf)
- [Additionner les quantités par propriété](topic:quantity-totals)
