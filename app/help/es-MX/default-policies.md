---
title: "Políticas predeterminadas: defina con qué empieza un edificio nuevo"
summary: Indique una vez qué tipo de muro, niveles, primera hoja, etiquetas de nivel de desarrollo, unidades y herramienta empieza un edificio nuevo, para proyectos métricos y de sistema inglés, y comparta las políticas en la oficina como un archivo pequeño.
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar de oficina, valores predeterminados de oficina, plantilla, edificio nuevo, primer tipo de muro, muro métrico, mampostería, LOD, nivel de desarrollo, primera hoja, papel, escala, niveles, altura de nivel, nombres de niveles, herramienta de muro, unidades, compartir, exportar, importar, json
from: 42379aa5
---

## Qué hará

Indique a BimCraft con qué debe empezar un edificio nuevo, para que nadie en la oficina tenga que cambiar siempre lo mismo. Es un complemento: está desactivado hasta que lo active, y una política que no defina deja el valor predeterminado de BimCraft tal como está.

:::note
Estos son valores predeterminados para edificios **nuevos** y cosas **nuevas**. Un proyecto que ya empezó no cambia.
:::

## Pasos

1. Abra Configuración, vaya a {{ui:Complementos}} y active {{ui:Políticas predeterminadas}}.
2. En Configuración, abra la pestaña **BimCraft** y elija {{ui:Políticas predeterminadas}} en la lista de la izquierda.
3. Defina las políticas que quiera. Cada una empieza en **la de BimCraft**, con lo que es entre paréntesis. Una política con una casilla **Métrico** y otra **Sistema inglés** toma un valor para cada tipo de proyecto; llene solo las que necesite.
4. No hay botón Guardar: cada cambio se guarda al hacerlo. Un valor que no se puede usar se rechaza con un mensaje, y el anterior se conserva.
5. Haga clic en {{ui:Edificio nuevo}}. El cuadro se llena con sus políticas, y cada valor que una política define dice **de sus Políticas predeterminadas** junto a él. Aún puede cambiar cualquiera antes de {{ui:Crear}}.

## Las políticas

- **Unidades de un edificio nuevo**: las unidades cambian a esta al crear.
- **Número de niveles**, **Nombres de niveles** y **Altura de nivel**. En un nombre, `{n}` cuenta 1, 2, 3; `{n0}` cuenta 0, 1, 2; `{nn}` y `{nn0}` hacen lo mismo con dos dígitos. Así que `Piso {nn0}` da Piso 00, Piso 01, Piso 02.
- **Primer tipo de muro**: lo que la herramienta Muro dibuja primero. Una oficina métrica puede empezar con Mampostería exterior 300 mm, mientras los proyectos en sistema inglés conservan Exterior 2×6.
- **Etiqueta LOD de los tipos de muro iniciales**: el nivel de desarrollo (LOD 100 a 500) que muestran los nueve tipos iniciales dondequiera que se liste un tipo. Vea [Construir ensamblajes de muro](topic:wall-assemblies).
- **LOD de un tipo de muro nuevo**: la etiqueta con que empieza un tipo nuevo en el editor de tipos. Puede cambiarla ahí.
- **Primera hoja**: su papel, escala, número y nombre de hoja (use `{level}` para el nombre del nivel más bajo), o ninguna primera hoja.
- **Tamaños de anotación en papel** (Configuración › Global › Políticas predeterminadas): las alturas de la oficina, en milímetros tal como se imprimen, para notas, texto de cotas, etiquetas, nombres de habitación, letras de burbujas de ejes, títulos de vista y texto de cuadros. Un edificio nuevo los toma al crear y los conserva en su archivo. Vea [Dibujar a tamaño real, anotar por escala](topic:annotation-sizes).
- **Herramienta activa después de crear**: Seleccionar, como lo hace BimCraft por su cuenta, o Muro, para que los primeros dos clics en la planta ya dibujen un muro.

## Disposición de cuadros: el estándar de la oficina

En **Configuración › Global › Políticas predeterminadas**, bajo **Disposición de cuadros (el estándar de la oficina)**, defina cómo se agrupa cada cuadro, si tiene subtotales y un total, su título y las mayúsculas de sus encabezados de columna. Todo cuadro que no indique los suyos los toma, sin importar quién lo configure. Vea [Disponer, guardar y exportar un cuadro](topic:schedule-layouts).

## Compartirlas con la oficina

1. En Configuración, abra la pestaña **Global** y elija {{ui:Políticas predeterminadas}}.
2. Escriba el **Nombre de la oficina** si quiere. Se escribe en el archivo.
3. Haga clic en {{ui:Guardar en un archivo}}. Obtiene un archivo pequeño que termina en `.ccdefaults.json`.
4. En otra computadora, active el complemento, abra el mismo lugar y haga clic en {{ui:Cargar desde un archivo}}. Las políticas del archivo reemplazan las de esa computadora.

La pestaña Global también tiene el **Sistema de unidades de un proyecto nuevo**, que vale para cada aplicación que tenga el complemento, y {{ui:Restablecer todas las políticas}}. {{ui:Restablecer a los valores predeterminados de BimCraft}} en la pestaña BimCraft borra solo las de BimCraft.

## Cosas que conviene saber

- El archivo es JSON abierto y simple: una lista de nombres y valores de políticas. Una política que el archivo nombra y esta versión no conoce se omite y se nombra en el mensaje; lo demás sí se carga.
- Las políticas se guardan en este navegador, para cada aplicación de CadCraft en esta computadora. No se guardan en el archivo del edificio, y no se sincronizan entre computadoras: use el archivo.
- La etiqueta LOD de un tipo inicial viene de la política de esta computadora. Un tipo que cree como copia de uno inicial lleva su etiqueta en el archivo del edificio.
- BimCraft no tiene un ajuste de precisión, así que no hay una política de precisión aquí.
- Un edificio iniciado desde una plantilla trae sus propios niveles y hojas. La política de tipo de muro y de unidades sigue aplicando.
- Desactive el complemento y todo vuelve a ser lo de BimCraft. Sus políticas se conservan para cuando lo vuelva a activar.
