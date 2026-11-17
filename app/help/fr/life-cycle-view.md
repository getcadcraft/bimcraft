---
title: Voir ce qui s'use en cinquante ans
summary: Les fenêtres, portes, finitions et la toiture du modèle, leur durée de vie, les années de remplacement, et le coût par année ainsi que sa valeur actualisée lorsque vous saisissez un coût unitaire.
keywords: cycle de vie, durée de vie, remplacement, maintenance, coût, valeur actualisée, actualisation, inflation, 50 ans, fenêtres, peinture, toiture, finitions, coût global
from: 1b849545
---

La section {{ui:Vue sur le cycle de vie}} du panneau de gauche répertorie ce que contient le modèle et qui s'use, ainsi que le moment où chaque élément est remplacé pendant la période d'étude (50 ans au départ). Rien n'est modifié dans le modèle.

## Lire la vue

Chaque élément affiche sa quantité (mesurée sur le modèle : surface des fenêtres, portes extérieures et intérieures, finition des murs extérieurs, peinture intérieure, finition des sols et des plafonds, emprise de la toiture, escaliers), une **durée de vie en années** et un **coût unitaire**. Un élément est remplacé à l'échéance de sa durée de vie, puis à deux fois cette durée, et ainsi de suite tant que la date est antérieure à la fin de l'étude : une fenêtre de 30 ans dans une étude de 50 ans est donc remplacée une fois, à l'année 30. Les durées de vie sont des valeurs de planification courantes : adaptez-les à vos produits et à votre climat. Aucun coût n'est supposé ; saisissez-en un pour voir le montant par année, le total et sa valeur actualisée. Ajoutez un taux d'actualisation et un taux d'inflation si vous le souhaitez.

{{ui:Enregistrer le planning (CSV)}} écrit les composants et les années. Les tuyaux, gaines, câblages et équipements sont également répertoriés (voir ci-dessous).

## Tuyaux, gaines, câblage et équipements

- **Tuyaux et gaines** sont comptés en mètres pour chaque tronçon tracé. Les **équipements** (pompes, ventilateurs, vannes, bornes, appareils sanitaires, prises, interrupteurs, tableaux et les autres éléments suivis dans l'onglet Actifs) sont comptés par type, chaque type ayant une durée de vie de planification. Un élément dont la *durée de vie* est renseignée dans l'onglet Actifs fait sa propre ligne avec cette durée ; s'il a une date d'installation, il part de son âge : une pompe âgée de 16 ans avec une durée de vie de 10 ans est due dès maintenant, puis tous les dix ans.
- Le **câblage** est une **estimation** : distance sur le plan depuis le tableau, le long des appareils de chaque circuit, du plus proche au plus éloigné, multipliée par 1.25 pour le cheminement. Le modèle ne dessine aucun câble : vérifiez-le par rapport à votre propre métré.
- Les durées de vie sont des valeurs de planification à vérifier, et non une source.

## Carbone par remplacement

Cochez {{ui:Inclure le carbone intrinsèque de chaque remplacement}}. Un nouvel élément de fenêtre, de porte, d'escalier, de toiture, de tuyau ou d'équipement est compté au carbone que portent les éléments du modèle de ce même type (facteurs de l'onglet Carbone, par unité). Un élément sans élément ni facteur correspondant, comme la peinture, les finitions et le câblage, affiche un tiret et figure tout de même dans la liste. La fin de vie de l'ancien élément et les travaux de remplacement ne sont pas comptés.
