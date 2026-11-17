---
title: Formas de muro, dividir, desfasar, estirar y bloquear
summary: Dibuje muros como rectángulo, polígono o arco, sobre líneas elegidas o alrededor de un contorno; divídalos, quite un tramo, desfáselos, estírelos por recuadro, alinéelos y bloquéelos entre sí, a una cota o a una línea de rejilla. Cada cambio mantiene los muros unidos y es un solo paso de deshacer.
keywords: cambiar tipo, retipar, qué se movió, lod, nivel de desarrollo, estilo de unión, inglete, a tope, a escuadra, uniones de muros, siguiente, pasa por, no permitir unión, permitir unión, prioridad de capa, núcleo, prioridad, cruce, rectángulo, rectángulo girado, polígono, inscrito, circunscrito, arco, centro, arco tangente, elegir líneas, tab, calcar, contorno, varita mágica, dividir, dividir con separación, separación, eliminar segmento, volver a unir, desfase, copiar, estirar por recuadro, recuadro, estirar, alinear, bloquear, candado, restricción, bloquear cota, editar cota, rejilla, bloquear a rejilla, mover línea de rejilla, desfase de colocación, unión desactivada, exento, crecer desde, medir desde, línea central, cara interior, cara exterior, separar, alt
from: 5b7d2f75
---

## Qué hará

Haga y cambie muros con las recetas de la herramienta de muro. Cada una termina igual que dibujar un muro por sus esquinas: las esquinas se unen solas, las uniones se guardan en el archivo, y todo el cambio es un paso en **Cambios** que {{ui:Deshacer}} revierte. Los muros conservan su identidad: un muro que divide, desfasa o estira sigue siendo el mismo muro, con sus puertas, ventanas y cotas.

## Dibujar un rectángulo, un polígono o un arco

Con {{ui:Dibujo}} activado, abra {{ui:Formas}} en el grupo Dibujo (o elija una forma en la lista **Forma** de la fila Muro). La fila Muro muestra el tipo de muro, la referencia de dibujo, el lado exterior y la parte superior, como para la herramienta {{ui:Muro}}. Luego haga clic, o escriba los puntos (x,y · @dx,dy · @longitud<ángulo · una longitud a lo largo del puntero):

- **Rectángulo**: dos esquinas opuestas. Cuatro muros, cuatro uniones de esquina, un paso.
- **Rectángulo girado**: donde empieza y termina el primer lado (eso fija su giro y su longitud), y luego un tercer clic para el otro lado.
- **Polígono**: el centro, luego una esquina (**Inscrito**) o el punto medio de un lado (**Circunscrito**). Defina **Lados** (de 3 a 64) primero.
- **Arco, por centro**: el centro, el inicio (que fija el radio), el final. **Sentido**: el camino más corto, antihorario u horario. Un barrido de tres cuartos de círculo se dibuja como dos muros.
- **Arco tangente**: haga clic en el extremo de un muro, luego en el punto donde termina el arco. El arco sale del extremo del muro en la dirección propia del muro.

Una forma cerrada recibe su exterior hacia afuera. Dibujada sobre la **Cara exterior** o la **Cara interior**, la cara en la que hace clic es la que se queda fija.

## Muros sobre líneas que ya tiene

- **Elegir líneas**: haga clic en una línea y se coloca un muro sobre ella. Pulse {{key:Tab}} (o mantenga {{key:Shift}} mientras hace clic) para tomar toda la cadena de líneas unidas de extremo a extremo. Las líneas son las líneas de dibujo de esta vista, la referencia de calco y las líneas de rejilla.
- **Calcar contorno**: haga clic dentro de un área cerrada por esas líneas o por muros. Los muros rodean la menor área alrededor del clic.

## Antes de dibujar: desfase y unión

La fila Muro tiene dos campos más, usados por la herramienta {{ui:Muro}} y por las formas:

