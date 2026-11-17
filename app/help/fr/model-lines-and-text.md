---
title: Lignes et texte de modèle : dessinés dans le modèle, sur le plan de travail
summary: Une ligne de modèle est une ligne, une polyligne ou un arc qui existe dans le modèle et s'affiche dans toutes les vues qui le voient. Le texte de modèle est un lettrage 3D avec une véritable profondeur. Les deux sont dessinés sur le plan de travail.
keywords: ligne de modèle, texte de modèle, texte 3D, lettrage, enseigne, signalétique, ligne en 3D, arc, polyligne, plan de travail, texte extrudé, police, profondeur, ligne de détail, ligne de dessin, annotation, IfcAnnotation
from: fc9cccb5
---

## Ce que vous allez faire

Dessiner des lignes et du lettrage qui font partie du modèle, et non d'une seule vue.

## Étapes

1. Réglez d'abord le plan de travail (voir **Le plan de travail**). Un plan de niveau se dessine sur le plan ; un plan vertical se dessine dans la Visionneuse du plan de travail.
2. Pour une ligne, choisissez **Ligne de modèle** dans le menu **Build** et choisissez **Ligne**, **Polyligne** ou **Arc (trois points)** :
   - une ligne se trace en deux clics ;
   - une polyligne demande un clic par point, puis Entrée ou un double-clic. Un clic sur le premier point la referme ;
   - un arc se trace en trois clics : son début, un point par lequel il passe, sa fin.
3. Pour le texte, choisissez **Texte de modèle**. Saisissez les mots, réglez la hauteur des capitales et la profondeur, puis cliquez à l'endroit où le texte commence (l'extrémité gauche de sa ligne de base).
4. Sélectionnez une ligne ou un texte pour le voir dans **Propriétés**. Les mots, la hauteur et la profondeur d'un texte peuvent y être modifiés. La touche Suppr le retire.

## Où ils s'affichent

- Une ligne de modèle s'affiche dans le plan de son niveau, dans la vue 3D, dans le panneau des élévations et des coupes, et dans la Visionneuse du plan de travail lorsqu'elle se trouve sur le plan de travail. Une ligne de dessin (Annoter, Ligne) appartient à une seule vue.
- Le texte de modèle est de la géométrie solide : il s'affiche partout où le modèle s'affiche, dans le plan, en 3D, dans les élévations et les coupes, et sur les feuilles.
- Les lignes de modèle ne sont pas encore tracées sur les feuilles imprimées. Le texte de modèle l'est.

## La police

Le texte de modèle utilise la même police que les feuilles et les PDF : Liberation Sans, sous licence SIL Open Font License. Une lettre que la police ne possède pas est dessinée sous forme de point d'interrogation, et vous en êtes averti. Il n'existe qu'une police et une graisse. Les lettres sont espacées selon les largeurs propres à la police, sans crénage.

## Dans le fichier IFC

- Une ligne de modèle est un IfcAnnotation dont le type d'objet est ModelLine. Sa forme est une courbe 3D : une polyligne, ou un cercle tronqué pour un arc.
- Le texte de modèle est un IfcBuildingElementProxy dont le type d'objet est ModelText. Sa forme est un solide extrudé pour chaque morceau de lettre, avec les trous des lettres comme O et B. Ses quantités sont l'aire de face et le volume (aire de face multipliée par la profondeur).

## Bon à savoir

- Toute dimension est créée telle que vous la demandez. Seule une ligne sans longueur, un arc dont les trois points sont alignés, ou un texte sans lettre est refusé, car il n'y a rien à créer.
- Chaque ligne, ainsi que chaque texte ou modification de texte, constitue une étape d'Annuler.
