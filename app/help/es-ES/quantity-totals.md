---
title: Sumar cantidades, listar elementos y planificar espacios
summary: Cuente elementos y sume sus longitudes, áreas, volúmenes o cualquier propiedad numérica, agrupados por cualquier propiedad; liste una fila por elemento; o planifique los espacios con sus áreas y volúmenes. Cada uno se descarga como CSV.
keywords: cantidad, cantidades, mediciones, totales, suma, planificación, presupuesto de cantidades, boq, qto, csv, agrupar por, contar, longitud, área, volumen, espacios, habitaciones, planificación de habitaciones, planificación de áreas, lista de elementos
from: e2e7210c
---

## Qué va a hacer

Obtenga totales de un modelo: longitudes de muros por planta, recuentos de puertas por tipo, volumen de losas por material, el coste de cada zona.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Quantity totals}} en el panel izquierdo.
3. En {{ui:Count}}, elija {{ui:Every element}} o solo los elementos que haya seleccionado.
4. En {{ui:Group by}}, elija una propiedad, como {{ui:Class}}. Pulse {{ui:Add a group}} para dividir más, hasta tres niveles, por ejemplo por {{ui:Storey}}.
5. En {{ui:Add up}}, marque los números que quiera sumar. Las cantidades del modelo vienen marcadas al principio.
6. Pulse {{ui:Download CSV}} para abrir la tabla en una hoja de cálculo.

## Qué debe ver

- Una fila por grupo, con cuántos elementos tiene y cada total, y una fila de total.
- Los elementos sin valor se cuentan, pero no suman nada. Cuando ocurre, el CSV añade una columna "omitidos" junto al total para que vea cuántos son.
- Los números están en las unidades del archivo, tal como las guarda; a menudo milímetros para las longitudes.

## Una fila por elemento, o los espacios

Cambie {{ui:Show}}:

- **Una fila por elemento**: cada elemento en su propia fila, con las propiedades bajo {{ui:Columns}} y los números bajo {{ui:Add up}}. El CSV empieza con el GlobalId de cada elemento. Pulse el primer valor de una fila para seleccionar ese elemento.
- **Espacios**: cada habitación con su número, nombre, planta, área y volumen, y sus totales. Las áreas y los volúmenes proceden de las cantidades del espacio tal como las indica el archivo. Cuando el archivo no tiene ninguna, se miden a partir de la forma del espacio en m² y m³ y se muestran en cursiva; el CSV indica cuál es cuál.

## Siguiente

- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Colorear elementos por una propiedad](topic:color-by-property)

## Infraestructura (IFC 4.3)

Elija **Infraestructura (IFC 4.3)** en la lista de vistas para ver carreteras, vías férreas, puentes y obras marítimas totalizadas por clase y tipo, con la longitud, el área y el volumen que indica el propio archivo. Una cantidad que el archivo no indica se deja en blanco, nunca se calcula. **Enviar cantidades de infraestructura a TakeoffCraft** guarda un archivo `.quantities.json` que TakeoffCraft abre como cantidades con tipo.
