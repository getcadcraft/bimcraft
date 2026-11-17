---
title: Créer une nomenclature d'équipements et exporter en CSV
summary: Transformez les repères d'équipements d'un plan de restauration en nomenclature d'équipements, filtrez-la, accédez à chaque équipement sur sa feuille et téléchargez-la au format CSV.
keywords: équipement, nomenclature, restauration, cuisine, repères d'équipements, kcl, attributs, nomenclature des matériaux, bom, liste des matériaux, csv, tableur, export, extraction de données
from: e3faa1c8
---

## Ce que vous allez faire

Lisez la liste des équipements d'un plan de cuisine ou de restauration, vérifiez-la, retrouvez chaque équipement sur le plan et téléchargez-la sous forme de fichier tableur.

Cela fonctionne sur les plans dont les repères d'équipements portent leurs données sous forme d'attributs de bloc, comme le font les bibliothèques de conception de cuisine telles que KCL : chaque repère contient le numéro d'article (`KCL-ITEM`), la quantité, la catégorie, le fabricant, le modèle, les données électriques et de plomberie, et les remarques. Les autres plans n'ont pas d'onglet {{ui:Equipment}}.

## Étapes

1. Ouvrez le plan, idéalement depuis son dossier de projet pour que ses plans liés se chargent aussi.
2. Cliquez sur l'onglet {{ui:Equipment}} au-dessus du plan. Son libellé indique combien d'éléments figurent sur les feuilles, par exemple « Équipements (88) ».
3. Lisez la nomenclature : **Article**, **Qté**, **Équipement**, **Fabricant**, **Modèle**, **Électricité**, **Plomberie** et **Emplacement**.
4. Choisissez ce qu'il faut lister dans le menu au-dessus du tableau : **Toutes les feuilles**, une feuille, **Sur aucune feuille**, ou **Tout ce qui est repéré dans le plan**. Chaque choix affiche son nombre.
5. Saisissez dans la zone de filtre (« Filtre : catégorie, fabricant, modèle… ») pour réduire la liste, par exemple `refrigerator` ou `208`.
6. Cliquez sur le nom de la feuille d'un article dans la colonne **Emplacement**.
7. Regardez le plan : BimCraft passe à cette feuille, effectue un zoom sur l'article et trace un cercle autour de lui. La ligne d'état indique « Article *n*, *catégorie* est entouré sur *feuille*. »
8. Cliquez sur {{ui:Equipment}} pour revenir à la nomenclature.
9. Cliquez sur {{ui:Download CSV}}.

## Ce que vous devez voir

- Un fichier nommé « *nom du plan* équipements.csv » (avec le nom de la feuille entre crochets si vous n'en avez listé qu'une) dans votre dossier de téléchargements. Il s'ouvre dans Excel, Numbers, LibreOffice ou Google Sheets.
- La ligne d'état : « Téléchargé *nom du fichier* (*n* articles). »

Le CSV comporte ces colonnes : Article, Qté, Catégorie, Fabricant, Modèle, Électricité, Plomberie, Remarques, Remarques électriques, Remarques de plomberie, Feuilles, Placés (nombre de repères). Il télécharge exactement les lignes affichées dans le tableau, après le menu et le filtre.

## Comment la nomenclature est construite

- Elle est lue à partir des **repères eux-mêmes**, et non du tableau de nomenclature dessiné sur la feuille. La note au-dessus du tableau indique combien de repères ont été lus.
- Une ligne correspond à un numéro d'article avec un seul jeu de données. Sa quantité est la **somme** de ses repères, comme le ferait une nomenclature imprimée : des étagères repérées « 5 » à un endroit et « 3 » à un autre donnent 8, affiché « 5 + 3 ».
- **Emplacement** liste les feuilles qui montrent chaque article, déterminées à partir de ce que montrent les fenêtres de présentation de chaque feuille, c'est-à-dire ce qui s'imprime. « Objet seul » signifie qu'aucune feuille ne le montre.
- **Numéro utilisé deux fois** signale un même numéro d'article attribué à deux équipements différents. La ligne porte une marque orange.
- Les repères qu'aucune feuille ne montre sont mis à part sous **Sur aucune feuille**. Ils proviennent souvent de plans antérieurs ou d'autres chantiers, et ne sont jamais mélangés à **Toutes les feuilles**.
- **Électricité** affiche les ampères, kW, HP, volts, phase, raccordement et fiche tels qu'ils figurent sur le repère. **Plomberie** affiche les diamètres de raccordement : CW (eau froide), HW (eau chaude), DD (évacuation directe), ID (évacuation indirecte), et gaz. Les autres champs des repères ne sont pas encore affichés.

## Erreurs courantes

- **Pas d'onglet {{ui:Equipment}}.** Le plan ne comporte pas de repères `KCL-ITEM`, ou ses équipements sont dessinés sans données. Il n'y a rien à lire.
- **Les quantités diffèrent de la nomenclature imprimée.** Une nomenclature imprimée peut lister des numéros de réserve ou utiliser des noms plus courts que les repères. Fiez-vous aux repères pour ce qui est placé, et vérifiez les écarts avec le concepteur.
- **L'ouverture du CSV affiche des caractères étranges.** Le fichier est en UTF-8. Ouvrez-le avec la commande d'importation de votre tableur et choisissez UTF-8 si le programme le demande.
- **Une cellule commence par une apostrophe.** Les valeurs qui commencent par `=`, `+`, `-` ou `@` reçoivent une `'` en tête afin que les tableurs ne les exécutent pas comme des formules.
- **{{key:F}} et {{key:P}} ne font rien.** Ils agissent sur le plan, pas sur la nomenclature. Cliquez d'abord sur un onglet de feuille.
