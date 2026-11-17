---
title: Diseñar, guardar y exportar una planilla
summary: Agrupá una planilla, dale subtotales y totales, agregá una columna leída de una propiedad, guardala como configuración en el archivo, y exportala como libro de hoja de cálculo (.xlsx), como texto para pegar en una hoja en línea, o como CSV. El estándar de la oficina completa lo que una planilla no indica.
keywords: diseño de planilla, agrupar por, subtotal, total, encabezados, estándar de oficina, políticas predeterminadas, configuración, planilla de puertas por piso, resistencia al fuego, herrajes, xlsx, libro, hoja en línea, pegar, csv, exportar, hoja de cálculo, elementos, seleccionar desde planilla, cifra
from: 95dfd801
---

## Lo que vas a hacer

Convertí una planilla simple en la que tu oficina emite: agrupada por nivel, tipo o ambiente, con subtotales y un total, con las columnas que necesitás, bajo su propio nombre. Después enviala a una hoja de cálculo. Cada fila y cada cifra sigue sabiendo de qué elementos vino.

## Pasos

1. Activá {{ui:Dibujar}} y abrí **Planillas** en el panel izquierdo. Elegí una planilla, por ejemplo **Puertas**.
2. Arriba de la tabla, elegí **Agrupar por** (una columna de la planilla, como Nivel o Tipo, o **Sin agrupación**) y **Totales** (**Sin totales**, **Un total**, o **Subtotales y un total**). **Como está configurado** deja la elección a la configuración guardada o al estándar de la oficina.
3. Para agregar una columna leída de los elementos, escribí debajo de la tabla un nombre de propiedad o de etiqueta (por ejemplo `FireRating`, `Pset_DoorCommon.FireRating` o el nombre de una etiqueta como `Herrajes`) y hacé clic en **Agregar columna**. BimCraft lee primero los conjuntos de propiedades del elemento y después los de su tipo. Cuando ningún elemento tiene aún un valor, lo indica; la columna se completa sola cuando se define un valor.
4. Escribí un nombre (por ejemplo "Planilla de puertas por piso") y hacé clic en **Guardar como configuración**. La configuración se guarda en el archivo del edificio y se suma a la lista de Planillas con ese nombre. Sigue todos los cambios del modelo. **Quitar esta configuración** la elimina. Ambas son un paso de Deshacer.

## Hacé clic en una cifra para seleccionar de dónde viene

Hacé clic en cualquier fila o en cualquier cifra para seleccionar en la planta y en 3D los elementos que están detrás:

- una fila selecciona los elementos de esa fila;
- un subtotal o un total selecciona todo lo que suma, un encabezado de grupo selecciona su grupo;
- una cifra con elementos propios selecciona esos: los **Descuentos** de un tipo de muro seleccionan sus puertas y ventanas, la superficie de muro de un ambiente, sus muros.

Lo mismo funciona en un documento hecho a partir del modelo: en la vista previa, hacé clic en una cifra de una planilla.

## Exportar

- **Descargar Excel** guarda un libro .xlsx. Longitudes, superficies, volúmenes y conteos son números reales en la unidad que muestra la columna (los pies y pulgadas quedan como texto). Una segunda hoja, **Elementos**, lista para cada línea los GlobalId de los elementos detrás de ella.
- **Copiar para Google Sheets** pone la planilla en tu portapapeles como texto separado por tabulaciones. En una hoja de Google, hacé clic en la celda A1 y pegá. **Abrir una hoja nueva de Google** abre `sheets.new`, la dirección propia de Google para una hoja vacía, en tu propia cuenta de Google. BimCraft no inicia sesión en Google y no envía nada allí: el pegado lo hacés vos.
- **Descargar CSV** guarda la tabla tal como está diseñada en pantalla.

## El estándar de la oficina

Una oficina puede indicar una sola vez cómo se diseñan sus planillas. Activá el complemento **Políticas predeterminadas** ([Políticas predeterminadas](topic:default-policies)) y configurá, en **Configuración › Global › Políticas predeterminadas › Diseño de planilla (estándar de la oficina)**:

| Política | Qué hace |
|---|---|
| Agrupar planillas por | Nivel, Tipo, Ambiente o sin agrupación, para cada planilla que tenga una columna así |
| Totales en planillas | Sin totales, un total al final, o un subtotal bajo cada grupo y un total |
| Título de la planilla | Un patrón, por ejemplo `{project}: {schedule}` |
| Encabezados de columna | Tal como están escritos, EN MAYÚSCULAS o Con Mayúsculas |

El estándar se aplica a todas las planillas, sin importar quién las configure: las planillas simples del panel, una configuración guardada, una planilla que configura un asistente, las exportaciones y las planillas de un documento. Una configuración que indica su propio agrupamiento, totales o título los conserva; el estándar completa el resto. El panel indica qué partes definió el estándar de la oficina. Las políticas viajan en el archivo de Políticas predeterminadas junto con las demás.

## Bueno saber

- Una configuración indica su planilla de origen y sus columnas; no contiene números. Las cifras se leen del modelo cada vez.
- Las listas que no son filas de elementos (los ensamblados de muros y la leyenda de materiales) no tienen diseño ni exportación acá.
- Un asistente puede hacer todo esto por vos: ver [Dejá que un asistente de IA trabaje con tu modelo](topic:assistants).
