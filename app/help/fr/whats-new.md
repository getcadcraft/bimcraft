---
title: Nouveautés de la version 0.9
summary: Formes de murs, découpe, décalage, étirement et verrouillage à la trame, niveaux sous le sol, cotes de trame et Mesurer sur le plan, vues dupliquées avec styles de travail et tables de plumes, Déclarer comme, export Collada et Google Earth, Scan vers BIM, analyses du vent et sismique, modules d'impression en résine.
keywords: nouveautés, 0.9, notes de version, formes de murs, rectangle, polygone, arc, lignes choisies, tracer un contour, décalage, jonction, étirement par cadre, aligner, diviser un mur, écart, rattacher, verrouillage à la trame, agrandir à partir de, mesurer depuis, ajouter un niveau en dessous, sous-sol, niveau, cotes de trame, mesurer sur le plan, style de travail, vue dupliquée, copie propre, table de plumes, imprimer tel qu'affiché, déclarer comme, saisir une échelle, importer svg, placer sur le plan, placer dans le modèle, collada, dae, kmz, google earth, scan vers bim, charge de vent, sismique, éléments finis, documents, impression en résine, changements, 0.8, 0.8.1, version, nouvelles fonctions, évacuation, personnes, files d'attente, acoustique, réverbération, réponse impulsionnelle, inondation, vent, séisme, risque, cycle de vie, durée de vie, ids, repères, nomenclatures, déplacer, aligner, répartir, image, fond de plan, scan vers murs, site de civilcraft, plans de panneaux, ossature, solaire, photovoltaïque, split, vrf, ventilo-convecteur, dimensionnement des tuyaux, chemin de câbles, éclairement, béton, comparer un scan, epsg, projection, gabarit, carbone, coût, energyplus, moteur de rendu, ouvrir dans, usd, glb, unreal, annuler, modules, pcf, symboles, plantes, tracer, plumes, ruban, explorateur de projet, disposition
from: 5624fe88
---

Voici ce qui a changé dans BimCraft 0.9 par rapport à la 0.8.1. Les deux grands axes sont un véritable outil Mur et des vues qui se comportent comme les attendent les personnes venant des grands logiciels BIM. S'y ajoutent l'export Collada, des assistants capables de placer des appareils électriques, Scan vers BIM, et les calculs de vent, sismique et éléments finis dans l'onglet {{ui:Analyse}}.

## Nouveautés

### Murs

- **Dessiner des formes entières.** Dans {{ui:Dessin}}, ouvrez {{ui:Formes}} (ou choisissez une forme dans la liste **Forme** de la ligne Mur) pour un rectangle, un rectangle incliné, un polygone de 3 à 64 côtés, un arc par centre, un arc tangent, des murs sur des lignes choisies, ou des murs autour d'une zone fermée sur laquelle vous cliquez. Un rectangle compte quatre murs aux quatre angles joints, en une seule étape d'annulation. Voir [Formes de murs, découpe, décalage, étirement et verrouillage](topic:wall-tools).
- **Régler avant de dessiner, modifier après.** La ligne Mur comporte {{ui:Décalage}} et {{ui:Jonction}} (décochez pour dessiner des murs autoportants). Ensuite, utilisez {{ui:Décalage}}, {{ui:Étirement par cadre}} et {{ui:Aligner et verrouiller}} sur les murs dessinés. Un mur déplacé ou étiré garde ses portes, fenêtres et cotes. Chaque recette est une seule étape d'annulation.
- **Découper des murs.** {{ui:Diviser}}, {{ui:Écart}}, {{ui:Extrémités libres}}, {{ui:Supprimer un segment}} et {{ui:Rattacher}} coupent un mur à un clic ou à l'endroit où un autre mur le croise. Une coupe à travers une porte est refusée. Voir [Formes de murs, découpe, décalage, étirement et verrouillage](topic:wall-tools).
- **Verrouiller des murs aux lignes de trame.** Sélectionnez un mur le long d'une ligne de trame et cochez {{ui:Verrouiller à la trame}} dans {{ui:Propriétés}}. Avec l'outil {{ui:Grille}} activé, saisissez une distance dans {{ui:Déplacer de}} pour une ligne choisie, et les murs verrouillés suivent en une seule étape d'annulation.
- **Façonner un mur.** Dans {{ui:Propriétés}} d'un mur, vous pouvez attacher son sommet ou sa base à une toiture, un plancher ou un plafond, modifier son contour d'élévation, l'incliner, ou découper une ouverture de mur sans porte ni fenêtre. Voir [Donner une forme à un mur](topic:wall-shape).
- **La longueur indique quelle extrémité reste fixe.** {{ui:Agrandir à partir de}} règle si le début, la fin ou le centre reste en place lorsque vous modifiez la longueur.
- **La longueur et la cote du plan concordent.** {{ui:Mesurer depuis}} (axe, face intérieure ou face extérieure) pilote à la fois le champ Longueur et les cotes de murs du plan. Par défaut, c'est l'axe : les cotes de murs du plan lisent désormais l'axe là où elles lisaient auparavant la face extérieure. Modifiez-le dans la ligne Mur, dans {{ui:Propriétés}} ou dans {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Murs}}.

