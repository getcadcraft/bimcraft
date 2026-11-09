---
title: Fichiers que BimCraft ouvre et enregistre
summary: Chaque format que BimCraft ouvre, ce qu'il conserve, ce qu'il enregistre, où vont les fichiers enregistrés, et ce qui change entre les navigateurs et hors ligne.
keywords: formats, ouvrir, enregistrer, exporter, télécharger, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, téléverser, confidentialité, taille de fichier
from: a7275dbf
---

BimCraft lit les fichiers de votre ordinateur, dans l'onglet du navigateur. **Rien n'est téléversé** vers CadCraft ni vers quiconque. Lorsque vous enregistrez, BimCraft remet au navigateur un nouveau fichier à télécharger ; il n'écrase jamais un fichier que vous avez ouvert.

## Ce qu'il ouvre

| Format | Extensions | Ce que vous obtenez |
|---|---|---|
| IFC | `.ifc` | Le modèle en 3D, les niveaux, le nombre d'éléments et toutes les propriétés de chaque élément. Les noms, les repères et les valeurs de propriété isolées peuvent être modifiés. |
| Fichiers de projet et de famille | `.rvt` `.rfa` `.rte` `.rft` | Une fiche de fichier : version, build, travail partagé, informations de projet, paramètres de famille, fichiers liés et image d'aperçu. Pas de 3D. |
| DWG | `.dwg` | Le dessin en 2D : espace objet, chaque feuille, calques, références externes, images et vue d'impression. L'espace objet en 3D également. Les formats d'AutoCAD 2000 à 2018 sont ceux qui ont été vérifiés. |
| DXF | `.dxf` | Identique à DWG. |
| STEP | `.step` `.stp` | Une pièce, un équipement ou le modèle d'un fournisseur (AP203, AP214, AP242) en 3D : chaque solide devient un élément (un élément de construction générique) d'un petit modèle IFC sur un seul niveau, lu en triangles à sa taille réelle, un assemblage avec chaque pièce à l'endroit où le fichier la place. Ensuite, il fonctionne comme tout IFC : propriétés, coupes, mesure, enregistrer au format IFC. Les couleurs et l'arborescence de l'assemblage ne sont pas lues. |
| Nuages de points | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Le relevé dans la vue 3D, à côté d'un modèle ou seul : voir [Afficher un nuage de points à côté du modèle](topic:point-clouds). |
| Paquet de projet | `.ccbundle.zip` | Le modèle avec ses vues, ses présentations et ses groupes de propriétés : voir [Ouvrir un paquet de projet](topic:open-project-bundle). |
| Un dossier | tous | Un rapport de chaque modèle, dessin et paquet de projet qu'il contient. Tout IFC, modèle, dessin ou paquet du rapport s'ouvre d'un clic. |

[Ce que BimCraft lit dans chaque format](topic:file-formats) entre dans le détail.

BimCraft détermine ce qu'est un fichier à partir de ses premiers octets autant que de son nom ; un fichier de projet à extension inhabituelle s'ouvre donc tout de même sous forme de fiche de fichier.

### Non ouverts

- `.ifczip` et `.ifcxml` : BimCraft affiche « .ifczip n'est pas encore pris en charge. Enregistrez ou exportez le modèle sous forme de fichier .ifc simple. » Décompressez le `.ifczip` (il contient un `.ifc` simple) ou exportez à nouveau au format IFC simple.
- Les dessins DGN sont listés dans un rapport de dossier, mais ne s'ouvrent pas.
- Les PDF, les images et les fichiers bureautiques ne s'ouvrent pas seuls. Les images sont utilisées comme images dans un DWG, et {{ui:Build}} › {{ui:Depuis un dessin…}} transforme les pages d'un PDF ou d'un scan en murs : voir [Murs à partir d'un jeu de plans](topic:walls-from-plans).

## Ce qu'il enregistre

| Vous cliquez sur | Vous obtenez | Où |
|---|---|---|
| {{ui:Enregistrer au format IFC}} | Un nouveau fichier IFC avec vos modifications, nommé « *nom d'origine* (edited).ifc » | Le dossier de téléchargements de votre navigateur |
| {{ui:Télécharger le CSV}} dans le tableau des équipements | Un CSV des éléments de la liste, nommé « *nom du dessin* equipment.csv » | Le dossier de téléchargements de votre navigateur |

