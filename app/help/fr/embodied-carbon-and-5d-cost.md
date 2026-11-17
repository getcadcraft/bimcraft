---
title: Carbone incorporé et coûts sur le planning
summary: Additionnez le carbone incorporé du modèle à partir d'une table de facteurs ouverte et modifiable, et répartissez les prix sur le planning 4D en une courbe de coûts et de flux de trésorerie. Les deux partent de valeurs que vous saisissez ou importez.
keywords: carbone incorporé, carbone, co2, kgco2e, émissions, table de facteurs, epd, fdes, 5d, coût, flux de trésorerie, courbe en S, coût du planning, prix, prix du métré
from: 83e82840
---

## Carbone incorporé

Ouvrez le volet **Carbone**. La quantité de chaque élément (volume, surface ou longueur) est multipliée par un facteur de la table, par module de cycle de vie : l'étape produit est obligatoire, le transport et les déchets sont facultatifs. Les totaux sont donnés par matériau, classe et niveau, et par mètre carré de plancher.

**La table de facteurs vous appartient.** Les lignes fournies avec BimCraft sont des valeurs génériques de départ, d'un ordre de grandeur correct. Elles ne proviennent pas d'une base de données, sont marquées comme non vérifiées, et doivent être remplacées par la source que vous utilisez (une EPD, une base de données nationale ou les chiffres de votre entreprise). Modifiez les lignes dans le volet, ou importez et exportez la table en CSV ou JSON. Les lignes que vous ajoutez remplacent la ligne de départ portant le même identifiant. La table est enregistrée dans le modèle.

Les éléments sans correspondance, ou sans quantité, sont listés sous « Problèmes » et ne sont pas comptés comme zéro.

## Coûts sur le planning 4D

Ouvrez le volet **Coût** à côté du planning 4D. Saisissez-lui des prix (tapez-les, importez un CSV ou un JSON, ou reprenez les postes de TakeoffCraft), associez chaque prix à des matériaux du modèle à l'aide de mots-clés, et il chiffre les éléments de chaque tâche. Le coût d'une tâche est réparti sur les jours de son début à sa fin (uniformément, en début ou en fin de période), et le volet trace la courbe cumulée des flux de trésorerie par jour, semaine ou mois, avec le coût par phase et par lot, ainsi que le prévu comparé au réalisé à une date donnée. Export en CSV. Rien n'est chiffré tant que vous n'avez pas saisi de prix : aucun n'est fourni.

## Devise

Une table de prix peut indiquer la devise de ses prix (trois lettres, comme USD ou EUR). Le volet 5D comporte un champ pour cela ; la devise est conservée dans le fichier avec les prix, et les exports JSON la contiennent. Une table créée avant cette fonction, ou dont vous avez laissé le champ vide, n'a pas de devise : ses coûts sont affichés en USD, la devise par défaut de l'application, et le volet et les totaux cumulés l'indiquent. Aucune conversion n'est faite entre devises.
