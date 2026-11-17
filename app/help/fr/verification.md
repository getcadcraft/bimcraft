---
title: Marquer les éléments comme contrôlés ou vérifiés sur chantier
summary: Un élément lu depuis un PDF ou un scan n'est pas vérifié tant que vous ne l'avez pas contrôlé. Marquez les éléments comme contrôlés, ou comme vérifiés sur chantier (LOD 500) avec la personne qui les a mesurés, quand et comment, puis remettez un modèle tel que construit qui indique lequel est lequel.
keywords: non vérifié, vérifié, contrôlé, vérifié sur chantier, tel que construit, as-built, lod 500, clôture, remise, mesuré sur site, mètre ruban, laser, scan, relevé, bâtiment existant, transformation, marquer comme contrôlé, vérification, étape 7
from: df35d908
---

## Ce que vous allez faire

Suivre ce que quelqu'un a réellement examiné dans le modèle. Un élément porte l'un de trois repères, ou aucun :

- **Non vérifié** : le programme l'a reconnu à partir d'un PDF, d'un plan scanné, d'un dessin relevé ou d'un scan de nuage de points. Personne ne l'a encore contrôlé.
- **Contrôlé** : une personne l'a comparé au dessin dont il provient.
- **Vérifié sur chantier (LOD 500)** : une personne l'a mesuré sur place. Qui, quand et comment sont conservés avec lui.
- **Aucun repère** : dessiné par une personne. Le modèle n'affirme rien à son sujet.

## Étapes

1. Sélectionnez un élément ou plusieurs (murs, portes, fenêtres, pièces, tout élément).
2. Dans {{ui:Propriétés}}, ouvrez {{ui:Vérification}}.
3. Saisissez qui a contrôlé ou mesuré. La date est celle du jour, sauf si vous la modifiez.
4. Cliquez sur {{ui:Marquer comme contrôlé}}. Pour une mesure sur site, choisissez le mode de mesure (mètre ruban, télémètre laser, scan, relevé) et cliquez sur {{ui:Marquer comme vérifié sur chantier (LOD 500)}}.
5. {{ui:Marquer comme non vérifié}} et {{ui:Retirer le repère}} reviennent en arrière. Chaque clic est une étape que vous pouvez annuler, pour toute la sélection.

Pour marquer rapidement une sélection : {{ui:Outils}} › {{ui:Marquer comme contrôlé}} (saisi : `MARKCHECKED`) la marque comme contrôlée par vous, à la date du jour.

## Ce que vous devez voir

- Dans le plan, un élément non vérifié a un cadre en pointillés et un « ? » ; un élément vérifié sur chantier a une coche. Décochez {{ui:Afficher les repères de vérification dans le plan}} dans la section {{ui:Audit}} pour les masquer.
- {{ui:Nomenclatures}} › {{ui:Vérification}} liste chaque élément marqué avec son niveau, son état, qui, quand, comment et sa provenance.
- L'audit liste les éléments non vérifiés et compte un élément vérifié sur chantier comme LOD 500. Voir [Auditer le modèle](topic:audit-the-model).

## Depuis un scan

Lorsque vous comparez un scan au modèle, {{ui:Marquer les éléments correspondants comme vérifiés sur chantier}} marque chaque élément que le scan a vu tel que construit dans la tolérance, avec la méthode « scan » et la tolérance dans la note. Voir [Comparer un scan au modèle](topic:compare-scan-with-model).

:::warning
Cette comparaison associe la boîte de chaque élément aux points du scan. Ce n'est pas un relevé. Utilisez-la pour les éléments que vous avez aussi examinés.
:::

## Le modèle tel que construit et le dossier de remise

{{ui:Constituer le dossier de remise}} sur l'onglet {{ui:Ressources}} place le modèle tel que construit dans le zip, avec :

- une mention sur le projet indiquant combien d'éléments sont vérifiés sur chantier, contrôlés, non vérifiés et sans repère ;
- `as-built/verified-elements.csv` : chaque élément et pièce avec son état, qui, quand et comment ;
- `as-built/as-built-drawings.pdf` : le jeu de plans tel qu'il est maintenant ;
- le journal des modifications des dessins, lorsque le modèle a émis des jeux de plans.

Voir [Ressources et maintenance](topic:assets-and-maintenance).

## Comment c'est conservé dans l'IFC

Chaque élément marqué porte le jeu de propriétés `CadCraft_Verification` : State, By, On, Method, Source, Note et LevelOfDevelopment (`LOD 500` lorsqu'il est vérifié sur chantier). Ce sont des propriétés en texte brut, que d'autres logiciels peuvent lister, et que Rechercher, Colorer par propriété et les nomenclatures de repères peuvent utiliser. La mention tel que construit est le jeu de propriétés `CadCraft_AsBuilt` sur le projet. Un élément sans ce jeu n'a pas été mesuré sur site.

## Suite

- [Murs à partir d'un jeu de plans](topic:walls-from-plans)
- [Auditer le modèle](topic:audit-the-model)
