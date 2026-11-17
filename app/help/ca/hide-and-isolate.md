---
title: Amaga, aïlla i fes transparents els elements
summary: Trieu diversos elements, amagueu-los, mostreu només ells, o mostreu-los amb tota la resta transparent, i després torneu a mostrar-ho tot.
keywords: amaga, aïlla, transparent, fantasma, raigs X, mostra-ho tot, torna a mostrar, selecciona diversos, selecció múltiple, clic amb Ctrl, clic amb Shift, visibilitat
from: 97e98b8c
---

## Què cal fer

Netegeu la vista fins a allò que esteu mirant: amagueu els elements que estan pel mig, mostreu només els que heu triat, o manteniu la resta a la pantalla com un contorn feble perquè encara sapigueu on sou.

## Passos

1. Obriu un model IFC. Vegeu [Obre un model IFC i mireu-lo en 3D](topic:open-ifc-model).
2. Feu clic a un element per triar-lo. Per triar-ne més, manteniu premuda la tecla {{key:Mod}} o {{key:Shift}} i feu clic a cadascun. Fer clic a un element triat d'aquesta manera el treu de la selecció.
3. Obriu {{ui:Mostra}} a la barra d'eines i trieu què fer, o premeu-ne la tecla:
   - {{ui:Amaga}} ({{key:H}}) amaga els elements triats.
   - {{ui:Aïlla}} ({{key:I}}) mostra només els elements triats.
   - {{ui:Transparent}} ({{key:T}}) mostra els elements triats tal com són i la resta transparent.
4. Feu clic a {{ui:Mostra-ho tot}} al mateix menú, o premeu {{key:Shift+H}}, per tornar a mostrar cada element.
5. Per retallar tot el que envolta els elements triats, feu clic a {{ui:Caixa de secció al voltant de la tria}} al mateix menú, o premeu {{key:Shift+X}}. Vegeu [Talla un model IFC amb un pla de secció](topic:section-plane).

## Què hauríeu de veure

- Amb diversos elements triats, {{ui:Propietats}} diu quants són i els llista per classe. Feu clic a un de sol per veure'n les propietats.
- Els elements amagats no es poden triar: un clic cau sobre el que hi ha darrere.
- Els elements transparents tampoc no es poden triar, de manera que podeu fer clic directament a través dels murs fins a allò que heu aïllat.
- Les vores s'amaguen amb el seu element, i es tornen febles amb ell.
- Amagar, aïllar i transparent es mantenen com estan mentre editeu, col·loqueu elements de la biblioteca o talleu el model amb un pla de secció. Obrir un altre model ho torna a mostrar tot.

## Errors habituals

- **Els elements del menú estan en gris.** No hi ha res triat. Feu primer clic a un element; assenyaleu un element del menú per llegir per què no pot actuar.
- **Aïllar ha mostrat un mur que havia amagat.** Aïllar mostra exactament el que heu triat, amagat o no.
- **Falta una planta sencera.** Això és la llista {{ui:Plantes}}, no {{ui:Mostra-ho tot}}: torneu a marcar la planta.

## Següents passos

- [Mostra i amaga plantes, espais i vores](topic:storeys-and-spaces)
- [Talla un model IFC amb un pla de secció](topic:section-plane)
