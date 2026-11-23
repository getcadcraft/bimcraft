---
title: Apporter vos propres objets et fichiers de famille dans la Bibliothèque
summary: Lisez les fichiers de famille (.rfa) ainsi que les fichiers IFC, DWG, DXF, glTF ou OBJ dans l'onglet Bibliothèque, placez-les comme n'importe quel élément de bibliothèque, et conservez-les dans Mes objets, une liste privée que vous seul pouvez voir.
keywords: rfa, famille, familles, bibliothèque de familles, mes objets, objets privés, bibliothèque privée, importer des objets, contenu fabricant, objets BIM, objet ifc, gltf, obj, bloc dwg, conserver, basculer, migrer
from: 886261f8
---

## Ce que vous allez faire

Apportez dans BimCraft les objets que vous avez déjà : une bibliothèque de familles issue de Revit, un téléchargement IFC ou DWG d'un fabricant, un maillage venu d'un autre logiciel de modélisation. Vous lisez le fichier dans l'onglet {{ui:Bibliothèque}}, placez l'objet dans votre modèle comme un vrai élément IFC et, si vous voulez le réutiliser plus tard, conservez-le dans {{ui:Mes objets}}.

## Étapes

1. Ouvrez un modèle IFC, ou commencez un nouveau bâtiment.
2. Cliquez sur l'onglet {{ui:Bibliothèque}} à côté de {{ui:Propriétés}}.
3. Cliquez sur {{ui:Fichiers…}}, puis sur {{ui:Choisir un fichier…}}. Choisissez un fichier ou plusieurs à la fois : `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ou `.csv`. Ou cliquez sur {{ui:Choisir un dossier…}} pour lire un dossier entier et les dossiers qu'il contient (jusqu'à 200 fichiers d'un coup).
4. Cliquez sur une carte pour voir ce qui a été lu : l'aperçu du plan, le nom, le fabricant et le modèle, les dimensions et les notes.
5. Cliquez sur {{ui:Placer sur le plan}} ou {{ui:Placer dans le modèle}} pour le placer.
6. Pour le réutiliser dans d'autres projets, cliquez sur {{ui:Conserver dans mes objets}}. Quand plusieurs fichiers sont lus, {{ui:Tout conserver dans mes objets}} les garde tous d'un coup.
7. Plus tard, cliquez sur {{ui:Mes objets}} dans l'onglet Bibliothèque pour les retrouver. Ils sont placés, remplacés et mis à jour comme n'importe quel élément de bibliothèque.

Les fichiers sont lus dans cet onglet. Rien n'est téléversé tant que vous ne choisissez pas {{ui:Conserver dans mes objets}}.

## Ce qui est lu selon le type de fichier

| Fichier | Ce que vous obtenez |
|---|---|
| IFC | Chaque type d'élément en objet avec sa vraie forme 3D, sa classe IFC et ses ensembles de propriétés |
| glTF, GLB, OBJ | Un objet avec sa vraie forme 3D en maillage. Réglez d'abord les unités et le sens de l'axe vertical. |
| DWG, DXF | Chaque bloc en objet avec son dessin de plan et ses attributs |
| Fichier de famille (`.rfa`) | Le nom de la famille, sa catégorie, son fabricant, son modèle, ses paramètres et ses types. **Pas sa forme 3D :** une boîte aux dimensions Width, Depth et Height de la famille la remplace. |
| CSV | Un objet par ligne : nom, dimensions et données, dessiné sous forme de boîte |

## Fichiers de famille et leur forme 3D

La forme 3D d'un fichier `.rfa` est stockée dans un format non documenté ; BimCraft lit donc les données de la famille et ne devine pas sa géométrie. La carte l'indique : « Géométrie non lue depuis cette famille ; une boîte la remplace. »

Pour importer une famille avec sa vraie forme, exportez-la depuis le logiciel qui l'a créée (Revit) :

1. Ouvrez la famille, ou un projet où la famille est placée.
2. Choisissez **Fichier > Exporter > IFC**. Voir [les réglages d'export qui s'ouvrent le mieux ici](topic:rvt-to-ifc).
3. Dans BimCraft, lisez le fichier `.ifc` avec {{ui:Fichiers…}}. Chaque type de famille arrive comme son propre objet, avec sa forme et ses ensembles de propriétés.

Beaucoup de fabricants proposent un téléchargement IFC ou DWG à côté du fichier de famille. Ceux-ci se lisent directement.

## Types de famille

Une famille avec plusieurs types arrive comme un seul élément avec un choix {{ui:Variante}}, une variante par type. Chaque variante a les valeurs qui diffèrent entre les types, et sa propre boîte quand le type a une Width et une Depth. Une famille à un seul type est un élément simple, rempli avec les valeurs de ce type.

Certaines familles gardent leurs types dans un catalogue de types : un fichier `.txt` de même nom à côté du fichier de famille. Choisissez les deux ensemble, ou choisissez le dossier, et les lignes du catalogue deviennent les variantes.

## Les données d'une famille sur une vraie forme

Si un dossier contient un fichier de famille et un fichier IFC, glTF ou OBJ de même nom (`Chair.rfa` et `Chair.ifc`), choisissez les deux ensemble ou choisissez le dossier. BimCraft crée un seul élément : le fichier de famille donne le nom, le fabricant, le modèle, les paramètres et les types, et l'autre fichier donne la vraie forme 3D. Les notes indiquent le fichier d'où vient la forme. Une seule forme sert à tous les types.

Quand un fichier de famille contient une image enregistrée, le détail de l'élément affiche cette image sous le dessin de plan. L'image n'est affichée qu'à cet endroit ; elle n'est pas conservée avec l'élément.

## Mes objets

{{ui:Mes objets}} est votre propre liste privée dans la Bibliothèque. Vous seul voyez son contenu : elle ne figure pas dans la bibliothèque publique, ni dans la recherche, ni chez votre équipe. Elle suit votre compte : les mêmes objets sont là sur un autre ordinateur, une fois connecté à la bibliothèque.

- Vous devez être connecté à la bibliothèque pour conserver un objet. Voir [se connecter à la bibliothèque](topic:library-credits).
- Conserver un objet envoie seulement cet objet à votre compte. Jusque-là, il reste sur votre ordinateur.
- {{ui:Retirer de mes objets}} retire un objet de la liste. Les copies déjà placées dans les dessins restent.
- Pour partager un objet avec tout le monde, téléversez-le plutôt dans la bibliothèque publique, sous une licence de votre choix.

:::note
Mes objets est en cours de test et peut ne pas encore être ouvert pour votre compte. Si la source manque, ou si le message indique « Mes objets n'est pas encore ouvert pour ce compte », vous pouvez quand même lire et placer vos propres fichiers avec {{ui:Fichiers…}} ; ils sont alors enregistrés dans votre modèle.
:::

## Erreurs fréquentes

- **Attendre la vraie forme de la famille depuis un `.rfa`.** Seules ses données sont lues. Exportez en IFC pour obtenir la forme.
- **Deux éléments là où vous en attendiez un.** Une famille et son fichier de forme ne sont réunis que si leurs noms correspondent exactement, hors extension, et qu'ils sont dans le même dossier.
- **Un maillage arrive mille fois trop grand ou couché.** Réglez {{ui:Unités du fichier}} et {{ui:Axe vertical d'un maillage}} sous {{ui:Fichiers…}} avant de choisir le fichier.
- **« No family data » sur un fichier.** C'est un projet (`.rvt` enregistré avec une autre extension) ou un gabarit de famille, et non une famille. Voir [Lire un fichier de projet ou de famille](topic:read-rvt-file).
- **Conserver un contenu que vous n'avez pas le droit de stocker.** Certaines bibliothèques payantes n'autorisent pas les copies hors de leur propre service. Vérifiez les conditions des contenus que vous n'avez pas créés.