- **Desfase**: los muros se dibujan a esta distancia de la línea en que hace clic: + a su izquierda, − a su derecha, visto como usted dibuja.
- **Unión**: desmárquelo para dibujar muros exentos. Sus extremos reciben **No permitir unión** y quedan libres donde sea que vayan (vea [Cambiar un muro](topic:change-a-wall-or-door)).

## Dividir, quitar un tramo, volver a unir

Abra {{ui:Muros}} en el grupo Editar.

- **Dividir**: haga clic en un muro donde debe cortarse, o escriba la distancia desde su inicio. Cerca de un muro que lo cruza, el corte se ajusta al punto donde se encuentran. Las dos partes tienen el mismo tipo y quedan unidas de extremo a extremo. **Separación** deja un espacio de esa longitud centrado en el corte. **Extremos libres** da a los extremos cortados la opción No permitir unión (Configuración › BimCraft › Muros › **Al dividir un muro** indica cuál queda marcada al inicio). Una puerta o ventana va con la parte en que está; un corte que la atraviese se rechaza.
- **Eliminar segmento**: haga clic donde empieza el tramo y donde termina. Una puerta en el tramo se va con él.
- **Volver a unir**: haga clic en las dos partes de un mismo muro (alineadas, del mismo tipo). Vuelven a ser un solo muro, el primero en el que hizo clic, con las puertas de ambos.

## Estilo de unión, no permitir unión, prioridad de capa

Abra {{ui:Muros}} en el grupo Editar.

- **Estilo de unión**: haga clic en una esquina donde terminan dos muros rectos. Cada clic pasa al siguiente estilo: **Inglete** (ambos extremos cortados sobre la línea del interior al exterior de la esquina, que es con lo que empieza cada esquina), **A tope** (un muro pasa hasta la cara exterior del otro, que se detiene contra su lado) y **A escuadra** (como a tope, y el muro que pasa termina en escuadra; en ángulo recto se ve como a tope). **Siguiente**, o {{key:Tab}}, hace que el otro muro sea el que pasa. La lista **Estilo** de la barra muestra la esquina en la que hizo clic por última vez. Las mismas dos opciones están en **Propiedades** de un muro: **Estilo de unión al inicio / al final** y **Pasa por**. Cada cambio es un paso en **Cambios**. La planta, el cuerpo 3D, los cuartos y las cantidades lo siguen.
- En una T, el muro al que se llega por el costado siempre pasa. Donde dos muros se cruzan, un clic (o **Continuo donde se cruza** en Propiedades) dice cuál de los dos es continuo; eso decide qué capas del muro se dibujan a través del cruce.
- El estilo pertenece a la unión: se queda cuando los muros se mueven y solo se va cuando la unión desaparece (el muro se elimina, se divide en ese extremo, o el extremo recibe No permitir unión). Una esquina con un muro curvo, o donde se encuentran tres o más muros, conserva el inglete. Una esquina más aguda que unos 30 grados, o más plana que unos 150, también vuelve al inglete.
- **No permitir unión**: haga clic cerca del extremo de un muro. Ese extremo queda libre: no se une a nada, donde sea que vaya el muro, hasta que vuelva a hacer clic en él. Los extremos libres se marcan con una cruz mientras la herramienta está activa. El mismo interruptor es **Unir al inicio / Unir al final** en Propiedades.
- **Prioridad de capa**: donde se encuentran muros con capas, la capa más fuerte corta a la más débil, así los núcleos se unen con núcleos y un acabado se detiene contra la capa más fuerte. Cada capa tiene una prioridad de 0 a 999; por defecto sale de la función de la capa (estructura 800, sustrato 600, aislamiento 400, membrana 300, acabado 200, cámara 100). {{ui:Prioridad de capa}} abre el ensamble de muro, donde la columna **Prioridad** define el número propio de una capa. Las capas de igual prioridad se detienen entre sí, y una línea se dibuja solo entre materiales distintos. Se ve en planos con detalle **Medio** o **Fino**, en esquinas, uniones en T y cruces de dos muros rectos; Configuración › BimCraft › Muros › **Limpiar capas de muro donde se encuentran los muros** lo desactiva. Solo cambia lo que se dibuja dentro de los muros: los contornos y las cantidades de los muros se quedan como los da el estilo de unión.

