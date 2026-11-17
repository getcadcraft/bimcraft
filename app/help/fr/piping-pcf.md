---
title: Envoyer une tuyauterie à un logiciel de calcul de contraintes ou d'isométries, et la relire (PCF)
summary: Écrivez les tronçons de tuyauterie du modèle dans un fichier de composants de tuyauterie PCF, ou lisez un fichier PCF issu d'un logiciel de calcul de contraintes ou d'isométries, et dessinez sa tuyauterie sous forme de tronçons.
keywords: pcf, fichier de composants de tuyauterie, calcul de contraintes, isométrie, isométries, export, import, tuyauterie, installation, tuyau acier, déplacer un projet, autre logiciel
from: 24f91355
---

## Ce que vous allez faire

Le PCF est le fichier texte que lisent et écrivent les logiciels de calcul de contraintes et d'isométries. Il liste les composants de chaque canalisation avec leurs points d'extrémité et leurs diamètres nominaux.

## Exporter

1. Choisissez l'outil Tuyau. La barre des options affiche **Exporter PCF**.
2. Cliquez dessus. Chaque tronçon de tuyauterie du modèle est écrit : tuyau droit, coudes (une déviation de 90 degrés, sinon un cintre), tés avec leur point de piquage, réductions et vannes.
3. Le fichier utilise des millimètres. Les diamètres sont des diamètres nominaux en millimètres. Le point central d'un coude est son sommet, là où ses deux branches se rejoignent.

Le PCF est écrit pour la tuyauterie acier à souder bout à bout. Un tronçon d'un autre matériau est écrit aussi, avec des clés de composants en acier, et signalé dans le panneau « Problèmes ».

## Importer

1. Choisissez l'outil Tuyau et cliquez sur **Importer PCF…**, puis choisissez le fichier.
2. Du tuyau droit jusqu'aux coudes, cintres, vannes et brides, tout devient un seul tronçon au niveau courant. Un changement de dimension commence un nouveau tronçon. La dérivation d'un té devient son propre tronçon, commençant au centre du té.
3. Le modèle pose ses propres raccords. Les réductions et tés ne sont pas copiés : ils apparaissent là où des tronçons de dimensions différentes, ou une dérivation, se rejoignent.

:::note
Les hauteurs du fichier sont lues comme hauteurs au-dessus du niveau courant. Les charges, les appuis et l'analyse de contraintes elle-même ne figurent pas dans un fichier PCF et ne sont pas importés.
:::

## Vérifier ce qui a été importé

- La longueur totale de tuyau par canalisation doit correspondre à celle de la source.
- Le panneau « Problèmes » liste, une fois chacun, un coude dont le point central n'est pas à la même distance des deux extrémités, un tuyau sans longueur, et un diamètre qui n'est pas une dimension normalisée.

## Tuyauterie déjà présente dans un fichier IFC

Lorsqu'un fichier IFC est ouvert, **Exporter PCF** écrit aussi ses propres segments de tuyau, raccords et vannes, à côté des tronçons que vous avez dessinés. Un segment prend ses extrémités depuis ses ports, ou depuis les extrémités de son corps. Un raccord sans port est omis et le panneau « Problèmes » le signale. Vous pouvez exporter depuis l'IFC seul lorsque le modèle n'a pas de tronçon dessiné.

À l'import, les supports, piquages, brides, joints et bouchons du fichier ne sont pas dessinés. Le panneau « Problèmes » indique combien de chacun ont été laissés de côté, afin que rien ne disparaisse en silence.