### Niveaux, trames et mesures

- **Ajouter un niveau en dessous.** {{ui:Ajouter un niveau en dessous}} dans le panneau {{ui:Niveaux}} ajoute un niveau sous le plus bas, de même hauteur que lui, à une altitude négative (Niveau -1, Niveau -2). Rien d'autre ne bouge. {{ui:Ajouter des niveaux…}} accepte désormais des hauteurs négatives. Saisir LEVEL, LEVELS, STOREY ou STOREYS sur la ligne de commande ouvre {{ui:Ajouter des niveaux…}}, et un bouton {{ui:Niveaux}} figure dans les menus et les onglets du ruban. Voir [Sites, bâtiments et niveaux](topic:site-building-and-levels).
- **Cotes de trame sur le plan.** L'outil {{ui:Grille}} étant actif, cochez {{ui:Cotes}} pour dessiner l'entraxe entre lignes voisines et la dimension hors bulles, sur le plan de chaque niveau. Voir [Coter une trame](topic:grid-dimensions).
- **Mesurer sur le plan.** {{ui:Mesurer}} dans le groupe {{ui:Dessin}} donne une distance avec les écarts X et Y entre deux clics. Rien n'est enregistré dans le modèle. Voir [Mesurer sur le plan](topic:measure-on-the-plan).
- **Modifier plusieurs colonnes à la fois.** Désignez des colonnes avec un mur : la sélection liste chaque type avec {{ui:Ne garder que ceux-ci}}. Un clic conserve les colonnes et affiche leurs champs communs.
- **Une seule unité d'affichage partout.** Les coordonnées, mesures, coupes, échelles de feuille, les charges et résultats de l'onglet Cadre et le texte des Problèmes suivent l'unité que vous choisissez. Les exports restent en SI.

### Vues, feuilles et impression

