---
title: Diseñar, guardar y exportar una tabla
summary: Agrupe una tabla, añada subtotales y totales, añada una columna leída de una propiedad, guárdela como configuración en el archivo y expórtela como libro de hoja de cálculo (.xlsx), como texto para pegar en una hoja en línea, o como CSV. El estándar de la oficina completa lo que la tabla no indica.
keywords: diseño de tabla, agrupar por, subtotal, total, encabezados, estándar de oficina, políticas predeterminadas, configuración, tabla de puertas por planta, resistencia al fuego, herrajes, xlsx, libro, hoja en línea, pegar, csv, exportar, hoja de cálculo, elementos, seleccionar desde la tabla, cifra
from: 95dfd801
---

## Qué hará

Convierta una tabla sencilla en la que emite su oficina: agrupada por planta, tipo o habitación, con subtotales y un total, con las columnas que necesita, bajo su propio nombre. Después envíela a una hoja de cálculo. Cada fila y cada cifra sigue sabiendo de qué elementos procede.

## Pasos

1. Active {{ui:Dibujo}} y abra **Tablas** en el panel izquierdo. Elija una tabla, por ejemplo **Puertas**.
2. Encima de la tabla, elija **Agrupar por** (una columna de la tabla, como Planta o Tipo, o **Sin agrupación**) y **Totales** (**Sin totales**, **Un total** o **Subtotales y un total**). **Como está definido** deja la elección a la configuración guardada o al estándar de la oficina.
3. Para añadir una columna leída de los elementos, escriba un nombre de propiedad o de etiqueta debajo de la tabla (por ejemplo `FireRating`, `Pset_DoorCommon.FireRating` o el nombre de una etiqueta como `Ironmongery`) y haga clic en **Agregar una columna**. BimCraft lee primero los conjuntos de propiedades del propio elemento y después los de su tipo. Cuando ningún elemento tiene aún un valor, lo indica; la columna se rellena sola en cuanto se fije un valor.
4. Escriba un nombre (por ejemplo "Tabla de puertas por planta") y haga clic en **Guardar como configuración**. La configuración se guarda en el archivo del edificio y se une a la lista de Tablas con su nombre. Sigue cada cambio del modelo. **Quitar esta configuración** la elimina de nuevo. Ambas son un paso de Deshacer.

## Haga clic en una cifra para seleccionar su origen

Haga clic en cualquier fila, o en cualquier cifra, para seleccionar en el plano y en 3D los elementos que hay detrás:

- una fila selecciona los elementos de esa fila;
- un subtotal o un total selecciona todo lo que suma, y un encabezado de grupo, su grupo;
- una cifra con elementos propios los selecciona: las **Deducciones** de un tipo de muro seleccionan sus puertas y ventanas, y la superficie de muro de una habitación, sus muros.

Lo mismo funciona en un documento hecho a partir del modelo: en la vista previa, haga clic en una cifra de una tabla.

## Exportar

- **Descargar Excel** guarda un libro .xlsx. Las longitudes, superficies, volúmenes y recuentos son números reales en la unidad que muestra la columna (los pies y pulgadas siguen siendo texto). Una segunda hoja, **Elementos**, enumera para cada línea los GlobalId de los elementos que hay detrás.
- **Copiar para Google Sheets** pone la tabla en el portapapeles como texto separado por tabulaciones. En una hoja de Google, haga clic en la celda A1 y pegue. **Abrir una hoja nueva de Google** abre `sheets.new`, la dirección propia de Google para una hoja vacía, en su cuenta de Google. BimCraft no inicia sesión en Google y no envía nada allí: el pegado es suyo.
- **Descargar CSV** guarda la tabla tal como se muestra en pantalla.

## El estándar de la oficina

Una oficina puede indicar una sola vez cómo se diseñan sus tablas. Active el complemento **Políticas predeterminadas** ([Políticas predeterminadas](topic:default-policies)) y ajuste, en **Configuración › Global › Políticas predeterminadas › Diseño de tablas (el estándar de la oficina)**:

| Política | Qué hace |
|---|---|
| Agrupar tablas por | Planta, Tipo, Habitación o sin agrupar, para cada tabla que tenga una columna así |
| Totales en las tablas | Sin totales, un total al final, o un subtotal bajo cada grupo y un total |
| Título de la tabla | Un patrón, por ejemplo `{project}: {schedule}` |
| Encabezados de columna | Tal como se escriben, EN MAYÚSCULAS o Con Mayúsculas |

El estándar se aplica a toda tabla, sin importar quién la configure: las tablas sencillas del panel, una configuración guardada, una tabla que configure un asistente, las exportaciones y las tablas de un documento. Una configuración que indique su propia agrupación, totales o título los conserva; el estándar completa el resto. El panel indica qué partes ha fijado el estándar de la oficina. Las políticas viajan en el archivo de Políticas predeterminadas junto con las demás.

## Conviene saber

- Una configuración indica su tabla de origen y sus columnas; no contiene cifras. Las cifras se leen del modelo cada vez.
- Las listas que no son filas de elementos (los conjuntos de muros y la leyenda de materiales) no tienen diseño ni exportación aquí.
- Un asistente puede hacer todo esto por usted: véase [Permita que un asistente de IA trabaje con su modelo](topic:assistants).
