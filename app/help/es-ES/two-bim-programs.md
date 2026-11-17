---
title: Trabajar entre dos programas BIM
summary: Enviar un modelo de un programa BIM a otro a través de IFC con BimCraft en medio, conservar sus GlobalId, conjuntos de propiedades y clasificaciones, configurar ambos programas para las mismas propiedades y ver qué volvió.
keywords: ifc, ida y vuelta, interoperabilidad, globalid, guid, conjuntos de propiedades, psets, clasificaciones, parámetros compartidos, correspondencia de propiedades, traductor, bcf, coordinación, intercambio
from: 9f224176
---

## Qué va a hacer

Traslade un modelo de un programa BIM a otro, por ejemplo de Revit a Archicad y de vuelta, a través de IFC, con BimCraft en medio para comprobarlo, añadirle contenido e informar de qué se conservó. No se lee el formato de archivo propio de ninguno de los dos programas: todo viaja como IFC.

## Qué conserva BimCraft

Cuando cambia un modelo en BimCraft y hace clic en {{ui:Guardar como IFC}}, cada línea que no cambió se escribe de nuevo exactamente igual. Por tanto:

- Los **GlobalId** siguen siendo los mismos, y el otro programa puede asociar cada elemento con el que envió.
- Los **conjuntos de propiedades** y sus valores se conservan, salvo los valores que usted cambió.
- Las **clasificaciones** siguen asociadas a sus elementos.

## Configurar ambos programas para las mismas propiedades

1. Abra el modelo en BimCraft (y el paquete del proyecto, si lo tiene: sus grupos de propiedades se añaden).
2. En el panel izquierdo, abra {{ui:Entre dos programas BIM}}.
3. En **Correspondencia de propiedades**, descargue lo que necesita cada programa:
   - {{ui:Parámetros compartidos}}: un archivo de parámetros compartidos. En Revit, cárguelo con Gestionar › Parámetros compartidos y añada los parámetros a las categorías que los necesiten.
   - {{ui:Conjuntos de propiedades para exportar IFC}}: un archivo de conjuntos de propiedades definidos por el usuario. En la configuración de exportación IFC de Revit, elíjalo entre los conjuntos de propiedades definidos por el usuario, de modo que el IFC exportado lleve el mismo conjunto y los mismos nombres de propiedad.
   - {{ui:Tabla de correspondencias (CSV)}}: cada propiedad con su conjunto y su nombre IFC, su tipo y los nombres equivalentes en cada programa. Los archivos de correspondencia de Archicad no son un formato publicado, así que configure a mano su traductor IFC y su gestor de propiedades a partir de esta tabla.
   - {{ui:Archivo de correspondencias}}: toda la correspondencia en un solo archivo, para guardarlo junto con el proyecto.

Los conjuntos estándar (Pset_ y Qto_) no se incluyen en el archivo de parámetros compartidos: ambos programas los escriben a partir de sus propios datos.

## Enviar el modelo y traerlo de vuelta

1. Exporte IFC desde el primer programa conservando los GlobalId (Revit: "Almacenar el GUID de IFC en un parámetro del elemento tras la exportación" activado).
2. Ábralo en BimCraft, compruébelo ({{ui:Comprobaciones del modelo}}, {{ui:Detección de interferencias}}), añada incidencias ({{ui:Incidencias}}, BCF), cambie los valores que necesite y {{ui:Guardar como IFC}}.
3. Abra el IFC guardado en el segundo programa, trabaje en él y exporte IFC desde allí conservando los GlobalId (traductor de Archicad: "Identificadores globales únicos: conservar existentes").
4. De vuelta en BimCraft, abra el modelo que se envió y después añada el que volvió ({{ui:Añadir un modelo}} en Modelos).
5. En {{ui:Entre dos programas BIM}}, elija **Enviado** y **Devuelto**, y haga clic en {{ui:Crear el informe}}.

## Leer el informe

- **Elementos**: cuántos volvieron con el mismo GlobalId, cuántos faltan y cuántos son nuevos. Los elementos con un GlobalId nuevo aparecen como uno que falta y uno nuevo: el otro programa no conservó el original.
- **Clase IFC cambiada**: elementos que volvieron con otro tipo de elemento.
- **Valores de propiedades conservados**: la proporción de valores que volvieron sin cambios. La lista inferior muestra las propiedades con más valores cambiados o perdidos.
- **Clasificaciones**: conservadas, cambiadas (mismo sistema, otro código) o perdidas.

{{ui:Descargar el informe (CSV)}} ofrece cada propiedad con sus recuentos. Para ver qué elementos se han movido o han cambiado de forma, use {{ui:Comparar versiones}} con los mismos dos modelos.

:::note
BimCraft no ejecuta ninguno de los dos programas. Qué ajustes trasladan un valor depende de la configuración IFC de cada programa: el informe muestra lo que realmente volvió, así que pruebe un ajuste, exporte de nuevo y compare.
:::

## Las incidencias viajan como BCF

Las incidencias que crea en BimCraft se exportan como BCF ({{ui:Incidencias}}), que ambos programas pueden leer con sus herramientas BCF. Así, una pregunta sobre un elemento llega a la persona que trabaja en el otro programa con su vista.

Véase también [Abrir un paquete de proyecto](topic:open-project-bundle), [De un archivo de proyecto a BimCraft a través de IFC](topic:rvt-to-ifc) y [Comparar dos versiones de un modelo](topic:compare-versions).
