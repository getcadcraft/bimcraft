---
title: Familias y sus tamaños
summary: Puertas, ventanas y muebles vienen en familias. Cada tamaño de una familia es un tipo en el archivo IFC, así que la lista de tipos sigue corta en BimCraft mientras otros programas leen tipos simples.
keywords: familia, familias, tipo, tipos, tamaño, tamaños, tipo de puerta, tipo de ventana, mueble, mesa, estante, gabinete, nuevo tamaño, duplicar, colocar familia, archivo de familia, ccfamily, biblioteca IFC, biblioteca de proyecto, grupo, visibilidad, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Qué es una familia

Una familia es un tipo de elemento en varios tamaños: una puerta batiente sencilla que viene de 32, 36 y 42 pulgadas de ancho, o una mesa que viene larga y corta. En BimCraft ve la familia una sola vez, con sus tamaños debajo, en lugar de una lista larga de tipos.

IFC no tiene familias. En el archivo cada tamaño es un tipo común (un tipo de puerta, de ventana, de mueble…), y la familia es un grupo que enumera sus tamaños. Otros programas BIM leen los tipos y el grupo tal como están; BimCraft reconstruye la familia a partir de ellos.

## Dónde encontrarlas

- El grupo **Familias** del explorador de proyectos enumera las familias de este modelo, con cuántos tamaños tiene cada una y cuántas están colocadas. Debajo están las **Familias de inicio**: las puertas y ventanas de las herramientas Puerta y Ventana, y una mesa, una unidad de estantes y un gabinete bajo.
- {{ui:Build}} › {{ui:Families…}} muestra la misma lista en una ventana.
- Haga clic en una familia para abrirla: sus tamaños, los valores de cada tamaño y cuántos elementos usa cada uno.

## Puertas y ventanas

Las herramientas Puerta y Ventana enumeran las familias de ese tipo, y junto a ellas una **lista de tamaños**. Elija un tamaño, o escriba **W** y **H**: un ancho y un alto que ningún tamaño tenga todavía se convierten en un nuevo tamaño de la familia al colocar la puerta. Las puertas del mismo tamaño comparten un tipo.

En {{ui:Properties}}, una puerta o ventana seleccionada muestra su **Familia** y su **Tamaño**. Elija otro tamaño de la lista, o escriba un nuevo ancho o alto. {{ui:Open the family}} abre la familia a la que pertenece.

El marco de cada puerta o ventana sigue el espesor de su propio muro, como antes con las familias. El tipo del tamaño también conserva la puerta dibujada en un muro de 140 mm, para los programas que leen tipos.

## Nuevo tamaño de esta familia

1. Abra la familia.
2. Bajo **Nuevo tamaño de esta familia**, escriba sus valores (Ancho, Alto y los demás parámetros de la familia) y, si quiere, un nombre. Sin nombre, se nombra según sus valores.
3. Haga clic en {{ui:Make the size}}.

Dos tamaños no pueden tener los mismos valores. **Renombrar** cambia el nombre de un tamaño; **Quitar** elimina un tamaño que nadie usa; **Seleccionar** elige los elementos de ese tamaño.

## Colocar muebles

1. {{ui:Build}} › {{ui:Place family}}, o {{ui:Place}} en la ventana de una familia.
2. En la barra, elija la familia y su tamaño.
3. Haga clic en el plano para colocarlo en el nivel. Pulse {{key:R}} para girarlo 90° antes de hacer clic. {{key:Esc}} detiene la acción.

En {{ui:Properties}}, una pieza colocada muestra su tamaño, dónde está y cuánto está girada; {{key:Delete}} la elimina. Cada pieza de un mismo tamaño comparte la forma de ese tamaño, así que al cambiar la familia cambian todas.

## Tamaños desde una tabla

