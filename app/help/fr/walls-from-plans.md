---
title: Murs à partir d'un jeu de plans (PDF ou scan)
summary: Transformez les pages d'un PDF, ou d'un dessin scanné, en murs, portes et fenêtres, un niveau par page, avec la page conservée sous chaque plan.
keywords: pdf, plans, jeu de plans, scan, dessin scanné, tiff, tracer, murs à partir d'un pdf, murs à partir d'un scan, niveaux, pages, échelle, portes, fenêtres, sens d'ouverture, allège, fond de plan
from: b70d9db7
---

## Ce que vous allez faire

Créez un modèle à partir des plans que vous avez sur papier : un PDF (dessiné en traits, ou un scan à l'intérieur d'un PDF) ou un scan (PNG, JPEG, TIFF d'une ou de plusieurs pages). Chaque page devient les murs, portes et fenêtres d'un niveau.

## Étapes

1. Activez {{ui:Dessin}}. Choisissez {{ui:Build}} › {{ui:Depuis un dessin…}}, puis {{ui:Choisir un dessin…}} et désignez le PDF ou le scan.
2. **Pages et niveaux.** Chaque page est listée avec sa nature (**dessin au trait**, ou **une image (tracée)**) et le niveau où elle va : l'un de vos niveaux, **un nouveau niveau au-dessus des autres**, ou **exclure cette page**. Les pages sont associées à vos niveaux dans l'ordre ; modifiez l'une d'elles si besoin.
3. **Échelle.** Pour un PDF, indiquez à quelle échelle il a été dessiné (**1 : 100**, **1 : 50**…). Pour tout le reste, ou si vous ne le savez pas, choisissez **d'après une distance connue** : cliquez sur les deux extrémités d'une cote ou d'une échelle graphique dans l'aperçu, puis saisissez la distance réelle. Toutes les pages utilisent cette seule échelle.
4. Choisissez le **type de mur** et la **hauteur d'un nouveau niveau**. Laissez **Garder chaque page sous le plan de son niveau** cochée pour voir chaque page en traits fins sous son plan.
5. La ligne sous les choix indique combien de murs, portes et fenêtres seront créés, et sur combien de niveaux. Cliquez sur {{ui:Les créer}}.

## Comment la page est lue

- **Les murs** proviennent de paires de lignes parallèles distantes d'au plus 600 mm (les deux faces d'un mur) ; le mur a l'épaisseur de l'écart. Les hachures et le lettrage sont laissés de côté.
- **Portes et fenêtres.** Une interruption dans un mur (de 500 à 2600 mm) avec un débattement de porte dessiné à côté est une porte, articulée à une extrémité de l'interruption et s'ouvrant du côté du débattement. Une interruption ou un mur comportant des lignes d'allège est une fenêtre. Une interruption sans l'un ni l'autre est une porte jusqu'à 1300 mm, et une fenêtre au-delà.
- **Un scan** est d'abord redressé s'il a été numérisé de travers (la boîte de dialogue l'indique), passé en noir et blanc, débarrassé des taches et tracé ; une **page PDF qui est une image** est d'abord dessinée puis traitée de la même façon. Le tracé trouve le centre de chaque trait et y ajuste des droites et des arcs ; il n'utilise ni réseau ni modèle entraîné.
- **Les pièces** se déduisent d'elles-mêmes des boucles fermées formées par les murs. Lorsque le PDF comporte du texte, une pièce prend son nom du lettrage qu'elle contient (le plus grand ; une cote, une échelle ou un numéro de feuille n'est pas un nom). Un scan n'a pas de texte, donc ses pièces gardent les noms que le logiciel leur donne.
- **Tout ce qui est lu sur la page est marqué non vérifié** : chaque mur, porte, fenêtre et pièce porte un cadre en pointillés et un « ? » sur le plan tant que vous ne l'avez pas contrôlé. Désignez ce que vous avez contrôlé et utilisez {{ui:Outils}} › {{ui:Marquer comme contrôlé}}. Voir [Marquer des éléments comme contrôlés ou vérifiés sur le terrain](topic:verification).

## Ce que vous devez voir

- Les murs, portes, fenêtres et pièces de chaque niveau, ainsi que les nouveaux niveaux, en une seule étape : {{key:Mod+Z}} retire tout.
- Chaque page en traits fins sous le plan de son niveau, listée sous {{ui:Build}} › {{ui:Depuis un dessin…}} avec {{ui:Supprimer}}.

:::note
C'est ce que les lignes ont donné, à la précision de la page. Un scan peut perdre un mur pâle, joindre deux murs très proches, ou trouver un mur dans une tache ; un débattement que le dessin ne montre pas fait d'une interruption une simple porte. Vérifiez chaque niveau par rapport à la page avant de vous y fier, et corrigez ce qui est faux avec les outils {{ui:Mur}}, {{ui:Porte}} et {{ui:Fenêtre}}.
:::
