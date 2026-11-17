---
title: Lots de types : partager des types de murs en fichiers ouverts
summary: Enregistrer les types de murs avec leurs couches, matériaux, étiquettes et codes de classification, ainsi que les familles, dans un seul fichier ouvert (JSON brut ou IFC), et les ajouter à un autre projet. Les types de murs d'un fichier IFC d'un autre programme peuvent aussi être lus.
keywords: lot de types, types, type de mur, partager, export, import, bibliothèque, format ouvert, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, matériaux, couches, gabarit, standard d'agence, familles
from: e4c91331
---

## Ce que vous allez faire

Transporter vos types de murs d'un projet à un autre, ou les remettre à quelqu'un qui travaille dans un autre programme. Un ensemble de types contient chaque type de mur avec ses couches, ses épaisseurs, ses matériaux, son âme, ses lames d'air, sa priorité des couches, son niveau de développement, ses données de métré et ses codes de classification, ainsi que les familles que vous ajoutez. C'est un fichier ouvert : du texte JSON que chacun peut lire, ou un fichier IFC. Rien n'y est lié à une agence, à un pays ou à un compte.

## Enregistrer des types depuis un projet

1. Ouvrez **Données** dans la barre du modèle et choisissez {{ui:Type packs}}.
2. Sous {{ui:Save types from this project}}, cochez les types de murs à inclure. Les types propres au projet sont cochés ; un type de départ peut être ajouté et entre comme copie. Cochez les familles si vous voulez les inclure.
3. Saisissez un {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} télécharge un fichier `.cctypes.json`. {{ui:Save as IFC (.ifc)}} télécharge un fichier IFC qui ne contient que des types : chaque type de mur sous forme d'IfcWallType, avec son ensemble de couches de matériaux, ses matériaux et sa classification, pour tout programme BIM.

## Ajouter des types à un projet

1. Dans la même boîte de dialogue, choisissez {{ui:Open a pack or an IFC file…}} et sélectionnez un fichier `.json` d'ensemble ou un fichier `.ifc`.
2. La boîte de dialogue liste ce que contient le fichier : chaque type de mur avec son épaisseur, son nombre de couches et ses codes, ainsi que les matériaux et les familles.
3. Choisissez ce qui arrive à un {{ui:A type this project already has}} : **Garder celui du projet**, **Ajouter celui de l'ensemble comme copie** (il reçoit un nouveau nom se terminant par « (2) »), ou **Remplacer (seulement si aucun mur ne l'utilise)**.
4. {{ui:Add to the project}}. La boîte de dialogue indique ce qui a été ajouté, copié, remplacé ou conservé. C'est une seule étape d'annulation.

Les nouveaux types apparaissent tout de suite dans la liste des types de l'outil Mur.

## Types de plancher, de toiture et de plafond

La liste des types à enregistrer contient aussi les types de plancher, de toiture et de plafond du projet, ainsi que leurs types de départ (marqués Plancher, Toiture, Plafond). Un ensemble peut porter les quatre catégories ; chaque type nomme sa classe IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un type de plancher, de toiture ou de plafond utilisé par des éléments n'est pas remplacé à partir d'un ensemble : modifiez-le dans l'éditeur de types.

## Un type comme élément de bibliothèque

Cochez exactement un type et choisissez **Enregistrer comme élément de bibliothèque…**. Cela enregistre un fichier `.cctype.json` : un élément de bibliothèque de la catégorie Types qui contient ce seul type (ses couches, matériaux, LOD et codes de classification). Téléversez-le dans la bibliothèque pour le partager. **Ouvrir un ensemble ou un fichier IFC** lit aussi un tel élément et ajoute son type au projet, comme un ensemble.

## Bon à savoir

- Un fichier IFC d'un autre programme peut aussi être ouvert ici. Chacun de ses types de mur qui comporte des couches de matériaux est lu : le nom, les matériaux et épaisseurs des couches et toute lame d'air sont ceux du fichier. Les couches qui forment l'âme et le rôle de chaque couche (finition, structure, isolation) sont devinés, le type est marqué **(deviné)**, et vous devez le vérifier dans l'éditeur de type de mur. Un type de mur sans couche est laissé de côté et signalé.
- Un matériau déjà présent dans le projet est conservé tel quel. Un nouveau matériau dont le nom est déjà pris reçoit « (ensemble) » après son nom.
- Un type utilisé par des murs n'est jamais remplacé à partir d'un ensemble. Modifiez-le dans l'éditeur de type de mur, qui déplace correctement ses murs.
- Un code défini sur un mur ne voyage pas : il appartient à ce mur. Un code défini sur le type, lui, voyage.
- Un fichier comportant un champ que le format ne possède pas, une couche dont le matériau manque, ou tout ce qui n'est pas du texte brut est refusé, et le message indique où et pourquoi.
- Pas encore disponible : les types de plancher, de toiture et de plafond (ils n'ont pas de types dans cette version : chacun a sa propre épaisseur), les types de portes et de fenêtres autres que les familles, et les hachures ou couleurs provenant du fichier d'un autre programme.
