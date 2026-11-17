---
title: Exporter le modèle en Collada ou en KMZ pour la carte
summary: Écrit les modèles IFC ouverts dans un fichier Collada (.dae) pour Blender et d'autres logiciels 3D, ou dans un paquet Google Earth (.kmz) placé à l'emplacement du modèle sur la carte.
keywords: collada, dae, kmz, kml, google earth, blender, exporter, géolocalisation, géoréférencement, latitude, longitude, emplacement, logiciels 3D
from: 81cfec09
---

{{ui:Collada}} dans la barre d'outils (ou {{ui:Exporter en Collada (.dae, .kmz)…}} dans le menu Fichier des styles de menu et de ruban) écrit ce qui est ouvert au format Collada 1.4.1 : chaque modèle affiché, et les modèles fédérés à l'endroit où vous les avez placés.

## Exporter

1. Choisissez {{ui:Collada}}.
2. Choisissez le format :
   - {{ui:Fichier Collada (.dae), pour Blender et d'autres logiciels 3D}}.
   - {{ui:Paquet Google Earth (.kmz) : le modèle placé à son emplacement sur la carte}}. Proposé uniquement lorsque le modèle a un emplacement.
3. Choisissez les options, puis {{ui:Exporter}}. Le fichier est téléchargé, et la barre d'état indique le nombre d'éléments exportés.

| Option | Ce que cela fait |
|---|---|
| {{ui:Inscrire l'emplacement dans le fichier}} | Ajoute la latitude, la longitude, la hauteur et le cap de l'origine du fichier au .dae |
| {{ui:Hauteur}} | {{ui:Au sol : le niveau 0 du modèle repose sur le terrain}}, ou {{ui:La hauteur du modèle au-dessus du niveau de la mer}} |
| {{ui:Inclure les pièces et espaces}} | Les espaces sont inclus aussi (ils sont exclus par défaut) |
| {{ui:Inclure les éléments masqués}} | Les éléments que vous avez masqués sont écrits aussi (par défaut, seul ce que vous voyez est écrit) |

## Contenu du fichier

| Dans le modèle | Dans le fichier Collada |
|---|---|
| Bâtiment, niveaux | Nœuds imbriqués, niveaux dans l'ordre d'altitude ; éléments sans niveau sous « Non placé » |
| Chaque élément | Un nœud avec son propre maillage, nommé comme dans le modèle (son nom, sinon sa classe et son étiquette) |
| Classe, GlobalId, type prédéfini | Dans les données supplémentaires du nœud (profil IFC), avec le nom exact (profil ModelCraft) |
| Couleurs | Matériaux, avec transparence |
| Unités et axes | Mètres, Z vers le haut. Le niveau 0 du modèle au premier plan est à la hauteur 0 |

Le modèle reste près de l'origine sur le sol, si bien que les logiciels qui travaillent en simple précision l'affichent sans scintillement. ModelCraft écrit ses fichiers Collada avec le même module d'écriture, et ouvre ces fichiers avec leurs noms d'éléments.

## D'où vient l'emplacement

Le modèle au premier plan fournit l'emplacement, de la même façon que {{ui:Mesurer}} calcule la latitude et la longitude d'un point :

- Une conversion cartographique (IFC4 IfcMapConversion, ou les ensembles de propriétés IFC2X3) passant par le système de coordonnées du modèle. Un système que vous avez choisi pour le modèle l'emporte sur celui que nomme le fichier.
- Sinon, la latitude et la longitude du site (approximatives : suffisantes à l'échelle d'un site).

Le cap est mesuré et non supposé : il tient compte de la rotation de la carte, du nord géographique et de la convergence des méridiens. Pour donner un emplacement à un modèle, utilisez {{ui:Origine sur la carte…}} dans Mesurer.

## Dans d'autres logiciels

- **Google Earth** lit le .kmz : le modèle apparaît à son emplacement, orienté vers le nord. Un .dae simple ne contient aucun emplacement que Google Earth puisse lire ; utilisez le .kmz.
- **Blender** (4.x et versions antérieures) : Fichier, Importer, Collada (.dae). Chaque élément arrive comme un objet distinct avec son matériau. L'emplacement est conservé dans les données supplémentaires du fichier, que Blender ne lit pas. Blender 5.0 a supprimé son importeur Collada intégré ; dans ce cas, utilisez plutôt {{ui:USD}} ou l'export glTF, ou ouvrez le .dae dans Blender 4.5 et enregistrez un .blend.

Nos tests vérifient chaque fichier par rapport au schéma Collada 1.4.1 et le relisent avec un lecteur Collada indépendant. Nous ne les avons pas ouverts dans Blender ni dans Google Earth.
