---
title: Touches et souris
summary: Chaque action au clavier, à la souris, au pavé tactile et au tactile dans BimCraft, regroupée selon ce que vous regardez.
keywords: clavier, raccourcis, touches, souris, pavé tactile, tactile, orbite, panoramique, zoom, masquer, isoler, transparence, annuler, rétablir, copier, coller, dupliquer, enregistrer, ajuster, affichage d'impression, échap, paramètres, dessiner, mur, porte, fenêtre, plan
from: 5c6eedce
---

BimCraft a peu de raccourcis. La plupart des opérations se font à la souris et avec les panneaux. Les raccourcis écrits avec {{key:Mod}} utilisent Cmd sur Mac et Ctrl ailleurs. Voir [Touches, souris et pavés tactiles](common:keys) pour savoir comment les touches sont écrites dans cette aide.

## Partout

| Touche | Effet |
|---|---|
| {{key:Ctrl+Shift+F}} | Fait défiler les modes d'écran : normal, plein écran, plein écran avec les barres masquées. Ctrl sur toutes les plateformes, y compris Mac |
| {{key:Esc}} | Quitter le plein écran |
| {{key:Mod+,}} | Ouvrir {{ui:Paramètres}}. Voir [Paramètres de BimCraft](topic:settings) |
| {{key:Tab}} | Passer d'un bouton, d'une case à cocher ou d'une valeur à l'autre. Tous les contrôles sont accessibles au clavier |

## Vue 3D (modèles IFC)

