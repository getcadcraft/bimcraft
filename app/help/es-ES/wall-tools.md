---
title: Formas de muro, dividir, desfase, estirar con recuadro y bloquear
summary: Dibuje muros como rectángulo, polígono o arco, sobre líneas elegidas o alrededor de un contorno; divídalos, quite un tramo, desplácelos con desfase, estírelos con recuadro, alinéelos y bloquéelos entre sí, a una cota o a una línea de rejilla. Cada cambio mantiene los muros unidos y es un paso de deshacer.
keywords: cambiar tipo, cambiar tipo, reasignar tipo, qué se movió, LOD, nivel de desarrollo, estilo de unión, inglete, inglete, a tope, cortar a escuadra, uniones de muros, siguiente, pasante, no permitir unión, permitir unión, prioridad de capas, núcleo, prioridad, nudo, rectángulo, rectángulo girado, polígono, inscrito, circunscrito, arco, centro, centro, arco tangente, elegir líneas, tabulador, calcar, contorno, varita mágica, dividir, dividir con hueco, hueco, eliminar tramo, volver a unir, desfase, copiar, estirar con recuadro, recuadro de selección, estirar, alinear, bloquear, candado, restricción, bloquear cota, editar cota, rejilla, bloquear a la rejilla, mover línea de rejilla, desfase de colocación, unión desactivada, independiente, crecer desde, medir desde, eje, cara interior, cara exterior, desunir, Alt
from: 5b7d2f75
---

## Qué hará

Haga y cambie muros con las recetas de la herramienta de muro. Cada una termina igual que dibujar un muro por sus esquinas: las esquinas se unen solas, las uniones se guardan en el archivo, y todo el cambio es un paso en **Cambios** que {{ui:Deshacer}} revierte. Los muros conservan su identidad: un muro que divide, desplaza o estira sigue siendo el mismo muro, con sus puertas, ventanas y cotas.

## Dibujar un rectángulo, polígono o arco

Con {{ui:Dibujo}} activado, abra {{ui:Formas}} en el grupo Dibujo (o elija una forma en la lista **Forma** de la fila de Muro). La fila de Muro muestra el tipo de muro, la referencia de dibujo, el lado exterior y la parte superior, como para la herramienta {{ui:Muro}}. Después haga clic, o escriba los puntos (x,y · @dx,dy · @longitud<ángulo · una longitud a lo largo del puntero):

- **Rectángulo**: dos esquinas opuestas. Cuatro muros, cuatro uniones de esquina, un paso.
- **Rectángulo girado**: donde empieza y acaba el primer lado (eso fija su giro y su longitud), y después un tercer clic para el otro lado.
- **Polígono**: el centro, y después una esquina (**Inscrito**) o el punto medio de un lado (**Circunscrito**). Fije primero **Lados** (de 3 a 64).
- **Arco, centro**: el centro, el inicio (que fija el radio), el final. **Sentido de recorrido**: el camino más corto, en sentido antihorario o en sentido horario. Un barrido de más de tres cuartos de círculo se dibuja como dos muros.
- **Arco tangente**: haga clic en el extremo de un muro, y después en el punto donde termina el arco. El arco sale del extremo del muro en la dirección propia del muro.

Una forma cerrada tiene su exterior hacia fuera. Dibujada sobre la **Cara exterior** o la **Cara interior**, la cara en la que hace clic es la que se queda fija.

## Muros sobre líneas que ya tiene

- **Elegir líneas**: haga clic en una línea y un muro se coloca sobre ella. Pulse {{key:Tab}} (o mantenga pulsada {{key:Shift}} mientras hace clic) para tomar toda la cadena de líneas unidas de extremo a extremo. Las líneas son las líneas de dibujo de esta vista, la referencia de calco y las líneas de rejilla.
- **Calcar contorno**: haga clic dentro de un área cerrada por esas líneas o por muros. Los muros rodean la menor área alrededor del clic.

