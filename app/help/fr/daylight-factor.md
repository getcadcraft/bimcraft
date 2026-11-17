---
title: Estimer la lumière du jour dans chaque pièce
summary: Le facteur moyen de lumière du jour de chaque pièce, calculé à partir de ses fenêtres, de ses surfaces intérieures et du ciel que voit chaque fenêtre, avec l'angle du ciel mesuré dans le modèle. Une estimation de début de conception, pas une simulation ni une vérification réglementaire.
keywords: lumière du jour, facteur de lumière du jour, facteur moyen de lumière du jour, adf, composante verticale du ciel, vsc, apport solaire, soleil, valeur g, grille, flux partagé, composante du ciel, composante réfléchie internement, lumière naturelle, fenêtre, vitrage, angle de ciel, obstruction, ombrage, balcon, débord de toiture, réflectance, transmittance, début de conception, analyse, pièces, espaces
from: 5f300a78
---

L'onglet {{ui:Éclairage naturel}} du panneau de droite calcule le **facteur moyen de lumière du jour** de chaque pièce : la part de la lumière d'un ciel couvert, à l'extérieur, qui atteint la pièce, en moyenne, en pourcentage. Il lit les pièces (espaces) et les fenêtres du modèle IFC ouvert. Rien n'est modifié dans le modèle et rien n'est envoyé.

:::warning
Tout ce qui se trouve dans cet onglet est **une aide à la conception, et non un calcul de conformité** : des estimations de début de conception par des méthodes publiées, **pas une simulation** et **pas une vérification par rapport à un code du bâtiment ou à une norme**. BS EN 17037, LEED, BREEAM et les codes énergétiques demandent une simulation de la lumière du jour avec le climat du lieu ; utilisez un logiciel de simulation de la lumière du jour pour ceux-ci.
:::

## Calculer

1. Ouvrez un modèle IFC comportant des pièces (espaces) et des fenêtres. Les modèles dessinés ici ont une pièce à l'intérieur de chaque ensemble fermé de murs.
2. Ouvrez l'onglet {{ui:Éclairage naturel}} et cliquez sur {{ui:Calculer}}.
3. Chaque pièce affiche son facteur de lumière du jour et une plage : moins de 2 %, 2 à 5 %, 5 % ou plus. Cliquez sur une pièce pour voir ses surfaces et la surface et l'angle de ciel de chaque fenêtre ; la pièce et ses fenêtres sont sélectionnées dans le modèle.

Modifiez une donnée et les valeurs suivent immédiatement ; après une modification du modèle, cliquez sur {{ui:Recalculer}}. {{ui:CSV}} enregistre chaque pièce avec ses valeurs et les données utilisées.

## La formule

Facteur moyen de lumière du jour (%) = T × Ag × θ × M ÷ (A × (1 − R²)), additionné sur les fenêtres de la pièce (formule de Littlefair, utilisée par BRE 209, BS 8206-2 et CIBSE LG10) :

- **T**, la transmittance lumineuse du vitrage (0.7 pour commencer : utilisez la valeur du fabricant).
- **Ag**, la surface vitrée : la surface de chaque fenêtre (sa largeur × hauteur hors tout, sinon sa dimension dans le modèle) × la **part vitrée** (0.75 pour commencer : le reste est le cadre).
- **θ**, l'angle de ciel que voit la fenêtre, en degrés (voir plus bas).
- **M**, le facteur d'entretien pour les salissures du vitrage (1 pour commencer).
- **A**, toutes les surfaces intérieures de la pièce : sol, murs, plafond et fenêtres, pris dans la forme propre de la pièce.
- **R**, leur réflectance moyenne, pondérée par la surface : sol 0.2, murs 0.5, plafond 0.7 pour commencer ; le vitrage compte pour 0.1.

## Comment l'angle de ciel est mesuré

Pour chaque fenêtre, BimCraft coupe le modèle avec un plan vertical perpendiculaire à la fenêtre, depuis la face extérieure du vitrage, et regarde depuis l'horizon droit vers le haut : tout ce que la coupe rencontre devant la fenêtre (un bâtiment en face, un balcon ou un surplomb au-dessus, l'égout de toit) masque une partie de ces 90°. θ est ce qui reste. La fenêtre elle-même et le mur où elle se trouve sont exclus. Le calcul est fait en cinq points sur la largeur de la fenêtre, et la moyenne est prise : un poteau fin devant le milieu ne prend donc que sa part, et non tout le ciel.

