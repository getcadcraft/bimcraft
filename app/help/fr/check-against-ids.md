---
title: Vérifier un modèle avec l'IDS d'un client
summary: Chargez le fichier .ids que vous avez reçu et voyez dans Problèmes chaque élément qui ne le respecte pas, avant de livrer l'IFC.
keywords: ids, spécification de livraison d'informations, buildingsmart, exigences, livraison, vérification, validation, assurance qualité, eir, bep, propriété, classification, matériau, marchés publics
from: 7b960222
---

## Ce que vous allez faire

Un IDS (Information Delivery Specification, norme buildingSMART) est la liste de ce que doit contenir un IFC : quelles classes, quelles propriétés avec quelles valeurs, quelles classifications, quels matériaux, et où chaque élément doit se trouver. Les clients et les marchés publics en envoient un avec le projet. BimCraft vérifie le modèle IFC ouvert par rapport à cet IDS et liste chaque élément qui ne satisfait pas aux exigences.

## Étapes

1. Ouvrez un modèle IFC.
2. Ouvrez {{ui:Vérifier avec un IDS}} dans le panneau de gauche, sous {{ui:Contrôles du modèle}}, ou choisissez {{ui:Vérifier avec IDS…}} dans le menu de votre style de menu.
3. Cliquez sur {{ui:Charger un fichier .ids…}} et choisissez le fichier. Rien n'est téléversé.
4. Lisez le résultat : chaque spécification avec {{ui:Réussie}} ou {{ui:Échec}} et le nombre d'éléments auxquels elle s'applique.
5. Ouvrez Problèmes ({{key:Ctrl+Shift+M}}) et cliquez sur un échec pour sélectionner l'élément et faire un zoom dessus.

## Ce que vous devriez voir

- Un avertissement par élément et par exigence non satisfaite, avec le nom de la spécification, ce que demande l'IDS et ce que possède l'élément.
- Une spécification obligatoire à laquelle rien dans le modèle ne correspond donne un avertissement à part.
- Le rapport de vérification (dans Problèmes) commence par l'IDS : son titre, sa version, son auteur et, pour chaque spécification, les nombres d'éléments concernés, réussis et échoués.

## Bon à savoir

- L'IFC ne conserve qu'une référence à l'IDS (son nom, son titre, sa version et un hachage), pas l'IDS lui-même : l'IDS d'un client peut être confidentiel, et l'IFC est transmis à d'autres personnes. L'IDS reste dans ce navigateur, à côté du modèle ; quand vous rouvrez ici l'IFC enregistré, il est donc de nouveau vérifié. Charger ou oublier l'IDS est une étape que vous pouvez annuler.
- Ouvert sur un autre ordinateur ou dans un autre navigateur, Problèmes affiche une remarque indiquant que l'IDS est introuvable : chargez-le à nouveau pour relancer la vérification.
- Pour envoyer l'IDS avec l'IFC, activez {{ui:Conserver l'IDS dans l'IFC}} dans Paramètres, sous l'onglet BimCraft, avant de le charger.
- Chaque modification, annulation et rétablissement est vérifié à nouveau un instant plus tard.
- Les valeurs sont comparées à la manière de l'IDS : le texte exactement (la casse compte), les nombres en unités SI avec une petite tolérance (longueurs en mètres ; un modèle en millimètres est donc d'abord converti).
- Une spécification écrite pour une autre version d'IFC (par exemple IFC2X3 alors que le modèle est en IFC4) est tout de même vérifiée ; le résultat l'indique.
- Si le fichier IDS présente des défauts qu'un audit IDS signalerait, la boîte de dialogue les liste ; les spécifications concernées échouent.
- Vous pouvez accepter un échec en indiquant une raison, comme pour tout problème. Il reste accepté tant que les valeurs de l'élément ne changent pas.

- Les motifs de l'IDS sont lus comme la valeur entière. Un `^` au début et un `$` à la fin sont aussi pris pour « la valeur entière », comme le veulent la plupart des fichiers IDS.

## Suite

- [Vérifier un modèle pour les problèmes courants](topic:model-checks)
- [Modifier un mur ou une porte](topic:change-a-wall-or-door)