Les autres éléments s'enregistrent là où ils sont produits, chacun dans sa propre rubrique : {{ui:USD}} ([Exporter le modèle en USD](topic:usd)), {{ui:Collada}} ([Exporter le modèle en Collada ou pour Google Earth](topic:collada) : fichiers .dae et .kmz de Google Earth), le .glb {{ui:Pour le rendu}}, les images de rendu, les feuilles et plans en PDF, les tableaux et listes en CSV, les problèmes BCF, le tableur COBie, les fichiers de famille et les scans enregistrés en LAS ou E57. BimCraft n'enregistre ni DWG, ni DXF, ni fichiers de projet, et il ne modifie jamais les fichiers que vous avez ouverts.

:::chromium
Chrome et Edge enregistrent les téléchargements dans le dossier défini dans leurs paramètres, en général Téléchargements. Pour être invité à choisir où enregistrer chaque fichier, activez « Demander où enregistrer chaque fichier avant de le télécharger » dans les paramètres de téléchargement du navigateur.
:::

:::firefox
Firefox enregistre dans le dossier Téléchargements, sauf si vous avez choisi « Toujours me demander où enregistrer les fichiers » dans ses paramètres.
:::

:::safari
Safari enregistre dans Téléchargements, sauf si vous choisissez un autre dossier sous **Safari > Paramètres > Général > Emplacement de téléchargement des fichiers**.
:::

## Enregistrer une deuxième fois

Chaque enregistrement télécharge tout le modèle avec **chaque modification faite depuis son ouverture**, et non seulement celles faites après le dernier enregistrement. La liste {{ui:Modifications}} repart vide après chaque enregistrement, donc vous ne pouvez pas annuler au-delà d'un enregistrement. Pour repartir de l'original, ouvrez à nouveau le fichier d'origine.

## Gros fichiers et mémoire

- **IFC** : les fichiers IFC sont lus entièrement dans la mémoire de l'onglet, et la géométrie 3D en demande davantage. Un modèle de plusieurs centaines de mégaoctets peut être trop lourd pour un ordinateur portable. Au-delà de 1.5 million de triangles, les arêtes sont désactivées pour économiser la mémoire (« Arêtes désactivées pour les très grands modèles »).
- **Fichiers de projet** : ils ne sont pas lus en entier. BimCraft ne lit que les petites parties dont il a besoin, environ 40 KB à 100 KB quelle que soit la taille du fichier ; un modèle central de 500 MB sur un lecteur réseau s'ouvre donc en un instant.
- **DWG et DXF** : ces fichiers sont lus entièrement. Un dessin très volumineux affiche « Ce dessin est très volumineux ; seule une partie est affichée. »
- **Dossiers** : jusqu'à 20 000 fichiers s'ouvrent. Seuls les quelques KB nécessaires à chaque fiche de modèle sont lus.

Voir [Navigateurs, appareils et mémoire](topic:platforms) pour plus d'informations.

## En ligne et hors ligne

Ouvrir des fichiers ne nécessite jamais internet. Un lecteur se charge depuis le site la première fois que vous en avez besoin : le moteur IFC, la première fois que vous ouvrez un modèle IFC (« Démarrage du moteur IFC… »). Les lecteurs DWG et DXF font partie de l'application.

:::offline
Vous êtes hors ligne. Si le bouton de la barre d'application affiche {{ui:Prêt hors ligne}}, tous les formats s'ouvrent normalement. Sinon, un modèle IFC ne peut pas s'ouvrir, sauf s'il a déjà été ouvert dans cet onglet : rétablissez d'abord la connexion. Voir [En ligne et hors ligne](topic:online-offline).
:::

Pour utiliser BimCraft sans connexion, cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre d'application pendant que vous êtes en ligne, puis attendez {{ui:Prêt hors ligne}}. La copie enregistrée fait environ 33 MB ; elle inclut le moteur IFC, donc les modèles IFC s'ouvrent aussi hors ligne. [Travailler hors ligne](common:offline) explique les copies enregistrées en général.

## Enregistrement dans le cloud

L'enregistrement dans le cloud n'est pas encore disponible. Enregistrez vos copies modifiées sur votre ordinateur ou sur le serveur de fichiers de votre bureau, comme n'importe quel autre fichier. Voir [Vos fichiers](common:your-files).
