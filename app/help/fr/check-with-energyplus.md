---
title: Vérifier le chauffage et le refroidissement par simulation énergétique
summary: Écrivez le modèle sous forme de fichier EnergyPlus, ou exécutez EnergyPlus version 26.2.0 sur celui-ci dans le navigateur, et comparez ses charges de conception à l'aide rapide de chauffage et de refroidissement. Un second avis pour l'avant-projet, pas un calcul de conformité.
keywords: energyplus, simulation énergétique, jour de conception, charge de chauffage, charge de refroidissement, fichier météo, epw, idf, masse thermique, énergie annuelle, simuler
from: b82a5bf2
---

## Ce que vous allez faire

Le panneau **Vérifier avec EnergyPlus** écrit le modèle ouvert sous forme de fichier d'entrée EnergyPlus (IDF) : une zone par pièce, les murs, planchers, toitures et fenêtres avec leurs coefficients U, les renouvellements d'air, et le chauffage et le refroidissement idéaux. Vous pouvez toujours **enregistrer ce fichier** et l'exécuter dans votre propre EnergyPlus.

Si vous installez aussi le moteur, le panneau peut lancer la simulation sur place et affiche le chauffage et le refroidissement de conception d'EnergyPlus à côté de ceux de l'aide rapide, pièce par pièce.

Il s'agit d'une aide à la conception. Les codes énergétiques, les certifications et les permis exigent un outil agréé et les données climatiques qu'il requiert, et le résultat doit être examiné par la personne qui en répond.

## Installer le moteur

BimCraft ne fournit pas EnergyPlus. C'est une grosse compilation WebAssembly (environ 6 MB compressée, plus un fichier de données de 4.6 MB) : vous l'hébergez vous-même et saisissez son adresse dans le panneau. La page ne le charge que lorsque vous appuyez sur un bouton de simulation, jamais au démarrage. L'adresse doit être en https, un chemin de ce site, ou localhost.

## Jours de conception ou une année

- **Simuler les jours de conception** ne nécessite aucun fichier météo. Il simule une journée d'hiver froide, sans soleil, et une journée d'été chaude et claire, aux températures des entrées de chauffage et de refroidissement de l'onglet Daylight, puis donne la charge de chaque pièce en watts.
- **Simuler une année** nécessite un fichier météo au format EPW que vous choisissez. Il ajoute les occupants, l'éclairage et les équipements à partir des mêmes entrées (toujours actifs, car aucun planning n'est inventé) et donne l'énergie de chauffage et de refroidissement de chaque pièce en kWh. Les fichiers météo ont leurs propres licences : utilisez-en un que vous avez le droit d'employer.

## Masse thermique

Cochez **Donner une masse thermique aux murs dont les couches sont connues** : les murs, toitures et planchers dont les couches de matériau sont connues sont écrits couche par couche, avec la masse volumique et la chaleur spécifique tirées d'un court tableau de valeurs typiques selon le nom du matériau. Les couches sont prises côté extérieur d'abord, dans l'ordre où le fichier les liste. Les éléments sans couches restent à leur coefficient U, sans masse.

## Lire la comparaison

Les deux méthodes répondent à des questions légèrement différentes. L'aide rapide conserve chaque élément ; le fichier EnergyPlus moyenne les coefficients U de chaque pièce par type de surface. Un écart de plus de 15 % sur le chauffage de conception d'une pièce est signalé par une remarque dans le panneau ⚠, avec les deux valeurs. Le refroidissement diffère davantage par conception : l'aide rapide calcule un pic à partir du soleil à une date donnée, alors qu'EnergyPlus dimensionne sur son propre jour de conception.
