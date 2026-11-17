---
title: Documents issus du modèle
summary: Rédigez une fois une spécification ou une description sous forme de modèle de document, avec des champs pour les quantités, les propriétés et les étiquettes, puis remplissez-le à partir de l'IFC ouvert, en PDF ou en document Word.
keywords: document, documents, spécification, spec, description, modèle de document, markdown, rapport, word, docx, pdf, quantités, nomenclature, lot, nomenclature des portes, finitions, documentcad
from: 2b0c9156
---

## Ce que vous allez faire

Un modèle de document est un texte en Markdown avec des champs entre doubles accolades. BimCraft remplit les champs à partir du modèle ouvert (nombres, quantités par type, propriétés, vos [étiquettes](topic:tags-and-schedules)) et enregistre le résultat en PDF, en document Word (.docx) ou en Markdown.

## Étapes

1. Ouvrez un modèle IFC.
2. Dans le panneau de gauche, sous {{ui:Quantités}}, ouvrez {{ui:Documents issus du modèle}}.
3. Choisissez un modèle de document : {{ui:Portes et quincaillerie}} ou {{ui:Murs, doublages et finitions}}, ou {{ui:Charger un modèle de document (.md)…}} pour le vôtre.
4. Si le modèle de document lit des étiquettes que le modèle ne définit pas encore, cliquez sur {{ui:Ajouter les étiquettes de ce modèle de document}}, puis étiquetez les éléments sous {{ui:Étiquettes}}.
5. Modifiez le texte comme vous le souhaitez et cliquez sur {{ui:Afficher le document}}.
6. Cliquez sur {{ui:PDF}} (choisissez d'abord A4 ou Letter) ou sur {{ui:Word (.docx)}}.

## Ce que vous devez voir

- Le document rempli sous les boutons, avec ses tableaux.
- Une liste d'avertissements lorsqu'un champ ne peut pas être lu (une étiquette non définie, une propriété que le modèle n'a pas, un bloc jamais fermé) ; un tel champ s'imprime sous la forme `[?…]`.
- Des pages PDF avec le titre du document et « Page 1 sur 3 » en pied de chaque page ; les longs tableaux se poursuivent avec leur ligne d'en-tête.

## Champs

| Champ | Donne |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | le nom et la description du projet, le nom du fichier, la date du jour |
| `{{count IfcDoor}}` | le nombre de portes |
| `{{sum IfcWall NetSideArea}}` | un total, avec son unité |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | un calcul (`+ - * /` et crochets) sur des termes entre crochets : `[sum …]`, `[count …]`, et dans un `{{#each}}` `[qty Width]`. `round n` fixe les décimales, `unit` ajoute une unité. Ce qu'il ne peut pas lire, ou une division par zéro, s'imprime sous la forme `[?…]` et déclenche un avertissement |
| `{{qty IfcWall NetSideArea by Type}}` | un tableau : une ligne par type avec son nombre et son total, et une ligne de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | un tableau, une ligne par élément |
| `{{tag Finish}}` | dans une boucle, la valeur de l'élément ; ailleurs, toutes les valeurs utilisées (Oak, Paint) |
| `{{tags}}` | les définitions des étiquettes sous forme de tableau |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | le texte une fois par élément ; la partie après `{{else}}` lorsqu'il n'y en a aucun |
| `{{#group IfcWall by Type}} … {{/group}}` | le texte une fois par type, avec `{{value}}`, `{{count}}`, `{{sum Length}}` et une boucle `{{#each}}` simple à l'intérieur |

Dans `{{#each}}` : `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (la quantité propre de l'élément, avec son unité).

Une classe peut être plusieurs (`IfcDoor|IfcWindow`) ou tous les éléments (`*`). Restreignez l'une d'elles avec `where` : `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Les tests sont `=`, `!=`, `~` (contient), `>`, `<`, `>=`, `<=`, `has` et `hasnot` ; reliez-en plusieurs avec `and` ; placez une valeur contenant des espaces entre « guillemets ». `sort Name` trie une boucle.

## Nomenclatures et spécification dans un document

`{{schedule doors}}` imprime une nomenclature du modèle sous forme de tableau, selon la disposition de votre agence : `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ou le nom d'une configuration enregistrée dans les Nomenclatures. `{{specification}}` imprime la spécification du projet. Les modèles **Nomenclatures d'exécution** et **Spécification** s'en servent. Dans l'aperçu, cliquez sur un chiffre d'une telle nomenclature pour sélectionner les éléments dont il provient. Voir [Mettre en forme, enregistrer et exporter une nomenclature](topic:schedule-layouts) et [Rédiger la spécification à partir du modèle](topic:specification).

## Bon à savoir

- Un champ nomme un élément intégré (Name, Type, Storey, Class, Material, Mark), une étiquette (`tag:Fire rating`, ou son nom), une propriété (`Pset_WallCommon.FireRating`) ou simplement le nom d'une propriété (`NetSideArea`, `Width`) : un nom seul lit l'ensemble propre à chaque élément, les ensembles de quantités d'abord, de sorte que `Width` sur une porte est la largeur de la porte, et non l'épaisseur d'un mur. Dans `where`, un nom seul lit l'ensemble que la plupart des éléments choisis possèdent.
- Les quantités correspondent à ce que disent les ensembles de quantités du fichier (BimCraft les écrit pour ce qu'il dessine) ; les unités proviennent des réglages d'unités du fichier.
- Les mots de champs (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) restent en anglais dans toutes les langues. Les modèles d'exemple sont en anglais.
- Le texte issu du modèle ne devient jamais une mise en forme : un nom contenant un `*` ou un `|` s'imprime tel quel.
- Conservez un modèle modifié avec {{ui:Conserver dans ce navigateur}} (seul ce navigateur le possède) ou {{ui:Télécharger le modèle de document}}.
- Le texte PDF utilise les polices PDF standard : un caractère hors du texte d'Europe occidentale s'imprime en « ? », et la barre d'état indique combien.
- Les modèles par métier se trouvent dans la Bibliothèque (type Modèle de document). Dans Documents issus du modèle, choisissez Depuis la Bibliothèque…, sélectionnez-en un, et son texte ainsi que les étiquettes qu'il lit sont importés ; modifiez-le à votre guise. Publier votre propre modèle dans la Bibliothèque revient au même téléversement que pour tout autre élément. Pas encore disponible : les calculs au-delà des comptages et des totaux.
