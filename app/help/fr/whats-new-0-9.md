---
title: Nouveautés de la version 0.9 (antérieure)
summary: Formes de murs, diviser, décaler, étirer et verrouiller à la trame, niveaux sous le sol, cotes de trame et mesure sur le plan, vues dupliquées avec styles de travail et tables de plumes, Déclarer comme, export Collada et Google Earth, Scan vers BIM, analyses du vent et du séisme, modules d'impression résine.
keywords: nouveautés 0.9, version antérieure, nouveautés, 0.9, notes de version, formes de murs, rectangle, polygone, arc, choisir des lignes, contour de tracé, décalage, jonction, étirement par cadre, aligner et verrouiller, diviser un mur, écart, rattacher, verrouiller à la trame, agrandir à partir de, mesurer depuis, ajouter un niveau en dessous, sous-sol, commande niveau, cotes de trame, mesure sur le plan, style de travail, copie de vue, copie propre, vue liée, table de plumes, imprimer tel quel, déclarer comme, saisir une échelle, importer svg, placer sur le plan, placer dans le modèle, collada, dae, kmz, google earth, scan vers bim, charge de vent, sismique, éléments finis, volet documents, impression résine, quoi de neuf, changelog, modifications, 0.8, 0.8.1, version, nouvelles fonctions, évacuation, personnes, files d'attente, acoustique, réverbération, réponse impulsionnelle, inondation, vent, séisme, risque, cycle de vie, durée de vie, ids, étiquettes, nomenclatures, déplacer, aligner, répartir, image, arrière-plan, scan vers murs, site depuis civilcraft, plans de panneaux, ossature, solaire, pv, diviser, vrf, ventilo-convecteur, dimensionnement de tuyauterie, chemin de câbles, éclairement, béton, comparer un scan, epsg, projection, documents, gabarit, carbone, coût, energyplus, moteur de rendu, ouvrir dans, usd, glb, unreal, annuler, modules complémentaires, pcf, symboles, plantes, calquer, plumes, ruban, navigateur de projet, présentation
from: 816df7f8
---

Ce qui a changé dans BimCraft 0.9, par rapport à la 0.8.1. Les deux thèmes principaux sont un véritable outil de mur et des vues qui se comportent comme les attendent les personnes venant des grands logiciels BIM. Viennent ensuite l'export Collada, des assistants capables de placer des appareils électriques, Scan vers BIM, et les travaux de vent, de séisme et d'éléments finis dans l'onglet {{ui:Analyse}}.

## Nouveau

### Murs

- **Dessiner des formes complètes.** Dans {{ui:Dessin}}, ouvrez {{ui:Formes}} (ou choisissez une forme dans la liste Forme de la ligne Mur) pour un rectangle, un rectangle pivoté, un polygone de 3 à 64 côtés, un arc par centre, un arc tangent, des murs sur des lignes choisies, ou des murs autour d'une zone fermée sur laquelle vous cliquez à l'intérieur. Un rectangle donne quatre murs avec quatre angles joints et une seule étape d'annulation. Voir [Formes de murs, diviser, décaler, étirer et verrouiller](topic:wall-tools).
- **Régler avant de dessiner, modifier après.** La ligne Mur contient {{ui:Décalage}} et {{ui:Jonction}} (décochez pour dessiner des murs indépendants). Ensuite, utilisez {{ui:Décalage}}, {{ui:Étirement par cadre}} et {{ui:Aligner et verrouiller}} sur les murs dessinés. Un mur déplacé ou étiré garde ses portes, fenêtres et cotes. Chaque recette est une seule étape d'annulation.
- **Couper les murs.** {{ui:Diviser}}, {{ui:Écart}}, {{ui:Extrémités libres}}, {{ui:Supprimer un segment}} et {{ui:Rattacher}} coupent un mur d'un clic ou à l'endroit où un autre mur le croise. Une coupe dans une porte est refusée. Voir [Formes de murs, diviser, décaler, étirer et verrouiller](topic:wall-tools).
- **Verrouiller les murs aux trames.** Sélectionnez un mur le long d'une ligne de trame et cochez {{ui:Verrouiller à la trame}} dans {{ui:Propriétés}}. Avec l'outil {{ui:Grille}} activé, saisissez une distance dans {{ui:Déplacer de}} pour une ligne choisie : les murs verrouillés suivent en une seule étape d'annulation.
- **Façonner un mur.** Dans {{ui:Propriétés}} d'un seul mur, vous pouvez rattacher son sommet ou sa base à une toiture, un plancher ou un plafond, modifier le contour de son élévation, l'incliner, ou percer une ouverture dans un mur sans porte ni fenêtre. Voir [Forme du mur](topic:wall-shape).
- **La longueur indique l'extrémité fixe.** {{ui:Agrandir à partir de}} détermine si le début, la fin ou le centre reste en place quand vous changez la longueur.
- **Longueur et cote du plan concordent.** {{ui:Mesurer depuis}} (axe, face intérieure ou face extérieure) pilote à la fois le champ Longueur et les cotes de mur du plan. Il part de l'axe ; les cotes de mur du plan lisent désormais l'axe alors qu'elles lisaient la face extérieure auparavant. Modifiez-le dans la ligne Mur, dans {{ui:Propriétés}} ou dans {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Murs}}.

