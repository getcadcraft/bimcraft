---
title: Abrir archivos de proyecto .pln y .pla
summary: Qué hace BimCraft hoy con los archivos .pln, .pla, .tpl y .bpn, y cómo exportar IFC y DWG desde ellos para que el modelo y los dibujos se abran aquí.
keywords: pln, pla, tpl, bpn, archivo de proyecto, archivo, plantilla, copia de seguridad, exportar IFC, exportar DWG, traductor, zonas, presentaciones
from: 41fb921d
---

## Qué hará

Traiga a BimCraft un proyecto guardado como `.pln` (proyecto), `.pla` (archivo con su biblioteca), `.tpl` (plantilla) o `.bpn` (copia de seguridad). Estos son archivos propios de Archicad.

## Qué se abre hoy

- **Los archivos de proyecto en sí todavía no se abren.** Su formato no está publicado y BimCraft aún no lo lee. Al abrir uno, BimCraft lo indica y remite a esta página.
- **BimCraft revisa los primeros bytes del archivo.** Los proyectos de Archicad desde la versión 17 comienzan con la misma firma corta, así que BimCraft puede confirmarle con certeza que un archivo es un proyecto de Archicad. Un archivo con nombre de Archicad que no comienza así probablemente fue renombrado, está dañado o proviene de una versión anterior. La firma no distingue entre proyecto, archivo y plantilla.
- **Una exportación IFC se abre completa**: el modelo en 3D, los niveles, las zonas como espacios, los datos de los elementos, los conjuntos de propiedades y las clasificaciones, con todas las herramientas de BimCraft.
- **Una exportación DWG se abre** en la vista 2D, con sus capas y presentaciones, y en {{ui:3D}}. Para editarla, use {{ui:Editar en CadCraft}}.

O traiga el proyecto completo como un solo archivo ZIP, con sus vistas, presentaciones y grupos de propiedades: consulte [Abrir un paquete de proyecto](topic:open-project-bundle).

## Exportar IFC (el modelo)

1. Abra el proyecto en Archicad.
2. Elija **Archivo > Guardar como** y seleccione **IFC** como tipo de archivo.
3. Seleccione un traductor IFC (el nombre que Archicad da a un conjunto de opciones de exportación IFC). Uno de **IFC4 Reference View** o **IFC2X3 Coordination View 2.0** es adecuado para BimCraft. IFC4X3 también se abre.
4. Elija qué exportar: todo el proyecto, o solo los elementos visibles en los niveles que está viendo.
5. Guarde, luego haga clic en {{ui:Elegir un archivo}} en BimCraft y seleccione el archivo `.ifc`.

Revise estos puntos en la configuración del traductor antes de exportar:

- **Zonas**: expórtelas, para que los espacios lleguen como espacios. Haga clic en {{ui:Espacios}} en BimCraft para verlos.
- **Propiedades y clasificaciones**: expórtelas, para que se muestren en {{ui:Propiedades}} y puedan usarse en {{ui:Buscar}}, {{ui:Color}} y {{ui:Totales de cantidades}}.
- **`.ifc` simple**, no `.ifczip` ni `.ifcxml`. BimCraft abre solo archivos `.ifc` simples.

## Exportar DWG (los dibujos)

1. Abra la planta, la sección o la presentación que quiera.
2. Elija **Archivo > Guardar como** y seleccione **DWG** como tipo de archivo.
3. Seleccione un traductor DXF-DWG y guarde.
4. Para un juego completo de hojas, guarde las presentaciones desde el Libro de presentaciones, o publíquelas como DWG.
5. Abra el `.dwg` en BimCraft. Los dibujos vinculados por la exportación se abren con él cuando están en la misma carpeta; consulte [Dibujos e imágenes vinculados](topic:dwg-linked-files).

## Solución de problemas

- **"… es un proyecto de Archicad: sus primeros bytes lo indican."** Exporte IFC o DWG como se explicó arriba, y abra ese archivo.
- **"… tiene nombre de archivo de Archicad, pero no comienza como uno."** Revise de dónde vino el archivo: puede ser otro tipo de archivo con un nombre nuevo (intente abrirlo con su extensión real), una copia que no terminó de copiarse, o un proyecto de una versión anterior a la 17. Ábralo en Archicad si puede, y luego exporte IFC o DWG.
- **El modelo se abre sin espacios.** No se exportaron las zonas. Actívelas en el traductor IFC y exporte de nuevo.
- **Las aberturas no están recortadas.** BimCraft lo indica bajo **Aún no dibujado** en el panel {{ui:Archivo}}. Exporte de nuevo; si sigue igual, abra el modelo en el programa que lo creó y revise allí las aberturas.
- **El texto del DWG se ve diferente.** La exportación puede conservar tipos de letra que BimCraft no tiene; BimCraft dibuja el texto con una fuente sin serifas sencilla.

Consulte también [Obtener un archivo de proyecto en 3D mediante IFC](topic:rvt-to-ifc) y [Qué lee BimCraft de cada formato](topic:file-formats).
