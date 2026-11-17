---
title: Cambiar una propiedad de tipo para cada elemento de un tipo
summary: Distinguir propiedades de tipo y de instancia, cambiar un valor en el tipo para que todos los elementos lo sigan, y verificar que la edición propia de un elemento siga siendo suya.
keywords: tipo, instancia, propiedades de tipo, tipo de familia, compartido, copiar al escribir, todos los elementos, edición masiva, fabricante, modelo
from: bffd8789
---

## Qué va a hacer

Defina el fabricante en un tipo de puerta para que todas las puertas de ese tipo lo muestren, y luego dé a una puerta su propia clasificación de resistencia al fuego sin tocar las otras. Esto muestra la diferencia entre propiedades de tipo y de instancia en BimCraft.

## ¿Tipo o instancia?

- Una propiedad de **instancia** pertenece a un elemento: su etiqueta, su marca, su ambiente, su propia resistencia al fuego.
- Una propiedad de **tipo** pertenece al tipo que comparten muchos elementos: fabricante, modelo, ancho de un tipo de puerta.

En el panel {{ui:Properties}}, los conjuntos que vienen del tipo tienen " (tipo)" después de su nombre y la línea "Propiedad de tipo: un cambio aquí se aplica a cada elemento de este tipo." Cada otro conjunto pertenece al elemento mismo. **Tipo** en el primer bloque muestra el nombre del tipo.

## Pasos: cambiar el tipo

1. Abra un modelo IFC y haga clic en una puerta.
2. Anote su **Tipo** en el primer bloque del panel {{ui:Properties}}, por ejemplo "Single-Flush 900 x 2100".
3. Desplácese hasta un conjunto cuyo nombre termine en "(tipo)".
4. Haga clic en el valor que quiere cambiar, por ejemplo **Manufacturer**.
5. Escriba el nuevo valor y presione {{key:Enter}}.
6. Mire la lista {{ui:Changes}}: la entrada termina en "(tipo)".
7. Haga clic en otra puerta del mismo tipo.
8. Verifique el mismo valor: también muestra el nuevo valor.

## Pasos: cambiar solo un elemento

1. Haga clic en una puerta.
2. Abra un conjunto cuyo nombre no tenga "(tipo)", por ejemplo `Pset_DoorCommon`.
3. Haga clic en un valor, como **FireRating**, escriba un nuevo valor y presione {{key:Enter}}.
4. Haga clic en la puerta de al lado, del mismo tipo.
5. Verifique el mismo valor: sigue mostrando el valor anterior.

Aunque el exportador haya compartido ese conjunto de propiedades entre ambas puertas, BimCraft le dio a la primera puerta su propia copia antes de cambiarla. Ver [Por qué su edición cambia solo un elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Guardar

1. Haga clic en {{ui:Save as IFC}} o presione {{key:Mod+S}}.
2. Abra la copia guardada en BimCraft, o en cualquier visor de IFC, para verificar ambos cambios.

## Errores comunes

- **No todos los modelos tienen tipos.** Algunos exportadores no escriben objetos de tipo, o ponen todo en la instancia. Entonces no hay conjuntos "(tipo)", y cada elemento debe cambiarse por separado.
- **El mismo valor aparece en un conjunto de tipo y en uno de instancia.** Algunos exportadores escriben un parámetro en ambos lugares. Otros programas pueden leer cualquiera de los dos; cambie ambos si necesita que coincidan.
- **Esperar elegir "todas las puertas de este tipo" y editarlas juntas.** En esta versión no hay selección múltiple. Una propiedad de tipo es la forma de cambiar muchos elementos a la vez.
