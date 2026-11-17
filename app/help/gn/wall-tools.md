---
title: Formas de muro, dividir, desplazar, estirar y bloquear
summary: Dibujá muros como rectángulo, polígono, arco, sobre líneas elegidas o alrededor de un contorno; dividilos, quitá un tramo, desplazalos, estirá en caja, alinealos y bloqueá uno a otro, a una cota o a una línea de grilla. Cada cambio mantiene los muros unidos y es un paso de deshacer.
keywords: cambiar tipo, cambiar de tipo, reasignar, qué se movió, lod, nivel de desarrollo, estilo de unión, inglete, a tope, escuadrar, uniones de muro, siguiente, atraviesa, desactivar unión, activar unión, prioridad de capas, núcleo, prioridad, empalme, rectángulo, rectángulo girado, polígono, inscrito, circunscrito, arco, centro, arco tangente, líneas elegidas, pestaña, trazar, contorno, varita mágica, dividir, dividir con hueco, hueco, eliminar tramo, reunir, desplazar, copiar, estirar en caja, marco de selección, estirar, alinear, bloquear, candado, restricción, bloquear cota, editar cota, grilla, bloquear a grilla, mover línea de grilla, desplazamiento de ubicación, unión desactivada, independiente, crecer desde, medir desde, eje, cara interior, cara exterior, desunir, alt
from: 5b7d2f75
---

## Mba'e rejapóta

Hacé y cambiá muros con las recetas de la herramienta Muro. Cada una termina igual que dibujar un muro por sus esquinas: las esquinas se unen solas, las uniones se guardan en el archivo, y todo el cambio es un paso en **Cambios** que {{ui:Undo}} deshace. Los muros conservan su identidad: un muro que dividiste, desplazaste o estiraste sigue siendo el mismo muro, con sus puertas, ventanas y cotas.

## Dibujar un rectángulo, polígono o arco

Con {{ui:Draw}} activado, abrí {{ui:Shapes}} en el grupo Dibujar (o elegí una forma en la lista **Forma** de la fila Muro). La fila Muro muestra el tipo de muro, la referencia de dibujo, el lado exterior y la parte superior, igual que para la herramienta {{ui:Wall}}. Después hacé clic, o escribí los puntos (x,y · @dx,dy · @largo<ángulo · un largo a lo largo del puntero):

- **Rectángulo**: dos esquinas opuestas. Cuatro muros, cuatro uniones de esquina, un paso.
- **Rectángulo girado**: donde empieza y termina el primer lado (eso fija su giro y largo), luego un tercer clic para el otro lado.
- **Polígono**: el centro, luego una esquina (**Inscrito**) o el medio de un lado (**Circunscrito**). Fijá primero **Sides** (3 a 64).
- **Arco, centro**: el centro, el inicio (eso fija el radio), el final. **Sentido**: el camino más corto, antihorario o horario. Un barrido de tres cuartos de círculo se dibuja como dos muros.
- **Arco tangente**: hacé clic en el extremo de un muro, luego donde termina el arco. El arco sale del extremo del muro en la dirección propia del muro.

Una forma cerrada recibe su exterior hacia afuera. Dibujada en la **Cara exterior** o **Cara interior**, la cara en la que hacés clic es la cara que se queda fija.

## Muros sobre líneas que ya tenés

- **Líneas elegidas**: hacé clic en una línea y un muro va sobre ella. Presioná {{key:Tab}} (o mantené {{key:Shift}} mientras hacés clic) para tomar toda la cadena de líneas unidas de extremo a extremo. Las líneas son las líneas de dibujo de esta vista, la referencia de trazado y las líneas de grilla.
- **Trazar contorno**: hacé clic dentro de un área cerrada por esas líneas o por muros. Los muros rodean la menor área alrededor del clic.

## Antes de dibujar: desplazamiento y unión

La fila Muro tiene dos campos más, usados por la herramienta {{ui:Wall}} y las formas:

- **Offset**: los muros se dibujan a esta distancia de la línea en la que hacés clic: + a su izquierda, − a su derecha, visto como lo dibujás.
- **Join**: desmarcalo para dibujar muros independientes. Sus extremos reciben **Disallow join** y quedan libres dondequiera que vayan (ver [Cambiar un muro](topic:change-a-wall-or-door)).

## Dividir, quitar un tramo, reunir

Abrí {{ui:Walls}} en el grupo Editar.

- **Split**: hacé clic en un muro donde debe cortarse, o escribí la distancia desde su inicio. Cerca de un muro que lo cruza, el corte se ajusta al punto donde se encuentran. Las dos partes tienen el mismo tipo y quedan unidas de extremo a extremo. **Gap** deja un espacio de ese largo centrado en el corte. **Free ends** da a los extremos cortados Disallow join en su lugar (Configuración › BimCraft › Muro-kuéra › **When a wall is split** fija cuál queda marcada al principio). Una puerta o ventana va con la parte del muro donde está; un corte a través de una de ellas se rechaza.
- **Delete segment**: hacé clic donde empieza el tramo y donde termina. Una puerta en el tramo se va con él.
- **Rejoin**: hacé clic en las dos partes de un mismo muro (en línea, del mismo tipo). Vuelven a ser un solo muro, el primero en el que hiciste clic, con las puertas de ambos.

