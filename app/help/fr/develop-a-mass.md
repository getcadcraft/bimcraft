---
title: Développer une masse de bâtiment à partir d'une étude de site
summary: Reprenez une masse de bâtiment étudiée dans la vue de site de CivilCraft et développez-la en niveaux, murs et planchers, en conservant l'emplacement du site sur la carte.
keywords: masse, masse de bâtiment, volumétrie, étude de site, développer, CivilCraft, transmission, niveaux, murs, planchers, emprise, géoréférencement, IFC
from: 557b94d1
---

La vue de site de CivilCraft permet de dessiner des masses de bâtiment sur une parcelle et de les confronter au terrain, aux limites que vous saisissez et au soleil. **Développer dans BimCraft** ouvre BimCraft dans un nouvel onglet avec les masses ; **Masses en IFC** enregistre celles-ci dans un fichier que vous ouvrez ici de la façon habituelle. Dans les deux cas, chaque masse arrive sous forme de site, de bâtiment comportant un niveau par étage, et d'un bloc (la masse elle-même) portant ses chiffres.

## Développer une masse

1. Choisissez une masse dans la vue 3D. Les Propriétés indiquent son usage, ses étages et la hauteur d'étage, son emprise, sa surface de plancher brute, la façon dont elle s'inscrit dans la pente, et sa parcelle.
2. Cliquez sur **Développer cette masse**.

En une seule étape d'annulation, chaque niveau de ce bâtiment reçoit des murs autour de l'emprise (l'emprise est la face extérieure des murs ; chaque mur monte jusqu'au niveau supérieur, et le niveau le plus haut a la hauteur d'un étage), ainsi qu'un plancher sous tout le bâtiment. Le bloc est remplacé, et le bâtiment conserve les chiffres de l'étude dans l'ensemble de propriétés `CadCraft_SiteMass`, marqué comme développé. Il n'y a pas de toiture : une toiture dépend du projet.

## L'emplacement du site

Un fichier issu de CivilCraft est écrit dans l'unité de longueur propre au projet et, lorsque le projet de CivilCraft avait un système de coordonnées, le transporte comme conversion cartographique du projet. Développer une masse ne modifie pas cela : le bâtiment reste donc là où la carte le place.
