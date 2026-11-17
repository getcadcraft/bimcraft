---
title: La ligne de commande dans la barre d'état
summary: Dans une disposition avec ligne de commande, tapez n'importe où et les lettres arrivent dans la ligne en bas. Elle affiche ce qui correspond, garde un historique et ne masque jamais le dessin.
keywords: ligne de commande, taper n'importe où, commande saisie, barre d'état, historique, touches fléchées, entrée, espace, WALL, DOOR, disposition Duncan, disposition Rhino, raccourci, touches, recherche de commande
from: d583b52d
---

## Ce que vous allez faire

Lancez les outils en tapant leur nom, sans cliquer d'abord dans une zone de saisie.

## Étapes

1. Choisissez une disposition qui a une ligne de commande : ouvrez {{ui:Paramètres}}, choisissez {{ui:Général}}, puis {{ui:Disposition}}, et sélectionnez **Duncan** (ou **Rhino**). La ligne se trouve dans la barre d'état en bas de la fenêtre.
2. Le pointeur étant n'importe où et aucune zone en cours d'utilisation, tapez `wall`. Les lettres apparaissent dans la ligne de commande, et une liste au-dessus affiche les commandes correspondantes.
3. Appuyez sur {{key:Enter}}. L'outil Mur démarre.
4. Cliquez dans la ligne de commande (ou appuyez de nouveau sur une touche). Lorsque la ligne est vide, la liste affiche les commandes que vous avez tapées précédemment. {{key:Up}} et {{key:Down}} parcourent ces commandes ; {{key:Enter}} lance celle qui est affichée.

## Ce que vous pouvez taper

- Un mot de commande du style de menu utilisé, lorsque le style en a (`WALL`, `WA`, `DOOR` dans le style Dessin).
- La touche d'une commande, saisie comme un mot : `W` puis {{key:Enter}} ou {{key:Space}} lance Mur, `D` lance Porte.
- Le nom d'une commande, avec ou sans ses espaces : `split wall`, `wallrectangle`.
- Le début d'un mot ou d'un nom, lorsqu'une seule commande commence ainsi.
- Tout le reste ouvre la recherche de commandes avec ce que vous avez tapé.

## Bon à savoir

- {{key:Esc}} vide la ligne et rend les touches au dessin.
- Dans ces dispositions, une seule lettre ne lance plus un outil à elle seule : elle attend dans la ligne {{key:Enter}} ou {{key:Space}}. Les touches avec {{key:Ctrl}}, les touches de fonction, {{key:Delete}} et {{key:Esc}} fonctionnent comme avant. Dans les autres dispositions, rien ne change.
- Pendant qu'un outil de dessin est actif, les chiffres restent à l'outil (une longueur saisie).
- La saisie dans une zone, une boîte de dialogue ou les Paramètres reste à cet endroit.
- L'historique est conservé sur cet ordinateur, 50 commandes par application.
