---
title: Revisar el modelo con un visor de VR
summary: Recorré el modelo IFC a tamaño real con un visor de VR: saltá, girá, medí, cortalo para abrirlo, colocá incidencias BCF con una imagen, vélo como maqueta de mesa y encontrá a los otros de una sesión en vivo.
keywords: vr, realidad virtual, visor, webxr, xr, inmersivo, quest, oculus, vive, pico, recorrer, recorrido, teletransporte, revisión de diseño, coordinación, revisión, medir, sección, corte, incidencia, incidencias, bcf, mesa, maqueta, presencia, avatares, en vivo, juntos
from: 8994b36d
---

{{ui:VR}} en la barra de herramientas te pone dentro del modelo con un visor de VR, a tamaño real. Estás parado donde está la cámara de la vista 3D, en el piso debajo de ella, mirando hacia el mismo lado. El visor muestra lo que muestra la vista 3D: los pisos, elementos y modelos ocultos siguen ocultos, y los materiales pintados vienen igual. No se sube nada: el navegador lo dibuja en esta computadora (o en el navegador del propio visor).

## Lo que necesitás

- Un visor que el navegador pueda manejar (WebXR): el navegador propio de un visor independiente, o Chrome o Edge en una PC con un visor conectado.
- Un modelo IFC abierto, en una página segura (https), como es en este sitio.

Cuando no hay visor, {{ui:VR}} aparece en gris y dice por qué.

## Empezar

1. Armá la vista 3D donde querés empezar: en un ambiente, o afuera mirando el edificio.
2. Hacé clic en {{ui:VR}} en la barra de herramientas.
3. Ponete el visor.

El menú está en el dorso de tu mano izquierda. Apuntalo con el control derecho y apretá el gatillo para elegir un botón. (Con una sola mano, el menú flota delante de donde empezaste.)

## Moverse

- **Saltar:** en {{ui:Move}}, apuntá a un piso y apretá el gatillo; aterrizás ahí. O empujá el stick hacia adelante para apuntar, y soltá para saltar. Solo podés aterrizar en pisos, losas y terreno (superficies que miran hacia arriba), nunca en un muro.
- **Girar:** empujá el stick a izquierda o derecha: girás 30° cada vez.
- **Caminar:** en tu área de juego, simplemente caminá.

## Medir

Elegí {{ui:Measure}} y apretá el gatillo en dos puntos. La distancia se muestra entre ellos, en metros. Un punto cerca de una esquina se engancha a la esquina.

## Cortar para abrir

Elegí {{ui:Section}} y apretá el gatillo sobre una superficie:

- en un muro (o cualquier cosa que no sea un piso): todo lo que está entre vos y esa superficie se corta, para que veas adentro. Funciona mejor desde afuera, o a través de un ambiente;
- en un piso, desde arriba: un corte de planta a 1,2 m sobre ese piso, para que los muros muestren su parte inferior.

{{ui:Clear}} quita el corte y las mediciones. Si un [plano de sección](topic:section-plane) corta el modelo al empezar, el visor arranca con él.

## Colocar una incidencia

Elegí {{ui:Issue}} y apretá el gatillo donde está el problema. Un alfiler numerado lo marca, y la incidencia pasa a la pestaña {{ui:Issues}} como tema BCF, con una imagen de lo que viste y la cámara donde estabas, en las coordenadas propias del modelo. Guardalas junto con el resto de tus [incidencias](topic:issues-bcf) como archivo BCF; otras herramientas de coordinación las abren en la misma vista.

Agregá un comentario a una incidencia después de salir de VR, en la pestaña de incidencias: escribir en el visor todavía no está hecho.

## Verlo como maqueta de mesa

{{ui:Table top}} reduce el modelo para que entre en una mesa delante de vos; caminá alrededor, o giralo con el stick. {{ui:Full size}} te devuelve a donde estabas.

## Con otros, en vivo

En una [sesión en vivo](topic:work-live), todos en VR ven a los otros como una cabeza y dos manos de su color, con su nombre, y un punto donde cada uno apunta. Las ediciones que cualquiera haga llegan a tu visor en un momento. Las personas en el escritorio todavía no se muestran en el visor.

## Salir

Elegí {{ui:Leave VR}} (o sacate el visor y terminá ahí). La vista 3D en la pantalla se mueve a donde estaba tu cabeza.

:::note
Probado con un emulador de visor, todavía no en todos los visores. Un modelo grande puede hacer que el visor se entrecorte: ocultá primero los pisos o modelos que no necesites ([ocultar y aislar](topic:hide-and-isolate)).
:::
