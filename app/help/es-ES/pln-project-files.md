---
title: Abrir archivos de proyecto .pln y .pla
summary: Qué hace BimCraft hoy con los archivos .pln, .pla, .tpl y .bpn, y cómo exportar IFC y DWG desde ellos para que el modelo y los planos se abran aquí.
keywords: pln, pla, tpl, bpn, archivo de proyecto, archivo, plantilla, copia de seguridad, exportación ifc, exportación dwg, traductor, zonas, presentaciones
from: 41fb921d
---

## Qué va a hacer

Lleve a BimCraft un proyecto guardado como `.pln` (proyecto), `.pla` (archivo con su biblioteca), `.tpl` (plantilla) o `.bpn` (copia de seguridad). Son archivos propios de Archicad.

## Qué se abre hoy

- **Los propios archivos de proyecto todavía no se abren.** Su formato no está publicado y BimCraft aún no lo lee. Al abrir uno, BimCraft lo indica y remite a esta página.
- **BimCraft comprueba los primeros bytes del archivo.** Los proyectos de Archicad desde la versión 17 empiezan con la misma firma corta, así que BimCraft puede indicarle con certeza que un archivo es un proyecto de Archicad. Un archivo con nombre de Archicad que no empieza así probablemente se ha renombrado, está dañado o procede de una versión anterior. La firma no distingue entre proyecto, archivo y plantilla.
- **Una exportación IFC se abre completa**: el modelo en 3D, las plantas, las zonas como espacios, los datos de los elementos, los conjuntos de propiedades y las clasificaciones, con todas las herramientas de BimCraft.
- **Una exportación DWG se abre** en la vista 2D, con sus capas y presentaciones, y en {{ui:3D}}. Para editarla, use {{ui:Edit in CadCraft}}.

O lleve el proyecto completo como un único zip, con sus vistas, presentaciones y grupos de propiedades: vea [Abrir un paquete de proyecto](topic:open-project-bundle).

## Exportar IFC (el modelo)

1. Abra el proyecto en Archicad.
2. Elija **Archivo > Guardar como** y seleccione **IFC** como tipo de archivo.
3. Elija un traductor IFC (el nombre que Archicad da a un conjunto de ajustes de exportación IFC). Uno de **IFC4 Reference View** o de **IFC2X3 Coordination View 2.0** encaja con BimCraft. IFC4X3 también se abre.
4. Elija qué exportar: el proyecto completo o solo los elementos visibles en las plantas que está viendo.
5. Guarde el archivo, pulse {{ui:Choose a file}} en BimCraft y elija el archivo `.ifc`.

Compruebe estos ajustes del traductor antes de exportar:

- **Zonas**: expórtelas para que las habitaciones lleguen como espacios. Pulse {{ui:Spaces}} en BimCraft para verlos.
- **Propiedades y clasificaciones**: expórtelas para que aparezcan en {{ui:Properties}} y se puedan usar en {{ui:Find}}, {{ui:Color}} y {{ui:Quantity totals}}.
- **`.ifc` normal**, no `.ifczip` ni `.ifcxml`. BimCraft solo abre archivos `.ifc` normales.

## Exportar DWG (los planos)

1. Abra la planta, la sección o la presentación que quiera.
2. Elija **Archivo > Guardar como** y seleccione **DWG** como tipo de archivo.
3. Elija un traductor DXF-DWG y guarde.
4. Para un conjunto completo de hojas, guarde las presentaciones desde el Layout Book, o publíquelas como DWG.
5. Abra el `.dwg` en BimCraft. Los planos vinculados por la exportación se abren con él cuando están en la misma carpeta; vea [Planos e imágenes vinculados](topic:dwg-linked-files).

## Solución de problemas

- **"… es un proyecto de Archicad: sus primeros bytes lo indican."** Exporte IFC o DWG como se ha indicado y abra ese archivo.
- **"… tiene nombre de archivo de Archicad, pero no empieza como uno."** Compruebe de dónde procede: puede ser otro tipo de archivo con un nombre nuevo (pruebe a abrirlo con su extensión real), una copia que no terminó de copiarse o un proyecto de una versión anterior a la 17. Ábralo en Archicad si puede y, después, exporte IFC o DWG.
- **El modelo se abre sin habitaciones.** No se exportaron las zonas. Actívelas en el traductor IFC y vuelva a exportar.
- **Los huecos no están cortados.** BimCraft lo indica en **Aún no dibujado** en el panel {{ui:File}}. Vuelva a exportar; si persiste, abra el modelo en el programa que lo creó y compruebe allí los huecos.
- **El texto del DWG se ve distinto.** La exportación puede conservar tipos de letra que BimCraft no tiene; BimCraft dibuja el texto con una fuente sans serif sencilla.

Vea también [Obtener un archivo de proyecto en 3D mediante IFC](topic:rvt-to-ifc) y [Qué lee BimCraft de cada formato](topic:file-formats).
