---
title: Ouvrir et exporter IFC5 alpha (fichiers IFCX)
summary: Une option de laboratoire pour le format de fichier IFC5 alpha (.ifcx) : ouvrir un fichier avec ses couches, voir ce que la lecture n'a pas pu vérifier, et exporter les modèles ouverts. Le format évolue encore : lisez d'abord.
keywords: ifc5, ifcx, alpha, buildingsmart, json, couches, schéma, laboratoire, quantités, qto, exporter, importer
from: cffe1669
---

IFC5 alpha (fichier se terminant par {{ui:.ifcx}}) est le format de fichier que buildingSMART conçoit encore. Il n'est pas définitif : les fichiers, et notre lecture de ceux-ci, peuvent changer. C'est pourquoi il s'agit d'une option de laboratoire, et pourquoi il faut commencer par la lecture.

## L'activer

1. Choisissez {{ui:Paramètres}}, puis la section {{ui:IFC5 alpha (IFCX)}} de l'onglet BimCraft.
2. Cochez {{ui:IFC5 alpha (IFCX) - le format évolue encore ; lisez d'abord}}.

L'option est désactivée par défaut. Tant qu'elle l'est, un fichier .ifcx est refusé avec une phrase qui renvoie à cette page. {{ui:Ouvrir IFC5 alpha (.ifcx)…}} et le bouton d'export {{ui:IFC5 alpha}} apparaissent lorsqu'elle est activée.

## Ouvrir

- Choisissez un fichier .ifcx avec {{ui:Ouvrir un fichier ou un dossier}} (il remplace le modèle ouvert, après la question habituelle sur les modifications), ou
- choisissez {{ui:Ouvrir IFC5 alpha (.ifcx)…}} et sélectionnez plusieurs fichiers ensemble : le fichier, ses couches et les fichiers de schéma qu'il importe. Si un modèle est déjà ouvert, le fichier est **ajouté à côté** ; la croix de la liste des modèles le retire, ce qui constitue l'annulation.

Un fichier IFCX liste des nœuds (un chemin, ses enfants, ce qu'ils héritent, leurs attributs). Plusieurs fichiers peuvent décrire le même nœud : un fichier ultérieur (une couche) remplace les attributs d'un fichier antérieur, et un enfant nul retire un enfant. BimCraft compose ces fichiers, puis dessine le résultat comme un petit modèle IFC4 : projet, site, bâtiment, niveaux et éléments avec leurs noms, classes, propriétés, quantités, couleurs et maillages.

Rien n'est récupéré sur le réseau. Les fichiers de schéma qu'un fichier importe (par exemple `ifc@v5a.ifcx`) ne sont utilisés que si vous les avez choisis avec le fichier ; sinon le rapport le signale et les attributs sont lus sans vérification de type.

### Le rapport

Après l'ouverture, un rapport liste ce que la lecture a trouvé : des données qui ne correspondent pas à leur schéma, des fichiers de schéma non fournis, des attributs sans sens IFC ici. Les attributs sans correspondance sont **conservés** dans le modèle, et non supprimés, et sont réécrits à l'export.

## Correspondances

| Dans le fichier IFCX | Dans BimCraft |
|---|---|
| Un nœud avec une classe IFC (projet, site, bâtiment, niveau, mur …) | L'élément IFC4 correspondant ; une classe que cette lecture ne connaît pas devient un élément de bâtiment proxy |
| Le nom du nœud sous son parent | Le nom de l'élément |
| Attributs avec un type de quantité (longueur, surface, volume, masse …) | Un jeu de quantités IFC4 nommé `Qto_IFCX` (les jeux de quantités IFC4 restent des jeux `Qto_*` IFC4) |
| Autres attributs de propriété | Un jeu de propriétés nommé `Pset_IFCX` |
| Attributs de maillage et de transformation | Les triangles et le placement de l'élément ; les maillages invisibles ne sont pas dessinés |
| Couleur, opacité, matériau, classification | Style de surface, matériau et classification de l'élément |

Les unités sont prises en mètres, Z vers le haut : l'alpha annonce que les unités seront documentées plus tard.

## Exporter

Choisissez {{ui:IFC5 alpha}} dans la barre d'outils, lisez la remarque, puis cliquez sur {{ui:Exporter .ifcx}}. Le fichier porte notre propre en-tête (auteur CadCraft, version ifcx_alpha) et indique lui-même qu'il s'agit du format alpha. Chaque modèle est écrit dans ses propres coordonnées de fichier, en mètres, avec noms, classes, jeux de propriétés, quantités (en attributs avec leur type), couleurs et triangles. Les couches et l'héritage sont écrits à plat. Vérifiez le fichier dans le logiciel auquel vous l'envoyez.

## Limites

- La géométrie courbe (courbes, surfaces) n'est pas lue : seuls les maillages de triangles le sont.
- Les portes et fenêtres imbriquées dans un mur sont placées sur le niveau ; le mur d'où elles viennent n'est pas lié.
- Les noms des jeux `Qto_*` IFC4 sont conservés comme groupes d'attributs propres à nous (`cadcraft::qto::…`) ; le schéma alpha standard ne compte que quelques noms de quantités.
- Le format peut évoluer : un fichier fait aujourd'hui pourrait ne pas se lire demain.
