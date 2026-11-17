---
title: Terminaciones de ambientes y planillas de terminaciones
summary: Indicá qué cubre el piso, los muros y el cielorraso de cada ambiente, agregá zonas como un zócalo de azulejos, y obtené planillas de terminaciones por ambiente, muro y zona, con superficies, cantidades de azulejos incluidos los cortes y volúmenes de sustrato.
keywords: terminación, terminaciones, planilla de terminaciones, terminaciones de ambientes, terminación de piso, terminación de muro, terminación de cielorraso, zócalo, azulejo, azulejos, azulejos cortados, cantidad de azulejos, desperdicio, sustrato, carpeta, placa de respaldo, revoque, zona, zócalo alto, dado, área húmeda, interior, cantidades
from: 8c30498c
---

## Lo que vas a hacer

Indicá una sola vez con qué está terminado cada ambiente. Las planillas de terminaciones dan después las superficies, los azulejos a pedir y los volúmenes de sustrato, y cambian junto con el modelo.

## Pasos

1. Activá {{ui:Dibujar}}, abrí **Planillas** en el panel izquierdo y hacé clic en **Terminaciones de ambientes**.
2. Debajo de **Tipos de terminación**, hacé clic en **Agregar un tipo de terminación**. Dale un nombre, un tipo (Azulejo, Placa, Revestimiento o Tablero) y un espesor. Para un azulejo, indicá el largo y el ancho del azulejo, la junta y un porcentaje de desperdicio. Si hay algo debajo de la terminación (una carpeta, una placa de respaldo, una capa de revoque), nombralo en **Sustrato** y dale su espesor.
3. Debajo de **Ambientes**, elegí la terminación de piso, muro y cielorraso de cada ambiente. Escribí el nombre del zócalo y su altura si el ambiente lo tiene.
4. Debajo de **Zonas**, hacé clic en **Agregar una zona** para una parte del ambiente que lleva otra terminación:
   - una zona de **muro** es una franja entre dos alturas sobre el piso (un zócalo de azulejos de 0 a 1200, un dado). Va en todos los muros del ambiente, o elegí los muros de ese ambiente en el modelo y hacé clic en el botón **Sí** para limitarla a ellos;
   - una zona de **piso** o de **cielorraso** es una superficie que escribís. Se descuenta de la terminación propia del ambiente.
5. Hacé clic en **Guardar**. Es un paso de Deshacer. Las longitudes se escriben en las unidades del proyecto.

## Las planillas

Cuatro entradas se suman a la lista de Planillas:

- **Terminaciones por ambiente**: cada ambiente con su terminación de piso, muro y cielorraso, sus superficies y el zócalo con su longitud.
- **Terminaciones por muro**: cada tramo de muro del lado de un ambiente y la franja que cubre una terminación, con su longitud, superficie bruta, descuentos, superficie neta y, para azulejos, azulejos enteros, azulejos cortados y azulejos a pedir.
- **Terminaciones por zona**: cada zona con su terminación, superficie neta, azulejos y volumen de sustrato.
- **Cantidades de terminaciones**: una fila por terminación: superficie neta, azulejos enteros y cortados, azulejos a pedir, el sustrato y su volumen, y el volumen propio de la terminación.

Agrupá, totalizá, guardá y exportá estas planillas como cualquier otra: ver [Diseñar, guardar y exportar una planilla](topic:schedule-layouts). Hacé clic en una cifra para seleccionar de dónde viene: los descuentos de un muro seleccionan sus puertas y ventanas.

## Cómo se miden las terminaciones

- **Muros**: cada tramo de muro del lado del ambiente, su longitud a lo largo del ambiente por la altura que cubre la terminación, menos la parte de cada puerta y ventana dentro de esa altura. Un muro más bajo que el ambiente se termina hasta su propio borde superior. El método de medición del proyecto decide qué aberturas son demasiado pequeñas para descontar ([Planillas](topic:plan-schedules-and-pdf)).
- **Pisos y cielorrasos**: el ambiente dentro de las caras de sus muros, menos las islas que tenga.
- **Zócalos**: la longitud de muro del ambiente menos el ancho de sus puertas.
- **Azulejos**: colocados en una grilla desde una esquina de la superficie, con una junta entre azulejos. Un azulejo completamente sobre la superficie es un azulejo entero; uno que está parcialmente (en un borde, alrededor de una abertura) es un azulejo cortado. Los azulejos a pedir son los enteros más los cortados, más el desperdicio, redondeado hacia arriba. Cada azulejo cortado se cuenta como un azulejo nuevo: los recortes no se reutilizan.
- **Volumen de sustrato**: la superficie neta por el espesor del sustrato.
- Un conteo marcado **≈** se calcula a partir de la superficie en lugar de disponerlo azulejo por azulejo: una superficie a la que se le descuenta una zona escrita, o una muy grande.

## Bueno saber

- Las terminaciones se guardan en el archivo del edificio (conjunto de propiedades `CadCraft_Finishes` en el proyecto). Cada ambiente que tiene una terminación también recibe el conjunto de propiedades IFC estándar `Pset_SpaceCoveringRequirements`, para que otros programas lean los nombres.
- La disposición de los azulejos empieza en una esquina. No se calculan una disposición centrada en el ambiente, un patrón (espina de pez, aparejo de ladrillo) ni la reutilización de recortes.
- Un muro curvo, y un límite de ambiente que no es un muro (un separador de ambiente), se listan como **Otro límite** con su longitud y sin aberturas.
- La entrada **Terminaciones** que había antes lista las capas de terminación de los tipos de muro; **Capas: superficie y volumen** lista cada capa de cada tipo con capas. Las terminaciones de ambientes de acá son lo que se aplica al ambiente encima de esas.
- Un asistente puede definir terminaciones por vos con `finishes_set`: ver [Dejá que un asistente de IA trabaje con tu modelo](topic:assistants).
