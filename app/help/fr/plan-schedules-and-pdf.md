---
title: Nomenclatures, cotes et PDF du plan
summary: Nomenclatures des portes, fenêtres, murs et pièces qui évoluent pendant le dessin, cotes sur le plan, et plan d'un niveau enregistré en PDF à une échelle normalisée.
keywords: nomenclature, nomenclature des portes, nomenclature des fenêtres, nomenclature des murs, nomenclature des pièces, quantités, métré, surface, csv, tableur, cotes, cote, imprimer, pdf, tracer, échelle, 1/4", 1:50, feuille
from: d97cd16e
---

## Ce que vous allez faire

Voyez le total de ce que vous avez dessiné, pendant que vous dessinez : combien de portes et de fenêtres de chaque dimension, quelle surface de mur de chaque type, la taille de chaque pièce. Placez des cotes sur le plan et enregistrez-le en PDF pour l'imprimer ou l'envoyer.

## Nomenclatures

Avec {{ui:Dessin}} activé, **Nomenclatures** dans le panneau de gauche affiche un tableau à la fois :

- **Portes** et **Fenêtres** : chacune par son repère (D1, D2 … et W1 …, donnés au placement), son type, sa largeur, sa hauteur (et son allège), son niveau et le mur où elle se trouve.
- **Murs par type** : pour chaque type de mur, le nombre de murs, leur épaisseur, leur longueur totale et leur surface latérale en **Surface brute**, **Déductions** et **Surface nette**, avec un total.
- **Pièces** : numéro, nom, niveau, surface et périmètre, avec la surface totale.
- **Sols** : chaque sol avec son niveau, son type et son épaisseur, et sa surface brute, ses déductions et sa surface nette.
- **Finitions** : chaque couche de finition des types de murs (par matériau et côté du mur) et les plafonds, avec le nombre de faces, la brute, les déductions et la nette.
- **Types de murs : données de métré** : ce qui a été saisi une fois pour chaque type de mur (unité, mortier, taux), avec le nombre de murs, leur longueur et leur surface nette, et le taux multiplié par la quantité mesurée. Voir [Assemblages de murs](topic:wall-assemblies).

- **Finitions par pièce**, **Finitions par mur**, **Finitions par zone** et **Quantités de finitions** : ce qui recouvre chaque pièce, avec les surfaces, les nombres de carreaux coupes comprises, et les volumes de support. Voir [Finitions de pièces et nomenclatures de finitions](topic:room-finishes).
- Vos propres **configurations** : une nomenclature que vous avez regroupée, totalisée et enregistrée sous un nom. Voir [Mettre en forme, enregistrer et exporter une nomenclature](topic:schedule-layouts).

Les tableaux changent à chaque modification. Cliquez sur une ligne, ou sur un seul chiffre, pour choisir les éléments dont il provient. {{ui:Download CSV}} enregistre le tableau, pour l'ouvrir dans un tableur ; le téléchargement au format Excel et **Copier pour Google Sheets** sont en dessous. **Finitions de pièces** et **Spécification** ([Rédiger la spécification à partir du modèle](topic:specification)) s'ouvrent depuis le même endroit.

## Surface et volume de chaque couche

Choisissez **Couches : surface et volume** dans la liste des Nomenclatures. Elle comporte une ligne pour chaque couche de chaque type de mur, de sol, de toiture et de plafond utilisé : l'élément, son type et son LOD, la couche (comptée depuis le côté extérieur d'un mur, ou depuis le dessus d'un sol, d'une toiture ou d'un plafond), son matériau et sa fonction, son épaisseur, le nombre d'éléments, la **surface nette** et le **volume**.

- La surface est la surface nette des éléments de ce type, mesurée exactement comme dans Murs par type, Sols et Finitions, selon la méthode de mesure du projet. Une toiture se mesure sur sa pente ; aucune méthode de mesure n'a de règle pour les toitures.
- Le volume est cette surface multipliée par l'épaisseur propre de la couche.
- Un sol, une toiture ou un plafond sans type constitue une seule ligne : une couche de sa propre épaisseur.
- Une lame d'air est listée avec sa surface et exclue du volume total. Une membrane a une surface et pas de volume.

Cliquez sur une ligne pour choisir ses éléments. {{ui:Download CSV}} enregistre le tableau.

## Comment les surfaces sont mesurées

Chaque surface est formée de trois nombres qui s'additionnent : la brute moins les déductions donne la nette. La règle est écrite au-dessus de chacun de ces tableaux, et c'est une seule et même règle : les nomenclatures, les quantités enregistrées dans le fichier IFC et le métré transmis à TakeoffCraft l'utilisent toutes.

