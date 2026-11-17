---
title: Auditar el modelo: espacios, etiquetas, LOD, interferencias e interfaces
summary: Ejecute comprobaciones listas sobre espacios sin nombre, etiquetas que faltan, elementos por debajo del nivel de desarrollo que exige la fase del proyecto, interferencias entre disciplinas e interfaces LOD 350. Solo son avisos: no se bloquea nada.
keywords: auditoría, comprobación, espacio sin nombre, etiqueta que falta, marca, lod, nivel de desarrollo, hito, fase, interferencia, disciplina, coordinación, interfaz, lod 350, hueco, dintel, cargadero, paso, manguito, tubería, conducto, problemas, informe de comprobación, aviso
from: cc83a14d
---

## Qué hará

Revise el modelo completo de una vez antes de emitirlo. La auditoría ejecuta conjuntos de reglas listos y pone lo que encuentra en la lista de {{ui:Problemas}} como aviso. No se bloquea nada: corrija un hallazgo, o acéptelo con un motivo, como cualquier otro problema.

## Pasos

1. Abra {{ui:Comprobaciones del modelo}} › {{ui:Auditoría}} en el panel izquierdo, o {{ui:Herramientas}} › {{ui:Auditar el modelo…}} (escrito: `AUDIT`).
2. Elija la {{ui:Fase del proyecto}}. Es la misma fase que en los detalles del plano.
3. Marque los conjuntos de reglas que quiere ejecutar.
4. Haga clic en {{ui:Ejecutar la auditoría}}.
5. Lea la línea de cada conjunto de reglas y, después, abra {{ui:Abrir la lista de Problemas}}. Un clic en un hallazgo selecciona su elemento.
6. {{ui:El informe de comprobación}} descarga el informe: cada hallazgo, quién aceptó qué y por qué, y los conjuntos de reglas que se ejecutaron.

## Los conjuntos de reglas

- **Espacios sin nombre**: un espacio sin nombre, o que todavía se llama como lo llamó el programa («Espacio 3»).
- **Etiquetas que faltan**: una puerta o ventana sin marca, un espacio sin número, un dispositivo eléctrico sin etiqueta.
- **Elementos por debajo del LOD de la fase**: cada muro, forjado, techo, cubierta, puerta y ventana cuyo LOD esté por debajo del que exige la fase. Un elemento lee la etiqueta LOD de su tipo; un elemento verificado en obra es LOD 500. Los elementos sin etiqueta se cuentan en una sola nota, porque no se pueden comprobar.
- **Interferencias entre disciplinas**: elementos de dos disciplinas (arquitectura, estructura, climatización, fontanería y electricidad, según la clase IFC) que se cruzan. Una cubierta que apoya en sus muros no se cuenta.
- **Interfaces LOD 350**: cada puerta y ventana está en un hueco de su muro, el hueco cabe dentro del muro, dos huecos no se solapan, un hueco más ancho que el límite tiene un dintel o cargadero (un elemento encima, o una nota en la puerta o ventana), y una tubería, conducto o bandeja de cables que atraviesa un muro o un forjado tiene un hueco allí. Los hallazgos se cuentan por pareja de disciplinas.
- **Elementos reconocidos que nadie ha comprobado**: muros, puertas, ventanas y espacios leídos de un PDF, un escaneo o un dibujo que todavía no están verificados. Véase [Marcar elementos como comprobados o verificados en obra](topic:verification).

## El LOD que exige cada fase

Abra {{ui:El LOD que exige cada fase}} para ver o cambiar la tabla.

:::note
La tabla y el ancho del dintel son valores iniciales de CadCraft. No están tomados de ninguna norma: un proyecto define el LOD por fase en su plan de ejecución BIM. Ajústelos a los suyos. Una oficina puede fijar la tabla para todos en Configuración › Default Policies › Audit; un cambio en la sección Audit se guarda en este equipo.
:::

## Conviene saber

- Un dintel puede anotarse en lugar de modelarse: elija la puerta o ventana y rellene {{ui:Nota de dintel o cargadero}} en {{ui:Verificación}}, dentro de Propiedades.
- Una tubería que pasa por un hueco real no atraviesa ninguna superficie y no se informa. Una modelada directamente a través del muro sí se informa.
- La comprobación de interferencias se detiene tras unos segundos en un modelo muy grande, y lo indica. Para una comprobación completa de dos conjuntos elegidos, use [Buscar interferencias entre elementos](topic:clash-check).
- Vuelva a ejecutar la auditoría después de cambiar el modelo. Los hallazgos aceptados siguen aceptados mientras sus números no cambien.
- La auditoría lee el modelo. No sustituye a una revisión de coordinación por parte de los responsables.

## Siguiente

- [Comprobar un modelo en busca de problemas comunes](topic:model-checks)
- [Buscar interferencias entre elementos](topic:clash-check)
- [Marcar elementos como comprobados o verificados en obra](topic:verification)
