---
title: Lister les crédits de la bibliothèque et se connecter à la bibliothèque
summary: Voyez chaque élément de bibliothèque utilisé dans un modèle avec sa licence et sa mention de l'auteur, copiez les crédits ou téléchargez-les avec la nomenclature, et connectez-vous pour voir les éléments de votre équipe.
keywords: crédits, mention de l'auteur, attribution, licence, cc by, cc0, droit d'auteur, bibliothèque d'équipe, se connecter, connecter, jeton, nomenclature des équipements, csv
from: 81971658
---

## Ce que vous allez faire

Mentionnez les auteurs lorsqu'une licence l'exige, et accédez aux éléments de bibliothèque de votre équipe.

## Crédits de la bibliothèque

1. Ouvrez le modèle.
2. Cliquez sur {{ui:Crédits}} dans la barre d'outils.
3. Lisez la liste : chaque élément utilisé, sa version, sa licence, sa mention de l'auteur et les numéros d'élément sous lesquels il est placé.
4. Cliquez sur {{ui:Copier les crédits}} pour copier les lignes de mention de l'auteur, ou sur {{ui:CSV avec la nomenclature}} pour obtenir un tableur de chaque placement avec son crédit.

La licence et la mention de l'auteur apparaissent aussi dans {{ui:Propriétés}} lorsque vous sélectionnez un élément placé. Elles sont enregistrées dans l'IFC (`CadCraft_LibraryItem`) et voyagent donc avec le fichier.

## La nomenclature des équipements d'un modèle

Cliquez sur {{ui:Équipements}} dans la barre d'outils. La nomenclature est construite à partir des éléments de bibliothèque placés : numéro d'élément, quantité, nom, fabricant, modèle, données électriques et de plomberie, regroupés par niveau. Elle se télécharge au même format CSV que la nomenclature d'un dessin.

## Se connecter à la bibliothèque

1. Dans l'onglet {{ui:Bibliothèque}}, choisissez **Bibliothèque**.
2. Cliquez sur {{ui:Se connecter à la bibliothèque}}. Une petite fenêtre s'ouvre sur ce site.
3. Connectez-vous si on vous le demande, puis cliquez sur **Connecter**. La fenêtre transmet à BimCraft une clé de bibliothèque ; vous pouvez alors la fermer.

## Ce que vous devriez voir

- « Connecté à la bibliothèque » en haut de la liste de la bibliothèque. Les éléments de votre équipe apparaissent à côté des éléments publics.
- Les éléments que vous placez sont enregistrés comme utilisés, afin que la bibliothèque puisse vous signaler leurs modifications.

## Bon à savoir

- La clé n'est conservée que dans cet onglet et prend fin lorsque vous le fermez. {{ui:Oublier la connexion}} la supprime plus tôt.
- La page de sécurité de votre compte répertorie la clé sous « BimCraft library (browser) » ; révoquez-la à cet endroit.
- Rien de votre modèle n'est envoyé : seulement les éléments de bibliothèque que vous avez placés.