- **Un mur** : la brute est une face du mur, sa longueur le long de l'axe multipliée par sa hauteur (la vraie face pour un mur à sommet ou à base profilés). Chaque porte, fenêtre et autre ouverture est déduite, largeur multipliée par hauteur, chacune une fois.
- **Un sol ou un plafond** : la brute est la surface à l'intérieur de son contour. Chaque ouverture et découpe à l'intérieur est déduite une fois.
- **Une finition de mur** : chaque couche de finition du type de mur couvre une face du mur, mesurée comme le mur, avec les mêmes ouvertures déduites. Une finition est une couche du mur : elle est listée dans Finitions et n'est pas ajoutée à la surface du mur, de sorte qu'un mur avec une porte n'est jamais compté deux fois.

C'est la **valeur par défaut CadCraft** : chaque ouverture est déduite, quelle que soit sa taille ; les longueurs de murs suivent l'axe ; les embrasures ne sont pas mesurées. C'est ce qu'utilisent tous les projets tant que vous n'en choisissez pas une autre.

## Choisir une méthode de mesure

Au-dessus de la nomenclature, **Méthode de mesure** liste les méthodes fournies avec BimCraft, et **Charger un fichier de méthode** prend celui de votre bureau. Le choix est enregistré dans le fichier IFC, comme une étape d'annulation, et trois choses le suivent aussitôt : les nomenclatures, les quantités nettes enregistrées dans le fichier et le métré transmis à TakeoffCraft. La règle au-dessus de chaque tableau commence alors par la méthode, sa source, la date de lecture de la source et les mots **Non vérifiée par un métreur**.

Une méthode est un petit fichier de données, pas du code. Pour chaque quantité, elle indique :

- **la plus petite ouverture déduite** : par exemple, une ouverture de 0.5 m² ou moins reste dans la surface du mur ;
- **comment les jonctions de murs sont mesurées** : le long de l'axe ; ou avec un mur qui s'arrête contre un autre, mesuré jusqu'à la face de ce mur ; ou avec chaque extrémité de mur qui rencontre un autre mur, mesurée jusqu'à la face la plus proche ;
- **si les embrasures sont mesurées** pour une finition (les retours de la finition dans les ouvertures), en surface ou, lorsqu'elles sont peu profondes, en longueur. La profondeur d'une embrasure est prise égale à la moitié de l'épaisseur du mur ;
- **ce qu'elle dit de la maçonnerie** : comment elle est mesurée, et les déchets ou majorations de mortier qu'elle indique.

Les méthodes fournies avec BimCraft :

| Méthode | Murs : plus petite ouverture déduite | Finitions de murs | Plafonds | Maçonnerie |
|---|---|---|---|---|
| Valeur par défaut CadCraft | chaque ouverture | chaque ouverture | chaque découpe | aucune majoration |
| RICS NRM 2 (United Kingdom), 2nd edition 2021 | 0.5 m² ou moins reste | 1 m² ou moins reste | 1 m² ou moins reste | par surface ; aucun pourcentage indiqué |
| AAQS Standard Method for Africa 2015 | 0.5 m² ou moins reste | 0.5 m² ou moins reste | 0.5 m² ou moins reste | par surface ; mesurée nette, 0% de déchets |
| IS 1200 (India), 1976, brickwork | 0.1 m² ou moins reste | par défaut (voir ci-dessous) | par défaut | au volume |
| BIA Technical Note 10 (United States), 2009 | chaque ouverture | par défaut | par défaut | 5% de déchets sur les unités, 15% sur le mortier |

Lisez ces limites avant de vous fier à une méthode :

- **Aucun métreur n'a vérifié l'une d'elles.** Chacune a été établie en lisant la source citée et en consignant ses chiffres avec la clause dont ils proviennent. Si vous êtes métreur et pouvez en vérifier une, les concepteurs de l'application seraient heureux de le savoir.
- Lorsqu'une règle n'a pas pu être lue dans la source, la méthode indique **non confirmée** pour elle et la valeur par défaut CadCraft est utilisée. Aucune méthode fournie avec BimCraft n'a de règle confirmée pour les jonctions de murs, les embrasures ou les sols : ceux-ci sont donc mesurés selon la valeur par défaut dans toutes les méthodes.
- IS 1200 déduit les ouvertures dans les enduits en trois tranches. Un fichier de méthode ne peut pas encore contenir de tranches ; les finitions de murs utilisent donc la valeur par défaut sous cette méthode, et la règle l'indique.
- Le South African Standard System of Measuring Building Work **n'** en fait **pas** partie : son texte n'a pas pu être lu. La méthode AAQS pour l'Afrique indique qu'elle repose sur l'édition 1991 de ce système, mais c'est un document différent.
- La BIA Technical Note 10 est une note d'estimation du secteur, et non une méthode normalisée de mesure.
- Une ouverture de taille exactement égale à la plus petite suit les termes de la méthode (« ne dépassant pas », « inférieure à »). Les dimensions à moins de 2 parties sur 10 000 de celle-ci comptent comme exactement elle.
- Sous une méthode, la surface latérale nette d'un mur et la surface nette d'un sol ou d'un plafond dans le fichier suivent la méthode, et l'ensemble de quantités en porte le nom. Les surfaces brutes et les volumes du fichier restent tels que dessinés.

