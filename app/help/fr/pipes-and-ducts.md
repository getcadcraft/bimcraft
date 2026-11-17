---
title: Tuyaux et gaines
summary: Dessinez des tronçons de tuyaux et de gaines sur le plan par leur axe ; les coudes, tés, réductions et transitions sont créés pour vous, les tronçons appartiennent à des systèmes avec des ports raccordés dans le fichier IFC, et ils apparaissent dans les plans, les nomenclatures et le métré.
keywords: tuyau, tuyaux, tuyauterie, plomberie, gaine, gaines, conduits, cvc, mep, mécanique, coude, té, réduction, transition, raccord, raccords, vanne, vannes, vanne à opercule, vanne à boisseau sphérique, vanne à soupape, clapet, colonne montante, pente, évacuation, eaux usées, eaux pluviales, ventilation, eau froide, eau chaude, eau glacée, chauffage, gaz, protection incendie, air soufflé, air repris, extraction, système, systèmes, port, ports, connecteur, connecteurs, appareil, appareils, appareil sanitaire, lavabo, évier, WC, douche, bac à laver, unités de décharge, uhc, dfu, dimensionner les évacuations, dimensionnement des évacuations, collecteur, branchement, ramal, coletor, débit d'air, cfm, perte de charge, frottement, dimensionnement, nomenclature, métré, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Ce que vous allez faire

Dessinez les tuyaux et gaines d'un bâtiment comme vous dessinez des murs : cliquez sur les angles de l'axe d'un tronçon à la hauteur que vous réglez. BimCraft crée les raccords, place chaque élément dans son système et les relie, de sorte que les autres logiciels lisent le tronçon comme un seul système raccordé.

## Dessiner un tuyau

1. Activez {{ui:Dessin}}, ouvrez {{ui:Build}} et choisissez {{ui:Tuyau}}.
2. Dans la barre, choisissez le **système** (eau froide, eau chaude, évacuation eaux usées, gaz…). Il définit un matériau habituel : cuivre pour l'eau, PVC pour les évacuations et la ventilation, acier pour le chauffage, l'eau glacée, le gaz et la protection incendie. Modifiez le **matériau**, la **classe** et la **dimension** si besoin. Les dimensions et épaisseurs viennent de normes publiques : tuyau acier ASME B36.10M, tube cuivre ASTM B88, PVC ASTM D1785 et PEX ASTM F876. Les projets brésiliens peuvent utiliser **Tuyau PVC pour eau (NBR 5648)**, le PVC à collage pour l'eau froide, et **Tuyau PVC d'évacuation (NBR 5688)**, série normale ou renforcée, pour les évacuations et la ventilation : leurs dimensions se désignent par DN (DN 25, DN 100). Dès que vous en choisissez un, le choix d'un autre système reste sur les tuyaux brésiliens (tuyau PVC d'évacuation pour une évacuation eaux usées, après un tuyau PVC pour eau).
3. Réglez **À** : la hauteur de l'axe du tuyau au-dessus du niveau.
4. Cliquez là où commence le tuyau, puis sur chaque angle. Double-cliquez, ou appuyez sur {{key:Enter}}, au dernier point. {{key:Backspace}} annule le dernier angle ; {{key:Esc}} abandonne le tronçon.

Le tuyau s'accroche comme les murs, et aux autres tronçons : commencez sur l'extrémité d'un tuyau pour continuer à partir de lui, ou terminez sur la ligne d'un tuyau pour le piquer. Un nouveau tronçon prend la hauteur du tuyau sur lequel il s'accroche.

Un tronçon commencé ou terminé sur un port d'un équipement prend sa dimension et son système, et reste fixé à lui : voir [Équipements MEP avec ports](topic:mep-equipment) et [Raccorder tuyaux et gaines à un équipement](topic:mep-connections).

## Choisir la norme de plomberie du projet

