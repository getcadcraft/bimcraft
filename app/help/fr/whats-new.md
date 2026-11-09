---
title: Nouveautés des versions 0.8 et 0.8.1
summary: BimCraft ajoute des personnes qui parcourent le bâtiment, une acoustique des pièces que vous pouvez entendre, la simulation d'inondation, de vent et de séisme, une vue du cycle de vie sur cinquante ans, des vérifications par rapport à un IDS, des repères et des nomenclatures, Déplacer, Aligner et Distribuer, des images sous le plan, des murs à partir d'un scan, des plans de panneaux, le solaire, les systèmes split et VRF, le dimensionnement des tuyaux et des câbles, les vérifications du béton et sismiques, toute projection cartographique, un choix de moteur de rendu et l'annulation dans Studio ; la 0.8.1 corrige les outils grisés de la disposition Ruban.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctionnalités, évacuation, personnes, files d'attente, acoustique, réverbération, réponse impulsionnelle, inondation, vent, séisme, aléa, cycle de vie, durée de vie, ids, repères, nomenclatures, déplacer, aligner, distribuer, image, arrière-plan, scan vers murs, site depuis civilcraft, plans de panneaux, ossature, solaire, pv, split, vrf, ventilo-convecteur, dimensionnement, tuyaux, chemin de câbles, éclairement, béton, sismique, comparer un scan, epsg, projection, documents, gabarit, carbone, coût, energyplus, moteur de rendu, ouvrir dans, usd, glb, unreal, annuler, modules complémentaires, pcf, symboles, plantes, calquer, plumes, ruban, navigateur de projet, présentation
from: 87b03056
---

Voici ce qui a changé dans BimCraft 0.8 (2026-11-01) et 0.8.1 (2026-11-02), par rapport à la 0.7. BimCraft peut désormais répondre à des questions sur un bâtiment et le tester, avec des personnes, du son, de l'eau, du vent et des séismes, et le dessiner avec davantage d'outils ; la 0.8.1 est une version de correction.

## Nouveautés

### Tester le bâtiment

