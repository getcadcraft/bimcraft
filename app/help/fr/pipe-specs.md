---
title: Spécifications de tuyauteries, vannes, registres et familles des fabricants
summary: Définissez vos propres spécifications de tuyauteries (tableaux de dimensions avec matériau, assemblage et rugosité), conservées dans le fichier du modèle ; placez des vannes, un filtre et des registres sur les tronçons ; et importez le modèle d'une vanne ou d'un équipement de fabricant comme famille, avec des ports de raccordement.
keywords: spécification de tuyauterie, spécifications de tuyauteries, classe de tuyauterie, tuyau personnalisé, tableau de dimensions, tube, tube hygiénique, inox, schedule, diamètre extérieur, épaisseur de paroi, diamètre intérieur, rugosité, pression nominale, csv, json, importer, exporter, tableur, norme, bpe, din, en 10357, en 10255, vanne, vannes, vanne papillon, vanne d'équilibrage, vanne de régulation, filtre, registre, registre de volume, registre coupe-feu, oem, fabricant, constructeur, famille, familles, ports, raccordement, step, obj, gltf, ifc, radiateur, convecteur, panneau rayonnant, centrale de traitement d'air, diffuseur, grille
from: bc2f7c4e
---

## Ce que vous allez faire

Dessinez des tuyaux selon votre propre spécification au lieu des tableaux intégrés acier, cuivre et plastique, placez des vannes et des registres sur les tronçons, et placez le modèle d'un fabricant doté de ports auxquels les tuyaux se raccordent.

:::note
Une aide au dessin et à la coordination. Une spécification de tuyauterie contient les valeurs que vous saisissez ou importez : vérifiez chaque tableau par rapport à la norme de votre projet. Les vannes, filtres et registres intégrés sont des formes schématiques dimensionnées d'après le tronçon, et non d'après la longueur d'un fabricant ou d'une norme de vanne.
:::

## Créer une spécification de tuyauterie

