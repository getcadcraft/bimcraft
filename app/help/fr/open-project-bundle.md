---
title: Ouvrir un bundle de projet
summary: Un bundle de projet est un seul zip qui contient un modèle, ses vues, ses présentations et ses groupes de propriétés. Ouvrez-le, affichez une vue avec son niveau et ses calques, ouvrez une présentation et consultez les propriétés dans les groupes propres au projet.
keywords: bundle, bundle de projet, ccbundle, zip, vues, carte des vues, présentations, classeur de présentations, combinaison de calques, groupes de propriétés, normes, pln, gabarit
from: b5b86e8f
---

## Ce que vous allez faire

Ouvrir un **bundle de projet** (`.ccbundle.zip`) et travailler avec le projet tel qu'il a été organisé : ses vues, ses présentations et ses groupes de propriétés, par-dessus le modèle.

Un bundle contient :

- le modèle au format IFC,
- les présentations au format PDF et DWG,
- une liste de ce que l'IFC ne transporte pas : les vues (chacune avec son niveau, sa combinaison de calques et son échelle), les présentations et les dessins placés dessus, les définitions de propriétés dans leurs groupes, les classifications, et les normes telles que calques, jeux de stylos, types de ligne, remplissages, surfaces et composites.

Les bundles sont produits par un script open source qui s'exécute dans Archicad et demande à Archicad lui-même ces listes. BimCraft ne lit jamais directement les fichiers `.pln` ou `.tpl` ; voir [Ouvrir les fichiers de projet .pln et .pla](topic:pln-project-files).

## Créer un bundle

Le script est une version préliminaire : il n'a pas encore été testé sur toutes les versions d'Archicad. Récupérez-le sur [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Il faut Archicad 24 ou ultérieur et Python 3.8 ou ultérieur ; rien d'autre à installer.

1. Enregistrez `archicad_bundle.py` dans un dossier, par exemple `C:\cc-bundle`.
2. Dans Archicad, ouvrez le projet et créez un jeu de publication nommé exactement **CadCraft bundle** : la vue 3D au format IFC, chaque présentation en PDF, et chaque présentation à nouveau en DWG, publiés dans des fichiers sur le disque, dans un seul dossier à plat.
3. Le projet étant ouvert, exécutez une fois `python archicad_bundle.py --probe --out .`. Ce script ne fait que lire et écrit `probe.json`.
4. Exécutez `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (en utilisant le traducteur IFC que vous avez choisi). Archicad publie le jeu, et le script produit `<projet>.ccbundle.zip`.

Si la publication par le script échoue, publiez le jeu à la main et exécutez `python archicad_bundle.py --out . --no-publish --files <dossier>\*.ifc <dossier>\*.pdf <dossier>\*.dwg`. Le fichier README du dépôt détaille toutes les options. Si un élément n'arrive pas, ouvrez un ticket dans ce dépôt et joignez `probe.json`.

## Ouvrir un bundle

1. Cliquez sur {{ui:Choisir un fichier}}, ou déposez le `.ccbundle.zip` sur BimCraft. Dans un dossier ouvert avec {{ui:Ouvrir un dossier}}, les bundles figurent sous **Bundles de projet** ; cliquez sur l'un d'eux par son nom.
2. Le modèle s'ouvre comme tout fichier IFC, et la section **Bundle de projet** apparaît à gauche, sous les informations du fichier.

Rien n'est téléversé : le bundle est lu sur votre ordinateur, un fichier à la fois, de sorte qu'un grand modèle n'est pas copié deux fois.

## Afficher une vue

Sous **Vues**, les vues sont regroupées selon les dossiers qu'elles avaient dans le projet. Cliquez sur le nom d'une vue :

- **Un plan** n'affiche que son niveau, vu d'en haut.
- **Sa combinaison de calques** masque les éléments situés sur les calques que cette combinaison masque. La ligne d'état indique combien d'éléments ont été masqués.
- **Son échelle** s'affiche à côté du nom et dans la ligne d'état.
- **Une vue 3D** affiche tous les niveaux.

Pour tout réafficher, utilisez {{ui:Tout afficher}} dans {{ui:Afficher}} et cochez tous les niveaux.

:::note
BimCraft retrouve les calques grâce aux affectations de calques du fichier IFC. Si l'IFC a été exporté sans elles, une combinaison de calques ne masque rien, et la ligne d'état indique 0 élément masqué.
:::

## Ouvrir une présentation

Sous **Présentations**, chaque présentation affiche son numéro, son nom, son format de papier et les vues placées dessus.

- **PDF** enregistre le PDF de la présentation depuis le bundle.
- **DWG** ouvre le dessin de la présentation dans la vue 2D. Cliquez sur une vue quelconque pour revenir au modèle.
- **Ouvrir dans …** envoie le fichier de la présentation à l'application qui le traite, dans un nouvel onglet : le PDF vers MarkupCraft, le DWG vers CadCraft. Cette option n'apparaît que lorsque cette application est ouverte à côté de BimCraft. Le fichier est lu depuis le bundle pendant le chargement de l'onglet, et rien n'est téléversé.

Une présentation sans l'un ni l'autre affiche **Aucun fichier dans le bundle**.

## Consulter les propriétés dans les groupes du projet

Choisissez un élément. **Groupes de propriétés** affiche ses propriétés sous les groupes définis par le projet, associés via le jeu de propriétés et le nom que la définition donne pour l'IFC, ou sinon par son nom. Les autres restent dans {{ui:Propriétés}} comme d'habitude. **Définitions de propriétés** liste chaque définition avec son groupe, son type et son nom IFC.

## Normes et remarques

- **Normes** compte les calques, combinaisons de calques, jeux de stylos, types de ligne, remplissages, surfaces, composites et matériaux du bundle.
- **Remarques** liste ce que le script n'a pas pu obtenir de cette version d'Archicad, les champs que BimCraft n'a pas pu lire, et les fichiers que le bundle nomme sans les contenir.

## Dépannage

- **« … est un zip mais pas un bundle de projet. »** Le zip ne contient pas de `manifest.json`. Décompressez-le et ouvrez le fichier `.ifc` qu'il contient.
- **« … est un bundle de projet plus récent que ceux que BimCraft lit. »** Mettez BimCraft à jour.
- **« … ne contient pas le modèle que son manifeste nomme. »** Le zip a été tronqué ou modifié. Recréez le bundle.
- **Une vue affiche tous les niveaux.** Son niveau ne figure pas dans l'IFC du modèle (la ligne d'état l'indique). Vérifiez que l'export IFC incluait ce niveau.

Voir aussi [Travailler entre deux programmes BIM](topic:two-bim-programs) et [Ce que BimCraft lit dans chaque format](topic:file-formats).
