---
title: Fusionner les modifications de deux personnes sur un même modèle
summary: Laissez git, Fossil ou Mercurial fusionner deux copies modifiées d'un même modèle IFC, objet par objet, pour que deux personnes dessinent sur un même bâtiment et réunissent leur travail.
keywords: fusion, merge, git, fossil, mercurial, gestion de versions, conflit, trois voies, cadcraft merge, gitattributes, ifc, globalid, équipe, deux copies, branches
from: 50733df8
---

Deux personnes prennent une copie du même bâtiment : l'une dessine l'aile est, l'autre l'aile ouest, et plus tard les copies doivent redevenir une seule. Si elles ont touché des objets différents, un programme peut le faire à leur place.

## Comment cela fonctionne

Chaque mur, porte, niveau, pièce et ensemble de propriétés d'un fichier IFC possède un GlobalId qui ne change jamais. La fusion recherche les objets par cet identifiant, et non par le numéro que leur donne le fichier (`#123`), car ces numéros changent à chaque enregistrement. Les parties rattachées à un objet qui n'ont pas d'identifiant propre (placements, formes, unités) sont comparées selon leur contenu.

Les deux copies doivent être dans la même version IFC (2x3, 4 ou 4.3). La fusion conserve votre fichier tel quel, son ordre et ses numéros, et y ajoute ce qui est nouveau : un git diff de la fusion ne montre donc que ce que la fusion a changé.

## Mise en place

Git a besoin de deux lignes, une fois par dépôt :

```
# .gitattributes
*.ifc merge=cadcraft

# une seule fois, sur chaque ordinateur
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sans git, lancez `cadcraft merge <base> <ours> <theirs>`. Fossil et Mercurial acceptent les mêmes trois fichiers dans leur propre réglage d'outil de fusion. Rien n'est téléversé ; tout s'exécute sur votre ordinateur.

## Les règles

- Un attribut modifié d'un seul côté est retenu. La même modification des deux côtés n'est retenue qu'une fois.
- Un même attribut modifié de deux façons (le même niveau renommé de deux façons différentes) est un **conflit** : votre version est conservée et le rapport liste les deux. Ouvrez le résultat et corrigez-le à la main.
- Une liste d'éléments (les murs d'un niveau, les propriétés d'un ensemble) fusionne comme un ensemble : ce qu'un côté a ajouté est conservé, et ce qu'un côté a retiré est retiré. Deux personnes qui ajoutent chacune des murs au même niveau ne sont pas en conflit.
- Un objet ajouté d'un côté est conservé, avec sa forme et ses propriétés. Retiré d'un côté et non modifié de l'autre : retiré. Retiré d'un côté et modifié de l'autre : retiré, et signalé.
- La date et l'auteur du fichier, ainsi que l'historique du propriétaire de chaque objet, restent les vôtres.

La géométrie est fusionnée en bloc : la forme d'un mur vient d'un seul côté, jamais mélangée point par point. Les fichiers IFC compressés (zip) et IFCX ne sont pas fusionnés. Après une fusion, ouvrez le résultat dans BimCraft et regardez le panneau Problèmes avant d'enregistrer.
