---
title: Symboles, types et ressources, modèles de projet et Quick Kits
summary: La bibliothèque comporte trois sortes d'éléments (Symboles, Types, Ressources). Ajoutez un Type à votre projet, partez d'un modèle de projet partagé, ajoutez un Quick Kit, et partagez les vôtres via la page de téléversement de la bibliothèque.
keywords: bibliothèque, symboles, types, ressources, type, type de mur, type de sol, type de toiture, type de plafond, modèle de projet, modèle, quick kit, kit, partager, téléverser, version, journal des modifications, LOD, classification, licence, retours d'expérience
from: e13b0e67
---

## Ce que vous allez faire

Trouvez dans la bibliothèque ce dont vous avez besoin selon sa nature, ajoutez un Type au projet que vous dessinez, démarrez un nouveau projet à partir d'un modèle partagé, et partagez vos propres modèles, types et kits.

## Les trois sortes d'éléments de la bibliothèque

- Les **Symboles** sont des conventions de dessin : en 2D uniquement, dessinés à la taille d'annotation, regroupés par discipline.
- Les **Types** décrivent de quoi est fait un élément : ses couches avec leur épaisseur réelle, son niveau de développement (LOD) et son code de classification. Un Type est ajouté au projet, il n'est pas dessiné.
- Les **Ressources** sont des objets physiques tels que portes, fenêtres, mobilier, appareils et équipements, avec une vue en plan et un corps 3D à taille réelle.

Dans l'onglet {{ui:Bibliothèque}}, choisissez {{ui:Bibliothèque}} et utilisez **Type d'élément** pour afficher Tout, Symboles, Types ou Ressources.

## Ajouter un Type à votre projet

1. Choisissez **Types** sous Type d'élément et ouvrez-en un.
2. Vérifiez sa composition, son LOD et sa classification sous l'image, puis cliquez sur {{ui:Ajouter à ce projet}}.
3. Il est ajouté comme type de mur, de sol, de toiture ou de plafond avec lequel vous pouvez dessiner. Si un type portant ce nom existe déjà, le nouveau est ajouté comme copie et le vôtre reste inchangé. Un seul Annuler le retire.

## Modèles de projet et Quick Kits

Choisissez {{ui:Kits}} pour voir ce que les autres ont partagé.

- **Un modèle de projet** est un fichier IFC avec des niveaux, des trames, des types et des paramètres. {{ui:Enregistrer dans mes modèles}} le place dans Nouveau bâtiment, sous Démarrer à partir de.
- **Un Quick Kit** est une liste d'éléments de bibliothèque. {{ui:Afficher les éléments du kit}} les présente sous forme de cartes que vous pouvez placer.
- Chaque kit a une version et un journal des modifications, le plus récent en premier. Une version commençant par 0 sert à la discussion ; 1.0.0 est réservée à ce que le responsable de la ligne a adopté.

## Partager vos propres créations

- **Un modèle de projet** : {{ui:Enregistrer comme modèle}}, cochez {{ui:Créer aussi un fichier à partager dans la Bibliothèque}}, ajoutez ce qu'il contient et une version. Vous obtenez un fichier `.json`.
- **Un Quick Kit** : dans {{ui:Kits}}, choisissez {{ui:Créer un Quick Kit depuis ce projet}}. Il liste les éléments de bibliothèque utilisés par le projet.
- **Un Type** : dans {{ui:Lots de types}}, cochez un type et choisissez {{ui:Enregistrer comme élément de bibliothèque…}}.

Téléversez le fichier sur la page de téléversement de la bibliothèque. Il passe la même relecture que tout autre élément, et vous choisissez la licence à cet endroit : chaque élément indique sa licence. Les éléments doivent indiquer leur LOD, une classe IFC et un code de classification (un code, pas seulement un nom).

## Retours d'expérience

Sur la page de chaque élément de la bibliothèque, les membres connectés peuvent ajouter une note : utilisé sur un projet réel, testé sur un projet d'exemple, ou problème constaté. Indiquez en quelques mots le type de projet et ne mentionnez pas les noms de clients. Une note est publique et n'est pas un avis : elle ne modifie pas l'élément.

## Bon à savoir

- Rien n'est envoyé depuis l'application. Les fichiers sont créés sur votre ordinateur et vous les téléversez vous-même.
- Un kit créé à partir d'un modèle contient le texte IFC tel qu'il a été enregistré. Vérifiez-le avant téléversement pour tout élément privé.
- CadCraft affiche les Symboles et les Ressources dans son onglet Bibliothèque ; les Types et les modèles concernent les projets BimCraft.
