---
title: Placer une image sous le plan
summary: Placez une image PNG, JPEG ou WebP (plan numérisé, croquis, photo du site, vue aérienne) sous le plan d'un niveau ou sur un plan vertical, réglez son échelle à partir de deux points, déplacez-la, pivotez-la, estompez-la et verrouillez-la, voyez-la en 3D et dans le PDF du plan, et gardez-la avec le modèle dans un bundle.
keywords: image, fond, PNG, JPEG, WebP, numérisation, croquis, photo, vue aérienne, plan de situation, échelle, opacité, verrouiller, sous-couche, calquer
from: e3c78d1f
---

## Placer une image

Activez {{ui:Dessin}}, rendez-vous au niveau, et choisissez {{ui:Image}} dans le menu {{ui:Build}}. Puis {{ui:Insérer une image…}} et choisissez un fichier PNG, JPEG ou WebP. Il est lu dans votre navigateur et n'est jamais téléversé. Il apparaît sous le plan, ajusté à la vue, et la barre d'outils indique qu'il n'est pas encore à l'échelle. Tout ce que vous dessinez se place par-dessus.

## Régler l'échelle

Choisissez {{ui:Échelle}}, cliquez sur deux points de l'image dont vous connaissez la distance réelle (deux extrémités d'un mur sur un plan numérisé, une cote imprimée sur un croquis), puis saisissez la distance et appuyez sur {{key:Enter}}. L'image grandit ou rétrécit autour du premier point cliqué. {{key:Esc}} annule.

## Coller une zone copiée

Dans MarkupCraft, {{ui:Copier une zone}} copie une partie d'une feuille PDF sous forme d'image. De retour dans BimCraft, le plan d'un niveau étant affiché, appuyez sur {{key:Ctrl+V}} (ou sur {{ui:Coller}} dans le menu {{ui:Édition}}) : la zone arrive sur le plan comme image, centrée sur la position du pointeur (ou au milieu de la vue). Lorsque la feuille avait une échelle de dessin, elle arrive à sa taille réelle, de sorte qu'un mur qui y figure a la même longueur que vos murs. Sans échelle, elle arrive à la taille du papier, et {{ui:Échelle}} démarre, pour que vous cliquiez sur deux points et saisissiez leur distance. Une zone copiée en superposition commence avec l'opacité qu'elle avait au moment de la copie. C'est une seule étape d'annulation, et elle est conservée comme toute autre image.

Coller prend ce que vous avez copié en dernier : une zone copiée, ou un élément copié dans BimCraft. {{key:Ctrl+V}} colle aussi toute autre image PNG, JPEG ou WebP présente dans votre presse-papiers, placée comme {{ui:Insérer une image…}} et non encore à l'échelle. Une zone copiée est conservée pendant six heures.

## Déplacer, pivoter, estomper, verrouiller

{{ui:Déplacer}} prend un point de base sur l'image, puis l'emplacement où elle doit aller. {{ui:Pivoter}} prend un angle en degrés, autour du centre de l'image. {{ui:Opacité}} l'estompe pour que vos lignes ressortent. {{ui:Verrouiller}} l'empêche de bouger pendant que vous dessinez ; une image verrouillée vous permet toujours de modifier son opacité et de la masquer. Chaque modification est une étape d'annulation.

## Plusieurs images, plusieurs niveaux

Une image appartient au niveau sur lequel elle a été placée, et elle s'affiche sur le plan et sur le plan de plafond de ce niveau. Cliquez sur une image pour travailler dessus, ou choisissez-la dans la liste. {{ui:Masquer}} la désactive sans la retirer ; {{ui:Supprimer}} (ou {{key:Delete}}) la retire du modèle.

## Images dans la vue 3D