**Notes sur cette méthode**, sous le sélecteur, indique ce que chaque source laisse ouvert. **Ouvrir la source** ouvre le document.

### La méthode propre à votre bureau

Un fichier de méthode est du JSON au format `cadcraft-measurement-method`. Chaque valeur qu'il contient nomme la clause dont elle provient ; une valeur sans clause est refusée. Le fichier est vérifié au chargement : un champ incorrect est signalé par son nom, et rien n'est utilisé d'un fichier qui ne passe pas la vérification. Une fois choisi, le fichier est enregistré dans le projet, de sorte que le projet s'ouvre de la même façon sur un autre ordinateur. Son identifiant est un nom simple de votre choix (il peut ne pas être l'identifiant d'une méthode fournie avec l'application).

## Briques, blocs et mortier

**Types de murs : données de métré** compte les unités et le mortier de chaque type de mur dont l'unité a une longueur et une hauteur (voir [Donner à un type ses données de métré](topic:wall-assemblies#give-a-type-its-takeoff-data)). Voici les formules, telles qu'elles sont calculées :

- **Unités par m² d'un parement** = 1 / ((longueur de l'unité + joint) × (hauteur de l'unité + joint)). Une brique de 215 × 65 mm avec un joint de 10 mm : 1 / (225 × 75 mm) = 59.26 par m².
- **Unités en largeur à travers un parement** = (épaisseur du parement + joint) / (largeur de l'unité + joint), arrondi à un nombre entier, au minimum 1. Un parement de 102.5 mm en briques de 102.5 mm donne 1 ; un mur de 215 mm avec les mêmes briques donne 2.
- **Unités** = unités par m² × unités en largeur × la surface nette de la face du mur, additionnées sur les parements de maçonnerie du type.
- **Unités à commander** = unités × (1 + déchets % / 100), arrondi à l'unité supérieure. Les déchets sont ceux saisis sur le type ; sans saisie, ceux de la méthode, si elle en indique ; sinon 0%.
- **Mortier** = surface nette × épaisseur du parement, moins le volume des unités (unités × longueur × hauteur × largeur), puis plus le pourcentage supplémentaire saisi sur le type pour les alvéoles ou perforations, puis plus la majoration de la méthode si elle en indique une. Il faut la largeur de l'unité.

Hypothèses : chaque parement de maçonnerie d'un type est construit avec l'unique unité du type ; un parement plus épais qu'une largeur d'unité est compté comme autant de largeurs d'unité, chacune comme un parement posé en long, de sorte que les briques coupées, les boutisses et les formes spéciales ne sont pas comptées à part ; lorsqu'aucune couche n'est cochée comme construite avec l'unité, les couches porteuses sont prises comme parements, et la note au-dessus du tableau le dit. Le **Montant** est le taux multiplié par ce à quoi il se rapporte, ce qui peut désormais aussi être une unité à commander, 1000 unités à commander ou un m³ de mortier.

Les repères sont le tag IFC des éléments : modifiez-en un dans **Propriétés** (Tag) et la nomenclature suit. Pour tout modèle IFC, dessiné ou non, [Totaliser les quantités, lister les éléments et établir la nomenclature des espaces](topic:quantity-totals) additionne toute propriété.

## Cotes

Le plan indique la longueur de chaque mur dessiné le long de sa face extérieure (un mur intérieur : le long d'une face) et, pour un mur avec portes ou fenêtres, une chaîne depuis les angles jusqu'à chaque ouverture. {{ui:Cotes}} dans la barre du modèle les masque et les affiche à nouveau.

## Enregistrer le plan en PDF

1. Affichez le niveau voulu et réglez les unités dans le panneau **Niveaux**.
2. Cliquez sur {{ui:Imprimer}} dans la barre du modèle.
3. BimCraft enregistre « <fichier> — <niveau>.pdf » : le plan en noir et blanc, à la plus grande échelle normalisée qui tient sur la page (1/4" = 1'-0", 1/8" = 1'-0" … sur Letter en pieds et pouces ; 1:50, 1:100 … sur A4 en millimètres), avec les murs remplis, les portes, fenêtres, noms et surfaces des pièces, les cotes, et un cartouche avec le niveau, le fichier, la hauteur de coupe, la date et l'échelle.

Le PDF est dessiné sous forme de lignes et de texte : il reste net à tout zoom et son texte peut être recherché.

## Bon à savoir

- Les nomenclatures listent ce que les outils de dessin ont créé. Les portes et fenêtres venant d'un autre logiciel apparaissent plutôt dans Totaux des quantités.
- Pour chiffrer le chantier, transmettez les quantités à TakeoffCraft : voir [Quantités vers TakeoffCraft](topic:takeoff). Le téléchargement CSV reste disponible pour un tableur.
