---
title: Étapes du projet, du programme aux instructions de chantier
summary: Partez d'un programme avec des surfaces cibles et voyez si chaque pièce est atteinte ou insuffisante au fur et à mesure du dessin, comparez les options de conception au programme, reliez les spécifications et les détails aux types, vérifiez les plans d'atelier et consignez les instructions de chantier sur les éléments.
keywords: programme, tableau des surfaces, surface cible, atteint, insuffisant, pièces, options de conception, options, volumétrie, budget, spécification, spec, détail, détail de construction, type, plan d'atelier, vérification, approuver, soumettre de nouveau, instruction de chantier, révision, cause, terrain, étape
from: 0a49b852
---

## Ce que vous allez faire

Parcourez les étapes d'un projet dans un seul panneau : rédigez le programme du client sous forme de pièces avec des surfaces cibles, comparez les options de conception à ce programme, gardez la spécification et les détails de construction avec les types auxquels ils appartiennent, vérifiez les plans d'atelier à mesure qu'ils reviennent des corps d'état, et consignez les instructions de chantier sur les éléments qu'elles modifient.

## Étapes

1. Dans le panneau de gauche, ouvrez **Étapes du projet**, puis **Programme**.
2. Collez les pièces, une par ligne : `Séjour; 1; 30` signifie une pièce de 30 m². Le nombre peut être omis. Choisissez **Ajouter les pièces**. Renseignez le client, le site, le budget, la tolérance et les délais, puis **Enregistrer le programme**.
3. Dessinez les murs. Chaque pièce formée par les murs qui porte le nom d'une pièce du programme (un numéro après le nom, comme « Chambre 2 », est ignoré) est comptée. Le **Tableau des surfaces** indique **Atteint**, **Insuffisant**, **Dépassement** ou **Non dessiné**, avec l'écart en m².
4. Pour commencer un nouveau projet de cette façon, choisissez **Démarrer un nouveau projet à partir d'un programme**. Il ouvre un nouveau modèle, à partir de l'un de vos gabarits enregistrés si vous en choisissez un, et y place le programme comme première étape.
5. Ouvrez **Options par rapport au programme**. Chaque option de volumétrie conservée dans le modèle est dessinée à la même échelle avec sa surface brute, ce que demande le programme et le nombre de pièces du programme qui y tiennent. **Répartir le programme ici** place les pièces dans les niveaux de l'option, du plus bas au plus haut, et indique ce qui ne tient pas. Le coût provient uniquement de la table de prix du projet ; sans ligne correspondante, il affiche « Aucun tarif ».
6. Ouvrez **Types, spécifications et détails**. Chaque type de mur, de porte, de fenêtre et de dalle indique s'il a un texte de spécification, les détails qui lui sont liés, et les cas où la spécification, les tableaux et les plans ne concordent pas. **Lier un détail** ajoute un fichier DetailCraft ou CadCraft, une adresse ou une feuille de ce modèle.
7. Ouvrez **Plans d'atelier**. Sélectionnez dans le modèle les éléments couverts par un plan d'atelier, puis **Recevoir**. Utilisez **Approuver**, **Approuvé avec remarques** ou **Réviser** avec le nom et la remarque du relecteur. **Soumis de nouveau** crée la révision suivante du même enregistrement et conserve l'historique de relecture. L'état est aussi inscrit sur chaque élément.
8. Ouvrez **Instructions de chantier**. Sélectionnez les éléments, indiquez la cause et ses effets sur le coût et les délais avec vos propres mots, puis **Consigner**. Une fois un problème consigné, **Expliquer les modifications depuis ce problème** indique quels éléments modifiés sont couverts par une instruction et lesquels ont changé sans rien consigner.

## À savoir

- Chaque étape peut être annulée en une seule action. Rien n'est refusé : un programme non atteint, un type qui ne concorde pas avec son texte, ou un plan d'atelier en retard est un avertissement ou une remarque dans **Problèmes**.
- Les pièces du programme sont des espaces sans murs. Elles portent un objectif, et non une surface dessinée ; les tableaux de pièces et COBie ne les comptent donc jamais comme pièces dessinées.
- Une répartition ne fait qu'empiler les pièces dans les niveaux selon leur surface. Elle ne dessine aucun mur.
- Le texte de spécification est rédigé dans **Documents** à partir du modèle. Ici, il est seulement comparé aux dimensions propres au modèle : aucune clause de norme n'est jamais rédigée à votre place.
- Les plans d'atelier et les instructions de chantier sont des enregistrements dans le même historique que le panneau **Problèmes et révisions**, de sorte que les deux panneaux les affichent.
- L'état d'un plan d'atelier est une propriété de chaque élément (`CadCraft_ShopDrawing`), et une instruction de chantier est `CadCraft_SiteInstruction`, de sorte que **Rechercher** et **Colorer par propriété** peuvent les utiliser.
- Les repères vérifiés sur le terrain (étape 7) se trouvent dans **Propriétés**, sous **Vérification**.
