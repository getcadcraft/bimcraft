---
title: Le plan de travail : le définir, l'afficher, le regarder de face
summary: Le plan de travail est le plan qu'utilisent les lignes de modèle, le texte de modèle et la visionneuse du plan de travail. Définissez-le sur un niveau, une face, un plan de référence nommé ou une ligne ; affichez-le dans les vues ; ouvrez la visionneuse pour dessiner sur un plan vertical.
keywords: plan de travail, définir plan de travail, afficher plan de travail, plan de référence, visionneuse plan de travail, plan nommé, face, niveau, plan vertical, dessiner sur un mur, dessin d'élévation, accrochage, alignement, plan de réf
from: 8aceee1d
---

## Ce que vous allez faire

Choisir le plan sur lequel vous dessinez, voir où il se trouve, et dessiner sur un plan vertical.

## Étapes

1. Activez **Dessin** et ouvrez le menu **Construction** (en disposition ruban : l'onglet Architecture, Plan de travail).
2. Choisissez **Définir le plan de travail**. Puis faites l'une de ces actions :
   - choisissez un niveau dans **Définir sur** ;
   - choisissez un plan de référence nommé dans la liste à côté ;
   - cliquez sur une ligne du plan : un mur, une ligne de trame, un plan de référence, une ligne de modèle ou un système de murs-rideaux. Le plan de travail devient le plan vertical passant par cette ligne ;
   - cliquez sur une face plane dans la vue 3D. Le plan de travail repose sur cette face.
3. Choisissez **Afficher le plan de travail** pour le voir : une feuille teintée avec une grille au mètre dans la vue 3D, un contour ou une ligne en pointillés dans le plan, et un contour en pointillés dans le panneau d'élévation et de coupe. Choisissez-le à nouveau pour le masquer.
4. Choisissez **Visionneuse du plan de travail** pour regarder le plan de face. Les lignes noires sont le modèle coupé par le plan. Utilisez ses outils pour dessiner une ligne de modèle, un texte de modèle ou un plan de référence sur le plan. **Regarder en 3D** oriente la vue 3D face au plan.

## Plans de référence

Un plan de référence est un plan nommé que vous dessinez comme une ligne.

1. Choisissez **Plan de référence**. Saisissez un nom dans sa ligne si vous le souhaitez (sinon il est nommé pour vous), puis une hauteur.
2. Cliquez là où il commence, puis là où il finit. Dans le plan, cela crée un plan vertical. Dans la visionneuse du plan de travail, cela crée un plan perpendiculaire au plan de travail.
3. Il apparaît sous forme de ligne verte en pointillés avec son nom dans le plan, d'un contour en pointillés dans la vue 3D, et dans le panneau d'élévation et de coupe.
4. Sélectionnez-le pour le renommer, modifier sa longueur, sa hauteur et son pied, ou appuyez sur **Utiliser comme plan de travail**.

Deux plans de référence ne peuvent pas porter le même nom, car le nom sert à les désigner.

## Bon à savoir

- Un modèle sans plan de travail défini travaille sur son niveau le plus bas.
- Le plan de travail est enregistré dans le fichier. Son affichage ou son masquage est mémorisé dans ce navigateur, pas dans le fichier.
- Si le plan de travail suit un plan de référence et que vous déplacez ce plan, le plan de travail se déplace avec lui.
- Sur un plan de travail vertical, les outils Ligne de modèle et Texte de modèle ouvrent la visionneuse, car un plan ne peut pas pointer une hauteur.
- Les outils de dessin accrochent les extrémités des plans de référence dessinés dans le plan de la même façon qu'ils accrochent les extrémités des autres lignes dans la visionneuse.

## Dans le fichier IFC

- Le plan de travail est un ensemble de propriétés (CadCraft_WorkPlane) sur le projet.
- Un plan de référence est un IfcAnnotation de type d'objet ReferencePlane, portant son nom. Sa forme est le contour fermé du plan, afin qu'un autre logiciel montre où il se trouve. Son ensemble CadCraft_ReferencePlane contient l'origine, la direction, la normale et l'étendue. IFC n'a pas de classe pour un plan de référence ; une annotation n'est pas comptée comme élément de bâtiment et ne délimite pas les pièces.
