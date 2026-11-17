---
title: Revisar el modelo con un casco de RV
summary: Recorrer el modelo IFC a tamaño real con un casco de RV: desplazarse, girar, medir, cortar el modelo, colocar incidencias BCF con una imagen, verlo como maqueta de mesa y encontrar a los demás de una sesión en vivo.
keywords: rv, realidad virtual, casco, webxr, xr, inmersivo, quest, oculus, vive, index, pico, recorrer, recorrido, teletransporte, revisión de diseño, coordinación, revisión, medir, sección, corte, incidencia, incidencias, bcf, maqueta, modelo a escala, presencia, avatares, en vivo, juntos
from: 8994b36d
---

{{ui:VR}} de la barra de herramientas le pone dentro del modelo con un casco de RV, a tamaño real. Usted se sitúa donde está la cámara de la vista 3D, en el suelo bajo ella, mirando hacia el mismo lado. El casco muestra lo que muestra la vista 3D: las plantas, los elementos y los modelos ocultos siguen ocultos, y los materiales pintados se conservan. No se sube nada: el navegador lo dibuja en este equipo (o en el navegador del propio casco).

## Qué necesita

- Un casco que el navegador pueda manejar (WebXR): el navegador propio de un casco autónomo, o Chrome o Edge en un PC con un casco conectado.
- Un modelo IFC abierto, en una página segura (https), como ocurre en este sitio.

Cuando no hay casco, {{ui:VR}} aparece atenuado y dice por qué.

## Iniciar

1. Prepare la vista 3D donde quiera empezar: en una sala, o fuera mirando el edificio.
2. Haga clic en {{ui:VR}} en la barra de herramientas.
3. Póngase el casco.

El menú está en el dorso de la mano izquierda. Apúntelo con el mando derecho y apriete el gatillo para elegir un botón. (Con una sola mano, el menú flota delante de donde empezó.)

## Desplazarse

- **Saltar:** en {{ui:Move}}, apunte a un suelo y apriete el gatillo; aterriza allí. O empuje la palanca hacia delante para apuntar, y suéltela para saltar. Solo puede aterrizar en suelos, losas y terreno (superficies que miran hacia arriba), nunca en un muro.
- **Girar:** empuje la palanca a izquierda o derecha: gira 30° cada vez.
- **Caminar:** en su área de juego, simplemente camine.

## Medir

Elija {{ui:Measure}} y apriete el gatillo en dos puntos. La distancia se muestra entre ellos, en metros. Un punto cerca de una esquina se ajusta a la esquina.

## Cortar el modelo

Elija {{ui:Section}} y apriete el gatillo sobre una superficie:

- sobre un muro (o algo que no sea un suelo): se retira todo lo que hay entre usted y esa superficie, para ver hacia dentro. Funciona mejor desde fuera, o a través de una sala;
- sobre un suelo, desde arriba: un corte de planta a 1.2 m sobre ese suelo, para que los muros muestren su parte inferior.

{{ui:Clear}} quita el corte y las mediciones. Si un [plano de sección](topic:section-plane) corta el modelo al empezar, el casco arranca con él.

## Colocar una incidencia

Elija {{ui:Issue}} y apriete el gatillo donde está el problema. Un alfiler numerado lo marca, y la incidencia pasa a la pestaña {{ui:Issues}} como un tema BCF, con una imagen de lo que vio y la cámara donde estaba usted, en las coordenadas propias del modelo. Guárdelas junto con el resto de sus [incidencias](topic:issues-bcf) como archivo BCF; otras herramientas de coordinación las abren en la misma vista.

Añada un comentario a una incidencia después de salir de RV, en la pestaña Incidencias: escribir en el casco todavía no está implementado.

## Verlo como maqueta de mesa

{{ui:Table top}} reduce el modelo para que quepa en una mesa delante de usted; rodéelo andando, o gírelo con la palanca. {{ui:Full size}} le devuelve a donde estaba.

## Con otros, en vivo

En una [sesión en vivo](topic:work-live), cada persona en RV ve a los demás como una cabeza y dos manos de su color, con su nombre, y un punto donde cada una apunta. Las ediciones de cualquiera llegan a su casco en un momento. Las personas en el escritorio todavía no se muestran en el casco.

## Salir

Elija {{ui:Leave VR}} (o quítese el casco y termine allí). La vista 3D de la pantalla se mueve hasta donde estaba su cabeza.

:::note
Probado con un emulador de casco, todavía no en todos los cascos. Un modelo grande puede hacer que el casco se entrecorte: oculte antes las plantas o modelos que no necesite ([ocultar y aislar](topic:hide-and-isolate)).
:::
