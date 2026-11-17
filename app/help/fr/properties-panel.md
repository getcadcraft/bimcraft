---
title: Champs du panneau Propriétés
summary: Ce que signifie chaque champ du panneau Propriétés et des panneaux Fichier, Dessin et Dossier, et ceux que vous pouvez modifier.
keywords: propriétés, champs, attributs, globalid, guid, copier, copier la valeur, tout copier, csv, presse-papiers, numéro de série, repère, type d'objet, ligne, id express, ensemble de propriétés, pset, quantités, schéma, panneau fichier
from: fe55b435
---

## Un élément IFC

Le haut du panneau {{ui:Propriétés}} affiche la nature de l'élément sans le préfixe « Ifc » (par exemple « Door », « WallStandardCase », « FurnishingElement ») et son nom, ou « Sans nom ».

| Champ | Signification | Modifiable |
|---|---|---|
| Nom | Le nom de l'élément, souvent le nom de la famille et du type donné par l'exportateur | Oui |
| Type | Le nom du type de l'élément, lorsqu'il en a un | Non |
| Type d'objet | Une description de type en texte libre que certains exportateurs remplissent | Oui |
| Repère | Le repère ou la marque de l'élément ; beaucoup d'exportateurs y écrivent l'ID de l'élément | Oui |
| Description | Texte libre | Oui |
| GlobalId | L'identifiant IFC permanent de 22 caractères de l'élément, identique dans chaque export du même élément | Non |
| Ligne | Le numéro de ligne (`#1234`) de l'élément dans ce fichier IFC. Il change d'un export à l'autre | Non |

En dessous viennent les **ensembles de propriétés**, triés par nom :

- Chaque ensemble s'ouvre et se referme en cliquant sur son nom. Les trois premiers sont ouverts.
- Un ensemble marqué « (type) » appartient au type de l'élément : « Propriété de type : une modification ici s'applique à chaque élément de ce type. »
- Les ensembles de quantités (longueurs, surfaces, volumes, comptages, poids) sont en lecture seule.
- Les listes et les valeurs énumérées sont affichées, en lecture seule.
- Les valeurs Oui/Non s'affichent **Oui** ou **Non**.
- Les nombres sont arrondis à quatre décimales à l'affichage. Les longueurs (une propriété de longueur ou la longueur d'une quantité) s'affichent dans les {{ui:Unités}} choisies sur la barre d'outils, avec l'unité à côté, et vous pouvez saisir une nouvelle valeur dans cette unité ou avec une autre unité (2.4 m, 8'-0") : BimCraft réécrit le nombre propre au fichier. Les autres nombres s'affichent tels que le fichier les contient.
- Une valeur vide s'affiche *vide*. Une valeur modifiée est en gras avec une barre bleue à côté.

## Copier une valeur

Chaque valeur de {{ui:Propriétés}} a un petit bouton de copie à côté : cliquez dessus pour placer cette valeur dans le presse-papiers exactement telle qu'elle est affichée, par exemple un GlobalId, un numéro de série ou une valeur de n'importe quel ensemble de propriétés. Copier ne lance jamais une modification.

En haut, {{ui:Tout copier}} copie chaque valeur de l'élément sous forme de texte, ensemble par ensemble, et {{ui:Copier en CSV}} copie les valeurs sous forme de lignes groupe, propriété et valeur, à coller dans un tableur ; les valeurs vides sont conservées pour que chaque champ ait une ligne. Cela fonctionne de la même façon pour un élément d'un autre modèle ouvert ; lorsque plusieurs modèles sont ouverts, le CSV commence par une colonne Modèle qui indique son fichier.

## Le panneau Fichier (IFC)

| Champ | Signification |
|---|---|
| Fichier, Taille | Le fichier que vous avez ouvert |
| Schéma | La version IFC, telle que IFC2X3 ou IFC4 |
| Projet | Le nom du projet et son nom long |
| Phase | La phase du projet, si l'exportateur en a écrit une |
| Exporté depuis | Le programme d'export, d'après l'en-tête du fichier |
| Auteur | L'auteur indiqué dans l'en-tête du fichier |
| Exporté | La date et l'heure indiquées dans l'en-tête du fichier |
| Éléments | Combien d'éléments avec une forme ont été dessinés |
| Triangles | Combien de triangles forment leurs formes ; une mesure du poids du modèle |

## Le panneau Fichier (projet et famille)

| Champ | Signification |
|---|---|
| Nature | Projet, gabarit de projet, famille ou gabarit de famille |
| Enregistré dans | La version qui a enregistré le fichier en dernier |
| Build | La build exacte de cette version |
| Lu | La part du fichier que BimCraft a lue, par rapport à sa taille |

## Le panneau Dessin (DWG et DXF)

| Champ | Signification |
|---|---|
| Format | La version dans laquelle le dessin a été enregistré, avec son code de format, tel que AC1032 |
| Unités | Les unités d'insertion du dessin, lorsqu'elles sont définies |
| Entités | Combien d'objets ont été lus |
| Calques | Combien de calques |
| Feuilles | Combien de feuilles (présentations), ou Aucune |
| Dessins liés | Combien de dessins liés ont été trouvés et chargés |
| Équipements | Combien d'équipements repérés se trouvent sur des feuilles |

## Le panneau Dossier

| Champ | Signification |
|---|---|
| Dossier, Fichiers, Taille | Le dossier que vous avez ouvert, le nombre de fichiers qu'il contient et leur taille totale |
| Modèles | Fichiers de projet et de famille, chacun avec ses sauvegardes comptées une seule fois |
| Dessins CAO, modèles IFC | Combien de chacun |
| Problèmes | Combien de copies de modèles sont incomplètes ou illisibles, ou Aucun |
