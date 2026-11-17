---
title: Depuis d'autres logiciels BIM et de dessin
summary: Comment les habitudes du BIM de bureau et de la visualisation DWG correspondent à BimCraft, et les différences qui surprennent.
keywords: changer de logiciel, migrer, familier, BIM de bureau, famille, paramètres, navigateur de projet, palette des propriétés, ViewCube, xref, gestionnaire de calques, différences, comparer
from: 2de629af
---

Si vous connaissez Revit, la plupart des fonctions de BimCraft vous paraîtront familières dans le vocabulaire et inconnues dans la portée. La différence la plus importante : **cette version lit et inspecte les modèles et modifie les données IFC. Elle ne crée pas encore comme Revit.** Vous ne pouvez pas dessiner de murs, placer des familles, créer des vues ou des feuilles, ni enregistrer un fichier de projet. En revanche, vous pouvez ouvrir presque tout fichier de bâtiment sur n'importe quel ordinateur avec un navigateur, voir ce qu'il contient, vérifier un dossier de projet complet et corriger les données d'un modèle IFC.

## Correspondance des habitudes

| Si vous avez l'habitude de | Dans BimCraft |
|---|---|
| Ouvrir un `.rvt` dans Revit pour voir le modèle | BimCraft ouvre le `.rvt` sous forme de fiche de fichier : version, informations de projet, liens, aperçu. Pour le modèle 3D, exportez un IFC et ouvrez-le. [Lire un fichier de projet ou de famille](topic:read-rvt-file) |
| Vérifier dans quelle version un fichier a été enregistré avant de l'ouvrir | La fiche indique « enregistré dans Revit … » en haut, sans mettre à niveau ni modifier le fichier |
| Le navigateur de projet | Pas de navigateur de vues et de feuilles. Un modèle IFC a les listes {{ui:Niveaux}} et {{ui:Éléments}} ; un dessin a des onglets de feuille |
| La palette des propriétés | Le panneau {{ui:Propriétés}} à droite, pour l'élément sur lequel vous avez cliqué. Des ensembles de propriétés IFC à la place des groupes de paramètres |
| Paramètres d'occurrence et de type | Ensembles de propriétés d'occurrence, et ensembles marqués « (type) ». Une modification de type s'applique à chaque élément de ce type, comme dans Revit. [Modifier une propriété de type pour chaque élément d'un type](topic:type-vs-instance) |
| Modifier le type | Pas de boîte de dialogue : cliquez sur une valeur d'un ensemble « (type) » et saisissez-la |
| Sélectionner plusieurs éléments, filtres, Sélectionner toutes les occurrences | Un élément à la fois. Pas encore disponible |
| Le ViewCube et la roue de navigation | Un ViewCube dans le coin inférieur droit, quatre boutons ({{ui:Ajuster}}, {{ui:Dessus}}, {{ui:Avant}}, {{ui:Côté}}) et orbite libre. Pas de roue de navigation |
| Maj et glisser avec le bouton central pour orbiter, glisser avec le bouton central pour le panoramique | Glisser avec le bouton gauche fait orbiter, glisser avec le bouton droit (ou {{key:Shift}} et glisser) fait un panoramique, la molette fait un zoom. Le style de menu {{ui:Ruban BIM}} passe au panoramique par glisser avec le bouton central et à l'orbite par {{key:Shift}} avec le bouton central. [Menus, touches et souris](topic:menus-keys-and-mouse) |
| Plans d'étage, coupes, boîtes de coupe | Un plan de {{ui:Coupe}} à la fois ({{key:X}}) ; pas de boîte de coupe ni de plans 2D. [Couper un modèle IFC avec un plan de coupe](topic:section-plane) |
| Masquer dans la vue, isoler, visibilité et graphismes | {{ui:Niveaux}} activés et désactivés, {{ui:Espaces}} et {{ui:Arêtes}}. Pas encore de masquage élément par élément |
| Pièces | Espaces IFC, masqués au départ. Cliquez sur {{ui:Espaces}} |
| Enregistrer, Enregistrer sous, synchroniser avec le central | {{ui:Enregistrer au format IFC}} télécharge un nouveau fichier IFC. L'original ne change jamais. Pas de fichier central, pas de travail partagé |
| Annuler avec {{key:Mod+Z}} | Fonctionne sur les modifications IFC jusqu'à l'enregistrement. [Modifier les propriétés IFC et enregistrer une copie modifiée](topic:edit-ifc-properties) |
| Gérer les liens | Ouvrez le dossier du projet : chaque lien est vérifié et marqué **Dans ce dossier**, **Même nom trouvé**, **Fichier de bibliothèque** ou **Pas dans ce dossier**. [Ouvrir un dossier de projet complet](topic:open-project-folder) |
| Audit, ou ouverture d'un fichier pour voir s'il est corrompu | Le rapport de dossier vérifie en quelques secondes chaque copie et sauvegarde pour détecter les fichiers tronqués. [Vérifier un dossier pour détecter les copies endommagées](topic:check-folder-health) |
| Choisir le bon fichier dans un dossier désordonné | La zone {{ui:Commencer ici}} en suggère un, avec les raisons |

