---
title: Modifier un mur, une porte ou une fenêtre
summary: Cliquez sur un mur, une porte ou une fenêtre dessiné et modifiez son type, sa taille, sa hauteur ou son emplacement dans les Propriétés, ou faites-le glisser dans le plan ; chaque modification est une seule étape d'annulation.
keywords: mettre d'équerre, équerre, 90, angle droit, biais, angle, ortho, taille de pièce, face intérieure, face extérieure, mesurer depuis, distance de déplacement, distance saisie, courbe, arc, hauteur d'arc, rayon, ligne de localisation, justification, modifier, éditer, propriétés, type de mur, épaisseur, longueur, hauteur, décalage de base, dessus, niveau, inverser, extérieur, taille de porte, taille de fenêtre, allège, distance, déplacer, poignée, glisser, changer de type, plusieurs
from: 63052d5d
---

## Ce que vous allez faire

Modifiez ce que vous avez dessiné : choisissez un mur, une porte ou une fenêtre, puis saisissez un nouveau chiffre dans les **Propriétés** ou faites-le glisser dans le plan. Le plan et la vue 3D suivent, les angles se rejoignent à nouveau, et les portes et fenêtres restent dans leurs murs.

## Modifier un mur

1. Avec {{ui:Dessin}} et {{ui:Sélectionner}} activés, cliquez sur le mur dans le plan (ou dans la vue 3D).
2. **Propriétés** affiche une case avec les chiffres du mur. Modifiez-en un et appuyez sur {{key:Enter}} :
   - **Type de mur** : un autre des types de départ. L'épaisseur et les couches changent avec lui.
   - **Épaisseur** : n'importe quelle épaisseur. Le type conserve ses autres couches, et sa couche principale (les montants ou le bloc) absorbe la différence, par exemple « Extérieur 2×6, 200 mm ».
   - **Mesurer depuis** : **Ligne d'axe**, **Face intérieure** ou **Face extérieure**. **Longueur** et **Taille de pièce** se lisent et se règlent à partir de là. La face extérieure est ce que montrent les cotes du plan.
   - **Longueur** : l'extrémité du mur se déplace le long de sa ligne. Le mur joint à cette extrémité se déplace perpendiculairement à lui-même et garde son angle.
   - **Taille de pièce** (lorsqu'un mur parallèle traverse la pièce) : saisissez la taille voulue. Ce mur se déplace d'équerre, et les murs joints s'étirent pour suivre.
   - **Déplacer d'équerre** : saisissez la distance de déplacement du mur perpendiculairement à lui-même. Un nombre positif le déplace vers l'extérieur, un nombre négatif vers l'intérieur.
   - **Angle avec le mur joint** : l'angle avec le mur joint à son début. Saisissez 90 pour le mettre d'équerre. Un mur joint à rien affiche **Direction**, en degrés depuis l'est.
   - {{ui:Mettre d'équerre}} : redresse à angle droit les murs connectés à celui-ci, selon la direction dans laquelle s'étend la plus grande partie de leur longueur. Cela agit sur toute la pièce ou tout l'ensemble connecté, quel que soit le mur choisi. Un mur à plus de 10 degrés de l'angle droit reste tel quel ; un mur réglé à 45 degrés est donc sans risque. Un seul {{ui:Annuler}} reprend tout.
   - **Hauteur du mur** : **Jusqu'au niveau supérieur** suit ce niveau ; **Jusqu'au niveau 3** (et tout niveau plus haut) crée un mur qui traverse les niveaux intermédiaires ; saisir une hauteur règle alors de combien le dessus se situe sous ou au-dessus de ce niveau. **Hauteur fixe** conserve le chiffre saisi. **Traverse** liste les niveaux que traverse ce mur : il apparaît plus clair dans leurs plans, les pièces s'y arrêtent contre lui, et portes et fenêtres peuvent y être placées depuis ces plans. Il se déplace et se remodèle au niveau où il commence.
   - **Décalage de base** : hauteur à laquelle le mur commence au-dessus du niveau. Son dessus reste à sa place.
   - **Extérieur** : {{ui:Inverser}} place les couches extérieures sur l'autre face.
   - **Ligne de localisation** : **Ligne d'axe**, **Face extérieure**, **Face intérieure**, **Face gauche** ou **Face droite**. La modifier ne déplace rien. Plus tard, lorsque le mur devient plus épais (par type ou par **Épaisseur**) ou que son extérieur est inversé, la ligne de localisation reste en place et le mur grandit ou s'inverse autour d'elle. Un mur droit qui la rejoint à un angle la suit, de sorte que l'angle reste fermé. La ligne de localisation du mur choisi est tracée en tirets dans le plan. Choisissez plusieurs murs pour la régler pour tous.
   - **Hauteur d'arc** (murs courbes) : de combien le milieu s'écarte d'une ligne droite. 0 le rend droit ; une valeur négative le fait bomber de l'autre côté. Le rayon s'affiche à côté.
3. Chaque modification est une étape dans **Modifications** ; {{ui:Annuler}} la reprend.

## Faire glisser un mur dans le plan

Lorsqu'un mur est choisi, il affiche trois poignées : un carré à chaque extrémité et un cercle au milieu.

- Faites glisser une extrémité pour allonger, raccourcir ou orienter le mur. Elle s'accroche comme l'outil Mur, et s'aligne d'équerre sur le mur joint à son autre extrémité lorsque vous êtes à moins de 3 degrés ; {{key:Shift}} la maintient sur les axes du plan.
- Les murs joints à l'extrémité que vous faites glisser gardent leur angle : leurs extrémités glissent le long de leurs propres lignes jusqu'à rejoindre la nouvelle ligne du mur, de sorte que rien ne devient incliné. Maintenez {{key:Mod}} pour un glissement libre (l'extrémité du mur joint suit la vôtre et ce mur pivote), ou {{key:Alt}} pour rompre les jonctions de ce mur.
- Faites glisser le milieu pour déplacer tout le mur d'équerre par rapport à lui-même, quelle que soit la direction. Ses angles glissent le long des murs joints, de sorte que ces murs gardent leur angle.
- Maintenez {{key:Mod}} en faisant glisser le milieu pour un déplacement libre, lorsque vous voulez rompre l'angle. {{ui:Mettre d'équerre}} le rétablit.
- Pendant qu'une poignée est maintenue, saisissez une distance et appuyez sur {{key:Enter}} (ou relâchez) : le mur va exactement jusque-là, dans le sens où vous le faisiez glisser. {{key:Esc}} annule le déplacement.
- Un mur courbe choisi affiche des poignées à ses extrémités et une poignée ronde au milieu de son arc. Faites glisser la poignée ronde pour le courber.
- Les portes et fenêtres restent dans le mur. Un mur trop court pour ce qu'il contient est refusé avec « Cela ne tient pas dans ce mur. »

## Modifier une porte ou une fenêtre

1. Cliquez sur la porte ou la fenêtre dans le plan.
2. Dans **Propriétés** : **Type** (une autre porte ou fenêtre du même genre), **Largeur**, **Hauteur**, **Allège** (fenêtres), **Depuis le début** et **Depuis la fin** (la distance depuis chaque extrémité de la face du mur jusqu'à son bord), **Charnières** {{ui:Inverser}} (portes à un vantail et fenêtres à battant ; les portes coulissantes, à galandage, de grange et pliantes disent **S'ouvre vers** à la place ; les fenêtres fixes, suspendues et panoramiques ainsi que les portes doubles n'en ont pas), et **Sens d'ouverture** (portes) ou **Côté du cadre** (fenêtres) {{ui:Inverser}}.
3. Ou faites-la glisser le long de son mur, ou sur un autre mur : voir [Portes et fenêtres](topic:doors-and-windows).

## Modifier plusieurs éléments à la fois

Choisissez plusieurs murs (ou plusieurs portes, ou plusieurs fenêtres) avec {{key:Shift}}+clic ou {{key:Mod}}+clic. **Propriétés** propose ce qu'ils ont en commun : **Changer le type…**, la hauteur, la taille. Une seule modification règle tous les éléments, et un seul {{ui:Annuler}} reprend tout.

## Bon à savoir

- Les chiffres s'affichent dans les {{ui:Unités}} choisies sur la barre d'outils.
- Les murs, portes et fenêtres venant d'autres programmes affichent leurs données IFC dans les **Propriétés**, comme auparavant, sans cette case.
