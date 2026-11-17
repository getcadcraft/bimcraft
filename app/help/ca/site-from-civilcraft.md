---
title: Edificis veïns i la parcel·la de CivilCraft
summary: Preneu com a suggeriments els edificis i la parcel·la que la funció Adreça al solar de CivilCraft ha trobat al voltant d'una adreça, i afegiu els que marqueu.
keywords: solar, adreça, parcel·la, veïns, context, civilcraft, ccsite, edificis, contorn del solar, suggerir
from: 3be9407b
---

## Què fa

A CivilCraft, Superfície › Més › Adreça al solar troba els edificis, la parcel·la, la zonificació, la zona inundable i el sòl al voltant d'una adreça a partir de dades obertes. El seu botó "Envia a BimCraft com a suggeriments" (o "Desa el solar com a fitxer" i després obriu aquí el `.ccsite.json`) els porta a BimCraft. No s'afegeix res fins que ho digueu.

## Com s'utilitza

1. Inicieu o obriu un model. El punt de l'adreça és a l'origen del nivell on sou.
2. Una caixa llista cada edifici veí i la parcel·la amb una casella. Desmarqueu el que no voleu.
3. Els edificis de l'alçada de la qual la font no n'ha donat la dada usen l'alçada escrita a la part superior de la caixa. Un edifici del qual només s'ha donat el nombre de plantes compta 3 m per planta, i la caixa ho indica.
4. Premeu "Afegeix els marcats". Els edificis es converteixen en murs al voltant de les seves petjades, tan alts com es llisten, en un sol pas de Desfés. La parcel·la es converteix en el contorn del solar, com a segon pas de Desfés.

La zonificació, la zona inundable i el sòl es llisten només a títol informatiu; no es dibuixen.

## Què cal saber

- Els contorns són tan bons com les dades obertes: OpenStreetMap i les capes de parcel·les dels comtats difereixen molt d'un lloc a un altre. Comproveu el que importa amb un aixecament topogràfic.
- Les posicions són metres a l'est i al nord del punt de l'adreça, amb una aproximació plana, precises a uns quants metres dins d'uns quants quilòmetres.
- Les dades porten les llicències de les seves fonts (OpenStreetMap és ODbL); la caixa en mostra la línia d'atribució.
