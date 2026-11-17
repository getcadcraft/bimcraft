---
title: Remplacer un élément placé et mettre à jour les éléments de bibliothèque
summary: Remplacez un élément de bibliothèque placé par un autre en gardant son emplacement et son numéro d'élément, et vérifiez dans la Bibliothèque si des versions plus récentes existent pour tout ce qui se trouve dans le modèle.
keywords: remplacer, substituer, mettre à jour, version plus récente, rechercher des mises à jour, bibliothèque, retiré, changement de licence, numéro d'élément
from: 8bdfe01d
---

## Ce que vous allez faire

Changez d'avis sur un élément sans le déplacer à nouveau, et gardez à jour les éléments de bibliothèque d'un modèle.

## Remplacer un élément

1. Cliquez sur un élément de bibliothèque placé dans le modèle.
2. Dans {{ui:Propriétés}}, cliquez sur {{ui:Remplacer l'élément…}} dans la zone **Élément de bibliothèque**. L'onglet {{ui:Bibliothèque}} s'ouvre.
3. Trouvez le nouvel élément et cliquez sur sa carte.
4. Cliquez sur {{ui:Remplacer … par celui-ci}}.

L'élément garde son emplacement, son orientation, son niveau, son numéro d'élément, sa quantité et ses notes. Son type, sa forme et ses données d'élément changent pour correspondre au nouvel élément. Les éléments placés de la même façon partagent un même type, comme lors de leur placement.

Un élément qui a des variantes (voir [Placer et remplacer un élément de bibliothèque ayant des variantes](topic:library-variants)) affiche ses autres variantes en haut de l'onglet {{ui:Bibliothèque}} lorsque vous le remplacez : un clic pour chacune.

Lorsque le nouvel élément est d'une autre nature, par exemple un évier à la place d'une table, la classe IFC de l'élément change pour correspondre (ici, d'élément de mobilier à appareil sanitaire terminal), afin que les autres logiciels le planifient correctement. Il reste le même élément, avec le même GlobalId, de sorte que les liens vers lui fonctionnent toujours. {{key:Mod+Z}} rétablit l'ancienne classe avec l'ancien élément.

## Rechercher des mises à jour

1. Cliquez sur {{ui:Mises à jour}} dans la barre d'outils (ou sur {{ui:Rechercher des mises à jour}} dans la zone d'un élément de bibliothèque).
2. Lisez la liste : chaque élément de bibliothèque du modèle avec sa version dans le modèle, la dernière version et un statut : **À jour**, **Version plus récente**, **Retiré** ou **Introuvable**. Elle indique aussi ce qui a changé (géométrie, données, licence ou correctif).
3. Cliquez sur {{ui:Mettre à jour}} sur une ligne, ou sur {{ui:Tout mettre à jour}}.

## Ce que vous devez voir

- « Mise à jour de *n* emplacements. Les emplacements, numéros d'élément, quantités et notes sont conservés. »
- Des lignes « Mis à jour : *élément* » dans la liste des modifications. {{key:Mod+Z}} annule chacune d'elles.

## À savoir

- Seuls les éléments provenant de la bibliothèque peuvent être vérifiés. Les éléments issus de fichiers ne portent aucun identifiant de bibliothèque.
- Lorsqu'une licence a changé, la copie déjà placée conserve la licence avec laquelle elle est arrivée, jusqu'à ce que vous la mettiez à jour.
- Un élément **Retiré** n'est plus proposé pour de nouveaux placements. Un élément retiré pour des raisons de droits d'auteur ne peut pas du tout être téléchargé ; remplacez-le avec {{ui:Remplacer l'élément…}}.
- Une variante placée reste cette variante lorsque la version plus récente de l'élément la contient encore ; sinon elle prend la variante par défaut de l'élément.
- La vérification n'envoie que les identifiants et les versions des éléments, jamais votre modèle.