- **Style de travail.** {{ui:Paramètres}} › {{ui:BimCraft}} › {{ui:Style de travail}} choisit entre une annotation et des tables de plumes propres à chaque vue, ou partagées. Voir [Style de travail, vues dupliquées, plumes sur papier, Déclarer comme et modèles](topic:working-style).
- **Dupliquer une vue.** Les plans, plans de plafond, vues de détail, élévations et coupes peuvent être dupliqués en {{ui:Copie propre}} ou {{ui:Lié}} ; {{ui:Rendre la copie propre}} rend indépendante une copie liée. Voir [Style de travail, vues dupliquées, plumes sur papier, Déclarer comme et modèles](topic:working-style).
- **Imprimer tel qu'affiché, ou via une table de plumes.** Les remplacements de plumes sont conservés dans l'IFC avec la vue, et les feuilles et PDF les dessinent comme l'écran. La même rubrique couvre les tables de plumes.
- **Déclarer comme.** {{ui:Déclarer comme}} dans {{ui:Propriétés}} écrit une dalle dessinée comme une route, un mur comme un panneau ou une toiture comme une rampe dans l'IFC, selon la classe que vous choisissez, et la compte ainsi dans les nomenclatures, Quantités, Rechercher, Colorer par et Problèmes.
- **Modifier dans les élévations et les coupes.** Dessinez et déplacez murs, ouvertures, niveaux, cotes et notes directement dans une élévation ou une coupe, avec vos propres formats de feuille et cartouches. Voir [Modifier dans les élévations et les coupes](topic:edit-in-elevations).
- **Feuilles.** Chaque feuille peut être en paysage ou en portrait. Une zone {{ui:Saisissez une échelle}} se trouve à côté de la liste des échelles de chaque vue placée (1:64, 2:1, 1/4" = 1'). Vous pouvez faire glisser un dessin placé ou le décaler avec les touches fléchées, et {{ui:Formats…}} › {{ui:Importer un SVG…}} transforme votre propre dessin de feuille en cartouche, avec des champs saisis pour chaque feuille.
- **Mentions des éléments de bibliothèque sur une feuille.** Un jeu de dessins comportant des éléments de bibliothèque reçoit une nomenclature des mentions d'attribution que vous pouvez placer sur n'importe quelle feuille. Voir [Mentions de bibliothèque](topic:library-credits).

### Bibliothèque : placement

- **Le placement suit la vue.** Dans la vue Plan, la Bibliothèque affiche {{ui:Placer sur le plan}} ; en 3D, elle affiche {{ui:Placer dans le modèle}} ; en Diviser, elle affiche un bouton scindé dont l'action principale est {{ui:Placer sur le plan}}. Les deux méthodes écrivent le même élément IFC. Vous pouvez aussi glisser une carte de la Bibliothèque sur le plan ou la vue 3D ; avec un stylet ou un doigt, appuyez longuement, puis faites glisser. Voir [Placer depuis la Bibliothèque](topic:place-from-library).

### Fichiers et assistants

- **Collada et Google Earth.** {{ui:Collada}} dans la barre d'outils (menu {{ui:Fichier}} dans les styles de menu) écrit un .dae, ou un .kmz placé là où se trouve le modèle sur la carte. Voir [Exporter le modèle en Collada ou pour Google Earth](topic:collada).
- **Les assistants peuvent placer des appareils électriques.** Votre assistant connecté dispose de nouveaux outils pour ajouter, lister, modifier et supprimer des appareils et régler l'éclairage. Les assistants restent désactivés tant que vous ne les activez pas dans {{ui:Paramètres}}. Voir [Laisser un assistant IA travailler sur votre modèle](topic:assistants).
- **Scan vers BIM (module).** Désactivé par défaut et nécessite le module Nuages de points. Il propose des planchers, murs, portes et fenêtres à partir d'un scan, avec l'écart mesuré pour chacun ; accepter est une seule étape d'annulation.

### Analyse

- **Données de site pour le vent et le séisme.** Dans l'onglet {{ui:Analyse}} : charges de vent selon l'ASCE 7-10 ou 7-16 pour un bâtiment fermé rigide, avec une force sur chaque niveau en tant que cas de charge, et données sismiques de site avec une consultation USGS et le spectre de calcul.
- **Suivi structurel et éléments finis.** Vérifications du béton selon l'ACI 318-19, forces latérales équivalentes selon l'ASCE 7-22, dérive d'étage, dalles et murs en plaques, et combinaisons de charges selon l'ASCE 7 et l'EN 1990. Notre propre moteur d'éléments finis traite les coques, les tétraèdres et l'analyse modale. Voir [Vérifier des éléments en béton et calculer les charges sismiques](topic:concrete-and-seismic) et [Analyse de portique](topic:frame-analysis).

### Autres modules et documents

- **Éclairage intérieur (module).** Place des luminaires et écrit les lux sous forme de nombres dans le plan de chaque niveau, avec une estimation de l'éblouissement et un rapport imprimable.
- **Panneau Documents.** {{ui:Fichier}} › {{ui:Documents…}} propose l'extraction et la réintégration avec un fichier de verrouillage, des lettres de révision, des états de diffusion et un historique.
- **Régions et acier.** Des jeux de dessins et de règles de construction sud-africains dans le module Réglementations, et 976 dimensions d'acier britanniques dans la table de sections partagée.
- **Modules gratuits d'impression en résine.** Trancheur, supports et radeau, test d'exposition, et les formats de fichiers GOO, SL1, Chitubox et Anycubic, tous désactivés par défaut.

## Dans toutes les applications

- Survoler un bouton ou une commande affiche une info-bulle Bootstrap.
- L'astuce de démarrage sur une zone de dessin vide a un bouton de fermeture ; BimCraft se souvient qu'elle a été fermée.
- La barre d'onglets d'un panneau qui ne tient pas défile désormais au lieu d'être coupée.
- Lorsqu'un document est ouvert, l'onglet du navigateur affiche « <document> - BimCraft | CadCraft ».
- Dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Disposition}}, les dispositions forment une liste déroulante de choix sur deux lignes.
- La liste des langues dans {{ui:Paramètres}} propose davantage de langues qu'en 0.8 ; les langues autres que l'anglais sont des brouillons automatiques.

