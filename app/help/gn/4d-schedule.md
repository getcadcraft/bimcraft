---
title: Reproducir un cronograma de obra en el modelo
summary: Abrí una lista de tareas como CSV, vinculá cada tarea con elementos por una propiedad, y avanzá por las fechas para ver qué está construido, qué está en curso y qué todavía no empezó.
keywords: 4d, cronograma, secuencia constructiva, línea de tiempo, fases, programa, gantt, tareas, fechas, simulación, avance, construido, csv, etapa, fase, paquete de trabajo, wbs, grupo
from: 1b985a64
---

## Mba'e ejapóta

Ehecha mba'éichapa oñemopu'ã el edificio: cada tarea de tu cronograma ojoaju umi elemento ojapóva, ohechaukáva día a día.

## Pasos

1. Abrí un modelo IFC ha abrí {{ui:4D schedule}} panel izquierdo-pe.
2. Ejapo clic {{ui:Download a template}} para una lista de tareas con una semana por piso, ha ejapo cambio planilla-pe. Térã nde ejapo tuichave.
3. Ejapo clic {{ui:Open a task list…}} ha eiporavo el CSV.
4. Ejapo mová el control de fechas, térã ejapo clic {{ui:Play}}.

## La lista de tareas

Un CSV con fila de encabezado y las columnas **Task**, **Start**, **Finish**, **Field** y **Value**. Sirven tanto coma como punto y coma.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Las fechas escribilas como YYYY-MM-DD.
- Una fila vincula la tarea con todo elemento cuyo **Field** tiene exactamente ese **Value**. El campo es una propiedad como Storey, Class, Name, Type, Material, Tag o GlobalId, o cualquier propiedad escrita con su conjunto y nombre: `Pset_WallCommon.FireRating`.
- Repetí una tarea en más filas, con las mismas fechas, para vincular más elementos con ella.

## Etapas y paquetes de trabajo

Agregá una columna **Stage**, una columna **Package**, o ambas, para agrupar tareas en etapas y paquetes de trabajo. Phase y WBS también sirven como nombres de columna.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Una tarea pertenece a una sola etapa y a un solo paquete. Si una fila posterior de la misma tarea indica otro, esa fila se lista con su número de línea y se deja de lado.
- El mismo nombre de paquete en dos etapas son dos paquetes.

Cuando la lista tiene grupos, aparece una lista {{ui:Show}} encima de la fecha. Elegí una etapa o un paquete y se reproduce como un solo conjunto:

- el control de fechas y {{ui:Play}} van desde el primer inicio hasta el último fin del grupo,
- solo se listan y pintan las tareas del grupo, y todo lo que está fuera del grupo queda transparente,
- la línea debajo de la lista dice cuántas tareas del grupo están terminadas, en curso y por venir en esa fecha,
- {{ui:Select its elements}} selecciona todos los elementos del grupo, para {{ui:Show}}, {{ui:Section}} o una planilla.

Elegí **Every task** para ver de nuevo todo el cronograma.

## Lo que debés ver

- **Construido**: elementos cuyas tareas están todas terminadas, con sus colores propios.
- **En curso**: elementos con una tarea en marcha ese día, en ocre. Una tarea está en marcha desde su fecha de inicio hasta su fecha de fin.
- **No iniciado**: transparente.
- Los elementos que no están en ninguna tarea quedan como están. La lista muestra cuántos elementos encontró cada tarea. Las filas que no se pudieron leer, o que no encontraron nada, se listan con sus números de línea.

## Vínculos, diagrama Gantt y MS Project

- Abrí un archivo Microsoft Project XML (`.xml`) o un CSV que tenga una columna `Predecessors`. Los vínculos pueden ser fin a inicio, inicio a inicio, fin a fin o inicio a fin, cada uno con adelanto o retraso en días.
- Debajo de la lista de tareas, el diagrama Gantt dibuja cada tarea como una barra con flechas para los vínculos. Las tareas de la ruta crítica están en rojo. Un bucle de vínculos o un predecesor que no existe se listan en el panel.
- {{ui:Save as MS Project XML}} y {{ui:Save CSV with links}} guardan el cronograma de nuevo con sus vínculos.

## Sigue

- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Colorear elementos por una propiedad](topic:color-by-property)
