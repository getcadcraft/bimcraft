---
title: Fondations sous les murs
summary: Posez une dalle sur terre-plein, des murs de soubassement avec dalle, un vide sanitaire ou un sous-sol sous un bâtiment en un clic ; les semelles sont dimensionnées d'après les murs et le nombre d'étages, et la fondation suit lorsque les murs bougent.
keywords: fondation, semelle, dalle sur terre-plein, bord épaissi, dalle monolithique, mur de soubassement, vide sanitaire, sous-sol, mur de sous-sol, gel, béton, largeur de semelle
from: c0e20172
---

## Ce que vous allez faire

Donner au bâtiment une fondation qui correspond à ses murs. BimCraft suit l'extérieur des murs, dimensionne les semelles d'après le type de mur et le nombre d'étages qui reposent dessus, et refait la fondation chaque fois que les murs changent.

## Poser une fondation

1. Au niveau dont les murs reposent dessus (en général le premier), ouvrez {{ui:Build}} et choisissez {{ui:Fondation}}.
2. Choisissez la nature :
   - **Dalle sur terre-plein** : une dalle béton de 4" dont la face supérieure est le plancher, avec un bord épaissi sous les murs.
   - **Murs de soubassement et dalle** : murs de fondation jusqu'au plancher, posés sur semelles, avec une dalle à l'intérieur.
   - **Vide sanitaire** : murs de fondation qui s'arrêtent sous l'ossature du plancher, sur semelles, sans dalle.
   - **Sous-sol** : murs de fondation pleine hauteur sur semelles, avec une dalle de sous-sol, sous l'ossature du plancher.
3. Pointez à l'intérieur du bâtiment : les semelles apparaissent en tirets avec leur dimension. Cliquez.

Cliquer sur un bâtiment qui a déjà une fondation la sélectionne, afin que vous puissiez la modifier au lieu d'en ajouter une seconde.

## La modifier

Sélectionnez la fondation (cliquez à l'intérieur du bâtiment avec {{ui:Fondation}}, ou cliquez sur l'une de ses parties dans la vue 3D ou dans l'arborescence du modèle) et modifiez-la dans **Propriétés** : la nature, la largeur et la profondeur des semelles, la profondeur de la face inférieure de la semelle, l'épaisseur des murs, la hauteur à laquelle les murs s'arrêtent sous le plancher, la hauteur du sous-sol et l'épaisseur de la dalle. Chaque modification constitue une seule étape d'annulation.

Les dimensions marquées **auto** viennent des murs : semelles de 12", 15" ou 23" de large pour un, deux ou trois étages sur dalle ou murs de soubassement, 18", 22" ou 27" sur un vide sanitaire ou un sous-sol, et 4" de plus sous les murs en maçonnerie ou en béton. Saisissez une dimension pour fixer la vôtre ; saisissez `0` pour revenir à auto.

:::warning
Les dimensions automatiques sont des valeurs par défaut signalées pour des maisons courantes à ossature légère, et non un calcul d'ingénierie. Un concepteur ou un ingénieur vérifie les semelles, les profondeurs et les murs en fonction du sol, de la profondeur de gel et des charges.
:::

## Ce qui est enregistré

Une fondation est enregistrée comme un assemblage d'éléments IFC (« Foundation ») composé d'une semelle (ou du bord épaissi d'une dalle), d'un mur de fondation et d'une dalle selon ce qu'exige sa nature, le tout en béton, chacun avec ses quantités : longueurs, largeurs, hauteurs, surfaces et volumes, prêts pour les métrés.

## Bons à savoir

- Déplacer, ajouter ou supprimer des murs refait la fondation qui se trouve dessous ; tracer des murs au niveau supérieur élargit les semelles situées dessous pour l'étage supplémentaire.
- {{key:Delete}} supprime une fondation sélectionnée avec toutes ses parties.
- Avec le terrain du site dans le modèle (voir [Le terrain du site, la plateforme de construction et les revêtements](topic:terrain)), les murs de soubassement et les semelles de vide sanitaire descendent avec lui par paliers de 8".
- Les semelles sous les murs intérieurs ne sont pas encore disponibles.
