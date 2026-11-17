---
title: Calquer un niveau, définir des plumes par vue, esquisser un escalier, ouvrir un OBJ
summary: Afficher un autre niveau en pointillés sous le plan et l'aligner, donner aux murs, portes et fenêtres leur propre plume dans une vue, tracer une ligne de marche pour obtenir un escalier, et ouvrir un maillage Wavefront OBJ.
keywords: référence de calque, fantôme, sous-couche, plume, épaisseur de ligne, type de ligne, substitution, escalier, esquisse, palier, OBJ, maillage, importation, Wavefront
from: 333ebbde
---

## Calquer un niveau

Choisissez {{ui:Trace}} dans le menu {{ui:Build}}, puis une vue dans la liste : le plan d'un autre niveau, le plan de plafond d'un niveau ou une légende (coupée à son cadre). Ses murs, poteaux et planchers apparaissent en pointillés sous le plan que vous dessinez. Déplacez-le en cliquant un point de base sur la référence, puis l'endroit où ce point doit aller, ou saisissez X, Y et un angle (il pivote autour de son propre centre). {{ui:Reset}} le remet en place, {{ui:Hide}} le retire. Il ne s'agit que d'une référence : rien ne peut le sélectionner, il n'est ni imprimé ni enregistré dans l'IFC. BimCraft le mémorise pour chaque niveau dans ce navigateur.

## Plumes par vue

Choisissez {{ui:Pens}}. Indiquez à quoi sert la plume : tous les murs, toutes les portes, toutes les fenêtres, le type de l'élément sélectionné, ou les éléments sélectionnés. Choisissez une épaisseur, un trait (plein, tireté, pointillé) et une couleur, puis {{ui:Apply}}. La modification ne vaut que pour le plan de ce niveau. Une sélection l'emporte sur un type, et un type l'emporte sur une catégorie entière. {{ui:Clear all}} les supprime. Elles sont conservées dans ce navigateur. Cochez **Couleurs des plumes en 3D** pour peindre les plumes colorées sur le modèle dans la vue 3D (une épaisseur ou un tiret est propre à un trait, donc seule la couleur apparaît là) ; décochez-la pour revenir en arrière. {{ui:Print}} les dessine sur le PDF du plan : l'épaisseur s'adapte à l'écran (la plume par défaut des murs, de 1.75 pixels, vaut 0.5 mm), les tirets restent des tirets, et une couleur s'imprime avec sa valeur du thème Papier.

## Un escalier à partir d'une esquisse

Choisissez {{ui:Sketch stair}} et cliquez les angles de la ligne de marche, en commençant par la marche du bas. Une ligne donne un escalier droit, deux lignes qui se rejoignent à angle droit donnent un escalier en L, et trois lignes (montée, traversée, retour) donnent un escalier en U. Appuyez sur {{key:L}} pour dessiner un palier : cliquez ses angles puis appuyez sur {{key:Enter}}, et son petit côté fixe la largeur de l'escalier. Appuyez sur {{key:Enter}} pour placer l'escalier. Chaque marche est calculée à partir de la longueur de votre ligne et du nombre de contremarches que la hauteur exige. Ensuite, c'est un escalier ordinaire : modifiez-le dans Propriétés, et la cage d'escalier et les mains courantes suivent.

Cochez **En faire une famille** dans la rangée de l'outil (ou appuyez sur {{key:F}}) avant {{key:Enter}} pour placer l'escalier comme famille (escalier droit, en L ou en U). Il entre comme un seul élément et s'ouvre dans l'éditeur de famille avec sa largeur, sa marche, sa hauteur totale, les marches de chaque volée et l'écart d'un U comme paramètres, afin que vous puissiez ajouter des dimensions, un symbole de plan ou des zones cliquables. Les marches et la hauteur des contremarches en découlent. Il n'a ni mains courantes ni cage d'escalier : celles-ci appartiennent à un escalier ordinaire.

## Ouvrir un OBJ

Ouvrez un fichier `.obj` comme n'importe quel autre fichier. Un OBJ n'a pas d'unités : BimCraft lit donc des mètres avec Y vers le haut, comme la plupart des programmes l'écrivent. Chaque objet ou groupe devient un élément de maillage sur un seul niveau ; vous pouvez alors le visualiser, le mesurer, le couper en coupe, le placer dans un modèle et l'enregistrer en IFC. Les lignes, courbes et surfaces sont laissées de côté, et la ligne d'état l'indique.

Un objet qui est exactement un prisme droit (un maillage fermé avec deux faces d'extrémité parallèles et identiques, et des côtés plats perpendiculaires à celles-ci : une dalle, un poteau, un bloc de mur, une platine percée) est enregistré dans l'IFC comme solide extrudé propre à IFC, avec son contour et sa profondeur, et non comme une liste de triangles. D'autres programmes le lisent comme un vrai solide, il reste léger, et sa profondeur et son contour peuvent être modifiés ensuite. La ligne d'état indique combien d'objets ont été conservés de cette manière. Tout ce qui n'est pas exactement un prisme (une forme effilée, un maillage dont un sommet a été déplacé, un maillage avec un trou) reste en triangles. Un fichier STEP est traité de la même façon.
