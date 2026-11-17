---
title: Trouver les dessins liés et les images
summary: Affichez les dessins liés (références externes, ou xrefs) d'un dessin et les images de son cartouche, en ouvrant son dossier ou en ajoutant les fichiers à la main.
keywords: xref, référence externe, dessin lié, rattacher, superposition, image, illustration, logo, cartouche, xref manquant, etransmit, gestionnaire de références
from: 5593d4b1
---

## Ce que vous allez faire

Rendez un dessin complet : affichez les dessins auxquels il est lié (références externes, ou xrefs) et les images qu'il utilise, comme un logo dans le cartouche.

## La méthode simple : ouvrir le dossier

1. Cliquez sur {{ui:Ouvrir un dossier}} et choisissez le dossier qui contient le dessin et ses liens, par exemple le dossier `Cad` complet d'un projet.
2. Dans le rapport de dossier, faites défiler jusqu'à **Dessins CAO**.
3. Cliquez sur le dessin.
4. Regardez le panneau {{ui:Propriétés}} à droite, sous **Dessins liés** et **Images**.

BimCraft recherche chaque dessin lié par son nom (« *nom*.dwg »), d'abord dans le même dossier que le dessin, puis n'importe où dans le dossier ouvert. Les images sont trouvées de la même façon, ainsi que par un nom proche : un export eTransmit ou Revit ajoute souvent le nom du projet devant, si bien que `logo.png` est trouvé sous le nom `Tour-logo-5425051.png`.

## L'autre méthode : ajouter les fichiers à la main

1. Ouvrez le dessin seul.
2. À droite, sous **Dessins liés**, cliquez sur {{ui:Ajouter des dessins liés…}}. Sous **Images**, le bouton est {{ui:Ajouter des images…}} ; les deux ouvrent le même sélecteur.
3. Choisissez les fichiers `.dwg` liés et les fichiers d'images. Vous pouvez en choisir plusieurs à la fois.
4. Patientez pendant que BimCraft rouvre le dessin avec eux.

## Ce que vous devez voir

Chaque dessin lié et chaque image est listé avec une étiquette :

| Étiquette | Signifie |
|---|---|
| **Affiché** | Trouvé et dessiné. Le chemin situé dessous indique son origine, ou « ajouté par vous ». |
| **Affiché, nom similaire** | Une image trouvée par un nom proche. Vérifiez qu'il s'agit de la bonne. |
| **Introuvable** | Absent du dossier ou des fichiers ajoutés. Une image manquante apparaît comme son cadre vide. |
| **Format TIFF non affichable dans un navigateur** | L'image est un fichier TIFF, que les navigateurs ne dessinent pas. Enregistrez-la en PNG sous le même nom, puis ajoutez-la. |
| **Impossible à lire** | Le fichier a été trouvé mais n'a pas pu être ouvert comme image. |

Le panneau {{ui:Dessin}} à gauche affiche « *n* sur *m* chargés » pour les dessins liés. Les calques des dessins liés apparaissent dans {{ui:Calques}} sous la forme « *nom du lien*|*calque* ».

## Erreurs fréquentes

- **N'ouvrir que le dessin.** « Ce dessin n'affiche que son propre contenu tant que ses dessins liés ne sont pas ajoutés. Ouvrir tout le dossier du projet les trouve automatiquement. »
- **Ouvrir un dossier trop petit.** Si les liens se trouvent dans un dossier voisin, ouvrez le dossier parent.
- **Liens renommés.** BimCraft associe les dessins liés par leur nom. Un lien renommé sur le disque n'est pas trouvé ; ajoutez-le à la main.
- **Liens de liens.** BimCraft charge les dessins auxquels le dessin ouvert est lié. Les dessins liés à l'intérieur de ceux-là ne sont pas recherchés, si bien qu'ils ne s'affichent généralement pas dans cette version.
