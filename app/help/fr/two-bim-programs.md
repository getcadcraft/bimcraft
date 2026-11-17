---
title: Travailler entre deux programmes BIM
summary: Envoyer un modèle d'un programme BIM à un autre par IFC, avec BimCraft au milieu, conserver ses GlobalIds, ses ensembles de propriétés et ses classifications, configurer les deux programmes pour les mêmes propriétés, et voir ce qui est revenu.
keywords: ifc, aller-retour, interopérabilité, globalid, guid, ensembles de propriétés, psets, classifications, paramètres partagés, correspondance des propriétés, traducteur, bcf, coordination, échange
from: 9f224176
---

## Ce que vous allez faire

Déplacer un modèle entre deux programmes BIM, par exemple de Revit vers Archicad et retour, par IFC, avec BimCraft au milieu pour le vérifier, y ajouter des éléments et établir le rapport de ce qui a survécu. Le format de fichier propre à aucun des deux programmes n'est lu : tout circule en IFC.

## Ce que BimCraft conserve

Lorsque vous modifiez un modèle dans BimCraft et cliquez sur {{ui:Save as IFC}}, chaque ligne que vous n'avez pas modifiée est réécrite exactement comme elle était. Ainsi :

- Les **GlobalIds** restent identiques, et l'autre programme peut associer chaque élément à celui qu'il a envoyé.
- Les **ensembles de propriétés** et leurs valeurs restent, à l'exception des valeurs que vous avez modifiées.
- Les **classifications** restent rattachées à leurs éléments.

## Configurer les deux programmes pour les mêmes propriétés

1. Ouvrez le modèle dans BimCraft (et le lot de projet, si vous en avez un : ses groupes de propriétés sont ajoutés).
2. Dans le panneau de gauche, ouvrez {{ui:Between two BIM programs}}.
3. Sous **Correspondance des propriétés**, téléchargez ce dont chaque programme a besoin :
   - {{ui:Shared parameters}} : un fichier de paramètres partagés. Dans Revit, chargez-le avec Gérer › Paramètres partagés et ajoutez les paramètres aux catégories qui en ont besoin.
   - {{ui:IFC export property sets}} : un fichier d'ensembles de propriétés définis par l'utilisateur. Dans les paramètres d'export IFC de Revit, choisissez-le sous les ensembles de propriétés définis par l'utilisateur, afin que l'IFC exporté porte les mêmes noms d'ensembles et de propriétés.
   - {{ui:Mapping table (CSV)}} : chaque propriété avec son ensemble IFC et son nom, son type, et les noms correspondants dans chaque programme. Les fichiers de correspondance d'Archicad ne sont pas un format publié : configurez donc son traducteur IFC et son gestionnaire de propriétés à la main à partir de ce tableau.
   - {{ui:Mapping file}} : la correspondance complète dans un seul fichier, à conserver avec le projet.

Les ensembles standard (Pset_ et Qto_) sont exclus du fichier de paramètres partagés : les deux programmes les écrivent à partir de leurs propres données.

## Envoyer le modèle et le récupérer

1. Exportez l'IFC depuis le premier programme en conservant les GlobalIds (Revit : option « Stocker le GUID IFC dans un paramètre d'élément après l'export » activée).
2. Ouvrez-le dans BimCraft, vérifiez-le ({{ui:Model checks}}, {{ui:Clash check}}), ajoutez des {{ui:Issues}} (BCF), modifiez les valeurs si nécessaire, puis {{ui:Save as IFC}}.
3. Ouvrez l'IFC enregistré dans le second programme, travaillez dessus, et exportez l'IFC depuis là en conservant les GlobalIds (traducteur d'Archicad : « Identifiants uniques globaux : conserver les existants »).
4. De retour dans BimCraft, ouvrez le modèle qui est parti, puis ajoutez celui qui est revenu ({{ui:Add a model}} sous Modèles).
5. Dans {{ui:Between two BIM programs}}, choisissez **Envoyé** et **Reçu**, puis cliquez sur {{ui:Make the report}}.

## Lire le rapport

- **Éléments** : combien sont revenus avec le même GlobalId, combien manquent, et combien sont nouveaux. Les éléments dont le GlobalId a changé apparaissent comme un élément manquant et un nouveau : l'autre programme ne l'a pas conservé.
- **Classe IFC modifiée** : éléments revenus sous une autre nature d'élément.
- **Valeurs de propriétés conservées** : la part des valeurs revenues inchangées. La liste ci-dessous présente les propriétés comptant le plus de valeurs modifiées ou manquantes.
- **Classifications** : conservées, modifiées (même système, autre code) ou manquantes.

{{ui:Download the report (CSV)}} donne chaque propriété avec ses décomptes. Pour voir quels éléments ont bougé ou changé de forme, utilisez {{ui:Compare versions}} sur les deux mêmes modèles.

:::note
BimCraft ne fait fonctionner aucun des deux programmes. Le réglage qui transporte une valeur dépend des paramètres IFC de chaque programme : le rapport indique ce qui est réellement revenu, donc essayez un réglage, réexportez et comparez.
:::

## Les problèmes voyagent en BCF

Les problèmes que vous signalez dans BimCraft s'exportent en BCF ({{ui:Issues}}), que les deux programmes peuvent lire avec leurs outils BCF. Une question sur un élément parvient ainsi à la personne qui travaille dans l'autre programme, avec son point de vue.

Voir aussi [Ouvrir un lot de projet](topic:open-project-bundle), [D'un fichier de projet à BimCraft par IFC](topic:rvt-to-ifc) et [Comparer deux versions d'un modèle](topic:compare-versions).
