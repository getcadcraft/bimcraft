---
title: Finitions des pièces et nomenclatures de finitions
summary: Indiquez ce qui recouvre le sol, les murs et le plafond de chaque pièce, ajoutez des zones comme une crédence carrelée, et obtenez des nomenclatures de finitions par pièce, par mur et par zone, avec les surfaces, le nombre de carreaux coupes comprises et les volumes de support.
keywords: finition, finitions, nomenclature de finitions, finitions des pièces, finition de sol, finition de mur, finition de plafond, plinthe, carrelage, carreau, carreaux coupés, nombre de carreaux, chute, support, chape, panneau de support, enduit, zone, crédence, soubassement, pièce humide, intérieur, quantités
from: 8c30498c
---

## Ce que vous allez faire

Indiquez une fois à BimCraft la finition de chaque pièce. Les nomenclatures de finitions donnent ensuite les surfaces, les carreaux à commander et les volumes de support, et suivent les modifications du modèle.

## Étapes

1. Activez {{ui:Dessin}}, ouvrez **Nomenclatures** dans le panneau de gauche et cliquez sur **Finitions des pièces**.
2. Sous **Types de finition**, cliquez sur **Ajouter un type de finition**. Donnez-lui un nom, un genre (Carrelage, Plaque, Couche ou Panneau) et une épaisseur. Pour un carreau, indiquez la longueur et la largeur du carreau, le joint et une marge de chute en pourcentage. Si quelque chose se trouve sous la finition (une chape, un panneau de support, une couche d'enduit), donnez-lui un nom sous **Support** et indiquez son épaisseur.
3. Sous **Pièces**, choisissez la finition de sol, de mur et de plafond de chaque pièce. Saisissez le nom d'une plinthe et sa hauteur si la pièce en a une.
4. Sous **Zones**, cliquez sur **Ajouter une zone** pour une partie de pièce qui reçoit une autre finition :
   - une zone de **mur** est une bande comprise entre deux hauteurs au-dessus du sol (une crédence carrelée de 0 à 1200, un soubassement). Elle se trouve sur tous les murs de la pièce ; ou sélectionnez des murs de cette pièce dans le modèle et cliquez sur le bouton **Activé** pour la limiter à ceux-là ;
   - une zone de **sol** ou de **plafond** est une surface que vous saisissez. Elle est retirée de la finition propre à la pièce.
5. Cliquez sur **Enregistrer**. C'est une seule étape d'annulation. Les longueurs se saisissent dans les unités du projet.

## Les nomenclatures

Quatre entrées viennent s'ajouter à la liste des Nomenclatures :

- **Finitions par pièce** : chaque pièce avec sa finition de sol, de mur et de plafond, leurs surfaces, et la plinthe avec sa longueur.
- **Finitions par mur** : chaque tronçon de mur côté pièce et la bande que recouvre une finition, avec sa longueur, sa surface brute, ses déductions, sa surface nette et, pour les carreaux, les carreaux entiers, les carreaux coupés et les carreaux à commander.
- **Finitions par zone** : chaque zone avec sa finition, sa surface nette, ses carreaux et son volume de support.
- **Quantités de finitions** : une ligne par finition : surface nette, carreaux entiers et coupés, carreaux à commander, le support et son volume, et le volume propre de la finition.

Groupez, totalisez, enregistrez et exportez-les comme toute nomenclature : voir [Mettre en page, enregistrer et exporter une nomenclature](topic:schedule-layouts). Cliquez sur un chiffre pour sélectionner ce dont il provient : les déductions d'un mur sélectionnent ses portes et fenêtres.

## Comment les finitions sont mesurées

- **Murs** : chaque tronçon de mur côté pièce, sa longueur le long de la pièce multipliée par la hauteur couverte par la finition, moins la partie de chaque porte et fenêtre située dans cette hauteur. Un mur plus bas que la pièce est fini jusqu'à son propre sommet. La méthode de mesure du projet détermine les ouvertures trop petites pour être déduites ([Nomenclatures](topic:plan-schedules-and-pdf)).
- **Sols et plafonds** : la pièce à l'intérieur des faces des murs, moins les îlots qu'elle contient.
- **Plinthes** : la longueur des murs de la pièce, moins la largeur de ses portes.
- **Carreaux** : posés en quadrillage depuis un coin de la surface, avec un joint entre deux carreaux. Un carreau entièrement sur la surface est un carreau entier ; un carreau en partie sur elle (au bord, autour d'une ouverture) est un carreau coupé. Les carreaux à commander sont les entiers plus les coupés, plus la marge de chute, arrondis au chiffre supérieur. Chaque carreau coupé est compté comme un nouveau carreau : les chutes ne sont pas réutilisées.
- **Volume de support** : la surface nette multipliée par l'épaisseur du support.
- Un comptage marqué **≈** est calculé à partir de la surface au lieu d'être établi carreau par carreau : une surface dont une zone saisie a été retirée, ou une très grande surface.

## Bon à savoir

- Les finitions sont conservées dans le fichier du bâtiment (ensemble de propriétés `CadCraft_Finishes` sur le projet). Chaque pièce qui a une finition reçoit aussi l'ensemble de propriétés IFC standard `Pset_SpaceCoveringRequirements`, pour que les autres logiciels lisent les noms.
- La pose des carreaux commence à un coin. Une pose centrée sur la pièce, un motif (chevrons, appareil en brique) et la réutilisation des chutes ne sont pas calculés.
- Un mur courbe, et une limite de pièce qui n'est pas un mur (un séparateur de pièce), sont listés comme **Autre limite**, avec leur longueur et sans ouvertures.
- L'entrée **Finitions** qui existait auparavant liste les couches de finition des types de murs ; **Couches : surface et volume** liste chaque couche de chaque type à couches. Les finitions de pièce définies ici s'appliquent à la pièce par-dessus celles-là.
- Un assistant peut définir les finitions pour vous avec `finishes_set` : voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).