- **Personnes dans le bâtiment.** La section {{ui:Personnes dans le bâtiment}} du panneau de gauche fait parcourir à vos pièces, portes et escaliers une évacuation ou les arrivées d'une journée normale. Vous voyez les files d'attente là où le bâtiment se rétrécit, le plus long trajet vers une sortie depuis chaque pièce et le temps que met la dernière personne. Cochez {{ui:Fermée}} sur une porte pour voir ce qui change, et cochez {{ui:Afficher les personnes dans la vue 3D}} pour suivre les marcheurs. Les constats vont dans Problèmes. C'est un modèle de foule grossier pour les décisions de conception, pas un certificat de sécurité incendie. Voir [Faire parcourir le bâtiment par des personnes](topic:people-in-the-building).
- **Acoustique des pièces, et l'entendre.** La section {{ui:Acoustique des pièces}} donne le temps de réverbération de chaque pièce par bande d'octave (Sabine et Eyring) à partir de sa taille et des finitions que vous choisissez, et, avec un objectif qui vous est propre, indique l'absorption nécessaire pour l'atteindre. {{ui:Le jouer dans cette pièce}} joue une voix, un claquement de mains, des notes pincées ou votre propre fichier sonore à travers une réponse impulsionnelle calculée pour la pièce. Les valeurs d'absorption sont des valeurs publiées typiques, à remplacer par les vôtres. Voir [Acoustique des pièces](topic:room-acoustics).
- **Simulation d'inondation, de vent et de séisme.** {{ui:Simulation de risque}} fait monter l'eau dans les pièces, montre la pression du vent sur chaque niveau et les secousses sismiques des niveaux, sur un plan ou une façade, avec un curseur de temps. Ce sont des modèles simples dont les hypothèses figurent dans le panneau ; ce n'est pas une vérification réglementaire. Voir [Simuler une inondation, un vent ou un séisme](topic:hazard-playback).
- **Ce qui s'use en cinquante ans.** {{ui:Vue sur le cycle de vie}} liste les fenêtres, portes, finitions et la toiture avec une durée de vie chacune, les années de remplacement et, lorsque vous saisissez un coût unitaire, le coût par année et sa valeur actuelle. {{ui:Enregistrer le planning (CSV)}} l'exporte. Les durées de vie sont des valeurs de planification. Voir [Voir ce qui s'use en cinquante ans](topic:life-cycle-view).
- **Vérifications du béton et sismiques.** Les blocs {{ui:Éléments en béton}} et {{ui:Charges sismiques}} de l'onglet {{ui:Analyse}} vérifient les poutres et poteaux en béton selon ACI 318-19 et calculent des efforts latéraux équivalents selon ASCE 7-22 sur planchers rigides, avec le déplacement entre étages. À vérifier par un ingénieur. Voir [Vérifier les éléments en béton et calculer les charges sismiques](topic:concrete-and-seismic).

### Vérifier et rapporter

- **Vérification par rapport à un IDS.** Chargez le fichier `.ids` que vous a remis un client et voyez dans Problèmes chaque élément qui ne le respecte pas, avant de livrer l'IFC. Ouvrez {{ui:Vérifier avec un IDS}} sous {{ui:Contrôles du modèle}}. Voir [Vérifier un modèle par rapport à l'IDS d'un client](topic:check-against-ids).
- **Repères et nomenclatures.** Définissez vos propres repères, affectez-les à de nombreux éléments d'un coup et créez des nomenclatures dont les colonnes, filtres et groupes les lisent ; les repères sont conservés dans l'IFC. Voir [Repères et nomenclatures](topic:tags-and-schedules).
- **Documents issus du modèle.** {{ui:Documents issus du modèle}} remplit un gabarit de cahier des charges à partir de l'IFC ouvert et l'enregistre en PDF, en document Word ou en Markdown. Voir [Documents issus du modèle](topic:documents-from-the-model).
- **Comparer un scan au modèle.** Avec un nuage de points ouvert, {{ui:Comparer}} juge chaque élément comme construit, partiellement construit, manquant ou non atteint, et affiche le pourcentage construit. Voir [Comparer un scan au modèle](topic:compare-scan-with-model).
- **Carbone et coût.** Le volet Carbone additionne le carbone incorporé à partir d'une table de facteurs modifiable, et le volet Coût répartit les prix sur le planning 4D. Les facteurs fournis avec BimCraft sont génériques et marqués comme non vérifiés. Voir [Carbone incorporé et coût](topic:embodied-carbon-and-5d-cost).
- **Toute projection cartographique.** {{ui:Mesurer}} › {{ui:Système de coordonnées…}} accepte un numéro EPSG, une zone UTM, un nom ou votre propre définition de projection. Voir [Géoréférencer avec n'importe quelle projection](topic:georeference-any-projection).

### Dessiner et modifier

- **Déplacer, Aligner et Distribuer.** Sous {{ui:Build}} ; {{key:Shift+M}} lance Déplacer (le simple {{key:M}} reste Mesurer). Déplacer copie au fil du mouvement avec {{key:C}}, chaque étape est une seule annulation, et l'opération se transmet dans une session Live TeamWork. Voir [Déplacer, copier, aligner et distribuer](topic:move-align-distribute).
- **Images sous le plan.** {{ui:Build}} › {{ui:Image}} place un PNG, JPEG ou WebP sous le plan d'un niveau ou sur un plan vertical. Réglez l'échelle par deux points, puis déplacez, tournez, estompez et verrouillez-la. Une zone copiée dans MarkupCraft se colle à l'échelle de sa feuille. Voir [Placer une image sous le plan](topic:pictures-as-backgrounds).
- **Murs à partir d'un scan.** Avec un scan ouvert, les murs, portes et pièces arrivent sous forme de propositions que vous gardez ou rejetez une à une, en une seule étape d'annulation. Seuls les murs suivant deux directions perpendiculaires sont trouvés. Voir [Transformer un scan en murs](topic:scan-to-walls).
- **Calquer, plumes et esquisser un escalier.** {{ui:Calquer}} affiche un autre niveau en pointillé sous le plan, {{ui:Plumes}} donne aux murs, portes et fenêtres leur propre épaisseur de trait dans une même vue, et {{ui:Esquisser un escalier}} transforme une ligne de cheminement en escalier. Un maillage Wavefront OBJ s'ouvre. Voir [Calquer un niveau, des plumes et un escalier à partir d'une esquisse](topic:trace-pens-stairs-obj).
- **Bâtiments autour d'une adresse.** Les bâtiments et la parcelle trouvés par Adresse vers site de CivilCraft arrivent sous forme de suggestions ; vous cochez ceux à ajouter. Voir [Partir du site de CivilCraft](topic:site-from-civilcraft).
- **Plans de panneaux.** {{ui:Build}} › {{ui:Plans de panneaux}} encadre murs, planchers et toitures en bois ou en acier léger et enregistre une liste de débit en CSV ainsi que des plans d'atelier en PDF. Ce sont des valeurs de départ, pas une conception structurelle. Voir [Plans de panneaux](topic:panel-drawings).
- **Palette de symboles et plantes.** {{ui:Build}} › {{ui:Palette de symboles}} trouve les symboles électriques et de plomberie par nom ; la source {{ui:Plantes}} de {{ui:Bibliothèque}} liste environ 400 plantes avec leurs symboles de plan. Voir [Palette de symboles](topic:symbol-palette) et [Placer une plante](topic:plant-list).

### Tuyauteries, gaines et énergie

- **Split, VRF et ventilo-convecteurs.** Unités intérieures et extérieures avec leurs raccordements, et jeux de liaisons frigorifiques dimensionnés à partir d'une table de valeurs types, que vous pouvez modifier. Voir [Split, VRF et ventilo-convecteurs](topic:split-vrf-fan-coils).
- **Calculs.** Le volet Calculs vérifie le dimensionnement des tuyaux d'alimentation et des gaines avec la perte de charge, fait passer les câbles dans des chemins de câbles et des conduits et affiche leur taux de remplissage, et calcule l'éclairement à partir de fichiers IES ou EULUMDAT. Les valeurs par défaut sont signalées ; saisissez les valeurs de votre norme. Voir [Calculs de tuyaux, gaines, câbles et éclairage](topic:mep-calculations).
- **Fichiers PCF.** La commande **Exporter PCF** de l'outil Tuyau écrit les tronçons pour les logiciels de contrainte de tuyauterie et d'isométriques, et un fichier PCF relu dessine sa tuyauterie. Voir [Fichiers de composants de tuyauterie](topic:piping-pcf).
- **Solaire PV.** Installez des champs sur les toitures ou au sol, calculez leurs ombres à partir du modèle, estimez l'énergie annuelle, vérifiez les chaînes et produisez les données de schéma unifilaire. Le module de départ et les pertes sont génériques. Voir [Solaire PV](topic:solar-pv).
- **Fichier EnergyPlus.** Le volet Vérifier avec EnergyPlus écrit le modèle en IDF, à exécuter dans votre propre EnergyPlus. L'exécuter dans le navigateur demande un build que vous hébergez vous-même et dont vous saisissez l'adresse ; BimCraft ne le fournit pas. Voir [Vérifier le chauffage et le refroidissement avec EnergyPlus](topic:check-with-energyplus).

### Images et fichiers

- **Choisir le moteur de rendu.** {{ui:Rendu}} a un choix {{ui:Moteur}}. Nos deux moteurs intégrés (Rapide et Traceur de chemin) restent ceux par défaut. **Ouvrir dans** enregistre la scène en fichier USD ou glTF, et un dossier de projet Unreal en .zip ; dans CadCraft Studio, un module complémentaire peut ajouter un moteur. Le greffon Unreal qui ouvre le projet n'est pas publié. Voir [Choisir le logiciel qui dessine l'image](topic:render-engines).
- **Annulation dans Studio.** Dans CadCraft Studio, BimCraft indique à Studio chaque étape terminée, pour que Studio puisse annuler votre dernière étape dans la fenêtre que vous avez utilisée en dernier. Voir [Annuler entre les applications](topic:undo-across-apps).
- **Modules complémentaires dans votre fichier.** Un IFC enregistre les modules complémentaires qui y ont écrit, et propose ceux qui vous manquent lorsque vous l'ouvrez. Voir [Modules complémentaires dans votre fichier](topic:add-ons-in-your-file).

