---
title: Dépannage
summary: Messages affichés par BimCraft, leurs causes et la marche à suivre, pour l'ouverture de fichiers et de dossiers, les modèles 3D, les dessins et les modifications.
keywords: problème, erreur, ne fonctionne pas, impossible d'ouvrir, échec, incomplet, corrompu, lent, plantage, vide, manquant, message, aide
from: 1e5a79fc
---

Les messages apparaissent dans la ligne d'état en bas de la scène, en rouge lorsqu'une opération a échoué. Repérez le message ci-dessous.

## Ouvrir des fichiers

**« *name* n'est pas un fichier IFC, RVT, RFA, DWG ou DXF. »**
BimCraft n'a pas reconnu le fichier. Vérifiez l'extension et que le fichier n'est pas vide. Les PDF, les images et les fichiers bureautiques ne s'ouvrent pas.

**« .ifczip n'est pas encore pris en charge. Enregistrez ou exportez le modèle en fichier .ifc simple. »** (également pour `.ifcxml`)
Décompressez le `.ifczip` (c'est un zip ordinaire contenant un `.ifc`) ou exportez de l'IFC simple.

**« … est un fichier de projet que BimCraft ne lit pas encore. »**
Un fichier `.pln`, `.pla`, `.tpl` ou `.bpn`. Exportez-le en IFC ou en DWG et ouvrez ce fichier : voir [Ouvrir les fichiers de projet .pln et .pla](topic:pln-project-files).

**« Ce fichier IFC n'a pas pu être lu. »**
Le fichier IFC est endommagé ou n'est pas réellement de l'IFC. Ouvrez-le dans un éditeur de texte : un vrai fichier IFC commence par `ISO-10303-21;`. Exportez-le de nouveau.

**« Ce fichier est incomplet : il fait … MB, mais son propre index pointe vers des données d'au moins … MB. … »**
Le fichier de projet ou de famille a été tronqué pendant la copie, le téléversement ou la synchronisation. Un fichier « en ligne uniquement » sur un lecteur cloud ressemble à cela. Un fichier ouvert seul s'ouvre quand même, avec ce message en haut de la fiche et « Affichage de ce qui a été récupéré ; copiez à nouveau l'original pour obtenir le modèle complet. » : la fiche n'affiche que les parties dont chaque octet est dans le fichier et liste les autres sous **Absent du fichier**. Rendez le fichier disponible hors ligne dans votre lecteur cloud, ou copiez à nouveau l'original, puis rouvrez-le. Dans un dossier, BimCraft affiche plutôt la sauvegarde complète la plus récente.

**« … La liste de contenu du fichier se trouve aussi dans la partie manquante, donc rien ne peut être ouvert. »**
Le fichier a été tronqué si tôt que même sa liste de contenu est absente. Rien ne peut être récupéré de cette copie. Copiez l'original à nouveau et rouvrez-le.

**« Ce fichier composé n'a pas de flux BasicFileInfo, ce n'est donc pas un fichier Revit. »**
Le fichier est un fichier composé d'un autre type (les anciens documents bureautiques utilisent le même conteneur). Vérifiez que vous avez choisi le bon fichier.

**« Je travaille encore sur le dernier… »**
BimCraft travaille encore sur le fichier ou le dossier précédent. Attendez que la ligne d'état se termine, puis réessayez.

**Le sélecteur de fichiers grise mon fichier.**
Le sélecteur ne propose que les fichiers `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` et `.dxf`. Faites glisser les autres fichiers sur la page à la place, et BimCraft vous indiquera s'il peut les lire.

## Ouvrir des dossiers

**« Ce dossier contient plus de 20 000 fichiers. Choisissez un dossier plus petit, comme celui d'un projet. »**
Vous avez choisi un dossier situé trop haut, comme un disque entier. Choisissez le dossier d'un projet.

**« Le navigateur n'a pas donné accès à *name*. Choisissez-le de nouveau avec Ouvrir un dossier. »**
Vous avez cliqué sur {{ui:Reopen}} pour un dossier récent, et l'autorisation du navigateur a été refusée ou a expiré. Choisissez de nouveau le dossier, ou faites-le glisser.

**Le navigateur indique qu'il va « téléverser » les fichiers.**
C'est le terme du navigateur pour remettre des fichiers à une page. BimCraft ne les envoie nulle part. Faites glisser le dossier pour éviter la question.

**Rien ne se passe sur un téléphone ou une tablette.**
Beaucoup de navigateurs mobiles ne peuvent pas choisir de dossiers. Ouvrez des fichiers isolés, ou utilisez un ordinateur.

## Le moteur IFC se charge la première fois

**La ligne d'état reste sur « Démarrage du moteur IFC… », ou affiche une erreur comme « Failed to fetch ».**
Le moteur IFC n'a pas pu être téléchargé. Vous êtes peut-être hors ligne, ou un pare-feu ou un bloqueur de contenu l'empêche.

:::offline
Vous êtes hors ligne. Si le bouton de la barre d'application n'affiche pas {{ui:Offline ready}}, le moteur IFC n'a jamais été enregistré dans ce navigateur. Reconnectez-vous, rouvrez le fichier, puis cliquez sur {{ui:Save for offline}} pour qu'il fonctionne hors ligne la prochaine fois. Voir [En ligne et hors ligne](topic:online-offline).
:::

:::online
Rechargez la page et réessayez. Sur un réseau professionnel, demandez à votre service informatique d'autoriser les fichiers `.wasm` du site.
:::

## Enregistrer pour une utilisation hors ligne

**Le bouton affiche {{ui:Could not save}}.**
Certains fichiers n'ont pas été téléchargés, généralement parce que la connexion a été interrompue. Vérifiez votre connexion et cliquez de nouveau sur le bouton. Une copie hors ligne antérieure est conservée jusqu'à ce qu'une nouvelle copie soit complète.

**Le bouton affiche {{ui:Offline not available}}.**
Cette fenêtre ne peut pas conserver une copie hors ligne, par exemple une fenêtre de navigation privée ou un ordinateur professionnel géré. Voir [Travailler hors ligne](common:offline).

**Le bouton reste sur « Enregistrement de *n* sur *m* » pendant un moment.**
La copie de BimCraft fait environ 11 MB, dont l'essentiel est le moteur IFC. Gardez l'onglet ouvert jusqu'à ce qu'il affiche {{ui:Offline ready}}.

**BimCraft s'ouvre hors ligne mais semble périmé.**
Votre copie enregistrée date d'une visite antérieure. Lorsque vous êtes en ligne, cliquez sur {{ui:Offline ready}} et choisissez {{ui:Save again (get the newest version)}}.

## Vue 3D

**Le modèle n'est pas là où je l'attendais, ou il est minuscule.**
Appuyez sur {{key:F}} ou cliquez sur {{ui:Fit}}. Ajuster cadre toujours tout le modèle, y compris les étages que vous avez décochés et les éléments isolés loin du bâtiment ; le bâtiment peut donc paraître petit. Zoomez à partir de là.

**Cliquer ne sélectionne rien.**
Gardez la souris immobile pendant que vous cliquez : un léger glissement fait orbiter. Les éléments des étages décochés ne peuvent pas être sélectionnés. Lorsque {{ui:Spaces}} est activé, les espaces transparents sont sélectionnés avant ce qu'ils contiennent.

**Le bouton {{ui:Edges}} est grisé : « Les arêtes sont désactivées pour les très grands modèles ».**
Le modèle compte plus de 1.5 million de triangles. Les arêtes sont laissées désactivées pour économiser la mémoire.

**L'onglet ralentit, devient blanc, ou affiche la page de plantage du navigateur.**
Le modèle est trop volumineux pour la mémoire que le navigateur accorde à l'onglet. Fermez les autres onglets et rechargez. Exportez un IFC plus petit : un seul bâtiment, une seule discipline ou moins d'étages. Voir [Navigateurs, appareils et mémoire](topic:platforms).

**La vue 3D reste vide.**
WebGL est peut-être désactivé ou bloqué. Dans les paramètres du navigateur, activez l'accélération matérielle (ou l'accélération graphique) et redémarrez le navigateur.

