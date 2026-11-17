---
title: Paramètres de BimCraft
summary: Choisissez si les pièces et les espaces s'affichent, si les arêtes sont dessinées et dans quelle vue un modèle s'ouvre, et commencez à placer avec l'accrochage au mur activé.
keywords: paramètres, préférences, options, espaces, pièces, ifcspace, arêtes, lignes, performance, grand modèle, vue d'ouverture, caméra, vue de dessus, accrochage au mur, accrochage
from: 4416e64f
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application ou avec {{key:Mod+,}}. Le premier onglet, {{ui:BimCraft}}, contient les paramètres propres à cette application ; {{ui:Général}} contient ceux que partagent toutes les applications CadCraft (thème, barre d'outils, panneaux). Les paramètres de BimCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur s'en souvient. {{ui:Réinitialiser les paramètres de BimCraft}}, en bas de la boîte de dialogue, les remet, ainsi que les paramètres partagés, à leur état initial.

## Menus, touches et souris

Le style de menu (la barre d'outils propre à BimCraft, une barre de menus de conception de l'habitat, un ruban BIM ou une ligne de commande de dessin), vos propres touches et menus, et ce que font la molette et les boutons de la souris. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).

## À l'ouverture d'un modèle

- **Afficher les pièces et les espaces** (désactivé au départ) : les pièces et les espaces sont des boîtes transparentes qui peuvent masquer les murs situés derrière elles ; elles sont donc masquées au départ. Le bouton {{ui:Espaces}} au-dessus du modèle les affiche ou les masque toujours pour le modèle ouvert.
- **Arêtes** : {{ui:Arêtes activées}} (la valeur de départ) dessine les lignes d'arêtes qui donnent l'aspect de dessin. {{ui:Petits modèles seulement}} ne les dessine que pour les modèles de moins de 300,000 triangles, ce qui garde les grands modèles plus rapides à manipuler. {{ui:Arêtes désactivées}} ouvre chaque modèle sans arêtes. Le bouton {{ui:Arêtes}} les active ou les désactive toujours pour le modèle ouvert. Au-delà de 1.5 million de triangles, les arêtes sont toujours désactivées.

## Les dessins s'ouvrent en

La manière dont un dessin DWG ou DXF s'affiche d'abord : {{ui:3D (le plus rapide)}} (la valeur de départ) dessine rapidement même un grand dessin, ou {{ui:Objet (2D)}} ouvre la vue à plat de l'espace objet. Les onglets au-dessus du dessin permettent de passer à tout moment à {{ui:Modèle}}, aux feuilles et à {{ui:3D}}. Un dessin sans rien dans l'espace objet, ou un navigateur incapable d'afficher la 3D, s'ouvre toujours en 2D.

## Vue d'ouverture

La caméra avec laquelle un modèle s'ouvre : {{ui:Ajuster}} (la valeur de départ : tout le modèle vu depuis un coin), {{ui:Dessus}}, {{ui:Avant}} ou {{ui:Côté}}. Les boutons au-dessus du modèle changent la vue à tout moment.

**Un bâtiment tourné dans son site** : beaucoup de modèles arrivent avec le bâtiment incliné par rapport aux axes du fichier (coordonnées de levé ou partagées). {{ui:D'équerre avec le bâtiment}} (la valeur de départ) aligne un tel bâtiment : {{ui:Ajuster}}, {{ui:Dessus}}, {{ui:Avant}}, {{ui:Côté}}, les faces du ViewCube et chaque nouvelle coupe suivent ses murs, et la boussole du ViewCube indique toujours le nord du modèle. {{ui:Comme placé dans le site}} conserve les axes du fichier. Un bâtiment dont les murs sont alignés sur les axes apparaît de la même façon dans les deux cas.

## Placer des éléments de bibliothèque

**Commencer avec l'accrochage au mur activé** (désactivé au départ) : lorsque vous commencez à placer ou à coller un élément de bibliothèque, son dos s'accroche au mur le plus proche, face à la pièce. {{key:Tab}} ou {{ui:Accrochage au mur}} dans la barre de placement le désactive pour le moment. Un niveau sans murs démarre sans cet accrochage.

## Boîte de coupe

{{ui:Marge autour de la sélection}} est l'espace que {{ui:Boîte de coupe autour de la sélection}} laisse de chaque côté des éléments sélectionnés, en millimètres : 300 au départ, jusqu'à 5000. Voir [Couper un modèle IFC avec un plan de coupe](topic:section-plane).

## Position

{{ui:Latitude et longitude en}} choisit le système dans lequel {{ui:Mesurer}} › {{ui:Position}} donne les latitudes et les longitudes : WGS 84 (EPSG:4326, la valeur de départ, utilisée par le GPS et les cartes en ligne), {{ui:Le système de référence propre au fichier}}, ou l'un de ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 et CGCS2000. Le système cartographique et le système de référence propres au fichier sont toujours affichés aussi. Voir [Mesurer les distances, les aires des faces et les positions en 3D](topic:measure).

## Indicateur de coin

Ce qui se trouve dans le coin inférieur droit des vues 3D (un modèle IFC, et un dessin passé en 3D) : {{ui:ViewCube}} (la valeur de départ), {{ui:Icône des axes}} (un petit X, Y et Z) ou {{ui:Aucun}}. Le changement est immédiat. La vue 2D d'un dessin n'en affiche jamais.

Sur le ViewCube, cliquez sur une face, une arête ou un coin pour regarder depuis ce côté, faites glisser le cube pour faire pivoter la vue, faites glisser l'anneau pour la faire tourner sur place, et cliquez sur la maison pour revenir à la vue de départ.

## Votre nom sur les problèmes

Connecté, un problème porte le nom de votre compte, et BimCraft ne vous demande rien : cette partie affiche {{ui:Depuis votre compte (<name>)}}. {{ui:Utiliser un autre nom}} ouvre une zone pour saisir un autre nom, qui prévaut jusqu'à ce que vous choisissiez {{ui:Utiliser le nom de mon compte}}. Déconnecté, le formulaire de problème demande un nom comme auparavant. Voir [Problèmes et fichiers BCF](topic:issues-bcf).

## Assistants

**Laisser les assistants IA et les scripts utiliser BimCraft** (désactivé au départ) permet à un assistant de votre ordinateur d'atteindre le modèle ouvert, par CadCraft Studio : **Lire** trouve des éléments et lit leurs propriétés, **Changer la vue** isole, masque et affiche ces éléments. **Activité** liste leurs appels. Voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).

:::note
Les autres paramètres s'appliquent à l'ouverture d'un modèle ou au début d'un placement. Un modèle déjà ouvert garde son aspect actuel jusqu'à ce que vous utilisiez les boutons de la barre d'outils ou que vous le rouvriez.
:::

## Voir aussi

- [Copier, coller et dupliquer des éléments de bibliothèque](topic:copy-paste)
- [Placer des équipements et du mobilier depuis la bibliothèque](topic:place-from-library)
- [L'écran de BimCraft](topic:workspace)
- [Laisser un assistant IA travailler avec votre modèle](topic:assistants)