### Dans toutes les applications

- **Branchez votre IA.** Votre propre assistant peut piloter BimCraft par la connexion de Studio et répondre à des questions sur le modèle, par exemple quelles pièces se trouvent sous une surface donnée. Studio n'a pas d'IA propre. Voir [Laisser un assistant IA travailler avec votre modèle](topic:assistants).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Retour à la ligne, 2 lignes ou 1 ligne ; Retour à la ligne reste le réglage par défaut.
- **Périphériques de saisie.** Les réglages du pavé tactile, du stylet, de la souris 3D, de la manette et du MIDI sont communs à toutes les applications.
- **Problèmes et Live.** Le panneau des avertissements et les sessions Live fonctionnent comme avant, les nouvelles vérifications ci-dessus alimentant Problèmes.
- **Langues.** 54 langues, dont dix nouvelles. Celles autres que l'anglais sont des traductions automatiques pas encore relues par un locuteur natif ; les rubriques d'aide sont en grande partie en anglais.

## Corrigé dans 0.8.1

- **Disposition Ruban + navigateur de projet.** Insérer › Importer CAD, Insérer › Image et Gérer › Unités du projet affichaient « Pas encore disponible dans BimCraft ». Image ouvre désormais l'outil Image, Importer CAD ouvre {{ui:Build}} › {{ui:Depuis un dessin…}} (DWG, DXF, PDF ou scan), et Unités du projet ouvre {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}. Déplacer et Aligner lancent les outils Déplacer et Aligner, Niveau ouvre {{ui:Ajouter des niveaux…}}, Phases ouvre la section Phases de rénovation et Matériaux ouvre la bibliothèque de matériaux.
- **Section des classes DWG.** Elle était lue avec le mauvais type ; corrigé dans BimCraft et dans les autres applications qui lisent le DWG.
- **Langue à l'exécution.** Studio et les éditions empaquetées peuvent désormais changer de langue sans redémarrage. Ce n'est pas encore testé sur toutes les plateformes ; dites-nous si la langue ne change pas.
- **Script de paquet Archicad.** `archicad_bundle.py`, un téléchargement séparé, trouve désormais le chemin d'Archicad, surveille le dossier pendant 20 secondes au plus et réessaie à côté du paquet.