### Niveaux, trames et mesure

- **Ajouter un niveau en dessous.** {{ui:Ajouter un niveau en dessous}} dans le panneau {{ui:Niveaux}} ajoute un niveau sous le plus bas, de même hauteur, à une altitude négative (Niveau -1, Niveau -2). Rien d'autre ne bouge. {{ui:Ajouter des niveaux…}} accepte désormais des hauteurs négatives. Taper LEVEL, LEVELS, STOREY ou STOREYS sur la ligne de commande ouvre {{ui:Ajouter des niveaux…}}, et il y a un bouton {{ui:Niveaux}} dans les menus et les onglets du ruban. Voir [Sites, bâtiments et niveaux](topic:site-building-and-levels).
- **Cotes de trame sur le plan.** Avec l'outil {{ui:Grille}} activé, cochez {{ui:Cotes}} pour dessiner l'écart entre lignes voisines et l'encombrement total au-delà des bulles, sur le plan de chaque niveau. Voir [Coter une trame](topic:grid-dimensions).
- **Mesurer sur le plan.** {{ui:Mesurer}} dans le groupe {{ui:Dessin}} donne une distance avec les écarts X et Y entre deux clics. Rien n'est enregistré dans le modèle. Voir [Mesurer sur le plan](topic:measure-on-the-plan).
- **Modifier plusieurs colonnes à la fois.** Sélectionnez des colonnes avec un mur : la liste de choix affiche chaque type avec {{ui:Ne garder que ceux-ci}}. Un clic garde les colonnes et affiche leurs champs communs.
- **Une seule unité d'affichage partout.** Coordonnées, mesures, coupes, échelles de feuille, onglets des charges et résultats de l'ossature, et texte des Problèmes suivent l'unité choisie. Les exports restent en SI.

### Vues, feuilles et impression

