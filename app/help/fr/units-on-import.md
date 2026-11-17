---
title: Unités à l'importation : un fichier indique ses unités, ou l'on vous demande d'abord
summary: Lorsqu'un fichier que vous importez indique ses unités, BimCraft les utilise et le signale. Sinon, BimCraft vous demande avant de placer quoi que ce soit et retient votre réponse pour ce fichier.
keywords: unités, importation, ouvrir, OBJ, STL, DWG, DXF, IFC, nuage de points, élément de bibliothèque, millimètres, mètres, pouces, pieds, échelle, mauvaise taille, trop grand, trop petit, 1000 fois, demander, mémorisé
from: f044e9bc
---

## Ce que vous allez faire

Importer un fichier et vérifier qu'il arrive à la bonne taille.

## Étapes

1. Ouvrez ou ajoutez le fichier comme d'habitude : {{ui:Ouvert}}, {{ui:Fichiers}} de la bibliothèque, {{ui:Nuages de points}}, ou Créer › À partir d'un dessin.
2. Si le fichier indique ses unités, rien ne vous est demandé. La ligne d'état indique les unités que le fichier annonce.
3. Sinon, une boîte de dialogue demande les **Unités de** le fichier. Choisissez ce que représente une unité dans le fichier, puis cliquez sur {{ui:Utiliser ces unités}}. Rien n'est placé avant votre réponse.
4. {{ui:Annuler}} (ou {{key:Esc}}) n'importe rien.

## Quels fichiers indiquent leurs unités

- **IFC** : indique son unité de longueur, et « Ouvert » le précise. Un IFC qui n'en indique aucune fait l'objet d'une question avant son ouverture ; votre réponse est inscrite dans le modèle, si bien que le fichier l'indique une fois enregistré.
- **DWG et DXF** : les unités d'insertion du dessin. Un dessin qui ne les possède pas fait l'objet d'une question (fichiers de la bibliothèque, Créer › À partir d'un dessin, terrain à partir de courbes de niveau).
- **Listes de points** pour le terrain : n'indiquent aucune unité. On vous demande.
- **Nuages de points** : LAS et LAZ avec un système de coordonnées, E57, PTX et PLY indiquent les leurs. Pour les autres, on vous demande.
- **OBJ et STL** : n'indiquent jamais d'unités. On vous demande.
- **glTF et GLB** : mètres, selon la règle propre au format.
- **Images** : n'ont pas de taille propre. Une image est ajustée à la vue, et vous réglez sa taille en la mettant à l'échelle par deux points. La taille que vous donnez est mémorisée pour ce fichier : replacée, elle arrive à cette taille, et la ligne d'état le signale.
- **Le module Nuages de points** : demande lorsque vous créez un nuage dont le fichier n'indique aucune unité, et étiquette les valeurs du nuage dans l'unité qu'il porte.

## Bon à savoir

- La réponse est mémorisée pour ce fichier (son nom, sa taille et sa date) sur cet ordinateur, dans toutes les applications CadCraft. La prochaine fois que le même fichier est importé, on ne vous demande rien, et la ligne d'état indique que les unités mémorisées ont été utilisées.
- Pour être à nouveau interrogé : la palette de commandes ({{key:Mod+K}}) › **Demander à nouveau les unités des fichiers importés**.
- Une liste d'unités déjà présente dans un import (Unités de la bibliothèque, Unités de la barre du nuage, Unités du dessin dans À partir d'un dessin) modifie quand même les unités ensuite. La liste Unités de l'outil terrain ne sert désormais qu'à la valeur proposée au départ de la question.
