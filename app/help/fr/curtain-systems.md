---
title: Systèmes de murs-rideaux : façades vitrées sur une trame, avec meneaux
summary: Dessinez un système de mur-rideau comme un mur ou posez-le sur une face, puis réglez ses lignes de trame et ses meneaux. Il est enregistré comme un IfcCurtainWall avec ses panneaux vitrés et ses meneaux.
keywords: système de mur-rideau, mur-rideau, trame de mur-rideau, meneau, vitrage, vitrine, mur de verre, panneau, vitrage (panneau vitré), par face, face, masse, ligne de trame, espacement, profil, imposte, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Ce que vous allez faire

Réaliser un mur vitré composé de vitrages entre des meneaux, modifier l'emplacement de ses lignes de trame et choisir les lignes qui portent un meneau.

## Étapes

1. Activez {{ui:Dessin}} et ouvrez le menu **Construction** (dans une disposition en ruban : l'onglet Architecture).
2. Choisissez **Système de mur-rideau**. Dans sa ligne, réglez le haut (le niveau au-dessus, ou une hauteur), une ligne tous les (distance) le long du système, une ligne tous les (distance) en hauteur (laissez vide pour aucune), s'il reçoit des meneaux, et le profil des meneaux.
3. Cliquez là où il commence et là où il se termine, comme pour dessiner un mur. Maintenez Maj pour le garder d'équerre.
4. Pour modifier la trame, choisissez **Trame de mur-rideau** et cliquez sur le système :
   - **Ajouter une ligne** : une ligne verticale est placée là où vous cliquez. Pour une ligne horizontale de niveau, saisissez d'abord sa hauteur dans **À**.
   - **Déplacer une ligne** : cliquez sur la ligne, puis là où elle doit aller.
   - **Retirer une ligne** : cliquez sur la ligne.
   - **Définir par espacement** : saisissez l'espacement dans **Tous les**, puis cliquez sur le système.
5. Pour modifier les meneaux, choisissez **Meneau**, indiquez ce qu'il concerne (la ligne verticale sur laquelle vous cliquez, la ligne horizontale à une hauteur donnée, le contour, ou toutes les lignes), choisissez **Placer des meneaux** ou **Retirer des meneaux** et un profil, puis cliquez sur le système.
6. Sélectionnez un système pour voir l'ensemble dans **Propriétés** : chaque ligne de trame avec sa position, une coche pour son meneau et un bouton pour le retirer ; l'espacement ; le contour ; le profil ; l'épaisseur des vitrages.

## Par face

**Par face** crée un système de mur-rideau sur une face plane que vous cliquez dans la vue 3D. Sa ligne a les mêmes réglages de trame et de meneaux.

- Il fonctionne sur toute face plane de tout élément que la vue 3D affiche : une masse, un mur, un plancher, un plan de toiture, un poteau, un élément placé. La face peut être verticale, inclinée ou horizontale.
- Le système reprend le contour de la face. Un pignon ou une autre forme irrégulière découpe les vitrages et les meneaux à sa mesure.
- Il peut créer à la place un **mur**, le long du pied d'une face verticale et sur toute sa hauteur. Un mur ici est toujours vertical : une face inclinée ou horizontale ne peut donc pas en recevoir un.
- Il ne crée pas de toiture. Une toiture dans BimCraft se calcule à partir du contour d'un niveau et d'une pente, et non d'une seule face.
- Une face courbe est constituée de nombreuses petites faces planes : un clic en prend une seule.
- Une face comportant des ouvertures : le système couvre le contour extérieur de la face.

## Mesure

- **Surface brute** est le contour du système.
- **Surface vitrée** correspond aux vitrages tels qu'ils sont réalisés : chaque vitrage perd une demi-largeur de meneau sur un côté doté d'un meneau de trame, et une largeur entière sur un meneau de bordure.
- Un meneau vertical traverse de bord en bord. Un meneau horizontal s'arrête à chaque meneau vertical et au bord. Les meneaux de bordure se trouvent à l'intérieur du contour ; là où deux se rencontrent, celui qui est le plus vertical traverse. Les jonctions sont coupées d'équerre, sans onglet.
- **Nomenclatures** comporte une liste **Systèmes de mur-rideau** avec ces chiffres dès que le modèle en contient un.

## Dans le fichier IFC

Un IfcCurtainWall sur son niveau, composé d'un IfcPlate (panneau de mur-rideau) par vitrage et d'un IfcMember (meneau) par tronçon de meneau, chacun avec sa propre forme, son matériau et ses quantités de base.

## Bon à savoir

- Toute dimension est réalisée comme vous la demandez. Seul un contour sans surface est refusé, car il n'y a rien à réaliser.
- Un système dessiné comme un mur conserve la hauteur avec laquelle il a été dessiné. Si vous déplacez un niveau plus tard, réglez de nouveau sa hauteur dans Propriétés.
- L'outil Déplacer ne déplace pas encore un système de mur-rideau. Supprimez-le et redessinez-le, ou modifiez sa trame sur place.
- Annuler revient en arrière étape par étape : tout le système, un changement de trame, un changement de meneaux.
