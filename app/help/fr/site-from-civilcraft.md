---
title: Bâtiments voisins et parcelle depuis CivilCraft
summary: Reprenez en suggestions les bâtiments et la parcelle que la fonction « Adresse vers site » de CivilCraft a trouvés autour d'une adresse, puis ajoutez ceux que vous cochez.
keywords: site, adresse, parcelle, voisins, contexte, civilcraft, ccsite, bâtiments, contour du site, suggérer
from: 3be9407b
---

## Ce que cela fait

Dans CivilCraft, Surface › Plus › Adresse vers site trouve les bâtiments, la parcelle, le zonage, la zone inondable et le sol autour d'une adresse, à partir de données ouvertes. Son bouton « Envoyer à BimCraft en suggestions » (ou « Enregistrer le site dans un fichier », puis ouvrir ici le `.ccsite.json`) les transmet à BimCraft. Rien n'est ajouté tant que vous ne le demandez pas.

## Utilisation

1. Démarrez ou ouvrez un modèle. Le point d'adresse se trouve à l'origine du niveau où vous êtes.
2. Une boîte liste chaque bâtiment voisin et la parcelle, avec une case à cocher. Décochez ce que vous ne voulez pas.
3. Les bâtiments dont la source n'a pas donné la hauteur utilisent la hauteur saisie en haut de la boîte. Un bâtiment qui n'a fourni que son nombre de niveaux compte 3 m par niveau, et la boîte l'indique.
4. Appuyez sur « Ajouter les éléments cochés ». Les bâtiments deviennent des murs autour de leur emprise, aussi hauts que indiqué, en une seule étape d'annulation. La parcelle devient le contour du site, en une seconde étape d'annulation.

Le zonage, la zone inondable et le sol sont listés à titre d'information uniquement ; ils ne sont pas dessinés.

## Points à connaître

- Les contours valent ce que valent les données ouvertes : OpenStreetMap et les couches parcellaires locales diffèrent beaucoup d'un endroit à l'autre. Vérifiez ce qui compte par rapport à un levé.
- Les positions sont données en mètres à l'est et au nord du point d'adresse, sur une approximation plane, précise à quelques mètres près dans un rayon de quelques kilomètres.
- Les données portent les licences de leurs sources (OpenStreetMap est sous ODbL) ; la boîte affiche la mention d'attribution.
