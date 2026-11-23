---
title: Tracer automatiquement les gaines, les évacuations, les conduites d'eau et de fluide frigorigène
summary: Dans la vérification des conflits, BimCraft trouve un chemin autour du modèle ouvert pour les gaines, l'évacuation gravitaire, l'eau froide et chaude, et les conduites de fluide frigorigène split ou multi-split, puis dessine les tronçons avec leurs raccords en une seule étape d'annulation. Une aide au dessin : dimensions, pentes et contrôles viennent des tableaux du logiciel et des chiffres que vous saisissez ; rien ici n'indique qu'une conception respecte une norme.
keywords: tracé auto, auto-tracé, tracer les gaines, tracer les conduites, évacuation, sanitaire, gravité, colonne, évent, siphon, eau, eau chaude, boucle de retour, recirculation, frigorigène, split, multi-split, VRF, longueur équivalente, kit de piquage, culotte
from: 5841d513
---

## Ce que vous allez faire

Laissez BimCraft tracer un réseau de tronçons entre des connecteurs déjà présents dans le modèle, en contournant murs et poutres, puis vérifiez-le avec des chiffres que vous voyez.

## Étapes

1. Ouvrez le modèle et la vérification des conflits. Sous **Tracer les gaines automatiquement**, choisissez un groupe de traitement d'air et ses bouches, ou sous **Tracer les autres réseaux automatiquement**, choisissez un réseau.
2. **Évacuation gravitaire.** Saisissez la position de la sortie et, si vous les avez, les positions des colonnes de chute. Cochez **Tracer tous les niveaux d'un coup** pour prendre chaque niveau qui a des appareils : les évacuations de chaque niveau rejoignent la colonne à leur propre niveau, et la colonne va du dessus du robinet le plus haut jusqu'à son pied. Cliquez sur {{ui:Tracer}}.
3. **Siphon vers évent.** Le panneau liste la distance de chaque siphon à son évent. Saisissez dans **Distance maximale d'un siphon à son évent** la plus grande distance que permet votre norme ; tout appareil qui la dépasse est listé comme non traité, avec les millimètres en trop. Cochez **Ventiler par la colonne** quand les appareils n'ont pas de piquage d'évent propre : la distance est alors mesurée jusqu'à la colonne. BimCraft ne fournit pas de tableau de norme pour cela : c'est vous qui saisissez le nombre.
4. **Eau froide et eau chaude.** Choisissez la source, saisissez la pression à la source et la pression nécessaire à un appareil. Cochez **Eau chaude**, choisissez le raccord chaud du chauffe-eau, et cochez **Boucle de retour** pour terminer une ligne de retour au raccord **retour chaud** du chauffe-eau, ou à tout autre raccord que vous choisissez (celui-ci s'arrête à 150 mm, ouvert, pour que vous le raccordiez).
5. **Split, multi-split et VRF.** Choisissez l'unité extérieure, cochez les unités intérieures et saisissez la puissance de chacune. Saisissez les limites d'après les données de votre fabricant. Saisissez la **longueur équivalente** d'un coude et d'un kit de piquage (valeurs du fabricant) ; les longueurs maximale et totale sont alors vérifiées sur les longueurs équivalentes.
6. Cliquez sur {{ui:Tracer}}. Le panneau indique combien de tronçons il a dessinés, et ce qu'il n'a pas pu faire et pourquoi. {{ui:Annuler}} reprend tout en une seule étape.

## Ce que vous devez voir

Des tuyaux avec coudes, tés et réductions ; des évacuations qui descendent au moins de la plus petite pente pour leur taille ; des piquages d'évent sur les appareils ; des lignes de fluide frigorigène en paire liquide et gaz qui tourne dans le même sens à chaque angle, avec un kit de piquage marqué à l'endroit où une dérivation quitte le tronc principal.

## Bon à savoir

- Quand une évacuation rejoint une autre évacuation, le modèle dessine un té. Le plan nomme ces endroits des jonctions en Y à 45°, pour que vous puissiez changer le raccord.
- L'eau chaude utilise le raccord chaud propre à l'appareil quand sa famille en a un, et un raccord à 100 mm à côté du raccord froid quand elle n'en a pas.
- Les lignes de fluide frigorigène partent entre les deux orifices de chaque unité. Quand les deux orifices d'une unité sont trop proches pour un coude, la paire reste centrée entre eux.
- Le réseau d'eau utilise la courbe de demande et les valeurs de frottement affichées dans les calculs ; remplacez-les par celles de votre norme avant de vous fier aux pressions.
- Les grandes maisons peuvent prendre une demi-minute ou plus, surtout pour le réseau d'eau chaude.
- C'est une aide au dessin. Une personne qualifiée vérifie les dimensions, pentes, évents et pressions selon la norme applicable.

## Suite

[Vérifier les conflits](topic:clash-check) · [Vérifier les tuyaux et gaines par rapport à la structure](topic:mep-against-structure) · [Raccordements entre tuyaux et équipements](topic:mep-connections)
