---
title: Redactar el pliego de condiciones a partir del modelo
summary: Una sección del pliego para cada tipo de muro, puerta, ventana, forjado y acabado en uso, con sus datos leídos del modelo y su propio texto, convertido en un PDF o en un documento Word.
keywords: pliego, especificación, pliego de condiciones, planos de obra, fase 5, documentación de obra, sección, tipo de muro, tipo de puerta, tipo de ventana, acabado, clasificación, uniclass, omniclass, masterformat, documento, pdf, word, docx, tablas
from: a6acc6d4
---

## Qué hará

Obtenga un pliego que sigue al modelo: una sección para cada tipo que realmente está en el edificio, cada una con su composición y sus cantidades leídas del modelo, y el texto que escriba para ella.

## Pasos

1. Active {{ui:Dibujo}}, abra **Tablas** en el panel izquierdo y haga clic en **Especificación**.
2. El cuadro enumera una sección por cada tipo de muro, tipo de puerta, tipo de ventana, forjado y acabado de habitación en uso. Bajo cada encabezado están sus **datos**, leídos del modelo: espesor, las capas una a una, el nivel de desarrollo, dimensiones, cuántos y cuánto. Una sección cuyos elementos llevan un código de clasificación muestra el código en su encabezado.
3. Escriba el texto de su pliego en el cuadro bajo una sección. **Seleccionar sus elementos** muestra a qué se refiere la sección.
4. Haga clic en **Guardar**. Es un paso de Deshacer, y el texto se conserva en el archivo del edificio.
5. Abra **Documentos a partir del modelo**, elija la plantilla **Especificación**, haga clic en **Vista previa** y guárdela como PDF, Word o Markdown. Consulte [Documentos a partir del modelo](topic:documents-from-the-model).

## Las tablas de planos de obra como documento

La plantilla **Tablas de planos de obra** imprime las tablas de puertas, ventanas y acabados directamente desde el modelo, con el formato de su oficina. En su propia plantilla escriba `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, o el nombre de una configuración guardada, por ejemplo `{{schedule Tabla de puertas por planta}}`. `{{specification}}` imprime el pliego.

## Bueno saber

- Los datos son del modelo. Cambian cuando cambia el modelo; su texto no.
- BimCraft no escribe ninguna cláusula de ninguna norma ni texto de fabricante. Una sección sin texto imprime "Todavía no se ha escrito texto de especificación."
- El texto escrito para un tipo que ya no está en el modelo se conserva y aparece bajo "Texto de tipos que ya no están en el modelo".
- Para cambiar un tipo genérico por una composición concreta, consulte [Herramientas de muros](topic:wall-tools) (Cambiar tipo).
