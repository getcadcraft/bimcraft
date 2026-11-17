---
title: Familias y sus medidas
summary: Puertas, ventanas y muebles vienen en familias. Cada medida de una familia es un tipo en el archivo IFC, así la lista de tipos sigue corta en BimCraft mientras otros programas leen tipos simples.
keywords: familia, familias, tipo, tipos, medida, medidas, tipo de puerta, tipo de ventana, mueble, mesa, estante, mueble bajo, nueva medida, duplicar, colocar familia, archivo de familia, ccfamily, biblioteca IFC, biblioteca de proyecto, grupo, visibilidad, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Qué es una familia

Una familia es un mismo tipo de objeto en varias medidas: una puerta batiente simple que viene de 32, 36 y 42 pulgadas de ancho, o una mesa que viene larga y corta. En BimCraft la familia aparece una sola vez, con sus medidas debajo, en lugar de una lista larga de tipos.

IFC no tiene familias. En el archivo cada medida es un tipo común (un tipo de puerta, un tipo de ventana, un tipo de mueble…), y la familia es un grupo que lista sus medidas. Otros programas BIM leen los tipos y el grupo tal como están; BimCraft vuelve a leer la familia a partir de ellos.

## Dónde encontrarlas

- El grupo **Familias** del explorador de proyecto lista las familias de este modelo, con cuántas medidas tiene cada una y cuántas están colocadas. Debajo están las **Familias iniciales**: las puertas y ventanas de las herramientas Puerta y Ventana, y una mesa, una unidad de estantes y un mueble bajo de cocina.
- {{ui:Build}} › {{ui:Families…}} muestra la misma lista en una ventana.
- Haga clic en una familia para abrirla: sus medidas, los valores de cada medida y cuántos elementos usa cada una.

## Puertas y ventanas

Las herramientas Puerta y Ventana listan las familias de su tipo, y al lado una **lista de medidas**. Elija una medida, o escriba **W** y **H**: un ancho y alto que ninguna medida tenga todavía se convierte en una nueva medida de la familia al colocar la puerta. Las puertas de la misma medida comparten un tipo.

En {{ui:Properties}}, una puerta o ventana seleccionada muestra su **Familia** y **Medida**. Elija otra medida de la lista, o escriba un nuevo ancho o alto. {{ui:Open the family}} abre la familia a la que pertenece.

El marco de cada puerta o ventana sigue el espesor de su propia pared, como antes de las familias. El tipo de la medida también mantiene la puerta dibujada en un muro de 140 mm, para programas que leen tipos.

## Nueva medida desde esta familia

1. Abra la familia.
2. Bajo **Nueva medida desde esta familia**, escriba sus valores (Ancho, Alto y los demás parámetros de la familia) y, si quiere, un nombre. Sin nombre, se nombra según sus valores.
3. Haga clic en {{ui:Make the size}}.

Dos medidas no pueden tener los mismos valores. **Renombrar** cambia el nombre de una medida; **Quitar** elimina una medida que nadie usa; **Seleccionar** elige los elementos de esa medida.

## Colocar muebles

1. {{ui:Build}} › {{ui:Place family}}, o {{ui:Place}} en la ventana de una familia.
2. En la barra, elija la familia y su medida.
3. Haga clic en el plano para colocarlo en el nivel. Presione {{key:R}} para girarlo 90° antes de hacer clic. {{key:Esc}} detiene la colocación.

Las **Propiedades** de una pieza colocada muestran su medida, dónde está y cuánto está girada; {{key:Delete}} la elimina. Cada pieza de una misma medida comparte la forma de esa medida, así que cambiar la familia cambia todas.

## Medidas desde una tabla