## Modifier l'IFC

**« Saisissez un nombre. »** La valeur est numérique. Saisissez un nombre simple, sans unité, comme `2.4`.

**« Saisissez un nombre entier. »** La valeur est un compte ou un entier. Supprimez les décimales.

**« Seules les propriétés à valeur unique peuvent être modifiées. »** Les listes, les énumérations et les quantités sont en lecture seule.

**{{key:Mod+S}} ouvre la fenêtre « Enregistrer la page » du navigateur.**
Il n'y a aucune modification non enregistrée, donc BimCraft laisse la touche au navigateur. Fermez la fenêtre.

**{{key:Mod+Z}} ne fait rien.**
Cela ne fonctionne que lorsque vous avez des modifications non enregistrées et que vous ne saisissez pas dans un champ. Après un enregistrement, il n'y a plus rien à annuler.

**La liste {{ui:Changes}} affiche encore des modifications après que je les ai abandonnées et ouvert un dessin ou un dossier.**
Lorsque vous répondez OK à la question « Les abandonner ? », puis ouvrez autre chose qu'un modèle IFC, les anciennes modifications restent en mémoire et {{ui:Save as IFC}} les enregistrerait encore. Pour vraiment repartir de zéro, ouvrez de nouveau l'IFC d'origine, ou rechargez la page.

