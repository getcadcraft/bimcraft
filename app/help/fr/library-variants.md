---
title: Placer et remplacer un élément de bibliothèque comportant des variantes
summary: Certains éléments de bibliothèque existent en plusieurs tailles ou options. Choisissez la variante avant de le placer, voyez laquelle est un élément placé, remplacez-la par une autre en un clic, et conservez-la lorsque l'élément est mis à jour.
keywords: variante, variantes, tailles, options, configuration, bibliothèque, librarycraft, placer, remplacer, configurateur, famille, type, mise à jour, ports
from: c05f0af3
---

## Ce que vous allez faire

Placez un élément de bibliothèque dans la taille ou l'option dont vous avez besoin, et changez d'avis plus tard sans le replacer. Un élément à variantes est un seul élément de la bibliothèque (un nom, une licence, une version) avec un tableau des variantes disponibles : par exemple une platine de fixation en Petit, Moyen et Grand, ou la même platine sans trous.

## Choisir la variante et la placer

1. Ouvrez l'onglet {{ui:Bibliothèque}} et cliquez sur la carte de l'élément.
2. Sous le nom, le choix {{ui:Variante}} liste chaque variante avec sa taille. La variante par défaut de l'élément est choisie en premier.
3. Choisissez-en une. Le plan, la taille et la ligne du corps 3D suivent votre choix.
4. Cliquez sur {{ui:Placer sur le plan}} (ou {{ui:Placer dans le modèle}} dans la vue 3D) et placez-le comme tout élément : voir [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library).

L'élément placé porte le nom de l'élément et de la variante, par exemple *Platine de fixation — Grand*, afin que la nomenclature des {{ui:Équipements}} et l'arborescence les distinguent. Chaque variante est son propre type IFC : placer deux fois la même variante partage un seul type, une variante différente en a un autre.

## Voir quelle variante est un élément placé

Sélectionnez l'élément. Dans {{ui:Propriétés}}, la zone **Élément de bibliothèque** comporte une ligne **Variante**. L'IFC la conserve dans `CadCraft_LibraryItem` : `Variant` (l'identifiant de la variante), `VariantName` et `VariantValues` (les valeurs d'option, en texte), afin que d'autres programmes puissent la lire.

## Remplacer par une autre variante

1. Sélectionnez l'élément placé et cliquez sur {{ui:Remplacer l'élément…}} dans la zone **Élément de bibliothèque**. L'onglet {{ui:Bibliothèque}} s'ouvre.
2. En haut, **Autres variantes de** *l'élément* liste chaque variante avec sa taille. Celle qui est placée est marquée et ne peut pas être choisie.
3. Cliquez sur {{ui:Remplacer par …}} pour la variante voulue.

L'élément conserve sa place, son orientation, son niveau, son numéro d'élément, sa quantité et ses notes ; son type, sa forme et ses données changent pour l'autre variante. {{key:Mod+Z}} rétablit la variante précédente. Vous pouvez toujours choisir n'importe quel autre élément de la liste en dessous, comme auparavant : voir [Remplacer un élément placé et mettre à jour les éléments de la bibliothèque](topic:swap-and-update-library-items).

## Copier, coller et mises à jour

- Une copie d'une variante placée est la même variante : dans ce modèle, et dans un autre modèle ouvert dans le même onglet du navigateur, par Copier et Coller.
- Les **mises à jour** conservent la variante : si la nouvelle version de l'élément la comporte encore, le placement devient cette variante de la nouvelle version. Si la nouvelle version ne la comporte plus, le placement prend la variante par défaut de l'élément.

## Bon à savoir

- Seuls certains éléments de bibliothèque ont des variantes. Les cartes ne l'indiquent pas ; vous voyez le choix {{ui:Variante}} lorsque vous en ouvrez une.
- Un élément peut lister des **ports** (points de connexion pour tuyaux et gaines) par variante. L'onglet Bibliothèque indique combien une variante en possède. Ils ne sont **pas encore** écrits dans l'IFC lorsque vous placez l'élément depuis l'onglet Bibliothèque.
- Une variante sans corps 3D est placée avec une boîte de substitution, comme tout symbole 2D.
- Les tailles du choix sont exprimées en mm, comme la bibliothèque les écrit.
