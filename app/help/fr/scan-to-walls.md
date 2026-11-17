---
title: Murs et portes à partir d'un scan au téléphone ou au laser
summary: Transformez un scan d'une pièce en murs, portes et pièces proposés, que vous acceptez un par un.
keywords: scan, scan au téléphone, lidar, nuage de points, murs à partir d'un scan, portes à partir d'un scan, scan de pièce, ply, e57, las, obj, suggérer
from: a4ef0f10
---

## Ce que cela fait

Avec un scan ouvert (un nuage de points tel que PLY, E57 ou LAS, ou un maillage tel que OBJ), BimCraft coupe le scan à la hauteur du plan, l'aligne d'équerre sur le bâtiment et cherche les longues et fines séries de points : ce sont des murs. Un vide de la largeur d'une porte entre deux séries alignées devient un seul mur avec une porte. Les murs qui referment un espace forment une pièce.

Rien n'est dessiné tant que vous ne l'avez pas accepté. Les murs et les portes arrivent sous forme de liste de propositions (ce sont des modifications en mode Suggestion) : gardez celles qui sont justes et rejetez les autres ; tout ce que vous gardez est dessiné en une seule étape d'annulation. Les pièces apparaissent d'elles-mêmes.

## Ce que l'outil vérifie

Les murs qui ne se referment pas, les séries de murs plus courtes qu'un mur n'est épais, et un vide de la taille d'une porte sans mur autour sont signalés comme **Problèmes**, avec une position, pour que vous puissiez regarder le scan à cet endroit.

## Non vérifié jusqu'à contrôle

Les murs, portes et pièces que vous acceptez depuis un scan sont marqués comme non vérifiés : un cadre en pointillés et un « ? » dans le plan, jusqu'à ce que vous les marquiez comme contrôlés. Voir [Marquer des éléments comme contrôlés ou vérifiés sur place](topic:verification).

## Ce que l'outil ne peut pas faire

- Il trouve les murs qui suivent deux directions perpendiculaires. Un mur oblique ou courbe n'est pas trouvé.
- Il traite un étage à la fois. Les fenêtres ne sont pas trouvées (une fenêtre n'apparaît comme un vide que si la coupe se fait à hauteur d'appui).
- Il a été essayé sur des scans de pièces générés et sur des maillages, pas encore sur des scans issus d'un vrai téléphone. Sa précision sur un vrai scan (dérive sur une longue marche, mobilier contre les murs, verre, portes ouvertes) n'est pas connue ; l'ajuster sur de vrais scans est l'étape suivante. Vérifiez chaque proposition par rapport au scan avant de l'accepter.
