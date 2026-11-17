---
title: Familles et leurs dimensions
summary: Les portes, fenêtres et meubles sont regroupés en familles. Chaque dimension d'une famille correspond à un type dans le fichier IFC : la liste des types reste courte dans BimCraft, tandis que les autres logiciels lisent des types simples.
keywords: famille, familles, type, types, dimension, dimensions, largeur, type de porte, type de fenêtre, mobilier, table, étagère, meuble, meuble bas, nouvelle dimension, dupliquer, placer une famille, fichier de famille, ccfamily, bibliothèque IFC, bibliothèque de projet, groupe, visibilité, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Ce qu'est une famille

Une famille est un même type d'objet décliné en plusieurs dimensions : une porte battante simple qui existe en largeurs de 32, 36 et 42 pouces, ou une table déclinée en version longue et courte. Dans BimCraft, vous voyez la famille une seule fois, avec ses dimensions en dessous, au lieu d'une longue liste de types.

IFC ne connaît pas les familles. Dans le fichier, chaque dimension est un type ordinaire (un type de porte, un type de fenêtre, un type de mobilier…), et la famille est un groupe qui énumère ses dimensions. Les autres logiciels BIM lisent les types et le groupe tels quels ; BimCraft reconstitue la famille à partir de ceux-ci.

## Où les trouver

- Le groupe **Familles** du navigateur de projet liste les familles de ce modèle, avec le nombre de dimensions de chacune et le nombre d'éléments placés. En dessous figurent les **Familles de départ** : les portes et fenêtres des outils Porte et Fenêtre, ainsi qu'une table, une étagère et un meuble bas.
- {{ui:Build}} › {{ui:Families…}} affiche la même liste dans une fenêtre.
- Cliquez sur une famille pour l'ouvrir : ses dimensions, les valeurs de chacune, et le nombre d'éléments qui utilisent chacune.

## Portes et fenêtres

Les outils Porte et Fenêtre listent les familles de ce type, puis une **liste de dimensions** à côté. Sélectionnez une dimension, ou saisissez **W** et **H** : une largeur et une hauteur qu'aucune dimension ne possède encore deviennent une nouvelle dimension de la famille lorsque vous placez la porte. Les portes de même dimension partagent un même type.

Dans {{ui:Properties}}, une porte ou une fenêtre sélectionnée affiche sa **Famille** et sa **Dimension**. Choisissez une autre dimension dans la liste, ou saisissez une nouvelle largeur ou hauteur. {{ui:Open the family}} ouvre la famille à laquelle elle appartient.

Le bâti de chaque porte ou fenêtre suit l'épaisseur de son propre mur, comme avant les familles. Le type de la dimension conserve aussi la porte dessinée dans un mur de 140 mm, pour les logiciels qui lisent les types.

## Nouvelle dimension de cette famille

1. Ouvrez la famille.
2. Sous **Nouvelle dimension de cette famille**, saisissez ses valeurs (Width, Height et les autres paramètres de la famille) et, si vous le souhaitez, un nom. Sans nom, elle est nommée d'après ses valeurs.
3. Cliquez sur {{ui:Make the size}}.

Deux dimensions ne peuvent pas avoir les mêmes valeurs. **Renommer** change le nom d'une dimension ; **Retirer** supprime une dimension que personne n'utilise ; **Sélectionner** choisit les éléments de cette dimension.

## Placer du mobilier

1. {{ui:Build}} › {{ui:Place family}}, ou {{ui:Place}} dans la fenêtre d'une famille.
2. Dans la barre, choisissez la famille et sa dimension.
3. Cliquez sur le plan pour le placer sur le niveau. Appuyez sur {{key:R}} pour le faire pivoter de 90° avant de cliquer. {{key:Esc}} arrête.

Les {{ui:Properties}} d'un élément placé affichent sa dimension, son emplacement et son angle de rotation ; {{key:Delete}} le supprime. Chaque élément d'une même dimension partage la forme de cette dimension : modifier la famille les modifie tous.

## Dimensions depuis un tableau

{{ui:Sizes from a table…}} dans la fenêtre d'une famille lit un fichier CSV (séparateur virgule, point-virgule ou tabulation). La première ligne nomme les colonnes : le nom ou le libellé d'un paramètre, et éventuellement `Name`. Les longueurs sont en millimètres, sauf si vous écrivez une unité (`1.2 m`, `36 in`). Les colonnes Oui / Non acceptent yes, no, true, false, 1 ou 0, et un paramètre sans colonne garde sa valeur par défaut. Chaque ligne devient une dimension, en une seule étape que vous pouvez annuler ; une dimension déjà présente est ignorée. Une ligne qui ne peut pas être lue, ou que la famille ne peut pas dessiner, refuse tout le tableau et indique sa ligne. 200 lignes au maximum et 1 Mo. {{ui:Save the sizes as a table}} réécrit le même tableau.