1. Activez {{ui:Dessin}}, ouvrez {{ui:Build}} et choisissez {{ui:Spécifications de tuyauteries}}. Le même bouton se trouve dans la barre de l'outil {{ui:Tuyau}}.
2. Choisissez {{ui:Neuf}}, ou partez d'un fichier, d'un collage ou d'une spécification type (ci-dessous).
3. Saisissez son nom, la norme ou la référence qu'elle suit, le matériau et le type d'extrémité ou d'assemblage.
4. Saisissez une ligne par dimension : le nom de la dimension, le diamètre extérieur et l'épaisseur de paroi, en millimètres. Saisissez le diamètre intérieur à la place de l'épaisseur si c'est ce que vous avez : l'autre valeur est calculée. DN, pression nominale et masse sont facultatifs.
5. Facultatif : la rugosité en millimètres (le calcul de perte de charge l'utilise), une épaisseur d'isolant avec laquelle démarrent les nouveaux tronçons, le rayon de coude en fonction du diamètre extérieur, la présence ou non de tés et de réductions dans la spécification, et une couleur propre en 3D.
6. Cochez les services dont les nouveaux tronçons doivent démarrer avec cette spécification, par exemple l'eau glacée.
7. Cliquez sur {{ui:Enregistrer dans le modèle}}.

Les spécifications sont enregistrées dans le fichier du modèle. Toute personne qui ouvre le fichier les possède, et {{ui:Annuler}} annule une modification.

Une spécification, ou l'une de ses dimensions, ne peut pas être supprimée tant qu'un tronçon y est dessiné. Modifier les valeurs d'une dimension redessine les tronçons de cette dimension.

## Réutiliser une spécification dans un autre modèle

- {{ui:Exporter en .json}} enregistre la spécification sélectionnée dans un petit fichier ; {{ui:Tout exporter}} enregistre toutes les spécifications du modèle. {{ui:Importer un fichier}} les relit.
- {{ui:Exporter en .csv}} enregistre le tableau des dimensions pour un tableur. {{ui:Importer un fichier}} lit aussi un `.csv`.
- {{ui:Coller des lignes}} prend un tableau copié depuis un tableur. La première ligne nomme les colonnes : `Size`, `OD` et `Wall` (ou `ID`), et facultativement `DN`, `Pressure`, `Weight`. Une ligne par dimension. Les nombres sont en millimètres, sauf si vous choisissez les pouces ou si une cellule indique son unité (`0.065 in`).

## Spécifications type

{{ui:Ajouter une spécification type}} ajoute l'une de ces spécifications à votre modèle, sous forme de copie que vous pouvez modifier :

| Spécification type | Dimensions |
|---|---|
| Tube ASME BPE | 1/4" à 6" |
| Tube EN 10357 série A (DIN 11850 rangée 2) | DN10 à DN200 |
| Tube acier EN 10255, série moyenne | DN15 à DN150 |
| Tube acier EN 10255, série forte | DN15 à DN125 |

Ces tableaux donnent les diamètres extérieurs et les épaisseurs de paroi qu'au moins deux pages publiées de fournisseurs indiquent pour la norme, et sur lesquelles elles s'accordent. Ils ne sont pas tirés des normes elles-mêmes. Les dimensions qu'une seule page donne sont omises. Chaque spécification type affiche ses pages sources et porte la mention « check against your project standard », à traduire ici par « à vérifier par rapport à la norme de votre projet ». Aucune rugosité, pression nominale ni masse n'est indiquée.

## Dessiner un tronçon dans une spécification

1. Choisissez {{ui:Tuyau}}. Un service coché dans une spécification démarre dans celle-ci. Pour tout autre tronçon, choisissez la spécification dans la liste des matériaux : les spécifications figurent après les matériaux intégrés, sous la forme « Spec : nom ».
2. La liste des dimensions ne contient plus que les dimensions de cette spécification. Choisissez-en une et dessinez le tronçon.

Pour déplacer plus tard un tronçon dans une spécification, sélectionnez-le et modifiez **Matériau** dans Propriétés. Sa dimension devient la dimension de la spécification la plus proche par diamètre extérieur.

Dans le fichier IFC, le tuyau porte le nom, la norme, le matériau, l'assemblage et les dimensions de la spécification (`CadCraft_PipeSpec` et `Pset_PipeSegmentTypeCommon`, sur le tuyau et sur son type).

Les calculs de dimensionnement et de perte de charge lisent le diamètre intérieur de la spécification. Lorsque la spécification a une rugosité, le frottement d'un tronçon est calculé avec elle (Darcy-Weisbach) ; sans rugosité, la valeur par défaut habituelle du calcul est utilisée.

## Vannes, filtre et registres

1. Choisissez {{ui:Vanne}} et le type dans la barre : vanne à opercule, à boisseau sphérique, papillon, à soupape, clapet, d'équilibrage ou de régulation, ou filtre, pour les tuyaux ; registre de volume ou registre coupe-feu, pour les gaines.
2. Cliquez sur le tronçon où elle doit aller. Le tronçon est coupé autour d'elle et les deux côtés restent raccordés. Elle prend la dimension du tronçon et se déplace avec lui.

Les propriétés du tronçon listent chacun de ces éléments avec {{ui:Supprimer}} ; le tronçon se referme.

Le calcul de perte de charge ne compte une perte de raccord que pour les vannes à opercule, à boisseau sphérique, à soupape et les clapets. Les autres types, les registres et les familles de fabricants n'ajoutent aucune perte à ce calcul : prévoyez-la dans votre propre vérification. Ils figurent dans la nomenclature **Raccords et vannes** et dans le métré, et sont écrits dans l'IFC comme des vannes, un filtre (le filtre) et des registres à deux ports raccordés.

## Modèle de fabricant en tant que famille

1. Ouvrez {{ui:Build}}, choisissez {{ui:Familles}}, puis {{ui:Importer un modèle}}. Les fichiers IFC, STEP, OBJ, STL, glTF et d'élément de bibliothèque sont lus. Pour OBJ et STL, réglez d'abord les unités du fichier et l'axe vertical.
2. Dans la boîte de dialogue des ports, saisissez le nom, le fabricant et la référence du modèle.
3. Choisissez si elle va **Sur un tronçon** (une vanne, un filtre ou un registre) ou si c'est un **Équipement**, et ce qu'elle est écrite.
4. Donnez-lui ses ports. Chacun a un nom, un tuyau ou une gaine, le fluide, la dimension en millimètres (le diamètre extérieur pour un tuyau), la dimension nominale telle que votre spécification la nomme, le type d'extrémité, sa position et son sens d'orientation. {{ui:Sur une face}} place un port au centre d'une face de la boîte englobante du modèle. La petite vue de dessus affiche les ports.
5. Cliquez sur {{ui:Enregistrer la famille dans le modèle}}.

Une famille qui va sur un tronçon a exactement deux ports orientés en sens opposé, alignés sur une même ligne. Sélectionnez-la dans la liste de l'outil Vanne et cliquez sur un tronçon : elle est placée à sa propre longueur et les tuyaux se raccordent à ses ports.

Une famille n'est jamais étirée. Si ses ports ne correspondent pas à la dimension du tronçon, on vous le signale lors du placement, et {{ui:Vérifier les raccordements}} la liste.

Une famille d'équipement se place avec {{ui:Equipment}}, type **Famille du fabricant**. Tuyaux et gaines s'accrochent à ses ports.

{{ui:Télécharger comme élément de bibliothèque}} enregistre une famille avec ses ports dans un fichier que vous pouvez soumettre à la Bibliothèque.

## Radiateurs et convecteurs

{{ui:Equipment}} propose aussi **Radiateur** et **Convecteur / panneau chauffant** : des corps génériques avec un raccord d'aller et un raccord de retour pour l'eau de chauffage. Voir [Équipements MEP avec ports](topic:mep-equipment).