**Ma modification a changé plus d'éléments que ceux que j'ai sélectionnés.**
Vous avez modifié une propriété d'un ensemble marqué « (type) ». Les propriétés de type s'appliquent à tous les éléments du type. Cliquez sur {{ui:Undo}}. Voir [Modifier une propriété de type pour chaque élément d'un type](topic:type-vs-instance).

## Dessins

**« *name* n'a pas pu être lu. Il est peut-être endommagé, ou enregistré dans un format que le lecteur ne gère pas encore (…). »**
Enregistrez le dessin depuis le programme qui l'a créé, en DWG ancien (2018 ou antérieur) ou en DXF, puis réessayez.

**« Ce dessin n'a rien à afficher. » ou « *name* est un dessin vide : il ne contient ni lignes, ni texte, ni blocs. »**
Le dessin est vide, ou ne contient que des éléments que BimCraft ne dessine pas encore (voir **Pas encore dessiné** à droite).

**« Ce dessin est très grand ; seule une partie est affichée. »**
BimCraft a arrêté le dessin pour rester réactif. Désactivez les calques dont vous n'avez pas besoin, ou ouvrez les feuilles nécessaires depuis un dessin plus petit.

**Des parties d'une feuille manquent.**
Des dessins liés peuvent manquer : regardez sous **Dessins liés** à droite. Voir [Retrouver les dessins liés et les images](topic:dwg-linked-files). Les calques peuvent aussi être désactivés : cliquez sur {{ui:All on}}.

**Une image s'affiche comme un cadre vide.**
Son fichier est introuvable, ou c'est un TIFF (« Le TIFF ne peut pas être affiché dans un navigateur »). Ajoutez une copie PNG ou JPEG avec {{ui:Add pictures…}}.

**Le défilement de mon pavé tactile zoome au lieu de déplacer le dessin.**
C'est le fonctionnement normal des dessins dans BimCraft. Cliquez et faites glisser pour faire un panoramique.

## Toujours bloqué ?

Lisez [Ce qui n'est pas encore disponible](topic:not-built-yet) : ce que vous cherchez n'existe peut-être pas dans cette version.
