---
title: Équipements MEP avec piquages
summary: Placez des centrales de traitement d'air, ventilateurs, pompes, chaudières, chauffe-eau, unités terminales, diffuseurs, grilles et réservoirs génériques, dimensionnés par les valeurs que vous saisissez, chacun avec les raccords auxquels les autres tronçons se joignent.
keywords: mep, équipement, centrale de traitement d'air, cta, ventilateur, ventilateur en ligne, pompe, chaudière, chauffe-eau, unité terminale, vav, diffuseur, grille, bouche, réservoir, piquage, piquages, raccord, tubulure, taille de col, cvc, plomberie, mécanique, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ce que vous allez faire

Placez les équipements aux extrémités de vos tuyaux et gaines. Chaque pièce est une forme générique dimensionnée par les valeurs que vous saisissez, avec ses raccords sous forme de **piquages** : l'endroit où un tuyau ou une gaine s'y joint, le système, le sens du flux et la taille. Les tuyaux et gaines dessinés depuis un piquage prennent sa taille et son système et restent fixés à lui : voir [Raccorder tuyaux et gaines aux équipements](topic:mep-connections).

:::note
Il s'agit d'une aide au dessin et à la coordination, dimensionnée par un ingénieur. L'équipement n'est pas un produit de fabricant : aucune capacité, masse ni dimension de raccord de fabricant. Importez le modèle d'un fabricant depuis votre logiciel MEP, au format IFC, lorsque vous en avez besoin.
:::

## Placer une pièce

1. Activez {{ui:Dessin}}, ouvrez {{ui:Build}} et choisissez {{ui:Équipements}}.
2. Dans la barre, choisissez le type et saisissez ses dimensions. Chaque type demande les siennes :

| Type | Vous saisissez | Ses piquages |
|---|---|---|
| Centrale de traitement d'air | longueur, largeur, hauteur ; ouvertures de soufflage et de reprise ; taille et système du tuyau de batterie ; taille de l'évacuation des condensats | gaine de soufflage en sortie, gaine de reprise en entrée, batterie en entrée et en sortie, évacuation des condensats |
| Ventilateur en ligne | diamètre, longueur, système | gaine en entrée et en sortie |
| Pompe | taille du tuyau, système | entrée et sortie |
| Chaudière | longueur, largeur, hauteur, taille du tuyau, taille du gaz, diamètre du conduit de fumée | départ chauffage en sortie et retour en entrée, gaz en entrée, fumées en sortie |
| Chauffe-eau | diamètre, hauteur, taille du tuyau, gaz ou électrique | eau froide en entrée, eau chaude en sortie (et gaz en entrée ainsi qu'un conduit de fumée s'il brûle du gaz) |
| Unité terminale | longueur, largeur, hauteur, entrée ronde, largeur et hauteur de sortie | air de soufflage en entrée et en sortie |
| Diffuseur | face, col, système | son col (air en entrée) |
| Grille | largeur et hauteur de face, largeur et hauteur de col, système | son col (air en sortie vers la gaine de reprise ou d'extraction) |
| Réservoir | diamètre, hauteur, taille du tuyau, système | entrée en haut, sortie près du bas |
| Radiateur | longueur, hauteur, profondeur, taille du tuyau, système | départ en haut d'une extrémité, retour en bas de l'autre |
| Convecteur / panneau chauffant | longueur, hauteur, profondeur, taille du tuyau, système | départ à une extrémité, retour à l'autre |
| Famille du fabricant | la famille (voir [Spécifications des tuyaux, vannes, registres et familles des fabricants](topic:pipe-specs)) | les piquages prévus par sa famille |

3. Réglez **À**, la hauteur de son pied au-dessus du niveau. La hauteur d'un diffuseur ou d'une grille est celle de sa face : saisissez la hauteur du plafond.
4. Saisissez un **Repère** si vous en voulez un (`CTA-1`) ; la pièce suivante du même type reçoit le numéro suivant.
5. Déplacez le pointeur sur le plan : l'emprise et ses piquages le suivent. Appuyez sur {{key:R}} pour la tourner de 90°. Cliquez à l'endroit voulu.

Les tailles de tuyau sont des tailles de tuyau en acier (ASME B36.10M). Un tuyau dessiné depuis une pompe dans un autre matériau prend le même diamètre nominal dans son propre matériau.

## Modifier ou supprimer

Sélectionnez-la dans le plan ou dans la vue 3D. Les Propriétés affichent chaque dimension saisie, son repère, X, Y, la hauteur et la rotation, ainsi que chaque piquage : sa taille, son système, le sens du flux et si quelque chose y est raccordé. Chaque modification correspond à une étape de {{ui:Annuler}} ; les tronçons fixés à ses piquages suivent. {{key:Delete}} la supprime ; les tronçons qui y étaient fixés restent, et le contrôle des raccordements les signale.

## Dans le fichier IFC

Chaque type est enregistré sous sa classe IFC : IfcUnitaryEquipment (centrale de traitement d'air), IfcFan, IfcPump, IfcBoiler (chaudière ; un chauffe-eau est un IfcBoiler de type eau avec le type d'objet « Water heater »), IfcAirTerminalBox (unité terminale), IfcAirTerminal (diffuseur, grille) et IfcTank, avec un type partagé par toutes les pièces du même type et de mêmes dimensions. Les fichiers IFC2X3 reçoivent IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal et IfcFlowStorageDevice, avec les types correspondants. Chaque piquage est un IfcDistributionPort placé à l'endroit du raccord, orienté vers l'extérieur, avec son sens de flux et son système ; les autres logiciels lisent quel tronçon se raccorde à quel piquage. La pièce rejoint le système de chacun de ses piquages et porte les ensembles de propriétés de chaque élément de bibliothèque placé.
