---
title: Repères de pièces et de surfaces
summary: Posez un repère avec le numéro, le nom et la surface sur une pièce ou une surface. Le repère suit l'élément auquel il appartient, et sa taille est fixée par sa hauteur sur papier.
keywords: repère, repère de pièce, repère de surface, repérer la pièce, repérer la surface, repérer tout, étiquette, hauteur du texte, hauteur sur papier, annotation
from: 67059d8a
---

## Ce que vous allez faire

Repérez les pièces et les surfaces une à une ou toutes ensemble, et déplacez un repère à l'endroit où il se lit bien.

## Où trouver les outils

- Dispositions en ruban : {{ui:Architecture}} › **Pièce et surface** › {{ui:Repérer la pièce}} et {{ui:Repérer la surface}}.
- Disposition classique : la barre Dessin › menu {{ui:Pièces}}.
- Une pièce ou une surface sélectionnée : Propriétés › {{ui:Ajouter un repère}}.

## Étapes

1. Choisissez {{ui:Repérer la pièce}} et cliquez dans une pièce, à l'endroit où le repère doit se trouver.
2. Ou appuyez sur {{ui:Repérer tout ce qui ne l'est pas}} dans la ligne : chaque pièce de ce niveau qui n'a pas de repère en reçoit un, en son milieu. C'est une seule étape d'annulation.
3. Pour déplacer un repère, sélectionnez-le avec l'outil Sélectionner et faites-le glisser. Propriétés contient {{ui:Le remettre au milieu}}.
4. {{ui:Repérer la surface}} fonctionne de la même façon pour les surfaces.

## Ce que fait un repère

- Il indique le numéro, le nom et la surface, dans vos unités d'affichage.
- Il suit sa pièce : renommez la pièce ou déplacez un mur, et le texte et l'emplacement du repère changent dans la même étape.
- Sa taille est fixée sur papier : {{ui:Hauteur du texte sur papier}} est exprimée en millimètres (2.5 pour commencer). À une échelle de vue de 1:50, un repère de 2.5 mm mesure 125 mm de haut dans le modèle ; à 1:100, il mesure 250 mm.
- Une pièce qui a un repère affiche le repère à la place de son étiquette simple.
- Lorsque sa pièce ou sa surface disparaît, le repère disparaît avec elle. Annuler les fait réapparaître tous les deux.

## Dans l'IFC

Un repère est un IfcAnnotation (ObjectType ROOMTAG ou AREATAG) dont le texte est un littéral texte, avec le GlobalId de l'élément qu'il désigne. Le texte du fichier donne la surface en mètres carrés.

## Pas encore disponible

- Formes de repère personnalisées, et ligne de repère.
- Les repères sur les portes, les fenêtres et les murs relèvent d'un outil distinct (voir les styles de repère des feuilles).

Voir aussi [Pièces et séparateurs de pièces](topic:rooms-and-separators).
