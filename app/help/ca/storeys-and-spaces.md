---
title: Mostra i amaga plantes, espais i arestes
summary: Apagueu plantes per veure l'interior d'un edifici, mostreu sales i espais, i activeu o desactiveu les línies d'aresta.
keywords: plantes, nivells, pisos, amaga, aïlla, sales, espais, ifcspace, arestes, visibilitat, secció
from: b838dcc0
---

## Què hi fareu

Per veure l'interior d'un model IFC, apagueu les plantes que hi ha per sobre de la que us interessa, després mostreu les sales i els espais, i desactiveu les línies d'aresta per veure'l més net.

## Passos: veure una planta

1. Obriu un model IFC. Vegeu [Obre un model IFC i mira'l en 3D](topic:open-ifc-model).
2. Busqueu la llista {{ui:Plantes}} a l'esquerra. La planta superior és la primera, com en llegir una secció de dalt cap avall.
3. Desmarqueu la coberta i totes les plantes per sobre de la que voleu.
4. Feu clic a {{ui:Superior}} per mirar cap avall a aquesta planta.
5. Torneu a marcar les plantes per tornar-les a posar.

## Què hauríeu de veure

Cada planta que desmarqueu desapareix a l'instant, amb tot el que hi ha. La llista només mostra les plantes que contenen alguna cosa visible. Els elements que no estan assignats a cap planta s'agrupen com a **No està en una planta** a la part inferior; els elements d'emplaçament i part del mobiliari hi solen anar a parar.

## Passos: mostrar sales i espais

1. Feu clic a {{ui:Espais}} a la barra d'eines sobre el model. El botó queda premut.
2. Mireu el model: les sales i els espais apareixen com a volums pàl·lids i transparents.
3. Feu clic a un espai per llegir-ne les propietats, com el nom, el número i l'àrea, a la dreta.
4. Torneu a fer clic a {{ui:Espais}} per amagar-los.

Els espais s'amaguen quan s'obre un model perquè, si no, taparien els murs i els forjats.

## Passos: arestes

1. Feu clic a {{ui:Arestes}} per desactivar les línies fines d'aresta.
2. Torneu a fer clic per tornar-les a activar.

En models molt grans (de més d'1.5 milions de triangles) el botó apareix en gris amb el consell «Les arestes estan desactivades per a models molt grans». Així s'estalvia memòria.

## Errors habituals

- **Desmarcar una planta i continuar veient-ne parts.** Un element pertany a la planta que li va assignar el programa que l'ha exportat. Un mur alt o una escala sovint només pertanyen a la seva planta base, de manera que es queden quan s'amaga la planta de sobre, o desapareixen amb la planta de sota.
- **Amagar plantes per veure'n l'interior.** Un quadre de secció sol ser més ràpid: vegeu [Talla un model IFC amb un pla de secció](topic:section-plane#a-section-box). També podeu desmarcar files de {{ui:Arbre del model}} (vegeu [Orienteu-vos amb l'arbre del model](topic:model-tree)).
- **Fer clic a un espai a través d'un mur.** En fer clic es tria la superfície visible més propera. Amagueu la planta de sobre, o canvieu a {{ui:Superior}}, i després feu clic.
- **Els noms de les plantes semblen estranys.** BimCraft mostra els noms de planta desats al fitxer. Si diuen "Level 1" o un número, és el que va escriure l'exportador.
