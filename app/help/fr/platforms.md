---
title: Navigateurs, appareils et mémoire
summary: Ce qui change dans BimCraft entre Chrome, Edge, Firefox et Safari, sur Mac, Windows et Linux, avec une souris, un pavé tactile ou un écran tactile, et la taille de fichier qu'il peut supporter.
keywords: navigateur, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablette, téléphone, tactile, pavé tactile, mémoire, gros fichiers, webgl, performance
from: fd8acba1
---

BimCraft fonctionne dans les versions actuelles de Chrome, Edge, Firefox et Safari, sur Mac, Windows et Linux. La vue 3D a besoin de WebGL, que tous les navigateurs actuels possèdent. Voir [Navigateurs et ordinateurs](common:browsers) pour ce dont les applications ont besoin en général.

## Ouvrir un dossier

| Navigateur | {{ui:Ouvrir un dossier}} fait ceci | Glisser un dossier | {{ui:Dossiers récents}} |
|---|---|---|---|
| Chrome, Edge | Le sélecteur de dossier du navigateur, puis « Autoriser le site à afficher les fichiers ? » : cliquez sur **Afficher les fichiers** | S'ouvre sans invite | Oui, pour les dossiers choisis ou glissés |
| Firefox | Le sélecteur de dossier du système | S'ouvre sans invite | Non |
| Safari | Le sélecteur de dossier du système, avec un bouton **Téléverser** (rien n'est téléversé) | S'ouvre sans invite | Non |

En coulisses : Chrome et Edge utilisent le sélecteur d'accès au système de fichiers et peuvent mémoriser le dossier. Firefox et Safari utilisent l'ancien sélecteur de dossier, qui transmet tous les fichiers du dossier d'un coup et ne peut pas être mémorisé. Un dossier glissé est lu entrée par entrée dans tous les navigateurs.

:::chromium
Brave et d'autres navigateurs basés sur Chromium désactivent le sélecteur de dossier. BimCraft utilise alors le sélecteur de dossier du système, et le navigateur peut demander « Téléverser *n* fichiers vers ce site ? ». Rien n'est téléversé ; les fichiers vont seulement vers l'onglet. Glisser le dossier évite la question.
:::

## Mac, Windows et Linux

- Les raccourcis {{key:Mod+S}} et {{key:Mod+Z}} utilisent Command sur Mac et Ctrl sur Windows et Linux.
- {{key:Ctrl+Shift+F}} (modes d'affichage) utilise Ctrl sur toutes les plateformes, y compris sur Mac.
- Les boîtes de dialogue des fichiers et le dossier des téléchargements sont ceux de votre système.

## Souris, pavé tactile et écran tactile

| Dispositif | Vue 3D | Dessin 2D |
|---|---|---|
| Souris | Glisser avec le bouton gauche effectue une orbite, avec le bouton droit un panoramique ; la molette zoome, le clic sélectionne | Tout glisser fait un panoramique, la molette zoome, le double-clic ajuste |
| Pavé tactile | Clic et glissement : orbite ; {{key:Shift}} ou {{key:Mod}} et glissement : panoramique ; défilement à deux doigts ou pincement : zoom | Clic et glissement : panoramique ; défilement à deux doigts ou pincement : zoom |
| Écran tactile | Un doigt : orbite ; deux doigts : pincement et panoramique ; appui : sélection | Un doigt : panoramique ; pas encore de zoom par pincement ; appuyez sur {{ui:Ajuster}} |

Sur un pavé tactile de Mac, le clic droit est un clic à deux doigts (ou un clic avec Control). Voir [Touches, souris et pavés tactiles](common:keys).

Les tablettes et téléphones peuvent ouvrir des fichiers isolés et les consulter, mais l'écran est petit, de nombreux navigateurs mobiles ne peuvent pas choisir de dossiers, et les grands modèles peuvent ne pas tenir dans leur mémoire. Un ordinateur donne les meilleurs résultats.

## Gros fichiers et mémoire

Tout ce que BimCraft lit réside dans la mémoire de l'onglet du navigateur. La quantité qu'un onglet peut utiliser dépend du navigateur et de votre ordinateur, bien plus que de BimCraft.

| Fichier | Quantité lue | À attendre |
|---|---|---|
| IFC | Le fichier entier, plus la géométrie 3D construite à partir de lui | Cela dépend de votre ordinateur et de votre navigateur ; un modèle de plusieurs centaines de mégaoctets peut être trop pour un ordinateur portable. Au-delà de 1.5 million de triangles, les arêtes sont désactivées |
| Fichiers de projet et de famille | Environ 40 Ko à 100 Ko, quelle que soit leur taille | Même les très grands modèles centraux s'ouvrent en un instant, y compris depuis un lecteur réseau |
| DWG et DXF | Le fichier entier | Les très grands dessins affichent « Ce dessin est très grand ; seule une partie est affichée. » |
| Dossiers | La liste des fichiers, plus quelques kilo-octets par modèle | Jusqu'à 20 000 fichiers |

Si un onglet manque de mémoire, le navigateur affiche sa propre page d'erreur (« Aw, Snap! » dans Chrome, par exemple). Fermez les autres onglets, rechargez BimCraft et réessayez, ou utilisez un ordinateur avec plus de mémoire.

## Liens connexes

- [En ligne et hors ligne](topic:online-offline)
- [Dépannage](topic:troubleshooting)