{{ui:Sizes from a table…}} en la ventana de una familia lee un archivo CSV (separado por coma, punto y coma o tabulador). La primera fila nombra las columnas: el nombre o la etiqueta de un parámetro, y opcionalmente `Name`. Las longitudes son milímetros salvo que escriba una unidad (`1.2 m`, `36 in`); las columnas Sí / No aceptan `yes`, `no`, `true`, `false`, `1` o `0`; y un parámetro sin columna conserva su valor predeterminado. Cada fila se convierte en un tamaño, en un solo paso que puede deshacer; un tamaño que ya existe se omite. Si una fila no se lee, o la familia no puede dibujarla, se rechaza toda la tabla y se indica su línea. Máximo 200 filas y 1 MB. {{ui:Save the sizes as a table}} escribe la misma tabla de vuelta.

## Ajustar en cada elemento

Un parámetro marcado **Por elemento** en el editor (un Sí / No que agrega un travesaño, una etiqueta o un material) no forma parte de un tamaño: dos puertas de un mismo tamaño pueden diferir. Elija el elemento y **Propiedades** muestra estos parámetros; cambie uno y ese elemento se vuelve a dibujar con su propia forma (los muebles y accesorios obtienen forma propia, y las puertas y ventanas se rehacen en sus muros). Si los regresa todos a sus valores predeterminados, vuelve a la forma de su tamaño.

## Nivel de detalle

{{ui:Build}} › {{ui:Families…}} › **Nivel de detalle** define, para cada familia del modelo, lo que se guarda en los sólidos y se dibuja en los símbolos de planta: **Fino** lo conserva todo, **Medio** y **Grueso** omiten las partes que el editor marca como más finas (archivos más pequeños, vistas más rápidas). **Automático** guarda todo y deja que la vista de una hoja elija según su escala: 1:50 y mayores, finos; 1:100, medio; 1:200 y menores, grueso. Es un paso que puede deshacer.

## Duplicar una familia

No tiene que empezar desde cero. {{ui:Duplicate}} copia una familia con sus parámetros, sólidos y tamaños bajo un nombre nuevo. Cambie la copia en el editor; la original queda como estaba.

## Archivos de familia

- {{ui:Save the family file}} guarda un `.ccfamily.json`: los parámetros, sólidos y tamaños de la familia. Ábralo en otro modelo con {{ui:Open a family file…}} en el grupo Familias.
- {{ui:Save as IFC}} guarda la familia como un archivo IFC pequeño: los tipos de sus tamaños y su grupo, declarados por una biblioteca de proyecto IFC. Otros programas lo abren como un conjunto de tipos; BimCraft lo abre de nuevo como familia.

Un archivo de familia abierto aquí se lee como datos y se revisa antes de escribir nada. Una familia cuya clave ya está en el modelo entra como una familia separada. Una familia que contiene otras (vea Familias dentro, en la ayuda del editor) trae consigo las suyas: el archivo las enumera, y el modelo conserva las que ya tiene.

## Familias de la Biblioteca

Abra {{ui:Families…}} y elija {{ui:From the Library…}} para ver las familias que se han compartido en la Biblioteca. {{ui:Add to this project}} lee una como un archivo de familia: BimCraft revisa cada campo antes de crear nada, la familia entra como familia propia y se abre en el editor. Agregarla es un solo paso de deshacer. Para compartir las suyas, use {{ui:Save all as a library}} y envíe el archivo a la Biblioteca (el personal de la Biblioteca publica un archivo de familia con un comando, y cada familia es un elemento aparte con sus tamaños). Si no se puede contactar a la Biblioteca, la lista lo indica y nada cambia.

## Tipos de otros programas

Los tipos creados en otros programas también aparecen en el grupo Familias, agrupados por una suposición: por la parte del nombre de sus elementos antes de los dos puntos, o por nombres de tipo que solo difieren en sus números. La ventana de la familia indica qué suposición usó. Se enumeran y puede elegir sus elementos, pero aquí no se editan: no tienen receta de familia.

:::note
Las puertas y ventanas de inicio se dibujan exactamente como antes de las familias. Los archivos hechos antes de las familias se abren sin cambios: sus puertas y ventanas aparecen bajo su familia con los tamaños en uso, y pasan a un tamaño propio la primera vez que las cambia.
:::

Vea también [Editar una familia](topic:family-editor) y [Puertas y ventanas](topic:doors-and-windows).