- **Style de travail.** {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Style de travail}} choisit si chaque vue a ses propres annotations et tables de plumes, ou si elles sont partagées. Voir [Style de travail, vues dupliquées, plumes sur papier, Déclarer comme et gabarits](topic:working-style).
- **Dupliquer une vue.** Plans, plans de plafond, renvois, élévations et coupes peuvent être dupliqués en {{ui:Copie propre}} ou {{ui:Lié}} ; {{ui:Rendre la copie propre}} rend indépendante une vue liée. Voir [Style de travail, vues dupliquées, plumes sur papier, Déclarer comme et gabarits](topic:working-style).
- **Impression telle qu'affichée, ou par table de plumes.** Les réglages de plumes sont conservés dans l'IFC avec la vue, et les feuilles et les PDF les dessinent comme l'écran. Le même sujet couvre les tables de plumes.
- **Déclarer comme.** {{ui:Déclarer comme}} dans {{ui:Propriétés}} écrit une dalle dessinée comme une route, un mur comme un panneau ou une toiture comme une rampe dans l'IFC, dans la classe choisie, et la compte ainsi dans les nomenclatures, les quantités, Rechercher, Colorer par et Problèmes.
- **Modifier en élévation et en coupe.** Dessinez et déplacez murs, ouvertures, niveaux, cotes et notes directement dans une élévation ou une coupe, avec vos propres formats de feuille et cartouches. Voir [Modifier en élévation et en coupe](topic:edit-in-elevations).
- **Feuilles.** Chaque feuille peut être en paysage ou en portrait. Une zone {{ui:Saisissez une échelle}} se trouve à côté de la liste des échelles sur chaque vue placée (1:64, 2:1, 1/4" = 1'). Vous pouvez faire glisser un dessin placé ou le déplacer avec les touches fléchées, et {{ui:Formats…}} › {{ui:Importer un SVG…}} transforme votre propre dessin de feuille en cartouche, avec des champs saisis par feuille.
- **Crédits de bibliothèque sur une feuille.** Un jeu de dessins avec des éléments de bibliothèque obtient un tableau des crédits de bibliothèque que vous pouvez placer sur n'importe quelle feuille. Voir [Crédits de bibliothèque](topic:library-credits).

### Bibliothèque : placement

- **Le placement suit la vue.** Dans la vue Plan, la {{ui:Bibliothèque}} affiche {{ui:Placer sur le plan}} ; en 3D, elle affiche {{ui:Placer dans le modèle}} ; en mode {{ui:Diviser}}, elle affiche un bouton scindé avec {{ui:Placer sur le plan}} comme action principale. Les deux méthodes écrivent le même élément IFC. Vous pouvez aussi faire glisser une carte de la Bibliothèque sur le plan ou la vue 3D ; avec un stylet ou un doigt, maintenez appuyé puis faites glisser. Voir [Placer depuis la Bibliothèque](topic:place-from-library).

### Fichiers et assistants

- **Collada et Google Earth.** {{ui:Collada}} dans la barre d'outils (menu Fichier selon les styles de menu) écrit un .dae, ou un .kmz placé à l'endroit du modèle sur la carte. Voir [Exporter le modèle en Collada ou pour Google Earth](topic:collada).
- **Les assistants peuvent placer des appareils électriques.** Votre assistant connecté dispose de nouveaux outils pour ajouter, lister, modifier et supprimer des appareils et régler les luminaires. Les assistants restent désactivés tant que vous ne les activez pas dans {{ui:Paramètres}}. Voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).
- **Scan vers BIM (module complémentaire).** Désactivé par défaut ; nécessite le module Nuages de points. Il propose des planchers, murs, portes et fenêtres à partir d'un scan, avec l'écart mesuré pour chacun ; accepter tient en une seule étape d'annulation.

### Analyse

- **Données de site pour le vent et le séisme.** Dans l'onglet {{ui:Analyse}} : charges de vent selon ASCE 7-10 ou 7-16 pour un bâtiment fermé rigide, avec une force sur chaque niveau comme cas de charge, et données de site sismique avec une recherche USGS et le spectre de calcul.
- **Suivi structurel et éléments finis.** Vérifications du béton selon ACI 318-19, forces latérales équivalentes selon ASCE 7-22, dérive d'étage, dalles et murs en plaques, et combinaisons de charges selon ASCE 7 et EN 1990. Notre propre moteur d'éléments finis gère les coques, les tétraèdres et l'analyse modale. Voir [Vérifier les éléments en béton et établir les charges sismiques](topic:concrete-and-seismic) et [Analyse de portiques](topic:frame-analysis).

### Autres modules et documents

- **Éclairage intérieur (module complémentaire).** Place des luminaires et écrit le lux en chiffres sur le plan de chaque niveau, avec une estimation de l'éblouissement et un rapport imprimable.
- **Volet Documents.** {{ui:File}} › {{ui:Documents…}} propose l'extraction et la restitution avec un fichier de verrouillage, des lettres de révision, des états de diffusion et un historique.
- **Régions et acier.** Lots de dessins et de réglementation de construction sud-africains dans le module Réglementation, et 976 profilés acier britanniques dans la table de sections partagée.
- **Modules gratuits d'impression résine.** Trancheur, supports et radeau, test d'exposition, et les formats de fichier GOO, SL1, Chitubox et Anycubic, tous désactivés par défaut.

## Dans toutes les applications

- Survoler un bouton ou une commande affiche une info-bulle Bootstrap.
- L'astuce de départ sur une zone de dessin vide a un bouton de fermeture ; BimCraft se souvient qu'elle a été fermée.
- La barre d'onglets d'un panneau qui ne tient pas défile désormais au lieu d'être coupée.
- Avec un document ouvert, l'onglet du navigateur affiche « <document> - BimCraft | CadCraft ».
- Dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Disposition}}, les dispositions sont une liste déroulante de choix sur deux lignes.
- La liste des langues dans {{ui:Paramètres}} propose plus de langues qu'en 0.8 ; les langues autres que l'anglais sont des brouillons automatiques.

