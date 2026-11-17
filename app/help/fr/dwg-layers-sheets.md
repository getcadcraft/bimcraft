---
title: Travailler avec les calques et les feuilles
summary: Activez et désactivez les calques d'un dessin, passez de l'espace objet aux feuilles, et comprenez comment les feuilles montrent le modèle à travers leurs fenêtres de présentation.
keywords: calques, activer calque, désactiver calque, geler, dégeler, feuilles, présentations, espace papier, onglets, fenêtres de présentation, gestionnaire de calques, la
from: a9a16b53
---

## Ce que vous allez faire

Nettoyez l'affichage d'un dessin chargé en désactivant des calques, puis parcourez les feuilles du dessin une par une.

## Étapes : calques

1. Ouvrez un dessin DWG ou DXF.
2. Repérez la liste {{ui:Calques}} à gauche. Chaque calque a une case à cocher, un échantillon de couleur et son nom.
3. Décochez un calque pour masquer tout ce qu'il contient.
4. Cliquez sur {{ui:Tout désactiver}} pour masquer tous les calques.
5. Cochez uniquement les calques que vous voulez voir.
6. Cliquez sur {{ui:Tout activer}} pour tout afficher à nouveau.

## Ce que vous devez voir

Les calques disparaissent et réapparaissent d'un coup, sur {{ui:Modèle}} et sur chaque feuille. Les calques désactivés ou gelés dans le dessin lui-même démarrent décochés.

## Étapes : feuilles

1. Repérez la rangée d'onglets au-dessus du dessin : {{ui:Modèle}}, puis chaque feuille par son nom.
2. Cliquez sur un onglet de feuille.
3. Regardez la feuille : la page repose sur un bureau plus sombre, et chaque fenêtre de présentation affiche sa partie du modèle à sa propre échelle et selon son propre angle.
4. Faites un zoom dans une fenêtre de présentation pour lire le détail. Vous zoomez la feuille, et non la fenêtre, si bien que toute la feuille bouge ensemble.
5. Cliquez sur {{ui:Ajuster}} ou faites un double-clic pour revoir la feuille entière.

## Comment fonctionnent les feuilles ici

Une feuille (une présentation, ou espace papier) contient un cartouche et des fenêtres de présentation qui donnent sur l'espace objet. BimCraft dessine chaque fenêtre de présentation découpée à son bord, à sa propre échelle et selon sa propre rotation, et masque les calques gelés dans cette fenêtre. La première fenêtre de présentation de chaque feuille est la feuille elle-même et n'est pas dessinée deux fois.

## Erreurs fréquentes

- **Croire que les modifications de calques sont enregistrées.** Les réglages de calques n'affectent que la vue, jusqu'à l'ouverture d'un autre fichier.
- **Chercher un contrôle des calques par fenêtre de présentation.** La liste {{ui:Calques}} bascule un calque partout. Les calques gelés dans une fenêtre par le dessin restent gelés là.
- **Chercher une recherche de calques ou des états de calques.** Pas encore disponible. La liste suit l'ordre du dessin.
- **Vouloir travailler à l'intérieur d'une fenêtre de présentation.** Il n'y a rien à activer : BimCraft ne fait qu'afficher la feuille. Utilisez {{ui:Modèle}} pour voir directement l'espace objet.
