---
title: "Sistemas de muro cortina: muros acristalados en una retícula, con parteluces"
summary: Dibuje un sistema de muro cortina como un muro o colóquelo sobre una cara, y después defina sus líneas de retícula y sus parteluces. Se guarda como IfcCurtainWall con sus paneles y parteluces.
keywords: sistema de muro cortina, muro cortina, retícula de muro cortina, parteluz, acristalado, fachada de tienda, muro de vidrio, panel, paño, por cara, cara, masa, línea de retícula, separación, perfil, travesaño, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Qué hará

Cree un muro acristalado de paños entre parteluces, cambie la posición de sus líneas de retícula y elija qué líneas llevan parteluz.

## Pasos

1. Active **Dibujo** y abra el menú **Construir** (en un diseño con cinta: la pestaña Arquitectura).
2. Elija **Sistema de muro cortina**. En su fila defina la parte superior (el nivel de arriba, o una altura), una línea cada cierta distancia a lo largo, una línea cada cierta distancia hacia arriba (déjela vacía para ninguna), si lleva parteluces, y el perfil del parteluz.
3. Haga clic donde empieza y donde termina, como al dibujar un muro. Shift lo mantiene cuadrado.
4. Para cambiar la retícula elija **Retícula de muro cortina** y haga clic en el sistema:
   - **Agregar una línea**: una línea vertical va donde haga clic. Para una línea de nivel, primero escriba su altura en **En**.
   - **Mover una línea**: haga clic en la línea y luego donde debe ir.
   - **Quitar una línea**: haga clic en la línea.
   - **Definir por separación**: escriba la separación en **Cada**, luego haga clic en el sistema.
5. Para cambiar parteluces elija **Parteluz**, indique sobre qué actúa (la línea vertical en la que haga clic, la línea de nivel a una altura, el borde, o todas las líneas), elija **Colocar parteluces** o **Quitar parteluces** y un perfil, luego haga clic en el sistema.
6. Seleccione un sistema para ver todo en **Propiedades**: cada línea de retícula con su lugar, una marca para su parteluz y un botón para quitarla; la separación; el borde; el perfil; el grosor del paño.

## Por cara

**Por cara** crea un sistema de muro cortina sobre una cara plana que haga clic en la vista 3D. Su fila tiene las mismas opciones de retícula y parteluces.

- Funciona en cualquier cara plana de cualquier elemento que muestre la vista 3D: una masa, un muro, un piso, un plano de cubierta, una columna, un elemento colocado. La cara puede ser vertical, inclinada o horizontal.
- El sistema toma el contorno de la cara. Un hastial u otra forma irregular recorta los paños y los parteluces a esa forma.
- Puede hacer un **muro** en su lugar, a lo largo del pie de una cara vertical y tan alto como la cara. Aquí un muro siempre queda vertical, así que una cara inclinada u horizontal no puede tomar uno.
- No hace una cubierta. Una cubierta en BimCraft se calcula a partir del contorno de un nivel y de una pendiente, no de una sola cara.
- Una cara curva son muchas caras planas pequeñas: un clic toma una de ellas.
- Una cara con vanos: el sistema cubre el contorno exterior de la cara.

## Cómo se mide

- **Área bruta** es el contorno del sistema.
- **Área de vidrio** son los paños tal como se hacen: cada paño pierde la mitad del ancho de un parteluz en un lado con parteluz de retícula, y un ancho completo en un parteluz de borde.
- Un parteluz vertical va de borde a borde. Un parteluz horizontal se detiene en cada parteluz vertical y en el borde. Los parteluces de borde quedan dentro del contorno; donde se encuentran dos, el más vertical pasa de largo. Las juntas se cortan a escuadra, no a inglete.
- **Cuadros** tiene una lista de **Sistemas de muro cortina** con estos números una vez que el modelo tiene uno.

## En el archivo IFC

Un IfcCurtainWall en su nivel, formado por un IfcPlate (panel de muro cortina) por cada paño y un IfcMember (parteluz) por cada pieza de parteluz, cada uno con su propia forma, material y cantidades base.

## Cosas que conviene saber

- Cualquier tamaño se hace como lo pida. Solo se rechaza un contorno sin área, porque no hay nada que hacer.
- Un sistema dibujado como muro conserva la altura con que se dibujó. Si mueve un nivel después, vuelva a definir su altura en Propiedades.
- La herramienta Mover todavía no mueve un sistema de muro cortina. Elimínelo y vuelva a dibujarlo, o cambie su retícula en el mismo lugar.
- {{ui:Deshacer}} deshace cada paso: el sistema completo, un cambio de retícula, un cambio de parteluces.
