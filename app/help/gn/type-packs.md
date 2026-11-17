---
title: Paquetes de tipos: compartir tipos de muro como archivos abiertos
summary: Guardar tipos de muro con sus capas, materiales, etiquetas y códigos de clasificación, y familias, como un archivo abierto (JSON simple o IFC), y agregarlos a otro proyecto. También se pueden leer tipos de muro de un archivo IFC de otro programa.
keywords: paquete de tipos, tipos, tipo de muro, compartir, exportar, importar, biblioteca, formato abierto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiales, capas, plantilla, estándar de oficina, familias
from: e4c91331
---

## Qué va a hacer

Lleve sus tipos de muro de un proyecto a otro, o entréguelos a alguien que trabaja en otro programa. Un paquete de tipos contiene cada tipo de muro con sus capas, espesores, materiales, núcleo, cavidades, prioridad de capas, nivel de desarrollo, datos de cómputo y códigos de clasificación, y cualquier familia que agregue. Es un archivo abierto: texto JSON simple que cualquiera puede leer, o un archivo IFC. Nada en él está atado a una empresa, a un país ni a una cuenta.

## Guardar tipos de un proyecto

1. Abra **Datos** en la barra del modelo y elija {{ui:Type packs}}.
2. En {{ui:Save types from this project}}, marque los tipos de muro que va a incluir. Los tipos propios del proyecto vienen marcados; se puede agregar un tipo inicial y entra como copia. Marque familias si quiere incluirlas.
3. Escriba un {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} descarga un archivo `.cctypes.json`. {{ui:Save as IFC (.ifc)}} descarga un archivo IFC que solo contiene tipos: cada tipo de muro como IfcWallType con su conjunto de capas de material, materiales y clasificación, para cualquier programa BIM.

## Agregar tipos a un proyecto

1. En el mismo cuadro, elija {{ui:Open a pack or an IFC file…}} y seleccione un archivo `.json` de paquete o un archivo `.ifc`.
2. El cuadro enumera lo que contiene el archivo: cada tipo de muro con su espesor, cantidad de capas y códigos, los materiales y las familias.
3. Elija qué pasa con {{ui:A type this project already has}}: **Mantener el del proyecto**, **Agregar el del paquete como copia** (recibe un nombre nuevo que termina en "(2)") o **Reemplazarlo (solo cuando ningún muro lo usa)**.
4. {{ui:Add to the project}}. El cuadro enumera lo que se agregó, copió, reemplazó o mantuvo. Es un solo paso de deshacer.

Los nuevos tipos aparecen de inmediato en la lista de tipos de la herramienta Muro.

## Tipos de piso, techo y cielorraso

La lista de tipos para guardar también contiene los tipos de piso, techo y cielorraso del proyecto y sus iniciales (marcados como Piso, Techo, Cielorraso). Un paquete puede llevar los cuatro tipos; cada tipo indica su clase IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipo de piso, techo o cielorraso que usan elementos no se reemplaza desde un paquete: cámbielo en el editor de tipos.

## Un tipo como elemento de la Biblioteca

Marque exactamente un tipo y elija **Guardar como elemento de la Biblioteca…**. Esto guarda un archivo `.cctype.json`: un elemento de la Biblioteca de la clase Tipos que contiene ese tipo (sus capas, materiales, LOD y códigos de clasificación). Súbalo a la Biblioteca para compartirlo. **Abrir un paquete o un archivo IFC** también lee un elemento así y agrega su tipo al proyecto como un paquete.

## Conviene saber

- Un archivo IFC de otro programa también se puede abrir aquí. Se lee cada uno de sus tipos de muro que tiene capas de material: el nombre, los materiales y espesores de las capas y cualquier cavidad son los del archivo. Qué capas son el núcleo y qué hace cada capa (acabado, estructura, aislamiento) se estima, el tipo se marca como **(estimado)**, y debe verificarlo en el editor de tipos de muro. Un tipo de muro sin capas se omite y se indica por nombre.
- Un material que el proyecto ya tiene se mantiene tal cual. Un material nuevo cuyo nombre está ocupado recibe "(paquete)" después de su nombre.
- Un tipo que usan muros nunca se reemplaza desde un paquete. Cámbielo en el editor de tipos de muro, que mueve sus muros correctamente.
- Un código asignado a un muro no viaja: pertenece a ese muro. Un código asignado al tipo sí viaja.
- Un archivo con un campo que el formato no tiene, una capa cuyo material falta, o cualquier cosa que no sea texto simple se rechaza, y el mensaje indica dónde y por qué.
- Todavía no disponible: tipos de piso, techo y cielorraso (no tienen tipos en esta versión: cada uno tiene su propio espesor), tipos de puerta y ventana distintos de las familias, y sombreados o colores del archivo de otro programa.
