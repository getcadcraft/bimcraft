---
title: Codes de classification (Uniclass, OmniClass, UniFormat)
summary: Attribuez un code de classification à chaque élément et type, choisissez les systèmes qu'utilise un projet, cherchez dans les tables Uniclass fournies avec l'application, chargez les tables sous licence de votre bureau et affichez les codes dans les nomenclatures. Les codes sont écrits dans le fichier IFC pour les autres logiciels.
keywords: classification, classer, code, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, table, code d'élément, code de type, code par défaut, IfcClassification, IfcClassificationReference, cobie, colonne de nomenclature, csv, licence, license
from: 222b94cd
---

## Ce que vous allez faire

Attribuez un code de classification aux murs, dalles, toitures, portes, fenêtres et à tout autre élément du modèle, dans jusqu'à trois systèmes côte à côte : Uniclass, OmniClass et UniFormat. Les autres disciplines et les autres logiciels s'appuient sur le code, et non sur le nom ; les codes sont donc enregistrés dans le fichier IFC sous forme de références de classification que tout logiciel BIM sait lire.

## Attribuer un code à un élément

1. Sélectionnez un élément (ou plusieurs) et ouvrez **Propriétés**. Ouvrez la section {{ui:Classification}}.
2. Saisissez le code dans la case de son système et appuyez sur Entrée. Si une liste de codes est chargée, saisissez une partie du code ou quelques mots (« mur-rideau ») et choisissez parmi les correspondances : le titre du code est rempli pour vous.
3. {{ui:S'applique à}} indique où va le code : **Cet élément**, ou **Son type (tous les éléments du type)**. Un code sur un type de mur est lu par chaque mur de ce type, y compris ceux que vous dessinerez plus tard.
4. {{ui:Effacer}} retire un code.

Sous chaque code, la section indique son origine : défini sur cet élément, issu de son type, ou valeur par défaut du projet pour sa classe. Le code propre à un élément l'emporte toujours sur celui de son type, et celui du type sur une valeur par défaut. Lorsque plusieurs éléments sont sélectionnés, une case indiquant « varie » signifie qu'ils ne partagent pas le même code ; en saisir un l'attribue à tous. Chaque modification correspond à une étape d'annulation.

Un code peut toujours être saisi, qu'une liste soit chargée ou non. S'il ne ressemble pas à un code de ce système, ou n'est pas dans la liste chargée, une indication le signale et le code est conservé tel que vous l'avez saisi.

## Choisir les systèmes du projet

Ouvrez **Données** dans la barre du modèle et choisissez {{ui:Classification}} (ou {{ui:Classification du projet…}} dans la section Propriétés).

- Cochez les systèmes qu'utilise ce projet. Propriétés n'affiche alors que ceux-là.
- **Uniclass** : les tables Éléments / fonctions (EF), Systèmes (Ss) et Produits (Pr) sont fournies avec l'application. Elles sont © NBS, sous licence Creative Commons Attribution-NoDerivatives 4.0, et sont transmises sans modification. La boîte de dialogue indique l'édition de chaque table et le jour où elle a été lue. Ce ne sont pas les tables les plus récentes : l'éditeur publie de nouvelles versions chaque trimestre sur son propre site.
- **OmniClass** et **UniFormat** : aucune liste de codes n'est fournie avec l'application, car leur éditeur n'autorise pas la transmission des tables sans licence. Saisissez n'importe quel code, ou chargez la table sous licence de votre bureau.
- {{ui:Charger une table (CSV)…}} lit la table de votre bureau à partir d'un fichier CSV comportant une colonne de codes et une colonne de titres (une ligne d'en-tête nommée Code, Number ou Identifier, et Title, Name ou Description, est trouvée automatiquement ; sans elle, les deux premières colonnes sont utilisées). La table reste dans ce navigateur et n'est jamais placée dans le fichier du projet. Seuls les codes que vous attribuez sont enregistrés dans le fichier. Vous pouvez charger une table Uniclass plus récente de la même façon.
- {{ui:Donner à des éléments un code par défaut selon leur classe}} attribue à chaque mur, dalle, toiture, porte, fenêtre, escalier, rampe, poteau, poutre et meuble un code Uniclass de départ, tiré de la table Éléments / fonctions, lorsqu'il n'en a pas. Les éléments que vous dessinerez ensuite le reçoivent aussi.
- {{ui:Afficher les codes en colonnes dans les nomenclatures}} ajoute une colonne par système aux nomenclatures Portes, Fenêtres, Murs par type et Pièces, ainsi qu'à leurs CSV. Une ligne de plusieurs éléments affiche « varie » lorsque leurs codes diffèrent.

## Bon à savoir

- Les codes par défaut sont le choix de départ de CadCraft, et non celui de l'éditeur ; ils n'ont pas été vérifiés par un praticien. Vérifiez-les par rapport à la norme de votre projet.
- Dans le fichier, un défaut est une vraie classification, marquée par le nom de relation « CadCraft default », et il disparaît dès que l'élément ou son type reçoit un code propre.
- Les codes qu'un fichier importé possède déjà sont lus et affichés, quelle que soit l'orthographe employée par l'autre logiciel pour le nom du système. Les codes d'un autre système (propre à un bureau) sont listés et laissés tels quels.
- Les codes sont relus à l'ouverture du fichier, ici ou dans un autre logiciel. Ils sont aussi repris dans l'export IFC5 alpha (IFCX) lorsque cette option de laboratoire est activée, sauf un code défini sur une toiture.
- Pas encore disponible : un arbre pour parcourir une table niveau par niveau, des codes sur les niveaux et les pièces comme valeurs par défaut du projet, et la vérification d'un code par rapport à l'édition indiquée dans le fichier.
