---
title: Comprobar un modelo con el IDS de un cliente
summary: Cargue el archivo .ids que le han entregado y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC.
keywords: ids, especificación de entrega de información, buildingsmart, requisitos, entrega, comprobar, validación, qa, eir, bep, propiedad, clasificación, material, contratación
from: 7b960222
---

## Qué hará

Un IDS (Information Delivery Specification, estándar de buildingSMART) es la lista de lo que debe contener un IFC: qué clases, qué propiedades con qué valores, clasificaciones, materiales y dónde debe estar cada cosa. Los clientes y la contratación pública envían uno con el encargo. BimCraft comprueba el modelo IFC abierto frente a él y lista cada elemento que no lo cumple.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Check against an IDS}} en el panel izquierdo, bajo {{ui:Model checks}}, o elija {{ui:Check against IDS…}} del menú de su estilo de menú.
3. Haga clic en {{ui:Load an .ids file…}} y elija el archivo. No se sube nada.
4. Lea el resultado: cada especificación con {{ui:Pass}} o {{ui:Fail}} y a cuántos elementos se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) y haga clic en un fallo para seleccionar el elemento y acercar la vista.

## Qué debe ver

- Un aviso por cada elemento y requisito que no cumple, con el nombre de la especificación, lo que pide el IDS y lo que tiene el elemento.
- Una especificación obligatoria que nada del modelo cumple es un aviso propio.
- El informe de comprobación (en Problemas) empieza por el IDS: su título, versión, autor y, por cada especificación, los recuentos de aplicables, cumplidos y fallidos.

## Conviene saber

- El IFC guarda solo una referencia al IDS (su nombre, título, versión y un hash), no el IDS en sí: el IDS de un cliente puede ser confidencial y el IFC se envía a otras personas. El IDS permanece en este navegador junto al modelo, así que al volver a abrir aquí el IFC guardado se vuelve a comprobar. Cargar u olvidar el IDS es un paso que puede deshacer.
- Si se abre en otro equipo o en otro navegador, Problemas muestra una nota indicando que no se encontró el IDS: cárguelo de nuevo para volver a comprobarlo.
- Para enviar el IDS junto con el IFC, active {{ui:Keep the IDS inside the IFC}} en Configuración, en la pestaña BimCraft, antes de cargarlo.
- Cada modificación, deshacer y rehacer se vuelve a comprobar un momento después.
- Los valores se comparan al modo IDS: el texto exactamente (cuentan las mayúsculas) y los números en unidades SI con una pequeña tolerancia (longitudes en metros, así que un modelo en milímetros se convierte primero).
- Una especificación escrita para otra versión de IFC (por ejemplo IFC2X3 cuando el modelo es IFC4) se sigue comprobando; el resultado lo indica.
- Si el archivo IDS tiene defectos que marcaría una auditoría de IDS, el cuadro de diálogo los enumera; las especificaciones en las que están fallan.
- Puede aceptar un fallo con un motivo, como cualquier problema. Permanece aceptado mientras los valores del elemento no cambien.

- Los patrones del IDS se leen como el valor completo. Un `^` al principio y un `$` al final también se toman como "el valor completo", como lo entiende la mayoría de los archivos IDS.

## Siguiente

- [Comprobar un modelo por problemas habituales](topic:model-checks)
- [Cambiar un muro o una puerta](topic:change-a-wall-or-door)
