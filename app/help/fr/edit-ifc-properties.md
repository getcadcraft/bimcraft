---
title: Modifier les propriétés IFC et enregistrer une copie modifiée
summary: Modifiez le nom, l'étiquette, la description ou une valeur de propriété d'un élément, annulez, et téléchargez un nouveau fichier IFC pendant que l'original reste inchangé.
keywords: modifier, changer, propriétés, paramètres, étiquette, nom, renommer, enregistrer sous, télécharger, annuler, copier, ifc, écrire
from: f8035d62
---

## Ce que vous allez faire

Corrigez les données d'un modèle IFC : renommez un élément, corrigez son étiquette, modifiez une valeur de propriété. Puis enregistrez un nouveau fichier IFC avec vos modifications. Le fichier que vous avez ouvert n'est jamais touché.

## Ce que vous pouvez modifier

| Champ | Modifiable |
|---|---|
| Nom, Type d'objet, Étiquette, Description | Oui |
| Valeurs de propriété uniques (texte, nombres, Oui/Non) | Oui |
| Propriétés de type (ensembles marqués « (type) ») | Oui, et la modification s'applique à chaque élément de ce type |
| Type, GlobalId, Ligne | Non |
| Quantités (longueurs, surfaces, volumes, comptages) | Non |
| Listes, énumérations et autres valeurs à plusieurs parties | Non |
| Géométrie, position, ajout ou suppression d'éléments | Non |

## Étapes

1. Ouvrez un modèle IFC et cliquez sur l'élément à modifier.
2. Dans le panneau {{ui:Propriétés}}, cliquez sur la valeur à modifier. Elle devient une zone de texte. Une valeur vide s'affiche comme *vide*.
3. Saisissez la nouvelle valeur.
4. Appuyez sur {{key:Enter}}, ou cliquez ailleurs, pour la conserver. Appuyez sur {{key:Esc}} pour annuler.
5. Regardez la valeur : elle est maintenant en gras avec une barre bleue à côté, ce qui marque une valeur modifiée.
6. Regardez la section {{ui:Modifications}} à gauche : la modification est listée sous la forme *élément* : *champ*, de l'ancienne valeur à la nouvelle.
7. Recommencez pour d'autres valeurs ou d'autres éléments.
8. Cliquez sur {{ui:Enregistrer au format IFC}} (il indique le nombre de modifications en attente, par exemple « Enregistrer au format IFC (3) »), ou appuyez sur {{key:Mod+S}}.
9. Repérez « *nom d'origine* (modifié).ifc » dans votre dossier de téléchargements.

## Ce que vous devez voir

La barre d'état indique : Fichier enregistré : *nom* (modifié).ifc avec *n* modifications (… octets). Votre fichier d'origine est inchangé. La liste {{ui:Modifications}} se vide, prête pour la suivante.

## Types de valeurs

- **Texte** : tout ce que vous saisissez est conservé tel quel. Vider Nom, Type d'objet, Étiquette ou Description supprime la valeur.
- **Nombres** : saisissez un nombre simple, comme `2.4` ou `1200`, dans les unités propres au fichier. Pas de symbole d'unité. Toute autre saisie affiche « Saisissez un nombre. »
- **Nombres entiers** (comptages, entiers) : « Saisissez un nombre entier. » si vous saisissez une décimale.
- **Oui/Non** : la valeur devient un menu avec Oui et Non.

Chaque valeur conserve son type IFC : un nombre reste un nombre, et les autres logiciels le lisent correctement.

## Annuler

1. Cliquez sur {{ui:Annuler}} dans la section {{ui:Modifications}}, ou appuyez sur {{key:Mod+Z}} lorsque vous ne saisissez pas dans un champ.
2. Répétez pour annuler davantage. Chaque annulation retire la modification la plus récente.

Vous ne pouvez pas annuler au-delà d'un enregistrement : après l'enregistrement, la liste repart de zéro. Le fichier enregistré conserve tout.

## Pourquoi votre modification ne change qu'un élément

Les exportateurs économisent de la place en partageant les données. Un même ensemble de propriétés peut être partagé par vingt portes, et une valeur (« Résistance au feu : 60 min ») peut figurer dans quatre-vingt-dix ensembles. Si BimCraft modifiait simplement la valeur partagée, chaque élément qui la partage changerait aussi.

BimCraft fait donc une copie avant d'écrire :

- Si l'ensemble de propriétés que vous modifiez est partagé avec d'autres éléments, votre élément reçoit sa propre copie de l'ensemble, et seule la copie change.
- Si la valeur est partagée avec d'autres ensembles, votre ensemble reçoit sa propre copie de la valeur.

Les voisins conservent leurs anciennes données. On appelle cela la *copie à l'écriture* (copy-on-write). Cela ajoute quelques petites entrées au fichier, que tous les logiciels IFC lisent normalement.

**Les propriétés de type font exception, volontairement.** Un ensemble marqué « (type) » appartient au type de l'élément, et en IFC chaque élément de ce type le lit à cet endroit. Le modifier change le type, si bien que chaque élément du type affiche la nouvelle valeur. La liste {{ui:Modifications}} marque ces changements avec « (type) ». Voir [Modifier une propriété de type pour chaque élément d'un type](topic:type-vs-instance).

## Avertissements avant de perdre du travail

- Ouvrir un autre fichier alors que vous avez des modifications non enregistrées demande : « Vous avez *n* modifications non enregistrées dans *fichier*. Les abandonner ? » Cliquez sur Annuler pour continuer à travailler, puis enregistrez.
- Fermer ou recharger l'onglet avec des modifications non enregistrées fait demander au navigateur s'il faut quitter.

## Erreurs fréquentes

- **Saisir des unités.** `2400 mm` est refusé. Saisissez `2400`.
- **Modifier une propriété de type alors que vous visiez un seul élément.** Repérez la mention « (type) » avant de saisir. Si vous voulez qu'un seul élément diffère, modifiez plutôt une propriété d'occurrence, son Étiquette ou son Nom.
- **Attendre que le fichier d'origine change.** L'enregistrement télécharge toujours un nouveau fichier. Remplacez l'original vous-même si c'est ce que vous voulez, et gardez une copie.
- **Appuyer sur {{key:Mod+S}} sans modification.** BimCraft n'enregistre que s'il y a quelque chose à enregistrer ; sinon, la fonction « Enregistrer la page » du navigateur peut s'ouvrir. Fermez-la.
- **Enregistrer deux fois en attendant deux petits fichiers.** Chaque enregistrement contient toutes les modifications depuis l'ouverture du modèle.
- **Attendre que les modifications reviennent dans un fichier de projet.** BimCraft écrit uniquement de l'IFC. Importez le fichier IFC modifié dans votre logiciel de conception comme vous importez tout IFC.
