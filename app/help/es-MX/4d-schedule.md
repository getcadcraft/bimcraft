---
title: Reproducir un programa de obra en el modelo
summary: Abra una lista de tareas como CSV, vincule cada tarea a elementos mediante una propiedad y avance por las fechas para ver qué está construido, en curso y todavía sin iniciar.
keywords: 4d, programa, secuencia de obra, cronograma, línea de tiempo, fases, programación, gantt, tareas, fechas, simulación, avance, construido, csv, etapa, fase, paquete de trabajo, wbs, grupo
from: 1b985a64
---

## Qué hará

Vea cómo se levanta el edificio: cada tarea de su programa vinculada a los elementos que construye, mostrada día por día.

## Pasos

1. Abra un modelo IFC y abra {{ui:Programa 4D}} en el panel izquierdo.
2. Haga clic en {{ui:Descargar una plantilla}} para obtener una lista de tareas con una semana por nivel, y modifíquela en una hoja de cálculo. O escriba la suya.
3. Haga clic en {{ui:Abrir una lista de tareas…}} y elija el CSV.
4. Arrastre el control deslizante de fechas, o haga clic en {{ui:Reproducir}}.

## La lista de tareas

Un CSV con una fila de encabezado y las columnas **Task**, **Start**, **Finish**, **Field** y **Value**. Se admiten comas o punto y coma.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Escriba las fechas como AAAA-MM-DD.
- Una fila vincula la tarea a cada elemento cuyo **Field** tenga exactamente ese **Value**. El campo es una propiedad como Storey, Class, Name, Type, Material, Tag o GlobalId, o cualquier propiedad escrita con su conjunto y su nombre: `Pset_WallCommon.FireRating`.
- Repita una tarea en más filas, con las mismas fechas, para vincular más elementos a ella.

## Etapas y paquetes de trabajo

Agregue una columna **Stage**, una columna **Package**, o ambas, para agrupar las tareas en etapas y paquetes de trabajo. Phase y WBS también funcionan como nombres de columna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Una tarea pertenece a una etapa y a un paquete. Si una fila posterior de la misma tarea indica otro, esa fila se lista con su número de línea y se omite.
- El mismo nombre de paquete en dos etapas son dos paquetes.

Cuando la lista tiene grupos, aparece una lista {{ui:Mostrar}} sobre la fecha. Elija una etapa o un paquete y se reproduce como un conjunto:

- el control deslizante y {{ui:Reproducir}} van desde el primer inicio hasta el último fin del grupo,
- solo se listan y se pintan las tareas del grupo, y todo lo que está fuera del grupo se ve transparente,
- la línea debajo de la lista indica cuántas de sus tareas están terminadas, en curso y por iniciar en esa fecha,
- {{ui:Seleccionar sus elementos}} selecciona todos los elementos del grupo, para {{ui:Mostrar}}, {{ui:Sección}} o una tabla.

Elija **Todas las tareas** para volver a ver el programa completo.

## Lo que debe ver

- **Construido**: elementos cuyas tareas están todas terminadas, con sus propios colores.
- **En curso**: elementos con una tarea en ejecución ese día, en color ocre. Una tarea está en curso desde su fecha de inicio hasta su fecha de fin.
- **Sin iniciar**: transparentes.
- Los elementos que no están en ninguna tarea se mantienen como están. La lista muestra cuántos elementos encontró cada tarea. Las filas que no se pudieron leer, o que no encontraron nada, se listan con sus números de línea.

## Vínculos, diagrama de Gantt y MS Project

- Abra un archivo XML de Microsoft Project (`.xml`) o un CSV que tenga una columna `Predecessors`. Los vínculos pueden ser fin a inicio, inicio a inicio, fin a fin o inicio a fin, cada uno con un adelanto o un retraso en días.
- Debajo de la lista de tareas, el diagrama de Gantt dibuja cada tarea como una barra, con flechas para los vínculos. Las tareas de la ruta crítica son rojas. Un ciclo de vínculos o un predecesor que no existe se listan en el panel.
- {{ui:Guardar como XML de MS Project}} y {{ui:Guardar CSV con vínculos}} vuelven a escribir el programa con sus vínculos.

## Siguiente

- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Colorear elementos según una propiedad](topic:color-by-property)