## Ajustar antes de dibujar: desfase y unión

La fila de Muro tiene dos campos más, que usan la herramienta {{ui:Muro}} y las formas:

- **Desfase**: los muros se dibujan a esta distancia de la línea en la que hace clic: + a su izquierda, − a su derecha, vistos en el sentido en que dibuja.
- **Unión**: desmárquelo para dibujar muros independientes. Sus extremos reciben **No permitir unión** y se quedan libres dondequiera que vayan (véase [Cambiar un muro](topic:change-a-wall-or-door)).

## Dividir, quitar un tramo, volver a unir

Abra {{ui:Muros}} en el grupo Editar.

- **Dividir**: haga clic en un muro donde debe cortarse, o escriba la distancia desde su inicio. Cerca de un muro que lo cruza, el corte encaja donde se encuentran. Las dos partes tienen el mismo tipo y quedan unidas de extremo a extremo. **Hueco** deja un espacio de esa longitud centrado en el corte. **Extremos libres** da en cambio a los extremos del corte **No permitir unión** (Configuración › BimCraft › Muros › **Al dividir un muro** fija cuál está marcada al principio). Una puerta o ventana va con la parte en la que está; un corte a través de una de ellas se rechaza.
- **Eliminar tramo**: haga clic donde empieza el tramo y donde termina. Una puerta en el tramo se elimina con él.
- **Volver a unir**: haga clic en las dos partes de un mismo muro (en línea, del mismo tipo). Vuelven a ser un solo muro, el primero en el que hizo clic, con las puertas de ambos.

## Estilo de unión, No permitir unión, prioridad de capas

Abra {{ui:Muros}} en el grupo Editar.

- **Estilo de unión**: haga clic en una esquina donde terminan dos muros rectos. Cada clic pasa al estilo siguiente: **Inglete** (ambos extremos cortados sobre la línea del interior al exterior de la esquina, con lo que empieza cada esquina), **A tope** (uno de los muros pasa hasta la cara exterior del otro, que se detiene contra su lado) y **Cortar a escuadra** (como a tope, y el muro que pasa acaba a escuadra; en ángulo recto parece a tope). **Siguiente**, o {{key:Tab}}, hace que el otro muro sea el que pasa. La lista **Estilo** de la barra muestra la esquina en la que hizo clic por última vez. Las mismas dos opciones están en **Propiedades** de un muro: **Estilo de unión al inicio / al final** y **Pasante**. Cada cambio es un paso en **Cambios**. La planta, el cuerpo 3D, las habitaciones y las cantidades lo siguen.
- En una T, el muro al que se llega por un lado siempre pasa. Donde se cruzan dos muros, un clic (o **Continuo en el cruce** en Propiedades) dice cuál de los dos es continuo; eso decide qué capas del muro se dibujan a través del cruce.
- El estilo pertenece a la unión: se mantiene cuando los muros se mueven y solo desaparece cuando la unión desaparece (se elimina el muro, se divide en ese extremo, o el extremo recibe No permitir unión). Una esquina con un muro curvo, o donde se encuentran tres o más muros, conserva el inglete. Una esquina más aguda que unos 30 grados, o más plana que unos 150, también vuelve al inglete.
- **No permitir unión**: haga clic cerca del extremo de un muro. Ese extremo queda libre: no se une a nada, dondequiera que vaya el muro, hasta que vuelva a hacer clic en él. Los extremos libres se marcan con una cruz mientras la herramienta está activa. El mismo interruptor es **Unir al inicio / Unir al final** en Propiedades.
- **Prioridad de capas**: donde se encuentran muros con capas, la capa más fuerte corta a la más débil, de modo que los núcleos se unen con núcleos y un acabado se detiene contra la capa más fuerte. Cada capa tiene una prioridad de 0 a 999; por defecto procede de la función de la capa (estructura 800, sustrato 600, aislamiento 400, membrana 300, acabado 200, una cámara 100). **Prioridad de capas** abre la composición de muro, donde la columna **Prioridad** fija el número propio de una capa. Las capas de igual prioridad se detienen unas contra otras, y una línea se dibuja solo entre materiales distintos. Lo ve en las plantas con detalle **Medio** o **Fino**, en las esquinas, en las uniones en T y en los cruces de dos muros rectos; Configuración › BimCraft › Muros › **Limpiar las capas de muro donde se encuentran los muros** lo desactiva. Solo cambia lo que se dibuja dentro de los muros: los contornos y las cantidades de los muros se mantienen según les da el estilo de unión.

