---
title: "Climats futurs : inondation, chaleur et feux de forêt en 2050 et 2080"
summary: Relancez l'inondation, l'année énergétique et le dépistage des feux de forêt avec un climat futur (scénarios SSP2-4.5 et SSP5-8.5, années 2050 et 2080) à partir d'un pack de données climatiques, présent à côté du futur.
keywords: climat, changement climatique, futur, 2050, 2080, ssp, cmip6, scénario, élévation du niveau de la mer, inondation, chaleur, fichier météo, epw, morphing, energyplus, feu de forêt, incendie de brousse, météo d'incendie
from: 224ecd08
---

Les chiffres climatiques proviennent d'un **pack de données**, et non de l'application. Activez le module complémentaire {{ui:Climats futurs}} dans Paramètres › Modules complémentaires, ou chargez votre propre fichier de pack dans le bloc {{ui:Climat futur}}.

:::warning
Le pack fourni avec le module complémentaire est un **échantillon** : trois lieux (Denver, Miami, Johannesburg), un seul modèle climatique, cinq années dans chaque période de 20 ans. Il sert à essayer les outils, **pas pour la conception**. Le panneau le signale en gras pendant son utilisation. Un pack complet (plusieurs modèles, toutes les années, davantage de lieux) se construit avec `tools/climate/build-pack.mjs` à partir des données NEX-GDDP-CMIP6 de la NASA.
:::

## Choisir un futur

Dans le panneau de gauche, {{ui:Simulation de risque}}, choisissez un **Scénario** (SSP2-4.5, la voie médiane, ou SSP5-8.5, émissions élevées) et une **Année** (2050 signifie 2041-2060, 2080 signifie 2071-2090 ; les deux par rapport à 1995-2014). Le **Lieu** est le lieu du pack le plus proche du site du modèle (latitude et longitude d'IfcSite), ou celui que vous choisissez. Loin de tous les lieux, ce sont les variations moyennes globales du pack qui sont utilisées, et le panneau l'indique.

## Inondation, présent à côté du futur

Un scénario étant choisi, réglez le **Type d'inondation** : côtière (ajoute la hausse du niveau de la mer), fluviale, pluie forte (plus profonde de la variation de la pluie du jour le plus humide), ou les deux. Cliquez sur Lancer : l'inondation se joue comme auparavant, et un tableau présente côte à côte l'inondation actuelle et l'inondation future (niveau d'eau, pièces mouillées, eau la plus profonde). Les hypothèses sont listées dessous :

- un niveau côtier monte de toute la hausse du niveau de la mer ; la surcote et les vagues ne sont pas modifiées ;
- le débit fluvial monte un pour un avec la pluie du jour le plus humide, et la hauteur suit le débit à la puissance 0.6 (équation de Manning pour un canal large) ;
- les deux parties sont simplement additionnées.

## Chaleur : un fichier météo futur

Choisissez le type {{ui:Chaleur : fichier météo futur}}, sélectionnez un fichier météo `.epw` actuel et cliquez sur {{ui:Créer le fichier météo futur}}. Le fichier est **transformé** mois par mois avec la méthode publiée de décalage et d'étirement (Belcher, Hacker et Powell 2005) : la moyenne du mois se réchauffe de la variation du pack, les après-midi chauds de la variation du maximum quotidien, et les nuits froides de la variation du minimum quotidien ; l'humidité relative varie de la variation du pack, et le point de rosée est recalculé. La pression et le vent restent inchangés. Le tableau compare les températures moyennes et les plus élevées, les températures de conception à 0.4 % pour le refroidissement et à 99.6 % pour le chauffage, les heures à 30 °C et à 35 °C, et les degrés-jours.

{{ui:Enregistrer le fichier météo futur}} l'enregistre ; {{ui:Utiliser dans la vérification énergétique}} le transmet à la vérification EnergyPlus (onglet Energy). Le fichier futur est la même année type, en plus chaud : il n'ajoute pas de nouvelles vagues de chaleur.

## Année énergétique, présent à côté du futur

Dans la vérification EnergyPlus de l'onglet Energy (un module complémentaire à part, avec votre propre moteur), choisissez un fichier météo actuel, puis un scénario et une année dans son bloc {{ui:Climat futur}}, et cliquez sur {{ui:Simuler une année : présent et futur}} : l'année est simulée sur le fichier actuel puis sur sa version future transformée, et le chauffage et le refroidissement de chaque pièce sont listés côte à côte.

## Exposition aux feux de forêt (dépistage seulement)

Choisissez le type {{ui:Exposition aux feux de forêt (dépistage seulement)}} : la végétation la plus proche, la pente qui monte de celle-ci jusqu'au bâtiment, et la distance qui les sépare. Le résultat est une classe allant de très faible à extrême, pour le présent et pour le futur.

:::warning
**Dépistage seulement.** Il s'agit de notre propre échelle relative, pour savoir si un site a besoin d'une évaluation complète du risque de feu de forêt ; ce n'est ni une cote réglementaire ni un niveau d'attaque par feu de brousse (BAL). Elle multiplie un poids pour la végétation, un facteur de pente (un feu double environ sa vitesse à chaque 10 degrés de montée, compté jusqu'à 20 degrés), un facteur de distance (10 m divisés par la distance, au maximum 1) et la variation de l'indice météorologique d'incendie du pack.
:::

## D'où viennent les chiffres

- **Température, humidité, ensoleillement, pluie, météo d'incendie :** NASA NEX-GDDP-CMIP6, sorties quotidiennes régionalisées des modèles CMIP6. La sortie de chaque modèle est sous CC BY 4.0. La variation de la météo d'incendie est l'indice canadien Canadian Fire Weather Index, calculé jour après jour à partir de la météo du modèle (avec l'humidité quotidienne à la place de l'humidité de midi).
- **Hausse du niveau de la mer :** la moyenne mondiale du GIEC AR6 (non locale ; la montée ou l'affaissement des terres n'y figure pas), sauf si un pack contient des valeurs locales.
- Le pack indique sa source, sa licence et sa date ; le panneau les affiche.
