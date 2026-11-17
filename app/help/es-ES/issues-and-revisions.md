---
title: Emisiones, revisiones y registro de cambios del dibujo
summary: Registre cada juego de planos que entregue, vea qué ha cambiado desde entonces en cada hoja y cada elemento, y guarde las instrucciones de obra, los planos de taller y los modelos vinculados junto a la emisión a la que pertenecen.
keywords: emisión, juego emitido, juego presentado, presentación, revisión, revisiones, qué ha cambiado, desde la emisión, registro de cambios, registro de cambios del dibujo, registro de planos, transmittal, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, instantánea, comparar
from: 4c732832
---

## Qué va a hacer

Registre una emisión: qué hojas salieron, en qué fecha, con qué finalidad, cada una con su revisión. Después, pregunte qué ha cambiado desde esa emisión. Guarde las instrucciones de obra y los planos de taller devueltos junto a la emisión.

## Pasos

1. En el panel izquierdo, abra **Emisiones y revisiones**.
2. Elija **Registrar una emisión**. La revisión se propone (A, después B; una revisión numerada como P1 avanza). Elija para qué se emite, a quién va, la fecha y las hojas. Cuando esté definida la fase del proyecto, la finalidad la sigue. Cuando el paquete de permiso tenga una lista de documentos de apoyo, las hojas vinculadas a esa lista se marcan automáticamente.
3. Deje marcada la opción **Guardar también una copia del modelo tal como se emitió** para conservar el modelo exactamente como salió. La copia se descarga; su nombre, tamaño y SHA-256 se guardan con la emisión.
4. Pulse **Registrar esta emisión**. Una hoja que cambió desde su última emisión toma la nueva revisión. Una hoja que no cambió conserva la revisión que tiene. El cajetín de cada hoja muestra su revisión.
5. Para ver qué ha cambiado, pulse **Cambios desde** junto a una emisión. Cada hoja aparece como Igual o Cambiada, con los elementos añadidos, modificados y eliminados en ella. Pulse un número para seleccionar esos elementos.
6. Pulse **Añadir un registro** para una instrucción de obra, un plano de taller, un juego de anotaciones, un modelo vinculado o una nota. Elija la emisión a la que corresponde. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo permanece donde está.
7. **Registro de cambios del dibujo** muestra una fila por cada hoja y una columna por cada emisión. **Descargar el registro de cambios (CSV)** lo guarda con las emisiones y los registros.
8. **Guardar el historial de emisiones** escribe un archivo `.issues.json`. MarkupCraft, TakeoffCraft y DetailCraft lo leen con **Leer un historial de emisiones**.

## Conviene saber

- El historial se guarda dentro del archivo IFC (conjunto de propiedades `CadCraft_Issues` en el proyecto). Otros programas lo ignoran.
- Una hoja cuenta como cambiada cuando cambia su propia configuración, o cuando cambia un elemento que muestra: un plano muestra su planta, un alzado o una sección todo el modelo, y una tabla de puertas o ventanas, sus puertas o ventanas.
- Un elemento cuenta como cambiado cuando cambia una propiedad, su posición, su tamaño o su forma.
- Para ver exactamente qué propiedad cambió, abra la copia guardada del modelo emitido con **Comparar versiones**.
- Eliminar una emisión conserva sus registros, sin emisión. Cada paso es un Deshacer.
- Un modelo con más de 60.000 elementos no guarda un registro de cada elemento junto a la emisión. Las hojas se siguen comparando.

## Aún no está hecho

- Las hojas no se guardan como PDF junto con la emisión.
- Una nube de revisión no se dibuja en las hojas propias de BimCraft. Registre las nubes en MarkupCraft, asociadas a la emisión.
