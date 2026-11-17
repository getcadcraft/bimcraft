---
title: Le plan électrique
summary: Placez prises, interrupteurs, luminaires, détecteurs, boîtes de dérivation et tableaux sur le plan avec les mêmes symboles que le module complémentaire Électricité de CadCraft, reliez les interrupteurs aux luminaires qu'ils commandent, et listez les appareils et les circuits dans les nomenclatures.
keywords: électricité, plan électrique, prise, prise de courant, double prise, interrupteur, va-et-vient, variateur, luminaire, plafonnier, spot encastré, spot, détecteur de mouvement, boîte de dérivation, tableau, tableau de distribution, circuit, charge, watts, ampères, retour d'interrupteur, nomenclature des appareils, nomenclature des tableaux
from: f7de1947
---

## Ce que vous allez faire

Dessinez le plan électrique de la maison dans le modèle : prises, interrupteurs et tableaux sur les murs, luminaires et détecteurs au plafond. Chaque appareil est un véritable élément électrique du fichier IFC, avec son repère, son circuit et sa charge, et les interrupteurs mémorisent les luminaires qu'ils commandent.

## Placer les appareils

1. Sur un niveau, ouvrez {{ui:Build}} et choisissez {{ui:Electrical}}.
2. Choisissez l'appareil : prises (force, données, téléphone, audio-vidéo), interrupteurs et détecteurs (un thermostat et une minuterie aussi), luminaires, détecteurs et alarmes, une boîte de dérivation, un tableau ou un sous-tableau.
3. Saisissez un **Circuit** si vous le connaissez (n'importe quel nom : 1, 2, A-3). Laissez **Hauteur de fixation** vide pour la hauteur habituelle de cet appareil.
4. Cliquez sur le plan. Les prises, interrupteurs et tableaux se placent sur la face du mur le plus proche, tournée vers la pièce ; les luminaires, détecteurs et boîtes de dérivation se placent au plafond, à l'endroit où vous cliquez.

Les appareils reçoivent un repère dès leur placement : **R** pour les prises, **S** pour les interrupteurs, **L** pour les luminaires, **M** pour les détecteurs de mouvement, **J** pour les boîtes de dérivation, **P** pour les tableaux. Les appareils posés sur un mur suivent celui-ci lorsque vous le déplacez.

Vous préférez chercher par image ? Ouvrez la **Palette de symboles** depuis {{ui:Build}} pour trouver un appareil par son nom, marquez d'une étoile ceux que vous utilisez et placez-le d'un clic : voir [La palette de symboles](topic:symbol-palette).

## Relier les interrupteurs aux luminaires

1. Sélectionnez un interrupteur (ou un détecteur de mouvement) et cliquez sur **Lier les luminaires** dans **Propriétés**.
2. Cliquez sur chaque luminaire qu'il commande. Cliquez de nouveau sur un luminaire lié pour le délier.
3. Appuyez sur {{key:Enter}} ou cliquez sur **Terminé**.

Le plan trace une courbe en pointillés depuis l'interrupteur jusqu'à chacun de ses luminaires. Les **Propriétés** d'un luminaire indiquent les interrupteurs qui le commandent.

## La pièce où se trouve un appareil

Chaque appareil connaît la pièce dans laquelle il se trouve. Un appareil posé sur un mur se trouve dans la pièce vers laquelle il est tourné ; un appareil de plafond se trouve dans la pièce située sous lui. **Propriétés** affiche **Pièce**, et la nomenclature **Appareils électriques** comporte une colonne **Pièce** (numéro et nom, par exemple 101 Cuisine).

Elle reste à jour : si vous renommez ou renumérotez la pièce, déplacez l'appareil ou déplacez un mur, la pièce suit dans la même étape. Un appareil posé sur la face extérieure d'un bâtiment, ou dans un espace qui n'est pas une pièce, indique qu'il n'est dans aucune pièce.

La pièce est aussi écrite dans le fichier, dans l'ensemble de propriétés `CadCraft_Location` de l'appareil (Room, RoomNumber, RoomName), afin que Rechercher, Colorer par propriété et une nomenclature de repères puissent l'utiliser, ainsi qu'un autre logiciel. Les symboles en plan et les éléments liés à un symbole reçoivent le même ensemble ; voir [Palette de symboles](topic:symbol-palette).

## Laissez votre assistant les placer

Avec un assistant connecté (Paramètres › Assistants, modifications autorisées), vous pouvez demander des appareils en mots : « placez une double prise tous les 2 m le long des murs du séjour, à 300 mm de hauteur, sur le circuit 3 », ou « ajoutez un plafonnier avec son interrupteur près de la porte ». L'assistant utilise cinq outils : `devices_add`, `device_change`, `lights_set`, `devices_delete` et `devices_list`. Ils créent les mêmes appareils que l'outil {{ui:Electrical}}, sur les mêmes murs et avec les mêmes repères, circuits, charges et hauteurs, et chaque appel correspond à une seule étape d'annulation.

Un appareil ne reçoit jamais un type que l'outil {{ui:Electrical}} ne connaît pas : un type inconnu est refusé et l'assistant reçoit la liste des types. Une prise ou un interrupteur doit se trouver à 600 mm au plus d'une face de mur, comme un clic, sinon l'appel est refusé et rien n'est placé. Les hauteurs par défaut sont exprimées en millimètres : 300 pour les prises, 1100 pour les interrupteurs ; un appareil de plafond est suspendu au plafond.

## Modifier et lister les appareils

Sélectionnez un appareil pour modifier son repère, son circuit, sa charge (en watts) et sa hauteur de fixation. Sélectionnez-en plusieurs pour les placer tous sur un même circuit d'un coup. Appuyez sur {{key:Delete}} pour en supprimer un ; un luminaire supprimé est retiré de ses interrupteurs.

Dans {{ui:Schedules}}, choisissez **Appareils électriques** pour obtenir chaque appareil avec son niveau, son circuit, sa charge, sa hauteur et les luminaires que commande chaque interrupteur, ou **Circuits** pour les appareils de chaque circuit, la charge totale et le courant. Les deux figurent aussi sur la feuille de nomenclatures du jeu de plans : voir [Élévations, coupes et feuilles](topic:sheets).

:::note
Les hauteurs de fixation et les charges sont des valeurs par défaut de planification (une prise à 16" de hauteur et 200 W, un interrupteur à 48", un plafonnier de 60 W), pas un projet : l'électricien ou l'ingénieur dimensionne les circuits et vérifie la réglementation.
:::

:::tip
Les symboles sont ceux que le module complémentaire Électricité de CadCraft dessine sur les plans d'installation : un plan issu de l'une ou l'autre application se lit donc de la même façon.
:::
