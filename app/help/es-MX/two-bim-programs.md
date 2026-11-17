---
title: Trabajar entre dos programas BIM
summary: Envíe un modelo de un programa BIM a otro por IFC, con BimCraft en medio; conserve sus GlobalIds, conjuntos de propiedades y clasificaciones; configure ambos programas para las mismas propiedades, y vea lo que regresó.
keywords: ifc, ida y vuelta, interoperabilidad, globalid, guid, conjuntos de propiedades, psets, clasificaciones, parámetros compartidos, correspondencia de propiedades, traductor, bcf, coordinación, intercambio
from: 9f224176
---

## Lo que hará

Mueva un modelo entre dos programas BIM, por ejemplo de Revit a Archicad y de regreso, por IFC, con BimCraft en medio para verificarlo, agregarle información e informar lo que sobrevivió. No se lee el formato de archivo propio de ninguno de los dos programas: todo viaja como IFC.

## Lo que conserva BimCraft

Cuando cambia un modelo en BimCraft y hace clic en {{ui:Guardar como IFC}}, cada línea que no cambió se escribe de vuelta exactamente como estaba. Por lo tanto:

- Los **GlobalIds** se mantienen iguales, y el otro programa puede asociar cada elemento con el que le envió.
- Los **conjuntos de propiedades** y sus valores se conservan, salvo los valores que cambió.
- Las **clasificaciones** siguen asociadas a sus elementos.

## Configure ambos programas para las mismas propiedades

1. Abra el modelo en BimCraft (y el paquete del proyecto, si tiene uno: sus grupos de propiedades se agregan).
2. En el panel izquierdo, abra {{ui:Entre dos programas BIM}}.
3. En **Correspondencia de propiedades**, descargue lo que necesita cada programa:
   - {{ui:Parámetros compartidos}}: un archivo de parámetros compartidos. En Revit, cárguelo con Gestionar › Parámetros compartidos y agregue los parámetros a las categorías que los necesitan.
   - {{ui:Conjuntos de propiedades para exportar IFC}}: un archivo de conjuntos de propiedades definidos por el usuario. En la configuración de exportación IFC de Revit, elíjalo en los conjuntos de propiedades definidos por el usuario, para que el IFC exportado lleve el mismo conjunto y los mismos nombres de propiedad.
   - {{ui:Tabla de correspondencias (CSV)}}: cada propiedad con su conjunto IFC y su nombre, su tipo, y los nombres equivalentes en cada programa. Los archivos de correspondencia de Archicad no son un formato publicado, así que configure su traductor IFC y su administrador de propiedades a mano, a partir de esta tabla.
   - {{ui:Archivo de correspondencias}}: toda la correspondencia en un solo archivo, para guardarlo con el proyecto.

Los conjuntos estándar (Pset_ y Qto_) se omiten del archivo de parámetros compartidos: ambos programas los escriben a partir de sus propios datos.

## Envíe el modelo y tráigalo de vuelta

1. Exporte IFC desde el primer programa conservando los GlobalIds (Revit: "Almacenar el GUID de IFC en un parámetro del elemento después de exportar" activado).
2. Ábralo en BimCraft, revíselo ({{ui:Comprobaciones del modelo}}, {{ui:Detección de interferencias}}), agregue incidencias ({{ui:Incidencias}}, BCF), cambie los valores que necesite y haga clic en {{ui:Guardar como IFC}}.
3. Abra el IFC guardado en el segundo programa, trabaje en él, y exporte IFC desde ahí conservando los GlobalIds (traductor de Archicad: "Identificadores únicos globales: conservar los existentes").
4. De vuelta en BimCraft, abra el modelo que se envió y luego agregue el que regresó ({{ui:Agregar un modelo}} en Modelos).
5. En {{ui:Entre dos programas BIM}}, elija **Enviado** y **Regresado**, y haga clic en {{ui:Crear el informe}}.

## Lea el informe

- **Elementos**: cuántos regresaron con el mismo GlobalId, cuántos faltan y cuántos son nuevos. Los elementos con un GlobalId nuevo aparecen como uno faltante y uno nuevo: el otro programa no lo conservó.
- **Clase IFC cambiada**: elementos que regresaron como otro tipo de elemento.
- **Valores de propiedades conservados**: la proporción de valores que regresaron sin cambios. La lista de abajo muestra las propiedades con más valores cambiados o faltantes.
- **Clasificaciones**: conservadas, cambiadas (mismo sistema, otro código) o faltantes.

{{ui:Descargar el informe (CSV)}} entrega cada propiedad con sus conteos. Para ver qué elementos se movieron o cambiaron de forma, use {{ui:Comparar versiones}} con los mismos dos modelos.

:::note
BimCraft no ejecuta ninguno de los dos programas. Qué configuración transmite un valor depende de la configuración IFC de cada programa: el informe muestra lo que realmente regresó, así que pruebe una configuración, exporte de nuevo y compare.
:::

## Las incidencias viajan como BCF

Las incidencias que registra en BimCraft se exportan como BCF ({{ui:Incidencias}}), que ambos programas pueden leer con sus herramientas BCF. Así, una pregunta sobre un elemento llega a la persona que trabaja en el otro programa, con su punto de vista.

Vea también [Abrir un paquete de proyecto](topic:open-project-bundle), [De un archivo de proyecto a BimCraft por IFC](topic:rvt-to-ifc) y [Comparar dos versiones de un modelo](topic:compare-versions).