## Estilo de unión, Disallow join, prioridad de capas

Abrí {{ui:Walls}} en el grupo Editar.

- **Join style**: hacé clic en una esquina donde terminan dos muros rectos. Cada clic pasa al siguiente estilo: **Mitre** (ambos extremos cortados sobre la línea del ángulo interior al exterior, con lo que empieza cada esquina), **Butt** (un muro atraviesa hasta la cara exterior del otro, que se detiene contra su lado) y **Square off** (como butt, y el muro que atraviesa termina a escuadra; en ángulo recto se ve como butt). **Next**, o {{key:Tab}}, hace que el otro muro sea el que atraviesa. La lista **Style** de la barra muestra la esquina en la que hiciste clic por última vez. Las mismas dos opciones están en **Propiedades** de un muro: **Join style at start / at end** y **Runs through**. Cada cambio es un paso en **Cambios**. La planta, el cuerpo 3D, los ambientes y las cantidades lo siguen.
- En una T, el muro al que se llega por el lado siempre atraviesa. Donde dos muros se cruzan, un clic (o **Continuous where it crosses** en Propiedades) dice cuál de los dos es continuo; eso decide qué capas del muro se dibujan a través del cruce.
- El estilo pertenece a la unión: se queda cuando los muros se mueven y se va solo cuando la unión desaparece (el muro se elimina, se divide en ese extremo, o el extremo recibe Disallow join). Una esquina con un muro curvo, o donde se encuentran tres o más muros, conserva el inglete. Una esquina más aguda que unos 30 grados, o más plana que unos 150, también vuelve al inglete.
- **Disallow join**: hacé clic cerca de un extremo de muro. Ese extremo queda libre: no se une a nada, dondequiera que vaya el muro, hasta que volvás a hacer clic en él. Los extremos libres se marcan con una cruz mientras la herramienta está activa. El mismo interruptor es **Join at start / Join at end** en Propiedades.
- **Layer priority**: donde se encuentran muros con capas, la capa más fuerte corta a la más débil, así los núcleos se unen con núcleos y un acabado se detiene contra la capa más fuerte. Cada capa tiene una prioridad de 0 a 999; por defecto sale de la función de la capa (estructura 800, sustrato 600, aislante 400, membrana 300, acabado 200, una cámara 100). {{ui:Layer priority}} abre la composición del muro, donde la columna **Priority** fija el número propio de una capa. Las capas con igual prioridad se detienen una contra otra, y se dibuja una línea solo entre materiales distintos. Se ve en las plantas con detalle **Medium** o **Fine**, en esquinas, uniones en T y cruces de dos muros rectos; Configuración › BimCraft › Muro-kuéra › **Clean wall layers where walls meet** lo desactiva. Cambia solo lo que se dibuja dentro de los muros: los contornos de los muros y sus cantidades quedan como los da el estilo de unión.

## Cambiar el tipo de muchos muros

Pasar de plantas de boceto a planos de trabajo es sobre todo un cambio de tipo: un muro genérico pasa a la composición específica. No se redibuja nada.

1. Elegí los muros (uno, o varios con {{key:Ctrl}} o {{key:Shift}}).
2. En Propiedades, presioná **Cambiar tipo…** bajo Tipo de muro (o abrí {{ui:Walls}} en el grupo Editar y elegí {{ui:Swap type}}, que abre la misma lista). La lista se abre dentro de Propiedades, en el bloque propio de los muros elegidos. No es un diálogo y no tapa nada: la planta, la vista 3D y la selección siguen funcionando mientras está abierta, y sigue a los muros que elegís.
3. La lista muestra cada tipo de muro con su espesor y su etiqueta LOD, por ejemplo "Wall 230 generic, LOD 200" y "230 clay brick, plastered both sides, LOD 300". Los tipos que tienen ahora los muros elegidos están marcados. Escribí en **Find** para filtrar: un nombre, un espesor, o `lod 300`.
4. Hacé clic en un tipo. Cada muro elegido cambia a él en un paso, así que un {{ui:Undo}} deshace todo el cambio. La pequeña x cierra la lista.

Cada muro conserva su línea de ubicación. Un muro sobre su eje crece hacia ambos lados; un muro cuya línea de ubicación es una cara conserva esa cara y crece hacia el otro lado, y los muros unidos a él la siguen en las esquinas. Los muros bloqueados a un muro cambiado también lo siguen. Las puertas y ventanas se quedan en sus muros y se recortan de nuevo para el nuevo espesor.

Después del cambio, la lista muestra **What moved**: cuántos muros cambiaron y a qué, el espesor y el LOD antes y después, los muros que se corrieron de costado para mantener su línea de ubicación, los muros unidos que siguieron, las puertas y ventanas alojadas de nuevo, y cada ambiente cuya superficie cambió con su superficie antes y después. La barra de estado dice lo mismo en una línea. El informe solo informa; nunca detiene un cambio. Elegir un tipo en **Propiedades › Tipo de muro** hace el mismo cambio y da el mismo informe.

