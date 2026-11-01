---
title: Les fichiers que BimCraft ouvre et enregistre
summary: Chaque format que BimCraft ouvre, ce qu'il conserve, ce qu'il enregistre, où vont les fichiers enregistrés, et ce qui change selon le navigateur et hors ligne.
keywords: formats, ouvrir, enregistrer, exporter, télécharger, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, téléverser, confidentialité, taille de fichier
from: a1f0161b
---

BimCraft lit les fichiers sur votre ordinateur, dans l'onglet du navigateur. **Rien n'est téléversé** vers CadCraft ni vers personne d'autre. Quand vous enregistrez, BimCraft remet au navigateur un nouveau fichier à télécharger ; il n'écrase jamais un fichier que vous avez ouvert.

## Ce qu'il ouvre

| Format | Extensions | Ce que vous obtenez |
|---|---|---|
| IFC | `.ifc` | Le modèle en 3D, les niveaux, le nombre d'éléments et les propriétés de chaque élément. Les noms, les repères et les valeurs de propriétés individuelles peuvent être modifiés. |
| Fichiers de projet et de famille | `.rvt` `.rfa` `.rte` `.rft` | Une fiche de fichier : version, build, travail collaboratif, informations du projet, paramètres de famille, fichiers liés et image d'aperçu. Pas de 3D. |
| DWG | `.dwg` | Le dessin en 2D : espace objet, chaque feuille, calques, dessins liés, images et vue d'impression. L'espace objet aussi en 3D. Les formats d'AutoCAD 2000 à 2018 sont ceux qui ont été vérifiés. |
| DXF | `.dxf` | Comme le DWG. |
| STEP | `.step` `.stp` | Une pièce, un équipement ou un modèle de fournisseur (AP203, AP214, AP242) en 3D : chaque solide devient un élément (un proxy d'élément de construction) d'un petit modèle IFC sur un seul niveau, lu sous forme de triangles à sa taille réelle, un assemblage avec chaque pièce là où le fichier la place. À partir de là, il fonctionne comme n'importe quel IFC : propriétés, coupes, mesure, enregistrement en IFC. Les couleurs et l'arborescence de l'assemblage ne sont pas lues. |
| Nuages de points | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Le scan dans la vue 3D, à côté d'un modèle ou seul : consultez [Afficher un nuage de points à côté du modèle](topic:point-clouds). |
| Lot de projet | `.ccbundle.zip` | Le modèle avec ses vues, ses présentations et ses groupes de propriétés : consultez [Ouvrir un lot de projet](topic:open-project-bundle). |
| Un dossier | tout | Un rapport sur chaque modèle, dessin et lot de projet qu'il contient. Tout IFC, modèle, dessin ou lot du rapport s'ouvre d'un clic. |

[Ce que BimCraft lit dans chaque format](topic:file-formats) entre dans le détail.

BimCraft détermine la nature d'un fichier en regardant ses premiers octets autant que son nom ; un fichier de projet avec une extension inhabituelle s'ouvre donc quand même comme une fiche de fichier.

### Non ouverts

- `.ifczip` et `.ifcxml` : BimCraft indique « .ifczip n'est pas encore pris en charge. Enregistrez ou exportez le modèle en fichier .ifc simple. » Décompressez le `.ifczip` (il contient un `.ifc` simple) ou exportez de nouveau en IFC simple.
- Les dessins DGN sont listés dans un rapport de dossier mais ne s'ouvrent pas.
- Les PDF, les images et les fichiers bureautiques ne s'ouvrent pas seuls. Les images servent d'images à l'intérieur d'un DWG, et {{ui:Construire}} › {{ui:Depuis un dessin…}} transforme les pages d'un PDF ou d'un scan en murs : consultez [Des murs à partir d'un jeu de plans](topic:walls-from-plans).

## Ce qu'il enregistre

| Vous cliquez sur | Vous obtenez | Où |
|---|---|---|
| {{ui:Enregistrer au format IFC}} | Un nouveau fichier IFC avec vos modifications, nommé « *nom d'origine* (edited).ifc » | Le dossier de téléchargements de votre navigateur |
| {{ui:Télécharger le CSV}} dans la nomenclature d'équipements | Un CSV des éléments de la liste, nommé « *nom du dessin* equipment.csv » | Le dossier de téléchargements de votre navigateur |

D'autres choses sont enregistrées là où elles sont créées, chacune dans sa propre rubrique : {{ui:USD}} ([Exporter le modèle en USD](topic:usd)), le .glb {{ui:Pour le rendu}}, les images de rendu, les feuilles et les plans en PDF, les nomenclatures et les listes en CSV, les problèmes BCF, le tableur COBie, les fichiers de famille, et les scans recalés en LAS ou E57. BimCraft n'enregistre pas les fichiers DWG, DXF ni de projet, et il ne modifie jamais les fichiers que vous avez ouverts.

:::chromium
Chrome et Edge enregistrent les téléchargements dans le dossier défini dans leurs paramètres, en général Téléchargements. Pour qu'on vous demande où enregistrer à chaque fois, activez « Demander où enregistrer chaque fichier avant de le télécharger » dans les paramètres de téléchargement du navigateur.
:::

:::firefox
Firefox enregistre dans le dossier Téléchargements, sauf si vous choisissez « Toujours vous demander où enregistrer les fichiers » dans ses paramètres.
:::

:::safari
Safari enregistre dans Téléchargements, sauf si vous choisissez un autre dossier sous **Safari > Réglages > Général > Emplacement des téléchargements**.
:::

## Enregistrer une deuxième fois

Chaque enregistrement télécharge le modèle entier avec **toutes les modifications depuis son ouverture**, pas seulement celles faites après le dernier enregistrement. La liste {{ui:Modifications}} repart vide après chaque enregistrement ; vous ne pouvez donc pas annuler au-delà d'un enregistrement. Pour repartir de l'original, ouvrez de nouveau le fichier d'origine.

## Fichiers volumineux et mémoire

- Les fichiers **IFC** sont lus entièrement dans la mémoire de l'onglet, et la géométrie 3D en demande davantage. Un modèle de quelques centaines de mégaoctets peut être trop lourd pour un ordinateur portable. Au-delà de 1,5 million de triangles, les arêtes sont désactivées pour économiser la mémoire (« Les arêtes sont désactivées pour les très grands modèles »).
- Les **fichiers de projet** ne sont pas lus en entier. BimCraft ne lit que les petites parties dont il a besoin, d'environ 40 Ko à 100 Ko quelle que soit la taille du fichier ; un modèle central de 500 Mo sur un lecteur réseau s'ouvre donc en un instant.
- Les fichiers **DWG et DXF** sont lus entièrement. Un très gros dessin affiche « Ce dessin est très volumineux ; seule une partie est affichée. »
- Les **dossiers** jusqu'à 20 000 fichiers s'ouvrent. Seuls les quelques kilo-octets nécessaires à la fiche de chaque modèle sont lus.

Consultez [Navigateurs, appareils et mémoire](topic:platforms) pour en savoir plus.

## En ligne et hors ligne

L'ouverture de fichiers n'a jamais besoin d'internet. Un seul lecteur se charge depuis le site la première fois que vous en avez besoin : le moteur IFC, la première fois que vous ouvrez un modèle IFC (« Démarrage du moteur IFC… »). Les lecteurs DWG et DXF font partie de l'application.

:::offline
Vous êtes hors ligne. Si le bouton de la barre de l'application indique {{ui:Prêt hors ligne}}, tous les formats s'ouvrent normalement. Sinon, un modèle IFC ne peut pas s'ouvrir, sauf si l'un d'eux a déjà été ouvert dans cet onglet : reconnectez-vous d'abord. Consultez [En ligne et hors ligne](topic:online-offline).
:::

Pour utiliser BimCraft sans connexion, cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application pendant que vous êtes en ligne et attendez {{ui:Prêt hors ligne}}. La copie enregistrée fait environ 33 Mo ; elle comprend le moteur IFC, donc les modèles IFC s'ouvrent aussi hors ligne. [Travailler hors ligne](common:offline) explique les copies enregistrées en général.

## Enregistrement dans le cloud

L'enregistrement dans le cloud n'est pas encore disponible. Enregistrez vos copies modifiées sur votre propre ordinateur ou sur le serveur de fichiers de votre bureau, comme n'importe quel autre fichier. Consultez [Vos fichiers](common:your-files).
