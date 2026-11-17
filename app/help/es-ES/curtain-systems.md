---
title: "Sistemas de muro cortina: muros acristalados en una cuadrícula, con montantes"
summary: "Dibuje un sistema de muro cortina como un muro o colóquelo sobre una cara, y después defina sus líneas de cuadrícula y sus montantes. Se guarda como IfcCurtainWall con sus paños y montantes."
keywords: sistema de muro cortina, muro cortina, cuadrícula de muro cortina, montante, acristalamiento, escaparate, muro de vidrio, panel, paño, por cara, cara, volumen, línea de cuadrícula, separación, perfil, travesaño, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Qué va a hacer

Hacer un muro acristalado formado por paños entre montantes, cambiar la posición de sus líneas de cuadrícula y elegir qué líneas llevan montante.

## Pasos

1. Active **Dibujo** y abra el menú **Construir** (en un diseño de cinta: la pestaña Arquitectura).
2. Elija **Sistema de muro cortina**. En su fila defina la parte superior (la planta de encima, o una altura), una línea cada cierta distancia a lo largo, una línea cada cierta distancia hacia arriba (déjelo vacío si no hay ninguna), si lleva montantes y el perfil del montante.
3. Haga clic donde empieza y donde termina, como al dibujar un muro. Shift mantiene el sistema cuadrado.
4. Para cambiar la cuadrícula, elija **Cuadrícula de muro cortina** y haga clic en el sistema:
   - **Agregar una línea**: una línea vertical va donde haga clic. Para una línea horizontal, escriba antes su altura en **En**.
   - **Mover una línea**: haga clic en la línea y después donde debe ir.
   - **Quitar una línea**: haga clic en la línea.
   - **Definir por separación**: escriba la separación en **Cada**, y después haga clic en el sistema.
5. Para cambiar los montantes, elija **Montante**, seleccione sobre qué actúa (la línea vertical en la que hace clic, la línea horizontal a una altura, el borde o todas las líneas), elija **Colocar montantes** o **Quitar montantes** y un perfil, y después haga clic en el sistema.
6. Seleccione un sistema para ver todo en **Propiedades**: cada línea de cuadrícula con su posición, una marca para su montante y un botón para quitarla; la separación; el borde; el perfil; el espesor del paño.

## Por cara

**Por cara** crea un sistema de muro cortina sobre una cara plana que haga clic en la vista 3D. Su fila tiene los mismos ajustes de cuadrícula y montantes.

- Funciona sobre cualquier cara plana de cualquier elemento que muestre la vista 3D: un volumen, un muro, un suelo, un plano de cubierta, un pilar, un elemento colocado. La cara puede ser vertical, inclinada u horizontal.
- El sistema toma el contorno de la cara. Un hastial u otra forma irregular recorta los paños y los montantes a ese contorno.
- Puede crear un **muro** en su lugar, a lo largo del pie de una cara vertical y tan alto como la cara. Un muro aquí siempre es vertical, así que una cara inclinada u horizontal no puede dar lugar a uno.
- No crea una cubierta. Una cubierta en BimCraft se calcula a partir del contorno de una planta y de una pendiente, no a partir de una sola cara.
- Una cara curva son muchas caras planas pequeñas: un clic toma una de ellas.
- Una cara con huecos: el sistema cubre el contorno exterior de la cara.

## Cómo se mide

- La **superficie bruta** es el contorno del sistema.
- La **superficie de vidrio** son los paños tal como están hechos: cada paño pierde medio ancho de montante por un lado cuando hay un montante de cuadrícula, y un ancho completo en un montante de borde.
- Un montante vertical atraviesa de borde a borde. Un montante horizontal se detiene en cada montante vertical y en el borde. Los montantes de borde quedan dentro del contorno; donde se encuentran dos, el más vertical atraviesa. Las uniones se cortan a escuadra, no a inglete.
- **Tablas** tiene una lista de **Sistemas de muro cortina** con estos números, una vez que el modelo tiene alguno.

## En el archivo IFC

Un IfcCurtainWall en su planta, formado por un IfcPlate (panel de muro cortina) por cada paño y un IfcMember (montante) por cada tramo de montante, cada uno con su propia forma, material y cantidades base.

## Conviene saber

- Cualquier tamaño se crea tal como lo pida. Solo se rechaza un contorno sin área, porque no hay nada que crear.
- Un sistema dibujado como muro conserva la altura con la que se dibujó. Si cambia después una planta, vuelva a definir su altura en **Propiedades**.
- La herramienta Mover todavía no mueve un sistema de muro cortina. Elimínelo y vuelva a dibujarlo, o cambie su cuadrícula en el mismo sitio.
- Deshacer retira cada paso: el sistema completo, un cambio de cuadrícula o un cambio de montantes.
