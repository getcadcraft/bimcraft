---
title: Dimensionner tuyaux et gaines, vérifier le remplissage des câbles et l'éclairage
summary: Vérifiez le dimensionnement des tuyaux et gaines d'alimentation avec la perte de charge, acheminez des câbles dans les chemins de câbles et les conduits et contrôlez leur remplissage, et calculez l'éclairement des pièces à partir de fichiers IES ou EULUMDAT. Les valeurs par défaut sont signalées ; saisissez les valeurs de la norme en vigueur.
keywords: dimensionnement, dimensionnement de tuyau, dimensionnement de gaine, perte de charge, unités de débit, demande, hunter, hazen-williams, vitesse, frottement, frottement égal, pression du ventilateur, registre, chemin critique, chemin de câbles, conduit, remplissage, liste des câbles, ies, ldt, eulumdat, photométrie, éclairement, lux, uniformité, calcul d'éclairage, puissance surfacique, mep, calculs, problèmes
from: 9cb90815
---

## Ce que vous allez faire

Dessinez les tuyaux, gaines, chemins de câbles et conduits comme d'habitude, puis ouvrez le volet **Calculs**. Chaque onglet lit le modèle, affiche un tableau et liste ce qui ne va pas comme Problèmes dans le panneau ⚠. Quand une taille corrigerait un Problème, **Appliquer les tailles** modifie les tronçons en une seule étape d'annulation.

Ce sont des aides au dessin. Chaque valeur par défaut est signalée à l'écran, et aucune n'est une table de norme : saisissez les nombres de la norme à laquelle vous concevez, et faites valider le résultat par l'ingénieur qui en répond.

## Tuyaux

1. Choisissez la clé du **système** (eau froide `cw`, eau chaude `hw`).
2. Réglez la vitesse maximale et, si vous voulez vérifier la pression, la pression à la source et la pression minimale dont un appareil a besoin.
3. Cliquez sur {{ui:Vérifier}}.

Chaque tuyau porte la demande des unités de débit des appareils situés en aval. Cette demande vient d'une courbe d'unités de débit en fonction du débit, selon la méthode décrite par Hunter. **La courbe intégrée est un exemple, non une table de norme** ; les Problèmes le signalent tant que vous n'avez pas saisi la vôtre. Le frottement suit Hazen–Williams, les raccords sont des coefficients de perte, et une élévation coûte 9.8 kPa par mètre. Les unités d'un appareil viennent de son type, ou du nombre que vous réglez avec l'outil d'assistant `loads_set`.

## Gaines

Réglez le système, le taux de frottement (frottement égal) ou une vitesse, et toute perte de batterie, de filtre ou de silencieux. Les terminaux prennent leur débit d'air de `loads_set` sur le diffuseur. Le tableau affiche la vitesse et le frottement par tronçon, la **pression du ventilateur** au chemin critique, et la pression que doit absorber le registre de chaque autre terminal. Les pertes singulières utilisent des coefficients par défaut arrondis, pas une base de données de raccords.

## Chemins de câbles et conduits

Dessinez-les avec l'outil Gaine : les systèmes **Chemin de câbles** et **Conduit** sont enregistrés comme supports de câbles, pour que les autres logiciels les lisent comme chemins et conduits. Dans l'onglet Câbles, collez la liste des câbles (repère, diamètre extérieur en mm, nombre, `from`, `to`). `from` et `to` sont le repère d'un équipement ou un point `x,y,z` en millimètres. Les câbles suivent le plus court parcours continu dans les chemins et les conduits ; chaque tronçon affiche son remplissage par rapport aux limites que vous saisissez, et la liste s'enregistre en CSV, avec une longueur qui inclut un pourcentage de mou et les extrémités.

## Éclairage

Donnez à chaque luminaire son fichier IES (LM-63) ou EULUMDAT avec l'outil d'assistant `photometry_set`. Saisissez les cibles, l'écartement de la grille et la hauteur du plan de travail. Le résultat est uniquement l'éclairement **direct** : pas de réflexions mutuelles ni d'ombres, c'est donc une valeur minimale dans une pièce.

## Sprinklers incendie

Le module complémentaire **Sprinklers incendie** a son propre onglet ; voir son aide.
