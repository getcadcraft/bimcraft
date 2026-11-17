---
title: Desde un archivo de proyecto a BimCraft mediante IFC
summary: Las opciones de exportación IFC que mejor se abren en BimCraft (versión, conjuntos de propiedades, cantidades base, ambientes, modelos vinculados, coordenadas), cómo abrir el resultado y qué conserva la exportación.
keywords: exportar, exportación ifc, rvt a ifc, convertir, 3d, geometría, ifc2x3, ifc4, vista de coordinación, vista de referencia, vista de transferencia de diseño, conjuntos de propiedades, cantidades base, ambientes, espacios, archivos vinculados, coordenadas compartidas, punto de levantamiento, punto base del proyecto, opciones
from: 3efd5fc9
---

## Lo que vas a hacer

Convertir un archivo de proyecto en un archivo IFC que podés orbitar, inspeccionar, revisar y editar en BimCraft. BimCraft todavía no lee el modelo 3D dentro de un archivo `.rvt`, así que la exportación se hace en el programa que creó el archivo (Revit); BimCraft abre el resultado.

## Pasos

1. Abrí el proyecto en el programa que lo creó. La tarjeta de BimCraft indica la versión en la que se guardó.
2. Abrí una vista 3D que muestre lo que querés exportar.
3. Elegí **Archivo > Exportar > IFC**.
4. En el cuadro de exportación, elegí una configuración (o **Modificar configuración…**) con las opciones de abajo.
5. Elegí una carpeta y un nombre de archivo, y exportá.
6. En BimCraft, hacé clic en {{ui:Elegir un archivo}} y elegí el nuevo archivo `.ifc`. Los modelos vinculados exportados como archivos propios se abren en la misma escena con {{ui:Agregar un modelo}}.

## Las opciones que mejor se abren acá

| Opción en el exportador | Elegir | Por qué |
|---|---|---|
| Versión de IFC | **IFC4 Reference View** para ver, revisar y hacer cómputos; **IFC2X3 Coordination View 2.0** cuando otros necesitan IFC2X3 | Ambas se abren completas. **IFC4 Design Transfer View** también se abre, con formas más exactas, pero el archivo es más grande y más lento. |
| Tipo de archivo | **IFC** (simple) | BimCraft no abre `.ifczip` ni `.ifcxml`. |
| Fase / elementos visibles | La fase que querés, y **Exportar solo los elementos visibles en la vista** cuando configurás la vista 3D para eso | Deja afuera lo que ocultaste a propósito. |
| Conjuntos de propiedades | **Exportar conjuntos de propiedades de Revit** y **Exportar conjuntos de propiedades comunes de IFC** | Se convierten en los conjuntos de propiedades que BimCraft muestra en {{ui:Propiedades}}, y que usan {{ui:Buscar}}, {{ui:Color}} y {{ui:Controles del modelo}}. |
| Cantidades base | **Exportar cantidades base** | {{ui:Totales de cantidades}} y las planillas las usan (longitudes, superficies, volúmenes) en lugar de estimarlas. |
| Ambientes y superficies | **Exportar ambientes en vistas 3D** (o la opción Ambientes / Espacios) | Los ambientes llegan como espacios: hacé clic en {{ui:Espacios}} para verlos. |
| Archivos vinculados | **Exportar archivos vinculados como IFC separados** | Cada vínculo se convierte en su propio archivo; abrilos juntos con {{ui:Agregar un modelo}} y quedan alineados. |
| Base de coordenadas | **Coordenadas compartidas** (o el punto de levantamiento) | El archivo lleva entonces su ubicación en el mapa (IfcMapConversion), de modo que funcionan Medir › Ubicación, las capas de mapa sobre el terreno y las nubes de puntos ubicadas por coordenadas de mapa. El punto base del proyecto mantiene el modelo cerca del origen, pero sin su ubicación en el mapa. |
| Dividir muros y columnas por nivel | Activado, cuando hacés cómputos de cantidades por piso | La parte de cada piso es un elemento propio. |

## Qué deberías ver

El modelo en 3D, con los pisos tomados de los niveles del proyecto y la información del proyecto en el panel {{ui:Archivo}}. **Exportado desde** indica el exportador.

## Qué conserva la exportación y qué no

- **Se conserva**: geometría, pisos, tipos de elementos, nombres, tipos, la mayoría de los parámetros (como conjuntos de propiedades), cantidades base cuando se piden, ambientes como espacios, y la ubicación en el mapa con coordenadas compartidas.
- **No se conserva**: vistas, hojas, anotaciones, familias como familias editables, conjuntos de trabajo ni opciones de diseño. Un archivo IFC es una captura de los elementos del modelo, no del proyecto. Para las hojas, exportá DWG y abrilo en la vista 2D.

## Errores comunes

- **Faltan parámetros en BimCraft.** Activá las opciones de conjuntos de propiedades de arriba y exportá de nuevo.
- **Faltan ambientes.** Activá la opción de ambientes y después hacé clic en {{ui:Espacios}}.
- **Guardar como `.ifczip`.** Elegí IFC simple, o descomprimí el `.ifczip`.
- **Sin ubicación en el mapa.** Exportá con coordenadas compartidas; verificá que el punto de levantamiento del proyecto esté configurado.
- **Esperar que los cambios vuelvan al proyecto.** Los cambios que guardás en BimCraft van a un archivo IFC nuevo, no al archivo del proyecto.
