---
title: Options de volumétrie conservées côte à côte
summary: Conserver plusieurs options de volumétrie dans le même modèle, en faire l'option courante, la vérifier par rapport aux alignements et servitudes du site, intégrer des volumétries depuis ModelCraft et développer l'option retenue en murs et dalles.
keywords: volumétrie, masse, option, options, ensemble d'options, schéma, concept, conception de concept, étape 2, alternatives, comparer les options, option courante, masse du bâtiment, pousser tirer, modelcraft, civilcraft, surface de plancher brute, emprise, volume, développer la masse, servitude, alignement de construction, retrait
from: 69a01459
---

## Ce que vous allez faire

Conservez les options de volumétrie d'un concept dans un seul modèle plutôt que dans des fichiers séparés : plusieurs volumes de bâtiment côte à côte, dont l'un est l'**option courante**, les autres étant gardés pour comparaison.

Une option de volumétrie est un volume de bâtiment : un contour élevé à une hauteur, avec un nombre d'étages. Ce ne sont pas encore des murs. Vous pouvez en conserver autant que vous voulez, regroupées en **ensembles d'options** (les options d'un même ensemble sont des alternatives entre elles).

## Conserver une option

1. Ouvrez {{ui:Programme de pièces vers volumétrie}}, saisissez le programme des pièces et le contour, puis choisissez {{ui:Chercher des options}}.
2. Sélectionnez l'une des options proposées.
3. Sous {{ui:Options de volumétrie dans le modèle}}, saisissez un nom pour l'{{ui:Ensemble d'options}} si vous le souhaitez, puis choisissez {{ui:Garder l'option sélectionnée}}.

L'option apparaît dans le modèle comme volume de bâtiment et dans la liste, avec ses étages, son emprise, sa surface de plancher brute et son volume. Rien n'est construit. Conservez-en une autre de la même façon.

La première option d'un ensemble devient son option courante. Chaque étape constitue une seule étape d'annulation.

## L'option courante

Une option de chaque ensemble est l'option courante. Cela signifie deux choses :

- **Ses étages comptent dans les surfaces de plancher du bâtiment.** L'option courante comporte un espace par étage, portant la surface brute de cet étage ; ainsi, tout ce qui lit les surfaces de plancher voit l'option en vigueur et aucune autre.
- **Elle est vérifiée par rapport au site.** Si elle se trouve hors de la limite du site, qu'elle dépasse un alignement de construction ou qu'elle empiète sur une servitude, un avertissement la désignant apparaît dans {{ui:Problèmes}}. C'est un simple avertissement : rien n'est refusé. Les options qui ne sont pas courantes ne sont pas vérifiées.

Choisissez {{ui:Rendre courante}} sur une autre option pour la changer.

{{ui:Masquer les options qui ne sont pas courantes}} masque les autres dans la vue 3D. Ce réglage ne vaut que pour ce navigateur et n'est pas enregistré dans le fichier.

## Volumétrie depuis ModelCraft

Dans ModelCraft, {{ui:Exporter}} › {{ui:Volumétrie vers BimCraft…}} envoie chaque groupe ou composant comme une option. BimCraft ouvre le fichier avec les options répertoriées.

Pour les intégrer dans un modèle déjà ouvert, choisissez {{ui:Ajouter des options de volumétrie depuis un fichier}} et sélectionnez le fichier `.ifc`. Ses volumes entrent comme options d'un ensemble, en une seule étape d'annulation, à l'endroit où ils ont été modélisés. Un fichier de volumes de bâtiment issu de CivilCraft fonctionne de la même façon.

Une option marquée « (forme simplifiée) » n'était pas un simple bloc droit dans ModelCraft (elle recule par gradins, est en pente ou n'est pas fermée). Son volume, ici, est le contour de sa base élevé à sa hauteur ; ses surfaces de plancher et son volume sont ceux mesurés sur le solide lui-même.

## Développer l'option retenue

Choisissez {{ui:Développer}} sur une option. Elle devient des niveaux (ajoutés jusqu'à son nombre d'étages), des murs le long de son contour à chaque étage et une dalle de plancher sur chacun, en une seule étape d'annulation. L'option quitte la liste ; les autres options restent inchangées. Il n'y a pas encore de toiture.

{{ui:Renommer}} change le nom d'une option, {{ui:Supprimer}} la retire du modèle. Supprimer l'option courante rend courante la première autre option de l'ensemble.

## Ce que vous devez voir

- Chaque option conservée sous forme de bloc dans la vue 3D et sous forme de ligne dans la liste.
- « (courante) » à côté d'une option de chaque ensemble.
- Un avertissement dans {{ui:Problèmes}} lorsque l'option courante franchit la limite du site, un alignement de construction ou une servitude.

## Bon à savoir

- Dans le fichier IFC, une option est un proxy d'élément de bâtiment avec l'ensemble de propriétés `CadCraft_SiteMass` (son ensemble d'options, son nom et son statut d'option courante y figurent). Les étages de l'option courante sont des espaces de type `MassingFloor`. Les autres logiciels lisent le proxy comme un élément générique.
- Conserver une option n'ajoute jamais de niveaux ; la développer, oui.
- Un assistant peut lister les options conservées, en conserver une, en rendre une courante, la renommer, la développer ou la supprimer.