Un bâtiment situé à 8.5 m au-dessus du centre de la fenêtre et à 9.9 m de distance masque 40.65° (l'angle dont la tangente est 8.5 ÷ 9.9), ce qui laisse θ = 49.35°.

## Composante verticale du ciel de chaque fenêtre

{{ui:Calculer}} mesure aussi, pour chaque fenêtre, ce qu'elle voit de l'ensemble du ciel : la même coupe verticale, tournée dans chaque direction devant la fenêtre (tous les 2°, d'un côté à l'autre), de sorte qu'un bâtiment sur un côté, un retour ou un tableau profond prend sa part. À partir de là, BimCraft calcule la **composante verticale du ciel (VSC)** : la part de la lumière du ciel couvert qui atteint le vitrage, par rapport à ce que recevrait un toit plat et dégagé. Une fenêtre sans rien devant elle obtient **39.6 %**, le maximum pour une fenêtre verticale ; un long bâtiment s'élevant à 25° au-dessus de la fenêtre laisse environ **27 %**, la valeur que les recommandations britanniques (BRE 209) utilisent comme règle empirique. Chaque fenêtre, dans le détail d'une pièce, affiche sa VSC et son **angle d'obstruction** (la hauteur à laquelle les objets s'élèvent droit devant elle).

Le ciel est le ciel couvert standard CIE, qui est trois fois plus lumineux droit au-dessus que près de l'horizon, et la coupe est exacte : rien n'est échantillonné.

## Le soleil à travers les fenêtres à une date

Ouvrez {{ui:Soleil à travers les fenêtres à une date donnée}} et choisissez une date. BimCraft suit le soleil tout au long de la journée par quarts d'heure et additionne, pour chaque fenêtre, la chaleur que le soleil apporte à travers le vitrage :

- le **soleil direct**, lorsqu'il est devant la fenêtre et que rien dans le modèle ne le masque (la même coupe exacte, tournée vers le soleil : un balcon qui protège du soleil haut de l'été à midi laisse entrer le soleil bas de l'hiver) ;
- la **lumière du ciel** sur le vitrage, moins ce que la fenêtre ne peut pas voir ;
- la lumière **réfléchie par le sol** (sa réflectance : 0.2 pour commencer) ;
- le tout à travers le **valeur g** du vitrage (la part de l'énergie solaire qu'il laisse passer : 0.6 pour commencer ; utilisez la valeur du fabricant) et sa part vitrée.

Chaque pièce affiche le total de la journée en kWh et son pic en watts avec l'heure ; le détail d'une pièce trace la journée sous forme de graphique. Le ciel est clair selon le modèle de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), avec les valeurs d'été ou d'hiver pour le lieu et la saison, et l'altitude du site ; la position du soleil provient de la NOAA. La latitude et la longitude du site proviennent du site IFC, et le nord du nord géographique du modèle ; si le modèle n'a pas de site, saisissez une latitude et une longitude. Les heures sont données en heure légale (sans heure d'été) dans le fuseau que vous saisissez, sinon celui que suggère la longitude.

Ce qui n'est pas pris en compte : les nuages (il s'agit d'une journée claire), la moindre transmission du vitrage sous faible angle, les cadres qui ombragent le vitrage, les stores, et ce que les murs et la toiture absorbent. L'estimation de refroidissement de ce même onglet utilise la valeur de pointe.

## Le facteur de lumière du jour sur une grille

Ouvrez {{ui:Facteur de lumière du jour sur une grille}} et cliquez sur {{ui:Calculer la grille}} : BimCraft pose une grille sur le sol de chaque pièce, à la hauteur du plan de travail (0.85 m pour commencer), à un demi-mètre des murs, et calcule le facteur de lumière du jour en chaque point par la **méthode du flux partagé du BRE** :

- la **composante du ciel** : le ciel couvert vu depuis le point à travers l'ouverture de chaque fenêtre, moins les cadres ;
- la **composante réfléchie extérieure** : ce que le point voit des bâtiments extérieurs à travers la fenêtre, éclairés au dixième de la luminosité du ciel derrière eux (modifiez la luminosité des obstructions s'ils sont beaucoup plus clairs ou plus sombres) ;
- la **composante réfléchie intérieure** : la lumière qui rebondit dans la pièce, à partir des surfaces de la pièce et de leurs réflectances, de la surface des fenêtres et de la part de celles-ci située hors de la pièce (la formule du BRE, avec la transmittance du vitrage à la place du verre clair qu'elle supposait).

Chaque pièce affiche sa moyenne, son point le plus bas et la part de sa surface qui reçoit 2 % ou plus ; le détail d'une pièce dessine son plan, chaque point coloré selon son facteur de lumière du jour, et les fenêtres en rouge. Pour rester rapide sur n'importe quel ordinateur, une pièce reçoit au plus **400 points** : dans une grande pièce, l'espacement s'agrandit pour s'adapter (saisissez un espacement pour choisir le vôtre).

## Ce qui n'est pas pris en compte

- Les fenêtres de toit (vitrages posés à plat ou inclinés) sont listées mais non comptées : les formules ici concernent les fenêtres dans les murs.
- Les fenêtres sans pièce derrière elles (un hall sans espace, par exemple) sont listées à part.
- Les tableaux de fenêtre (l'ouverture est prise sur la face extérieure), l'éblouissement, les durées d'ensoleillement et la lumière du jour selon le climat. Pour BS EN 17037, LEED ou BREEAM, utilisez un logiciel de simulation de la lumière du jour.
- Les seuils proviennent de recommandations britanniques plus anciennes (BS 8206-2), présentées comme un repère, jamais comme une réussite ou un échec.