La première liste de la barre du tuyau est la **norme de plomberie** du modèle : **US (IPC, pouces)** ou **Brésil (ABNT, DN)**. Elle est enregistrée dans le modèle, de sorte que toute personne qui ouvre le fichier commence les tronçons de la même façon. Avec **US**, un nouveau tronçon démarre en cuivre (eau) ou en PVC Schedule 40 (évacuations), en pouces, avec la pente de l'International Plumbing Code. Avec **Brésil**, l'eau froide démarre en PVC soldável DN 25, les évacuations et eaux pluviales ainsi que la ventilation en PVC esgoto DN 100 avec la pente de la NBR 8160, et l'eau chaude en cuivre. Ce choix s'applique aussi à un tronçon commencé sur le connecteur d'un appareil ou sur un port d'équipement. Les tuyaux déjà dessinés gardent leur matériau et leurs propres tableaux ; la liste des matériaux reste ouverte, de sorte que vous pouvez toujours dessiner exprès un tronçon brésilien dans un modèle US. Un fichier sans choix se comporte comme avant : un nouveau tronçon suit le matériau utilisé.

## Dessiner une gaine

1. Choisissez {{ui:Gaine}}. Choisissez le système (soufflage, reprise, extraction ou air neuf) et la forme : ronde, rectangulaire ou ovale plate.
2. Saisissez la largeur et la hauteur (pour une gaine ronde, la largeur est le diamètre), et **À** pour la hauteur de l'axe.
3. Pour la dimensionner d'après le débit, saisissez le **Débit** et le taux de **Frottement**, puis cliquez sur {{ui:Dimensionner}}. La gaine est dimensionnée par frottement égal, la méthode du chapitre de conception des gaines du ASHRAE Handbook, et arrondie à une dimension disponible en stock, de sorte que le frottement sorte égal ou inférieur au taux saisi. Sans taux saisi, elle utilise 0.08 in. de colonne d'eau pour 100 ft (0.8 Pa/m). Une gaine rectangulaire garde la hauteur saisie et reçoit une largeur ; BimCraft le signale lorsque ses côtés dépassent un rapport de 4 pour 1.
4. Cliquez sur les angles comme pour un tuyau.

## Appareils sanitaires

{{ui:Build}} › {{ui:Placer une famille}} propose cinq appareils de départ, chacun avec une évacuation et un connecteur d'eau froide : un **WC**, un **Lavabo**, un **Évier de cuisine**, un **Bac de douche** et un **Bac à laver**. Leur face avant vous fait face au placement et leur arrière s'appuie contre le mur. Leurs évacuations ont le plus petit diamètre d'évacuation de la NBR 8160 (DN 100 pour le WC, DN 50 pour l'évier de cuisine, DN 40 pour les autres) ; l'eau est en DN 20. Modifiez leurs dimensions, ou éditez-les, comme toute famille : voir [Familles et leurs dimensions](topic:families).

Une famille indique quel appareil elle est sous {{ui:Appareil sanitaire}}, dans l'onglet {{ui:Connecteurs}} de l'éditeur de famille. Son évacuation est alors comptée en unités de décharge : 6 UHC pour un WC, 1 pour un lavabo, 3 pour un évier de cuisine ou un bac à laver, 2 pour une douche (NBR 8160), ou les unités de décharge des appareils de la table 709.1 de l'IPC.

## Depuis le connecteur d'un appareil

Les éléments placés à partir d'une famille avec connecteurs (l'évacuation et le robinet d'un lavabo, le col d'une bouche de soufflage : voir [Modifier une famille](topic:family-editor)) affichent leurs connecteurs libres sous forme de points pendant que {{ui:Tuyau}} ou {{ui:Gaine}} est actif, et le pointeur s'y accroche.

- **Commencer sur un connecteur** : le tronçon prend son système et sa dimension (le tuyau du matériau de la barre, à la dimension du connecteur ou juste au-dessus ; une gaine ronde de son diamètre). Lorsque le connecteur est orienté vers le bas ou vers le haut, comme l'évacuation sous un lavabo, le tronçon descend ou monte d'abord tout droit jusqu'à la hauteur de **À**, puis se poursuit selon vos clics.
- **Terminer sur un connecteur** : le tronçon descend ou monte jusqu'à lui et s'y termine.

Le tronçon est raccordé à l'élément dans le fichier IFC, de sorte que les autres logiciels voient l'appareil comme faisant partie de son système. Un élément placé plus tard avec un connecteur au bout d'un tronçon y est raccordé aussi. Un tronçon déplacé loin d'un connecteur n'y est plus raccordé.

## Les raccords, créés pour vous

