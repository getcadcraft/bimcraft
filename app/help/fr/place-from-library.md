---
title: Placer des équipements et du mobilier depuis la bibliothèque
summary: Trouvez un élément dans la Bibliothèque, un fichier ou le dessin ouvert, placez-le sur un niveau d'un modèle IFC avec un aperçu fantôme, tournez-le, accrochez-le à un mur et enregistrez.
keywords: déplacer, pivoter, tourner, glisser, bibliothèque, librarycraft, placer, insérer, équipement, mobilier, bloc, famille, élément, catalogue, contenu, kcl, csv, gltf, obj, rfa, dwg, type IFC
from: 3dad5d4b
---

## Ce que vous allez faire

Placez un élément de bibliothèque dans un modèle IFC : un évier, une table de travail, une chaise. BimCraft l'écrit comme un élément IFC à part entière, avec un type, de sorte que chaque copie du même élément partage une seule géométrie, et que ses données, son numéro d'élément et sa licence l'accompagnent.

## Étapes

1. Ouvrez un modèle IFC.
2. Cliquez sur l'onglet {{ui:Bibliothèque}} à côté de Propriétés, à droite, ou sur {{ui:Bibliothèque}} dans la barre d'outils au-dessus du modèle.
3. Choisissez une source :
   - **Symboles intégrés** : symboles génériques de plan de plomberie fournis avec BimCraft sous Apache-2.0, disponibles hors ligne. Vérifiez leurs dimensions avant travaux. Pour les symboles électriques de plan et les appareillages IFC, utilisez **Build › Électricité**.
   - **Bibliothèque** : la bibliothèque CadCraft de ce site. Les éléments publics ne demandent pas de connexion.
   - **Ce fichier** : les blocs d'un dessin DWG ou DXF ouvert. Un bloc dynamique avec des états de visibilité est proposé une fois par état, nommé « Évier : double bac », chacun dessiné avec seulement les objets de cet état.
   - **Fichiers…** : un fichier DWG, DXF, IFC, glTF/GLB, OBJ, RFA ou CSV sur votre ordinateur. Il est lu dans cet onglet ; rien n'est téléversé.
   - **Autres flux** : une autre bibliothèque qui utilise le même format de flux. Ajoutez son adresse une fois ; elle est conservée dans ce navigateur.
4. Recherchez ou choisissez une catégorie, puis cliquez sur une carte. La carte affiche un aperçu en plan, le nom, le fabricant et le modèle, la licence et la version.
5. Cliquez sur {{ui:Placer sur le plan}} (dans la vue Plan) ou {{ui:Placer dans le modèle}} (dans la vue 3D). Dans la vue {{ui:Diviser}}, où le plan et la vue 3D s'affichent ensemble, le bouton est un bouton divisé : son action principale est {{ui:Placer sur le plan}}, et la flèche à son extrémité droite ouvre un menu avec {{ui:Placer dans le modèle}}. Vous pouvez aussi faire glisser la carte, ou l'image dans le détail de l'élément, sur le plan ou la vue 3D : l'élément est placé là où vous relâchez. Avec un stylet ou un doigt, maintenez la carte appuyée un instant, puis faites-la glisser.
6. Choisissez le niveau dans la barre de placement. Dans la vue 3D, les niveaux au-dessus sont masqués pendant le placement et la vue se place en vue de dessus ; dans le plan, celui-ci est déjà affiché. Choisir {{ui:Placer dans le modèle}} depuis le plan seul affiche la vue 3D à côté.
7. Déplacez le pointeur sur le modèle : une boîte translucide montre où ira l'élément.
8. Appuyez sur {{key:R}} pour le tourner de 90°. Appuyez sur {{key:Tab}} (ou {{ui:Accrochage au mur}}) pour appuyer son dos contre le mur le plus proche, face à la pièce.
9. Cliquez pour le placer. Ou saisissez la position dans **X, Y (mm)**, par exemple `1200, 3400`, et appuyez sur {{key:Enter}}.

Un luminaire ou tout élément suspendu : réglez **Fixation** sur **Au plafond**. Le haut de l'élément se place alors sous le plafond, à cet endroit (ou à la hauteur du niveau s'il n'y a pas de plafond). Avec un plan de plafond affiché dans la vue Plan, **Fixation** commence sur **Au plafond**.

10. Répondez à la seule question : le **numéro d'élément** (le prochain numéro libre est rempli), la quantité et une note. Appuyez sur {{key:Enter}}.
11. Placez-en d'autres, ou appuyez sur {{key:Esc}} pour arrêter.
12. Cliquez sur {{ui:Enregistrer au format IFC}} pour télécharger la copie modifiée.

## Plan ou modèle

Le bouton de placement de la Bibliothèque suit la vue dans laquelle vous êtes, et change dès que vous changez de vue (les boutons {{ui:Plan}}, {{ui:Diviser}} et {{ui:3D}}, le clavier, l'ouverture d'un fichier). Plan affiche un bouton, {{ui:Placer sur le plan}} ; 3D affiche un bouton, {{ui:Placer dans le modèle}} ; Diviser affiche le bouton divisé, avec {{ui:Placer sur le plan}} comme action principale et {{ui:Placer dans le modèle}} dans son menu. Les deux façons utilisent la même barre de placement et écrivent le même élément IFC : le pointeur travaille dans la vue Plan pour l'une, et dans la vue 3D pour l'autre. Appuyez sur {{key:Esc}} à tout moment pour arrêter.