## Pas encore dans cette version

- **Aides à la sécurité et à la conception.** Personnes dans le bâtiment n'a pas de limite de distance de parcours issue d'un code de construction (vous saisissez la limite) et n'a pas été vérifié à la main sur un plan réel. Les valeurs d'acoustique, de cycle de vie et d'aléas sont des valeurs de planification, pas une vérification réglementaire.
- **Scénarios climatiques et EnergyPlus.** Pas de scénarios climatiques intégrés : vous pouvez charger un fichier de scénario pour la simulation d'inondation. La simulation EnergyPlus dans le navigateur ne fait pas partie de cette version.
- **Disposition Ruban.** Métré des matériaux reste « Pas encore disponible », car BimCraft n'a pas de liste de quantités de matériaux, et 54 autres outils grisés du ruban n'ont pas encore d'outil BimCraft derrière eux.
- **Signature et plateformes.** Les programmes d'installation Windows et le .dmg macOS ne sont pas signés ; SmartScreen affiche donc {{ui:Plus d'infos}}, puis {{ui:Exécuter quand même}}, et macOS demande un clic droit puis {{ui:Ouvert}}. La compilation iPad et iPhone n'a pas été refaite pour la 0.8.1.
- **Tests sur pages réelles.** Certains anciens tests de navigateur de BimCraft échouent encore sur notre page de test, comme avant la 0.8.1.

Tout le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet). Les changements précédents sont dans [Nouveautés de la 0.7](topic:whats-new-0-7).