## Cambiar el tipo de muchos muros

Pasar de planos de croquis a planos de trabajo es sobre todo un cambio de tipo: un muro genérico se convierte en la composición específica. No hay que redibujar nada.

1. Elija los muros (uno, o varios con {{key:Ctrl}} o {{key:Shift}}).
2. En Propiedades, pulse **Cambiar tipo…** bajo Tipo de muro (o abra {{ui:Muros}} en el grupo Editar y elija {{ui:Cambiar tipo}}, que abre la misma lista). La lista se abre dentro de Propiedades, en el bloque propio de los muros elegidos. No es un cuadro de diálogo y no tapa nada: la planta, la vista 3D y la selección siguen funcionando mientras está abierta, y la lista sigue a los muros que elige.
3. La lista muestra cada tipo de muro con su espesor y su etiqueta LOD, por ejemplo "Muro 230 genérico, LOD 200" y "230 ladrillo de arcilla, revocado de ambos lados, LOD 300". Los tipos que tienen ahora los muros elegidos se marcan. Escriba en **Buscar** para filtrar: un nombre, un espesor o `lod 300`.
4. Haga clic en un tipo. Cada muro elegido cambia a él en un solo paso, así que un {{ui:Deshacer}} revierte todo el cambio. La pequeña x cierra la lista.

Cada muro conserva su línea de ubicación. Un muro sobre su línea central crece hacia ambos lados; un muro cuya línea de ubicación es una cara conserva esa cara y crece hacia el otro lado, y los muros unidos a él lo siguen en las esquinas. Los muros bloqueados a un muro cambiado también lo siguen. Las puertas y ventanas se quedan en sus muros y se recortan de nuevo para el nuevo espesor.

Después del cambio, la lista muestra **Qué se movió**: cuántos muros cambiaron y a qué, el espesor y el LOD antes y después, los muros que se movieron de lado para conservar su línea de ubicación, los muros unidos que siguieron, las puertas y ventanas alojadas de nuevo, y cada cuarto cuya área cambió, con su área antes y después. La barra de estado dice lo mismo en una línea. El informe solo informa; nunca detiene un cambio. Elegir un tipo en **Propiedades › Tipo de muro** hace el mismo cambio y da el mismo informe.

Dos cosas sí detienen un cambio, y entonces no se cambia nada: una puerta o ventana que ya no quepa en su muro (un muro se acorta donde sigue una esquina; haga la puerta más angosta o aléjela de la esquina primero), y un bloqueo que el cambio rompería (un muro bloqueado a una línea de rejilla por su línea central mientras su línea de ubicación es una cara; desbloquéelo o devuelva su línea de ubicación a la línea central).

Un asistente conectado a BimCraft puede hacer el mismo cambio (herramientas `wall_types_list` y `walls_swap_type`) y recibe el mismo informe.

La etiqueta LOD de un tipo se define en el editor de ensambles de muro: vea [Ensambles de muro](topic:wall-assemblies).

## Desfase y estirar por recuadro

- **Desfase**: haga clic en un muro, luego en el lado al que moverlo, o escriba la distancia. El muro se mueve en escuadra consigo mismo y los muros unidos a él se estiran. Marque **Copiar** para una copia paralela (no queda unida al original).
- **Estirar por recuadro**: haga clic en dos esquinas de un recuadro, luego en un punto desde el cual mover y un punto hacia el cual mover. Cada extremo de muro dentro del recuadro se mueve; un muro completamente dentro se mueve, y los muros que topan contra él también; los muros que cruzan el recuadro se estiran.

