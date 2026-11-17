---
title: Ouvrir les fichiers de projet .pln et .pla
summary: Ce que BimCraft fait aujourd'hui avec les fichiers .pln, .pla, .tpl et .bpn, et comment exporter IFC et DWG depuis ces fichiers pour que le modèle et les dessins s'ouvrent ici.
keywords: pln, pla, tpl, bpn, fichier de projet, archive, gabarit, sauvegarde, export ifc, export dwg, traducteur, zones, présentations
from: 41fb921d
---

## Ce que vous allez faire

Ouvrir dans BimCraft un projet enregistré au format `.pln` (projet), `.pla` (archive avec sa bibliothèque), `.tpl` (gabarit) ou `.bpn` (sauvegarde). Ce sont les fichiers propres à Archicad.

## Ce qui s'ouvre aujourd'hui

- **Les fichiers de projet eux-mêmes ne s'ouvrent pas encore.** Leur format n'est pas publié, et BimCraft ne le lit pas encore. Quand vous en ouvrez un, BimCraft le signale et renvoie vers cette rubrique.
- **BimCraft vérifie les premiers octets du fichier.** Les projets Archicad à partir de la version 17 commencent par la même courte signature, de sorte que BimCraft peut vous dire avec certitude qu'un fichier est un projet Archicad. Un fichier au nom Archicad qui ne commence pas ainsi a probablement été renommé, est endommagé ou provient d'une version plus ancienne. La signature ne permet pas de distinguer un projet, une archive et un gabarit.
- **Un export IFC s'ouvre entièrement** : le modèle en 3D, les niveaux, les zones en tant qu'espaces, les données d'éléments, les ensembles de propriétés et les classifications, avec tous les outils de BimCraft.
- **Un export DWG s'ouvre** dans la vue 2D, avec ses calques et ses présentations, et dans {{ui:3D}}. Pour le modifier, utilisez {{ui:Modifier dans CadCraft}}.

Ou importez le projet complet sous forme d'un seul zip, avec ses vues, présentations et groupes de propriétés : voir [Ouvrir un ensemble de projet](topic:open-project-bundle).

## Exporter l'IFC (le modèle)

1. Ouvrez le projet dans Archicad.
2. Choisissez **Fichier > Enregistrer sous**, puis sélectionnez **IFC** comme type de fichier.
3. Choisissez un traducteur IFC (nom donné par Archicad à un ensemble de réglages d'export IFC). Le traducteur **IFC4 Reference View** ou **IFC2X3 Coordination View 2.0** convient à BimCraft. IFC4X3 s'ouvre aussi.
4. Choisissez ce qu'il faut exporter : tout le projet, ou seulement les éléments visibles sur les niveaux que vous regardez.
5. Enregistrez, puis cliquez sur {{ui:Choisir un fichier}} dans BimCraft et choisissez le fichier `.ifc`.

Vérifiez ces réglages du traducteur avant d'exporter :

- **Zones** : exportez-les, pour que les pièces arrivent en tant qu'espaces. Cliquez sur {{ui:Espaces}} dans BimCraft pour les voir.
- **Propriétés et classifications** : exportez-les, pour qu'elles apparaissent dans {{ui:Propriétés}} et puissent être utilisées dans {{ui:Rechercher}}, {{ui:Couleur}} et {{ui:Totaux des quantités}}.
- **`.ifc` simple**, et non `.ifczip` ni `.ifcxml`. BimCraft n'ouvre que le `.ifc` simple.

## Exporter le DWG (les dessins)

1. Ouvrez le plan, la coupe ou la présentation souhaitée.
2. Choisissez **Fichier > Enregistrer sous**, puis sélectionnez **DWG** comme type de fichier.
3. Choisissez un traducteur DXF-DWG, puis enregistrez.
4. Pour un jeu complet de feuilles, enregistrez les présentations depuis le Livre des mises en page, ou publiez-les en DWG.
5. Ouvrez le `.dwg` dans BimCraft. Les dessins liés par l'export s'ouvrent avec lui s'ils se trouvent dans le même dossier ; voir [Dessins et images liés](topic:dwg-linked-files).

## Dépannage

- **« … est un projet Archicad : ses premiers octets l'indiquent. »** Exportez en IFC ou DWG comme ci-dessus, et ouvrez ce fichier.
- **« … porte un nom de fichier Archicad mais ne commence pas comme lui. »** Vérifiez d'où vient le fichier : il peut s'agir d'un autre type de fichier renommé (essayez de l'ouvrir sous son extension réelle), d'une copie non terminée, ou d'un projet d'une version antérieure à 17. Ouvrez-le dans Archicad si possible, puis exportez en IFC ou DWG.
- **Le modèle s'ouvre sans pièces.** Les zones n'ont pas été exportées. Activez-les dans le traducteur IFC et exportez à nouveau.
- **Les ouvertures ne sont pas découpées.** BimCraft le signale sous **Pas encore dessiné** dans le panneau {{ui:File}}. Exportez à nouveau ; si le problème persiste, ouvrez le modèle dans le programme qui l'a créé et vérifiez les ouvertures là-bas.
- **Le texte du DWG a un aspect différent.** L'export peut conserver des polices que BimCraft ne possède pas ; BimCraft dessine le texte dans une police sans empattement simple.

Voir aussi [Obtenir un fichier de projet en 3D via IFC](topic:rvt-to-ifc) et [Ce que BimCraft lit dans chaque format](topic:file-formats).