Si vous ouvrez surtout des modèles pour les vérifier, comme avec un logiciel de contrôle ou de visualisation IFC, choisissez le style de menu {{ui:Visionneuse}} : les outils de visualisation et de vérification passent en premier, et les outils de construction attendent dans un seul menu. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).

## Depuis la visualisation de fichiers DWG

Si vous ouvrez des DWG dans AutoCAD ou une visionneuse DWG :

| Si vous avez l'habitude de | Dans BimCraft |
|---|---|
| Onglets Objet et Présentation en bas | Onglets au-dessus du dessin : {{ui:Modèle}} et un par feuille |
| ZOOM Extents, double-clic sur la molette | Double-clic, {{key:F}} ou {{ui:Ajuster}} |
| Panoramique avec le bouton central | Glisser avec n'importe quel bouton |
| Le gestionnaire de calques | La liste {{ui:Calques}} : cochez pour afficher, décochez pour masquer, {{ui:Tout activer}} et {{ui:Tout désactiver}} |
| Le gestionnaire de références externes | **Dessins liés** à droite, avec **Affiché** ou **Introuvable**, et {{ui:Ajouter des dessins liés…}} |
| Aperçu du traçage | {{ui:Vue d'impression}} ou {{key:P}} : noir sur blanc avec les épaisseurs de ligne. Cela n'imprime pas |
| Extraction des données des attributs de bloc | L'onglet {{ui:Équipements}} pour les dessins de restauration repérés, avec {{ui:Télécharger le CSV}} |
| Mesurer, dessiner, modifier, enregistrer sous | Pas dans BimCraft. L'application de dessin CadCraft dessine et modifie |

## Différences qui surprennent

- **Il fonctionne dans le navigateur, qui manipule vos fichiers avec précaution.** BimCraft ne peut lire que les fichiers et dossiers que vous lui confiez, en les choisissant ou en les glissant. Il ne peut pas ouvrir un fichier de lui-même, ni l'écraser. Chaque enregistrement est un téléchargement.
- **Rien n'est envoyé.** Le mot « téléverser » dans certaines boîtes de dialogue de dossier des navigateurs est le vocabulaire du navigateur. Les fichiers restent sur votre ordinateur.
- **IFC est le format de modèle.** Un fichier de projet s'ouvre sous forme de fiche parce que son contenu 3D n'est pas documenté. Considérez l'IFC comme le moyen par lequel les modèles entrent dans BimCraft.
- **Les modifications sont faites par copie.** Modifier la valeur d'un élément ne change jamais celle de ses voisins, même lorsque l'exportateur a partagé cette valeur entre eux. Les propriétés de type font exception, volontairement.
- **Pas de projet, pas de vues.** BimCraft affiche un fichier à la fois et ne garde aucun souvenir de celui-ci après la fermeture de l'onglet, sauf les noms des dossiers récents dans Chrome et Edge.
- **Touches Mac.** Là où les raccourcis Windows de Revit utilisent Ctrl, ceux de BimCraft utilisent {{key:Mod}} : Cmd sur un Mac.
- **Vos habitudes de souris.** L'orbite se fait avec le bouton gauche, et non avec Maj et le bouton central, sauf si vous choisissez le style de menu {{ui:Ruban BIM}} ou si vous réglez vous-même les boutons dans [Menus, touches et souris](topic:menus-keys-and-mouse).

Voir [Ce qui n'est pas encore disponible](topic:not-built-yet) pour savoir quoi utiliser à la place aujourd'hui.
