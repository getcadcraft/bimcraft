---
title: Paquetes de tipos: compartir tipos de muro como archivos abiertos
summary: Guarde tipos de muro con sus capas, materiales, etiquetas y códigos de clasificación, y también familias, como un solo archivo abierto (JSON de texto plano o IFC), y añádalos a otro proyecto. También se pueden leer los tipos de muro de un archivo IFC de otro programa.
keywords: paquete de tipos, tipos, tipo de muro, compartir, exportar, importar, biblioteca, formato abierto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiales, capas, plantilla, estándar de oficina, familias
from: e4c91331
---

## Qué va a hacer

Lleve sus tipos de muro de un proyecto a otro, o entréguelos a alguien que trabaje en otro programa. Un paquete de tipos contiene cada tipo de muro con sus capas, espesores, materiales, núcleo, cámaras, prioridad de capas, nivel de desarrollo, datos de mediciones y códigos de clasificación, y las familias que añada. Es un archivo abierto: texto JSON de texto plano que cualquiera puede leer, o un archivo IFC. Nada en él está vinculado a una empresa, a un país o a una cuenta.

## Guardar tipos de un proyecto

1. Abra **Datos** en la barra del modelo y elija {{ui:Paquetes de tipos}}.
2. En {{ui:Guardar los tipos de este proyecto}}, marque los tipos de muro que quiere incluir. Los tipos propios del proyecto aparecen marcados; un tipo inicial puede añadirse y entra como copia. Marque las familias si quiere incluirlas.
3. Escriba un {{ui:Nombre del paquete}}.
4. {{ui:Guardar como paquete (.json)}} descarga un archivo `.cctypes.json`. {{ui:Guardar como IFC (.ifc)}} descarga un archivo IFC que contiene solo tipos: cada tipo de muro como IfcWallType con su conjunto de capas de material, sus materiales y su clasificación, para cualquier programa BIM.

## Añadir tipos a un proyecto

1. En el mismo cuadro de diálogo, elija {{ui:Abrir un paquete o un archivo IFC…}} y seleccione un paquete `.json` o un archivo `.ifc`.
2. El cuadro de diálogo enumera lo que contiene el archivo: cada tipo de muro con su espesor, número de capas y códigos, los materiales y las familias.
3. Elija qué ocurre con {{ui:Un tipo que este proyecto ya tiene}}: **Conservar el del proyecto**, **Añadir el del paquete como copia** (recibe un nombre nuevo que termina en "(2)") o **Reemplazarlo (solo cuando ningún muro lo use)**.
4. {{ui:Añadir al proyecto}}. El cuadro de diálogo indica lo que se añadió, copió, reemplazó o conservó. Es un solo paso de deshacer.

Los nuevos tipos aparecen de inmediato en la lista de tipos de la herramienta Muro.

## Tipos de forjado, cubierta y techo

La lista de tipos para guardar también incluye los tipos de forjado, cubierta y techo del proyecto, y sus iniciales (marcados como Forjado, Cubierta, Techo). Un paquete puede contener las cuatro clases; cada tipo indica su clase IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipo de forjado, cubierta o techo que usen elementos no se reemplaza desde un paquete: cámbielo en el editor de tipos.

## Un tipo como elemento de biblioteca

Marque exactamente un tipo y elija **Guardar como elemento de biblioteca…**. Se guarda un archivo `.cctype.json`: un elemento de biblioteca de la clase Tipos que contiene ese único tipo (sus capas, materiales, LOD y códigos de clasificación). Súbalo a la biblioteca para compartirlo. **Abrir un paquete o un archivo IFC** también lee un elemento de este tipo y añade su tipo al proyecto como si fuera un paquete.

## Para tener en cuenta

- También se puede abrir aquí un archivo IFC de otro programa. Cada uno de sus tipos de muro que tenga capas de material se lee: el nombre, los materiales y espesores de las capas, y cualquier cámara, son los del propio archivo. Qué capas son el núcleo y qué hace cada una (acabado, estructura, aislamiento) se estima, el tipo queda marcado como **(estimado)**, y debe comprobarlo en el editor de tipos de muro. Un tipo de muro sin capas se omite y se indica por su nombre.
- Un material que ya tiene el proyecto se conserva tal cual. Un material nuevo cuyo nombre ya existe recibe "(paquete)" después de su nombre.
- Un tipo que usan muros nunca se reemplaza desde un paquete. Cámbielo en el editor de tipos de muro, que mueve sus muros correctamente.
- Un código asignado a un muro no se transfiere: pertenece a ese muro. Un código asignado al tipo sí se transfiere.
- Un archivo con un campo que el formato no tiene, una capa cuyo material falta o cualquier cosa que no sea texto plano se rechaza, y el mensaje indica dónde y por qué.
- No incluido todavía: tipos de forjado, cubierta y techo (en esta versión no tienen tipos: cada uno tiene su propio espesor), tipos de puerta y ventana distintos de las familias, y tramas o colores de un archivo de otro programa.
