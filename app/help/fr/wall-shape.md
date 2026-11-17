---
title: Donner une forme à un mur : attache, profil, inclinaison et ouvertures
summary: Attachez le sommet d'un mur à une toiture, un plancher ou un plafond, donnez-lui son propre contour vu de côté, inclinez-le ou découpez-y une ouverture sans porte ni fenêtre, dans Propriétés, en élévation ou en coupe, sur la vue de face propre du mur ou en 3D ; chacune est une étape d'annulation.
keywords: attacher, attache haut, attache base, toiture, dalle, plafond, pignon, profil, modifier le profil, contour d'élévation, en gradins, acrotère, inclinaison, incliné, penché, conique, double inclinaison, ouverture, ouverture de mur, trou, passage, sans porte, poignées, élévation, coupe, 3D, vue de face, mur courbe, copie
from: f558b269
---

## Ce que vous allez faire

Modifiez la forme d'un mur au-dessus et au-dessous de son plan : son sommet peut suivre une toiture, une dalle ou un plafond, il peut avoir son propre contour vu de côté, il peut être incliné, et il peut comporter des ouvertures sans porte ni fenêtre. Le plan du mur, ses angles et sa ligne de localisation restent inchangés.

## Où le faire

- **Propriétés** : avec {{ui:Dessin}} et {{ui:Sélectionner}} activés, cliquez sur un mur que vous avez dessiné. **Propriétés** affiche les lignes du mur, puis **Forme**, où tout se saisit.
- **Une élévation ou une coupe** : le crayon de l'explorateur de projet ({{ui:Modifier dans cette vue}}) ouvre la vue ; désignez-y un mur et faites glisser ses poignées. Voir « Dans une élévation ou une coupe » ci-dessous.
- **La vue de face propre du mur** : {{ui:Murs}} › {{ui:Modifier le profil}}, puis cliquez sur le mur dans le plan. Cela fonctionne pour tout mur, y compris celui qu'aucune élévation ne regarde de face, et pour un mur courbe (affiché déroulé).
- **Le plan et la vue 3D** : les quatre commandes de {{ui:Murs}} (groupe Modifier) : {{ui:Attacher haut / base}}, {{ui:Modifier le profil}}, {{ui:Inclinaison}} et {{ui:Ouverture dans le mur}}. Voir « Dans le plan et en 3D » ci-dessous.

Quelle que soit la méthode choisie, c'est la même modification : une étape dans **Modifications**, et {{ui:Annuler}} la retire.

Les murs droits et courbes acceptent tous les outils de forme. Sur un mur courbe, les distances suivent son arc.

## Attacher le sommet ou la base

- **Attacher le haut** : désignez une toiture, un plancher ou un plafond. Le sommet du mur suit la face inférieure de ce que vous avez désigné, à l'aplomb de chaque angle du mur. Sous une toiture à pente, un mur reçoit un sommet incliné, et là où la toiture change de plan (faîtage ou croupe), le sommet du mur se courbe avec elle.
- **Attacher la base** : désignez un plancher ou un plafond. La base du mur suit sa face supérieure.
- Là où rien ne se trouve au-dessus (ou au-dessous) d'une partie du mur, cette partie garde la hauteur propre du mur.
- Le lien est conservé : modifiez la pente ou le débord de la toiture, ou la hauteur du plafond, et les murs attachés suivent dans la même étape.
- Choisissez **Hauteur propre** pour le détacher.

## Modifier le profil

{{ui:Modifier le profil…}} ouvre le contour du mur vu de côté :

- **Ligne de sommet** : lignes de **Le long de** (la distance depuis le début du mur) et **Hauteur** (au-dessus de la base du mur). Trois lignes 0 / 3000, 2500 / 4500, 5000 / 3000 forment un pignon sur un mur de 5 m.
- **Ligne de base** : laissez-la vide pour une base de niveau, ou donnez des lignes pour un mur sur une semelle en gradins.
- {{ui:Ajouter un point}} ajoute une ligne, **Supprimer** en retire une. {{ui:Utiliser ce profil}} l'applique ; {{ui:Remettre droit}} le supprime.

Chaque ligne suit le mur une seule fois, de son début à sa fin ; une ligne qui revient sur elle-même, ou un sommet qui descend jusqu'à la base, est refusé. Si un sommet attaché existe aussi, c'est le plus bas des deux qui est retenu.

## Incliner le mur

**Inclinaison** : **Vertical**, **Incliné** (les deux faces s'inclinent dans le même sens, l'épaisseur reste la même) ou **Double inclinaison** (chaque face a son propre angle : un mur qui s'amincit ou s'épaissit en montant). Saisissez les degrés à partir de la verticale ; un angle positif incline vers la gauche du mur, vu depuis son début. Le mur reste à l'endroit où il est dessiné à sa base ; les murs qui lui sont joints ne s'inclinent pas avec lui.

## Ouvertures sans porte ni fenêtre

{{ui:Ajouter une ouverture}} découpe un trou de 900 de large au milieu du mur. Sa ligne dans **Ouvertures** règle **Depuis le début**, **Largeur**, **Allège** (depuis le niveau) et **Hauteur** ; **Supprimer** le retire. L'ouverture traverse tout le mur, les quantités du mur l'excluent, et le plan montre un vide là où elle atteint la hauteur de coupe du plan. Lorsque le début du mur glisse le long de sa ligne, l'ouverture garde sa place ; une modification qui la laisserait en dehors du mur est refusée.

## Dans une élévation ou une coupe

Ouvrez la vue avec le crayon de l'explorateur de projet. Avec {{ui:Sélectionner et déplacer}} activé :

