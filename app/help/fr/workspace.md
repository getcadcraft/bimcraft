---
title: L'écran de BimCraft
summary: Un tour de chaque barre, panneau et bouton, par son nom à l'écran, et comment l'écran change selon le type de fichier.
keywords: écran, disposition, panneaux, barre d'outils, interface, ui, visite, panneau des propriétés, navigateur, barre de l'application
from: 2eb01ec2
---

L'écran de BimCraft comporte une barre en haut et trois zones en dessous : un panneau à gauche, la scène au milieu et le panneau {{ui:Propriétés}} à droite. Ce qui apparaît dans chaque zone dépend de ce que vous avez ouvert : un modèle IFC, un fichier de projet ou de famille, un dessin ou un dossier.

## La barre de l'application

La barre fine en haut appartient au site CadCraft, pas à BimCraft lui-même. De gauche à droite :

- Le logo CadCraft : mène à la page d'accueil de CadCraft.
- Le nom de l'application et un menu de versions. Dans la build du personnel, il indique quelle build vous exécutez et permet de passer à une version publiée.
- {{ui:À propos de BimCraft}} : la page de l'application sur le site.
- {{ui:Paramètres}} : les paramètres propres à BimCraft et ceux que toutes les applications partagent. Consultez [Paramètres de BimCraft](topic:settings).
- {{ui:Plein écran}} : fait défiler les modes d'écran. Consultez [Modes d'écran](topic:workspace#screen-modes) plus bas.
- {{ui:Papier}} et {{ui:Objet}} : les thèmes clair et sombre. La vue 3D et les dessins 2D suivent le thème que vous choisissez.

## Le panneau de gauche

Le panneau de gauche commence toujours par **Ouvrir un fichier ou un dossier** :

- La zone de dépôt, {{ui:Choisissez un fichier, ou déposez ici un fichier ou un dossier}}. Cliquez dessus pour choisir un fichier, ou déposez-y un fichier ou un dossier (ou n'importe où sur la page).
- {{ui:Ouvrir un dossier}} : choisissez un dossier de projet entier. Consultez [Ouvrir un dossier de projet entier](topic:open-project-folder).
- {{ui:Dossiers récents}} : apparaît dans Chrome et Edge après l'ouverture d'un dossier avec le sélecteur de dossier ou par dépôt. Cliquez sur {{ui:Rouvrir}} et le nom du dossier pour le rouvrir, ou sur le petit × pour l'oublier.

En dessous, des sections apparaissent selon le contexte :

| Section | Quand elle apparaît | Ce qu'elle contient |
|---|---|---|
| {{ui:Modifications}} | Un modèle IFC est ouvert | Vos modifications non enregistrées, les plus récentes en premier, avec {{ui:Annuler}} et {{ui:Enregistrer au format IFC}} |
| {{ui:Fichier}} | Un modèle ou une fiche de fichier est ouvert | Des informations sur le fichier : taille, schéma ou version, projet, auteur, nombre d'éléments |
| {{ui:Dessin}} | Un DWG ou un DXF est ouvert | Format, unités, nombre d'entités et de calques, feuilles, dessins liés, équipements |
| {{ui:Dossier}} | Un dossier est ouvert | Nombre de fichiers et de modèles, taille, problèmes trouvés |
| {{ui:Retour au dossier}} | Vous avez ouvert un fichier depuis un dossier | Revient au rapport du dossier |
| {{ui:Calques}} | Un dessin est ouvert | Une case à cocher par calque, avec {{ui:Tout activer}} et {{ui:Tout désactiver}} |
| {{ui:Niveaux}} | Un modèle IFC est ouvert | Une case à cocher par niveau, le niveau supérieur en premier |
| {{ui:Éléments}} | Un modèle IFC est ouvert | Le nombre d'éléments de chaque type dans le modèle (les 30 plus courants) |

## La scène

Le milieu de l'écran montre le fichier ouvert.

- **Vide** : « Ouvrez un modèle de bâtiment. » avec {{ui:Choisir un fichier}} et {{ui:Ouvrir un dossier}}, et une courte description de chaque format.
- **Modèle IFC** : la vue 3D avec une barre d'outils en haut, en groupes nommés comme ceux de l'application de dessin CadCraft, l'icône de chaque outil au-dessus de son nom : {{ui:Vue}} ({{ui:Ajuster}}, {{ui:Dessus}}, {{ui:Face}}, {{ui:Côté}}, {{ui:Arêtes}}, {{ui:Espaces}}) ; {{ui:Édition}} ({{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}} et {{ui:Plus}}, consultez [Copier, coller et dupliquer des éléments de bibliothèque](topic:copy-paste)) ; {{ui:Modèle}} ({{ui:Unités}} et {{ui:Dessiner}}) ; {{ui:Bibliothèque}} ({{ui:Bibliothèque}}, {{ui:Équipements}}, {{ui:Mises à jour}}, {{ui:Crédits}}) ; {{ui:Revue}} ({{ui:Afficher}}, {{ui:Coupe}}, {{ui:Marche}}, {{ui:Mesurer}} ; consultez [Couper un modèle IFC avec un plan de coupe](topic:section-plane)) ; et {{ui:Sortie}} (rendu, vue en direct, VR, exports, peinture et vues enregistrées). Quand {{ui:Dessiner}} est activé, la barre Dessin qui se trouve dessous a le même aspect : {{ui:Vue}} (le niveau et le type de plan), {{ui:Dessin}}, {{ui:Édition}} et {{ui:Bibliothèque}}. Un ViewCube se trouve dans le coin inférieur droit. Consultez [Ouvrir un modèle IFC et regarder autour de soi en 3D](topic:open-ifc-model). Dans {{ui:Paramètres}}, {{ui:Général}} permet de choisir des icônes, des libellés ou les deux sur ces boutons, d'afficher ou de masquer les noms de groupes, et un clic droit sur la barre d'outils permet d'organiser ses outils et ses groupes. Dans une fenêtre peu haute, la barre d'outils retire les noms sous ses icônes.
- **Fichier de projet ou de famille** : la fiche de fichier, avec l'image d'aperçu, les informations du projet et les fichiers liés. Consultez [Lire un fichier de projet ou de famille](topic:read-rvt-file).
- **DWG ou DXF** : une rangée d'onglets ({{ui:Modèle}}, puis un par feuille, puis {{ui:Équipements}} quand le dessin contient des équipements étiquetés, {{ui:3D}}, {{ui:Ajuster}} et {{ui:Vue d'impression}}), le dessin, et les coordonnées X et Y en direct dans un coin. Consultez [Afficher un dessin DWG ou DXF](topic:view-dwg) et [Voir un dessin DWG ou DXF en 3D](topic:dwg-in-3d).
- **Dossier** : le rapport du dossier, avec le bloc {{ui:Commencer ici}} et des tableaux de modèles, de liens, de modèles IFC et de dessins. Consultez [Ouvrir un dossier de projet entier](topic:open-project-folder).

