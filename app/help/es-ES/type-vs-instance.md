---
title: Cambiar una propiedad de tipo para todos los elementos de un tipo
summary: Distinga las propiedades de tipo de las propiedades de ocurrencia, cambie un valor en el tipo para que cada elemento lo siga y compruebe que la edición propia de un elemento siga siendo suya.
keywords: tipo, ocurrencia, propiedades de tipo, tipo de familia, compartido, copia al escribir, todos los elementos, edición masiva, fabricante, modelo
from: bffd8789
---

## Qué va a hacer

Asigne el fabricante a un tipo de puerta para que cada puerta de ese tipo lo muestre, y después dé a una sola puerta su propia resistencia al fuego sin tocar las demás. Así se ve la diferencia entre propiedades de tipo y propiedades de ocurrencia en BimCraft.

## ¿Tipo u ocurrencia?

- Una propiedad de **ocurrencia** pertenece a un solo elemento: su etiqueta, su marca, su local, su propia resistencia al fuego.
- Una propiedad de **tipo** pertenece al tipo que comparten muchos elementos: fabricante, modelo, anchura de un tipo de puerta.

En el panel {{ui:Propiedades}}, los conjuntos que proceden del tipo llevan " (tipo)" después de su nombre y la línea "Propiedad de tipo: un cambio aquí se aplica a todos los elementos de este tipo." Cualquier otro conjunto pertenece al propio elemento. **Tipo** en el primer bloque muestra el nombre del tipo.

## Pasos: cambiar el tipo

1. Abra un modelo IFC y haga clic en una puerta.
2. Anote su **Tipo** en el primer bloque del panel {{ui:Propiedades}}, por ejemplo "Single-Flush 900 x 2100".
3. Desplácese hasta un conjunto cuyo nombre termine en "(tipo)".
4. Haga clic en el valor que quiere cambiar, por ejemplo **Fabricante**.
5. Escriba el nuevo valor y pulse {{key:Enter}}.
6. Mire la lista {{ui:Cambios}}: la entrada termina en "(tipo)".
7. Haga clic en otra puerta del mismo tipo.
8. Compruebe el mismo valor: también muestra el nuevo valor.

## Pasos: cambiar solo un elemento

1. Haga clic en una puerta.
2. Abra un conjunto sin "(tipo)" en su nombre, por ejemplo `Pset_DoorCommon`.
3. Haga clic en un valor, como **FireRating**, escriba un nuevo valor y pulse {{key:Enter}}.
4. Haga clic en la puerta contigua, del mismo tipo.
5. Compruebe el mismo valor: sigue mostrando el valor antiguo.

Aunque el exportador haya compartido ese conjunto de propiedades entre ambas puertas, BimCraft dio a la primera puerta su propia copia antes de cambiarlo. Véase [Por qué su edición cambia solo un elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Guardar

1. Haga clic en {{ui:Guardar como IFC}} o pulse {{key:Mod+S}}.
2. Abra la copia guardada en BimCraft, o en cualquier visor de IFC, para comprobar ambos cambios.

## Errores frecuentes

- **No todos los modelos tienen tipos.** Algunos exportadores no escriben objetos de tipo, o ponen todo en la ocurrencia. Entonces no hay conjuntos "(tipo)", y cada elemento debe cambiarse por separado.
- **El mismo valor aparece en un conjunto de tipo y en uno de ocurrencia.** Algunos exportadores escriben un parámetro en ambos sitios. Otros programas pueden leer cualquiera de los dos; cambie ambos si necesita que coincidan.
- **Esperar poder seleccionar "todas las puertas de este tipo" para editarlas juntas.** En esta versión no hay selección múltiple. Una propiedad de tipo es la forma de cambiar muchos elementos a la vez.
