---
title: Enregistrer des vues et des pas à pas
summary: Gardez des points de vue du modèle en 3D sous un nom, revenez-y, lisez-les les uns après les autres, et enregistrez un parcours dans le bâtiment à rejouer.
keywords: vues, vues enregistrées, caméra, caméras, point de vue, scène, scènes, visite, présentation, pas à pas, parcours, survol, enregistrer, lire, trajectoire, animation
from: 3af19a36
---

{{ui:Vues}} sur la barre d'outils conserve des caméras de la vue 3D dans le fichier du modèle, pour que vous et ceux à qui vous l'envoyez puissiez revenir directement à elles.

## Enregistrer une vue

1. Réglez la vue 3D : tournez autour du modèle, zoomez, masquez ce que vous ne voulez pas voir.
2. Cliquez sur {{ui:Vues}}, saisissez un nom (ou gardez celui qui est proposé) et cliquez sur {{ui:Enregistrer la vue}} ou appuyez sur {{key:Enter}}.

Enregistrer avec un nom déjà présent dans la liste met cette vue à jour. Cliquez sur le nom d'une vue pour y revenir ; la caméra s'y déplace en douceur.

Les flèches changent l'ordre, le crayon renomme, la corbeille supprime. Chaque modification est une étape, donc {{key:Ctrl+Z}} l'annule.

## Lire les vues

{{ui:Lire les vues}} passe d'une vue à la suivante dans l'ordre de la liste, en s'arrêtant un instant sur chacune. {{key:Esc}} ou {{ui:Arrêter}} y met fin.

## Enregistrer un pas à pas

1. Activez [Marche](topic:walk) et commencez à marcher dans le bâtiment.
2. Dans {{ui:Vues}}, cliquez sur {{ui:Enregistrer un parcours}}.
3. Déplacez-vous avec {{key:W}} {{key:A}} {{key:S}} {{key:D}} et regardez autour de vous avec la souris.
4. Cliquez sur {{ui:Arrêter l'enregistrement}}. Le parcours est enregistré sous le nom « Parcours 1 », avec sa longueur.

Cliquez sur un parcours pour le rejouer tel que vous l'avez parcouru. {{key:Esc}} l'arrête.

## Rendre un pas à pas en vidéo

Cliquez sur l'icône de film à côté d'un parcours. La boîte de dialogue vidéo dessine chaque image du parcours avec les derniers réglages de rendu choisis, à la taille, à la cadence et à la qualité que vous indiquez ici. Enregistrez-la en vidéo WebM ou MP4, ou en ZIP avec une image par image. Chaque image prend autant de temps qu'une image de rendu ; commencez donc par {{ui:Rapide}}.

## Commenter un pas à pas

Cliquez sur l'icône de bulle à côté d'un parcours. Écrivez une ligne pour chaque chose dite, et commencez chaque ligne par l'heure où elle commence (`12`, `0:12` ou `1:02.5`) ; une ligne sans heure suit la ligne au-dessus, après le temps qu'il faut pour la dire. Choisissez la langue, celle du client si c'est lui qui regardera. {{ui:Aperçu}} lit les paroles avec la voix de cet ordinateur et les affiche en sous-titres ; la même chose se produit à chaque lecture du parcours. {{ui:Enregistrer avec le pas à pas}} conserve le commentaire dans l'IFC avec le parcours.

Votre propre assistant connecté peut rédiger le commentaire pour vous : demandez-lui de regarder le parcours et les vues enregistrées, et il écrit les lignes dans la langue que vous indiquez, en une seule étape d'annulation.

La vidéo rendue n'a pas de son propre, car un navigateur ne peut pas enregistrer sa propre voix. Enregistrez les sous-titres (`.srt` ou `.vtt`) et ajoutez-les à la vidéo dans votre lecteur ou éditeur vidéo. Les voix que vous pouvez choisir dépendent de l'ordinateur ; une langue sans voix installée obtient quand même les sous-titres.

## Dans le fichier

Les vues et les parcours sont conservés dans l'IFC sous forme du jeu de propriétés `CadCraft_Views` sur le projet : de l'IFC standard que les autres logiciels ignorent. Ils sont exprimés dans les coordonnées du premier modèle, donc ils restent justes après le rechargement du modèle ou l'ajout d'un autre.

:::tip
Pour faire le rendu d'une image à partir d'une vue enregistrée, rendez-vous sur la vue, puis cliquez sur [Rendu](topic:render).
:::
