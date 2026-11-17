---
title: Ossature des murs, planchers et toitures
summary: Générer montants, lisses, linteaux, solives, chevrons ou fermes à partir du modèle et les conserver avec lui ; ils sont refaits lorsque les murs, ouvertures, planchers ou la toiture changent, et la nomenclature Bois est la liste de débit.
keywords: TJI, solive en I, tableau de portées de solives, charger un tableau, ossature, charpente, montant, lisse, lisse haute, linteau, montant d'about, chandelle, chevêtre, montant court, appui, entretoise, angle, angle californien, té, solive, solive de rive, solive de ceinture, chevron, chevron de croupe, chevron de noue, chevron d'about, faîtière, solive de plafond, entrait retroussé, ferme, bois, liste de débit, board feet, 2x4, 2x6, entraxe
from: 76d0ffb5
---

## Ce que vous allez faire

Charpenter le bâtiment à partir de ce que vous avez dessiné. BimCraft dispose les montants, lisses et linteaux dans les murs, les solives dans les planchers et les chevrons (ou fermes) dans la toiture, les dimensionne à partir de tableaux par défaut signalés, les conserve avec le modèle et les refait chaque fois que ce qu'ils charpentent change. La nomenclature **Bois** est la liste de débit.

## Charpenter

1. Sur un niveau, ouvrez {{ui:Build}} et choisissez {{ui:Ossature}}.
2. Choisissez l'**entraxe** (16" ou 24" d'axe en axe ; 400 ou 600 mm), les **angles** (à trois montants ou californiens), **Chevrons** ou **Fermes** pour les toitures, et si les murs reçoivent une rangée de **calages** à mi-hauteur. Pour les planchers, choisissez **Bois scié** ou **TJI (préliminaire)**, et réglez la direction des solives sur automatique, X du plan ou Y du plan.
3. Cliquez sur **Charpenter chaque mur**, ou cliquez sur un mur, un plancher ou une toiture (au niveau sur lequel repose la toiture) pour ne charpenter que celui-ci.

Désactivez **Afficher l'ossature** pour masquer toutes les pièces d'ossature, comme un calque ; **Voir à travers** masque les murs, planchers et toitures charpentés pour que vous puissiez regarder l'ossature seule.

## Ce que vous obtenez

- **Murs** : une lisse basse (coupée aux portes), une double lisse haute, des montants disposés sur le tracé à partir du début du mur, des montants d'about et un linteau à chaque porte et fenêtre, des montants courts au-dessus des linteaux et sous les fenêtres, un appui brut sous les fenêtres, des angles là où les murs se rejoignent (le mur qui traverse prend les montants d'angle), deux montants d'appui là où un autre mur se raccorde en té, et des calages entre les montants.
- **Planchers** : des solives dans le sens court du plancher par défaut, ou selon l'axe de plan que vous choisissez ; des solives de rive autour du bord, et des chevêtres et linteaux doublés autour d'une cage d'escalier, les solives qui la traversent étant coupées court (solives courtes). Le mode TJI choisit la plus petite série et la plus petite hauteur listées qui atteignent la portée libre mesurée, à l'entraxe choisi.
- **Toitures** : chevrons courants d'équerre à chaque égout, chevrons d'about là où les croupes et les noues les coupent, chevrons de croupe et de noue, faîtières, solives de plafond sur les lisses et entraits retroussés, ou fermes simples à l'entraxe, une pièce chacune.

## La modifier

Sélectionnez n'importe quelle pièce d'ossature dans la vue 3D ou dans l'arborescence du modèle. **Propriétés** affiche son ossature : modifiez l'entraxe, le type et la direction des solives de plancher, les angles, les calages ou l'ossature de toiture. Déplacer des murs, des portes et des fenêtres, ou modifier le plancher ou la toiture, refait l'ossature automatiquement.

Pour conserver une pièce que vous avez placée volontairement lorsque l'ossature est refaite, sélectionnez-la et choisissez **Conserver cette pièce lorsque l'ossature est refaite**. Une pièce conservée reste à sa place ; lorsque l'ossature qui l'entoure change, elle est signalée pour que vous la vérifiez.

## Planchers TJI à partir d'un tableau chargé