## Cambiar el tipo de muchos muros

Pasar de planos de esbozo a planos de trabajo es sobre todo un cambio de tipo: un muro genérico se convierte en la composición concreta. No hay que redibujar nada.

1. Elija los muros (uno, o varios con {{key:Ctrl}} o {{key:Shift}}).
2. En Propiedades, pulse **Cambiar tipo…** bajo Tipo de muro (o abra {{ui:Muros}} en el grupo Editar y elija {{ui:Cambiar tipo}}, que abre la misma lista). La lista se abre dentro de Propiedades, en el bloque propio de los muros elegidos. No es un cuadro de diálogo y no tapa nada: la planta, la vista 3D y la selección siguen funcionando mientras está abierta, y sigue a los muros que elija.
3. La lista muestra cada tipo de muro con su espesor y su etiqueta LOD, por ejemplo "Wall 230 generic, LOD 200" y "230 clay brick, plastered both sides, LOD 300". Los tipos que tienen ahora los muros elegidos aparecen marcados. Escriba en **Buscar** para reducirla: un nombre, un espesor, o `lod 300`.
4. Haga clic en un tipo. Cada muro elegido cambia a él en un solo paso, así que un {{ui:Deshacer}} revierte todo el cambio. La pequeña x cierra la lista.

Cada muro conserva su línea de referencia. Un muro sobre su eje crece hacia ambos lados; un muro cuya línea de referencia es una cara mantiene esa cara y crece hacia el otro lado, y los muros unidos a él le siguen en las esquinas. Los muros bloqueados a un muro cambiado también le siguen. Las puertas y ventanas se quedan en sus muros y se vuelven a cortar para el nuevo espesor.

Tras el cambio, la lista muestra **Qué se movió**: cuántos muros han cambiado y a qué, el espesor y el LOD antes y después, los muros que se desplazaron de lado para conservar su línea de referencia, los muros unidos que le siguieron, las puertas y ventanas alojadas de nuevo, y cada habitación cuya superficie cambió, con su superficie antes y después. La barra de estado dice lo mismo en una línea. El informe solo informa: nunca detiene un cambio. Elegir un tipo en **Propiedades › Tipo de muro** hace el mismo cambio y da el mismo informe.

Dos cosas sí detienen un cambio, y entonces no se cambia nada: una puerta o ventana que ya no cabría en su muro (un muro se acorta donde una esquina le sigue; haga la puerta más estrecha o muévala antes lejos de la esquina), y un bloqueo que el cambio rompería (un muro bloqueado a una línea de rejilla por su eje mientras su línea de referencia es una cara; desbloquéelo o devuelva su línea de referencia al eje).

Un asistente conectado a BimCraft puede hacer el mismo cambio (herramientas `wall_types_list` y `walls_swap_type`) y recibe el mismo informe.

La etiqueta LOD de un tipo se fija en el editor de composiciones de muro: véase [Composiciones de muro](topic:wall-assemblies).

## Desfase y estirar con recuadro

- **Desfase**: haga clic en un muro, y después en el lado al que moverlo, o escriba la distancia. El muro se mueve perpendicular a sí mismo y los muros unidos a él se estiran. Marque **Copiar** para obtener en cambio una copia paralela (no está unida al original).
- **Estirar con recuadro**: haga clic en dos esquinas de un recuadro, y después en un punto desde el que mover y un punto hasta el que mover. Se mueve cada extremo de muro dentro del recuadro; un muro totalmente dentro se mueve, y los muros que topan con él también; los muros que cruzan el recuadro se estiran.

