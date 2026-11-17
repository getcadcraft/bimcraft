---
title: Ajuster, prolonger et joindre des murs
summary: Ajuster ou prolonger des murs jusqu'à un autre mur, et joindre deux murs au point où ils se rencontrent, chaque action étant une étape que vous pouvez annuler.
keywords: ajuster, prolonger, angle, joindre, rencontrer, nettoyer, extrémité de mur, angle de mur, couper, allonger, raccourcir, modifier, TR
from: a6fb2e8b
---

## Ce que vous allez faire

Mettez de l'ordre dans les murs que vous avez dessinés : raccourcissez un mur qui dépasse un autre, allongez celui qui s'arrête trop court, ou fermez un angle ouvert.

## Étapes

1. Activez {{ui:Draw}} et choisissez le niveau dans la liste des niveaux du plan.
2. **Ajuster ou prolonger jusqu'à un mur :** choisissez {{ui:Modify}} › {{ui:Trim / extend}}. Cliquez le mur jusqu'auquel ajuster ou prolonger (l'arête), puis cliquez chaque mur à modifier. Un mur qui dépasse l'arête est raccourci jusqu'à elle, et la partie que vous cliquez est celle qui reste ; un mur qui s'arrête trop court est allongé jusqu'à rencontrer l'arête. L'arête reste choisie, vous pouvez donc cliquer plusieurs murs l'un après l'autre. Appuyez sur {{key:Esc}} pour choisir une autre arête.
3. **Joindre deux murs à un angle :** choisissez {{ui:Modify}} › {{ui:Corner}}, cliquez le premier mur, puis le second. Les deux vont jusqu'au point où ils se rencontrent, et BimCraft nettoie l'angle. Lorsqu'un mur croise l'autre, la partie que vous avez cliquée reste.
4. Appuyez sur {{key:Esc}} pour recommencer, ou sur {{key:V}} pour revenir à {{ui:Select}}.

## Ce que vous devez voir

- Lorsque vous pointez un mur, le plan montre où il irait, déjà joint aux murs qu'il rencontre, avec sa nouvelle longueur.
- Chaque modification est une seule étape : {{key:Mod+Z}} l'annule.
- Les pièces, planchers, plafonds, toitures et ce qui suit les murs sont recréés, comme après toute modification des murs. Une pièce fermée par un angle apparaît avec son numéro et sa surface.
- Une porte ou une fenêtre placée sur une partie coupée est supprimée avec elle.

## Bon à savoir

- Les murs sont dessinés sur leur axe ; ils sont donc ajustés et prolongés le long de celui-ci : un mur rejoint l'axe de l'autre mur, et la jonction est nettoyée en T ou en L.
- BimCraft indique pourquoi il ne peut pas le faire : les deux murs sont parallèles, la ligne du mur passe à côté de l'autre mur, une porte ou une fenêtre gêne (déplacez-la ou supprimez-la d'abord), ou il ne resterait rien du mur (moins de 1 mm). Un mur qui reste plus court que 50 mm est créé, avec un avertissement dans {{ui:Issues}} : voir [Conseils de dessin](topic:drawing-advice).
- Seuls les murs dessinés dans BimCraft peuvent être ajustés ou prolongés.

Voir aussi [Dessiner des murs](topic:draw-walls) et [Modifier un mur, une porte ou une fenêtre](topic:change-a-wall-or-door).
