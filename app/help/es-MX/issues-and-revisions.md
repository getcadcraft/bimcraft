---
title: Incidencias, revisiones y registro de cambios del dibujo
summary: Registre cada juego de hojas que entregue, vea qué cambió desde entonces en cada hoja y elemento, y mantenga las instrucciones de obra, los planos de taller y los modelos vinculados asociados a la incidencia a la que pertenecen.
keywords: incidencia, juego emitido, juego entregado, entrega, revisión, revisiones, qué cambió, desde la incidencia, registro de cambios, registro de cambios del dibujo, registro de planos, carta de envío, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, instantánea, comparar
from: 4c732832
---

## Qué hará

Registre una incidencia: qué hojas salieron, en qué fecha, con qué propósito, cada una en su revisión. Más adelante, pregunte qué cambió desde esa incidencia. Asocie a la incidencia las instrucciones de obra y los planos de taller devueltos.

## Pasos

1. En el panel izquierdo, abra **Incidencias y revisiones**.
2. Elija **Registrar una incidencia**. La revisión se sugiere (A, luego B; una numerada, como P1, avanza). Indique para qué se emite, a quién va, la fecha y las hojas. Cuando está definida la etapa del proyecto, el propósito la sigue. Cuando el paquete de permiso tiene una lista de documentos de respaldo, las hojas vinculadas a esa lista se marcan automáticamente.
3. Deje marcada **Guardar también una copia del modelo como emitido** para conservar el modelo exactamente como salió. La copia se descarga; su nombre, tamaño y SHA-256 se guardan con la incidencia.
4. Elija **Registrar esta incidencia**. Una hoja que cambió desde su última emisión toma la nueva revisión. Una hoja que no cambió conserva la revisión que tiene. El cajetín de cada hoja muestra su revisión.
5. Para ver qué cambió, elija **Cambios desde** junto a una incidencia. Cada hoja indica Sin cambios o Cambiada, con los elementos agregados, modificados y eliminados en ella. Haga clic en un número para seleccionar esos elementos.
6. Elija **Agregar un registro** para una instrucción de obra, un plano de taller, un juego de marcas, un modelo vinculado o una nota. Indique la incidencia a la que corresponde. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo permanece donde está.
7. **Registro de cambios del dibujo** muestra una fila por cada hoja y una columna por cada incidencia. **Descargar el registro de cambios (CSV)** lo guarda con las incidencias y los registros.
8. **Guardar el historial de incidencias** escribe un archivo `.issues.json`. MarkupCraft, TakeoffCraft y DetailCraft lo leen con **Leer un historial de incidencias**.

## Conviene saber

- El historial se guarda dentro del archivo IFC (conjunto de propiedades `CadCraft_Issues` en el proyecto). Otros programas lo ignoran.
- Una hoja se considera cambiada cuando cambió su propia configuración, o cuando cambió un elemento que muestra: una planta muestra su nivel; un alzado o una sección, todo el modelo; una cédula de puertas o ventanas, sus puertas o ventanas.
- Un elemento se considera cambiado cuando cambió una propiedad, su posición, su tamaño o su forma.
- Para ver exactamente qué propiedad cambió, abra la copia guardada del modelo emitido con **Comparar versiones**.
- Quitar una incidencia conserva sus registros, pero sin incidencia. Cada paso equivale a un Deshacer.
- Un modelo con más de 60,000 elementos no guarda un registro de cada elemento con la incidencia. Las hojas se siguen comparando.

## Aún no disponible

- Las hojas no se guardan como PDF con la incidencia.
- No se dibuja una nube de revisión en las hojas propias de BimCraft. Registre las nubes en MarkupCraft, asociadas a la incidencia.
