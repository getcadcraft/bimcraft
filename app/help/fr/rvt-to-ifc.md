---
title: Du fichier de projet à BimCraft via IFC
summary: Les réglages d'export IFC qui s'ouvrent le mieux dans BimCraft (version, ensembles de propriétés, quantités de base, pièces, modèles liés, coordonnées), comment ouvrir le résultat et ce que l'export conserve.
keywords: export, export ifc, rvt vers ifc, convertir, 3d, géométrie, ifc2x3, ifc4, vue de coordination, vue de référence, vue de transfert de conception, ensembles de propriétés, quantités de base, pièces, espaces, fichiers liés, coordonnées partagées, point topographique, point de base du projet, réglages
from: 3efd5fc9
---

## Ce que vous allez faire

Transformez un fichier de projet en fichier IFC que vous pouvez faire pivoter, inspecter, vérifier et modifier dans BimCraft. BimCraft ne lit pas encore le modèle 3D contenu dans un fichier `.rvt` : l'export se fait donc dans le logiciel qui a créé le fichier (Revit), et BimCraft ouvre le résultat.

## Étapes

1. Ouvrez le projet dans le logiciel qui l'a créé. La fiche de BimCraft indique la version dans laquelle il a été enregistré.
2. Ouvrez une vue 3D qui montre ce que vous voulez exporter.
3. Choisissez **Fichier > Exporter > IFC**.
4. Dans la boîte de dialogue d'export, choisissez une configuration (ou **Modifier la configuration…**) avec les réglages ci-dessous.
5. Choisissez un dossier et un nom de fichier, puis exportez.
6. Dans BimCraft, cliquez sur {{ui:Choisir un fichier}} et choisissez le nouveau fichier `.ifc`. Les modèles liés exportés en fichiers distincts s'ouvrent dans la même scène avec {{ui:Ajouter un modèle}}.

## Les réglages qui s'ouvrent le mieux ici

| Réglage dans l'exporteur | Choisir | Pourquoi |
|---|---|---|
| Version IFC | **IFC4 Reference View** pour consulter, vérifier et établir les métrés ; **IFC2X3 Coordination View 2.0** lorsque d'autres ont besoin d'IFC2X3 | Les deux s'ouvrent entièrement. **IFC4 Design Transfer View** s'ouvre aussi, avec des formes plus exactes, mais le fichier est plus lourd et plus lent. |
| Type de fichier | **IFC** (simple) | BimCraft n'ouvre pas `.ifczip` ni `.ifcxml`. |
| Phase / éléments visibles | La phase voulue, et **Exporter uniquement les éléments visibles dans la vue** lorsque vous réglez la vue 3D pour cela | Exclut ce que vous avez masqué volontairement. |
| Ensembles de propriétés | **Exporter les ensembles de propriétés Revit** et **Exporter les ensembles de propriétés IFC communs** | Ils deviennent les ensembles de propriétés que BimCraft affiche dans {{ui:Propriétés}}, et que {{ui:Rechercher}}, {{ui:Couleur}} et {{ui:Contrôles du modèle}} utilisent. |
| Quantités de base | **Exporter les quantités de base** | {{ui:Totaux des quantités}} et les nomenclatures les utilisent (longueurs, surfaces, volumes) au lieu de les estimer. |
| Pièces et surfaces | **Exporter les pièces dans les vues 3D** (ou l'option Pièces / Espaces) | Les pièces arrivent comme espaces : cliquez sur {{ui:Espaces}} pour les voir. |
| Fichiers liés | **Exporter les fichiers liés en IFC distincts** | Chaque lien devient son propre fichier ; ouvrez-les ensemble avec {{ui:Ajouter un modèle}} et ils s'alignent. |
| Base des coordonnées | **Coordonnées partagées** (ou le point topographique) | Le fichier porte alors sa position sur la carte (IfcMapConversion), de sorte que Mesure › Localisation, les couches cartographiques au sol et les nuages de points placés par coordonnées cartographiques fonctionnent. Le point de base du projet garde le modèle près de l'origine, mais sans sa position sur la carte. |
| Diviser murs et poteaux par niveau | Activé, si vous établissez des métrés par étage | La partie de chaque étage est un élément distinct. |

## Ce que vous devez voir

Le modèle en 3D, avec les étages repris des niveaux du projet et les informations du projet dans le panneau {{ui:Fichier}}. **Exporté depuis** indique l'exporteur.

## Ce que l'export conserve, et ce qu'il ne conserve pas

- **Conservé** : la géométrie, les étages, les types d'éléments, les noms, les types, la plupart des paramètres (sous forme d'ensembles de propriétés), les quantités de base si elles sont demandées, les pièces en tant qu'espaces, et la position sur la carte avec les coordonnées partagées.
- **Non conservé** : les vues, les feuilles, les annotations, les familles en tant que familles modifiables, les ensembles de travail et les options de conception. Un fichier IFC est un instantané des éléments du modèle, pas du projet. Pour les feuilles, exportez en DWG et ouvrez-le dans la vue 2D.

## Erreurs fréquentes

- **Paramètres absents dans BimCraft.** Activez les options d'ensembles de propriétés ci-dessus et exportez à nouveau.
- **Pièces absentes.** Activez l'option des pièces, puis cliquez sur {{ui:Espaces}}.
- **Enregistrer en `.ifczip`.** Choisissez l'IFC simple, ou décompressez le `.ifczip`.
- **Pas de position sur la carte.** Exportez avec les coordonnées partagées ; vérifiez que le point topographique du projet est défini.
- **Attendre que les modifications reviennent dans le projet.** Les modifications que vous enregistrez dans BimCraft vont dans un nouveau fichier IFC, pas dans le fichier du projet.