## Editar una cota y bloquearla

Elija una cota de referencia (Anotar › {{ui:Cota de referencia}}) y escriba su valor en **Propiedades**: el muro de su segunda referencia se mueve perpendicular a sí mismo, la primera referencia se mantiene y los muros unidos le siguen. Marque **Bloquear esta cota** para conservar el valor: cuando después se mueva cualquiera de los dos muros, el otro le sigue. Un valor bloqueado no puede sobrescribirse hasta que lo desmarque.

## Alinear y bloquear

**Alinear y bloquear**: haga clic en una cara de muro (o en el eje, cerca del centro del muro) o en una línea de rejilla, y después en la cara del muro que se va a llevar a esa línea. El muro se mueve perpendicular hasta ella. Marque **Bloquear** primero para mantenerlos alineados: aparece un candado en la planta, y cuando un muro se mueve, el otro le sigue. **Propiedades** de un muro enumera sus **Bloqueos**, cada uno con **Desbloquear**.

## Bloquear muros a líneas de rejilla

Elija un muro que vaya a lo largo de una línea de rejilla, o cuyo extremo esté sobre una, y elija la línea de rejilla en **Propiedades** › **Bloquear a la rejilla**. Después elija la línea de rejilla con la herramienta {{ui:Retícula}} y escriba una distancia en {{ui:Mover en}}: la línea se mueve perpendicular a sí misma y los muros bloqueados a ella le siguen, con sus muros unidos, en un solo paso. Un muro bloqueado a una línea de rejilla no puede salirse de ella por sí mismo (mueva la línea, o desbloquee el muro); una línea de rejilla girada de modo que un muro bloqueado no pueda seguir perpendicular a ella se rechaza. Renombrar la línea mantiene el bloqueo; eliminarla quita el bloqueo.

## Longitud: qué lado se mantiene, y qué mide

- **Crecer desde** (Propiedades de un muro): **El inicio se mantiene** (se mueve el extremo), **El final se mantiene** (se mueve el inicio) o **El centro se mantiene** (ambos extremos se mueven la mitad). Mientras escribe la Longitud, la planta marca el punto que se mantiene. El muro unido en el extremo que se mueve se mueve perpendicular a sí mismo y conserva su ángulo.
- **Medir desde** (junto a Dimensiones en la planta, en Propiedades y en Configuración › BimCraft › Muros): el eje, la cara interior o la cara exterior. El campo Longitud y las cotas de muro de la planta leen lo mismo, así que coinciden. Empieza en el eje.
- Para mover un muro sin sus uniones (se rompen, y el muro conserva su identidad), mantenga pulsada {{key:Alt}} mientras arrastra su pinzamiento central.

## Información útil

- Estas recetas son las de la especificación de la herramienta de muro (páginas 4 a 9). El estilo de unión y la prioridad de capas están pensados para muros rectos; la prioridad de capas solo se ve en la planta (no en secciones, alzados ni 3D, donde un muro es un solo cuerpo), no en nudos de tres muros o más, y las membranas no se propagan.
- El estilo de una unión se guarda en su registro del archivo IFC (el nombre del `IfcRelConnectsPathElements`, por ejemplo `CadCraft join L butt 1`), de modo que otros programas siguen leyendo la unión, y un archivo más antiguo se abre con ingletes.
- Los bloqueos y las uniones se guardan en el archivo IFC (los bloqueos como `CadCraft_WallHolds` en el proyecto, las uniones como `IfcRelConnectsPathElements`), por lo que siguen ahí al volver a abrir el archivo.
- Los muros curvos pueden dividirse, volver a unirse y tener un tramo quitado; no se desplazan con desfase ni se bloquean.
- Véase también [Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door) y [Dar forma a un muro](topic:wall-shape).