- **Profil** : cliquez sur un mur qui fait face à la vue. Ses lignes de sommet et de base deviennent bleues, avec une poignée carrée sur chaque point et un point au milieu de chaque tronçon.
  - Faites glisser un carré pour déplacer ce point (les deux points d'extrémité ne se déplacent que verticalement).
  - Faites glisser un point pour déplacer tout le tronçon vers le haut ou vers le bas.
  - Double-cliquez sur une ligne (ou faites un clic droit dessus) pour y ajouter un point ; {{ui:Ajouter un point (haut)}} et {{ui:Ajouter un point (bas)}} en ajoutent un au milieu du tronçon le plus long.
  - Cliquez sur un carré puis appuyez sur Suppr (ou faites un clic droit dessus) pour supprimer ce point. {{ui:Remettre droit}} supprime le profil.
  - Un point étant choisi, saisissez son **Le long de** et sa **Hauteur** dans la bande sous la barre d'outils.
- **Attacher** : la bande comporte les listes **Attacher le haut** et **Attacher la base** pour le mur désigné. Ou utilisez l'outil {{ui:Attacher le haut}} ou {{ui:Attacher la base}} : cliquez sur le ou les murs, puis sur la toiture, le plancher ou le plafond, représentés par des cadres en pointillés. Tous les murs désignés s'attachent en une seule étape.
- **Ouvertures dans le mur** : avec l'outil {{ui:Ouverture dans le mur}}, faites glisser un rectangle sur la face d'un mur. De retour dans {{ui:Sélectionner et déplacer}}, faites glisser une ouverture pour la déplacer, faites glisser l'une de ses huit poignées pour la redimensionner, saisissez **Depuis le début**, **Largeur**, **Allège** et **Hauteur** dans la bande, ou appuyez sur Suppr pour la supprimer.
- **Inclinaison** : un mur que la vue longe (vu de bout, en coupe à travers lui ou en élévation depuis son extrémité) peut aussi être cliqué. Faites glisser la poignée ronde en haut pour l'incliner, ou choisissez **Vertical**, **Incliné** ou **Double inclinaison** dans la bande et saisissez les angles.

Les dimensions s'alignent sur 10 mm ; saisissez une valeur pour plus précis. Un mur courbe peut être modifié en élévation tant qu'il court dans un sens à travers la vue ; sa vue de face propre fonctionne toujours.

## Dans le plan et en 3D

Ouvrez {{ui:Murs}} dans le groupe Modifier :

- {{ui:Attacher haut / base}} : choisissez **Attacher le haut** ou **Attacher la base** dans la ligne de l'outil. Cliquez sur le ou les murs (dans le plan ou dans la vue 3D), puis sur ce à quoi ils s'attachent : en 3D, cliquez sur la toiture, le plancher ou le plafond lui-même ; dans le plan, cliquez sur un point situé en dessous (lorsqu'il y en a plusieurs, une liste demande lequel).
- {{ui:Modifier le profil}} : dans le plan, cliquez sur un mur pour ouvrir sa vue de face. En 3D, cliquez sur un mur : ses points de profil reçoivent des poignées ; faites-en glisser une dans le plan du mur.
- {{ui:Inclinaison}} : cliquez sur un mur (plan ou 3D) et saisissez de combien il s'incline.
- {{ui:Ouverture dans le mur}} : dans le plan, cliquez sur le mur où passe l'ouverture ; sa **Largeur**, sa **Hauteur** et son **Allège** figurent dans la ligne de l'outil. En 3D, cliquez sur un coin sur la face du mur, puis sur le coin opposé. Lorsqu'un mur est désigné en 3D, ses ouvertures ont des poignées : les coins redimensionnent, le milieu déplace.

Les poignées 3D sont celles de la vue 3D elle-même : elles attendent pendant que la boîte de coupe affiche ses poignées.

## Sur le plan

Un mur incliné est dessiné à l'endroit où le plan le coupe (1200 au-dessus du niveau, sauf indication contraire de la vue) : son contour est décalé de l'inclinaison à cette hauteur, et une double inclinaison y est plus large ou plus étroite. Son contour au sol est dessiné avec les traits fins de ce qui se trouve sous la coupe. Les angles, poignées et cotes du mur restent à sa base.

## Copies

{{ui:Copier ce niveau…}} et Déplacer avec **Copier** emportent le profil, l'inclinaison et les ouvertures du mur. Un mur attaché à un plancher ou à un plafond est attaché au plancher ou au plafond copié du nouveau niveau ; un attachement à une toiture n'est pas copié avec un niveau (les toitures ne sont pas copiées). Une copie sur le même niveau reste attachée à la même toiture, au même plancher ou au même plafond.

## Dans le fichier

Un mur façonné est écrit comme un solide facetté (IfcFacetedBrep), que les autres logiciels lisent tel qu'il est dessiné ; ses réglages figurent sur le mur (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Une ouverture est un IfcOpeningElement dans le mur, sans rien qui la remplisse.

## Pas encore disponible

- Un profil avec des débords ou des trous dans son contour (utilisez des ouvertures pour les trous).
- En 3D : ajout ou suppression de points de profil, et inclinaison par une poignée (utilisez la vue de face du mur, une élévation ou une coupe, ou saisissez les valeurs).
- {{ui:Décalage}} avec Copier activé ne copie ni la forme ni les ouvertures du mur (Déplacer avec Copier le fait).
- Les couches d'un mur incliné ne sont pas dessinées sur les plans Moyen et Fin (son contour l'est).
- Ouvertures qui ne sont pas rectangulaires.
