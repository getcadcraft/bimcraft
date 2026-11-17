---
title: Murs à partir d'un dessin tracé
summary: Transformez un plan DWG ou DXF en murs, portes et fenêtres sur un niveau, et gardez le dessin sous le plan comme référence.
keywords: dwg, dxf, tracer, tracé, importer un plan, convertir, cao vers bim, 2d vers 3d, murs à partir de lignes, calques, blocs, portes à partir de blocs, fond de plan, dessin de référence, arrière-plan, référence externe, logiciel de dessin
from: 3bf213f1
---

## Ce que vous allez faire

Utilisez un plan que vous (ou quelqu'un d'autre) avez dessiné dans le logiciel de dessin comme point de départ du modèle : ses lignes de murs deviennent des murs, ses blocs de portes et de fenêtres deviennent des portes et des fenêtres.

## Étapes

1. Activez {{ui:Dessin}} et choisissez le niveau que montre le dessin dans la liste des niveaux du plan.
2. Choisissez {{ui:Build}} › {{ui:Depuis un dessin…}}, puis {{ui:Choisir un dessin…}} et désignez le DWG ou le DXF.
3. Dans la boîte de dialogue :
   - **Unités du dessin** proviennent du dessin ; choisissez-en d'autres si elles sont fausses (un plan dessiné en pieds lu en pouces est douze fois trop petit).
   - **Calques des murs** : cochez les calques sur lesquels se trouvent les lignes de murs. Les calques dont le nom contient « mur » sont cochés pour vous.
   - **Les lignes sont** : **les deux faces de chaque mur** (la façon habituelle de dessiner un plan : chaque paire de lignes parallèles distantes d'au plus 600 mm devient un mur de l'épaisseur de l'écart), **les axes des murs**, ou **une face** avec le mur à sa gauche ou à sa droite. Avec les axes ou une face, le type de mur fixe l'épaisseur.
   - **Type de mur** et **Hauteur des murs**, comme pour l'outil {{ui:Mur}}.
   - **Blocs** : choisissez un type de porte ou de fenêtre pour chaque bloc qui en est une, ou laissez-le de côté. Les blocs dont le nom contient « porte » ou « fenêtre » sont choisis pour vous. Chacun est placé dans le mur sur lequel il se trouve, aussi large que le bloc le long du mur ; une porte s'ouvre du côté où son débattement est dessiné.
   - **Emplacement** : aux coordonnées propres du dessin, ou avec son angle inférieur gauche sur l'origine du plan.
   - **Garder le dessin sous le plan de ce niveau** : laissez cette case cochée pour voir le dessin en traits fins sous ce que vous créez.
4. La ligne sous les choix indique combien de murs, de portes et de fenêtres seront créés. Cliquez sur {{ui:Les créer}}.

## Ce que vous devez voir

- Les murs, portes et fenêtres du niveau, joints là où ils se rencontrent, avec les pièces qu'ils ferment ; l'ensemble est une seule étape, donc {{key:Mod+Z}} le retire.
- Le dessin en traits fins sous le plan. {{ui:Build}} › {{ui:Depuis un dessin…}} liste les dessins conservés sur le niveau, chacun avec {{ui:Supprimer}} ; en supprimer un laisse les murs en place.
- Dans le fichier IFC, le dessin conservé est une annotation du niveau (ses lignes), de sorte que les autres logiciels BIM l'affichent aussi.

:::note
Un PDF ou un scan fonctionne aussi : voir [Murs à partir d'un jeu de plans](topic:walls-from-plans). Les arcs sont laissés de côté (BimCraft dessine des murs droits), et de même les lignes à l'intérieur des blocs. Les lignes sans partenaire dans « les deux faces » sont comptées dans la boîte de dialogue et laissées de côté : dessinez ces murs avec l'outil {{ui:Mur}}, ou mettez-les en ordre avec {{ui:Modifier}} › {{ui:Ajuster / prolonger}} (voir [Ajuster, prolonger et joindre des murs](topic:trim-extend-walls)).
:::

:::tip
Tracé par-dessus un scan dans le logiciel de dessin ? Ouvrez aussi le scan ici et vérifiez les murs par rapport à lui : voir [Modéliser à partir d'un scan](topic:model-from-a-scan).
:::
