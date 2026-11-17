---
title: Simuler une inondation, du vent ou un séisme sur le bâtiment
summary: Montée de l'eau dans les pièces, pression du vent sur chaque niveau ou secousse sismique des niveaux, jouées sur un plan ou une élévation avec un curseur de temps. Modèles simples dont les hypothèses sont listées ; ni vérification réglementaire ni calcul de structure.
keywords: risque, inondation, vent, séisme, sismique, déplacement relatif, balancement, effort tranchant à la base, niveau d'eau, climat, scénario, élévation du niveau de la mer, lecture, niveau, période
from: ff0d34d1
---

La section {{ui:Simulation de risque}} du panneau de gauche joue un risque sur le modèle IFC ouvert. Rien du modèle n'est modifié.

:::warning
Ce sont des **modèles simples pour voir ce qu'un risque fait à cette disposition**, et non une étude d'inondation, une vérification de code de vent ni un dimensionnement de structure. Chaque résultat liste ses hypothèses.
:::

## Inondation

Réglez le niveau d'eau le plus haut au-dessus du niveau le plus bas, et les minutes de montée, de maintien et de descente. L'eau entre dans une pièce par une ouverture dont le seuil a été dépassé, et les pièces reliées à des pièces humides par des ouvertures situées sous le niveau de l'eau sont au même niveau (quasi statique). Le tableau indique quand chaque pièce est mouillée pour la première fois et sur quelle profondeur ; le plan joue la séquence. Saisissez la quantité d'eau maximale qu'une pièce peut recevoir : les pièces qui la dépassent sont signalées. **Avenirs climatiques :** chargez votre propre fichier de scénario (JSON ou CSV avec une année, une élévation du niveau de la mer et un facteur d'inondation) et choisissez une année. Ou activez le module complémentaire Avenirs climatiques, puis choisissez un scénario et une année : l'inondation est jouée deux fois, avec le présent et le futur côte à côte (voir « Avenirs climatiques : inondation, chaleur et feux de forêt en 2050 et 2080 »). Les types Exposition aux feux de forêt et Chaleur : fichier météo futur figurent dans la même liste.

## Vent

La pression suit ½ρV², la vitesse augmentant avec la hauteur ; l'effort sur un niveau est cette pression multipliée par un facteur de rafale, par les deux coefficients de pression, par la largeur et par la hauteur du niveau. Vous obtenez l'effort tranchant, le moment de renversement et le balancement.

## Séisme

Un bâtiment en cisaillement : une masse par niveau (emprise × kilogrammes par mètre carré, que vous réglez), la même rigidité dans chaque niveau, calée sur la première période que vous donnez (un dixième de seconde par niveau si vous laissez la case vide, et l'application le signale), de l'amortissement, et un mouvement du sol simulé (une impulsion ou un bruit filtré) à l'accélération maximale que vous choisissez. Le résultat donne le déplacement relatif de chaque niveau, les accélérations des planchers et l'effort tranchant à la base ; l'élévation joue le balancement, dessiné plus grand que la réalité. Saisissez un taux de déplacement relatif admissible : les niveaux qui le dépassent sont signalés. Le calcul est élastique : rien ne plie ni ne fissure.

## Rigidité des niveaux depuis le cadre d'analyse

Pour un séisme ou un balancement dû au vent, choisissez **Le cadre d'analyse** comme source de rigidité au lieu de saisir une période. Chaque niveau est poussé latéralement à tour de rôle, le cadre (poutres, poteaux, contreventements, dalles) est résolu, et la rigidité des niveaux, tous éléments travaillant ensemble, pilote le calcul. Le poids est celui des éléments eux-mêmes plus la charge d'exploitation par mètre carré que vous réglez dans la case du plan de chaque niveau. La première période réelle est affichée. Le calcul est élastique : rien ne plie, et la torsion n'est pas modélisée. Pour le vent, les efforts par niveau restent ceux supposés ci-dessus (un profil en loi de puissance, votre facteur de rafale et les coefficients de pression fixes, et non un règlement de vent) ; seul le balancement provient du cadre, par résolution de sa matrice de rigidité complète sous ces efforts. Le modèle doit être un IFC contenant un cadre que l'onglet Analyse peut lire.

## Unités

Les profondeurs d'eau, le balancement et le déplacement relatif niveau par niveau, les distances et les surfaces sont affichés dans les {{ui:Unités}} que vous avez choisies. Les efforts (kN), les durées et les accélérations gardent leurs propres unités, et une valeur que vous saisissez dans une case libellée en mètres reste en mètres. Il en va de même pour les résultats d'évacuation, d'éclairage naturel, de chauffage et de refroidissement et d'ameublement : les longueurs, surfaces et volumes suivent votre choix ; la pression, le débit, la température, l'énergie et la puissance ne sont jamais convertis.
