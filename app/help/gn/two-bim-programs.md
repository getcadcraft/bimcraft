---
title: Trabajar entre dos programas BIM
summary: Enviar un modelo de un programa BIM a otro mediante IFC con BimCraft en el medio, conservar sus GlobalId, conjuntos de propiedades y clasificaciones, configurar ambos programas para las mismas propiedades, y ver qué volvió.
keywords: ifc, ida y vuelta, interoperabilidad, globalid, guid, conjuntos de propiedades, psets, clasificaciones, parámetros compartidos, mapeo de propiedades, traductor, bcf, coordinación, intercambio
from: 9f224176
---

## Qué va a hacer

Mover un modelo entre dos programas BIM, por ejemplo de Revit a Archicad y de vuelta, mediante IFC, con BimCraft en el medio para verificarlo, agregarle cosas e informar qué sobrevivió. No se lee el formato de archivo propio de ninguno de los dos programas: todo viaja como IFC.

## Qué conserva BimCraft

Cuando cambia un modelo en BimCraft y hace clic en {{ui:Save as IFC}}, cada línea que no cambió se escribe de vuelta exactamente como era. Así que:

- Los **GlobalId** siguen siendo los mismos, y el otro programa puede asociar cada elemento con el que envió.
- Los **Conjuntos de propiedades** y sus valores se mantienen, salvo los valores que cambió.
- Las **Clasificaciones** siguen asociadas a sus elementos.

## Configure ambos programas para las mismas propiedades

1. Abra el modelo en BimCraft (y el paquete de proyecto, si tiene uno: sus grupos de propiedades se agregan).
2. En el panel izquierdo, abra {{ui:Between two BIM programs}}.
3. En **Mapeo de propiedades**, descargue lo que necesita cada programa:
   - {{ui:Shared parameters}}: un archivo de parámetros compartidos. En Revit, cárguelo con Manage › Shared Parameters y agregue los parámetros a las categorías que los necesitan.
   - {{ui:IFC export property sets}}: un archivo de conjuntos de propiedades definidos por el usuario. En la configuración de exportación IFC de Revit, elíjalo en "user-defined property sets", para que el IFC exportado lleve el mismo conjunto y los mismos nombres de propiedad.
   - {{ui:Mapping table (CSV)}}: cada propiedad con su conjunto y nombre IFC, su tipo, y los nombres correspondientes en cada programa. Los archivos de mapeo de Archicad no son un formato publicado, así que configure su traductor IFC y su administrador de propiedades a partir de esta tabla a mano.
   - {{ui:Mapping file}}: todo el mapeo como un solo archivo, para guardar con el proyecto.

Los conjuntos estándar (Pset_ y Qto_) se dejan fuera del archivo de parámetros compartidos: ambos programas los escriben a partir de sus propios datos.

## Enviar el modelo y traerlo de vuelta

1. Exporte IFC desde el primer programa con los GlobalId conservados (Revit: "Store the IFC GUID in an element parameter after export" activado).
2. Ábralo en BimCraft, verifíquelo ({{ui:Model checks}}, {{ui:Clash check}}), agregue incidencias ({{ui:Issues}}, BCF), cambie valores si hace falta, y haga clic en {{ui:Save as IFC}}.
3. Abra el IFC guardado en el segundo programa, trabaje en él y exporte IFC desde allí con los GlobalId conservados (traductor de Archicad: "Global Unique Identifiers: Keep existing").
4. De vuelta en BimCraft, abra el modelo que salió y luego agregue el que volvió ({{ui:Add a model}} en Modelos).
5. En {{ui:Between two BIM programs}}, elija **Salió** y **Volvió**, y haga clic en {{ui:Make the report}}.

## Lea el informe

- **Elementos**: cuántos volvieron con el mismo GlobalId, cuántos faltan y cuántos son nuevos. Los elementos con un GlobalId nuevo aparecen como uno faltante y uno nuevo: el otro programa no lo conservó.
- **Cambió la clase IFC**: elementos que volvieron como otro tipo de elemento.
- **Valores de propiedad conservados**: la proporción de valores que volvieron sin cambios. La lista de abajo muestra las propiedades con más valores cambiados o faltantes.
- **Clasificaciones**: conservadas, cambiadas (mismo sistema, otro código) o faltantes.

{{ui:Download the report (CSV)}} da cada propiedad con sus recuentos. Para ver qué elementos se movieron o cambiaron de forma, use {{ui:Compare versions}} sobre los mismos dos modelos.

:::note
BimCraft no ejecuta ninguno de los dos programas. Qué configuraciones transportan un valor depende de la configuración IFC de cada programa: el informe muestra lo que realmente volvió, así que pruebe una configuración, exporte de nuevo y compare.
:::

## Las incidencias viajan como BCF

Las incidencias que levanta en BimCraft se exportan como BCF ({{ui:Issues}}), que ambos programas pueden leer con sus herramientas BCF, así que una consulta sobre un elemento llega a la persona que trabaja en el otro programa con su punto de vista.

Ver también [Abrir un paquete de proyecto](topic:open-project-bundle), [Del archivo de proyecto a BimCraft mediante IFC](topic:rvt-to-ifc) y [Comparar dos versiones de un modelo](topic:compare-versions).
