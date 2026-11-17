---
title: Auditar el modelo: ambientes, etiquetas, LOD, interferencias e interfaces
summary: Ejecutá controles listos para ambientes sin nombre, etiquetas faltantes, elementos por debajo del nivel de desarrollo que pide la etapa del proyecto, interferencias entre disciplinas e interfaces LOD 350. Solo son avisos: no se bloquea nada.
keywords: auditoría, control, ambiente sin nombre, etiqueta faltante, marca, lod, nivel de desarrollo, hito, etapa, interferencia, disciplina, coordinación, interfaz, lod 350, abertura, dintel, encuentro, pasamuros, caño, conducto, problemas, informe de control, aviso
from: cc83a14d
---

## Mba'e ejapóta

Revisá todo el modelo de una vez antes de emitirlo. La auditoría ejecuta conjuntos de reglas listos y pone lo que encuentra en la lista de {{ui:Problems}} como aviso. Nada se bloquea: corregís un hallazgo, o lo aceptás con un motivo, como cualquier otro problema.

## Pasos

1. Abrí {{ui:Model checks}} › {{ui:Audit}} en el panel izquierdo, o {{ui:Tools}} › {{ui:Audit the model…}} (escrito: `AUDIT`).
2. Elegí la {{ui:Project stage}}. Es la misma etapa que en los detalles del plano.
3. Marcá los conjuntos de reglas que querés ejecutar.
4. Hacé clic en {{ui:Run the audit}}.
5. Leé la línea de cada conjunto de reglas, y después {{ui:Open the Problems list}}. Un clic en un hallazgo elige su elemento.
6. {{ui:The check report}} descarga el informe: cada hallazgo, quién aceptó qué y por qué, y los conjuntos de reglas que se ejecutaron.

## Los conjuntos de reglas

- **Ambientes sin nombre**: un ambiente sin nombre, o que todavía se llama como lo llamó el programa ("Room 3").
- **Etiquetas faltantes**: una puerta o ventana sin marca, un ambiente sin número, un artefacto eléctrico sin etiqueta.
- **Elementos por debajo del LOD de la etapa**: cada muro, piso, cielorraso, techo, puerta y ventana cuyo LOD está por debajo del que pide la etapa. Un elemento lee la etiqueta LOD de su tipo; un elemento verificado en obra es LOD 500. Los elementos sin etiqueta se cuentan en una sola nota, porque no pueden revisarse.
- **Interferencias entre disciplinas**: elementos de dos disciplinas (arquitectura, estructura, mecánica, sanitaria, eléctrica, según la clase IFC) que se cruzan. Un techo apoyado en sus muros no cuenta.
- **Interfaces LOD 350**: cada puerta y ventana está en una abertura de su muro, la abertura entra dentro del muro, dos aberturas no se superponen, una abertura más ancha que el límite tiene dintel o viga (un elemento encima, o una nota en la puerta o ventana), y un caño, conducto o bandeja de cables que cruza un muro o losa tiene una abertura allí. Los hallazgos se cuentan por par de disciplinas.
- **Elementos reconocidos que nadie revisó**: muros, puertas, ventanas y ambientes leídos de un PDF, un escaneo o un dibujo que todavía no están verificados. Ver [Marcar elementos como revisados o verificados en obra](topic:verification).

## El LOD que pide cada etapa

Abrí {{ui:The LOD each stage asks for}} para ver o cambiar la tabla.

:::note
La tabla y el ancho del dintel son los valores iniciales de CadCraft. No salen de ningún estándar: un proyecto fija el LOD por etapa en su plan de ejecución BIM. Ajustalos a los tuyos. Una oficina puede fijar la tabla para todos en Configuración › Default Policies › Audit; un cambio en la sección Audit se guarda en esta computadora.
:::

## Bueno saber

- Un dintel puede anotarse en lugar de modelarse: elegí la puerta o ventana y completá {{ui:Lintel or header note}} en {{ui:Verification}} en Propiedades.
- Un caño que pasa por una abertura real no cruza ninguna superficie y no se informa. Uno modelado directamente a través del muro sí se informa.
- El control de interferencias se detiene después de unos segundos en un modelo muy grande y lo indica. Para un control completo de dos conjuntos elegidos, usá [Buscar interferencias entre elementos](topic:clash-check).
- Volvé a ejecutar la auditoría después de cambiar el modelo. Los hallazgos aceptados siguen aceptados mientras sus números no cambien.
- Lee el modelo. No reemplaza una revisión de coordinación por las personas responsables.

## Sigue

- [Controlar un modelo por problemas comunes](topic:model-checks)
- [Buscar interferencias entre elementos](topic:clash-check)
- [Marcar elementos como revisados o verificados en obra](topic:verification)
