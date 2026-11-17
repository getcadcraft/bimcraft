---
title: "Políticas predeterminadas: defina con qué empieza un edificio nuevo"
summary: "Indique una vez qué tipo de muro, plantas, primera hoja, etiquetas LOD, unidades y herramienta tiene un edificio nuevo, tanto para proyectos métricos como imperiales, y comparta las políticas en la oficina como un archivo pequeño."
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar de oficina, valores de oficina, plantilla, edificio nuevo, primer tipo de muro, muro métrico, fábrica, LOD, nivel de desarrollo, primera hoja, papel, escala, plantas, altura de planta, nombres de planta, herramienta muro, unidades, compartir, exportar, importar, json
from: 42379aa5
---

## Qué va a hacer

Indique a BimCraft con qué debe empezar un edificio nuevo, para que nadie de la oficina tenga que cambiar siempre lo mismo. Es un complemento: está desactivado hasta que lo active, y una política que no establezca deja el valor predeterminado de BimCraft exactamente como está.

:::note
Son valores predeterminados para edificios **nuevos** y cosas **nuevas**. Un proyecto que ya empezó no se modifica.
:::

## Pasos

1. Abra Ajustes, vaya a {{ui:Complementos}} y active {{ui:Políticas predeterminadas}}.
2. En Ajustes, abra la pestaña **BimCraft** y elija {{ui:Políticas predeterminadas}} en la lista de la izquierda.
3. Defina las políticas que quiera. Cada una empieza con **la de BimCraft**, indicada entre paréntesis. Una política con una casilla **Métrico** y otra **Imperial** toma un valor para cada tipo de proyecto; rellene solo las que necesite.
4. No hay botón de guardar: cada cambio se guarda al hacerlo. Un valor que no se puede usar se rechaza con un mensaje y el anterior se mantiene.
5. Haga clic en {{ui:Edificio nuevo}}. El cuadro de diálogo se rellena con sus políticas, y cada valor que una política establece aparece junto a **de sus Políticas predeterminadas**. Aún puede cambiar cualquiera de ellos antes de {{ui:Crear}}.

## Las políticas

- **Unidades de un edificio nuevo**: las unidades cambian a este valor al crear.
- **Número de plantas**, **Nombres de planta** y **Altura de planta**. En un nombre, `{n}` cuenta 1, 2, 3; `{n0}` cuenta 0, 1, 2; `{nn}` y `{nn0}` hacen lo mismo con dos cifras. Así, `Planta {nn0}` da Planta 00, Planta 01, Planta 02.
- **Primer tipo de muro**: lo que dibuja primero la herramienta Muro. Una oficina métrica puede empezar con Fábrica exterior 300 mm, mientras que los proyectos imperiales conservan Exterior 2×6.
- **Etiqueta LOD en los tipos de muro iniciales**: el nivel de desarrollo (LOD 100 a 500) que muestran los nueve tipos iniciales dondequiera que aparezca un tipo. Consulte [Construir conjuntos de muros](topic:wall-assemblies).
- **LOD de un tipo de muro recién creado**: la etiqueta con la que empieza un tipo nuevo en el editor de tipos. Puede cambiarla allí.
- **Primera hoja**: su formato de papel, escala, número y nombre (use `{level}` para el nombre de la planta más baja), o ninguna primera hoja.
- **Tamaños de anotación en papel** (Ajustes › Global › Políticas predeterminadas): las alturas de la oficina, en milímetros tal como se imprimen, para notas, textos de cota, etiquetas, nombres de estancia, letras de burbujas de rejilla, títulos de vista y texto de tablas. Un edificio nuevo los toma al crear y los conserva en su archivo. Consulte [Dibujar a tamaño real, anotar por escala](topic:annotation-sizes).
- **Herramienta activa tras Crear**: Seleccionar, como hace BimCraft por defecto, o Muro, de modo que los dos primeros clics en la planta ya dibujen un muro.

## Disposición de tablas: el estándar de la oficina

En **Ajustes › Global › Políticas predeterminadas**, en **Disposición de tablas (estándar de la oficina)**, defina cómo se agrupa cada tabla, si tiene subtotales y total, su título y la capitalización de sus encabezados de columna. Toda tabla que no indique los suyos propios los toma, lo configure quien lo configure. Consulte [Disponer, guardar y exportar una tabla](topic:schedule-layouts).

## Compartirlas en la oficina

1. En Ajustes, abra la pestaña **Global** y elija {{ui:Políticas predeterminadas}}.
2. Escriba el **Nombre de la oficina** si lo desea. Se escribe en el archivo.
3. Haga clic en {{ui:Guardar en un archivo}}. Obtendrá un archivo pequeño que termina en `.ccdefaults.json`.
4. En otro ordenador, active el complemento, abra el mismo lugar y haga clic en {{ui:Cargar desde un archivo}}. Las políticas del archivo sustituyen a las de ese ordenador.

La pestaña Global también tiene el **Sistema de unidades de un proyecto nuevo**, que vale para todas las aplicaciones que tengan el complemento, y {{ui:Restablecer todas las políticas}}. {{ui:Restablecer los valores predeterminados de BimCraft}} en la pestaña BimCraft borra solo los de BimCraft.

## Conviene saber

- El archivo es JSON plano y abierto: una lista de nombres de políticas y valores. Una política que el archivo nombra y que esta versión no conoce se omite y se indica en el mensaje; el resto se carga igualmente.
- Las políticas se guardan en este navegador, para todas las aplicaciones CadCraft de este ordenador. No se guardan en el archivo del edificio y no se sincronizan entre ordenadores: use el archivo.
- La etiqueta LOD de un tipo inicial procede de la política de este ordenador. Un tipo que cree como copia de uno inicial lleva su etiqueta en el archivo del edificio.
- BimCraft no tiene ajuste de precisión, así que aquí no hay política de precisión.
- Un edificio iniciado desde una plantilla trae sus propias plantas y hojas. La política de tipo de muro y la de unidades siguen aplicándose.
- Desactive el complemento y todo vuelve a ser lo de BimCraft. Sus políticas se conservan para cuando lo vuelva a activar.
