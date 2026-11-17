---
title: "Politiques par défaut : définir avec quoi un nouveau bâtiment commence"
summary: Indiquez une fois le type de mur, les niveaux, la première feuille, les étiquettes LOD, les unités et l'outil avec lesquels un nouveau bâtiment commence, pour les projets métriques et impériaux, et partagez ces politiques dans l'agence sous forme de petit fichier.
keywords: par défaut, valeurs par défaut, politiques par défaut, politique, norme d'agence, valeurs par défaut d'agence, gabarit, nouveau bâtiment, premier type de mur, mur métrique, maçonnerie, LOD, niveau de développement, première feuille, papier, échelle, niveaux, hauteur d'étage, noms de niveaux, outil mur, unités, partager, exporter, importer, json
from: 42379aa5
---

## Ce que vous allez faire

Indiquez à BimCraft avec quoi un nouveau bâtiment doit commencer, pour que personne dans l'agence n'ait à modifier les mêmes éléments à chaque fois. Il s'agit d'un module complémentaire : il est désactivé tant que vous ne l'activez pas, et une politique que vous ne réglez pas garde la valeur par défaut de BimCraft telle quelle.

:::note
Ces valeurs concernent les **nouveaux** bâtiments et les **nouveaux** éléments. Un projet déjà commencé n'est pas modifié.
:::

## Étapes

1. Ouvrez les Paramètres, allez dans {{ui:Modules complémentaires}} et activez {{ui:Politiques par défaut}}.
2. Dans les Paramètres, ouvrez l'onglet **BimCraft** et choisissez {{ui:Politiques par défaut}} dans la liste à gauche.
3. Réglez les politiques voulues. Chacune commence sur **celle de BimCraft**, avec la valeur de celle-ci entre parenthèses. Une politique dotée d'une case **Métrique** et d'une case **Impérial** prend une valeur pour chaque type de projet ; ne remplissez que celles dont vous avez besoin.
4. Il n'y a pas de bouton Enregistrer : chaque modification est enregistrée dès que vous la faites. Une valeur qui ne peut pas être utilisée est refusée avec une explication, et l'ancienne reste en place.
5. Cliquez sur {{ui:Nouveau bâtiment}}. La boîte de dialogue se remplit à partir de vos politiques, et chaque valeur définie par une politique porte la mention **depuis vos politiques par défaut** à côté. Vous pouvez toujours modifier l'une d'elles avant {{ui:Créer}}.

## Les politiques

- **Unités d'un nouveau bâtiment** : les unités basculent sur celles-ci à la création.
- **Nombre de niveaux**, **Noms des niveaux** et **Hauteur de niveau**. Dans un nom, `{n}` compte 1, 2, 3 ; `{n0}` compte 0, 1, 2 ; `{nn}` et `{nn0}` font de même avec deux chiffres. Ainsi `Étage {nn0}` donne Étage 00, Étage 01, Étage 02.
- **Premier type de mur** : ce que l'outil Mur dessine en premier. Une agence métrique peut commencer avec Maçonnerie extérieure 300 mm, tandis que les projets impériaux conservent Extérieur 2×6.
- **Étiquette LOD des types de mur de départ** : le niveau de développement (LOD 100 à 500) que les neuf types de départ affichent partout où un type est listé. Voir [Construire des assemblages de murs](topic:wall-assemblies).
- **LOD d'un nouveau type de mur** : l'étiquette avec laquelle un nouveau type commence dans l'éditeur de types. Vous pouvez la modifier là.
- **Première feuille** : son papier, son échelle, son numéro et son nom (utilisez `{level}` pour le nom du niveau le plus bas), ou pas de première feuille du tout.
- **Tailles d'annotation sur papier** (Paramètres › Global › Politiques par défaut) : les hauteurs de l'agence, en millimètres imprimés, pour les remarques, le texte de cote, les étiquettes, les noms de pièces, les lettres des bulles de trame, les titres de vue et le texte de nomenclature. Un nouveau bâtiment les reprend à la création et les conserve dans son fichier. Voir [Dessiner en grandeur réelle, annoter à l'échelle](topic:annotation-sizes).
- **Outil actif après la création** : Sélectionner, comme le fait BimCraft de lui-même, ou Mur, pour que les deux premiers clics sur le plan dessinent déjà un mur.

## Disposition des nomenclatures : la norme de l'agence

Dans **Paramètres › Global › Politiques par défaut**, sous **Disposition des nomenclatures (norme de l'agence)**, réglez la façon dont chaque nomenclature est regroupée, si elle comporte des sous-totaux et un total, son titre et la casse de ses en-têtes de colonnes. Chaque nomenclature qui ne définit pas les siennes reprend celles-ci, quel que soit son auteur. Voir [Mettre en forme, enregistrer et exporter une nomenclature](topic:schedule-layouts).

## Partager dans l'agence

1. Dans les Paramètres, ouvrez l'onglet **Global** et choisissez {{ui:Politiques par défaut}}.
2. Saisissez le **Nom de l'agence** si vous le souhaitez. Il est inscrit dans le fichier.
3. Cliquez sur {{ui:Enregistrer dans un fichier}}. Vous obtenez un petit fichier se terminant par `.ccdefaults.json`.
4. Sur un autre ordinateur, activez le module complémentaire, ouvrez le même emplacement et cliquez sur {{ui:Charger depuis un fichier}}. Les politiques du fichier remplacent celles de cet ordinateur.

L'onglet Global comporte aussi le **Système d'unités d'un nouveau projet**, qui vaut pour chaque application disposant du module, et {{ui:Réinitialiser toutes les politiques}}. {{ui:Réinitialiser aux valeurs par défaut de BimCraft}} dans l'onglet BimCraft n'efface que celles de BimCraft.

## Bon à savoir

- Le fichier est un JSON simple et lisible : une liste de noms de politiques et de valeurs. Une politique nommée dans le fichier que cette version ne connaît pas est laissée de côté et signalée dans le message ; le reste se charge quand même.
- Les politiques sont conservées dans ce navigateur, pour toutes les applications CadCraft de cet ordinateur. Elles ne sont pas enregistrées dans le fichier du bâtiment, et elles ne sont pas synchronisées entre les ordinateurs : utilisez le fichier.
- L'étiquette LOD d'un type de départ provient de la politique de cet ordinateur. Un type que vous créez en copiant un type de départ conserve son étiquette dans le fichier du bâtiment.
- BimCraft n'a pas de réglage de précision ; il n'y a donc pas de politique de précision ici.
- Un bâtiment démarré à partir d'un gabarit reprend les niveaux et les feuilles propres à ce gabarit. La politique de type de mur et celle des unités s'appliquent toujours.
- Désactivez le module : tout redevient celui de BimCraft. Vos politiques sont conservées pour quand vous le réactiverez.