## Corrigé

- **Déplacer fonctionne sur les escaliers,** ainsi que sur les rampes, garde-corps, plans de toiture, appareils autoportants, images et tracés.
- **Faire glisser un mur ne déforme plus la pièce.** La poignée centrale déplace le mur d'équerre à lui-même, et ses angles glissent le long des murs joints. Maintenez {{key:Mod}} pour l'ancien déplacement libre ; {{ui:Mettre d'équerre}} rétablit les 90 degrés.
- **Un changement d'épaisseur ou de type à un nœud joint** conserve désormais l'angle fermé en L, en T, à un nœud de trois murs et à côté d'un mur courbe.
- **Déplacer ou copier un groupe de pièces** conserve joints les murs joints situés hors du groupe.
- **Le rétablissement conserve l'identité d'une cote de mur.**
- **Désigner un mur avec Dessin désactivé** n'affiche plus d'erreur dans Propriétés.
- **Le rendu bascule sur WebGL** lorsque le processeur graphique ne peut pas démarrer, au lieu de s'arrêter.
- **La vérification EnergyPlus peut à nouveau être activée.**
- **Documents s'ouvre dans une boîte de dialogue centrée.** {{key:Esc}}, la croix ou un clic sur la page estompée la ferme.
- **Les boutons {{ui:Plan}}, {{ui:Diviser}} et {{ui:3D}} s'affichent** dès qu'un modèle est ouvert, et non seulement après qu'on a activé Dessin une fois.

## Limites

- Rien n'a été imprimé sur du matériel réel. Les supports en résine sont nouveaux et non éprouvés.
- Les résultats de vent, de séisme, de béton et d'éléments finis sont des aides à la vérification pour un ingénieur, contrôlées par des formules fermées, et non par un bâtiment réel.
- Scan vers BIM a été testé sur un bâtiment synthétique, et non sur un scan réel, et ne trouve que des pièces rectilignes.
- Collada n'a pas été ouvert ici dans Blender ni dans Google Earth.
- L'estimation d'éclairage est contrôlée par rapport à notre propre tracé, et non par rapport à d'autres logiciels d'éclairage.
- Les chiffres sud-africains ne sont pas vérifiés.
- Les styles de jonction de murs (bout à bout, onglet, rendre d'équerre) et la priorité des couches ne sont pas encore disponibles ; les angles sont en onglet.
- Les langues autres que l'anglais sont des brouillons automatiques.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Les modifications antérieures figurent dans les notes des versions 0.8 et 0.8.1 plus bas sur cette page.

## Antérieures : 0.8 et 0.8.1

Voici ce qui a changé dans BimCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. BimCraft peut désormais répondre à des questions sur un bâtiment et le tester, avec des personnes, le son, l'eau, le vent et les séismes, et le dessiner avec davantage d'outils ; la 0.8.1 est une version de correction.

### Nouveautés

**Tester le bâtiment**

- **Personnes dans le bâtiment.** La section {{ui:Personnes dans le bâtiment}} du panneau de gauche fait parcourir à travers vos pièces, portes et escaliers une évacuation ou les arrivées d'une journée normale. Vous voyez les files d'attente là où le bâtiment se rétrécit, le plus long trajet vers une sortie depuis chaque pièce et le temps que met la dernière personne. Cochez {{ui:Fermée}} sur une porte pour voir ce qui change, et cochez {{ui:Afficher les personnes dans la vue 3D}} pour voir les marcheurs. Les constats vont dans Problèmes. Un modèle de foule grossier pour les décisions de conception, pas un certificat de sécurité incendie. Voir [Faire parcourir le bâtiment par des personnes](topic:people-in-the-building).
- **Acoustique des pièces, et l'écouter.** La section {{ui:Acoustique des pièces}} donne le temps de réverbération de chaque pièce par bande d'octave (Sabine et Eyring) à partir de sa taille et des finitions choisies, et avec une cible de votre choix indique quelle absorption permettrait de l'atteindre. {{ui:Le jouer dans cette pièce}} joue une voix, un claquement, des notes pincées ou votre propre fichier sonore à travers une réponse impulsionnelle calculée pour la pièce. Les valeurs d'absorption sont des valeurs publiées typiques, à remplacer. Voir [Acoustique des pièces](topic:room-acoustics).
- **Lecture des inondations, du vent et des séismes.** {{ui:Simulation de risque}} fait monter l'eau dans les pièces, agir la pression du vent sur chaque niveau et trembler les niveaux lors d'un séisme, sur un plan ou une élévation avec un curseur temporel. Modèles simples, leurs hypothèses figurent dans le panneau ; ce n'est pas une vérification réglementaire. Voir [Lire une inondation, du vent ou un séisme](topic:hazard-playback).
- **Ce qui s'use en cinquante ans.** {{ui:Vue sur le cycle de vie}} liste les fenêtres, portes, finitions et la toiture, chacun avec une durée de vie, les années de remplacement et, lorsque vous saisissez un coût par unité, le coût par année et sa valeur actuelle. {{ui:Enregistrer le planning (CSV)}} l'écrit. Les durées de vie sont des valeurs de planification. Voir [Voir ce qui s'use en cinquante ans](topic:life-cycle-view).
- **Vérifications du béton et sismiques.** Les blocs {{ui:Éléments en béton}} et {{ui:Charges sismiques}} de l'onglet {{ui:Analyse}} vérifient les poutres et poteaux en béton selon l'ACI 318-19 et calculent les forces latérales équivalentes selon l'ASCE 7-22 sur planchers rigides, avec dérive d'étage. À vérifier par un ingénieur. Voir [Vérifier des éléments en béton et calculer les charges sismiques](topic:concrete-and-seismic).

**Vérifier et rapporter**

- **Vérifier avec un IDS.** Chargez le fichier `.ids` fourni par un client et voyez dans Problèmes chaque élément qui ne le respecte pas, avant de livrer l'IFC. Ouvrez {{ui:Vérifier avec un IDS}} sous {{ui:Contrôles du modèle}}. Voir [Vérifier un modèle par rapport à l'IDS d'un client](topic:check-against-ids).
- **Repères et nomenclatures.** Définissez vos propres étiquettes, affectez-les à plusieurs éléments à la fois et créez des nomenclatures dont les colonnes, filtres et regroupements les lisent ; les étiquettes sont conservées dans l'IFC. Voir [Étiquettes et nomenclatures](topic:tags-and-schedules).
- **Documents issus du modèle.** {{ui:Documents issus du modèle}} remplit un modèle de cahier des charges à partir de l'IFC ouvert et l'enregistre en PDF, en document Word ou en Markdown. Voir [Documents issus du modèle](topic:documents-from-the-model).
- **Comparer un scan avec le modèle.** Un nuage de points étant ouvert, {{ui:Comparer}} classe chaque élément comme construit, partiellement construit, manquant ou non atteint, et affiche le pourcentage construit. Voir [Comparer un scan avec le modèle](topic:compare-scan-with-model).
- **Carbone et coût.** Le volet Carbone additionne le carbone incorporé à partir d'une table de facteurs modifiable, et le volet Coût répartit les prix sur le calendrier 4D. Les facteurs fournis avec BimCraft sont génériques et marqués non vérifiés. Voir [Carbone incorporé et coût](topic:embodied-carbon-and-5d-cost).
- **Toute projection cartographique.** {{ui:Mesurer}} › {{ui:Système de coordonnées…}} accepte un numéro EPSG, une zone UTM, un nom ou votre propre définition de projection. Voir [Géoréférencer avec toute projection](topic:georeference-any-projection).

**Dessiner et modifier**

- **Déplacer, aligner et répartir.** Sous {{ui:Build}} ; {{key:Shift+M}} lance Déplacer (le simple {{key:M}} reste Mesurer). Déplacer copie au fil du geste avec {{key:C}}, chaque étape est une annulation, et l'opération circule dans une session Live TeamWork. Voir [Déplacer, copier, aligner et répartir](topic:move-align-distribute).
- **Images sous le plan.** {{ui:Build}} › {{ui:Image}} place un PNG, JPEG ou WebP sous le plan d'un niveau ou sur un plan vertical. Réglez l'échelle par deux points, puis déplacez, tournez, estompez et verrouillez-la. Une zone copiée dans MarkupCraft se colle à l'échelle de sa feuille. Voir [Placer une image sous le plan](topic:pictures-as-backgrounds).
- **Murs à partir d'un scan.** Un scan étant ouvert, les murs, portes et pièces arrivent sous forme de propositions que vous conservez ou rejetez une à une, en une seule étape d'annulation. Seuls les murs dans deux directions perpendiculaires sont trouvés. Voir [Transformer un scan en murs](topic:scan-to-walls).
- **Calque, plumes et esquisse d'escalier.** {{ui:Calquer}} affiche un autre niveau en pointillés sous le plan, {{ui:Plumes}} donne aux murs, portes et fenêtres leur propre épaisseur de trait dans une même vue, et {{ui:Esquisser un escalier}} transforme une ligne de déplacement en escalier. Un maillage Wavefront OBJ s'ouvre. Voir [Calquer un niveau, plumes et escalier à partir d'une esquisse](topic:trace-pens-stairs-obj).
- **Bâtiments autour d'une adresse.** Les bâtiments et la parcelle trouvés par « Adresse vers site » de CivilCraft arrivent sous forme de suggestions ; vous cochez ceux à ajouter. Voir [Partir du site de CivilCraft](topic:site-from-civilcraft).
- **Plans de panneaux.** {{ui:Build}} › {{ui:Plans de panneaux}} dessine l'ossature des murs, planchers et toitures en bois ou en acier léger, et enregistre une liste de coupe en CSV et des plans d'atelier en PDF. Valeurs de départ, pas un calcul de structure. Voir [Plans de panneaux](topic:panel-drawings).
- **Palette de symboles et plantes.** {{ui:Build}} › {{ui:Palette de symboles}} retrouve par leur nom les symboles électriques et de plomberie ; la source {{ui:Plantes}} de la {{ui:Bibliothèque}} liste environ 400 plantes avec leurs symboles de plan. Voir [Palette de symboles](topic:symbol-palette) et [Placer une plante](topic:plant-list).

**Tuyauteries, gaines et énergie**

- **Split, VRF et ventilo-convecteurs.** Unités intérieures et extérieures avec leurs raccordements, et liaisons frigorifiques dimensionnées à partir d'une table de valeurs types d'exemple que vous pouvez modifier. Voir [Split, VRF et ventilo-convecteurs](topic:split-vrf-fan-coils).
- **Calculs.** Le volet Calculs vérifie les dimensions des tuyaux et gaines d'alimentation avec la perte de charge, fait passer les câbles dans les chemins de câbles et conduits et affiche leur remplissage, et calcule l'éclairement à partir de fichiers IES ou EULUMDAT. Les valeurs par défaut sont signalées ; saisissez les valeurs de votre norme. Voir [Calculs de tuyauterie, gaines, câbles et éclairage](topic:mep-calculations).
- **Fichiers PCF.** L'outil Tuyau écrit, par **Exporter PCF**, les tronçons pour les logiciels de contraintes de tuyauterie et d'isométrie, et un fichier PCF relu dessine sa tuyauterie. Voir [Fichiers de composants de tuyauterie](topic:piping-pcf).
- **Photovoltaïque.** Installez des champs sur les toitures ou au sol, calculez leurs ombres à partir du modèle, estimez l'énergie annuelle, vérifiez les chaînes et produisez les données du schéma unifilaire. Le module de départ et les pertes sont génériques. Voir [Photovoltaïque](topic:solar-pv).
- **Fichier EnergyPlus.** Le volet Vérifier avec EnergyPlus écrit le modèle en IDF à exécuter dans votre propre EnergyPlus. Son exécution dans le navigateur nécessite une version que vous hébergez vous-même et dont vous saisissez l'adresse ; BimCraft ne la fournit pas. Voir [Vérifier le chauffage et le refroidissement avec EnergyPlus](topic:check-with-energyplus).

**Images et fichiers**

- **Choisir le moteur de rendu.** {{ui:Rendu}} propose un choix {{ui:Moteur}}. Nos deux moteurs intégrés (Rapide et Path tracer) restent par défaut. **Ouvrir dans** enregistre la scène en fichier USD ou glTF, et un dossier de projet Unreal en .zip ; dans CadCraft Studio, un module peut ajouter un moteur. Le plug-in Unreal qui ouvre le projet n'est pas publié. Voir [Choisir le logiciel qui dessine l'image](topic:render-engines).
- **Annulation dans Studio.** Dans CadCraft Studio, BimCraft indique à Studio chaque étape terminée, afin que Studio puisse annuler votre dernière étape dans la fenêtre que vous avez utilisée en dernier. Voir [Annuler entre les applications](topic:undo-across-apps).
- **Modules dans votre fichier.** Un IFC enregistre les modules qui y ont écrit, et propose à l'ouverture ceux qui vous manquent. Voir [Modules dans votre fichier](topic:add-ons-in-your-file).

**Dans toutes les applications**

- **Connecter votre IA.** Votre propre assistant peut piloter BimCraft via la connexion de Studio et répondre à des questions sur le modèle, comme quelles pièces se trouvent sous une surface donnée. Studio n'a pas d'IA propre. Voir [Laisser un assistant IA travailler sur votre modèle](topic:assistants).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Retour à la ligne, 2 lignes ou 1 ligne ; le retour à la ligne reste la valeur par défaut.
- **Périphériques de saisie.** Les réglages du pavé tactile, du stylet, de la souris 3D, de la manette et du MIDI sont partagés par toutes les applications.
- **Problèmes et Live.** Le panneau d'avertissements et les sessions Live fonctionnent comme auparavant, les nouvelles vérifications ci-dessus alimentant Problèmes.
- **Langues.** 54 langues, dont dix nouvelles. Celles autres que l'anglais sont des brouillons automatiques pas encore relus par un locuteur natif ; les rubriques d'aide sont surtout en anglais.

### Corrigé dans la 0.8.1

- **Ruban et disposition de l'explorateur de projet.** Insérer › Importer CAD, Insérer › Image et Gérer › Unités du projet affichaient « Pas encore disponible dans BimCraft ». Image ouvre désormais l'outil Image, Importer CAD ouvre {{ui:Build}} › {{ui:Depuis un dessin…}} (DWG, DXF, PDF ou un scan), et Unités du projet ouvre {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}. Déplacer et Aligner lancent les outils Déplacer et Aligner, Niveau ouvre {{ui:Ajouter des niveaux…}}, Phases ouvre la section des phases de rénovation et Matériaux ouvre la bibliothèque de matériaux.
- **Section des classes DWG.** Elle était lue avec le mauvais type ; corrigé dans BimCraft et dans les autres applications qui lisent le DWG.
- **Langue en cours d'exécution.** Studio et les éditions empaquetées peuvent désormais changer de langue sans redémarrage. Ce n'est pas encore testé sur toutes les plateformes ; dites-nous si la langue ne change pas.
- **Script de lot Archicad.** `archicad_bundle.py`, téléchargement séparé, trouve désormais le chemin d'Archicad, surveille le dossier pendant jusqu'à 20 secondes et réessaie à côté du lot.

### Pas encore dans cette version

- **Aides à la sécurité et à la conception.** Personnes dans le bâtiment n'a pas de limite de distance de parcours issue d'un code de construction (vous saisissez la limite) et n'a pas été vérifié à la main sur un plan réel. Les chiffres d'acoustique, de cycle de vie et de risque sont des valeurs de planification, pas une vérification réglementaire.
- **Futurs climatiques et EnergyPlus.** Pas de futurs climatiques intégrés : vous pouvez charger un fichier de scénario pour la simulation d'inondation. L'exécution d'EnergyPlus dans le navigateur ne fait pas partie de cette version.
- **Disposition du ruban.** Métré des matériaux reste « Pas encore disponible » car BimCraft n'a pas de liste de quantités de matériaux, et 54 autres outils grisés du ruban n'ont pas encore d'outil BimCraft derrière eux.
- **Signature et plateformes.** Les installateurs Windows et le .dmg macOS ne sont pas signés : SmartScreen affiche {{ui:Informations complémentaires}}, puis « Exécuter quand même », et macOS demande un clic droit puis {{ui:Ouvert}}. La version iPad et iPhone n'a pas été recompilée pour la 0.8.1.
- **Tests sur pages réelles.** Certains anciens tests du navigateur de BimCraft échouent encore sur notre page de test, comme avant la 0.8.1.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Les modifications antérieures figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
