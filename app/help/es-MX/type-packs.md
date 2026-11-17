---
title: Paquetes de tipos: comparta tipos de muro como archivos abiertos
summary: Guarde tipos de muro con sus capas, materiales, etiquetas y códigos de clasificación, y familias, como un solo archivo abierto (JSON de texto plano o IFC), y agréguelos a otro proyecto. También se pueden leer los tipos de muro de un archivo IFC de otro programa.
keywords: paquete de tipos, tipos, tipo de muro, compartir, exportar, importar, biblioteca, formato abierto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiales, capas, plantilla, estándar de oficina, familias
from: e4c91331
---

## Lo que hará

Lleve sus tipos de muro de un proyecto a otro, o entréguelos a alguien que trabaja en otro programa. Un paquete de tipos contiene cada tipo de muro con sus capas, espesores, materiales, núcleo, cavidades, prioridad de capas, nivel de desarrollo, datos de cuantificación y códigos de clasificación, además de las familias que agregue. Es un archivo abierto: texto JSON de texto plano que cualquiera puede leer, o un archivo IFC. Nada en él está atado a un despacho, un país o una cuenta.

## Guardar tipos de un proyecto

1. Abra **Datos** en la barra del modelo y elija {{ui:Paquetes de tipos}}.
2. En {{ui:Guardar los tipos de este proyecto}}, marque los tipos de muro que quiere incluir. Los tipos propios del proyecto ya están marcados; un tipo inicial puede agregarse y se incluye como copia. Marque las familias si quiere incluirlas.
3. Escriba un {{ui:Nombre del paquete}}.
4. {{ui:Guardar como paquete (.json)}} descarga un archivo `.cctypes.json`. {{ui:Guardar como IFC (.ifc)}} descarga un archivo IFC que contiene solo tipos: cada tipo de muro como IfcWallType, con su conjunto de capas de material, materiales y clasificación, para cualquier programa BIM.

## Agregar tipos a un proyecto

1. En el mismo cuadro de diálogo, elija {{ui:Abrir un paquete o un archivo IFC…}} y seleccione un paquete `.json` o un archivo `.ifc`.
2. El cuadro de diálogo enumera lo que contiene el archivo: cada tipo de muro con su espesor, número de capas y códigos, los materiales y las familias.
3. Elija qué pasa con {{ui:Un tipo que este proyecto ya tiene}}: **Conservar el del proyecto**, **Agregar el del paquete como copia** (recibe un nombre nuevo que termina en "(2)") o **Reemplazar (solo si ningún muro lo usa)**.
4. {{ui:Agregar al proyecto}}. El cuadro de diálogo muestra lo que se agregó, copió, reemplazó o conservó. Es un solo paso para deshacer.

Los tipos nuevos aparecen de inmediato en la lista de tipos de la herramienta Muro.

## Tipos de piso, cubierta y techo

La lista de tipos para guardar también incluye los tipos de piso, cubierta y techo del proyecto, y sus iniciales (marcados Piso, Cubierta, Techo). Un paquete puede llevar los cuatro tipos; cada tipo indica su clase IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipo de piso, cubierta o techo que usan elementos no se reemplaza desde un paquete: cámbielo en el editor de tipos.

## Un tipo como elemento de biblioteca

Marque exactamente un tipo y elija **Guardar como elemento de biblioteca…**. Se guarda un archivo `.cctype.json`: un elemento de biblioteca del tipo Tipos que contiene ese único tipo (sus capas, materiales, LOD y códigos de clasificación). Súbalo a la biblioteca para compartirlo. **Abrir un paquete o un archivo IFC** también lee un elemento así y agrega su tipo al proyecto como un paquete.

## Conviene saber

- Un archivo IFC de otro programa también se puede abrir aquí. Cada uno de sus tipos de muro que tenga capas de material se lee: el nombre, los materiales y espesores de las capas, y cualquier cavidad son los del archivo. Qué capas son el núcleo y qué hace cada capa (acabado, estructura, aislamiento) se adivinan; el tipo se marca **(adivinado)** y debe revisarlo en el editor de tipos de muro. Un tipo de muro sin capas se omite y se indica por nombre.
- Un material que el proyecto ya tiene se conserva tal cual. Un material nuevo cuyo nombre ya está ocupado recibe "(paquete)" después de su nombre.
- Un tipo que usan muros nunca se reemplaza desde un paquete. Cámbielo en el editor de tipos de muro, que mueve sus muros correctamente.
- Un código asignado a un muro no viaja: pertenece a ese muro. Un código asignado al tipo sí viaja.
- Un archivo con un campo que el formato no tiene, una capa cuyo material falta, o cualquier cosa que no sea texto plano, se rechaza, y el mensaje indica dónde y por qué.
- No implementado: tipos de piso, cubierta y techo (no tienen tipos en esta versión: cada uno tiene su propio espesor), tipos de puerta y ventana distintos de las familias, y sombreados o colores de un archivo de otro programa.
