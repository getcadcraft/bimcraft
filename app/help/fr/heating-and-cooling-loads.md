---
title: Estimer les charges de chauffage et de refroidissement
summary: Pour chaque pièce : sa déperdition thermique, son chauffage sur une année en degrés-jours et son pic de refroidissement, à partir de ce qui la délimite dans le modèle et du coefficient U de chaque élément, avec toutes les données affichées. Outil d'aide à la conception, et non un calcul de conformité.
keywords: énergie, chauffage, refroidissement, déperdition, charge thermique, charge de refroidissement, coefficient U, transmittance thermique, degrés-jours, hdd, ventilation, renouvellements d'air, apports internes, apport solaire, lambda, conductivité, isolation, avant-projet, analyse, pièces, espaces
from: ec312d20
---

Dans l'onglet {{ui:Éclairage naturel}}, après {{ui:Calculer}}, ouvrez {{ui:Charges de chauffage et de refroidissement}} et cliquez sur {{ui:Calculer les charges}}. Chaque pièce reçoit sa **déperdition thermique** par jour froid de référence, son **chauffage sur une année** et son **pic de refroidissement** par jour chaud. Rien n'est envoyé ; rien ne change dans le modèle, sauf si vous saisissez un coefficient U.

:::warning
C'est **un outil d'aide à la conception, et non un calcul de conformité** : une estimation en régime permanent, avec toutes les données à l'écran. Ce n'est **pas** la méthode ISO 52016-1, ni une simulation, ni un certificat énergétique ; il ne dimensionne ni chaudières, ni pompes à chaleur, ni groupes froids. Vérifiez les résultats, et dimensionnez les équipements avec un ingénieur.
:::

## Ce qui délimite chaque pièce

BimCraft le trouve dans le modèle lui-même, de sorte que l'IFC de tout logiciel fonctionne (il n'a pas besoin des limites d'espace que certains logiciels exportent). Depuis chaque portion de la surface propre à chaque pièce, il regarde droit devant :

- le premier mur, fenêtre, porte, dalle, toiture, revêtement, mur-rideau ou poutre rencontré **délimite** cette portion ;
- juste au-delà de cet élément, soit **une autre pièce** (comptée comme voisine, à la même température : aucune perte), soit **rien** (extérieur), soit, sous une dalle du niveau le plus bas, **le sol** ;
- une baie ouverte vers une autre pièce compte comme voisine ; une portion qui ne rencontre rien du tout (à 1.5 m latéralement ou vers le bas, 8 m vers le haut) est listée sous la pièce et laissée de côté.

Les fenêtres et les portes prennent leur propre dimension dans l'IFC (largeur × hauteur hors tout) depuis le mur dans lequel elles se trouvent. Cliquez sur une pièce dans le tableau pour voir chaque élément qui la délimite, avec sa surface, son coefficient U et l'origine de ce coefficient.

## Coefficients U

Pour chaque élément, BimCraft utilise, dans cet ordre :

1. **Le coefficient U propre à l'IFC** : le `ThermalTransmittance` du jeu de propriétés commun de l'élément (par exemple `Pset_WallCommon`) ou de son type. La plupart des logiciels de conception savent l'écrire.
2. **Ses couches de matériau** : 1 ÷ (résistance superficielle intérieure + l'épaisseur de chaque couche ÷ sa conductivité λ + résistance superficielle extérieure), avec les résistances superficielles habituelles (0.13 et 0.04 m²K/W pour les murs ; 0.10 vers le haut, 0.17 vers le bas à l'intérieur). Conductivités types pour démarrer (laine minérale 0.035, brique 0.77, béton 1.4…) : sous {{ui:Conductivité des matériaux}}, saisissez celle du fabricant, et chaque coefficient U issu de ces couches suit.
3. **Une valeur type** (murs 0.3, toitures 0.2, dalles 0.25, fenêtres 1.4, portes 1.6 W/m²K), signalée comme telle : saisissez la vôtre.

Un coefficient U saisi dans le détail d'une pièce est écrit dans le jeu de propriétés commun de l'élément sous la forme `ThermalTransmittance` (une seule étape ; {{key:Mod+Z}} l'annule). Si plusieurs éléments partagent ce jeu (un même type de mur, par exemple), ils changent tous ensemble, et la ligne d'état indique combien.

## Chauffage

- **Déperdition thermique** = Σ U × A × (intérieur − extérieur) pour tout ce qui donne sur l'extérieur + Σ U × A × (intérieur − sol) pour les dalles sur le sol + 0.335 × renouvellements d'air par heure × volume de la pièce × (intérieur − extérieur). 0.335 Wh par m³ et par kelvin correspond à la masse volumique de l'air (1.2 kg/m³) multipliée par sa capacité thermique (1005 J/kgK).
- **Chauffage sur une année** = (la déperdition de la pièce par degré vers l'extérieur, par l'enveloppe et par l'air, plus sa déperdition vers le sol ramenée à la même différence) × les **degrés-jours** × 24 ÷ 1000, en kWh. Saisissez les degrés-jours du lieu, ou utilisez {{ui:Lire les degrés-jours depuis un CSV…}} (une ligne par jour ou par mois ; le dernier nombre de chaque ligne est additionné). Utilisez des degrés-jours calculés à la température de base de votre source : cette base tient déjà compte de la chaleur gratuite des personnes, de l'éclairage et du soleil.

## Refroidissement

Le **pic de refroidissement** = la chaleur traversant l'enveloppe et l'air à la température extérieure de dimensionnement d'été + les personnes (surface par personne × chaleur par personne) + l'éclairage et les équipements par m² de plancher + **le soleil** : le pic de {{ui:Soleil à travers les fenêtres à une date donnée}} pour cette pièce. Calculez d'abord le soleil, sur une journée chaude ; tant que ce n'est pas fait, le soleil compte pour 0 et la section l'indique. Le pic de chaque partie est additionné même si ces pics surviennent à des heures différentes, ce qui surestime un peu le total.

## Ce qui est laissé de côté

- Les méthodes mensuelle et horaire de l'ISO 52016-1 (une norme payante), la chaleur stockée dans la masse du bâtiment, les ponts thermiques, le rendement des systèmes de chauffage et de refroidissement, et les fichiers climatiques.
- Les pièces voisines sont prises à la même température ; les espaces non chauffés ne sont pas modélisés.

Voir aussi [Estimer l'éclairage naturel dans chaque pièce](topic:daylight-factor).
