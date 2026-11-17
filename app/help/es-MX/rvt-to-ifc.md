---
title: De un archivo de proyecto a BimCraft mediante IFC
summary: Los ajustes de exportación IFC que mejor se abren en BimCraft (versión, conjuntos de propiedades, cantidades base, locales, modelos vinculados, coordenadas), cómo abrir el resultado y qué conserva la exportación.
keywords: exportar, exportación ifc, rvt a ifc, convertir, 3d, geometría, ifc2x3, ifc4, vista de coordinación, vista de referencia, vista de transferencia de diseño, conjuntos de propiedades, cantidades base, locales, espacios, archivos vinculados, coordenadas compartidas, punto topográfico, punto base del proyecto, configuración
from: 3efd5fc9
---

## Qué hará

Convierta un archivo de proyecto en un archivo IFC que puede girar, inspeccionar, revisar y editar en BimCraft. BimCraft todavía no lee el modelo 3D dentro de un archivo `.rvt`, así que la exportación se hace en el programa que creó el archivo (Revit); BimCraft abre el resultado.

## Pasos

1. Abra el proyecto en el programa que lo creó. La tarjeta de BimCraft indica la versión en que se guardó.
2. Abra una vista 3D que muestre lo que quiere exportar.
3. Elija **Archivo > Exportar > IFC**.
4. En el cuadro de exportación, elija una configuración (o **Modificar configuración…**) con los ajustes de abajo.
5. Elija una carpeta y un nombre de archivo, y exporte.
6. En BimCraft, haga clic en {{ui:Elegir un archivo}} y elija el nuevo archivo `.ifc`. Los modelos vinculados exportados como archivos propios se abren en la misma escena con {{ui:Agregar un modelo}}.

## Los ajustes que mejor se abren aquí

| Ajuste en el exportador | Elija | Por qué |
|---|---|---|
| Versión de IFC | **IFC4 Reference View** para ver, revisar y cuantificar; **IFC2X3 Coordination View 2.0** cuando otros necesitan IFC2X3 | Ambos se abren completos. **IFC4 Design Transfer View** también se abre, con formas más exactas, pero el archivo es más grande y más lento. |
| Tipo de archivo | **IFC** (simple) | BimCraft no abre `.ifczip` ni `.ifcxml`. |
| Fase / elementos visibles | La fase que desea, y **Exportar solo los elementos visibles en la vista** cuando configure la vista 3D para ello | Deja fuera lo que ocultó a propósito. |
| Conjuntos de propiedades | **Exportar conjuntos de propiedades de Revit** y **Exportar conjuntos de propiedades comunes de IFC** | Se convierten en los conjuntos de propiedades que BimCraft muestra en {{ui:Propiedades}}, y que usan {{ui:Buscar}}, {{ui:Color}} y {{ui:Comprobaciones del modelo}}. |
| Cantidades base | **Exportar cantidades base** | {{ui:Totales de cantidades}} y los cuadros las usan (longitudes, áreas, volúmenes) en lugar de estimarlas. |
| Locales y áreas | **Exportar locales en vistas 3D** (o la opción de Locales / Espacios) | Los locales llegan como espacios: haga clic en {{ui:Espacios}} para verlos. |
| Archivos vinculados | **Exportar archivos vinculados como IFC separados** | Cada vínculo se convierte en su propio archivo; ábralos juntos con {{ui:Agregar un modelo}} y quedan alineados. |
| Base de coordenadas | **Coordenadas compartidas** (o el punto topográfico) | El archivo entonces lleva su ubicación en el mapa (IfcMapConversion), así que Medir › Ubicación, las capas de mapa sobre el terreno y las nubes de puntos colocadas por coordenadas de mapa funcionan. El punto base del proyecto mantiene el modelo cerca del origen, pero sin su ubicación en el mapa. |
| Dividir muros y columnas por nivel | Activado, cuando cuantifique por piso | Cada parte de cada piso es su propio elemento. |

## Qué debe ver

El modelo en 3D, con los niveles tomados de los niveles del proyecto y la información del proyecto en el panel {{ui:Archivo}}. **Exportado desde** indica el exportador.

## Lo que conserva la exportación, y lo que no

- **Conserva**: geometría, niveles, tipos de elementos, nombres, tipos, la mayoría de los parámetros (como conjuntos de propiedades), cantidades base si se solicitan, locales como espacios, y la ubicación en el mapa con coordenadas compartidas.
- **No conserva**: vistas, hojas, anotaciones, familias como familias editables, conjuntos de trabajo y opciones de diseño. Un archivo IFC es una captura de los elementos del modelo, no del proyecto. Para las hojas, exporte DWG y ábralo en la vista 2D.

## Errores comunes

- **Faltan parámetros en BimCraft.** Active las opciones de conjuntos de propiedades de arriba y vuelva a exportar.
- **Faltan locales.** Active la opción de locales y luego haga clic en {{ui:Espacios}}.
- **Guardar como `.ifczip`.** Elija IFC simple, o descomprima el `.ifczip`.
- **Sin ubicación en el mapa.** Exporte con coordenadas compartidas; verifique que el punto topográfico del proyecto esté definido.
- **Esperar que las ediciones regresen.** Las ediciones que guarde en BimCraft se escriben en un archivo IFC nuevo, no en el archivo del proyecto.
