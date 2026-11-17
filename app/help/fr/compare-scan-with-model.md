---
title: Comparer un scan avec le modèle et le planning 4D
summary: Évaluez chaque élément du modèle par rapport à un nuage de points ouvert (construit, en partie, manquant, non atteint), voyez le pourcentage construit, colorez le modèle en conséquence et, avec un planning 4D chargé, listez ce qui est en retard ou en avance au jour 4D.
keywords: scan, nuage de points, avancement, pourcentage d'achèvement, construit, manquant, en retard, en avance, 4D, avancement sur chantier, écart, tel que construit, scan laser, drone, comparer
from: 6fdc9003
---

Ouvrez un IFC, ouvrez un nuage de points à côté (voir [Nuages de points](topic:point-clouds)) et placez-le sur le modèle. La section {{ui:Comparer le scan avec le modèle}} apparaît dans le panneau de droite pendant qu'un nuage est ouvert.

## Ce que cela fait

Cliquez sur {{ui:Comparer}}. Chaque élément du modèle est jugé sur sa surface, car c'est ce que voit un scanner. Les six faces de sa boîte sont découpées en cellules d'environ 20 cm ; une cellule compte lorsqu'un point du scan se trouve à moins de votre {{ui:Tolérance}} (50 mm au départ) de la face. Seule la meilleure grande face compte, si bien qu'un mur scanné d'un seul côté n'est pas pénalisé pour son autre côté.

- **Construit** : au moins 40 % de la surface est vue.
- **En partie** : de 10 % à 40 %.
- **Manquant** : moins que cela, mais le scan atteint l'élément (des points à moins de 1.5 m de lui).
- **Non atteint** : le scan ne s'y est jamais rendu, donc rien n'est dit à son sujet.

Pour les éléments construits et en partie construits, il donne aussi l'écart moyen des points du scan par rapport à la surface du modèle, et indique si l'élément est en place (dans la tolérance), proche (dans trois fois la tolérance) ou décalé (au-delà). Il ne voit que les écarts jusqu'à cinq fois la tolérance : un élément construit plus loin de sa place que cela apparaît comme manquant.

Le résumé donne le pourcentage construit parmi les éléments atteints par le scan, en nombre et en volume. Les éléments en partie construits sont comptés à part et ne sont pas ajoutés aux éléments construits.

## Par rapport au planning 4D

Avec un planning 4D chargé (voir [Planning 4D](topic:4d-schedule)), le résultat utilise aussi le jour réglé sur le curseur 4D : les éléments dus à ce jour que le scan ne montre pas comme construits sont **en retard sur le planning** ; les éléments pas encore dus qui sont construits sont **en avance**. Les éléments en retard sont listés dans {{ui:Problèmes}}, et le tableau peut être filtré sur eux. Sans planning, rien n'est dit sur le retard ou l'avance.

## Le tableau et le modèle

Cliquez sur une ligne pour sélectionner l'élément. {{ui:Colorer le modèle}} peint les éléments en vert (construit), ambre (en partie), rouge (manquant) ou gris (non atteint) ; {{ui:Couleurs d'origine}} les rétablit. {{ui:Enregistrer le CSV}} écrit le tableau. {{ui:Marquer les éléments correspondants comme vérifiés sur site}} marque comme vérifié sur site (LOD 500, méthode scan) chaque élément vu comme construit et dans la tolérance, en une seule étape que vous pouvez annuler. Voir [Marquer des éléments comme contrôlés ou vérifiés sur site](topic:verification).

:::warning
Cela compare la boîte de chaque élément avec des points du scan situés dans une tolérance. Ce n'est **ni un relevé, ni un métré, ni une base de paiement**. Un élément masqué derrière un élément scanné (un mur derrière un habillage, une dalle sous un revêtement de sol) partage sa surface et peut apparaître comme construit ; un élément courbe ou incliné a une boîte plus grande que son corps et peut apparaître comme en partie ou manquant. Regardez la liste avant d'agir. Les commentaires de permis et les notes d'avancement ne font pas partie de cela : ils restent dans les colonnes où vous les gardez.
:::

Un assistant peut lancer la même comparaison avec l'outil {{ui:Comparer le scan avec le modèle}} ; il ne modifie rien dans le modèle.
