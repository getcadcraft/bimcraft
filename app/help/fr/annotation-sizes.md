---
title: Dessiner à taille réelle, annoter selon l'échelle
summary: Le bâtiment est toujours dessiné à taille réelle. Textes, cotes, repères, noms de pièces, bulles de trame et symboles sont dimensionnés sur papier, en millimètres tels qu'imprimés, et gardent cette taille lorsque l'échelle d'un dessin passe de 1:100 à 1:50.
keywords: échelle d'annotation, annotatif, taille du texte, hauteur du texte, hauteur sur papier, taille du texte de cote, taille de repère, taille du nom de pièce, bulle de trame, taille de symbole, échelle du dessin, 1:50, 1:100, standard de bureau, lettrage, dessiner au 1:1, taille réelle, texte de feuille
from: 94118788
---

## Ce que vous allez faire

Réglez une fois, pour le bâtiment, la hauteur des lettres de vos dessins sur papier. Vous ne mettez jamais le modèle à l'échelle et vous ne redimensionnez jamais un texte pour une échelle : BimCraft calcule la taille à partir de la hauteur sur papier et de l'échelle du dessin.

## Fonctionnement

- Le modèle est à taille réelle. Un mur de 10 m de long fait 10 000 mm de long à toutes les échelles.
- Une annotation a une **hauteur sur papier** : la hauteur d'une lettre capitale sur la feuille imprimée, en millimètres.
- À l'échelle 1:100, un texte de 2.5 mm mesure 250 mm de haut dans le modèle ; à 1:50, il mesure 125 mm. Sur papier, il mesure 2.5 mm dans les deux cas.
- Les symboles de plan (électricité, plomberie) sont dessinés en millimètres sur papier et suivent la même règle.

## Étapes

1. Ouvrez le navigateur de projet. Sous {{ui:Feuilles}}, cliquez sur {{ui:Dimensions des annotations…}}.
2. Saisissez une hauteur en millimètres pour les types que vous voulez régler : {{ui:Notes et étiquettes}}, {{ui:Texte des cotes}}, {{ui:Repères et noms de niveau}}, {{ui:Noms de pièces}}, {{ui:Lettres des bulles de trame}}, {{ui:Titres des vues sur les feuilles}} et {{ui:Texte des nomenclatures}}. Une case vide conserve la taille propre à BimCraft, affichée en gris.
3. Cliquez sur {{ui:Enregistrer}}. C'est une seule étape, que vous pouvez annuler.

Chaque feuille, le jeu de dessins, le PDF du plan ainsi que les façades et coupes utilisent ces tailles à partir de là. L'écart entre une ligne de cote et son texte, la taille d'une bulle de trame et la hauteur d'une ligne de nomenclature grandissent avec leur texte.

## Un plan à sa propre échelle

Donnez une échelle au plan dans sa plage de vue ({{ui:Échelle}} ; voir [Vues et feuilles](topic:views-and-sheets)). Alors :

- à l'écran, les noms de pièces, les repères, le texte des cotes et les bulles de trame sont dessinés à leur taille imprimée par rapport au modèle, de sorte que ce que vous voyez est ce que la feuille montrera ;
- les symboles de plan et leurs repères sont dimensionnés pour cette échelle. Si vous passez de 1:100 à 1:50, ils sont deux fois plus petits dans le modèle et identiques sur papier.

Un plan sans échelle propre conserve son texte d'écran fixe, et ses symboles sont dimensionnés pour 1:50 (1/4" = 1'-0" en pieds et pouces), comme auparavant.

## Les dimensions de votre bureau

Avec le module Default Policies activé, réglez les hauteurs du bureau dans Paramètres › Global › Default Policies › {{ui:Dimensions des annotations sur papier}}. Un nouveau bâtiment les prend lorsque vous cliquez sur Créer. Dans un bâtiment déjà commencé, la boîte de dialogue propose {{ui:Utiliser les dimensions de mon bureau}}. Voir [Default Policies](topic:default-policies).

## Les dimensions d'un jeu de règles

Un jeu de règles peut fournir les hauteurs de texte exigées pour son emplacement (le module Building regulations, conventions de dessin). Cochez le jeu dans Paramètres › Building regulations, puis cliquez dans la boîte de dialogue sur {{ui:Utiliser les dimensions d'un jeu de règles}} : les cases se remplissent. Vérifiez-les et enregistrez. Une taille donnée en points par un jeu est une taille de police : elle est convertie en hauteur de capitale, vérifiez-la donc. Rien n'est défini avant l'enregistrement.

## Ce que vous devez voir

- La même hauteur de texte en millimètres sur une feuille au 1:100 et sur une feuille au 1:50, alors que le plan lui-même est deux fois plus grand au 1:50.
- Les tailles suivent le bâtiment : elles sont enregistrées dans son fichier IFC.

## Bon à savoir

- Les tailles propres à BimCraft sont celles que ses feuilles ont toujours utilisées (environ 1.5 mm de capitales pour le texte des cotes). Ce ne sont pas une norme de dessin : réglez celles de votre bureau.
- Une hauteur doit être comprise entre 0.5 et 50 mm.
- Le lettrage du cartouche et les légendes de repérage ne font pas partie de ceci : elles gardent leurs propres tailles.
