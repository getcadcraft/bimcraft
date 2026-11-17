---
title: Mettre en page, enregistrer et exporter une nomenclature
summary: Grouper une nomenclature, lui donner des sous-totaux et des totaux, ajouter une colonne lue dans une propriété, l'enregistrer comme configuration dans le fichier, et l'exporter en classeur (.xlsx), en texte à coller dans une feuille en ligne, ou en CSV. Le standard de l'agence complète ce que la nomenclature ne précise pas.
keywords: mise en page de nomenclature, grouper par, sous-total, total, en-têtes, standard de l'agence, default policies, politiques par défaut, configuration, nomenclature des portes par étage, résistance au feu, quincaillerie, xlsx, classeur, feuille en ligne, coller, csv, export, tableur, éléments, sélectionner depuis la nomenclature, chiffre
from: 95dfd801
---

## Ce que vous allez faire

Transformez une nomenclature simple en celle que votre agence émet : groupée par niveau, type ou pièce, avec des sous-totaux et un total, avec les colonnes dont vous avez besoin, sous son propre nom. Envoyez-la ensuite vers un tableur. Chaque ligne et chaque chiffre connaissent toujours les éléments dont ils proviennent.

## Étapes

1. Activez {{ui:Dessin}} et ouvrez **Nomenclatures** dans le panneau de gauche. Choisissez une nomenclature, par exemple **Portes**.
2. Au-dessus du tableau, choisissez **Grouper par** (une colonne de la nomenclature, comme Niveau ou Type, ou **Pas de regroupement**) et **Totaux** (**Pas de totaux**, **Un total** ou **Sous-totaux et total**). **Selon la configuration** laisse le choix à la configuration enregistrée ou au standard de l'agence.
3. Pour ajouter une colonne lue depuis les éléments, saisissez sous le tableau le nom d'une propriété ou d'un repère (par exemple `FireRating`, `Pset_DoorCommon.FireRating` ou le nom d'un repère tel que `Ironmongery`) et cliquez sur **Ajouter une colonne**. BimCraft lit d'abord les ensembles de propriétés propres à l'élément, puis ceux de son type. Lorsqu'aucun élément n'a encore de valeur, il le signale ; la colonne se remplit d'elle-même dès qu'une valeur est définie.
4. Saisissez un nom (par exemple « Nomenclature des portes par étage ») et cliquez sur **Enregistrer comme configuration**. La configuration est conservée dans le fichier du bâtiment et rejoint la liste des Nomenclatures sous son nom. Elle suit chaque modification du modèle. **Supprimer cette configuration** la retire. Les deux actions sont une seule étape d'annulation.

## Cliquer sur un chiffre pour sélectionner son origine

Cliquez sur une ligne ou sur un chiffre quelconque pour sélectionner, dans le plan et en 3D, les éléments qui le composent :

- une ligne sélectionne les éléments de cette ligne ;
- un sous-total ou un total sélectionne tout ce qu'il additionne, et un intitulé de groupe sélectionne son groupe ;
- un chiffre ayant ses propres éléments sélectionne ceux-ci : les **Déductions** d'un type de mur sélectionnent ses portes et fenêtres, la surface de murs d'une pièce sélectionne ses murs.

Le même principe s'applique à un document produit à partir du modèle : dans l'aperçu, cliquez sur un chiffre d'une nomenclature.

## Export

- **Télécharger Excel** enregistre un classeur .xlsx. Longueurs, surfaces, volumes et comptages sont des nombres réels, dans l'unité affichée par la colonne (les pieds et pouces restent du texte). Une seconde feuille, **Éléments**, liste pour chaque ligne les GlobalId des éléments qui la composent.
- **Copier pour Google Sheets** place la nomenclature dans votre presse-papiers sous forme de texte séparé par des tabulations. Dans une Google Sheet, cliquez sur la cellule A1 et collez. **Ouvrir une nouvelle Google Sheet** ouvre `sheets.new`, l'adresse propre à Google pour une feuille vide, dans votre propre compte Google. BimCraft ne se connecte pas à Google et n'envoie rien : le collage vous appartient.
- **Télécharger CSV** enregistre le tableau tel qu'il est disposé à l'écran.

## Le standard de l'agence

Une agence peut indiquer une fois pour toutes comment ses nomenclatures sont mises en page. Activez le module complémentaire **Default Policies** ([Default Policies](topic:default-policies)) et réglez, dans **Paramètres › Global › Default Policies › Mise en page des nomenclatures (le standard de l'agence)** :

| Politique | Ce qu'elle fait |
|---|---|
| Grouper les nomenclatures par | Niveau, Type, Pièce ou pas de regroupement, pour chaque nomenclature qui a une telle colonne |
| Totaux dans les nomenclatures | Pas de totaux, un total à la fin, ou un sous-total sous chaque groupe et un total |
| Titre de la nomenclature | Un modèle, par exemple `{project}: {schedule}` |
| En-têtes de colonnes | Tels qu'écrits, EN MAJUSCULES ou Avec Majuscules |

Le standard s'applique à chaque nomenclature, quel que soit son auteur : les nomenclatures simples du panneau, une configuration enregistrée, une nomenclature mise en place par un assistant, les exports et les nomenclatures d'un document. Une configuration qui indique son propre groupement, ses totaux ou son titre les conserve ; le standard complète le reste. Le panneau indique quelles parties ont été fixées par le standard de l'agence. Les politiques voyagent dans le fichier Default Policies avec les autres.

## Bon à savoir

- Une configuration nomme sa nomenclature source et ses colonnes ; elle ne contient aucun nombre. Les nombres sont lus dans le modèle à chaque fois.
- Les listes qui ne sont pas des lignes d'éléments (les assemblages de murs et la légende des matériaux) n'ont ici ni mise en page ni export.
- Un assistant peut faire tout cela pour vous : voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).
