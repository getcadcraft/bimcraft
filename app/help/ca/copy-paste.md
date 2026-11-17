---
title: Copia, enganxa i duplica elements de la biblioteca
summary: Copia un element de biblioteca col·locat i enganxa'l on facis clic, al mateix lloc al costat de l'original, o en un altre model; copia les propietats de qualsevol altre element com a text; desfés i refés.
keywords: copia, enganxa, duplica, porta-retalls, enganxa al mateix lloc, retalla, suprimeix, selecciona-ho tot, desfés, refés, menú Edita, més, element de biblioteca, col·locació, repeteix, matriu
from: 6ac15931
---

## Què fareu

Feu més còpies d'un element que ja heu col·locat: una segona taula de treball, una fila de piques. Aquest tema tracta dels **elements de biblioteca col·locats**, els elements que BimCraft ha escrit al model: un d'ells es pot enganxar a qualsevol model, fins i tot en una altra pestanya. Els murs, les portes i tots els altres elements es copien, es retallen, s'enganxen i se suprimeixen de la mateixa manera dins del seu propi model: vegeu [Suprimeix, retalla, copia i enganxa elements de l'edifici](topic:edit-elements).

Les ordres són a la barra d'eines sobre el model: {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}} i {{ui:Més}}, un menú amb {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}} i {{ui:Neteja la selecció}}. Una ordre que no pot actuar en aquest moment apareix en gris; passeu-hi per sobre per llegir-ne el motiu, o feu-hi clic i la barra d'estat n'indica el motiu.

## Passos

1. Obriu un model IFC amb un element de biblioteca, o col·loqueu-ne un de primer. Vegeu [Col·loca equips i mobiliari de la biblioteca](topic:place-from-library).
2. Feu clic a l'element a la vista 3D. Les seves propietats mostren un quadre **Element de biblioteca**.
3. Feu clic a {{ui:Copia}} o premeu {{key:Mod+C}}.
4. Feu clic a {{ui:Enganxa}} o premeu {{key:Mod+V}}. S'obre la barra de col·locació i un quadre transparent segueix el punter, girat com l'original.
5. Premeu {{key:R}} per girar-lo 90°, {{key:Tab}} per ajustar-ne el darrere a un mur, o escriviu X i Y a la barra de col·locació.
6. Feu clic on ha d'anar la còpia. Cada clic col·loca una altra còpia; premeu {{key:Esc}} per aturar-ho.
7. Feu clic a {{ui:Desa com a IFC}} per baixar la còpia editada del model.

## Enganxa al mateix lloc

{{ui:Més}}, {{ui:Enganxa al mateix lloc}} o {{key:Mod+Shift+V}} enganxa sense fer clic, a la mateixa X i Y i girat igual:

- **Al mateix model, a la mateixa planta**: dos elements exactament en un mateix lloc no servirien de res, de manera que la còpia va just al costat de l'original, una amplada de l'element més 100 mm al llarg de la pròpia amplada de l'element. Torneu a fer Enganxa al mateix lloc des de la nova còpia per fer una fila.
- **A una altra planta o a un altre model**: exactament la mateixa X, Y i el mateix gir. BimCraft fa servir la planta amb el mateix nom; si no n'hi ha cap, la de l'altura més propera. La barra d'estat indica quina és.

## Duplica

{{ui:Més}}, {{ui:Duplica}} o {{key:Mod+D}} copia l'element escollit i en comença l'enganxada de seguida: un pas en lloc de dos.

## A un altre model o una altra pestanya

Allò que copieu es guarda en aquest navegador, de manera que podeu obrir un altre model IFC, o BimCraft en una altra pestanya, i enganxar-ho allà. A l'altre model cal l'element de biblioteca en si: BimCraft el té quan l'element s'ha col·locat, substituït o actualitzat en aquesta pestanya. Un element col·locat en una sessió anterior només es pot tornar a enganxar al seu propi model; en un altre model, col·loqueu-lo des de la pestanya {{ui:Biblioteca}}.

## Què hauríeu de veure

- La còpia al model, seleccionada, amb el mateix element de biblioteca, la mateixa llicència, les mateixes dades d'equip, la mateixa quantitat i nota que l'original, i el **següent número d'element lliure**. Canvieu el número a Propietats, sota `CadCraft_Placement`.
- "Col·locat: *element* (element *n*)" a la llista de canvis. {{key:Mod+Z}} ho desfà; {{key:Mod+Y}} ho torna a posar.

## Bon a saber

- Les còpies comparteixen el tipus de l'original, de manera que totes fan servir un mateix conjunt de geometria, com passa quan col·loqueu dues vegades el mateix element.
- {{ui:Desfés}} i {{ui:Refés}} cobreixen tots els canvis: valors editats, col·locacions, enganxades, substitucions i actualitzacions. Refer torna a col·locar un element al mateix lloc; un canvi nou esborra allò que es podia refer.
- A la vista 2D d'un dibuix no hi ha res per seleccionar, de manera que no hi ha res per copiar. Feu servir {{ui:Edita a CadCraft}} per canviar el dibuix, quan aparegui.

## Errors habituals

- **{{ui:Enganxa}} diu que els elements venen d'un altre model.** L'última cosa que heu copiat era un element de l'edifici, o diversos elements: aquests només s'enganxen al seu propi model. Escolliu un sol element de biblioteca col·locat i copieu-lo.
- **{{ui:Enganxa}} diu que la còpia ve d'un altre model sense el seu element de biblioteca.** Col·loqueu l'element des de la pestanya {{ui:Biblioteca}} una vegada en aquesta pestanya, i després copieu-lo i enganxeu-lo.
- **{{key:Mod+C}} copia el text de la pàgina.** El text estava seleccionat a la pàgina. Feu clic primer al model.

## Relacionat

- [Tecles i ratolí](topic:keyboard#edit)
- [Configuració de BimCraft](topic:settings)
