---
title: Escribir la especificación desde el modelo
summary: Una sección de especificación por cada tipo de muro, puerta, ventana, piso y acabado en uso, con sus datos leídos del modelo y tu propio texto, hecha en PDF o documento de Word.
keywords: especificación, spec, planos de obra, etapa 5, documentos de construcción, sección, tipo de muro, tipo de puerta, tipo de ventana, acabado, clasificación, uniclass, omniclass, masterformat, documento, pdf, word, docx, planillas
from: a6acc6d4
---

## Lo que vas a hacer

Obtener una especificación que sigue al modelo: una sección por cada tipo que realmente está en el edificio, cada una con su composición y sus cantidades leídas del modelo, y el texto que escribas para ella.

## Pasos

1. Activá {{ui:Draw}}, abrí **Planillas** en el panel izquierdo y hacé clic en **Especificación**.
2. El diálogo lista una sección para cada tipo de muro, tipo de puerta, tipo de ventana, piso y acabado de ambiente en uso. Debajo de cada título están sus **datos**, leídos del modelo: espesor, las capas una por una, el nivel de desarrollo, medidas, cuántos y cuánto. Una sección cuyos elementos llevan un código de clasificación muestra el código en su título.
3. Escribí tu texto de especificación en la casilla debajo de una sección. **Seleccionar sus elementos** muestra de qué trata la sección.
4. Hacé clic en **Guardar**. Es un paso en Deshacer, y el texto queda guardado en el archivo del edificio.
5. Abrí **Documentos desde el modelo**, elegí la plantilla **Especificación** y hacé clic en **Vista previa**, después guardala como PDF, Word o Markdown. Ver [Documentos desde el modelo](topic:documents-from-the-model).

## Las planillas de documentos de obra como documento

La plantilla **Planillas de documentos de obra** imprime las planillas de puertas, ventanas y acabados directamente desde el modelo, con el diseño de tu oficina. En tu propia plantilla escribí `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, o el nombre de una configuración guardada, por ejemplo `{{schedule Door schedule by floor}}`. `{{specification}}` imprime la especificación.

## Para tener en cuenta

- Los datos son del modelo. Cambian cuando cambia el modelo; tu texto no.
- BimCraft no escribe ninguna cláusula de ninguna norma ni texto de ningún fabricante. Una sección sin texto imprime "No specification text written yet."
- El texto escrito para un tipo que ya no está en el modelo se conserva y aparece listado bajo "Text for types no longer in the model".
- Para cambiar un tipo genérico por una composición específica, ver [Herramientas de muros](topic:wall-tools) (Swap type).
