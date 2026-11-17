---
title: Champs photovoltaïques, ombrage et production
summary: Implantez des champs solaires sur les toitures ou au sol, calculez leur ombrage à partir du modèle, estimez la production annuelle d'énergie, dimensionnez les chaînes et produisez les données du schéma unifilaire. Toutes les données d'entrée sont affichées, et le module de départ ainsi que les pertes sont génériques.
keywords: solaire, pv, photovoltaïque, champ, module, toiture, ombrage, production, kwh, kwp, dimensionnement des chaînes, onduleur, unifilaire, schéma unifilaire, inclinaison, azimut, espacement des rangées
from: adf4aaf3
---

## Ce que vous allez faire

Ouvrez le volet **Solaire PV**. Choisissez un pan de toiture (son inclinaison et son orientation sont lues dans le modèle) ou implantez un champ au sol avec une inclinaison et une orientation ; les modules sont installés à l'intérieur avec des retraits, puis comptés, ce qui donne la puissance DC en kWp. Placer le champ l'écrit dans le modèle sous forme d'appareils solaires, en une seule étape d'annulation.

## Ombrage, production et chaînes

- **Ombrage** lance depuis chaque module un rayon vers le soleil, pour des journées types de chaque mois, en tenant compte de la géométrie propre du modèle : les bâtiments voisins, les acrotères et les rangées situées devant comptent donc. Seul le rayonnement direct est réduit, et un champ partiellement ombragé perd de la puissance en proportion.
- **Production** donne les kWh par mois et par an, les kWh par kWp et le rapport de performance. L'ensoleillement provient de vos propres totaux mensuels sur une surface horizontale, si vous les saisissez. Sans eux, le volet utilise une borne supérieure par ciel dégagé, et l'indique. **Récupérer le climat depuis NASA POWER** avec un bouton de l'onglet **Production** : il n'envoie que la latitude et la longitude du site, une seule fois, et conserve la réponse sur cet ordinateur (vérifié depuis le navigateur le 2026-10-30). PVGIS ne permet pas à une page web de lire sa réponse ; l'onglet fournit donc un lien qui ouvre dans un nouvel onglet les données mensuelles de PVGIS pour le site. Collez ce qu'il affiche dans la zone de saisie, et les douze mois se remplissent.
- **Chaînes** vérifie les modules par chaîne par rapport à la plage de tension de l'onduleur au jour le plus froid et au jour le plus chaud, et les chaînes en parallèle par rapport à son courant.
- **Unifilaire** produit les données du schéma (champ, boîte de jonction, sectionneur, onduleur, tableau et réseau), avec les sections de câble et de fusible selon les facteurs que vous saisissez. Ce sont des données et un SVG ; le module complémentaire Électricité de CadCraft peut les placer sous forme de symboles.

Le module, l'onduleur, les pertes et les facteurs de câble livrés avec BimCraft sont des exemples génériques, signalés dans chaque résultat. Saisissez les données du fabricant et les valeurs réglementaires selon lesquelles vous dimensionnez, puis faites valider la conception par la personne qui en répond.