Faire glisser une carte n'a pas de raccourci clavier propre : le bouton divisé, ou le bouton simple, fait la même chose au clavier.

## Déplacer ou tourner un élément placé

Dans {{ui:Dessin}}, sélectionnez l'élément dans le plan. Une poignée carrée apparaît à son point d'insertion, et une poignée ronde à côté.

- Faites glisser l'élément, ou sa poignée carrée, pour le déplacer. Il s'accroche comme l'outil Mur (extrémités et faces des murs) ; {{key:Shift}} le garde d'équerre par rapport à sa position d'origine.
- Faites glisser la poignée ronde pour le tourner par pas de 15°. Maintenez {{key:Shift}} pour des pas de 1°.
- Appuyez sur {{key:R}} pour le tourner de 90°.
- Dans **Propriétés** (aussi dans la vue 3D), saisissez **X**, **Y** et **Rotation (°)**, ou cliquez sur **Tourner de 90°**.

Chaque déplacement est une étape d'annulation et se transmet dans le travail collaboratif Live. L'élément conserve son numéro d'élément, ses données de bibliothèque et sa hauteur au-dessus du niveau. Pas encore disponible : le déplacer par glisser dans la vue 3D.

## Ce que vous devez voir

- L'élément dans le modèle, sélectionné, avec ses propriétés à droite : une boîte **Élément de bibliothèque** avec sa licence et son attribution, et les ensembles `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` et, pour les éléments issus de dessins balisés, `CadCraft_SourceAttributes`.
- « Placé : *élément* (élément *n*) » dans la liste des modifications. {{key:Mod+Z}} l'annule.
- La ligne d'état : « Placé *élément* comme élément *n*. »

## Bon à savoir

- Certains éléments existent en plusieurs dimensions ou options : la carte affiche alors un choix **Variante**, et celle que vous choisissez est celle qui est placée. Voir [Placer et remplacer un élément de bibliothèque qui a des variantes](topic:library-variants).
- Un élément sans corps 3D (un symbole 2D) est placé avec une boîte provisoire ; vous indiquez sa hauteur lorsqu'on vous la demande.
- Pour d'autres copies : sélectionnez un élément placé et utilisez {{ui:Copier}} et {{ui:Coller}}, ou {{key:Mod+D}}. Voir [Copier, coller et dupliquer des éléments de bibliothèque](topic:copy-paste).
- Pour que chaque placement démarre avec l'accrochage au mur activé, activez **Démarrer avec l'accrochage au mur** dans les [paramètres de BimCraft](topic:settings).
- Les longueurs sont converties dans les unités propres au modèle, quelles qu'elles soient.
- **Entourage** (arbres, arbustes, personnes, voitures) figure aussi dans la bibliothèque : recherchez « tree », « person » ou « car » . Ces éléments sont dessinés par CadCraft (CC0) et gardent leurs couleurs au placement (un tronc brun, un feuillage vert, des vitres de voiture translucides), dans BimCraft comme dans les autres logiciels BIM. Ils apparaissent dans les [images de rendu](topic:render).
- Dans un fichier IFC2X3, le corps est écrit comme un solide facetté ; en IFC4, comme un ensemble de faces triangulées. Les deux s'ouvrent dans les autres outils IFC.
- Un dessin (DWG ou DXF) ne peut pas être enregistré ici : les éléments ne sont donc placés que dans les modèles IFC. Utilisez **Ce fichier** sur un dessin pour voir ce que deviendraient ses blocs.

## Éléments dans votre langue

Un élément peut porter son nom, sa description et son type dans d'autres langues. Lorsqu'il les a dans la langue réglée dans BimCraft (Paramètres › Général › Langue), la page de l'élément les affiche, avec le nom donné par son fabricant en dessous, et **Placer** écrit le nom dans votre langue dans le modèle, de sorte que la nomenclature {{ui:Équipements}} le liste ainsi. L'élément reste le même : la vérification des mises à jour et les remplacements se font par l'élément lui-même, jamais par son nom. Les éléments sans traduction conservent leurs propres mots.

## Erreurs fréquentes

- **Le bouton de placement est absent.** Aucun modèle IFC n'est ouvert. Ouvrez-en un d'abord.
- **Le fantôme ne suit pas le pointeur.** Le pointeur est hors de la zone du modèle, ou le plan du niveau est hors de vue. Cliquez sur {{ui:Dessus}}.
- **{{ui:Accrochage au mur}} indique qu'il n'y a pas de murs.** Le niveau n'a pas de murs dans l'IFC (certaines exportations placent les murs sur un autre niveau). Choisissez ce niveau, ou saisissez X et Y.
- **Les éléments d'un fichier ont la mauvaise taille.** Le fichier n'a pas d'unités, ou en indique de fausses. Dans {{ui:Fichiers…}}, choisissez les unités et relisez-le.

:::tip
Placer deux fois le même élément partage un seul type IFC : un modèle avec quarante chaises ne stocke la chaise qu'une fois.
:::
