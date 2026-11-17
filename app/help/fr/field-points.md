---
title: Points d'implantation et contrôles de récolement
summary: Numérotez les emplacements à implanter sur le chantier à partir du modèle — axes de poteaux, extrémités de murs, tiges d'ancrage, fourreaux, tout élément que vous sélectionnez — écrivez-les pour une station totale, puis relevez les points récolés par l'équipe et voyez ce qui est hors tolérance.
keywords: points d'implantation, implantation, implanter, piquetage, station totale, levé, fichier de points, csv, txt, pnezd, penzd, xyz, nord, est, altitude, récolement, récolé, contrôle, tolérance, écart, tiges d'ancrage, axes de poteaux, extrémités de murs, fourreaux, coordonnées topographiques, conversion cartographique
from: acea9606
---

L'onglet {{ui:Points}}, à droite, crée les points qu'une équipe implante sur le chantier à partir du modèle ouvert, et contrôle les points qu'elle mesure ensuite.

## Créer les points

1. Ouvrez un modèle IFC et l'onglet {{ui:Points}}.
2. Cochez ce qu'il faut implanter : **centres des poteaux** (le pied de l'axe de chaque poteau), **extrémités de murs** (les deux extrémités de l'axe de chaque mur, à sa base), **tiges d'ancrage**, **fourreaux** (éléments dont le nom ou le type indique fourreau), et les **éléments sélectionnés** (chacun à son point de pose — sélectionnez-les d'abord dans la vue).
3. Choisissez le premier numéro et un préfixe, les coordonnées, les unités, les colonnes et le fichier :
   - **Modèle** : les coordonnées propres au fichier. **Grille topographique** : la grille cartographique du géoréférencement du modèle (affichée seulement lorsque l'IFC contient une conversion cartographique), en mètres ou dans l'unité choisie.
   - Colonnes **PNEZD** (point, nord, est, altitude, description), **PENZD** ou **XYZ** ; **CSV** (virgules) ou **TXT** (tabulations).
4. Cliquez sur {{ui:Make points}} : la liste les affiche et la vue les marque en bleu. {{ui:Download the points}} écrit le fichier.

Les points suivent un ordre fixe — par type, puis en rangées sur le plan — de sorte que les refaire à partir du même modèle donne les mêmes nombres. Le fichier est celui que CivilCraft ouvre et que EXPORTPOINTS de CadCraft écrit : un point par ligne, trois décimales, une description entre guillemets lorsqu'elle contient une virgule.

## Contrôler les points récolés

Lorsque l'équipe renvoie ce qu'elle a mesuré, choisissez une **tolérance** en millimètres et la manière d'associer les points — par **numéro de point** (elle a conservé vos numéros) ou par **visée la plus proche** — puis cliquez sur {{ui:Read as-built points…}}. Lisez le fichier dans les mêmes unités et coordonnées que celles que vous avez écrites.

Chaque point de conception est alors **dans** la tolérance, **hors** tolérance, **non mesuré**, et toute visée que personne n'avait demandée est **en trop**. Le tableau donne les écarts dans l'unité choisie dans la barre d'outils, les pieds étant affichés en pouces décimaux (récolé moins projeté : est, nord, altitude, et distance en plan) ; la vue marque chaque point en vert ou en rouge avec une ligne vers la visée, et en gris lorsqu'il n'a pas été mesuré. {{ui:Report (CSV)}} écrit l'ensemble de la comparaison.

Rien ici ne modifie le modèle. Pas encore disponible : l'implantation à partir des bords de dalle, des intersections de trame ou des ouvertures créées automatiquement, et l'envoi des points directement à un instrument — utilisez le fichier.
