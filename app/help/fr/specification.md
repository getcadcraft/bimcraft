---
title: Rédiger le cahier des charges à partir du modèle
summary: Une section du cahier des charges pour chaque type de mur, de porte, de fenêtre, de plancher et de finition utilisé, avec ses données lues dans le modèle et votre propre texte, produit en PDF ou en document Word.
keywords: cahier des charges, CCTP, cahier, plans d'exécution, étape 5, dossier d'exécution, section, type de mur, type de porte, type de fenêtre, finition, classification, uniclass, omniclass, masterformat, document, pdf, word, docx, nomenclatures
from: a6acc6d4
---

## Ce que vous allez faire

Obtenir un cahier des charges qui suit le modèle : une section pour chaque type réellement présent dans le bâtiment, chacune avec sa composition et ses quantités lues dans le modèle, et le texte que vous rédigez pour elle.

## Étapes

1. Activez {{ui:Dessin}}, ouvrez **Nomenclatures** dans le panneau de gauche et cliquez sur **Cahier des charges**.
2. La boîte de dialogue liste une section pour chaque type de mur, type de porte, type de fenêtre, plancher et finition de pièce utilisé. Sous chaque titre figurent ses **données**, lues dans le modèle : épaisseur, couches une à une, niveau de développement, dimensions, nombre et quantité. Une section dont les éléments portent un code de classification affiche ce code dans son titre.
3. Rédigez votre texte de cahier des charges dans la zone sous une section. **Sélectionner ses éléments** montre les éléments concernés par cette section.
4. Cliquez sur **Enregistrer**. C'est une étape dans Annuler, et le texte est conservé dans le fichier du bâtiment.
5. Ouvrez **Documents depuis le modèle**, choisissez le modèle **Cahier des charges** et cliquez sur **Aperçu**, puis enregistrez-le en PDF, Word ou Markdown. Voir [Documents depuis le modèle](topic:documents-from-the-model).

## Les nomenclatures des plans d'exécution sous forme de document

Le modèle **Nomenclatures des plans d'exécution** imprime les nomenclatures de portes, de fenêtres et de finitions directement depuis le modèle, selon la mise en page de votre agence. Dans votre propre modèle, écrivez `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ou le nom d'une configuration enregistrée, par exemple `{{schedule Door schedule by floor}}`. `{{specification}}` imprime le cahier des charges.

## Bon à savoir

- Les données sont celles du modèle. Elles changent lorsque le modèle change ; votre texte, lui, ne change pas.
- BimCraft n'écrit aucun article d'une norme ni aucun texte de fabricant. Une section sans texte imprime « Aucun texte de cahier des charges n'a encore été rédigé. »
- Le texte rédigé pour un type qui n'est plus dans le modèle est conservé et listé sous « Texte des types qui ne sont plus dans le modèle ».
- Pour remplacer un type générique par une composition précise, voir [Outils de mur](topic:wall-tools) (Remplacer le type).