Chaque image se dresse aussi dans la vue 3D comme un plan plat : une image de plan repose sur son niveau, et une image sur plan vertical se dresse au-dessus de sa ligne de coupe. Elle est dessinée par-dessus le modèle sans le masquer, et le modèle masque la partie de l'image située derrière lui. Les images qui se chevauchent sont triées par distance. L'opacité, {{ui:Masquer}}, {{ui:Verrouiller}} et {{ui:Supprimer}} fonctionnent de la même façon, et {{ui:Afficher en 3D}} désactive tous les plans uniquement dans la vue 3D. Un niveau contient au plus 8 images, pour garder les vues rapides.

## Une image sur un plan vertical

Sous {{ui:Placer sur}}, choisissez {{ui:Un plan vertical (ligne de coupe)}}, puis {{ui:Insérer une image…}}. Cliquez sur les deux extrémités d'une ligne sur le plan (une extrémité de face de mur s'accroche), ou choisissez une ligne de coupe nommée du niveau dans {{ui:Au-dessus d'un trait de coupe}} : aucun clic n'est nécessaire. L'image se dresse sur le niveau au-dessus de cette ligne, avec la même largeur. Réglez sa {{ui:Largeur}}, sa position {{ui:Le long de la ligne}} et sa {{ui:Hauteur au-dessus du niveau}} en les saisissant ; {{ui:Pivoter}} la fait tourner dans son propre plan. Une image verticale n'est pas dessinée sous le plan ; le plan affiche sa ligne pendant que vous travaillez dessus. BimCraft ne dispose pas de fenêtre de coupe 2D interactive : les coupes et élévations sont dessinées sur les feuilles, et les images ne sont pas encore imprimées dans ces vues de feuille.

## Impression

{{ui:Vue d'impression}} sur un plan écrit les images du niveau dans le PDF, sous le dessin, à leur échelle, leur rotation et leur opacité, découpées à la feuille ; une image masquée reste exclue. Un JPEG est intégré tel quel ; les autres images sont d'abord ramenées à 200 ppp sur la feuille.

## Conservées avec le modèle

Les octets de l'image ne sont pas écrits dans le texte IFC. Le modèle renvoie à chacune par son nom (un IfcDocumentReference tel que pictures/<id>.png), et les octets voyagent dans un bundle de projet. Utilisez {{ui:Enregistrer en bundle…}} (ou {{ui:Enregistrer au format IFC}} et choisissez-le) : vous obtenez un seul fichier .ccbundle avec le modèle et ses images ; l'IFC reste léger et les modifications restent rapides. Ouvrez le .ccbundle et les images réapparaissent.

Un simple .ifc ne peut pas contenir d'image sans devenir volumineux. Lorsque vous en enregistrez un, BimCraft indique combien d'images sont conservées à l'extérieur et propose un bundle, ou un IFC simple qui intègre les images jusqu'à 512 Ko et laisse les autres de côté. Un .ifc simple ouvert sans son bundle affiche ces images comme manquantes, et Problèmes les liste ; ouvrez le .ccbundle dans lequel elles ont été enregistrées. Les fichiers enregistrés par la première version, avec l'image dans l'IFC, s'ouvrent toujours, et un enregistrement en bundle en sort les images. Une image est conservée telle quelle jusqu'à 6 Mo ; une image plus grande est d'abord réduite, et vous en êtes informé. Les autres programmes ouvrent le modèle et ignorent les images. Une image que vous n'avez pas encore mise à l'échelle figure dans Problèmes comme remarque.

## Dans les vues de coupe et d'élévation

Une image sur plan vertical (choisissez {{ui:Verticale}} dans le panneau des images et cliquez sur les deux extrémités d'une ligne, ou placez-la au-dessus d'une ligne de coupe nommée) est imprimée dans les vues de feuille qui lui font face. Une coupe affiche une image qui repose sur sa ligne de coupe, ou qui a été placée au-dessus de cette ligne par son nom. Une élévation affiche chaque image verticale dont le plan est orienté vers elle. L'image est dessinée sous les traits de la vue, à l'échelle de la vue, découpée à la vue, et conserve son opacité. Ouvrez {{ui:Feuilles…}} pour la voir ; le PDF de la feuille la contient comme image. Vue de derrière, une image est miroir, comme en 3D. Les images masquées sont exclues.