| Touche ou action | Effet |
|---|---|
| {{key:F}} | Ajuster tout le modèle, vue trois quarts (identique à {{ui:Ajuster}}) |
| {{key:Esc}} | Désélectionner, ou arrêter le placement ou le collage |
| Clic | Sélectionner l'élément sous le pointeur ; cliquer sur le fond vide désélectionne |
| {{key:Mod}}+clic ou {{key:Shift}}+clic | Ajouter un élément à la sélection, ou le retirer |
| {{key:H}} | Masquer les éléments sélectionnés. Voir [Masquer, isoler et voir à travers les éléments](topic:hide-and-isolate) |
| {{key:I}} | Afficher seulement les éléments sélectionnés (isoler) |
| {{key:T}} | Afficher les éléments sélectionnés, tout le reste en transparence |
| {{key:Shift+H}} | Réafficher tous les éléments |
| {{ui:Marche}} | Puis {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou les flèches pour marcher, {{key:Shift}} pour courir, glisser pour regarder autour, {{key:Esc}} pour arrêter. Voir [Parcourir un modèle](topic:walk) |
| {{key:M}} | Mesurer des distances et des aires de faces. Voir [Mesurer des distances, des aires de faces et des positions en 3D](topic:measure) |
| Glisser avec le bouton gauche | Orbiter |
| Glisser avec le bouton droit | Panoramique |
| {{key:Shift}} ou {{key:Mod}} et glisser avec le bouton gauche | Panoramique (pratique sur un pavé tactile) |
| Faire défiler la molette, ou glisser avec le bouton du milieu | Zoom |
| Défilement à deux doigts ou pincement sur un pavé tactile | Zoom |
| Un doigt (tactile) | Orbiter ; un appui sélectionne |
| Deux doigts (tactile) | Pincer pour zoomer, déplacer ensemble pour faire un panoramique |

| {{key:X}} | Plan de coupe activé et désactivé. Voir [Couper un modèle IFC avec un plan de coupe](topic:section-plane) |
| {{key:Shift+X}} | Boîte de coupe autour des éléments sélectionnés, avec la pièce définie dans Paramètres |

Il n'existe pas de touches pour {{ui:Dessus}}, {{ui:Avant}} et {{ui:Côté}} ; utilisez les boutons.

## Édition

Les mêmes commandes figurent dans la barre d'outils : {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}} et le menu {{ui:Plus}}, qui affiche chaque touche. Elles fonctionnent dans la vue 3D d'un modèle IFC, pas pendant la saisie dans un champ. Voir [Copier, coller et dupliquer des éléments de bibliothèque](topic:copy-paste).

| Touche | Effet |
|---|---|
| {{key:Mod+Z}} | Annuler la dernière modification |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir ce qu'Annuler a retiré |
| {{key:Mod+C}} | Copier les éléments sélectionnés (leurs noms et propriétés vont aussi dans le presse-papiers, sous forme de texte) |
| {{key:Mod+X}} | Couper les éléments sélectionnés : les copier, puis les supprimer |
| {{key:Mod+V}} | Coller ce que vous avez copié : il suit le pointeur, cliquez à l'endroit voulu |
| {{key:Mod+Shift+V}} | Coller à la même position : là où une coupe a été faite, ou à côté des originaux après une copie |
| {{key:Mod+D}} | Dupliquer : copier les éléments sélectionnés et commencer à les coller |
| {{key:Delete}} | Supprimer les éléments sélectionnés, avec leurs parties et leurs ouvertures. Voir [Supprimer, couper, copier et coller des éléments de bâtiment](topic:edit-elements) |
| {{key:Mod+A}} | Sélectionner tous les éléments affichés |
| {{key:Esc}} | Ne rien sélectionner |

Lorsque du texte est sélectionné sur la page, {{key:Mod+C}} copie ce texte comme d'habitude.

## Vue en plan (Dessin)

Ces touches fonctionnent lorsque {{ui:Dessin}} est activé et que vous ne saisissez pas dans un champ. Voir [Dessiner des murs](topic:draw-walls) et [Portes et fenêtres](topic:doors-and-windows).

| Touche ou action | Effet |
|---|---|
| {{key:V}} | {{ui:Sélectionner}} |
| {{key:W}} | {{ui:Mur}} |
| {{key:D}} | {{ui:Porte}} |
| {{key:N}} | {{ui:Fenêtre}} |
| {{key:H}} | Avec {{ui:Porte}} ou {{ui:Fenêtre}} : charnières à l'autre extrémité |
| {{key:Shift}} pendant le tracé d'un mur | Le maintenir à 0°, 90°, 180° ou 270° |
| Chiffres et signes de pieds et de pouces (`'` et `"`) | Commencer à saisir une longueur dans la zone {{ui:Longueur}} ; {{key:Enter}} la valide |
| {{key:Enter}}, {{key:Esc}}, clic droit ou double-clic | Terminer le mur en cours de tracé ; {{key:Esc}} une nouvelle fois revient à {{ui:Sélectionner}} |
| {{key:Delete}} | Supprimer les murs, portes et fenêtres sélectionnés ; les murs restants se rejoignent |
| {{key:F}} avec le pointeur sur le plan | Ajuster le plan |
| Faire défiler la molette | Zoomer autour du pointeur |
| Glisser avec le bouton du milieu ou droit, ou {{key:Space}} et glisser | Panoramique ; avec {{ui:Sélectionner}} activé, un simple glisser fait aussi un panoramique |
| Glisser une porte ou une fenêtre avec {{ui:Sélectionner}} | La déplacer le long de son mur, ou sur un autre mur |
| Deux doigts (tactile) | Pincer pour zoomer, déplacer ensemble pour faire un panoramique |

## Placer et coller des éléments de bibliothèque

| Touche | Effet |
|---|---|
| {{key:R}} | Tourner l'élément de 90° |
| {{key:Tab}} | Accrochage au mur activé et désactivé : le dos de l'élément se place contre le mur le plus proche |
| {{key:Enter}} dans **X, Y (mm)** | Placer l'élément à la position saisie |
| {{key:Esc}} | Arrêter le placement ou le collage |

## Modifier les valeurs IFC

| Touche | Effet |
|---|---|
| {{key:Enter}} | Conserver la valeur saisie |
| {{key:Esc}} | Annuler et rétablir l'ancienne valeur |
| Clic ailleurs | Conserver la valeur saisie |
| {{key:Mod+Z}} | Annuler la dernière modification. Uniquement si des modifications ne sont pas enregistrées et que vous ne saisissez pas dans un champ |
| {{key:Mod+Y}} | Rétablir ce qu'Annuler a retiré |
| {{key:Mod+S}} | Enregistrer au format IFC. Uniquement si des modifications ne sont pas enregistrées ; sinon, la commande d'enregistrement du navigateur s'ouvre |

Pour modifier uniquement au clavier : appuyez sur {{key:Tab}} jusqu'à ce qu'une valeur soit en surbrillance, puis sur {{key:Enter}} pour commencer à saisir.

## Dessins 2D (DWG et DXF)

| Touche ou action | Effet |
|---|---|
| {{key:F}} | Ajuster le dessin ou la feuille |
| {{key:P}} | Affichage d'impression activé et désactivé |
| Double-clic | Ajuster |
| Glisser avec n'importe quel bouton | Panoramique |
| Faire défiler la molette | Zoom au niveau du pointeur |
| Défilement à deux doigts ou pincement sur un pavé tactile | Zoom au niveau du pointeur. Le défilement à deux doigts ne fait pas de panoramique |
| Un doigt (tactile) | Panoramique. Le zoom par pincement n'est pas encore disponible pour les dessins |

## Dessins en 3D

| Touche ou action | Effet |
|---|---|
| {{key:3}} | 3D activée et désactivée (aussi sur la vue 2D) |
| {{key:F}} | Étendue : tout le dessin |
| Glisser avec le bouton du milieu ou gauche | Orbiter |
| Glisser avec le bouton droit, ou {{key:Shift}} et glisser | Panoramique |
| Faire défiler la molette | Zoom vers ce qui se trouve sous le pointeur |
| Balayage à deux doigts sur un pavé tactile | Orbiter ; avec {{key:Shift}}, panoramique |
| Pincement sur un pavé tactile | Zoom |
| Un doigt (tactile) | Orbiter |
| Deux doigts (tactile) | Pincer pour zoomer, déplacer ensemble pour faire un panoramique |

{{key:F}}, {{key:P}} et {{key:3}} ne font rien pendant la saisie dans un champ, lorsque le tableau des équipements est affiché, ou lorsque vous maintenez {{key:Mod}} ou {{key:Alt}}.

## Fichiers

| Action | Effet |
|---|---|
| Glisser un fichier sur la page | L'ouvrir |
| Glisser un dossier sur la page | L'ouvrir comme dossier de projet, sans demande d'autorisation |