| Où | Ce que BimCraft crée |
|---|---|
| Un tronçon tourne | Un coude. Tuyau acier au grand rayon de l'ASME B16.9 (1.5 × la dimension), autre tuyau à un diamètre extérieur, gaine ronde à 1.5 diamètre, gaine rectangulaire à une largeur (ou une hauteur pour un virage vers le haut ou vers le bas) |
| Un tronçon se termine sur la ligne d'un autre | Un té ; l'autre tronçon est coupé à cet endroit |
| Deux tronçons se rejoignent bout à bout à des dimensions différentes | Une réduction (tuyaux) ou une transition (gaines) |
| Deux tronçons de même dimension se rejoignent bout à bout selon un angle | Un coude |

Lorsque vous modifiez, déplacez ou supprimez un tronçon, chaque raccord de ce niveau est recréé. Si une branche est trop courte pour les raccords à ses extrémités, BimCraft le signale et ne change rien : éloignez davantage l'angle.

:::note
Les raccords et vannes sont génériques : dessinés d'après la dimension du tuyau ou de la gaine, et non d'après le catalogue d'un fabricant. Les raccords à emboîture, à sertir et à rainure, les corps de vanne et les équipements ont leurs propres dimensions chez chaque fabricant ; vérifiez-les auprès de votre fournisseur avant commande.
:::

## Colonnes montantes

Pendant le dessin, saisissez une nouvelle hauteur dans **À** et appuyez sur {{key:Enter}} : le tronçon monte ou descend tout droit au dernier angle, avec un coude à chaque extrémité. Une colonne montante peut monter jusqu'au niveau supérieur. Chaque niveau affiche les parties d'un tronçon atteintes par sa plage de vue, avec **UP** ou **DN** au niveau de la colonne.

## Évacuations et leur pente

Les évacuations eaux usées et eaux pluviales démarrent à la plus faible pente que l'International Plumbing Code autorise pour leur dimension : 1/4 in. par ft jusqu'à 2-1/2 in., 1/8 in. par ft de 3 à 6 in., 1/16 in. par ft à partir de 8 in. Les tuyaux PVC d'évacuation brésiliens démarrent à la pente de la NBR 8160 : 2 % jusqu'à DN 75, 1 % à partir de DN 100. Saisissez une autre pente dans la barre ou dans Propriétés : `1/4"/ft`, `2 %` ou `1:50`. Le tronçon descend depuis son premier point : dessinez donc les évacuations dans le sens de leur écoulement. Le plan montre la descente et une flèche. Les propriétés avertissent lorsqu'une évacuation est plus plate que le minimum du code.

## Dimensionner les évacuations selon les unités de décharge

Choisissez une évacuation eaux usées : **Unités de décharge** dans Propriétés indique le nombre qu'elle transporte et la plus petite dimension dont elle a besoin. Chaque appareil sanitaire dont le connecteur d'évacuation se trouve sur le tronçon est compté, ainsi que chaque évacuation qui s'y déverse : dessinez les évacuations dans le sens de leur écoulement, chacune se terminant sur l'évacuation dans laquelle elle se déverse.

- Les évacuations en tuyau PVC d'évacuation brésilien comptent en **UHC** et suivent la NBR 8160 ; les autres comptent en **DFU** et suivent l'International Plumbing Code.
- **Évacuation** : un **Branchement** est dimensionné d'après le tableau du code pour les branchements d'appareils ; un **Collecteur d'immeuble** d'après son tableau selon la pente, de sorte que sa **Pente** compte.
- Une évacuation n'est jamais plus petite que les évacuations des appareils qu'elle dessert (un WC a besoin de DN 100, soit 3 in.), ni que celle qui s'y déverse. Selon la NBR 8160, un collecteur d'immeuble fait au moins DN 100.

{{ui:Dimensionner les évacuations}} donne à chaque évacuation eaux usées du modèle qui est trop petite pour ses unités de décharge la dimension dont elle a besoin, en une seule étape que vous pouvez annuler. Une évacuation dessinée plus grande que nécessaire est laissée telle quelle. Lorsqu'une évacuation transporte plus que ce que la plus grande dimension de son tuyau peut porter à sa pente, BimCraft le signale : donnez-lui une pente plus forte ou un autre tuyau.

:::note
Les tableaux sont ceux des évacuations horizontales. Les colonnes de chute, les ventilations et les eaux pluviales ne sont pas dimensionnées ici : vérifiez-les, ainsi que l'ensemble du projet, selon le code applicable au projet.
:::

## Vannes

