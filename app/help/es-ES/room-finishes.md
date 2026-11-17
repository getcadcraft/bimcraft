---
title: Acabados de habitaciones y tablas de acabados
summary: Indique qué cubre el suelo, los muros y el techo de cada habitación, añada zonas como un revestimiento de azulejos, y obtenga tablas de acabados por habitación, muro y zona, con superficies, recuentos de azulejos incluidos los cortes y volúmenes de soporte.
keywords: acabado, acabados, tabla de acabados, acabados de habitación, acabado de suelo, acabado de muro, acabado de techo, zócalo, rodapié, azulejo, azulejos, azulejos cortados, recuento de azulejos, desperdicio, soporte, solera, tablero de soporte, yeso, zona, revestimiento, alicatado, zona húmeda, interior, cantidades
from: 8c30498c
---

## Qué hará

Indique a BimCraft una sola vez con qué acabado está cada habitación. Las tablas de acabados dan entonces las superficies, los azulejos a pedir y los volúmenes de soporte, y cambian con el modelo.

## Pasos

1. Active {{ui:Dibujo}}, abra **Tablas** en el panel izquierdo y haga clic en **Acabados de habitaciones**.
2. En **Tipos de acabado**, haga clic en **Agregar un tipo de acabado**. Dele un nombre, una clase (Azulejo, Lámina, Capa o Tablero) y un espesor. Para un azulejo, indique la longitud y la anchura del azulejo, la junta y un porcentaje de desperdicio. Si hay algo bajo el acabado (una solera, un tablero de soporte, una capa de yeso), dele un nombre en **Soporte** e indique su espesor.
3. En **Habitaciones**, elija el acabado de suelo, de muro y de techo de cada habitación. Escriba un nombre de rodapié y su altura si la habitación lo tiene.
4. En **Zonas**, haga clic en **Agregar una zona** para una parte de una habitación que lleve otro acabado:
   - una zona de **muro** es una franja entre dos alturas sobre el suelo (un revestimiento de salpicaduras de 0 a 1200, un alicatado). Está en todos los muros de la habitación, o elija muros de esa habitación en el modelo y haga clic en el botón **Activado** para limitarla a ellos;
   - una zona de **suelo** o de **techo** es una superficie que escribe. Se descuenta del propio acabado de la habitación.
5. Haga clic en **Guardar**. Es un paso de Deshacer. Las longitudes se escriben en las unidades del proyecto.

## Las tablas

Cuatro entradas se añaden a la lista de Tablas:

- **Acabados por habitación**: cada habitación con su acabado de suelo, de muro y de techo, sus superficies, y el rodapié con su longitud.
- **Acabados por muro**: cada tramo de muro del lado de una habitación y la franja que cubre un acabado, con su longitud, superficie bruta, deducciones, superficie neta y, para azulejos, azulejos enteros, azulejos cortados y azulejos a pedir.
- **Acabados por zona**: cada zona con su acabado, superficie neta, azulejos y volumen de soporte.
- **Cantidades de acabados**: una fila por acabado: superficie neta, azulejos enteros y cortados, azulejos a pedir, el soporte y su volumen, y el volumen propio del acabado.

Agrúpelas, añada totales, guárdelas y expórtelas como cualquier tabla: véase [Diseñar, guardar y exportar una tabla](topic:schedule-layouts). Haga clic en una cifra para seleccionar su origen: las deducciones de un muro seleccionan sus puertas y ventanas.

## Cómo se miden los acabados

- **Muros**: cada tramo de muro del lado de la habitación, su longitud a lo largo de la habitación por la altura que cubre el acabado, menos la parte de cada puerta y ventana dentro de esa altura. Un muro más bajo que la habitación se acaba hasta su propia altura. El método de medición del proyecto decide qué huecos son demasiado pequeños para deducirse ([Tablas](topic:plan-schedules-and-pdf)).
- **Suelos y techos**: la habitación dentro de las caras interiores de sus muros, menos las islas que tenga.
- **Rodapiés**: la longitud de muro de la habitación menos el ancho de sus puertas.
- **Azulejos**: colocados en una cuadrícula desde una esquina de la superficie, con una junta entre azulejos. Un azulejo totalmente sobre la superficie es un azulejo entero; uno parcialmente (en un borde, alrededor de un hueco) es un azulejo cortado. Los azulejos a pedir son los enteros más los cortados, más el porcentaje de desperdicio, redondeado hacia arriba. Cada azulejo cortado se cuenta como uno nuevo: los recortes no se reutilizan.
- **Volumen de soporte**: la superficie neta por el espesor del soporte.
- Un recuento marcado con **≈** se calcula a partir de la superficie en lugar de colocarse azulejo a azulejo: una superficie con una zona escrita que se le resta, o una muy grande.

## Conviene saber

- Los acabados se guardan en el archivo del edificio (conjunto de propiedades `CadCraft_Finishes` del proyecto). Cada habitación que tiene acabado recibe además el conjunto de propiedades estándar de IFC `Pset_SpaceCoveringRequirements`, para que otros programas lean los nombres.
- La colocación de azulejos empieza en una esquina. No se calculan una colocación centrada en la habitación, un patrón (espiga, aparejo a soga) ni la reutilización de recortes.
- Un muro curvo, y un límite de habitación que no es un muro (un separador de habitación), aparece como **Otro límite** con su longitud y sin huecos.
- La entrada **Acabados** que existía antes enumera las capas de acabado de los tipos de muro; **Capas: superficie y volumen** enumera cada capa de cada tipo con capas. Los acabados de habitación de aquí son los que se aplican a la habitación sobre esas capas.
- Un asistente puede definir los acabados por usted con `finishes_set`: véase [Permita que un asistente de IA trabaje con su modelo](topic:assistants).