## Editar una cota y bloquearla

Elija una cota de referencia (Anotar › {{ui:Cota de referencia}}) y escriba su valor en **Propiedades**: el muro de su segunda referencia se mueve en escuadra consigo mismo, la primera referencia se mantiene y los muros unidos la siguen. Marque **Bloquear esta cota** para conservar el valor: cuando después se mueva cualquiera de los dos muros, el otro lo sigue. Un valor bloqueado no se puede sobrescribir hasta que lo desmarque.

## Alinear y bloquear

**Alinear y bloquear**: haga clic en una cara de muro (o en la línea central, cerca del centro del muro) o en una línea de rejilla, luego en la cara del muro que va a llevar a esa línea. El muro se mueve en escuadra hasta ella. Marque **Bloquear** primero para mantenerlos alineados: aparece un candado en la planta, y cuando un muro se mueve el otro lo sigue. **Propiedades** de un muro lista sus **Bloqueos**, cada uno con **Desbloquear**.

## Bloquear muros a líneas de rejilla

Elija un muro que corra sobre una línea de rejilla, o cuyo extremo esté sobre una, y elija la línea de rejilla en **Propiedades** › **Bloquear a rejilla**. Luego elija la línea de rejilla con la herramienta {{ui:Retícula}} y escriba una distancia en {{ui:Mover en}}: la línea se mueve en escuadra consigo misma, y los muros bloqueados a ella la siguen con sus muros unidos, en un solo paso. Un muro bloqueado a una línea de rejilla no puede salirse de ella por sí solo (mueva la línea, o desbloquee el muro); una línea de rejilla girada de modo que un muro bloqueado no pueda quedar en escuadra sobre ella se rechaza. Renombrar la línea conserva el bloqueo; eliminarla quita el bloqueo.

## Longitud: qué lado se mantiene y qué mide

- **Crecer desde** (Propiedades de un muro): **El inicio se mantiene** (se mueve el extremo), **El final se mantiene** (se mueve el inicio) o **El centro se mantiene** (ambos extremos se mueven la mitad). Mientras escribe la Longitud, la planta marca el punto que se mantiene. El muro unido en el extremo que se mueve se mueve en escuadra consigo mismo y conserva su ángulo.
- **Medir desde** (junto a {{ui:Dimensiones}} en la planta, en Propiedades y en Configuración › BimCraft › Muros): la línea central, la cara interior o la cara exterior. El campo Longitud y las cotas de muro de la planta leen lo mismo, así que coinciden. Empieza en la línea central.
- Para mover un muro libre de sus uniones (se rompen, pero el muro conserva su identidad), mantenga {{key:Alt}} mientras arrastra su pinzamiento central.

## Para tener en cuenta

- Estas recetas son las de la especificación de la herramienta de muro (páginas 4 a 9). El estilo de unión y la prioridad de capa están hechos para muros rectos; la prioridad de capa se ve solo en la planta (no en secciones, alzados ni 3D, donde un muro es un solo cuerpo), no en nodos de tres muros o más, y las membranas no se trasladan.
- El estilo de una unión se guarda en su registro del archivo IFC (el nombre del `IfcRelConnectsPathElements`, por ejemplo `CadCraft join L butt 1`), así que otros programas siguen leyendo la unión, y un archivo anterior se abre con ingletes.
- Los bloqueos y las uniones se guardan en el archivo IFC (los bloqueos como `CadCraft_WallHolds` en el proyecto, las uniones como `IfcRelConnectsPathElements`), así que siguen ahí cuando vuelve a abrir el archivo.
- Los muros curvos se pueden dividir, volver a unir y quitarles un tramo; no se desfasan ni se bloquean.
- Vea también [Dibujar muros](topic:draw-walls), [Cambiar un muro, puerta o ventana](topic:change-a-wall-or-door) y [Dar forma a un muro](topic:wall-shape).
