---
title: Ce que BimCraft lit dans chaque format
summary: Ce que BimCraft lit exactement dans les fichiers IFC, de projet et de famille, DWG et DXF, et ce qu'il laisse de côté.
keywords: formats, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versions, compatibilité, contenu lu
from: 9b8dfb4f
---

## IFC

| Contenu lu | Détails |
|---|---|
| Géométrie | Chaque élément ayant une forme, coloré comme l'indique le fichier. Les pièces et les espaces sont dessinés transparents et masqués au départ |
| Niveaux | Les niveaux du bâtiment, dans l'ordre d'altitude, et les éléments posés sur chacun. Les éléments sans niveau sont regroupés sous « Hors niveau » |
| Nombre d'éléments | Le nombre d'éléments de chaque type (murs, portes, dalles…), affiché dans {{ui:Elements}} |
| Informations du projet | Nom du projet, nom complet et phase ; schéma ; le logiciel d'export, l'auteur et la date d'export tirés de l'en-tête du fichier |
| Données des éléments | Nom, type, type d'objet, repère, description, GlobalId ; chaque ensemble de propriétés et chaque ensemble de quantités de l'élément et de son type |

Modifiables : nom, type d'objet, repère, description et valeur d'une propriété isolée. Enregistré sous forme de nouveau fichier IFC. Les schémas IFC2X3, IFC4 et IFC4X3 s'ouvrent, lus par le moteur IFC propre à BimCraft ; tout ce qu'il ne peut pas encore dessiner est listé sous **Pas encore dessiné** dans le panneau {{ui:File}}. Le modèle est ramené à l'origine à l'ouverture, de sorte qu'un modèle placé loin de celle-ci apparaît tout de même au centre de l'écran. `.ifczip` et `.ifcxml` ne s'ouvrent pas.

## Fichiers de projet et de famille

Projets `.rvt`, gabarits de projet `.rte`, familles `.rfa` et gabarits de famille `.rft`.

| Contenu lu | Détails |
|---|---|
| Informations sur le fichier | Version et build, travail partagé, chemin du modèle central, chemin du dernier enregistrement, nom de l'utilisateur, paramètres régionaux, GUID du document |
| Informations du projet | Les champs propres au projet (nom, numéro, client, adresse, statut…), sans les valeurs par défaut des nouveaux projets |
| Informations de la famille | Nom de la famille, catégorie, version, dernière mise à jour, et ses paramètres par groupe |
| Liens | La liste des modèles liés, liens CAO, images et tableaux de notes clés auxquels le fichier renvoie |
| Image d'aperçu | La miniature enregistrée dans le fichier |

Non lus : le modèle 3D, les éléments, les vues, les feuilles et les nomenclatures. Ils sont stockés dans un format non documenté. BimCraft ne lit que quelques dizaines de kilo-octets de chaque fichier, donc la taille du fichier compte peu.

## Fichiers de projet .pln, .pla, .tpl et .bpn

Pas encore lus : BimCraft le signale à l'ouverture. Exportez le modèle en IFC et les plans en DWG ; voir [Ouvrir les fichiers de projet .pln et .pla](topic:pln-project-files).

## DWG et DXF

| Contenu lu | Détails |
|---|---|
| Espaces | L'espace objet et chaque feuille (présentation), dans l'ordre des onglets |
| Fenêtres de présentation | Les fenêtres de présentation de chaque feuille, avec leur échelle, leur rotation et leurs calques gelés |
| Calques | Nom, couleur, activé/désactivé, gelé, indicateur de traçage et épaisseur de ligne |
| Objets | Lignes, polylignes, arcs, cercles, ellipses, splines, hachures et solides, texte et texte multiligne, blocs et attributs, cotes, lignes de repère et lignes de repère multiples, tableaux, points, images |
| Plans liés | Dessinés à l'endroit où ils sont insérés, lorsque leurs fichiers sont trouvés |
| Images | Dessinées à partir des fichiers image lorsqu'ils sont trouvés (PNG, JPEG, GIF, BMP, WebP ; pas TIFF) |
| Repères d'équipements | Repères d'articles de restauration (attributs `KCL-ITEM`), pour la nomenclature des équipements |

Tout le reste est compté sous **Pas encore dessiné**, sans jamais être deviné. Les formats DWG d'AutoCAD 2000 à 2018 sont ceux qui ont été vérifiés (les fichiers R13 et R14 sont acceptés aussi, mais aucun ne figurait dans le jeu de test ; les DWG plus anciens ne s'ouvrent pas) ; le panneau {{ui:Drawing}} affiche le code de format (comme AC1032). Les fichiers DXF de toutes les versions s'ouvrent, R12 compris. Les deux sont lus par les lecteurs propres à BimCraft, dans cet onglet. Rien n'est réenregistré en DWG ou DXF.

## Dans un dossier

| Type | Extensions | Dans le rapport |
|---|---|---|
| Modèles | `.rvt` `.rfa` `.rte` `.rft` | Regroupés avec leurs sauvegardes numérotées, état vérifié, fiche d'information lue, liens vérifiés |
| IFC | `.ifc` | Listé ; s'ouvre en 3D |
| CAO | `.dwg` `.dxf` `.dgn` | Listé avec les modèles qui les lient ; DWG et DXF s'ouvrent en 2D, DGN non |
| Fichiers résiduels | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listés sous **Mis de côté** |
| Dossiers de maintenance | `*_backup`, `*_log`, `Revit_temp`, dossiers cachés | Listés sous **Mis de côté**, non lus |

Voir [Rapport de dossier : rôles, statuts et liens](topic:folder-roles).
