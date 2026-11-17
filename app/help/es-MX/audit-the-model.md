---
title: Auditar el modelo: habitaciones, etiquetas, LOD, interferencias e interfaces
summary: Ejecute verificaciones listas para habitaciones sin nombre, etiquetas faltantes, elementos por debajo del nivel de desarrollo que pide la etapa del proyecto, interferencias entre disciplinas e interfaces LOD 350. Solo son recomendaciones: no se bloquea nada.
keywords: auditoría, verificación, habitación sin nombre, etiqueta faltante, marca, lod, nivel de desarrollo, hito, etapa, interferencia, disciplina, coordinación, interfaz, lod 350, abertura, dintel, cabezal, penetración, manguito, tubería, ducto, problemas, informe de revisión, asesoría
from: cc83a14d
---

## Lo que hará

Revise todo el modelo de una vez antes de emitirlo. La auditoría ejecuta conjuntos de reglas listos y pone lo que encuentra en la lista de {{ui:Problemas}} como recomendación. Nada se bloquea: usted corrige un hallazgo, o lo acepta con un motivo, como cualquier otro problema.

## Pasos

1. Abra {{ui:Comprobaciones del modelo}} › {{ui:Auditoría}} en el panel izquierdo, o {{ui:Herramientas}} › {{ui:Auditar el modelo…}} (escrito: `AUDIT`).
2. Elija la {{ui:Etapa del proyecto}}. Es la misma etapa que en los detalles del dibujo.
3. Marque los conjuntos de reglas que quiere ejecutar.
4. Haga clic en {{ui:Ejecutar la auditoría}}.
5. Lea la línea de cada conjunto de reglas y luego abra {{ui:Abrir la lista de Problemas}}. Un clic en un hallazgo selecciona su elemento.
6. {{ui:El informe de revisión}} descarga el informe: cada hallazgo, quién aceptó qué y por qué, y los conjuntos de reglas que se ejecutaron.

## Los conjuntos de reglas

- **Habitaciones sin nombre**: una habitación sin nombre, o que todavía tiene el nombre que le dio el programa ("Habitación 3").
- **Etiquetas faltantes**: una puerta o ventana sin marca, una habitación sin número, un dispositivo eléctrico sin etiqueta.
- **Elementos por debajo del LOD de la etapa**: cada muro, piso, techo, cubierta, puerta y ventana cuyo LOD está por debajo de lo que pide la etapa. Un elemento lee la etiqueta de LOD de su tipo; un elemento verificado en obra es LOD 500. Los elementos sin etiqueta se cuentan en una sola nota, porque no se pueden revisar.
- **Interferencias entre disciplinas**: elementos de dos disciplinas (arquitectura, estructura, mecánica, plomería, eléctrica, según la clase IFC) que se cruzan entre sí. Una cubierta apoyada en sus muros no cuenta.
- **Interfaces LOD 350**: cada puerta y ventana está en una abertura de su muro, la abertura cabe dentro del muro, dos aberturas no se superponen, una abertura más ancha que el límite tiene un dintel o cabezal (un elemento sobre ella, o una nota en la puerta o ventana), y una tubería, un ducto o una charola de cables que atraviesa un muro o una losa tiene una abertura allí. Los hallazgos se cuentan por pareja de disciplinas.
- **Elementos reconocidos que nadie ha revisado**: muros, puertas, ventanas y habitaciones leídos de un PDF, un escaneo o un dibujo que todavía no están verificados. Vea [Marque elementos como revisados o verificados en obra](topic:verification).

## El LOD que pide cada etapa

Abra {{ui:El LOD que pide cada etapa}} para ver o cambiar la tabla.

:::note
La tabla y el ancho del dintel son los valores iniciales de CadCraft. No se toman de un estándar: un proyecto define el LOD por etapa en su plan de ejecución BIM. Ajústelos a los suyos. Una oficina puede definir la tabla para todos en Configuración › Default Policies › Auditoría; un cambio en la sección Auditoría se guarda en esta computadora.
:::

## Bueno saber

- Un dintel puede anotarse en lugar de modelarse: seleccione la puerta o ventana y llene {{ui:Nota de dintel o cabezal}} bajo {{ui:Verificación}} en Propiedades.
- Una tubería que pasa por una abertura real no cruza ninguna superficie y no se reporta. Una que se modela atravesando el muro sí se reporta.
- La revisión de interferencias se detiene tras unos segundos en un modelo muy grande, y lo indica. Para una revisión completa de dos conjuntos elegidos, use [Buscar interferencias entre elementos](topic:clash-check).
- Ejecute la auditoría de nuevo después de cambiar el modelo. Los hallazgos aceptados siguen aceptados mientras sus números no cambien.
- Analiza el modelo. No reemplaza una revisión de coordinación por parte de los responsables.

## Siguiente

- [Revisar un modelo en busca de problemas comunes](topic:model-checks)
- [Buscar interferencias entre elementos](topic:clash-check)
- [Marque elementos como revisados o verificados en obra](topic:verification)
