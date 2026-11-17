---
title: Menus, touches et souris
summary: Choisissez un style de menu adapté à votre façon de travailler, attribuez votre propre touche à n'importe quelle commande, déplacez les commandes d'un menu à l'autre et définissez ce que font la molette et chaque bouton de la souris.
keywords: style de menu, menus, barre de menus, ruban, ligne de commande, raccourcis clavier, touches de raccourci, touches, personnaliser, remapper, réaffecter, souris, molette, inverser, sens du zoom, bouton du milieu, panoramique, orbite, touches à deux lettres, exporter, importer, changer, familier
from: a424e836
---

Les commandes de BimCraft sont les mêmes quelle que soit la façon dont vous y accédez. Un **style de menu** décide seulement de leur place à l'écran, de leur nom affiché et des touches qui les lancent, afin que vous puissiez garder vos habitudes. Choisissez-en un dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur s'en souvient.

## Les cinq styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:CadCraft}} | La barre d'outils et les touches propres à BimCraft ({{key:W}} mur, {{key:D}} porte, {{key:N}} fenêtre, {{key:X}} coupe, {{key:F}} ajuster). Le point de départ. |
| {{ui:Conception résidentielle}} | Une barre de menus (Fichier, Édition, Build, Bibliothèque, 3D, CAD, Outils, Vue) au-dessus d'une rangée d'outils de construction, à la manière des logiciels de conception résidentielle. Les mêmes touches simples, plus {{key:Mod+L}} pour la bibliothèque, {{key:F9}} pour la vue 3D, {{key:F10}} pour le plan et {{key:F11}} pour les deux. |
| {{ui:Ruban BIM}} | Des onglets de grands boutons (Architecture, Insérer, Annoter, Modifier, Vue, Sortie) avec un menu Fichier et des boutons rapides à droite. Touches à deux lettres : {{key:W}} puis {{key:A}} pour un mur, {{key:D}} {{key:R}} porte, {{key:W}} {{key:N}} fenêtre, {{key:S}} {{key:C}} coupe, {{key:Z}} {{key:F}} ajuster. Le bouton du milieu effectue un panoramique ; {{key:Shift}} et le bouton du milieu effectuent une orbite. |
| {{ui:Dessin classique}} | Un petit ruban et une ligne de commande, pour ceux qui tapent les commandes : WALL, DOOR, WINDOW, ROOF, U (annuler), ZOOM, SECTION, PLOT, INSERT, HELP. Commencez à taper n'importe où et les lettres vont à la ligne de commande ; {{key:Enter}} lance la commande, {{key:Enter}} sans rien saisir répète la dernière commande, {{key:Esc}} l'efface. |
| {{ui:Visionneuse}} | Pour ouvrir et vérifier des modèles plutôt que pour les dessiner : menus {{ui:Fichier}}, {{ui:Vue}}, {{ui:Afficher}}, {{ui:Vérifier}} et {{ui:Édition}} au-dessus d'une rangée d'outils de visualisation (ajuster, dessus, face, côté, coupe, mesurer, masquer, isoler, transparence, tout afficher, parcours). Les outils de construction attendent dans un menu {{ui:Modèle}} à la fin. Mêmes touches que le style propre à BimCraft. |

Les menus et les rubans apparaissent dès qu'un modèle est ouvert ou qu'un nouveau bâtiment est commencé ; avant cela, le panneau de gauche ouvre les fichiers et démarre les bâtiments.

:::tip
Une touche qui appartient à la disposition propre à BimCraft mais pas au style choisi ne fait rien, et la barre d'état indique où sa commande est passée (« Dans Ruban BIM, Coupe est SC »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours leur sens, et un outil en cours garde ses propres touches : {{key:R}} et {{key:Tab}} pendant le placement, {{key:W}} {{key:A}} {{key:S}} {{key:D}} pendant le parcours, {{key:H}} avec les outils porte et fenêtre, les chiffres pendant la saisie d'une longueur.
:::

## Adaptez-le à vos besoins

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). Cliquez sur {{ui:Ajouter une touche}} puis appuyez sur la touche, ou sur deux touches successives pour une touche à deux lettres. Cliquez sur une touche pour la retirer.
3. Avec une barre de menus ou un ruban, {{ui:Emplacement}} déplace la commande vers un autre menu ou panneau, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette, les boutons qui effectuent le panoramique du plan et ce que fait chaque bouton dans les vues 3D.
5. Donnez-lui un nom et cliquez sur {{ui:Enregistrer}}.

Enregistrer un style intégré crée votre propre copie (« Ma conception résidentielle ») ; le style intégré, lui, ne change jamais. Une touche attribuée à deux commandes, ou qui serait exécutée avant qu'une touche à deux lettres puisse être saisie, s'affiche en rouge et doit être corrigée avant l'enregistrement.

## Souris

- **Molette** : {{ui:Faire défiler vers le haut zoome en avant}} (le départ) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et la vitesse. Un pincement sur pavé tactile zoome toujours dans le sens du mouvement de vos doigts.
- **Panoramique du plan et des dessins** : avec n'importe lequel des boutons gauche, central ou droit. Maintenez {{key:Space}} et faites glisser pour un panoramique également ; un glisser avec le bouton gauche ne fait un panoramique que là où un clic ne sélectionnerait ni ne dessinerait.
- **Glisser dans les vues 3D** : {{ui:Propre à chaque vue}} conserve les boutons de BimCraft (gauche : orbite, droit : panoramique). Ou réglez chaque bouton sur orbite, panoramique, zoom ou rien ; {{key:Shift}} avec le bouton inverse orbite et panoramique. Un clic sans glisser sélectionne toujours.

## Emportez-le avec vous

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, depuis un autre ordinateur ou depuis un collègue. Un fichier importé ne peut pointer que vers les commandes propres à BimCraft : tout le reste (une commande que cette version n'a pas, une touche qui ne fonctionne pas ici) est omis et compté dans la barre d'état. {{ui:Supprimer ce style}} retire un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}} sous les cartes de style fait ouvrir chaque application dans le style correspondant (sa propre barre d'outils, une barre de menus, un ruban ou Dessin classique ; {{ui:Visionneuse}} est propre à BimCraft et n'a pas d'équivalent ailleurs), avec les modifications que vous avez faites dans chaque application ; une application sans style correspondant garde le sien. Choisir un autre style dans une application ne change que celle-ci.
:::

Voir aussi : [Clavier et souris](topic:keyboard) · [Paramètres de BimCraft](topic:settings) · [Venir d'autres logiciels BIM et de dessin](topic:coming-from)