1. Choisissez {{ui:Vanne}} puis le type : à opercule, à boisseau sphérique, à soupape ou clapet.
2. Cliquez sur un tuyau à l'endroit voulu. Le tuyau est coupé autour d'elle et la vanne est raccordée des deux côtés.

Les propriétés du tronçon listent ses vannes, chacune avec {{ui:Supprimer}}.

D'autres types de vannes, un filtre, des registres sur les gaines, vos propres spécifications de tuyauterie et les familles des fabricants : voir [Spécifications de tuyauteries, vannes, registres et familles des fabricants](topic:pipe-specs).

## Modifier un tronçon

Sélectionnez n'importe quelle partie d'un tronçon, dans le plan ou la vue 3D. Dans Propriétés :

- **Système**, **Matériau**, **Classe** et **Dimension** (tuyaux), ou **Forme**, **Largeur**, **Hauteur** (gaines).
- **Hauteur au-dessus du niveau** déplace tout le tronçon vers le haut ou vers le bas.
- **Isolation** : son épaisseur, conservée pour la vérification de dégagement et la liste des ouvertures (rien n'est dessiné pour elle) : voir [Vérifier tuyaux et gaines par rapport à la structure](topic:mep-against-structure).
- Acier : **Découper en tronçons de fabrication** : voir [Tronçons de fabrication en tuyauterie acier et feuilles de tronçons](topic:pipe-spools).
- **Pente** (tuyaux).
- **Débit** avec {{ui:Dimensionner}} : pour l'eau, la plus petite dimension qui maintient l'eau à 8 ft/s (2.4 m/s), ou à 5 ft/s (1.5 m/s) pour l'eau chaude ; à 3 m/s pour le tuyau PVC brésilien pour eau (NBR 5626). Pour les gaines, la vitesse et le taux de frottement de la gaine telle que dessinée. Les évacuations eaux usées sont dimensionnées par leurs unités de décharge : voir **Dimensionner les évacuations selon les unités de décharge** ci-dessus.

Chaque modification correspond à une étape de {{ui:Annuler}}. {{key:Delete}} supprime tout le tronçon.

## Plans

- Les tuyaux de moins de 150 mm (environ 6 in.) sont dessinés en une seule ligne sur leur axe ; les tuyaux plus grands et toutes les gaines sont dessinés en deux lignes à leur largeur.
- Chaque système a sa propre couleur ; le PDF du plan les imprime en noir.
- Chaque tronçon est étiqueté avec sa dimension et son système (par exemple `2" CW` ou `16×10 SA`).
- La plage de vue d'un plan détermine les tronçons qu'il affiche, et {{ui:Affichés dans ce plan}} peut masquer les **Tuyaux** ou les **Gaines** : voir [Vues, plages de vue et vos propres feuilles](topic:views-and-sheets).

## Nomenclatures et métré

Le panneau {{ui:Nomenclatures}} ajoute **Tuyaux** (par système, matériau et dimension, avec leurs longueurs), **Gaines** (par système, forme et dimension, avec longueurs et surface extérieure) et **Raccords et vannes** (par type et dimension, comptés). Cliquez sur une ligne pour choisir ce qu'elle liste ; {{ui:Download CSV}} la télécharge.

{{ui:Métré}} transmet les tronçons à TakeoffCraft : tuyaux et gaines par dimension, comme tronçons dessinés sur le plan (les évacuations en pente sont mesurées le long de leur pente), raccords et vannes comptés là où ils se trouvent : voir [Envoyer les quantités du modèle à TakeoffCraft](topic:takeoff). Les colonnes montantes sont exclues de cette feuille, car un plan ne peut pas les mesurer ; la nomenclature des Tuyaux indique leur longueur.

## Dans le fichier IFC

Chaque tronçon est un assemblage qui contient ses parties : segments de tuyau et de gaine, raccords et vannes, chacun avec son type, son matériau, une couleur pour son système et ses ports. Les ports qui se touchent sont raccordés, et chaque partie appartient à son système de distribution (les fichiers IFC2X3 reçoivent la même chose, comme segments d'écoulement, raccords et contrôleurs dans un système). Les autres logiciels qui lisent les systèmes IFC voient un seul tronçon raccordé par système. La définition propre du tronçon est conservée avec lui, de sorte que BimCraft la recrée à l'identique lorsque vous la modifiez.
