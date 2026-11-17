---
title: Annuler d'une application à l'autre dans CadCraft Studio
summary: Dans Studio, BimCraft signale à Studio chaque étape terminée, pour que Studio puisse annuler votre dernière étape dans la fenêtre où vous avez travaillé en dernier.
keywords: annuler, studio, plusieurs applications, annulation du projet, historique, journal, fenêtre
from: c66dd0c1
---

## Ce que cela fait

Dans CadCraft Studio, chaque fenêtre d'application signale à Studio qu'une étape est terminée (un mur dessiné, un ensemble de murs accepté à partir d'un scan). Studio conserve ces étapes dans l'ordre de votre travail et peut demander à la fenêtre qui a produit la plus récente de l'annuler, avec sa propre fonction d'annulation. Ctrl+Z dans BimCraft reste celle de BimCraft et est aussi signalé à Studio.

## À savoir

- Studio ne demande l'annulation à une fenêtre que si sa liste d'annulation est exactement dans l'état où l'étape l'a laissée. Après Enregistrer (qui démarre une nouvelle liste de modifications) ou après avoir changé le modèle que vous modifiez, BimCraft répond que la liste a changé et Studio ignore cette fenêtre. Rien n'est imposé.
- Annuler les effets d'une application dans une autre n'est pas encore disponible.
- Hors de Studio, rien ne change.
- L'élément de menu de Studio qui demande l'annulation vient avec une version de Studio ; jusque-là, les étapes sont signalées, mais aucun élément de menu ne les utilise.

## Suite

- [Travailler à plusieurs en Live](topic:work-live)
