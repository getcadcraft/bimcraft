---
title: Organizar, guardar y exportar un cuadro
summary: Agrupe un cuadro, asígnele subtotales y totales, agregue una columna leída de una propiedad, guárdelo como configuración en el archivo, y expórtelo como libro de hoja de cálculo (.xlsx), como texto para pegar en una hoja en línea, o como CSV. El estándar de la oficina completa lo que un cuadro no indica.
keywords: organización de cuadro, agrupar por, subtotal, total, encabezados, estándar de oficina, políticas predeterminadas, configuración guardada, cuadro de puertas por piso, resistencia al fuego, herrajes, xlsx, libro, hoja en línea, pegar, csv, exportar, hoja de cálculo, elementos, seleccionar desde el cuadro, cifra
from: 95dfd801
---

## Qué hará

Convierta un cuadro sencillo en el que emite su oficina: agrupado por nivel, tipo o local, con subtotales y un total, con las columnas que necesita, bajo su propio nombre. Después envíelo a una hoja de cálculo. Cada fila y cada cifra todavía sabe de qué elementos proviene.

## Pasos

1. Active {{ui:Dibujo}} y abra **Cuadros** en el panel izquierdo. Elija un cuadro, por ejemplo **Puertas**.
2. Sobre la tabla, elija **Agrupar por** (una columna del cuadro, como Nivel o Tipo, o **Sin agrupar**) y **Totales** (**Sin totales**, **Un total** o **Subtotales y un total**). **Como está configurado** deja la elección a la configuración guardada o al estándar de la oficina.
3. Para agregar una columna que se lea de los elementos, escriba un nombre de propiedad o de etiqueta debajo de la tabla (por ejemplo `FireRating`, `Pset_DoorCommon.FireRating` o el nombre de una etiqueta como `Ironmongery`) y haga clic en **Agregar columna**. BimCraft lee primero los conjuntos de propiedades del propio elemento, y después los de su tipo. Cuando ningún elemento tiene aún un valor, lo indica; la columna se llena sola cuando se asigne un valor.
4. Escriba un nombre (por ejemplo "Cuadro de puertas por piso") y haga clic en **Guardar como configuración**. La configuración se guarda en el archivo del edificio y se une a la lista de Cuadros bajo su nombre. Sigue cada cambio del modelo. **Quitar esta configuración** la elimina. Ambas acciones son un paso de Deshacer.

## Haga clic en una cifra para seleccionar de dónde proviene

Haga clic en cualquier fila, o en cualquier cifra, para seleccionar los elementos detrás de ella en el plano y en 3D:

- una fila selecciona los elementos de esa fila;
- un subtotal o un total selecciona todo lo que suma, y un encabezado de grupo selecciona su grupo;
- una cifra con elementos propios los selecciona: las **Deducciones** de un tipo de muro seleccionan sus puertas y ventanas, y el área de muro de un local, sus muros.

Lo mismo funciona en un documento hecho desde el modelo: en la vista previa, haga clic en una cifra de un cuadro.

## Exportar

- **Descargar Excel** guarda un libro .xlsx. Las longitudes, áreas, volúmenes y conteos son números reales en la unidad que muestra la columna (pies y pulgadas siguen siendo texto). Una segunda hoja, **Elementos**, enumera para cada línea los GlobalId de los elementos detrás de ella.
- **Copiar para Google Sheets** pone el cuadro en su portapapeles como texto separado por tabulaciones. En una hoja de Google, haga clic en la celda A1 y pegue. **Abrir una nueva hoja de Google** abre `sheets.new`, la dirección de Google para una hoja vacía, en su propia cuenta de Google. BimCraft no inicia sesión en Google y no envía nada allí: el pegado es suyo.
- **Descargar CSV** guarda la tabla tal como se ve en pantalla.

## El estándar de la oficina

Una oficina puede indicar una sola vez cómo se organizan sus cuadros. Active el complemento **Políticas predeterminadas** ([Políticas predeterminadas](topic:default-policies)) y configure, en **Configuración › General › Políticas predeterminadas › Organización de cuadros (el estándar de la oficina)**:

| Política | Qué hace |
|---|---|
| Agrupar cuadros por | Nivel, Tipo, Local o sin agrupar, para cada cuadro que tenga una columna así |
| Totales en cuadros | Sin totales, un total al final, o un subtotal bajo cada grupo y un total |
| Título del cuadro | Un patrón, por ejemplo `{project}: {schedule}` |
| Encabezados de columna | Tal como se escriben, EN MAYÚSCULAS o Con Mayúsculas |

El estándar se aplica a cada cuadro, sin importar quién lo configure: los cuadros sencillos del panel, una configuración guardada, un cuadro que configure un asistente, las exportaciones y los cuadros de un documento. Una configuración que indique su propio agrupado, totales o título los conserva; el estándar completa el resto. El panel indica qué partes definió el estándar de la oficina. Las políticas viajan en el archivo de Políticas predeterminadas junto con las demás.

## Para tener en cuenta

- Una configuración indica su cuadro de origen y sus columnas; no contiene números. Las cifras se leen del modelo cada vez.
- Las listas que no son filas de elementos (los ensamblajes de muros y la leyenda de materiales) no tienen organización ni exportación aquí.
- Un asistente puede hacer todo esto por usted: vea [Permita que un asistente de IA trabaje con su modelo](topic:assistants).