BimCraft ne contient aucun tableau de portées de fabricant de solives : ils appartiennent au fabricant et changent à chaque édition. Sélectionnez l'ossature d'un plancher, réglez **Solives de plancher** sur **TJI (préliminaire)** et choisissez **Charger un tableau…** dans **Propriétés** : un fichier au format `cadcraft-tji-table`, en JSON ou en CSV, que vous avez établi à partir des tableaux de portées en vigueur du fabricant. Il indique le fabricant, le produit, l'édition et la source des valeurs, et liste pour chaque cas de charge (charge d'exploitation, charge permanente, limite de flèche, longueur d'appui) la plus grande portée libre de chaque série et hauteur à chaque entraxe.

- BimCraft prend la **portée libre** du plancher, choisit la hauteur la plus faible et, dans celle-ci, la série dont la portée listée atteint celle-ci pour l'entraxe et le cas de charge que vous avez choisis, puis charpente le plancher avec elle. Si la portée ou l'entraxe est hors du tableau, il le signale et ne change rien.
- Les charges, la limite de flèche, la longueur d'appui, le tableau et la phrase « Indications de disposition préliminaires ; le choix définitif exige les tableaux du fabricant et les charges du projet » sont imprimés sur la nomenclature Bois, inscrits dans le modèle avec l'ossature et listés dans le panneau **Problèmes** comme une note. Un tableau marqué comme exemple le signale dans un avertissement.
- Avec le complément **Réglementation du bâtiment** activé, sa règle sur les solives de plancher lit aussi un tableau chargé ; sans tableau, les solives TJI sont exclues de cette vérification, comme auparavant.
- Le tableau reste dans ce navigateur jusqu'à ce que vous le videz ou en chargiez un autre. Le fichier comporte : `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial` : pouces, pieds, psf ; ou `metric` : mm, mètres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) et `rows` (`series`, `depth`, `spans` : pour chaque id de cas, l'entraxe et la plus grande portée libre, par exemple `"16": "15-6"`). En CSV, les mêmes informations figurent dans des lignes `# clé = valeur`, puis `series,depth,case,spacing,span`.
- Sans tableau chargé, une disposition TJI est refusée et rien ne change : **Charger un tableau TJI : les tableaux du fabricant lui appartiennent et ne sont pas intégrés.** Un modèle charpenté avec l'ancien tableau TJI intégré (avant cette modification) conserve toutes ses solives ; Propriétés et Problèmes indiquent qu'il faut le tableau, et le plancher peut être charpenté de nouveau dès que vous en chargez un. Les solives en bois scié fonctionnent comme auparavant.

Il s'agit d'une indication de disposition. Le choix définitif des solives exige les tableaux du fabricant, les charges du projet et l'avis de l'ingénieur.

## La liste de débit

Dans le panneau Nomenclatures, choisissez **Bois** : chaque pièce d'ossature regroupée par section et par longueur commerciale que vous achèteriez (longueurs entières de 2 ft à partir de 8 ft ; pas de 600 mm à partir de 2400 mm en millimètres), avec le nombre de pièces et les board feet. **CSV** la télécharge.

:::warning
Les dimensions des linteaux, solives, chevrons et solives de plafond proviennent de tableaux par défaut signalés pour une maison courante à un ou deux niveaux, et non d'un calcul d'ingénierie. **Propriétés** indique lorsqu'une portée ou une ouverture dépasse son tableau. Un concepteur ou un ingénieur vérifie les portées, les charges et les assemblages.

Les dispositions TJI n'utilisent qu'un tableau que vous chargez, établi à partir des tableaux de portées en vigueur du fabricant ; BimCraft n'en livre aucun. La suggestion ne vérifie ni les appuis, ni les charges ponctuelles, ni les porte-à-faux, ni les trous, ni les linteaux de cage d'escalier, ni les assemblages, et la forme en I du modèle est schématique.
:::

## Ce qui est enregistré

Chaque mur, plancher ou toiture charpenté est un assemblage d'éléments IFC (« Framing ») composé de membrures IFC (montants, lisses, chevrons, entraits retroussés, calages, fermes) et de poutres (linteaux, solives, rives, faîtières), chacune avec sa section, sa longueur et ses board feet.