## Définir pour chaque élément

Un paramètre marqué **Par élément** dans l'éditeur (un Oui / Non qui ajoute une imposte, une étiquette ou un matériau) ne fait pas partie d'une dimension : deux portes d'une même dimension peuvent être différentes. Sélectionnez l'élément : **Propriétés** affiche ces paramètres ; si vous en modifiez un, cet élément est redessiné avec sa propre forme (le mobilier et les équipements reçoivent une forme propre, les portes et fenêtres sont refaites dans leurs murs). Si vous remettez tous ces paramètres à leurs valeurs par défaut, l'élément reprend la forme de sa dimension.

## Niveau de détail

{{ui:Build}} › {{ui:Families…}} › **Niveau de détail** définit, pour chaque famille du modèle, ce qui est enregistré dans les solides et dessiné dans les symboles en plan : **Fin** conserve tout, **Moyen** et **Grossier** omettent les parties que l'éditeur marque comme plus fines (fichiers plus petits, affichages plus rapides). **Automatique** enregistre tout et laisse la vue de la feuille choisir selon son échelle : 1:50 et plus grand en fin, 1:100 en moyen, 1:200 et plus petit en grossier. Une seule étape que vous pouvez annuler.

## Dupliquer une famille

Vous n'êtes pas obligé de partir de zéro. {{ui:Duplicate}} copie une famille avec ses paramètres, ses solides et ses dimensions sous un nouveau nom. Modifiez la copie dans l'éditeur ; l'original reste inchangé.

## Fichiers de famille

- {{ui:Save the family file}} enregistre un `.ccfamily.json` : les paramètres, les solides et les dimensions de la famille. Ouvrez-le dans un autre modèle avec {{ui:Open a family file…}} dans le groupe Familles.
- {{ui:Save as IFC}} enregistre la famille sous forme de petit fichier IFC : les types de ses dimensions et son groupe, déclarés par une bibliothèque de projet IFC. Les autres logiciels l'ouvrent comme un ensemble de types ; BimCraft la rouvre comme famille.

Un fichier de famille ouvert ici est lu comme des données et vérifié avant toute écriture. Une famille dont la clé existe déjà dans le modèle est importée comme famille distincte. Une famille qui en contient d'autres (voir **Familles incluses** dans l'aide de l'éditeur) les apporte avec elle : le fichier les liste, et le modèle conserve celles qu'il possède déjà.

## Familles dans la Bibliothèque

Ouvrez {{ui:Families…}} et choisissez {{ui:From the Library…}} pour voir les familles partagées dans la Bibliothèque. {{ui:Add to this project}} lit l'une d'elles comme un fichier de famille : BimCraft vérifie chaque champ avant de créer quoi que ce soit, la famille est importée comme famille à part entière et s'ouvre dans l'éditeur. L'ajout correspond à une seule étape d'annulation. Pour partager la vôtre, utilisez {{ui:Save all as a library}} et envoyez le fichier à la Bibliothèque (l'équipe de la Bibliothèque publie un fichier de famille à l'aide d'une commande, et chaque famille constitue un élément distinct avec ses dimensions). Si la Bibliothèque est injoignable, la liste l'indique et rien ne change.

## Types issus d'autres logiciels

Les types créés par d'autres logiciels apparaissent aussi dans le groupe Familles, regroupés selon une hypothèse : par la partie du nom de leurs éléments située avant les deux-points, sinon par des noms de types qui ne diffèrent que par leurs chiffres. La fenêtre de la famille indique l'hypothèse retenue. Ils sont listés et vous pouvez sélectionner leurs éléments, mais ils ne sont pas modifiables ici : ils n'ont pas de recette de famille.

:::note
Les portes et fenêtres de départ sont dessinées exactement comme avant les familles. Les fichiers créés avant les familles s'ouvrent sans modification : leurs portes et fenêtres apparaissent sous leur famille avec les dimensions utilisées, et passent sur une dimension qui leur est propre la première fois que vous les modifiez.
:::

Voir aussi [Modifier une famille](topic:family-editor) et [Portes et fenêtres](topic:doors-and-windows).
