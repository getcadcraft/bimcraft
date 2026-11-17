---
title: Sumar cantidades, listar elementos y generar el cuadro de espacios
summary: Cuente elementos y sume sus longitudes, áreas, volúmenes o cualquier propiedad numérica, agrupados por cualquier propiedad; liste una fila por elemento; o genere el cuadro de espacios con sus áreas y volúmenes. Cada uno se descarga como CSV.
keywords: cantidad, cantidades, cuantificación, totales, suma, cuadro, lista de cantidades, qto, csv, agrupar por, contar, longitud, área, volumen, espacios, habitaciones, cuadro de habitaciones, cuadro de áreas, lista de elementos
from: e2e7210c
---

## Qué hará

Obtenga totales de un modelo: longitudes de muros por nivel, conteos de puertas por tipo, volumen de losa por material, el costo de cada zona.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Totales de cantidades}} en el panel izquierdo.
3. En {{ui:Contar}}, elija {{ui:Todos los elementos}} o solo los elegidos.
4. Bajo {{ui:Agrupar por}}, elija una propiedad, como {{ui:Clase}}. Haga clic en {{ui:Agregar un grupo}} para dividir más, hasta tres, por ejemplo por {{ui:Nivel}}.
5. Bajo {{ui:Sumar}}, marque los números que quiere totalizar. Los conjuntos de cantidades del modelo vienen marcados al inicio.
6. Haga clic en {{ui:Descargar CSV}} para abrir la tabla en una hoja de cálculo.

## Qué debe ver

- Una fila por grupo, con cuántos elementos tiene y cada total, y una fila de total.
- Los elementos sin valor se cuentan pero no suman nada. Cuando eso pasa, el CSV agrega una columna "omitidos" junto al total para que vea cuántos son.
- Los números están en las unidades del archivo, tal como el archivo los guarda; a menudo milímetros en las longitudes.

## Una fila por elemento, o los espacios

Cambie {{ui:Mostrar}}:

- **Una fila por elemento**: cada elemento en su propia fila, con las propiedades bajo {{ui:Columnas}} y los números bajo {{ui:Sumar}}. El CSV empieza con el GlobalId de cada elemento. Haga clic en el primer valor de una fila para elegir ese elemento.
- **Espacios**: cada habitación con su número, nombre, nivel, área y volumen, y sus totales. Las áreas y los volúmenes vienen de las cantidades del espacio tal como las indica el archivo. Cuando el archivo no tiene ninguna, se miden a partir de la forma del espacio en m² y m³ y se muestran en cursiva; el CSV indica cuál es cuál.

## Siguiente

- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Colorear elementos por una propiedad](topic:color-by-property)

## Infraestructura (IFC 4.3)

Elija **Infraestructura (IFC 4.3)** en la lista de vistas para ver carreteras, vías férreas, puentes y obras marinas totalizadas por clase y tipo, con la longitud, el área y el volumen que indica el propio archivo. Una cantidad que el archivo no indica se deja en blanco, nunca se calcula. **Enviar cantidades de infraestructura a TakeoffCraft** guarda un archivo `.quantities.json` que TakeoffCraft abre como cantidades con tipo.