La **ligne d'état** en bas de la scène vous indique ce que fait BimCraft (« Lecture du modèle… », « Construction de la géométrie : 1200 éléments sur 5400 ») et ce qui a échoué, en rouge, quand quelque chose se passe mal. Les messages de réussite disparaissent au bout de quelques secondes.

## Le panneau Propriétés

Le panneau de droite affiche :

- Pour un modèle IFC : l'élément sur lequel vous avez cliqué, avec son nom, son type, son repère, son GlobalId et chaque ensemble de propriétés. Les valeurs que vous pouvez modifier ressemblent à des boutons. Consultez [Champs du panneau Propriétés](topic:properties-panel).
- Pour un dessin : comment se déplacer, les dessins et images liés du dessin et si chacun a été trouvé, et la liste de ce qui n'est **Pas encore dessiné**.
- Pour une fiche de fichier ou un dossier : une courte remarque sur ce qu'il faut ouvrir ensuite.

## Sur un petit écran

Quand la fenêtre est plus étroite qu'un écran d'ordinateur portable, BimCraft empile ses zones : la scène en haut, puis les panneaux en dessous. Faites défiler la page pour atteindre les panneaux. Sur un téléphone, ils forment une seule colonne ; sur une tablette, deux.

## Modes d'écran

Le bouton {{ui:Plein écran}} de la barre de l'application, ou {{key:Ctrl+Shift+F}} sur toutes les plateformes, fait défiler trois modes :

1. Normal.
2. Plein écran, avec les barres toujours visibles.
3. Plein écran avec la barre de l'application masquée. Déplacez le pointeur vers le bord supérieur, ou touchez-le, pour la faire revenir.

Appuyez sur {{key:Esc}} pour revenir au mode normal. Les navigateurs sans prise en charge du plein écran (comme sur un iPhone) ne basculent qu'entre normal et barres masquées.

## Voir aussi

- [Touches et souris](topic:keyboard)
- [Les fichiers que BimCraft ouvre et enregistre](topic:files)
