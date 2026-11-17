---
title: Revisar el modelo con un casco de RV
summary: Recorra el modelo IFC a tamaño real con un casco de RV: desplácese, gire, mida, corte el modelo, coloque incidencias BCF con una imagen, véalo como maqueta de mesa y reúnase con los otros integrantes de una sesión en vivo.
keywords: rv, realidad virtual, casco, webxr, xr, inmersivo, quest, oculus, vive, index, pico, recorrer, recorrido, teletransporte, revisión de diseño, coordinación, revisión, medir, sección, cortar, incidencia, incidencias, bcf, maqueta, modelo a escala, presencia, avatares, en vivo, juntos
from: 8994b36d
---

{{ui:RV}} en la barra de herramientas lo pone dentro del modelo con un casco de RV, a tamaño real. Usted se para donde está la cámara de la vista 3D, sobre el piso bajo ella, mirando hacia el mismo lado. El casco muestra lo que muestra la vista 3D: los niveles, elementos y modelos ocultos siguen ocultos, y los materiales pintados se conservan. Nada se sube: el navegador lo dibuja en esta computadora (o en el navegador del propio casco).

## Lo que necesita

- Un casco que el navegador pueda manejar (WebXR): el navegador propio de un casco independiente, o Chrome o Edge en una computadora con un casco conectado.
- Un modelo IFC abierto, en una página segura (https), como lo está en este sitio.

Cuando no hay casco, {{ui:RV}} aparece atenuado y dice por qué.

## Inicio

1. Arme la vista 3D donde quiere empezar: en un cuarto, o afuera mirando el edificio.
2. Haga clic en {{ui:RV}} en la barra de herramientas.
3. Póngase el casco.

El menú está en el dorso de su mano izquierda. Apúntelo con el control derecho y oprima el gatillo para elegir un botón. (Con una sola mano, el menú flota frente al lugar donde empezó.)

## Moverse

- **Saltar:** en {{ui:Desplazar}}, apunte a un piso y oprima el gatillo; aterriza ahí. O empuje la palanca hacia adelante para apuntar, y suéltela para saltar. Solo puede aterrizar en pisos, losas y terreno (superficies que miran hacia arriba), nunca en un muro.
- **Girar:** empuje la palanca a la izquierda o a la derecha: gira 30° cada vez.
- **Caminar:** en su área de juego, simplemente camine.

## Medir

Elija {{ui:Medir}}, luego oprima el gatillo en dos puntos. La distancia se muestra entre ellos, en metros. Un punto cerca de una esquina se ajusta a la esquina.

## Cortar el modelo

Elija {{ui:Sección}} y oprima el gatillo sobre una superficie:

- en un muro (o cualquier cosa que no sea un piso): todo lo que está entre usted y esa superficie se corta y aparta, para que vea hacia adentro. Funciona mejor desde afuera, o a través de un cuarto;
- en un piso, desde arriba: un corte de planta a 1.2 m sobre ese piso, para que los muros muestren su parte baja.

{{ui:Borrar}} quita el corte y las mediciones. Si un [plano de sección](topic:section-plane) corta el modelo al empezar, el casco inicia con él.

## Colocar una incidencia

Elija {{ui:Incidencia}} y oprima el gatillo donde está el problema. Un alfiler numerado lo marca, y la incidencia pasa a la pestaña {{ui:Incidencias}} como un tema BCF, con una imagen de lo que vio y la cámara donde estuvo parado, en las coordenadas propias del modelo. Guárdelas junto con el resto de sus [incidencias](topic:issues-bcf) como archivo BCF; otras herramientas de coordinación las abren en la misma vista.

Agregue un comentario a una incidencia después de salir de RV, en la pestaña Incidencias: escribir en el casco todavía no está disponible.

## Verlo como maqueta de mesa

{{ui:Maqueta}} reduce el modelo para que quepa en una mesa frente a usted; camine a su alrededor, o gírelo con la palanca. {{ui:Tamaño real}} lo regresa a donde estaba.

## Con otros, en vivo

En una [sesión en vivo](topic:work-live), todos en RV ven a los otros como una cabeza y dos manos de su propio color, con su nombre, y un punto donde cada uno apunta. Las ediciones que hace cualquiera llegan a su casco en un momento. Las personas en el escritorio todavía no se muestran en el casco.

## Salir

Elija {{ui:Salir de RV}} (o quítese el casco y termine ahí). La vista 3D en la pantalla se mueve a donde estaba su cabeza.

:::note
Probado con un emulador de casco, aún no en todos los cascos. Un modelo grande puede hacer que el casco se entrecorte: oculte primero los niveles o modelos que no necesite ([ocultar y aislar](topic:hide-and-isolate)).
:::