Dos cosas detienen un cambio, y entonces no se cambia nada: una puerta o ventana que ya no entraría en su muro (un muro se acorta donde sigue una esquina; hacé la puerta más angosta o alejala de la esquina primero), y un bloqueo que el cambio rompería (un muro bloqueado a una línea de grilla por su eje mientras su línea de ubicación es una cara; desbloquealo o devolvé su línea de ubicación al eje).

Un asistente conectado a BimCraft puede hacer el mismo cambio (herramientas `wall_types_list` y `walls_swap_type`) y recibe el mismo informe.

La etiqueta LOD de un tipo se fija en el editor de composiciones de muro: ver [Composiciones de muro](topic:wall-assemblies).

## Desplazar y estirar en caja

- **Offset**: hacé clic en un muro, luego en el lado al que moverlo, o escribí la distancia. El muro se mueve en escuadra consigo mismo y los muros unidos a él se estiran. Marcá **Copy** para una copia paralela (no queda unida al original).
- **Box stretch**: hacé clic en dos esquinas de una caja, luego en un punto de origen y un punto de destino. Cada extremo de muro dentro de la caja se mueve; un muro totalmente dentro se mueve y los muros que llegan a él vienen también; los muros que cruzan la caja se estiran.

## Editar una cota y bloquearla

Elegí una cota de referencia (Anotar › {{ui:Reference dimension}}) y escribí su valor en **Propiedades**: el muro de su segunda referencia se mueve en escuadra consigo mismo, la primera referencia se mantiene y los muros unidos la siguen. Marcá **Lock this dimension** para conservar el valor: cuando después se mueve cualquiera de los dos muros, el otro lo sigue. Un valor bloqueado no se puede sobrescribir hasta que lo desmarques.

## Alinear y bloquear

**Align and lock**: hacé clic en una cara de muro (o en el eje, cerca del medio del muro) o en una línea de grilla, luego en la cara del muro que se va a llevar a esa línea. El muro se mueve en escuadra hasta ella. Marcá **Lock** primero para mantenerlos alineados: aparece un candado en la planta, y cuando un muro se mueve, el otro lo sigue. **Propiedades** de un muro lista sus **Locks**, cada uno con **Unlock**.

## Bloquear muros a líneas de grilla

Elegí un muro que corre a lo largo de una línea de grilla, o cuyo extremo está sobre una, y elegí la línea de grilla en **Propiedades** › **Lock to grid**. Después elegí la línea de grilla con la herramienta {{ui:Grid}} y escribí una distancia en {{ui:Move by}}: la línea se mueve en escuadra consigo misma y los muros bloqueados a ella la siguen, con sus muros unidos, en un paso. Un muro bloqueado a una línea de grilla no se puede sacar de ella por sí solo (mové la línea, o desbloqueá el muro); una línea de grilla girada de modo que un muro bloqueado no pueda quedar en escuadra sobre ella se rechaza. Renombrar la línea mantiene el bloqueo; eliminarla quita el bloqueo.

## Largo: qué lado se mantiene, y qué mide

- **Grow from** (Propiedades de un muro): **Start holds** (se mueve el extremo), **End holds** (se mueve el inicio) o **Centre holds** (se mueven ambos extremos la mitad). Mientras escribís el Length, la planta marca el punto que se mantiene. El muro unido al extremo que se mueve se mueve en escuadra consigo mismo y conserva su ángulo.
- **Measure from** (junto a Cotas en la planta, en Propiedades, y en Configuración › BimCraft › Muro-kuéra): el eje, la cara interior o la cara exterior. El campo Length y las cotas de muro de la planta leen lo mismo, así que coinciden. Empieza en el eje.
- Para mover un muro sin sus uniones (se rompen, el muro conserva su identidad), mantené {{key:Alt}} mientras arrastrás su agarre central.

## Bueno saber

- Estas recetas son las de la especificación de la herramienta de muros (páginas 4 a 9). El estilo de unión y la prioridad de capas están pensados para muros rectos; la prioridad de capas se ve solo en la planta (no en cortes, elevaciones ni 3D, donde un muro es un solo cuerpo), no en nodos de tres muros o más, y las membranas no se arrastran.
- El estilo de una unión se guarda en su registro del archivo IFC (el nombre de `IfcRelConnectsPathElements`, por ejemplo `CadCraft join L butt 1`), así otros programas siguen leyendo la unión, y un archivo más viejo se abre con ingletes.
- Los bloqueos y las uniones se guardan en el archivo IFC (los bloqueos como `CadCraft_WallHolds` en el proyecto, las uniones como `IfcRelConnectsPathElements`), así que siguen ahí cuando volvés a abrir el archivo.
- Los muros curvos se pueden dividir, reunir y quitarles un tramo; no se desplazan ni se bloquean.
- Ver también [Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door) y [Dar forma a un muro](topic:wall-shape).
