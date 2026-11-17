---
title: La palette de symboles
summary: Trouvez des symboles électriques et de plomberie par leur nom ou leur image, marquez ceux que vous utilisez et placez-les sur le plan d'un seul clic.
keywords: palette de symboles, bouton de la barre des symboles, mur suivi, symboles, symboles électriques, symboles de plomberie, plan de plomberie, cuvette, WC, lavabo, évier, baignoire, douche, siphon de sol, regard de nettoyage, robinet de puisage, chauffe-eau, vanne, eau froide, eau chaude, évacuation, ventilation, style de ligne, favoris, recherche
from: 67f20bc0
---

## Ce que vous allez faire

Ouvrez un seul panneau qui liste les symboles électriques et les symboles de plan de plomberie avec leurs images et leurs noms, trouvez celui qu'il vous faut et placez-le sur le plan. Rien ici ne nécessite Internet : les symboles sont fournis avec l'application.

## Ouvrir la palette et placer un symbole

1. Ouvrez un modèle, puis {{ui:Build}} › {{ui:Palette de symboles}} (commande saisie : SYMBOLS). Le même bouton se trouve dans le menu Outils de la barre Dessin, et sous le nom **Symboles** dans le groupe Bibliothèque de la barre d'outils.
2. Choisissez un jeu : **Électrique** ou **Plomberie**, ou **Tous les jeux**. Saisissez dans le champ de recherche pour réduire la liste. Vous pouvez chercher par nom ou par abréviation (WC, CW, HB).
3. Cliquez sur un symbole. Le plan est prêt à le placer.
   - Un symbole **électrique** lance l'outil Électrique avec cet appareil choisi ; tout ce qui est décrit dans [Le plan électrique](topic:electrical-plan) s'applique donc : cliquez sur le plan, une seule étape d'annulation.
   - Un symbole de **plomberie** lance l'outil de symboles de plan. Cliquez sur le plan. Un appareil posé sur un mur (cuvette, lavabo, baignoire, évier, robinet de puisage) s'aligne sur la face du mur la plus proche, le dos contre le mur ; les siphons, les vannes, le chauffe-eau et les styles de ligne vont là où vous cliquez.
4. Appuyez sur {{key:R}} pour tourner le symbole de 90 degrés ({{key:Shift}}+{{key:R}} le tourne dans l'autre sens), ou saisissez un angle dans **Rotation** dans la barre d'options. Appuyez sur {{key:Esc}} pour arrêter.

Un appareil ou un robinet de puisage qui s'est aligné sur une face de mur se souvient de ce mur : lorsque le mur se déplace, le symbole le suit (même face, même distance le long du mur) dans la même étape d'annulation. Si vous supprimez le mur, le symbole reste à son emplacement et **Problèmes** signale qu'il « a perdu son mur » ; déplacez-le ou supprimez-le. Les symboles placés à distance des murs ne sont liés à rien.

Chaque symbole placé est une étape d'annulation. Un symbole placé est une annotation de plan dans le fichier IFC, avec son repère (WC1, WC2, ...). Sélectionnez-le pour modifier son repère ou sa rotation dans **Propriétés**, ou appuyez sur {{key:Delete}}.

## Ce que contient le jeu de plomberie

Les appareils (cuvette WC, urinoir, lavabo, baignoire, douche, évier de cuisine, évier simple), un siphon de sol, des regards de nettoyage au sol et au mur, un robinet de puisage, un robinet mural, un chauffe-eau, des vannes (à opercule, à soupape, à boisseau sphérique, clapet, papillon, réducteur de pression) et des styles de ligne avec leurs abréviations : eau froide (CW), eau chaude (HW), retour d'eau chaude (HWR), évacuation (W), ventilation (V), évacuation des eaux pluviales (SD) et gaz (G). Les dessins suivent l'échelle du plan : ils gardent donc leur taille sur la feuille imprimée. Un style de ligne est un court tronçon qui montre le style sur le plan ; dessinez les véritables tronçons de tuyauterie avec les outils de tuyauterie.

:::note
Il s'agit de conventions usuelles de plan de plomberie, dessinées par nous ; elles ne sont pas certifiées selon ISO 4067-1 ou ASME Y32.4. Elles ont été comparées à des légendes de dessin et à des manuels de formation publics (la liste figure dans la note de sources du jeu, qui indique où nous correspondons et où nous différons), elles ne sont pas copiées d'un produit, et elles sont libres d'utilisation (Apache-2.0). Les jeux de dessin diffèrent : vérifiez la légende de votre propre projet. Ce sont des symboles de plan, et non une étude de plomberie : ils ne dimensionnent pas les tuyaux et ne vérifient pas les règlements.
:::

## Favoris et clavier

- Cliquez sur l'étoile d'un symbole (ou appuyez sur {{key:F}} sur celui-ci) pour le garder en favori. Les favoris sont listés en premier et restent dans ce navigateur. **Favoris uniquement** n'affiche que ceux-ci.
- {{key:Down}} depuis le champ de recherche passe aux symboles ; les touches fléchées, {{key:Home}} et {{key:End}} se déplacent entre eux ; {{key:Enter}} choisit celui qui a le focus ; {{key:Esc}} ferme la palette.
- Sur téléphone, la palette est une feuille en bas de l'écran ; elle s'efface lorsque vous choisissez un symbole, pour que vous voyiez le plan. Rouvrez-la depuis le menu Build ou le bouton **Palette** de la barre d'options.

:::tip
Si un fichier utilise un jeu de symboles que cette version ne possède pas, le plan affiche une case à l'emplacement du symbole, et **Problèmes** le signale.
:::

## Lier un élément placé à un symbole

Un luminaire issu de la bibliothèque est un élément 3D, mais un plan électrique le montre par son symbole. Vous le placez **une fois**, puis vous le liez :

1. Choisissez Build › **Lien vers un symbole** (ou saisissez SYMBOLLINK). Une section Lien vers un symbole s'ouvre dans le panneau de gauche.
2. Choisissez les éléments placés dans le plan ou en 3D. La section indique combien sont sélectionnés et à quoi ils sont liés.
3. Choisissez le **Symbole** (dans n'importe quel jeu : Électrique, Plomberie), puis choisissez **Lier**.

L'élément reste un seul élément, et chaque nomenclature le compte une seule fois :

- La **3D** affiche toujours son volume.
- Un **plan** affiche sa forme de plan, comme auparavant.
- Un plan dont **Cette vue affiche les éléments liés comme** est réglé sur **Leur symbole (un plan de services)** affiche le symbole à sa place. Un clic sur le symbole sélectionne l'élément. Ce choix est conservé dans le fichier pour cette vue (le plan d'étage d'un niveau, son plan de plafond ou un renvoi).

**Tourner le symbole de 90°** fait pivoter le symbole par rapport à son élément. **Supprimer le lien** retire le lien ; l'élément reste. La nomenclature **Symboles liés** liste chaque élément lié une seule fois, avec son niveau et la pièce dans laquelle il se trouve.

Pas encore disponible : le choix d'une vue sur une feuille est celui du plan du niveau qu'elle affiche ; les appareils placés avec l'outil Électrique sont des symboles dans tous les plans, comme auparavant.
