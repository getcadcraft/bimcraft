---
title: Del archivo de proyecto a BimCraft mediante IFC
summary: Los ajustes de exportación IFC que mejor se abren en BimCraft (versión, conjuntos de propiedades, cantidades base, habitaciones, modelos vinculados, coordenadas), cómo abrir el resultado y qué conserva la exportación.
keywords: exportar, exportación ifc, rvt a ifc, convertir, 3d, geometría, ifc2x3, ifc4, vista de coordinación, vista de referencia, vista de transferencia de diseño, conjuntos de propiedades, cantidades base, habitaciones, espacios, archivos vinculados, coordenadas compartidas, punto topográfico, punto base del proyecto, ajustes
from: 3efd5fc9
---

## Qué hará

Convierta un archivo de proyecto en un archivo IFC que puede girar, inspeccionar, comprobar y editar en BimCraft. BimCraft todavía no lee el modelo 3D que hay dentro de un archivo `.rvt`, así que la exportación se hace en el programa que creó el archivo (Revit); BimCraft abre el resultado.

## Pasos

1. Abra el proyecto en el programa que lo creó. La tarjeta de BimCraft indica la versión en que se guardó.
2. Abra una vista 3D que muestre lo que quiere exportar.
3. Elija **Archivo > Exportar > IFC**.
4. En el cuadro de diálogo de exportación, elija una configuración (o **Modificar configuración…**) con los ajustes de abajo.
5. Elija una carpeta y un nombre de archivo, y exporte.
6. En BimCraft, haga clic en {{ui:Elegir un archivo}} y elija el nuevo archivo `.ifc`. Los modelos vinculados exportados como archivos propios se abren en la misma escena con {{ui:Agregar un modelo}}.

## Los ajustes que mejor se abren aquí

| Ajuste en el exportador | Elija | Motivo |
|---|---|---|
| Versión de IFC | **IFC4 Reference View** para ver, comprobar y calcular mediciones; **IFC2X3 Coordination View 2.0** cuando otros necesiten IFC2X3 | Ambos se abren completos. **IFC4 Design Transfer View** también se abre, con formas más exactas, pero el archivo es más grande y más lento. |
| Tipo de archivo | **IFC** (sin comprimir) | BimCraft no abre `.ifczip` ni `.ifcxml`. |
| Fase / elementos visibles | La fase que quiere, y **Exportar solo los elementos visibles en la vista** cuando configure la vista 3D para ello | Deja fuera lo que ocultó a propósito. |
| Conjuntos de propiedades | **Exportar conjuntos de propiedades de Revit** y **Exportar conjuntos de propiedades comunes de IFC** | Se convierten en los conjuntos de propiedades que BimCraft muestra en {{ui:Propiedades}}, y que usan {{ui:Buscar}}, {{ui:Color}} y {{ui:Comprobaciones del modelo}}. |
| Cantidades base | **Exportar cantidades base** | {{ui:Totales de cantidades}} y las tablas las usan (longitudes, superficies, volúmenes) en lugar de estimarlas. |
| Habitaciones y áreas | **Exportar habitaciones en vistas 3D** (o la opción Habitaciones / Espacios) | Las habitaciones llegan como espacios: haga clic en {{ui:Espacios}} para verlas. |
| Archivos vinculados | **Exportar archivos vinculados como IFC separados** | Cada vínculo se convierte en su propio archivo; ábralos juntos con {{ui:Agregar un modelo}} y quedarán alineados. |
| Base de coordenadas | **Coordenadas compartidas** (o el punto topográfico) | El archivo lleva entonces su lugar en el mapa (IfcMapConversion), así que Medir › Ubicación, las capas de mapa sobre el terreno y las nubes de puntos colocadas por coordenadas de mapa funcionan. El punto base del proyecto mantiene el modelo cerca del origen, pero sin su lugar en el mapa. |
| Dividir muros y pilares por nivel | Activado, cuando calcule cantidades por planta | Cada parte de cada planta es su propio elemento. |

## Lo que debe ver

El modelo en 3D, con las plantas tomadas de los niveles del proyecto y la información del proyecto en el panel {{ui:Archivo}}. **Exportado desde** indica el exportador.

## Lo que conserva la exportación, y lo que no

- **Se conserva**: geometría, plantas, clases de elemento, nombres, tipos, la mayoría de los parámetros (como conjuntos de propiedades), cantidades base si se piden, habitaciones como espacios, y el lugar en el mapa con coordenadas compartidas.
- **No se conserva**: vistas, hojas, anotaciones, familias como familias editables, conjuntos de trabajo ni opciones de diseño. Un archivo IFC es una instantánea de los elementos del modelo, no del proyecto. Para las hojas, exporte DWG y ábralo en la vista 2D.

## Errores frecuentes

- **Faltan parámetros en BimCraft.** Active las opciones de conjuntos de propiedades indicadas arriba y exporte de nuevo.
- **Faltan habitaciones.** Active la opción de habitaciones y después haga clic en {{ui:Espacios}}.
- **Guardar como `.ifczip`.** Elija IFC normal, o descomprima el `.ifczip`.
- **Sin lugar en el mapa.** Exporte con coordenadas compartidas; compruebe que el punto topográfico del proyecto esté definido.
- **Esperar que los cambios vuelvan al proyecto.** Los cambios que guarde en BimCraft van a un nuevo archivo IFC, no al archivo de proyecto.
