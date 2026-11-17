---
title: "Vérifier un dossier : copies endommagées, liens manquants et fichiers résiduels"
summary: Utilisez le rapport de dossier pour trouver les fichiers de modèle tronqués, choisir la sauvegarde complète la plus récente, voir les liens manquants et repérer les fichiers de verrouillage et temporaires.
keywords: contrôle de l'état, endommagé, corrompu, incomplet, tronqué, sauvegarde, liens manquants, référence externe manquante, audit, fichiers résiduels, fichiers de verrouillage, dwl, bak, remise
from: 3025a539
---

## Ce que vous allez faire

Vérifiez un dossier de projet avant de le remettre ou de commencer à y travailler : chaque modèle est-il complet, quelle est la dernière sauvegarde correcte, et tous les fichiers liés sont-ils présents ?

## Étapes : copies endommagées

1. Ouvrez le dossier du projet. Voir [Ouvrir un dossier de projet complet](topic:open-project-folder).
2. Lisez les remarques sous le nom du dossier. « 2 fichiers sont incomplets ou illisibles. Voir les modèles ci-dessous. » signifie qu'il y a quelque chose à examiner.
3. Dans **Modèles**, regardez la colonne **État**. **Complet** est correct. Un « 1 incomplet » en orange signifie qu'une copie est défectueuse mais qu'une autre est saine. Un **Incomplet** en rouge signifie qu'aucune copie saine n'a été trouvée.
4. Ouvrez **Toutes les … copies** sous un modèle en problème. La liste comprend le fichier principal et chaque sauvegarde numérotée, de la plus récente à la plus ancienne, avec la taille, la date et l'état.
5. Lisez la remarque au-dessus de la liste, par exemple « Tower.rvt est incomplet (183.2 MB, devrait faire au moins 214.0 MB). La fiche affiche la copie complète la plus récente, Tower.0012.rvt (3 mars 2025). »
6. Cliquez sur la copie que vous voulez ouvrir. Seules les copies complètes peuvent être sélectionnées.

## Ce que fait le contrôle de l'état

Chaque copie de chaque modèle subit une vérification rapide de son en-tête, 512 octets chacune, si bien qu'un dossier de gros modèles est contrôlé en quelques secondes. Un fichier dont l'index interne pointe au-delà de sa fin a été coupé pendant la copie, le téléversement ou la synchronisation. Un fichier de cloud encore « en ligne uniquement » présente le même symptôme.

La fiche de chaque modèle est lue dans le fichier principal lorsqu'il est sain, et dans la sauvegarde saine la plus récente sinon.

## Étapes : liens manquants

1. Repérez la remarque « *n* fichiers liés ne se trouvent pas dans ce dossier. » sous le nom du dossier.
2. Faites défiler jusqu'à **Fichiers liés et référencés**. Les liens manquants sont listés en premier.
3. Lisez la colonne **Emplacement** pour chaque lien :
   - **Dans ce dossier** : trouvé au chemin enregistré par le modèle.
   - **Même nom trouvé** : un fichier de même nom se trouve ailleurs dans le dossier. Vérifiez qu'il s'agit du bon.
   - **Fichier de bibliothèque** : une table de codes de notes clés ou d'assemblages. Elles sont fournies avec le logiciel sur chaque ordinateur, elles ne sont donc pas attendues dans le dossier.
   - **Pas dans ce dossier** : introuvable nulle part dans le dossier.
4. Lisez **Utilisé par** pour voir quels modèles référencent chaque fichier.

BimCraft cherche d'abord chaque lien par son chemin relatif, puis par la fin de son chemin enregistré (ainsi `\\server\jobs\Tower\Cad\X-Refs\site.dwg` est trouvé dans `X-Refs/site.dwg` lorsque vous avez choisi le dossier `Cad`), puis par nom de fichier n'importe où dans le dossier.

## Étapes : fichiers résiduels

1. Faites défiler jusqu'à **Mis de côté**, à la fin du rapport.
2. Lisez les trois lignes susceptibles d'apparaître :
   - Dossiers annexes (`*_backup`, `*_log`, `Revit_temp`) : non lus.
   - Restes de verrouillage, de journal et de sauvegarde : fichiers comme `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ils sont laissés par des logiciels qui ont planté ou qui étaient ouverts au moment de la copie du dossier. Ils peuvent généralement être supprimés une fois que personne n'a ces fichiers ouverts.
   - Autres fichiers : tout le reste, que BimCraft ne lit pas.

## Erreurs courantes

- **Supprimer le fichier principal endommagé avant d'avoir sauvegardé une bonne copie.** Copiez d'abord la sauvegarde complète la plus récente, puis traitez le fichier endommagé.
- **Faire confiance aveuglément à « Même nom trouvé ».** Deux dessins différents peuvent porter le même nom. En cas de doute, ouvrez les deux.
- **Croire qu'un fichier de bibliothèque manquant est un problème.** Les tables de codes de notes clés et d'assemblages sont installées avec le logiciel sur chaque ordinateur.
- **Le nombre de fichiers diffère selon le navigateur.** Dans Firefox et Safari, {{ui:Ouvrir un dossier}} transmet tous les fichiers, y compris ceux des dossiers annexes ; le compte (et la limite de 20 000 fichiers) les inclut donc. Glisser le dossier dans la fenêtre les ignore, comme le font Chrome et Edge. Le rapport est par ailleurs identique.
