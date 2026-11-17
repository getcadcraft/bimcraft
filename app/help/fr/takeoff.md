---
title: Quantités vers TakeoffCraft
summary: En un clic, les quantités du modèle sont envoyées à TakeoffCraft : murs par type, toitures par surface inclinée, faîtages, arêtiers et noues, fondations, portes et fenêtres, meubles bas, appareils électriques, surface au sol et liste de débit du bois, repérés sur un plan de chaque niveau, avec les ouvrages des lots sur les postes.
keywords: métré, métré quantitatif, estimation, estimer, liste des matériaux, nomenclature des matériaux, takeoffcraft, quantités, surface de mur, surface de toiture, carrés, semelle, béton, cubic yards, liste de débit, bois d'œuvre, lot, ouvrage
from: c5a745af
---

## Ce que vous allez faire

Transformez le modèle en liste de matériaux et en estimation dans TakeoffCraft. BimCraft dessine un plan de chaque niveau à une échelle standard, repère chaque quantité dessus et place le métré dans le PDF. TakeoffCraft mesure lui-même les repères, de sorte que chaque chiffre peut être vérifié sur la feuille.

## L'envoyer

1. Cliquez sur {{ui:Métré}} dans la barre du modèle (à côté de {{ui:Feuilles}}).
2. TakeoffCraft s'ouvre dans un nouvel onglet avec les plans. Lorsqu'il le demande, choisissez d'ouvrir le métré trouvé dans le PDF.
3. Ajoutez vos prix dans le tableau des quantités de TakeoffCraft ; les ouvrages listent déjà les matériaux.

:::note
Lorsque TakeoffCraft n'est pas disponible ici, le bouton télécharge le PDF à la place. Ouvrez-le plus tard dans TakeoffCraft : il y retrouve le métré.
:::

## Ce qui est mesuré

- **Murs** par type et hauteur : leurs axes sous forme de tronçons, avec la hauteur du mur sur le poste, de sorte que TakeoffCraft donne la longueur et la surface du mur. Chaque tronçon porte les portes et fenêtres du mur, que TakeoffCraft retranche donc une seule fois de la surface du mur, selon la même règle que les nomenclatures de BimCraft : les deux concordent pour le brut, les déductions et le net. Les données de métré d'un type de mur (unité, mortier, prix ; voir [Ouvrages de murs](topic:wall-assemblies)) arrivent sous forme d'une seule ligne chiffrée sur le poste de ce type. Selon une méthode de mesure autre que celle par défaut (voir [Choisir une méthode de mesure](topic:plan-schedules-and-pdf#choose-a-measurement-method)), le métré porte la méthode, chaque tronçon porte ce que les jonctions retirent de sa face de mur, et TakeoffCraft mesure selon la même méthode et la nomme. Un type dont l'unité a une longueur et une hauteur transmet deux composants avec leurs quantités : les unités à commander et le volume de mortier, chiffrés lorsque le prix du type est au nombre d'unités, par 1000 unités ou par m³ de mortier. Un comptage qui tombe exactement sur un nombre entier peut être d'une unité de plus dans TakeoffCraft, car la transmission arrondit les positions sur la feuille.
- **Toitures** : chaque pan de toit comme une surface avec sa pente (TakeoffCraft donne la surface inclinée), faîtages, arêtiers et noues (arêtiers et noues le long de leur pente), égouts et rives.
- **Fondations** : semelles et murs de soubassement comme des tronçons le long de leur axe, dalles comme des surfaces avec leur épaisseur, de sorte que le béton ressort en volume.
- **Portes et fenêtres** comptées par type, avec les habillages de fenêtre.
- **Meubles bas** par longueur de leurs façades.
- **Appareils électriques** comptés par nature.
- **Surface au sol** de chaque niveau, d'après ses pièces.
- **La liste de débit du bois d'œuvre** issue de l'ossature, comptée sur une feuille à part (un point par pièce).

Lorsqu'un lot dispose d'un ouvrage correspondant (murs extérieurs et intérieurs, dalles, semelles, murs de soubassement, bardeaux, faîtière et arêtier, noues, égouts, portes intérieures, habillages de fenêtre, meubles bas, prises, interrupteurs, luminaires, boîtes de jonction et le tableau), le poste comporte ses matériaux et ses formules. Les lots sont livrés sans prix et n'ont pas encore été revus par un métreur.

:::tip
Les plans sont produits à partir du modèle à chaque clic : après une modification, cliquez à nouveau sur {{ui:Métré}}.
:::
