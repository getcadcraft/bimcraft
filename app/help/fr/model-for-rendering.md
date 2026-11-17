---
title: Envoyer le modèle vers un logiciel de rendu
summary: Enregistrez ce qu'affiche la vue 3D sous forme de fichier glTF (.glb) avec ses matériaux, ses textures et ses lampes, pour les logiciels de rendu et de visualisation qui lisent glTF.
keywords: glb, gltf, gl transmission format, export, rendu, rendering, visualisation, temps réel, archviz, matériaux, textures, lampes, lumières, ressource, ressource personnalisée
from: e62d57dc
---

{{ui:Pour le rendu}} sur la barre d'outils enregistre ce qu'affiche la vue 3D dans un seul fichier **.glb** (glTF 2.0, le format ouvert du Khronos Group). Les logiciels de rendu qui lisent glTF l'ouvrent avec les matériaux et les lampes du modèle ; Twinmotion liste glTF et GLB parmi les fichiers de géométrie qu'il importe et conserve leurs lumières (documentation d'Epic, « Importing geometry in Twinmotion ») : utilisez {{ui:Pour le rendu}} et importez le .glb là-bas. Rien n'est téléversé : le fichier est créé sur cet ordinateur.

## Enregistrer

1. Ouvrez le modèle IFC et réglez la vue 3D : masquez les niveaux, éléments ou modèles liés dont vous ne voulez pas, et [peignez les matériaux](topic:paint-materials) que vous souhaitez voir.
2. Cliquez sur {{ui:Pour le rendu}} (ou tapez `GLB`).
3. Le fichier se télécharge sous le nom « <nom du modèle>.glb ». La barre d'état indique combien de triangles, de matériaux et de lampes il contient.

## Contenu du fichier

- **Géométrie** de chaque élément affiché dans la vue 3D, en mètres, avec Y vers le haut (axes propres à glTF). Un objet par niveau et par matériau, nommé « Niveau 1 — Brique, rouge », pour que vous puissiez choisir un matériau dans le logiciel de rendu et le remplacer par le sien.
- **Matériaux** : chaque couleur avec l'aspect que vous lui avez donné dans [Rendu](topic:render) (mat, satiné, brillant, métal, verre…), et chaque matériau de bibliothèque peint avec sa couleur, sa rugosité et sa **texture** (son image est dans le fichier, à sa taille réelle : une brique a la taille d'une brique). Le verre est transparent.
- **Lampes** : chaque luminaire allumé dans Rendu › Lampes, en lumière ponctuelle ou projecteur, avec sa luminosité (lumens convertis en candelas), sa couleur et son angle de faisceau.
- **Emplacement du site** : la latitude et la longitude du site sont inscrites dans le fichier à titre indicatif. Les logiciels de rendu ont leur propre soleil : saisissez-y le lieu.

## Ce qu'il laisse de côté

- La coupe de section (les éléments entiers sont inclus) et les éléments affichés en transparence (ils sont omis).
- Les objets élément par élément (un objet par niveau et par matériau à la place), les propriétés IFC, les cartes de relief, les vues enregistrées et les parcours enregistrés.
- Les arêtes et le fond.

## Enscape et autres moteurs de rendu en module

Enscape fonctionne dans un autre logiciel de conception et n'a pas de fichier unique à ouvrir pour un projet entier. Deux façons :

- Ouvrez l'**IFC** du modèle (Fichier › Enregistrer) dans le logiciel où fonctionne Enscape ; la plupart lisent l'IFC. Les couleurs suivent ; les matériaux de bibliothèque arrivent sous forme de leurs couleurs.
- Importez une **petite pièce** (mobilier, luminaire) comme ressource personnalisée : isolez-la d'abord, puis cliquez sur {{ui:Pour Enscape (.gltf)}}. La bibliothèque de ressources personnalisées d'Enscape liste les fichiers .gltf, .obj et .fbx, pas .glb ; ce bouton enregistre donc la même scène sous forme d'un fichier **.gltf** autonome (les données binaires et les images sont à l'intérieur du fichier ; rien d'autre n'est à copier avec). Enscape conseille des ressources petites (moins d'environ 20 000 triangles).

:::note
Dans CadCraft Studio, le même fichier glTF (et un fichier USD) peut aussi être enregistré depuis {{ui:Rendu}} › Moteur › **Fichier glTF** / **Fichier USD**, ou ouvert directement dans un logiciel de cet ordinateur : voir [Ouvrir la scène dans un autre logiciel](topic:render-open-in). Un module d'extension ou une liaison en direct pour Enscape ou Twinmotion n'est pas encore disponible. Les formats FBX et Datasmith n'ont pas de spécification publiée, donc BimCraft ne les écrit pas ; glTF est la voie ouverte.
:::