## Corrigé

- **Déplacer fonctionne sur les escaliers**, ainsi que sur les rampes, garde-corps, plans de toiture, appareils indépendants, images et tracés.
- **Faire glisser un mur ne déforme plus la pièce.** La poignée centrale déplace le mur d'équerre par rapport à lui-même, et ses angles glissent le long des murs joints. Maintenez {{key:Mod}} pour l'ancien déplacement libre ; {{ui:Mettre d'équerre}} rétablit 90 degrés.
- **Changer l'épaisseur ou le type à un nœud joint** conserve désormais l'angle fermé en L, en T, au nœud à trois murs et contre un mur courbe.
- **Déplacer ou copier un groupe de pièces** conserve joints les murs situés hors du groupe.
- **Rétablir conserve l'identité d'une cote de mur.**
- **Choisir un mur avec Dessin désactivé** ne produit plus d'erreur dans Propriétés.
- **Le rendu bascule sur WebGL** quand le GPU ne peut pas démarrer, au lieu de s'arrêter.
- **La vérification EnergyPlus** peut à nouveau être activée.
- **Documents s'ouvre comme une boîte de dialogue centrée.** {{key:Esc}}, la croix (X) ou un clic sur la page grisée la ferme.
- **Les boutons {{ui:Plan}}, {{ui:Diviser}} et {{ui:3D}} apparaissent** dès qu'un modèle est ouvert, et non seulement après avoir activé Dessin une fois.

## Limites à connaître

- Rien n'a été imprimé sur du matériel réel. Les supports en résine sont nouveaux et non éprouvés.
- Les résultats de vent, de séisme, de béton et d'éléments finis sont des aides de vérification pour un ingénieur, contrôlées par des formules fermées, et non sur un vrai bâtiment.
- Scan vers BIM a été testé sur un bâtiment synthétique, et non sur un vrai scan, et ne trouve que des pièces rectilignes.
- Collada n'a pas été ouvert ici dans Blender ni dans Google Earth.
- L'estimation d'éclairage est contrôlée par notre propre tracé, et non par d'autres logiciels d'éclairage.
- Les chiffres sud-africains ne sont pas vérifiés.
- Les styles de jonction de mur (bout à bout, onglet, arasé) et la priorité des calques ne sont pas réalisés ; les angles sont en onglet.
- Les langues autres que l'anglais sont des brouillons automatiques.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Les changements antérieurs se trouvent dans les notes 0.8 et 0.8.1 plus bas sur cette page.

## Plus tôt : 0.8 et 0.8.1

Ce qui a changé dans BimCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. BimCraft peut désormais répondre à des questions sur un bâtiment et le tester, avec des personnes, du son, de l'eau, du vent et des séismes, et le dessiner avec davantage d'outils ; la 0.8.1 est une version de correction.

### Nouveautés

**Tester le bâtiment**

- **Personnes dans le bâtiment.** La section {{ui:Personnes dans le bâtiment}} du panneau de gauche fait traverser au bâtiment une évacuation ou une journée normale d'arrivées, par vos pièces, portes et escaliers. Vous voyez les files d'attente là où le bâtiment se rétrécit, le plus long trajet vers une sortie depuis chaque pièce et le temps que met la dernière personne. Cochez {{ui:Fermée}} sur une porte pour voir ce qui change, et cochez {{ui:Afficher les personnes dans la vue 3D}} pour suivre les marcheurs. Les constats vont dans Problèmes. C'est un modèle grossier de foule pour des décisions de conception, et non un certificat de sécurité incendie. Voir [Faire traverser le bâtiment aux personnes](topic:people-in-the-building).
- **Acoustique des pièces, et écoute.** La section {{ui:Acoustique des pièces}} donne le temps de réverbération de chaque pièce par bande d'octave (Sabine et Eyring) à partir de sa taille et des finitions choisies ; avec une cible de votre choix, elle indique quelle absorption suffirait pour l'atteindre. {{ui:Le jouer dans cette pièce}} joue une voix, un claquement, des notes pincées ou votre propre fichier sonore à travers une réponse impulsionnelle calculée pour la pièce. Les valeurs d'absorption sont des valeurs publiées typiques, à remplacer. Voir [Acoustique des pièces](topic:room-acoustics).
- **Lecture des inondations, du vent et des séismes.** {{ui:Simulation de risque}} fait monter l'eau dans les pièces, applique la pression du vent sur chaque niveau et fait trembler les niveaux lors d'un séisme, sur un plan ou une élévation avec un curseur temporel. Modèles simples, avec leurs hypothèses dans le panneau ; ce n'est pas une vérification réglementaire. Voir [Simuler une inondation, du vent ou un séisme](topic:hazard-playback).
- **Ce qui s'use en cinquante ans.** {{ui:Vue sur le cycle de vie}} liste les fenêtres, portes, finitions et la toiture avec une durée de vie chacune, les années de remplacement et, si vous saisissez un coût unitaire, le coût par année et sa valeur actuelle. {{ui:Enregistrer le planning (CSV)}} l'exporte. Les durées de vie sont des valeurs de planification. Voir [Voir ce qui s'use sur cinquante ans](topic:life-cycle-view).
- **Vérifications du béton et du séisme.** Les blocs {{ui:Éléments en béton}} et {{ui:Charges sismiques}} de l'onglet {{ui:Analyse}} vérifient les poutres et poteaux en béton selon ACI 318-19 et calculent les forces latérales équivalentes selon ASCE 7-22 sur planchers rigides, avec la dérive d'étage. Ces résultats sont à faire vérifier par un ingénieur. Voir [Vérifier les éléments en béton et établir les charges sismiques](topic:concrete-and-seismic).

**Vérifier et rendre compte**

- **Vérifier avec un IDS.** Chargez le fichier `.ids` que vous a remis un client et voyez dans Problèmes chaque élément qui ne le respecte pas, avant de livrer l'IFC. Ouvrez {{ui:Vérifier avec un IDS}} sous {{ui:Contrôles du modèle}}. Voir [Vérifier un modèle avec l'IDS d'un client](topic:check-against-ids).
- **Étiquettes et nomenclatures.** Définissez vos propres étiquettes, affectez-les à de nombreux éléments d'un coup et créez des nomenclatures dont les colonnes, filtres et regroupements les lisent ; les étiquettes sont conservées dans l'IFC. Voir [Étiquettes et nomenclatures](topic:tags-and-schedules).
- **Documents issus du modèle.** {{ui:Documents issus du modèle}} remplit un gabarit de spécification à partir de l'IFC ouvert et l'enregistre en PDF, en document Word ou en Markdown. Voir [Documents issus du modèle](topic:documents-from-the-model).
- **Comparer un scan avec le modèle.** Avec un nuage de points ouvert, {{ui:Comparer}} juge chaque élément comme construit, partiellement construit, manquant ou non atteint, et affiche le pourcentage construit. Voir [Comparer un scan avec le modèle](topic:compare-scan-with-model).
- **Carbone et coût.** Le volet Carbone additionne le carbone incorporé à partir d'un tableau de facteurs modifiable, et le volet Coût répartit les prix sur le planning 4D. Les facteurs fournis avec BimCraft sont génériques et marqués non vérifiés. Voir [Carbone incorporé et coût](topic:embodied-carbon-and-5d-cost).
- **Toute projection cartographique.** {{ui:Mesurer}} › {{ui:Système de coordonnées…}} accepte un numéro EPSG, une zone UTM, un nom ou votre propre définition de projection. Voir [Géoréférencer avec n'importe quelle projection](topic:georeference-any-projection).

**Dessiner et modifier**

- **Déplacer, Aligner et Répartir.** Sous {{ui:Build}} ; {{key:Shift+M}} lance Déplacer (la touche {{key:M}} seule reste Mesurer). Déplacer copie au fil du geste avec {{key:C}}, chaque étape est une annulation, et l'opération se propage dans une session Live TeamWork. Voir [Déplacer, copier, aligner et répartir](topic:move-align-distribute).
- **Images sous le plan.** {{ui:Build}} › {{ui:Image}} place un PNG, JPEG ou WebP sous le plan d'un niveau ou sur un plan vertical. Réglez l'échelle par deux points, puis déplacez, tournez, estompez et verrouillez-la. Une zone copiée dans MarkupCraft se colle à l'échelle de sa feuille. Voir [Placer une image sous le plan](topic:pictures-as-backgrounds).
- **Murs depuis un scan.** Avec un scan ouvert, murs, portes et pièces arrivent en propositions que vous gardez ou rejetez une à une, en une seule étape d'annulation. Seuls les murs dans deux directions perpendiculaires sont trouvés. Voir [Transformer un scan en murs](topic:scan-to-walls).
- **Calquer, plumes et esquisse d'escalier.** {{ui:Calquer}} affiche un autre niveau en pointillé sous le plan, {{ui:Plumes}} donne aux murs, portes et fenêtres leur propre épaisseur de trait dans une même vue, et {{ui:Esquisser un escalier}} transforme une ligne de parcours en escalier. Un maillage Wavefront OBJ s'ouvre. Voir [Calquer un niveau, plumes et escalier depuis une esquisse](topic:trace-pens-stairs-obj).
- **Bâtiments autour d'une adresse.** Les bâtiments et la parcelle trouvés par Adresse vers site de CivilCraft arrivent en suggestions ; cochez ceux que vous voulez ajouter. Voir [Partir du site de CivilCraft](topic:site-from-civilcraft).
- **Plans de panneaux.** {{ui:Build}} › {{ui:Plans de panneaux}} encadre murs, planchers et toitures en bois ou en acier léger et enregistre une liste de débit en CSV et des plans d'atelier en PDF. Ce sont des valeurs de départ, et non un calcul de structure. Voir [Plans de panneaux](topic:panel-drawings).
- **Palette de symboles et plantes.** {{ui:Build}} › {{ui:Palette de symboles}} trouve les symboles électriques et de plomberie par nom ; la source {{ui:Plantes}} de la {{ui:Bibliothèque}} liste environ 400 plantes avec leurs symboles de plan. Voir [Palette de symboles](topic:symbol-palette) et [Placer une plante](topic:plant-list).

**Tuyaux, gaines et énergie**

- **Split, VRF et ventilo-convecteurs.** Unités intérieures et extérieures avec leurs raccordements, et lignes de liaison dimensionnées à partir d'une table de valeurs typiques d'exemple que vous pouvez modifier. Voir [Split, VRF et ventilo-convecteurs](topic:split-vrf-fan-coils).
- **Calculs.** Le volet Calculs vérifie le dimensionnement des tuyauteries d'alimentation et des gaines avec la perte de charge, fait passer les câbles dans les chemins de câbles et conduits et montre leur taux de remplissage, et calcule l'éclairement à partir de fichiers IES ou EULUMDAT. Les valeurs par défaut sont signalées ; saisissez les valeurs de votre norme. Voir [Calculs de tuyaux, gaines, câbles et éclairage](topic:mep-calculations).
- **Fichiers PCF.** La commande **Exporter PCF** de l'outil Tuyau écrit les tronçons pour les logiciels de contraintes de tuyauterie et d'isométrie, et un fichier PCF relu redessine ses tuyaux. Voir [Fichiers de composants de tuyauterie](topic:piping-pcf).
- **PV solaire.** Installez des champs sur les toitures ou au sol, calculez leur ombrage à partir du modèle, estimez l'énergie annuelle, vérifiez les chaînes et produisez les données de schéma unifilaire. Le module de départ et les pertes sont génériques. Voir [PV solaire](topic:solar-pv).
- **Fichier EnergyPlus.** Le volet Vérifier avec EnergyPlus écrit le modèle en IDF à exécuter dans votre propre EnergyPlus. L'exécuter dans le navigateur nécessite une version que vous hébergez et dont vous saisissez l'adresse ; BimCraft ne la fournit pas. Voir [Vérifier le chauffage et la climatisation avec EnergyPlus](topic:check-with-energyplus).

**Images et fichiers**

- **Choisir le moteur de rendu.** {{ui:Rendu}} a un choix {{ui:Moteur}}. Nos deux moteurs intégrés (Rapide et Traceur de chemin) restent par défaut. {{ui:Ouvrir dans}} enregistre la scène en fichier USD ou glTF, et un dossier de projet Unreal en .zip ; dans CadCraft Studio, un module complémentaire peut ajouter un moteur. Le module d'extension Unreal qui ouvre le projet n'est pas publié. Voir [Choisir le logiciel qui dessine l'image](topic:render-engines).
- **Annulation dans Studio.** Dans CadCraft Studio, BimCraft signale à Studio chaque étape terminée, afin que Studio annule votre dernière étape dans la fenêtre que vous avez utilisée en dernier. Voir [Annuler entre les applications](topic:undo-across-apps).
- **Modules dans votre fichier.** Un IFC enregistre les modules complémentaires qui y ont écrit, et propose ceux qui vous manquent à l'ouverture. Voir [Modules complémentaires dans votre fichier](topic:add-ons-in-your-file).

**Dans toutes les applications**

- **Connectez votre IA.** Votre propre assistant peut piloter BimCraft via la connexion de Studio et répondre à des questions sur le modèle, par exemple quelles pièces se trouvent sous une surface donnée. Studio n'a pas d'IA propre. Voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Retour à la ligne, 2 lignes ou 1 ligne ; Retour à la ligne reste la valeur par défaut.
- **Périphériques de saisie.** Les réglages du pavé tactile, du stylet, de la souris 3D, de la manette et du MIDI sont communs à toutes les applications.
- **Problèmes et Live.** Le panneau des avertissements et les sessions Live fonctionnent comme avant ; les nouvelles vérifications ci-dessus alimentent Problèmes.
- **Langues.** 54 langues, dont dix nouvelles. Celles autres que l'anglais sont des brouillons automatiques pas encore relus par un locuteur natif ; les rubriques d'aide sont surtout en anglais.

### Corrigé dans la 0.8.1

- **Disposition Ruban + Navigateur de projet.** Insérer › Importer CAD, Insérer › Image et Gérer › Unités du projet affichaient « Pas encore disponible dans BimCraft ». Image ouvre désormais l'outil Image, Importer CAD ouvre {{ui:Build}} › {{ui:Depuis un dessin…}} (DWG, DXF, PDF ou un scan), et Unités du projet ouvre {{ui:Paramètres}} › {{ui:Global}} › {{ui:Unités}}. Déplacer et Aligner lancent leurs outils, Niveau ouvre {{ui:Ajouter des niveaux…}}, Phases ouvre la section Phases de rénovation, et Matériaux ouvre la bibliothèque de matériaux.
- **Section des classes DWG.** Elle était lue avec le mauvais type ; corrigé dans BimCraft et dans les autres applications qui lisent le DWG.
- **Langue à l'exécution.** Studio et les éditions packagées peuvent désormais changer de langue sans redémarrage. Ce n'est pas encore testé sur toutes les plates-formes ; dites-nous si la langue ne change pas.
- **Script de bundle Archicad.** `archicad_bundle.py`, téléchargement séparé, trouve désormais le chemin d'Archicad, surveille le dossier jusqu'à 20 secondes et réessaie à côté du bundle.

### Pas encore disponible dans cette version

- **Aides à la sécurité et à la conception.** Personnes dans le bâtiment n'a pas de limite de distance de parcours issue d'un code du bâtiment (vous saisissez la limite) et n'a pas été vérifié à la main sur un vrai plan. Les chiffres d'acoustique, de cycle de vie et de risque sont des valeurs de planification, et non une vérification réglementaire.
- **Scénarios climatiques et EnergyPlus.** Pas de scénarios climatiques intégrés : vous pouvez charger un fichier de scénario pour le calcul d'inondation. Le calcul EnergyPlus dans le navigateur ne fait pas partie de cette version.
- **Disposition du ruban.** Le Métré des matériaux reste « Pas encore disponible », car BimCraft n'a pas de liste de quantités de matériaux, et 54 autres outils grisés du ruban n'ont pas encore d'outil BimCraft derrière eux.
- **Signature et plates-formes.** Les installateurs Windows et le .dmg macOS ne sont pas signés ; SmartScreen affiche {{ui:Plus d'infos}}, puis {{ui:Exécuter quand même}}, et macOS demande un clic droit puis {{ui:Ouvert}}. Le build iPad et iPhone n'a pas été reconstruit pour la 0.8.1.
- **Tests dans le navigateur réel.** Certains anciens tests du navigateur BimCraft échouent encore sur notre page de test, comme avant la 0.8.1.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Les changements antérieurs figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
