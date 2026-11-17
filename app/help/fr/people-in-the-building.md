---
title: Faire circuler des personnes dans le bâtiment
summary: Une évacuation ou les arrivées d'une journée ordinaire à travers vos pièces, portes et escaliers, avec des files d'attente là où le bâtiment se rétrécit, le plus long trajet vers une sortie depuis chaque pièce, et les constats dans Problèmes. Un modèle de foule grossier pour les choix de conception, et non un certificat de sécurité incendie.
keywords: personnes, évacuation, issue de secours, sortie, distance de parcours, file d'attente, foule, flux, largeur de porte, escaliers, arrivées, goulot d'étranglement, simulation, occupants, piéton, et si, porte bloquée
from: 84aa8920
---

La section {{ui:Personnes dans le bâtiment}} du panneau de gauche fait circuler des personnes dans les pièces, portes et escaliers du modèle IFC ouvert. Rien n'est modifié dans le modèle et rien n'est téléversé.

:::warning
Cet outil est **une aide à la conception, et non un certificat de sécurité incendie**. Il ne tient pas compte du feu, de la fumée, de la panique, des différences de mobilité ni de ce qu'exige la réglementation. Les limites vous appartiennent : le plus long trajet vers une sortie et le temps disponible sont des valeurs que vous saisissez ; aucune n'est supposée.
:::

## Lancer une simulation

1. Ouvrez un modèle avec des pièces fermées et des portes. Une porte qui ne donne sur une pièce que d'un côté est une sortie ; une porte entre deux pièces les relie ; un escalier relie les pièces à ses extrémités.
2. Choisissez **Évacuation** (chacun rejoint une sortie), **Arrivées** (chacun entre et rejoint une pièce) ou **Échange** (les personnes des pièces sortent pendant qu'autant de personnes entrent), puis la surface au sol par personne. Les pièces dont le nom évoque un couloir, un escalier, un hall ou des toilettes n'accueillent personne.
3. Cliquez sur {{ui:Lancer}}. Vous obtenez l'heure à laquelle la dernière personne est sortie (ainsi que les moments où la moitié, puis neuf personnes sur dix, sont sorties), la file à chaque porte et escalier, la pièce au plus long trajet, et un plan qui rejoue la simulation.

## Scénarios « et si »

Cochez {{ui:Fermée}} sur une porte du tableau et relancez : les personnes trouvent un autre chemin, ou les pièces sans issue sont listées comme erreurs. Une porte deux fois plus large vide une pièce bien plus vite ; le tableau montre où se forment les files.

## Fonctionnement

Chaque pièce est une grille, de sorte que les personnes contournent les angles, et non les murs. La vitesse diminue à mesure qu'une pièce se remplit (S = 1.4 (1 − 0.266 D) m/s, D en personnes par m²). Une porte laisse passer 1.3 personne par seconde et par mètre de largeur, moins 150 mm de chaque côté ; un escalier 1.0 et une marche plus lente. Les personnes attendent dans une file premier arrivé, premier servi. Un numéro de simulation reproduit exactement la même simulation.

L'assistant peut lancer la même simulation : demandez-lui une évacuation, ou le plus long trajet vers une sortie depuis chaque pièce.

## Personnes dans chaque pièce

Ouvrez {{ui:Personnes dans chaque pièce}} pour saisir un nombre pour n'importe quelle pièce. Une case vide utilise le chiffre de surface au sol (affiché en gris) ; 0 vide une pièce. Vos nombres servent à la simulation et sont conservés dans ce navigateur.

## Flux inverses aux portes

Dans **Échange**, les personnes qui sortent et celles qui entrent se croisent aux mêmes portes. Lorsqu'une porte laisse passer quelqu'un dans l'autre sens juste derrière le dernier arrivant, elle conserve une partie de son débit (0.8 ici ; une hypothèse, car les valeurs publiées varient), et le tableau compte les changements de sens. Une porte qui change souvent de sens est signalée dans Problèmes comme remarque.

## Escaliers et paliers

Chaque palier d'escalier coûte une seconde à un marcheur pour tourner (une hypothèse). Un escalier droit n'en a aucun ; un escalier en L ou en U en a un. Le débit de l'escalier dépend toujours de la largeur de sa volée.

## Dans la vue 3D

Cochez {{ui:Afficher les personnes dans la vue 3D}} : les marcheurs apparaissent sous forme de silhouettes dans le modèle, colorées selon leur activité, et se déplacent pendant la lecture de la simulation. Rien n'est ajouté au modèle.
