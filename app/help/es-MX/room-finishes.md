---
title: Acabados de locales y cuadros de acabados
summary: Indique con qué se recubren el piso, los muros y el techo de cada local, agregue zonas como un salpicadero de azulejo, y obtenga cuadros de acabados por local, muro y zona, con áreas, conteos de azulejos incluidos los cortes y volúmenes de sustrato.
keywords: acabado, acabados, cuadro de acabados, acabado de local, acabado de piso, acabado de muro, acabado de techo, zoclo, azulejo, azulejos, azulejos cortados, conteo de azulejos, desperdicio, sustrato, firme, tablero de respaldo, yeso, zona, salpicadero, friso, área húmeda, interior, cuantificaciones
from: 8c30498c
---

## Qué hará

Indique a BimCraft una sola vez con qué acabado queda cada local. Los cuadros de acabados entonces dan las áreas, los azulejos a pedir y los volúmenes de sustrato, y cambian con el modelo.

## Pasos

1. Active {{ui:Dibujo}}, abra **Cuadros** en el panel izquierdo y haga clic en **Acabados de locales**.
2. En **Tipos de acabado**, haga clic en **Agregar un tipo de acabado**. Dé un nombre, un tipo (Azulejo, Lámina, Capa o Tablero) y un espesor. Para un azulejo, indique la longitud y el ancho del azulejo, la junta y un porcentaje de desperdicio. Si algo va bajo el acabado (un firme, un tablero de respaldo, una capa de yeso), dé su nombre en **Sustrato** y su espesor.
3. En **Locales**, elija el acabado de piso, muro y techo de cada local. Escriba un nombre de zoclo y su altura si el local lo tiene.
4. En **Zonas**, haga clic en **Agregar una zona** para una parte de un local que lleva otro acabado:
   - una zona de **muro** es una franja entre dos alturas sobre el piso (un salpicadero de azulejo de 0 a 1200, un friso). Está en todos los muros del local, o designe muros de ese local en el modelo y haga clic en el botón **Activado** para limitarla a ellos;
   - una zona de **piso** o **techo** es un área que usted escribe. Se descuenta del propio acabado del local.
5. Haga clic en **Guardar**. Es un solo paso de Deshacer. Las longitudes se escriben en las unidades del proyecto.

## Los cuadros

Cuatro entradas se agregan a la lista de Cuadros:

- **Acabados por local**: cada local con su acabado de piso, muro y techo, sus áreas, y el zoclo con su longitud.
- **Acabados por muro**: cada tramo de muro del lado de un local y la franja que cubre un acabado, con su longitud, área bruta, deducciones, área neta y, en azulejos, azulejos completos, azulejos cortados y azulejos a pedir.
- **Acabados por zona**: cada zona con su acabado, área neta, azulejos y volumen de sustrato.
- **Cuantificación de acabados**: una fila por acabado: área neta, azulejos completos y cortados, azulejos a pedir, el sustrato y su volumen, y el volumen propio del acabado.

Agrupe, totalice, guarde y exporte como cualquier cuadro: vea [Organizar, guardar y exportar un cuadro](topic:schedule-layouts). Haga clic en una cifra para seleccionar aquello de donde proviene: las deducciones de un muro seleccionan sus puertas y ventanas.

## Cómo se miden los acabados

- **Muros**: cada tramo de muro del lado del local, su longitud a lo largo del local por la altura que cubre el acabado, menos la parte de cada puerta y ventana dentro de esa altura. Un muro más bajo que el local se acaba hasta su propio borde superior. El método de medición del proyecto decide qué vanos son demasiado pequeños para deducirse ([Cuadros](topic:plan-schedules-and-pdf)).
- **Pisos y techos**: el local dentro de las caras interiores de sus muros, menos las islas que contenga.
- **Zoclos**: la longitud de muros del local menos el ancho de sus puertas.
- **Azulejos**: colocados como una cuadrícula desde una esquina de la superficie, con una junta entre azulejos. Un azulejo completamente sobre la superficie es un azulejo completo; uno parcialmente (en un borde, alrededor de un vano) es un azulejo cortado. Los azulejos a pedir son los completos más los cortados, más el desperdicio, redondeados hacia arriba. Cada azulejo cortado se cuenta como uno nuevo: los recortes no se reutilizan.
- **Volumen de sustrato**: el área neta por el espesor del sustrato.
- Un conteo marcado **≈** se calcula a partir del área en lugar de trazarse azulejo por azulejo: una superficie con una zona escrita descontada, o una muy grande.

## Para tener en cuenta

- Los acabados se guardan en el archivo del edificio (conjunto de propiedades `CadCraft_Finishes` en el proyecto). Cada local que tiene un acabado también recibe el conjunto de propiedades IFC estándar `Pset_SpaceCoveringRequirements`, para que otros programas lean los nombres.
- La distribución de azulejos empieza en una esquina. No se calculan una distribución centrada en el local, un patrón (espina de pescado, aparejo de ladrillo) ni la reutilización de recortes.
- Un muro curvo, y un límite de local que no es un muro (un separador de local), aparece como **Otro límite** con su longitud y sin vanos.
- La entrada **Acabados** que existía antes lista las capas de acabado de los tipos de muro; **Capas: área y volumen** enumera cada capa de cada tipo con capas. Los acabados de local de aquí son lo que se aplica al local encima de esas capas.
- Un asistente puede definir acabados por usted con `finishes_set`: vea [Permita que un asistente de IA trabaje con su modelo](topic:assistants).
