---
title: Comprobar un modelo contra el IDS de un cliente
summary: Cargue el archivo .ids que recibió y vea en Problemas cada elemento que no lo cumple, antes de entregar el IFC.
keywords: ids, information delivery specification, buildingsmart, requisitos, entrega, comprobar, validación, control de calidad, eir, bep, propiedad, clasificación, material, compras públicas
from: 7b960222
---

## Qué hará

Un IDS (Information Delivery Specification, una norma de buildingSMART) es la lista de lo que debe contener un IFC: qué clases, qué propiedades con qué valores, clasificaciones, materiales y dónde debe ir cada cosa. Los clientes y las licitaciones públicas envían uno junto con el proyecto. BimCraft comprueba el modelo IFC abierto contra él y enumera cada elemento que no lo cumple.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Comprobar con un IDS}} en el panel izquierdo, en {{ui:Comprobaciones del modelo}}, o elija {{ui:Comprobar con IDS…}} del menú, según el estilo de menú que use.
3. Haga clic en {{ui:Cargar un archivo .ids…}} y elija el archivo. No se sube nada.
4. Lea el resultado: cada especificación con {{ui:Cumple}} o {{ui:Falla}} y cuántos elementos aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) y haga clic en una falla para seleccionar el elemento y acercar la vista a él.

## Qué debe ver

- Una advertencia por cada elemento y requisito que no cumple, con el nombre de la especificación, lo que pide el IDS y lo que tiene el elemento.
- Una especificación obligatoria que ningún elemento del modelo cumple es una advertencia propia.
- El informe de comprobación (en Problemas) empieza con el IDS: su título, versión, autor y, por cada especificación, los conteos de elementos aplicables, cumplidos y fallidos.

## Conviene saber

- El IFC guarda solo una referencia al IDS (su nombre, título, versión y un hash), no el IDS en sí: el IDS de un cliente puede ser confidencial, y el IFC se entrega a otras personas. El IDS permanece en este navegador junto al modelo, así que al volver a abrir aquí el IFC guardado, se vuelve a comprobar. Cargar u olvidar el IDS es un paso que puede deshacer.
- Si se abre en otra computadora o en otro navegador, Problemas muestra una nota de que no se encontró el IDS: cárguelo de nuevo para volver a comprobar.
- Para enviar el IDS junto con el IFC, active {{ui:Guardar el IDS dentro del IFC}} en Configuración, en la pestaña BimCraft, antes de cargarlo.
- Cada edición, deshacer y rehacer se vuelve a comprobar un momento después.
- Los valores se comparan al estilo IDS: el texto exactamente (cuentan las mayúsculas), y los números en unidades SI con una pequeña tolerancia (las longitudes en metros, así que un modelo en milímetros se convierte primero).
- Una especificación escrita para otra versión de IFC (por ejemplo IFC2X3 cuando el modelo es IFC4) igual se comprueba; el resultado lo indica.
- Si el archivo IDS tiene fallas que detectaría una auditoría de IDS, el diálogo las enumera; las especificaciones en las que están fallan.
- Puede aceptar una falla con un motivo, como cualquier problema. Sigue aceptada mientras los valores del elemento no cambien.

- Los patrones del IDS se leen como el valor completo. Un `^` al inicio y un `$` al final también se toman como "el valor completo", como lo interpreta la mayoría de los archivos IDS.

## Siguiente

- [Comprobar un modelo en busca de problemas comunes](topic:model-checks)
- [Cambiar un muro o una puerta](topic:change-a-wall-or-door)
