---
title: Modifier en élévations et en coupes, formats de feuille, cartouches et renommage
summary: Déplacez murs, portes, fenêtres et niveaux, et dessinez murs, ouvertures, niveaux, cotes et notes directement dans une élévation ou une coupe, conservez vos propres formats de feuille et cartouches comme données, et renommez familles, tailles et éléments depuis le navigateur de projet.
keywords: nouveau niveau en élévation, cote en élévation, modifier en élévation, modifier en coupe, vue en élévation, vue en coupe, déplacer un mur en élévation, appui de fenêtre, hauteur de niveau, faire glisser un niveau, dessiner un mur en coupe, notes sur élévation, annotation, format de feuille, format de feuille personnalisé, format de papier, cartouche, modèle de cartouche, cadre, champs, client, dessiné par, révision, renommer une famille, renommer un type, renommer un élément, navigateur de projet
from: 8726cf83
---

## Ce que vous allez faire

Modifiez le bâtiment là où vous le voyez de côté, préparez les feuilles que votre bureau utilise, et donnez aux familles, tailles et éléments les noms que vous voulez.

## Modifier en élévation ou en coupe

1. Activez {{ui:Dessin}}. Dans le {{ui:Navigateur de projet}}, ouvrez {{ui:Élévations}} ou {{ui:Coupes}}.
2. Cliquez sur le bouton crayon {{ui:Modifier dans cette vue}} sur une ligne. La vue s'ouvre telle que les feuilles la dessinent, avec ce que vous pouvez modifier par-dessus.
3. Avec {{ui:Sélectionner et déplacer}} :
   - faites glisser un mur qui fait face à la vue, le long de sa ligne ;
   - faites glisser une porte ou une fenêtre le long de son mur, et une fenêtre vers le haut ou le bas pour changer son appui ;
   - faites glisser la ligne d'un niveau vers le haut ou le bas pour changer sa hauteur ;
   - faites glisser une note.
4. {{ui:Porte}} et {{ui:Fenêtre}} : cliquez sur un mur à l'endroit où elle va (une fenêtre à la hauteur où vous cliquez).
5. {{ui:Mur}} (coupes) : cliquez à l'endroit où il commence et à l'endroit où il finit sur le plan de la coupe ; il est dessiné sur le niveau sous votre premier clic, jusqu'au niveau suivant.
6. {{ui:Remarque}} : cliquez et écrivez. Les notes sont conservées dans le fichier et dessinées sur chaque feuille qui affiche la vue.
7. {{ui:Niveau}} : cliquez à la hauteur où un nouveau niveau doit aller. Il a la même hauteur que l'écart jusqu'au niveau au-dessus (3000 mm au sommet) ; faites glisser sa ligne pour la modifier. Un deuxième niveau à moins de 50 mm d'un autre est refusé.
8. {{ui:Cote}} : cliquez à l'endroit où elle commence et à l'endroit où elle finit. Les clics accrochent les bords de murs, portes, fenêtres et niveaux, et la cote est horizontale ou verticale, selon la direction de votre déplacement. Elle est conservée dans le fichier et dessinée, avec sa longueur, sur chaque feuille qui affiche la vue. Cliquez dessus avec {{ui:Sélectionner et déplacer}} pour la sélectionner.
9. {{ui:Supprimer}} ou la touche {{key:Delete}} supprime le mur, la porte, la fenêtre, la cote ou la note sélectionné. {{key:Ctrl+Z}} annule la dernière modification tant que le panneau est ouvert. {{key:Esc}} revient à {{ui:Sélectionner et déplacer}}.

Chaque modification est la même que celle du plan, en une seule étape d'annulation : le plan, la vue 3D et les feuilles suivent.

## Formats de feuille et cartouches

1. Ouvrez une feuille ({{ui:Nouvelle feuille}}, ou l'une des vôtres sous {{ui:Feuilles}}). À côté de {{ui:Papier}} se trouvent {{ui:Cartouche}} et {{ui:Formats…}}.
2. {{ui:Papier}} liste chaque format standard (de Letter à Arch E, de A4 à A0) et les vôtres.
3. {{ui:Cartouche}} : {{ui:Bandeau (en bas)}}, {{ui:Colonne (à droite)}} avec les champs habituels, ou le vôtre. Les champs de celui que vous choisissez s'affichent sous le nom de la feuille : saisissez le client, la personne qui a dessiné, la révision.
4. {{ui:Formats…}} crée les vôtres : un format de feuille (nom, largeur, hauteur, cadre) et un cartouche (où il se place, sa largeur, ses champs un par ligne ; terminez un champ par * pour le rendre grand).
5. {{ui:Exporter}} les enregistre comme fichier de bibliothèque, et {{ui:Importer…}} en ajoute un à un autre modèle. Ils sont conservés dans le modèle, si bien qu'un gabarit les transporte.

## Renommer familles, tailles et éléments

1. Dans le {{ui:Navigateur de projet}}, ouvrez {{ui:Familles}}.
2. Le crayon à côté d'une famille la renomme ; le type de chaque taille prend le nouveau nom.
3. Ouvrez les tailles d'une famille pour renommer une taille, ou un élément placé à partir d'elle (jusqu'à 40 par taille sont listés).

Chaque renommage est une étape d'annulation.
