---
title: Vérifier un dessin en vue d'impression
summary: Passez un DWG ou DXF en vue d'impression pour le voir en noir sur blanc avec ses épaisseurs de trait, et sans les calques qui ne s'impriment jamais.
keywords: impression, tracer, aperçu, aperçu du tracé, épaisseurs de trait, épaisseur de ligne, monochrome, noir et blanc, defpoints, sans tracé
from: 1a59c23e
---

## Ce que vous allez faire

Voir comment une feuille rendra sur papier avant de l'imprimer depuis le programme qui l'a créée : noir sur blanc, épaisseurs de trait à leur largeur réelle, et sans les calques réglés pour ne pas s'imprimer.

## Étapes

1. Ouvrez un dessin DWG ou DXF.
2. Cliquez sur un onglet de feuille au-dessus du dessin.
3. Cliquez sur {{ui:Vue d'impression}} à la fin des onglets, ou appuyez sur {{key:P}}.
4. Zoomez sur un détail pour comparer les traits forts et les traits fins.
5. Cliquez de nouveau sur {{ui:Vue d'impression}}, ou appuyez sur {{key:P}}, pour revenir aux couleurs normales.

## Ce que vous devez voir

- Papier blanc sur un bureau gris, chaque trait et chaque texte en noir, quel que soit le thème.
- Épaisseurs de trait : sur une feuille, chaque épaisseur est dessinée à sa largeur réelle sur papier ; un trait de 0.5 mm est donc deux fois plus épais qu'un trait de 0.25 mm, à tout zoom. Un trait n'est jamais dessiné plus fin que son épaisseur à l'écran.
- Les calques réglés pour ne pas s'imprimer, ainsi que le calque DEFPOINTS, sont masqués.
- Le bouton {{ui:Vue d'impression}} reste enfoncé. La vue d'impression reste active quand vous changez de feuille ou ouvrez un autre dessin, jusqu'à ce que vous la désactiviez.

Dans {{ui:Modèle}}, la vue d'impression n'utilise que les épaisseurs d'écran (traits fins d'un pixel, traits plus épais un peu plus larges), car l'espace objet n'a pas de format de papier.

## Erreurs courantes

- **Croire qu'elle imprime.** La vue d'impression est un aperçu. L'impression et l'export PDF ne sont pas encore intégrés à BimCraft ; imprimez depuis le programme qui a créé le dessin.
- **S'attendre à des styles de tracé.** Les tables de plumes et les couleurs de styles de tracé ne sont pas lues. Tout est en noir uni.
- **Appuyer sur P pendant la saisie.** {{key:F}} et {{key:P}} ne font rien pendant que vous saisissez dans un champ, ou lorsque le tableau des équipements est affiché.
