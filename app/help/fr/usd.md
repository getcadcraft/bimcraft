---
title: Exporter le modèle en USD
summary: Écrire les modèles IFC ouverts en USD pour le rendu, l'assemblage de scènes et d'autres logiciels 3D, avec la classe IFC, le GlobalId et les propriétés de chaque élément.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, propriétés, niveaux, disciplines, assemblage de scène, archviz, rendu
from: 2be5f7b8
---

{{ui:USD}} sur la barre d'outils écrit ce qui est ouvert (chaque modèle, les modèles fédérés là où vous les avez placés) en un seul fichier USD.

## Exporter

1. Choisissez {{ui:USD}} sur la barre d'outils.
2. Sélectionnez {{ui:Texte (.usda)}}, {{ui:Binaire (.usdc)}} ou {{ui:Paquet (.usdz)}}.
3. Le fichier se télécharge. La barre d'état indique le nombre d'éléments inclus.

## Contenu du fichier

| Dans le modèle IFC | Dans le fichier USD |
|---|---|
| Site, bâtiment, niveaux | Groupes imbriqués, niveaux classés par altitude |
| Chaque élément | Un prim sous son niveau et sa discipline (Architecture, Structure, MEP, Mobilier, Site, Espaces, Autre), avec sa géométrie en maillage |
| Classe, GlobalId, nom, type, repère | Attributs nommés `ifc:class`, `ifc:globalId`, `ifc:name` et ainsi de suite |
| Jeux de propriétés et de quantités | Un attribut par propriété ; longueurs, surfaces et volumes en mètres, mètres carrés et mètres cubes |
| Couleurs | Matériaux (avec transparence) |
| Espaces | Conservés, marqués comme guides afin que les moteurs de rendu les ignorent |

La géométrie est placée aux coordonnées propres au fichier IFC. La disposition suit les conventions USD écrites par CadCraft pour les bâtiments.