{{ui:Sizes from a table…}} en la ventana de una familia lee un archivo CSV (coma, punto y coma o tabulación). La primera fila nombra las columnas: el nombre o rótulo de un parámetro, y opcionalmente `Name`. Las longitudes están en milímetros salvo que escriba una unidad (`1.2 m`, `36 in`); las columnas Sí / No aceptan yes, no, true, false, 1 o 0, y un parámetro sin columna conserva su valor por defecto. Cada fila se convierte en una medida, en un solo paso que puede deshacer; una medida que ya existe se omite. Si una fila no se lee, o la familia no puede dibujarla, se rechaza toda la tabla e indica su línea. Máximo 200 filas y 1 MB. {{ui:Save the sizes as a table}} escribe la misma tabla de vuelta.

## Definido en cada elemento

Un parámetro marcado **Por elemento** en el editor (un Sí / No que agrega un travesaño, una etiqueta, un material) no forma parte de una medida: dos puertas de una misma medida pueden diferir. Elija el elemento y en **Propiedades** aparecen estos parámetros; cambie uno y ese elemento se vuelve a dibujar con su propia forma (muebles y artefactos reciben una forma propia, y puertas y ventanas se rehacen en sus paredes). Si los devuelve todos a sus valores por defecto, vuelve a la forma de su medida.

## Nivel de detalle

{{ui:Build}} › {{ui:Families…}} › **Nivel de detalle** define, para cada familia del modelo, qué se guarda en los sólidos y se dibuja en los símbolos del plano: **Fino** lo guarda todo, **Medio** y **Grueso** dejan fuera las partes que el editor marca como más finas (archivos más chicos, vistas más rápidas). **Automático** guarda todo y deja que la escala de la vista de la hoja elija: 1:50 y mayores finos, 1:100 medio, 1:200 y menores grueso. Un paso que puede deshacer.

## Duplicar una familia

No hace falta empezar de cero. {{ui:Duplicate}} copia una familia con sus parámetros, sólidos y medidas bajo un nombre nuevo. Cambie la copia en el editor; el original queda como estaba.

## Archivos de familia

- {{ui:Save the family file}} guarda un `.ccfamily.json`: los parámetros, sólidos y medidas de la familia. Ábralo en otro modelo con {{ui:Open a family file…}} en el grupo Familias.
- {{ui:Save as IFC}} guarda la familia como un archivo IFC pequeño: los tipos de sus medidas y su grupo, declarados por una biblioteca de proyecto IFC. Otros programas lo abren como un conjunto de tipos; BimCraft lo abre de nuevo como familia.

Un archivo de familia abierto aquí se lee como datos y se verifica antes de escribir nada. Una familia cuya clave ya está en el modelo entra como una familia separada. Una familia que contiene otras (vea Familias adentro, en la ayuda del editor) trae consigo esas otras: el archivo las lista, y el modelo conserva las que ya tiene.

## Familias en la Biblioteca

Abra {{ui:Families…}} y elija {{ui:From the Library…}} para ver las familias que se compartieron en la Biblioteca. {{ui:Add to this project}} lee una como archivo de familia: BimCraft verifica cada campo antes de crear nada, la familia entra como una familia propia y se abre en el editor. Agregarla es un solo paso para deshacer. Para compartir las suyas, use {{ui:Save all as a library}} y envíe el archivo a la Biblioteca (el personal de la Biblioteca publica un archivo de familia con un comando, y cada familia es un ítem propio con sus medidas). Si no se puede llegar a la Biblioteca, la lista lo indica y nada cambia.

## Tipos de otros programas

Los tipos creados por otros programas también aparecen en el grupo Familias, agrupados por una suposición: por la parte del nombre de sus elementos anterior a los dos puntos, o si no, por nombres de tipo que solo difieren en sus números. La ventana de la familia indica qué suposición se usó. Se listan y puede seleccionar sus elementos, pero no se editan aquí: no tienen receta de familia.

:::note
Las puertas y ventanas iniciales se dibujan exactamente como eran antes de las familias. Los archivos hechos antes de las familias se abren sin cambios: sus puertas y ventanas aparecen bajo su familia con las medidas en uso, y pasan a una medida propia la primera vez que las cambia.
:::

Vea también [Editar una familia](topic:family-editor) y [Puertas y ventanas](topic:doors-and-windows).
