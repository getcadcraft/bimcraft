---
title: Vérifier un modèle pour détecter les problèmes courants
summary: Repérez les éléments auxquels il manque une propriété nécessaire, les GlobalId utilisés deux fois, les éléments sans niveau et les copies superposées.
keywords: vérifier, contrôle, contrôle du modèle, validation, assurance qualité, qualité, propriété manquante, requise, doublon, globalid, guid, niveau, superposé, chevauchement
from: 4d835513
---

## Ce que vous allez faire

Relisez un modèle avant de le transmettre : repérez les problèmes qui perturbent les nomenclatures, les quantités et les autres logiciels.

## Étapes

1. Ouvrez un modèle IFC.
2. Ouvrez {{ui:Model checks}} dans le panneau de gauche.
3. Sous {{ui:Required properties}}, une règle est déjà présente (toute classe, Name). Modifiez sa classe (ou {{ui:Any class}}) et sa propriété, ou cliquez sur {{ui:Add a property}} pour une autre règle ; la croix (x) supprime une règle. Un élément ne respecte pas une règle lorsque la propriété est absente ou vide. Les règles restent enregistrées dans ce navigateur pour tous les modèles.
4. Cliquez sur {{ui:Run checks}}.
5. Cliquez sur un résultat pour sélectionner ces éléments et zoomer sur eux.

## Ce que vous devez voir

- **Propriété requise manquante** : chaque règle, avec les éléments qui n'ont pas de valeur pour elle.
- **GlobalId utilisé deux fois** : éléments partageant un même GlobalId. Les autres logiciels les traitent comme un seul élément.
- **Sans niveau** : éléments dont la forme n'est contenue dans aucun niveau.
- **Copies superposées** : éléments de même classe et même type, ayant la même forme au même endroit, qui sont comptés deux fois dans les quantités.

Chaque ligne des résultats est un bouton : cliquez dessus pour sélectionner ces éléments et zoomer sur eux. Seuls les 50 premiers groupes de chaque contrôle sont listés. Les mêmes constats apparaissent aussi dans {{ui:Problems}}.

## Bon à savoir

- Les contrôles portent sur le modèle actif lorsque plusieurs modèles sont ouverts. Voir [Afficher plusieurs modèles IFC ensemble](topic:several-models).
- Après une modification, relancez les contrôles.
- Dans le panneau {{ui:Problems}}, les longueurs, surfaces et volumes cités dans un problème suivent les {{ui:Units}} choisies dans la barre d'outils (une porte de « 800 mm » s'affiche 2'-7 1/2" en pieds et pouces) ; si vous changez l'unité, le panneau reformule ces valeurs.

## Pour continuer

- [Auditer le modèle : pièces, étiquettes, LOD, conflits et interfaces](topic:audit-the-model)
- [Rechercher des éléments par classe, nom ou propriété](topic:find)
- [Supprimer, couper, copier et coller des éléments](topic:copy-paste)
